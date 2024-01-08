"use strict";(self.webpackChunkqa_dashboard=self.webpackChunkqa_dashboard||[]).push([[385],{646:function(e,r,t){var s=t(5294);r.Z=s.Z.create({baseURL:"https://qa-dashboard-4gfp.onrender.com",headers:{"Content-type":"application/json","API-Key":"YThjM2M1NzAtZTE0ZC00M2Y1LWE3NDYtZTVmZGE4Y2UwYTdh"}})},5597:function(e,r,t){var s=t(2791),n=t(7621),a=t(9585),i=t(890),d=t(4721),o=t(9504),c=t(3967),l=t(184);const u={"& .MuiCardHeader-action":{mr:0}},h=(0,s.forwardRef)(((e,r)=>{let{border:t=!0,boxShadow:s,children:h,content:x=!0,contentClass:f="",contentSX:j={},darkTitle:Z,secondary:v,shadow:m,sx:p={},title:g,...y}=e;const b=(0,c.Z)();return(0,l.jsxs)(n.Z,{ref:r,...y,sx:{border:t?"1px solid":"none",borderColor:b.palette.primary[200]+25,":hover":{boxShadow:s?m||"0 2px 14px 0 rgb(32 40 45 / 8%)":"inherit"},...p},children:[g&&(0,l.jsx)(a.Z,{sx:u,title:Z?(0,l.jsx)(i.Z,{variant:"h3",children:g}):g,action:v}),g&&(0,l.jsx)(d.Z,{}),x&&(0,l.jsx)(o.Z,{sx:j,className:f,children:h}),!x&&h]})}));r.Z=h},2385:function(e,r,t){t.r(r),t.d(r,{default:function(){return S}});var s=t(2791),n=t(1889),a=t(890),i=t(3967),d=t(9434),o=t(5597),c=t(1923),l=t(9281),u=t(9836),h=t(6890),x=t(5855),f=t(3994),j=t(3382),Z=t(1918),v=t(3356),m=t(3044),p=t(5527),g=t(2426),y=t(184);var b=e=>{let{data:r}=e;return(0,y.jsx)("div",{children:(0,y.jsx)(l.Z,{component:p.Z,children:(0,y.jsxs)(u.Z,{children:[(0,y.jsx)(h.Z,{children:(0,y.jsxs)(x.Z,{children:[(0,y.jsx)(f.Z,{children:"Jira Number"}),(0,y.jsx)(f.Z,{children:"Summary"}),(0,y.jsx)(f.Z,{children:"Status"}),(0,y.jsx)(f.Z,{children:"Assignee"}),(0,y.jsx)(f.Z,{children:"Created"}),(0,y.jsx)(f.Z,{children:"Last Updated"})]})}),(0,y.jsx)(j.Z,{children:null===r||void 0===r?void 0:r.map((e=>{var r,t,s,n,i,d;return(0,y.jsxs)(x.Z,{onClick:()=>{return r=e,void window.open(`https://coincover.atlassian.net/browse/${r.key}`,"_blank");var r},hover:!0,style:{cursor:"pointer"},children:[(0,y.jsx)(f.Z,{children:(0,y.jsx)(a.Z,{sx:{fontWeight:500,mr:1,mt:1.75,mb:.75},children:e.key})}),(0,y.jsx)(f.Z,{children:e.fields.summary}),(0,y.jsx)(f.Z,{children:(0,y.jsx)(Z.Z,{variant:"combined",color:"secondary",label:e.fields.status.name,sx:{borderRadius:"5px",width:"100%"},size:"large"})}),(0,y.jsx)(f.Z,{children:(0,y.jsx)(v.Z,{title:(null===(r=e.fields)||void 0===r||null===(t=r.assignee)||void 0===t?void 0:t.displayName)||"Not assigned",children:(0,y.jsx)(m.Z,{alt:null===(s=e.fields)||void 0===s||null===(n=s.assignee)||void 0===n?void 0:n.displayName,src:null===(i=e.fields)||void 0===i||null===(d=i.assignee)||void 0===d?void 0:d.avatarUrls["48x48"]})})}),(0,y.jsx)(f.Z,{children:(0,y.jsx)(v.Z,{title:g(e.fields.created).format("MMMM Do YYYY, h:mm:ss a"),children:g(e.fields.created).startOf("hour").fromNow()})}),(0,y.jsx)(f.Z,{children:(0,y.jsx)(v.Z,{title:g(e.fields.updated).format("MMMM Do YYYY, h:mm:ss a"),children:g(e.fields.updated).startOf("hour").fromNow()})})]},e.id)}))})]})})})},w=t(760),N=t(2829);var S=e=>{var r;let{title:t}=e;const l=(0,d.v9)(N.jb),u=(0,d.v9)(N.KC),h=(0,d.v9)(N.gu),[x,f]=(0,s.useState)(l),[j,Z]=(0,s.useState)(u),[v,m]=(0,s.useState)(h),p=(0,d.I0)(),[g,S]=(0,s.useState)(!0),[Y,D]=(0,s.useState)([]),M=(0,i.Z)();return(0,s.useEffect)((()=>{(async()=>{try{S(!0),l&&0!==l.length||f(await p((0,w.V)("bug"))),u&&0!==u.length||Z(await p((0,w.V)("customer defect"))),h&&0!==h.length||m(await p((0,w.V)("security issue")))}catch(e){console.error("Error fetching data:",e)}finally{S(!1)}})()}),[p,l,u,h]),(0,s.useEffect)((()=>{"Bugs"===t&&D(x||[]),"Defects"===t&&D(j||[]),"Securitys"===t&&D(v||[])}),[x,j,v,t]),(0,y.jsx)(y.Fragment,{children:(null===Y||void 0===Y||null===(r=Y.issues)||void 0===r?void 0:r.length)>0?(0,y.jsx)(o.Z,{title:`List of Open ${t} issues`,sx:{boxShadow:M.shadows[6]},children:(0,y.jsx)(n.ZP,{container:!0,spacing:c.d,children:(0,y.jsx)(n.ZP,{item:!0,xs:12,children:(0,y.jsx)(n.ZP,{container:!0,spacing:c.d,children:(0,y.jsx)(n.ZP,{item:!0,xs:12,sm:12,md:12,lg:12,children:g?(0,y.jsx)("div",{children:"Loading..."}):(0,y.jsx)(b,{data:Y.issues})})})})})}):(0,y.jsx)(o.Z,{sx:{boxShadow:M.shadows[6]},children:(0,y.jsx)(a.Z,{sx:{textAlign:"center"},children:"No Data"})})})}},760:function(e,r,t){t.d(r,{V:function(){return a}});var s=t(646);var n=t(9673);const a=e=>async(r,t)=>{const a=t().jiraReducer[e];if(!a||0===a.length)try{const t=await async function(e){try{return(await s.Z.get(`/rest/api/2/search?jql=project=PRODENG AND type="${e}" AND status not in (Done)`)).data}catch(r){throw console.error("Error fetching Jira data:",r),r}}(e);return r({type:n.dN,payload:{issueType:e,data:t}}),t}catch(i){throw console.error("Error retrieving Jira data:",i),i}return a}},2829:function(e,r,t){t.d(r,{KC:function(){return o},Vq:function(){return l},eP:function(){return u},gu:function(){return c},jb:function(){return d}});var s=t(3553);const n=e=>e.jiraReducer,a=e=>e.unitReducer,i=e=>e.e2eReducer,d=(0,s.P1)([n],(e=>e.bugData)),o=(0,s.P1)([n],(e=>e.defectData)),c=(0,s.P1)([n],(e=>e.securityData)),l=e=>(0,s.P1)([a],(r=>r[e])),u=e=>(0,s.P1)([i],(r=>r[e]))}}]);
//# sourceMappingURL=385.00fcddb3.chunk.js.map