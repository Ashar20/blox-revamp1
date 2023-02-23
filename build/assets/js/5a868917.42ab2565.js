"use strict";(self.webpackChunkionic_docs=self.webpackChunkionic_docs||[]).push([[22751],{3905:function(e,n,t){t.d(n,{Zo:function(){return u},kt:function(){return c}});var r=t(67294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var p=r.createContext({}),s=function(e){var n=r.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},u=function(e){var n=s(e.components);return r.createElement(p.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},m=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,i=e.originalType,p=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),m=s(t),c=a,k=m["".concat(p,".").concat(c)]||m[c]||d[c]||i;return t?r.createElement(k,o(o({ref:n},u),{},{components:t})):r.createElement(k,o({ref:n},u))}));function c(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var i=t.length,o=new Array(i);o[0]=m;var l={};for(var p in n)hasOwnProperty.call(n,p)&&(l[p]=n[p]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var s=2;s<i;s++)o[s]=t[s];return r.createElement.apply(null,o)}return r.createElement.apply(null,t)}m.displayName="MDXCreateElement"},58215:function(e,n,t){var r=t(67294);n.Z=function(e){var n=e.children,t=e.hidden,a=e.className;return r.createElement("div",{role:"tabpanel",hidden:t,className:a},n)}},26396:function(e,n,t){t.d(n,{Z:function(){return m}});var r=t(87462),a=t(67294),i=t(72389),o=t(79443);var l=function(){var e=(0,a.useContext)(o.Z);if(null==e)throw new Error('"useUserPreferencesContext" is used outside of "Layout" component.');return e},p=t(89521),s=t(86010),u="tabItem_1uMI";function d(e){var n,t,r,i=e.lazy,o=e.block,d=e.defaultValue,m=e.values,c=e.groupId,k=e.className,f=a.Children.map(e.children,(function(e){if((0,a.isValidElement)(e)&&void 0!==e.props.value)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),b=null!=m?m:f.map((function(e){var n=e.props;return{value:n.value,label:n.label}})),N=(0,p.lx)(b,(function(e,n){return e.value===n.value}));if(N.length>0)throw new Error('Docusaurus error: Duplicate values "'+N.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var h=null===d?d:null!=(n=null!=d?d:null==(t=f.find((function(e){return e.props.default})))?void 0:t.props.value)?n:null==(r=f[0])?void 0:r.props.value;if(null!==h&&!b.some((function(e){return e.value===h})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+h+'" but none of its children has the corresponding value. Available values are: '+b.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var v=l(),g=v.tabGroupChoices,y=v.setTabGroupChoices,x=(0,a.useState)(h),C=x[0],S=x[1],T=[],D=(0,p.o5)().blockElementScrollPositionUntilNextRender;if(null!=c){var w=g[c];null!=w&&w!==C&&b.some((function(e){return e.value===w}))&&S(w)}var I=function(e){var n=e.currentTarget,t=T.indexOf(n),r=b[t].value;r!==C&&(D(n),S(r),null!=c&&y(c,r))},O=function(e){var n,t=null;switch(e.key){case"ArrowRight":var r=T.indexOf(e.currentTarget)+1;t=T[r]||T[0];break;case"ArrowLeft":var a=T.indexOf(e.currentTarget)-1;t=T[a]||T[T.length-1]}null==(n=t)||n.focus()};return a.createElement("div",{className:"tabs-container"},a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,s.Z)("tabs",{"tabs--block":o},k)},b.map((function(e){var n=e.value,t=e.label;return a.createElement("li",{role:"tab",tabIndex:C===n?0:-1,"aria-selected":C===n,className:(0,s.Z)("tabs__item",u,{"tabs__item--active":C===n}),key:n,ref:function(e){return T.push(e)},onKeyDown:O,onFocus:I,onClick:I},null!=t?t:n)}))),i?(0,a.cloneElement)(f.filter((function(e){return e.props.value===C}))[0],{className:"margin-vert--md"}):a.createElement("div",{className:"margin-vert--md"},f.map((function(e,n){return(0,a.cloneElement)(e,{key:n,hidden:e.props.value!==C})}))))}function m(e){var n=(0,i.Z)();return a.createElement(d,(0,r.Z)({key:String(n)},e))}},93763:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return s},contentTitle:function(){return u},metadata:function(){return d},toc:function(){return m},default:function(){return k}});var r=t(87462),a=t(63366),i=(t(67294),t(3905)),o=t(26396),l=t(58215),p=["components"],s={title:"ion-spinner | Animated Spinner Icon Components and Properties",description:"The ion-spinner component provides a variety of animated SVG spinners. These icons indicate that the app is loading or performing another process to wait on.",sidebar_label:"ion-spinner",demoUrl:"/docs/demos/api/spinner/index.html",demoSourceUrl:"https://github.com/ionic-team/ionic-docs/tree/main/static/demos/api/spinner/index.html"},u="ion-spinner",d={unversionedId:"api/spinner",id:"version-v5/api/spinner",isDocsHomePage:!1,title:"ion-spinner | Animated Spinner Icon Components and Properties",description:"The ion-spinner component provides a variety of animated SVG spinners. These icons indicate that the app is loading or performing another process to wait on.",source:"@site/versioned_docs/version-v5/api/spinner.md",sourceDirName:"api",slug:"/api/spinner",permalink:"/developer/docs/v5/api/spinner",editUrl:"https://github.com/ionic-team/ionic-docs/tree/main/docs/api/spinner.md",tags:[],version:"v5",frontMatter:{title:"ion-spinner | Animated Spinner Icon Components and Properties",description:"The ion-spinner component provides a variety of animated SVG spinners. These icons indicate that the app is loading or performing another process to wait on.",sidebar_label:"ion-spinner",demoUrl:"/docs/demos/api/spinner/index.html",demoSourceUrl:"https://github.com/ionic-team/ionic-docs/tree/main/static/demos/api/spinner/index.html"},sidebar:"version-v5/api",previous:{title:"ion-skeleton-text",permalink:"/developer/docs/v5/api/skeleton-text"},next:{title:"ion-radio",permalink:"/developer/docs/v5/api/radio"}},m=[{value:"Usage",id:"usage",children:[],level:2},{value:"Properties",id:"properties",children:[{value:"color",id:"color",children:[],level:3},{value:"duration",id:"duration",children:[],level:3},{value:"name",id:"name",children:[],level:3},{value:"paused",id:"paused",children:[],level:3}],level:2},{value:"CSS Custom Properties",id:"css-custom-properties",children:[],level:2}],c={toc:m};function k(e){var n=e.components,t=(0,a.Z)(e,p);return(0,i.kt)("wrapper",(0,r.Z)({},c,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"ion-spinner"},"ion-spinner"),(0,i.kt)("p",null,"The Spinner component provides a variety of animated SVG spinners. Spinners are visual indicators that the app is loading content or performing another process that the user needs to wait on."),(0,i.kt)("p",null,"The default spinner to use is based on the platform. The default spinner for ",(0,i.kt)("inlineCode",{parentName:"p"},"ios")," is ",(0,i.kt)("inlineCode",{parentName:"p"},'"lines"'),", and the default for ",(0,i.kt)("inlineCode",{parentName:"p"},"android")," is ",(0,i.kt)("inlineCode",{parentName:"p"},'"crescent"'),". If the platform is not ",(0,i.kt)("inlineCode",{parentName:"p"},"ios")," or ",(0,i.kt)("inlineCode",{parentName:"p"},"android"),", the spinner will default to ",(0,i.kt)("inlineCode",{parentName:"p"},"crescent"),". If the ",(0,i.kt)("inlineCode",{parentName:"p"},"name")," property is set, then that spinner will be used instead of the platform specific spinner."),(0,i.kt)("h2",{id:"usage"},"Usage"),(0,i.kt)(o.Z,{groupId:"framework",defaultValue:"angular",values:[{value:"angular",label:"Angular"},{value:"javascript",label:"Javascript"},{value:"react",label:"React"},{value:"stencil",label:"Stencil"},{value:"vue",label:"Vue"}],mdxType:"Tabs"},(0,i.kt)(l.Z,{value:"angular",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-html"},'\x3c!-- Default Spinner --\x3e\n<ion-spinner></ion-spinner>\n\n\x3c!-- Lines --\x3e\n<ion-spinner name="lines"></ion-spinner>\n\n\x3c!-- Lines Small --\x3e\n<ion-spinner name="lines-small"></ion-spinner>\n\n\x3c!-- Dots --\x3e\n<ion-spinner name="dots"></ion-spinner>\n\n\x3c!-- Bubbles --\x3e\n<ion-spinner name="bubbles"></ion-spinner>\n\n\x3c!-- Circles --\x3e\n<ion-spinner name="circles"></ion-spinner>\n\n\x3c!-- Crescent --\x3e\n<ion-spinner name="crescent"></ion-spinner>\n\n\x3c!-- Paused Default Spinner --\x3e\n<ion-spinner paused></ion-spinner>\n'))),(0,i.kt)(l.Z,{value:"javascript",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-html"},'\x3c!-- Default Spinner --\x3e\n<ion-spinner></ion-spinner>\n\n\x3c!-- Lines --\x3e\n<ion-spinner name="lines"></ion-spinner>\n\n\x3c!-- Lines Small --\x3e\n<ion-spinner name="lines-small"></ion-spinner>\n\n\x3c!-- Dots --\x3e\n<ion-spinner name="dots"></ion-spinner>\n\n\x3c!-- Bubbles --\x3e\n<ion-spinner name="bubbles"></ion-spinner>\n\n\x3c!-- Circles --\x3e\n<ion-spinner name="circles"></ion-spinner>\n\n\x3c!-- Crescent --\x3e\n<ion-spinner name="crescent"></ion-spinner>\n\n\x3c!-- Paused Default Spinner --\x3e\n<ion-spinner paused></ion-spinner>\n'))),(0,i.kt)(l.Z,{value:"react",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-tsx"},'import React from \'react\';\nimport { IonSpinner, IonContent } from \'@ionic/react\';\n\nexport const SpinnerExample: React.FC = () => (\n  <IonContent>\n    {/*-- Default Spinner --*/}\n    <IonSpinner />\n\n    {/*-- Lines --*/}\n    <IonSpinner name="lines" />\n\n    {/*-- Lines Small --*/}\n    <IonSpinner name="lines-small" />\n\n    {/*-- Dots --*/}\n    <IonSpinner name="dots" />\n\n    {/*-- Bubbles --*/}\n    <IonSpinner name="bubbles" />\n\n    {/*-- Circles --*/}\n    <IonSpinner name="circles" />\n\n    {/*-- Crescent --*/}\n    <IonSpinner name="crescent" />\n\n    {/*-- Paused Default Spinner --*/}\n    <IonSpinner paused />\n  </IonContent>\n);\n'))),(0,i.kt)(l.Z,{value:"stencil",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-tsx"},'import { Component, h } from \'@stencil/core\';\n\n@Component({\n  tag: \'spinner-example\',\n  styleUrl: \'spinner-example.css\',\n})\nexport class SpinnerExample {\n  render() {\n    return [\n      // Default Spinner\n      <ion-spinner></ion-spinner>,\n\n      // Lines\n      <ion-spinner name="lines"></ion-spinner>,\n\n      // Lines Small\n      <ion-spinner name="lines-small"></ion-spinner>,\n\n      // Dots\n      <ion-spinner name="dots"></ion-spinner>,\n\n      // Bubbles\n      <ion-spinner name="bubbles"></ion-spinner>,\n\n      // Circles\n      <ion-spinner name="circles"></ion-spinner>,\n\n      // Crescent\n      <ion-spinner name="crescent"></ion-spinner>,\n\n      // Paused Default Spinner\n      <ion-spinner paused={true}></ion-spinner>,\n    ];\n  }\n}\n'))),(0,i.kt)(l.Z,{value:"vue",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-html"},'<template>\n  \x3c!-- Default Spinner --\x3e\n  <ion-spinner></ion-spinner>\n\n  \x3c!-- Lines --\x3e\n  <ion-spinner name="lines"></ion-spinner>\n\n  \x3c!-- Lines Small --\x3e\n  <ion-spinner name="lines-small"></ion-spinner>\n\n  \x3c!-- Dots --\x3e\n  <ion-spinner name="dots"></ion-spinner>\n\n  \x3c!-- Bubbles --\x3e\n  <ion-spinner name="bubbles"></ion-spinner>\n\n  \x3c!-- Circles --\x3e\n  <ion-spinner name="circles"></ion-spinner>\n\n  \x3c!-- Crescent --\x3e\n  <ion-spinner name="crescent"></ion-spinner>\n\n  \x3c!-- Paused Default Spinner --\x3e\n  <ion-spinner paused></ion-spinner>\n</template>\n\n<script>\n  import { IonSpinner } from \'@ionic/vue\';\n  import { defineComponent } from \'vue\';\n\n  export default defineComponent({\n    components: { IonSpinner },\n  });\n<\/script>\n')))),(0,i.kt)("h2",{id:"properties"},"Properties"),(0,i.kt)("h3",{id:"color"},"color"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null}),(0,i.kt)("th",{parentName:"tr",align:null}))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("strong",{parentName:"td"},"Description")),(0,i.kt)("td",{parentName:"tr",align:null},"The color to use from your application's color palette.",(0,i.kt)("br",null),"Default options are: ",(0,i.kt)("inlineCode",{parentName:"td"},'"primary"'),", ",(0,i.kt)("inlineCode",{parentName:"td"},'"secondary"'),", ",(0,i.kt)("inlineCode",{parentName:"td"},'"tertiary"'),", ",(0,i.kt)("inlineCode",{parentName:"td"},'"success"'),", ",(0,i.kt)("inlineCode",{parentName:"td"},'"warning"'),", ",(0,i.kt)("inlineCode",{parentName:"td"},'"danger"'),", ",(0,i.kt)("inlineCode",{parentName:"td"},'"light"'),", ",(0,i.kt)("inlineCode",{parentName:"td"},'"medium"'),", and ",(0,i.kt)("inlineCode",{parentName:"td"},'"dark"'),".",(0,i.kt)("br",null),"For more information on colors, see ",(0,i.kt)("a",{parentName:"td",href:"/developer/docs/v5/theming/basics"},"theming"),".")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("strong",{parentName:"td"},"Attribute")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"color"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("strong",{parentName:"td"},"Type")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"string \\| undefined"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("strong",{parentName:"td"},"Default")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"undefined"))))),(0,i.kt)("h3",{id:"duration"},"duration"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null}),(0,i.kt)("th",{parentName:"tr",align:null}))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("strong",{parentName:"td"},"Description")),(0,i.kt)("td",{parentName:"tr",align:null},"Duration of the spinner animation in milliseconds. The default varies based on the spinner.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("strong",{parentName:"td"},"Attribute")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"duration"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("strong",{parentName:"td"},"Type")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"number \\| undefined"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("strong",{parentName:"td"},"Default")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"undefined"))))),(0,i.kt)("h3",{id:"name"},"name"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null}),(0,i.kt)("th",{parentName:"tr",align:null}))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("strong",{parentName:"td"},"Description")),(0,i.kt)("td",{parentName:"tr",align:null},"The name of the SVG spinner to use. If a name is not provided, the platform's default",(0,i.kt)("br",null),"spinner will be used.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("strong",{parentName:"td"},"Attribute")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"name"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("strong",{parentName:"td"},"Type")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},'"bubbles" \\| "circles" \\| "circular" \\| "crescent" \\| "dots" \\| "lines" \\| "lines-small" \\| undefined'))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("strong",{parentName:"td"},"Default")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"undefined"))))),(0,i.kt)("h3",{id:"paused"},"paused"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null}),(0,i.kt)("th",{parentName:"tr",align:null}))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("strong",{parentName:"td"},"Description")),(0,i.kt)("td",{parentName:"tr",align:null},"If ",(0,i.kt)("inlineCode",{parentName:"td"},"true"),", the spinner's animation will be paused.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("strong",{parentName:"td"},"Attribute")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"paused"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("strong",{parentName:"td"},"Type")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"boolean"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("strong",{parentName:"td"},"Default")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"false"))))),(0,i.kt)("h2",{id:"css-custom-properties"},"CSS Custom Properties"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Name"),(0,i.kt)("th",{parentName:"tr",align:null},"Description"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"--color")),(0,i.kt)("td",{parentName:"tr",align:null},"Color of the spinner")))))}k.isMDXComponent=!0}}]);