/* ===== Parent: fix answers anywhere on the site, and import new practice for any section ===== */
const FX_ROOTS=[["BOARDS","vocabulary"],["GRAMMAR","grammar"],["TENSES","grammar"],["READINGS","reading"],["RD_PAPERS","reading"],["MC_TESTS","tests"],["CLASS_TESTS","tests"]];
const FX_SECS=[["vocabulary","Vocabulary"],["grammar","Grammar"],["reading","Reading"],["tests","Tests"]];
const FX_ROOTOBJ=()=>({BOARDS,GRAMMAR,TENSES,READINGS,RD_PAPERS,MC_TESTS,CLASS_TESTS});
const FX_ORIG={};let FX_SIG=null,FX_LIST=null;
const fxClone=v=>v===undefined?undefined:JSON.parse(JSON.stringify(v));
function fxMedia(){const m=S.media;if(!m.fix||typeof m.fix!=="object"||Array.isArray(m.fix))m.fix={};if(!Array.isArray(m.imports))m.imports=[];return m}
function fxGet(root,path){let v=FX_ROOTOBJ()[root];for(const k of path){if(v==null)return undefined;v=v[k]}return v}
function fxParent(root,path){return fxGet(root,path.slice(0,-1))}
const fxIsStrArr=a=>Array.isArray(a)&&a.every(x=>typeof x==="string");
/* what kind of answer a node holds */
function fxKind(v,path,root){
 if(typeof v==="string")return/\{[^{}]+\}/.test(v)&&!path.includes("cards")&&!path.includes("key")?"brace":null;
 if(Array.isArray(v)){if(root==="CLASS_TESTS"&&typeof v[0]==="string"&&["mc","gap","tf","order"].includes(v[0])&&v.length>=3)return"ct-"+v[0];return null}
 if(!v||typeof v!=="object")return null;
 if(v.type==="match"&&Array.isArray(v.left)&&Array.isArray(v.ans))return"match";
 const opts=Array.isArray(v.o)?v.o:Array.isArray(v.opts)?v.opts:null;
 if(opts&&typeof v.a==="number")return"obj";if(opts&&Array.isArray(v.a)&&v.a.every(x=>typeof x==="number"))return"obj";
 if(fxIsStrArr(v.a)&&v.a.length)return"obj";if(fxIsStrArr(v.acc))return"obj";if(Array.isArray(v.units))return"obj";
 if(typeof v.a==="string"&&typeof v.p==="string")return"obj";return null}
const FX_SKIP={TENSES:["lesson","quick","parts"],GRAMMAR:["lessons"]};
function fxWalk(){const out=[];const R=FX_ROOTOBJ();const seen=new Set();
 FX_ROOTS.forEach(([root,sec])=>{const walk=(v,path,crumb,group)=>{if(v&&typeof v==="object"){if(seen.has(v))return;seen.add(v)}if(path.length===2&&(FX_SKIP[root]||[]).includes(path[1]))return;
   if(root==="MC_TESTS"&&path.length===2&&(path[1]==="items"||path[1]==="pages"))return;
   const k=fxKind(v,path,root);if(k){out.push({id:root+"/"+path.join("/"),root,path,kind:k,sec,crumb:crumb.join(" › "),group});if(k!=="match"&&k!=="obj")return}
   if(Array.isArray(v))v.forEach((x,i)=>walk(x,path.concat(i),crumb,group));
   else if(v&&typeof v==="object"){const t=v.title||v.name||v.label;const c2=t&&typeof t==="string"&&path.length<6?crumb.concat(t):crumb;const g=group||(path.length===1&&t?t:group);
    Object.keys(v).forEach(key=>{if(key==="o"||key==="opts"||key==="a"||key==="acc"||key==="rej"||key==="units"||key==="ans")return;walk(v[key],path.concat(key),c2,path.length===1?(t||String(path[0])):g)})}};
  const top=R[root];if(Array.isArray(top))top.forEach((x,i)=>walk(x,[i],[],null));else Object.keys(top).forEach(k=>walk(top[k],[k],[],null))});
 return out}
function fxEntries(){if(!FX_LIST)FX_LIST=fxWalk();return FX_LIST}
/* apply saved fixes in place, keeping the original so it can be undone */
function fxApplyOne(id,val){const e=fxEntries().find(x=>x.id===id);if(!e)return;const{root,path}=e;const node=fxGet(root,path);if(node===undefined)return;
 if(!(id in FX_ORIG))FX_ORIG[id]=fxClone(node);fxSet(e,val)}
