(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[161],{6421:function(e,r,t){"use strict";function n(e,r){(null==r||r>e.length)&&(r=e.length);for(var t=0,n=new Array(r);t<r;t++)n[t]=e[t];return n}function o(e){return function(e){if(Array.isArray(e))return n(e)}(e)||function(e){if("undefined"!==typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||function(e,r){if(e){if("string"===typeof e)return n(e,r);var t=Object.prototype.toString.call(e).slice(8,-1);return"Object"===t&&e.constructor&&(t=e.constructor.name),"Map"===t||"Set"===t?Array.from(e):"Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)?n(e,r):void 0}}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}t.d(r,{WT:function(){return s},J$:function(){return f},hz:function(){return u},Sl:function(){return p},UU:function(){return a},pS:function(){return c},MN:function(){return i}});var u=[{breadcrumb:"Home",href:"/"}],i=[].concat(u,[{breadcrumb:"Users",href:"/users"}]),c=function(e,r){return[].concat(o(i),[{breadcrumb:e,href:"/users/"+r}])},a=[].concat(u,[{breadcrumb:"Products",href:"/products"}]),s=[].concat(u,[{breadcrumb:"Categories",href:"/categories"}]),f=function(e){return[].concat(o(s),[{breadcrumb:e,href:"/categories/"+encodeURIComponent(e)}])},p=function(e,r,t){return[].concat(o(f(r)),[{breadcrumb:t,href:"/categories/"+encodeURIComponent(r)+"/"+e}])}},3014:function(e,r,t){"use strict";var n=t(2809),o=t(1164),u=t(7294),i=t(7379),c=t(5893),a=["width","errorMessage","type","error"];function s(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function f(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?s(Object(t),!0).forEach((function(r){(0,n.Z)(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):s(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}var p=(0,u.forwardRef)((function(e,r){var t=e.width,n=e.errorMessage,u=e.type,i=e.error,s=(0,o.Z)(e,a);return(0,c.jsxs)(l,{width:t,children:[(0,c.jsx)("input",f(f({},s),{},{ref:r,type:u,"aria-invalid":i})),(0,c.jsx)("p",{className:"error-message",children:n||""})]})}));p.displayName="InputField";var l=i.ZP.div.withConfig({displayName:"Inputstyled__StyledInput",componentId:"sc-ion5qx-0"})(["margin:5px;& > input{width:",';height:40px;mix-blend-mode:normal;border:2px solid gray;box-sizing:border-box;border-radius:6px;font-weight:500;font-size:16px;line-height:26px;padding:0 10px;}& > input:focus{outline:2px solid black;border:none;}& > input[aria-invalid="true"]{outline:2px solid red;border:none;}& .error-message{color:red;margin:2px 0 2px 20px;}'],(function(e){return e.width||"auto"}));r.Z=p},8635:function(e,r,t){"use strict";t.d(r,{Z:function(){return a}});var n=t(1664),o=t(7294),u=t(88),i=t(7379).ZP.div.withConfig({displayName:"StyledLinkstyled__StyledLink",componentId:"sc-18j747k-0"})(["margin:0 10px;padding:5px 10px;border:1px solid gray;border-radius:6px;cursor:pointer;background-color:",";"],(function(e){return e.last?"lightgray":"whitesmoke"})),c=t(5893),a=function(e){var r=(0,o.useMemo)((function(){return e.items.map((function(r,t){return(0,c.jsx)(n.default,{href:r.href,children:(0,c.jsx)(i,{last:t===e.items.length-1,children:r.breadcrumb})},r.breadcrumb)}))}),[e.items]);return(0,c.jsx)(u.Z,{width:"100%",margin:"20px 0",children:r})}},8414:function(e,r,t){"use strict";t.d(r,{Z:function(){return j}});var n=t(1163),o=t(7294),u=t(2526),i=t(88),c=t(5893),a=function(e){var r=(0,n.useRouter)(),t=(0,o.useCallback)((function(){(0,u.YA)(r,e.page.toString())}),[r,e.page]);return(0,c.jsx)("button",{onClick:t,children:e.page})},s=t(2809),f=t(2283),p=t(5386),l=t(3014);function d(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function b(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?d(Object(t),!0).forEach((function(r){(0,s.Z)(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):d(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}var g=function(e){var r=(0,f.cI)(),t=(0,n.useRouter)(),i=(0,o.useCallback)((function(r){(0,u.Yp)(t,r.perPage),e.setCustomInput(!1)}),[t]);return(0,c.jsx)("form",{onSubmit:r.handleSubmit(i),children:(0,c.jsx)(f.Qr,{name:"perPage",control:r.control,defaultValue:"",rules:p.v,render:function(e){var r,t=e.field,n=e.fieldState;return(0,c.jsx)(l.Z,b(b({},t),{},{type:"number",width:"70px",error:Boolean(n.error),errorMessage:null===(r=n.error)||void 0===r?void 0:r.message}))}})})},h=new Set([3,5,10]),m=function(e){var r=(0,n.useRouter)(),t=(0,u.I5)(),i=(0,o.useCallback)((function(t){var n=t.target.value;"custom"!==n?(0,u.Yp)(r,n):e.setShowInput(!0)}),[r]),a=(0,o.useMemo)((function(){return h.has(t)?t:"custom"}),[t]);return(0,c.jsxs)("select",{onChange:i,defaultValue:a,children:[(0,c.jsx)("option",{value:3,children:"3"}),(0,c.jsx)("option",{value:5,children:"5"}),(0,c.jsx)("option",{value:10,children:"10"}),(0,c.jsx)("option",{value:"custom",children:"Custom"})]})},y=function(){var e=(0,o.useState)(!1),r=e[0],t=e[1],n=function(){return r?(0,c.jsx)(g,{setCustomInput:t}):(0,c.jsx)(m,{setShowInput:t})};return(0,c.jsx)(i.Z,{alignItems:"center",children:(0,c.jsx)(n,{})})},j=function(e){var r=(0,u.I5)(),t=(0,o.useMemo)((function(){return Math.ceil(e.total/r)}),[e.total,r]),s=(0,n.useRouter)(),f=(0,o.useMemo)((function(){for(var e=[],r=1;r<=t;r++)e.push((0,c.jsx)(a,{page:r,path:s.pathname},r));return e}),[t,s.pathname]);return(0,c.jsxs)(i.Z,{margin:"10px",children:[f,(0,c.jsx)(y,{})]})}},3694:function(e,r,t){"use strict";var n=t(7294),o=t(2526);r.Z=function(e){var r=e.perPage||(0,o.I5)(),t=e.page||(0,o.fx)();return(0,n.useMemo)((function(){for(var n=[],o=t*r,u=e.items.length<o?e.items.length:o,i=(t-1)*r;i<u;i++)n.push(e.items[i]);return n}),[t,r,e.items])}},2539:function(e,r,t){"use strict";t.r(r);var n=t(1664),o=t(7294),u=t(1043),i=t(6421),c=t(8635),a=t(8414),s=t(3694),f=t(7848),p=t(441),l=t(5893),d=function(){var e=(0,u.v9)((function(e){return e.categories})),r=e.categories,t=e.isFetching,f=(0,s.Z)({items:r}),p=(0,o.useMemo)((function(){return t?"Loading":f.map((function(e){return(0,l.jsx)(n.default,{href:"/categories/"+encodeURIComponent(e),children:(0,l.jsx)("li",{children:e})},e)}))}),[f,t]);return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(c.Z,{items:i.WT}),(0,l.jsxs)("ul",{children:[p,(0,l.jsx)(a.Z,{total:r.length})]})]})};d.getInitialProps=f.Y.getInitialPageProps((function(e){return function(){var r=e.getState().categories;r.isFetching||0!==r.categories.length||e.dispatch((0,p.pE)())}})),r.default=d},5386:function(e,r,t){"use strict";t.d(r,{v:function(){return c},n:function(){return i}});var n=t(2809);function o(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function u(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?o(Object(t),!0).forEach((function(r){(0,n.Z)(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}var i={required:"This field is required"},c=u(u({},i),{},{validate:function(e){return!(e<=0)||"Number must be grather then 0"}})},2526:function(e,r,t){"use strict";t.d(r,{fx:function(){return a},YA:function(){return s},I5:function(){return f},Yp:function(){return p}});var n=t(2809),o=t(1163),u=t(7294);function i(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function c(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?i(Object(t),!0).forEach((function(r){(0,n.Z)(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}var a=function(){var e=(0,o.useRouter)();return(0,u.useMemo)((function(){var r;return Number.parseInt(null===(r=e.query)||void 0===r?void 0:r.page)||1}),[e.query])},s=function(e,r){var t=c(c({},e.query),{},{page:r});e.replace({pathname:e.pathname,query:t})},f=function(){var e=(0,o.useRouter)();return(0,u.useMemo)((function(){var r;return Number.parseInt(null===(r=e.query)||void 0===r?void 0:r.perPage)||5}),[e.query])},p=function(e,r){var t=c(c({},e.query),{},{perPage:r});e.replace({pathname:e.pathname,query:t})}},1974:function(e,r,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/categories",function(){return t(2539)}])}},function(e){e.O(0,[56,774,888,179],(function(){return r=1974,e(e.s=r);var r}));var r=e.O();_N_E=r}]);