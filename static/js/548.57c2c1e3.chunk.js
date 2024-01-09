"use strict";(self.webpackChunkfalcon_eye_dashboard=self.webpackChunkfalcon_eye_dashboard||[]).push([[548],{646:function(e,t,r){var n=r(5294);t.Z=n.Z.create({baseURL:"https://qa-dashboard-4gfp.onrender.com",headers:{"Content-type":"application/json","API-Key":"YThjM2M1NzAtZTE0ZC00M2Y1LWE3NDYtZTVmZGE4Y2UwYTdh"}})},5597:function(e,t,r){var n=r(2791),a=r(7621),i=r(9585),o=r(890),s=r(4721),d=r(9504),l=r(3967),c=r(184);const u={"& .MuiCardHeader-action":{mr:0}},h=(0,n.forwardRef)(((e,t)=>{let{border:r=!0,boxShadow:n,children:h,content:x=!0,contentClass:p="",contentSX:g={},darkTitle:Z,secondary:f,shadow:v,sx:j={},title:m,...b}=e;const y=(0,l.Z)();return(0,c.jsxs)(a.Z,{ref:t,...b,sx:{border:r?"1px solid":"none",borderColor:y.palette.primary[200]+25,":hover":{boxShadow:n?v||"0 2px 14px 0 rgb(32 40 45 / 8%)":"inherit"},...j},children:[m&&(0,c.jsx)(i.Z,{sx:u,title:Z?(0,c.jsx)(o.Z,{variant:"h3",children:m}):m,action:f}),m&&(0,c.jsx)(s.Z,{}),x&&(0,c.jsx)(d.Z,{sx:g,className:p,children:h}),!x&&h]})}));t.Z=h},158:function(e,t,r){r.d(t,{Z:function(){return v}});var n=r(697),a=r(493),i=r(5021),o=r(653),s=r(3044),d=r(9900),l=r(890),c=r(6934),u=r(3967),h=r(5597),x=r(7621),p=r(7047),g=r(184);var Z=()=>(0,g.jsx)(x.Z,{sx:{p:2},children:(0,g.jsx)(a.Z,{sx:{py:0},children:(0,g.jsxs)(i.ZP,{alignItems:"center",disableGutters:!0,sx:{py:0},children:[(0,g.jsx)(o.Z,{children:(0,g.jsx)(p.Z,{variant:"rectangular",width:44,height:44})}),(0,g.jsx)(d.Z,{sx:{py:0},primary:(0,g.jsx)(p.Z,{variant:"rectangular",height:20}),secondary:(0,g.jsx)(p.Z,{variant:"text"})})]})})});const f=(0,c.ZP)(h.Z)((e=>{var t,r;let{theme:n,backgroundColor:a}=e;return{backgroundColor:a&&(null===(t=n.palette[a])||void 0===t?void 0:t.dark),color:a&&(null===(r=n.palette[a])||void 0===r?void 0:r.light),overflow:"hidden",position:"relative","&:after":{content:'""',position:"absolute",width:210,height:210,background:`linear-gradient(210.04deg, ${a?n.palette[a][200]:n.palette.warning.dark} -50.94%, rgba(144, 202, 249, 0) 83.49%)`,borderRadius:"50%",top:-30,right:-180},"&:before":{content:'""',position:"absolute",width:210,height:210,background:`linear-gradient(140.9deg, ${a?n.palette[a][200]:n.palette.warning.dark} -14.02%, rgba(144, 202, 249, 0) 77.58%)`,borderRadius:"50%",top:-160,right:-130}}}));var v=e=>{let{isLoading:t,title:r,subtitle:c,result:h,icon:x,backgroundColor:p}=e;const v=(0,u.Z)();return(0,g.jsx)(g.Fragment,{children:t||String(r).includes("undefined")||String(h).includes("undefined")?(0,g.jsx)(Z,{}):(0,g.jsx)(f,{border:!1,content:!1,backgroundColor:p,sx:{boxShadow:v.shadows[10]},children:(0,g.jsx)(n.Z,{sx:{p:2},children:(0,g.jsx)(a.Z,{sx:{py:0},children:(0,g.jsxs)(i.ZP,{alignItems:"center",disableGutters:!0,sx:{py:0},children:[(0,g.jsx)(o.Z,{children:(0,g.jsx)(s.Z,{variant:"rounded",sx:{...v.typography.commonAvatar,...v.typography.largeAvatar,backgroundColor:p?v.palette[p][800]:v.palette.warning.light,color:p?"#fff":v.palette.warning.dark},children:x})}),(0,g.jsx)(d.Z,{sx:{py:0,mt:.45,mb:.45},primary:(0,g.jsx)(l.Z,{variant:"h4",sx:{color:p&&"#fff"},children:r}),secondary:(0,g.jsx)(l.Z,{variant:"subtitle2",sx:{color:p?"primary.light":v.palette.grey[500],mt:.25},children:c})}),(0,g.jsx)(l.Z,{variant:"h2",sx:{color:((e,t)=>"OK"===t?v.palette.success.main:"ERROR"===t?v.palette.orange.dark:e?"#fff":"black")(p,h)},children:h})]})})})})})}},6548:function(e,t,r){r.r(t),r.d(t,{default:function(){return E}});var n=r(2791),a=r(1502),i=r(1889),o=r(3967),s=r(9434),d=r(5597),l=r(1923),c=r(158),u=r(697),h=r(8184),x=r(5527),p=r(9836),g=r(3382),Z=r(3994),f=r(9281),v=r(6890),j=r(8242),m=r(5855),b=r(890),y=r(2426),w=r(9075),k=r(184);const P={position:"absolute",top:"50%",left:"50%",transform:"translate(-50%, -50%)",width:"80%",height:"auto",overflowY:"auto",bgcolor:"background.paper",borderRadius:"8px",boxShadow:24,p:4};var C=e=>{let{data:t}=e;const[r,a]=(0,n.useState)(null),[i,o]=(0,n.useState)(!1),[s,d]=(0,n.useState)(0),[l,c]=(0,n.useState)(10);return(0,k.jsxs)("div",{children:[(0,k.jsx)(f.Z,{component:x.Z,children:(0,k.jsxs)(p.Z,{children:[(0,k.jsx)(v.Z,{children:(0,k.jsxs)(m.Z,{children:[(0,k.jsx)(Z.Z,{children:"Date"}),(0,k.jsx)(Z.Z,{children:"Pass"}),(0,k.jsx)(Z.Z,{children:"Fail"}),(0,k.jsx)(Z.Z,{children:"Skip"})]})}),(0,k.jsx)(g.Z,{children:t.slice(s*l,s*l+l).map((e=>(0,k.jsxs)(m.Z,{onClick:()=>(a(e),void o(!0)),hover:!0,style:{cursor:"pointer"},children:[(0,k.jsx)(Z.Z,{children:y(e.date).format("DD/MM/YY")}),(0,k.jsx)(Z.Z,{children:e.pass}),(0,k.jsx)(Z.Z,{children:e.fail}),(0,k.jsx)(Z.Z,{children:e.skip})]},e.id)))})]})}),(0,k.jsx)(j.Z,{component:"div",count:t.length,rowsPerPage:l,page:s,onPageChange:(e,t)=>{d(t)},onRowsPerPageChange:e=>{c(parseInt(e.target.value,10)),d(0)}}),(0,k.jsx)(h.Z,{open:i,onClose:()=>{o(!1)},"aria-labelledby":"modal-modal-title","aria-describedby":"modal-modal-description",children:(0,k.jsxs)(u.Z,{sx:P,children:[(0,k.jsxs)(b.Z,{id:"modal-modal-title",variant:"h3",component:"h2",children:[null===r||void 0===r?void 0:r.title," Test Run at ",y(null===r||void 0===r?void 0:r.date).format("DD/MM/YY")]}),(0,k.jsx)(b.Z,{id:"modal-modal-description",sx:{mt:2},children:(0,k.jsx)("iframe",{src:`https://coincover.github.io/coincover-amt/${(0,w.h)(null===r||void 0===r?void 0:r.title)}/functional/${y(null===r||void 0===r?void 0:r.date).format("YYYY-MM-DD")}/index.html`,title:"Modal Iframe",width:"100%",height:"600px"})})]})})]})},S=r(3081),R=r(2829);var E=e=>{var t,r;let{title:u}=e;const h=(0,s.I0)(),x=(0,o.Z)(),p=(0,s.v9)((0,R.Vq)((0,w.z)(u))),g=(0,s.v9)((0,R.eP)((0,w.z)(u))),[Z,f]=(0,n.useState)(!0),[v,j]=(0,n.useState)([]),[m,b]=(0,n.useState)(""),[y,P]=(0,n.useState)(""),E=v[v.length-1],D=((e,t,r)=>{const n=((e+r)/(e+t+r)*100).toFixed(0);return isNaN(n)?"No Data":`${n}% test pass`})(null===E||void 0===E?void 0:E.pass,null===E||void 0===E?void 0:E.fail,null===E||void 0===E?void 0:E.skip);return(0,n.useEffect)((()=>{(async()=>{try{f(!0),m!==(0,w.z)(u)&&(await h((0,S.Q)((0,w.z)(u))),b((0,w.z)(u))),y!==(0,w.z)(u)&&(await h((0,S.E)((0,w.z)(u))),P((0,w.z)(u))),f(!1)}catch(e){console.error("Error fetching data:",e)}finally{f(!1)}})()}),[h,u,g,y,m,p]),(0,n.useEffect)((()=>{const e=g.data.map((e=>({...e,title:u})));e.sort(((e,t)=>new Date(t.date)-new Date(e.date))),j(e)}),[g,u]),(0,k.jsx)(d.Z,{title:`E2E Test Result: ${u}`,sx:{boxShadow:x.shadows[6]},children:(0,k.jsx)(i.ZP,{container:!0,spacing:l.dv,children:(0,k.jsx)(i.ZP,{item:!0,xs:12,children:(0,k.jsxs)(i.ZP,{container:!0,spacing:l.dv,children:[(0,k.jsx)(i.ZP,{item:!0,sm:6,xs:12,md:6,lg:4,children:(0,k.jsx)(c.Z,{isLoading:Z,title:"Latest E2E Run",subtitle:"Status on the latest run",result:D,icon:(0,k.jsx)(a.Z,{fontSize:"inherit"}),backgroundColor:"primary"})}),(0,k.jsx)(i.ZP,{item:!0,sm:6,xs:12,md:6,lg:4,children:(0,k.jsx)(c.Z,{isLoading:Z,title:"Latest Unit Test Run",subtitle:"Code Coverage",result:(null===(t=p.data[0])||void 0===t||null===(r=t.result[0])||void 0===r?void 0:r.percentage)||"No Data",icon:(0,k.jsx)(a.Z,{fontSize:"inherit"}),backgroundColor:"secondary"})}),(0,k.jsx)(i.ZP,{item:!0,sm:6,xs:12,md:6,lg:4,children:(0,k.jsx)(c.Z,{isLoading:Z,title:"Latest E2E Test Coverage Report",subtitle:"Test Coverage",result:"No Data",icon:(0,k.jsx)(a.Z,{fontSize:"inherit"})})}),(0,k.jsx)(i.ZP,{item:!0,xs:12,sm:12,md:12,lg:12,children:Z?(0,k.jsx)("div",{children:"Loading..."}):(0,k.jsx)(C,{data:v})})]})})})})}},3081:function(e,t,r){r.d(t,{E:function(){return o},Q:function(){return i}});var n=r(646);var a=r(9673);const i=e=>async(t,r)=>{const i=r().unitReducer[e],o=Date.now();if(!i||0===i.length||o-i.lastUpdated>6e5)try{const r=await async function(e){try{return(await n.Z.get(`/unit/${e}`)).data}catch(t){return generateErrorReturn(t)}}(e);return t({type:a.Mk,payload:{issueType:e,data:r,lastUpdated:o}}),r}catch(s){throw console.error("Error retrieving data:",s),s}return i},o=e=>async(t,r)=>{const i=r().e2eReducer[e],o=Date.now();if(!i.data||0===i.data.length||o-i.lastUpdated>6e5)try{const r=await async function(e){try{return(await n.Z.get(`/e2e/${e}`)).data}catch(t){return generateErrorReturn(t)}}(e);return t({type:a.So,payload:{issueType:e,data:r,lastUpdated:o}}),r}catch(s){throw console.error("Error retrieving data:",s),s}return i}},2829:function(e,t,r){r.d(t,{KC:function(){return d},Vq:function(){return c},eP:function(){return u},gu:function(){return l},jb:function(){return s}});var n=r(3553);const a=e=>e.jiraReducer,i=e=>e.unitReducer,o=e=>e.e2eReducer,s=(0,n.P1)([a],(e=>e.bugData)),d=(0,n.P1)([a],(e=>e.defectData)),l=(0,n.P1)([a],(e=>e.securityData)),c=e=>(0,n.P1)([i],(t=>t[e])),u=e=>(0,n.P1)([o],(t=>t[e]))},9075:function(e,t,r){r.d(t,{h:function(){return a},z:function(){return i}});var n=r(3200);function a(e){const t=n.find((t=>t.name===e));return console.log(t),t?t.slug:e}function i(e){const t=n.find((t=>t.name===e));return console.log(t),t?t.api:e}}}]);
//# sourceMappingURL=548.57c2c1e3.chunk.js.map