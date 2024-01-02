"use strict";(self.webpackChunkqa_dashboard=self.webpackChunkqa_dashboard||[]).push([[593],{2808:function(e,t,n){var r=n(2946);t.Z=r.Z.create({baseURL:"https://qa-dashboard-4gfp.onrender.com",headers:{"Content-type":"application/json"}})},9682:function(e,t,n){n.d(t,{U:function(){return i},W:function(){return s}});var r=n(2808);async function i(e){try{return(await r.Z.get(`/api/project_pull_requests/list?project=${e}`)).data}catch(t){return generateErrorReturn(t)}}async function s(e){try{return(await r.Z.get(`/api/qualitygates/project_status?projectKey=${e}`)).data}catch(t){return generateErrorReturn(t)}}},9584:function(e,t,n){var r=n(7313),i=n(3428),s=n(4641),a=n(1113),c=n(4313),o=n(3405),l=n(9860),d=n(6417);const h={"& .MuiCardHeader-action":{mr:0}},x=(0,r.forwardRef)(((e,t)=>{let{border:n=!0,boxShadow:r,children:x,content:u=!0,contentClass:j="",contentSX:g={},darkTitle:Z,secondary:p,shadow:m,sx:v={},title:P,...f}=e;const b=(0,l.Z)();return(0,d.jsxs)(i.Z,{ref:t,...f,sx:{border:n?"1px solid":"none",borderColor:b.palette.primary[200]+25,":hover":{boxShadow:r?m||"0 2px 14px 0 rgb(32 40 45 / 8%)":"inherit"},...v},children:[P&&(0,d.jsx)(s.Z,{sx:h,title:Z?(0,d.jsx)(a.Z,{variant:"h3",children:P}):P,action:p}),P&&(0,d.jsx)(c.Z,{}),u&&(0,d.jsx)(o.Z,{sx:g,className:j,children:x}),!u&&x]})}));t.Z=x},9068:function(e,t,n){n.d(t,{Z:function(){return m}});var r=n(1806),i=n(8310),s=n(7216),a=n(2600),c=n(8119),o=n(9282),l=n(1113),d=n(7592),h=n(9860),x=n(9584),u=n(3428),j=n(4488),g=n(6417);var Z=()=>(0,g.jsx)(u.Z,{sx:{p:2},children:(0,g.jsx)(i.Z,{sx:{py:0},children:(0,g.jsxs)(s.ZP,{alignItems:"center",disableGutters:!0,sx:{py:0},children:[(0,g.jsx)(a.Z,{children:(0,g.jsx)(j.Z,{variant:"rectangular",width:44,height:44})}),(0,g.jsx)(o.Z,{sx:{py:0},primary:(0,g.jsx)(j.Z,{variant:"rectangular",height:20}),secondary:(0,g.jsx)(j.Z,{variant:"text"})})]})})});const p=(0,d.ZP)(x.Z)((e=>{var t,n;let{theme:r,backgroundColor:i}=e;return{backgroundColor:i&&(null===(t=r.palette[i])||void 0===t?void 0:t.dark),color:i&&(null===(n=r.palette[i])||void 0===n?void 0:n.light),overflow:"hidden",position:"relative","&:after":{content:'""',position:"absolute",width:210,height:210,background:`linear-gradient(210.04deg, ${i?r.palette[i][200]:r.palette.warning.dark} -50.94%, rgba(144, 202, 249, 0) 83.49%)`,borderRadius:"50%",top:-30,right:-180},"&:before":{content:'""',position:"absolute",width:210,height:210,background:`linear-gradient(140.9deg, ${i?r.palette[i][200]:r.palette.warning.dark} -14.02%, rgba(144, 202, 249, 0) 77.58%)`,borderRadius:"50%",top:-160,right:-130}}}));var m=e=>{let{isLoading:t,title:n,subtitle:d,result:x,icon:u,backgroundColor:j}=e;const m=(0,h.Z)();return(0,g.jsx)(g.Fragment,{children:t||String(n).includes("undefined")||String(x).includes("undefined")?(0,g.jsx)(Z,{}):(0,g.jsx)(p,{border:!1,content:!1,backgroundColor:j,sx:{boxShadow:m.shadows[10]},children:(0,g.jsx)(r.Z,{sx:{p:2},children:(0,g.jsx)(i.Z,{sx:{py:0},children:(0,g.jsxs)(s.ZP,{alignItems:"center",disableGutters:!0,sx:{py:0},children:[(0,g.jsx)(a.Z,{children:(0,g.jsx)(c.Z,{variant:"rounded",sx:{...m.typography.commonAvatar,...m.typography.largeAvatar,backgroundColor:j?m.palette[j][800]:m.palette.warning.light,color:j?"#fff":m.palette.warning.dark},children:u})}),(0,g.jsx)(o.Z,{sx:{py:0,mt:.45,mb:.45},primary:(0,g.jsx)(l.Z,{variant:"h4",sx:{color:j&&"#fff"},children:n}),secondary:(0,g.jsx)(l.Z,{variant:"subtitle2",sx:{color:j?"primary.light":m.palette.grey[500],mt:.25},children:d})}),(0,g.jsx)(l.Z,{variant:"h2",sx:{color:((e,t)=>"OK"===t?m.palette.success.main:"ERROR"===t?m.palette.orange.dark:e?"#fff":"black")(j,x)},children:x})]})})})})})}},2593:function(e,t,n){n.r(t),n.d(t,{default:function(){return T}});var r=n(7313),i=n(9527),s=n(3305),a=n(9019),c=n(1834),o=n(5554),l=n(2401),d=n(2808);var h=n(9682),x=n(3405),u=n(1113),j=n(4313),g=n(9860),Z=n(9584),p=n(3428),m=n(4488),v=n(6417);var P=()=>(0,v.jsxs)(p.Z,{children:[(0,v.jsx)(x.Z,{children:(0,v.jsxs)(a.ZP,{container:!0,spacing:l.d,children:[(0,v.jsx)(a.ZP,{item:!0,xs:12,children:(0,v.jsxs)(a.ZP,{container:!0,alignItems:"center",justifyContent:"space-between",spacing:l.d,children:[(0,v.jsx)(a.ZP,{item:!0,xs:!0,zeroMinWidth:!0,children:(0,v.jsx)(m.Z,{variant:"rectangular",height:20})}),(0,v.jsx)(a.ZP,{item:!0,children:(0,v.jsx)(m.Z,{variant:"rectangular",height:20,width:20})})]})}),(0,v.jsx)(a.ZP,{item:!0,xs:12,children:(0,v.jsx)(m.Z,{variant:"rectangular",height:150})}),(0,v.jsx)(a.ZP,{item:!0,xs:12,children:(0,v.jsxs)(a.ZP,{container:!0,spacing:1,children:[(0,v.jsx)(a.ZP,{item:!0,xs:12,children:(0,v.jsxs)(a.ZP,{container:!0,alignItems:"center",spacing:l.d,justifyContent:"space-between",children:[(0,v.jsx)(a.ZP,{item:!0,xs:6,children:(0,v.jsx)(m.Z,{variant:"rectangular",height:20})}),(0,v.jsx)(a.ZP,{item:!0,xs:6,children:(0,v.jsxs)(a.ZP,{container:!0,alignItems:"center",spacing:l.d,justifyContent:"space-between",children:[(0,v.jsx)(a.ZP,{item:!0,xs:!0,zeroMinWidth:!0,children:(0,v.jsx)(m.Z,{variant:"rectangular",height:20})}),(0,v.jsx)(a.ZP,{item:!0,children:(0,v.jsx)(m.Z,{variant:"rectangular",height:16,width:16})})]})})]})}),(0,v.jsx)(a.ZP,{item:!0,xs:6,children:(0,v.jsx)(m.Z,{variant:"rectangular",height:20})})]})}),(0,v.jsx)(a.ZP,{item:!0,xs:12,children:(0,v.jsxs)(a.ZP,{container:!0,spacing:1,children:[(0,v.jsx)(a.ZP,{item:!0,xs:12,children:(0,v.jsxs)(a.ZP,{container:!0,alignItems:"center",spacing:l.d,justifyContent:"space-between",children:[(0,v.jsx)(a.ZP,{item:!0,xs:6,children:(0,v.jsx)(m.Z,{variant:"rectangular",height:20})}),(0,v.jsx)(a.ZP,{item:!0,xs:6,children:(0,v.jsxs)(a.ZP,{container:!0,alignItems:"center",spacing:l.d,justifyContent:"space-between",children:[(0,v.jsx)(a.ZP,{item:!0,xs:!0,zeroMinWidth:!0,children:(0,v.jsx)(m.Z,{variant:"rectangular",height:20})}),(0,v.jsx)(a.ZP,{item:!0,children:(0,v.jsx)(m.Z,{variant:"rectangular",height:16,width:16})})]})})]})}),(0,v.jsx)(a.ZP,{item:!0,xs:6,children:(0,v.jsx)(m.Z,{variant:"rectangular",height:20})})]})}),(0,v.jsx)(a.ZP,{item:!0,xs:12,children:(0,v.jsxs)(a.ZP,{container:!0,spacing:1,children:[(0,v.jsx)(a.ZP,{item:!0,xs:12,children:(0,v.jsxs)(a.ZP,{container:!0,alignItems:"center",spacing:l.d,justifyContent:"space-between",children:[(0,v.jsx)(a.ZP,{item:!0,xs:6,children:(0,v.jsx)(m.Z,{variant:"rectangular",height:20})}),(0,v.jsx)(a.ZP,{item:!0,xs:6,children:(0,v.jsxs)(a.ZP,{container:!0,alignItems:"center",spacing:l.d,justifyContent:"space-between",children:[(0,v.jsx)(a.ZP,{item:!0,xs:!0,zeroMinWidth:!0,children:(0,v.jsx)(m.Z,{variant:"rectangular",height:20})}),(0,v.jsx)(a.ZP,{item:!0,children:(0,v.jsx)(m.Z,{variant:"rectangular",height:16,width:16})})]})})]})}),(0,v.jsx)(a.ZP,{item:!0,xs:6,children:(0,v.jsx)(m.Z,{variant:"rectangular",height:20})})]})}),(0,v.jsx)(a.ZP,{item:!0,xs:12,children:(0,v.jsxs)(a.ZP,{container:!0,spacing:1,children:[(0,v.jsx)(a.ZP,{item:!0,xs:12,children:(0,v.jsxs)(a.ZP,{container:!0,alignItems:"center",spacing:l.d,justifyContent:"space-between",children:[(0,v.jsx)(a.ZP,{item:!0,xs:6,children:(0,v.jsx)(m.Z,{variant:"rectangular",height:20})}),(0,v.jsx)(a.ZP,{item:!0,xs:6,children:(0,v.jsxs)(a.ZP,{container:!0,alignItems:"center",spacing:l.d,justifyContent:"space-between",children:[(0,v.jsx)(a.ZP,{item:!0,xs:!0,zeroMinWidth:!0,children:(0,v.jsx)(m.Z,{variant:"rectangular",height:20})}),(0,v.jsx)(a.ZP,{item:!0,children:(0,v.jsx)(m.Z,{variant:"rectangular",height:16,width:16})})]})})]})}),(0,v.jsx)(a.ZP,{item:!0,xs:6,children:(0,v.jsx)(m.Z,{variant:"rectangular",height:20})})]})}),(0,v.jsx)(a.ZP,{item:!0,xs:12,children:(0,v.jsxs)(a.ZP,{container:!0,spacing:1,children:[(0,v.jsx)(a.ZP,{item:!0,xs:12,children:(0,v.jsxs)(a.ZP,{container:!0,alignItems:"center",spacing:l.d,justifyContent:"space-between",children:[(0,v.jsx)(a.ZP,{item:!0,xs:6,children:(0,v.jsx)(m.Z,{variant:"rectangular",height:20})}),(0,v.jsx)(a.ZP,{item:!0,xs:6,children:(0,v.jsxs)(a.ZP,{container:!0,alignItems:"center",spacing:l.d,justifyContent:"space-between",children:[(0,v.jsx)(a.ZP,{item:!0,xs:!0,zeroMinWidth:!0,children:(0,v.jsx)(m.Z,{variant:"rectangular",height:20})}),(0,v.jsx)(a.ZP,{item:!0,children:(0,v.jsx)(m.Z,{variant:"rectangular",height:16,width:16})})]})})]})}),(0,v.jsx)(a.ZP,{item:!0,xs:6,children:(0,v.jsx)(m.Z,{variant:"rectangular",height:20})})]})})]})}),(0,v.jsx)(x.Z,{sx:{p:1.25,display:"flex",pt:0,justifyContent:"center"},children:(0,v.jsx)(m.Z,{variant:"rectangular",height:25,width:75})})]}),f=n(5368),b=n(178),y=n(8119);var w=e=>{let{title:t,data:n}=e;const r=(0,g.Z)();if(!n)return null;const{status:i,result:s}=n;return(0,v.jsxs)(a.ZP,{container:!0,direction:"column",children:[(0,v.jsx)(a.ZP,{item:!0,children:(0,v.jsxs)(a.ZP,{container:!0,alignItems:"center",justifyContent:"space-between",children:[(0,v.jsx)(a.ZP,{item:!0,children:(0,v.jsx)(u.Z,{variant:"subtitle1",color:"inherit",children:t})}),(0,v.jsx)(a.ZP,{item:!0,children:(0,v.jsxs)(a.ZP,{container:!0,alignItems:"center",justifyContent:"space-between",children:[(0,v.jsx)(a.ZP,{item:!0,children:(0,v.jsx)(u.Z,{variant:"subtitle1",color:"inherit",children:i.toUpperCase()})}),(0,v.jsx)(a.ZP,{item:!0,children:(0,v.jsx)(y.Z,{variant:"rounded",sx:{width:24,height:24,borderRadius:"5px",backgroundColor:"pass"===i?r.palette.success.light:r.palette.orange.light,color:"pass"===i?r.palette.success.dark:r.palette.orange.dark,ml:2},children:"pass"===i?(0,v.jsx)(b.Z,{fontSize:"small",color:"inherit"}):(0,v.jsx)(f.Z,{fontSize:"small",color:"inherit"})})})]})})]})}),(0,v.jsx)(a.ZP,{item:!0,children:(0,v.jsx)(u.Z,{variant:"subtitle2",sx:{color:"pass"===i?"success.dark":r.palette.orange.dark},children:s})})]})};var C=e=>{let{isLoading:t}=e;const[n,i]=(0,r.useState)([]),[s,c]=(0,r.useState)(!0),o=(0,g.Z)();return(0,r.useEffect)((()=>{(async()=>{try{const e=await async function(){try{return(await d.Z.get("/e2e/status")).data}catch(e){return generateErrorReturn(e)}}();i(e),c(!1)}catch(e){console.error("Error fetching data:",e)}finally{c(!1)}})()}),[]),(0,v.jsx)(v.Fragment,{children:t||s||void 0===n.identity_service?(0,v.jsx)(P,{}):(0,v.jsx)(Z.Z,{content:!1,sx:{boxShadow:o.shadows[10]},children:(0,v.jsx)(x.Z,{children:(0,v.jsxs)(a.ZP,{container:!0,spacing:l.d,children:[(0,v.jsx)(a.ZP,{item:!0,xs:12,children:(0,v.jsx)(a.ZP,{container:!0,alignContent:"center",justifyContent:"space-between",children:(0,v.jsx)(a.ZP,{item:!0,children:(0,v.jsx)(u.Z,{variant:"h4",children:"E2E Test Status"})})})}),(0,v.jsxs)(a.ZP,{item:!0,xs:12,children:[null!==n.identity_service&&(0,v.jsx)(w,{title:"Identity Service",data:n.identity_service}),(0,v.jsx)(j.Z,{sx:{my:1.5}}),null!==n.disaster_recovery&&(0,v.jsx)(w,{title:"Disaster Recovery",data:n.disaster_recovery}),(0,v.jsx)(j.Z,{sx:{my:1.5}}),null!==n.ledger_support_tool&&(0,v.jsx)(w,{title:"Ledger Support Tool",data:n.ledger_support_tool}),(0,v.jsx)(j.Z,{sx:{my:1.5}}),null!==n.recovery_as_a_service&&(0,v.jsx)(w,{title:"Recovery As A Service",data:n.recovery_as_a_service}),(0,v.jsx)(j.Z,{sx:{my:1.5}}),null!==n.transaction_protection&&(0,v.jsx)(w,{title:"Transaction Protection",data:n.transaction_protection}),(0,v.jsx)(j.Z,{sx:{my:1.5}})]})]})})})})},k=n(1806),S=n(7592);var _=()=>(0,v.jsx)(p.Z,{children:(0,v.jsx)(x.Z,{children:(0,v.jsxs)(a.ZP,{container:!0,direction:"column",children:[(0,v.jsx)(a.ZP,{item:!0,children:(0,v.jsx)(a.ZP,{container:!0,justifyContent:"space-between",children:(0,v.jsx)(a.ZP,{item:!0,children:(0,v.jsx)(m.Z,{variant:"rectangular",width:44,height:44})})})}),(0,v.jsx)(a.ZP,{item:!0,children:(0,v.jsx)(m.Z,{variant:"rectangular",sx:{my:2},height:40})}),(0,v.jsx)(a.ZP,{item:!0,children:(0,v.jsx)(m.Z,{variant:"rectangular",height:30})})]})})});const I=(0,S.ZP)(Z.Z)((e=>{let{theme:t,backgroundColor:n}=e;return{backgroundColor:t.palette[n].dark,color:"#fff",overflow:"hidden",position:"relative","&:after":{content:'""',position:"absolute",width:210,height:210,background:t.palette[n][800],borderRadius:"50%",top:-85,right:-95,[t.breakpoints.down("sm")]:{top:-105,right:-140}},"&:before":{content:'""',position:"absolute",width:210,height:210,background:t.palette[n][800],borderRadius:"50%",top:-125,right:-15,opacity:.5,[t.breakpoints.down("sm")]:{top:-155,right:-70}}}}));var R=e=>{let{isLoading:t,title:n,subtitle:r,icon:i,backgroundColor:s}=e;const c=(0,g.Z)(),o=i;return(0,v.jsx)(v.Fragment,{children:t||String(n).includes("undefined")?(0,v.jsx)(_,{}):(0,v.jsx)(I,{border:!1,content:!1,backgroundColor:s,sx:{boxShadow:c.shadows[10]},children:(0,v.jsx)(k.Z,{sx:{p:2.25},children:(0,v.jsxs)(a.ZP,{container:!0,direction:"column",children:[(0,v.jsx)(a.ZP,{item:!0,children:(0,v.jsx)(a.ZP,{container:!0,justifyContent:"space-between",children:(0,v.jsx)(a.ZP,{item:!0,children:(0,v.jsx)(y.Z,{variant:"rounded",sx:{...c.typography.commonAvatar,...c.typography.largeAvatar,backgroundColor:c.palette[s][800],mt:1},children:"string"===typeof o?(0,v.jsx)("img",{src:i,alt:"Notification"}):(0,v.jsx)(o,{stroke:1.5,size:"1.3rem",color:"#ffffff"})})})})}),(0,v.jsx)(a.ZP,{item:!0,children:(0,v.jsx)(a.ZP,{container:!0,alignItems:"center",children:(0,v.jsx)(a.ZP,{item:!0,children:(0,v.jsx)(u.Z,{sx:{fontSize:"2.125rem",fontWeight:500,mr:1,mt:1.75,mb:.75},children:n})})})}),(0,v.jsx)(a.ZP,{item:!0,sx:{mb:1.25},children:(0,v.jsx)(u.Z,{sx:{fontSize:"1rem",fontWeight:500,color:c.palette[s][200]},children:r})})]})})})})},z=n(9068),E=n(8031),L=n(6476);var T=()=>{var e,t;const n=(0,o.I0)(),x=(0,o.v9)(L.jb),u=(0,o.v9)(L.KC),j=(0,o.v9)(L.gu),[g,Z]=(0,r.useState)(x),[p,m]=(0,r.useState)(u),[P,f]=(0,r.useState)(j),[b,y]=(0,r.useState)([]),[w,k]=(0,r.useState)([]),[S,_]=(0,r.useState)([]),[I,T]=(0,r.useState)(!0);return(0,r.useEffect)((()=>{T(!1);(async()=>{try{const e=await async function(){try{return(await d.Z.get("/e2e/totalTests")).data}catch(e){return generateErrorReturn(e)}}();x&&0!==x.length||Z(await n((0,E.V)("bug"))),u&&0!==u.length||m(await n((0,E.V)("customer defect"))),j&&0!==j.length||f(await n((0,E.V)("security issue")));const t=await(0,h.W)("coincover_coincover-b2b2c"),r=await(0,h.W)("coincover_coincover-txm");y(e),k(t),_(r),T(!1)}catch(e){console.error("Error fetching data:",e)}finally{T(!1)}})()}),[n]),(0,v.jsx)(a.ZP,{container:!0,spacing:l.d,children:(0,v.jsx)(a.ZP,{item:!0,xs:12,children:(0,v.jsxs)(a.ZP,{container:!0,children:[(0,v.jsxs)(a.ZP,{item:!0,lg:4,md:6,sm:12,xs:12,children:[(0,v.jsx)(a.ZP,{sx:{padding:"8px"},children:(0,v.jsx)(R,{isLoading:I,title:b.totalTests,subtitle:"Total E2E Tests",icon:c.PMF,backgroundColor:"primary"})}),(0,v.jsx)(a.ZP,{sx:{padding:"8px"},children:(0,v.jsx)(R,{isLoading:I,title:`${null===g||void 0===g?void 0:g.total} Bugs`,subtitle:"Total Number of open Defects",icon:c.eyZ,backgroundColor:"secondary"})})]}),(0,v.jsxs)(a.ZP,{item:!0,lg:4,md:6,sm:12,xs:12,children:[(0,v.jsx)(a.ZP,{sx:{padding:"8px"},children:(0,v.jsx)(R,{isLoading:I,title:`${null===p||void 0===p?void 0:p.total} Defects`,subtitle:"Total Number of open Defect",icon:c.FtV,backgroundColor:"secondary"})}),(0,v.jsx)(a.ZP,{sx:{padding:"8px"},children:(0,v.jsx)(R,{isLoading:I,title:`${null===P||void 0===P?void 0:P.total} Security Issue`,subtitle:"Total Number of open Security Issues",icon:c.qfe,backgroundColor:"primary"})})]}),(0,v.jsxs)(a.ZP,{item:!0,lg:4,md:6,sm:12,xs:12,children:[(0,v.jsx)(a.ZP,{sx:{padding:"8px"},children:(0,v.jsx)(z.Z,{isLoading:I,title:"coincover-b2b2c",subtitle:"SonarCloud",result:null===(e=w.projectStatus)||void 0===e?void 0:e.status,icon:(0,v.jsx)(i.Z,{fontSize:"inherit"})})}),(0,v.jsx)(a.ZP,{sx:{padding:"8px"},children:(0,v.jsx)(z.Z,{isLoading:I,title:"coincover-txm",subtitle:"SonarCloud",result:null===(t=S.projectStatus)||void 0===t?void 0:t.status,icon:(0,v.jsx)(s.Z,{fontSize:"inherit"})})}),(0,v.jsx)(a.ZP,{sx:{padding:"8px"},children:(0,v.jsx)(C,{isLoading:I})})]})]})})})}},8031:function(e,t,n){n.d(t,{V:function(){return s}});var r=n(2808);var i=n(6202);const s=e=>async(t,n)=>{const s=n().jiraReducer[e];if(!s||0===s.length)try{const n=await async function(e){try{return(await r.Z.get(`/rest/api/2/search?jql=project=PRODENG AND type="${e}" AND status not in (Done)`)).data}catch(t){throw console.error("Error fetching Jira data:",t),t}}(e);return t({type:i.dN,payload:{issueType:e,data:n}}),n}catch(a){throw console.error("Error retrieving Jira data:",a),a}return s}},6476:function(e,t,n){n.d(t,{KC:function(){return a},gu:function(){return c},jb:function(){return s}});var r=n(2861);const i=e=>e.jiraReducer,s=(0,r.P1)([i],(e=>e.bugData)),a=(0,r.P1)([i],(e=>e.defectData)),c=(0,r.P1)([i],(e=>e.securityData))},5368:function(e,t,n){var r=n(4836);t.Z=void 0;var i=r(n(5045)),s=n(6417),a=(0,i.default)((0,s.jsx)("path",{d:"M15 3H6c-.83 0-1.54.5-1.84 1.22l-3.02 7.05c-.09.23-.14.47-.14.73v2c0 1.1.9 2 2 2h6.31l-.95 4.57-.03.32c0 .41.17.79.44 1.06L9.83 23l6.59-6.59c.36-.36.58-.86.58-1.41V5c0-1.1-.9-2-2-2zm4 0v12h4V3h-4z"}),"ThumbDown");t.Z=a},178:function(e,t,n){var r=n(4836);t.Z=void 0;var i=r(n(5045)),s=n(6417),a=(0,i.default)((0,s.jsx)("path",{d:"M2 20h2c.55 0 1-.45 1-1v-9c0-.55-.45-1-1-1H2v11zm19.83-7.12c.11-.25.17-.52.17-.8V11c0-1.1-.9-2-2-2h-5.5l.92-4.65c.05-.22.02-.46-.08-.66-.23-.45-.52-.86-.88-1.22L14 2 7.59 8.41C7.21 8.79 7 9.3 7 9.83v7.84C7 18.95 8.05 20 9.34 20h8.11c.7 0 1.36-.37 1.72-.97l2.66-6.15z"}),"ThumbUpAlt");t.Z=a}}]);