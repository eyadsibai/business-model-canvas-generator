(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{171:function(e,t,n){e.exports=n(394)},392:function(e,t,n){},394:function(e,t,n){"use strict";n.r(t);var r=n(0),o=n.n(r),a=n(22),i=n.n(a),c=n(2),u=n(1),l=n(9),s=n(13),f=n(29),d=n(10),p=n(160),h=n.n(p),v=n(6),m=n.n(v),g=(n(41),n(12),n(24)),b=n.n(g),y=(n(161),n(162)),O=n.n(y);function j(e,t){return b()(e)?O()(h()(e),t,function(e,t){if(m()(e))return t}):void 0!==t?t:e}function w(e,t){return Object.keys(e).reduce(function(n,r){return Object(d.a)({},n,Object(f.a)({},r,t(r,e[r])))},{})}var E=n(94),k=n.n(E),S=n(163),x=n.n(S);function C(e,t){return e.map(function(e){return e&&e[t]})}function R(e,t,n){var r=n.key;if(m()(e)&&m()(t)){var o=C(e,r),a=C(t,r);return x()(o,a).map(function(n){return j(e[o.indexOf(n)],t[a.indexOf(n)])})}return k()(t)?e:t}var P=n(95),H=n.n(P),I=n(164),z=n.n(I),M=n(165),F=n.n(M);function A(e){var t=e.header,n=e.props,r=e.sections;return"# ".concat(t,"\n").concat(n.map(function(e){var t=e.key,n=e.value;return"".concat(t,":").concat(n?" ".concat(n):"")}).join("\n"),"\n\n").concat(r.map(function(e){var t=e.key,n=e.header,r=e.placeholder,o=e.content;return"## ".concat(n," {").concat(t,"}").concat(r?"\n[".concat(r,"]"):"").concat(o?"\n".concat(o):"","\n")}).join("\n"),"\n")}var B=n(100),W={log:console.log,warn:console.warn,error:console.error},V=n(96),L=n.n(V),T=/^\s*#(?!#)\s*(.*)$/,D=/^\s*#(.*)$/,K=/^\s*(\S+)\s*:(.*)$/,U=/^\s*##([^{]*){([^}]*)}(.*)$/,Y=/\[(.*)\S*\]/,N=/\s*\[(.*)/,$=/^\s*([^\]]*)]/;function q(e){var t=e.split("\n"),n=function(e){var t=0;for(;t<e.length;){var n=e[t],r=n.match(T);if(r){var o=Object(s.a)(r,2),a=o[1];return{header:a.trim(),index:t}}t+=1}return{header:"",index:-1}}(t),r=n.header,o=function(e,t){var n=t,r=[];for(;n<e.length;){var o=e[n],a=o.match(K);if(a){var i=Object(s.a)(a,3),c=i[1],u=i[2];r.push({key:c.trim(),value:u.trim()})}else if(o.match(D))break;n+=1}return{props:r,lastIndex:n-1}}(t,n.index+1);return{header:r,props:o.props,sections:function(e,t){var n=t,r=[];for(;n<e.length;){var o=e[n],a=o.match(U);if(a){var i=Object(s.a)(a,4),c=i[1],u=i[2],l=i[3],f="".concat(c.trim()," ").concat(l.trim()).trim(),d=J(e,n+1),p=d.placeholder,h=d.index;n=h+1||n+1;for(var v=[];n<e.length&&!(e[n+1]||"").match(U);)o=e[n],v.push(o),n+=1;r.push({key:u.trim(),header:f,placeholder:p,content:v.join("\n").trim()})}n+=1}return{sections:r}}(t,o.lastIndex+1).sections}}function J(e,t){for(var n=t,r=[];n<e.length;){var o=e[n].trim();if(0===r.length){var a=o.match(Y);if(a)return{placeholder:Object(s.a)(a,2)[1].trim(),index:n};var i=o.match(N);if(i){var c=Object(s.a)(i,2)[1];r.push(c.trim())}else if(""!==o)break}else if(r.length>0){var u=o.match($);if(u){var l=Object(s.a)(u,2)[1];return r.push(l.trim()),{placeholder:r.join("\n"),index:n}}r.push(o)}n+=1}return{placeholder:"",index:-1}}function _(e,t){try{var n=q(t),r=C(n.sections,{key:"key"}),o=C(e.sections,{key:"key"}),a=L.a.apply(void 0,[r].concat(Object(B.a)(o)));a.length>0&&(W.warn("Unexpected sections found:",a),a.forEach(function(e){delete n.sections[e]}));var i=C(n.sections,{key:"key"}),c=C(e.sections,{key:"key"}),u=L.a.apply(void 0,[i].concat(Object(B.a)(c)));return u.length>0&&(W.warn("Unexpected props found:",u),u.forEach(function(e){delete n.sections[e]})),n.sections=R(e.sections,n.sections,{key:"key"}),n.props=R(e.props,n.props,{key:"key"}),function e(t,n){var r=j(t,n);return b()(r)?w(r,function(r){return e(b()(t)?t[r]:void 0,b()(n)?n[r]:void 0)}):void 0!==n?n:t}(e,n)}catch(l){W.error("Parsing model failed"),W.error(l)}return e}var G=z()(function(e){localStorage.setItem(e.localStorageKey,A(e))},250);var Z=function(e){var t=function(e){var t=e.model;if(!b()(t))throw new Error("Model must be provided: useMarkdownSync({ model })");var n,r=t,o=function(e){r=e,G(e),n&&n(e)},a={loadFromFile:function(e){return new Promise(function(t,n){var r=new FileReader;r.onload=function(e){a.loadMarkdown(e.target.result),t()},r.onerror=n,r.readAsText(e)})},loadFromLocalStorage:function(){a.loadMarkdown(localStorage.getItem(t.localStorageKey))},loadMarkdown:function(e){e&&o(_(t,e))},saveAs:function(){var e=new Blob([A(r)],{type:"text/plain;charset=utf-8"}),t="business model canvas - ".concat(r.header.substr(0,20).replace(/[^a-zA-Z0-9]+/g," "),".txt");F.a.saveAs(e,t)},reset:function(){o(t)},setOnChange:function(e){n=e},removeOnChange:function(){n=null},get SECTION_KEYS(){return C(t.sections,"key")},get sections(){return r.sections},getSectionIndex:function(e){return H()(a.sections,["key",e])},getSection:function(e){return a.sections[a.getSectionIndex(e)]},updateSection:function(e,n){var i=a.getSectionIndex(e);if(-1===i)throw new Error('Section with key "'.concat(e,'" not available in model'),t);var c=r.sections[i],u=Array.from(r.sections);u[i]=Object(d.a)({},c,n),o(Object(d.a)({},r,{sections:u}))},get header(){return r.header},updateHeader:function(e){o(Object(d.a)({},r,{header:e}))},get PROP_KEYS(){return C(t.props,"key")},get props(){return r.props},getPropertyIndex:function(e){return H()(a.props,["key",e])},getProperty:function(e){return a.props[a.getPropertyIndex(e)]},updateProperty:function(e,n){var i=a.getPropertyIndex(e);if(-1===i)throw new Error('Property with key "'.concat(e,'" not available in model'),t);var c=r.props[i],u=Array.from(r.props);u[i]=Object(d.a)({},c,n),o(Object(d.a)({},r,{props:u}))}};return a}({model:e});return t.loadFromLocalStorage(),t};var Q=n(20),X=n(97),ee=n(166),te=n(167),ne=n.n(te),re=[],oe=function(e,t){re.push({isFocusWithin:!1,ref:e,setIsFocusWithin:t}),1===Object.keys(re).length&&(document.body.addEventListener("mousedown",ie),document.body.addEventListener("keydown",ie),document.body.addEventListener("keyup",ie))},ae=function(e){ne()(re,function(t){return t.ref===e}),0===Object.keys(re).length&&(document.body.removeEventListener("mousedown",ie),document.body.removeEventListener("keydown",ie),document.body.removeEventListener("keyup",ie))},ie=function(e){var t=e.target;re=re.map(function(e){var n=e.ref.current;if(!n)return e;var r=n.contains(t);return e.isFocusWithin===r?e:(e.setIsFocusWithin(r),Object(d.a)({},e,{isFocusWithin:r}))})};n(387);function ce(){var e=Object(c.a)(["\n  color: ",";\n  cursor: pointer;\n  fill: currentColor;\n  padding: 0.25em;\n  &:hover, &:focus {\n    background: #DDDDDD;\n  }\n  &:first-child {\n    padding-left: 0.4em;\n    border-top-left-radius: 0.75em;\n    border-bottom-left-radius: 0.75em;\n  }\n  &:last-child {\n    padding-left: 0.4em;\n    border-top-right-radius: 0.75em;\n    border-bottom-right-radius: 0.75em;\n  }\n"]);return ce=function(){return e},e}var ue=Object(u.c)(function(e){var t=e.Icon,n=e.isActive,r=e.label,a=e.onToggle,i=e.style,c=Object(l.a)(e,["Icon","isActive","label","onToggle","style"]),u=function(e){e.preventDefault(),a(i)};return o.a.createElement(t,Object.assign({"aria-label":r,"aria-pressed":n,onKeyDown:function(e){" "!==e.key&&"Enter"!==e.key||u(e)},onMouseDown:u,role:"button",tabIndex:"0"},c))})(ce(),function(e){return e.isActive?"inherit":"#999999"});function le(){var e=Object(c.a)(["\n  background: #EEEEEE;\n  border-radius: 0.75em;\n  display: flex;\n  margin-right: 0.5em;\n  margin-top: 0.25em;\n"]);return le=function(){return e},e}var se=u.c.div(le());function fe(){return(fe=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function de(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var pe=o.a.createElement("path",{d:"M15.6 10.79c.97-.67 1.65-1.77 1.65-2.79 0-2.26-1.75-4-4-4H7v14h7.04c2.09 0 3.71-1.7 3.71-3.79 0-1.52-.86-2.82-2.15-3.42zM10 6.5h3c.83 0 1.5.67 1.5 1.5s-.67 1.5-1.5 1.5h-3v-3zm3.5 9H10v-3h3.5c.83 0 1.5.67 1.5 1.5s-.67 1.5-1.5 1.5z"}),he=o.a.createElement("path",{d:"M0 0h24v24H0z",fill:"none"}),ve=function(e){var t=e.svgRef,n=de(e,["svgRef"]);return o.a.createElement("svg",fe({width:24,height:24,viewBox:"0 0 24 24",ref:t},n),pe,he)},me=o.a.forwardRef(function(e,t){return o.a.createElement(ve,fe({svgRef:t},e))});n.p;function ge(){return(ge=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function be(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var ye=o.a.createElement("path",{d:"M0 0h24v24H0z",fill:"none"}),Oe=o.a.createElement("path",{d:"M9 4v3h5v12h3V7h5V4H9zm-6 8h3v7h3v-7h3V9H3v3z"}),je=function(e){var t=e.svgRef,n=be(e,["svgRef"]);return o.a.createElement("svg",ge({width:24,height:24,viewBox:"0 0 24 24",ref:t},n),ye,Oe)},we=o.a.forwardRef(function(e,t){return o.a.createElement(je,ge({svgRef:t},e))});n.p;function Ee(){return(Ee=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function ke(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var Se=o.a.createElement("path",{d:"M0 0h24v24H0z",fill:"none"}),xe=o.a.createElement("path",{d:"M10 4v3h2.21l-3.42 8H6v3h8v-3h-2.21l3.42-8H18V4z"}),Ce=function(e){var t=e.svgRef,n=ke(e,["svgRef"]);return o.a.createElement("svg",Ee({width:24,height:24,viewBox:"0 0 24 24",ref:t},n),Se,xe)},Re=o.a.forwardRef(function(e,t){return o.a.createElement(Ce,Ee({svgRef:t},e))});n.p;function Pe(){return(Pe=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function He(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var Ie=o.a.createElement("path",{d:"M4 10.5c-.83 0-1.5.67-1.5 1.5s.67 1.5 1.5 1.5 1.5-.67 1.5-1.5-.67-1.5-1.5-1.5zm0-6c-.83 0-1.5.67-1.5 1.5S3.17 7.5 4 7.5 5.5 6.83 5.5 6 4.83 4.5 4 4.5zm0 12c-.83 0-1.5.68-1.5 1.5s.68 1.5 1.5 1.5 1.5-.68 1.5-1.5-.67-1.5-1.5-1.5zM7 19h14v-2H7v2zm0-6h14v-2H7v2zm0-8v2h14V5H7z"}),ze=o.a.createElement("path",{fill:"none",d:"M0 0h24v24H0V0z"}),Me=function(e){var t=e.svgRef,n=He(e,["svgRef"]);return o.a.createElement("svg",Pe({width:24,height:24,viewBox:"0 0 24 24",ref:t},n),Ie,ze)},Fe=o.a.forwardRef(function(e,t){return o.a.createElement(Me,Pe({svgRef:t},e))});n.p;function Ae(){return(Ae=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function Be(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var We=o.a.createElement("path",{d:"M2 17h2v.5H3v1h1v.5H2v1h3v-4H2v1zm1-9h1V4H2v1h1v3zm-1 3h1.8L2 13.1v.9h3v-1H3.2L5 10.9V10H2v1zm5-6v2h14V5H7zm0 14h14v-2H7v2zm0-6h14v-2H7v2z"}),Ve=o.a.createElement("path",{d:"M0 0h24v24H0z",fill:"none"}),Le=function(e){var t=e.svgRef,n=Be(e,["svgRef"]);return o.a.createElement("svg",Ae({width:24,height:24,viewBox:"0 0 24 24",ref:t},n),We,Ve)},Te=o.a.forwardRef(function(e,t){return o.a.createElement(Le,Ae({svgRef:t},e))});n.p;function De(){return(De=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function Ke(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var Ue=o.a.createElement("path",{d:"M6 17h3l2-4V7H5v6h3zm8 0h3l2-4V7h-6v6h3z"}),Ye=o.a.createElement("path",{d:"M0 0h24v24H0z",fill:"none"}),Ne=function(e){var t=e.svgRef,n=Ke(e,["svgRef"]);return o.a.createElement("svg",De({width:24,height:24,viewBox:"0 0 24 24",ref:t},n),Ue,Ye)},$e=o.a.forwardRef(function(e,t){return o.a.createElement(Ne,De({svgRef:t},e))});n.p;function qe(){return(qe=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function Je(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var _e=o.a.createElement("path",{d:"M0 0h24v24H0z",fill:"none"}),Ge=o.a.createElement("path",{d:"M10 19h4v-3h-4v3zM5 4v3h5v3h4V7h5V4H5zM3 14h18v-2H3v2z"}),Ze=function(e){var t=e.svgRef,n=Je(e,["svgRef"]);return o.a.createElement("svg",qe({width:24,height:24,viewBox:"0 0 24 24",ref:t},n),_e,Ge)},Qe=o.a.forwardRef(function(e,t){return o.a.createElement(Ze,qe({svgRef:t},e))});n.p;function Xe(){return(Xe=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function et(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var tt=o.a.createElement("path",{d:"M0 0h24v24H0z",fill:"none"}),nt=o.a.createElement("path",{d:"M12 17c3.31 0 6-2.69 6-6V3h-2.5v8c0 1.93-1.57 3.5-3.5 3.5S8.5 12.93 8.5 11V3H6v8c0 3.31 2.69 6 6 6zm-7 2v2h14v-2H5z"}),rt=function(e){var t=e.svgRef,n=et(e,["svgRef"]);return o.a.createElement("svg",Xe({width:24,height:24,viewBox:"0 0 24 24",ref:t},n),tt,nt)},ot=o.a.forwardRef(function(e,t){return o.a.createElement(rt,Xe({svgRef:t},e))}),at=(n.p,[{label:"Header",style:"header-three",Icon:we},{label:"Blockquote",style:"blockquote",Icon:$e},{label:"UL",style:"unordered-list-item",Icon:Fe},{label:"OL",style:"ordered-list-item",Icon:Te}]),it=[{label:"Bold",style:"BOLD",Icon:me},{label:"Italic",style:"ITALIC",Icon:Re},{label:"Underline",style:"UNDERLINE",Icon:ot},{label:"Strikethrough",style:"STRIKETHROUGH",Icon:Qe}];var ct=function(e){var t=e.editorState,n=e.onToggle,r=t.getSelection(),a=t.getCurrentContent().getBlockForKey(r.getStartKey()).getType();return o.a.createElement(se,null,at.map(function(e){return o.a.createElement(ue,Object.assign({isActive:e.style===a,key:e.label,onToggle:n},e))}))};var ut=function(e){var t=e.editorState,n=e.onToggle,r=t.getCurrentInlineStyle();return o.a.createElement(se,null,it.map(function(e){return o.a.createElement(ue,Object.assign({isActive:r.has(e.style),key:e.label,onToggle:n},e))}))};function lt(){var e=Object(c.a)(["\n  display: flex;\n  flex-wrap: wrap;\n  visibility: ",";\n  z-index: 2;\n\n  @media print {\n    display: none;\n  }\n"]);return lt=function(){return e},e}var st=u.c.div(lt(),function(e){return e.isVisible?"visible":"hidden"});var ft=function(e){var t=e.editorState,n=e.isVisible,r=e.onChange,a=Object(l.a)(e,["editorState","isVisible","onChange"]);return o.a.createElement(st,Object.assign({isVisible:n},a),o.a.createElement(ut,{editorState:t,onToggle:function(e){r(Q.RichUtils.toggleInlineStyle(t,e))}}),o.a.createElement(ct,{editorState:t,onToggle:function(e){r(Q.RichUtils.toggleBlockType(t,e))}}))};function dt(){var e=Object(c.a)(["\n  .DraftEditor-root {\n    flex: 1;\n  }\n  .public-DraftEditorPlaceholder-inner {\n    @media print {\n      display: none;\n    }\n  }\n"]);return dt=function(){return e},e}function pt(){var e=Object(c.a)(["\n  display: flex;\n  flex-direction: column;\n"]);return pt=function(){return e},e}var ht=u.c.div(pt()),vt=Object(u.b)(dt());function mt(e){var t=e.editorState,n=e.isSimple,a=e.onChange,i=e.placeholder,c=Object(l.a)(e,["editorState","isSimple","onChange","placeholder"]),u=Object(r.useRef)(null),f=Object(r.useRef)(null),d=function(e){var t=Object(r.useState)(!1),n=Object(s.a)(t,2),o=n[0],a=n[1];return Object(r.useEffect)(function(){return oe(e,a),function(){ae(e)}},[]),o}(f),p=Object(r.useCallback)(function(e){a(e)},[a]),h=Object(r.useCallback)(function(e,t){var n=Q.RichUtils.handleKeyCommand(t,e);return n?(a(n),"handled"):"not-handled"},[a]);return o.a.createElement(ht,Object.assign({onClick:function(){u.current.focus()},ref:f},c),o.a.createElement(vt,null),o.a.createElement(Q.Editor,{editorState:t,handleKeyCommand:h,onChange:p,placeholder:i,ref:u}),!n&&o.a.createElement(ft,{editorState:t,isVisible:d,onChange:p}))}mt.createEditorStateFromMarkdown=function(e){return Q.EditorState.createWithContent(Object(X.stateFromMarkdown)(e))},mt.updateEditorStateWithMarkdown=function(e,t){return Q.EditorState.push(e,Object(X.stateFromMarkdown)(t))},mt.getMarkdownFromEditorState=function(e){return Object(ee.stateToMarkdown)(e.getCurrentContent())};var gt=mt;function bt(){var e=Object(c.a)(["\n  display: block;\n  position: absolute;\n  top: -9999px;\n  left: -9999px;\n  width: 1px;\n  height: 1px;\n  overflow: hidden;\n"]);return bt=function(){return e},e}function yt(){var e=Object(c.a)(["\n  padding: 0.5em 0.5em 0 0.5em;\n\n  & > button {\n    margin-right: 0.25em;\n  }\n\n  @media print {\n    display: none;\n  }\n"]);return yt=function(){return e},e}var Ot=u.c.div(yt()),jt=u.c.form(bt());var wt=function(e){var t=e.loadFromFile,n=e.onReset,a=e.onSaveAs,i=Object(l.a)(e,["loadFromFile","onReset","onSaveAs"]),c=Object(r.useRef)(),u=Object(r.useRef)(),s=Object(r.useCallback)(function(){window.confirm("Are you sure to reject all your changes?")&&n()},[n]);return o.a.createElement(Ot,i,o.a.createElement("button",{onClick:a},"Save to file"),o.a.createElement("button",{onClick:function(){return u.current.click()}},"Import from file"),o.a.createElement(jt,{ref:c},o.a.createElement("input",{accept:"text/plain, text/markdown","aria-hidden":!0,type:"file",onChange:function(e){var n=e.target;t(n.files[0]),c.current.reset()},ref:u})),o.a.createElement("button",{onClick:s},"Reset"),o.a.createElement("button",{onClick:window.print},"Print"))};function Et(){var e=Object(c.a)(["\n  border-left-style: solid;\n  bottom: ",";\n  left: 0;\n  top: ",";\n"]);return Et=function(){return e},e}function kt(){var e=Object(c.a)(["\n  border-bottom-style: solid;\n  bottom: 0;\n  left: ",";\n  right: ",";\n"]);return kt=function(){return e},e}function St(){var e=Object(c.a)(["\n  border-right-style: solid;\n  bottom: ",";\n  right: 0;\n  top: ",";\n"]);return St=function(){return e},e}function xt(){var e=Object(c.a)(["\n  border-top-style: solid;\n  left: ",";\n  right: ",";\n  top: 0;\n"]);return xt=function(){return e},e}function Ct(){var e=Object(c.a)(["\n  position: absolute;\n  border-color: ",";\n  border-style: none;\n  border-width: 1px;\n\n  @media print {\n    border-width: 2px;\n  }\n"]);return Ct=function(){return e},e}var Rt=u.c.div(Ct(),function(e){return e.theme.pageBackground}),Pt=Object(u.c)(Rt)(xt(),"0.5em","0.5em"),Ht=Object(u.c)(Rt)(St(),"0.5em","0.5em"),It=Object(u.c)(Rt)(kt(),"0.5em","0.5em"),zt=Object(u.c)(Rt)(Et(),"0.5em","0.5em");var Mt=function(e){var t=e.top,n=e.right,r=e.bottom,a=e.left;return o.a.createElement(o.a.Fragment,null,t&&o.a.createElement(Pt,null),n&&o.a.createElement(Ht,null),r&&o.a.createElement(It,null),a&&o.a.createElement(zt,null))};function Ft(){var e=Object(c.a)(["\n  flex: 1;\n"]);return Ft=function(){return e},e}function At(){var e=Object(c.a)(["\n  position: absolute;\n  width: 0;\n  height: 0;\n  overflow: hidden;\n  text-indent: -999;\n"]);return At=function(){return e},e}function Bt(){var e=Object(c.a)(["\n  font-size: 1.4em;\n  margin: 0 0 0.5rem 0;\n"]);return Bt=function(){return e},e}function Wt(){var e=Object(c.a)(["\n  display: flex;\n  flex-direction: column;\n  overflow: hidden;\n  padding: 0.5rem;\n  position: relative;\n"]);return Wt=function(){return e},e}var Vt=u.c.article(Wt()),Lt=u.c.h2(Bt()),Tt=u.c.h2(At()),Dt=Object(u.c)(gt)(Ft());function Kt(e){var t=e.border,n=(e.content,e.editorState),r=e.header,a=e.isSimple,i=e.onChange,c=e.placeholder,u=Object(l.a)(e,["border","content","editorState","header","isSimple","onChange","placeholder"]);return o.a.createElement(Vt,u,a?o.a.createElement(Tt,null,r):o.a.createElement(Lt,null,r),o.a.createElement(Dt,{editorState:n,isSimple:a,onChange:function(e){i({content:gt.getMarkdownFromEditorState(e),editorState:e})},placeholder:c}),o.a.createElement(Mt,t))}Kt.defaultProps={border:[!1,!1,!1,!1]};var Ut=Kt;function Yt(){var e=Object(c.a)(["\n  flex: 1;\n"]);return Yt=function(){return e},e}function Nt(){var e=Object(c.a)(["\n  border: none;\n  display: block;\n  font-weight: inherit;\n  text-align: right;\n  width: 20em;\n"]);return Nt=function(){return e},e}function $t(){var e=Object(c.a)(["\n"]);return $t=function(){return e},e}function qt(){var e=Object(c.a)(["\n  border: none;\n  display: block;\n  font-weight: inherit;\n  width: 100%;\n"]);return qt=function(){return e},e}function Jt(){var e=Object(c.a)(["\n  margin: 0;\n  flex: 1;\n"]);return Jt=function(){return e},e}function _t(){var e=Object(c.a)(["\n  margin: 0.5rem 0.5rem 0 0.5rem;\n  display: flex;\n"]);return _t=function(){return e},e}function Gt(){var e=Object(c.a)(["\n  display: flex;\n  flex-direction: column;\n"]);return Gt=function(){return e},e}var Zt=u.c.div(Gt()),Qt=u.c.div(_t()),Xt=u.c.h1(Jt()),en=u.c.input(qt()),tn=u.c.div($t()),nn=u.c.input(Nt()),rn=Object(u.c)(Ut)(Yt());var on=function(e){var t=e.getProperty,n=(e.gridArea,e.header),a=e.onHeaderChange,i=e.onPropertyChange,c=e.sectionProps,u=Object(l.a)(e,["getProperty","gridArea","header","onHeaderChange","onPropertyChange","sectionProps"]),s=Object(r.useCallback)(function(e){var t=e.target;a(t.value)},[a]),f=Object(r.useCallback)(function(e){var t=e.target;i("date",{value:t.value})},[i]),d=Object(r.useCallback)(function(e){var t=e.target;i("name",{value:t.value})},[i]);return o.a.createElement(Zt,u,o.a.createElement(Qt,null,o.a.createElement(Xt,null,o.a.createElement(en,Object.assign({"aria-label":"Your Business",onChange:s,placeholder:"Your Business"},n))),o.a.createElement(tn,null,o.a.createElement(nn,Object.assign({onChange:f},t("date"))),o.a.createElement(nn,Object.assign({onChange:d},t("name"))))),o.a.createElement(rn,Object.assign({isSimple:!0},c)))},an={header:{value:"",placeholder:"Your Business"},localStorageKey:"businessModelCanvas",props:[{key:"date",placeholder:"Date",value:(new Date).toLocaleDateString()},{key:"name",placeholder:"Your Name",value:""}],sections:[{key:"purpose",border:{bottom:!0},content:"",header:"Purpose",isHeader:!0,placeholder:"Step 1:\nWhat is the business purpose?\nYou will need it to validate every single part of the model."},{key:"customer-segments",border:{left:!0},content:"",header:"Customer Segments",placeholder:"Step 2:\nWhich customers does your business try to serve?"},{key:"value-propositions",border:{right:!0,left:!0},content:"",header:"Value Propositions",placeholder:"Step 3:\nWhich products and services a business offers meet the needs of the customer segments?"},{key:"channels",border:{top:!0},content:"",header:"Channels",placeholder:"Step 4:\nWhich channels does your business use to deliver the value proposition to the customer segments"},{key:"customer-relationships",border:{},content:"",header:"Customer Relationships",placeholder:"Step 5:\nWhich type relationship does your business want to create with the customer segments"},{key:"revenue-streams",border:{top:!0},content:"",header:"Revenue Streams",placeholder:"Step 6:\nHow does your company make income from each customer segment?"},{key:"key-resources",border:{top:!0},content:"",header:"Key Resources",placeholder:"Step 7:\nWhich resources are necessary to create the value propositions?"},{key:"key-activities",border:{},content:"",header:"Key Activities",placeholder:"Step 8:\nWhat are the most important activities in executing the value propositions?"},{key:"key-partners",border:{right:!0},content:"",header:"Key Partners",placeholder:"Step 9:\nWhich buyer-supplier relationships can help you to focus on your core activity, optimise operations and reduce risks?"},{key:"cost-structure",border:{top:!0,right:!0},content:"",header:"Cost Structure",placeholder:"Step 10:\nWhat are the most important monetary consequences while operating under this business model?"}]};function cn(){var e=Object(c.a)(["\n  grid-area: ",";\n"]);return cn=function(){return e},e}function un(){var e=Object(c.a)(["\n  grid-area: ",";\n"]);return un=function(){return e},e}function ln(){var e=Object(c.a)(["\n  background-color: ",";\n  border-color: ",';\n  border-style: solid;\n  border-width: 0.5em;\n  box-sizing: border-box;\n  display: grid;\n  grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr;\n  grid-template-rows: 0.5fr 1fr 1fr 1fr;\n  grid-template-areas:\n    "purpose purpose purpose purpose purpose purpose purpose purpose purpose purpose"\n    "key-partners key-partners key-activities key-activities value-propositions value-propositions customer-relationships customer-relationships customer-segments customer-segments"\n    "key-partners key-partners key-resources key-resources value-propositions value-propositions channels channels customer-segments customer-segments"\n    "cost-structure cost-structure cost-structure cost-structure cost-structure revenue-streams revenue-streams revenue-streams revenue-streams revenue-streams";\n  margin: auto;\n\n  height: 100%;\n  width: 100%;\n  @media screen {\n    min-width: 90em;\n    min-height: 60em;\n  }\n']);return ln=function(){return e},e}var sn=u.c.div(ln(),function(e){return e.theme.paperBackground},function(e){return e.theme.pageBackground}),fn=Object(u.c)(Ut)(un(),function(e){return e.gridArea}),dn=Object(u.c)(on)(cn(),function(e){return e.gridArea}),pn=function(e){return e.reduce(function(e,t){return Object(d.a)({},e,Object(f.a)({},t.key,gt.createEditorStateFromMarkdown(t.content)))},{})};var hn=function(){var e=function(e){var t=e.model,n=Object(r.useMemo)(function(){return Z(t)},[]),o=Object(r.useState)(),a=Object(s.a)(o,2)[1];return Object(r.useEffect)(function(){return n.setOnChange(a),function(){n.removeOnChange()}}),n}({model:an}),t=Object(r.useMemo)(function(){return pn(e.sections)},[]),n=Object(r.useState)(t),a=Object(s.a)(n,2),i=a[0],c=a[1],u=function(){var t=w(i,function(t,n){return gt.updateEditorStateWithMarkdown(n,e.getSection(t).content)});c(t)};return o.a.createElement(o.a.Fragment,null,o.a.createElement(wt,{loadFromFile:function(t){e.loadFromFile(t).then(u)},onReset:function(){e.reset(),u()},onSaveAs:e.saveAs}),o.a.createElement(sn,null,e.sections.map(function(t){var n=t.isHeader,r=t.key,a=Object(l.a)(t,["isHeader","key"]),u=Object(d.a)({editorState:i[r],isSimple:n,onChange:function(t){var n=t.content,o=t.editorState;e.updateSection(r,{content:n}),function(e,t){var n=Object(d.a)({},i,Object(f.a)({},e,t));c(n)}(r,o)}},a);return n?o.a.createElement(dn,{gridArea:r,header:e.header,key:r,onHeaderChange:e.updateHeader,onPropertyChange:e.updateProperty,getProperty:e.getProperty,sectionProps:u}):o.a.createElement(fn,Object.assign({gridArea:r,key:r},u))})))};function vn(){var e=Object(c.a)(["\n  BODY {\n    background-color: ",";\n    font-size: 14px;\n\n    @media (min-width: 1600px) {\n      font-size: 16px;\n    }\n    @media (min-width: 2000px) {\n      font-size: 18px;\n    }\n  }\n"]);return vn=function(){return e},e}var mn=Object(u.b)(vn(),function(e){return e.theme.pageBackground});var gn=function(){return o.a.createElement(u.a,{theme:{pageBackground:"#EEEEEE",paperBackground:"#FFFFFF"}},o.a.createElement(o.a.Fragment,null,o.a.createElement(mn,null),o.a.createElement(hn,null)))},bn=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function yn(e,t){navigator.serviceWorker.register(e).then(function(e){e.onupdatefound=function(){var n=e.installing;null!=n&&(n.onstatechange=function(){"installed"===n.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See http://bit.ly/CRA-PWA."),t&&t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(e)))})}}).catch(function(e){console.error("Error during service worker registration:",e)})}n(392),n(393);i.a.render(o.a.createElement(gn,null),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("/business-model-canvas-generator",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",function(){var t="".concat("/business-model-canvas-generator","/service-worker.js");bn?(function(e,t){fetch(e).then(function(n){var r=n.headers.get("content-type");404===n.status||null!=r&&-1===r.indexOf("javascript")?navigator.serviceWorker.ready.then(function(e){e.unregister().then(function(){window.location.reload()})}):yn(e,t)}).catch(function(){console.log("No internet connection found. App is running in offline mode.")})}(t,e),navigator.serviceWorker.ready.then(function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit http://bit.ly/CRA-PWA")})):yn(t,e)})}}()}},[[171,1,2]]]);
//# sourceMappingURL=main.2989cc55.chunk.js.map