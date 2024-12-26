(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[934],{31873:function(e,n,t){Promise.resolve().then(t.bind(t,81626))},47907:function(e,n,t){"use strict";var r=t(15313);t.o(r,"usePathname")&&t.d(n,{usePathname:function(){return r.usePathname}}),t.o(r,"useRouter")&&t.d(n,{useRouter:function(){return r.useRouter}}),t.o(r,"useSearchParams")&&t.d(n,{useSearchParams:function(){return r.useSearchParams}})},81626:function(e,n,t){"use strict";t.r(n),t.d(n,{default:function(){return p}});var r=t(57437),a=t(2265),i=t(34560),l=t(94509),o=t(54739),c=t(22169),s=t(57654),u=t(96304),d=t(79984),f=t(27453),m=t(47907);let h=e=>{let{uploadContainerClass:n,minimal:t}=e,{getRootProps:i,getInputProps:h,isDragActive:p,acceptedFiles:v}=(0,o.uI)(),{reloadAppConfig:g}=(0,a.useContext)(d.Il),y=(0,m.useRouter)();return(0,a.useEffect)(()=>{v.length&&(async()=>{try{await (0,u.yR)(v),g(),y.push("/schemas")}catch(e){f.h4.error(e.message)}})()},[v]),(0,r.jsx)("div",{className:"space-y-5",children:t?(0,r.jsx)("div",{className:"flex flex-row space-x-2 align-middle items-center",children:(0,r.jsxs)("div",{...i(),children:[(0,r.jsx)("input",{...h(),type:"file",className:"hidden"}),(0,r.jsxs)(s.z,{size:"sm",variant:"outline",children:[(0,r.jsx)(l.Z,{className:"mr-2 h-4 w-4"}),(0,r.jsx)("span",{children:"Upload"})]})]})}):(0,r.jsxs)("div",{...i(),className:(0,c.cn)("flex flex-col items-center justify-center w-full h-64 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-bray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600",n),children:[(0,r.jsxs)("div",{className:"flex flex-col items-center justify-center pt-5 pb-6",children:[(0,r.jsx)(l.Z,{className:"w-8 h-8 mb-4 text-gray-500 dark:text-gray-400"}),(0,r.jsx)("p",{className:"mb-2 text-sm text-gray-500 dark:text-gray-400",children:p?"Drop the files here ...":"Drag and drop some files here, or click to select files"}),(0,r.jsx)("p",{className:"text-xs text-gray-500 dark:text-gray-400",children:"JSON"})]}),(0,r.jsx)("input",{...h(),id:"dropzone-file",type:"file",className:"hidden"})]})})};function p(){return(0,a.useEffect)(()=>((0,i.D8)({title:"Import Schemas",description:"Import schemas.",breadcrumbs:[{name:"Schema",path:"/schemas"},{name:"Import",path:"/schemas/import"}]}),i.D8),[]),(0,r.jsx)(h,{})}},18157:function(e,n,t){"use strict";t.d(n,{EC:function(){return a},l:function(){return i},mb:function(){return l}});var r=t(31548);let a=e=>(null==e?void 0:e.type)==="m2m"||(null==e?void 0:e.type)==="o2m"&&!!(null==e?void 0:e.owner),i=(e,n,t,r,a,i)=>{if(!r){if(e.length){t(e[0]);return}if(!e.length&&n.length){t(a?null:void 0);return}t(a?null:void 0);return}let l=e.map(e=>({id:e.id})),o=l.length?l:void 0,c=n.map(e=>({id:e.id})),s=c.length?c:void 0,u=(null==o?void 0:o.length)||!a?o:null;t(i?{$add:o,$clear:s}:u)},l=async(e,n,t,a,i)=>{if(!a||!e.relation)return;let l={};if(n&&(l[a.label_field]={$like:"%".concat(n,"%")}),i){let n=e.relation.field;l["".concat(n,".id")]=i}return await (0,r.Q7)(a.name,{page:t,limit:20,filter:Object.keys(l).length?l:void 0,select:"id,".concat(a.label_field)})}},31548:function(e,n,t){"use strict";t.d(n,{Q7:function(){return o},Vj:function(){return i},il:function(){return c},rP:function(){return l},yd:function(){return s}});var r=t(18157),a=t(84971);let i=async(e,n,t)=>{let i={$add:{},$set:{},$clear:{}};for(let a of e.fields)if(a.name in n||a.is_system_field){if("relation"===a.type||"file"===a.type){var l,o;if(t){if(null===n[a.name]){i.$clear[a.name]=!0;continue}if(n[a.name].$nochange)continue;if(!(0,r.EC)(a.relation)){i.$set[a.name]=n[a.name];continue}n[a.name].$add&&(i.$add[a.name]=n[a.name].$add),n[a.name].$clear&&(i.$clear[a.name]=n[a.name].$clear);continue}if(null==n?void 0:null===(l=n[a.name])||void 0===l?void 0:l.$add){i[a.name]=n[a.name].$add;continue}if(null==n?void 0:null===(o=n[a.name])||void 0===o?void 0:o.$clear){delete i[a.name];continue}}i[a.name]=n[a.name]}return 0===Object.keys(i.$add).length&&delete i.$add,0===Object.keys(i.$set).length&&delete i.$set,0===Object.keys(i.$clear).length&&delete i.$clear,t?await (0,a.qb)("/content/".concat(e.name,"/").concat(t),i):await (0,a.SO)("/content/".concat(e.name),i)},l=e=>{let n={};return(null==e?void 0:e.limit)&&(n.limit=e.limit),(null==e?void 0:e.page)&&(n.page=e.page),(null==e?void 0:e.sort)&&(n.sort=e.sort),(null==e?void 0:e.select)&&(n.select=e.select),(null==e?void 0:e.filter)&&(n.filter=JSON.stringify(e.filter)),new URLSearchParams(n).toString()},o=async(e,n)=>{if(!e)throw Error("Schema name is required");let t={};(null==n?void 0:n.limit)&&(t.limit=n.limit),(null==n?void 0:n.page)&&(t.page=n.page),(null==n?void 0:n.sort)&&(t.sort=n.sort),(null==n?void 0:n.select)&&(t.select=n.select),(null==n?void 0:n.filter)&&(t.filter=JSON.stringify(n.filter));let r=Object.keys(t).length>0?"?"+l(n):"";return(0,a.dX)("/content/".concat(e).concat(r))},c=async(e,n,t)=>{let r=(null==t?void 0:t.length)?"?select=".concat(t.join(",")):"";return(0,a.dX)("/content/".concat(e.name,"/").concat(n).concat(r))},s=async(e,n)=>(0,a.HG)("/content/".concat(e,"/").concat(n))},79984:function(e,n,t){"use strict";t.d(n,{Hz:function(){return f},Il:function(){return l},JT:function(){return s},MG:function(){return o},Qk:function(){return c},Vo:function(){return u},_8:function(){return i},aF:function(){return d}});var r=t(2265),a=t(18157);let i={appConfig:{version:"",resources:[],menus:[],schemas:[]},setAppConfig:()=>null,reloadAppConfig:()=>Promise.resolve()},l=(0,r.createContext)(i),o=()=>(0,r.useContext)(l).appConfig,c=()=>(0,r.useContext)(l).appConfig.schemas,s=e=>(0,r.useContext)(l).appConfig.schemas.find(n=>n.name===e),u=(0,r.createContext)({user:void 0,setUser:()=>null}),d=()=>(0,r.useContext)(u).user,f=function(e){let n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[];return e?e.fields.filter(e=>"relation"===e.type&&e.relation||"file"===e.type).map(e=>{if(!e.relation)throw Error("Field ".concat(e.name," is relation type but has no relation field"));if((0,a.EC)(e.relation)&&"file"!==e.type)return null;let t=n.find(n=>{var t;return n.name===(null===(t=e.relation)||void 0===t?void 0:t.schema)});if(!t)throw Error("Schema ".concat(e.relation.schema," not found"));let r=["".concat(e.name,".id"),"".concat(e.name,".").concat(t.label_field)];return"file"===e.type&&r.push("".concat(e.name,".path"),"".concat(e.name,".type"),"".concat(e.name,".disk")),r.join(",")}).filter(Boolean):[]}},96304:function(e,n,t){"use strict";t.d(n,{J1:function(){return l},J2:function(){return o},cQ:function(){return a},uV:function(){return s},uX:function(){return i},yR:function(){return c}});var r=t(84971);let a=async()=>(await (0,r.dX)("/schema")).filter(e=>!e.is_junction_schema),i=async(e,n,t)=>{var a,i;let l=null;return(null==(l=n?await (0,r.qb)("/schema/".concat(n),{schema:e,rename_fields:null!=t?t:[]}):await (0,r.SO)("/schema",e))?void 0:null===(a=l.fields)||void 0===a?void 0:a.length)&&(l.fields=(null!==(i=null==l?void 0:l.fields)&&void 0!==i?i:[]).map(e=>(e.server_name=e.name,e))),l},l=async e=>{var n,t;if(!e)return null;let a=await (0,r.dX)("/schema/".concat(e));return(null==a?void 0:null===(n=a.fields)||void 0===n?void 0:n.length)&&(a.fields=(null!==(t=null==a?void 0:a.fields)&&void 0!==t?t:[]).map(e=>(e.server_name=e.name,e))),a},o=async e=>await (0,r.SO)("/schema/export",e),c=async e=>{let n=new FormData;return e.forEach(e=>n.append("file",e)),await (0,r.SO)("/schema/import",n,{headers:{"Content-Type":"multipart/form-data"}})},s=e=>(0,r.HG)("/schema/".concat(e))}},function(e){e.O(0,[310,637,789,792,829,532,334,971,69,744],function(){return e(e.s=31873)}),_N_E=e.O()}]);