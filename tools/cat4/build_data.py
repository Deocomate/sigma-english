import json,re,sys
IRR={"build":["built"],"sink":["sank","sunk"],"hide":["hid","hidden"],"shrink":["shrank","shrunk"],"forbid":["forbidden","forbade"],"rise":["rises","rose","risen"],"choose":["chose","chosen"],"grab":["grabbed"],"sob":["sobbed"],"hurry":["hurried"],"stroll":["strolled"]}
def find_form(w,ex):
    toks=re.findall(r"[A-Za-z][A-Za-z'-]*",ex)
    wl=w.lower()
    cands=[wl]+[x for x in IRR.get(wl,[])]
    for t in toks:
        if t.lower() in cands: return t
    stem=wl[:-1] if wl.endswith("e") else wl
    if wl.endswith("y"): stem=wl[:-1]
    for t in toks:
        tl=t.lower()
        if tl.startswith(stem) and len(tl)-len(wl)<=4 and len(stem)>=3: return t
    return None
def load(fn):
    out=[];theme=None;kind=None
    for line in open(fn,encoding="utf8"):
        line=line.rstrip("\n")
        if not line.strip(): continue
        if line.startswith("#"):
            kind=line[1];theme=line[3:];continue
        p=line.split("|")
        if kind=="T":
            w,vi,syn,ant,ex=p;e={"w":w,"vi":vi,"syn":syn,"ant":ant,"ex":ex,"t":theme}
        else:
            w,vi,g,ex=p;e={"w":w,"vi":vi,"syn":"","ant":"","g":g,"ex":ex,"t":theme}
        f=find_form(w,ex)
        if not f: print("NOFORM",fn,w,"|",ex,file=sys.stderr)
        e["f"]=f or w
        out.append(e)
    return out
C=load("c4data_c.txt");D=load("c4data_d.txt")
print(len(C),len(D),file=sys.stderr)
ws=[e["w"] for e in C+D]
import collections
print([k for k,v in collections.Counter(ws).items() if v>1],file=sys.stderr)
json.dump({"C":C,"D":D},open("c4data.json","w",encoding="utf8"),ensure_ascii=False,separators=(",",":"))