function fxSet(e,val){const{root,path}=e;if(e.kind==="brace"){fxParent(root,path)[path[path.length-1]]=val;return}const node=fxGet(root,path);
 if(Array.isArray(node)){node.splice(0,node.length,...fxClone(val))}else Object.assign(node,fxClone(val));
 if(root==="MC_TESTS"&&path[1]==="qs"){const T=MC_TESTS[path[0]];const i=path[2];const x=T.qs[i];if(T.items[i]){T.items[i][1]=x.o.slice();T.items[i][2]=x.a}
  const pi=Math.floor(i/MC_PAGE),b=i%MC_PAGE;const it=T.pages[pi]&&T.pages[pi].items&&T.pages[pi].items[b];if(it){if("o"in it)it.o=x.o.slice();if("a"in it)it.a=x.a}}}
function fixSync(){const m=fxMedia();const sig=JSON.stringify(m.fix);if(sig===FX_SIG)return;
 Object.keys(FX_ORIG).forEach(id=>{if(!(id in m.fix)){const e=fxEntries().find(x=>x.id===id);if(e)fxSet(e,FX_ORIG[id]);delete FX_ORIG[id]}});
 Object.entries(m.fix).forEach(([id,v])=>{try{fxApplyOne(id,v)}catch(err){}});FX_SIG=sig}
function fxSaveMedia(){fxMedia().updatedAt=Date.now();Store.save("media")}
/* text shown for an entry */
const fxStrip=s=>String(s==null?"":s).replace(/\[([^\]:]*:)?([^\]]*)\]/g,"$2");
function fxSummary(e){const v=fxGet(e.root,e.path);if(v===undefined)return{q:"",a:""};
 if(e.kind==="brace")return{q:fxStrip(v.replace(/\{([^}]*)\}/g,"___")),a:(v.match(/\{([^}]*)\}/g)||[]).map(x=>x.slice(1,-1).split("|").join(" / ")).join(" · ")};
 if(e.kind==="ct-mc")return{q:v[1],a:(v[2]||[])[v[3]]};if(e.kind==="ct-gap")return{q:v[1],a:(v[2]||[]).join(" / ")};
 if(e.kind==="ct-tf")return{q:v[1],a:["True","False","Not given"][v[3]]};if(e.kind==="ct-order")return{q:v[4]||"Put in order",a:v[1]};
 if(e.kind==="match")return{q:v.title||"Match",a:v.left.map((l,i)=>l.replace(/^\d+\.\s*/,"")+" → "+(v.right[v.ans[i]]||"?")).slice(0,3).join(" · ")+(v.left.length>3?" …":"")};
 const opts=v.o||v.opts;let a="";if(opts&&typeof v.a==="number")a=opts[v.a];else if(opts&&Array.isArray(v.a))a=v.a.map(i=>opts[i]).join(" + ");else if(fxIsStrArr(v.a))a=v.a.join(" / ");else if(v.acc)a=v.acc.join(" / ");else if(typeof v.a==="string")a=v.a;else if(v.ans)a=v.ans;else if(v.units)a=v.units.map(u=>u.join(", ")).join(" · ");
 return{q:fxStrip(v.q||v.stem||v.p||""),a}}
