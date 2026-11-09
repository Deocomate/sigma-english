/* ===== CAT4 vocabulary (Level C & D): a daily plan from 9 Nov to 20 Dec 2026 ===== */
const C4BASE=__C4DATA__;
let C4={C:[],D:[]},C4SIG=null;
const C4_START=new Date(2026,10,9),C4_END=new Date(2026,11,20);
const C4_DAYS=Math.round((C4_END-C4_START)/864e5)+1;
const C4_LV={C:{t:"Level C",s:"Grade 5 · born 2017"},D:{t:"Level D",s:"Grade 6 · born 2016"}};
const C4_STEPS=[["fc","Flashcards"],["mt","Match"],["se","Fill in the sentence"],["cx","Fill in the text"]];
const C4_WD=["Sun","Mon","Tue","Wed","Thu","Fri","Sat"];
function c4Date(i){const d=new Date(C4_START);d.setDate(d.getDate()+i);return d}
const c4Fmt=d=>d.getDate()+"/"+(d.getMonth()+1);
function c4TodayIdx(){const n=new Date();const t=new Date(n.getFullYear(),n.getMonth(),n.getDate());return Math.round((t-C4_START)/864e5)}
const c4IsReview=i=>c4Date(i).getDay()===0||i===C4_DAYS-1;
const C4PLAN={};
/* parent changes live in S.media.cat4: edits to the built-in words, and imported words */
function c4Media(){const m=S.media;if(!m.cat4||typeof m.cat4!=="object")m.cat4={};const c=m.cat4;if(!c.edits||typeof c.edits!=="object")c.edits={};if(!c.extra||typeof c.extra!=="object")c.extra={};["C","D"].forEach(l=>{if(!Array.isArray(c.extra[l]))c.extra[l]=[]});return c}
function c4Sync(){const m=c4Media();const sig=JSON.stringify(m);if(sig===C4SIG)return;C4SIG=sig;
 ["C","D"].forEach(lv=>{const base=C4BASE[lv].map((e,i)=>Object.assign({},e,m.edits[lv+":"+i]||{},{id:lv+":"+i,src:"base"}));
  const ex=m.extra[lv].map(e=>Object.assign({t:"Imported words"},e,{src:"import"}));C4[lv]=base.concat(ex)});
 Object.keys(C4PLAN).forEach(k=>delete C4PLAN[k])}
