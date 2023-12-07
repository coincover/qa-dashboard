"use strict";(self.webpackChunkqa_dashboard=self.webpackChunkqa_dashboard||[]).push([[884],{5505:function(e,t,r){r(7313);t.Z=r.p+"static/media/social-google.9887eb8eb43729cb99f402cfa0de3c44.svg"},5875:function(e,t,r){var n=r(3984),i=r(1113),s=r(891),a=r(6417);t.Z=()=>(0,a.jsxs)(n.Z,{direction:"row",justifyContent:"space-between",children:[(0,a.jsx)(i.Z,{variant:"subtitle2",component:s.Z,href:"https://berrydashboard.io",target:"_blank",underline:"hover",children:"berrydashboard.io"}),(0,a.jsx)(i.Z,{variant:"subtitle2",component:s.Z,href:"https://codedthemes.com",target:"_blank",underline:"hover",children:"\xa9 codedthemes.com"})]})},6716:function(e,t,r){var n=r(1806),i=r(4315),s=r(6417);t.Z=e=>{let{children:t,...r}=e;return(0,s.jsx)(i.Z,{sx:{maxWidth:{xs:400,lg:475},margin:{xs:2.5,md:3},"& > *":{flexGrow:1,flexBasis:"50%"}},content:!1,...r,children:(0,s.jsx)(n.Z,{sx:{p:{xs:2,sm:3,xl:5}},children:t})})}},748:function(e,t,r){const n=(0,r(7592).ZP)("div")((e=>{let{theme:t}=e;return{backgroundColor:t.palette.primary.light,minHeight:"100vh"}}));t.Z=n},1884:function(e,t,r){r.r(t),r.d(t,{default:function(){return D}});var n=r(9466),i=r(9860),s=r(4813),a=r(9019),l=r(3984),o=r(1113),c=r(4313),d=r(748),h=r(6716),x=r(9034),u=r(7313),m=r(5554),p=r(1095),Z=r(1806),j=r(2802),g=r(1550),b=r(3306),f=r(7843),v=r(5480),y=r(1727),w=r(7131),P=r(3929),C=r(6330),k=r(3463),S=r(9429),E=r(2889),R=r(5505),I=r(1337),W=r(556);const z=e=>{let t=0;return e.length>5&&(t+=1),e.length>7&&(t+=1),(e=>new RegExp(/[0-9]/).test(e))(e)&&(t+=1),(e=>new RegExp(/[!#@$%^&*)(+=._-]/).test(e))(e)&&(t+=1),(e=>new RegExp(/[a-z]/).test(e)&&new RegExp(/[A-Z]/).test(e))(e)&&(t+=1),t};var H=r(237),B=r(2611),_=r(6417);var q=e=>{let{...t}=e;const r=(0,i.Z)(),l=(0,E.Z)(),d=(0,s.Z)(r.breakpoints.down("md")),h=(0,m.v9)((e=>e.customization)),[x,q]=(0,u.useState)(!1),[A,D]=(0,u.useState)(!0),[M,G]=(0,u.useState)(0),[F,U]=(0,u.useState)(),V=()=>{q(!x)},$=e=>{e.preventDefault()},N=e=>{const t=z(e);var r;G(t),U((r=t)<2?{label:"Poor",color:W.Z.errorMain}:r<3?{label:"Weak",color:W.Z.warningDark}:r<4?{label:"Normal",color:W.Z.orangeMain}:r<5?{label:"Good",color:W.Z.successMain}:r<6?{label:"Strong",color:W.Z.successDark}:{label:"Poor",color:W.Z.errorMain})};return(0,u.useEffect)((()=>{N("123456")}),[]),(0,_.jsxs)(_.Fragment,{children:[(0,_.jsxs)(a.ZP,{container:!0,direction:"column",justifyContent:"center",spacing:2,children:[(0,_.jsx)(a.ZP,{item:!0,xs:12,children:(0,_.jsx)(I.Z,{children:(0,_.jsxs)(p.Z,{variant:"outlined",fullWidth:!0,onClick:async()=>{console.error("Register")},size:"large",sx:{color:"grey.700",backgroundColor:r.palette.grey[50],borderColor:r.palette.grey[100]},children:[(0,_.jsx)(Z.Z,{sx:{mr:{xs:1,sm:2,width:20}},children:(0,_.jsx)("img",{src:R.Z,alt:"google",width:16,height:16,style:{marginRight:d?8:16}})}),"Sign up with Google"]})})}),(0,_.jsx)(a.ZP,{item:!0,xs:12,children:(0,_.jsxs)(Z.Z,{sx:{alignItems:"center",display:"flex"},children:[(0,_.jsx)(c.Z,{sx:{flexGrow:1},orientation:"horizontal"}),(0,_.jsx)(p.Z,{variant:"outlined",sx:{cursor:"unset",m:2,py:.5,px:7,borderColor:`${r.palette.grey[100]} !important`,color:`${r.palette.grey[900]}!important`,fontWeight:500,borderRadius:`${h.borderRadius}px`},disableRipple:!0,disabled:!0,children:"OR"}),(0,_.jsx)(c.Z,{sx:{flexGrow:1},orientation:"horizontal"})]})}),(0,_.jsx)(a.ZP,{item:!0,xs:12,container:!0,alignItems:"center",justifyContent:"center",children:(0,_.jsx)(Z.Z,{sx:{mb:2},children:(0,_.jsx)(o.Z,{variant:"subtitle1",children:"Sign up with Email address"})})})]}),(0,_.jsx)(S.J9,{initialValues:{email:"",password:"",submit:null},validationSchema:k.Ry().shape({email:k.Z_().email("Must be a valid email").max(255).required("Email is required"),password:k.Z_().max(255).required("Password is required")}),onSubmit:async(e,t)=>{let{setErrors:r,setStatus:n,setSubmitting:i}=t;try{l.current&&(n({success:!0}),i(!1))}catch(s){console.error(s),l.current&&(n({success:!1}),r({submit:s.message}),i(!1))}},children:e=>{let{errors:i,handleBlur:s,handleChange:l,handleSubmit:c,isSubmitting:h,touched:u,values:m}=e;return(0,_.jsxs)("form",{noValidate:!0,onSubmit:c,...t,children:[(0,_.jsxs)(a.ZP,{container:!0,spacing:d?0:2,children:[(0,_.jsx)(a.ZP,{item:!0,xs:12,sm:6,children:(0,_.jsx)(j.Z,{fullWidth:!0,label:"First Name",margin:"normal",name:"fname",type:"text",defaultValue:"",sx:{...r.typography.customInput}})}),(0,_.jsx)(a.ZP,{item:!0,xs:12,sm:6,children:(0,_.jsx)(j.Z,{fullWidth:!0,label:"Last Name",margin:"normal",name:"lname",type:"text",defaultValue:"",sx:{...r.typography.customInput}})})]}),(0,_.jsxs)(g.Z,{fullWidth:!0,error:Boolean(u.email&&i.email),sx:{...r.typography.customInput},children:[(0,_.jsx)(b.Z,{htmlFor:"outlined-adornment-email-register",children:"Email Address / Username"}),(0,_.jsx)(f.Z,{id:"outlined-adornment-email-register",type:"email",value:m.email,name:"email",onBlur:s,onChange:l,inputProps:{}}),u.email&&i.email&&(0,_.jsx)(v.Z,{error:!0,id:"standard-weight-helper-text--register",children:i.email})]}),(0,_.jsxs)(g.Z,{fullWidth:!0,error:Boolean(u.password&&i.password),sx:{...r.typography.customInput},children:[(0,_.jsx)(b.Z,{htmlFor:"outlined-adornment-password-register",children:"Password"}),(0,_.jsx)(f.Z,{id:"outlined-adornment-password-register",type:x?"text":"password",value:m.password,name:"password",label:"Password",onBlur:s,onChange:e=>{l(e),N(e.target.value)},endAdornment:(0,_.jsx)(y.Z,{position:"end",children:(0,_.jsx)(w.Z,{"aria-label":"toggle password visibility",onClick:V,onMouseDown:$,edge:"end",size:"large",children:x?(0,_.jsx)(H.Z,{}):(0,_.jsx)(B.Z,{})})}),inputProps:{}}),u.password&&i.password&&(0,_.jsx)(v.Z,{error:!0,id:"standard-weight-helper-text-password-register",children:i.password})]}),0!==M&&(0,_.jsx)(g.Z,{fullWidth:!0,children:(0,_.jsx)(Z.Z,{sx:{mb:2},children:(0,_.jsxs)(a.ZP,{container:!0,spacing:2,alignItems:"center",children:[(0,_.jsx)(a.ZP,{item:!0,children:(0,_.jsx)(Z.Z,{style:{backgroundColor:null===F||void 0===F?void 0:F.color},sx:{width:85,height:8,borderRadius:"7px"}})}),(0,_.jsx)(a.ZP,{item:!0,children:(0,_.jsx)(o.Z,{variant:"subtitle1",fontSize:"0.75rem",children:null===F||void 0===F?void 0:F.label})})]})})}),(0,_.jsx)(a.ZP,{container:!0,alignItems:"center",justifyContent:"space-between",children:(0,_.jsx)(a.ZP,{item:!0,children:(0,_.jsx)(P.Z,{control:(0,_.jsx)(C.Z,{checked:A,onChange:e=>D(e.target.checked),name:"checked",color:"primary"}),label:(0,_.jsxs)(o.Z,{variant:"subtitle1",children:["Agree with \xa0",(0,_.jsx)(o.Z,{variant:"subtitle1",component:n.rU,to:"#",children:"Terms & Condition."})]})})})}),i.submit&&(0,_.jsx)(Z.Z,{sx:{mt:3},children:(0,_.jsx)(v.Z,{error:!0,children:i.submit})}),(0,_.jsx)(Z.Z,{sx:{mt:2},children:(0,_.jsx)(I.Z,{children:(0,_.jsx)(p.Z,{disableElevation:!0,disabled:h,fullWidth:!0,size:"large",type:"submit",variant:"contained",color:"secondary",children:"Sign up"})})})]})}})]})},A=r(5875);var D=()=>{const e=(0,i.Z)(),t=(0,s.Z)(e.breakpoints.down("md"));return(0,_.jsx)(d.Z,{children:(0,_.jsxs)(a.ZP,{container:!0,direction:"column",justifyContent:"flex-end",sx:{minHeight:"100vh"},children:[(0,_.jsx)(a.ZP,{item:!0,xs:12,children:(0,_.jsx)(a.ZP,{container:!0,justifyContent:"center",alignItems:"center",sx:{minHeight:"calc(100vh - 68px)"},children:(0,_.jsx)(a.ZP,{item:!0,sx:{m:{xs:1,sm:3},mb:0},children:(0,_.jsx)(h.Z,{children:(0,_.jsxs)(a.ZP,{container:!0,spacing:2,alignItems:"center",justifyContent:"center",children:[(0,_.jsx)(a.ZP,{item:!0,sx:{mb:3},children:(0,_.jsx)(n.rU,{to:"#",children:(0,_.jsx)(x.Z,{})})}),(0,_.jsx)(a.ZP,{item:!0,xs:12,children:(0,_.jsx)(a.ZP,{container:!0,direction:t?"column-reverse":"row",alignItems:"center",justifyContent:"center",children:(0,_.jsx)(a.ZP,{item:!0,children:(0,_.jsxs)(l.Z,{alignItems:"center",justifyContent:"center",spacing:1,children:[(0,_.jsx)(o.Z,{color:e.palette.secondary.main,gutterBottom:!0,variant:t?"h3":"h2",children:"Sign up"}),(0,_.jsx)(o.Z,{variant:"caption",fontSize:"16px",textAlign:t?"center":"inherit",children:"Enter your credentials to continue"})]})})})}),(0,_.jsx)(a.ZP,{item:!0,xs:12,children:(0,_.jsx)(q,{})}),(0,_.jsx)(a.ZP,{item:!0,xs:12,children:(0,_.jsx)(c.Z,{})}),(0,_.jsx)(a.ZP,{item:!0,xs:12,children:(0,_.jsx)(a.ZP,{item:!0,container:!0,direction:"column",alignItems:"center",xs:12,children:(0,_.jsx)(o.Z,{component:n.rU,to:"login",variant:"subtitle1",sx:{textDecoration:"none"},children:"Already have an account?"})})})]})})})})}),(0,_.jsx)(a.ZP,{item:!0,xs:12,sx:{m:3,mt:1},children:(0,_.jsx)(A.Z,{})})]})})}},1337:function(e,t,r){var n=r(7313),i=r(551),s=r(8682),a=r(6417);const l=(0,n.forwardRef)(((e,t)=>{var r,n;let l,o,{children:c,type:d,direction:h,offset:x,scale:u}=e;switch(h){case"up":case"left":l=x,o=0;break;default:l=0,o=x}const[m,p]=(0,i.n)(l,o),[Z,j]=(0,i.n)(l,o);switch(d){case"rotate":return(0,a.jsx)(s.E.div,{ref:t,animate:{rotate:360},transition:{repeat:1/0,repeatType:"loop",duration:2,repeatDelay:0},children:c});case"slide":return"up"===h||"down"===h?(0,a.jsx)(s.E.div,{ref:t,animate:{y:void 0!==Z?Z:""},onHoverEnd:()=>j(),onHoverStart:()=>j(),children:c}):(0,a.jsx)(s.E.div,{ref:t,animate:{x:void 0!==m?m:""},onHoverEnd:()=>p(),onHoverStart:()=>p(),children:c});default:return"number"===typeof u&&(u={hover:u,tap:u}),(0,a.jsx)(s.E.div,{ref:t,whileHover:{scale:null===(r=u)||void 0===r?void 0:r.hover},whileTap:{scale:null===(n=u)||void 0===n?void 0:n.tap},children:c})}}));l.defaultProps={type:"scale",offset:10,direction:"right",scale:{hover:1,tap:.9}},t.Z=l},2889:function(e,t,r){var n=r(7313);t.Z=()=>{const e=(0,n.useRef)(!0);return(0,n.useEffect)((()=>()=>{e.current=!1}),[]),e}}}]);