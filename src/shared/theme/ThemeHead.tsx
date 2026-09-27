import { PITCH_MODE } from "@/shared/config";
import { ACCENTS, DARK_GROUND, DEFAULT_CHOICE, GROUNDS, STORAGE_KEY, resolveChoice } from "./theme";

/**
 * Rendered in <head>. The <style> carries the default look (also the no-JS fallback);
 * the inline script applies a pitch choice (URL query first, then localStorage) before first paint.
 */
export function ThemeHead() {
  const defaults = resolveChoice(DEFAULT_CHOICE);
  const css = `:root{${Object.entries(defaults)
    .map(([k, v]) => `${k}:${v}`)
    .join(";")}}`;
  const cfg = JSON.stringify({
    pitch: PITCH_MODE,
    d: DEFAULT_CHOICE,
    a: ACCENTS.map((x) => ({ id: x.id, accent: x.accent, on: x.onAccent, tod: "textOnDark" in x ? x.textOnDark : x.accent })),
    g: GROUNDS,
    dg: DARK_GROUND,
    k: STORAGE_KEY,
  });
  const script = `(function(){try{var C=${cfg},c={theme:C.d.theme,accent:C.d.accent,ground:C.d.ground};
var okA=function(v){for(var i=0;i<C.a.length;i++)if(C.a[i].id===v)return C.a[i];return null};
var okT=function(v){return v==="light"||v==="dark"},okG=function(v){return C.g.indexOf(v)>=0};
if(C.pitch){try{var s=JSON.parse(localStorage.getItem(C.k)||"null");if(s){if(okT(s.theme))c.theme=s.theme;if(okA(s.accent))c.accent=s.accent;if(okG(s.ground))c.ground=s.ground}}catch(e){}
var q=new URLSearchParams(location.search),t=q.get("theme"),a=q.get("accent"),g=q.get("ground");
if(okT(t))c.theme=t;if(okA(a))c.accent=a;if(g&&okG("#"+g))c.ground="#"+g;
if(t||a||g){try{localStorage.setItem(C.k,JSON.stringify(c))}catch(e){}}}
var x=okA(c.accent)||C.a[0],dark=c.theme==="dark",r=document.documentElement,bg=dark?C.dg:c.ground;
r.setAttribute("data-theme",c.theme);r.setAttribute("data-accent",c.accent);r.setAttribute("data-ground",c.ground);
r.style.setProperty("--accent",x.accent);r.style.setProperty("--on-accent",x.on);
r.style.setProperty("--accent-text",dark?x.tod:x.accent);r.style.setProperty("--ground",bg);r.style.background=bg;
}catch(e){}})();`;
  return (
    <>
      <style>{css}</style>
      <script dangerouslySetInnerHTML={{ __html: script }} />
    </>
  );
}
