"use strict";(self.webpackChunkqa_dashboard=self.webpackChunkqa_dashboard||[]).push([[242],{2808:function(e,t,n){var r=n(2946);t.Z=r.Z.create({baseURL:"https://qa-dashboard-4gfp.onrender.com",headers:{"Content-type":"application/json"}})},9682:function(e,t,n){n.d(t,{U:function(){return i},W:function(){return s}});var r=n(2808);async function i(e){try{return(await r.Z.get(`/api/project_pull_requests/list?project=${e}`)).data}catch(t){return generateErrorReturn(t)}}async function s(e){try{return(await r.Z.get(`/api/qualitygates/project_status?projectKey=${e}`)).data}catch(t){return generateErrorReturn(t)}}},9584:function(e,t,n){var r=n(7313),i=n(3428),s=n(4641),a=n(1113),c=n(4313),o=n(3405),l=n(9860),d=n(6417);const x={"& .MuiCardHeader-action":{mr:0}},h=(0,r.forwardRef)(((e,t)=>{let{border:n=!0,boxShadow:r,children:h,content:j=!0,contentClass:u="",contentSX:g={},darkTitle:Z,secondary:p,shadow:m,sx:v={},title:P,...f}=e;const b=(0,l.Z)();return(0,d.jsxs)(i.Z,{ref:t,...f,sx:{border:n?"1px solid":"none",borderColor:b.palette.primary[200]+25,":hover":{boxShadow:r?m||"0 2px 14px 0 rgb(32 40 45 / 8%)":"inherit"},...v},children:[P&&(0,d.jsx)(s.Z,{sx:x,title:Z?(0,d.jsx)(a.Z,{variant:"h3",children:P}):P,action:p}),P&&(0,d.jsx)(c.Z,{}),j&&(0,d.jsx)(o.Z,{sx:g,className:u,children:h}),!j&&h]})}));t.Z=h},9068:function(e,t,n){n.d(t,{Z:function(){return m}});var r=n(1806),i=n(8310),s=n(7216),a=n(2600),c=n(8119),o=n(9282),l=n(1113),d=n(7592),x=n(9860),h=n(9584),j=n(3428),u=n(4488),g=n(6417);var Z=()=>(0,g.jsx)(j.Z,{sx:{p:2},children:(0,g.jsx)(i.Z,{sx:{py:0},children:(0,g.jsxs)(s.ZP,{alignItems:"center",disableGutters:!0,sx:{py:0},children:[(0,g.jsx)(a.Z,{children:(0,g.jsx)(u.Z,{variant:"rectangular",width:44,height:44})}),(0,g.jsx)(o.Z,{sx:{py:0},primary:(0,g.jsx)(u.Z,{variant:"rectangular",height:20}),secondary:(0,g.jsx)(u.Z,{variant:"text"})})]})})});const p=(0,d.ZP)(h.Z)((e=>{var t,n;let{theme:r,backgroundColor:i}=e;return{backgroundColor:i&&(null===(t=r.palette[i])||void 0===t?void 0:t.dark),color:i&&(null===(n=r.palette[i])||void 0===n?void 0:n.light),overflow:"hidden",position:"relative","&:after":{content:'""',position:"absolute",width:210,height:210,background:`linear-gradient(210.04deg, ${i?r.palette[i][200]:r.palette.warning.dark} -50.94%, rgba(144, 202, 249, 0) 83.49%)`,borderRadius:"50%",top:-30,right:-180},"&:before":{content:'""',position:"absolute",width:210,height:210,background:`linear-gradient(140.9deg, ${i?r.palette[i][200]:r.palette.warning.dark} -14.02%, rgba(144, 202, 249, 0) 77.58%)`,borderRadius:"50%",top:-160,right:-130}}}));var m=e=>{let{isLoading:t,title:n,subtitle:d,result:h,icon:j,backgroundColor:u}=e;const m=(0,x.Z)();return(0,g.jsx)(g.Fragment,{children:t||String(n).includes("undefined")||String(h).includes("undefined")?(0,g.jsx)(Z,{}):(0,g.jsx)(p,{border:!1,content:!1,backgroundColor:u,sx:{boxShadow:m.shadows[10]},children:(0,g.jsx)(r.Z,{sx:{p:2},children:(0,g.jsx)(i.Z,{sx:{py:0},children:(0,g.jsxs)(s.ZP,{alignItems:"center",disableGutters:!0,sx:{py:0},children:[(0,g.jsx)(a.Z,{children:(0,g.jsx)(c.Z,{variant:"rounded",sx:{...m.typography.commonAvatar,...m.typography.largeAvatar,backgroundColor:u?m.palette[u][800]:m.palette.warning.light,color:u?"#fff":m.palette.warning.dark},children:j})}),(0,g.jsx)(o.Z,{sx:{py:0,mt:.45,mb:.45},primary:(0,g.jsx)(l.Z,{variant:"h4",sx:{color:u&&"#fff"},children:n}),secondary:(0,g.jsx)(l.Z,{variant:"subtitle2",sx:{color:u?"primary.light":m.palette.grey[500],mt:.25},children:d})}),(0,g.jsx)(l.Z,{variant:"h2",sx:{color:((e,t)=>"OK"===t?m.palette.success.main:"ERROR"===t?m.palette.orange.dark:e?"#fff":"black")(u,h)},children:h})]})})})})})}},9242:function(e,t,n){n.r(t),n.d(t,{default:function(){return $}});var r=n(7313),i=n(9527),s=n(3305),a=n(9019),c=n(1834),o=n(5554),l=n(210),d=n(9860),x=n(3428),h=n(4641),j=n(3405),u=n(3984),g=n(1806),Z=n(1113),p=n(2493),m=n(4488),v=n(2401),P=n(6417);var f=()=>(0,P.jsx)(x.Z,{children:(0,P.jsx)(j.Z,{children:(0,P.jsxs)(a.ZP,{container:!0,spacing:v.d,children:[(0,P.jsx)(a.ZP,{item:!0,xs:12,sx:{textAlign:"-webkit-center"},children:(0,P.jsx)(m.Z,{variant:"circular",height:250,width:250})}),(0,P.jsx)(a.ZP,{item:!0,xs:12,children:(0,P.jsxs)(a.ZP,{container:!0,alignItems:"center",justifyContent:"center",spacing:v.d,children:[(0,P.jsxs)(a.ZP,{item:!0,children:[(0,P.jsx)(m.Z,{variant:"text",width:50}),(0,P.jsx)(m.Z,{variant:"rectangular",height:50,width:50})]}),(0,P.jsxs)(a.ZP,{item:!0,children:[(0,P.jsx)(m.Z,{variant:"text",width:50}),(0,P.jsx)(m.Z,{variant:"rectangular",height:50,width:50})]}),(0,P.jsxs)(a.ZP,{item:!0,children:[(0,P.jsx)(m.Z,{variant:"text",width:50}),(0,P.jsx)(m.Z,{variant:"rectangular",height:50,width:50})]})]})})]})})});const b={Bugs:(0,P.jsx)(l.Z,{children:(0,P.jsx)(c.eyZ,{})}),Defects:(0,P.jsx)(l.Z,{children:(0,P.jsx)(c.FtV,{})}),Security:(0,P.jsx)(l.Z,{children:(0,P.jsx)(c.qfe,{})})},y=e=>{const{chartSeries:t,labels:n,sx:r}=e,i=(0,d.Z)(),s={color:[i.palette.primary.main,i.palette.secondary.main,i.palette.warning.main],tooltip:{trigger:"item"},series:[{name:"Jira Issue Type",type:"pie",radius:["40%","70%"],avoidLabelOverlap:!1,itemStyle:{borderRadius:10,borderColor:"#fff",borderWidth:2},emphasis:{label:{show:!0,fontSize:20,fontWeight:"bold"}},labelLine:{show:!1},data:t}]};return(0,P.jsx)(P.Fragment,{children:t&&t.every((e=>void 0===(null===e||void 0===e?void 0:e.value)))?(0,P.jsx)(f,{}):(0,P.jsxs)(x.Z,{sx:{...r,height:"100%",boxShadow:i.shadows[10]},children:[(0,P.jsx)(h.Z,{title:"Jira Ticket Summary",sx:{padding:"14px",alignContent:"center"}}),(0,P.jsxs)(j.Z,{sx:{padding:"10px"},children:[(0,P.jsx)(p.Z,{option:s}),(0,P.jsx)(u.Z,{alignItems:"center",direction:"row",justifyContent:"center",spacing:4,children:t.map(((e,t)=>{console.log(e);const r=n[t];return(0,P.jsxs)(g.Z,{sx:{display:"flex",flexDirection:"column",alignItems:"center"},children:[b[r],(0,P.jsx)(Z.Z,{sx:{my:1},variant:"h4",children:r}),(0,P.jsx)(Z.Z,{color:"text.secondary",variant:"subtitle",children:e.value})]},r)}))})]})]})})};var w=n(2808);var C=n(9682),S=n(4313),k=n(9584);var I=()=>(0,P.jsxs)(x.Z,{children:[(0,P.jsx)(j.Z,{children:(0,P.jsxs)(a.ZP,{container:!0,spacing:v.d,children:[(0,P.jsx)(a.ZP,{item:!0,xs:12,children:(0,P.jsxs)(a.ZP,{container:!0,alignItems:"center",justifyContent:"space-between",spacing:v.d,children:[(0,P.jsx)(a.ZP,{item:!0,xs:!0,zeroMinWidth:!0,children:(0,P.jsx)(m.Z,{variant:"rectangular",height:20})}),(0,P.jsx)(a.ZP,{item:!0,children:(0,P.jsx)(m.Z,{variant:"rectangular",height:20,width:20})})]})}),(0,P.jsx)(a.ZP,{item:!0,xs:12,children:(0,P.jsx)(m.Z,{variant:"rectangular",height:150})}),(0,P.jsx)(a.ZP,{item:!0,xs:12,children:(0,P.jsxs)(a.ZP,{container:!0,spacing:1,children:[(0,P.jsx)(a.ZP,{item:!0,xs:12,children:(0,P.jsxs)(a.ZP,{container:!0,alignItems:"center",spacing:v.d,justifyContent:"space-between",children:[(0,P.jsx)(a.ZP,{item:!0,xs:6,children:(0,P.jsx)(m.Z,{variant:"rectangular",height:20})}),(0,P.jsx)(a.ZP,{item:!0,xs:6,children:(0,P.jsxs)(a.ZP,{container:!0,alignItems:"center",spacing:v.d,justifyContent:"space-between",children:[(0,P.jsx)(a.ZP,{item:!0,xs:!0,zeroMinWidth:!0,children:(0,P.jsx)(m.Z,{variant:"rectangular",height:20})}),(0,P.jsx)(a.ZP,{item:!0,children:(0,P.jsx)(m.Z,{variant:"rectangular",height:16,width:16})})]})})]})}),(0,P.jsx)(a.ZP,{item:!0,xs:6,children:(0,P.jsx)(m.Z,{variant:"rectangular",height:20})})]})}),(0,P.jsx)(a.ZP,{item:!0,xs:12,children:(0,P.jsxs)(a.ZP,{container:!0,spacing:1,children:[(0,P.jsx)(a.ZP,{item:!0,xs:12,children:(0,P.jsxs)(a.ZP,{container:!0,alignItems:"center",spacing:v.d,justifyContent:"space-between",children:[(0,P.jsx)(a.ZP,{item:!0,xs:6,children:(0,P.jsx)(m.Z,{variant:"rectangular",height:20})}),(0,P.jsx)(a.ZP,{item:!0,xs:6,children:(0,P.jsxs)(a.ZP,{container:!0,alignItems:"center",spacing:v.d,justifyContent:"space-between",children:[(0,P.jsx)(a.ZP,{item:!0,xs:!0,zeroMinWidth:!0,children:(0,P.jsx)(m.Z,{variant:"rectangular",height:20})}),(0,P.jsx)(a.ZP,{item:!0,children:(0,P.jsx)(m.Z,{variant:"rectangular",height:16,width:16})})]})})]})}),(0,P.jsx)(a.ZP,{item:!0,xs:6,children:(0,P.jsx)(m.Z,{variant:"rectangular",height:20})})]})}),(0,P.jsx)(a.ZP,{item:!0,xs:12,children:(0,P.jsxs)(a.ZP,{container:!0,spacing:1,children:[(0,P.jsx)(a.ZP,{item:!0,xs:12,children:(0,P.jsxs)(a.ZP,{container:!0,alignItems:"center",spacing:v.d,justifyContent:"space-between",children:[(0,P.jsx)(a.ZP,{item:!0,xs:6,children:(0,P.jsx)(m.Z,{variant:"rectangular",height:20})}),(0,P.jsx)(a.ZP,{item:!0,xs:6,children:(0,P.jsxs)(a.ZP,{container:!0,alignItems:"center",spacing:v.d,justifyContent:"space-between",children:[(0,P.jsx)(a.ZP,{item:!0,xs:!0,zeroMinWidth:!0,children:(0,P.jsx)(m.Z,{variant:"rectangular",height:20})}),(0,P.jsx)(a.ZP,{item:!0,children:(0,P.jsx)(m.Z,{variant:"rectangular",height:16,width:16})})]})})]})}),(0,P.jsx)(a.ZP,{item:!0,xs:6,children:(0,P.jsx)(m.Z,{variant:"rectangular",height:20})})]})}),(0,P.jsx)(a.ZP,{item:!0,xs:12,children:(0,P.jsxs)(a.ZP,{container:!0,spacing:1,children:[(0,P.jsx)(a.ZP,{item:!0,xs:12,children:(0,P.jsxs)(a.ZP,{container:!0,alignItems:"center",spacing:v.d,justifyContent:"space-between",children:[(0,P.jsx)(a.ZP,{item:!0,xs:6,children:(0,P.jsx)(m.Z,{variant:"rectangular",height:20})}),(0,P.jsx)(a.ZP,{item:!0,xs:6,children:(0,P.jsxs)(a.ZP,{container:!0,alignItems:"center",spacing:v.d,justifyContent:"space-between",children:[(0,P.jsx)(a.ZP,{item:!0,xs:!0,zeroMinWidth:!0,children:(0,P.jsx)(m.Z,{variant:"rectangular",height:20})}),(0,P.jsx)(a.ZP,{item:!0,children:(0,P.jsx)(m.Z,{variant:"rectangular",height:16,width:16})})]})})]})}),(0,P.jsx)(a.ZP,{item:!0,xs:6,children:(0,P.jsx)(m.Z,{variant:"rectangular",height:20})})]})}),(0,P.jsx)(a.ZP,{item:!0,xs:12,children:(0,P.jsxs)(a.ZP,{container:!0,spacing:1,children:[(0,P.jsx)(a.ZP,{item:!0,xs:12,children:(0,P.jsxs)(a.ZP,{container:!0,alignItems:"center",spacing:v.d,justifyContent:"space-between",children:[(0,P.jsx)(a.ZP,{item:!0,xs:6,children:(0,P.jsx)(m.Z,{variant:"rectangular",height:20})}),(0,P.jsx)(a.ZP,{item:!0,xs:6,children:(0,P.jsxs)(a.ZP,{container:!0,alignItems:"center",spacing:v.d,justifyContent:"space-between",children:[(0,P.jsx)(a.ZP,{item:!0,xs:!0,zeroMinWidth:!0,children:(0,P.jsx)(m.Z,{variant:"rectangular",height:20})}),(0,P.jsx)(a.ZP,{item:!0,children:(0,P.jsx)(m.Z,{variant:"rectangular",height:16,width:16})})]})})]})}),(0,P.jsx)(a.ZP,{item:!0,xs:6,children:(0,P.jsx)(m.Z,{variant:"rectangular",height:20})})]})})]})}),(0,P.jsx)(j.Z,{sx:{p:1.25,display:"flex",pt:0,justifyContent:"center"},children:(0,P.jsx)(m.Z,{variant:"rectangular",height:25,width:75})})]}),_=n(5368),R=n(178),E=n(8119);var z=e=>{let{title:t,data:n}=e;const r=(0,d.Z)();if(!n)return null;const{status:i,result:s}=n;return(0,P.jsxs)(a.ZP,{container:!0,direction:"column",children:[(0,P.jsx)(a.ZP,{item:!0,children:(0,P.jsxs)(a.ZP,{container:!0,alignItems:"center",justifyContent:"space-between",children:[(0,P.jsx)(a.ZP,{item:!0,children:(0,P.jsx)(Z.Z,{variant:"subtitle1",color:"inherit",children:t})}),(0,P.jsx)(a.ZP,{item:!0,children:(0,P.jsxs)(a.ZP,{container:!0,alignItems:"center",justifyContent:"space-between",children:[(0,P.jsx)(a.ZP,{item:!0,children:(0,P.jsx)(Z.Z,{variant:"subtitle1",color:"inherit",children:i.toUpperCase()})}),(0,P.jsx)(a.ZP,{item:!0,children:(0,P.jsx)(E.Z,{variant:"rounded",sx:{width:24,height:24,borderRadius:"5px",backgroundColor:"pass"===i?r.palette.success.light:r.palette.orange.light,color:"pass"===i?r.palette.success.dark:r.palette.orange.dark,ml:2},children:"pass"===i?(0,P.jsx)(R.Z,{fontSize:"small",color:"inherit"}):(0,P.jsx)(_.Z,{fontSize:"small",color:"inherit"})})})]})})]})}),(0,P.jsx)(a.ZP,{item:!0,children:(0,P.jsx)(Z.Z,{variant:"subtitle2",sx:{color:"pass"===i?"success.dark":r.palette.orange.dark},children:s})})]})};var D=e=>{let{isLoading:t}=e;const[n,i]=(0,r.useState)([]),[s,c]=(0,r.useState)(!0),o=(0,d.Z)();return(0,r.useEffect)((()=>{(async()=>{try{const e=await async function(){try{return(await w.Z.get("/e2e/status")).data}catch(e){return generateErrorReturn(e)}}();i(e),c(!1)}catch(e){console.error("Error fetching data:",e)}finally{c(!1)}})()}),[]),(0,P.jsx)(P.Fragment,{children:t||s||void 0===n.identity_service?(0,P.jsx)(I,{}):(0,P.jsx)(k.Z,{content:!1,sx:{boxShadow:o.shadows[10]},children:(0,P.jsx)(j.Z,{children:(0,P.jsxs)(a.ZP,{container:!0,spacing:v.d,children:[(0,P.jsx)(a.ZP,{item:!0,xs:12,children:(0,P.jsx)(a.ZP,{container:!0,alignContent:"center",justifyContent:"space-between",children:(0,P.jsx)(a.ZP,{item:!0,children:(0,P.jsx)(Z.Z,{variant:"h4",children:"E2E Test Status"})})})}),(0,P.jsxs)(a.ZP,{item:!0,xs:12,children:[null!==n.identity_service&&(0,P.jsx)(z,{title:"Identity Service",data:n.identity_service}),(0,P.jsx)(S.Z,{sx:{my:1.5}}),null!==n.disaster_recovery&&(0,P.jsx)(z,{title:"Disaster Recovery",data:n.disaster_recovery}),(0,P.jsx)(S.Z,{sx:{my:1.5}}),null!==n.ledger_support_tool&&(0,P.jsx)(z,{title:"Ledger Support Tool",data:n.ledger_support_tool}),(0,P.jsx)(S.Z,{sx:{my:1.5}}),null!==n.recovery_as_a_service&&(0,P.jsx)(z,{title:"Recovery As A Service",data:n.recovery_as_a_service}),(0,P.jsx)(S.Z,{sx:{my:1.5}}),null!==n.transaction_protection&&(0,P.jsx)(z,{title:"Transaction Protection",data:n.transaction_protection}),(0,P.jsx)(S.Z,{sx:{my:1.5}})]})]})})})})},L=n(7592);var T=()=>(0,P.jsx)(x.Z,{children:(0,P.jsx)(j.Z,{children:(0,P.jsxs)(a.ZP,{container:!0,direction:"column",children:[(0,P.jsx)(a.ZP,{item:!0,children:(0,P.jsx)(a.ZP,{container:!0,justifyContent:"space-between",children:(0,P.jsx)(a.ZP,{item:!0,children:(0,P.jsx)(m.Z,{variant:"rectangular",width:44,height:44})})})}),(0,P.jsx)(a.ZP,{item:!0,children:(0,P.jsx)(m.Z,{variant:"rectangular",sx:{my:2},height:40})}),(0,P.jsx)(a.ZP,{item:!0,children:(0,P.jsx)(m.Z,{variant:"rectangular",height:30})})]})})});const W=(0,L.ZP)(k.Z)((e=>{let{theme:t,backgroundColor:n}=e;return{backgroundColor:t.palette[n].dark,color:"#fff",overflow:"hidden",position:"relative","&:after":{content:'""',position:"absolute",width:210,height:210,background:t.palette[n][800],borderRadius:"50%",top:-85,right:-95,[t.breakpoints.down("sm")]:{top:-105,right:-140}},"&:before":{content:'""',position:"absolute",width:210,height:210,background:t.palette[n][800],borderRadius:"50%",top:-125,right:-15,opacity:.5,[t.breakpoints.down("sm")]:{top:-155,right:-70}}}}));var q=e=>{let{isLoading:t,title:n,subtitle:r,icon:i,backgroundColor:s}=e;const c=(0,d.Z)(),o=i;return(0,P.jsx)(P.Fragment,{children:t||String(n).includes("undefined")?(0,P.jsx)(T,{}):(0,P.jsx)(W,{border:!1,content:!1,backgroundColor:s,sx:{boxShadow:c.shadows[10]},children:(0,P.jsx)(g.Z,{sx:{p:2.25},children:(0,P.jsxs)(a.ZP,{container:!0,direction:"column",children:[(0,P.jsx)(a.ZP,{item:!0,children:(0,P.jsx)(a.ZP,{container:!0,justifyContent:"space-between",children:(0,P.jsx)(a.ZP,{item:!0,children:(0,P.jsx)(E.Z,{variant:"rounded",sx:{...c.typography.commonAvatar,...c.typography.largeAvatar,backgroundColor:c.palette[s][800],mt:1},children:"string"===typeof o?(0,P.jsx)("img",{src:i,alt:"Notification"}):(0,P.jsx)(o,{stroke:1.5,size:"1.3rem",color:"#ffffff"})})})})}),(0,P.jsx)(a.ZP,{item:!0,children:(0,P.jsx)(a.ZP,{container:!0,alignItems:"center",children:(0,P.jsx)(a.ZP,{item:!0,children:(0,P.jsx)(Z.Z,{sx:{fontSize:"2.125rem",fontWeight:500,mr:1,mt:1.75,mb:.75},children:n})})})}),(0,P.jsx)(a.ZP,{item:!0,sx:{mb:1.25},children:(0,P.jsx)(Z.Z,{sx:{fontSize:"1rem",fontWeight:500,color:c.palette[s][200]},children:r})})]})})})})},A=n(9068),N=n(8031),M=n(6476);var $=()=>{var e,t;const n=(0,o.I0)(),l=(0,o.v9)(M.jb),d=(0,o.v9)(M.KC),x=(0,o.v9)(M.gu),[h,j]=(0,r.useState)(l),[u,g]=(0,r.useState)(d),[Z,p]=(0,r.useState)(x),[m,f]=(0,r.useState)([]),[b,S]=(0,r.useState)([]),[k,I]=(0,r.useState)([]),[_,R]=(0,r.useState)(!0);return(0,r.useEffect)((()=>{R(!1);(async()=>{try{const e=await async function(){try{return(await w.Z.get("/e2e/totalTests")).data}catch(e){return generateErrorReturn(e)}}();l&&0!==l.length||j(await n((0,N.V)("bug"))),d&&0!==d.length||g(await n((0,N.V)("customer defect"))),x&&0!==x.length||p(await n((0,N.V)("security issue")));const t=await(0,C.W)("coincover_coincover-b2b2c"),r=await(0,C.W)("coincover_coincover-txm");f(e),S(t),I(r),R(!1)}catch(e){console.error("Error fetching data:",e)}finally{R(!1)}})()}),[n,l,d,x]),(0,P.jsx)(a.ZP,{container:!0,spacing:v.d,children:(0,P.jsx)(a.ZP,{item:!0,xs:12,children:(0,P.jsxs)(a.ZP,{container:!0,children:[(0,P.jsxs)(a.ZP,{item:!0,lg:4,md:6,sm:12,xs:12,children:[(0,P.jsx)(a.ZP,{sx:{padding:"8px"},children:(0,P.jsx)(q,{isLoading:_,title:m.totalTests,subtitle:"Total E2E Tests",icon:c.PMF,backgroundColor:"primary"})}),(0,P.jsx)(a.ZP,{sx:{padding:"8px"},children:(0,P.jsx)(q,{isLoading:_,title:`${null===h||void 0===h?void 0:h.total} Bugs`,subtitle:"Total Number of open Defects",icon:c.eyZ,backgroundColor:"secondary"})})]}),(0,P.jsxs)(a.ZP,{item:!0,lg:4,md:6,sm:12,xs:12,children:[(0,P.jsx)(a.ZP,{sx:{padding:"8px"},children:(0,P.jsx)(q,{isLoading:_,title:`${null===u||void 0===u?void 0:u.total} Defects`,subtitle:"Total Number of open Defect",icon:c.FtV,backgroundColor:"secondary"})}),(0,P.jsx)(a.ZP,{sx:{padding:"8px"},children:(0,P.jsx)(q,{isLoading:_,title:`${null===Z||void 0===Z?void 0:Z.total} Security Issue`,subtitle:"Total Number of open Security Issues",icon:c.qfe,backgroundColor:"primary"})})]}),(0,P.jsxs)(a.ZP,{item:!0,lg:4,md:6,sm:12,xs:12,children:[(0,P.jsx)(a.ZP,{sx:{padding:"8px"},children:(0,P.jsx)(y,{chartSeries:[null===h||void 0===h?void 0:h.total,null===u||void 0===u?void 0:u.total,null===Z||void 0===Z?void 0:Z.total],labels:["Bugs","Defects","Security"],sx:{height:"100%"}})}),(0,P.jsx)(a.ZP,{sx:{padding:"8px"},children:(0,P.jsx)(A.Z,{isLoading:_,title:"coincover-b2b2c",subtitle:"SonarCloud",result:null===(e=b.projectStatus)||void 0===e?void 0:e.status,icon:(0,P.jsx)(i.Z,{fontSize:"inherit"})})}),(0,P.jsx)(a.ZP,{sx:{padding:"8px"},children:(0,P.jsx)(A.Z,{isLoading:_,title:"coincover-txm",subtitle:"SonarCloud",result:null===(t=k.projectStatus)||void 0===t?void 0:t.status,icon:(0,P.jsx)(s.Z,{fontSize:"inherit"})})}),(0,P.jsx)(a.ZP,{sx:{padding:"8px"},children:(0,P.jsx)(D,{isLoading:_})})]})]})})})}},8031:function(e,t,n){n.d(t,{V:function(){return s}});var r=n(2808);var i=n(6202);const s=e=>async(t,n)=>{const s=n().jiraReducer[e];if(!s||0===s.length)try{const n=await async function(e){try{return(await r.Z.get(`/rest/api/2/search?jql=project=PRODENG AND type="${e}" AND status not in (Done)`)).data}catch(t){throw console.error("Error fetching Jira data:",t),t}}(e);return t({type:i.dN,payload:{issueType:e,data:n}}),n}catch(a){throw console.error("Error retrieving Jira data:",a),a}return s}},6476:function(e,t,n){n.d(t,{KC:function(){return o},Vq:function(){return d},eP:function(){return x},gu:function(){return l},jb:function(){return c}});var r=n(2861);const i=e=>e.jiraReducer,s=e=>e.unitReducer,a=e=>e.e2eReducer,c=(0,r.P1)([i],(e=>e.bugData)),o=(0,r.P1)([i],(e=>e.defectData)),l=(0,r.P1)([i],(e=>e.securityData)),d=e=>(0,r.P1)([s],(t=>t[e])),x=e=>(0,r.P1)([a],(t=>t[e]))}}]);