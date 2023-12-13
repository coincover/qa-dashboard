"use strict";(self.webpackChunkqa_dashboard=self.webpackChunkqa_dashboard||[]).push([[47],{8411:function(t,e,r){r.d(e,{U:function(){return i},W:function(){return c}});var n=r(5662);const s="https://qa-dashboard-4gfp.onrender.com";async function i(t){try{return(await(0,n.Z)(`${s}/api/project_pull_requests/list?project=${t}`,{method:"GET"})).data}catch(e){return generateErrorReturn(e)}}async function c(t){try{return(await(0,n.Z)(`${s}/api/qualitygates/project_status?projectKey=${t}`,{method:"GET"})).data}catch(e){return generateErrorReturn(e)}}},1047:function(t,e,r){r.r(e),r.d(e,{default:function(){return w}});var n=r(9860),s=r(7313),i=r(9019),c=r(4315),o=r(6835),a=r(3467),l=r(7478),d=r(1629),u=r(3477),h=r(4076),x=r(1113),j=r(7829),Z=r(8119),f=r(501),m=r(1834),v=r(816),p=r(6417);var b=t=>{let{data:e}=t;function r(t){const e=t.split(" ");return 1===e.length?{children:`${t[0]}`}:{children:`${e[0][0]}${e[1][0]}`}}return(0,p.jsx)("div",{children:(0,p.jsx)(d.Z,{component:f.Z,children:(0,p.jsxs)(o.Z,{children:[(0,p.jsx)(u.Z,{children:(0,p.jsxs)(h.Z,{children:[(0,p.jsx)(l.Z,{children:"Pull Request"}),(0,p.jsx)(l.Z,{children:"Status"}),(0,p.jsx)(l.Z,{children:"Author"}),(0,p.jsx)(l.Z,{children:"Checked Date"}),(0,p.jsx)(l.Z,{children:"Commit"})]})}),(0,p.jsx)(a.Z,{children:null===e||void 0===e?void 0:e.map((t=>{var e,n,s,i;return(0,p.jsxs)(h.Z,{onClick:()=>{return e=t,void window.open(e.url,"_blank");var e},hover:!0,style:{cursor:"pointer"},children:[(0,p.jsx)(l.Z,{children:(0,p.jsxs)(x.Z,{sx:{fontWeight:500,mr:1,mt:1.75,mb:.75},children:[(0,p.jsx)(m.fe9,{})," ",t.key," - ",t.title]})}),(0,p.jsx)(l.Z,{children:"OK"===t.status.qualityGateStatus?(0,p.jsx)(m._io,{color:"#7bc62d"}):(0,p.jsx)(m.kjg,{color:"#ff4500"})}),(0,p.jsx)(l.Z,{children:(0,p.jsx)(j.Z,{title:null===(e=t.commit)||void 0===e||null===(n=e.author)||void 0===n?void 0:n.name,children:(0,p.jsx)(Z.Z,{...r(null===(s=t.commit)||void 0===s||null===(i=s.author)||void 0===i?void 0:i.name)})})}),(0,p.jsx)(l.Z,{children:(0,p.jsx)(j.Z,{title:v(t.analysisDate).format("MMMM Do YYYY, h:mm:ss a"),children:v(t.analysisDate).startOf("hour").fromNow()})}),(0,p.jsx)(l.Z,{children:t.commit.sha.substring(0,7)})]},t.id)}))})]})})})},g=r(8411),y=r(2401);var w=t=>{let{title:e}=t;const[r,o]=(0,s.useState)(!0),[a,l]=(0,s.useState)([]),d=(0,n.Z)();return(0,s.useEffect)((()=>{(async()=>{try{o(!0);const t=await(0,g.U)((t=>{switch(t){case"List of Pull Request Results for coincover-b2b2c":return"coincover_coincover-b2b2c";case"List of Pull Request Results for coincover-txm":return"coincover_coincover-txm";default:return t}})(e));l(t)}catch(t){console.error("Error fetching data:",t)}finally{o(!1)}})()}),[e]),(0,p.jsx)(c.Z,{title:e,sx:{boxShadow:d.shadows[6]},children:(0,p.jsx)(i.ZP,{container:!0,spacing:y.d,children:(0,p.jsx)(i.ZP,{item:!0,xs:12,children:(0,p.jsx)(i.ZP,{container:!0,spacing:y.d,children:(0,p.jsx)(i.ZP,{item:!0,xs:12,sm:12,md:12,lg:12,children:r||!a||0===a.length?(0,p.jsx)("div",{children:"Loading..."}):(0,p.jsx)(b,{data:a.pullRequests})})})})})})}}}]);