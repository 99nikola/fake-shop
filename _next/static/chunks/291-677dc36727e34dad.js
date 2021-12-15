"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[291],{1164:function(e,t,r){function s(e,t){if(null==e)return{};var r,s,a=function(e,t){if(null==e)return{};var r,s,a={},n=Object.keys(e);for(s=0;s<n.length;s++)r=n[s],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(s=0;s<n.length;s++)r=n[s],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}r.d(t,{Z:function(){return s}})},7536:function(e,t,r){r.d(t,{Qr:function(){return W},cI:function(){return xe}});var s=r(7294),a=e=>"checkbox"===e.type,n=e=>e instanceof Date,i=e=>null==e;const o=e=>"object"===typeof e;var u=e=>!i(e)&&!Array.isArray(e)&&o(e)&&!n(e),l=e=>u(e)&&e.target?a(e.target)?e.target.checked:e.target.value:e,c=(e,t)=>[...e].some((e=>(e=>e.substring(0,e.search(/.\d/))||e)(t)===e)),d=e=>(e||[]).filter(Boolean),f=e=>void 0===e,g=(e,t,r)=>{if(u(e)&&t){const s=d(t.split(/[,[\].]+?/)).reduce(((e,t)=>i(e)?e:e[t]),e);return f(s)||s===e?f(e[t])?r:e[t]:s}};const m="blur",y="change",b="onBlur",h="onChange",v="onSubmit",p="onTouched",_="all",O="max",V="min",j="maxLength",w="minLength",F="pattern",A="required",S="validate";var x=(e,t)=>{const r=Object.assign({},e);return delete r[t],r};const k=s.createContext(null),D=()=>s.useContext(k);var C=(e,t,r,s=!0)=>{function a(a){return()=>{if(a in e)return t[a]!==_&&(t[a]=!s||_),r&&(r[a]=!0),e[a]}}const n={};for(const i in e)Object.defineProperty(n,i,{get:a(i)});return n},E=e=>u(e)&&!Object.keys(e).length,U=(e,t,r)=>{const s=x(e,"name");return E(s)||Object.keys(s).length>=Object.keys(t).length||Object.keys(s).find((e=>t[e]===(!r||_)))},N=e=>Array.isArray(e)?e:[e],T=(e,t,r)=>r&&t?e===t:!e||!t||e===t||N(e).some((e=>e&&(e.startsWith(t)||t.startsWith(e))));function B(e){const t=s.useRef(e);t.current=e,s.useEffect((()=>{const r=!e.disabled&&t.current.subject.subscribe({next:t.current.callback});return()=>(e=>{e&&e.unsubscribe()})(r)}),[e.disabled])}var L=e=>"string"===typeof e,M=(e,t,r,s)=>{const a=Array.isArray(e);return L(e)?(s&&t.watch.add(e),g(r,e)):a?e.map((e=>(s&&t.watch.add(e),g(r,e)))):(s&&(t.watchAll=!0),r)},q=e=>"function"===typeof e,R=e=>{for(const t in e)if(q(e[t]))return!0;return!1};function I(e){const t=D(),{name:r,control:a=t.control,shouldUnregister:n}=e,i=c(a._names.array,r),o=function(e){const t=D(),{control:r=t.control,name:a,defaultValue:n,disabled:i,exact:o}=e||{},l=s.useRef(a);l.current=a,B({disabled:i,subject:r._subjects.watch,callback:e=>{if(T(l.current,e.name,o)){const t=M(l.current,r._names,e.values||r._formValues);d(f(l.current)||u(t)&&!R(t)?Object.assign({},t):Array.isArray(t)?[...t]:t)}}});const[c,d]=s.useState(f(n)?r._getWatch(a):n);return s.useEffect((()=>{r._removeUnmounted()})),c}({control:a,name:r,defaultValue:g(a._formValues,r,g(a._defaultValues,r,e.defaultValue)),exact:!i}),d=function(e){const t=D(),{control:r=t.control,disabled:a,name:n,exact:i}=e||{},[o,u]=s.useState(r._formState),l=s.useRef({isDirty:!1,dirtyFields:!1,touchedFields:!1,isValidating:!1,isValid:!1,errors:!1}),c=s.useRef(n);return c.current=n,B({disabled:a,callback:e=>T(c.current,e.name,i)&&U(e,l.current)&&u(Object.assign(Object.assign({},r._formState),e)),subject:r._subjects.state}),C(o,r._proxyFormState,l.current,!1)}({control:a,name:r});s.useRef(r).current=r;const b=a.register(r,Object.assign(Object.assign({},e.rules),{value:o}));return s.useEffect((()=>{const e=(e,t)=>{const r=g(a._fields,e);r&&(r._f.mount=t)};return e(r,!0),()=>{const t=a._options.shouldUnregister||n;(i?t&&!a._stateFlags.action:t)?a.unregister(r,{keepDefaultValue:!0}):e(r,!1)}}),[r,a,i,n]),{field:{onChange:e=>{b.onChange({target:{value:l(e),name:r},type:y})},onBlur:()=>{b.onBlur({target:{value:g(a._formValues,r),name:r},type:m})},name:r,value:o,ref:e=>{const t=g(a._fields,r);e&&t&&e.focus&&(t._f.ref={focus:()=>e.focus(),setCustomValidity:t=>e.setCustomValidity(t),reportValidity:()=>e.reportValidity()})}},formState:d,fieldState:{invalid:!!g(d.errors,r),isDirty:!!g(d.dirtyFields,r),isTouched:!!g(d.touchedFields,r),error:g(d.errors,r)}}}const W=e=>e.render(I(e));var P=(e,t,r,s,a)=>t?Object.assign(Object.assign({},r[e]),{types:Object.assign(Object.assign({},r[e]&&r[e].types?r[e].types:{}),{[s]:a||!0})}):{},$=e=>/^\w*$/.test(e),H=e=>d(e.replace(/["|']|\]/g,"").split(/\.|\[/));function Q(e,t,r){let s=-1;const a=$(t)?[t]:H(t),n=a.length,i=n-1;for(;++s<n;){const t=a[s];let n=r;if(s!==i){const r=e[t];n=u(r)||Array.isArray(r)?r:isNaN(+a[s+1])?{}:[]}e[t]=n,e=e[t]}return e}const Z=(e,t,r)=>{for(const s of r||Object.keys(e)){const r=g(e,s);if(r){const e=r._f,s=x(r,"_f");if(e&&t(e.name)){if(e.ref.focus&&f(e.ref.focus()))break;if(e.refs){e.refs[0].focus();break}}else u(s)&&Z(s,t)}}};var z=(e,t,r)=>!r&&(t.watchAll||t.watch.has(e)||[...t.watch].some((t=>e.startsWith(t)&&/^\.\w+/.test(e.slice(t.length)))));function G(e){let t;const r=Array.isArray(e);if(e instanceof Date)t=new Date(e);else if(e instanceof Set)t=new Set(e);else{if(!r&&!u(e))return e;t=r?[]:{};for(const r in e){if(q(e[r])){t=e;break}t[r]=G(e[r])}}return t}function J(){let e=[];return{get observers(){return e},next:t=>{for(const r of e)r.next(t)},subscribe:t=>(e.push(t),{unsubscribe:()=>{e=e.filter((e=>e!==t))}}),unsubscribe:()=>{e=[]}}}var K=e=>i(e)||!o(e);function X(e,t){if(K(e)||K(t))return e===t;if(n(e)&&n(t))return e.getTime()===t.getTime();const r=Object.keys(e),s=Object.keys(t);if(r.length!==s.length)return!1;for(const a of r){const r=e[a];if(!s.includes(a))return!1;if("ref"!==a){const e=t[a];if(n(r)&&n(e)||u(r)&&u(e)||Array.isArray(r)&&Array.isArray(e)?!X(r,e):r!==e)return!1}}return!0}var Y=e=>({isOnSubmit:!e||e===v,isOnBlur:e===b,isOnChange:e===h,isOnAll:e===_,isOnTouch:e===p}),ee=e=>"boolean"===typeof e,te=e=>"file"===e.type,re=e=>e instanceof HTMLElement,se=e=>"select-multiple"===e.type,ae=e=>"radio"===e.type,ne="undefined"!==typeof window&&"undefined"!==typeof window.HTMLElement&&"undefined"!==typeof document,ie=e=>re(e)&&document.contains(e);function oe(e,t){const r=$(t)?[t]:H(t),s=1==r.length?e:function(e,t){const r=t.slice(0,-1).length;let s=0;for(;s<r;)e=f(e)?s++:e[t[s++]];return e}(e,r),a=r[r.length-1];let n;s&&delete s[a];for(let i=0;i<r.slice(0,-1).length;i++){let t,s=-1;const a=r.slice(0,-(i+1)),o=a.length-1;for(i>0&&(n=e);++s<a.length;){const r=a[s];t=t?t[r]:e[r],o===s&&(u(t)&&E(t)||Array.isArray(t)&&!t.filter((e=>u(e)&&!E(e)||ee(e))).length)&&(n?delete n[r]:delete e[r]),n=t}}return e}function ue(e,t={}){const r=Array.isArray(e);if(u(e)||r)for(const s in e)Array.isArray(e[s])||u(e[s])&&!R(e[s])?(t[s]=Array.isArray(e[s])?[]:{},ue(e[s],t[s])):i(e[s])||(t[s]=!0);return t}function le(e,t,r){const s=Array.isArray(e);if(u(e)||s)for(const a in e)Array.isArray(e[a])||u(e[a])&&!R(e[a])?f(t)||K(r[a])?r[a]=Array.isArray(e[a])?ue(e[a],[]):Object.assign({},ue(e[a])):le(e[a],i(t)?{}:t[a],r[a]):r[a]=!X(e[a],t[a]);return r}var ce=(e,t)=>le(e,t,ue(t));const de={value:!1,isValid:!1},fe={value:!0,isValid:!0};var ge=e=>{if(Array.isArray(e)){if(e.length>1){const t=e.filter((e=>e&&e.checked&&!e.disabled)).map((e=>e.value));return{value:t,isValid:!!t.length}}return e[0].checked&&!e[0].disabled?e[0].attributes&&!f(e[0].attributes.value)?f(e[0].value)||""===e[0].value?fe:{value:e[0].value,isValid:!0}:fe:de}return de},me=(e,{valueAsNumber:t,valueAsDate:r,setValueAs:s})=>f(e)?e:t?""===e?NaN:+e:r&&L(e)?new Date(e):s?s(e):e;const ye={isValid:!1,value:null};var be=e=>Array.isArray(e)?e.reduce(((e,t)=>t&&t.checked&&!t.disabled?{isValid:!0,value:t.value}:e),ye):ye;function he(e){const t=e.ref;if(!(e.refs?e.refs.every((e=>e.disabled)):t.disabled))return te(t)?t.files:ae(t)?be(e.refs).value:se(t)?[...t.selectedOptions].map((({value:e})=>e)):a(t)?ge(e.refs).value:me(f(t.value)?e.ref.value:t.value,e)}var ve=e=>e instanceof RegExp,pe=e=>f(e)?void 0:ve(e)?e.source:u(e)?ve(e.value)?e.value.source:e.value:e;function _e(e,t,r){const s=g(e,r);if(s||$(r))return{error:s,name:r};const a=r.split(".");for(;a.length;){const s=a.join("."),n=g(t,s),i=g(e,s);if(n&&!Array.isArray(n)&&r!==s)return{name:r};if(i&&i.type)return{name:s,error:i};a.pop()}return{name:r}}var Oe=(e,t)=>!d(g(e,t)).length&&oe(e,t),Ve=e=>L(e)||s.isValidElement(e);function je(e,t,r="validate"){if(Ve(e)||Array.isArray(e)&&e.every(Ve)||ee(e)&&!e)return{type:r,message:Ve(e)?e:"",ref:t}}var we=e=>u(e)&&!ve(e)?e:{value:e,message:""},Fe=async(e,t,r,s)=>{const{ref:n,refs:o,required:l,maxLength:c,minLength:d,min:f,max:g,pattern:m,validate:y,name:b,valueAsNumber:h,mount:v,disabled:p}=e._f;if(!v||p)return{};const _=o?o[0]:n,x=e=>{s&&_.reportValidity&&(_.setCustomValidity(ee(e)?"":e||" "),_.reportValidity())},k={},D=ae(n),C=a(n),U=D||C,N=(h||te(n))&&!n.value||""===t||Array.isArray(t)&&!t.length,T=P.bind(null,b,r,k),B=(e,t,r,s=j,a=w)=>{const i=e?t:r;k[b]=Object.assign({type:e?s:a,message:i,ref:n},T(e?s:a,i))};if(l&&(!U&&(N||i(t))||ee(t)&&!t||C&&!ge(o).isValid||D&&!be(o).isValid)){const{value:e,message:t}=Ve(l)?{value:!!l,message:l}:we(l);if(e&&(k[b]=Object.assign({type:A,message:t,ref:_},T(A,t)),!r))return x(t),k}if(!N&&(!i(f)||!i(g))){let e,s;const a=we(g),o=we(f);if(isNaN(t)){const r=n.valueAsDate||new Date(t);L(a.value)&&(e=r>new Date(a.value)),L(o.value)&&(s=r<new Date(o.value))}else{const r=n.valueAsNumber||parseFloat(t);i(a.value)||(e=r>a.value),i(o.value)||(s=r<o.value)}if((e||s)&&(B(!!e,a.message,o.message,O,V),!r))return x(k[b].message),k}if((c||d)&&!N&&L(t)){const e=we(c),s=we(d),a=!i(e.value)&&t.length>e.value,n=!i(s.value)&&t.length<s.value;if((a||n)&&(B(a,e.message,s.message),!r))return x(k[b].message),k}if(m&&!N&&L(t)){const{value:e,message:s}=we(m);if(ve(e)&&!t.match(e)&&(k[b]=Object.assign({type:F,message:s,ref:n},T(F,s)),!r))return x(s),k}if(y)if(q(y)){const e=je(await y(t),_);if(e&&(k[b]=Object.assign(Object.assign({},e),T(S,e.message)),!r))return x(e.message),k}else if(u(y)){let e={};for(const s in y){if(!E(e)&&!r)break;const a=je(await y[s](t),_,s);a&&(e=Object.assign(Object.assign({},a),T(s,a.message)),x(a.message),r&&(k[b]=e))}if(!E(e)&&(k[b]=Object.assign({ref:_},e),!r))return k}return x(!0),k};const Ae={mode:v,reValidateMode:h,shouldFocusError:!0};function Se(e={}){let t,r=Object.assign(Object.assign({},Ae),e),s={isDirty:!1,isValidating:!1,dirtyFields:{},isSubmitted:!1,submitCount:0,touchedFields:{},isSubmitting:!1,isSubmitSuccessful:!1,isValid:!1,errors:{}},o={},u=r.defaultValues||{},y=r.shouldUnregister?{}:G(u),b={action:!1,mount:!1,watch:!1},h={mount:new Set,unMount:new Set,array:new Set,watch:new Set},v=0,p={};const O={isDirty:!1,dirtyFields:!1,touchedFields:!1,isValidating:!1,isValid:!1,errors:!1},V={watch:J(),array:J(),state:J()},j=Y(r.mode),w=Y(r.reValidateMode),F=r.criteriaMode===_,A=async e=>{let t=!1;return O.isValid&&(t=r.resolver?E((await U()).errors):await T(o,!0),e||t===s.isValid||(s.isValid=t,V.state.next({isValid:t}))),t},S=(e,t)=>(Q(s.errors,e,t),V.state.next({errors:s.errors})),k=(e,t,r)=>{const s=g(o,e);if(s){const a=g(y,e,g(u,e));f(a)||r&&r.defaultChecked||t?Q(y,e,t?a:he(s._f)):I(e,a)}b.mount&&A()},D=(e,t,r,a=!0)=>{let n=!1;const i={name:e},o=g(s.touchedFields,e);if(O.isDirty){const e=s.isDirty;s.isDirty=i.isDirty=B(),n=e!==i.isDirty}if(O.dirtyFields&&!r){const r=g(s.dirtyFields,e);X(g(u,e),t)?oe(s.dirtyFields,e):Q(s.dirtyFields,e,!0),i.dirtyFields=s.dirtyFields,n=n||r!==g(s.dirtyFields,e)}return r&&!o&&(Q(s.touchedFields,e,r),i.touchedFields=s.touchedFields,n=n||O.touchedFields&&o!==r),n&&a&&V.state.next(i),n?i:{}},C=async(r,a,n,i,o)=>{const u=g(s.errors,a),l=O.isValid&&s.isValid!==n;var c,d;if(e.delayError&&i?(t=t||(c=S,d=e.delayError,(...e)=>{clearTimeout(v),v=window.setTimeout((()=>c(...e)),d)}),t(a,i)):(clearTimeout(v),i?Q(s.errors,a,i):oe(s.errors,a)),((i?!X(u,i):u)||!E(o)||l)&&!r){const e=Object.assign(Object.assign(Object.assign({},o),l?{isValid:n}:{}),{errors:s.errors,name:a});s=Object.assign(Object.assign({},s),e),V.state.next(e)}p[a]--,O.isValidating&&!p[a]&&(V.state.next({isValidating:!1}),p={})},U=async e=>r.resolver?await r.resolver(Object.assign({},y),r.context,((e,t,r,s)=>{const a={};for(const n of e){const e=g(t,n);e&&Q(a,n,e._f)}return{criteriaMode:r,names:[...e],fields:a,shouldUseNativeValidation:s}})(e||h.mount,o,r.criteriaMode,r.shouldUseNativeValidation)):{},T=async(e,t,a={valid:!0})=>{for(const n in e){const i=e[n];if(i){const e=i._f,n=x(i,"_f");if(e){const n=await Fe(i,g(y,e.name),F,r.shouldUseNativeValidation);if(n[e.name]&&(a.valid=!1,t))break;t||(n[e.name]?Q(s.errors,e.name,n[e.name]):oe(s.errors,e.name))}n&&await T(n,t,a)}}return a.valid},B=(e,t)=>(e&&t&&Q(y,e,t),!X(ue(),u)),R=(e,t,r)=>{const s=Object.assign({},b.mount?y:f(t)?u:L(e)?{[e]:t}:t);return M(e,h,s,r)},I=(e,t,r={})=>{const s=g(o,e);let n=t;if(s){const r=s._f;r&&(Q(y,e,me(t,r)),n=ne&&re(r.ref)&&i(t)?"":t,se(r.ref)?[...r.ref.options].forEach((e=>e.selected=n.includes(e.value))):r.refs?a(r.ref)?r.refs.length>1?r.refs.forEach((e=>e.checked=Array.isArray(n)?!!n.find((t=>t===e.value)):n===e.value)):r.refs[0].checked=!!n:r.refs.forEach((e=>e.checked=e.value===n)):te(r.ref)||(r.ref.value=n,r.ref.type||V.watch.next({name:e})))}(r.shouldDirty||r.shouldTouch)&&D(e,n,r.shouldTouch),r.shouldValidate&&H(e)},W=(e,t,r)=>{for(const s in t){const a=t[s],i=`${e}.${s}`,u=g(o,i);!h.array.has(e)&&K(a)&&(!u||u._f)||n(a)?I(i,a,r):W(i,a,r)}},P=(e,t,r={})=>{const a=g(o,e),n=h.array.has(e);Q(y,e,t),n?(V.array.next({name:e,values:y}),(O.isDirty||O.dirtyFields)&&r.shouldDirty&&(s.dirtyFields=ce(u,y),V.state.next({name:e,dirtyFields:s.dirtyFields,isDirty:B(e,t)}))):!a||a._f||i(t)?I(e,t,r):W(e,t,r),z(e,h)&&V.state.next({}),V.watch.next({name:e})},$=async e=>{const t=e.target;let a=t.name;const n=g(o,a);if(n){let u,c;const d=t.type?he(n._f):l(e),f=e.type===m,b=!((i=n._f).mount&&(i.required||i.min||i.max||i.maxLength||i.minLength||i.pattern||i.validate))&&!r.resolver&&!g(s.errors,a)&&!n._f.deps||((e,t,r,s,a)=>!a.isOnAll&&(!r&&a.isOnTouch?!(t||e):(r?s.isOnBlur:a.isOnBlur)?!e:!(r?s.isOnChange:a.isOnChange)||e))(f,g(s.touchedFields,a),s.isSubmitted,w,j),v=z(a,h,f);f?n._f.onBlur&&n._f.onBlur(e):n._f.onChange&&n._f.onChange(e),Q(y,a,d);const _=D(a,d,f,!1),S=!E(_)||v;if(!f&&V.watch.next({name:a,type:e.type}),b)return S&&V.state.next(Object.assign({name:a},v?{}:_));if(!f&&v&&V.state.next({}),p[a]=(p[a],1),O.isValidating&&V.state.next({isValidating:!0}),r.resolver){const{errors:e}=await U([a]),t=_e(s.errors,o,a),r=_e(e,o,t.name||a);u=r.error,a=r.name,c=E(e)}else u=(await Fe(n,g(y,a),F,r.shouldUseNativeValidation))[a],c=await A(!0);n._f.deps&&H(n._f.deps),C(!1,a,c,u,_)}var i},H=async(e,t={})=>{let a,n;const i=N(e);if(V.state.next({isValidating:!0}),r.resolver){const t=await(async e=>{const{errors:t}=await U();if(e)for(const r of e){const e=g(t,r);e?Q(s.errors,r,e):oe(s.errors,r)}else s.errors=t;return t})(f(e)?e:i);a=E(t),n=e?!i.some((e=>g(t,e))):a}else e?(n=(await Promise.all(i.map((async e=>{const t=g(o,e);return await T(t&&t._f?{[e]:t}:t)})))).every(Boolean),(n||s.isValid)&&A()):n=a=await T(o);return V.state.next(Object.assign(Object.assign(Object.assign({},!L(e)||O.isValid&&a!==s.isValid?{}:{name:e}),r.resolver?{isValid:a}:{}),{errors:s.errors,isValidating:!1})),t.shouldFocus&&!n&&Z(o,(e=>g(s.errors,e)),e?i:h.mount),n},ue=e=>{const t=Object.assign(Object.assign({},u),b.mount?y:{});return f(e)?t:L(e)?g(t,e):e.map((e=>g(t,e)))},le=(e,t={})=>{for(const a of e?N(e):h.mount)h.mount.delete(a),h.array.delete(a),g(o,a)&&(t.keepValue||(oe(o,a),oe(y,a)),!t.keepError&&oe(s.errors,a),!t.keepDirty&&oe(s.dirtyFields,a),!t.keepTouched&&oe(s.touchedFields,a),!r.shouldUnregister&&!t.keepDefaultValue&&oe(u,a));V.watch.next({}),V.state.next(Object.assign(Object.assign({},s),t.keepDirty?{isDirty:B()}:{})),!t.keepIsValid&&A()},de=(e,t={})=>{let s=g(o,e);return Q(o,e,{_f:Object.assign(Object.assign(Object.assign({},s&&s._f?s._f:{ref:{name:e}}),{name:e,mount:!0}),t)}),h.mount.add(e),!f(t.value)&&!t.disabled&&Q(y,e,g(y,e,t.value)),s?ee(t.disabled)&&Q(y,e,t.disabled?void 0:g(y,e,he(s._f))):k(e,!0),Object.assign(Object.assign(Object.assign({},ee(t.disabled)?{disabled:t.disabled}:{}),r.shouldUseNativeValidation?{required:!!t.required,min:pe(t.min),max:pe(t.max),minLength:pe(t.minLength),maxLength:pe(t.maxLength),pattern:pe(t.pattern)}:{}),{name:e,onChange:$,onBlur:$,ref:n=>{if(n){de(e,t),s=g(o,e);const r=f(n.value)&&n.querySelectorAll&&n.querySelectorAll("input,select,textarea")[0]||n,i=(e=>ae(e)||a(e))(r);if(r===s._f.ref||i&&d(s._f.refs).find((e=>e===r)))return;Q(o,e,{_f:i?Object.assign(Object.assign({},s._f),{refs:[...d(s._f.refs).filter(ie),r],ref:{type:r.type,name:e}}):Object.assign(Object.assign({},s._f),{ref:r})}),!t.disabled&&k(e,!1,r)}else s=g(o,e,{}),s._f&&(s._f.mount=!1),(r.shouldUnregister||t.shouldUnregister)&&(!c(h.array,e)||!b.action)&&h.unMount.add(e)}})};return{control:{register:de,unregister:le,_executeSchema:U,_getWatch:R,_getDirty:B,_updateValid:A,_removeUnmounted:()=>{for(const e of h.unMount){const t=g(o,e);t&&(t._f.refs?t._f.refs.every((e=>!ie(e))):!ie(t._f.ref))&&le(e)}h.unMount=new Set},_updateFieldArray:(e,t,r,a=[],n=!0,i=!0)=>{if(b.action=!0,i&&g(o,e)){const s=t(g(o,e),r.argA,r.argB);n&&Q(o,e,s)}if(Array.isArray(g(s.errors,e))){const a=t(g(s.errors,e),r.argA,r.argB);n&&Q(s.errors,e,a),Oe(s.errors,e)}if(O.touchedFields&&g(s.touchedFields,e)){const a=t(g(s.touchedFields,e),r.argA,r.argB);n&&Q(s.touchedFields,e,a),Oe(s.touchedFields,e)}(O.dirtyFields||O.isDirty)&&(s.dirtyFields=ce(u,y)),V.state.next({isDirty:B(e,a),dirtyFields:s.dirtyFields,errors:s.errors,isValid:s.isValid})},_getFieldArray:t=>d(g(b.mount?y:u,t,e.shouldUnregister?g(u,t,[]):[])),_subjects:V,_proxyFormState:O,get _fields(){return o},set _fields(e){o=e},get _formValues(){return y},set _formValues(e){y=e},get _stateFlags(){return b},set _stateFlags(e){b=e},get _defaultValues(){return u},set _defaultValues(e){u=e},get _names(){return h},set _names(e){h=e},get _formState(){return s},set _formState(e){s=e},get _options(){return r},set _options(e){r=Object.assign(Object.assign({},r),e)}},trigger:H,register:de,handleSubmit:(e,t)=>async a=>{a&&(a.preventDefault&&a.preventDefault(),a.persist&&a.persist());let n=!0,i=r.shouldUnregister?G(y):Object.assign({},y);V.state.next({isSubmitting:!0});try{if(r.resolver){const{errors:e,values:t}=await U();s.errors=e,i=t}else await T(o);E(s.errors)&&Object.keys(s.errors).every((e=>g(i,e)))?(V.state.next({errors:{},isSubmitting:!0}),await e(i,a)):(t&&await t(s.errors,a),r.shouldFocusError&&Z(o,(e=>g(s.errors,e)),h.mount))}catch(u){throw n=!1,u}finally{s.isSubmitted=!0,V.state.next({isSubmitted:!0,isSubmitting:!1,isSubmitSuccessful:E(s.errors)&&n,submitCount:s.submitCount+1,errors:s.errors})}},watch:(e,t)=>q(e)?V.watch.subscribe({next:r=>e(R(void 0,t),r)}):R(e,t,!0),setValue:P,getValues:ue,reset:(t,r={})=>{const a=t||u,n=G(a),i=t&&!E(t)?n:u;if(r.keepDefaultValues||(u=a),!r.keepValues){if(ne&&f(t))for(const e of h.mount){const t=g(o,e);if(t&&t._f){const e=Array.isArray(t._f.refs)?t._f.refs[0]:t._f.ref;try{re(e)&&e.closest("form").reset();break}catch(l){}}}y=e.shouldUnregister?r.keepDefaultValues?G(u):{}:n,o={},V.watch.next({values:i}),V.array.next({values:i})}h={mount:new Set,unMount:new Set,array:new Set,watch:new Set,watchAll:!1,focus:""},b.mount=!O.isValid||!!r.keepIsValid,b.watch=!!e.shouldUnregister,V.state.next({submitCount:r.keepSubmitCount?s.submitCount:0,isDirty:r.keepDirty?s.isDirty:!!r.keepDefaultValues&&!X(t,u),isSubmitted:!!r.keepIsSubmitted&&s.isSubmitted,dirtyFields:r.keepDirty?s.dirtyFields:r.keepDefaultValues&&t?Object.entries(t).reduce(((e,[t,r])=>Object.assign(Object.assign({},e),{[t]:r!==g(u,t)})),{}):{},touchedFields:r.keepTouched?s.touchedFields:{},errors:r.keepErrors?s.errors:{},isSubmitting:!1,isSubmitSuccessful:!1})},resetField:(e,t={})=>{f(t.defaultValue)?P(e,g(u,e)):(P(e,t.defaultValue),Q(u,e,t.defaultValue)),t.keepTouched||oe(s.touchedFields,e),t.keepDirty||(oe(s.dirtyFields,e),s.isDirty=t.defaultValue?B(e,g(u,e)):B()),t.keepError||(oe(s.errors,e),O.isValid&&A()),V.state.next(Object.assign({},s))},clearErrors:e=>{e?N(e).forEach((e=>oe(s.errors,e))):s.errors={},V.state.next({errors:s.errors,isValid:!0})},unregister:le,setError:(e,t,r)=>{const a=(g(o,e,{_f:{}})._f||{}).ref;Q(s.errors,e,Object.assign(Object.assign({},t),{ref:a})),V.state.next({name:e,errors:s.errors,isValid:!1}),r&&r.shouldFocus&&a&&a.focus&&a.focus()},setFocus:e=>{const t=g(o,e)._f;(t.ref.focus?t.ref:t.refs[0]).focus()}}}function xe(e={}){const t=s.useRef(),[r,a]=s.useState({isDirty:!1,isValidating:!1,dirtyFields:{},isSubmitted:!1,submitCount:0,touchedFields:{},isSubmitting:!1,isSubmitSuccessful:!1,isValid:!1,errors:{}});t.current?t.current.control._options=e:t.current=Object.assign(Object.assign({},Se(e)),{formState:r});const n=t.current.control;return B({subject:n._subjects.state,callback:e=>{U(e,n._proxyFormState,!0)&&(n._formState=Object.assign(Object.assign({},n._formState),e),a(Object.assign({},n._formState)))}}),s.useEffect((()=>{n._stateFlags.mount||(n._proxyFormState.isValid&&n._updateValid(),n._stateFlags.mount=!0),n._stateFlags.watch&&(n._stateFlags.watch=!1,n._subjects.state.next({})),n._removeUnmounted()})),t.current.formState=C(r,n._proxyFormState),t.current}}}]);