function c4SaveMedia(){c4Media().updatedAt=Date.now();Store.save("media");C4SIG=null;c4Sync()}
function c4FindForm(w,ex){if(!ex)return w;const toks=ex.match(/[A-Za-z][A-Za-z'-]*/g)||[];const wl=w.toLowerCase();
 let t=toks.find(x=>x.toLowerCase()===wl);if(t)return t;
 const stem=wl.replace(/[ey]$/,"");if(stem.length>=3)t=toks.find(x=>x.toLowerCase().startsWith(stem)&&x.length-wl.length<=4);return t||w}
function c4Plan(lv){c4Sync();if(C4PLAN[lv])return C4PLAN[lv];const all=C4[lv];const nb=C4BASE[lv].length;const study=[];for(let i=0;i<C4_DAYS;i++)if(!c4IsReview(i))study.push(i);
 const words={};study.forEach(i=>words[i]=[]);
 const spread=(ids,days)=>{if(!days.length)days=[study[study.length-1]];const base=Math.floor(ids.length/days.length),extra=ids.length%days.length;let p=0;days.forEach((d,j)=>{const c=base+(j<extra?1:0);for(let x=0;x<c;x++)words[d].push(ids[p++])})};
 spread(Array.from({length:nb},(_,x)=>x),study);
 const batches={};all.forEach((e,x)=>{if(x>=nb){const f=Math.max(0,e.from||0);(batches[f]=batches[f]||[]).push(x)}});
 Object.keys(batches).forEach(f=>spread(batches[f],study.filter(i=>i>=+f)));
 const days=[];for(let i=0;i<C4_DAYS;i++){if(c4IsReview(i))days.push({i,review:true,words:days.filter(d=>d.i>i-7&&!d.review).flatMap(d=>d.words)});else days.push({i,review:false,words:words[i]})}
 return C4PLAN[lv]=days}
function c4R(){const r=rec();if(!r.cat4||typeof r.cat4!=="object"||Array.isArray(r.cat4))r.cat4={lv:"",d:{},hard:{}};const c=r.cat4;if(!c.d||typeof c.d!=="object")c.d={};if(!c.hard||typeof c.hard!=="object")c.hard={};return c}
const c4Key=(lv,i)=>lv+":"+i;
function c4DayRec(i){const c=c4R();const k=c4Key(c.lv,i);return c.d[k]||(c.d[k]={})}
function c4DayDone(c,i){const d=c.d[c4Key(c.lv,i)];return!!d&&C4_STEPS.every(([s])=>d[s])}
function c4Started(c,i){const d=c.d[c4Key(c.lv,i)];return!!d&&C4_STEPS.some(([s])=>d[s])}
function c4Stats(r){const c=r.cat4;if(!c||!c.lv)return{done:0,total:C4_DAYS};let done=0;for(let i=0;i<C4_DAYS;i++){const d=c.d&&c.d[c4Key(c.lv,i)];if(d&&C4_STEPS.every(([s])=>d[s]))done++}return{done,total:C4_DAYS}}
function c4HardList(c){return Object.keys(c.hard).filter(k=>c.hard[k]&&k.startsWith(c.lv+":")).map(k=>+k.split(":")[1]).filter(x=>C4[c.lv][x])}
/* the words of a day: i>=0 a plan day, i=-1 the tricky-word set */
function c4Words(i){c4Sync();const c=c4R();const lv=c.lv;let ids;if(i===-1)ids=c4HardList(c);else{ids=c4Plan(lv)[i].words.slice();if(i===C4_DAYS-1)c4HardList(c).forEach(x=>{if(!ids.includes(x))ids.push(x)})}
 return ids.filter(x=>C4[lv][x]).map(x=>({k:x,e:C4[lv][x]}))}
function c4Save(){saveRec();saveLocal()}
function c4LvStat(lv){const c=c4R();const cur=c.lv;c.lv=lv;let done=0;for(let i=0;i<C4_DAYS;i++)if(c4DayDone(c,i))done++;c.lv=cur;return done}
function c4Pick(){const t=c4TodayIdx();return`<section class="card c4-pick"><p class="eyebrow up">CAT4 Verbal</p><h2>Choose your level</h2><p class="muted">Each level has its own plan and progress. Come back here any time to switch.</p>
 <div class="c4-lvs">${Object.entries(C4_LV).map(([k,v])=>{const d=c4LvStat(k);return`<button class="c4-lv" data-act="c4lv" data-lv="${k}"><b>${v.t}</b><span>${v.s}</span><span class="muted small">${C4[k].length} words · ${C4_DAYS} days</span><span class="bar c4-lvbar"><span style="width:${Math.round(d/C4_DAYS*100)}%"></span></span><span class="small"><b>${d} / ${C4_DAYS}</b> days done${t>=0&&t<C4_DAYS?` · Today: day ${t+1}`:""}</span></button>`}).join("")}</div>
 ${student()?"":`<p class="notice">Tap <button class="link" data-act="name">Your account</button> and write your name to save your progress.</p>`}</section>`}
function c4View(){c4Sync();const c=c4R();if(!UI.c4lv||!c.lv)return c4Pick();if(UI.c4&&UI.c4.day!=null)return c4DayView();return c4Home()}
function c4Home(){const c=c4R();const lv=c.lv;const plan=c4Plan(lv);const t=c4TodayIdx();const st=c4Stats(rec());
 const learned=plan.filter(d=>!d.review&&c4DayDone(c,d.i)).reduce((a,d)=>a+d.words.length,0);const hard=c4HardList(c);
 const left=Math.max(0,C4_DAYS-1-Math.max(t,0));const missed=plan.filter(d=>d.i<t&&!c4DayDone(c,d.i));
 let today="";if(t>=0&&t<C4_DAYS){const d=plan[t];today=`<section class="card c4-today"><div><p class="eyebrow up">Today · ${C4_WD[c4Date(t).getDay()]} ${c4Fmt(c4Date(t))}</p><h2>Day ${t+1}: ${d.review?"Weekly review ("+d.words.length+" words)":d.words.length+" new words"}</h2>
  <p class="muted">${c4DayDone(c,t)?"Today’s work is done. Well done!":d.review?"Review the words from this week.":d.words.map(x=>esc(C4[lv][x].w)).join(" · ")}</p></div>
  <button class="btn btn-primary" data-act="c4day" data-i="${t}">${c4DayDone(c,t)?"Do it again":c4Started(c,t)?"Continue":"Start"} ${icon("right",18)}</button></section>`}
 else if(t<0)today=`<section class="card"><h2>The plan starts on ${c4Fmt(C4_START)}</h2></section>`;
 else today=`<section class="card"><h2>The plan finished on 20/12</h2><p class="muted">Open any day again, or review your tricky words.</p></section>`;
 const weeks=[];for(let i=0;i<C4_DAYS;i+=7)weeks.push(plan.slice(i,i+7));
 const cal=`<section class="card"><div class="ex-head"><h2 class="h-sm">Study plan ${c4Fmt(C4_START)} – ${c4Fmt(C4_END)}</h2><span class="legend"><span><i class="c4-dot done"></i>Done</span><span><i class="c4-dot part"></i>Started</span><span><i class="c4-dot miss"></i>Not done</span></span></div>
 ${weeks.map((w,wi)=>`<div class="c4-week"><p class="group-h">Week ${wi+1}</p><div class="c4-cal">${w.map(d=>{const dt=c4Date(d.i);const s=c4DayDone(c,d.i)?"done":c4Started(c,d.i)?"part":d.i<t?"miss":"";
  return`<button class="c4-dc ${s} ${d.i===t?"today":""} ${d.review?"rev":""}" data-act="c4day" data-i="${d.i}" aria-label="Day ${d.i+1}, ${c4Fmt(dt)}"><span class="c4-dw">${C4_WD[dt.getDay()]} ${c4Fmt(dt)}</span><b>${d.review?"Review":d.words.length+" words"}</b><span class="c4-ds">${s==="done"?icon("check",14):d.i===t?"Today":""}</span></button>`}).join("")}</div></div>`).join("")}</section>`;
 return`<section class="card c4-head"><div class="c4-head-top"><div><p class="eyebrow up">CAT4 Verbal · ${esc(C4_LV[lv].s)}</p><h2>${C4_LV[lv].t}</h2></div><button class="pill" data-act="c4back">${icon("left",16)} Choose level</button></div>
  <div class="stats3"><div class="stat"><b>${st.done} / ${C4_DAYS}</b><span>days done</span></div><div class="stat"><b>${learned} / ${C4[lv].length}</b><span>words learned</span></div><div class="stat"><b>${left}</b><span>days left until 20/12</span></div></div>
  <div class="bar" style="margin-top:12px"><span style="width:${Math.round(st.done/C4_DAYS*100)}%"></span></div></section>
 ${today}
 ${missed.length?`<section class="notice c4-miss">${missed.length} earlier day${missed.length>1?"s are":" is"} not finished yet. <button class="link" data-act="c4day" data-i="${missed[0].i}">Catch up: day ${missed[0].i+1} (${c4Fmt(c4Date(missed[0].i))})</button></section>`:""}
 ${cal}
 <section class="card"><div class="ex-head"><div><h2 class="h-sm">Tricky words (${hard.length})</h2><p class="muted small">Tap “Mark as tricky” on a flashcard to add a word here. On 20/12 you will review them all.</p></div>${hard.length?`<button class="btn btn-sm" data-act="c4day" data-i="-1">Review tricky words</button>`:""}</div>
 ${hard.length?`<p class="c4-hardlist">${hard.map(x=>`<span class="chip plain">${esc(C4[lv][x].w)}</span>`).join(" ")}</p>`:""}</section>`}
/* ---- day ---- */
function c4Open(i){const ws=c4Words(i);UI.c4={day:i,step:"fc",fc:{i:0,flip:false,order:ws.map((_,j)=>j)}};c4Prep("mt");c4Prep("se");c4Prep("cx");const d=i>=0?c4DayRec(i):{};const first=C4_STEPS.find(([s])=>!d[s]);UI.c4.step=first?first[0]:"fc"}
function c4Chunks(a,n){const o=[];for(let i=0;i<a.length;i+=n)o.push(a.slice(i,i+n));return o}
function c4Distract(lv,e,n){const all=C4[lv];const same=shuffle(all.filter(x=>x!==e&&x.t===e.t&&(!e.g||x.g!==e.g)));const rest=shuffle(all.filter(x=>x!==e&&x.t!==e.t));return same.concat(rest).slice(0,n)}
function c4Prep(step){const s=UI.c4;const lv=c4R().lv;let ws=c4Words(s.day);const big=s.day<0||c4IsReview(s.day)||ws.length>8;const withEx=ws.filter(x=>x.e.ex&&x.e.f);
 if(step==="mt"){const pick=big?shuffle(ws).slice(0,12):ws;const rounds=c4Chunks(shuffle(pick),6).map(ch=>({kind:"vi",items:ch.map(x=>({k:x.k,l:x.e.w,r:x.e.vi}))}));
  const syn=shuffle(pick.filter(x=>x.e.syn));if(syn.length>=3)c4Chunks(syn,6).forEach(ch=>{if(ch.length>=3)rounds.push({kind:"syn",items:ch.map(x=>({k:x.k,l:x.e.w,r:x.e.syn}))})});
  s.mt={ri:0,rounds:rounds.map(r=>Object.assign(r,{left:shuffle(r.items),right:shuffle(r.items)})),sel:null,ok:{},bad:null,err:0}}
 if(step==="se"){const pick=big?shuffle(withEx).slice(0,12):shuffle(withEx);s.se={i:0,pick:null,score:0,items:pick.map(x=>({k:x.k,opts:shuffle([x.e,...c4Distract(lv,x.e,3)])}))}}
 if(step==="cx"){const pick=big?shuffle(withEx).slice(0,12):shuffle(withEx);s.cxBank=null;s.cx={gi:0,checked:false,vals:{},groups:c4Chunks(pick,6).map(g=>g.map(x=>x.k)),score:0,total:0}}}
function c4Mark(step,val){const s=UI.c4;if(s.day<0)return;const d=c4DayRec(s.day);d[step]=val||1;c4Save()}
const c4Re=f=>new RegExp("\\b"+String(f).replace(/[.*+?^${}()|[\]\\]/g,"\\$&")+"\\b","i");
function c4Blank(ex,f,inner){const m=c4Re(f).exec(ex);if(!m)return esc(ex)+" "+inner;return esc(ex.slice(0,m.index))+inner+esc(ex.slice(m.index+m[0].length))}
function c4Bold(ex,f){const m=c4Re(f).exec(ex);return c4Blank(ex,f,`<b class="c4-hl">${esc(m?m[0]:f)}</b>`)}
function c4DayView(){const s=UI.c4;const c=c4R();const lv=c.lv;const i=s.day;const ws=c4Words(i);
 const title=i<0?"Tricky words":`Day ${i+1} · ${C4_WD[c4Date(i).getDay()]} ${c4Fmt(c4Date(i))}`;
 const sub=i<0?ws.length+" words marked as tricky":c4IsReview(i)?"Review: "+ws.length+" words from this week"+(i===C4_DAYS-1?" and your tricky words":""):ws.length+" new words · "+esc(ws[0]?ws[0].e.t:"");
 const d=i>=0?(c.d[c4Key(lv,i)]||{}):{};
 const head=`<button class="back link" data-act="c4home">${icon("left",18)} ${C4_LV[lv].t} plan</button><div class="lesson-head c4-dayhead"><p class="eyebrow up">${C4_LV[lv].t}</p><h2>${title}</h2><p class="muted">${sub}</p></div>`;
 if(!ws.length)return head+`<section class="card center-card"><h2>No words yet</h2><p class="muted">${i<0?"No words are marked as tricky yet.":"There are no words for this day."}</p></section>`;
 const steps=stepper(C4_STEPS,s.step,k=>!!d[k],"c4step");
 const body={fc:c4FC,mt:c4MT,se:c4SE,cx:c4CX,end:c4End}[s.step](ws,lv);
 return`${head}${steps}${body}`}
function c4End(){const s=UI.c4;const i=s.day;const next=i>=0&&i<C4_DAYS-1?i+1:null;return`<section class="card center-card">${avatar("owl",64)}<h2>All 4 tasks done!</h2><p class="muted">${i<0?"You reviewed all your tricky words.":"Day "+(i+1)+" is complete."}</p><div class="row-actions"><button class="btn" data-act="c4back">${icon("left",16)} Choose level</button><button class="btn" data-act="c4home">Back to the plan</button>${next!=null?`<button class="btn btn-primary" data-act="c4day" data-i="${next}">Go to day ${next+1}</button>`:""}</div></section>`}
function c4NoEx(step){return`<section class="card center-card"><h2>No sentences for these words</h2><p class="muted">The words for this day have no example sentence yet. A parent can add one in Parent → CAT4.</p><button class="btn btn-primary" data-act="c4skip" data-s="${step}">Mark as done ${icon("right",18)}</button></section>`}
function c4FC(ws,lv){const f=UI.c4.fc;const x=ws[f.order[f.i]];if(!x)return"";const e=x.e;const c=c4R();const hk=c4Key(lv,x.k);const hard=!!c.hard[hk];
 const face=f.flip?`<div class="fc-face"><span class="fc-lab">Meaning</span><span class="fc-vi">${esc(e.vi)}</span>${e.syn?`<span class="c4-rel"><b>≈</b> ${esc(e.syn)}</span>`:""}${e.ant?`<span class="c4-rel"><b>≠</b> ${esc(e.ant)}</span>`:""}${e.g?`<span class="chip plain">Group: ${esc(e.g)}</span>`:""}${e.ex?`<span class="fc-ex">${c4Bold(e.ex,e.f||e.w)}</span>`:""}</div>`
  :`<div class="fc-face"><span class="fc-lab">${esc(e.g||e.t)}</span><span class="fc-term">${esc(e.w)}</span><button class="pill sm" data-act="say" data-t="${esc(e.w)}">${icon("speaker",16)} Listen</button></div>`;
 return`<section class="c4-fcw"><div class="fc-top"><span class="chip plain">${f.i+1} / ${ws.length}</span><button class="pill ${hard?"on-good":""}" data-act="c4hard" data-k="${x.k}">${hard?icon("check",14)+" Tricky word":"Mark as tricky"}</button></div>
 <div class="c4-card ${f.flip?"flipped":""}" data-act="c4flip" role="button" tabindex="0" aria-label="Flip the card">${face}<span class="fc-hint">Tap the card to flip · ← → keys</span></div>
 <div class="fc-ctrl"><button class="btn" data-act="c4fc" data-d="-1" ${f.i===0?"disabled":""}>${icon("left",18)} Back</button><button class="btn" data-act="c4flip">Flip</button><button class="btn btn-primary" data-act="c4fc" data-d="1">${f.i===ws.length-1?"Finish":"Next"} ${icon("right",18)}</button></div></section>`}
function c4MT(){const m=UI.c4.mt;const r=m.rounds[m.ri];if(!r)return c4NoEx("mt");
 return`<section class="card"><div class="ex-head"><h3>Match each word with ${r.kind==="vi"?"its meaning":"its synonym"}</h3><span class="chip plain">Round ${m.ri+1} / ${m.rounds.length}</span></div>
 <p class="muted small">Tap a word on the left, then its match on the right.</p>
 <div class="pairs"><div class="pcol">${r.left.map(x=>`<button class="pcard ${m.ok[x.k]?"matched":""} ${m.sel===x.k?"sel":""} ${m.bad&&m.bad[0]===x.k?"bad":""}" data-act="c4ml" data-k="${x.k}" ${m.ok[x.k]?"disabled":""}>${esc(x.l)}</button>`).join("")}</div>
 <div class="pcol">${r.right.map(x=>`<button class="pcard r ${m.ok[x.k]?"matched":""} ${m.bad&&m.bad[1]===x.k?"bad":""}" data-act="c4mr" data-k="${x.k}" ${m.ok[x.k]?"disabled":""}>${esc(x.r)}</button>`).join("")}</div></div>
 <p class="muted small">Wrong tries: ${m.err}</p></section>`}
function c4SE(ws,lv){const q=UI.c4.se;const it=q.items[q.i];if(!it)return c4NoEx("se");const e=C4[lv][it.k];const done=q.pick!=null;
 return`<section class="card"><div class="ex-head"><h3>Choose the word that fits the gap</h3><span class="chip plain">Question ${q.i+1} / ${q.items.length} · Correct ${q.score}</span></div>
 <p class="prompt">${done?c4Bold(e.ex,e.f):c4Blank(e.ex,e.f,'<span class="blank"></span>')}</p>
 <p class="muted small">The options show the base form. In the sentence the word may change (sink → sank).</p>
 <div class="opts">${it.opts.map((o,j)=>{const right=o===e;const cls=done?(right?"is-right":(q.pick===j?"is-wrong":"is-out")):"";return`<button class="opt ${cls}" data-act="c4se" data-j="${j}" ${done?"disabled":""}><span class="k">${"ABCD"[j]}</span>${esc(o.w)}</button>`}).join("")}</div>
 ${done?`<div class="fb ${it.opts[q.pick]===e?"good":"oops"}"><strong>${it.opts[q.pick]===e?"Correct!":"Not quite"}</strong><span>${esc(e.w)}${e.f.toLowerCase()!==e.w.toLowerCase()?" → "+esc(e.f):""} = ${esc(e.vi)}</span></div><button class="btn btn-primary" id="next-btn" data-act="c4senext">${q.i===q.items.length-1?"Finish":"Next question"} ${icon("right",18)}</button>`:""}</section>`}
function c4CX(ws,lv){const x=UI.c4.cx;const g=x.groups[x.gi];if(!g)return c4NoEx("cx");let n=0;
 const para=g.map(k=>{const e=C4[lv][k];n++;const v=x.vals[k]||"";const ok=x.checked?c4Ok(e,v):null;
  const inp=`<span class="bl ${ok===true?"ok":ok===false?"bad":""}"><b class="c4-num">${n}</b><input data-c4x="${k}" value="${esc(v)}" size="${Math.max(6,e.f.length+1)}" autocomplete="off" autocapitalize="off" spellcheck="false" aria-label="Gap ${n}" ${x.checked?"disabled":""}>${ok===false?`<span class="ans">${esc(e.f)}</span>`:""}</span>`;
  return c4Blank(e.ex,e.f,inp)}).join(" ");
 if(!UI.c4.cxBank||UI.c4.cxBank.gi!==x.gi)UI.c4.cxBank={gi:x.gi,html:shuffle(g.map(k=>C4[lv][k].w)).map(w=>`<span>${esc(w)}</span>`).join("")};
 return`<section class="card"><div class="ex-head"><h3>Read the text and write a word in each gap</h3><span class="chip plain">Text ${x.gi+1} / ${x.groups.length}</span></div>
 <p class="muted small">Use the words in the box. Change the form if you need to (-s, -ed, …).</p>
 <div class="wbox">${UI.c4.cxBank.html}</div>
 <p class="cloze c4-para">${para}</p>
 ${x.checked?`<div class="fb ${x.last===g.length?"good":"oops"}"><strong>${x.last} / ${g.length} correct</strong></div><button class="btn btn-primary" id="next-btn" data-act="c4cxnext">${x.gi===x.groups.length-1?"Finish":"Next text"} ${icon("right",18)}</button>`:`<button class="btn btn-primary" data-act="c4cxcheck">Check</button>`}</section>`}
function c4Ok(e,v){v=String(v||"").trim().toLowerCase().replace(/[’]/g,"'");return!!v&&(v===String(e.f).toLowerCase()||v===e.w.toLowerCase())}
function c4Next(){const s=UI.c4;const i=C4_STEPS.findIndex(([k])=>k===s.step);s.step=i<C4_STEPS.length-1?C4_STEPS[i+1][0]:"end";render();c4Top()}
function c4Top(){const h=document.querySelector(".c4-dayhead");if(h)h.scrollIntoView({block:"start"});else window.scrollTo(0,0)}
/* ---- parent: check answers and import ---- */
function c4ParseImport(txt){const out=[];String(txt||"").split(/\r?\n/).forEach(line=>{line=line.trim();if(!line||line.startsWith("#"))return;
 let p;if(line.includes("|"))p=line.split("|");else if(line.includes("\t"))p=line.split("\t");else if(line.includes(";"))p=line.split(";");else if(/\s[-–—]\s/.test(line))p=line.split(/\s[-–—]\s/);else p=[line];
 p=p.map(x=>x.trim());const[w,vi,syn,ant,...rest]=p;const ex=rest.join(" | ").trim();if(!w)return;
 if(/^(word|term|từ)$/i.test(w))return;out.push({w,vi:vi||"",syn:syn||"",ant:ant||"",ex,f:c4FindForm(w,ex)})});return out}
function pCat4(){c4Sync();const lv=UI.pc4lv||"C";const m=c4Media();const q=(UI.pc4q||"").toLowerCase();const plan=c4Plan(lv);const dayOf={};plan.forEach(d=>{if(!d.review)d.words.forEach(x=>dayOf[x]=d.i)});
 const rows=C4[lv].map((e,x)=>({e,x})).filter(({e})=>!q||[e.w,e.vi,e.syn,e.ant,e.ex].join(" ").toLowerCase().includes(q));
 const edited=Object.keys(m.edits).filter(k=>k.startsWith(lv+":")).length;const batches={};m.extra[lv].forEach(e=>{const b=e.batch||"—";batches[b]=(batches[b]||0)+1});
 const ed=UI.pc4edit;
 return`<section class="card kid-card"><div class="head"><div class="grow"><h2>CAT4 words</h2><p class="small muted">Check the words, meanings and sentences. If an answer is wrong, edit it: the change is used in every exercise for every student.</p></div></div>
 <div class="seg-tabs" role="group" aria-label="Level">${["C","D"].map(l=>`<button class="${l===lv?"on":""}" data-act="pc4lv" data-lv="${l}">${C4_LV[l].t} <span class="n">${C4[l].length}</span></button>`).join("")}</div>
 <p class="small muted">${C4BASE[lv].length} built-in words${edited?` (${edited} edited)`:""} · ${m.extra[lv].length} imported words</p></section>
 <section class="card kid-card"><h2 class="h-sm">Import words</h2>
 <p class="small muted">One word per line: <b>word | meaning | synonyms | antonyms | example sentence</b>. Only the word and meaning are needed. You can also paste a Quizlet export (term and definition separated by a tab). New words are spread over the days left from today to 20/12.</p>
 <div class="field full"><label for="c4-imp">Words</label><textarea id="c4-imp" rows="6" placeholder="furious | giận dữ | angry, livid | calm | Dad was furious when the window broke.">${esc(UI.pc4imp||"")}</textarea></div>
 <div class="row-actions"><label class="btn btn-sm" for="c4-file">${icon("plus",16)} Choose a .txt or .csv file</label><input type="file" id="c4-file" accept=".txt,.csv,.tsv,text/plain,text/csv" class="sr"><button class="btn btn-sm btn-primary" data-act="pc4import">Import to ${C4_LV[lv].t}</button></div>
 ${Object.keys(batches).length?`<ul class="list" style="margin-top:12px">${Object.entries(batches).map(([b,n])=>`<li class="row" style="cursor:default"><span class="main"><span class="t">${esc(b)}</span><span class="s">${n} words</span></span><span class="end">${UI.pc4rm===b?`<button class="btn btn-sm" data-act="pc4rmbatch" data-b="${esc(b)}" data-ok="1">Delete ${n} words</button><button class="btn btn-sm" data-act="pc4rmbatch" data-b="">Cancel</button>`:`<button class="btn btn-sm" data-act="pc4rmbatch" data-b="${esc(b)}">Delete</button>`}</span></li>`).join("")}</ul>`:""}</section>
 <section class="card kid-card"><div class="ex-head"><h2 class="h-sm">Check answers</h2><input class="c4-search" type="search" data-pc4q="1" value="${esc(UI.pc4q||"")}" placeholder="Search a word…" aria-label="Search a word"></div>
 <div class="c4-tbl" role="table"><div class="c4-tr c4-th" role="row"><span>Day</span><span>Word</span><span>Meaning</span><span>Synonyms / antonyms</span><span>Example (answer)</span><span></span></div>
 ${rows.map(({e,x})=>ed===lv+":"+x?c4EditRow(e,x,lv):`<div class="c4-tr ${m.edits[lv+":"+x]?"c4-edited":""}" role="row"><span>${dayOf[x]!=null?dayOf[x]+1:"–"}</span><span><b>${esc(e.w)}</b>${e.src==="import"?` <span class="chip plain">new</span>`:""}${m.edits[lv+":"+x]?` <span class="chip good">edited</span>`:""}</span><span>${esc(e.vi)}</span><span class="small">${e.syn?"≈ "+esc(e.syn):""}${e.ant?"<br>≠ "+esc(e.ant):""}</span><span class="small">${e.ex?c4Bold(e.ex,e.f||e.w):'<i class="muted">no sentence</i>'}</span><span><button class="btn btn-sm" data-act="pc4edit" data-x="${x}">Edit</button></span></div>`).join("")}
 ${rows.length?"":`<p class="muted">No word matches “${esc(UI.pc4q)}”.</p>`}</div></section>`}
function c4EditRow(e,x,lv){const m=c4Media();const isBase=e.src==="base";const f=(id,lab,v,full)=>`<div class="field ${full?"full":""}"><label for="pc4-${id}">${lab}</label><input id="pc4-${id}" value="${esc(v||"")}"></div>`;
 return`<div class="c4-tr c4-editrow" role="row"><div class="form-grid">${f("w","Word",e.w)}${f("vi","Meaning",e.vi)}${f("syn","Synonyms",e.syn)}${f("ant","Antonyms",e.ant)}${f("ex","Example sentence",e.ex,true)}${f("f","Answer in the sentence (the word as it appears, e.g. sank)",e.f,true)}</div>
 <div class="row-actions"><button class="btn btn-sm btn-primary" data-act="pc4save" data-x="${x}">Save</button><button class="btn btn-sm" data-act="pc4edit" data-x="">Cancel</button>${isBase&&m.edits[lv+":"+x]?`<button class="btn btn-sm" data-act="pc4reset" data-x="${x}">Undo my changes</button>`:""}${!isBase?`<button class="btn btn-sm" data-act="pc4del" data-x="${x}">Delete word</button>`:""}</div></div>`}
function pc4Import(txt){const lv=UI.pc4lv||"C";const items=c4ParseImport(txt);if(!items.length){toast("No words found. Use one word per line.");return}
 const m=c4Media();const from=Math.min(C4_DAYS-1,Math.max(0,c4TodayIdx()));const d=new Date();const batch="Imported "+d.getDate()+"/"+(d.getMonth()+1)+" "+String(d.getHours()).padStart(2,"0")+":"+String(d.getMinutes()).padStart(2,"0");
 items.forEach(it=>{it.from=from;it.batch=batch;it.id="x"+Date.now().toString(36)+Math.random().toString(36).slice(2,6)});m.extra[lv]=m.extra[lv].concat(items);UI.pc4imp="";c4SaveMedia();toast(items.length+" words added to "+C4_LV[lv].t);render()}
Object.assign(ACT,{
 c4lv(el){const c=c4R();c.lv=el.dataset.lv;UI.c4lv=c.lv;UI.c4=null;c4Save();render();window.scrollTo(0,0)},
 c4back(){UI.c4lv=null;UI.c4=null;render();window.scrollTo(0,0)},
 home(){UI.c4=null;UI.c4lv=null;UI.drawer=false;if((location.hash||"#today")==="#today"){Q=null;render();window.scrollTo(0,0)}},
 c4home(){UI.c4=null;render();window.scrollTo(0,0)},
 c4day(el){c4Open(+el.dataset.i);render();c4Top()},
 c4step(el){const s=UI.c4;s.step=el.dataset.k;c4Prep(s.step);if(s.step==="fc")s.fc={i:0,flip:false,order:s.fc.order};render()},
 c4skip(el){c4Mark(el.dataset.s);c4Next()},
 c4flip(el,e){if(e&&e.target.closest("[data-act]")!==el)return;UI.c4.fc.flip=!UI.c4.fc.flip;render()},
 c4fc(el){const s=UI.c4;const f=s.fc;const n=f.order.length;const d=+el.dataset.d;if(d>0&&f.i===n-1){c4Mark("fc");toast("Flashcards done!");c4Next();return}f.i=Math.max(0,Math.min(n-1,f.i+d));f.flip=false;render()},
 c4hard(el){const c=c4R();const k=c4Key(c.lv,el.dataset.k);if(c.hard[k])delete c.hard[k];else c.hard[k]=1;c4Save();render()},
 c4ml(el){const m=UI.c4.mt;m.sel=+el.dataset.k;m.bad=null;render()},
 c4mr(el){const m=UI.c4.mt;if(m.sel==null){toast("Tap a word on the left first.");return}const k=+el.dataset.k;
  if(k===m.sel){m.ok[k]=1;m.sel=null;m.bad=null;const r=m.rounds[m.ri];if(r.items.every(x=>m.ok[x.k])){if(m.ri<m.rounds.length-1){m.ri++;m.ok={};toast("Great! Next round.")}else{c4Mark("mt",{err:m.err});toast("Matching done!");c4Next();return}}}
  else{m.err++;m.bad=[m.sel,k];m.sel=null}render()},
 c4se(el){const q=UI.c4.se;if(q.pick!=null)return;q.pick=+el.dataset.j;const it=q.items[q.i];if(it.opts[q.pick]===C4[c4R().lv][it.k])q.score++;render()},
 c4senext(){const q=UI.c4.se;if(q.i<q.items.length-1){q.i++;q.pick=null;render();return}c4Mark("se",{score:q.score,total:q.items.length});toast(q.score+" / "+q.items.length+" correct");c4Next()},
 c4cxcheck(){const x=UI.c4.cx;const lv=c4R().lv;document.querySelectorAll("[data-c4x]").forEach(inp=>x.vals[inp.dataset.c4x]=inp.value);const g=x.groups[x.gi];x.last=g.filter(k=>c4Ok(C4[lv][k],x.vals[k])).length;x.score+=x.last;x.total+=g.length;x.checked=true;render()},
 c4cxnext(){const x=UI.c4.cx;if(x.gi<x.groups.length-1){x.gi++;x.checked=false;render();return}c4Mark("cx",{score:x.score,total:x.total});toast(x.score+" / "+x.total+" gaps correct");c4Next()},
 pc4lv(el){UI.pc4lv=el.dataset.lv;UI.pc4edit=null;UI.pc4rm=null;render()},
 pc4edit(el){UI.pc4edit=el.dataset.x===""?null:(UI.pc4lv||"C")+":"+el.dataset.x;render();if(UI.pc4edit){const i=document.getElementById("pc4-w");if(i)i.focus()}},
 pc4save(el){const lv=UI.pc4lv||"C";const x=+el.dataset.x;const e=C4[lv][x];if(!e)return;const v=id=>(document.getElementById("pc4-"+id)||{}).value||"";
  const nv={w:v("w").trim(),vi:v("vi").trim(),syn:v("syn").trim(),ant:v("ant").trim(),ex:v("ex").trim(),f:v("f").trim()};if(!nv.w){toast("The word can’t be empty.");return}
  if(!nv.f||(nv.ex&&!c4Re(nv.f).test(nv.ex)))nv.f=c4FindForm(nv.w,nv.ex);
  if(nv.ex&&!c4Re(nv.f).test(nv.ex)){toast("The answer “"+nv.f+"” is not in the example sentence. Please check.");return}
  const m=c4Media();if(e.src==="base"){const b=C4BASE[lv][x];const diff={};Object.keys(nv).forEach(k=>{if((b[k]||"")!==nv[k])diff[k]=nv[k]});if(Object.keys(diff).length)m.edits[lv+":"+x]=diff;else delete m.edits[lv+":"+x]}
  else{const it=m.extra[lv].find(y=>y.id===e.id);if(it)Object.assign(it,nv)}
  UI.pc4edit=null;c4SaveMedia();toast("Saved. Students see the change now.");render()},
 pc4reset(el){const lv=UI.pc4lv||"C";delete c4Media().edits[lv+":"+el.dataset.x];UI.pc4edit=null;c4SaveMedia();render()},
 pc4del(el){const lv=UI.pc4lv||"C";const e=C4[lv][+el.dataset.x];const m=c4Media();m.extra[lv]=m.extra[lv].filter(y=>y.id!==e.id);UI.pc4edit=null;c4SaveMedia();toast("Word deleted.");render()},
 pc4import(){const t=document.getElementById("c4-imp");pc4Import(t?t.value:"")},
 pc4rmbatch(el){const b=el.dataset.b;if(!b){UI.pc4rm=null;render();return}if(!el.dataset.ok){UI.pc4rm=b;render();return}const lv=UI.pc4lv||"C";const m=c4Media();m.extra[lv]=m.extra[lv].filter(y=>(y.batch||"—")!==b);UI.pc4rm=null;c4SaveMedia();toast("Imported words deleted.");render()}
});
document.addEventListener("input",e=>{const el=e.target;if(!el||!el.dataset)return;if(el.dataset.c4x!=null&&UI.c4&&UI.c4.cx){UI.c4.cx.vals[el.dataset.c4x]=el.value;return}
 if(el.id==="c4-imp"){UI.pc4imp=el.value;return}
 if(el.dataset.pc4q){UI.pc4q=el.value;const pos=el.selectionStart;render();const s=document.querySelector("[data-pc4q]");if(s){s.focus();try{s.setSelectionRange(pos,pos)}catch(x){}}}});
document.addEventListener("change",e=>{const el=e.target;if(!el||el.id!=="c4-file"||!el.files||!el.files[0])return;const rd=new FileReader();rd.onload=()=>{UI.pc4imp=String(rd.result||"");render();toast("File loaded. Check the words, then press Import.")};rd.readAsText(el.files[0])});
document.addEventListener("keydown",e=>{if(!UI.c4||UI.c4.day==null||UI.c4.step!=="fc"||Q||route().name!=="vocabulary")return;const t=e.target;if(t&&/^(INPUT|TEXTAREA|SELECT)$/.test(t.tagName))return;
 if(e.key==="ArrowRight"){e.preventDefault();ACT.c4fc({dataset:{d:"1"}})}else if(e.key==="ArrowLeft"){e.preventDefault();ACT.c4fc({dataset:{d:"-1"}})}else if((e.key===" "||e.key==="Enter")&&t&&t.classList&&t.classList.contains("c4-card")){e.preventDefault();UI.c4.fc.flip=!UI.c4.fc.flip;render()}});
