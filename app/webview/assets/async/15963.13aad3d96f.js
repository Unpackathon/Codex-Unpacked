export const __rspack_esm_ids=[15963];export const __webpack_modules__={l4HN(e,t,n){n.d(t,{N:()=>u});var r=n("ABep"),i=n("Me4D"),a=n("X09v"),o=n("Y8kU"),l=n("zd8w"),s="Hint-A29dc9",d="Feedback-gTEVao",c=n("FIwD");function u({activeKey:e,ariaLabel:t,backFace:n,children:a,disabled:s=!1,dismissDirection:g,faceBackground:v,flipped:y=!1,hint:x,isMobile:b=!1,onboardingStep:w,onInteractionChange:k,onSwipeProgress:C,onSwipeLeft:j,onSwipeRight:E,reducedMotion:N=!1,restoreDirection:A,shuffleKey:I,swipeLeftColor:S="#ee7c37",swipeRightColor:R="#53b559"}){let M=l.Children.toArray(a),L=(0,l.useContext)(i.EM),T=(0,l.useRef)(null),F=(0,l.useRef)(null),O=(0,l.useRef)(null),z=(0,l.useRef)(!1),P=(0,l.useRef)(0),D=(0,l.useRef)(null),$=(0,l.useRef)(I),H=(0,l.useRef)({activeKey:e,flipped:y}),W=(0,l.useRef)(null),V=(0,l.useRef)(null),q=(0,l.useRef)({drag:!1,motion:!1,flip:!1}),[B,_]=(0,l.useState)(null),K=B?.kind==="outgoing"?B:null,[U,G]=(0,l.useState)(!1),Y=(0,o.Y)(k),X=(0,o.Y)(C),Z=(0,l.useRef)(0),J=(0,i.fI)(),Q=(0,l.useCallback)((e,t)=>{if(q.current[e]===t)return;let n=Object.values(q.current).some(Boolean);q.current[e]=t,"flip"===e&&G(t);let r=Object.values(q.current).some(Boolean);n!==r&&F.current&&Y.current?.(r)},[Y]),ee=(0,l.useCallback)(e=>{Z.current!==e&&(Z.current=e,F.current&&X.current?.(e))},[X]),et=(0,l.useCallback)(()=>{O.current=null,F.current?.removeAttribute("data-d-dragging"),F.current?.removeAttribute("data-d-swipe-direction"),F.current?.style.removeProperty("--swipe-progress"),T.current?.style.removeProperty("transform"),ee(0)},[ee]);(0,l.useLayoutEffect)(()=>{let t=D.current,r=$.current;if($.current=I,D.current={key:e,front:M[0],backFace:n,flipped:y,hint:x},!t||t.key===e)return;null!==W.current&&clearTimeout(W.current);let i=N||f(),a=void 0!==I&&void 0!==r&&I!==r&&M.length>1,o=a?"shuffle":g;if((A||o)&&!i){let e=((A??o)==="left"?-1:1)*(p(F.current)?-1:1);A?_({kind:"restoring",exitSign:e}):o&&_({...t,kind:"outgoing",direction:o,exitSign:e,x:O.current?.x??0,rotation:O.current?.rotation??0,progress:O.current?.progress??0}),Q("motion",!0),W.current=setTimeout(()=>{W.current=null,z.current=!1,_(null),Q("motion",!1)},a||A?300:240)}else _(null),z.current=!1,Q("motion",!1);Q("drag",!1),et()},[e,n,M,g,y,x,N,A,I,et,Q]),(0,l.useLayoutEffect)(()=>{let t=H.current;if(H.current={activeKey:e,flipped:y},t.activeKey!==e||t.flipped!==y||N){if(null!==V.current&&clearTimeout(V.current),t.activeKey!==e||N||f())return void Q("flip",!1);Q("flip",!0),V.current=setTimeout(()=>{V.current=null,Q("flip",!1)},300)}},[e,y,N,Q]),(0,l.useEffect)(()=>()=>{null!==W.current&&clearTimeout(W.current),null!==V.current&&clearTimeout(V.current)},[]),(0,l.useEffect)(()=>{let e=T.current;if(!e||s)return;let t=e=>{e.cancelable&&O.current&&e.preventDefault()};return e.addEventListener("touchmove",t,{passive:!1}),()=>e.removeEventListener("touchmove",t)},[s]);let en={key:e,front:M[0],backFace:n,flipped:y,hint:x};return(0,r.jsxs)("div",{"aria-label":t,className:"Stack-zOo8Ew","data-d-component":"swipe-stack","data-scroll-anchor-boundary":"","data-d-disabled":s?"":void 0,"data-d-dismissing":K&&"shuffle"!==K.direction?"":void 0,"data-d-flipping":U?"":void 0,"data-d-mobile":b?"":void 0,"data-d-onboarding-step":s||y||null!==B||U?void 0:w,"data-d-reduced-motion":N?"":void 0,"data-d-restoring":B?.kind==="restoring"?"":void 0,"data-d-shuffling":K?.direction==="shuffle"?"":void 0,onClickCapture:e=>{0===e.detail||Date.now()>=P.current||(e.preventDefault(),e.stopPropagation())},ref:F,role:t?"group":void 0,style:{"--swipe-card-background":(0,c.X0)(L,v),"--swipe-left-color":(0,c.Gx)((0,c.X0)(L,S),L),"--swipe-right-color":(0,c.Gx)((0,c.X0)(L,R),L),"--swipe-release-progress":K?.progress??0,"--swipe-exit-sign":B?.exitSign},children:[(0,r.jsx)(m,{options:{disabled:s||null!==B||U,enabled:!!(j||E),interactive:!0,targetRef:T,onDragStart:()=>{z.current||(F.current?.setAttribute("data-d-dragging",""),Q("drag",!0))},onDragMove:e=>{if(z.current)return;O.current=e;let t=p(F.current)?"left"===e.direction?"right":"left":e.direction;if(F.current?.setAttribute("data-d-swipe-direction",t),F.current?.style.setProperty("--swipe-progress",String(e.progress)),ee(("left"===t?-1:1)*Math.round(16*e.progress)),T.current){let t=N||f()?0:e.rotation;T.current.style.transform=`translateX(${e.x}px) rotate(${t}deg)`}},onDragEnd:()=>{P.current=Date.now()+350,z.current||(et(),Q("drag",!1))},onSwipe:e=>{if(z.current)return;let t=p(F.current)?1!==e:1===e,n=t?j:E;n&&(z.current=!0,W.current=setTimeout(()=>{W.current=null,z.current=!1,et(),Q("drag",!1)},240),J({target:"swipe_stack",value:t?"left":"right"},(0,i.S0)(n)))}}},e),M.slice(1,3).map((e,t)=>(0,r.jsx)("div",{"aria-hidden":!0,className:"Upcoming-KxQyqU","data-d-stack-depth":t+1,inert:!0,style:{"--stack-depth":t+1},children:e},t)),(0,r.jsxs)("div",{className:"Active-EPqlrj",inert:s||null!==B,ref:T,children:[(0,r.jsx)(h,{card:en},e),(0,r.jsx)("div",{"aria-hidden":!0,className:d})]}),K&&(0,r.jsxs)("div",{"aria-hidden":!0,className:"Outgoing-dE535Z","data-d-swipe-direction":K.direction,inert:!0,style:{"--swipe-from-x":`${K.x}px`,"--swipe-from-rotation":`${K.rotation}deg`},children:[(0,r.jsx)(h,{card:K}),(0,r.jsx)("div",{className:d})]},K.key)]})}function m({options:e}){return(0,a.n)(e),null}function h({card:e}){return(0,r.jsx)("div",{className:"Perspective-qPcV_U",children:(0,r.jsx)("div",{className:"Lift-T0dpn8",children:(0,r.jsxs)("div",{className:"Flipper-vwLguv","data-d-flipped":e.flipped?"":void 0,children:[(0,r.jsxs)("div",{"aria-hidden":e.flipped,className:"Front-mxzZaf",inert:e.flipped,children:[e.front,!e.flipped&&e.hint&&(0,r.jsx)("div",{className:s,children:e.hint})]}),e.backFace&&(0,r.jsxs)("div",{"aria-hidden":!e.flipped,className:"Back-F0cksA",inert:!e.flipped,children:[e.backFace,e.flipped&&e.hint&&(0,r.jsx)("div",{className:s,children:e.hint})]})]})})})}function p(e){return null!==e&&"rtl"===window.getComputedStyle(e).direction}function f(){return window.matchMedia?.("(prefers-reduced-motion: reduce)")?.matches===!0}},TZvG(e,t,n){let r;n.d(t,{lr:()=>el.l,p:()=>nn,In:()=>ey.I,wK:()=>eE.w,hl:()=>e6,fM:()=>tg,l6:()=>tA.l,Mk:()=>k,Y8:()=>nt.Y8});var i=n("ABep"),a=n("Me4D"),o=n("Exc7"),l=n("IFpk"),s=n("zd8w");function d(e){return{dimension:e.dimension,enter:c(e.enter),exit:c(e.exit),forceCompositeLayer:e.forceCompositeLayer,hideOverflow:e.hideOverflow,initial:c(e.initial),insertMethod:e.insertMethod,itemAnchor:e.itemAnchor,layoutEnter:e.layoutEnter,layoutExit:e.layoutExit,layoutMove:e.layoutMove,preventInitialTransition:e.preventInitialTransition}}function c(e){if(!e)return;let{translateX:t,translateY:n,...r}=e;return{...r,x:t,y:n}}var u=n("SRgp"),m=n("FIwD");function h({children:e,color:t,label:n,maxWidth:r,onHover:o,padding:l,pill:d=!0,size:c,variant:p,weight:f="medium"}){let g=(0,s.useContext)(a.EM),v=function(e){switch(e){case"secondary":return"secondary";case"success":return"success";case"danger":return"danger";case"warning":return"warning";case"info":return"info";case"discovery":return"discovery";default:return}}(t),y=null==v?t:void 0,x="number"==typeof l||"string"==typeof l||l?.bottom!=null||l?.top!=null||l?.y!=null,b={className:"Badge-v4RzAb",color:v,"data-d-component":"badge","data-d-hoverable":o?"":void 0,"data-d-weight":f,pill:d,size:c,style:{...(0,m.NY)(l),maxWidth:r,...null==y?{}:{backgroundColor:(0,m.Gx)((0,m.X0)(g,y),g)},...x?{height:"auto"}:{}},variant:p,...null==o?{}:{onMouseEnter:()=>o(!0),onMouseLeave:()=>o(!1)}},w=u.E;return(0,i.jsx)(w,{className:b.className,color:b.color,"data-d-component":b["data-d-component"],"data-d-hoverable":b["data-d-hoverable"],"data-d-weight":b["data-d-weight"],onMouseEnter:b.onMouseEnter,onMouseLeave:b.onMouseLeave,pill:b.pill,size:b.size,style:b.style,variant:b.variant,children:e??n??null})}var p=n("afoa"),f=n("MBDE"),g=n("zsAy"),v=n("BnEr"),y=n("BNR2"),x=n("ZpWd");let b=(0,s.createContext)(void 0),w=(0,s.createContext)(function({children:e,content:t}){return(0,i.jsx)(x.m_,{compact:!0,content:t,children:e})});function k({children:e,component:t}){return(0,i.jsx)(w.Provider,{value:t,children:e})}function C({children:e,content:t,disabled:n,theme:r}){let o=(0,s.useContext)(b),l=(0,s.useContext)(a.EM),d=(0,s.useContext)(w),c=t??(n?void 0:o);return(0,i.jsx)(b.Provider,{value:void 0,children:c?(0,i.jsx)(d,{content:c,theme:r??l,children:e}):e})}var j=n("InHZ");function E({block:e,children:t,color:n="primary",disabled:r,label:o,loading:l,onClick:s,pill:d=!0,size:c="lg",submit:u,uniform:m,variant:h="solid"}){let p=(0,a.fI)(),f=(0,i.jsx)(y.$,{"aria-label":null!=t?o:void 0,block:e,color:n,className:"Button-MC8eGf",disabled:r,loading:l,onClick:e=>{e.stopPropagation(),p(j.b.button,(0,a.S0)(s))},pill:d,size:c,type:u?"submit":"button",uniform:m,variant:h,"data-d-component":"button","data-d-block":e?"":void 0,children:t??o});return(0,i.jsx)(C,{disabled:r,children:f})}var N=n("kpww"),A=n("LpLF"),I=n("y1Va"),S=n("McuO"),R=n("on57"),M=n("eZy0"),L="ScrollControl-YDDGoO",T="ScrollControlLeft-elEPbh",F="ScrollControlRight-qWugKc";let O=["class","style","dir","data-d-column-sizing","data-d-direction","data-d-scrollable"];function z({viewportRef:e}){let[t,n]=(0,s.useState)();return(0,s.useEffect)(()=>{let t=e.current;if(null==t)return;let r=()=>{let e=getComputedStyle(t),r="auto"===e.overflowX||"scroll"===e.overflowX,i=Math.max(0,t.scrollWidth-t.clientWidth),a="rtl"===e.direction,o=Math.min(i,Math.max(0,a?-t.scrollLeft:t.scrollLeft)),l=r&&o>1,s=r&&i-o>1,d={left:a?s:l,right:a?l:s,x:t.offsetLeft+t.clientLeft,y:t.offsetTop+t.clientTop,width:t.clientWidth,height:t.clientHeight};n(e=>e?.left===d.left&&e.right===d.right&&e.x===d.x&&e.y===d.y&&e.width===d.width&&e.height===d.height?e:d)},i="u"<typeof ResizeObserver?null:new ResizeObserver(r),a=()=>{i?.disconnect(),i?.observe(t),Array.from(t.children).forEach(e=>i?.observe(e))},o="u"<typeof ResizeObserver?null:new ResizeObserver(r);o?.observe(t,{box:"border-box"});let l="u"<typeof MutationObserver?null:new MutationObserver(()=>{a(),r()});l?.observe(t,{attributes:!0,attributeFilter:O,childList:!0,characterData:!0,subtree:!0});for(let e=t.parentElement;null!=e;e=e.parentElement)l?.observe(e,{attributes:!0,attributeFilter:O});return a(),r(),t.addEventListener("scroll",r,{passive:!0}),t.addEventListener("load",r,!0),window.addEventListener("resize",r),()=>{i?.disconnect(),o?.disconnect(),l?.disconnect(),t.removeEventListener("scroll",r),t.removeEventListener("load",r,!0),window.removeEventListener("resize",r)}},[e]),(0,i.jsx)("div",{"aria-hidden":"true",className:"Edges-nCUHEi","data-d-overflow-left":t?.left?"":void 0,"data-d-overflow-right":t?.right?"":void 0,style:null==t?void 0:{left:t.x,top:t.y,width:t.width,height:t.height}})}let P={lg:"220px",sm:"140px"},D=(0,s.createContext)({});function $({aspectRatio:e,background:t,border:n,children:r,component:a,gap:o,height:l,maxHeight:d,maxWidth:c,minHeight:u,minWidth:m,padding:h,radius:p,variant:f="none",width:g}){let{itemWidth:v,snapAlign:y="start"}=(0,s.useContext)(D),x="outline"===f||"elevated"===f,b=g??v,w=m??b;return(0,i.jsx)(M.K,{aspectRatio:e,as:"div",background:t??("soft"===f?"surface-elevated-secondary":"elevated"===f?"surface":void 0),border:n??(x?{color:"default",size:1}:void 0),className:"Item-NS27Bq",clip:"none"!==f,component:a,flex:"0 0 auto",gap:o,height:l,maxHeight:d,maxWidth:c,minHeight:u,minWidth:w,padding:h??("none"===f?void 0:4),radius:p??("none"===f?void 0:"xl"),role:"listitem",snapAlign:y,variant:f,width:b,children:r})}function H(e){return Array.from(e.children).filter(e=>e instanceof HTMLElement)}function W(e,t,n){return"rtl"===n?t.right-e.right:e.left-t.left}function V(e){let t=Number.parseFloat(e);return Number.isFinite(t)?t:0}function q(e){return{textDirection:"rtl"===getComputedStyle(e).direction?"rtl":"ltr",carouselRect:e.getBoundingClientRect(),alignedInlineStart:V(getComputedStyle(e).scrollPaddingInlineStart),items:H(e)}}function B(e){let t=q(e),n=t.items.at(0);if(null==n)return{...t,currentOffset:0,itemOffsets:[],maxScrollOffset:0};let r=W(n.getBoundingClientRect(),t.carouselRect,t.textDirection),i=t.items.map(e=>Math.abs(W(e.getBoundingClientRect(),t.carouselRect,t.textDirection)-r));return{...t,currentOffset:t.alignedInlineStart-r,itemOffsets:i,maxScrollOffset:Math.max(0,e.scrollWidth-e.clientWidth)}}function _(e,t){let n,r=1/0;return e.forEach((e,i)=>{let a=Math.abs(e-t);a<r&&(n=i,r=a)}),n}function K(){return"u">typeof window&&window.matchMedia?.("(prefers-reduced-motion: reduce)").matches===!0}var U=n("TxZP"),G=n("bggg"),Y=n("TE73"),X=n("mQlD"),Z=n("GdAf"),J="Image-S6ohsd";function Q({alt:e,frame:t=!1,inline:n=!1,size:r,url:o}){let l=(0,s.useContext)(a.Ob),d=(0,Y.qP)(o??"",32),c=r??(n?"1em":12);return d?(0,i.jsxs)(M.K,{as:"div",className:"FaviconBox-doeXm2",component:"favicon",height:c,inline:n,role:"presentation",width:c,children:[l?(0,i.jsx)(X.default,{"aria-hidden":!e||void 0,"aria-label":e,className:J,role:e?"img":void 0,style:{color:"var(--color-text-secondary)"}}):(0,i.jsx)(Z._,{alt:e,className:J,forceRenderAfterLoadFail:!0,src:d}),t?(0,i.jsx)("div",{"aria-hidden":"true",className:"Frame-cpg5w_"}):null]}):null}var ee=n("gcGr");let et=u.E,en=[{left:83,top:6.7,color:"blue-400",size:7,vx:-138.7,vy:-234.1,ax:85.9,ay:376.3,flip:5.1,phase:0,life:3.9},{left:129.4,top:7.2,color:"blue-400",size:8,vx:78.3,vy:-363.2,ax:-60.4,ay:431.9,flip:7.4,phase:.71,life:3.55},{left:123.6,top:27.9,color:"blue-400",size:7,vx:-175.6,vy:-173,ax:137.5,ay:346.5,flip:6.2,phase:1.42,life:3.65},{left:138,top:38.7,color:"blue-400",size:6,vx:80.9,vy:-183.2,ax:-38.7,ay:347.2,flip:8.5,phase:2.13,life:3.4},{left:103.3,top:46.4,color:"blue-400",size:8,vx:27,vy:-301.7,ax:-27.9,ay:422.8,flip:4.8,phase:2.84,life:3.75},{left:100.8,top:52.6,color:"blue-400",size:7,vx:141.9,vy:-302.1,ax:-100.4,ay:349.2,flip:7.8,phase:3.55,life:3.95},{left:78.1,top:58.5,color:"blue-400",size:6,vx:29.1,vy:-302.5,ax:-44.6,ay:400.4,flip:9.1,phase:4.26,life:3.35},{left:120.6,top:60.3,color:"blue-400",size:8,vx:-70.8,vy:-286.8,ax:57.6,ay:412.7,flip:5.5,phase:4.97,life:3.8},{left:92.5,top:66.3,color:"blue-400",size:6,vx:-139.9,vy:-295,ax:102,ay:371.9,flip:8.8,phase:5.68,life:3.6},{left:93.2,top:-4.3,color:"pink-400",size:6,vx:79.3,vy:-246.3,ax:-38.9,ay:393.3,flip:6.6,phase:.11,life:3.5},{left:110.1,top:13.1,color:"pink-400",size:7,vx:-59.8,vy:-270.3,ax:64.8,ay:404.3,flip:7.2,phase:.82,life:3.7},{left:75.3,top:14.5,color:"pink-400",size:6,vx:143.3,vy:-228,ax:-110.8,ay:377.5,flip:8.1,phase:1.53,life:3.85},{left:88.5,top:25.9,color:"pink-400",size:7,vx:58.1,vy:-251.3,ax:-50,ay:395.6,flip:5.9,phase:2.24,life:3.45},{left:92.4,top:48.9,color:"pink-400",size:8,vx:150.1,vy:-330.9,ax:-91.5,ay:406.9,flip:9,phase:2.95,life:4},{left:93.2,top:73.6,color:"pink-400",size:7,vx:203.1,vy:-122.5,ax:-133.9,ay:171.6,flip:4.7,phase:3.66,life:3.65},{left:115.1,top:-13,color:"yellow-400",size:6,vx:-187.1,vy:-234.5,ax:130.9,ay:323.5,flip:7.6,phase:4.37,life:3.75},{left:81.8,top:-9.8,color:"yellow-400",size:6,vx:-39.2,vy:-290.4,ax:-1.6,ay:415.9,flip:6,phase:5.08,life:3.55},{left:142.3,top:-7.4,color:"yellow-400",size:8,vx:192.5,vy:-338,ax:-123.6,ay:446.3,flip:8.7,phase:5.79,life:3.85},{left:121.9,top:7.2,color:"yellow-400",size:7,vx:21.9,vy:-203.2,ax:-22.1,ay:268.8,flip:5.3,phase:.21,life:3.95},{left:69.7,top:26,color:"yellow-400",size:8,vx:-152.3,vy:-231.4,ax:82.9,ay:383.3,flip:9.3,phase:.92,life:3.4},{left:102.4,top:34.1,color:"yellow-400",size:6,vx:-1.3,vy:-254.7,ax:-.5,ay:378.9,flip:6.8,phase:1.63,life:3.65},{left:80.1,top:47.2,color:"yellow-400",size:8,vx:-53.7,vy:-248.9,ax:33.9,ay:387.6,flip:7,phase:2.34,life:3.9},{left:71.9,top:54.1,color:"yellow-400",size:7,vx:-77.3,vy:-272.5,ax:24.3,ay:394.1,flip:8.3,phase:3.05,life:3.5},{left:111.2,top:66.2,color:"yellow-400",size:7,vx:-23.2,vy:-217.5,ax:15.9,ay:375.6,flip:5.7,phase:3.76,life:4}],er={0:{start:.58,end:2.45,top:-1,gravity:260},1:{start:.82,end:2.65,top:-9,gravity:245},9:{start:.6,end:2.8,top:-9,gravity:240},12:{start:.48,end:2.55,top:-9,gravity:250},15:{start:.76,end:2.95,top:-9,gravity:235},17:{start:.77,end:3.1,top:-9,gravity:230}};function ei(){let[e,t]=(0,s.useState)(0);return((0,s.useEffect)(()=>{let e=window.matchMedia("(prefers-reduced-motion: reduce)");if(e.matches)return;let n=Date.now(),r=window.setInterval(()=>{let e=Date.now()-n;t(e),e>=5200&&window.clearInterval(r)},50),i=()=>{e.matches&&(window.clearInterval(r),t(5200))};return e.addEventListener("change",i),()=>{window.clearInterval(r),e.removeEventListener("change",i)}},[]),e<160||e>=5200)?null:(0,i.jsx)("div",{className:"Overlay-v38rbC","aria-hidden":"true","data-celebration-confetti":"true",children:en.map((t,n)=>{let r,a,o,l,s,d,c,u,m,h;return(0,i.jsx)("span",{className:"Particle-xcMzYe","data-celebration-piece":"true",style:(r=en[n],o=(a=(e-160)/1e3)<=1?a:1+(a-1)*.6,d=(s=(l=er[n])&&a>=l.start?a<l.end?l.start:a-(l.end-l.start):a)<=1?s:1+(s-1)/(1+4*(s-1)),c=1.5*(r.left-106+r.vx*d+r.ax*d*d),u=l&&a>=l.start?a<l.end?l.top:l.top+l.gravity*(a-l.end)**2:-38+1.25*(r.top+r.vy*o+r.ay*o*o)+(o>.25&&o<1?42*Math.sin((o-.25)*4.18879):0),m=Math.abs(Math.cos(s*r.flip+r.phase)),h=a<=r.life-.55?1:a>=r.life?0:(r.life-a)/.55,{width:r.size,height:r.size,background:`var(--${r.color})`,left:`calc(50% + ${c}px)`,top:u,transform:`translate(-50%, -50%) rotate(${57.2958*r.phase+s*r.flip*18}deg) ${n%2==0?"scaleX":"scaleY"}(${.12+.88*m})`,opacity:(.65+.35*m)*h})},n)})})}var ea=n("Vc7o"),eo=n("Ymsa"),el=n("Ufhb"),es=n("TiFH"),ed=n("a0Bm"),ec=n("l4HN");let eu={light:"var(--color-surface, #fff)",dark:"var(--color-surface, #212121)"};var em=n("xUWq"),eh=n("GQ93"),ep="Root-cIEClf",ef="Frame-WHuLyM";class eg{options;isChildReady=!1;isListening=!1;pendingRequests=new Map;queuedMessages=[];teardownTimer;unregisterTransport;constructor(e){this.options=e}matches(e){return this.options.channelId===e.channelId&&this.options.iframe===e.iframe&&this.options.srcDoc===e.srcDoc&&this.options.token===e.token}updateOptions(e){this.options=e}listen(){this.teardownTimer&&(clearTimeout(this.teardownTimer),this.teardownTimer=void 0),this.isListening||(window.addEventListener("message",this.handleMessage),this.unregisterTransport=this.options.messenger?.registerTransport({command:this.sendCommand,event:this.emitEvent}),this.isListening=!0)}teardown=()=>{this.isListening&&(window.removeEventListener("message",this.handleMessage),this.unregisterTransport?.(),this.unregisterTransport=void 0,this.isListening=!1,this.teardownTimer=setTimeout(()=>{this.teardownTimer=void 0,this.queuedMessages.length=0,this.rejectPending(Error("DIL html-view was unmounted"))},0))};sendToFrame=e=>this.isChildReady?this.postToFrame(e):(this.queuedMessages.push(e),!0);postToFrame(e){let t=this.options.iframe.contentWindow;return!!t&&(t.postMessage({__dilHtmlView:"dil-html-view",channelId:this.options.channelId,token:this.options.token,...e},"*"),!0)}sendCommand=(e,t)=>{let n=ev();return new Promise((r,i)=>{this.pendingRequests.set(n,{reject:i,resolve:r}),this.sendToFrame({data:t,id:n,kind:"command",type:e})||(this.pendingRequests.delete(n),i(Error("DIL html-view is not ready")))})};emitEvent=(e,t)=>{this.sendToFrame({data:t,kind:"event",type:e})};handleMessage=e=>{if(e.source!==this.options.iframe.contentWindow)return;let t=e.data;if("dil-html-view"===t.__dilHtmlView&&t.channelId===this.options.channelId&&t.token===this.options.token)switch(t.kind){case"response":this.markChildReady(),function(e,t){if(!e.id)return;let n=t.get(e.id);if(n){if(t.delete(e.id),e.error)return n.reject(Error(e.error.message??"DIL command failed"));n.resolve(e.result)}}(t,this.pendingRequests);return;case"command":this.markChildReady(),async function(e,t,n){if(!e.id||"string"!=typeof e.type)return;let r=t?.commands[e.type];if(!r)return void n({error:{message:`Unknown DILMessenger command "${e.type}"`},id:e.id,kind:"response"});try{let t=await r(e.data);n({id:e.id,kind:"response",result:t})}catch(t){n({error:{message:t instanceof Error?t.message:String(t)},id:e.id,kind:"response"})}}(t,this.options.messenger,this.sendToFrame);return;case"event":this.markChildReady(),"string"==typeof t.type&&this.options.messenger?.onEvent(t.type,t.data);return;case"bridge-ready":this.markChildReady();return;case void 0:return;default:throw Error(`Unknown DIL html-view message kind "${String(t.kind)}"`)}};markChildReady(){this.isChildReady||(this.isChildReady=!0,this.flushQueuedMessages())}flushQueuedMessages(){for(;this.queuedMessages.length>0;){let e=this.queuedMessages.shift();if(!e)return;if(!this.postToFrame(e))return void this.queuedMessages.unshift(e)}}rejectPending(e){for(let t of this.pendingRequests.values())t.reject(e);this.pendingRequests.clear()}}function ev(){return globalThis.crypto?.randomUUID?.()??Math.random().toString(36).slice(2)}var ey=n("en2n"),ex=n("cO2G"),eb="Image-BcA3fI",ew="OverlayBox-yeaWuk",ek="LoadingFrame-ljDyDD",eC="Overlay-Ira_zu";function ej({background:e="surface-tertiary",children:t,duration:n=1500,label:r,reducedMotion:a=!1,...o}){return(0,i.jsx)(M.K,{as:"div",ariaLabel:r,className:(0,R.A)("LoadingBlock-B3O2RR",null!=t&&"WithContent-UXHFcz",a&&"ReducedMotion-H_W0Iu"),component:"loading-block",layout:{...o,background:null==t?e:void 0,children:null==t?t:(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(M.K,{as:"div",ariaHidden:!0,className:"Background-ENb3Oy",layout:{background:e}}),t]})},role:r?"status":void 0,style:(0,Y.mW)({"loading-block-duration":(0,Y.fT)(n)})})}var eE=n("qKzV");let eN=(0,s.createContext)(!1),eA=(0,s.forwardRef)(function({layout:e,...t},n){return(0,i.jsx)(M.K,{ariaLabel:t.ariaLabel,as:"button",boxRef:n,className:t.className,component:"pressable",gap:t.gap,hostProps:t,inline:t.inline,layout:e,style:t.style})}),eI=(0,s.forwardRef)(function({layout:e,...t},n){return(0,i.jsx)(M.K,{ariaLabel:t.ariaLabel,as:"span",boxRef:n,className:t.className,component:"pressable",gap:t.gap,hostProps:t,inline:t.inline,layout:e,role:t.role,style:t.style})});function eS({ariaLabel:e,ariaPressed:t,capture:n=!1,disabled:r,dimWhenDisabled:o,focusStyle:l,gap:d,hoverBackground:c,inline:u=!1,insetBorder:h=!1,variant:p,onClick:f,onHover:g,revealOnHover:v=!1,tooltip:y,...x}){let b=(0,a.fI)(),w=(0,s.useContext)(eN),k=(0,s.useContext)(a.EM),E=x.theme??k;if(w){let e=(0,i.jsx)(M.K,{as:"span",component:"pressable",gap:u?d??0:d,inline:u,layout:x,role:void 0,style:u?{display:"inline"}:void 0});return u?(0,i.jsx)(eE.w.Provider,{value:!0,children:e}):e}let N=()=>b(j.b.pressable,(0,a.S0)(f)),A=e=>{e.stopPropagation(),n&&e.preventDefault(),r||N()},I=e=>{("Enter"===e.key||" "===e.key&&"link"!==x.role)&&(e.target===e.currentTarget||n)&&(!r||n)&&(e.preventDefault(),e.stopPropagation(),r||N())},S=n?{...x,children:(0,i.jsx)(eN.Provider,{value:!0,children:x.children})}:x,L="link"===x.role,T=u||L,F=(0,i.jsx)(T?eI:eA,{ariaLabel:e,"aria-pressed":t,className:(0,R.A)("Pressable-QEXFz7",v&&"RevealOnHover-k7I1ur","ghost"===p&&"Ghost-xEEOGK","inset"===l&&"InsetFocus-bnOhkk",!1===o&&"PreserveOpacity-Z4s8VH"),disabled:r,gap:u?d??0:d,inline:u,layout:S,onClick:n?void 0:A,onClickCapture:n?A:void 0,onKeyDown:T&&!n?I:void 0,onKeyDownCapture:T&&n?I:void 0,onMouseEnter:r?void 0:()=>g?.(!0),onMouseLeave:()=>g?.(!1),style:{...(0,Y.mW)({"pressable-hover-background":(0,m.Gx)((0,m.X0)(E,c),E)}),...u?{display:"inline"}:{},...h?{boxShadow:"inset 0 0 0 1px currentColor"}:{}},role:x.role??(u?"button":void 0),tabIndex:T&&!r?0:void 0,type:"button"}),O=(0,i.jsx)(C,{content:y,disabled:r,theme:x.theme,children:F});return u?(0,i.jsx)(eE.w.Provider,{value:!0,children:O}):O}function eR({actionOverlay:e,alt:t,aspectRatio:n,background:r,bitmapBlendMode:o,children:l,containOutsideAspectRatio:d,contentCrop:c,contentCropFit:u,fallback:h,fit:p,frame:f,height:g,hideOnFailure:v=!1,hoverZoom:y,maxHeight:x,maxWidth:b,minHeight:w,minWidth:k,onImageError:C,onImageLoad:j,imageRef:E,imageFrameRef:N,imageFrameComponent:A,imageContentComponent:I,loadedOverlay:S,position:R,radius:M,secondaryAction:L,size:T,src:F,width:O}){let z=(0,s.useContext)(a.gA),P=(0,s.useContext)(a.EM),D=(0,s.useContext)(eN),[$]=(0,s.useState)(z),[H,W]=(0,s.useState)(null),[V,q]=(0,s.useState)(),B=(0,s.useRef)(void 0),_=null!=S,K=V?.src===F?V?.aspectRatio:void 0,U=d&&void 0!==K&&(K<=d.min||K>=d.max)?"contain":p,G=y&&A&&I,Y=G?I:null,X=(0,s.useRef)(null),[J,Q]=(0,s.useState)(),ee=function(e,t,n="contain"){if(!e)return;let r=e.aspect_ratio,i=e.placement,a=t??r;if(!Number.isFinite(r)||r<=0||!Number.isFinite(a)||a<=0||!i||!Number.isFinite(i.left)||!Number.isFinite(i.top)||!Number.isFinite(i.width)||i.width<=0||!Number.isFinite(i.height)||i.height<=0)return;let o="cover"===n?Math.max:Math.min,l=100*o(1,r/a),s=100*o(1,a/r);return{viewport:{left:(100-l)/2,top:(100-s)/2,width:l,height:s},image:i}}(c,J,u),et=null!=ee,en=(0,s.useCallback)(e=>{if(X.current=e,"function"==typeof N)return N(e);N&&(N.current=e)},[N]);(0,s.useLayoutEffect)(()=>{let e=X.current;if(!et||!e)return;let t=()=>{let t=e.getBoundingClientRect();t.width>0&&t.height>0&&Q(t.width/t.height)};if(t(),"u"<typeof ResizeObserver)return;let n=new ResizeObserver(t);return n.observe(e),()=>n.disconnect()},[et,F,H]);let er=g??T,ei=O??T,ea={...(0,m.dj)(M),aspectRatio:(0,m.xt)(n)??(et?c?.aspect_ratio:void 0),height:er,maxHeight:x,maxWidth:b,minHeight:w,minWidth:k,width:ei},eo=(0,ex.A)((0,m.Gx)((0,m.X0)(P,r),P)),el={...ea,...eo,overflow:"hidden"};if((0,s.useEffect)(()=>{W(null)},[F]),(0,s.useEffect)(()=>{(d||L||e||_)&&B.current?.src===F&&q(B.current)},[e,d,L,_,F]),H===F&&null!=h)return(0,i.jsxs)("div",{ref:en,className:`${eb} ${ew} Fallback-fiDrou`,"data-d-component":"image","data-d-image-fallback":"","data-d-frame":f?"":void 0,style:el,children:[h,null==l?null:(0,i.jsx)("div",{className:eC,children:l})]});if(H===F&&v)return null;let es=F?(0,i.jsx)(Z._,{ref:E,alt:t,className:`${eb} LoadingImage-GUJwJt`,forceRenderAfterLoadFail:!v&&null==h,onError:e=>{W(F),C?.(e)},onLoad:t=>{W(null);let n=t.currentTarget;if(n.getAttribute("src")===F&&Number.isFinite(n.naturalWidth)&&Number.isFinite(n.naturalHeight)&&n.naturalWidth>0&&n.naturalHeight>0){let t={aspectRatio:n.naturalWidth/n.naturalHeight,src:F};B.current=t,(d||L||e||_)&&q(t)}j?.(t)},referrerPolicy:"no-referrer",src:F,style:{...ea,mixBlendMode:o,objectFit:U,objectPosition:R,...G&&!ee?{width:null!=ei?"100%":void 0,height:null!=er?"100%":void 0,maxWidth:"none",maxHeight:"none",minWidth:0,minHeight:0}:{},...ee?{position:"absolute",left:`${ee.image.left}%`,top:`${ee.image.top}%`,width:`${ee.image.width}%`,height:`${ee.image.height}%`,aspectRatio:void 0,maxWidth:"none",maxHeight:"none",minWidth:0,minHeight:0,objectFit:"fill"}:{}}},F):null,ed=Y?(0,i.jsx)(Y,{className:"HoverContent-tzdYPR",style:o?eo:void 0,children:es}):es,ec=!D&&null!=V&&V.src===F&&null!=e;return(0,i.jsxs)(G?A:"div",{ref:en,className:`${eb} ${ew} ${ek}${e?" group/search-image":""}`,"data-d-component":"image","data-d-stream-media":$?"":void 0,"data-d-frame":f?"":void 0,"data-d-hover-zoom":y&&!G?"":void 0,"data-d-host-hover":G?"":void 0,style:el,children:[ee?(0,i.jsx)("div",{className:"Crop-pc1qo_","data-d-image-crop":"",style:{left:`${ee.viewport.left}%`,top:`${ee.viewport.top}%`,width:`${ee.viewport.width}%`,height:`${ee.viewport.height}%`},children:ed}):ed,(0,i.jsx)("div",{className:"LoadingSurface-OjqK7X","data-d-image-loading":"",children:(0,i.jsx)(ej,{background:"light-dark(var(--dil-image-loading-light-bg, var(--theme-user-msg-bg, var(--color-background-info-surface))), var(--theme-user-msg-bg, var(--color-background-info-surface)))",duration:1e3,height:"100%",width:"100%"})}),null==l?null:(0,i.jsx)("div",{className:eC,children:l}),L&&V?.src===F?(0,i.jsx)("div",{className:"SecondaryAction-E0EAcW",children:(0,i.jsx)(eS,{ariaLabel:L.label,onClick:L.onClick,children:L.icon?(0,i.jsx)(ey.I,{inline:!0,name:L.icon,size:"sm"}):L.label})}):null,ec?(0,i.jsx)(eM,{children:e}):null,f?(0,i.jsx)("div",{"aria-hidden":"true",className:"Frame-UCrMGp"}):null,V?.src===F&&H!==F&&_?S:null]})}function eM({children:e}){return(0,i.jsx)("div",{className:"ActionOverlayContainer-A1skHN",children:(0,i.jsx)("div",{className:"ActionOverlay-e4zhB5",children:e})})}var eL=n("Z8P7"),eT=n("sCki"),eF=n("H9jZ"),eO=n("f9K9"),ez=n("urXC"),eP=n("qF9g");let eD=(0,s.createContext)("none"),e$=(0,s.createContext)({inheritedMarker:"none",nativeMarker:null}),eH=["md","lg","xl"],eW=(0,s.createContext)({maxMarkerSize:"md",reserveMarkerLane:!1});function eV({children:e,description:t,disabled:n,label:r,marker:a,markerSize:o}){var l,d;let c=(0,s.useContext)(eD),u=(0,s.useContext)(e$),m=a??u.inheritedMarker??"none",h=null==a&&m===u.nativeMarker,p=(0,s.useContext)(eW),f=(l=eB(o,p.maxMarkerSize),d=p.maxMarkerSize,eH[Math.min(eH.indexOf(l),eH.indexOf(d))]),v="string"!=typeof m,y=v?"rich":m,x=e_(c,m),b=(0,s.useContext)(eP.k),w=x&&!b;return(0,i.jsxs)("li",{className:ez.A.Item,"data-d-component":"list-item","data-d-connector":"solid"===c?c:void 0,"data-d-marker":"solid"===c?y:void 0,"data-d-marker-layout":h?"native":"custom","data-d-rich-marker-size":v?f:void 0,"data-d-rich-marker-lane":v&&p.reserveMarkerLane?p.maxMarkerSize:void 0,children:[h?null:(0,i.jsx)(eq,{marker:m,markerSize:f,maxMarkerSize:p.maxMarkerSize,reserveMarkerLane:p.reserveMarkerLane}),(0,i.jsxs)("div",{className:ez.A.Content,children:[(0,i.jsx)("div",{className:ez.A.Label,"data-d-disabled":n?"":void 0,"data-d-list-item-content":w?"connected":x?void 0:"",children:(0,g.M)(e??r,{markInlineText:w})}),t?(0,i.jsx)("div",{className:ez.A.Description,children:(0,g.M)(t)}):null]})]})}function eq({marker:e,markerSize:t,maxMarkerSize:n,reserveMarkerLane:r}){return"none"===e?null:"string"!=typeof e?(0,i.jsx)("span",{"aria-hidden":"true",inert:!0,className:ez.A.Marker,"data-d-marker":"rich","data-d-max-marker-size":r?n:void 0,children:(0,i.jsx)("span",{className:ez.A.RichMarker,"data-d-marker-size":t,children:e})}):(0,i.jsx)("span",{"aria-hidden":"true",className:ez.A.Marker,"data-d-marker":e})}function eB(e,t){return eH.find(t=>t===e)??t}function e_(e,t){return"solid"===e&&(eK(t)||"string"!=typeof t)}function eK(e){return"bullet"===e||"number"===e}var eU=n("AxvA");let eG={sm:16,md:20,lg:24};var eY=n("wKck");function eX({advanceRate:e=0,animationEndTime:t=0,animationStartTime:n=0,currentTime:r=0,data:a,fit:o="contain",loop:l=!1,player:d}){let c=(0,s.useRef)(null),[u,m]=(0,s.useState)();(0,s.useEffect)(()=>{let e,t=c.current;if(!t)return;let n=!0,r=t=>{n&&(console.warn("Failed to load Lottie animation",t),n=!1,e?.destroy(),m(void 0))};try{d.setIDPrefix("dil-");let i=e=d.loadAnimation({autoloadSegments:!1,autoplay:!1,container:t,loop:!1,renderer:"svg",rendererSettings:{preserveAspectRatio:"xMidYMid meet",runExpressions:!1}});i.addEventListener("DOMLoaded",()=>{n&&m(i)}),i.addEventListener("data_failed",r),i.addEventListener("error",r),i.setupAnimation(structuredClone(a))}catch(e){r(e)}return()=>{n&&(n=!1,e?.destroy())}},[a,d]);let h=u?.frameRate??0,p="number"==typeof a?.ip?a.ip:0,f="number"==typeof a?.op&&h>0?Math.max(0,(a.op-p)/h):0,g=Math.max(0,Math.min(n,f)),v=Math.max(g,Math.min(t>0?t:f,f)),y=v-g;(0,s.useEffect)(()=>{u?.setLoop(l)},[u,l]),(0,s.useEffect)(()=>{f>0&&u?.setSegment(p+(y>0?g*h:0),p+(y>0?v:f)*h)},[u,f,v,h,p,g,y]),(0,s.useEffect)(()=>{if(!u||f<=0)return;let e=y<=0?Math.max(0,Math.min(g*h,f*h-1)):u.loop?(r%y+y)%y*h:Math.max(0,Math.min(r*h,y*h-1));u.goToAndStop(e,!0)},[u,r,f,h,g,y]),(0,s.useEffect)(()=>{u&&(0===e||y*h<=1?u.pause():(u.setSpeed(e),u.play()))},[e,u,r,h,l,g,y]),(0,s.useEffect)(()=>{let e=c.current?.querySelector("svg");e&&e.setAttribute("preserveAspectRatio","fill"===o?"none":"cover"===o?"xMidYMid slice":"xMidYMid meet")},[u,o]);let x="number"==typeof a?.w&&a.w>0?a.w:void 0,b="number"==typeof a?.h&&a.h>0?a.h:void 0,w="none"===o&&null!=x&&null!=b;return(0,i.jsx)("div",{"aria-hidden":"true",ref:c,style:w?{height:b,left:"50%",position:"absolute",top:"50%",transform:"translate(-50%, -50%)",width:x}:{height:"100%",width:"100%"}})}let eZ=/^data:image\/(?:avif|jpeg|png|webp);base64,/i,eJ=/^[^?#]*\.(?:apng|avif|bmp|gif|ico|jpe?g|png|svg|webp)(?:[?#].*)?$/i;function eQ(e){return/^data:application\/(?:json|[^;,]+\+json|octet-stream)(?:[;,]|$)/i.test(e)}function e0(e){return"string"==typeof e&&e.length<=2097152&&eZ.test(e)}function e1(e){return"object"==typeof e&&null!==e&&!Array.isArray(e)}function e2({advanceRate:e,alt:t,animationEndTime:r,animationStartTime:o,aspectRatio:l,assetUrlGate:d,currentTime:c,fit:u="contain",height:h,loop:p,maxHeight:f,maxWidth:g,minHeight:v,minWidth:y,radius:x,source:b,width:w}){let k,C=(0,s.useContext)(a.Ob),j=(0,s.useMemo)(()=>JSON.stringify(b),[b]),E="string"==typeof b&&(/^data:/i.test(b)?!eQ(b):eJ.test(b)),N="string"==typeof b&&(/^data:/i.test(b)?!eQ(b)&&!e0(b):C),[A,I]=(0,s.useState)(),S=N||A?.serializedSource!==j?void 0:A;(0,s.useEffect)(()=>{if(I(void 0),N||E)return;let e=new AbortController;return(async()=>{let t=JSON.parse(j),[r,i]=await Promise.all([async function(e,t){if("string"!=typeof e)return e;let n=await fetch(e,{redirect:"error",referrerPolicy:"no-referrer",signal:t});if(!n.ok)throw Error(`Animation request failed with ${n.status}`);return n.json()}(t,e.signal),n.e(747352).then(n.t.bind(n,"nWIu",23))]);e.signal.aborted||I({...function(e,t){if(!e1(e)||!Array.isArray(e.layers))throw Error("Invalid Lottie animation data");if(null!=e.segments&&(!Array.isArray(e.segments)||e.segments.length>0))throw Error("External Lottie animation segments are not supported");if(null!=e.slots&&(!e1(e.slots)||Object.keys(e.slots).length>0))throw Error("Lottie asset slots are not supported");if(null!=e.assets&&!Array.isArray(e.assets))throw Error("Invalid Lottie assets");let n="string"!=typeof t||eQ(t)?document.baseURI:new URL(t,document.baseURI).href,r=new Set,i=e.assets?.map(e=>{if(!e1(e))throw Error("Invalid Lottie asset");if(Array.isArray(e.layers)&&null==e.p&&null==e.u&&null==e.sid)return e;if("string"!=typeof e.p||null!=e.u&&"string"!=typeof e.u||null!=e.sid)throw Error("Invalid Lottie image source");let t=e.e?e.p:`${e.u??""}${e.p}`,i=t;if(!e0(t)){let e=new URL(t,n);if("https:"!==e.protocol&&"http:"!==e.protocol)throw Error("Unsupported Lottie image URL protocol");i=e.href,r.add(i)}return{...e,e:1,p:i,u:""}});if(null!=e.fonts&&(!e1(e.fonts)||null!=e.fonts.list&&!Array.isArray(e.fonts.list)||!(e.fonts.list??[]).every(e=>e1(e)&&(null==e.fPath||""===e.fPath))))throw Error("External or invalid Lottie fonts are not supported");return{data:void 0===i?e:{...e,assets:i},imageUrls:[...r]}}(r,t),player:i.default,serializedSource:j})})().catch(t=>{e.signal.aborted||console.warn("Failed to load Lottie animation",t)}),()=>e.abort()},[N,E,j]);let R=function({width:e,height:t,aspectRatio:n},r){let i={width:e,height:t,aspectRatio:(0,m.xt)(n)};if(void 0!==e&&void 0!==t||(void 0!==e||void 0!==t)&&void 0!==i.aspectRatio)return i;let a=r?.w,o=r?.h;return"number"!=typeof a||!Number.isFinite(a)||a<=0||"number"!=typeof o||!Number.isFinite(o)||o<=0||(void 0!==e||void 0!==t?i.aspectRatio=a/o:(i.width=a,void 0===i.aspectRatio&&(i.height=o))),i}({width:w,height:h,aspectRatio:l},"string"==typeof b?S?.data:b);return E&&"string"==typeof b&&!N?k=(0,i.jsx)("img",{alt:"","aria-hidden":"true",referrerPolicy:"no-referrer",src:b,style:{height:"100%",objectFit:u,width:"100%"}}):S&&!(C&&S.imageUrls.length>0)&&(k=(0,i.jsx)(eX,{advanceRate:e,animationEndTime:r,animationStartTime:o,currentTime:c,data:S.data,fit:u,loop:p,player:S.player}),d&&S.imageUrls.length>0&&(k=(0,i.jsx)(d,{urls:S.imageUrls,children:k}))),(0,i.jsx)("div",{"aria-label":t,"data-d-component":"lottie",role:t?"img":void 0,style:{...(0,m.dj)(x),...R,maxHeight:f,maxWidth:g,minHeight:v,minWidth:y,overflow:"hidden",position:"relative"},children:k})}var e3=n("geVp"),e5=n("D5Ha"),e4=n("SEkw");function e6({align:e,children:t,side:n,sideOffset:r,width:a}){return(0,i.jsx)(e4.A.Content,{align:e,"data-d-component":"popover-content",minWidth:"auto",side:n,sideOffset:r,width:a,children:t})}var e8=n("zc1D"),e9="Reveal-gjV40U",e7="Content-qGIRDv",te=n("Q6bS");function tt({"aria-label":e,children:t,disabled:n,id:r,hideIndicator:a,required:o,value:l}){return(0,i.jsx)(te.z.Item,{"aria-label":e,"data-d-component":"radio",disabled:n,id:r,hideIndicator:a,required:o,value:l,children:t})}function tn(e,t=!0){let n,r=e.target;if(e.defaultPrevented||!(r instanceof HTMLButtonElement)||"radio"!==r.getAttribute("role")||r.disabled||e.altKey||e.ctrlKey||e.metaKey||e.shiftKey)return;let i=r.closest('[data-d-component="radio-group"], [data-d-component="segmented-control"]');if(i!==e.currentTarget||i.closest('[role="toolbar"]'))return;let a=i.matches('[role="radiogroup"]')?i:i.querySelector('[role="radiogroup"], [role="group"]');if(!a)return;let o="rtl"===getComputedStyle(a).direction;switch(e.key){case"ArrowLeft":n=o?1:-1;break;case"ArrowRight":n=o?-1:1;break;case"ArrowUp":n=-1;break;case"ArrowDown":n=1;break;default:return}let l=Array.from(a.querySelectorAll('button[role="radio"]:not([disabled])')).filter(e=>e.closest('[data-d-component="radio-group"], [data-d-component="segmented-control"]')===i),s=l.indexOf(r)+n,d=l[t?(s+l.length)%l.length:s];e.preventDefault(),e.stopPropagation(),d&&(d.focus(),"true"!==d.getAttribute("aria-checked")&&d.click())}var tr=n("BJV4");let ti="'sha256-0qPQ8TbRMhIKuxrQHW6yy8DsXNh2it03McoHfWW1F7w='",ta="'sha256-imuDaJTFRRz5n5LmzTCR6fKNDVbyBMuRlkVtFY4dBK8='",to=e=>e.replaceAll("&","&amp;").replaceAll('"',"&quot;").replaceAll("<","&lt;").replaceAll(">","&gt;"),tl=e=>e.replaceAll("&","&amp;").replaceAll("<","&lt;").replaceAll(">","&gt;"),ts=/^https?:\/\/([^/?#]+)/i,td=/\s/;function tc(e){return null!=e&&"object"==typeof e}function tu(e,t){return Object.keys(e).length===t.length&&t.every(t=>Object.prototype.hasOwnProperty.call(e,t))}function tm(e,t){if("string"!=typeof e||!tf(e,2048))return!1;let n=ts.exec(e);if(function(e){if(td.test(e))return!0;for(let t=0;t<e.length;t+=1){let n=e.charCodeAt(t);if(n<=31||n>=127&&n<=159)return!0}return!1}(e)||null==n||n[1].includes("@"))return!1;try{let n=new URL(e);return t.has(n.protocol)&&0===n.username.length&&0===n.password.length}catch{return!1}}let th=new Set(["http:","https:"]),tp=new Set(["https:"]);function tf(e,t){return e.length<=t&&function(e){if("u">typeof TextEncoder)return new TextEncoder().encode(e).byteLength;let t=0;for(let n=0;n<e.length;n+=1){let r=e.charCodeAt(n);if(r<128)t+=1;else if(r<2048)t+=2;else if(r>=55296&&r<=56319){let r=e.charCodeAt(n+1);r>=56320&&r<=57343?(t+=4,n+=1):t+=3}else t+=3}return t}(e)<=t}function tg({preview:e,labels:t,...n}){let r=(0,s.useMemo)(()=>(function(e){try{if(!tc(e)||!tu(e,["fragment","links"])&&!tu(e,["fragment","links","images"])||"string"!=typeof e.fragment||!tf(e.fragment,262144)||0===e.fragment.trim().length||!Array.isArray(e.links)||e.links.length>256||Object.hasOwn(e,"images")&&(!Array.isArray(e.images)||e.images.length>256))return;let t=[];for(let[n,r]of e.links.entries()){if(!tc(r)||!tu(r,["token","url"])||r.token!==`l${n}`||!tm(r.url,th))return;t.push({token:r.token,url:r.url})}if(!function(e,t){if("u"<typeof document)return!1;try{let n=document.createElement("template");n.innerHTML=e;let r=n.content.querySelectorAll("[data-oai-link-token]");return r.length===t.length&&t.every((e,t)=>{let n=r.item(t);return n?.localName==="a"&&n.getAttribute("data-oai-link-token")===e.token})}catch{return!1}}(e.fragment,t))return;let n=[];for(let[t,r]of(Array.isArray(e.images)?e.images:[]).entries()){if(!tc(r)||!tu(r,["token","url"])||r.token!==`i${t}`||!tm(r.url,tp))return;n.push({token:r.token,url:r.url})}let r={fragment:e.fragment,links:t,images:n};return!function(e){try{return tf(JSON.stringify(e),786432)}catch{return!1}}(e)?void 0:r}catch{return}})(e),[e]);return r?(0,i.jsx)(tv,{viewProps:{...n,labels:t,preview:r}}):(0,i.jsx)(ee.E,{color:"secondary",children:void 0===e?t.loading:t.unavailable})}function tv({viewProps:e}){let{preview:t,labels:n,onOpenLink:r,contentScale:a=1,title:o="HTML preview",height:l=360,width:d="100%",...c}=e,u=(0,s.useRef)(null),[m,h]=(0,s.useState)(!1),p=Number.isFinite(a)&&a>0?a:1;return(0,s.useLayoutEffect)(()=>{let e=u.current;if(!e)return;let n=crypto.randomUUID(),i=new AbortController;if(r&&t.links.length>0){let a=new Map(t.links.map(({token:e,url:t})=>[e,t]));window.addEventListener("message",t=>{if(t.source!==e.contentWindow||"null"!==t.origin)return;let o=t.data;if(null==o||"object"!=typeof o||"link.activate"!==o.type||1!==o.version||o.channelToken!==n||"string"!=typeof o.token)return;let l=a.get(o.token);null!=l&&r(l,i.signal)},{signal:i.signal})}return e.srcdoc=((e,t,n=[],r=!1)=>{let i=r?n:[],a=JSON.stringify(i);return`<!doctype html><html><head><meta http-equiv="Content-Security-Policy" content="${to(["default-src 'none'","base-uri 'none'","form-action 'none'","object-src 'none'","frame-src 'none'","child-src 'none'","connect-src 'none'","font-src 'none'",0===i.length?"img-src 'none'":"img-src https:","media-src 'none'","worker-src 'none'","manifest-src 'none'",`script-src ${ti}`,`script-src-elem ${ti}`,"script-src-attr 'none'",`style-src ${ta}`,`style-src-elem ${ta}`,"style-src-attr 'unsafe-inline'"].join("; "))}"><meta name="referrer" content="no-referrer"><meta name="oai-email-html-channel-token" content="${to(e)}"><style>html{color-scheme:light dark}body{margin:0;padding:0;overflow-wrap:anywhere;font:14px/1.5 ui-sans-serif,system-ui,sans-serif}a[data-oai-link-token]{cursor:pointer;text-decoration:underline;text-underline-offset:2px}</style></head><body><template id="email-html-source">${tl(t)}</template><template id="email-html-images">${tl(a)}</template><div id="email-html-content"></div><script>// @ts-check

(() => {
  "use strict";
  const maxFragmentBytes = 256 * 1024;
  const maxDomNodes = 5000;
  const maxDomDepth = 128;
  const maxImages = 256;
  const version = 1;
  const metadata = document.querySelector(
    'meta[name="oai-email-html-channel-token"]',
  );
  const channelToken =
    metadata instanceof HTMLMetaElement ? metadata.content : undefined;
  if (!channelToken) return;
  const source = document.getElementById("email-html-source");
  const content = document.getElementById("email-html-content");
  if (!(source instanceof HTMLTemplateElement) || !content) return;
  const fragmentSource = source.content.textContent || "";
  const imageSource = document.getElementById("email-html-images");
  /** @type {Map<string, string>} */
  const imagesByToken = new Map();
  if (imageSource instanceof HTMLTemplateElement) {
    try {
      const imageEntries = JSON.parse(imageSource.content.textContent || "[]");
      if (Array.isArray(imageEntries) && imageEntries.length <= maxImages) {
        imageEntries.forEach((entry, index) => {
          if (
            !entry ||
            typeof entry !== "object" ||
            Object.keys(entry).length !== 2 ||
            entry.token !== \`i$\{index}\` ||
            typeof entry.url !== "string"
          ) {
            return;
          }
          try {
            const url = new URL(entry.url);
            if (url.protocol === "https:" && !url.username && !url.password) {
              imagesByToken.set(entry.token, entry.url);
            }
          } catch {}
        });
      }
    } catch {}
  }
  source.remove();
  imageSource?.remove();
  content.replaceChildren();
  if (new TextEncoder().encode(fragmentSource).byteLength > maxFragmentBytes)
    return;
  const allowedTags = new Set([
    "a",
    "abbr",
    "acronym",
    "address",
    "article",
    "aside",
    "b",
    "bdi",
    "bdo",
    "blockquote",
    "br",
    "caption",
    "center",
    "cite",
    "code",
    "col",
    "colgroup",
    "data",
    "dd",
    "del",
    "details",
    "dfn",
    "div",
    "dl",
    "dt",
    "em",
    "figcaption",
    "figure",
    "footer",
    "h1",
    "h2",
    "h3",
    "h4",
    "h5",
    "h6",
    "header",
    "hgroup",
    "hr",
    "i",
    "img",
    "ins",
    "kbd",
    "li",
    "main",
    "mark",
    "nav",
    "ol",
    "p",
    "pre",
    "q",
    "rp",
    "rt",
    "rtc",
    "ruby",
    "s",
    "samp",
    "section",
    "small",
    "span",
    "strike",
    "strong",
    "sub",
    "summary",
    "sup",
    "table",
    "tbody",
    "td",
    "tfoot",
    "th",
    "thead",
    "time",
    "tr",
    "tt",
    "u",
    "ul",
    "var",
    "wbr",
  ]);
  const dropSubtreeTags = new Set([
    "frame",
    "frameset",
    "head",
    "iframe",
    "math",
    "noscript",
    "script",
    "style",
    "svg",
    "template",
    "title",
  ]);
  const allowedAttributes = new Set([
    "style",
    "lang",
    "dir",
    "data-oai-link-token",
    "data-oai-image-token",
    "data-oai-image-fallback-token",
    "alt",
    "colspan",
    "rowspan",
    "scope",
    "align",
    "valign",
    "width",
    "height",
    "cellpadding",
    "cellspacing",
    "border",
    "bgcolor",
    "role",
    "hidden",
    "open",
  ]);
  const allowedCssProperties = new Set([
    "background",
    "background-color",
    "border",
    "border-bottom",
    "border-bottom-color",
    "border-bottom-style",
    "border-bottom-width",
    "border-collapse",
    "border-color",
    "border-left",
    "border-left-color",
    "border-left-style",
    "border-left-width",
    "border-radius",
    "border-right",
    "border-right-color",
    "border-right-style",
    "border-right-width",
    "border-spacing",
    "border-style",
    "border-top",
    "border-top-color",
    "border-top-style",
    "border-top-width",
    "border-width",
    "box-shadow",
    "box-sizing",
    "color",
    "display",
    "font",
    "font-family",
    "font-size",
    "font-style",
    "font-weight",
    "height",
    "letter-spacing",
    "line-height",
    "margin",
    "margin-bottom",
    "margin-left",
    "margin-right",
    "margin-top",
    "max-height",
    "max-width",
    "min-height",
    "min-width",
    "opacity",
    "padding",
    "padding-bottom",
    "padding-left",
    "padding-right",
    "padding-top",
    "overflow-wrap",
    "table-layout",
    "text-align",
    "text-decoration",
    "text-indent",
    "text-transform",
    "vertical-align",
    "visibility",
    "white-space",
    "width",
    "word-break",
    "word-spacing",
    "word-wrap",
  ]);
  const allowedCssFunctions = new Set(["rgb", "rgba", "hsl", "hsla"]);
  const allowedCssDimensionUnits = new Set([
    "deg",
    "grad",
    "px",
    "rad",
    "turn",
  ]);
  const allowedDisplayValues = new Set([
    "block",
    "inline",
    "inline-block",
    "table",
    "table-row",
    "table-cell",
    "table-column",
    "table-column-group",
    "table-header-group",
    "table-footer-group",
    "table-row-group",
    "flex",
    "inline-flex",
    "grid",
    "list-item",
    "none",
  ]);
  const allowedAlignValues = new Set(["left", "right", "center", "justify"]);
  const allowedValignValues = new Set(["top", "middle", "bottom", "baseline"]);
  const allowedRoleValues = new Set(["presentation", "none"]);
  const allowedVisibilityValues = new Set(["visible", "hidden", "collapse"]);
  const tableLayoutTags = new Set([
    "table",
    "thead",
    "tbody",
    "tfoot",
    "tr",
    "td",
    "th",
  ]);
  const dimensionAttributeTags = new Set([
    "table",
    "td",
    "th",
    "tr",
    "col",
    "colgroup",
    "img",
  ]);
  /** @param {string} value */
  const containsUnsafeStyleFunction = (value) => {
    const compact = [...value]
      .filter((character) => character.trim())
      .join("")
      .toLowerCase();
    for (const match of compact.matchAll(/([a-z0-9_-]+)\\(/g)) {
      const functionName = match[1];
      if (!allowedCssFunctions.has(functionName)) return true;
    }
    return false;
  };
  /** @param {string | undefined} character */
  const isCssDigit = (character) =>
    character !== undefined && character >= "0" && character <= "9";
  /** @param {string | undefined} character */
  const isCssHexDigit = (character) =>
    isCssDigit(character) ||
    (character !== undefined &&
      ((character >= "a" && character <= "f") ||
        (character >= "A" && character <= "F")));
  /** @param {string | undefined} character */
  const isCssNameStart = (character) =>
    character !== undefined &&
    ((character >= "a" && character <= "z") ||
      (character >= "A" && character <= "Z") ||
      character === "_" ||
      character.charCodeAt(0) >= 0x80);
  /** @param {string | undefined} character */
  const isCssName = (character) =>
    isCssNameStart(character) || isCssDigit(character) || character === "-";
  /** @param {string} value @param {number} index */
  const isValidCssEscape = (value, index) =>
    value[index] === "\\\\" &&
    index + 1 < value.length &&
    !["\\n", "\\r", "\\f"].includes(value[index + 1]);
  /** @param {string} value @param {number} index */
  const cssIdentifierStartsAt = (value, index) => {
    if (isCssNameStart(value[index])) return true;
    if (value[index] === "-") {
      return (
        isCssNameStart(value[index + 1]) ||
        value[index + 1] === "-" ||
        isValidCssEscape(value, index + 1)
      );
    }
    return isValidCssEscape(value, index);
  };
  /** @param {string} value @param {number} index */
  const consumeCssEscape = (value, index) => {
    let nextIndex = index + 1;
    if (!isCssHexDigit(value[nextIndex])) return nextIndex + 1;
    let hexDigits = 0;
    while (hexDigits < 6 && isCssHexDigit(value[nextIndex])) {
      nextIndex += 1;
      hexDigits += 1;
    }
    if (/\\s/.test(value[nextIndex] || "")) nextIndex += 1;
    return nextIndex;
  };
  /** @param {string} value @param {number} index */
  const consumeCssName = (value, index) => {
    let nextIndex = index;
    while (nextIndex < value.length) {
      if (isCssName(value[nextIndex])) {
        nextIndex += 1;
      } else if (isValidCssEscape(value, nextIndex)) {
        nextIndex = consumeCssEscape(value, nextIndex);
      } else {
        break;
      }
    }
    return nextIndex;
  };
  /** @param {string} value @param {number} index */
  const cssNumberStartsAt = (value, index) => {
    const first = value[index];
    const second = value[index + 1];
    const third = value[index + 2];
    return (
      isCssDigit(first) ||
      (first === "." && isCssDigit(second)) ||
      ((first === "+" || first === "-") &&
        (isCssDigit(second) || (second === "." && isCssDigit(third))))
    );
  };
  /** @param {string} value @param {number} index */
  const consumeCssNumber = (value, index) => {
    let nextIndex = index;
    if (value[nextIndex] === "+" || value[nextIndex] === "-") nextIndex += 1;
    while (isCssDigit(value[nextIndex])) nextIndex += 1;
    if (value[nextIndex] === "." && isCssDigit(value[nextIndex + 1])) {
      nextIndex += 1;
      while (isCssDigit(value[nextIndex])) nextIndex += 1;
    }
    if (
      (value[nextIndex] === "e" || value[nextIndex] === "E") &&
      (isCssDigit(value[nextIndex + 1]) ||
        ((value[nextIndex + 1] === "+" || value[nextIndex + 1] === "-") &&
          isCssDigit(value[nextIndex + 2])))
    ) {
      nextIndex += 1;
      if (value[nextIndex] === "+" || value[nextIndex] === "-") nextIndex += 1;
      while (isCssDigit(value[nextIndex])) nextIndex += 1;
    }
    return nextIndex;
  };
  /** @param {string} value */
  const sanitizeStyle = (value) => {
    const probe = document.createElement("div");
    value.split(";").forEach((declaration) => {
      const separatorIndex = declaration.indexOf(":");
      if (separatorIndex < 0) return;
      const property = declaration.slice(0, separatorIndex).trim();
      const rawPropertyValue = declaration.slice(separatorIndex + 1).trim();
      const importantMatch = rawPropertyValue.match(/!\\s*important\\s*$/i);
      const propertyValue = importantMatch
        ? rawPropertyValue.slice(0, importantMatch.index).trim()
        : rawPropertyValue;
      /** @type {[string, string][]} */
      const existingImportantDeclarations = [];
      if (!importantMatch) {
        Array.from({ length: probe.style.length }, (_, index) =>
          probe.style.item(index),
        ).forEach((existingProperty) => {
          if (
            probe.style.getPropertyPriority(existingProperty) === "important"
          ) {
            existingImportantDeclarations.push([
              existingProperty,
              probe.style.getPropertyValue(existingProperty),
            ]);
          }
        });
      }
      probe.style.setProperty(
        property,
        propertyValue,
        importantMatch ? "important" : "",
      );
      existingImportantDeclarations.forEach(
        ([importantProperty, importantValue]) =>
          probe.style.setProperty(
            importantProperty,
            importantValue,
            "important",
          ),
      );
    });
    /** @type {string[]} */
    const sanitizedNormalDeclarations = [];
    /** @type {string[]} */
    const sanitizedImportantDeclarations = [];
    Array.from({ length: probe.style.length }, (_, index) =>
      probe.style.item(index),
    ).forEach((property) => {
      const normalizedProperty = property.toLowerCase();
      const propertyValue = probe.style.getPropertyValue(property);
      const propertyPriority = probe.style.getPropertyPriority(property);
      if (!allowedCssProperties.has(normalizedProperty)) return;
      if (
        normalizedProperty === "display" &&
        !allowedDisplayValues.has(propertyValue.trim().toLowerCase())
      ) {
        return;
      }
      if (
        normalizedProperty === "opacity" &&
        !opacityValueIsSafe(propertyValue)
      )
        return;
      if (
        normalizedProperty === "visibility" &&
        !allowedVisibilityValues.has(propertyValue.trim().toLowerCase())
      ) {
        return;
      }
      if (containsUnsafeStyleFunction(propertyValue)) return;
      if (!cssNumericValuesAreSafe(propertyValue)) return;
      const serializedDeclaration = \`$\{normalizedProperty}: $\{propertyValue}$\{propertyPriority ? " !important" : ""}\`;
      const declarations = propertyPriority
        ? sanitizedImportantDeclarations
        : sanitizedNormalDeclarations;
      declarations.push(serializedDeclaration);
    });
    return sanitizedNormalDeclarations
      .concat(sanitizedImportantDeclarations)
      .join("; ");
  };
  /** @param {string} value */
  const opacityValueIsSafe = (value) => {
    const trimmed = value.trim().toLowerCase();
    const percentage = trimmed.match(/^(\\d+(?:\\.\\d+)?|\\.\\d+)%$/);
    if (percentage) {
      return Number(percentage[1]) <= 100;
    }
    if (!/^(\\d+(?:\\.\\d+)?|\\.\\d+)$/.test(trimmed)) return false;
    return Number(trimmed) <= 1;
  };
  /** @param {string} value */
  const cssNumericValuesAreSafe = (value) => {
    // Walk CSS tokens so digits in strings, hashes, and identifiers are not
    // mistaken for numeric values with layout-affecting bounds.
    let index = 0;
    while (index < value.length) {
      if (value[index] === '"' || value[index] === "'") {
        const quote = value[index];
        index += 1;
        while (index < value.length && value[index] !== quote) {
          index += value[index] === "\\\\" ? 2 : 1;
        }
        index += 1;
        continue;
      }
      if (value[index] === "#" && isCssName(value[index + 1])) {
        index = consumeCssName(value, index + 1);
        continue;
      }
      if (cssIdentifierStartsAt(value, index)) {
        index = consumeCssName(value, index);
        continue;
      }
      if (!cssNumberStartsAt(value, index)) {
        index += 1;
        continue;
      }
      const numberEnd = consumeCssNumber(value, index);
      const numeric = Number(value.slice(index, numberEnd));
      index = numberEnd;
      let unit;
      if (value[index] === "%") {
        unit = "%";
        index += 1;
      } else if (cssIdentifierStartsAt(value, index)) {
        const unitEnd = consumeCssName(value, index);
        unit = value.slice(index, unitEnd).toLowerCase();
        index = unitEnd;
      }
      if (!Number.isFinite(numeric) || numeric < 0) return false;
      if (unit === "%") {
        if (numeric > 100) return false;
      } else if (
        (unit && !allowedCssDimensionUnits.has(unit)) ||
        numeric > 2000
      ) {
        return false;
      }
    }
    return true;
  };
  /** @param {string} value @param {number} maximum */
  const integerAttributeIsSafe = (value, maximum) => {
    const trimmed = value.trim();
    if (!/^\\d+$/.test(trimmed)) return false;
    return Number(trimmed) <= maximum;
  };
  /** @param {string} value @param {number} maximum */
  const positiveIntegerAttributeIsSafe = (value, maximum) => {
    return integerAttributeIsSafe(value, maximum) && Number(value.trim()) > 0;
  };
  /** @param {string} value */
  const dimensionAttributeIsSafe = (value) => {
    const trimmed = value.trim();
    if (trimmed.endsWith("%")) {
      const percentage = trimmed.slice(0, -1);
      return /^\\d+$/.test(percentage) && Number(percentage) <= 100;
    }
    return integerAttributeIsSafe(trimmed, 2000);
  };
  /** @param {string} value */
  const colorAttributeIsSafe = (value) => {
    if (containsUnsafeStyleFunction(value)) return false;
    const probe = document.createElement("div");
    probe.style.color = value.trim();
    return probe.style.color !== "";
  };
  /** @param {Element} element @param {string} name @param {string} value */
  const attributeIsAllowed = (element, name, value) => {
    if (!allowedAttributes.has(name)) return false;
    if (name === "data-oai-link-token") return element.localName === "a";
    if (name === "data-oai-image-token" || name === "alt") {
      return element.localName === "img";
    }
    if (name === "data-oai-image-fallback-token") {
      return element.localName === "span";
    }
    if (name === "style") return sanitizeStyle(value) !== "";
    if (name === "hidden") return true;
    if (name === "open") return element.localName === "details";
    if (name === "align")
      return allowedAlignValues.has(value.trim().toLowerCase());
    if (name === "role") {
      return (
        element.localName === "table" &&
        allowedRoleValues.has(value.trim().toLowerCase())
      );
    }
    if (name === "valign") {
      return (
        tableLayoutTags.has(element.localName) &&
        allowedValignValues.has(value.trim().toLowerCase())
      );
    }
    if (name === "bgcolor") {
      return (
        tableLayoutTags.has(element.localName) && colorAttributeIsSafe(value)
      );
    }
    if (name === "width" || name === "height") {
      return (
        dimensionAttributeTags.has(element.localName) &&
        dimensionAttributeIsSafe(value)
      );
    }
    if (name === "cellpadding" || name === "cellspacing" || name === "border") {
      return (
        element.localName === "table" && integerAttributeIsSafe(value, 1000)
      );
    }
    if (name === "colspan" || name === "rowspan") {
      return (
        (element.localName === "td" || element.localName === "th") &&
        positiveIntegerAttributeIsSafe(value, 1000)
      );
    }
    if (name === "scope") {
      return (
        (element.localName === "td" || element.localName === "th") &&
        ["col", "colgroup", "row", "rowgroup"].includes(value)
      );
    }
    return true;
  };
  /** @param {string} name @param {string} value */
  const canonicalAttributeValue = (name, value) => {
    if (name === "hidden") {
      return value.trim().toLowerCase() === "until-found" ? "until-found" : "";
    }
    if (name === "open") return "";
    if (name === "style") return sanitizeStyle(value);
    return value;
  };
  /** @param {HTMLImageElement} image */
  const replaceImageWithFallback = (image) => {
    const fallback = document.createElement("span");
    const hidden = image.getAttribute("hidden");
    const style = image.getAttribute("style");
    if (hidden != null) fallback.setAttribute("hidden", hidden);
    if (style != null) fallback.setAttribute("style", style);
    fallback.textContent = image.getAttribute("alt") || "";
    image.replaceWith(fallback);
  };
  /** @param {Element} element */
  const unwrapElement = (element) => {
    const parent = element.parentNode;
    if (!parent) {
      element.remove();
      return;
    }
    while (element.firstChild) {
      parent.insertBefore(element.firstChild, element);
    }
    element.remove();
  };
  /** @param {DocumentFragment} root */
  const enforceDomLimits = (root) => {
    let nodeCount = 0;
    /** @type {{ node: Node; depth: number }[]} */
    const stack = [{ node: root, depth: 0 }];
    while (stack.length > 0) {
      const current = stack.pop();
      if (!current) break;
      nodeCount += 1;
      if (nodeCount > maxDomNodes || current.depth > maxDomDepth) return false;
      for (
        let index = current.node.childNodes.length - 1;
        index >= 0;
        index -= 1
      ) {
        const child = current.node.childNodes.item(index);
        if (child) stack.push({ node: child, depth: current.depth + 1 });
      }
    }
    return true;
  };
  /** @param {string} fragment */
  const sanitizeFragment = (fragment) => {
    const template = document.createElement("template");
    template.innerHTML = fragment;
    if (!enforceDomLimits(template.content)) return null;
    template.content.querySelectorAll("*").forEach((element) => {
      if (dropSubtreeTags.has(element.localName)) {
        element.remove();
        return;
      }
      if (!allowedTags.has(element.localName)) {
        unwrapElement(element);
        return;
      }
      [...element.attributes].forEach(({ name, value }) => {
        const normalizedName = name.toLowerCase();
        if (!attributeIsAllowed(element, normalizedName, value)) {
          element.removeAttribute(name);
          return;
        }
        element.setAttribute(
          name,
          canonicalAttributeValue(normalizedName, value),
        );
      });
    });
    return template.content;
  };
  let sanitizedFragment;
  try {
    sanitizedFragment = sanitizeFragment(fragmentSource);
  } catch {
    return;
  }
  if (!sanitizedFragment) return;
  content.replaceChildren(sanitizedFragment);
  content.querySelectorAll("img").forEach((image) => {
    const token = image.getAttribute("data-oai-image-token");
    const fallback = image.nextSibling;
    if (
      !token ||
      !(fallback instanceof HTMLSpanElement) ||
      fallback.getAttribute("data-oai-image-fallback-token") !== token
    ) {
      replaceImageWithFallback(image);
      return;
    }
    const url = imagesByToken.get(token);
    if (!url) {
      image.remove();
      return;
    }
    image.setAttribute("referrerpolicy", "no-referrer");
    image.setAttribute("src", url);
    fallback.remove();
  });
  /** @type {string | null} */
  let suppressedKeyboardToken = null;
  content.querySelectorAll("a[data-oai-link-token]").forEach((link) => {
    link.setAttribute("role", "link");
    link.setAttribute("tabindex", "0");
  });
  /** @param {Event} event */
  const getLink = (event) =>
    event.target instanceof Element
      ? event.target.closest("a[data-oai-link-token]")
      : null;
  /** @param {Event} event @param {Element | null} link */
  const activateLink = (event, link) => {
    const token = link?.getAttribute("data-oai-link-token");
    if (!token) return;
    event.preventDefault();
    window.parent.postMessage(
      { type: "link.activate", version, channelToken, token },
      "*",
    );
  };
  document.addEventListener("click", (event) => {
    const link = getLink(event);
    const token = link?.getAttribute("data-oai-link-token");
    if (token && token === suppressedKeyboardToken && event.detail === 0) {
      suppressedKeyboardToken = null;
      event.preventDefault();
      return;
    }
    suppressedKeyboardToken = null;
    activateLink(event, link);
  });
  document.addEventListener("keydown", (event) => {
    if (event.key !== "Enter" || event.repeat) return;
    const link = getLink(event);
    suppressedKeyboardToken = link?.getAttribute("data-oai-link-token") ?? null;
    queueMicrotask(() => {
      suppressedKeyboardToken = null;
    });
    activateLink(event, link);
  });
})();
<\/script></body></html>`})(n,t.fragment,t.images,m),()=>{i.abort(),e.removeAttribute("srcdoc")}},[m,r,t]),(0,i.jsxs)(eo.f,{gap:2,width:d,children:[t.images.length>0&&!m&&(0,i.jsx)(tr.f,{justify:"center",children:(0,i.jsx)(E,{size:"sm",color:"secondary",variant:"outline",onClick:()=>h(!0),children:n.showImages})}),(0,i.jsx)(M.K,{as:"div",className:ep,component:"read-only-html-view",height:l,width:"100%",layout:c,children:(0,i.jsx)("iframe",{ref:u,title:o,className:ef,sandbox:"allow-scripts",referrerPolicy:"no-referrer",style:{width:`${100/p}%`,maxWidth:"none",height:`${100/p}%`,transform:`scale(${p})`,transformOrigin:"top left"}})})]})}var ty=n("RdWu"),tx="Full-vcwMsm";let tb={};function tw({actionOverlay:e,alt:t,aspectRatio:n,background:r,bitmapBlendMode:a,children:o,containOutsideAspectRatio:l,contentCropFit:d,fallback:c,fit:u="cover",frame:m,height:h,hideOnFailure:p,hoverZoom:f,maxHeight:g,maxWidth:v,minHeight:y,minWidth:x,onLoad:b,onError:w,onImageLoad:k,onImageError:C,onImageFallback:j,imageFrameRef:E,imageFrameComponent:N,imageContentComponent:A,loadedOverlay:I,position:S,radius:R,searchImage:M,sourcePending:L=!1,sourceIdentity:T,secondaryAction:F,width:O}){let z=null!=M&&"object"==typeof M,P=z?M:tb,D=P.content_url??"",$=P.thumbnail_url??"",H=D||$,W=D&&$&&D!==$?$:"",[V,q]=(0,s.useState)(),B=H===V&&W?W:H,_=(0,s.useRef)(null),K=(0,s.useRef)(!0),U=(0,s.useRef)(null),G=(0,s.useRef)(null),Y=T??JSON.stringify([H,W]);(0,s.useLayoutEffect)(()=>(K.current=!0,()=>{K.current=!1}),[]),(0,s.useLayoutEffect)(()=>{G.current!==Y&&(G.current=Y,U.current=null)},[Y]);let X=(0,ty.K)(e=>{K.current&&null==U.current&&(U.current=e,"loaded"===e?b?.():w?.())});(0,s.useEffect)(()=>{!z||L||H&&(V!==H||W)||X("error")},[V,W,z,H,X,Y,L]),(0,s.useEffect)(()=>{q(void 0)},[H]);let Z=(0,s.useMemo)(()=>(function(e){if("number"==typeof e)return Number.isFinite(e)&&e>0?{height:1,width:e}:void 0;if("string"!=typeof e)return;let t=e.trim().match(/^([0-9]+(?:\.[0-9]+)?)\s*[:/]\s*([0-9]+(?:\.[0-9]+)?)$/);if(!t)return;let n=Number(t[1]),r=Number(t[2]);return tj(n)&&tj(r)?{height:r,width:n}:void 0})(n),[n]),[J,Q]=(0,s.useState)(),[ee,et]=(0,s.useState)(null);(0,s.useEffect)(()=>{let e=_.current;e?.getAttribute("src")===B&&e.complete&&e.naturalWidth>0&&X("loaded")},[B,X,Y]),(0,s.useLayoutEffect)(()=>{let e=_.current;if("cover"!==u||Z||!e||e.getAttribute("src")!==B)return void Q(void 0);let t=()=>{var t;let n,r=(t=e,(n=t?.getBoundingClientRect())&&tj(n.width)&&tj(n.height)?{height:n.height,width:n.width}:void 0);Q(e=>e?.width===r?.width&&e?.height===r?.height?e:r)};if(t(),"u"<typeof ResizeObserver)return;let n=new ResizeObserver(t);return n.observe(e),()=>{n.disconnect()}},[Z,u,ee,B]);let en=(0,s.useCallback)(e=>{if(K.current&&e.currentTarget.getAttribute("src")===B){if(B===H&&(q(H),W))return void j?.();B===H&&L||X("error"),C?.(e)}},[W,j,C,H,X,L,B]),er=P.thumbnail_size??P.content_size,ei=S??("cover"===u?function(e,t,n){if(!e||!t||!n||!tj(t.width)||!tj(t.height)||!tj(n.width)||!tj(n.height)||!Number.isFinite(e.center_x_percent)||!Number.isFinite(e.center_y_percent))return;let r=t.width/t.height,i=n.width/n.height;if(1e-6>Math.abs(r-i))return;let a=tE(e.center_x_percent),o=tE(e.center_y_percent),l=50,s=50;if(r>i)l=tN((a*r-i/2)/(r-i)*100,0,100);else{let e=1/r,t=1/i;s=tN((o*e-t/2)/(e-t)*100,0,100)}return`${l.toFixed(1)}% ${s.toFixed(1)}%`}(P.thumbnail_crop_info,er,Z??J):void 0);return(0,i.jsx)(eR,{actionOverlay:"function"==typeof e?e(B):e,imageFrameComponent:N,imageContentComponent:A,alt:t??P.title??"",aspectRatio:n,background:r,bitmapBlendMode:a,containOutsideAspectRatio:l,contentCropFit:d,contentCrop:(B===D?P.content_presentation:P.thumbnail_presentation)??void 0,fallback:c,fit:u,frame:m,height:h,hideOnFailure:p,hoverZoom:f,maxHeight:g,maxWidth:v,minHeight:y,minWidth:x,imageFrameRef:E,loadedOverlay:I,imageRef:_,onImageError:en,onImageLoad:e=>{K.current&&e.currentTarget.getAttribute("src")===B&&(et(e.currentTarget),X("loaded"),k?.(e))},position:ei,radius:R,src:B,secondaryAction:F,width:O,children:o})}function tk({sourceIdentity:e,children:t,imageFrameRef:n,...r}){let o=(0,s.useContext)(a.Ob),l=(0,s.useContext)(eN),d=r.searchImage,c=e??JSON.stringify([d?.content_url,d?.thumbnail_url]),u=r.hoverZoom&&r.imageFrameComponent&&r.imageContentComponent,h=u?r.imageFrameComponent:"div";return o?null==t?null:(0,i.jsx)(v.a,{height:r.height,width:r.width,minHeight:r.minHeight,minWidth:r.minWidth,maxHeight:r.maxHeight,maxWidth:r.maxWidth,aspectRatio:r.aspectRatio,radius:r.radius,background:r.background,children:t}):(0,i.jsxs)(h,{ref:n,className:`${eb} ${ek} Frame-ezNDuW${r.actionOverlay?" group/search-image":""}`,"data-d-component":"image","data-d-frame":r.frame?"":void 0,"data-d-hover-zoom":r.hoverZoom&&!u?"":void 0,"data-d-host-hover":u?"":void 0,style:{...(0,m.dj)(r.radius),aspectRatio:(0,m.xt)(r.aspectRatio),width:r.width,height:r.height,minWidth:r.minWidth,minHeight:r.minHeight,maxWidth:r.maxWidth,maxHeight:r.maxHeight},children:[(0,i.jsx)("div",{className:"Loading-JQ1C0R",children:(0,i.jsx)(ej,{height:"100%",width:"100%"})}),(0,i.jsx)(tC,{actionOverlay:l?void 0:r.actionOverlay,alt:r.alt,aspectRatio:r.aspectRatio,background:r.background,bitmapBlendMode:r.bitmapBlendMode,containOutsideAspectRatio:r.containOutsideAspectRatio,contentCropFit:r.contentCropFit,fallback:r.fallback,fit:r.fit,frame:r.frame,height:r.height,hideOnFailure:r.hideOnFailure,maxHeight:r.maxHeight,maxWidth:r.maxWidth,minHeight:r.minHeight,minWidth:r.minWidth,onLoad:r.onLoad,onError:r.onError,onImageLoad:r.onImageLoad,onImageError:r.onImageError,onImageFallback:r.onImageFallback,loadedOverlay:r.loadedOverlay,imageContentComponent:u?r.imageContentComponent:void 0,position:r.position,radius:r.radius,searchImage:r.searchImage,secondaryAction:r.secondaryAction,width:r.width,sourcePending:r.sourcePending,children:t},c)]})}function tC({actionOverlay:e,children:t,searchImage:n,loadedOverlay:r,imageContentComponent:a,fallback:o,sourcePending:l,onLoad:d,onError:c,onImageLoad:u,onImageError:m,onImageFallback:h,...p}){let f=null!=n&&"object"==typeof n,g=f?n:void 0,v=g?.thumbnail_url||"",y=g?.content_url||"",x=v||y,[b,w]=(0,s.useState)(),[k,C]=(0,s.useState)(),j=b?.src===x?b.state:"pending",E=k?.src===y?k.state:"pending",N=(0,s.useRef)(!0),A=(0,s.useRef)(null),I=(0,s.useRef)(!1),S=(0,s.useRef)(void 0),R=!!(v&&y&&y!==v),M=f&&(!x||"failed"===j)&&!l&&(!R||"failed"===E);(0,s.useLayoutEffect)(()=>(N.current=!0,()=>{N.current=!1}),[]);let L=(0,ty.K)(e=>{N.current&&null==A.current&&(A.current=e,"loaded"===e?d?.():c?.())});function T(e){I.current||(I.current=!0,u?.(e))}(0,s.useEffect)(()=>{M&&(L("error"),S.current&&!I.current&&"loaded"!==A.current&&(I.current=!0,m?.(S.current)))},[M,m,L]);let F={...p,frame:!1,height:"100%",width:"100%",minHeight:0,minWidth:0,maxHeight:void 0,maxWidth:void 0,radius:"none",hideOnFailure:!M||null!=o||p.hideOnFailure};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(a??"div",{className:"Bitmaps-MXF1L4",children:[(0,i.jsx)("div",{className:"Layer-vBnEbD","aria-hidden":"loaded"===E||M||void 0,"data-d-progressive-settled":"loaded"===j||"loaded"===E||M?"":void 0,style:{visibility:"loaded"===E?"hidden":void 0},children:(0,i.jsx)(tw,{alt:F.alt,aspectRatio:F.aspectRatio,background:F.background,bitmapBlendMode:F.bitmapBlendMode,containOutsideAspectRatio:F.containOutsideAspectRatio,contentCropFit:F.contentCropFit,fit:F.fit,frame:F.frame,height:F.height,hideOnFailure:F.hideOnFailure,maxHeight:F.maxHeight,maxWidth:F.maxWidth,minHeight:F.minHeight,minWidth:F.minWidth,position:F.position,radius:F.radius,secondaryAction:F.secondaryAction,width:F.width,searchImage:{...g,content_url:x,content_presentation:v?g?.thumbnail_presentation:g?.content_presentation,thumbnail_url:""},onLoad:()=>{N.current&&(w({src:x,state:"loaded"}),L("loaded"))},onError:()=>{N.current&&w({src:x,state:"failed"})},onImageLoad:e=>{N.current&&T(e)},onImageError:e=>{N.current&&(S.current={...e,currentTarget:e.currentTarget},(R||l)&&h?.())}},x)}),R&&"pending"!==j?(0,i.jsx)("div",{className:tx,"data-d-progressive-full":"",style:{opacity:+("loaded"===E)},"aria-hidden":"loaded"!==E||void 0,children:(0,i.jsx)(tw,{alt:F.alt,aspectRatio:F.aspectRatio,background:F.background,bitmapBlendMode:F.bitmapBlendMode,containOutsideAspectRatio:F.containOutsideAspectRatio,contentCropFit:F.contentCropFit,fit:F.fit,frame:F.frame,height:F.height,hideOnFailure:F.hideOnFailure,maxHeight:F.maxHeight,maxWidth:F.maxWidth,minHeight:F.minHeight,minWidth:F.minWidth,position:F.position,radius:F.radius,secondaryAction:F.secondaryAction,width:F.width,searchImage:{...g,content_url:y,thumbnail_url:""},onLoad:()=>{N.current&&(C({src:y,state:"loaded"}),L("loaded"))},onError:()=>{N.current&&C({src:y,state:"failed"})},onImageLoad:e=>{N.current&&T(e)},onImageError:e=>{N.current&&(S.current={...e,currentTarget:e.currentTarget})}},y)}):null]}),M&&null!=o?(0,i.jsx)("div",{className:tx,children:o}):null,null!=r&&("loaded"===j||"loaded"===E)?r:null,null==t?null:(0,i.jsx)("div",{className:eC,children:t}),null!=e&&("loaded"===E||"loaded"===j)?(0,i.jsx)(eM,{children:"function"==typeof e?e("loaded"===E?y:x):e}):null]})}function tj(e){return Number.isFinite(e)&&e>0}function tE(e){return tN(e>1?e/100:e,0,1)}function tN(e,t,n){return Math.min(Math.max(e,t),n)}var tA=n("fZ05"),tI=n("O9zu"),tS=n("gWf7"),tR=n("XvPX");let tM="http://www.w3.org/2000/svg",tL=new Set(["animate","animateMotion","animateTransform","set"]),tT={alignmentBaseline:"alignment-baseline",className:"class",clipPath:"clip-path",clipRule:"clip-rule",colorInterpolation:"color-interpolation",colorInterpolationFilters:"color-interpolation-filters",dominantBaseline:"dominant-baseline",fillOpacity:"fill-opacity",fillRule:"fill-rule",floodColor:"flood-color",floodOpacity:"flood-opacity",fontFamily:"font-family",fontSize:"font-size",fontStyle:"font-style",fontWeight:"font-weight",letterSpacing:"letter-spacing",lightingColor:"lighting-color",markerEnd:"marker-end",markerMid:"marker-mid",markerStart:"marker-start",pointerEvents:"pointer-events",stopColor:"stop-color",stopOpacity:"stop-opacity",strokeDasharray:"stroke-dasharray",strokeDashoffset:"stroke-dashoffset",strokeLinecap:"stroke-linecap",strokeLinejoin:"stroke-linejoin",strokeMiterlimit:"stroke-miterlimit",strokeOpacity:"stroke-opacity",strokeWidth:"stroke-width",textAnchor:"text-anchor",vectorEffect:"vector-effect",wordSpacing:"word-spacing",xlinkHref:"xlink:href"};function tF(e,t=0,n,r,i){let a=document.implementation.createHTMLDocument("").createElementNS(tM,"svg"),o=e.props;return a.setAttribute("font-family",n?.fontFamily||"sans-serif"),a.setAttribute("font-weight",n?.fontWeight||"normal"),tD(a,o,t,n?.color),function e(t,n,r,i,a=""){let o=0;tz(n,n=>{let l,d,c,u,m=o++;if("string"==typeof n||"number"==typeof n)return void t.append(t.ownerDocument.createTextNode(String(n)));if(tP(n))l=n.type,d=n.props,c=n.children,u=n.key;else{if(!(0,s.isValidElement)(n)||"string"!=typeof n.type)return;l=n.type,c=(d=n.props).children,u=n.key}let h=t.ownerDocument.createElementNS(tM,l),p=`${a}/${JSON.stringify([l,null!=u?["key",u]:null!=d.id?["id",d.id]:m])}`;tD(h,d,r),e(h,c,r,i?.visitChildren(l)?i:void 0,p),i?.visit(h,p),t.append(h)})}(a,o.children,t,r),r?.finish(a),i?.finish(a),new XMLSerializer().serializeToString(a)}function tO(e){let t="";return tz(e,e=>{"string"==typeof e||"number"==typeof e?t+=String(e):tP(e)?t+=tO(e.children):(0,s.isValidElement)(e)&&(t+=tO(e.props.children))}),t}function tz(e,t){if(Array.isArray(e)){for(let n of e)tz(n,t);return}(0,s.isValidElement)(e)&&e.type===s.Fragment?tz(e.props.children,t):null!=e&&"boolean"!=typeof e&&t(e)}function tP(e){return!(null==e||"object"!=typeof e||Array.isArray(e))&&"string"==typeof e.type&&null!=e.props&&"object"==typeof e.props&&!Array.isArray(e.props)&&Array.isArray(e.children)}function tD(e,t,n,r){for(let[i,a]of Object.entries(t)){if("children"===i||"dangerouslySetInnerHTML"===i||"ref"===i||i.startsWith("on")||null==a||!1===a)continue;if("style"===i&&"object"==typeof a){let t=Object.entries(a).filter(([,e])=>"number"==typeof e||"string"==typeof e).map(([e,t])=>{let n=e.replace(/[A-Z]/g,e=>`-${e.toLowerCase()}`),i="color"===e&&r?r:String(t);return`${n}:${i}`});t.length&&e.setAttribute("style",t.join(";"));continue}if("boolean"!=typeof a&&"number"!=typeof a&&"string"!=typeof a)continue;let t=tT[i]??i;if("xlink:href"===t){e.setAttributeNS("http://www.w3.org/1999/xlink",t,String(a));continue}if("begin"===i&&tL.has(e.localName)){e.setAttribute(t,function(e,t){return String(e).split(";").map(e=>{let n=e.trim().match(/^([+-]?(?:\d+(?:\.\d*)?|\.\d+))(ms|s)?$/);if(!n)return e;let r=Number(n[1])/("ms"===n[2]?1e3:1);return`${r-t}s`}).join(";")}(a,n));continue}e.setAttribute(t,String(a))}n>0&&tL.has(e.localName)&&!e.hasAttribute("begin")&&e.setAttribute("begin",`${-n}s`)}let t$=new Set(["circle","ellipse","foreignObject","image","line","path","polygon","polyline","rect","text","use"]),tH=new Set(["clipPath","defs","desc","filter","linearGradient","marker","mask","pattern","radialGradient","script","style","symbol","title"]);class tW{previous;animateNewElements;now;mode;starts=new Map;newKeys=new Set;hasReveals=!1;constructor(e,t,n,r="active"){this.previous=e,this.animateNewElements=t,this.now=n,this.mode=r}visit(e,t){if(!t$.has(e.localName)||"text"===e.localName&&!e.textContent?.trim()||"path"===e.localName&&!e.getAttribute("d")?.trim())return;let n=this.previous.has(t),r="disabled"===this.mode?null:n?this.previous.get(t):this.animateNewElements?this.now:null;this.starts.set(t,r),n||null===r||this.newKeys.add(t),null===r||this.now-r>=250||(this.hasReveals=!0,e.setAttribute("data-d-svg-reveal",""),e.style.setProperty("--d-svg-reveal-delay",`${-Math.max(0,this.now-r)}ms`))}visitChildren(e){return!tH.has(e)&&!t$.has(e)}finish(e){if(!this.hasReveals||"active"!==this.mode)return;let t=e.ownerDocument.createElementNS(e.namespaceURI,"style");t.textContent=`
@keyframes d-svg-enter { from { opacity: 0; } }
:where([data-d-svg-reveal]) {
  animation: d-svg-enter 250ms ease-out var(--d-svg-reveal-delay) backwards;
}`,e.prepend(t)}commit(e){for(let t of this.newKeys)this.starts.set(t,e);return this.starts}}let tV=/^translate\(\s*([+-]?(?:\d+\.?\d*|\.\d+)(?:e[+-]?\d+)?)\s*(?:[,\s]\s*([+-]?(?:\d+\.?\d*|\.\d+)(?:e[+-]?\d+)?))?\s*\)$/i;class tq{previous;active;positions=new Map;hasChanges=!1;constructor(e,t){this.previous=e,this.active=t}finish(e){let t=e.querySelectorAll("g[id][transform]"),n=new Set,r=new Set;for(let e of t)n.has(e.id)&&r.add(e.id),n.add(e.id);for(let n of t){if(r.has(n.id))continue;let t=tV.exec(n.getAttribute("transform")??"");if(!t||n.querySelector("animateTransform"))continue;let i=Number(t[1]),a=Number(t[2]??0);if(!Number.isFinite(i)||!Number.isFinite(a))continue;let o=`${i} ${a}`;this.positions.set(n.id,o);let l=this.previous.get(n.id);if(null==l||l===o||(this.hasChanges=!0,!this.active))continue;let s=e.ownerDocument.createElementNS(e.namespaceURI,"animateTransform");s.setAttribute("attributeName","transform"),s.setAttribute("type","translate"),s.setAttribute("from",l),s.setAttribute("to",o),s.setAttribute("dur","0.22s"),s.setAttribute("calcMode","spline"),s.setAttribute("keyTimes","0;1"),s.setAttribute("keySplines","0.42 0 0.58 1"),s.setAttribute("fill","freeze"),n.append(s)}}}function tB({svg:e}){let t=(0,s.useContext)(a.gA),n=(0,s.useContext)(a.yZ),r=(0,s.useRef)(new Map),o=(0,s.useSyncExternalStore)(tY,tX,()=>!0),[l]=(0,s.useState)(t),d=(0,s.useRef)(new Map),c=(0,s.useRef)(null),u=(0,s.useRef)(null),m=(0,s.useRef)(!0),h=(0,s.useRef)(null),p=(0,s.useRef)(null),[f,g]=(0,s.useState)(()=>t_(e));(0,s.useEffect)(()=>(m.current=!0,()=>{m.current=!1,p.current=null,h.current=null}),[]);let v=(0,s.useCallback)(function e(){if(!m.current||h.current||!p.current)return;let{svg:t,animateNewElements:i}=p.current;p.current=null;let a=null===c.current?0:(performance.now()-c.current)/1e3,o=u.current?getComputedStyle(u.current):void 0,l=new tW(d.current,i,performance.now(),tX()?"disabled":"preload"),s=n?new tq(r.current,!1):void 0,f=tU(tF(t,a,o,l,s)),v=new Image;h.current=v,v.decoding="async",v.src=f,("function"==typeof v.decode?v.decode():Promise.resolve()).then(()=>{if(!m.current||h.current!==v)return;h.current=null;let n=performance.now(),a=f;(l.hasReveals||s?.hasChanges&&!tX())&&(l=new tW(d.current,i,n,tX()?"disabled":"active"),a=tU(tF(t,null===c.current?0:(n-c.current)/1e3,o,l,s?new tq(r.current,!tX()):void 0))),s?r.current=s.positions:r.current.clear(),c.current??=n,d.current=l.commit(n),g(t_(t,a)),e()},()=>{h.current===v&&(h.current=null,e())})},[n]);(0,s.useEffect)(()=>{p.current={svg:e,animateNewElements:!o&&(t||p.current?.animateNewElements===!0||l&&null===c.current)},v()},[t,v,o,e,l]);let y=e.props,{source:x,aspectRatio:b,width:w,height:k,alt:C}=f,j=null==w||"auto"===w,E=null==k||"auto"===k;return(0,i.jsx)("img",{ref:u,alt:C,"data-d-component":"svg",decoding:"async",src:x,style:{aspectRatio:b?`auto ${b}`:void 0,color:y.style?.color,height:k,width:b&&j&&E?"100%":w}})}function t_(e,t){let{viewBox:n,width:r,height:i}=e.props;return{source:t,width:r,height:i,aspectRatio:function(e){if("string"!=typeof e)return;let t=e.replace(/^[\t\n\r ]+|[\t\n\r ]+$/g,"").split(/[\t\n\r ]*,[\t\n\r ]*|[\t\n\r ]+/);if(4!==t.length||!t.every(e=>tK.test(e)))return;let n=t.map(Number),[,,r,i]=n;if(n.every(Number.isFinite)&&!(r<=0)&&!(i<=0))return`${r} / ${i}`}(n),alt:function(e){let t=e.props;if(!0===t["aria-hidden"]||"true"===t["aria-hidden"]||"presentation"===t.role||"none"===t.role)return"";if("string"==typeof t["aria-label"])return t["aria-label"];let n="";return tz(t.children,e=>{!n&&(tP(e)&&"title"===e.type?n=tO(e.children):(0,s.isValidElement)(e)&&"title"===e.type&&(n=tO(e.props.children)))}),n}(e)}}let tK=/^[+-]?(?:\d+(?:\.\d*)?|\.\d+)(?:[eE][+-]?\d+)?$/;function tU(e){return`data:image/svg+xml;charset=utf-8,${encodeURIComponent(e)}`}let tG="(prefers-reduced-motion: reduce), (forced-colors: active)";function tY(e){let t=window.matchMedia?.(tG);return t?.addEventListener("change",e),()=>t?.removeEventListener("change",e)}function tX(){return window.matchMedia?.(tG).matches===!0}function tZ({children:e,color:t="prose",fill:n="currentColor",height:r,preserveAspectRatio:o,size:l,stroke:d,strokeLinecap:c,strokeLinejoin:u,strokeWidth:h,viewBox:p,width:f}){let g=(0,s.useContext)(a.EM),v=(0,m.Nx)((0,m.X0)(g,t));return(0,i.jsx)(tB,{svg:(0,i.jsx)("svg",{"data-d-component":"svg",fill:n,height:r??l,preserveAspectRatio:o,stroke:d,strokeLinecap:c,strokeLinejoin:u,strokeWidth:h,style:{color:v},viewBox:p,width:f??l,xmlns:"http://www.w3.org/2000/svg",children:e})})}tZ.childHandling="opaque";var tJ=n("WTLH");let tQ=(0,s.createContext)(!1),t0=/\S{25,}/u;function t1({children:e,header:t=!1,rowDivider:n}){let r=(0,s.useContext)(a.EM);return(0,i.jsx)(t?"thead":"tbody",{"data-d-component":"table-section","data-d-row-divider":null==n?void 0:"",style:null==n?void 0:(0,Y.mW)({"table-section-row-divider":(0,m.dQ)(r,n).border}),children:e})}function t2({align:e,children:t,colSpan:n,header:r=!1,padding:a,rowSpan:o,vAlign:l="start",width:d}){let c=(0,s.useContext)(tQ),u=r||c,h=!u&&t3(t);return(0,i.jsx)(u?"th":"td",{"data-d-align":e,"data-d-break-long-token":h?"":void 0,"data-d-component":"table-cell","data-d-has-width":null!=d?"":void 0,"data-d-valign":l,colSpan:n,rowSpan:o,scope:u?"col":void 0,style:{...(0,m.NY)(a),width:d},children:t})}function t3(e){for(let t of s.Children.toArray(e))if(("string"==typeof t||"number"==typeof t)&&t0.test(String(t))||(0,s.isValidElement)(t)&&t3(t.props.children))return!0;return!1}function t5(e){return(0,a.Mm)(e)?.type===t1}var t4=n("kBis"),t6=n("vZCo"),t8=n("YWbN");let t9="https://www.youtube.com/iframe_api";function t7(e){return"object"==typeof e&&null!==e&&"Player"in e&&"function"==typeof e.Player}function ne({hoverToPlay:e,onHover:t,onPlayerError:n,onThumbnailError:a,scriptNonce:o,showDurationBadge:l,showThumbnail:d,title:c,videoId:u}){let[m,p]=(0,s.useState)(()=>"u">typeof window&&(!window.matchMedia("(hover: hover) and (pointer: fine)").matches||"MacIntel"===navigator.platform&&navigator.maxTouchPoints>1));(0,s.useEffect)(()=>{let e=window.matchMedia("(hover: hover) and (pointer: fine)"),t=()=>{p(!e.matches||"MacIntel"===navigator.platform&&navigator.maxTouchPoints>1)};return t(),e.addEventListener("change",t),()=>e.removeEventListener("change",t)},[]);let f=e&&!m,g=d||e,v=(0,s.useRef)(null),y=(0,s.useRef)(null),x=(0,s.useRef)(!1),[b,w]=(0,s.useState)(!1),[k,C]=(0,s.useState)(!0),[j,E]=(0,s.useState)(null),[N,A]=(0,s.useState)("maxresdefault"),[I,S]=(0,s.useState)(!1),R=(0,ty.K)(e=>n?.(e)),M=(0,ty.K)(e=>{e.title=c,g&&(e.tabIndex=-1),e.referrerPolicy="strict-origin-when-cross-origin"}),L=(0,ty.K)(()=>{x.current=!1,y.current?.pauseVideo(),w(!1)});(0,s.useEffect)(()=>{let e,t,n,i,a=v.current;if(!a)return;w(!1);let s=!1,d=!1,c=!1,m=()=>{window.clearInterval(t),window.clearTimeout(n)},h=e=>{if(!l)return!0;let t=e.getDuration();return!!Number.isFinite(t)&&!(t<=0)&&(E(Math.round(t)),m(),!0)},p=document.createElement("iframe"),g=new URLSearchParams({autoplay:"0",controls:f?"0":"1",enablejsapi:"1",playsinline:"1",origin:window.location.origin});f&&g.set("mute","1"),p.src=`https://www.youtube.com/embed/${u}?${g}`,p.allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share",p.allowFullscreen=!0,M(p),a.appendChild(p),(t7((i=window).YT)?Promise.resolve(i.YT):r||(r=new Promise((e,t)=>{let n=document.querySelector(`script[src="${t9}"]`),r=n??document.createElement("script"),a=i.onYouTubeIframeAPIReady,l=()=>{window.clearTimeout(c),r.removeEventListener("error",s),i.onYouTubeIframeAPIReady===d&&(i.onYouTubeIframeAPIReady=a)},s=()=>{l(),n||r.remove(),t(Error("YouTube IFrame Player API could not load"))},d=()=>{try{a?.()}finally{t7(i.YT)&&(l(),e(i.YT))}},c=window.setTimeout(s,15e3);i.onYouTubeIframeAPIReady=d,r.addEventListener("error",s,{once:!0}),n||(r.src=t9,r.async=!0,o&&(r.nonce=o),document.head.appendChild(r))}).catch(e=>{throw r=void 0,e}))).then(r=>{s||(l&&(n=window.setTimeout(()=>{c=!0,m(),C(!1)},1e4)),M((e=new r.Player(p,{videoId:u,width:"100%",height:"100%",playerVars:{autoplay:0,controls:+!f,playsinline:1,origin:window.location.origin},events:{onReady:({target:e})=>{s||d||y.current||(y.current=e,f&&e.mute(),h(e)||c||(t=window.setInterval(()=>{h(e)},250)),f&&x.current&&e.playVideo())},onStateChange:({target:e,data:t})=>{s||d||(h(e),f&&(1!==t||x.current||e.pauseVideo(),w(1===t&&x.current)))},onError:({data:e})=>{s||d||(d=!0,m(),C(!1),f&&L(),R(e))},onAutoplayBlocked:()=>{!s&&f&&L()}}})).getIframe()))}).catch(()=>{s||(m(),C(!1))});let b=()=>{"hidden"===document.visibilityState&&L()};return f&&(document.addEventListener("visibilitychange",b),window.addEventListener("blur",L)),()=>{s=!0,m(),document.removeEventListener("visibilitychange",b),window.removeEventListener("blur",L),x.current=!1,y.current=null,e?.destroy(),a.replaceChildren()}},[f,L,M,R,o,l,u]),(0,s.useEffect)(()=>{let e=v.current?.querySelector("iframe");e&&(e.title=c)},[c]);let T=e=>{let t=e.currentTarget;if("error"===e.type||120===t.naturalWidth&&90===t.naturalHeight){if("maxresdefault"===N)return void A("hqdefault");A(null),a?.()}S(!0)},F=null===j?null:`${Math.floor(j/60)}:${String(j%60).padStart(2,"0")}`;return(0,i.jsxs)("div",{className:"EnhancedYouTubeEmbed-yJZhII","aria-label":g?c:void 0,role:g?"img":void 0,"data-d-click-through":g?"":void 0,"data-d-compact":m?"":void 0,onClickCapture:f?L:void 0,onPointerEnter:f||t?e=>{"touch"===e.pointerType||(t?.(),f&&(x.current=!0,y.current?.mute(),y.current?.playVideo()))}:void 0,onPointerLeave:f?L:void 0,children:[(0,i.jsx)("div",{"aria-hidden":g||void 0,className:"Player-FGyoMQ",ref:v}),d&&(0,i.jsxs)("div",{"aria-hidden":!0,className:"Preview-CGGqG8",hidden:b,children:[N&&(0,i.jsx)("img",{alt:"",className:"Thumbnail-SmBGDH",draggable:!1,onError:T,onLoad:T,referrerPolicy:"no-referrer",src:`https://img.youtube.com/vi/${u}/${N}.jpg`}),!m&&!I&&(0,i.jsx)("div",{className:"Loading-EwiAvK",children:(0,i.jsx)(ej,{width:"100%",height:"100%",duration:1e3})})]}),l&&(0,i.jsx)("div",{"aria-hidden":!0,className:"ProviderBadge-uaAC63",hidden:b,children:(0,i.jsxs)(h,{color:"secondary",variant:"solid",size:m?"sm":"lg",children:[(0,i.jsx)(t8.default,{className:"ProviderIcon-ck53xJ"}),(0,i.jsx)("span",{className:"Duration-AAbEFe",children:F?(0,i.jsx)("span",{children:F}):k?(0,i.jsx)("span",{className:"DurationLoading-Es3Yie"}):null})]})})]})}var nt=n("vCpP");let nn={...{animate:function(e){let{children:t}=e;return(0,i.jsx)(o.e,{...d(e),children:t})},"animate-group":function(e){let{children:t}=e;return(0,i.jsx)(l.N,{...d(e),children:t})},"animate-item":function({children:e}){return(0,i.jsx)(a.GP,{children:e})},badge:h,bento:function({children:e,overflow:t="hidden"}){let n=function e(t){return s.Children.toArray(s.Children.map(t,t=>(0,s.isValidElement)(t)&&t.type===s.Fragment?e(t.props.children):t))}(e),r="scroll"===t,{ref:a,bleed:o}=function(e){let t=(0,s.useRef)(null),[n,r]=(0,s.useState)(null);return(0,s.useLayoutEffect)(()=>{let n=t.current;if(!e||!n)return;let i=n.closest('[data-d-direction="col"]:not([data-d-component])');if(!i)return;let a=[];for(let e=n.parentElement;e&&(a.push(e),e!==i);e=e.parentElement);let o=()=>{let e=n.getBoundingClientRect();if(!e.width||!n.offsetWidth)return;let t=e.width/n.offsetWidth,o=n;for(let e of a){let n=getComputedStyle(e);if("contents"===n.display)continue;let a=e.clientWidth-parseFloat(n.paddingLeft)-parseFloat(n.paddingRight);if(Math.abs(o.getBoundingClientRect().width/t-a)>1||e!==i&&"visible"!==n.overflowX)return void r(null);o=e}let l=i.getBoundingClientRect(),s=Math.max(0,(e.left-l.left)/t),d=Math.max(0,(l.right-e.right)/t);r(e=>e?.left===s&&e.right===d?e:{left:s,right:d})};o();let l="u"<typeof ResizeObserver?null:new ResizeObserver(o);return l?.observe(n),a.forEach(e=>l?.observe(e)),()=>l?.disconnect()},[e]),{ref:t,bleed:e?n:null}}(r&&n.length>0);if(!n.length)return null;let l=r?n:n.slice(0,3),d=n.length-l.length;return(0,i.jsxs)("div",{ref:a,className:"Bento-SMr1Fv","data-d-component":"bento","data-d-full-width":null!==o||void 0,style:o?{"--bento-bleed-left":`${o.left}px`,"--bento-bleed-right":`${o.right}px`}:void 0,children:[(0,i.jsx)("div",{className:"Items-mrC_Bs","data-d-overflow":t,"data-d-count":l.length,role:"region","aria-label":"Bento",tabIndex:r&&n.length>3?0:void 0,children:l.map((e,t)=>(0,i.jsx)("div",{className:"Tile-SnqTaU",children:e},(0,s.isValidElement)(e)?e.key??t:t))}),d>0&&(0,i.jsxs)("span",{className:"Count-uytyty",children:[(0,i.jsx)(p.default,{"aria-hidden":!0,width:16,height:16}),`+${d}`]})]})},blockquote:function({children:e}){return(0,i.jsx)("blockquote",{className:f.A.Blockquote,"data-d-component":"blockquote",children:(0,g.M)(e)})},bold:ed.yN,box:v.a,button:E,card:A.Z,carousel:function({activeIndex:e,ariaLabel:t="Carousel",children:n,flush:r=!1,gap:a=2,onChange:o,previousLabel:l="Previous carousel items",nextLabel:d="Next carousel items",showArrows:c=!0,snap:u="proximity",snapAlign:h="start",visibleItems:p}){var f;let g=(0,s.useId)(),v=(0,s.useRef)(null),x=(0,s.useRef)(void 0),b=(0,s.useRef)(void 0),w=(0,s.useRef)(void 0),k=(0,s.useRef)(void 0),C=(0,s.useRef)(!1),j=(0,s.useRef)(!1),E="number"==typeof(f=e)&&Number.isInteger(f)?f:void 0;j.current=void 0!==E;let N=void 0!==e||void 0!==o,A=N?"start":h,M=function(e){if(null!=e&&Number.isFinite(e)&&!(e<1))return Math.floor(e)}(p),[O,P]=(0,s.useState)(),[$,U]=(0,s.useState)(0),[G,Y]=(0,s.useState)("ltr"),[X,Z]=(0,s.useState)({previous:!1,next:!1}),J=(0,s.useCallback)(()=>{let e=v.current;if(null==e)return;let{textDirection:t,carouselRect:n,alignedInlineStart:r,items:i}=q(e),a=i.at(0),o=i.at(-1);if(Y(t),null==a||null==o)return void Z({previous:!1,next:!1});let l=W(a.getBoundingClientRect(),n,t),s=o.getBoundingClientRect();Z({previous:l<r-1,next:W(s,n,t)+s.width>e.clientWidth+1})},[]),Q=(0,s.useCallback)(()=>{let e=v.current;null!=e&&P(function(e,t){if(null==t)return;let n=getComputedStyle(e),r=e.clientWidth-V(n.paddingInlineStart)-V(n.paddingInlineEnd),i=V(n.columnGap),a=Number(n.getPropertyValue("--carousel-continuation-cue-ratio")),o=H(e).length>t&&a>0;return Math.max(0,Math.round(1e3*((r-i*(o?t:t-1)-(o?r*a:0))/t))/1e3)}(e,M))},[M]),ee=(0,s.useCallback)(()=>{let e=v.current;if(!N||null==e||void 0!==b.current)return;let{currentOffset:t,itemOffsets:n}=B(e);b.current=_(n,t)},[N]),et=(0,s.useCallback)(()=>{let e=v.current;if(null==e)return;let{currentOffset:t,itemOffsets:n}=B(e),r=_(n,t);if(void 0===r)return;let i=w.current;w.current=void 0,void 0!==i&&1>=Math.abs(t-i)||r!==b.current&&(b.current=r,r!==E&&o?.(r))},[E,o]),en=(0,s.useCallback)(()=>{void 0!==x.current&&window.clearTimeout(x.current),x.current=window.setTimeout(()=>{x.current=void 0,et()},120)},[et]);(0,s.useEffect)(()=>{let e=v.current;if(null==e)return;let t=()=>{Q(),J(),ee(),j.current&&U(e=>e+1)},n="u"<typeof ResizeObserver?null:new ResizeObserver(t),r=()=>{H(e).forEach(e=>n?.observe(e))};t(),e.addEventListener("scroll",J,{passive:!0}),n?.observe(e),r();let i="u"<typeof MutationObserver?null:new MutationObserver(()=>{r(),t()});return i?.observe(e,{childList:!0}),()=>{e.removeEventListener("scroll",J),i?.disconnect(),n?.disconnect()}},[r,a,ee,Q,J]),(0,s.useEffect)(()=>()=>{void 0!==x.current&&(window.clearTimeout(x.current),x.current=void 0)},[]),(0,s.useEffect)(()=>{Q(),J()},[n,Q,J]),(0,s.useEffect)(()=>{J()},[O,J]);let er=(0,s.useCallback)(e=>{let t=v.current;if(null==t||void 0===E)return;let{currentOffset:n,itemOffsets:r,items:i,maxScrollOffset:a}=B(t),o=r[E],l=i[E];if(void 0===o||null==l){w.current=void 0;return}let s=Math.min(o,a);if(b.current=E,1>=Math.abs(n-s)){let e=w.current;void 0!==e&&Math.abs(e-s)>1&&(w.current=void 0);return}w.current=s,l.scrollIntoView({behavior:e&&!K()?"smooth":"instant",block:"nearest",inline:"start"})},[E]);(0,s.useEffect)(()=>{let e=C.current&&k.current!==E;k.current=E,C.current=!0,er(e)},[E,$,er]),(0,s.useEffect)(()=>{void 0!==O&&er(!1)},[O,er]),(0,s.useEffect)(()=>{let e=v.current,t=e?.closest("[dir]");if(null==t||"u"<typeof MutationObserver)return;let n=new MutationObserver(J);return n.observe(t,{attributes:!0,attributeFilter:["dir"]}),()=>n.disconnect()},[J]);let ei=e=>{let t=v.current;if(null==t)return;let{textDirection:n,carouselRect:r,alignedInlineStart:i,items:a}=q(t),o=("previous"===e?a.slice().reverse():a).find(t=>{let a=W(t.getBoundingClientRect(),r,n);return"previous"===e?a<i-1:a>i+1});o?.scrollIntoView({behavior:K()?"auto":"smooth",block:"nearest",inline:"start"})},ea=X.previous||X.next,eo=(0,R.A)(L,"rtl"===G?F:T),el=(0,R.A)(L,"rtl"===G?T:F),es="rtl"===G?(0,i.jsx)(S.default,{height:16,width:16}):(0,i.jsx)(I.default,{height:16,width:16}),ed="rtl"===G?(0,i.jsx)(I.default,{height:16,width:16}):(0,i.jsx)(S.default,{height:16,width:16});return(0,i.jsxs)("div",{className:"Frame-YuKWAu",children:[(0,i.jsx)("div",{"aria-label":t,className:"Carousel-Ccokaj","data-d-component":"carousel","data-d-flush":r?"":void 0,"data-d-snap":u,id:g,onScroll:N?en:void 0,ref:v,role:"list",style:{gap:(0,m.OO)(a)},tabIndex:ea?0:void 0,children:(0,i.jsx)(D.Provider,{value:{itemWidth:O,snapAlign:A},children:n})}),(0,i.jsx)(z,{viewportRef:v}),c&&ea?(0,i.jsx)("div",{className:eo,children:(0,i.jsx)(y.$,{"aria-controls":g,"aria-disabled":!X.previous,"aria-label":l,color:"secondary",onClick:()=>{X.previous&&ei("previous")},tabIndex:X.previous?0:-1,pill:!0,size:"sm",uniform:!0,variant:"outline",children:es})}):null,c&&ea?(0,i.jsx)("div",{className:el,children:(0,i.jsx)(y.$,{"aria-controls":g,"aria-disabled":!X.next,"aria-label":d,color:"secondary",onClick:()=>{X.next&&ei("next")},tabIndex:X.next?0:-1,pill:!0,size:"sm",uniform:!0,variant:"outline",children:ed})}):null]})},"carousel-item":function({aspectRatio:e,background:t,border:n,children:r,gap:a,height:o,maxHeight:l,maxWidth:s,minHeight:d,minWidth:c,padding:u,radius:m,variant:h,width:p}){return(0,i.jsx)($,{aspectRatio:e,background:t,border:n,component:"carousel-item",gap:a,height:o,maxHeight:l,maxWidth:s,minHeight:d,minWidth:c,padding:u,radius:m,variant:h,width:p,children:r})},"carousel-media-item":function({aspectRatio:e,background:t,border:n,children:r,gap:o,height:l,maxHeight:d,maxWidth:c,media:u,minHeight:m,minWidth:h,padding:p,radius:f,size:g="sm",variant:v,width:y}){let{itemWidth:x}=(0,s.useContext)(D),b=y??(null==x&&null==h?"min-content":void 0),w=null!=x||null!=b||null!=h,k=(0,a.Mm)(u),C=null!=k&&null!=k.props.radius;return(0,i.jsxs)($,{aspectRatio:e,background:t,border:n,component:"carousel-media-item",gap:o,height:l,maxHeight:d,maxWidth:c,minHeight:m,minWidth:h,padding:p,radius:f,variant:v,width:b,children:[(0,i.jsx)(M.K,{align:"stretch",as:"div",className:"MediaFrame-oaVCCW",clip:!0,direction:"row",height:P[g],radius:C?void 0:"xl",width:w?"100%":"fit-content",children:u}),(0,i.jsx)(M.K,{as:"div",gap:o??1,padding:{x:1},width:"100%",children:r})]})},caption:N.H,checkbox:function({checked:e,children:t,defaultChecked:n=!1,disabled:r,label:o,lineThrough:l=!1,name:d,onChange:c,required:u,shape:m="round",value:h="on"}){let p=(0,a.fI)(),[f,v]=(0,s.useState)(n),y=null!=e,x=y?e:f,b=t??o;return(0,i.jsx)(U.S,{checked:x,className:"round"===m?"Round-hHfb6x":void 0,"data-d-component":"checkbox",disabled:r,label:null==b?void 0:(0,i.jsx)("span",{children:(0,g.M)(b)}),labelClassName:(0,R.A)("round"===m&&"RoundLabel-zdjApa",x&&l&&"CheckedLabel-aYji5o"),name:d,onCheckedChange:e=>{y||v(e),p({...j.b.checkbox,value:e?"checked":"unchecked"},(0,a.S0)(c,e))},required:u,value:h})},"chip-input":G.l,code:function({children:e=""}){let t=(0,s.useContext)(a.q$);return(0,i.jsx)("code",{className:ea.A.Code,"data-d-component":"code",children:(0,i.jsx)(a.q$.Provider,{value:{...t,bold:!1},children:(0,g.M)(e,{reveal:"string"==typeof e||"number"==typeof e})})})},col:eo.f,"date-picker":el.l,divider:es.c,favicon:Q,flow:em.nl,"flow-item":em.Op,form:function({onSubmit:e,...t}){return(0,i.jsx)(M.K,{as:"form",component:"form",hostProps:{onSubmit(t){t.preventDefault(),t.stopPropagation(),e?.()}},layout:t})},grid:eh.xA,"grid-item":eh.Ei,"html-view":function({height:e=360,html:t,messenger:n,title:r="DIL HTML view",width:a="100%",...o}){let l=(0,s.useRef)(null),d=(0,s.useRef)(null),c=(0,s.useRef)(null);null===c.current&&(c.current=ev());let u=n?.channelId??"html-view",m=c.current,[h,p]=(0,s.useState)(void 0),[f,g]=(0,s.useState)(void 0),v=function({channelId:e,html:t,token:n}){let r;return`<!doctype html>
<html>
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <meta http-equiv="Content-Security-Policy" content="${"default-src 'none'; base-uri 'none'; object-src 'none'; form-action 'none'; frame-src 'none'; script-src 'unsafe-inline' https://cdn.jsdelivr.net https://unpkg.com https://esm.sh https://cdn.skypack.dev https://cdnjs.cloudflare.com https://cdn.tailwindcss.com; style-src 'unsafe-inline' https://cdn.jsdelivr.net https://unpkg.com https://cdnjs.cloudflare.com https://fonts.googleapis.com; img-src data: blob: https:; font-src data: https://fonts.gstatic.com https://cdn.jsdelivr.net https://cdnjs.cloudflare.com; connect-src https://cdn.jsdelivr.net https://unpkg.com https://esm.sh https://cdn.skypack.dev https://cdnjs.cloudflare.com; media-src data: blob: https:; worker-src blob:".replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/</g,"&lt;")}" />
    <script>
      ${r=JSON.stringify({channelId:e,token:n}).replace(/</g,"\\u003c"),String.raw`
(() => {
  const PROTOCOL = "dil-html-view";
  const { channelId, token } = ${r};
  let messenger = null;
  const pendingRequests = Object.create(null);
  const queuedCommands = [];
  const queuedEvents = [];

  const randomId = () =>
    globalThis.crypto?.randomUUID?.() ?? Math.random().toString(36).slice(2);

  const post = (message) => {
    globalThis.parent.postMessage(
      {
        __dilHtmlView: PROTOCOL,
        channelId,
        token,
        ...message,
      },
      "*",
    );
  };

  const isMessageForThisView = (event) => {
    const { data } = event;
    return Boolean(
      data &&
        data.__dilHtmlView === PROTOCOL &&
        data.channelId === channelId &&
        data.token === token,
    );
  };

  const requestCommand = (type, data) => {
    const id = randomId();

    return new Promise((resolve, reject) => {
      pendingRequests[id] = {
        reject,
        resolve,
      };

      post({
        data,
        id,
        kind: "command",
        type,
      });
    });
  };

  const respondToCommand = (id, result, error) => {
    post({
      error,
      id,
      kind: "response",
      result,
    });
  };

  const runCommand = (message) => {
    if (!messenger) {
      queuedCommands.push(message);
      return;
    }

    const handler = messenger._commands[message.type];
    if (typeof handler !== "function") {
      respondToCommand(message.id, undefined, {
        message: 'Unknown DILMessenger command "' + message.type + '"',
      });
      return;
    }

    Promise.resolve()
      .then(() => handler(message.data))
      .then(
        (result) => {
          respondToCommand(message.id, result, undefined);
        },
        (error) => {
          respondToCommand(message.id, undefined, {
            message: error && error.message ? String(error.message) : String(error),
          });
        },
      );
  };

  const emitEvent = (message) => {
    if (!messenger) {
      queuedEvents.push(message);
      return;
    }

    const handlers = messenger._eventHandlers[message.type] ?? [];
    handlers.slice().forEach((handler) => handler(message.data));
  };

  const handleResponse = (message) => {
    const pending = pendingRequests[message.id];
    if (!pending) {
      return;
    }

    delete pendingRequests[message.id];

    if (message.error) {
      pending.reject(new Error(message.error.message || "DIL command failed"));
      return;
    }

    pending.resolve(message.result);
  };

  const handleMessage = (event) => {
    if (!isMessageForThisView(event)) {
      return;
    }

    const { data: message } = event;
    switch (message.kind) {
      case "command":
        runCommand(message);
        return;
      case "event":
        emitEvent(message);
        return;
      case "response":
        handleResponse(message);
        return;
      default:
        return;
    }
  };

  const createCommandsProxy = () =>
    new Proxy(Object.create(null), {
      get(_target, property) {
        if (typeof property !== "string" || property === "then") {
          return undefined;
        }

        return (data) => requestCommand(property, data);
      },
    });

  class DILMessenger {
    constructor(options) {
      this._commands = options?.commands ?? {};
      this._eventHandlers = Object.create(null);
      this.commands = createCommandsProxy();
      messenger = this;

      while (queuedCommands.length > 0) {
        runCommand(queuedCommands.shift());
      }

      Promise.resolve().then(() => {
        while (queuedEvents.length > 0) {
          emitEvent(queuedEvents.shift());
        }
      });
    }

    emit(type, data) {
      post({
        data,
        kind: "event",
        type,
      });
    }

    on(type, handler) {
      const handlers = this._eventHandlers[type] ?? [];
      handlers.push(handler);
      this._eventHandlers[type] = handlers;

      return () => {
        const index = handlers.indexOf(handler);
        if (index !== -1) {
          handlers.splice(index, 1);
        }
      };
    }
  }

  globalThis.addEventListener("message", handleMessage);
  globalThis.DILMessenger = DILMessenger;
  post({ kind: "bridge-ready" });
})();
`}
    <\/script>
  </head>
  <body>
${t}
  </body>
</html>`}({channelId:u,html:t,token:m});return(0,s.useLayoutEffect)(()=>{let e=l.current;if(!e)return;let t={channelId:u,iframe:e,messenger:n,srcDoc:v,token:m},r=d.current;return r?.matches(t)?r.updateOptions(t):d.current=r=new eg(t),r.listen(),p(e=>e===v?e:v),r.teardown},[u,n,v,m]),(0,i.jsx)(M.K,{as:"div",className:ep,component:"html-view",height:e,layout:o,width:a,children:(0,i.jsx)("iframe",{ref:l,className:ef,"data-loaded":h&&f===h?"":void 0,onLoad:()=>g(h),sandbox:"allow-scripts",srcDoc:h,title:r})})},icon:ey.I,image:eR,input:eL.p,label:eT.J,link:function({children:e,href:t,onClick:n,onVisible:r,onVisibleWhen:o,onVisibleKey:l,title:d,anchorComponent:c}){let u=c??"a",m=(0,a.fI)(),h=function(e){let t=e.trim();if(!t)return null;if(!/^[a-z][a-z\d+.-]*:/i.test(t)){if(t.startsWith("//")||!t.includes("."))return null;t=`https://${t}`}try{let e=new URL(t);if("http:"!==e.protocol&&"https:"!==e.protocol)return null}catch{return null}return t}(t),p=(0,eF.c)({onVisible:r,onVisibleKey:l,onVisibleWhen:!1!==o&&null!==h},u);if(!h)return(0,i.jsx)(a.GP,{children:e});let f=s.Children.toArray(e),v=f.some(e=>"string"!=typeof e||e.trim())?f:[d?.trim()||new URL(h).hostname],y=v.pop(),x=0===v.length&&"string"==typeof y&&!/\s/u.test(y.trim());if("string"==typeof y){let e=y.trimEnd();v.push(e),y=y.slice(e.length)}return(0,i.jsx)(u,{ref:p,className:x?eO.A.NoWrap:void 0,"data-d-component":"link",href:h,onClick:n?e=>{e.defaultPrevented||0!==e.button||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||(e.preventDefault(),e.stopPropagation(),m(j.b.link,(0,a.S0)(n)))}:void 0,rel:"noopener noreferrer",target:"_blank",title:d,children:(0,i.jsxs)(ee.E,{color:"inherit",inline:!0,underline:"dotted",children:[v,(0,i.jsxs)("span",{className:eO.A.Tail,children:[(0,g.M)(y),(0,i.jsx)("span",{"aria-hidden":"true",children:(0,i.jsx)(ey.I,{inline:!0,name:"arrow-up-right-link"})})]})]})})},list:function({children:e,connector:t="none",gap:n,items:r,marker:o="bullet",maxMarkerSize:l,start:d}){var c;let u,h,p=eB(l,"md"),f="none"===t&&"md"===p&&eK(o)?o:null,g="number"===o?"ol":"ul",v="number"===o&&null!=d&&Number.isFinite(d)?d:void 0,y="md"!==p||e_(t,o??"none")?4:0,x=(0,m.OO)(n??y);return(0,i.jsx)(eD.Provider,{value:t,children:(0,i.jsx)(e$.Provider,{value:{inheritedMarker:o,nativeMarker:f},children:(0,i.jsx)(eW.Provider,{value:{maxMarkerSize:p,reserveMarkerLane:"md"!==p},children:(0,i.jsxs)(g,{className:ez.A.List,"data-d-component":"list","data-d-connector":"solid"===t?t:void 0,"data-d-marker":"string"==typeof o?o:"rich","data-d-marker-layout":null==f?"custom":"native",start:v,style:{"--d-list-row-gap":x.includes("(")?x:x.split(/\s+/)[0],counterReset:null==v?void 0:"d-list-item "+(v-1),gap:x},children:[(r??[]).map((e,t)=>(0,i.jsx)(eV,{disabled:"string"==typeof e?void 0:e.disabled,label:"string"==typeof e?e:e.label,description:"string"==typeof e?void 0:e.description,children:"string"==typeof e?e:e.children},t)),(c=e,u=[],(h=e=>{s.Children.forEach(e,e=>{(0,s.isValidElement)(e)&&e.type===s.Fragment?h(e.props.children):u.push(e)})})(c),u.map((e,t)=>(0,s.isValidElement)(e)&&null==e.key?(0,s.cloneElement)(e,{key:t}):e)).map((e,t)=>{var n;return(n=e,(0,a.Mm)(n)?.type===eV)?e:(0,i.jsx)(eV,{children:e},t)})]})})})})},"list-item":eV,loading:function({label:e="Loading",size:t="md"}){return(0,i.jsx)("div",{"aria-label":e,className:"Loading-lQpe5a","data-d-component":"loading",role:"status",children:(0,i.jsx)(eU.I,{size:eG[t]})})},"loading-indicator":function({color:e="prose",size:t="md"}){let n=(0,s.useContext)(a.EM);return(0,i.jsx)(eY.Q,{className:(0,R.A)("LoadingIndicator-wKSQOE",{"text-xs":"xs"===t,"text-sm":"sm"===t,"text-base":"md"===t,"text-lg":"lg"===t,"text-xl":"xl"===t,"text-2xl":"2xl"===t,"text-3xl":"3xl"===t}),"data-d-component":"loading-indicator",name:"empty-circle",style:{color:(0,m.Nx)((0,m.X0)(n,e))}})},lottie:function({sourceUrlGate:e,src:t,...n}){let r=(0,s.useContext)(a.EM),o="string"!=typeof t&&!("layers"in t&&Array.isArray(t.layers))&&"light"in t&&"dark"in t?t[r]:t,l=(0,i.jsx)(e2,{advanceRate:n.advanceRate,alt:n.alt,animationEndTime:n.animationEndTime,animationStartTime:n.animationStartTime,aspectRatio:n.aspectRatio,assetUrlGate:n.assetUrlGate,currentTime:n.currentTime,fit:n.fit,height:n.height,loop:n.loop,maxHeight:n.maxHeight,maxWidth:n.maxWidth,minHeight:n.minHeight,minWidth:n.minWidth,radius:n.radius,source:o,width:n.width});return e&&"string"==typeof o&&!/^data:/i.test(o)?(0,i.jsx)(e,{url:o,children:l}):l},italic:ed.J2,markdown:function({children:e,streaming:t=!1}){return(0,i.jsx)("div",{"data-d-component":"markdown",children:(0,i.jsx)(e3.r,{animateHeight:!0,includeMath:!0,streaming:t,children:e??""})})},math:function({block:e=!1,value:t}){return(0,i.jsx)(e5.z,{block:e,className:"Math-c_BmHA","data-d-block":e?"":void 0,"data-d-component":"math",value:t})},popover:function({children:e,hoverOpenDelay:t,open:n,showOnHover:r}){return(0,i.jsx)(e4.A,{hoverOpenDelay:t,open:n,showOnHover:r,children:e})},"popover-content":e6,"popover-trigger":function({block:e=!1,children:t,onClick:n,role:r="button"}){let o=(0,a.fI)(),l=(0,s.useContext)(eE.w);return(0,i.jsx)(e4.A.Trigger,{children:(0,i.jsx)(e?"div":"span",{className:(0,R.A)("Trigger-y4ejT1",e&&"TriggerBlock-VOSjY9"),"data-d-component":"popover-trigger","data-d-inline":e?void 0:"","data-d-inline-text":!e&&l?"":void 0,onClick:e=>{e.stopPropagation(),o(j.b["popover-trigger"],(0,a.S0)(n))},onKeyDown:"presentation"===r?void 0:e=>{("Enter"===e.key||" "===e.key)&&(e.preventDefault(),e.stopPropagation(),e.currentTarget.click())},role:r,tabIndex:"presentation"===r?void 0:0,children:t})})},"pulse-indicator":function({color:e,duration:t,endScale:n,pulseColor:r,size:o=12,startOpacity:l}){let d=(0,s.useContext)(a.EM);return(0,i.jsx)("span",{className:"PulseIndicator-hg0Z4u","data-d-component":"pulse-indicator",style:(0,Y.mW)({"pulse-color":(0,m.Nx)((0,m.X0)(d,e)),"pulse-duration":t?`${t}ms`:void 0,"pulse-end-scale":n?String(n):void 0,"pulse-size":o,"pulse-start-opacity":null==l?void 0:String(l),"pulse-wave-color":(0,m.Nx)((0,m.X0)(d,r??e))})})},pressable:eS,reveal:function({children:e,targetId:t}){let n,r,a;return(0,i.jsxs)("div",{className:e9,"data-d-reveal-for":t,children:[e,(0,e8.L8)(t)&&!t.includes("\0")&&(0,i.jsx)("style",{children:(n=t.replace(/[^a-zA-Z0-9_-]/gu,e=>`\\${e.codePointAt(0).toString(16)} `),r=`[data-id~="${n}"]:not(template, :scope [data-dil-response] *)`,a=`.${e9}[data-d-reveal-for="${n}"]:not(:hover, :focus-within)`,`
    @media (hover: hover) and (pointer: fine) {
      @scope ([data-dil-response]) to ([data-dil-response]) {
        :scope:has(${r}):not(:has(${r}:is(:hover, :focus-within))) {
          ${a} {
            opacity: 0;
            pointer-events: none;
          }
          .${e7}:has(> ${a}) {
            pointer-events: none;
          }
        }
      }
    }
  `)})]})},radio:tt,"read-only-html-view":tg,"radio-group":function(e){var t;let{captureInteraction:n,runInteraction:r}=(0,a.P1)(),[o,l]=(0,s.useState)(null),[d,c]=(0,s.useState)("ltr");(0,s.useLayoutEffect)(()=>{let e=o?.parentElement;if(!e)return;let t=()=>{c("rtl"===getComputedStyle(e).direction?"rtl":"ltr")};t();let n=new MutationObserver(t);return n.observe(e.closest("[dir]")??e,{attributes:!0,attributeFilter:["dir"],characterData:!0,childList:!0,subtree:!0}),()=>n.disconnect()},[o]);let{children:u,defaultValue:m,disabled:h,direction:p="row",label:f,name:g,onChange:v,options:y,required:x,spacing:b,value:w}=e,k=m??("defaultValue"in e?void 0:y?.[0]?.value??""),C="vertical"===(t=p)||"col"===t?"col":"row";return(0,i.jsx)(te.z,{ref:l,"aria-label":f??g??"Options",asChild:!0,className:"RadioGroup-nex2Ya","data-d-component":"radio-group",defaultValue:null==w?k:void 0,disabled:h,dir:d,direction:C,name:g,onChange:e=>r({...j.b["radio-group"],value:e},(0,a.S0)(v,e)),onClickCapture:e=>{h||(0,a.Nn)(e)||n({...j.b["radio-group"],value:(0,a.Is)(e,y)??w??m})},required:x,spacing:b,value:w,children:(0,i.jsx)("div",{dir:void 0,onKeyDownCapture:tn,children:y?.map(e=>(0,i.jsx)(tt,{disabled:e.disabled,value:e.value,children:e.description?(0,i.jsxs)("span",{children:[(0,i.jsx)("span",{children:e.label}),(0,i.jsx)(N.H,{color:"secondary",size:"sm",children:e.description})]}):e.label},e.value))??u})})},row:tr.f,stack:function({block:e,children:t}){return(0,i.jsx)("div",{className:"Root-brnxnH","data-d-component":"stack","data-block":e||void 0,children:t})},"stack-item":function({children:e,placement:t="center-center",inset:n=0,decorative:r=!1}){let[a,o]=t.split("-");return(0,i.jsx)("div",{"aria-hidden":r||void 0,className:"Item-FkqXW9","data-d-component":"stack-item","data-horizontal":o,"data-vertical":a,inert:r||void 0,style:{inset:(0,m.OO)(Number.isFinite(Number(n))?Number(n):n)},children:(0,i.jsx)("div",{className:e7,children:e})})},"search-image":function({upgradeToFullRes:e=!1,sourceIdentity:t,sourcePending:n,...r}){return e?(0,i.jsx)(tk,{actionOverlay:r.actionOverlay,imageFrameComponent:r.imageFrameComponent,imageContentComponent:r.imageContentComponent,alt:r.alt,aspectRatio:r.aspectRatio,background:r.background,bitmapBlendMode:r.bitmapBlendMode,containOutsideAspectRatio:r.containOutsideAspectRatio,contentCropFit:r.contentCropFit,fallback:r.fallback,fit:r.fit,frame:r.frame,height:r.height,hideOnFailure:r.hideOnFailure,hoverZoom:r.hoverZoom,maxHeight:r.maxHeight,maxWidth:r.maxWidth,minHeight:r.minHeight,minWidth:r.minWidth,onLoad:r.onLoad,onError:r.onError,onImageLoad:r.onImageLoad,onImageError:r.onImageError,onImageFallback:r.onImageFallback,imageFrameRef:r.imageFrameRef,loadedOverlay:r.loadedOverlay,position:r.position,radius:r.radius,searchImage:r.searchImage,secondaryAction:r.secondaryAction,width:r.width,sourceIdentity:t,sourcePending:n,children:r.children}):(0,i.jsx)(tw,{actionOverlay:r.actionOverlay,imageFrameComponent:r.imageFrameComponent,imageContentComponent:r.imageContentComponent,alt:r.alt,aspectRatio:r.aspectRatio,background:r.background,bitmapBlendMode:r.bitmapBlendMode,containOutsideAspectRatio:r.containOutsideAspectRatio,contentCropFit:r.contentCropFit,fallback:r.fallback,fit:r.fit,frame:r.frame,height:r.height,hideOnFailure:r.hideOnFailure,hoverZoom:r.hoverZoom,maxHeight:r.maxHeight,maxWidth:r.maxWidth,minHeight:r.minHeight,minWidth:r.minWidth,onLoad:r.onLoad,onError:r.onError,onImageLoad:r.onImageLoad,onImageError:r.onImageError,onImageFallback:r.onImageFallback,imageFrameRef:r.imageFrameRef,loadedOverlay:r.loadedOverlay,position:r.position,radius:r.radius,searchImage:r.searchImage,sourceIdentity:t,sourcePending:n,secondaryAction:r.secondaryAction,width:r.width,children:r.children})},select:tA.l,"segmented-control":function({block:e,defaultValue:t,disabled:n,label:r,onChange:o,options:l,pill:d=!0,size:c="lg",value:u,variant:m="ghost"}){let{captureInteraction:h,runInteraction:p}=(0,a.P1)(),f=t??l[0]?.value??"",[g,v]=(0,s.useState)(f),y=null!=u,x=y?u:g;return(0,i.jsx)("div",{className:"SegmentedControl-QNgUzh","data-d-component":"segmented-control",onKeyDownCapture:e=>tn(e,!1),onClickCapture:e=>{n||(0,a.Nn)(e)||h({...j.b["segmented-control"],value:(0,a.Is)(e,l)??u??t})},children:(0,i.jsx)(tI.I,{"aria-label":r??"Options",block:e,disabled:n,onChange:e=>{y||v(e),p({...j.b["segmented-control"],value:e},(0,a.S0)(o,e))},pill:d,size:c,value:x,variant:m,children:l.map(e=>(0,i.jsx)(tI.I.Option,{"aria-label":e.label,disabled:e.disabled,value:e.value,children:e.label},e.value))})})},"shimmer-text":function({children:e,color:t,italic:n,lineThrough:r,maxLines:a,minLines:o,size:l="md",tabularNums:s,textAlign:d,truncate:c,weight:u,width:m}){return(0,i.jsx)(tS.z,{as:"span",className:"Shimmer-tjrk87",color:t,"data-d-component":"shimmer-text",fontStyle:n?"italic":void 0,maxLines:a,minLines:o,size:l,tabularNums:s,textAlign:d,textDecoration:r?"line-through":void 0,truncate:c,weight:u,width:m,children:e})},slider:tR.A,spacer:function({minSize:e}){return(0,i.jsx)("div",{className:"Spacer-wealNO","data-d-component":"spacer",style:(0,Y.mW)({"w-spacer-min-size":e})})},strikethrough:ed.Gk,svg:tZ,table:function({columnSizing:e="auto",columns:t=[],children:n,dividers:r=!0,emptyLabel:a="No rows",rows:o=[],stickyHeader:l=!1}){let d=s.Children.count(n)>0,c=(0,s.useRef)(null);return(0,i.jsxs)("div",{className:tJ.A.TableFrame,"data-d-column-sizing":e,"data-d-component":"table",children:[(0,i.jsx)("div",{className:tJ.A.TableViewport,"data-d-table-viewport":!0,ref:c,children:(0,i.jsx)("table",{className:tJ.A.Table,"data-d-column-sizing":e,"data-d-dividers":r?"":void 0,"data-d-sticky-header":l?"":void 0,style:{tableLayout:"equal"===e?"fixed":"auto"},children:d?function(e){let t=s.Children.toArray(e);if(t.some(t5)){let e=[],n=[],r=()=>{0!==n.length&&(e.push((0,i.jsx)("tbody",{children:n},`loose-rows-${e.length}`)),n=[])};return t.forEach(t=>{if(t5(t)){r(),e.push(t);return}n.push(t)}),r(),e}return(0,i.jsx)("tbody",{children:e})}(n):(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)("thead",{children:(0,i.jsx)("tr",{children:t.map(e=>(0,i.jsx)("th",{"data-d-align":e.align,"data-d-component":"table-cell","data-d-has-width":null!=e.width?"":void 0,scope:"col",style:{width:e.width},children:e.label},e.key))})}),(0,i.jsx)("tbody",{children:0===o.length?(0,i.jsx)("tr",{children:(0,i.jsx)("td",{className:tJ.A.EmptyCell,colSpan:t.length||1,children:a})}):o.map((e,n)=>(0,i.jsx)("tr",{children:t.map(t=>{var n;let r=null==(n=e[t.key])?"":"boolean"==typeof n?n?"Yes":"No":String(n);return(0,i.jsx)("td",{"data-d-align":t.align,"data-d-break-long-token":t3(r)?"":void 0,"data-d-component":"table-cell",children:r},t.key)})},n))})]})})}),(0,i.jsx)(z,{viewportRef:c})]})},"table-cell":t2,"table-row":function({children:e,header:t=!1,label:n,labelColSpan:r}){let o=(0,s.useContext)(tQ),l=(0,i.jsx)(tQ.Provider,{value:t||o,children:(0,i.jsx)("tr",{className:tJ.A.Row,"data-d-component":"table-row",children:e})});if(!n)return l;let d=r??function(e){let t=0;for(let n of s.Children.toArray(e)){let e=(0,a.Mm)(n);(0,s.isValidElement)(e)&&e.type===t2&&(t+=function(e){let t=Number(e??1);return Number.isFinite(t)&&t>0?t:1}(e.props.colSpan))}return Math.max(t,1)}(e);return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)("tr",{className:tJ.A.Row,"data-d-component":"table-row-label",children:(0,i.jsx)("td",{className:tJ.A.RowLabelCell,colSpan:d,children:(0,i.jsx)("div",{className:tJ.A.RowLabelContent,children:(0,i.jsx)("span",{className:tJ.A.RowLabelText,children:n})})})}),l]})},"table-section":t1,text:ee.E,textarea:t4.T,title:t6.h,tooltip:function({content:e,children:t}){return(0,i.jsx)(b.Provider,{value:e,children:(0,i.jsx)(a.GP,{children:t})})},transition:function(e){let{children:t}=e,n=(0,s.useMemo)(()=>"string"==typeof t||"number"==typeof t?(0,i.jsx)(s.Fragment,{children:t},"transition-child"):(0,s.isValidElement)(t)?null==t.key?(0,s.cloneElement)(t,{key:"transition-child"}):t:s.Children.toArray(t),[t]);return(0,i.jsx)(o.e,{...d(e),children:n})},underline:ed.z2},celebration:function({trigger:e,children:t}){return(0,i.jsxs)("div",{className:"Frame-DHyihX","data-d-component":"celebration",children:[t,null!=e&&(0,i.jsx)(ei,{},e)]})},"citation-pill":function({color:e,count:t,label:n,onHover:r,url:o}){let l=(0,s.useContext)(a.EM);return(0,i.jsxs)(et,{className:"Pill-vMH1qo",color:"secondary","data-d-component":"badge","data-d-hoverable":r?"":void 0,onMouseEnter:r?()=>r(!0):void 0,onMouseLeave:r?()=>r(!1):void 0,pill:!0,size:"sm",style:{background:(0,m.Gx)((0,m.X0)(l,e),l)},variant:"soft",children:[o?(0,i.jsx)("span",{className:"Favicon-gpdrW0",children:(0,i.jsx)(Q,{size:12,url:o})}):null,(0,i.jsx)("span",{className:"Label-f1ZlTd",children:(0,i.jsx)(ee.E,{color:"secondary",inline:!0,maxLines:1,size:"3xs",truncate:!0,children:n})}),t>1?(0,i.jsx)("span",{className:"Count-sWqf87",children:(0,i.jsxs)(ee.E,{color:"tertiary",inline:!0,size:"3xs",children:["+",t-1]})}):null]})},"flashcard-flip":function({children:e,faceBackground:t,...n}){let[r,i,...a]=s.Children.toArray(e);if(void 0===r||void 0===i)throw Error("DIL flashcard-flip requires question and answer children.");return(0,s.createElement)(ec.N,{...n,backFace:i,faceBackground:t??eu},[r,...a])},"loading-block":ej,youtube:function({aspectRatio:e="16 / 9",hoverToPlay:t=!1,maxWidth:n="100%",onHover:r,onPlayerError:o,onThumbnailError:l,scriptNonce:d,showDurationBadge:c=!1,showThumbnail:u=!1,title:m="YouTube video player",videoId:h,width:p="100%"}){let f=(0,s.useContext)(a.Ob),[g,v]=(0,s.useState)(null);return"string"==typeof h&&/^[A-Za-z0-9_-]{11}$/.test(h)?(0,i.jsx)("div",{className:"YouTubeEmbed-anNc3l","data-d-component":"youtube",style:{aspectRatio:e,maxWidth:n,width:p},children:f?(0,i.jsx)("div",{"aria-label":m,role:"img",style:{alignItems:"center",backgroundColor:"var(--color-surface-secondary)",color:"var(--color-text-secondary)",display:"flex",height:"100%",justifyContent:"center",width:"100%"},children:(0,i.jsx)("span",{"aria-hidden":"true",style:{fontSize:"2.5rem"},children:"\u25B6"})}):u||c||t||r||o?(0,i.jsx)(ne,{hoverToPlay:t,onHover:r,onPlayerError:o,onThumbnailError:l,scriptNonce:d,showDurationBadge:c,showThumbnail:u,title:m,videoId:h},`${h}:${u}:${c}:${t}`):(0,i.jsx)("iframe",{className:"Iframe-lhSyVM","data-loaded":g===h?"":void 0,onLoad:()=>v(h),allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share",allowFullScreen:!0,referrerPolicy:"strict-origin-when-cross-origin",src:`https://www.youtube.com/embed/${h}`,title:m})}):null}}}};
//# sourceMappingURL=15963.13aad3d96f.js.map