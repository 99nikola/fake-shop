(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[161],{3014:function(e,r,t){"use strict";var n=t(2809),o=t(1164),u=t(7294),i=t(7379),c=t(5893),a=["width","errorMessage","type","error"];function s(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function p(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?s(Object(t),!0).forEach((function(r){(0,n.Z)(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):s(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}var f=(0,u.forwardRef)((function(e,r){var t=e.width,n=e.errorMessage,u=e.type,i=e.error,s=(0,o.Z)(e,a);return(0,c.jsxs)(l,{width:t,children:[(0,c.jsx)("input",p(p({},s),{},{ref:r,type:u,"aria-invalid":i})),(0,c.jsx)("p",{className:"error-message",children:n||""})]})}));f.displayName="InputField";var l=i.ZP.div.withConfig({displayName:"Inputstyled__StyledInput",componentId:"sc-ion5qx-0"})(["margin:5px;& > input{width:",';height:40px;mix-blend-mode:normal;border:2px solid gray;box-sizing:border-box;border-radius:6px;font-weight:500;font-size:16px;line-height:26px;padding:0 10px;}& > input:focus{outline:2px solid black;border:none;}& > input[aria-invalid="true"]{outline:2px solid red;border:none;}& .error-message{color:red;margin:2px 0 2px 20px;}'],(function(e){return e.width||"auto"}));r.Z=f},8414:function(e,r,t){"use strict";t.d(r,{Z:function(){return v}});var n=t(1163),o=t(7294),u=t(2526),i=t(88),c=t(5893),a=function(e){var r=(0,n.useRouter)(),t=(0,o.useCallback)((function(){(0,u.YA)(r,e.page.toString())}),[r,e.page]);return(0,c.jsx)("button",{onClick:t,children:e.page})},s=t(2809),p=t(2283),f=t(5386),l=t(3014);function b(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function d(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?b(Object(t),!0).forEach((function(r){(0,s.Z)(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):b(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}var g=function(e){var r=(0,p.cI)(),t=(0,n.useRouter)(),i=(0,o.useCallback)((function(r){(0,u.Yp)(t,r.perPage),e.setCustomInput(!1)}),[t]);return(0,c.jsx)("form",{onSubmit:r.handleSubmit(i),children:(0,c.jsx)(p.Qr,{name:"perPage",control:r.control,defaultValue:"",rules:f.v,render:function(e){var r,t=e.field,n=e.fieldState;return(0,c.jsx)(l.Z,d(d({},t),{},{type:"number",width:"70px",error:Boolean(n.error),errorMessage:null===(r=n.error)||void 0===r?void 0:r.message}))}})})},h=new Set([3,5,10]),O=function(e){var r=(0,n.useRouter)(),t=(0,u.I5)(),i=(0,o.useCallback)((function(t){var n=t.target.value;"custom"!==n?(0,u.Yp)(r,n):e.setShowInput(!0)}),[r]),a=(0,o.useMemo)((function(){return h.has(t)?t:"custom"}),[t]);return(0,c.jsxs)("select",{onChange:i,defaultValue:a,children:[(0,c.jsx)("option",{value:3,children:"3"}),(0,c.jsx)("option",{value:5,children:"5"}),(0,c.jsx)("option",{value:10,children:"10"}),(0,c.jsx)("option",{value:"custom",children:"Custom"})]})},j=function(){var e=(0,o.useState)(!1),r=e[0],t=e[1],n=function(){return r?(0,c.jsx)(g,{setCustomInput:t}):(0,c.jsx)(O,{setShowInput:t})};return(0,c.jsx)(i.Z,{alignItems:"center",children:(0,c.jsx)(n,{})})},v=function(e){var r=(0,u.I5)(),t=(0,o.useMemo)((function(){return Math.ceil(e.total/r)}),[e.total,r]),s=(0,n.useRouter)(),p=(0,o.useMemo)((function(){for(var e=[],r=1;r<=t;r++)e.push((0,c.jsx)(a,{page:r,path:s.pathname},r));return e}),[t,s.pathname]);return(0,c.jsxs)(i.Z,{margin:"10px",children:[p,(0,c.jsx)(j,{})]})}},3694:function(e,r,t){"use strict";var n=t(7294),o=t(2526);r.Z=function(e){var r=e.perPage||(0,o.I5)(),t=e.page||(0,o.fx)();return(0,n.useMemo)((function(){for(var n=[],o=t*r,u=e.items.length<o?e.items.length:o,i=(t-1)*r;i<u;i++)n.push(e.items[i]);return n}),[t,r,e.items])}},2539:function(e,r,t){"use strict";t.r(r);var n=t(1664),o=t(7294),u=t(1043),i=t(8414),c=t(3694),a=t(7848),s=t(441),p=t(5893),f=function(){var e=(0,u.v9)((function(e){return e.categories})),r=e.categories,t=e.isFetching,a=(0,c.Z)({items:r}),s=(0,o.useMemo)((function(){return t?"Loading":a.map((function(e){return(0,p.jsx)(n.default,{href:"/categories/".concat(e),children:(0,p.jsx)("li",{children:e})},e)}))}),[a,t]);return(0,p.jsxs)("ul",{children:[s,(0,p.jsx)(i.Z,{total:r.length})]})};f.getInitialProps=a.Y.getInitialPageProps((function(e){return function(){var r=e.getState().categories;r.isFetching||0!==r.categories.length||e.dispatch((0,s.pE)())}})),r.default=f},5386:function(e,r,t){"use strict";t.d(r,{v:function(){return c},n:function(){return i}});var n=t(2809);function o(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function u(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?o(Object(t),!0).forEach((function(r){(0,n.Z)(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}var i={required:"This field is required"},c=u(u({},i),{},{validate:function(e){return!(e<=0)||"Number must be grather then 0"}})},2526:function(e,r,t){"use strict";t.d(r,{fx:function(){return a},YA:function(){return s},I5:function(){return p},Yp:function(){return f}});var n=t(2809),o=t(1163),u=t(7294);function i(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function c(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?i(Object(t),!0).forEach((function(r){(0,n.Z)(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}var a=function(){var e=(0,o.useRouter)();return(0,u.useMemo)((function(){var r;return Number.parseInt(null===(r=e.query)||void 0===r?void 0:r.page)||1}),[e.query])},s=function(e,r){var t=c(c({},e.query),{},{page:r});e.replace({pathname:e.pathname,query:t})},p=function(){var e=(0,o.useRouter)();return(0,u.useMemo)((function(){var r;return Number.parseInt(null===(r=e.query)||void 0===r?void 0:r.perPage)||5}),[e.query])},f=function(e,r){var t=c(c({},e.query),{},{perPage:r});e.replace({pathname:e.pathname,query:t})}},1974:function(e,r,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/categories",function(){return t(2539)}])}},function(e){e.O(0,[56,774,888,179],(function(){return r=1974,e(e.s=r);var r}));var r=e.O();_N_E=r}]);