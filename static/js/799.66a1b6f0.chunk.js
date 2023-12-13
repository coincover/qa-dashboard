"use strict";(self.webpackChunkqa_dashboard=self.webpackChunkqa_dashboard||[]).push([[799],{2799:function(e,s,t){t.r(s),t.d(s,{default:function(){return D}});var r=t(9860),n=t(7313),i=t(9019),a=t(1113),d=t(5554),c=t(6476),o=t(6996),l=t(4315),u=t(1629),h=t(6835),x=t(3477),f=t(4076),j=t(7478),Z=t(3467),v=t(7829),m=t(8119),p=t(501),g=t(816),y=t(6417);var w=e=>{let{data:s}=e;return(0,y.jsx)("div",{children:(0,y.jsx)(u.Z,{component:p.Z,children:(0,y.jsxs)(h.Z,{children:[(0,y.jsx)(x.Z,{children:(0,y.jsxs)(f.Z,{children:[(0,y.jsx)(j.Z,{children:"Jira Number"}),(0,y.jsx)(j.Z,{children:"Summary"}),(0,y.jsx)(j.Z,{children:"Status"}),(0,y.jsx)(j.Z,{children:"Assignee"}),(0,y.jsx)(j.Z,{children:"Created"}),(0,y.jsx)(j.Z,{children:"Last Updated"})]})}),(0,y.jsx)(Z.Z,{children:null===s||void 0===s?void 0:s.map((e=>{var s,t,r,n,i,d;return(0,y.jsxs)(f.Z,{onClick:()=>{return s=e,void window.open(`https://coincover.atlassian.net/browse/${s.key}`,"_blank");var s},hover:!0,style:{cursor:"pointer"},children:[(0,y.jsx)(j.Z,{children:(0,y.jsx)(a.Z,{sx:{fontWeight:500,mr:1,mt:1.75,mb:.75},children:e.key})}),(0,y.jsx)(j.Z,{children:e.fields.summary}),(0,y.jsx)(j.Z,{children:e.fields.status.name}),(0,y.jsx)(j.Z,{children:(0,y.jsx)(v.Z,{title:(null===(s=e.fields)||void 0===s||null===(t=s.assignee)||void 0===t?void 0:t.displayName)||"Not assigned",children:(0,y.jsx)(m.Z,{alt:null===(r=e.fields)||void 0===r||null===(n=r.assignee)||void 0===n?void 0:n.displayName,src:null===(i=e.fields)||void 0===i||null===(d=i.assignee)||void 0===d?void 0:d.avatarUrls["48x48"]})})}),(0,y.jsx)(j.Z,{children:(0,y.jsx)(v.Z,{title:g(e.fields.created).format("MMMM Do YYYY, h:mm:ss a"),children:g(e.fields.created).startOf("hour").fromNow()})}),(0,y.jsx)(j.Z,{children:(0,y.jsx)(v.Z,{title:g(e.fields.updated).format("MMMM Do YYYY, h:mm:ss a"),children:g(e.fields.updated).startOf("hour").fromNow()})})]},e.id)}))})]})})})},b=t(2401);var D=e=>{var s;let{title:t}=e;const u=(0,d.v9)(c.jb),h=(0,d.v9)(c.KC),x=(0,d.v9)(c.gu),[f,j]=(0,n.useState)(u),[Z,v]=(0,n.useState)(h),[m,p]=(0,n.useState)(x),g=(0,d.I0)(),[D,N]=(0,n.useState)(!0),[S,k]=(0,n.useState)([]),M=(0,r.Z)();return(0,n.useEffect)((()=>{(async()=>{try{N(!0),u||j(await g((0,o.V)("bug"))),h||v(await g((0,o.V)("customer defect"))),x||p(await g((0,o.V)("security issue")))}catch(e){console.error("Error fetching data:",e)}finally{N(!1)}})()}),[g]),(0,n.useEffect)((()=>{"List of Open bugs"===t&&k(f||[]),"List of Open Defects"===t&&k(Z||[]),"List of Open Security Issues"===t&&k(m||[])}),[f,Z,m,t]),(0,y.jsx)(y.Fragment,{children:!D||(null===S||void 0===S||null===(s=S.issues)||void 0===s?void 0:s.length)>0?(0,y.jsx)(l.Z,{title:t,sx:{boxShadow:M.shadows[6]},children:(0,y.jsx)(i.ZP,{container:!0,spacing:b.d,children:(0,y.jsx)(i.ZP,{item:!0,xs:12,children:(0,y.jsx)(i.ZP,{container:!0,spacing:b.d,children:(0,y.jsx)(i.ZP,{item:!0,xs:12,sm:12,md:12,lg:12,children:D?(0,y.jsx)("div",{children:"Loading..."}):(0,y.jsx)(w,{data:S.issues})})})})})}):(0,y.jsx)(l.Z,{sx:{boxShadow:M.shadows[6]},children:(0,y.jsx)(a.Z,{sx:{textAlign:"center"},children:"No Data"})})})}},6996:function(e,s,t){t.d(s,{V:function(){return i}});var r=t(6202),n=t(5662);const i=e=>async(s,t)=>{const i=t().jiraReducer[e];if(!i||0===i.length)try{const t=await(async e=>{try{return(await(0,n.Z)(`https://qa-dashboard-4gfp.onrender.com/rest/api/2/search?jql=project=PRODENG AND type="${e}" AND status not in (Done)`,{method:"GET"})).data}catch(s){throw console.error("Error fetching Jira data:",s),s}})(e);return s({type:r.dN,payload:{issueType:e,data:t}}),t}catch(a){throw console.error("Error retrieving Jira data:",a),a}return i}},6476:function(e,s,t){t.d(s,{KC:function(){return a},gu:function(){return d},jb:function(){return i}});var r=t(2861);const n=e=>e.jiraReducer,i=(0,r.P1)([n],(e=>e.bugData)),a=(0,r.P1)([n],(e=>e.defectData)),d=(0,r.P1)([n],(e=>e.securityData))}}]);