"use strict";(self.webpackChunkionic_docs=self.webpackChunkionic_docs||[]).push([[53609],{3905:function(t,e,n){n.d(e,{Zo:function(){return u},kt:function(){return d}});var a=n(67294);function o(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function r(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function l(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?r(Object(n),!0).forEach((function(e){o(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function i(t,e){if(null==t)return{};var n,a,o=function(t,e){if(null==t)return{};var n,a,o={},r=Object.keys(t);for(a=0;a<r.length;a++)n=r[a],e.indexOf(n)>=0||(o[n]=t[n]);return o}(t,e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);for(a=0;a<r.length;a++)n=r[a],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(o[n]=t[n])}return o}var s=a.createContext({}),c=function(t){var e=a.useContext(s),n=e;return t&&(n="function"==typeof t?t(e):l(l({},e),t)),n},u=function(t){var e=c(t.components);return a.createElement(s.Provider,{value:e},t.children)},p={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},m=a.forwardRef((function(t,e){var n=t.components,o=t.mdxType,r=t.originalType,s=t.parentName,u=i(t,["components","mdxType","originalType","parentName"]),m=c(n),d=o,b=m["".concat(s,".").concat(d)]||m[d]||p[d]||r;return n?a.createElement(b,l(l({ref:e},u),{},{components:n})):a.createElement(b,l({ref:e},u))}));function d(t,e){var n=arguments,o=e&&e.mdxType;if("string"==typeof t||o){var r=n.length,l=new Array(r);l[0]=m;var i={};for(var s in e)hasOwnProperty.call(e,s)&&(i[s]=e[s]);i.originalType=t,i.mdxType="string"==typeof t?t:o,l[1]=i;for(var c=2;c<r;c++)l[c]=n[c];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},37783:function(t,e,n){n.d(e,{Z:function(){return l}});var a=n(67294),o="tableOfContentsInline_3fWc",r=n(25002);var l=function(t){var e=t.toc,n=t.minHeadingLevel,l=t.maxHeadingLevel;return a.createElement("div",{className:o},a.createElement(r.Z,{toc:e,minHeadingLevel:n,maxHeadingLevel:l,className:"table-of-contents",linkClassName:null}))}},25002:function(t,e,n){n.d(e,{Z:function(){return c}});var a=n(87462),o=n(63366),r=n(67294),l=n(89521),i=["toc","className","linkClassName","linkActiveClassName","minHeadingLevel","maxHeadingLevel"];function s(t){var e=t.toc,n=t.className,a=t.linkClassName,o=t.isChild;return e.length?r.createElement("ul",{className:o?void 0:n},e.map((function(t){return r.createElement("li",{key:t.id},r.createElement("a",{href:"#"+t.id,className:null!=a?a:void 0,dangerouslySetInnerHTML:{__html:t.value}}),r.createElement(s,{isChild:!0,toc:t.children,className:n,linkClassName:a}))}))):null}function c(t){var e=t.toc,n=t.className,c=void 0===n?"table-of-contents table-of-contents__left-border":n,u=t.linkClassName,p=void 0===u?"table-of-contents__link":u,m=t.linkActiveClassName,d=void 0===m?void 0:m,b=t.minHeadingLevel,k=t.maxHeadingLevel,v=(0,o.Z)(t,i),f=(0,l.LU)(),N=null!=b?b:f.tableOfContents.minHeadingLevel,g=null!=k?k:f.tableOfContents.maxHeadingLevel,h=(0,l.DA)({toc:e,minHeadingLevel:N,maxHeadingLevel:g}),y=(0,r.useMemo)((function(){if(p&&d)return{linkClassName:p,linkActiveClassName:d,minHeadingLevel:N,maxHeadingLevel:g}}),[p,d,N,g]);return(0,l.Si)(y),r.createElement(s,(0,a.Z)({toc:h,className:c,linkClassName:p},v))}},58215:function(t,e,n){var a=n(67294);e.Z=function(t){var e=t.children,n=t.hidden,o=t.className;return a.createElement("div",{role:"tabpanel",hidden:n,className:o},e)}},26396:function(t,e,n){n.d(e,{Z:function(){return m}});var a=n(87462),o=n(67294),r=n(72389),l=n(79443);var i=function(){var t=(0,o.useContext)(l.Z);if(null==t)throw new Error('"useUserPreferencesContext" is used outside of "Layout" component.');return t},s=n(89521),c=n(86010),u="tabItem_1uMI";function p(t){var e,n,a,r=t.lazy,l=t.block,p=t.defaultValue,m=t.values,d=t.groupId,b=t.className,k=o.Children.map(t.children,(function(t){if((0,o.isValidElement)(t)&&void 0!==t.props.value)return t;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof t.type?t.type:t.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),v=null!=m?m:k.map((function(t){var e=t.props;return{value:e.value,label:e.label}})),f=(0,s.lx)(v,(function(t,e){return t.value===e.value}));if(f.length>0)throw new Error('Docusaurus error: Duplicate values "'+f.map((function(t){return t.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var N=null===p?p:null!=(e=null!=p?p:null==(n=k.find((function(t){return t.props.default})))?void 0:n.props.value)?e:null==(a=k[0])?void 0:a.props.value;if(null!==N&&!v.some((function(t){return t.value===N})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+N+'" but none of its children has the corresponding value. Available values are: '+v.map((function(t){return t.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var g=i(),h=g.tabGroupChoices,y=g.setTabGroupChoices,T=(0,o.useState)(N),C=T[0],x=T[1],I=[],w=(0,s.o5)().blockElementScrollPositionUntilNextRender;if(null!=d){var Z=h[d];null!=Z&&Z!==C&&v.some((function(t){return t.value===Z}))&&x(Z)}var E=function(t){var e=t.currentTarget,n=I.indexOf(e),a=v[n].value;a!==C&&(w(e),x(a),null!=d&&y(d,a))},D=function(t){var e,n=null;switch(t.key){case"ArrowRight":var a=I.indexOf(t.currentTarget)+1;n=I[a]||I[0];break;case"ArrowLeft":var o=I.indexOf(t.currentTarget)-1;n=I[o]||I[I.length-1]}null==(e=n)||e.focus()};return o.createElement("div",{className:"tabs-container"},o.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,c.Z)("tabs",{"tabs--block":l},b)},v.map((function(t){var e=t.value,n=t.label;return o.createElement("li",{role:"tab",tabIndex:C===e?0:-1,"aria-selected":C===e,className:(0,c.Z)("tabs__item",u,{"tabs__item--active":C===e}),key:e,ref:function(t){return I.push(t)},onKeyDown:D,onFocus:E,onClick:E},null!=n?n:e)}))),r?(0,o.cloneElement)(k.filter((function(t){return t.props.value===C}))[0],{className:"margin-vert--md"}):o.createElement("div",{className:"margin-vert--md"},k.map((function(t,e){return(0,o.cloneElement)(t,{key:e,hidden:t.props.value!==C})}))))}function m(t){var e=(0,r.Z)();return o.createElement(p,(0,a.Z)({key:String(e)},t))}},49679:function(t,e,n){n.d(e,{Z:function(){return p}});var a=n(87462),o=n(63366),r=n(67294),l=n(86010),i=n(44996),s=n(39960),c="encapsulationPill_1PgI",u=["type"];function p(t){var e=t.type,n=(0,o.Z)(t,u),p=(0,i.Z)("reference/glossary#"+e);return r.createElement(s.default,(0,a.Z)({to:p},n,{className:(0,l.Z)(n.className,"encapsulation-pill",c)}),e)}},73063:function(t,e,n){n.r(e),n.d(e,{contentTitle:function(){return O},default:function(){return _},frontMatter:function(){return D},metadata:function(){return S},toc:function(){return P}});var a=n(87462),o=n(63366),r=(n(67294),n(3905)),l=n(26396),i=n(58215),s=n(37783),c=["components"],u={toc:[{value:"color",id:"color",children:[],level:3},{value:"mode",id:"mode",children:[],level:3},{value:"selectedTab",id:"selectedtab",children:[],level:3},{value:"translucent",id:"translucent",children:[],level:3}]};function p(t){var e=t.components,n=(0,o.Z)(t,c);return(0,r.kt)("wrapper",(0,a.Z)({},u,n,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("h3",{id:"color"},"color"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null}),(0,r.kt)("th",{parentName:"tr",align:null}))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"Description")),(0,r.kt)("td",{parentName:"tr",align:null},"The color to use from your application's color palette. Default options are: ",(0,r.kt)("inlineCode",{parentName:"td"},'"primary"'),", ",(0,r.kt)("inlineCode",{parentName:"td"},'"secondary"'),", ",(0,r.kt)("inlineCode",{parentName:"td"},'"tertiary"'),", ",(0,r.kt)("inlineCode",{parentName:"td"},'"success"'),", ",(0,r.kt)("inlineCode",{parentName:"td"},'"warning"'),", ",(0,r.kt)("inlineCode",{parentName:"td"},'"danger"'),", ",(0,r.kt)("inlineCode",{parentName:"td"},'"light"'),", ",(0,r.kt)("inlineCode",{parentName:"td"},'"medium"'),", and ",(0,r.kt)("inlineCode",{parentName:"td"},'"dark"'),". For more information on colors, see ",(0,r.kt)("a",{parentName:"td",href:"/docs/theming/basics"},"theming"),".")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"Attribute")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"color"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"Type")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},'"danger" \uff5c "dark" \uff5c "light" \uff5c "medium" \uff5c "primary" \uff5c "secondary" \uff5c "success" \uff5c "tertiary" \uff5c "warning" \uff5c string & Record<never, never> \uff5c undefined'))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"Default")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"undefined"))))),(0,r.kt)("h3",{id:"mode"},"mode"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null}),(0,r.kt)("th",{parentName:"tr",align:null}))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"Description")),(0,r.kt)("td",{parentName:"tr",align:null},"The mode determines which platform styles to use.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"Attribute")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"mode"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"Type")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},'"ios" \uff5c "md"'))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"Default")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"undefined"))))),(0,r.kt)("h3",{id:"selectedtab"},"selectedTab"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null}),(0,r.kt)("th",{parentName:"tr",align:null}))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"Description")),(0,r.kt)("td",{parentName:"tr",align:null},"The selected tab component")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"Attribute")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"selected-tab"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"Type")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"string \uff5c undefined"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"Default")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"undefined"))))),(0,r.kt)("h3",{id:"translucent"},"translucent"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null}),(0,r.kt)("th",{parentName:"tr",align:null}))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"Description")),(0,r.kt)("td",{parentName:"tr",align:null},"If ",(0,r.kt)("inlineCode",{parentName:"td"},"true"),", the tab bar will be translucent. Only applies when the mode is ",(0,r.kt)("inlineCode",{parentName:"td"},'"ios"')," and the device supports ",(0,r.kt)("a",{parentName:"td",href:"https://developer.mozilla.org/en-US/docs/Web/CSS/backdrop-filter#Browser_compatibility"},(0,r.kt)("inlineCode",{parentName:"a"},"backdrop-filter")),".")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"Attribute")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"translucent"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"Type")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"boolean"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"Default")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"false"))))))}p.isMDXComponent=!0;var m=["components"],d={toc:[]};function b(t){var e=t.components,n=(0,o.Z)(t,m);return(0,r.kt)("wrapper",(0,a.Z)({},d,n,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"No events available for this component."))}b.isMDXComponent=!0;var k=["components"],v={toc:[]};function f(t){var e=t.components,n=(0,o.Z)(t,k);return(0,r.kt)("wrapper",(0,a.Z)({},v,n,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"No public methods available for this component."))}f.isMDXComponent=!0;var N=["components"],g={toc:[]};function h(t){var e=t.components,n=(0,o.Z)(t,N);return(0,r.kt)("wrapper",(0,a.Z)({},g,n,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"No CSS shadow parts available for this component."))}h.isMDXComponent=!0;var y=["components"],T={toc:[]};function C(t){var e=t.components,n=(0,o.Z)(t,y);return(0,r.kt)("wrapper",(0,a.Z)({},T,n,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Name"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"--background")),(0,r.kt)("td",{parentName:"tr",align:null},"Background of the tab bar")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"--border")),(0,r.kt)("td",{parentName:"tr",align:null},"Border of the tab bar")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"--color")),(0,r.kt)("td",{parentName:"tr",align:null},"Color of the tab bar")))))}C.isMDXComponent=!0;var x=["components"],I={toc:[]};function w(t){var e=t.components,n=(0,o.Z)(t,x);return(0,r.kt)("wrapper",(0,a.Z)({},I,n,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"No slots available for this component."))}w.isMDXComponent=!0;var Z=n(49679),E=["components"],D={title:"ion-tab-bar",hide_table_of_contents:!0},O=void 0,S={unversionedId:"api/tab-bar",id:"api/tab-bar",isDocsHomePage:!1,title:"ion-tab-bar",description:"ion-tab-bar with CSS Custom Properties for Tab Bar Components",source:"@site/docs/api/tab-bar.md",sourceDirName:"api",slug:"/api/tab-bar",permalink:"/developer/docs/api/tab-bar",editUrl:"https://github.com/ionic-team/ionic-docs/tree/main/docs/api/tab-bar.md",tags:[],version:"current",frontMatter:{title:"ion-tab-bar",hide_table_of_contents:!0},sidebar:"api",previous:{title:"ion-tab",permalink:"/developer/docs/api/tab"},next:{title:"ion-tab-button",permalink:"/developer/docs/api/tab-button"}},P=[{value:"Usage",id:"usage",children:[],level:2},{value:"Properties",id:"properties",children:[],level:2},{value:"Events",id:"events",children:[],level:2},{value:"Methods",id:"methods",children:[],level:2},{value:"CSS Shadow Parts",id:"css-shadow-parts",children:[],level:2},{value:"CSS Custom Properties",id:"css-custom-properties",children:[],level:2},{value:"Slots",id:"slots",children:[],level:2}],L={toc:P};function _(t){var e=t.components,n=(0,o.Z)(t,E);return(0,r.kt)("wrapper",(0,a.Z)({},L,n,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("head",null,(0,r.kt)("title",null,"ion-tab-bar with CSS Custom Properties for Tab Bar Components"),(0,r.kt)("meta",{name:"description",content:"The tab bar component contains a set of\xa0tab buttons and a tab bar must be provided inside of\xa0tabs\xa0to communicate. Read more about use and CSS custom properties."})),(0,r.kt)(Z.Z,{type:"shadow",mdxType:"EncapsulationPill"}),(0,r.kt)("h2",{className:"table-of-contents__title"},"Contents"),(0,r.kt)(s.Z,{toc:P,maxHeadingLevel:2,mdxType:"TOCInline"}),(0,r.kt)("p",null,"The tab bar is a UI component that contains a set of ",(0,r.kt)("a",{parentName:"p",href:"/developer/docs/api/tab-button"},"tab buttons"),". A tab bar must be provided inside of ",(0,r.kt)("a",{parentName:"p",href:"/developer/docs/api/tabs"},"tabs")," to communicate with each ",(0,r.kt)("a",{parentName:"p",href:"/developer/docs/api/tab"},"tab"),"."),(0,r.kt)("h2",{id:"usage"},"Usage"),(0,r.kt)(l.Z,{groupId:"framework",defaultValue:"angular",values:[{value:"angular",label:"Angular"},{value:"javascript",label:"Javascript"},{value:"react",label:"React"},{value:"stencil",label:"Stencil"},{value:"vue",label:"Vue"}],mdxType:"Tabs"},(0,r.kt)(i.Z,{value:"angular",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-html"},'<ion-tabs>\n  \x3c!-- Tab bar --\x3e\n  <ion-tab-bar slot="bottom">\n    <ion-tab-button tab="account">\n      <ion-icon name="person"></ion-icon>\n    </ion-tab-button>\n    <ion-tab-button tab="contact">\n      <ion-icon name="call"></ion-icon>\n    </ion-tab-button>\n    <ion-tab-button tab="settings">\n      <ion-icon name="settings"></ion-icon>\n    </ion-tab-button>\n  </ion-tab-bar>\n</ion-tabs>\n'))),(0,r.kt)(i.Z,{value:"javascript",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-html"},'<ion-tabs>\n  \x3c!-- Tab views --\x3e\n  <ion-tab tab="account"></ion-tab>\n  <ion-tab tab="contact"></ion-tab>\n  <ion-tab tab="settings"></ion-tab>\n\n  \x3c!-- Tab bar --\x3e\n  <ion-tab-bar slot="bottom">\n    <ion-tab-button tab="account">\n      <ion-icon name="person"></ion-icon>\n    </ion-tab-button>\n    <ion-tab-button tab="contact">\n      <ion-icon name="call"></ion-icon>\n    </ion-tab-button>\n    <ion-tab-button tab="settings">\n      <ion-icon name="settings"></ion-icon>\n    </ion-tab-button>\n  </ion-tab-bar>\n</ion-tabs>\n'))),(0,r.kt)(i.Z,{value:"react",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx"},'import React from \'react\';\nimport { IonTabs, IonTabBar, IonTabButton, IonIcon, IonContent } from \'@ionic/react\';\nimport { call, person, settings } from \'ionicons/icons\';\n\nexport const TabBarExample: React.FC = () => (\n  <IonContent>\n    <IonTabs>\n      {/*-- Tab bar --*/}\n      <IonTabBar slot="bottom">\n        <IonTabButton tab="account">\n          <IonIcon icon={person} />\n        </IonTabButton>\n        <IonTabButton tab="contact">\n          <IonIcon icon={call} />\n        </IonTabButton>\n        <IonTabButton tab="settings">\n          <IonIcon icon={settings} />\n        </IonTabButton>\n      </IonTabBar>\n    </IonTabs>\n  </IonContent>\n);\n'))),(0,r.kt)(i.Z,{value:"stencil",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx"},'import { Component, h } from \'@stencil/core\';\n\n@Component({\n  tag: \'tab-bar-example\',\n  styleUrl: \'tab-bar-example.css\'\n})\nexport class TabBarExample {\n  render() {\n    return [\n      <ion-tabs>\n        {/* Tab views */}\n        <ion-tab tab="account" component="page-account"></ion-tab>\n        <ion-tab tab="contact" component="page-contact"></ion-tab>\n        <ion-tab tab="settings" component="page-settings"></ion-tab>\n\n        {/* Tab bar */}\n        <ion-tab-bar slot="bottom">\n          <ion-tab-button tab="account">\n            <ion-icon name="person"></ion-icon>\n          </ion-tab-button>\n          <ion-tab-button tab="contact">\n            <ion-icon name="call"></ion-icon>\n          </ion-tab-button>\n          <ion-tab-button tab="settings">\n            <ion-icon name="settings"></ion-icon>\n          </ion-tab-button>\n        </ion-tab-bar>\n      </ion-tabs>\n    ];\n  }\n}\n'))),(0,r.kt)(i.Z,{value:"vue",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-html"},'<template>\n  <ion-tabs>\n    \x3c!-- Tab bar --\x3e\n    <ion-tab-bar slot="bottom">\n      <ion-tab-button tab="account">\n        <ion-icon :icon="person"></ion-icon>\n      </ion-tab-button>\n      <ion-tab-button tab="contact">\n        <ion-icon :icon="call"></ion-icon>\n      </ion-tab-button>\n      <ion-tab-button tab="settings">\n        <ion-icon :icon="settings"></ion-icon>\n      </ion-tab-button>\n    </ion-tab-bar>\n  </ion-tabs>\n</template>\n\n<script>\nimport { IonIcon, IonTabBar, IonTabButton, IonTabs } from \'@ionic/vue\';\nimport { call, person, settings } from \'ionicons/icons\';\nimport { defineComponent } from \'vue\';\n\nexport default defineComponent({\n  components: { IonIcon, IonTabBar, IonTabButton, IonTabs },\n  setup() {\n    return { call, person, settings }\n  }\n});\n<\/script>\n')))),(0,r.kt)("h2",{id:"properties"},"Properties"),(0,r.kt)(p,{mdxType:"Props"}),(0,r.kt)("h2",{id:"events"},"Events"),(0,r.kt)(b,{mdxType:"Events"}),(0,r.kt)("h2",{id:"methods"},"Methods"),(0,r.kt)(f,{mdxType:"Methods"}),(0,r.kt)("h2",{id:"css-shadow-parts"},"CSS Shadow Parts"),(0,r.kt)(h,{mdxType:"Parts"}),(0,r.kt)("h2",{id:"css-custom-properties"},"CSS Custom Properties"),(0,r.kt)(C,{mdxType:"CustomProps"}),(0,r.kt)("h2",{id:"slots"},"Slots"),(0,r.kt)(w,{mdxType:"Slots"}))}_.isMDXComponent=!0}}]);