/* ---- parent tab: Answers ---- */
function pAnswers(){fixSync();const m=fxMedia();const sec=UI.fxSec||"vocabulary";const all=fxEntries();const inSec=all.filter(e=>e.sec===sec);
 const groups=[...new Set(inSec.map(e=>e.group||"Other"))];const g=UI.fxGroup&&groups.includes(UI.fxGroup)?UI.fxGroup:"";const q=(UI.fxQ||"").toLowerCase();
 let list=inSec.filter(e=>(!g||(e.group||"Other")===g)&&(!UI.fxOnly||e.id in m.fix));if(q)list=list.filter(e=>{const s=fxSummary(e);return(s.q+" "+s.a+" "+e.crumb).toLowerCase().includes(q)});
 const per=25,pages=Math.max(1,Math.ceil(list.length/per));const pg=Math.min(UI.fxPg||0,pages-1);const shown=list.slice(pg*per,pg*per+per);const nFix=Object.keys(m.fix).length;
 return`<section class="card kid-card"><div class="head"><div class="grow"><h2>Check and fix answers</h2><p class="small muted">Every question on the site is listed here with its answer key. If an answer is wrong, press Edit and change it. The fix is used for every student. ${nFix?`<b>${nFix} answer${nFix>1?"s":""} fixed.</b>`:""}</p></div></div>
 <div class="seg-tabs" role="group" aria-label="Section">${FX_SECS.map(([k,l])=>`<button class="${k===sec?"on":""}" data-act="fxsec" data-k="${k}">${l} <span class="n">${all.filter(e=>e.sec===k).length}</span></button>`).join("")}<a class="pill" href="#parent-cat4">CAT4 words</a></div>
 <div class="fx-tools"><div class="field"><label for="fx-group">Lesson or test</label><select id="fx-group" data-fx="group"><option value="">All (${inSec.length})</option>${groups.map(x=>`<option value="${esc(x)}" ${x===g?"selected":""}>${esc(x)}</option>`).join("")}</select></div>
 <div class="field"><label for="fx-q">Search</label><input id="fx-q" type="search" data-fx="q" value="${esc(UI.fxQ||"")}" placeholder="A word in the question or answer"></div>
 <label class="switch"><input type="checkbox" data-fx="only" ${UI.fxOnly?"checked":""}> Only fixed answers</label></div></section>
 <section class="card"><p class="small muted">${list.length} question${list.length===1?"":"s"}${pages>1?` · page ${pg+1} of ${pages}`:""}</p>
 <ol class="fx-list">${shown.map(e=>UI.fxEdit===e.id?`<li class="fx-item editing">${fxEditor(e)}</li>`:(()=>{const s=fxSummary(e);const fixed=e.id in m.fix;return`<li class="fx-item ${fixed?"fixed":""}"><div class="fx-main"><span class="fx-crumb">${esc(e.crumb)}</span><span class="fx-q">${esc(s.q)}</span><span class="fx-a"><b>Answer:</b> ${esc(s.a||"—")}</span></div><div class="fx-end">${fixed?`<span class="chip good">fixed</span>`:""}<button class="btn btn-sm" data-act="fxedit" data-id="${esc(e.id)}">Edit</button></div></li>`})()).join("")}</ol>
 ${list.length?"":`<p class="muted">No questions match.</p>`}
 ${pages>1?`<div class="row-actions"><button class="btn btn-sm" data-act="fxpg" data-d="-1" ${pg===0?"disabled":""}>${icon("left",16)} Previous</button><button class="btn btn-sm" data-act="fxpg" data-d="1" ${pg>=pages-1?"disabled":""}>Next ${icon("right",16)}</button></div>`:""}</section>`}
