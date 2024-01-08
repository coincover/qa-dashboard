"use strict";(self.webpackChunkqa_dashboard=self.webpackChunkqa_dashboard||[]).push([[548],{646:function(e,t,r){var a=r(5294);console.log("API Key:",{NODE_ENV:"production",PUBLIC_URL:"/qa-dashboard",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}.REACT_APP_API_KEY),console.log("SONAR_CLOUD Key: ",{NODE_ENV:"production",PUBLIC_URL:"/qa-dashboard",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}.API_KEY),t.Z=a.Z.create({baseURL:"https://qa-dashboard-4gfp.onrender.com",headers:{"Content-type":"application/json","API-Key":{NODE_ENV:"production",PUBLIC_URL:"/qa-dashboard",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}.REACT_APP_API_KEY}})},5597:function(e,t,r){var a=r(2791),n=r(7621),o=r(9585),i=r(890),s=r(4721),d=r(9504),l=r(3967),c=r(184);const u={"& .MuiCardHeader-action":{mr:0}},h=(0,a.forwardRef)(((e,t)=>{let{border:r=!0,boxShadow:a,children:h,content:x=!0,contentClass:p="",contentSX:g={},darkTitle:v,secondary:Z,shadow:j,sx:f={},title:b,...m}=e;const S=(0,l.Z)();return(0,c.jsxs)(n.Z,{ref:t,...m,sx:{border:r?"1px solid":"none",borderColor:S.palette.primary[200]+25,":hover":{boxShadow:a?j||"0 2px 14px 0 rgb(32 40 45 / 8%)":"inherit"},...f},children:[b&&(0,c.jsx)(o.Z,{sx:u,title:v?(0,c.jsx)(i.Z,{variant:"h3",children:b}):b,action:Z}),b&&(0,c.jsx)(s.Z,{}),x&&(0,c.jsx)(d.Z,{sx:g,className:p,children:h}),!x&&h]})}));t.Z=h},158:function(e,t,r){r.d(t,{Z:function(){return j}});var a=r(697),n=r(493),o=r(5021),i=r(653),s=r(3044),d=r(9900),l=r(890),c=r(6934),u=r(3967),h=r(5597),x=r(7621),p=r(7047),g=r(184);var v=()=>(0,g.jsx)(x.Z,{sx:{p:2},children:(0,g.jsx)(n.Z,{sx:{py:0},children:(0,g.jsxs)(o.ZP,{alignItems:"center",disableGutters:!0,sx:{py:0},children:[(0,g.jsx)(i.Z,{children:(0,g.jsx)(p.Z,{variant:"rectangular",width:44,height:44})}),(0,g.jsx)(d.Z,{sx:{py:0},primary:(0,g.jsx)(p.Z,{variant:"rectangular",height:20}),secondary:(0,g.jsx)(p.Z,{variant:"text"})})]})})});const Z=(0,c.ZP)(h.Z)((e=>{var t,r;let{theme:a,backgroundColor:n}=e;return{backgroundColor:n&&(null===(t=a.palette[n])||void 0===t?void 0:t.dark),color:n&&(null===(r=a.palette[n])||void 0===r?void 0:r.light),overflow:"hidden",position:"relative","&:after":{content:'""',position:"absolute",width:210,height:210,background:`linear-gradient(210.04deg, ${n?a.palette[n][200]:a.palette.warning.dark} -50.94%, rgba(144, 202, 249, 0) 83.49%)`,borderRadius:"50%",top:-30,right:-180},"&:before":{content:'""',position:"absolute",width:210,height:210,background:`linear-gradient(140.9deg, ${n?a.palette[n][200]:a.palette.warning.dark} -14.02%, rgba(144, 202, 249, 0) 77.58%)`,borderRadius:"50%",top:-160,right:-130}}}));var j=e=>{let{isLoading:t,title:r,subtitle:c,result:h,icon:x,backgroundColor:p}=e;const j=(0,u.Z)();return(0,g.jsx)(g.Fragment,{children:t||String(r).includes("undefined")||String(h).includes("undefined")?(0,g.jsx)(v,{}):(0,g.jsx)(Z,{border:!1,content:!1,backgroundColor:p,sx:{boxShadow:j.shadows[10]},children:(0,g.jsx)(a.Z,{sx:{p:2},children:(0,g.jsx)(n.Z,{sx:{py:0},children:(0,g.jsxs)(o.ZP,{alignItems:"center",disableGutters:!0,sx:{py:0},children:[(0,g.jsx)(i.Z,{children:(0,g.jsx)(s.Z,{variant:"rounded",sx:{...j.typography.commonAvatar,...j.typography.largeAvatar,backgroundColor:p?j.palette[p][800]:j.palette.warning.light,color:p?"#fff":j.palette.warning.dark},children:x})}),(0,g.jsx)(d.Z,{sx:{py:0,mt:.45,mb:.45},primary:(0,g.jsx)(l.Z,{variant:"h4",sx:{color:p&&"#fff"},children:r}),secondary:(0,g.jsx)(l.Z,{variant:"subtitle2",sx:{color:p?"primary.light":j.palette.grey[500],mt:.25},children:c})}),(0,g.jsx)(l.Z,{variant:"h2",sx:{color:((e,t)=>"OK"===t?j.palette.success.main:"ERROR"===t?j.palette.orange.dark:e?"#fff":"black")(p,h)},children:h})]})})})})})}},6548:function(e,t,r){r.r(t),r.d(t,{default:function(){return w}});var a=r(2791),n=r(1502),o=r(1889),i=r(3967),s=r(9434),d=r(5597),l=r(1923),c=r(158),u=r(697),h=r(8184),x=r(5527),p=r(9836),g=r(3382),v=r(3994),Z=r(9281),j=r(6890),f=r(8242),b=r(5855),m=r(890),S=r(2426),y=r(184);const P={position:"absolute",top:"50%",left:"50%",transform:"translate(-50%, -50%)",width:"80%",height:"auto",overflowY:"auto",bgcolor:"background.paper",borderRadius:"8px",boxShadow:24,p:4};var C=e=>{let{data:t}=e;const[r,n]=(0,a.useState)(null),[o,i]=(0,a.useState)(!1),[s,d]=(0,a.useState)(0),[l,c]=(0,a.useState)(10);return(0,y.jsxs)("div",{children:[(0,y.jsx)(Z.Z,{component:x.Z,children:(0,y.jsxs)(p.Z,{children:[(0,y.jsx)(j.Z,{children:(0,y.jsxs)(b.Z,{children:[(0,y.jsx)(v.Z,{children:"Date"}),(0,y.jsx)(v.Z,{children:"Pass"}),(0,y.jsx)(v.Z,{children:"Fail"}),(0,y.jsx)(v.Z,{children:"Skip"})]})}),(0,y.jsx)(g.Z,{children:t.slice(s*l,s*l+l).map((e=>(0,y.jsxs)(b.Z,{onClick:()=>(n(e),void i(!0)),hover:!0,style:{cursor:"pointer"},children:[(0,y.jsx)(v.Z,{children:S(e.date).format("DD/MM/YY")}),(0,y.jsx)(v.Z,{children:e.pass}),(0,y.jsx)(v.Z,{children:e.fail}),(0,y.jsx)(v.Z,{children:e.skip})]},e.id)))})]})}),(0,y.jsx)(f.Z,{component:"div",count:t.length,rowsPerPage:l,page:s,onPageChange:(e,t)=>{d(t)},onRowsPerPageChange:e=>{c(parseInt(e.target.value,10)),d(0)}}),(0,y.jsx)(h.Z,{open:o,onClose:()=>{i(!1)},"aria-labelledby":"modal-modal-title","aria-describedby":"modal-modal-description",children:(0,y.jsxs)(u.Z,{sx:P,children:[(0,y.jsxs)(m.Z,{id:"modal-modal-title",variant:"h3",component:"h2",children:[null===r||void 0===r?void 0:r.title," Test Run at ",S(null===r||void 0===r?void 0:r.date).format("DD/MM/YY")]}),(0,y.jsx)(m.Z,{id:"modal-modal-description",sx:{mt:2},children:(0,y.jsx)("iframe",{src:`https://coincover.github.io/coincover-amt/${(e=>{switch(e){case"Identity Service":return"identity-service";case"Disaster Recovery":return"disaster-recovery";case"Ledger Support Tool":return"ledger";case"Transaction Protection":return"transaction-protection";case"Recovery As A Service":return"recovery-as-a-service";default:return e}})(null===r||void 0===r?void 0:r.title)}/functional/${S(null===r||void 0===r?void 0:r.date).format("YYYY-MM-DD")}/index.html`,title:"Modal Iframe",width:"100%",height:"600px"})})]})})]})},_=r(3081),E=r(2829);var w=e=>{var t,r;let{title:u}=e;const h=(0,s.I0)(),x=(0,i.Z)(),p=(0,s.v9)((0,E.Vq)(u.toLowerCase().replace(/\s/g,"_"))),g=(0,s.v9)((0,E.eP)(u.toLowerCase().replace(/\s/g,"_"))),[v,Z]=(0,a.useState)(!0),[j,f]=(0,a.useState)([]),[b,m]=(0,a.useState)(!1),[S,P]=(0,a.useState)(!1),w=j[j.length-1],R=((e,t,r)=>{const a=((e+r)/(e+t+r)*100).toFixed(0);return isNaN(a)?"No Data":`${a}% test pass`})(null===w||void 0===w?void 0:w.pass,null===w||void 0===w?void 0:w.fail,null===w||void 0===w?void 0:w.skip);return(0,a.useEffect)((()=>{(async()=>{try{Z(!0),b||(await h((0,_.Q)(u.toLowerCase().replace(/\s/g,"_"))),m(!0)),S||(await h((0,_.E)(u.toLowerCase().replace(/\s/g,"_"))),P(!0)),Z(!1)}catch(e){console.error("Error fetching data:",e)}finally{Z(!1)}})()}),[h,g,S,b,u,p]),(0,a.useEffect)((()=>{const e=g.map((e=>({...e,title:u})));e.sort(((e,t)=>new Date(t.date)-new Date(e.date))),f(e)}),[g,u]),(0,y.jsx)(d.Z,{title:u,sx:{boxShadow:x.shadows[6]},children:(0,y.jsx)(o.ZP,{container:!0,spacing:l.d,children:(0,y.jsx)(o.ZP,{item:!0,xs:12,children:(0,y.jsxs)(o.ZP,{container:!0,spacing:l.d,children:[(0,y.jsx)(o.ZP,{item:!0,sm:6,xs:12,md:6,lg:4,children:(0,y.jsx)(c.Z,{isLoading:v,title:"Latest E2E Run",subtitle:"Status on the latest run",result:R,icon:(0,y.jsx)(n.Z,{fontSize:"inherit"}),backgroundColor:"primary"})}),(0,y.jsx)(o.ZP,{item:!0,sm:6,xs:12,md:6,lg:4,children:(0,y.jsx)(c.Z,{isLoading:v,title:"Latest Unit Test Run",subtitle:"Code Coverage",result:(null===(t=p[0])||void 0===t||null===(r=t.result[0])||void 0===r?void 0:r.percentage)||"No Data",icon:(0,y.jsx)(n.Z,{fontSize:"inherit"}),backgroundColor:"secondary"})}),(0,y.jsx)(o.ZP,{item:!0,sm:6,xs:12,md:6,lg:4,children:(0,y.jsx)(c.Z,{isLoading:v,title:"Latest E2E Test Coverage Report",subtitle:"Test Coverage",result:"No Data",icon:(0,y.jsx)(n.Z,{fontSize:"inherit"})})}),(0,y.jsx)(o.ZP,{item:!0,xs:12,sm:12,md:12,lg:12,children:v?(0,y.jsx)("div",{children:"Loading..."}):(0,y.jsx)(C,{data:j})})]})})})})}},3081:function(e,t,r){r.d(t,{E:function(){return i},Q:function(){return o}});var a=r(646);var n=r(9673);const o=e=>async(t,r)=>{const o=r().unitReducer[e];if(!o||0===o.length)try{const r=await async function(e){try{return(await a.Z.get(`/unit/${e}`)).data}catch(t){return generateErrorReturn(t)}}(e);return t({type:n.Mk,payload:{issueType:e,data:r}}),r}catch(i){throw console.error("Error retrieving data:",i),i}return o},i=e=>async(t,r)=>{const o=r().e2eReducer[e];if(!o||0===o.length)try{const r=await async function(e){try{return(await a.Z.get(`/e2e/${e}`)).data}catch(t){return generateErrorReturn(t)}}(e);return t({type:n.So,payload:{issueType:e,data:r}}),r}catch(i){throw console.error("Error retrieving data:",i),i}return o}},2829:function(e,t,r){r.d(t,{KC:function(){return d},Vq:function(){return c},eP:function(){return u},gu:function(){return l},jb:function(){return s}});var a=r(3553);const n=e=>e.jiraReducer,o=e=>e.unitReducer,i=e=>e.e2eReducer,s=(0,a.P1)([n],(e=>e.bugData)),d=(0,a.P1)([n],(e=>e.defectData)),l=(0,a.P1)([n],(e=>e.securityData)),c=e=>(0,a.P1)([o],(t=>t[e])),u=e=>(0,a.P1)([i],(t=>t[e]))}}]);
//# sourceMappingURL=548.5cb12c96.chunk.js.map