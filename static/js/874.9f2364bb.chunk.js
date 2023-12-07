"use strict";(self.webpackChunkqa_dashboard=self.webpackChunkqa_dashboard||[]).push([[874],{5505:function(e,n,r){r(7313);n.Z=r.p+"static/media/social-google.9887eb8eb43729cb99f402cfa0de3c44.svg"},5875:function(e,n,r){var t=r(3984),i=r(1113),s=r(891),o=r(6417);n.Z=()=>(0,o.jsxs)(t.Z,{direction:"row",justifyContent:"space-between",children:[(0,o.jsx)(i.Z,{variant:"subtitle2",component:s.Z,href:"https://berrydashboard.io",target:"_blank",underline:"hover",children:"berrydashboard.io"}),(0,o.jsx)(i.Z,{variant:"subtitle2",component:s.Z,href:"https://codedthemes.com",target:"_blank",underline:"hover",children:"\xa9 codedthemes.com"})]})},6716:function(e,n,r){var t=r(1806),i=r(4315),s=r(6417);n.Z=e=>{let{children:n,...r}=e;return(0,s.jsx)(i.Z,{sx:{maxWidth:{xs:400,lg:475},margin:{xs:2.5,md:3},"& > *":{flexGrow:1,flexBasis:"50%"}},content:!1,...r,children:(0,s.jsx)(t.Z,{sx:{p:{xs:2,sm:3,xl:5}},children:n})})}},748:function(e,n,r){const t=(0,r(7592).ZP)("div")((e=>{let{theme:n}=e;return{backgroundColor:n.palette.primary.light,minHeight:"100vh"}}));n.Z=t},874:function(e,n,r){r.r(n),r.d(n,{default:function(){return q}});var t=r(9466),i=r(9860),s=r(4813),o=r(9019),a=r(3984),l=r(1113),d=r(4313),c=r(748),h=r(6716),x=r(7313),m=r(5554),u=r(1095),p=r(1806),j=r(1550),Z=r(3306),g=r(7843),f=r(5480),b=r(1727),v=r(7131),w=r(3929),y=r(6330),P=r(3463),C=r(9429),k=r(2889),E=r(1337),S=r(237),I=r(2611),H=r(5505),R=r(6417);var B=e=>{let{...n}=e;const r=(0,i.Z)(),t=(0,k.Z)(),c=(0,s.Z)(r.breakpoints.down("md")),h=(0,m.v9)((e=>e.customization)),[B,z]=(0,x.useState)(!0),[W,q]=(0,x.useState)(!1),D=()=>{q(!W)},_=e=>{e.preventDefault()};return(0,R.jsxs)(R.Fragment,{children:[(0,R.jsxs)(o.ZP,{container:!0,direction:"column",justifyContent:"center",spacing:2,children:[(0,R.jsx)(o.ZP,{item:!0,xs:12,children:(0,R.jsx)(E.Z,{children:(0,R.jsxs)(u.Z,{disableElevation:!0,fullWidth:!0,onClick:async()=>{console.error("Login")},size:"large",variant:"outlined",sx:{color:"grey.700",backgroundColor:r.palette.grey[50],borderColor:r.palette.grey[100]},children:[(0,R.jsx)(p.Z,{sx:{mr:{xs:1,sm:2,width:20}},children:(0,R.jsx)("img",{src:H.Z,alt:"google",width:16,height:16,style:{marginRight:c?8:16}})}),"Sign in with Google"]})})}),(0,R.jsx)(o.ZP,{item:!0,xs:12,children:(0,R.jsxs)(p.Z,{sx:{alignItems:"center",display:"flex"},children:[(0,R.jsx)(d.Z,{sx:{flexGrow:1},orientation:"horizontal"}),(0,R.jsx)(u.Z,{variant:"outlined",sx:{cursor:"unset",m:2,py:.5,px:7,borderColor:`${r.palette.grey[100]} !important`,color:`${r.palette.grey[900]}!important`,fontWeight:500,borderRadius:`${h.borderRadius}px`},disableRipple:!0,disabled:!0,children:"OR"}),(0,R.jsx)(d.Z,{sx:{flexGrow:1},orientation:"horizontal"})]})}),(0,R.jsx)(o.ZP,{item:!0,xs:12,container:!0,alignItems:"center",justifyContent:"center",children:(0,R.jsx)(p.Z,{sx:{mb:2},children:(0,R.jsx)(l.Z,{variant:"subtitle1",children:"Sign in with Email address"})})})]}),(0,R.jsx)(C.J9,{initialValues:{email:"info@codedthemes.com",password:"123456",submit:null},validationSchema:P.Ry().shape({email:P.Z_().email("Must be a valid email").max(255).required("Email is required"),password:P.Z_().max(255).required("Password is required")}),onSubmit:async(e,n)=>{let{setErrors:r,setStatus:i,setSubmitting:s}=n;try{t.current&&(i({success:!0}),s(!1))}catch(o){console.error(o),t.current&&(i({success:!1}),r({submit:o.message}),s(!1))}},children:e=>{let{errors:t,handleBlur:i,handleChange:s,handleSubmit:o,isSubmitting:d,touched:c,values:h}=e;return(0,R.jsxs)("form",{noValidate:!0,onSubmit:o,...n,children:[(0,R.jsxs)(j.Z,{fullWidth:!0,error:Boolean(c.email&&t.email),sx:{...r.typography.customInput},children:[(0,R.jsx)(Z.Z,{htmlFor:"outlined-adornment-email-login",children:"Email Address / Username"}),(0,R.jsx)(g.Z,{id:"outlined-adornment-email-login",type:"email",value:h.email,name:"email",onBlur:i,onChange:s,label:"Email Address / Username",inputProps:{}}),c.email&&t.email&&(0,R.jsx)(f.Z,{error:!0,id:"standard-weight-helper-text-email-login",children:t.email})]}),(0,R.jsxs)(j.Z,{fullWidth:!0,error:Boolean(c.password&&t.password),sx:{...r.typography.customInput},children:[(0,R.jsx)(Z.Z,{htmlFor:"outlined-adornment-password-login",children:"Password"}),(0,R.jsx)(g.Z,{id:"outlined-adornment-password-login",type:W?"text":"password",value:h.password,name:"password",onBlur:i,onChange:s,endAdornment:(0,R.jsx)(b.Z,{position:"end",children:(0,R.jsx)(v.Z,{"aria-label":"toggle password visibility",onClick:D,onMouseDown:_,edge:"end",size:"large",children:W?(0,R.jsx)(S.Z,{}):(0,R.jsx)(I.Z,{})})}),label:"Password",inputProps:{}}),c.password&&t.password&&(0,R.jsx)(f.Z,{error:!0,id:"standard-weight-helper-text-password-login",children:t.password})]}),(0,R.jsxs)(a.Z,{direction:"row",alignItems:"center",justifyContent:"space-between",spacing:1,children:[(0,R.jsx)(w.Z,{control:(0,R.jsx)(y.Z,{checked:B,onChange:e=>z(e.target.checked),name:"checked",color:"primary"}),label:"Remember me"}),(0,R.jsx)(l.Z,{variant:"subtitle1",color:"secondary",sx:{textDecoration:"none",cursor:"pointer"},children:"Forgot Password?"})]}),t.submit&&(0,R.jsx)(p.Z,{sx:{mt:3},children:(0,R.jsx)(f.Z,{error:!0,children:t.submit})}),(0,R.jsx)(p.Z,{sx:{mt:2},children:(0,R.jsx)(E.Z,{children:(0,R.jsx)(u.Z,{disableElevation:!0,disabled:d,fullWidth:!0,size:"large",type:"submit",variant:"contained",color:"secondary",children:"Sign in"})})})]})}})]})},z=r(9034),W=r(5875);var q=()=>{const e=(0,i.Z)(),n=(0,s.Z)(e.breakpoints.down("md"));return(0,R.jsx)(c.Z,{children:(0,R.jsxs)(o.ZP,{container:!0,direction:"column",justifyContent:"flex-end",sx:{minHeight:"100vh"},children:[(0,R.jsx)(o.ZP,{item:!0,xs:12,children:(0,R.jsx)(o.ZP,{container:!0,justifyContent:"center",alignItems:"center",sx:{minHeight:"calc(100vh - 68px)"},children:(0,R.jsx)(o.ZP,{item:!0,sx:{m:{xs:1,sm:3},mb:0},children:(0,R.jsx)(h.Z,{children:(0,R.jsxs)(o.ZP,{container:!0,spacing:2,alignItems:"center",justifyContent:"center",children:[(0,R.jsx)(o.ZP,{item:!0,sx:{mb:3},children:(0,R.jsx)(t.rU,{to:"#",children:(0,R.jsx)(z.Z,{})})}),(0,R.jsx)(o.ZP,{item:!0,xs:12,children:(0,R.jsx)(o.ZP,{container:!0,direction:n?"column-reverse":"row",alignItems:"center",justifyContent:"center",children:(0,R.jsx)(o.ZP,{item:!0,children:(0,R.jsxs)(a.Z,{alignItems:"center",justifyContent:"center",spacing:1,children:[(0,R.jsx)(l.Z,{color:e.palette.secondary.main,gutterBottom:!0,variant:n?"h3":"h2",children:"Hi, Welcome Back"}),(0,R.jsx)(l.Z,{variant:"caption",fontSize:"16px",textAlign:n?"center":"inherit",children:"Enter your credentials to continue"})]})})})}),(0,R.jsx)(o.ZP,{item:!0,xs:12,children:(0,R.jsx)(B,{})}),(0,R.jsx)(o.ZP,{item:!0,xs:12,children:(0,R.jsx)(d.Z,{})}),(0,R.jsx)(o.ZP,{item:!0,xs:12,children:(0,R.jsx)(o.ZP,{item:!0,container:!0,direction:"column",alignItems:"center",xs:12,children:(0,R.jsx)(l.Z,{component:t.rU,to:"/pages/register/register3",variant:"subtitle1",sx:{textDecoration:"none"},children:"Don't have an account?"})})})]})})})})}),(0,R.jsx)(o.ZP,{item:!0,xs:12,sx:{m:3,mt:1},children:(0,R.jsx)(W.Z,{})})]})})}},1337:function(e,n,r){var t=r(7313),i=r(551),s=r(8682),o=r(6417);const a=(0,t.forwardRef)(((e,n)=>{var r,t;let a,l,{children:d,type:c,direction:h,offset:x,scale:m}=e;switch(h){case"up":case"left":a=x,l=0;break;default:a=0,l=x}const[u,p]=(0,i.n)(a,l),[j,Z]=(0,i.n)(a,l);switch(c){case"rotate":return(0,o.jsx)(s.E.div,{ref:n,animate:{rotate:360},transition:{repeat:1/0,repeatType:"loop",duration:2,repeatDelay:0},children:d});case"slide":return"up"===h||"down"===h?(0,o.jsx)(s.E.div,{ref:n,animate:{y:void 0!==j?j:""},onHoverEnd:()=>Z(),onHoverStart:()=>Z(),children:d}):(0,o.jsx)(s.E.div,{ref:n,animate:{x:void 0!==u?u:""},onHoverEnd:()=>p(),onHoverStart:()=>p(),children:d});default:return"number"===typeof m&&(m={hover:m,tap:m}),(0,o.jsx)(s.E.div,{ref:n,whileHover:{scale:null===(r=m)||void 0===r?void 0:r.hover},whileTap:{scale:null===(t=m)||void 0===t?void 0:t.tap},children:d})}}));a.defaultProps={type:"scale",offset:10,direction:"right",scale:{hover:1,tap:.9}},n.Z=a},2889:function(e,n,r){var t=r(7313);n.Z=()=>{const e=(0,t.useRef)(!0);return(0,t.useEffect)((()=>()=>{e.current=!1}),[]),e}}}]);