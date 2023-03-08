"use strict";(self.webpackChunkionic_docs=self.webpackChunkionic_docs||[]).push([[76777],{3905:function(e,t,n){n.d(t,{Zo:function(){return s},kt:function(){return m}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var u=r.createContext({}),p=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},s=function(e){var t=p(e.components);return r.createElement(u.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},c=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,u=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),c=p(n),m=a,f=c["".concat(u,".").concat(m)]||c[m]||d[m]||l;return n?r.createElement(f,o(o({ref:t},s),{},{components:n})):r.createElement(f,o({ref:t},s))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,o=new Array(l);o[0]=c;var i={};for(var u in t)hasOwnProperty.call(t,u)&&(i[u]=t[u]);i.originalType=e,i.mdxType="string"==typeof e?e:a,o[1]=i;for(var p=2;p<l;p++)o[p]=n[p];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}c.displayName="MDXCreateElement"},58215:function(e,t,n){var r=n(67294);t.Z=function(e){var t=e.children,n=e.hidden,a=e.className;return r.createElement("div",{role:"tabpanel",hidden:n,className:a},t)}},26396:function(e,t,n){n.d(t,{Z:function(){return c}});var r=n(87462),a=n(67294),l=n(72389),o=n(79443);var i=function(){var e=(0,a.useContext)(o.Z);if(null==e)throw new Error('"useUserPreferencesContext" is used outside of "Layout" component.');return e},u=n(89521),p=n(86010),s="tabItem_1uMI";function d(e){var t,n,r,l=e.lazy,o=e.block,d=e.defaultValue,c=e.values,m=e.groupId,f=e.className,g=a.Children.map(e.children,(function(e){if((0,a.isValidElement)(e)&&void 0!==e.props.value)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),b=null!=c?c:g.map((function(e){var t=e.props;return{value:t.value,label:t.label}})),v=(0,u.lx)(b,(function(e,t){return e.value===t.value}));if(v.length>0)throw new Error('Docusaurus error: Duplicate values "'+v.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var k=null===d?d:null!=(t=null!=d?d:null==(n=g.find((function(e){return e.props.default})))?void 0:n.props.value)?t:null==(r=g[0])?void 0:r.props.value;if(null!==k&&!b.some((function(e){return e.value===k})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+k+'" but none of its children has the corresponding value. Available values are: '+b.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var h=i(),y=h.tabGroupChoices,N=h.setTabGroupChoices,w=(0,a.useState)(k),C=w[0],O=w[1],T=[],E=(0,u.o5)().blockElementScrollPositionUntilNextRender;if(null!=m){var j=y[m];null!=j&&j!==C&&b.some((function(e){return e.value===j}))&&O(j)}var x=function(e){var t=e.currentTarget,n=T.indexOf(t),r=b[n].value;r!==C&&(E(t),O(r),null!=m&&N(m,r))},D=function(e){var t,n=null;switch(e.key){case"ArrowRight":var r=T.indexOf(e.currentTarget)+1;n=T[r]||T[0];break;case"ArrowLeft":var a=T.indexOf(e.currentTarget)-1;n=T[a]||T[T.length-1]}null==(t=n)||t.focus()};return a.createElement("div",{className:"tabs-container"},a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,p.Z)("tabs",{"tabs--block":o},f)},b.map((function(e){var t=e.value,n=e.label;return a.createElement("li",{role:"tab",tabIndex:C===t?0:-1,"aria-selected":C===t,className:(0,p.Z)("tabs__item",s,{"tabs__item--active":C===t}),key:t,ref:function(e){return T.push(e)},onKeyDown:D,onFocus:x,onClick:x},null!=n?n:t)}))),l?(0,a.cloneElement)(g.filter((function(e){return e.props.value===C}))[0],{className:"margin-vert--md"}):a.createElement("div",{className:"margin-vert--md"},g.map((function(e,t){return(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==C})}))))}function c(e){var t=(0,l.Z)();return a.createElement(d,(0,r.Z)({key:String(t)},e))}},24313:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return i},contentTitle:function(){return u},metadata:function(){return p},toc:function(){return s},default:function(){return c}});var r=n(87462),a=n(63366),l=(n(67294),n(3905)),o=(n(26396),n(58215),["components"]),i={sidebar_label:"ion-menu-toggle"},u="ion-menu-toggle",p={unversionedId:"api/menu-toggle",id:"version-v5/api/menu-toggle",isDocsHomePage:!1,title:"ion-menu-toggle",description:"The MenuToggle component can be used to toggle a menu open or closed.",source:"@site/versioned_docs/version-v5/api/menu-toggle.md",sourceDirName:"api",slug:"/api/menu-toggle",permalink:"/docs/v5/api/menu-toggle",editUrl:"https://github.com/ionic-team/ionic-docs/tree/main/docs/api/menu-toggle.md",tags:[],version:"v5",frontMatter:{sidebar_label:"ion-menu-toggle"},sidebar:"version-v5/api",previous:{title:"ion-menu-button",permalink:"/docs/v5/api/menu-button"},next:{title:"ion-split-pane",permalink:"/docs/v5/api/split-pane"}},s=[{value:"Properties",id:"properties",children:[{value:"autoHide",id:"autohide",children:[],level:3},{value:"menu",id:"menu",children:[],level:3}],level:2}],d={toc:s};function c(e){var t=e.components,n=(0,a.Z)(e,o);return(0,l.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"ion-menu-toggle"},"ion-menu-toggle"),(0,l.kt)("p",null,"The MenuToggle component can be used to toggle a menu open or closed."),(0,l.kt)("p",null,"By default, it's only visible when the selected menu is active. A menu is active when it can be opened/closed. If the menu is disabled or it's being presented as a split-pane, the menu is marked as non-active and ion-menu-toggle hides itself."),(0,l.kt)("p",null,"In case it's desired to keep ",(0,l.kt)("inlineCode",{parentName:"p"},"ion-menu-toggle")," always visible, the ",(0,l.kt)("inlineCode",{parentName:"p"},"autoHide")," property can be set to ",(0,l.kt)("inlineCode",{parentName:"p"},"false"),"."),(0,l.kt)("h2",{id:"properties"},"Properties"),(0,l.kt)("h3",{id:"autohide"},"autoHide"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null}),(0,l.kt)("th",{parentName:"tr",align:null}))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"Description")),(0,l.kt)("td",{parentName:"tr",align:null},"Automatically hides the content when the corresponding menu is not active.",(0,l.kt)("br",null),(0,l.kt)("br",null),"By default, it's ",(0,l.kt)("inlineCode",{parentName:"td"},"true"),". Change it to ",(0,l.kt)("inlineCode",{parentName:"td"},"false")," in order to",(0,l.kt)("br",null),"keep ",(0,l.kt)("inlineCode",{parentName:"td"},"ion-menu-toggle")," always visible regardless the state of the menu.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"Attribute")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"auto-hide"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"Type")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"boolean"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"Default")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"true"))))),(0,l.kt)("h3",{id:"menu"},"menu"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null}),(0,l.kt)("th",{parentName:"tr",align:null}))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"Description")),(0,l.kt)("td",{parentName:"tr",align:null},"Optional property that maps to a Menu's ",(0,l.kt)("inlineCode",{parentName:"td"},"menuId")," prop.",(0,l.kt)("br",null),"Can also be ",(0,l.kt)("inlineCode",{parentName:"td"},"start")," or ",(0,l.kt)("inlineCode",{parentName:"td"},"end")," for the menu side.",(0,l.kt)("br",null),"This is used to find the correct menu to toggle.",(0,l.kt)("br",null),(0,l.kt)("br",null),"If this property is not used, ",(0,l.kt)("inlineCode",{parentName:"td"},"ion-menu-toggle")," will toggle the",(0,l.kt)("br",null),"first menu that is active.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"Attribute")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"menu"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"Type")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"string \\| undefined"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"Default")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"undefined"))))))}c.isMDXComponent=!0}}]);