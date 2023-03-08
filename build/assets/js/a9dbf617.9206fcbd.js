"use strict";(self.webpackChunkionic_docs=self.webpackChunkionic_docs||[]).push([[8675],{3905:function(e,n,t){t.d(n,{Zo:function(){return p},kt:function(){return d}});var r=t(67294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var u=r.createContext({}),c=function(e){var n=r.useContext(u),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},p=function(e){var n=c(e.components);return r.createElement(u.Provider,{value:n},e.children)},s={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},f=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,o=e.originalType,u=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),f=c(t),d=a,m=f["".concat(u,".").concat(d)]||f[d]||s[d]||o;return t?r.createElement(m,i(i({ref:n},p),{},{components:t})):r.createElement(m,i({ref:n},p))}));function d(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var o=t.length,i=new Array(o);i[0]=f;var l={};for(var u in n)hasOwnProperty.call(n,u)&&(l[u]=n[u]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var c=2;c<o;c++)i[c]=t[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}f.displayName="MDXCreateElement"},58215:function(e,n,t){var r=t(67294);n.Z=function(e){var n=e.children,t=e.hidden,a=e.className;return r.createElement("div",{role:"tabpanel",hidden:t,className:a},n)}},26396:function(e,n,t){t.d(n,{Z:function(){return f}});var r=t(87462),a=t(67294),o=t(72389),i=t(79443);var l=function(){var e=(0,a.useContext)(i.Z);if(null==e)throw new Error('"useUserPreferencesContext" is used outside of "Layout" component.');return e},u=t(89521),c=t(86010),p="tabItem_1uMI";function s(e){var n,t,r,o=e.lazy,i=e.block,s=e.defaultValue,f=e.values,d=e.groupId,m=e.className,v=a.Children.map(e.children,(function(e){if((0,a.isValidElement)(e)&&void 0!==e.props.value)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),b=null!=f?f:v.map((function(e){var n=e.props;return{value:n.value,label:n.label}})),h=(0,u.lx)(b,(function(e,n){return e.value===n.value}));if(h.length>0)throw new Error('Docusaurus error: Duplicate values "'+h.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var y=null===s?s:null!=(n=null!=s?s:null==(t=v.find((function(e){return e.props.default})))?void 0:t.props.value)?n:null==(r=v[0])?void 0:r.props.value;if(null!==y&&!b.some((function(e){return e.value===y})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+y+'" but none of its children has the corresponding value. Available values are: '+b.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var g=l(),w=g.tabGroupChoices,O=g.setTabGroupChoices,E=(0,a.useState)(y),k=E[0],T=E[1],j=[],x=(0,u.o5)().blockElementScrollPositionUntilNextRender;if(null!=d){var P=w[d];null!=P&&P!==k&&b.some((function(e){return e.value===P}))&&T(P)}var C=function(e){var n=e.currentTarget,t=j.indexOf(n),r=b[t].value;r!==k&&(x(n),T(r),null!=d&&O(d,r))},N=function(e){var n,t=null;switch(e.key){case"ArrowRight":var r=j.indexOf(e.currentTarget)+1;t=j[r]||j[0];break;case"ArrowLeft":var a=j.indexOf(e.currentTarget)-1;t=j[a]||j[j.length-1]}null==(n=t)||n.focus()};return a.createElement("div",{className:"tabs-container"},a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,c.Z)("tabs",{"tabs--block":i},m)},b.map((function(e){var n=e.value,t=e.label;return a.createElement("li",{role:"tab",tabIndex:k===n?0:-1,"aria-selected":k===n,className:(0,c.Z)("tabs__item",p,{"tabs__item--active":k===n}),key:n,ref:function(e){return j.push(e)},onKeyDown:N,onFocus:C,onClick:C},null!=t?t:n)}))),o?(0,a.cloneElement)(v.filter((function(e){return e.props.value===k}))[0],{className:"margin-vert--md"}):a.createElement("div",{className:"margin-vert--md"},v.map((function(e,n){return(0,a.cloneElement)(e,{key:n,hidden:e.props.value!==k})}))))}function f(e){var n=(0,o.Z)();return a.createElement(s,(0,r.Z)({key:String(n)},e))}},94007:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return l},contentTitle:function(){return u},metadata:function(){return c},toc:function(){return p},default:function(){return f}});var r=t(87462),a=t(63366),o=(t(67294),t(3905)),i=(t(26396),t(58215),["components"]),l={sidebar_label:"ion-app"},u="ion-app",c={unversionedId:"api/app",id:"version-v5/api/app",isDocsHomePage:!1,title:"ion-app",description:"App is a container element for an Ionic application. There should only be one ` element per project. An app can have many Ionic components including menus, headers, content, and footers. The overlay components get appended to the ` when they are presented.",source:"@site/versioned_docs/version-v5/api/app.md",sourceDirName:"api",slug:"/api/app",permalink:"/docs/v5/api/app",editUrl:"https://github.com/ionic-team/ionic-docs/tree/main/docs/api/app.md",tags:[],version:"v5",frontMatter:{sidebar_label:"ion-app"},sidebar:"version-v5/api",previous:{title:"ion-chip",permalink:"/docs/v5/api/chip"},next:{title:"ion-content",permalink:"/docs/v5/api/content"}},p=[],s={toc:p};function f(e){var n=e.components,t=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,r.Z)({},s,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"ion-app"},"ion-app"),(0,o.kt)("p",null,"App is a container element for an Ionic application. There should only be one ",(0,o.kt)("inlineCode",{parentName:"p"},"<ion-app>")," element per project. An app can have many Ionic components including menus, headers, content, and footers. The overlay components get appended to the ",(0,o.kt)("inlineCode",{parentName:"p"},"<ion-app>")," when they are presented."))}f.isMDXComponent=!0}}]);