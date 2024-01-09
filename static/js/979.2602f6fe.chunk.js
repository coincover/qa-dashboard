"use strict";(self.webpackChunkfalcon_eye_dashboard=self.webpackChunkfalcon_eye_dashboard||[]).push([[979],{646:function(e,r,t){var n=t(5294);r.Z=n.Z.create({baseURL:"https://qa-dashboard-4gfp.onrender.com",headers:{"Content-type":"application/json","API-Key":"YThjM2M1NzAtZTE0ZC00M2Y1LWE3NDYtZTVmZGE4Y2UwYTdh"}})},5597:function(e,r,t){var n=t(2791),a=t(7621),i=t(9585),s=t(890),o=t(4721),c=t(9504),l=t(3967),d=t(184);const h={"& .MuiCardHeader-action":{mr:0}},u=(0,n.forwardRef)(((e,r)=>{let{border:t=!0,boxShadow:n,children:u,content:x=!0,contentClass:Z="",contentSX:g={},darkTitle:j,secondary:p,shadow:v,sx:f={},title:m,...b}=e;const w=(0,l.Z)();return(0,d.jsxs)(a.Z,{ref:r,...b,sx:{border:t?"1px solid":"none",borderColor:w.palette.primary[200]+25,":hover":{boxShadow:n?v||"0 2px 14px 0 rgb(32 40 45 / 8%)":"inherit"},...f},children:[m&&(0,d.jsx)(i.Z,{sx:h,title:j?(0,d.jsx)(s.Z,{variant:"h3",children:m}):m,action:p}),m&&(0,d.jsx)(o.Z,{}),x&&(0,d.jsx)(c.Z,{sx:g,className:Z,children:u}),!x&&u]})}));r.Z=u},6979:function(e,r,t){t.r(r),t.d(r,{default:function(){return $}});var n=t(2791),a=t(1889),i=t(3967),s=t(9434),o=t(5597),c=t(1923),l=t(5172),d=t(5678),h=t(786),u=t(3462),x=t(8533),Z=t(5855),g=t(3994),j=t(3400),p=t(3356),v=t(3044),f=t(1918),m=t(6125),b=t(697),w=t(890),y=t(9836),C=t(6890),R=t(3382),P=t(9281),D=t(5527),M=t(8242),_=t(2426),E=t(184);function S(e){const{row:r}=e,[t,a]=n.useState(!1),i=r.result[r.result.length-1],s=e=>{const r=parseFloat(e);return r>=90&&r<=100?"success":r>=80&&r<90?"warning":"error"};const o=(e,r)=>{window.open(`https://github.com/coincover/coincover-b2b2c/pull/${r}`,"_blank")};return(0,E.jsxs)(n.Fragment,{children:[(0,E.jsxs)(Z.Z,{sx:{"& > *":{borderBottom:"unset"}},children:[(0,E.jsx)(g.Z,{children:(0,E.jsx)(j.Z,{"aria-label":"expand row",size:"small",onClick:()=>a(!t),children:t?(0,E.jsx)(d.Z,{}):(0,E.jsx)(l.Z,{})})}),(0,E.jsx)(g.Z,{component:"th",scope:"row",children:_(i.date).format("DD/MM/YYYY h:mm:ss")}),(0,E.jsx)(g.Z,{align:"right",onClick:()=>o(historyRow,r.pull_request),hover:!0,style:{cursor:"pointer",textDecoration:"underline"},children:r.pull_request}),(0,E.jsx)(g.Z,{children:(0,E.jsx)(p.Z,{title:i.author||"Not assigned",children:(0,E.jsx)(v.Z,{alt:i.author,src:`https://ui-avatars.com/api/?name=${i.author}&background=random&?bold=true`})})}),(0,E.jsx)(g.Z,{children:i.commit}),(0,E.jsxs)(g.Z,{align:"right",children:[(0,E.jsx)(f.Z,{label:`${i.percentage}%`,color:s(i.percentage),variant:"combined",sx:{borderRadius:"5px",width:"100%"}}),function(e){if(!e.result||e.result.length<2)return(0,E.jsx)(h.Z,{});const r=e.result[e.result.length-1],t=e.result[e.result.length-2];if(!r||!t)return"Result data missing";const n=parseFloat(r.percentage),a=parseFloat(t.percentage);return isNaN(n)||isNaN(a)?(0,E.jsx)(h.Z,{}):n>a?(0,E.jsx)(u.Z,{}):n<a?(0,E.jsx)(x.Z,{}):(0,E.jsx)(h.Z,{})}(r)]})]}),(0,E.jsx)(Z.Z,{children:(0,E.jsx)(g.Z,{style:{paddingBottom:0,paddingTop:0},colSpan:6,children:(0,E.jsx)(m.Z,{in:t,timeout:"auto",unmountOnExit:!0,children:(0,E.jsxs)(b.Z,{sx:{margin:1},children:[(0,E.jsx)(w.Z,{variant:"h6",gutterBottom:!0,component:"div",children:"History"}),(0,E.jsxs)(y.Z,{size:"small","aria-label":"purchases",children:[(0,E.jsx)(C.Z,{children:(0,E.jsxs)(Z.Z,{children:[(0,E.jsx)(g.Z,{children:"Date"}),(0,E.jsx)(g.Z,{children:"Author"}),(0,E.jsx)(g.Z,{align:"right",children:"Commit"}),(0,E.jsx)(g.Z,{align:"right",children:"Function Coverage"}),(0,E.jsx)(g.Z,{align:"right",children:"Line Coverage"}),(0,E.jsx)(g.Z,{align:"right",children:"Statement Coverage"}),(0,E.jsx)(g.Z,{align:"right",children:"Overall Coverage"})]})}),(0,E.jsx)(R.Z,{children:r.result.map((e=>(0,E.jsxs)(Z.Z,{onClick:()=>o(0,r.pull_request),hover:!0,style:{cursor:"pointer"},children:[(0,E.jsx)(g.Z,{component:"th",scope:"row",children:_(e.date).format("DD/MM/YYYY h:mm:ss")}),(0,E.jsx)(g.Z,{children:e.author}),(0,E.jsx)(g.Z,{align:"right",children:e.commit}),(0,E.jsx)(g.Z,{align:"right",children:(0,E.jsx)(f.Z,{label:`${e.function_coverage}%`,color:s(e.function_coverage),variant:"combined",sx:{borderRadius:"5px",width:"100%"}})}),(0,E.jsx)(g.Z,{align:"right",children:(0,E.jsx)(f.Z,{label:`${e.line_coverage}%`,color:s(e.line_coverage),variant:"combined",sx:{borderRadius:"5px",width:"100%"}})}),(0,E.jsx)(g.Z,{align:"right",children:(0,E.jsx)(f.Z,{label:`${e.statement_coverage}%`,color:s(e.statement_coverage),variant:"combined",sx:{borderRadius:"5px",width:"100%"}})}),(0,E.jsx)(g.Z,{align:"right",children:(0,E.jsx)(f.Z,{label:`${e.percentage}%`,color:s(e.percentage),variant:"combined",sx:{borderRadius:"5px",width:"100%"}})})]},e.date)))})]})]})})})})]})}var Y=e=>{let{isLoading:r,data:t}=e;const a=(0,i.Z)(),[s,c]=(0,n.useState)(0),[l,d]=(0,n.useState)(10);return(0,E.jsx)(E.Fragment,{children:!r&&t.length>0?(0,E.jsxs)(P.Z,{component:D.Z,children:[(0,E.jsxs)(y.Z,{"aria-label":"collapsible table",children:[(0,E.jsx)(C.Z,{children:(0,E.jsxs)(Z.Z,{children:[(0,E.jsx)(g.Z,{}),(0,E.jsx)(g.Z,{children:"Date"}),(0,E.jsx)(g.Z,{align:"right",children:"Pull Request"}),(0,E.jsx)(g.Z,{children:"Author"}),(0,E.jsx)(g.Z,{children:"Commit"}),(0,E.jsx)(g.Z,{align:"right",children:"Overall Coverage"})]})}),(0,E.jsx)(R.Z,{children:t.slice(s*l,s*l+l).map((e=>(0,E.jsx)(S,{row:e},e.id)))})]}),(0,E.jsx)(M.Z,{component:"div",count:t.length,rowsPerPage:l,page:s,onPageChange:(e,r)=>{c(r)},onRowsPerPageChange:e=>{d(parseInt(e.target.value,10)),c(0)}})]}):(0,E.jsx)(o.Z,{sx:{boxShadow:a.shadows[6]},children:(0,E.jsx)(w.Z,{sx:{textAlign:"center"},children:"No Data"})})})},z=t(3081),k=t(2829),N=t(9075);var $=e=>{let{title:r}=e;const t=(0,s.I0)(),l=(0,i.Z)(),d=(0,s.v9)((0,k.Vq)((0,N.z)(r))),[h,u]=(0,n.useState)(!0);return(0,n.useEffect)((()=>{(async()=>{try{u(!0),d||t((0,z.Q)((0,N.z)(r)))}catch(e){console.error("Error fetching data:",e)}finally{u(!1)}})()}),[t,d,r]),(0,E.jsx)(o.Z,{title:`Unit Code Coverage: ${r}`,sx:{boxShadow:l.shadows[6]},children:(0,E.jsx)(a.ZP,{container:!0,spacing:c.dv,children:(0,E.jsx)(a.ZP,{item:!0,xs:12,children:(0,E.jsx)(a.ZP,{container:!0,spacing:c.dv,children:(0,E.jsx)(a.ZP,{item:!0,xs:12,sm:12,md:12,lg:12,children:h?(0,E.jsx)("div",{children:"Loading..."}):(0,E.jsx)(Y,{data:d.data})})})})})})}},3081:function(e,r,t){t.d(r,{E:function(){return s},Q:function(){return i}});var n=t(646);var a=t(9673);const i=e=>async(r,t)=>{const i=t().unitReducer[e],s=Date.now();if(!i||0===i.length||s-i.lastUpdated>6e5)try{const t=await async function(e){try{return(await n.Z.get(`/unit/${e}`)).data}catch(r){return generateErrorReturn(r)}}(e);return r({type:a.Mk,payload:{issueType:e,data:t,lastUpdated:s}}),t}catch(o){throw console.error("Error retrieving data:",o),o}return i},s=e=>async(r,t)=>{const i=t().e2eReducer[e],s=Date.now();if(!i.data||0===i.data.length||s-i.lastUpdated>6e5)try{const t=await async function(e){try{return(await n.Z.get(`/e2e/${e}`)).data}catch(r){return generateErrorReturn(r)}}(e);return r({type:a.So,payload:{issueType:e,data:t,lastUpdated:s}}),t}catch(o){throw console.error("Error retrieving data:",o),o}return i}},2829:function(e,r,t){t.d(r,{KC:function(){return c},Vq:function(){return d},eP:function(){return h},gu:function(){return l},jb:function(){return o}});var n=t(3553);const a=e=>e.jiraReducer,i=e=>e.unitReducer,s=e=>e.e2eReducer,o=(0,n.P1)([a],(e=>e.bugData)),c=(0,n.P1)([a],(e=>e.defectData)),l=(0,n.P1)([a],(e=>e.securityData)),d=e=>(0,n.P1)([i],(r=>r[e])),h=e=>(0,n.P1)([s],(r=>r[e]))},9075:function(e,r,t){t.d(r,{h:function(){return a},z:function(){return i}});var n=t(3200);function a(e){const r=n.find((r=>r.name===e));return console.log(r),r?r.slug:e}function i(e){const r=n.find((r=>r.name===e));return console.log(r),r?r.api:e}},5172:function(e,r,t){var n=t(4836);r.Z=void 0;var a=n(t(5649)),i=t(184),s=(0,a.default)((0,i.jsx)("path",{d:"M7.41 8.59 12 13.17l4.59-4.58L18 10l-6 6-6-6 1.41-1.41z"}),"KeyboardArrowDown");r.Z=s},5678:function(e,r,t){var n=t(4836);r.Z=void 0;var a=n(t(5649)),i=t(184),s=(0,a.default)((0,i.jsx)("path",{d:"M7.41 15.41 12 10.83l4.59 4.58L18 14l-6-6-6 6z"}),"KeyboardArrowUp");r.Z=s},786:function(e,r,t){var n=t(4836);r.Z=void 0;var a=n(t(5649)),i=t(184),s=(0,a.default)((0,i.jsx)("path",{d:"M6 19h12v2H6z"}),"Minimize");r.Z=s},3462:function(e,r,t){var n=t(4836);r.Z=void 0;var a=n(t(5649)),i=t(184),s=(0,a.default)((0,i.jsx)("path",{d:"M9 5v2h6.59L4 18.59 5.41 20 17 8.41V15h2V5H9z"}),"NorthEast");r.Z=s},8533:function(e,r,t){var n=t(4836);r.Z=void 0;var a=n(t(5649)),i=t(184),s=(0,a.default)((0,i.jsx)("path",{d:"M19 9h-2v6.59L5.41 4 4 5.41 15.59 17H9v2h10V9z"}),"SouthEast");r.Z=s}}]);
//# sourceMappingURL=979.2602f6fe.chunk.js.map