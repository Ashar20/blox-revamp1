"use strict";(self.webpackChunkionic_docs=self.webpackChunkionic_docs||[]).push([[30023],{3905:function(e,t,n){n.d(t,{Zo:function(){return d},kt:function(){return m}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var u=r.createContext({}),c=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},d=function(e){var t=c(e.components);return r.createElement(u.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},s=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,u=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),s=c(n),m=a,h=s["".concat(u,".").concat(m)]||s[m]||p[m]||o;return n?r.createElement(h,i(i({ref:t},d),{},{components:n})):r.createElement(h,i({ref:t},d))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=s;var l={};for(var u in t)hasOwnProperty.call(t,u)&&(l[u]=t[u]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var c=2;c<o;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}s.displayName="MDXCreateElement"},58215:function(e,t,n){var r=n(67294);t.Z=function(e){var t=e.children,n=e.hidden,a=e.className;return r.createElement("div",{role:"tabpanel",hidden:n,className:a},t)}},26396:function(e,t,n){n.d(t,{Z:function(){return s}});var r=n(87462),a=n(67294),o=n(72389),i=n(79443);var l=function(){var e=(0,a.useContext)(i.Z);if(null==e)throw new Error('"useUserPreferencesContext" is used outside of "Layout" component.');return e},u=n(89521),c=n(86010),d="tabItem_1uMI";function p(e){var t,n,r,o=e.lazy,i=e.block,p=e.defaultValue,s=e.values,m=e.groupId,h=e.className,f=a.Children.map(e.children,(function(e){if((0,a.isValidElement)(e)&&void 0!==e.props.value)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),v=null!=s?s:f.map((function(e){var t=e.props;return{value:t.value,label:t.label}})),k=(0,u.lx)(v,(function(e,t){return e.value===t.value}));if(k.length>0)throw new Error('Docusaurus error: Duplicate values "'+k.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var b=null===p?p:null!=(t=null!=p?p:null==(n=f.find((function(e){return e.props.default})))?void 0:n.props.value)?t:null==(r=f[0])?void 0:r.props.value;if(null!==b&&!v.some((function(e){return e.value===b})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+b+'" but none of its children has the corresponding value. Available values are: '+v.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var g=l(),y=g.tabGroupChoices,N=g.setTabGroupChoices,x=(0,a.useState)(b),w=x[0],T=x[1],C=[],O=(0,u.o5)().blockElementScrollPositionUntilNextRender;if(null!=m){var E=y[m];null!=E&&E!==w&&v.some((function(e){return e.value===E}))&&T(E)}var j=function(e){var t=e.currentTarget,n=C.indexOf(t),r=v[n].value;r!==w&&(O(t),T(r),null!=m&&N(m,r))},D=function(e){var t,n=null;switch(e.key){case"ArrowRight":var r=C.indexOf(e.currentTarget)+1;n=C[r]||C[0];break;case"ArrowLeft":var a=C.indexOf(e.currentTarget)-1;n=C[a]||C[C.length-1]}null==(t=n)||t.focus()};return a.createElement("div",{className:"tabs-container"},a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,c.Z)("tabs",{"tabs--block":i},h)},v.map((function(e){var t=e.value,n=e.label;return a.createElement("li",{role:"tab",tabIndex:w===t?0:-1,"aria-selected":w===t,className:(0,c.Z)("tabs__item",d,{"tabs__item--active":w===t}),key:t,ref:function(e){return C.push(e)},onKeyDown:D,onFocus:j,onClick:j},null!=n?n:t)}))),o?(0,a.cloneElement)(f.filter((function(e){return e.props.value===w}))[0],{className:"margin-vert--md"}):a.createElement("div",{className:"margin-vert--md"},f.map((function(e,t){return(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==w})}))))}function s(e){var t=(0,o.Z)();return a.createElement(p,(0,r.Z)({key:String(t)},e))}},27462:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return l},contentTitle:function(){return u},metadata:function(){return c},toc:function(){return d},default:function(){return s}});var r=n(87462),a=n(63366),o=(n(67294),n(3905)),i=(n(26396),n(58215),["components"]),l={sidebar_label:"ion-text",demoUrl:"/docs/demos/api/text/index.html",demoSourceUrl:"https://github.com/ionic-team/ionic-docs/tree/main/static/demos/api/text/index.html"},u="ion-text",c={unversionedId:"api/text",id:"version-v5/api/text",isDocsHomePage:!1,title:"ion-text",description:"The text component is a simple component that can be used to style the text color of any element. The ion-text element should wrap the element in order to change the text color of that element.",source:"@site/versioned_docs/version-v5/api/text.md",sourceDirName:"api",slug:"/api/text",permalink:"/developer/docs/v5/api/text",editUrl:"https://github.com/ionic-team/ionic-docs/tree/main/docs/api/text.md",tags:[],version:"v5",frontMatter:{sidebar_label:"ion-text",demoUrl:"/docs/demos/api/text/index.html",demoSourceUrl:"https://github.com/ionic-team/ionic-docs/tree/main/static/demos/api/text/index.html"},sidebar:"version-v5/api",previous:{title:"ion-back-button",permalink:"/developer/docs/v5/api/back-button"},next:{title:"API Index",permalink:"/developer/docs/v5/api"}},d=[{value:"Usage",id:"usage",children:[],level:2},{value:"Properties",id:"properties",children:[{value:"color",id:"color",children:[],level:3},{value:"mode",id:"mode",children:[],level:3}],level:2}],p={toc:d};function s(e){var t=e.components,n=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"ion-text"},"ion-text"),(0,o.kt)("p",null,"The text component is a simple component that can be used to style the text color of any element. The ",(0,o.kt)("inlineCode",{parentName:"p"},"ion-text")," element should wrap the element in order to change the text color of that element."),(0,o.kt)("h2",{id:"usage"},"Usage"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-html"},'<ion-text color="secondary">\n  <h1>H1: The quick brown fox jumps over the lazy dog</h1>\n</ion-text>\n\n<ion-text color="primary">\n  <h2>H2: The quick brown fox jumps over the lazy dog</h2>\n</ion-text>\n\n<ion-text color="light">\n  <h3>H3: The quick brown fox jumps over the lazy dog</h3>\n</ion-text>\n\n<ion-text color="danger">\n  <h4>H4: The quick brown fox jumps over the lazy dog</h4>\n</ion-text>\n\n<ion-text color="dark">\n  <h5>H5: The quick brown fox jumps over the lazy dog</h5>\n</ion-text>\n\n<p>\n  I saw a werewolf with a Chinese menu in his hand. Walking through the\n  <ion-text color="danger"><sub>streets</sub></ion-text> of Soho in the rain. He\n  <ion-text color="primary"><i>was</i></ion-text> looking for a place called Lee Ho Fook\'s. Gonna get a\n  <ion-text color="secondary"><a>big dish of beef chow mein.</a></ion-text>\n  <ion-text color="danger"><ion-icon name="cut"></ion-icon></ion-text>\n</p>\n')),(0,o.kt)("h2",{id:"properties"},"Properties"),(0,o.kt)("h3",{id:"color"},"color"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null}),(0,o.kt)("th",{parentName:"tr",align:null}))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("strong",{parentName:"td"},"Description")),(0,o.kt)("td",{parentName:"tr",align:null},"The color to use from your application's color palette.",(0,o.kt)("br",null),"Default options are: ",(0,o.kt)("inlineCode",{parentName:"td"},'"primary"'),", ",(0,o.kt)("inlineCode",{parentName:"td"},'"secondary"'),", ",(0,o.kt)("inlineCode",{parentName:"td"},'"tertiary"'),", ",(0,o.kt)("inlineCode",{parentName:"td"},'"success"'),", ",(0,o.kt)("inlineCode",{parentName:"td"},'"warning"'),", ",(0,o.kt)("inlineCode",{parentName:"td"},'"danger"'),", ",(0,o.kt)("inlineCode",{parentName:"td"},'"light"'),", ",(0,o.kt)("inlineCode",{parentName:"td"},'"medium"'),", and ",(0,o.kt)("inlineCode",{parentName:"td"},'"dark"'),".",(0,o.kt)("br",null),"For more information on colors, see ",(0,o.kt)("a",{parentName:"td",href:"/developer/docs/v5/theming/basics"},"theming"),".")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("strong",{parentName:"td"},"Attribute")),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"color"))),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("strong",{parentName:"td"},"Type")),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"string \\| undefined"))),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("strong",{parentName:"td"},"Default")),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"undefined"))))),(0,o.kt)("h3",{id:"mode"},"mode"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null}),(0,o.kt)("th",{parentName:"tr",align:null}))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("strong",{parentName:"td"},"Description")),(0,o.kt)("td",{parentName:"tr",align:null},"The mode determines which platform styles to use.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("strong",{parentName:"td"},"Attribute")),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"mode"))),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("strong",{parentName:"td"},"Type")),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},'"ios" \\| "md"'))),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("strong",{parentName:"td"},"Default")),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"undefined"))))))}s.isMDXComponent=!0}}]);