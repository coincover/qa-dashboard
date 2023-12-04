"use strict";(self.webpackChunkqa_dashboard=self.webpackChunkqa_dashboard||[]).push([[573],{9726:function(e,r,n){n.d(r,{Z:function(){return p}});var t=n(9860),o=n(1689),i=n(5272),a=n(891),l=n(8119),s=n(6417);var c=e=>{let{color:r,outline:n,size:o,sx:i,...a}=e;const c=(0,t.Z)(),p=r&&!n&&{color:c.palette.background.paper,bgcolor:`${r}.main`},u=n&&{color:r?`${r}.main`:"primary.main",bgcolor:c.palette.background.paper,border:"2px solid",borderColor:r?`${r}.main`:"primary.main"};let d={};switch(o){case"badge":d={width:c.spacing(3.5),height:c.spacing(3.5)};break;case"xs":d={width:c.spacing(4.25),height:c.spacing(4.25)};break;case"sm":d={width:c.spacing(5),height:c.spacing(5)};break;case"lg":d={width:c.spacing(9),height:c.spacing(9)};break;case"xl":d={width:c.spacing(10.25),height:c.spacing(10.25)};break;case"md":d={width:c.spacing(7.5),height:c.spacing(7.5)};break;default:d={}}return(0,s.jsx)(l.Z,{sx:{...p,...u,...d,...i},...a})};var p=e=>{let{title:r,link:n,icon:l}=e;const p=(0,t.Z)();return(0,s.jsx)(o.Z,{title:r||"Reference",placement:"left",children:(0,s.jsxs)(i.Z,{disableRipple:!0,children:[!l&&(0,s.jsx)(c,{component:a.Z,href:n,target:"_blank",alt:"MUI Logo",size:"badge",color:"primary",outline:!0,children:(0,s.jsxs)("svg",{width:"500",height:"500",viewBox:"0 0 500 500",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[(0,s.jsxs)("g",{clipPath:"url(#clip0)",children:[(0,s.jsx)("path",{d:"M100 260.9V131L212.5 195.95V239.25L137.5 195.95V282.55L100 260.9Z",fill:p.palette.primary[800]}),(0,s.jsx)("path",{d:"M212.5 195.95L325 131V260.9L250 304.2L212.5 282.55L287.5 239.25V195.95L212.5 239.25V195.95Z",fill:p.palette.primary.main}),(0,s.jsx)("path",{d:"M212.5 282.55V325.85L287.5 369.15V325.85L212.5 282.55Z",fill:p.palette.primary[800]}),(0,s.jsx)("path",{d:"M287.5 369.15L400 304.2V217.6L362.5 239.25V282.55L287.5 325.85V369.15ZM362.5 195.95V152.65L400 131V174.3L362.5 195.95Z",fill:p.palette.primary.main})]}),(0,s.jsx)("defs",{children:(0,s.jsx)("clipPath",{id:"clip0",children:(0,s.jsx)("rect",{width:"300",height:"238.3",fill:"white",transform:"translate(100 131)"})})})]})}),l&&(0,s.jsx)(c,{component:a.Z,href:n,target:"_blank",size:"badge",color:"primary",outline:!0,children:l})]})})}},2573:function(e,r,n){n.r(r);var t=n(7592),o=n(3428),i=n(3497),a=n(9726),l=n(6417);const s=(0,t.ZP)("iframe")((e=>{let{theme:r}=e;return{height:"calc(100vh - 210px)",border:"1px solid",borderColor:r.palette.primary.light}}));r.default=()=>(0,l.jsx)(i.Z,{title:"Material Icons",secondary:(0,l.jsx)(a.Z,{link:"https://next.material-ui.com/components/material-icons/"}),children:(0,l.jsx)(o.Z,{sx:{overflow:"hidden"},children:(0,l.jsx)(s,{title:"Material Icon",width:"100%",src:"https://material-ui.com/components/material-icons/"})})})},891:function(e,r,n){n.d(r,{Z:function(){return L}});var t=n(3366),o=n(7462),i=n(7313),a=n(4146),l=n(1921),s=n(1615),c=n(7592),p=n(7342),u=n(7037),d=n(6983),h=n(1113),m=n(7430),g=n(2298);function b(e){return(0,g.Z)("MuiLink",e)}var x=(0,m.Z)("MuiLink",["root","underlineNone","underlineHover","underlineAlways","button","focusVisible"]),f=n(6428),Z=n(7551);const y={primary:"primary.main",textPrimary:"text.primary",secondary:"secondary.main",textSecondary:"text.secondary",error:"error.main"};var w=e=>{let{theme:r,ownerState:n}=e;const t=(e=>y[e]||e)(n.color),o=(0,f.DW)(r,`palette.${t}`,!1)||n.color,i=(0,f.DW)(r,`palette.${t}Channel`);return"vars"in r&&i?`rgba(${i} / 0.4)`:(0,Z.Fq)(o,.4)},v=n(6417);const k=["className","color","component","onBlur","onFocus","TypographyClasses","underline","variant","sx"],j=(0,c.ZP)(h.Z,{name:"MuiLink",slot:"Root",overridesResolver:(e,r)=>{const{ownerState:n}=e;return[r.root,r[`underline${(0,s.Z)(n.underline)}`],"button"===n.component&&r.button]}})((e=>{let{theme:r,ownerState:n}=e;return(0,o.Z)({},"none"===n.underline&&{textDecoration:"none"},"hover"===n.underline&&{textDecoration:"none","&:hover":{textDecoration:"underline"}},"always"===n.underline&&(0,o.Z)({textDecoration:"underline"},"inherit"!==n.color&&{textDecorationColor:w({theme:r,ownerState:n})},{"&:hover":{textDecorationColor:"inherit"}}),"button"===n.component&&{position:"relative",WebkitTapHighlightColor:"transparent",backgroundColor:"transparent",outline:0,border:0,margin:0,borderRadius:0,padding:0,cursor:"pointer",userSelect:"none",verticalAlign:"middle",MozAppearance:"none",WebkitAppearance:"none","&::-moz-focus-inner":{borderStyle:"none"},[`&.${x.focusVisible}`]:{outline:"auto"}})}));var L=i.forwardRef((function(e,r){const n=(0,p.Z)({props:e,name:"MuiLink"}),{className:c,color:h="primary",component:m="a",onBlur:g,onFocus:x,TypographyClasses:f,underline:Z="always",variant:w="inherit",sx:L}=n,V=(0,t.Z)(n,k),{isFocusVisibleRef:M,onBlur:C,onFocus:S,ref:$}=(0,u.Z)(),[D,R]=i.useState(!1),A=(0,d.Z)(r,$),F=(0,o.Z)({},n,{color:h,component:m,focusVisible:D,underline:Z,variant:w}),z=(e=>{const{classes:r,component:n,focusVisible:t,underline:o}=e,i={root:["root",`underline${(0,s.Z)(o)}`,"button"===n&&"button",t&&"focusVisible"]};return(0,l.Z)(i,b,r)})(F);return(0,v.jsx)(j,(0,o.Z)({color:h,className:(0,a.Z)(z.root,c),classes:f,component:m,onBlur:e=>{C(e),!1===M.current&&R(!1),g&&g(e)},onFocus:e=>{S(e),!0===M.current&&R(!0),x&&x(e)},ref:A,ownerState:F,variant:w,sx:[...Object.keys(y).includes(h)?[]:[{color:h}],...Array.isArray(L)?L:[L]]},V))}))}}]);