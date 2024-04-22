(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[73],{90085:function(e,t,r){Promise.resolve().then(r.bind(r,67045))},62985:function(e,t,r){"use strict";r.d(t,{Z:function(){return n}});/**
 * @license lucide-react v0.352.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */let n=(0,r(70843).Z)("CircleAlert",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["line",{x1:"12",x2:"12",y1:"8",y2:"12",key:"1pkeuh"}],["line",{x1:"12",x2:"12.01",y1:"16",y2:"16",key:"4dfq90"}]])},67045:function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return l}});var n=r(57437),a=r(15370),s=r(2265),i=r(34560);function l(){return(0,s.useEffect)(()=>((0,i.D8)({title:"Upload Media",description:"Upload a new media file.",breadcrumbs:[{name:"Media",path:"/media"},{name:"Upload",path:"/media/upload"}]}),i.D8),[]),(0,n.jsx)(a.Q,{})}},57654:function(e,t,r){"use strict";r.d(t,{z:function(){return i}});var n=r(57437),a=r(79580),s=r(575);let i=(0,r(2265).forwardRef)((e,t)=>{let{loading:r,icon:i,children:l,...o}=e,d={type:"button",size:"sm",...o};return r?(0,n.jsxs)(s.z,{...d,ref:t,disabled:r,children:[(0,n.jsx)(a.Z,{className:"mr-2 h-4 w-4 animate-spin"}),l]}):(0,n.jsx)(s.z,{...d,ref:t,disabled:r,children:i?(0,n.jsxs)("div",{className:"flex items-center gap-1",children:[i,l]}):l})});i.displayName="Button"},15370:function(e,t,r){"use strict";r.d(t,{Q:function(){return h}});var n=r(57437),a=r(2265),s=r(94509),i=r(62985),l=r(54739),o=r(3428);let d=e=>{let{file:t}=e,[r,s]=(0,a.useState)(),i=(0,n.jsx)(o.Z,{className:"w-[40px] text-slate-500",width:40,height:40});return((0,a.useEffect)(()=>{if(!t||!t.type.startsWith("image/"))return;let e=new FileReader;e.onload=()=>{s(e.result)},e.readAsDataURL(t)},[t]),t&&t.type.startsWith("image/")&&r)?(0,n.jsx)("img",{className:"h-auto rounded-lg",src:r,alt:""}):i};var c=r(5887),u=r(93412),m=r(22169),f=r(57654),x=r(62677),p=r(97081);let h=e=>{let{uploadContainerClass:t,minimal:r,onMediaUploaded:o,onUploadComplete:h}=e,[g,y]=(0,a.useState)({}),[v,b]=(0,a.useState)(""),[j,N]=(0,a.useState)([]),{getRootProps:w,getInputProps:k,isDragActive:z,acceptedFiles:E}=(0,l.uI)();return(0,a.useEffect)(()=>{E.length&&(async()=>{let e=0;for(let n=0;n<E.length;n++)try{var t,r;y(e=>({...e,[n]:"uploading"}));let a=await (0,u.cT)(E[n]);(null==a?void 0:null===(t=a.success)||void 0===t?void 0:t.length)?y(e=>({...e,[n]:"success"})):y(e=>({...e,[n]:"error"})),e++,b("".concat(e,"/").concat(E.length)),null==o||o(null==a?void 0:null===(r=a.success)||void 0===r?void 0:r[0])}catch(e){y(t=>{var r;return{...t,[n]:null!==(r=e.message)&&void 0!==r?r:"Unknown error"}}),N(t=>{var r;return[...t,"".concat(E[n].name,": ").concat(null!==(r=e.message)&&void 0!==r?r:"Unknown error")]})}await (0,p._v)(1e3),null==h||h()})()},[E]),(0,n.jsxs)("div",{className:"space-y-5",children:[r?(0,n.jsxs)("div",{className:"flex flex-row space-x-2 align-middle items-center",children:[(0,n.jsxs)("div",{...w(),children:[(0,n.jsx)("input",{...k(),type:"file",className:"hidden"}),(0,n.jsxs)(f.z,{size:"sm",variant:"outline",children:[(0,n.jsx)(s.Z,{className:"mr-2 h-4 w-4"}),(0,n.jsx)("span",{children:"Upload"})]})]}),v&&(0,n.jsxs)("div",{className:"flex flex-row align-middle items-center gap-1 text-sm",children:[(0,n.jsx)("span",{children:v}),!!j.length&&(0,n.jsx)(x.pn,{children:(0,n.jsxs)(x.u,{children:[(0,n.jsx)(x.aJ,{children:(0,n.jsx)(i.Z,{className:"w-4 h-4 text-red-600 dark:text-red-400"})}),(0,n.jsx)(x._v,{children:j.map(e=>(0,n.jsx)("p",{className:"text-red-600 dark:text-red-400",children:e},e))})]})})]})]}):(0,n.jsxs)("div",{...w(),className:(0,m.cn)("flex flex-col items-center justify-center w-full h-64 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-bray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600",t),children:[(0,n.jsxs)("div",{className:"flex flex-col items-center justify-center pt-5 pb-6",children:[(0,n.jsx)(s.Z,{className:"w-8 h-8 mb-4 text-gray-500 dark:text-gray-400"}),(0,n.jsx)("p",{className:"mb-2 text-sm text-gray-500 dark:text-gray-400",children:z?"Drop the files here ...":"Drag and drop some files here, or click to select files"}),(0,n.jsx)("p",{className:"text-xs text-gray-500 dark:text-gray-400",children:"SVG, PNG, JPG, GIF, PDF, DOCX, XLSX..."})]}),(0,n.jsx)("input",{...k(),id:"dropzone-file",type:"file",className:"hidden"})]}),!r&&E.length?(0,n.jsx)("div",{className:"w-full",children:(0,n.jsxs)(c.iA,{className:"min-w-full divide-y divide-gray-200 dark:divide-gray-600",children:[(0,n.jsx)(c.xD,{className:"bg-gray-50 dark:bg-gray-700",children:(0,n.jsxs)(c.SC,{className:"text-gray-800 dark:text-gray-300",children:[(0,n.jsx)(c.ss,{scope:"col",className:"p-3.5 px-2 text-sm text-start font-semibold"}),(0,n.jsx)(c.ss,{scope:"col",className:"p-3.5 px-2 text-sm text-start font-semibold min-w-[10rem]",children:"Name"}),(0,n.jsx)(c.ss,{scope:"col",className:"p-3.5 px-2 text-sm text-start font-semibold min-w-[10rem]",children:"Type"}),(0,n.jsx)(c.ss,{scope:"col",className:"p-3.5 px-2 text-sm text-start font-semibold min-w-[6rem]",children:"Size"}),(0,n.jsx)(c.ss,{scope:"col",className:"p-3.5 px-2 text-sm text-start font-semibold min-w-[6rem]",children:"Status"}),(0,n.jsx)(c.ss,{scope:"col",className:"p-3.5 px-2 text-sm text-start font-semibold min-w-[8rem]",children:"Action"})]})}),(0,n.jsx)(c.RM,{className:"divide-y divide-gray-200 dark:divide-gray-600",children:E.map((e,t)=>{var r;let a=null!==(r=g[t])&&void 0!==r?r:"pending";return(0,n.jsxs)(c.SC,{children:[(0,n.jsx)(c.pj,{className:"p-2 max-w-[50px] flex items-center",children:(0,n.jsx)(d,{file:e})}),(0,n.jsx)(c.pj,{className:"p-2 text-sm text-gray-700 dark:text-gray-400 font-medium",children:e.name}),(0,n.jsx)(c.pj,{className:"p-2 text-sm text-gray-700 dark:text-gray-400",children:(0,n.jsx)("p",{children:e.type})}),(0,n.jsxs)(c.pj,{className:"p-2 text-sm text-gray-700 dark:text-gray-400",children:[e.size," bytes"]}),(0,n.jsx)(c.pj,{className:"p-2 text-sm text-gray-700 dark:text-gray-400",children:a}),(0,n.jsx)(c.pj,{className:"p-2 text-sm text-gray-700 dark:text-gray-400",children:"success"===a&&(0,n.jsxs)("div",{className:"flex space-x-2 items-center justify-center w-full h-full text-sm",children:[(0,n.jsx)("a",{href:"/link-to-file",className:"hover:underline text-blue-800",target:"_blank",rel:"noreferrer",children:"View"}),(0,n.jsx)("button",{className:"cursor-pointer hover:underline text-red-800",type:"button",children:"Delete"})]})})]},e.name)})})]})}):null]})}},34560:function(e,t,r){"use strict";r.d(t,{Sc:function(){return b},D8:function(){return v}});var n=r(57437),a=r(8792),s=r(13571),i=r.n(s),l=r(51919),o=r(2265),d=r(62177),c=r(59143),u=r(22169);let m=o.forwardRef((e,t)=>{let{...r}=e;return(0,n.jsx)("nav",{ref:t,"aria-label":"breadcrumb",...r})});m.displayName="Breadcrumb";let f=o.forwardRef((e,t)=>{let{className:r,...a}=e;return(0,n.jsx)("ol",{ref:t,className:(0,u.cn)("flex flex-wrap items-center gap-1.5 break-words text-sm text-muted-foreground sm:gap-2.5",r),...a})});f.displayName="BreadcrumbList";let x=o.forwardRef((e,t)=>{let{className:r,...a}=e;return(0,n.jsx)("li",{ref:t,className:(0,u.cn)("inline-flex items-center gap-1.5",r),...a})});x.displayName="BreadcrumbItem";let p=o.forwardRef((e,t)=>{let{asChild:r,className:a,...s}=e,i=r?c.g7:"a";return(0,n.jsx)(i,{ref:t,className:(0,u.cn)("transition-colors hover:text-foreground",a),...s})});p.displayName="BreadcrumbLink";let h=o.forwardRef((e,t)=>{let{className:r,...a}=e;return(0,n.jsx)("span",{ref:t,role:"link","aria-disabled":"true","aria-current":"page",className:(0,u.cn)("font-normal text-foreground",r),...a})});h.displayName="BreadcrumbPage";let g=e=>{let{children:t,className:r,...a}=e;return(0,n.jsx)("li",{role:"presentation","aria-hidden":"true",className:(0,u.cn)("[&>svg]:size-3.5",r),...a,children:null!=t?t:(0,n.jsx)(d.XCv,{})})};g.displayName="BreadcrumbSeparator";let y={title:"",description:"",breadcrumbs:[],actions:[]},v=e=>{l.ZP.dispatch("pageInfo",null!=e?e:[])},b=()=>{var e,t;let[r,s]=(0,o.useState)(y);(0,o.useEffect)(()=>{l.ZP.on("pageInfo",e=>{s(null!=e?e:y)})},[]);let d=(null==r?void 0:null===(e=r.breadcrumbs)||void 0===e?void 0:e.length)?[{name:"Dash",path:"/"},...null!==(t=r.breadcrumbs)&&void 0!==t?t:[]]:[],c=d.length;return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)("title",{children:r.title}),(0,n.jsx)(m,{children:(0,n.jsx)(f,{children:i()(d,e=>e.path).map((e,t)=>{let r=t===c-1;return(0,n.jsxs)(o.Fragment,{children:[(0,n.jsx)(x,{children:r?(0,n.jsx)(h,{children:e.name}):(0,n.jsx)(p,{asChild:!0,children:(0,n.jsx)(a.default,{href:e.path,children:e.name})})}),!r&&(0,n.jsx)(g,{})]},e.path)})})}),(r.title||r.description)&&(0,n.jsxs)("div",{className:"flex items-center justify-between space-y-2 w-full",children:[(0,n.jsxs)("div",{children:[r.title&&(0,n.jsx)("h1",{className:"text-lg font-semibold md:text-2xl",children:r.title}),r.description&&(0,n.jsx)("p",{className:"text-muted-foreground",children:r.description})]}),(0,n.jsx)("div",{className:"ml-auto mr-4 flex gap-2",children:r.actions})]})]})}},575:function(e,t,r){"use strict";r.d(t,{d:function(){return o},z:function(){return d}});var n=r(57437),a=r(2265),s=r(59143),i=r(57742),l=r(22169);let o=(0,i.j)("inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50",{variants:{variant:{default:"bg-primary text-primary-foreground shadow hover:bg-primary/90",destructive:"bg-destructive text-destructive-foreground shadow-sm hover:bg-destructive/90",outline:"border border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground",secondary:"bg-secondary text-secondary-foreground shadow-sm hover:bg-secondary/80",ghost:"hover:bg-accent hover:text-accent-foreground",link:"text-primary underline-offset-4 hover:underline"},size:{default:"h-9 px-4 py-2",sm:"h-8 rounded-md px-3 text-xs",lg:"h-10 rounded-md px-8",icon:"h-9 w-9"}},defaultVariants:{variant:"default",size:"default"}}),d=a.forwardRef((e,t)=>{let{className:r,variant:a,size:i,asChild:d=!1,...c}=e,u=d?s.g7:"button";return(0,n.jsx)(u,{className:(0,l.cn)(o({variant:a,size:i,className:r})),ref:t,...c})});d.displayName="Button"},5887:function(e,t,r){"use strict";r.d(t,{RM:function(){return o},SC:function(){return d},iA:function(){return i},pj:function(){return u},ss:function(){return c},xD:function(){return l}});var n=r(57437),a=r(2265),s=r(22169);let i=a.forwardRef((e,t)=>{let{className:r,...a}=e;return(0,n.jsx)("div",{className:"relative w-full overflow-auto",children:(0,n.jsx)("table",{ref:t,className:(0,s.cn)("w-full caption-bottom text-sm",r),...a})})});i.displayName="Table";let l=a.forwardRef((e,t)=>{let{className:r,...a}=e;return(0,n.jsx)("thead",{ref:t,className:(0,s.cn)("[&_tr]:border-b",r),...a})});l.displayName="TableHeader";let o=a.forwardRef((e,t)=>{let{className:r,...a}=e;return(0,n.jsx)("tbody",{ref:t,className:(0,s.cn)("[&_tr:last-child]:border-0",r),...a})});o.displayName="TableBody",a.forwardRef((e,t)=>{let{className:r,...a}=e;return(0,n.jsx)("tfoot",{ref:t,className:(0,s.cn)("border-t bg-muted/50 font-medium [&>tr]:last:border-b-0",r),...a})}).displayName="TableFooter";let d=a.forwardRef((e,t)=>{let{className:r,...a}=e;return(0,n.jsx)("tr",{ref:t,className:(0,s.cn)("border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted",r),...a})});d.displayName="TableRow";let c=a.forwardRef((e,t)=>{let{className:r,...a}=e;return(0,n.jsx)("th",{ref:t,className:(0,s.cn)("h-10 px-2 text-left align-middle font-medium text-muted-foreground [&:has([role=checkbox])]:pr-0 [&>[role=checkbox]]:translate-y-[2px]",r),...a})});c.displayName="TableHead";let u=a.forwardRef((e,t)=>{let{className:r,...a}=e;return(0,n.jsx)("td",{ref:t,className:(0,s.cn)("p-2 align-middle [&:has([role=checkbox])]:pr-0 [&>[role=checkbox]]:translate-y-[2px]",r),...a})});u.displayName="TableCell",a.forwardRef((e,t)=>{let{className:r,...a}=e;return(0,n.jsx)("caption",{ref:t,className:(0,s.cn)("mt-4 text-sm text-muted-foreground",r),...a})}).displayName="TableCaption"},62677:function(e,t,r){"use strict";r.d(t,{_v:function(){return c},aJ:function(){return d},pn:function(){return l},u:function(){return o}});var n=r(57437),a=r(2265),s=r(38152),i=r(22169);let l=s.zt,o=s.fC,d=s.xz,c=a.forwardRef((e,t)=>{let{className:r,sideOffset:a=4,...l}=e;return(0,n.jsx)(s.VY,{ref:t,sideOffset:a,className:(0,i.cn)("z-50 overflow-hidden rounded-md bg-primary px-3 py-1.5 text-xs text-primary-foreground animate-in fade-in-0 zoom-in-95 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",r),...l})});c.displayName=s.VY.displayName},51919:function(e,t,r){"use strict";r.d(t,{Hl:function(){return a}});let n={on(e,t){"undefined"!=typeof document&&document.addEventListener(e,e=>t(null==e?void 0:e.detail))},dispatch(e,t){"undefined"!=typeof document&&document.dispatchEvent(new CustomEvent(e,{detail:t}))},remove(e,t){"undefined"!=typeof document&&document.removeEventListener(e,t)}};t.ZP=n;let a=e=>{n.dispatch("network-error",e)}},97081:function(e,t,r){"use strict";r.d(t,{Qs:function(){return a},_v:function(){return n},rV:function(){return s}});let n=e=>new Promise(t=>setTimeout(t,e)),a=e=>{let t=e.toLowerCase().split(" ");for(let e=0;e<t.length;e++)t[e]=t[e].charAt(0).toUpperCase()+t[e].substring(1);return t.join(" ")},s=e=>a(e.replace(/[-_]/g," "))},93412:function(e,t,r){"use strict";r.d(t,{c1:function(){return s},cT:function(){return a}});var n=r(84971);let a=async e=>{let t=new FormData;return t.append("file",e),await (0,n.SO)("/media/upload",t,{headers:{"Content-Type":"multipart/form-data"}})},s=async e=>await (0,n.HG)("/media",e)},27453:function(e,t,r){"use strict";r.d(t,{Vp:function(){return s},h4:function(){return l},vU:function(){return i}});var n=r(18009);let a=(e,t)=>{(0,n.ZP)(e,{position:"top-center"})},s=(e,t)=>{n.ZP.success(e,{position:"top-center"})},i=(e,t)=>{n.ZP.error(e,{position:"top-center"})},l={info:a,success:s,error:i,warning:(e,t)=>{a(e,t)}}},84971:function(e,t,r){"use strict";r.d(t,{HG:function(){return x},SO:function(){return m},dX:function(){return u},f1:function(){return c},qb:function(){return f}});var n=r(98955),a=r(33108),s=r(51919),i=r(27453);let l=(e,t)=>{let r=n.Z.get(a.B$),s={"Content-Type":"application/json;charset=utf-8",...null!=e?e:{}};return t instanceof FormData&&delete s["Content-Type"],r&&(s.Authorization="Bearer ".concat(r)),s},o=function(e){var t;let r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"";return"string"==typeof e?e:null!==(t=e.message)&&void 0!==t?t:r},d=async(e,t,r,n)=>{var d,c,u;let m=null,f={method:e,mode:"cors",cache:"no-cache",credentials:"same-origin",headers:l(null!==(d=null==n?void 0:n.headers)&&void 0!==d?d:{},r),redirect:"follow",referrerPolicy:"strict-origin-when-cross-origin"};r&&(r instanceof FormData?f.body=r:f.body=JSON.stringify(r));try{if(t.startsWith("http://")||t.startsWith("https://")||(t=a.N9+t),!(m=await fetch(t,f)).ok){let e=null!==(c=m.statusText)&&void 0!==c?c:"Network response was not ok";try{let t=await m.json();e=o(t.error,e)}catch(e){}throw Error(e)}let e=await m.json();if(e.error)throw Error(o(e.error));return null!==(u=e.data)&&void 0!==u?u:e}catch(t){console.error(t);let e="";throw(null==n?void 0:n.disableErrorNotification)||i.h4.error(o(t.message,"An error occurred. Please try again later.")),t instanceof Error&&(e=t.message),e.includes("Failed to fetch")&&(0,s.Hl)("An error occurred. Please try again later."),Error(e)}},c=e=>{var t;let r=(null!==(t=e.message)&&void 0!==t?t:"").toLocaleLowerCase();return r.includes("401")||r.includes("unauthorized")},u=async(e,t)=>await d("GET",e,null,t),m=async(e,t,r)=>await d("POST",e,t,r),f=async(e,t,r)=>await d("PUT",e,t,r),x=async(e,t,r)=>await d("DELETE",e,t,r)},33108:function(e,t,r){"use strict";r.d(t,{N9:function(){return c},B$:function(){return u},MJ:function(){return o},gk:function(){return s},aD:function(){return m}});var n,a=r(30248);let s=a.z.object({id:a.z.number()}),i=a.z.array(s),l=a.z.object({$nochange:a.z.boolean().optional(),$add:a.z.array(s).optional(),$clear:a.z.array(s).optional()}),o=a.z.union([i,l]);var d=r(49079);let c="/api",u=null!==(n=d.env.NEXT_PUBLIC_COOKIE_NAME)&&void 0!==n?n:"token",m=["/login/","/register/","/activate/","/setup/"]},22169:function(e,t,r){"use strict";r.d(t,{cn:function(){return s}});var n=r(75504),a=r(51367);function s(){for(var e=arguments.length,t=Array(e),r=0;r<e;r++)t[r]=arguments[r];return(0,a.m6)((0,n.W)(t))}}},function(e){e.O(0,[310,637,872,792,571,152,203,971,69,744],function(){return e(e.s=90085)}),_N_E=e.O()}]);