function fxEditor(e){const v=fxGet(e.root,e.path);const m=fxMedia();const id=esc(e.id);const lines=a=>esc((a||[]).join("\n"));let body="";
 const optEd=(opts,isMulti,ans)=>`<div class="field full"><span class="lbl">Options (tick the correct ${isMulti?"answers":"answer"})</span><ul class="fx-opts">${opts.map((o,i)=>`<li><input type="${isMulti?"checkbox":"radio"}" name="fx-right" value="${i}" aria-label="Correct answer ${i+1}" ${(isMulti?ans.includes(i):ans===i)?"checked":""}><input class="fx-opt" data-i="${i}" value="${esc(o)}" aria-label="Option ${i+1}"></li>`).join("")}</ul></div>`;
 if(e.kind==="brace")body=`<div class="field full"><label for="fx-text">Sentence. Put each answer in { }. Several right answers: {goes|go}</label><textarea id="fx-text" rows="3">${esc(v)}</textarea></div>`;
 else if(e.kind==="ct-mc")body=`<div class="field full"><label for="fx-qt">Question</label><input id="fx-qt" value="${esc(v[1])}"></div>${optEd(v[2],false,v[3])}<div class="field full"><label for="fx-why">Explanation</label><input id="fx-why" value="${esc(v[4]||"")}"></div>`;
 else if(e.kind==="ct-gap")body=`<div class="field full"><label for="fx-qt">Question</label><input id="fx-qt" value="${esc(v[1])}"></div><div class="field full"><label for="fx-acc">Right answers (one per line)</label><textarea id="fx-acc" rows="3">${lines(v[2])}</textarea></div><div class="field full"><label for="fx-why">Explanation</label><input id="fx-why" value="${esc(v[3]||"")}"></div>`;
 else if(e.kind==="ct-tf")body=`<div class="field full"><label for="fx-qt">Statement</label><input id="fx-qt" value="${esc(v[1])}"></div><div class="field"><label for="fx-tf">Answer</label><select id="fx-tf">${["True","False","Not given"].map((l,i)=>`<option value="${i}" ${v[3]===i?"selected":""}>${l}</option>`).join("")}</select></div><div class="field full"><label for="fx-why">Explanation</label><input id="fx-why" value="${esc(v[4]||"")}"></div>`;
 else if(e.kind==="ct-order")body=`<div class="field full"><label for="fx-qt">Right sentence</label><input id="fx-qt" value="${esc(v[1])}"></div><div class="field full"><label for="fx-acc">Other right sentences (one per line)</label><textarea id="fx-acc" rows="2">${lines(v[3])}</textarea></div><div class="field full"><label for="fx-why">Explanation</label><input id="fx-why" value="${esc(v[2]||"")}"></div>`;
 else if(e.kind==="match")body=`<div class="field full"><span class="lbl">Choose the right match for each item</span><ul class="fx-opts">${v.left.map((l,i)=>`<li><span class="fx-ml">${esc(l)}</span><select class="fx-match" data-i="${i}">${v.right.map((r,j)=>`<option value="${j}" ${v.ans[i]===j?"selected":""}>${String.fromCharCode(97+j)}. ${esc(r.slice(0,70))}</option>`).join("")}</select></li>`).join("")}</ul></div>`;
 else{const opts=v.o||v.opts;if("q"in v)body+=`<div class="field full"><label for="fx-qt">Question</label><input id="fx-qt" value="${esc(v.q)}"></div>`;
  if(opts&&(typeof v.a==="number"||Array.isArray(v.a)&&v.a.every(x=>typeof x==="number")))body+=optEd(opts,Array.isArray(v.a),v.a);
  else if(fxIsStrArr(v.a))body+=`<div class="field full"><label for="fx-acc">Right answers (one per line)</label><textarea id="fx-acc" rows="3">${lines(v.a)}</textarea></div>`;
  if(typeof v.a==="string")body+=`<div class="field full"><label for="fx-astr">Answer</label><input id="fx-astr" value="${esc(v.a)}"></div>`;
  if(v.acc)body+=`<div class="field full"><label for="fx-acc2">Accepted answers (one per line)</label><textarea id="fx-acc2" rows="3">${lines(v.acc)}</textarea></div>`;
  if(v.rej)body+=`<div class="field full"><label for="fx-rej">Do not accept (one per line)</label><textarea id="fx-rej" rows="2">${lines(v.rej)}</textarea></div>`;
  if(v.units)body+=`<div class="field full"><label for="fx-units">Mark points: one line per mark, key words separated by commas</label><textarea id="fx-units" rows="3">${esc(v.units.map(u=>u.join(", ")).join("\n"))}</textarea></div>`;
  if(typeof v.ans==="string")body+=`<div class="field full"><label for="fx-ans">Model answer</label><input id="fx-ans" value="${esc(v.ans)}"></div>`}
 return`<div class="fx-main"><span class="fx-crumb">${esc(e.crumb)}</span><div class="form-grid">${body}</div><div class="row-actions"><button class="btn btn-sm btn-primary" data-act="fxsave" data-id="${id}">Save</button><button class="btn btn-sm" data-act="fxedit" data-id="">Cancel</button>${e.id in m.fix?`<button class="btn btn-sm" data-act="fxundo" data-id="${id}">Back to the original</button>`:""}</div></div>`}
