export const __rspack_esm_ids=[781597];export const __webpack_modules__={Poqp(e,t,a){function i(e,t){e.accDescr&&t.setAccDescription?.(e.accDescr),e.accTitle&&t.setAccTitle?.(e.accTitle),e.title&&t.setDiagramTitle?.(e.title)}(0,a("EGwS").K)(i,"populateCommonDb"),a.d(t,{},{S:i})},KNjr(e,t,a){var i=a("Poqp"),l=a("XYq3"),r=a("SLO1"),o=a("ojjf"),n=a("Ct61"),s=a("EGwS"),c=a("mPX9"),d=a("vdWB"),p=o.UI.pie,h={sections:new Map,showData:!1,config:p},g=h.sections,u=h.showData,f=structuredClone(p),m=(0,s.K)(()=>structuredClone(f),"getConfig"),x=(0,s.K)(()=>{g=new Map,u=h.showData,(0,o.IU)()},"clear"),S=(0,s.K)(({label:e,value:t})=>{if(t<0)throw Error(`"${e}" has invalid value: ${t}. Negative values are not allowed in pie charts. All slice values must be >= 0.`);g.has(e)||(g.set(e,t),n.R.debug(`added new section: ${e}, with value: ${t}`))},"addSection"),$=(0,s.K)(()=>g,"getSections"),w=(0,s.K)(e=>{u=e},"setShowData"),y=(0,s.K)(()=>u,"getShowData"),D={getConfig:m,clear:x,setDiagramTitle:o.ke,getDiagramTitle:o.ab,setAccTitle:o.SV,getAccTitle:o.iN,setAccDescription:o.EI,getAccDescription:o.m7,addSection:S,getSections:$,setShowData:w,getShowData:y},T=(0,s.K)((e,t)=>{(0,i.S)(e,t),t.setShowData(e.showData),e.sections.map(t.addSection)},"populateDb"),b={parse:(0,s.K)(async e=>{let t=await (0,c.qg)("pie",e);n.R.debug(t),T(t,D)},"parse")},v=(0,s.K)(e=>`
  .pieCircle{
    stroke: ${e.pieStrokeColor};
    stroke-width : ${e.pieStrokeWidth};
    opacity : ${e.pieOpacity};
  }
  .pieCircle.highlighted{
    scale: 1.05;
    opacity: 1;
  }
  .pieCircle.highlightedOnHover:hover{
    transition-duration: 250ms;
    scale: 1.05;
    opacity: 1;
  }
  .pieOuterCircle{
    stroke: ${e.pieOuterStrokeColor};
    stroke-width: ${e.pieOuterStrokeWidth};
    fill: none;
  }
  .pieTitleText {
    text-anchor: middle;
    font-size: ${e.pieTitleTextSize};
    fill: ${e.pieTitleTextColor};
    font-family: ${e.fontFamily};
  }
  .slice {
    font-family: ${e.fontFamily};
    fill: ${e.pieSectionTextColor};
    font-size:${e.pieSectionTextSize};
    // fill: white;
  }
  .legend text {
    fill: ${e.pieLegendTextColor};
    font-family: ${e.fontFamily};
    font-size: ${e.pieLegendTextSize};
  }
`,"getStyles"),C=(0,s.K)(e=>{let t=[...e.values()].reduce((e,t)=>e+t,0),a=[...e.entries()].map(([e,t])=>({label:e,value:t})).filter(e=>e.value/t*100>=1);return(0,d.rLf)().value(e=>e.value).sort(null)(a)},"createPieArcs"),k=(0,s.K)((e,t,a,i)=>{n.R.debug("rendering pie chart\n"+e);let s=i.db,c=(0,o.D7)(),p=(0,r.$t)(s.getConfig(),c.pie),h=(0,l.D)(t),g=h.append("g");g.attr("transform","translate(225,225)");let{themeVariables:u}=c,[f]=(0,r.I5)(u.pieOuterStrokeWidth);f??=2;let m=p.legendPosition,x=p.textPosition,S=p.donutHole>0&&p.donutHole<=.9?p.donutHole:0,$=(0,d.JLW)().innerRadius(185*S).outerRadius(185),w=(0,d.JLW)().innerRadius(185*x).outerRadius(185*x),y=g.append("g");y.append("circle").attr("cx",0).attr("cy",0).attr("r",185+f/2).attr("class","pieOuterCircle");let D=s.getSections(),T=C(D),b=[u.pie1,u.pie2,u.pie3,u.pie4,u.pie5,u.pie6,u.pie7,u.pie8,u.pie9,u.pie10,u.pie11,u.pie12],v=0;D.forEach(e=>{v+=e});let k=T.filter(e=>"0"!==(e.data.value/v*100).toFixed(0)),K=(0,d.UMr)(b).domain([...D.keys()]);y.selectAll("mySlices").data(k).enter().append("path").attr("d",$).attr("fill",e=>K(e.data.label)).attr("class",e=>{let t="pieCircle";return"hover"===p.highlightSlice?t+=" highlightedOnHover":p.highlightSlice===e.data.label&&(t+=" highlighted"),t}),y.selectAll("mySlices").data(k).enter().append("text").text(e=>(e.data.value/v*100).toFixed(0)+"%").attr("transform",e=>"translate("+w.centroid(e)+")").style("text-anchor","middle").attr("class","slice");let A=g.append("text").text(s.getDiagramTitle()).attr("x",0).attr("y",-200).attr("class","pieTitleText"),O=[...D.entries()].map(([e,t])=>({label:e,value:t})),R=g.selectAll(".legend").data(O).enter().append("g").attr("class","legend");R.append("rect").attr("width",18).attr("height",18).style("fill",e=>K(e.label)).style("stroke",e=>K(e.label)),R.append("text").attr("x",22).attr("y",14).text(e=>s.getShowData()?`${e.label} [${e.value}]`:e.label);let _=Math.max(...R.selectAll("text").nodes().map(e=>e?.getBoundingClientRect().width??0)),M=450,W=490,z=22*O.length;switch(m){case"center":R.attr("transform",(e,t)=>"translate("+(-_/2-22)+","+(22*t-22*O.length/2)+")");break;case"top":M+=z,R.attr("transform",(e,t)=>`translate(${-_/2-22}, ${22*t-185})`),y.attr("transform",()=>`translate(0, ${z+22})`);break;case"bottom":M+=z,R.attr("transform",(e,t)=>"translate("+(-_/2-22)+","+(22*t- -207)+")");break;case"left":W+=22+_,R.attr("transform",(e,t)=>"translate(-207,"+(22*t-22*O.length/2)+")"),y.attr("transform",()=>`translate(${_+18+4}, 0)`);break;default:W+=22+_,R.attr("transform",(e,t)=>"translate(216,"+(22*t-22*O.length/2)+")")}let L=A.node()?.getBoundingClientRect().width??0,P=Math.min(0,225-L/2),E=Math.max(W,225+L/2)-P;h.attr("viewBox",`${P} 0 ${E} ${M}`),(0,o.a$)(h,M,E,p.useMaxWidth)},"draw");a.d(t,{},{diagram:{parser:b,db:D,renderer:{draw:k},styles:v}})}};
//# sourceMappingURL=781597.855e75a870.js.map