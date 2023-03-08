"use strict";(self.webpackChunkionic_docs=self.webpackChunkionic_docs||[]).push([[46317],{3905:function(e,n,r){r.d(n,{Zo:function(){return s},kt:function(){return d}});var t=r(67294);function o(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}function a(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,t)}return r}function i(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?a(Object(r),!0).forEach((function(n){o(e,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))}))}return e}function l(e,n){if(null==e)return{};var r,t,o=function(e,n){if(null==e)return{};var r,t,o={},a=Object.keys(e);for(t=0;t<a.length;t++)r=a[t],n.indexOf(r)>=0||(o[r]=e[r]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(t=0;t<a.length;t++)r=a[t],n.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var u=t.createContext({}),c=function(e){var n=t.useContext(u),r=n;return e&&(r="function"==typeof e?e(n):i(i({},n),e)),r},s=function(e){var n=c(e.components);return t.createElement(u.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},f=t.forwardRef((function(e,n){var r=e.components,o=e.mdxType,a=e.originalType,u=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),f=c(r),d=o,m=f["".concat(u,".").concat(d)]||f[d]||p[d]||a;return r?t.createElement(m,i(i({ref:n},s),{},{components:r})):t.createElement(m,i({ref:n},s))}));function d(e,n){var r=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=f;var l={};for(var u in n)hasOwnProperty.call(n,u)&&(l[u]=n[u]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var c=2;c<a;c++)i[c]=r[c];return t.createElement.apply(null,i)}return t.createElement.apply(null,r)}f.displayName="MDXCreateElement"},58215:function(e,n,r){var t=r(67294);n.Z=function(e){var n=e.children,r=e.hidden,o=e.className;return t.createElement("div",{role:"tabpanel",hidden:r,className:o},n)}},26396:function(e,n,r){r.d(n,{Z:function(){return f}});var t=r(87462),o=r(67294),a=r(72389),i=r(79443);var l=function(){var e=(0,o.useContext)(i.Z);if(null==e)throw new Error('"useUserPreferencesContext" is used outside of "Layout" component.');return e},u=r(89521),c=r(86010),s="tabItem_1uMI";function p(e){var n,r,t,a=e.lazy,i=e.block,p=e.defaultValue,f=e.values,d=e.groupId,m=e.className,v=o.Children.map(e.children,(function(e){if((0,o.isValidElement)(e)&&void 0!==e.props.value)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),h=null!=f?f:v.map((function(e){var n=e.props;return{value:n.value,label:n.label}})),b=(0,u.lx)(h,(function(e,n){return e.value===n.value}));if(b.length>0)throw new Error('Docusaurus error: Duplicate values "'+b.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var y=null===p?p:null!=(n=null!=p?p:null==(r=v.find((function(e){return e.props.default})))?void 0:r.props.value)?n:null==(t=v[0])?void 0:t.props.value;if(null!==y&&!h.some((function(e){return e.value===y})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+y+'" but none of its children has the corresponding value. Available values are: '+h.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var w=l(),g=w.tabGroupChoices,k=w.setTabGroupChoices,O=(0,o.useState)(y),E=O[0],x=O[1],T=[],j=(0,u.o5)().blockElementScrollPositionUntilNextRender;if(null!=d){var N=g[d];null!=N&&N!==E&&h.some((function(e){return e.value===N}))&&x(N)}var P=function(e){var n=e.currentTarget,r=T.indexOf(n),t=h[r].value;t!==E&&(j(n),x(t),null!=d&&k(d,t))},C=function(e){var n,r=null;switch(e.key){case"ArrowRight":var t=T.indexOf(e.currentTarget)+1;r=T[t]||T[0];break;case"ArrowLeft":var o=T.indexOf(e.currentTarget)-1;r=T[o]||T[T.length-1]}null==(n=r)||n.focus()};return o.createElement("div",{className:"tabs-container"},o.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,c.Z)("tabs",{"tabs--block":i},m)},h.map((function(e){var n=e.value,r=e.label;return o.createElement("li",{role:"tab",tabIndex:E===n?0:-1,"aria-selected":E===n,className:(0,c.Z)("tabs__item",s,{"tabs__item--active":E===n}),key:n,ref:function(e){return T.push(e)},onKeyDown:C,onFocus:P,onClick:P},null!=r?r:n)}))),a?(0,o.cloneElement)(v.filter((function(e){return e.props.value===E}))[0],{className:"margin-vert--md"}):o.createElement("div",{className:"margin-vert--md"},v.map((function(e,n){return(0,o.cloneElement)(e,{key:n,hidden:e.props.value!==E})}))))}function f(e){var n=(0,a.Z)();return o.createElement(p,(0,t.Z)({key:String(n)},e))}},38280:function(e,n,r){r.r(n),r.d(n,{frontMatter:function(){return l},contentTitle:function(){return u},metadata:function(){return c},toc:function(){return s},default:function(){return f}});var t=r(87462),o=r(63366),a=(r(67294),r(3905)),i=(r(26396),r(58215),["components"]),l={sidebar_label:"ion-row"},u="ion-row",c={unversionedId:"api/row",id:"version-v5/api/row",isDocsHomePage:!1,title:"ion-row",description:"Rows are horizontal components of the grid system and contain varying numbers of",source:"@site/versioned_docs/version-v5/api/row.md",sourceDirName:"api",slug:"/api/row",permalink:"/docs/v5/api/row",editUrl:"https://github.com/ionic-team/ionic-docs/tree/main/docs/api/row.md",tags:[],version:"v5",frontMatter:{sidebar_label:"ion-row"},sidebar:"version-v5/api",previous:{title:"ion-col",permalink:"/docs/v5/api/col"},next:{title:"ion-infinite-scroll",permalink:"/docs/v5/api/infinite-scroll"}},s=[{value:"Row Alignment",id:"row-alignment",children:[],level:2}],p={toc:s};function f(e){var n=e.components,r=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,t.Z)({},p,r,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"ion-row"},"ion-row"),(0,a.kt)("p",null,"Rows are horizontal components of the ",(0,a.kt)("a",{parentName:"p",href:"/docs/v5/api/grid"},"grid")," system and contain varying numbers of\n",(0,a.kt)("a",{parentName:"p",href:"/docs/v5/api/col"},"columns"),". They ensure the columns are positioned properly."),(0,a.kt)("p",null,"See ",(0,a.kt)("a",{parentName:"p",href:"/docs/v5/layout/grid"},"Grid Layout")," for more information."),(0,a.kt)("h2",{id:"row-alignment"},"Row Alignment"),(0,a.kt)("p",null,"By default, columns will stretch to fill the entire height of the row and wrap when necessary. Rows are ",(0,a.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Glossary/Flex_Container"},"flex containers"),", so there are several ",(0,a.kt)("a",{parentName:"p",href:"/docs/v5/layout/css-utilities#flex-container-properties"},"CSS classes")," that can be applied to a row to customize this behavior."))}f.isMDXComponent=!0}}]);