function fxRead(e){const v=fxGet(e.root,e.path);const g=id=>{const x=document.getElementById(id);return x?x.value:null};const L=id=>(g(id)||"").split(/\n/).map(s=>s.trim()).filter(Boolean);
 const opts=[...document.querySelectorAll(".fx-opt")].map(x=>x.value.trim());const checked=[...document.querySelectorAll('input[name="fx-right"]:checked')].map(x=>+x.value);
 if(e.kind==="brace"){const t=(g("fx-text")||"").trim();if(!/\{[^{}]+\}/.test(t))throw"Put the answer inside { }.";return t}
 if(e.kind==="ct-mc"){if(checked.length!==1)throw"Tick one correct answer.";const n=v.slice();n[1]=g("fx-qt");n[2]=opts;n[3]=checked[0];n[4]=g("fx-why");return n}
 if(e.kind==="ct-gap"){const a=L("fx-acc");if(!a.length)throw"Write at least one right answer.";const n=v.slice();n[1]=g("fx-qt");n[2]=a;n[3]=g("fx-why");return n}
 if(e.kind==="ct-tf"){const n=v.slice();n[1]=g("fx-qt");n[3]=+g("fx-tf");n[4]=g("fx-why");return n}
 if(e.kind==="ct-order"){const n=v.slice();n[1]=g("fx-qt");n[2]=g("fx-why");n[3]=L("fx-acc");return n}
 if(e.kind==="match"){return{ans:[...document.querySelectorAll(".fx-match")].map(x=>+x.value)}}
 const n={};if("q"in v&&g("fx-qt")!=null)n.q=g("fx-qt");const ok=v.o?"o":v.opts?"opts":null;
 if(ok&&document.querySelector(".fx-opt")){n[ok]=opts;if(Array.isArray(v.a)){if(!checked.length)throw"Tick at least one correct answer.";n.a=checked}else{if(checked.length!==1)throw"Tick one correct answer.";n.a=checked[0]}}
 else if(fxIsStrArr(v.a)){n.a=L("fx-acc");if(!n.a.length)throw"Write at least one right answer."}
 if(typeof v.a==="string")n.a=g("fx-astr");if(v.acc)n.acc=L("fx-acc2");if(v.rej)n.rej=L("fx-rej");if(v.units)n.units=L("fx-units").map(l=>l.split(",").map(s=>s.trim()).filter(Boolean));if(typeof v.ans==="string")n.ans=g("fx-ans");return n}
/* ---- parent tab: Import ---- */
const IMP_SECS=[["phonetics","Phonetics"],["vocabulary","Vocabulary"],["grammar","Grammar"],["reading","Reading"],["tests","Tests"],["cat4C","CAT4 Level C words"],["cat4D","CAT4 Level D words"]];
const IMP_HOME={phonetics:"#phonetics",vocabulary:"#vocabulary",grammar:"#grammar",reading:"#reading",tests:"#exam"};
function impParse(txt){const items=[],errs=[],pairs=[];String(txt||"").split(/\r?\n/).forEach((raw,li)=>{let line=raw.trim();if(!line||line.startsWith("#"))return;let why="";const w=line.indexOf("//");if(w>=0){why=line.slice(w+2).trim();line=line.slice(0,w).trim()}
 const om=line.match(/^order\s*:\s*(.+)$/i);if(om){items.push({kind:"order",sentence:om[1].trim(),why});return}
 if(!line.includes("|")&&/\s=\s/.test(line)){const[l,...r]=line.split(/\s=\s/);pairs.push([l.trim(),r.join(" = ").trim()]);return}
 const p=line.split("|").map(s=>s.trim());if(p.length<2||!p[0]){errs.push("Line "+(li+1)+": "+raw.slice(0,60));return}
 const star=p.slice(1).findIndex(x=>x.startsWith("*"));
 if(star>=0){const options=p.slice(1).map(x=>x.replace(/^\*\s*/,""));if(options.length<2){errs.push("Line "+(li+1)+": a choice question needs 2 or more options");return}items.push({kind:"mc",prompt:p[0],options,answer:star,why});return}
 if(p.length===2&&/^(t|f|true|false|ng|not given)$/i.test(p[1])){const a=/^t/i.test(p[1])?0:/^f/i.test(p[1])?1:2;items.push({kind:"tf",prompt:p[0],answer:a,why});return}
 if(/_{2,}/.test(p[0])){const acc=p.slice(1).join("/").split("/").map(s=>s.trim()).filter(Boolean);if(!acc.length){errs.push("Line "+(li+1)+": no answer after |");return}items.push({kind:"gap",prompt:p[0],accept:acc,why});return}
 errs.push("Line "+(li+1)+": I can’t tell the question type. Use ___ for a gap, * for the right option, True/False, or word = meaning.")});
 for(let i=0;i<pairs.length;i+=5){const g=pairs.slice(i,i+5);if(g.length>=2)items.push({kind:"pairs",pairs:g});else errs.push("A match group needs 2 or more “word = meaning” lines.")}
 return{items,errs}}
