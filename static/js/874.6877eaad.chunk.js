"use strict";(self.webpackChunkqa_dashboard=self.webpackChunkqa_dashboard||[]).push([[874],{5505:function(e,r,n){n(7313);r.Z=n.p+"static/media/social-google.9887eb8eb43729cb99f402cfa0de3c44.svg"},5875:function(e,r,n){var t=n(3984),i=n(1113),s=n(891),o=n(6417);r.Z=()=>(0,o.jsxs)(t.Z,{direction:"row",justifyContent:"space-between",children:[(0,o.jsx)(i.Z,{variant:"subtitle2",component:s.Z,href:"https://berrydashboard.io",target:"_blank",underline:"hover",children:"berrydashboard.io"}),(0,o.jsx)(i.Z,{variant:"subtitle2",component:s.Z,href:"https://codedthemes.com",target:"_blank",underline:"hover",children:"\xa9 codedthemes.com"})]})},9584:function(e,r,n){var t=n(7313),i=n(3428),s=n(4641),o=n(1113),a=n(4313),l=n(3405),d=n(9860),c=n(6417);const h={"& .MuiCardHeader-action":{mr:0}},x=(0,t.forwardRef)(((e,r)=>{let{border:n=!0,boxShadow:t,children:x,content:m=!0,contentClass:u="",contentSX:p={},darkTitle:j,secondary:Z,shadow:g,sx:b={},title:f,...v}=e;const w=(0,d.Z)();return(0,c.jsxs)(i.Z,{ref:r,...v,sx:{border:n?"1px solid":"none",borderColor:w.palette.primary[200]+25,":hover":{boxShadow:t?g||"0 2px 14px 0 rgb(32 40 45 / 8%)":"inherit"},...b},children:[f&&(0,c.jsx)(s.Z,{sx:h,title:j?(0,c.jsx)(o.Z,{variant:"h3",children:f}):f,action:Z}),f&&(0,c.jsx)(a.Z,{}),m&&(0,c.jsx)(l.Z,{sx:p,className:u,children:x}),!m&&x]})}));r.Z=x},6716:function(e,r,n){var t=n(1806),i=n(9584),s=n(6417);r.Z=e=>{let{children:r,...n}=e;return(0,s.jsx)(i.Z,{sx:{maxWidth:{xs:400,lg:475},margin:{xs:2.5,md:3},"& > *":{flexGrow:1,flexBasis:"50%"}},content:!1,...n,children:(0,s.jsx)(t.Z,{sx:{p:{xs:2,sm:3,xl:5}},children:r})})}},748:function(e,r,n){const t=(0,n(7592).ZP)("div")((e=>{let{theme:r}=e;return{backgroundColor:r.palette.primary.light,minHeight:"100vh"}}));r.Z=t},874:function(e,r,n){n.r(r),n.d(r,{default:function(){return q}});var t=n(4813),i=n(9019),s=n(3984),o=n(1113),a=n(4313),l=n(9860),d=n(9466),c=n(5875),h=n(9034),x=n(7313),m=n(237),u=n(2611),p=n(1095),j=n(1806),Z=n(1550),g=n(3306),b=n(7843),f=n(5480),v=n(1727),w=n(7131),y=n(3929),P=n(6330),C=n(9429),k=n(5554),S=n(3463),E=n(5505),H=n(1337),I=n(2889),R=n(6417);var B=e=>{let{...r}=e;const n=(0,l.Z)(),d=(0,I.Z)(),c=(0,t.Z)(n.breakpoints.down("md")),h=(0,k.v9)((e=>e.customization)),[B,z]=(0,x.useState)(!0),[W,q]=(0,x.useState)(!1),D=()=>{q(!W)},_=e=>{e.preventDefault()};return(0,R.jsxs)(R.Fragment,{children:[(0,R.jsxs)(i.ZP,{container:!0,direction:"column",justifyContent:"center",spacing:2,children:[(0,R.jsx)(i.ZP,{item:!0,xs:12,children:(0,R.jsx)(H.Z,{children:(0,R.jsxs)(p.Z,{disableElevation:!0,fullWidth:!0,onClick:async()=>{console.error("Login")},size:"large",variant:"outlined",sx:{color:"grey.700",backgroundColor:n.palette.grey[50],borderColor:n.palette.grey[100]},children:[(0,R.jsx)(j.Z,{sx:{mr:{xs:1,sm:2,width:20}},children:(0,R.jsx)("img",{src:E.Z,alt:"google",width:16,height:16,style:{marginRight:c?8:16}})}),"Sign in with Google"]})})}),(0,R.jsx)(i.ZP,{item:!0,xs:12,children:(0,R.jsxs)(j.Z,{sx:{alignItems:"center",display:"flex"},children:[(0,R.jsx)(a.Z,{sx:{flexGrow:1},orientation:"horizontal"}),(0,R.jsx)(p.Z,{variant:"outlined",sx:{cursor:"unset",m:2,py:.5,px:7,borderColor:`${n.palette.grey[100]} !important`,color:`${n.palette.grey[900]}!important`,fontWeight:500,borderRadius:`${h.borderRadius}px`},disableRipple:!0,disabled:!0,children:"OR"}),(0,R.jsx)(a.Z,{sx:{flexGrow:1},orientation:"horizontal"})]})}),(0,R.jsx)(i.ZP,{item:!0,xs:12,container:!0,alignItems:"center",justifyContent:"center",children:(0,R.jsx)(j.Z,{sx:{mb:2},children:(0,R.jsx)(o.Z,{variant:"subtitle1",children:"Sign in with Email address"})})})]}),(0,R.jsx)(C.J9,{initialValues:{email:"info@codedthemes.com",password:"123456",submit:null},validationSchema:S.Ry().shape({email:S.Z_().email("Must be a valid email").max(255).required("Email is required"),password:S.Z_().max(255).required("Password is required")}),onSubmit:async(e,r)=>{let{setErrors:n,setStatus:t,setSubmitting:i}=r;try{d.current&&(t({success:!0}),i(!1))}catch(s){console.error(s),d.current&&(t({success:!1}),n({submit:s.message}),i(!1))}},children:e=>{let{errors:t,handleBlur:i,handleChange:a,handleSubmit:l,isSubmitting:d,touched:c,values:h}=e;return(0,R.jsxs)("form",{noValidate:!0,onSubmit:l,...r,children:[(0,R.jsxs)(Z.Z,{fullWidth:!0,error:Boolean(c.email&&t.email),sx:{...n.typography.customInput},children:[(0,R.jsx)(g.Z,{htmlFor:"outlined-adornment-email-login",children:"Email Address / Username"}),(0,R.jsx)(b.Z,{id:"outlined-adornment-email-login",type:"email",value:h.email,name:"email",onBlur:i,onChange:a,label:"Email Address / Username",inputProps:{}}),c.email&&t.email&&(0,R.jsx)(f.Z,{error:!0,id:"standard-weight-helper-text-email-login",children:t.email})]}),(0,R.jsxs)(Z.Z,{fullWidth:!0,error:Boolean(c.password&&t.password),sx:{...n.typography.customInput},children:[(0,R.jsx)(g.Z,{htmlFor:"outlined-adornment-password-login",children:"Password"}),(0,R.jsx)(b.Z,{id:"outlined-adornment-password-login",type:W?"text":"password",value:h.password,name:"password",onBlur:i,onChange:a,endAdornment:(0,R.jsx)(v.Z,{position:"end",children:(0,R.jsx)(w.Z,{"aria-label":"toggle password visibility",onClick:D,onMouseDown:_,edge:"end",size:"large",children:W?(0,R.jsx)(m.Z,{}):(0,R.jsx)(u.Z,{})})}),label:"Password",inputProps:{}}),c.password&&t.password&&(0,R.jsx)(f.Z,{error:!0,id:"standard-weight-helper-text-password-login",children:t.password})]}),(0,R.jsxs)(s.Z,{direction:"row",alignItems:"center",justifyContent:"space-between",spacing:1,children:[(0,R.jsx)(y.Z,{control:(0,R.jsx)(P.Z,{checked:B,onChange:e=>z(e.target.checked),name:"checked",color:"primary"}),label:"Remember me"}),(0,R.jsx)(o.Z,{variant:"subtitle1",color:"secondary",sx:{textDecoration:"none",cursor:"pointer"},children:"Forgot Password?"})]}),t.submit&&(0,R.jsx)(j.Z,{sx:{mt:3},children:(0,R.jsx)(f.Z,{error:!0,children:t.submit})}),(0,R.jsx)(j.Z,{sx:{mt:2},children:(0,R.jsx)(H.Z,{children:(0,R.jsx)(p.Z,{disableElevation:!0,disabled:d,fullWidth:!0,size:"large",type:"submit",variant:"contained",color:"secondary",children:"Sign in"})})})]})}})]})},z=n(6716),W=n(748);var q=()=>{const e=(0,l.Z)(),r=(0,t.Z)(e.breakpoints.down("md"));return(0,R.jsx)(W.Z,{children:(0,R.jsxs)(i.ZP,{container:!0,direction:"column",justifyContent:"flex-end",sx:{minHeight:"100vh"},children:[(0,R.jsx)(i.ZP,{item:!0,xs:12,children:(0,R.jsx)(i.ZP,{container:!0,justifyContent:"center",alignItems:"center",sx:{minHeight:"calc(100vh - 68px)"},children:(0,R.jsx)(i.ZP,{item:!0,sx:{m:{xs:1,sm:3},mb:0},children:(0,R.jsx)(z.Z,{children:(0,R.jsxs)(i.ZP,{container:!0,spacing:2,alignItems:"center",justifyContent:"center",children:[(0,R.jsx)(i.ZP,{item:!0,sx:{mb:3},children:(0,R.jsx)(d.rU,{to:"#",children:(0,R.jsx)(h.Z,{})})}),(0,R.jsx)(i.ZP,{item:!0,xs:12,children:(0,R.jsx)(i.ZP,{container:!0,direction:r?"column-reverse":"row",alignItems:"center",justifyContent:"center",children:(0,R.jsx)(i.ZP,{item:!0,children:(0,R.jsxs)(s.Z,{alignItems:"center",justifyContent:"center",spacing:1,children:[(0,R.jsx)(o.Z,{color:e.palette.secondary.main,gutterBottom:!0,variant:r?"h3":"h2",children:"Hi, Welcome Back"}),(0,R.jsx)(o.Z,{variant:"caption",fontSize:"16px",textAlign:r?"center":"inherit",children:"Enter your credentials to continue"})]})})})}),(0,R.jsx)(i.ZP,{item:!0,xs:12,children:(0,R.jsx)(B,{})}),(0,R.jsx)(i.ZP,{item:!0,xs:12,children:(0,R.jsx)(a.Z,{})}),(0,R.jsx)(i.ZP,{item:!0,xs:12,children:(0,R.jsx)(i.ZP,{item:!0,container:!0,direction:"column",alignItems:"center",xs:12,children:(0,R.jsx)(o.Z,{component:d.rU,to:"/pages/register/register3",variant:"subtitle1",sx:{textDecoration:"none"},children:"Don't have an account?"})})})]})})})})}),(0,R.jsx)(i.ZP,{item:!0,xs:12,sx:{m:3,mt:1},children:(0,R.jsx)(c.Z,{})})]})})}},1337:function(e,r,n){var t=n(7313),i=n(551),s=n(8682),o=n(6417);const a=(0,t.forwardRef)(((e,r)=>{var n,t;let a,l,{children:d,type:c,direction:h,offset:x,scale:m}=e;switch(h){case"up":case"left":a=x,l=0;break;default:a=0,l=x}const[u,p]=(0,i.n)(a,l),[j,Z]=(0,i.n)(a,l);switch(c){case"rotate":return(0,o.jsx)(s.E.div,{ref:r,animate:{rotate:360},transition:{repeat:1/0,repeatType:"loop",duration:2,repeatDelay:0},children:d});case"slide":return"up"===h||"down"===h?(0,o.jsx)(s.E.div,{ref:r,animate:{y:void 0!==j?j:""},onHoverEnd:()=>Z(),onHoverStart:()=>Z(),children:d}):(0,o.jsx)(s.E.div,{ref:r,animate:{x:void 0!==u?u:""},onHoverEnd:()=>p(),onHoverStart:()=>p(),children:d});default:return"number"===typeof m&&(m={hover:m,tap:m}),(0,o.jsx)(s.E.div,{ref:r,whileHover:{scale:null===(n=m)||void 0===n?void 0:n.hover},whileTap:{scale:null===(t=m)||void 0===t?void 0:t.tap},children:d})}}));a.defaultProps={type:"scale",offset:10,direction:"right",scale:{hover:1,tap:.9}},r.Z=a},2889:function(e,r,n){var t=n(7313);r.Z=()=>{const e=(0,t.useRef)(!0);return(0,t.useEffect)((()=>()=>{e.current=!1}),[]),e}}}]);