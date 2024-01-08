"use strict";(self.webpackChunkqa_dashboard=self.webpackChunkqa_dashboard||[]).push([[469],{646:function(e,t,r){var n=r(5294);t.Z=n.Z.create({baseURL:"https://qa-dashboard-4gfp.onrender.com",headers:{"Content-type":"application/json","API-Key":{NODE_ENV:"production",PUBLIC_URL:"/qa-dashboard",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}.API_KEY}})},6677:function(e,t,r){r.d(t,{U:function(){return s},W:function(){return o}});var n=r(646);async function s(e){try{return(await n.Z.get(`/api/project_pull_requests/list?project=${e}`)).data}catch(t){return generateErrorReturn(t)}}async function o(e){try{return(await n.Z.get(`/api/qualitygates/project_status?projectKey=${e}`)).data}catch(t){return generateErrorReturn(t)}}},5597:function(e,t,r){var n=r(2791),s=r(7621),o=r(9585),a=r(890),i=r(4721),c=r(9504),l=r(3967),d=r(184);const u={"& .MuiCardHeader-action":{mr:0}},h=(0,n.forwardRef)(((e,t)=>{let{border:r=!0,boxShadow:n,children:h,content:x=!0,contentClass:j="",contentSX:Z={},darkTitle:f,secondary:p,shadow:v,sx:m={},title:g,...b}=e;const S=(0,l.Z)();return(0,d.jsxs)(s.Z,{ref:t,...b,sx:{border:r?"1px solid":"none",borderColor:S.palette.primary[200]+25,":hover":{boxShadow:n?v||"0 2px 14px 0 rgb(32 40 45 / 8%)":"inherit"},...m},children:[g&&(0,d.jsx)(o.Z,{sx:u,title:f?(0,d.jsx)(a.Z,{variant:"h3",children:g}):g,action:p}),g&&(0,d.jsx)(i.Z,{}),x&&(0,d.jsx)(c.Z,{sx:Z,className:j,children:h}),!x&&h]})}));t.Z=h},3469:function(e,t,r){r.r(t),r.d(t,{default:function(){return y}});var n=r(2791),s=r(1889),o=r(3967),a=r(5597),i=r(1923),c=r(6677),l=r(890),d=r(3356),u=r(3044),h=r(5527),x=r(9836),j=r(3382),Z=r(3994),f=r(9281),p=r(6890),v=r(8242),m=r(5855),g=r(8956),b=r(2426),S=r(184);var _=e=>{let{data:t}=e;const[r,s]=(0,n.useState)(0),[o,a]=(0,n.useState)(10);function i(e){const t=e.split(" ");return 1===t.length?{children:`${e[0]}`}:{children:`${t[0][0]}${t[1][0]}`}}return(0,S.jsxs)("div",{children:[(0,S.jsx)(f.Z,{component:h.Z,children:(0,S.jsxs)(x.Z,{children:[(0,S.jsx)(p.Z,{children:(0,S.jsxs)(m.Z,{children:[(0,S.jsx)(Z.Z,{children:"Pull Request"}),(0,S.jsx)(Z.Z,{children:"Status"}),(0,S.jsx)(Z.Z,{children:"Author"}),(0,S.jsx)(Z.Z,{children:"Checked Date"}),(0,S.jsx)(Z.Z,{children:"Commit"})]})}),(0,S.jsx)(j.Z,{children:t.slice(r*o,r*o+o).map((e=>{var t,r,n,s;return(0,S.jsxs)(m.Z,{onClick:()=>{return t=e,void window.open(t.url,"_blank");var t},hover:!0,style:{cursor:"pointer"},children:[(0,S.jsx)(Z.Z,{children:(0,S.jsxs)(l.Z,{sx:{fontWeight:500,mr:1,mt:1.75,mb:.75},children:[(0,S.jsx)(g.fe9,{})," ",e.key," - ",e.title]})}),(0,S.jsx)(Z.Z,{children:"OK"===e.status.qualityGateStatus?(0,S.jsx)(g._io,{color:"#7bc62d"}):(0,S.jsx)(g.kjg,{color:"#ff4500"})}),(0,S.jsx)(Z.Z,{children:(0,S.jsx)(d.Z,{title:null===(t=e.commit)||void 0===t||null===(r=t.author)||void 0===r?void 0:r.name,children:(0,S.jsx)(u.Z,{...i(null===(n=e.commit)||void 0===n||null===(s=n.author)||void 0===s?void 0:s.name)})})}),(0,S.jsx)(Z.Z,{children:(0,S.jsx)(d.Z,{title:b(e.analysisDate).format("MMMM Do YYYY, h:mm:ss a"),children:b(e.analysisDate).startOf("hour").fromNow()})}),(0,S.jsx)(Z.Z,{children:e.commit.sha.substring(0,7)})]},e.id)}))})]})}),(0,S.jsx)(v.Z,{component:"div",count:t.length,rowsPerPage:o,page:r,onPageChange:(e,t)=>{s(t)},onRowsPerPageChange:e=>{a(parseInt(e.target.value,10)),s(0)}})]})};var y=e=>{let{title:t}=e;const[r,l]=(0,n.useState)(!0),[d,u]=(0,n.useState)([]),h=(0,o.Z)();return(0,n.useEffect)((()=>{(async()=>{try{l(!0);const e=await(0,c.U)((e=>{switch(e){case"List of Pull Request Results for coincover-b2b2c":return"coincover_coincover-b2b2c";case"List of Pull Request Results for coincover-txm":return"coincover_coincover-txm";default:return e}})(t));u(e)}catch(e){console.error("Error fetching data:",e)}finally{l(!1)}})()}),[t]),(0,S.jsx)(a.Z,{title:t,sx:{boxShadow:h.shadows[6]},children:(0,S.jsx)(s.ZP,{container:!0,spacing:i.d,children:(0,S.jsx)(s.ZP,{item:!0,xs:12,children:(0,S.jsx)(s.ZP,{container:!0,spacing:i.d,children:(0,S.jsx)(s.ZP,{item:!0,xs:12,sm:12,md:12,lg:12,children:r||!d||0===d.length?(0,S.jsx)("div",{children:"Loading..."}):(0,S.jsx)(_,{data:d.pullRequests})})})})})})}}}]);
//# sourceMappingURL=469.a58c6b14.chunk.js.map