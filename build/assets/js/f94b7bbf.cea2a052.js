"use strict";(self.webpackChunkionic_docs=self.webpackChunkionic_docs||[]).push([[86108],{3905:function(e,n,t){t.d(n,{Zo:function(){return m},kt:function(){return s}});var o=t(67294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function l(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);n&&(o=o.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,o)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?l(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function r(e,n){if(null==e)return{};var t,o,a=function(e,n){if(null==e)return{};var t,o,a={},l=Object.keys(e);for(o=0;o<l.length;o++)t=l[o],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(o=0;o<l.length;o++)t=l[o],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var p=o.createContext({}),u=function(e){var n=o.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},m=function(e){var n=u(e.components);return o.createElement(p.Provider,{value:n},e.children)},b={inlineCode:"code",wrapper:function(e){var n=e.children;return o.createElement(o.Fragment,{},n)}},c=o.forwardRef((function(e,n){var t=e.components,a=e.mdxType,l=e.originalType,p=e.parentName,m=r(e,["components","mdxType","originalType","parentName"]),c=u(t),s=a,d=c["".concat(p,".").concat(s)]||c[s]||b[s]||l;return t?o.createElement(d,i(i({ref:n},m),{},{components:t})):o.createElement(d,i({ref:n},m))}));function s(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var l=t.length,i=new Array(l);i[0]=c;var r={};for(var p in n)hasOwnProperty.call(n,p)&&(r[p]=n[p]);r.originalType=e,r.mdxType="string"==typeof e?e:a,i[1]=r;for(var u=2;u<l;u++)i[u]=t[u];return o.createElement.apply(null,i)}return o.createElement.apply(null,t)}c.displayName="MDXCreateElement"},58215:function(e,n,t){var o=t(67294);n.Z=function(e){var n=e.children,t=e.hidden,a=e.className;return o.createElement("div",{role:"tabpanel",hidden:t,className:a},n)}},26396:function(e,n,t){t.d(n,{Z:function(){return c}});var o=t(87462),a=t(67294),l=t(72389),i=t(79443);var r=function(){var e=(0,a.useContext)(i.Z);if(null==e)throw new Error('"useUserPreferencesContext" is used outside of "Layout" component.');return e},p=t(89521),u=t(86010),m="tabItem_1uMI";function b(e){var n,t,o,l=e.lazy,i=e.block,b=e.defaultValue,c=e.values,s=e.groupId,d=e.className,k=a.Children.map(e.children,(function(e){if((0,a.isValidElement)(e)&&void 0!==e.props.value)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),g=null!=c?c:k.map((function(e){var n=e.props;return{value:n.value,label:n.label}})),h=(0,p.lx)(g,(function(e,n){return e.value===n.value}));if(h.length>0)throw new Error('Docusaurus error: Duplicate values "'+h.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var f=null===b?b:null!=(n=null!=b?b:null==(t=k.find((function(e){return e.props.default})))?void 0:t.props.value)?n:null==(o=k[0])?void 0:o.props.value;if(null!==f&&!g.some((function(e){return e.value===f})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+f+'" but none of its children has the corresponding value. Available values are: '+g.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var I=r(),v=I.tabGroupChoices,N=I.setTabGroupChoices,y=(0,a.useState)(f),L=y[0],x=y[1],C=[],w=(0,p.o5)().blockElementScrollPositionUntilNextRender;if(null!=s){var T=v[s];null!=T&&T!==L&&g.some((function(e){return e.value===T}))&&x(T)}var D=function(e){var n=e.currentTarget,t=C.indexOf(n),o=g[t].value;o!==L&&(w(n),x(o),null!=s&&N(s,o))},E=function(e){var n,t=null;switch(e.key){case"ArrowRight":var o=C.indexOf(e.currentTarget)+1;t=C[o]||C[0];break;case"ArrowLeft":var a=C.indexOf(e.currentTarget)-1;t=C[a]||C[C.length-1]}null==(n=t)||n.focus()};return a.createElement("div",{className:"tabs-container"},a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,u.Z)("tabs",{"tabs--block":i},d)},g.map((function(e){var n=e.value,t=e.label;return a.createElement("li",{role:"tab",tabIndex:L===n?0:-1,"aria-selected":L===n,className:(0,u.Z)("tabs__item",m,{"tabs__item--active":L===n}),key:n,ref:function(e){return C.push(e)},onKeyDown:E,onFocus:D,onClick:D},null!=t?t:n)}))),l?(0,a.cloneElement)(k.filter((function(e){return e.props.value===L}))[0],{className:"margin-vert--md"}):a.createElement("div",{className:"margin-vert--md"},k.map((function(e,n){return(0,a.cloneElement)(e,{key:n,hidden:e.props.value!==L})}))))}function c(e){var n=(0,l.Z)();return a.createElement(b,(0,o.Z)({key:String(n)},e))}},34125:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return u},contentTitle:function(){return m},metadata:function(){return b},toc:function(){return c},default:function(){return d}});var o=t(87462),a=t(63366),l=(t(67294),t(3905)),i=t(26396),r=t(58215),p=["components"],u={title:"Item Label Color and Properties for Applications | ion-label",description:"Label is a wrapper element that can be used in combination with other Ionic components. Easily design item label colors and other properties with ion-label.",sidebar_label:"ion-label"},m="ion-label",b={unversionedId:"api/label",id:"version-v5/api/label",isDocsHomePage:!1,title:"Item Label Color and Properties for Applications | ion-label",description:"Label is a wrapper element that can be used in combination with other Ionic components. Easily design item label colors and other properties with ion-label.",source:"@site/versioned_docs/version-v5/api/label.md",sourceDirName:"api",slug:"/api/label",permalink:"/docs/v5/api/label",editUrl:"https://github.com/ionic-team/ionic-docs/tree/main/docs/api/label.md",tags:[],version:"v5",frontMatter:{title:"Item Label Color and Properties for Applications | ion-label",description:"Label is a wrapper element that can be used in combination with other Ionic components. Easily design item label colors and other properties with ion-label.",sidebar_label:"ion-label"},sidebar:"version-v5/api",previous:{title:"ion-item-option",permalink:"/docs/v5/api/item-option"},next:{title:"ion-note",permalink:"/docs/v5/api/note"}},c=[{value:"Usage",id:"usage",children:[],level:2},{value:"Properties",id:"properties",children:[{value:"color",id:"color",children:[],level:3},{value:"mode",id:"mode",children:[],level:3},{value:"position",id:"position",children:[],level:3}],level:2},{value:"CSS Custom Properties",id:"css-custom-properties",children:[],level:2}],s={toc:c};function d(e){var n=e.components,t=(0,a.Z)(e,p);return(0,l.kt)("wrapper",(0,o.Z)({},s,t,{components:n,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"ion-label"},"ion-label"),(0,l.kt)("p",null,"Label is a wrapper element that can be used in combination with ",(0,l.kt)("inlineCode",{parentName:"p"},"ion-item"),", ",(0,l.kt)("inlineCode",{parentName:"p"},"ion-input"),", ",(0,l.kt)("inlineCode",{parentName:"p"},"ion-toggle"),", and more. The position of the label inside of an item can be inline, fixed, stacked, or floating."),(0,l.kt)("h2",{id:"usage"},"Usage"),(0,l.kt)(i.Z,{groupId:"framework",defaultValue:"angular",values:[{value:"angular",label:"Angular"},{value:"javascript",label:"Javascript"},{value:"react",label:"React"},{value:"stencil",label:"Stencil"},{value:"vue",label:"Vue"}],mdxType:"Tabs"},(0,l.kt)(r.Z,{value:"angular",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-html"},'\x3c!-- Default Label --\x3e\n<ion-label>Label</ion-label>\n\n\x3c!-- Label Colors --\x3e\n<ion-label color="primary">Primary Label</ion-label>\n<ion-label color="secondary">Secondary Label</ion-label>\n<ion-label color="danger">Danger Label</ion-label>\n<ion-label color="light">Light Label</ion-label>\n<ion-label color="dark">Dark Label</ion-label>\n\n\x3c!-- Item Labels --\x3e\n<ion-item>\n  <ion-label>Default Item</ion-label>\n</ion-item>\n\n<ion-item>\n  <ion-label class="ion-text-wrap">\n    Multi-line text that should wrap when it is too long to fit on one line in the item.\n  </ion-label>\n</ion-item>\n\n\x3c!-- Input Labels --\x3e\n<ion-item>\n  <ion-label>Default Input</ion-label>\n  <ion-input></ion-input>\n</ion-item>\n\n<ion-item>\n  <ion-label position="fixed">Fixed</ion-label>\n  <ion-input></ion-input>\n</ion-item>\n\n<ion-item>\n  <ion-label position="floating">Floating</ion-label>\n  <ion-input></ion-input>\n</ion-item>\n\n<ion-item>\n  <ion-label position="stacked">Stacked</ion-label>\n  <ion-input></ion-input>\n</ion-item>\n\n<ion-item>\n  <ion-label>Toggle</ion-label>\n  <ion-toggle slot="end" checked></ion-toggle>\n</ion-item>\n\n<ion-item>\n  <ion-checkbox slot="start" checked></ion-checkbox>\n  <ion-label>Checkbox</ion-label>\n</ion-item>\n'))),(0,l.kt)(r.Z,{value:"javascript",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-html"},'\x3c!-- Default Label --\x3e\n<ion-label>Label</ion-label>\n\n\x3c!-- Label Colors --\x3e\n<ion-label color="primary">Primary Label</ion-label>\n<ion-label color="secondary">Secondary Label</ion-label>\n<ion-label color="danger">Danger Label</ion-label>\n<ion-label color="light">Light Label</ion-label>\n<ion-label color="dark">Dark Label</ion-label>\n\n\x3c!-- Item Labels --\x3e\n<ion-item>\n  <ion-label>Default Item</ion-label>\n</ion-item>\n\n<ion-item>\n  <ion-label class="ion-text-wrap">\n    Multi-line text that should wrap when it is too long to fit on one line in the item.\n  </ion-label>\n</ion-item>\n\n\x3c!-- Input Labels --\x3e\n<ion-item>\n  <ion-label>Default Input</ion-label>\n  <ion-input></ion-input>\n</ion-item>\n\n<ion-item>\n  <ion-label position="fixed">Fixed</ion-label>\n  <ion-input></ion-input>\n</ion-item>\n\n<ion-item>\n  <ion-label position="floating">Floating</ion-label>\n  <ion-input></ion-input>\n</ion-item>\n\n<ion-item>\n  <ion-label position="stacked">Stacked</ion-label>\n  <ion-input></ion-input>\n</ion-item>\n\n<ion-item>\n  <ion-label>Toggle</ion-label>\n  <ion-toggle slot="end" checked></ion-toggle>\n</ion-item>\n\n<ion-item>\n  <ion-checkbox slot="start" checked></ion-checkbox>\n  <ion-label>Checkbox</ion-label>\n</ion-item>\n'))),(0,l.kt)(r.Z,{value:"react",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-tsx"},'import React from \'react\';\nimport { IonLabel, IonItem, IonInput, IonToggle, IonCheckbox, IonContent } from \'@ionic/react\';\n\nexport const LabelExample: React.FC = () => (\n  <IonContent>\n    {/*-- Default Label --*/}\n    <IonLabel>Label</IonLabel>\n    <br />\n\n    {/*-- Label Colors --*/}\n    <IonLabel color="primary">Primary Label</IonLabel>\n    <br />\n    <IonLabel color="secondary">Secondary Label</IonLabel>\n    <br />\n    <IonLabel color="danger">Danger Label</IonLabel>\n    <br />\n    <IonLabel color="light">Light Label</IonLabel>\n    <br />\n    <IonLabel color="dark">Dark Label</IonLabel>\n    <br />\n\n    {/*-- Item Labels --*/}\n    <IonItem>\n      <IonLabel>Default Item</IonLabel>\n    </IonItem>\n\n    <IonItem>\n      <IonLabel className="ion-text-wrap">\n        Multi-line text that should wrap when it is too long to fit on one line in the item.\n      </IonLabel>\n    </IonItem>\n\n    {/*-- Input Labels --*/}\n    <IonItem>\n      <IonLabel>Default Input</IonLabel>\n      <IonInput></IonInput>\n    </IonItem>\n\n    <IonItem>\n      <IonLabel position="fixed">Fixed</IonLabel>\n      <IonInput></IonInput>\n    </IonItem>\n\n    <IonItem>\n      <IonLabel position="floating">Floating</IonLabel>\n      <IonInput></IonInput>\n    </IonItem>\n\n    <IonItem>\n      <IonLabel position="stacked">Stacked</IonLabel>\n      <IonInput></IonInput>\n    </IonItem>\n\n    <IonItem>\n      <IonLabel>Toggle</IonLabel>\n      <IonToggle slot="end" checked></IonToggle>\n    </IonItem>\n\n    <IonItem>\n      <IonCheckbox slot="start" checked />\n      <IonLabel>Checkbox</IonLabel>\n    </IonItem>\n  </IonContent>\n);\n'))),(0,l.kt)(r.Z,{value:"stencil",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-tsx"},'import { Component, h } from \'@stencil/core\';\n\n@Component({\n  tag: \'label-example\',\n  styleUrl: \'label-example.css\',\n})\nexport class LabelExample {\n  render() {\n    return [\n      // Default Label\n      <ion-label>Label</ion-label>,\n\n      // Label Colors\n      <ion-label color="primary">Primary Label</ion-label>,\n      <ion-label color="secondary">Secondary Label</ion-label>,\n      <ion-label color="danger">Danger Label</ion-label>,\n      <ion-label color="light">Light Label</ion-label>,\n      <ion-label color="dark">Dark Label</ion-label>,\n\n      // Item Labels\n      <ion-item>\n        <ion-label>Default Item</ion-label>\n      </ion-item>,\n\n      <ion-item>\n        <ion-label class="ion-text-wrap">\n          Multi-line text that should wrap when it is too long to fit on one line in the item.\n        </ion-label>\n      </ion-item>,\n\n      // Input Labels\n      <ion-item>\n        <ion-label>Default Input</ion-label>\n        <ion-input></ion-input>\n      </ion-item>,\n\n      <ion-item>\n        <ion-label position="fixed">Fixed</ion-label>\n        <ion-input></ion-input>\n      </ion-item>,\n\n      <ion-item>\n        <ion-label position="floating">Floating</ion-label>\n        <ion-input></ion-input>\n      </ion-item>,\n\n      <ion-item>\n        <ion-label position="stacked">Stacked</ion-label>\n        <ion-input></ion-input>\n      </ion-item>,\n\n      <ion-item>\n        <ion-label>Toggle</ion-label>\n        <ion-toggle slot="end" checked={true}></ion-toggle>\n      </ion-item>,\n\n      <ion-item>\n        <ion-checkbox slot="start" checked={true}></ion-checkbox>\n        <ion-label>Checkbox</ion-label>\n      </ion-item>,\n    ];\n  }\n}\n'))),(0,l.kt)(r.Z,{value:"vue",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-html"},'<template>\n  \x3c!-- Default Label --\x3e\n  <ion-label>Label</ion-label>\n\n  \x3c!-- Label Colors --\x3e\n  <ion-label color="primary">Primary Label</ion-label>\n  <ion-label color="secondary">Secondary Label</ion-label>\n  <ion-label color="danger">Danger Label</ion-label>\n  <ion-label color="light">Light Label</ion-label>\n  <ion-label color="dark">Dark Label</ion-label>\n\n  \x3c!-- Item Labels --\x3e\n  <ion-item>\n    <ion-label>Default Item</ion-label>\n  </ion-item>\n\n  <ion-item>\n    <ion-label class="ion-text-wrap">\n      Multi-line text that should wrap when it is too long to fit on one line in the item.\n    </ion-label>\n  </ion-item>\n\n  \x3c!-- Input Labels --\x3e\n  <ion-item>\n    <ion-label>Default Input</ion-label>\n    <ion-input></ion-input>\n  </ion-item>\n\n  <ion-item>\n    <ion-label position="fixed">Fixed</ion-label>\n    <ion-input></ion-input>\n  </ion-item>\n\n  <ion-item>\n    <ion-label position="floating">Floating</ion-label>\n    <ion-input></ion-input>\n  </ion-item>\n\n  <ion-item>\n    <ion-label position="stacked">Stacked</ion-label>\n    <ion-input></ion-input>\n  </ion-item>\n\n  <ion-item>\n    <ion-label>Toggle</ion-label>\n    <ion-toggle slot="end" checked></ion-toggle>\n  </ion-item>\n\n  <ion-item>\n    <ion-checkbox slot="start" checked></ion-checkbox>\n    <ion-label>Checkbox</ion-label>\n  </ion-item>\n</template>\n\n<script>\n  import { IonCheckbox, IonInput, IonItem, IonLabel, IonToggle } from \'@ionic/vue\';\n  import { defineComponent } from \'vue\';\n\n  export default defineComponent({\n    components: {\n      IonCheckbox,\n      IonInput,\n      IonItem,\n      IonLabel,\n      IonToggle,\n    },\n  });\n<\/script>\n')))),(0,l.kt)("h2",{id:"properties"},"Properties"),(0,l.kt)("h3",{id:"color"},"color"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null}),(0,l.kt)("th",{parentName:"tr",align:null}))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"Description")),(0,l.kt)("td",{parentName:"tr",align:null},"The color to use from your application's color palette.",(0,l.kt)("br",null),"Default options are: ",(0,l.kt)("inlineCode",{parentName:"td"},'"primary"'),", ",(0,l.kt)("inlineCode",{parentName:"td"},'"secondary"'),", ",(0,l.kt)("inlineCode",{parentName:"td"},'"tertiary"'),", ",(0,l.kt)("inlineCode",{parentName:"td"},'"success"'),", ",(0,l.kt)("inlineCode",{parentName:"td"},'"warning"'),", ",(0,l.kt)("inlineCode",{parentName:"td"},'"danger"'),", ",(0,l.kt)("inlineCode",{parentName:"td"},'"light"'),", ",(0,l.kt)("inlineCode",{parentName:"td"},'"medium"'),", and ",(0,l.kt)("inlineCode",{parentName:"td"},'"dark"'),".",(0,l.kt)("br",null),"For more information on colors, see ",(0,l.kt)("a",{parentName:"td",href:"/docs/v5/theming/basics"},"theming"),".")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"Attribute")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"color"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"Type")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"string \\| undefined"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"Default")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"undefined"))))),(0,l.kt)("h3",{id:"mode"},"mode"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null}),(0,l.kt)("th",{parentName:"tr",align:null}))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"Description")),(0,l.kt)("td",{parentName:"tr",align:null},"The mode determines which platform styles to use.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"Attribute")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"mode"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"Type")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},'"ios" \\| "md"'))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"Default")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"undefined"))))),(0,l.kt)("h3",{id:"position"},"position"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null}),(0,l.kt)("th",{parentName:"tr",align:null}))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"Description")),(0,l.kt)("td",{parentName:"tr",align:null},"The position determines where and how the label behaves inside an item.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"Attribute")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"position"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"Type")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},'"fixed" \\| "floating" \\| "stacked" \\| undefined'))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"Default")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"undefined"))))),(0,l.kt)("h2",{id:"css-custom-properties"},"CSS Custom Properties"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Name"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"--color")),(0,l.kt)("td",{parentName:"tr",align:null},"Color of the label")))))}d.isMDXComponent=!0}}]);