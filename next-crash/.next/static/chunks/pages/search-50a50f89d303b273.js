(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[603],{8266:function(e,t,a){(window.__NEXT_P=window.__NEXT_P||[]).push(["/search",function(){return a(2039)}])},468:function(e,t,a){"use strict";a.d(t,{Z:function(){return f}});var r=a(5893),s=a(4051),l=a(1555),i=a(5675),n=a.n(i),A=a(8182),o={src:"/_next/static/media/newsImage.2da72f3b.jpg",height:5184,width:3456,blurDataURL:"data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoKCgoKCgsMDAsPEA4QDxYUExMUFiIYGhgaGCIzICUgICUgMy03LCksNy1RQDg4QFFeT0pPXnFlZXGPiI+7u/sBCgoKCgoKCwwMCw8QDhAPFhQTExQWIhgaGBoYIjMgJSAgJSAzLTcsKSw3LVFAODhAUV5PSk9ecWVlcY+Ij7u7+//CABEIAAgABQMBIgACEQEDEQH/xAAnAAEBAAAAAAAAAAAAAAAAAAAABQEBAAAAAAAAAAAAAAAAAAAAAv/aAAwDAQACEAMQAAAApgP/xAAaEAABBQEAAAAAAAAAAAAAAAABAAIDBBIi/9oACAEBAAE/AKT601WHtwDRkYJX/8QAFBEBAAAAAAAAAAAAAAAAAAAAAP/aAAgBAgEBPwB//8QAFBEBAAAAAAAAAAAAAAAAAAAAAP/aAAgBAwEBPwB//9k=",blurWidth:5,blurHeight:8},c=a(9034),d=a.n(c);function h(e){let{article:{title:t,description:a,url:s,urlToImage:l}}=e,i=(null==l?void 0:l.startsWith("http://"))||(null==l?void 0:l.startsWith("https://"))?l:void 0;return(0,r.jsx)("a",{href:s,children:(0,r.jsxs)(A.Z,{className:"h-100",children:[(0,r.jsx)(n(),{src:i||o,width:500,height:200,alt:"News article image",className:"card-img-top ".concat(d().image)}),(0,r.jsxs)(A.Z.Body,{children:[(0,r.jsx)(A.Z.Title,{children:t}),(0,r.jsx)(A.Z.Text,{children:a})]})]})})}function f(e){let{articles:t}=e;return(0,r.jsx)(s.Z,{xs:1,sm:2,xl:3,className:"g-4",children:t.map(e=>(0,r.jsx)(l.Z,{children:(0,r.jsx)(h,{article:e})},e.url))})}},2039:function(e,t,a){"use strict";a.r(t),a.d(t,{default:function(){return D}});var r=a(5893),s=a(468),l=a(9008),i=a.n(l),n=a(7294),A=a(8375),o=a(4184),c=a.n(o),d=a(5697),h=a.n(d);let f={type:h().string,tooltip:h().bool,as:h().elementType},m=n.forwardRef(({as:e="div",className:t,type:a="valid",tooltip:s=!1,...l},i)=>(0,r.jsx)(e,{...l,ref:i,className:c()(t,`${a}-${s?"tooltip":"feedback"}`)}));m.displayName="Feedback",m.propTypes=f;let u=n.createContext({});var x=a(6792);let p=n.forwardRef(({id:e,bsPrefix:t,className:a,type:s="checkbox",isValid:l=!1,isInvalid:i=!1,as:A="input",...o},d)=>{let{controlId:h}=(0,n.useContext)(u);return t=(0,x.vE)(t,"form-check-input"),(0,r.jsx)(A,{...o,ref:d,type:s,id:e||h,className:c()(a,t,l&&"is-valid",i&&"is-invalid")})});p.displayName="FormCheckInput";let g=n.forwardRef(({bsPrefix:e,className:t,htmlFor:a,...s},l)=>{let{controlId:i}=(0,n.useContext)(u);return e=(0,x.vE)(e,"form-check-label"),(0,r.jsx)("label",{...s,ref:l,htmlFor:a||i,className:c()(t,e)})});g.displayName="FormCheckLabel";let j=n.forwardRef(({id:e,bsPrefix:t,bsSwitchPrefix:a,inline:s=!1,reverse:l=!1,disabled:i=!1,isValid:A=!1,isInvalid:o=!1,feedbackTooltip:d=!1,feedback:h,feedbackType:f,className:j,style:v,title:w="",type:y="checkbox",label:b,children:N,as:E="input",...C},F)=>{t=(0,x.vE)(t,"form-check"),a=(0,x.vE)(a,"form-switch");let{controlId:B}=(0,n.useContext)(u),k=(0,n.useMemo)(()=>({controlId:e||B}),[B,e]),I=!N&&null!=b&&!1!==b||n.Children.toArray(N).some(e=>n.isValidElement(e)&&e.type===g),R=(0,r.jsx)(p,{...C,type:"switch"===y?"checkbox":y,ref:F,isValid:A,isInvalid:o,disabled:i,as:E});return(0,r.jsx)(u.Provider,{value:k,children:(0,r.jsx)("div",{style:v,className:c()(j,I&&t,s&&`${t}-inline`,l&&`${t}-reverse`,"switch"===y&&a),children:N||(0,r.jsxs)(r.Fragment,{children:[R,I&&(0,r.jsx)(g,{title:w,children:b}),h&&(0,r.jsx)(m,{type:f,tooltip:d,children:h})]})})})});j.displayName="FormCheck";var v=Object.assign(j,{Input:p,Label:g});a(2473);let w=n.forwardRef(({bsPrefix:e,type:t,size:a,htmlSize:s,id:l,className:i,isValid:A=!1,isInvalid:o=!1,plaintext:d,readOnly:h,as:f="input",...m},p)=>{let g;let{controlId:j}=(0,n.useContext)(u);return e=(0,x.vE)(e,"form-control"),g=d?{[`${e}-plaintext`]:!0}:{[e]:!0,[`${e}-${a}`]:a},(0,r.jsx)(f,{...m,type:t,size:s,ref:p,readOnly:h,id:l||j,className:c()(i,g,A&&"is-valid",o&&"is-invalid","color"===t&&`${e}-color`)})});w.displayName="FormControl";var y=Object.assign(w,{Feedback:m}),b=(0,a(6611).Z)("form-floating");let N=n.forwardRef(({controlId:e,as:t="div",...a},s)=>{let l=(0,n.useMemo)(()=>({controlId:e}),[e]);return(0,r.jsx)(u.Provider,{value:l,children:(0,r.jsx)(t,{...a,ref:s})})});N.displayName="FormGroup";var E=a(1555);let C=n.forwardRef(({as:e="label",bsPrefix:t,column:a=!1,visuallyHidden:s=!1,className:l,htmlFor:i,...A},o)=>{let{controlId:d}=(0,n.useContext)(u);t=(0,x.vE)(t,"form-label");let h="col-form-label";"string"==typeof a&&(h=`${h} ${h}-${a}`);let f=c()(l,t,s&&"visually-hidden",a&&h);return(i=i||d,a)?(0,r.jsx)(E.Z,{ref:o,as:"label",className:f,htmlFor:i,...A}):(0,r.jsx)(e,{ref:o,className:f,htmlFor:i,...A})});C.displayName="FormLabel";let F=n.forwardRef(({bsPrefix:e,className:t,id:a,...s},l)=>{let{controlId:i}=(0,n.useContext)(u);return e=(0,x.vE)(e,"form-range"),(0,r.jsx)("input",{...s,type:"range",ref:l,className:c()(t,e),id:a||i})});F.displayName="FormRange";let B=n.forwardRef(({bsPrefix:e,size:t,htmlSize:a,className:s,isValid:l=!1,isInvalid:i=!1,id:A,...o},d)=>{let{controlId:h}=(0,n.useContext)(u);return e=(0,x.vE)(e,"form-select"),(0,r.jsx)("select",{...o,size:a,ref:d,className:c()(s,e,t&&`${e}-${t}`,l&&"is-valid",i&&"is-invalid"),id:A||h})});B.displayName="FormSelect";let k=n.forwardRef(({bsPrefix:e,className:t,as:a="small",muted:s,...l},i)=>(e=(0,x.vE)(e,"form-text"),(0,r.jsx)(a,{...l,ref:i,className:c()(t,e,s&&"text-muted")})));k.displayName="FormText";let I=n.forwardRef((e,t)=>(0,r.jsx)(v,{...e,ref:t,type:"switch"}));I.displayName="Switch";var R=Object.assign(I,{Input:v.Input,Label:v.Label});let Q=n.forwardRef(({bsPrefix:e,className:t,children:a,controlId:s,label:l,...i},n)=>(e=(0,x.vE)(e,"form-floating"),(0,r.jsxs)(N,{ref:n,className:c()(t,e),controlId:s,...i,children:[a,(0,r.jsx)("label",{htmlFor:s,children:l})]})));Q.displayName="FloatingLabel";let S={_ref:h().any,validated:h().bool,as:h().elementType},$=n.forwardRef(({className:e,validated:t,as:a="form",...s},l)=>(0,r.jsx)(a,{...s,ref:l,className:c()(e,t&&"was-validated")}));$.displayName="Form",$.propTypes=S;var P=Object.assign($,{Group:N,Control:y,Floating:b,Check:v,Switch:R,Label:C,Text:k,Range:F,Select:B,FloatingLabel:Q}),T=a(5005);let Z=n.forwardRef(({bsPrefix:e,variant:t,animation:a="border",size:s,as:l="div",className:i,...n},A)=>{e=(0,x.vE)(e,"spinner");let o=`${e}-${a}`;return(0,r.jsx)(l,{ref:A,...n,className:c()(i,o,s&&`${o}-${s}`,t&&`text-${t}`)})});Z.displayName="Spinner";let _=()=>{let[e,t]=(0,n.useState)(null),[a,l]=(0,n.useState)(!1),[o,c]=(0,n.useState)(!1);async function d(e){var a;e.preventDefault();let r=new FormData(e.target),s=null===(a=r.get("searchQuery"))||void 0===a?void 0:a.toString().trim();if(s)try{t(null),c(!1),l(!0);let e=await fetch("/api/search-news?q=".concat(s)),a=await e.json();t(a)}catch(e){console.error(e),c(!0)}finally{l(!1)}}return(0,r.jsxs)("main",{children:[(0,r.jsx)(i(),{children:(0,r.jsx)("title",{children:"Search News - Nextjs News App"},"title")}),(0,r.jsx)("h1",{children:"Search News"}),(0,r.jsxs)(A.Z,{children:["This page uses ",(0,r.jsx)("strong",{children:"client-side data fetching"})," to show fresh data for every search. Requests are handled by our backend via ",(0,r.jsx)("strong",{children:"API routes"})]}),(0,r.jsxs)(P,{onSubmit:d,children:[(0,r.jsxs)(P.Group,{className:"mb-3",controlId:"search-input",children:[(0,r.jsx)(P.Label,{children:"Search query"}),(0,r.jsx)(P.Control,{name:"searchQuery",placeholder:"E.g. politics, sports, ..."})]}),(0,r.jsx)(T.Z,{type:"submit",className:"mb-3",disabled:a,children:"Search"})]}),(0,r.jsxs)("div",{className:"d-flex flex-column align-items-center",children:[a&&(0,r.jsx)(Z,{animation:"border"}),o&&(0,r.jsx)("p",{children:"Something went wrong. Please try again"}),(null==e?void 0:e.length)===0&&(0,r.jsx)("p",{children:"Nothing found. Try a different query"}),e&&(0,r.jsx)(s.Z,{articles:e})]})]})};var D=_}},function(e){e.O(0,[860,774,888,179],function(){return e(e.s=8266)}),_N_E=e.O()}]);