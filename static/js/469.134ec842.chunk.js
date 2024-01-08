"use strict";(self.webpackChunkqa_dashboard=self.webpackChunkqa_dashboard||[]).push([[469],{646:function(e,t,r){var n=r(5294);console.log("API Key:",{NODE_ENV:"production",PUBLIC_URL:"/qa-dashboard",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}.REACT_APP_API_KEY),console.log("SONAR_CLOUD Key: ",{NODE_ENV:"production",PUBLIC_URL:"/qa-dashboard",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}.API_KEY),t.Z=n.Z.create({baseURL:"https://qa-dashboard-4gfp.onrender.com",headers:{"Content-type":"application/json","API-Key":{NODE_ENV:"production",PUBLIC_URL:"/qa-dashboard",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}.REACT_APP_API_KEY}})},6677:function(e,t,r){r.d(t,{U:function(){return o},W:function(){return s}});var n=r(646);async function o(e){try{return(await n.Z.get(`/api/project_pull_requests/list?project=${e}`)).data}catch(t){return generateErrorReturn(t)}}async function s(e){try{return(await n.Z.get(`/api/qualitygates/project_status?projectKey=${e}`)).data}catch(t){return generateErrorReturn(t)}}},5597:function(e,t,r){var n=r(2791),o=r(7621),s=r(9585),a=r(890),i=r(4721),c=r(9504),d=r(3967),l=r(184);const u={"& .MuiCardHeader-action":{mr:0}},h=(0,n.forwardRef)(((e,t)=>{let{border:r=!0,boxShadow:n,children:h,content:x=!0,contentClass:_="",contentSX:j={},darkTitle:Z,secondary:S,shadow:v,sx:p={},title:f,...m}=e;const E=(0,d.Z)();return(0,l.jsxs)(o.Z,{ref:t,...m,sx:{border:r?"1px solid":"none",borderColor:E.palette.primary[200]+25,":hover":{boxShadow:n?v||"0 2px 14px 0 rgb(32 40 45 / 8%)":"inherit"},...p},children:[f&&(0,l.jsx)(s.Z,{sx:u,title:Z?(0,l.jsx)(a.Z,{variant:"h3",children:f}):f,action:S}),f&&(0,l.jsx)(i.Z,{}),x&&(0,l.jsx)(c.Z,{sx:j,className:_,children:h}),!x&&h]})}));t.Z=h},3469:function(e,t,r){r.r(t),r.d(t,{default:function(){return g}});var n=r(2791),o=r(1889),s=r(3967),a=r(5597),i=r(1923),c=r(6677),d=r(890),l=r(3356),u=r(3044),h=r(5527),x=r(9836),_=r(3382),j=r(3994),Z=r(9281),S=r(6890),v=r(8242),p=r(5855),f=r(8956),m=r(2426),E=r(184);var P=e=>{let{data:t}=e;const[r,o]=(0,n.useState)(0),[s,a]=(0,n.useState)(10);function i(e){const t=e.split(" ");return 1===t.length?{children:`${e[0]}`}:{children:`${t[0][0]}${t[1][0]}`}}return(0,E.jsxs)("div",{children:[(0,E.jsx)(Z.Z,{component:h.Z,children:(0,E.jsxs)(x.Z,{children:[(0,E.jsx)(S.Z,{children:(0,E.jsxs)(p.Z,{children:[(0,E.jsx)(j.Z,{children:"Pull Request"}),(0,E.jsx)(j.Z,{children:"Status"}),(0,E.jsx)(j.Z,{children:"Author"}),(0,E.jsx)(j.Z,{children:"Checked Date"}),(0,E.jsx)(j.Z,{children:"Commit"})]})}),(0,E.jsx)(_.Z,{children:t.slice(r*s,r*s+s).map((e=>{var t,r,n,o;return(0,E.jsxs)(p.Z,{onClick:()=>{return t=e,void window.open(t.url,"_blank");var t},hover:!0,style:{cursor:"pointer"},children:[(0,E.jsx)(j.Z,{children:(0,E.jsxs)(d.Z,{sx:{fontWeight:500,mr:1,mt:1.75,mb:.75},children:[(0,E.jsx)(f.fe9,{})," ",e.key," - ",e.title]})}),(0,E.jsx)(j.Z,{children:"OK"===e.status.qualityGateStatus?(0,E.jsx)(f._io,{color:"#7bc62d"}):(0,E.jsx)(f.kjg,{color:"#ff4500"})}),(0,E.jsx)(j.Z,{children:(0,E.jsx)(l.Z,{title:null===(t=e.commit)||void 0===t||null===(r=t.author)||void 0===r?void 0:r.name,children:(0,E.jsx)(u.Z,{...i(null===(n=e.commit)||void 0===n||null===(o=n.author)||void 0===o?void 0:o.name)})})}),(0,E.jsx)(j.Z,{children:(0,E.jsx)(l.Z,{title:m(e.analysisDate).format("MMMM Do YYYY, h:mm:ss a"),children:m(e.analysisDate).startOf("hour").fromNow()})}),(0,E.jsx)(j.Z,{children:e.commit.sha.substring(0,7)})]},e.id)}))})]})}),(0,E.jsx)(v.Z,{component:"div",count:t.length,rowsPerPage:s,page:r,onPageChange:(e,t)=>{o(t)},onRowsPerPageChange:e=>{a(parseInt(e.target.value,10)),o(0)}})]})};var g=e=>{let{title:t}=e;const[r,d]=(0,n.useState)(!0),[l,u]=(0,n.useState)([]),h=(0,s.Z)();return(0,n.useEffect)((()=>{(async()=>{try{d(!0);const e=await(0,c.U)((e=>{switch(e){case"List of Pull Request Results for coincover-b2b2c":return"coincover_coincover-b2b2c";case"List of Pull Request Results for coincover-txm":return"coincover_coincover-txm";default:return e}})(t));u(e)}catch(e){console.error("Error fetching data:",e)}finally{d(!1)}})()}),[t]),(0,E.jsx)(a.Z,{title:t,sx:{boxShadow:h.shadows[6]},children:(0,E.jsx)(o.ZP,{container:!0,spacing:i.d,children:(0,E.jsx)(o.ZP,{item:!0,xs:12,children:(0,E.jsx)(o.ZP,{container:!0,spacing:i.d,children:(0,E.jsx)(o.ZP,{item:!0,xs:12,sm:12,md:12,lg:12,children:r||!l||0===l.length?(0,E.jsx)("div",{children:"Loading..."}):(0,E.jsx)(P,{data:l.pullRequests})})})})})})}}}]);
//# sourceMappingURL=469.134ec842.chunk.js.map