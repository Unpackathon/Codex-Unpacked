export const __rspack_esm_ids=[615467];export const __webpack_modules__={FXHo(e,t){!function(e){let t=Symbol("newer"),i=Symbol("older");class r{constructor(e,t){"number"!=typeof e&&(t=e,e=0),this.size=0,this.limit=e,this.oldest=this.newest=void 0,this._keymap=new Map,t&&(this.assign(t),e<1&&(this.limit=this.size))}_markEntryAsUsed(e){e!==this.newest&&(e[t]&&(e===this.oldest&&(this.oldest=e[t]),e[t][i]=e[i]),e[i]&&(e[i][t]=e[t]),e[t]=void 0,e[i]=this.newest,this.newest&&(this.newest[t]=e),this.newest=e)}assign(e){let r,a=this.limit||Number.MAX_VALUE;this._keymap.clear();let s=e[Symbol.iterator]();for(let e=s.next();!e.done;e=s.next()){let s=new n(e.value[0],e.value[1]);if(this._keymap.set(s.key,s),r?(r[t]=s,s[i]=r):this.oldest=s,r=s,0==a--)throw Error("overflow")}this.newest=r,this.size=this._keymap.size}get(e){var t=this._keymap.get(e);return t?(this._markEntryAsUsed(t),t.value):void 0}set(e,r){var a=this._keymap.get(e);return a?(a.value=r,this._markEntryAsUsed(a)):(this._keymap.set(e,a=new n(e,r)),this.newest?(this.newest[t]=a,a[i]=this.newest):this.oldest=a,this.newest=a,++this.size,this.size>this.limit&&this.shift()),this}shift(){var e=this.oldest;if(e)return this.oldest[t]?(this.oldest=this.oldest[t],this.oldest[i]=void 0):(this.oldest=void 0,this.newest=void 0),e[t]=e[i]=void 0,this._keymap.delete(e.key),--this.size,[e.key,e.value]}find(e){let t=this._keymap.get(e);return t?t.value:void 0}has(e){return this._keymap.has(e)}delete(e){var r=this._keymap.get(e);return r?(this._keymap.delete(r.key),r[t]&&r[i]?(r[i][t]=r[t],r[t][i]=r[i]):r[t]?(r[t][i]=void 0,this.oldest=r[t]):r[i]?(r[i][t]=void 0,this.newest=r[i]):this.oldest=this.newest=void 0,this.size--,r.value):void 0}clear(){this.oldest=this.newest=void 0,this.size=0,this._keymap.clear()}keys(){return new s(this.oldest)}values(){return new o(this.oldest)}entries(){return this}[Symbol.iterator](){return new a(this.oldest)}forEach(e,i){"object"!=typeof i&&(i=this);let r=this.oldest;for(;r;)e.call(i,r.value,r.key,this),r=r[t]}toJSON(){for(var e=Array(this.size),i=0,r=this.oldest;r;)e[i++]={key:r.key,value:r.value},r=r[t];return e}toString(){for(var e="",i=this.oldest;i;)e+=String(i.key)+":"+i.value,(i=i[t])&&(e+=" < ");return e}}function n(e,r){this.key=e,this.value=r,this[t]=void 0,this[i]=void 0}function a(e){this.entry=e}function s(e){this.entry=e}function o(e){this.entry=e}e.LRUMap=r,a.prototype[Symbol.iterator]=function(){return this},a.prototype.next=function(){let e=this.entry;return e?(this.entry=e[t],{done:!1,value:[e.key,e.value]}):{done:!0,value:void 0}},s.prototype[Symbol.iterator]=function(){return this},s.prototype.next=function(){let e=this.entry;return e?(this.entry=e[t],{done:!1,value:e.key}):{done:!0,value:void 0}},o.prototype[Symbol.iterator]=function(){return this},o.prototype.next=function(){let e=this.entry;return e?(this.entry=e[t],{done:!1,value:e.value}):{done:!0,value:void 0}}}(t)},gtZG(e,t,i){var r=i("ABep"),n=i("QosV"),a=i("sXTZ"),s=i("n6fU"),o=i("gz4m"),l=i("N0bB"),h=i("DBCl"),d=i("zd8w"),u=i("Wf1j"),c=i("Ovip"),f=i("uNhY");i("AVx8");var g=i("RxZZ"),p=i("kkEw"),m=i("a6Zv"),k=i("bIvi");function b(e){return e.focus({preventScroll:!0})}function y(e,t,i){return new s.K(e,t,i)}(0,a.J)("mermaid-source",async()=>{let{default:e}=await i.e(106779).then(i.bind(i,"L2Bi"));return{default:e.map(e=>({...e,name:"mermaid-source",scopeName:"source.mermaid",aliases:[],injectionSelector:void 0,patterns:[{include:"#mermaid"}]}))}}),i.d(t,{},{MermaidCodeEditor:function(e){let t,i,a,s,v,C,x,w,T,R,L,S,q,O=(0,n.c)(30),{initialCode:I,editStateKey:A,onChange:B,onBlur:E}=e,z=(0,u.A)(),$=(0,m.Y)()?"dark":"light",F=(0,g.iK)("dark"===$?h.oKj.darkCodeThemeId:h.oKj.lightCodeThemeId);O[0]!==B?(t=e=>B?.(e.contents),O[0]=B,O[1]=t):t=O[1];let H=(0,k.K)(t),D=(0,d.useEffectEvent)(E);O[2]!==D?(i=()=>()=>D(),O[2]=D,O[3]=i):i=O[3],O[4]===Symbol.for("react.memo_cache_sentinel")?(a=[],O[4]=a):a=O[4],(0,d.useEffect)(i,a);let P=null!=B;O[5]===Symbol.for("react.memo_cache_sentinel")?(s={"mermaid-source":{lineComment:"%%"}},O[5]=s):s=O[5],O[6]!==H?(v={languageCommentConfig:s,onAttach:b,onChange:e=>{let{file:t}=e;return H(t)}},O[6]=H,O[7]=v):v=O[7],O[8]!==z?(C=z.formatMessage({id:"chatgpt.codeBlocks.editor.ariaLabel",defaultMessage:"Edit code"}),O[8]=z,O[9]=C):C=O[9],O[10]!==I||O[11]!==C?(x={name:C,contents:I,lang:"mermaid-source",cacheKey:"mermaid-source"},O[10]=I,O[11]=C,O[12]=x):x=O[12],O[13]===Symbol.for("react.memo_cache_sentinel")?(w=(0,f.S)(),O[13]=w):w=O[13],O[14]!==F||O[15]!==$?(T=(0,p.oW)(F,$),O[14]=F,O[15]=$,O[16]=T):T=O[16];let K=T.name;return O[17]===Symbol.for("react.memo_cache_sentinel")?(R=(0,c.M)({includeDiffHeader:!1,includeSimpleLineSeparators:!1,rootSelector:"[data-file]",surface:"var(--color-surface)"}),O[17]=R):R=O[17],O[18]!==T.name||O[19]!==$?(L={preferredHighlighter:w,disableFileHeader:!0,overflow:"wrap",theme:K,themeType:$,useTokenTransformer:!0,unsafeCSS:R},O[18]=T.name,O[19]=$,O[20]=L):L=O[20],O[21]!==A||O[22]!==L||O[23]!==P||O[24]!==v||O[25]!==x?(S=(0,r.jsx)(o.eo,{createEditor:y,children:(0,r.jsx)(l.Z,{className:"[--diffs-editor-selection-bg:var(--color-background-text-selection)] [--diffs-min-number-column-width:1ch]",disableWorkerPool:!0,edit:P,editStateKey:A,editorOptions:v,file:x,options:L})}),O[21]=A,O[22]=L,O[23]=P,O[24]=v,O[25]=x,O[26]=S):S=O[26],O[27]!==E||O[28]!==S?(q=(0,r.jsx)("div",{className:"h-full overflow-auto pe-4",onBlur:E,children:S}),O[27]=E,O[28]=S,O[29]=q):q=O[29],q}})},Ovip(e,t,i){let r="var(--color-surface)",n=`color-mix(
  in srgb,
  var(--codex-diffs-surface) 94%,
  var(--color-surface)
)`,a=`color-mix(
  in srgb,
  var(--codex-diffs-surface) 94%,
  var(--color-text-info)
)`,s=`color-mix(
  in srgb,
  var(--codex-diffs-surface) 92%,
  var(--color-surface)
)`,o=`color-mix(
  in lab,
  var(--codex-diffs-surface) 98.5%,
  var(--diffs-mixer)
)`,l=`light-dark(
  color-mix(in lab, var(--diffs-light-bg, #fff) 91%, var(--diffs-addition-base)),
  color-mix(in lab, var(--diffs-dark-bg, #000) 85%, var(--diffs-addition-base))
)`,h=`light-dark(
  color-mix(in lab, var(--diffs-light-bg, #fff) 91%, var(--diffs-deletion-base)),
  color-mix(in lab, var(--diffs-dark-bg, #000) 85%, var(--diffs-deletion-base))
)`,d=`light-dark(
  color-mix(
    in lab,
    var(--diffs-light-bg, #fff) 80%,
    var(--diffs-addition-base)
  ),
  color-mix(
    in lab,
    var(--diffs-dark-bg, #000) 70%,
    var(--diffs-addition-base)
  )
)`,u=`light-dark(
  color-mix(
    in lab,
    var(--diffs-light-bg, #fff) 80%,
    var(--diffs-deletion-base)
  ),
  color-mix(
    in lab,
    var(--diffs-dark-bg, #000) 75%,
    var(--diffs-deletion-base)
  )
)`,c=`
  --codex-diffs-surface: ${r};
  --codex-diffs-context-surface: ${n};
  --codex-diffs-separator-surface: ${a};
  --codex-diffs-hover-surface: ${s};
  --codex-diffs-header-surface: var(--codex-diffs-surface);
  --codex-diffs-context-number: ${o};
  --codex-diffs-addition-number: ${l};
  --codex-diffs-deletion-number: ${h};
  --codex-diffs-addition-hover: ${d};
  --codex-diffs-deletion-hover: ${u};
  /* Keep unhighlighted lines readable while syntax tokens are pending. */
  --diffs-dark: var(--color-text);
  --diffs-light: var(--color-text);
  --diffs-bg-context-override: var(--codex-diffs-context-surface);
  --diffs-bg-separator-override: var(--codex-diffs-separator-surface);
  --diffs-bg-hover-override: var(--codex-diffs-hover-surface);
`;i.d(t,{},{M:function({alignCommentGutter:e=!1,includeDiffHeader:t,includeSimpleLineSeparators:i,rootSelector:r,surface:n,useReviewLineInfoSeparators:a=!1}){let s=t?`[data-diffs-header],
  ${r}`:r,o=i?`
  :host(.composer-diff-simple-line) [data-separator]:empty {
    background-color: transparent;
  }

  :host(.composer-diff-simple-line) [data-separator]:empty::after {
    content: "";
    grid-column: 2 / 3;
    align-self: center;
    margin-inline: 1ch;
    border-top: 1px solid color-mix(in srgb, var(--diffs-fg) 18%, transparent);
  }
`:"",l=e?`
  ${r} [data-column-number] {
    padding-inline-start: calc(var(--spacing) * 10);
  }
`:"",h=a?`
  ${r} [data-column-number] {
    padding-inline: 1.5ch;
    text-align: center;
  }

  ${r} [data-separator='line-info'] :is([data-separator-wrapper], [data-expand-button], [data-separator-content]) {
    border-radius: 0;
  }

  ${r} [data-separator='line-info'] [data-separator-wrapper] {
    padding: 0;
  }

  ${r} [data-unified] [data-separator='line-info'] [data-separator-wrapper] {
    grid-template-columns: var(--diffs-column-number-width) minmax(0, 1fr);
  }

  ${r} [data-unified] [data-separator='line-info'] [data-expand-button] {
    min-width: 0;
  }

  /* Pierre duplicates split separators into each gutter and content cell. */
  ${r} [data-deletions] [data-gutter] [data-separator='line-info'] [data-separator-wrapper] {
    background-color: var(--diffs-bg);
    grid-template-columns: minmax(0, 1fr);
  }

  ${r} [data-deletions] [data-gutter] [data-separator='line-info'] [data-separator-content],
  ${r} [data-deletions] [data-content] [data-separator='line-info'] [data-expand-button] {
    display: none;
  }

  ${r} [data-deletions] [data-content] [data-separator='line-info'] [data-separator-wrapper] {
    display: grid;
    grid-template-columns: minmax(0, 1fr);
  }

  ${r} [data-deletions] [data-content] [data-separator='line-info'] [data-separator-content] {
    grid-column: 1;
  }

  ${r} [data-additions] [data-gutter] [data-separator='line-info'],
  ${r} [data-additions] [data-gutter] [data-separator='line-info'] [data-separator-wrapper] {
    background-color: var(--diffs-bg-separator);
  }

  ${r}[data-overflow='scroll'] [data-additions] [data-gutter] [data-separator='line-info'] [data-separator-wrapper] {
    width: 100cqi;
  }

  ${r} [data-additions] [data-content] [data-separator='line-info'] [data-separator-wrapper] {
    margin-inline-end: 0;
  }
`:"",d=`
  /* Preserve the pre-beta split-column width instead of reserving a scrollbar gutter in every pane. */
  ${r} [data-code] {
    scrollbar-gutter: auto;
  }

  ${r} [data-line-type='change-addition']:is([data-line], [data-no-newline]) {
    --diffs-computed-diff-line-bg: var(--diffs-bg-addition);
  }

  ${r} [data-line-type='change-addition']:is([data-column-number], [data-gutter-buffer]) {
    --diffs-computed-diff-line-bg: var(--codex-diffs-addition-number);
  }

  ${r} [data-line-type='change-deletion']:is([data-line], [data-no-newline]) {
    --diffs-computed-diff-line-bg: var(--diffs-bg-deletion);
  }

  ${r} [data-line-type='change-deletion']:is([data-column-number], [data-gutter-buffer]) {
    --diffs-computed-diff-line-bg: var(--codex-diffs-deletion-number);
  }

  ${r} [data-line-type='change-addition'][data-hovered]:not([data-selected-line]) {
    --diffs-computed-hovered-line-bg: var(--codex-diffs-addition-hover);
  }

  ${r} [data-line-type='change-deletion'][data-hovered]:not([data-selected-line]) {
    --diffs-computed-hovered-line-bg: var(--codex-diffs-deletion-hover);
  }
`;return`
  [data-unmodified-lines][hidden] { display: none !important; }
  [data-expand-index] [data-separator-content]:hover {
    text-decoration: none;
    & > :not([data-context-message="loading"]) {
      text-decoration: underline;
    }
  }
  [data-context-pending] > svg { visibility: hidden; }
  [data-context-pending] {
    position: relative;
    color: var(--diffs-fg-number);
  }
  [data-context-pending]::after, [data-context-label-pending]::before {
    content: "";
    position: absolute;
    inset: 0;
    margin: auto;
    width: 11px;
    height: 11px;
    box-sizing: border-box;
    border: 1.5px solid currentColor;
    border-inline-end-color: transparent;
    border-radius: 50%;
    animation: codex-context-loading .8s linear infinite;
    animation-play-state: var(--decorative-animation-play-state, running);
  }
  [data-context-label-pending]::before {
    position: static;
    display: inline-block;
    margin-inline-end: .5em;
    vertical-align: middle;
  }
  @keyframes codex-context-loading { to { transform: rotate(1turn); } }
  @media (prefers-reduced-motion: reduce) { [data-context-pending]::after, [data-context-label-pending]::before { animation: none; } }
  [data-context-message="error"] { color: var(--diffs-fg); }
  [data-context-retry] {
    font: inherit;
    color: inherit;
    background: transparent;
    border: 0;
    padding: 0;
    cursor: var(--cursor-interaction);
    text-decoration: underline;
    text-underline-offset: 2px;
  }
  ${s} {
    ${c}
    --diffs-bg: ${n} !important;
    background-color: ${n} !important;
  }

  ${r} [data-language-symbol-highlight] {
    background-color: var(--color-background-secondary-ghost-hover) !important;
  }

  ${r} [data-language-symbol-link] {
    text-decoration: underline;
    cursor: var(--cursor-interaction);
  }

  ${r} [data-utility-button] {
    background-color: var(--color-text);
    color: var(--color-surface-secondary);
    border: none;
    border-radius: 4px;
    margin-right: 0;
  }

  ${r} [data-utility-button]:hover {
    background-color: color-mix(
      in srgb,
      var(--color-text) 88%,
      var(--color-surface-secondary)
    );
  }

  ${r} [data-selected-line][data-line-annotation] {
    background-color: var(--diffs-bg);
  }

  [data-placeholder][data-loading] {
    --codex-diffs-placeholder-base: color-mix(
      in srgb,
      var(--color-codex-description) 10%,
      transparent
    );
    --codex-diffs-placeholder-highlight: color-mix(
      in srgb,
      var(--color-codex-description) 16%,
      transparent
    );
    position: relative;
    overflow: hidden;
    background-image: linear-gradient(
      to right,
      var(--codex-diffs-placeholder-base) 0 82%,
      transparent 82%
    );
    background-position: 12px 8px;
    background-size: calc(100% - 24px) 22px;
    background-repeat: repeat-y;
  }

  [data-placeholder][data-loading]::before {
    content: "";
    position: absolute;
    inset: 8px 12px;
    background: linear-gradient(
      90deg,
      transparent 0%,
      var(--codex-diffs-placeholder-highlight) 50%,
      transparent 100%
    );
    transform: translateX(-100%);
    animation: codex-diffs-placeholder-shimmer 3000ms linear infinite;
    mask-image: repeating-linear-gradient(
      to bottom,
      #000 0 14px,
      transparent 14px 22px
    );
  }

  @media (prefers-reduced-motion: reduce) {
    [data-placeholder][data-loading]::before {
      animation: none;
    }
  }

  @keyframes codex-diffs-placeholder-shimmer {
    to {
      transform: translateX(100%);
    }
  }

${d}

  ${r} [data-line-type="change-deletion"][data-column-number]::before {
    background-color: var(--diffs-deletion-base);
    background-image: none;
  }

  /* Cover fractional-pixel gaps between consecutive solid change markers. */
  ${r} [data-line-type="change-addition"][data-column-number]
    + [data-line-type="change-addition"][data-column-number]::before,
  ${r} [data-line-type="change-deletion"][data-column-number]
    + [data-line-type="change-deletion"][data-column-number]::before {
    contain: none;
    top: -1px;
    height: calc(100% + 1px);
  }

${h}

${l}

${o}`},T:function(e,t){return e?"diff"===t?"var(--color-codex-diff-surface)":r:"var(--color-surface-secondary)"}})},uNhY(e,t,i){i.d(t,{},{S:function(){}})},AVx8(e,t,i){var r=i("wC4q"),n=i("kkEw");let a={comment:["comment"],string:["string"],"string.escape":["constant.character.escape"],"string.regex":["string.regexp"],"text.literal":["markup.inline.raw"],keyword:["keyword","storage.type","storage.modifier"],operator:["keyword.operator"],preproc:["keyword.control.directive"],boolean:["constant.language.boolean","constant.language"],number:["constant.numeric"],constant:["constant"],variable:["variable"],"variable.special":["variable.language"],"variable.parameter":["variable.parameter"],property:["variable.other.property","support.type.property-name"],"property.json_key":["support.type.property-name.json"],function:["entity.name.function","support.function"],constructor:["entity.name.type.class"],type:["entity.name.type","support.type"],attribute:["entity.other.attribute-name"],tag:["entity.name.tag"],punctuation:["punctuation"],link_text:["markup.underline.link"],link_uri:["markup.underline.link","string.other.link"],"diff.plus":["markup.inserted"],"diff.minus":["markup.deleted"],emphasis:["markup.italic"],"emphasis.strong":["markup.bold"],title:["markup.heading"]};for(let e of(0,n.I9)())!function(e,t,i="textmate"){let n=r.q.get(e)??{};null!=n[i]?console.error("SharedHighlight.registerCustomTheme: theme name and type already registered",e,i):(n[i]=t,r.q.set(e,n))}(e.name,async()=>(function(e,t){let i=t.tokenColors??t.settings??[],r=i.find(e=>null==e.scope)?.settings,n="light"===t.type?"light":"dark",s=t.fg??t.colors?.["editor.foreground"]??r?.foreground??("light"===n?"#333333":"#bbbbbb"),o=t.bg??t.colors?.["editor.background"]??r?.background??("light"===n?"#ffffff":"#1e1e1e"),l={};for(let[e,t]of Object.entries(a)){let r={},n=-1,a=-1;for(let e of i)for(let i of"string"==typeof e.scope?e.scope.split(","):e.scope??[]){let s=i.trim();s&&t.some(e=>e===s||e.startsWith(`${s}.`))&&(null!=e.settings.foreground&&s.length>=n&&(r.color=e.settings.foreground,n=s.length),null!=e.settings.fontStyle&&s.length>=a&&(r.font_style=e.settings.fontStyle.includes("italic")?"italic":"normal",r.font_weight=e.settings.fontStyle.includes("bold")?700:400,a=s.length))}l[e]=r}return{name:e,type:n,fg:s,bg:o,colors:{...t.colors,"editor.foreground":s,"editor.background":o},textmate:{...t,name:e,type:n,fg:s,bg:o,settings:i},zed:{name:e,appearance:n,style:{"editor.foreground":s,"editor.background":o,syntax:l}}}})(e.name,await e.load()),"diffs")},kkEw(e,t,i){i.d(t,{aD:()=>r.aDj,oW:()=>l,I9:()=>o});var r=i("DBCl"),n=i("SMzt");let a={"ayu-dark":()=>i.e(33247).then(i.bind(i,"eNz5")),"catppuccin-latte":()=>i.e(571858).then(i.bind(i,"R3uT")),"catppuccin-mocha":()=>i.e(402734).then(i.bind(i,"ed7L")),"dark-plus":()=>i.e(574308).then(i.bind(i,"Ql0N")),dracula:()=>i.e(21885).then(i.bind(i,"FUKF")),"everforest-dark":()=>i.e(773959).then(i.bind(i,"dzPG")),"everforest-light":()=>i.e(818495).then(i.bind(i,"UQgL")),"github-dark-default":()=>i.e(370905).then(i.bind(i,"dOHO")),"github-light-default":()=>i.e(722017).then(i.bind(i,"vosZ")),"gruvbox-dark-medium":()=>i.e(631953).then(i.bind(i,"J8sX")),"gruvbox-light-medium":()=>i.e(416361).then(i.bind(i,"Vizg")),"light-plus":()=>i.e(442836).then(i.bind(i,"Vs6L")),"material-theme-darker":()=>i.e(939684).then(i.bind(i,"rhk3")),monokai:()=>i.e(53709).then(i.bind(i,"GBId")),"night-owl":()=>i.e(100450).then(i.bind(i,"DOYB")),nord:()=>i.e(301746).then(i.bind(i,"zkIA")),"one-dark-pro":()=>i.e(391298).then(i.bind(i,"jIEz")),"one-light":()=>i.e(225750).then(i.bind(i,"EiaD")),"rose-pine-dawn":()=>i.e(327938).then(i.bind(i,"iUJo")),"rose-pine-moon":()=>i.e(757265).then(i.bind(i,"MRBZ")),"solarized-dark":()=>i.e(854189).then(i.bind(i,"YQJc")),"solarized-light":()=>i.e(899573).then(i.bind(i,"JJ80")),"tokyo-night":()=>i.e(110734).then(i.bind(i,"QD5o"))},s=[h(n.Rg.AYU,{dark:"ayu-dark"}),h(n.Rg.CATPPUCCIN,{dark:"catppuccin-mocha",light:"catppuccin-latte"}),d(n.Rg.ABSOLUTELY,{dark:{load:()=>i.e(220243).then(i.t.bind(i,"L0sD",19)),name:"Absolutely Dark"},light:{load:()=>i.e(607291).then(i.t.bind(i,"i0wK",19)),name:"Absolutely Light"}}),d(n.Rg.CODEX,{dark:{load:()=>i.e(366084).then(i.t.bind(i,"i4nh",19)),name:"Codex Dark"},light:{load:()=>i.e(61942).then(i.t.bind(i,"sEmq",19)),name:"Codex Light"}}),h(n.Rg.DRACULA,{dark:"dracula"}),h(n.Rg.EVERFOREST,{dark:"everforest-dark",light:"everforest-light"}),h(n.Rg.GITHUB,{dark:"github-dark-default",light:"github-light-default"}),h(n.Rg.GRUVBOX,{dark:"gruvbox-dark-medium",light:"gruvbox-light-medium"}),d(n.Rg.LINEAR,{dark:{load:()=>i.e(101912).then(i.t.bind(i,"Aup8",19)),name:"Linear Dark"},light:{load:()=>i.e(583762).then(i.t.bind(i,"Zmpt",19)),name:"Linear Light"}}),d(n.Rg.LOBSTER,{dark:{load:()=>i.e(233122).then(i.t.bind(i,"Ouzr",19)),name:"Lobster Dark"}}),h(n.Rg.MATERIAL,{dark:"material-theme-darker"}),d(n.Rg.MATRIX,{dark:{load:()=>i.e(894220).then(i.t.bind(i,"t8qm",19)),name:"Matrix Dark"}}),h(n.Rg.MONOKAI,{dark:"monokai"}),h(n.Rg.NIGHT_OWL,{dark:"night-owl"}),h(n.Rg.NORD,{dark:"nord"}),d(n.Rg.NOTION,{dark:{load:()=>i.e(1444).then(i.t.bind(i,"PNJE",19)),name:"Notion Dark"},light:{load:()=>i.e(802582).then(i.t.bind(i,"GQSi",19)),name:"Notion Light"}}),d(n.Rg.OG,{dark:{load:()=>i.e(797075).then(i.t.bind(i,"CABk",19)),name:"OG Dark"}}),d(n.Rg.OSCURANGE,{dark:{load:()=>i.e(660933).then(i.t.bind(i,"xrtt",19)),name:"Oscurange"}}),h(n.Rg.ONE,{dark:"one-dark-pro",light:"one-light"}),d(n.Rg.PROOF,{light:{load:()=>i.e(848341).then(i.t.bind(i,"l9FY",19)),name:"Proof Light"}}),d(n.Rg.RAYCAST,{dark:{load:()=>i.e(720712).then(i.t.bind(i,"NRWZ",19)),name:"Raycast Dark"},light:{load:()=>i.e(323106).then(i.t.bind(i,"Aa5z",19)),name:"Raycast Light"}}),h(n.Rg.ROSE_PINE,{dark:"rose-pine-moon",light:"rose-pine-dawn"}),d(n.Rg.SENTRY,{dark:{load:()=>i.e(929734).then(i.t.bind(i,"ddRp",19)),name:"Sentry Dark"}}),h(n.Rg.SOLARIZED,{dark:"solarized-dark",light:"solarized-light"}),h(n.Rg.TOKYO_NIGHT,{dark:"tokyo-night"}),d(n.Rg.TEMPLE,{dark:{load:()=>i.e(872908).then(i.t.bind(i,"bzAW",19)),name:"Temple Dark"}}),d(n.Rg.VERCEL,{dark:{load:()=>i.e(820950).then(i.t.bind(i,"aE4H",19)),name:"Vercel Dark"},light:{load:()=>i.e(3528).then(i.t.bind(i,"wyj1",19)),name:"Vercel Light"}}),h(n.Rg.VSCODE_PLUS,{dark:"dark-plus",light:"light-plus"}),d(n.Rg.XCODE,{dark:{load:()=>i.e(617562).then(i.t.bind(i,"nao7",19)),name:"Xcode Dark"},light:{load:()=>i.e(600788).then(i.t.bind(i,"W6Nn",19)),name:"Xcode Light"}})];function o(){return s.flatMap(e=>Object.values(e.registrationByVariant)).filter(e=>null!=e)}function l(e,t){let{id:i}=(0,n.aD)(e,t),r=s.find(e=>e.id===i)?.registrationByVariant[t];if(null==r)throw Error(`Missing ${t} code theme registration`);return r}function h(e,t){let i=t.dark,r=t.light;return d(e,{dark:null==i?void 0:{load:()=>a[i](),name:i},light:null==r?void 0:{load:()=>a[r](),name:r}})}function d(e,t){let i={},r=t.dark,n=t.light;return null!=r&&(i.dark=u(r.name,r.load)),null!=n&&(i.light=u(n.name,n.load)),{id:e,registrationByVariant:i}}function u(e,t){let i=null;return{load:async()=>(null==i&&(i=t().then(e=>"object"==typeof e&&null!=e&&"default"in e?e.default:e).catch(e=>{throw i=null,e})),i),name:e}}},Iv6t(e,t,i){let r=(()=>{try{return!1}catch{return!1}})(),n={hunkLineCount:50,lineHeight:20,diffHeaderHeight:44,spacing:8},a={...n,hunkLineCount:1},s=Object.freeze({fromStart:0,fromEnd:0});i.d(t,{},{$Z:{startingLine:0,totalLines:0,bufferBefore:0,bufferAfter:0},Bc:{dark:"pierre-dark",light:"pierre-light"},EQ:/^index ([0-9a-f]+)\.\.([0-9a-f]+)(?: (\d+))?$/i,GO:"data-unsafe-css",Hz:{startingLine:0,totalLines:1/0,bufferBefore:0,bufferAfter:0},J9:n,N9:s,OI:/[^\n]*\n|[^\n]+/g,R4:"data-diffs-code-view-footer",VV:"data-diffs-code-view-header",Z6:{paddingTop:8,paddingBottom:8,gap:8},a3:"header-prefix",bY:/(?=^From [a-f0-9]+ .+$)/m,c:/(?=^diff --git)/gm,db:"header-filename-suffix",eQ:/^(---|\+\+\+)\s+([^\t\r\n]+)/,fv:"header-custom",hU:{omega:.015,positionEpsilon:.5,velocityEpsilon:.05},jz:"data-theme-css",mZ:"diffs-container",pz:"header-metadata",tb:"--diffs-scrollbar-gutter-measured",un:r,w4:"data-diffs-scrollbar-measure",zA:a})},z85a(e,t,i){var r=i("lkic"),n=class{source;offset;length;lineOffsetStart;lineOffsetEnd;hasVirtualTrailingCRBreak;firstCharCode;lastCharCode;static Original=0;static Added=1;constructor(e,t,i,r,n,a,s,o){this.source=e,this.offset=t,this.length=i,this.lineOffsetStart=r,this.lineOffsetEnd=n,this.hasVirtualTrailingCRBreak=a,this.firstCharCode=s,this.lastCharCode=o}get lineBreakCount(){return this.lineOffsetEnd-this.lineOffsetStart+ +!!this.hasVirtualTrailingCRBreak}},a=class{text;lineOffsets;constructor(e){this.text=e,this.lineOffsets=(0,r.sr)(e)}append(e){let t=this.text.length;for(let i=0;i<e.length;i++){let r=e.charCodeAt(i);(10===r||13===r)&&(13===r&&10===e.charCodeAt(i+1)&&i++,this.lineOffsets.push(t+i+1))}return this.text+=e,t}},s=class{piece;subtreeLength;subtreeLineBreakCount;subtreeFirstCharCode;subtreeLastCharCode;left=null;right=null;parent=null;priority=0;constructor(e,t=e.length,i=e.lineBreakCount,r=e.firstCharCode,n=e.lastCharCode){this.piece=e,this.subtreeLength=t,this.subtreeLineBreakCount=i,this.subtreeFirstCharCode=r,this.subtreeLastCharCode=n}updateSubtreeLength(){this.subtreeLength=(this.left?.subtreeLength??0)+this.piece.length+(this.right?.subtreeLength??0),this.subtreeLineBreakCount=(this.left?.subtreeLineBreakCount??0)+this.piece.lineBreakCount+(this.right?.subtreeLineBreakCount??0)-!!u(this.left?.subtreeLastCharCode,this.piece.firstCharCode)-!!u(this.piece.lastCharCode,this.right?.subtreeFirstCharCode),this.subtreeFirstCharCode=this.left?.subtreeFirstCharCode??this.piece.firstCharCode,this.subtreeLastCharCode=this.right?.subtreeLastCharCode??this.piece.lastCharCode}},o=class{#e;#t=new a("");#i=null;#r=0;#n=0;#a=null;#s=null;#o=null;#l=0x9e3779b9;constructor(e){this.#e=new a(e);let t=this.#h(n.Original,0,e.length);this.#i=t.length>0?this.#d(t):null,this.#r=this.#i?.subtreeLength??0,this.#n=(this.#i?.subtreeLineBreakCount??0)+1}get lineCount(){return this.#n}getText(e){if(void 0===e)return this.#u();let t=this.offsetAt(e.start),i=this.offsetAt(e.end);return this.getTextSlice(t,i)}getLineText(e,t=!1){if(null!==this.#a&&this.#a[0]===e&&this.#a[1]===t)return this.#a[2];let i=this.#c(e);if(void 0===i)throw Error(`Line index out of range: ${e}`);let r=this.getTextSlice(i[0],i[1],!t);return this.#a=[e,t,r],this.#s=[e,t,r.length],r}getLineLength(e,t=!1){let i=this.#s,r=this.#a;if(null!==i&&i[0]===e&&i[1]===t)return i[2];if(null!==r&&r[0]===e&&r[1]===t){let i=r[2].length;return this.#s=[e,t,i],i}let n=this.#c(e);if(void 0===n)throw Error(`Line index out of range: ${e}`);let[a,s]=n,o=s-a;if(!t)for(;o>0&&l(this.charAt(a+o-1).charCodeAt(0));)o--;return this.#s=[e,t,o],o}getTextSlice(e,t,i=!1){if(e>=t)return"";let r=h(e,0,this.#r),n=h(t,r,this.#r);if(r>=n)return"";let a=this.#f(r);if(void 0===a)return"";let s=[],[o,d]=a,u=n-r;for(;null!==o&&u>0;){let e=Math.min(o.piece.length-d,u),t=this.#g(o.piece.source),r=o.piece.offset+d,n=r+e;if(i)for(;n>r&&l(t.text.charCodeAt(n-1));)n--;s.push(t.text.slice(r,n)),u-=e,d=0,o=this.#p(o)}return s.join("")}charAt(e){let t=this.#f(e);if(void 0===t)return"";let[i,r]=t;return this.#g(i.piece.source).text.charAt(i.piece.offset+r)}includes(e){if(0===e.length)return!0;let t=d(e),i=0,r=!1;return this.#m(n=>{for(let a=n.start;a<n.end;a++){let s=n.text.charCodeAt(a);for(;i>0&&s!==e.charCodeAt(i);)i=t[i-1];if(s===e.charCodeAt(i)&&i++,i===e.length)return r=!0,!1}return!0}),r}findNextNonOverlappingSubstring(e,t){let i,r;if(0===e.length||e.length>this.#r)return;let n=function(e,t){let i=[];for(let[r,n]of e){let e=h(r,0,t),a=h(n,e,t);e<a&&i.push([e,a])}i.sort((e,t)=>e[0]-t[0]);let r=[];for(let e of i){let t=r[r.length-1];if(void 0!==t&&e[0]<=t[1]){t[1]=Math.max(t[1],e[1]);continue}r.push(e)}return r}(t,this.#r),a=n.reduce((e,[,t])=>Math.max(e,t),0),s=d(e),o=0,l=0;return this.#m(t=>{for(let h=t.start;h<t.end;h++){let d=t.text.charCodeAt(h);for(;o>0&&d!==e.charCodeAt(o);)o=s[o-1];if(d===e.charCodeAt(o)&&o++,o===e.length){let t=l-e.length+1;if(!function(e,t,i){let r=0,n=e.length;for(;r<n;){let i=r+Math.floor((n-r)/2);e[i][1]<=t?r=i+1:n=i}let a=e[r];return void 0!==a&&a[0]<i}(n,t,t+e.length)){if(t>=a)return r=t,!1;i??=t}o=s[o-1]}l++}return!0}),r??i}search(e,t){let i;if(0===e.text.length||0===this.#r||e.text.includes("\n")||e.text.includes("\r")||e.regex&&/(?:^|[^\\])(?:\\\\)*\\[nr]/.test(e.text))return[];try{i=function(e,t,i,r=!1){return RegExp(t?e:e.replace(/[.*+?^${}()|[\]\\]/g,"\\$&"),`g${i?"":"i"}${t?"m":""}${r?"d":""}`)}(e.text,e.regex,e.caseSensitive,void 0!==t)}catch{return[]}return this.#k(i,e.wholeWord,1e5,t)}#k(e,t,i,n){let a=[],s=this.#u(),o=s.length,h=(0,r.sr)(s);for(let r=0;r<h.length;r++){let d,u=h[r],c=h[r+1]??o;for(;c>u&&l(s.charCodeAt(c-1));)c--;let p=s.slice(u,c);for(e.lastIndex=0;null!==(d=e.exec(p));){let r=d.index,o=d[0];if(0===o.length){e.lastIndex=g(p,r);continue}let l=u+r;if((!t||function(e,t,i){let r=t<=0||f(e.charCodeAt(t-1)),n=t+i>=e.length||f(e.charCodeAt(t+i));return r&&n}(s,l,o.length))&&(a.push([l,l+o.length]),void 0!==n&&d.indices.length>1&&n.push(d.indices.slice(1).map(e=>void 0===e?void 0:[u+e[0],u+e[1]])),a.length>=i))return a;r===e.lastIndex&&(e.lastIndex=g(p,r))}}return a}insert(e,t){if(0===e.length)return;let i=h(t,0,this.#r);this.#b(i,i,e),this.#y()}delete(e,t){if(t<=0||0===this.#r)return;let i=h(e,0,this.#r),r=h(i+t,i,this.#r);i!==r&&(this.#b(i,r,""),this.#y())}applyEdits(e){if(0!==e.length){for(let t=e.length-1;t>=0;t--){let i=e[t],r=h(i.start,0,this.#r),n=h(i.end,r,this.#r);this.#b(r,n,i.text)}this.#y()}}positionAt(e){let t=h(e,0,this.#r);if(0===this.#r)return{line:0,character:0};let i=this.#v(t),r=t-(0===i?0:this.#C(i-1));return this.#o=[i,r,t],{line:i,character:r}}positionsAt(e){let t=Array.from({length:e.length});if(0===e.length)return t;if(0===this.#r)return t.fill({line:0,character:0});for(let i=0;i<e.length;i++)t[i]=this.positionAt(e[i]);return t}offsetAt(e){if(e.line<0||0===this.#r)return 0;if(e.line>=this.#n)throw Error(`Line index out of range: ${e.line}`);let t=this.#o;if(null!==t&&t[0]===e.line&&t[1]===e.character)return t[2];let i=this.#c(e.line);if(void 0===i)throw Error(`Line index out of range: ${e.line}`);let r=h(e.character,0,i[1]-i[0]);return i[0]+r}#f(e){if(e<0||e>=this.#r)return;let t=this.#i,i=e;for(;null!==t;){let e=t.left?.subtreeLength??0;if(i<e){t=t.left;continue}if((i-=e)<t.piece.length)return[t,i];i-=t.piece.length,t=t.right}}#p(e){if(null!==e.right){let t=e.right;for(;null!==t.left;)t=t.left;return t}let t=e;for(;null!==t.parent&&t===t.parent.right;)t=t.parent;return t.parent}#c(e){if(e<0)throw Error(`Line index out of range: ${e}`);if(0===this.#r){if(0===e)return[0,0];throw Error(`Line index out of range: ${e}`)}if(e>=this.#n)throw Error(`Line index out of range: ${e}`);return[0===e?0:this.#C(e-1),e<this.#n-1?this.#C(e):this.#r]}#v(e){let t=this.#i,i=h(e,0,this.#r),r=0;for(;null!==t;){let e=t.left?.subtreeLength??0;if(i<e){t=t.left;continue}if(r+=(t.left?.subtreeLineBreakCount??0)-!!u(t.left?.subtreeLastCharCode,t.piece.firstCharCode),(i-=e)<=t.piece.length)return r+=Math.min(c(this.#g(t.piece.source).lineOffsets,t.piece.offset+i),t.piece.lineOffsetEnd)-t.piece.lineOffsetStart,i===t.piece.length&&t.piece.hasVirtualTrailingCRBreak&&r++,i===t.piece.length&&u(t.piece.lastCharCode,this.#p(t)?.piece.firstCharCode)&&r--,r;r+=t.piece.lineBreakCount-!!u(t.piece.lastCharCode,t.right?.subtreeFirstCharCode),i-=t.piece.length,t=t.right}return this.#n-1}#C(e){let t,i=this.#i,r=e,n=0;for(;null!==i;){let e=(i.left?.subtreeLineBreakCount??0)-!!u(i.left?.subtreeLastCharCode,i.piece.firstCharCode);if(r<e){t=i.piece.firstCharCode,i=i.left;continue}n+=i.left?.subtreeLength??0,r-=e;let a=i.right?.subtreeFirstCharCode??t,s=i.piece.lineBreakCount-!!u(i.piece.lastCharCode,a);if(r<s)return n+this.#x(i.piece,r);n+=i.piece.length,r-=s,i=i.right}return this.#r}#x(e,t){return t<e.lineOffsetEnd-e.lineOffsetStart?this.#g(e.source).lineOffsets[e.lineOffsetStart+t]-e.offset:e.length}#u(){let e=[];return this.#m(t=>{e.push(t.text.slice(t.start,t.end))}),e.join("")}#m(e){this.#w(this.#i,t=>{let i=this.#g(t.piece.source);return e({text:i.text,lineOffsets:i.lineOffsets,lineOffsetStart:t.piece.lineOffsetStart,lineOffsetEnd:t.piece.lineOffsetEnd,start:t.piece.offset,end:t.piece.offset+t.piece.length})})}#g(e){return e===n.Original?this.#e:this.#t}#h(e,t,i){let r=this.#g(e),a=t+i,s=c(r.lineOffsets,t),o=c(r.lineOffsets,a),l=r.text.charCodeAt(a-1);return new n(e,t,i,s,o,13===l&&r.lineOffsets[o-1]!==a,r.text.charCodeAt(t),l)}#b(e,t,i){let r;if(e===t&&0===i.length)return;let[a,s]=this.#T(this.#i,e),o=this.#R(s,t-e);if(i.length>0){let e=this.#h(n.Added,this.#t.append(i),i.length);r=this.#L(this.#S(a,e),o)}else{let[e,t]=this.#q(o);r=void 0===e?a:this.#L(this.#S(a,e),t)}null!==r&&(r.parent=null),this.#i=r,this.#r=r?.subtreeLength??0,this.#n=(r?.subtreeLineBreakCount??0)+1}#y(){this.#a=null,this.#s=null,this.#o=null}#O(){return this.#l=Math.imul(this.#l,1664525)+0x3c6ef35f>>>0,this.#l}#d(e){let t=new s(e);return t.priority=this.#O(),t}#I(e,t){e.left=t,null!==t&&(t.parent=e)}#A(e,t){e.right=t,null!==t&&(t.parent=e)}#T(e,t){if(null===e)return[null,null];if(t<=0)return[null,e];if(t>=e.subtreeLength)return[e,null];let i=e.left?.subtreeLength??0;if(t<=i){let[i,r]=this.#T(e.left,t);return this.#I(e,r),e.updateSubtreeLength(),[i,e]}let r=e.piece.length;if(t>=i+r){let[n,a]=this.#T(e.right,t-i-r);return this.#A(e,n),e.updateSubtreeLength(),[e,a]}let n=t-i,a=new s(this.#h(e.piece.source,e.piece.offset,n)),o=new s(this.#h(e.piece.source,e.piece.offset+n,r-n));return a.priority=e.priority,o.priority=e.priority,this.#I(a,e.left),this.#A(o,e.right),a.updateSubtreeLength(),o.updateSubtreeLength(),[a,o]}#R(e,t){if(null===e||t>=e.subtreeLength)return null;if(t<=0)return e;let i=e.left?.subtreeLength??0;if(t<=i)return this.#I(e,this.#R(e.left,t)),e.updateSubtreeLength(),e;let r=i+e.piece.length;if(t>=r)return this.#R(e.right,t-r);let n=t-i,a=new s(this.#h(e.piece.source,e.piece.offset+n,e.piece.length-n));return a.priority=e.priority,this.#A(a,e.right),a.updateSubtreeLength(),a}#L(e,t){return null===e?t:null===t?e:e.priority>=t.priority?(this.#A(e,this.#L(e.right,t)),e.updateSubtreeLength(),e):(this.#I(t,this.#L(e,t.left)),t.updateSubtreeLength(),t)}#S(e,t){var i,r,a,s;if(null===e)return this.#d(t);let o=e;for(;null!==o.right;)o=o.right;if(i=o.piece,r=t,i.source===r.source&&i.offset+i.length===r.offset&&!u(i.lastCharCode,r.firstCharCode)){o.piece=(a=o.piece,s=t,new n(a.source,a.offset,a.length+s.length,a.lineOffsetStart,s.lineOffsetEnd,s.hasVirtualTrailingCRBreak,a.firstCharCode,s.lastCharCode));for(let t=o;null!==t&&(t.updateSubtreeLength(),t!==e);)t=t.parent;return e}return this.#L(e,this.#d(t))}#q(e){if(null===e)return[void 0,null];if(null===e.left)return[e.piece,e.right];let[t,i]=this.#q(e.left);return this.#I(e,i),e.updateSubtreeLength(),[t,e]}#w(e,t){return null===e||!!this.#w(e.left,t)&&!1!==t(e)&&this.#w(e.right,t)}};function l(e){return 10===e||13===e}function h(e,t,i){return Math.min(Math.max(e,t),i)}function d(e){let t=Array.from({length:e.length}).fill(0),i=0;for(let r=1;r<e.length;r++){let n=e.charCodeAt(r);for(;i>0&&n!==e.charCodeAt(i);)i=t[i-1];n===e.charCodeAt(i)&&i++,t[r]=i}return t}function u(e,t){return 13===e&&10===t}function c(e,t){let i=0,r=e.length;for(;i<r;){let n=i+Math.floor((r-i)/2);e[n]<=t?i=n+1:r=n}return i}function f(e){if(e<=32||127===e)return!0;let t=String.fromCharCode(e);return"`~!@#$%^&*()-=+[{]}\\|;:'\",.<>/?".includes(t)||/\s/.test(t)}function g(e,t){if(t+1<e.length){let i=e.charCodeAt(t),r=e.charCodeAt(t+1);if(i>=55296&&i<=56319&&r>=56320&&r<=57343)return t+2}return t+1}i.d(t,{},{G1:function(e,t){return e.replace(/\$([$&]|\d+)/g,(e,i)=>"$"===i?"$":t("&"===i?0:Number(i))??"")},vC:o})},Toxo(e,t,i){var r=i("m0rx"),n=i("HLAW");i.d(t,{},{p:async function(e){if("u">typeof __DIFFS_WORKER__?__DIFFS_WORKER__:(0,n.e)())throw Error(`resolveLanguage("${e}") cannot be called from a worker context. Languages must be pre-resolved on the main thread and passed to the worker via the resolvedLanguages parameter.`);let t=r.$.get(e);if(null!=t)return t;let a=(async()=>{let t=r.nb.get(e);if(null==t){let{bundledLanguages:r}=await i.e(444339).then(i.bind(i,"sdjL"));Object.prototype.hasOwnProperty.call(r,e)&&(t=r[e])}if(null==t)throw Error(`resolveLanguage: "${e}" not found in bundled or custom languages`);let{default:n}=await t(),a={name:e,data:n};return r.Qf.has(e)||r.Qf.set(e,a),a})();r.$.set(e,a);try{return await a}finally{r.$.get(e)===a&&r.$.delete(e)}}})},uoUW(e,t,i){i.d(t,{c:()=>a});var r=i("Toxo"),n=i("m0rx");async function a(e){let t=[],i=[];for(let a of e){if("text"===a||"ansi"===a)continue;let e=n.Qf.get(a)??(0,r.p)(a)??(0,r.p)(a);"then"in e?i.push(e):t.push(e)}return i.length>0&&await Promise.all(i).then(e=>{for(let i of e){if(null==i)throw Error("resolvedLanguages: unable to resolve language");t.push(i)}}),t}},gz4m(e,t,i){var r=i("vo7L"),n=i("zd8w"),a=i("ABep");let s=(0,n.createContext)(void 0);i.d(t,{},{Bi:function(){return(0,n.useContext)(s)},eo:function({children:e,createEditor:t}){let i=(0,r.K)((e,i,r)=>t(e,i,r));return(0,a.jsx)(s.Provider,{value:i,children:e})}})},nB97(e,t,i){var r=i("zd8w");i("ABep");let n=(0,r.createContext)(void 0);i.d(t,{},{Te:function(){return(0,r.useContext)(n)},Xg:n})},ms37(e,t,i){let r;i.d(t,{Al:()=>K,vv:()=>V,iy:()=>W});var n=i("SsF5"),a=i("Iv6t"),s=i("wMdx"),o=i("Vii7"),l=i("izWF"),h=i("Fy35"),d=i("EKvh"),u=i("Cdiq"),c=i("c7YV"),f=i("IKiT"),g=i("cxgw"),p=i("szaK"),m=i("jcZ6"),k=i("vFEq"),b=i("ieZI"),y=i("uZNn"),v=i("eEbG"),C=i("m0rx");function x(e){let t=[];for(let i of e){let e=C.Qf.get(i);if(null==e)throw Error(`getResolvedLanguages: ${i} is not resolved. Please resolve languages before calling getResolvedLanguages`);t.push(e)}return t}function w(e){for(let t of Array.isArray(e)?e:[e])if(!C.Qf.has(t))return!1;return!0}var T=i("uoUW"),R=i("wC4q");function L(e,t=(0,s.C$)()){return(0,R.Q)(t).getResolvedThemes(e)}function S(e,t=(0,s.C$)()){return(0,R.Q)(t).hasResolvedThemes(e)}function q(e,t=(0,s.C$)()){return(0,R.Q)(t).resolveThemes(e)}var O=i("nwrT");let I=[void 0,null,!0,!1];function A(e){if(Array.isArray(e))return e;let{ops:t,offsets:i,strings:r,text:n,extras:a}=e,s=Array(i.length/2),o=0,l=0;for(let e=0;e<s.length;e++)0!==t[i[2*e]]&&(0,O.g)(s,e,()=>(o=i[2*e],l=i[2*e+1],function e(i){let s=Array(i);for(let h=0;h<i;h++){let i=t[o++];if(0!==i)if(1===i){let e=l+t[o++];s[h]={type:"text",value:n.slice(l,e)},l=e}else if(2===i){let i=r[t[o++]],n={};for(let e=t[o++];e>0;e--){let e=r[t[o++]],i=t[o++],s=4===i?r[t[o++]]:5===i?t[o++]:6===i?a[t[o++]]:I[i];"__proto__"===e?Object.defineProperty(n,e,{value:s,enumerable:!0,configurable:!0,writable:!0}):n[e]=s}s[h]={type:"element",tagName:i,properties:n,children:e(t[o++])}}else s[h]=a[t[o++]]}return s}(1)[0]));return s}var B=i("FXHo");let E=Symbol("IGNORE_RESPONSE");var z=class{options;preferredHighlighter;renderOptions;renderOptionsRequestVersion=0;renderOptionsVersion=0;initialized=!1;workers=[];queuedTasks=[];queuedTaskByInstance=new Map;taskByHighlightKey=new Map;activeTaskById=new Map;activeRequestByInstance=new Map;nextRequestId=0;themeSubscribers=new Set;workersFailed=!1;statSubscribers=new Set;fileCache;diffCache;_queuedBroadcast;lifecycleGeneration=0;constructor(e,{langs:t,theme:i=a.Bc,useTokenTransformer:r=!1,lineDiffType:n="word-alt",maxLineDiffLength:o=1e3,tokenizeMaxLineLength:l=1e3,preferredHighlighter:h}){this.options=e,this.preferredHighlighter=(0,s.C$)(h),this.renderOptions={theme:i,useTokenTransformer:r,lineDiffType:n,maxLineDiffLength:o,tokenizeMaxLineLength:l},this.fileCache=new B.LRUMap(e.totalASTLRUCacheSize??100),this.diffCache=new B.LRUMap(e.totalASTLRUCacheSize??100),this.queueInitialization(t)}isWorkingPool(){return!this.workersFailed}getFileResultCache(e){return null!=e.cacheKey?this.fileCache.get(e.cacheKey):void 0}getDiffResultCache(e){return null!=e.cacheKey?this.diffCache.get(e.cacheKey):void 0}inspectCaches(){let{fileCache:e,diffCache:t}=this;return{fileCache:e,diffCache:t}}evictFileFromCache(e){try{return void 0!==this.fileCache.delete(e)}finally{this.queueBroadcastStateChanges()}}evictDiffFromCache(e){try{return void 0!==this.diffCache.delete(e)}finally{this.queueBroadcastStateChanges()}}async setRenderOptions({theme:e=this.renderOptions.theme??a.Bc,useTokenTransformer:t=this.renderOptions.useTokenTransformer??!1,lineDiffType:i=this.renderOptions.lineDiffType??"word-alt",maxLineDiffLength:r=this.renderOptions.maxLineDiffLength??1e3,tokenizeMaxLineLength:n=this.renderOptions.tokenizeMaxLineLength??1e3}){let{lifecycleGeneration:s}=this,d=++this.renderOptionsRequestVersion,u=()=>this.isCurrentLifecycle(s)&&this.renderOptionsRequestVersion===d;try{let a={theme:e,useTokenTransformer:t,lineDiffType:i,maxLineDiffLength:r,tokenizeMaxLineLength:n};if(this.isInitialized()||await this.initialize(),!u()||(0,b.S)(a,this.renderOptions))return;let s=(0,o.$)(e),d=[];if((0,h.J)(a.theme,this.renderOptions.theme)||(d=S(s,this.preferredHighlighter)?L(s,this.preferredHighlighter):await q(s,this.preferredHighlighter)),!u()||null==(0,l.Ow)({theme:e})&&(await this.loadSharedHighlighter(s,["text"]),!u()))return;let c=this.setRenderOptionsOnWorkers(a,d);for(let e of(this.renderOptions=a,this.renderOptionsVersion++,this.diffCache.clear(),this.fileCache.clear(),this.invalidateRenderTasks(),this.themeSubscribers))e.onThemeChange();await c}catch(e){if(e instanceof p.kO||!u())return;throw e}}getPreferredHighlighter(){return this.preferredHighlighter}getFileRenderOptions(){let{tokenizeMaxLineLength:e,theme:t,useTokenTransformer:i}=this.renderOptions;return{theme:t,useTokenTransformer:i,tokenizeMaxLineLength:e}}getDiffRenderOptions(){return{...this.renderOptions}}async setRenderOptionsOnWorkers(e,t){if(this.workersFailed)return;this.isInitialized()||await this.initialize();let i=[];for(let r of this.workers){if(!r.initialized)throw console.log({managedWorker:r}),Error("setRenderOptionsOnWorkers: Somehow we have an uninitialized worker");i.push(new Promise((i,n)=>{let a=this.generateRequestId(),s={type:"set-render-options",id:a,request:{type:"set-render-options",id:a,renderOptions:e,resolvedThemes:t},resolve:i,reject:n,requestStart:Date.now()};this.activeTaskById.set(a,s),r.pendingSetupRequestId=a,r.worker.postMessage(s.request)}))}await Promise.all(i)}subscribeToThemeChanges(e){return this.themeSubscribers.add(e),this.queueBroadcastStateChanges(),()=>{this.unsubscribeToThemeChanges(e),this.queueBroadcastStateChanges()}}unsubscribeToThemeChanges(e){this.themeSubscribers.delete(e),this.queueBroadcastStateChanges()}subscribeToStatChanges(e){return this.statSubscribers.add(e),e(this.getStats()),()=>{this.statSubscribers.delete(e)}}queueBroadcastStateChanges(){null==this._queuedBroadcast&&(this._queuedBroadcast=requestAnimationFrame(this._broadcastStateChanges))}_broadcastStateChanges=()=>{null!=this._queuedBroadcast&&(cancelAnimationFrame(this._queuedBroadcast),this._queuedBroadcast=void 0);let e=this.getStats();for(let t of this.statSubscribers)t(e)};cleanUpTasks(e){this.detachInstanceFromQueuedTasks(e);let t=this.activeRequestByInstance.get(e);if(null!=t){let i=this.activeTaskById.get(t);$(i)?(this.detachInstanceFromRenderTask(i,e),i.primeCache||0!==i.instances.size||this.removeActiveTask(i)):this.activeTaskById.delete(t)}this.activeRequestByInstance.delete(e),this.queueBroadcastStateChanges()}isInitialized(){return!0===this.initialized}async initialize(e=[]){if(!0===this.initialized){null==(0,l.Ow)({theme:this.renderOptions.theme})&&await this.loadSharedHighlighter((0,o.$)(this.renderOptions.theme),["text",...e]);return}if(!1!==this.initialized)return this.initialized;{let{lifecycleGeneration:t}=this,i=new Promise((i,r)=>{(async()=>{try{let r=(0,o.$)(this.renderOptions.theme),a=S(r,this.preferredHighlighter)?L(r,this.preferredHighlighter):await q(r,this.preferredHighlighter);if(!this.isCurrentLifecycle(t))return void i();let s=[],l="highlights"===this.preferredHighlighter?e.filter(e=>!(0,n.D4)(e)):e;if(s=w(l)?x(l):await (0,T.c)(l),!this.isCurrentLifecycle(t))return void i();if(await Promise.all([this.loadSharedHighlighter(r,["text",...e]),this.initializeWorkers(a,s)]),!this.isCurrentLifecycle(t)){this.terminateWorkers(),i();return}this.initialized=!0,this.diffCache.clear(),this.fileCache.clear(),this.drainQueue(),this.queueBroadcastStateChanges(),i()}catch(e){if(e instanceof p.kO||!this.isCurrentLifecycle(t))return void i();for(let t of(this.initialized=!1,this.workersFailed=!0,this.cancelActiveWorkerTasks(),this.terminateWorkers(),this.activeTaskById.clear(),this.queuedTasks))this.rejectRenderTaskCallbacks(t,H(e));this.queueBroadcastStateChanges(),r(e)}})()});return this.initialized=i,this.queueBroadcastStateChanges(),i}}async loadSharedHighlighter(e,t){try{await (0,l.xm)({themes:e,langs:t,preferredHighlighter:this.preferredHighlighter})}catch(e){if(!(e instanceof s.tP))throw e}}async initializeWorkers(e,t){let i;this.workersFailed=!1;let r=[],n=(0,c.iD)(),a=n>0?(0,c.yy)():void 0;this.workers.length>0&&this.terminateWorkers();for(let i=0;i<(this.options.poolSize??8);i++){let i=this.options.workerFactory(),s={worker:i,requestId:void 0,pendingSetupRequestId:void 0,initialized:!1,langs:new Set(["text",...t.map(({name:e})=>e)]),customExtensionsVersion:0};i.addEventListener("message",e=>{this.handleWorkerMessage(s,e.data)}),i.addEventListener("error",e=>this.handleWorkerError(s,e)),this.workers.push(s),r.push(new Promise((i,r)=>{let o=this.generateRequestId(),l={type:"initialize",id:o,request:{type:"initialize",resultFormat:"hast-ops-v1",id:o,renderOptions:this.renderOptions,preferredHighlighter:this.preferredHighlighter,resolvedThemes:e,resolvedLanguages:t,customExtensionsVersion:null!=a?n:void 0,customExtensionMap:a},resolve(){s.initialized=!0,i()},reject:r,requestStart:Date.now()};s.pendingSetupRequestId=o,this.activeTaskById.set(o,l),this.executeTask(s,l)}))}let s=this.options.workerInitializationTimeout??1e4;try{await Promise.race([Promise.all(r),new Promise((e,t)=>{i=setTimeout(()=>{t(Error(`WorkerPoolManager: worker initialization timed out after ${s}ms`))},s)})])}finally{null!=i&&clearTimeout(i)}}handleWorkerError(e,t){var i;let r,n,{onWorkerError:a}=this.options;if(null!=a)try{a(t,e.worker)}catch(e){console.error("WorkerPoolManager: onWorkerError threw:",e)}else console.error("Worker error:",t,e);let{pendingSetupRequestId:s}=e;if(null==s)return;let o=this.activeTaskById.get(s);if(o?.type!=="initialize")return;let l=(r="error"in(i=t)?i.error:void 0,n="message"in i&&"string"==typeof i.message&&""!==i.message?i.message:r instanceof Error?r.message:"the worker script failed to load (the error event carries no message)",new p.hH(`WorkerPoolManager: worker failed: ${n}`,r instanceof Error?{cause:r}:void 0));null!=a&&(0,p.HS)(l),o.reject(l),this.cleanWorkerAndTask(e,o)}drainQueue=()=>{if(this._queuedDrain=void 0,!0===this.initialized&&0!==this.queuedTasks.length){for(let e=0;e<this.queuedTasks.length;){let t=this.queuedTasks[e];if(this.hasActiveRequest(t)){e++;continue}let i=function(e){let t=new Set;if("initialize"===e.type||"set-render-options"===e.type)return[];switch(e.type){case"file":t.add(e.request.file.lang??(0,c.oH)(e.request.file.name));break;case"diff":t.add(e.request.diff.lang??(0,c.oH)(e.request.diff.name)),t.add(e.request.diff.lang??(0,c.oH)(e.request.diff.prevName??"-"))}return t.delete("text"),Array.from(t)}(t),r=this.getAvailableWorker(i);if(null==r)break;this.queuedTasks.splice(e,1),this.assignWorkerToTask(t,r),this.resolveLanguagesAndExecuteTask(r,t,i)}this.queueBroadcastStateChanges()}};highlightFileAST(e,t){let i=this.getFileResultCache(t);!((0,f.a)(t)||null!=i&&(0,u.F)(i.options,this.getFileRenderOptions()))&&(this.hasMatchingFileInstanceTask(e,t)||this.submitTask(e,{type:"file",file:t}))}primeFileHighlightCache(e){if(!this.isWorkingPool())return Promise.reject(Error("WorkerPoolManager.primeFileHighlightCache: worker pool is not working"));let t=this.getOrCreateFileHighlightCacheTask(e);return null!=t?this.createRenderTaskCallbacks(t):Promise.resolve()}getOrCreateFileHighlightCacheTask(e){if(null==e.cacheKey)return void console.warn(`WorkerPoolManager.primeFileHighlightCache: priming highlight cache requires file.cacheKey; skipping "${e.name}".`);let t=this.getFileResultCache(e),i=this.getFileHighlightKey(e);if(null==i||(0,f.a)(e)||null!=t&&(0,u.F)(t.options,this.getFileRenderOptions()))return;let r=this.getTaskByHighlightKey(i);if(null!=r)return r.primeCache=!0,"file"===r.type?r:void 0;{let t=this.submitCacheTask({type:"file",file:e},i);return"file"===t.type?t:void 0}}getPlainFileAST(e,t,i,r){let n=(0,l.Ow)({theme:this.renderOptions.theme});return null==n?void this.queueInitialization():(0,g.m)(e,n,this.renderOptions,{forcePlainText:!0,startingLine:t,totalLines:i,lines:r})}highlightDiffAST(e,t){let i=this.getDiffResultCache(t);!((0,y.n)(t)||null!=i&&(0,b.S)(i.options,this.getDiffRenderOptions()))&&(this.hasMatchingDiffInstanceTask(e,t)||this.submitTask(e,{type:"diff",diff:t}))}primeDiffHighlightCache(e){if(!this.isWorkingPool())return Promise.reject(Error("WorkerPoolManager.primeDiffHighlightCache: worker pool is not working"));let t=this.getOrCreateDiffHighlightCacheTask(e);return null!=t?this.createRenderTaskCallbacks(t):Promise.resolve()}getOrCreateDiffHighlightCacheTask(e){if(null==e.cacheKey)return void console.warn(`WorkerPoolManager.primeDiffHighlightCache: priming highlight cache requires diff.cacheKey; skipping "${e.prevName??e.name}" -> "${e.name}".`);let t=this.getDiffResultCache(e),i=this.getDiffHighlightKey(e);if(null==i||(0,y.n)(e)||null!=t&&(0,b.S)(t.options,this.getDiffRenderOptions()))return;let r=this.getTaskByHighlightKey(i);if(null!=r)return r.primeCache=!0,"diff"===r.type?r:void 0;{let t=this.submitCacheTask({type:"diff",diff:e},i);return"diff"===t.type?t:void 0}}getPlainDiffAST(e,t,i,r,n){let a=(0,l.Ow)({theme:this.renderOptions.theme});return null==a?void this.queueInitialization():(0,v.B)(e,a,this.renderOptions,{forcePlainText:!0,startingLine:t,totalLines:i,expandedHunks:r,collapsedContextThreshold:n})}terminate(){this.lifecycleGeneration++,this.cancelActiveWorkerTasks(),this.terminateWorkers();let e=new p.kO;for(let t of this.queuedTasks)this.rejectRenderTaskCallbacks(t,e);this.fileCache.clear(),this.diffCache.clear(),this.activeRequestByInstance.clear(),this.queuedTasks.length=0,this.queuedTaskByInstance.clear(),this.taskByHighlightKey.clear(),this.activeTaskById.clear(),this.initialized=!1,this.workersFailed=!1,this.queueBroadcastStateChanges()}isCurrentLifecycle(e){return this.lifecycleGeneration===e}queueInitialization(e){this.initialize(e).catch(e=>{(0,p.n1)(e)||console.error(e)})}cancelActiveWorkerTasks(){let e=new p.kO;for(let t of this.activeTaskById.values())"reject"in t?t.reject(e):$(t)&&this.rejectRenderTaskCallbacks(t,e)}terminateWorkers(){for(let e of this.workers)e.worker.terminate();this.workers.length=0}getStats(){return{managerState:!1===this.initialized?"waiting":!0!==this.initialized?"initializing":"initialized",totalWorkers:this.workers.length,workersFailed:this.workersFailed,busyWorkers:this.workers.filter(e=>null!=e.requestId||null!=e.pendingSetupRequestId).length,queuedTasks:this.queuedTasks.length,activeTasks:this.activeTaskById.size,themeSubscribers:this.themeSubscribers.size,fileCacheSize:this.fileCache.size,diffCacheSize:this.diffCache.size}}submitTask(e,t){!1===this.initialized&&this.queueInitialization();let i=this.getHighlightKeyForRequest(t),r=null!=i?this.getTaskByHighlightKey(i):void 0;if(null!=r){this.detachInstanceFromQueuedTasks(e,r),this.addInstanceToTask(r,e),this.queueBroadcastStateChanges();return}this.detachInstanceFromQueuedTasks(e);let n=this.generateRequestId(),a=Date.now(),{renderOptionsVersion:s}=this,o=(()=>{switch(t.type){case"file":return{type:"file",id:n,request:{...t,id:n},instances:new Set([e]),primeCache:!1,highlightKey:i,callbacks:new Set,renderOptionsVersion:s,requestStart:a};case"diff":return{type:"diff",id:n,request:{...t,id:n},instances:new Set([e]),primeCache:!1,highlightKey:i,callbacks:new Set,renderOptionsVersion:s,requestStart:a}}})();this.enqueueRenderTask(o,e)}submitCacheTask(e,t){!1===this.initialized&&this.queueInitialization();let i=this.generateRequestId(),r=Date.now(),{renderOptionsVersion:n}=this,a=(()=>{switch(e.type){case"file":return{type:"file",id:i,request:{...e,id:i},instances:new Set,primeCache:!0,highlightKey:t,callbacks:new Set,renderOptionsVersion:n,requestStart:r};case"diff":return{type:"diff",id:i,request:{...e,id:i},instances:new Set,primeCache:!0,highlightKey:t,callbacks:new Set,renderOptionsVersion:n,requestStart:r}}})();return this.enqueueRenderTask(a),a}enqueueRenderTask(e,t){this.queuedTasks.push(e),null!=t&&this.queuedTaskByInstance.set(t,e),null!=e.highlightKey&&this.taskByHighlightKey.set(e.highlightKey,e),this.queueDrain()}async resolveLanguagesAndExecuteTask(e,t,i){try{let r=(0,l.Ow)(),a=i.filter(e=>null==r||!(0,d.W)(e,r));a.length>0&&this.loadSharedHighlighter((0,o.$)(this.renderOptions.theme),["text",...a]).catch(e=>{console.error(e)});let s=i.filter(t=>!("highlights"===this.preferredHighlighter&&(0,n.D4)(t))&&!e.langs.has(t));if(s.length>0&&(w(s)?t.request.resolvedLanguages=x(s):t.request.resolvedLanguages=await (0,T.c)(s)),!this.activeTaskById.has(t.id)){e.requestId===t.id&&(this.cleanWorkerAndTask(e,t),this.queueBroadcastStateChanges(),this.queuedTasks.length>0&&this.queueDrain());return}this.executeTask(e,t)}catch(i){this.rejectRenderTaskCallbacks(t,H(i)),this.cleanWorkerAndTask(e,t),this.queueBroadcastStateChanges(),this.queuedTasks.length>0&&this.queueDrain()}}handleWorkerMessage(e,t){let i=this.activeTaskById.get(t.id);try{if(null==i)throw E;if("error"===t.type){let e=Error(t.error);if(t.stack&&(e.stack=t.stack),"reject"in i)i.reject(e);else if($(i))this.notifyHighlightError(i,e),this.rejectRenderTaskCallbacks(i,e);else throw Error("handleWorkerMessage: unknown task type");throw e}if($(i))for(let{name:t}of i.request.resolvedLanguages??[])e.langs.add(t);switch(t.requestType){case"initialize":if("initialize"!==i.type)throw Error("handleWorkerMessage: task/response dont match");this.syncCustomExtensionVersion(e,i.request),i.resolve();break;case"set-render-options":if("set-render-options"!==i.type)throw Error("handleWorkerMessage: task/response dont match");i.resolve();break;case"file":{if("file"!==i.type)throw Error("handleWorkerMessage: task/response dont match");let{options:r}=t;if(!this.isCurrentRenderTask(i)||!(0,u.F)(r,this.getFileRenderOptions()))throw E;let{request:n}=i,a={...t.result,code:A(t.result.code)};this.syncCustomExtensionVersion(e,n),null!=i.cacheKeyAtDispatch&&this.fileCache.set(i.cacheKeyAtDispatch,{result:a,options:r}),this.resolveRenderTaskCallbacks(i),this.notifyFileInstances(i,a,r);break}case"diff":{if("diff"!==i.type)throw Error("handleWorkerMessage: task/response dont match");let{options:r}=t;if(!this.isCurrentRenderTask(i)||!(0,b.S)(r,this.getDiffRenderOptions()))throw E;let{request:n}=i,a={...t.result,code:{deletionLines:A(t.result.code.deletionLines),additionLines:A(t.result.code.additionLines)}};this.syncCustomExtensionVersion(e,n),null!=i.cacheKeyAtDispatch&&this.diffCache.set(i.cacheKeyAtDispatch,{result:a,options:r}),this.resolveRenderTaskCallbacks(i),this.notifyDiffInstances(i,a,r)}}}catch(e){e!==E&&console.error(e,i,t)}this.cleanWorkerAndTask(e,i,t.id),this.queueBroadcastStateChanges(),this.queuedTasks.length>0&&this.queueDrain()}_queuedDrain;queueDrain(){null==this._queuedDrain&&(this._queuedDrain=Promise.resolve().then(this.drainQueue),this.queueBroadcastStateChanges())}assignWorkerToTask(e,t){t.requestId=e.id,$(e)&&(this.clearQueuedInstanceRequests(e),this.trackInstanceRequests(e)),this.activeTaskById.set(e.id,e)}cleanWorkerAndTask(e,t,i=t?.id){e.requestId===i&&(e.requestId=void 0),e.pendingSetupRequestId===i&&(e.pendingSetupRequestId=void 0),null!=t&&($(t)&&(this.rejectRenderTaskCallbacks(t,new p.fi),this.clearInstanceRequests(t),this.clearHighlightKey(t)),this.activeTaskById.delete(t.id))}executeTask(e,t){var i;("initialize"===(i=t.request).type||"file"===i.type||"diff"===i.type)&&this.maybeAttachCustomExtensions(e,t.request),this.activeTaskById.has(t.id)||this.assignWorkerToTask(t,e);try{"file"===t.type?t.cacheKeyAtDispatch=t.request.file.cacheKey:"diff"===t.type&&(t.cacheKeyAtDispatch=t.request.diff.cacheKey),e.worker.postMessage(t.request)}catch(i){console.error("Failed to post message to worker:",i),$(t)?(this.notifyHighlightError(t,i),this.rejectRenderTaskCallbacks(t,H(i))):"reject"in t&&t.reject(i),this.cleanWorkerAndTask(e,t),this.queuedTasks.length>0&&this.queueDrain()}this.queueBroadcastStateChanges()}maybeAttachCustomExtensions(e,t){if(null!=t.customExtensionsVersion)return;let i=(0,c.iD)();e.customExtensionsVersion>=i||(t.customExtensionsVersion=i,t.customExtensionMap=(0,c.yy)())}syncCustomExtensionVersion(e,t){null!=t.customExtensionsVersion&&(e.customExtensionsVersion=t.customExtensionsVersion)}getAvailableWorker(e){let t;for(let i of this.workers){if(null!=i.requestId||null!=i.pendingSetupRequestId||!i.initialized)continue;if(t=i,0===e.length)break;let r=!0;for(let t of e)if(!i.langs.has(t)){r=!1;break}if(r)break}return t}getFileHighlightKey(e){if(null!=e.cacheKey)return`file:${e.cacheKey}:${this.renderOptionsVersion}`}getDiffHighlightKey(e){if(null!=e.cacheKey)return`diff:${e.cacheKey}:${this.renderOptionsVersion}`}getHighlightKeyForRequest(e){switch(e.type){case"file":return this.getFileHighlightKey(e.file);case"diff":return this.getDiffHighlightKey(e.diff)}}hasActiveRequest(e){for(let t of F(e))if(this.activeRequestByInstance.has(t))return!0;return!1}addInstanceToTask(e,t){e.type,e.instances.add(t),this.activeTaskById.has(e.id)?this.activeRequestByInstance.set(t,e.id):this.queuedTaskByInstance.set(t,e)}detachInstanceFromQueuedTasks(e,t){let i=this.queuedTaskByInstance.get(e);null!=i&&i!==t&&(this.queuedTaskByInstance.delete(e),this.detachInstanceFromRenderTask(i,e),i.primeCache||0!==i.instances.size||this.removeQueuedTask(i))}detachInstanceFromRenderTask(e,t){e.type,e.instances.delete(t)}removeQueuedTask(e){let t=this.queuedTasks.indexOf(e);-1!==t&&this.queuedTasks.splice(t,1),this.rejectRenderTaskCallbacks(e,new p.fi),this.clearQueuedInstanceRequests(e),this.clearHighlightKey(e)}removeActiveTask(e){this.rejectRenderTaskCallbacks(e,new p.fi),this.clearInstanceRequests(e),this.clearHighlightKey(e),this.activeTaskById.delete(e.id)}createRenderTaskCallbacks(e){return new Promise((t,i)=>{e.callbacks.add({resolve:t,reject:i})})}resolveRenderTaskCallbacks(e){for(let t of e.callbacks)t.resolve();e.callbacks.clear()}rejectRenderTaskCallbacks(e,t){for(let i of e.callbacks)i.reject(t);e.callbacks.clear()}invalidateRenderTasks(){for(let e=this.queuedTasks.length-1;e>=0;e--){let t=this.queuedTasks[e];t.renderOptionsVersion!==this.renderOptionsVersion&&this.removeQueuedTask(t)}for(let e of Array.from(this.activeTaskById.values()))$(e)&&e.renderOptionsVersion!==this.renderOptionsVersion&&this.removeActiveTask(e)}clearQueuedInstanceRequests(e){for(let t of F(e))this.queuedTaskByInstance.get(t)===e&&this.queuedTaskByInstance.delete(t)}clearHighlightKey(e){null!=e.highlightKey&&this.taskByHighlightKey.get(e.highlightKey)===e&&this.taskByHighlightKey.delete(e.highlightKey)}trackInstanceRequests(e){for(let t of F(e))this.activeRequestByInstance.set(t,e.id)}clearInstanceRequests(e){for(let t of F(e))this.activeRequestByInstance.get(t)===e.id&&this.activeRequestByInstance.delete(t)}notifyFileInstances(e,t,i){for(let r of e.instances)this.activeRequestByInstance.get(r)===e.id&&r.onHighlightSuccess(e.request.file,t,i)}notifyDiffInstances(e,t,i){for(let r of e.instances)this.activeRequestByInstance.get(r)===e.id&&r.onHighlightSuccess(e.request.diff,t,i)}notifyHighlightError(e,t){for(let i of F(e))this.activeRequestByInstance.get(i)===e.id&&i.onHighlightError(t)}hasMatchingFileInstanceTask(e,t){for(let i of this.iterateRenderTasks())if("file"===i.type&&this.isCurrentRenderTask(i)&&i.instances.has(e)&&(0,k.k)(t,i.request.file))return!0;return!1}hasMatchingDiffInstanceTask(e,t){for(let i of this.iterateRenderTasks())if("diff"===i.type&&this.isCurrentRenderTask(i)&&i.instances.has(e)&&(0,m.m)(i.request.diff,t))return!0;return!1}getTaskByHighlightKey(e){let t=this.taskByHighlightKey.get(e);return null!=t&&this.isCurrentRenderTask(t)?t:void 0}isCurrentRenderTask(e){return e.renderOptionsVersion===this.renderOptionsVersion}*iterateRenderTasks(){for(let e of this.queuedTasks)yield e;for(let e of this.activeTaskById.values())$(e)&&(yield e)}generateRequestId(){return`req_${++this.nextRequestId}`}};function $(e){return e?.type==="file"||e?.type==="diff"}function F(e){return e.instances}function H(e){if(e instanceof Error)return e;if(null!=e&&"object"==typeof e){if("error"in e&&e.error instanceof Error)return e.error;if("message"in e&&"string"==typeof e.message)return Error(e.message)}return Error(String(e))}var D=i("zd8w"),P=i("ABep");let K=(0,D.createContext)(void 0),_=0;function V({children:e,poolOptions:t,highlighterOptions:i}){let[n]=(0,D.useState)(()=>{if("u">typeof window)return function({poolOptions:e,highlighterOptions:t}){return r??=new z(e,t)}({poolOptions:t,highlighterOptions:i})});return(0,D.useInsertionEffect)(()=>{if(null!=n)return _++,()=>{_--}},[n]),(0,D.useEffect)(()=>()=>{0===_&&null!=r&&(r.terminate(),r=void 0)},[]),(0,P.jsx)(K.Provider,{value:n,children:e})}function W(){return(0,D.useContext)(K)}},bum5(e,t,i){i.d(t,{},{C0:{position:"absolute",top:0,bottom:0,textAlign:"center",whiteSpace:"normal",touchAction:"none"},Zk:function(){return null},rS:{display:"contents"}})},mseL(e,t,i){var r=i("ABep");i.d(t,{},{$:function(e,t){return"u"<typeof window&&null!=t?(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)("template",{shadowrootmode:"open",dangerouslySetInnerHTML:{__html:t}}),e]}):(0,r.jsx)(r.Fragment,{children:e})}})},vo7L(e,t,i){var r=i("zd8w");i.d(t,{},{K:function(e){let t=(0,r.useRef)(e);return(0,r.useInsertionEffect)(()=>void(t.current=e)),(0,r.useCallback)((...e)=>t.current(...e),[])}})},Cdiq(e,t,i){var r=i("Fy35");i.d(t,{},{F:function(e,t){return(0,r.J)(e.theme,t.theme)&&e.useTokenTransformer===t.useTokenTransformer&&e.tokenizeMaxLineLength===t.tokenizeMaxLineLength}})},P9bP(e,t,i){i.d(t,{},{t:function(e,t){return e?.cacheKey!=null||t?.cacheKey!=null?e?.cacheKey===t?.cacheKey:e?.contents===t?.contents&&e?.name===t?.name&&e?.lang===t?.lang}})},RqMo(e,t,i){i.d(t,{},{M:function(e){let t=e.length;return 10===e.charCodeAt(t-1)&&(t--,13===e.charCodeAt(t-1)&&t--),e.slice(0,t)}})},lkic(e,t,i){function r(e){let t=[0],i=e.indexOf("\r"),r=e.indexOf("\n"),n=0,a=0;for(;-1!==i||-1!==r;){let s;if(-1!==i&&(-1===r||i<r)?r===i+1?(s=r+1,i=e.indexOf("\r",s),r=e.indexOf("\n",s)):(s=i+1,i=e.indexOf("\r",s)):(s=r+1,r=e.indexOf("\n",s)),t.push(s),4==++a){if(s-n<=40){for(let i=s;i<e.length;i++){let r=e.charCodeAt(i);(10===r||13===r)&&(13===r&&i+1<e.length&&10===e.charCodeAt(i+1)&&i++,t.push(i+1))}return t}n=s,a=0}}return t}i.d(t,{},{Cl:function(e){let t=0;for(let i=0;i<e.length;i++){let r=e.charCodeAt(i);(10===r||13===r)&&(13===r&&i+1<e.length&&10===e.charCodeAt(i+1)&&i++,t++)}return t},sX:function(e){let t=r(e);return Array.from({length:t.length},(i,r)=>{let n=t[r],a=t[r+1]??e.length;return e.slice(n,a)})},sr:r})},lzV9(e,t,i){function r(e,t){return e-(0!==t)}i.d(t,{},{L:function(e,t){return r(e,t)+t},o:r})},IKiT(e,t,i){var r=i("c7YV");i.d(t,{},{a:function(e){return(e.lang??(0,r.oH)(e.name))==="text"}})},cxgw(e,t,i){var r=i("lkic"),n=i("c7YV"),a=i("EWoJ"),s=i("dEQA"),o=i("kQAf"),l=i("wjea");let h={forcePlainText:!1};i.d(t,{},{m:function(e,t,{theme:i,tokenizeMaxLineLength:d,useTokenTransformer:u},{forcePlainText:c,lazyLineAST:f=!1,startingLine:g,totalLines:p,lines:m}=h){c?(g??=0,p??=1/0):(g=0,p=1/0);let k=g>0||p<1/0,b={lineInfo:[]},y=c?"text":e.lang??(0,n.oH)(e.name),v="string"==typeof i?t.getTheme(i).type:void 0,C=(0,s.$)({theme:i,highlighter:t});b.lineInfo=e=>({type:"context",lineIndex:e-1+g,lineNumber:e+g});let x=(0,l.N)(t.codeToTokens((k?function(e,t,i){if(0===e.length)return"";let r=Math.min(t+i,e.length);return e.slice(t,r).join("")}(m??(0,r.sX)(e.contents),g,p):e.contents).replace(/\r(?!\n)/g,"\n"),(0,o.K)(y,i,d)).tokens,{state:b,useTokenTransformer:u,lazyLineAST:f&&!c&&!u,cacheHtmlStyles:"highlights"===t.name}),w=k?Array(g):x;return k&&(0,a.Z)(w,x),{code:w,themeStyles:C,baseThemeType:v}}})}};
//# sourceMappingURL=615467.d22a75d5e7.js.map