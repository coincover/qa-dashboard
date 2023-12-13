"use strict";(self.webpackChunkqa_dashboard=self.webpackChunkqa_dashboard||[]).push([[799],{2799:function(e,s,r){r.r(s),r.d(s,{default:function(){return N}});var t=r(9860),n=r(7313),i=r(9019),a=r(1113),d=r(5554),l=r(6476),o=r(3210),c=r(4315),u=r(1629),h=r(6835),x=r(3477),f=r(4076),j=r(7478),Z=r(3467),v=r(6212),m=r(7829),g=r(8119),p=r(501),y=r(816),b=r(6417);var w=e=>{let{data:s}=e;return(0,b.jsx)("div",{children:(0,b.jsx)(u.Z,{component:p.Z,children:(0,b.jsxs)(h.Z,{children:[(0,b.jsx)(x.Z,{children:(0,b.jsxs)(f.Z,{children:[(0,b.jsx)(j.Z,{children:"Jira Number"}),(0,b.jsx)(j.Z,{children:"Summary"}),(0,b.jsx)(j.Z,{children:"Status"}),(0,b.jsx)(j.Z,{children:"Assignee"}),(0,b.jsx)(j.Z,{children:"Created"}),(0,b.jsx)(j.Z,{children:"Last Updated"})]})}),(0,b.jsx)(Z.Z,{children:null===s||void 0===s?void 0:s.map((e=>{var s,r,t,n,i,d;return(0,b.jsxs)(f.Z,{onClick:()=>{return s=e,void window.open(`https://coincover.atlassian.net/browse/${s.key}`,"_blank");var s},hover:!0,style:{cursor:"pointer"},children:[(0,b.jsx)(j.Z,{children:(0,b.jsx)(a.Z,{sx:{fontWeight:500,mr:1,mt:1.75,mb:.75},children:e.key})}),(0,b.jsx)(j.Z,{children:e.fields.summary}),(0,b.jsx)(j.Z,{children:(0,b.jsx)(v.Z,{variant:"combined",color:"secondary",label:e.fields.status.name,sx:{borderRadius:"5px",width:"100%"},size:"large"})}),(0,b.jsx)(j.Z,{children:(0,b.jsx)(m.Z,{title:(null===(s=e.fields)||void 0===s||null===(r=s.assignee)||void 0===r?void 0:r.displayName)||"Not assigned",children:(0,b.jsx)(g.Z,{alt:null===(t=e.fields)||void 0===t||null===(n=t.assignee)||void 0===n?void 0:n.displayName,src:null===(i=e.fields)||void 0===i||null===(d=i.assignee)||void 0===d?void 0:d.avatarUrls["48x48"]})})}),(0,b.jsx)(j.Z,{children:(0,b.jsx)(m.Z,{title:y(e.fields.created).format("MMMM Do YYYY, h:mm:ss a"),children:y(e.fields.created).startOf("hour").fromNow()})}),(0,b.jsx)(j.Z,{children:(0,b.jsx)(m.Z,{title:y(e.fields.updated).format("MMMM Do YYYY, h:mm:ss a"),children:y(e.fields.updated).startOf("hour").fromNow()})})]},e.id)}))})]})})})},D=r(2401);var N=e=>{var s;let{title:r}=e;const u=(0,d.v9)(l.jb),h=(0,d.v9)(l.KC),x=(0,d.v9)(l.gu),[f,j]=(0,n.useState)(u),[Z,v]=(0,n.useState)(h),[m,g]=(0,n.useState)(x),p=(0,d.I0)(),[y,N]=(0,n.useState)(!0),[S,k]=(0,n.useState)([]),M=(0,t.Z)();return(0,n.useEffect)((()=>{(async()=>{try{N(!0),u&&0!==u.length||j(await p((0,o.V)("bug"))),h&&0!==h.length||v(await p((0,o.V)("customer defect"))),x&&0!==x.length||g(await p((0,o.V)("security issue")))}catch(e){console.error("Error fetching data:",e)}finally{N(!1)}})()}),[p]),(0,n.useEffect)((()=>{"List of Open bugs"===r&&k(f||[]),"List of Open Defects"===r&&k(Z||[]),"List of Open Security Issues"===r&&k(m||[])}),[f,Z,m,r]),(0,b.jsx)(b.Fragment,{children:(null===S||void 0===S||null===(s=S.issues)||void 0===s?void 0:s.length)>0?(0,b.jsx)(c.Z,{title:r,sx:{boxShadow:M.shadows[6]},children:(0,b.jsx)(i.ZP,{container:!0,spacing:D.d,children:(0,b.jsx)(i.ZP,{item:!0,xs:12,children:(0,b.jsx)(i.ZP,{container:!0,spacing:D.d,children:(0,b.jsx)(i.ZP,{item:!0,xs:12,sm:12,md:12,lg:12,children:y?(0,b.jsx)("div",{children:"Loading..."}):(0,b.jsx)(w,{data:S.issues})})})})})}):(0,b.jsx)(c.Z,{sx:{boxShadow:M.shadows[6]},children:(0,b.jsx)(a.Z,{sx:{textAlign:"center"},children:"No Data"})})})}},3210:function(e,s,r){r.d(s,{V:function(){return i}});var t=r(6202),n=r(5662);const i=e=>async(s,r)=>{const i=r().jiraReducer[e];if(!i||0===i.length)try{const r=await(async e=>{try{return(await(0,n.Z)(`https://qa-dashboard-4gfp.onrender.com/rest/api/2/search?jql=project=PRODENG AND type="${e}" AND status not in (Done)`,{method:"GET"})).data}catch(s){throw console.error("Error fetching Jira data:",s),s}})(e);return s({type:t.dN,payload:{issueType:e,data:r}}),r}catch(a){throw console.error("Error retrieving Jira data:",a),a}return i}},6476:function(e,s,r){r.d(s,{KC:function(){return a},gu:function(){return d},jb:function(){return i}});var t=r(2861);const n=e=>e.jiraReducer,i=(0,t.P1)([n],(e=>e.bugData)),a=(0,t.P1)([n],(e=>e.defectData)),d=(0,t.P1)([n],(e=>e.securityData))}}]);