function impCount(items){const c={};items.forEach(x=>{const k={mc:"choice",gap:"gap",tf:"true/false",order:"word order",pairs:"match"}[x.kind];c[k]=(c[k]||0)+(x.kind==="pairs"?x.pairs.length:1)});return Object.entries(c).map(([k,n])=>n+" "+k).join(" · ")}
function pImport(){const m=fxMedia();const sec=UI.impSec||"vocabulary";const isC4=sec.startsWith("cat4");const pv=UI.impPrev;const ed=UI.impEdit?m.imports.find(x=>x.id===UI.impEdit):null;
 return`<section class="card kid-card"><div class="head"><div class="grow"><h2>${ed?"Edit imported practice":"Import practice"}</h2><p class="small muted">Paste questions as text, or load a .txt / .csv file. The practice appears in its section for every student.</p></div></div>
 <div class="form-grid"><div class="field"><label for="imp-sec">Section</label><select id="imp-sec" data-imp="sec">${IMP_SECS.map(([k,l])=>`<option value="${k}" ${k===sec?"selected":""}>${l}</option>`).join("")}</select></div>
 ${isC4?"":`<div class="field"><label for="imp-title">Title</label><input id="imp-title" maxlength="80" value="${esc(UI.impTitle||"")}" placeholder="e.g. Unit 3 · Past simple quiz"></div>`}
 <div class="field full"><label for="imp-text">${isC4?"Words: word | meaning | synonyms | antonyms | example sentence":"Questions, one per line"}</label><textarea id="imp-text" rows="10" placeholder="${isC4?"furious | giận dữ | angry, livid | calm | Dad was furious when the window broke.":"She ___ to school every day. | goes // present simple\nWhich word means “very big”? | tiny | *enormous | quick\nThe Earth is flat. | False\nOrder: I have lived here since 2010.\nfurious = very angry\ncalm = not worried"}">${esc(UI.impText||"")}</textarea></div></div>
 ${isC4?"":`<details class="imp-help"><summary>How to write each question type</summary><ul class="more-list small">
 <li><b>Gap</b>: put ___ where the answer goes, then | and the answer. Several right answers: <code>| goes / is going</code></li>
 <li><b>Multiple choice</b>: question | options, with * before the right one: <code>Pick the verb | *run | happy | table</code></li>
 <li><b>True / False</b>: <code>statement | True</code>, <code>| False</code> or <code>| Not given</code></li>
 <li><b>Word order</b>: <code>Order: the right sentence.</code> The words are mixed up for the student.</li>
 <li><b>Match</b>: one pair per line, <code>word = meaning</code>. Every 5 pairs make one match task.</li>
 <li><b>Explanation</b> (optional): add <code>// your note</code> at the end of any line.</li></ul></details>`}
 <div class="row-actions"><label class="btn btn-sm" for="imp-file">${icon("plus",16)} Load a file</label><input type="file" id="imp-file" accept=".txt,.csv,.tsv,text/plain,text/csv" class="sr"><button class="btn btn-sm" data-act="impcheck">Check</button><button class="btn btn-sm btn-primary" data-act="impsave">${ed?"Save changes":"Import"}</button>${ed?`<button class="btn btn-sm" data-act="impcancel">Cancel</button>`:""}</div>
 ${pv?`<div class="${pv.errs.length?"notice":"fb good"}" style="margin-top:10px"><strong>${pv.n?"Found: "+esc(pv.sum):"Nothing found yet"}</strong>${pv.errs.length?`<ul class="more-list small">${pv.errs.slice(0,8).map(x=>`<li>${esc(x)}</li>`).join("")}</ul>`:""}</div>`:""}</section>
 <section class="card"><h2 class="h-sm">Imported practice (${m.imports.length})</h2>${m.imports.length?`<ul class="list" style="margin-top:10px">${m.imports.slice().sort((a,b)=>b.at-a.at).map(x=>`<li class="row" style="cursor:default"><span class="tile-ic">${icon("clip")}</span><span class="main"><span class="t">${esc(x.title)}</span><span class="s">${esc((IMP_SECS.find(s=>s[0]===x.sec)||[,""])[1])} · ${esc(impCount(x.items))} · ${shortDate(x.at)}</span></span><span class="end">${UI.impRm===x.id?`<button class="btn btn-sm" data-act="imprm" data-id="${x.id}" data-ok="1">Delete</button><button class="btn btn-sm" data-act="imprm" data-id="">Keep</button>`:`<button class="btn btn-sm" data-act="impedit" data-id="${x.id}">Edit</button><button class="btn btn-sm" data-act="imprm" data-id="${x.id}">Delete</button>`}</span></li>`).join("")}</ul>`:`<p class="muted small">Nothing imported yet. CAT4 words you import are listed in Parent → CAT4.</p>`}</section>`}
/* ---- students: imported practice inside each section ---- */
function impSets(sec){return fxMedia().imports.filter(x=>x.sec===sec&&x.items&&x.items.length)}
function impBlock(sec){const L=impSets(sec);if(!L.length)return"";const r=rec();const done=r.imp||{};
 return`<div class="wrap wide"><section class="card imp-block"><div class="ex-head"><div><p class="eyebrow up">From your teacher</p><h2>Extra practice</h2></div></div><ul class="list">${L.map(x=>{const d=done[x.id];return`<li><button class="row" data-act="impstart" data-id="${x.id}"><span class="tile-ic">${icon("clip")}</span><span class="main"><span class="t">${esc(x.title)}</span><span class="s">${esc(impCount(x.items))}</span></span><span class="end">${d?`<span class="chip ${d.best===d.n?"good":"plain"}">Best ${d.best} / ${d.n}</span>`:`<span class="chip next">Start</span>`}</span></button></li>`}).join("")}</ul></section></div>`}
const IMP_SKILL={phonetics:"vocabulary",vocabulary:"vocabulary",grammar:"grammar",reading:"reading",tests:"grammar"};
function impItem(set,i){const x=set.items[i];if(!x)return null;const base={skill:IMP_SKILL[set.sec]||"vocabulary",ref:{k:"imp",s:set.id,i},why:x.why||""};
 if(x.kind==="mc")return Object.assign(base,{kind:"mc",prompt:x.prompt,options:x.options.slice(),answer:x.answer});
 if(x.kind==="tf"){const ng=set.items.some(y=>y.kind==="tf"&&y.answer===2);return Object.assign(base,{kind:"mc",instr:"True, false or not given?",prompt:x.prompt,options:ng?["True","False","Not given"]:["True","False"],answer:x.answer})}
 if(x.kind==="gap")return Object.assign(base,{kind:"gap",prompt:x.prompt,accept:x.accept.slice()});
 if(x.kind==="order")return Object.assign(base,{kind:"order",sentence:x.sentence,alts:[],context:"Put the words in the right order."});
 if(x.kind==="pairs")return{kind:"pairs",skill:base.skill,ref:{k:"p"},pairs:x.pairs.map(p=>p.slice())};return null}
function impStart(id){const set=fxMedia().imports.find(x=>x.id===id);if(!set)return;const items=set.items.map((_,i)=>impItem(set,i)).filter(Boolean);
 startQuiz({title:set.title,acc:"peach",items,again:()=>impStart(id),back:IMP_HOME[set.sec]||"#today",onDone(q){const n=q.res.filter(r=>r.it.kind!=="pairs").length;const ok=q.res.filter(r=>r.it.kind!=="pairs"&&r.ok).length;const r=rec();r.imp=r.imp||{};const p=r.imp[id];r.imp[id]={best:Math.max(ok,p?p.best:0),n,at:Date.now()};markStage("imp:"+id,IMP_SKILL[set.sec]==="reading"?"reading":IMP_SKILL[set.sec]==="grammar"?"grammar":"vocab")}})}
Object.assign(ACT,{
 fxsec(el){UI.fxSec=el.dataset.k;UI.fxGroup="";UI.fxPg=0;UI.fxEdit=null;render()},
 fxpg(el){UI.fxPg=Math.max(0,(UI.fxPg||0)+ +el.dataset.d);UI.fxEdit=null;render();const t=document.querySelector(".fx-list");if(t)t.scrollIntoView({block:"start"})},
 fxedit(el){UI.fxEdit=el.dataset.id||null;render()},
 fxsave(el){const id=el.dataset.id;const e=fxEntries().find(x=>x.id===id);if(!e)return;let nv;try{nv=fxRead(e)}catch(err){toast(String(err));return}
  if(!(id in FX_ORIG))FX_ORIG[id]=fxClone(fxGet(e.root,e.path));fxSet(e,nv);const m=fxMedia();
  const orig=FX_ORIG[id];m.fix[id]=e.kind==="brace"||Array.isArray(orig)?nv:Object.assign({},fxClone(Object.fromEntries(Object.keys(nv).map(k=>[k,orig[k]]))),nv);
  if(JSON.stringify(fxGet(e.root,e.path))===JSON.stringify(orig)){fxSet(e,orig);delete m.fix[id];delete FX_ORIG[id]}
  FX_SIG=JSON.stringify(m.fix);UI.fxEdit=null;fxSaveMedia();toast("Saved. Students get the fixed answer now.");render()},
 fxundo(el){const id=el.dataset.id;const e=fxEntries().find(x=>x.id===id);const m=fxMedia();if(e&&id in FX_ORIG)fxSet(e,FX_ORIG[id]);delete FX_ORIG[id];delete m.fix[id];FX_SIG=JSON.stringify(m.fix);UI.fxEdit=null;fxSaveMedia();toast("Back to the original answer.");render()},
 impcheck(){const t=(document.getElementById("imp-text")||{}).value||"";UI.impText=t;const sec=UI.impSec||"vocabulary";
  if(sec.startsWith("cat4")){const n=c4ParseImport(t).length;UI.impPrev={n,sum:n+" words",errs:[]};render();return}
  const p=impParse(t);UI.impPrev={n:p.items.length,sum:impCount(p.items),errs:p.errs};render()},
 impsave(){const t=(document.getElementById("imp-text")||{}).value||"";const ti=(document.getElementById("imp-title")||{}).value;UI.impText=t;if(ti!=null)UI.impTitle=ti;const sec=UI.impSec||"vocabulary";
  if(sec.startsWith("cat4")){UI.pc4lv=sec.slice(4);pc4Import(t);UI.impText="";UI.impPrev=null;return}
  const p=impParse(t);if(!p.items.length){UI.impPrev={n:0,sum:"",errs:p.errs.length?p.errs:["No questions found."]};render();return}
  const m=fxMedia();const title=(UI.impTitle||"").trim()||"Practice "+new Date().toLocaleDateString("en-GB");
  if(UI.impEdit){const x=m.imports.find(y=>y.id===UI.impEdit);if(x)Object.assign(x,{sec,title,src:t,items:p.items})}
  else m.imports.push({id:"imp"+Date.now().toString(36),sec,title,src:t,items:p.items,at:Date.now()});
  UI.impEdit=null;UI.impText="";UI.impTitle="";UI.impPrev=null;fxSaveMedia();toast(p.items.length+" questions saved"+(p.errs.length?" ("+p.errs.length+" lines skipped)":"")+".");render()},
 impedit(el){const x=fxMedia().imports.find(y=>y.id===el.dataset.id);if(!x)return;UI.impEdit=x.id;UI.impSec=x.sec;UI.impTitle=x.title;UI.impText=x.src||"";UI.impPrev=null;render();window.scrollTo(0,0)},
 impcancel(){UI.impEdit=null;UI.impText="";UI.impTitle="";UI.impPrev=null;render()},
 imprm(el){const id=el.dataset.id;if(!id){UI.impRm=null;render();return}if(!el.dataset.ok){UI.impRm=id;render();return}const m=fxMedia();m.imports=m.imports.filter(x=>x.id!==id);UI.impRm=null;fxSaveMedia();toast("Deleted.");render()},
 impstart(el){impStart(el.dataset.id)}
});
document.addEventListener("input",e=>{const el=e.target;if(!el||!el.dataset)return;if(el.id==="imp-text"){UI.impText=el.value;return}if(el.id==="imp-title"){UI.impTitle=el.value;return}
 if(el.dataset.fx==="q"){UI.fxQ=el.value;UI.fxPg=0;const pos=el.selectionStart;render();const s=document.getElementById("fx-q");if(s){s.focus();try{s.setSelectionRange(pos,pos)}catch(x){}}}});
document.addEventListener("change",e=>{const el=e.target;if(!el||!el.dataset)return;
 if(el.dataset.fx==="group"){UI.fxGroup=el.value;UI.fxPg=0;render()}else if(el.dataset.fx==="only"){UI.fxOnly=el.checked;UI.fxPg=0;render()}
 else if(el.dataset.imp==="sec"){UI.impSec=el.value;UI.impPrev=null;render()}
 else if(el.id==="imp-file"&&el.files&&el.files[0]){const rd=new FileReader();rd.onload=()=>{UI.impText=String(rd.result||"");UI.impPrev=null;render();toast("File loaded. Press Check to see what was found.")};rd.readAsText(el.files[0])}});
