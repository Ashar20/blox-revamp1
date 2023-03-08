"use strict";(self.webpackChunkionic_docs=self.webpackChunkionic_docs||[]).push([[87150],{3905:function(e,n,t){t.d(n,{Zo:function(){return c},kt:function(){return p}});var a=t(67294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var u=a.createContext({}),m=function(e){var n=a.useContext(u),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},c=function(e){var n=m(e.components);return a.createElement(u.Provider,{value:n},e.children)},s={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},d=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,i=e.originalType,u=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=m(t),p=r,b=d["".concat(u,".").concat(p)]||d[p]||s[p]||i;return t?a.createElement(b,o(o({ref:n},c),{},{components:t})):a.createElement(b,o({ref:n},c))}));function p(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var i=t.length,o=new Array(i);o[0]=d;var l={};for(var u in n)hasOwnProperty.call(n,u)&&(l[u]=n[u]);l.originalType=e,l.mdxType="string"==typeof e?e:r,o[1]=l;for(var m=2;m<i;m++)o[m]=t[m];return a.createElement.apply(null,o)}return a.createElement.apply(null,t)}d.displayName="MDXCreateElement"},58215:function(e,n,t){var a=t(67294);n.Z=function(e){var n=e.children,t=e.hidden,r=e.className;return a.createElement("div",{role:"tabpanel",hidden:t,className:r},n)}},26396:function(e,n,t){t.d(n,{Z:function(){return d}});var a=t(87462),r=t(67294),i=t(72389),o=t(79443);var l=function(){var e=(0,r.useContext)(o.Z);if(null==e)throw new Error('"useUserPreferencesContext" is used outside of "Layout" component.');return e},u=t(89521),m=t(86010),c="tabItem_1uMI";function s(e){var n,t,a,i=e.lazy,o=e.block,s=e.defaultValue,d=e.values,p=e.groupId,b=e.className,f=r.Children.map(e.children,(function(e){if((0,r.isValidElement)(e)&&void 0!==e.props.value)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),h=null!=d?d:f.map((function(e){var n=e.props;return{value:n.value,label:n.label}})),v=(0,u.lx)(h,(function(e,n){return e.value===n.value}));if(v.length>0)throw new Error('Docusaurus error: Duplicate values "'+v.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var g=null===s?s:null!=(n=null!=s?s:null==(t=f.find((function(e){return e.props.default})))?void 0:t.props.value)?n:null==(a=f[0])?void 0:a.props.value;if(null!==g&&!h.some((function(e){return e.value===g})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+g+'" but none of its children has the corresponding value. Available values are: '+h.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var y=l(),k=y.tabGroupChoices,T=y.setTabGroupChoices,I=(0,r.useState)(g),N=I[0],x=I[1],w=[],C=(0,u.o5)().blockElementScrollPositionUntilNextRender;if(null!=p){var O=k[p];null!=O&&O!==N&&h.some((function(e){return e.value===O}))&&x(O)}var E=function(e){var n=e.currentTarget,t=w.indexOf(n),a=h[t].value;a!==N&&(C(n),x(a),null!=p&&T(p,a))},j=function(e){var n,t=null;switch(e.key){case"ArrowRight":var a=w.indexOf(e.currentTarget)+1;t=w[a]||w[0];break;case"ArrowLeft":var r=w.indexOf(e.currentTarget)-1;t=w[r]||w[w.length-1]}null==(n=t)||n.focus()};return r.createElement("div",{className:"tabs-container"},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,m.Z)("tabs",{"tabs--block":o},b)},h.map((function(e){var n=e.value,t=e.label;return r.createElement("li",{role:"tab",tabIndex:N===n?0:-1,"aria-selected":N===n,className:(0,m.Z)("tabs__item",c,{"tabs__item--active":N===n}),key:n,ref:function(e){return w.push(e)},onKeyDown:j,onFocus:E,onClick:E},null!=t?t:n)}))),i?(0,r.cloneElement)(f.filter((function(e){return e.props.value===N}))[0],{className:"margin-vert--md"}):r.createElement("div",{className:"margin-vert--md"},f.map((function(e,n){return(0,r.cloneElement)(e,{key:n,hidden:e.props.value!==N})}))))}function d(e){var n=(0,i.Z)();return r.createElement(s,(0,a.Z)({key:String(n)},e))}},46051:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return m},contentTitle:function(){return c},metadata:function(){return s},toc:function(){return d},default:function(){return b}});var a=t(87462),r=t(63366),i=(t(67294),t(3905)),o=t(26396),l=t(58215),u=["components"],m={sidebar_label:"ion-thumbnail",demoUrl:"/docs/demos/api/thumbnail/index.html",demoSourceUrl:"https://github.com/ionic-team/ionic-docs/tree/main/static/demos/api/thumbnail/index.html"},c="ion-thumbnail",s={unversionedId:"api/thumbnail",id:"version-v5/api/thumbnail",isDocsHomePage:!1,title:"ion-thumbnail",description:"Thumbnails are square components that usually wrap an image or icon. They can be used to make it easier to display a group of larger images or provide a preview of the full-size image.",source:"@site/versioned_docs/version-v5/api/thumbnail.md",sourceDirName:"api",slug:"/api/thumbnail",permalink:"/docs/v5/api/thumbnail",editUrl:"https://github.com/ionic-team/ionic-docs/tree/main/docs/api/thumbnail.md",tags:[],version:"v5",frontMatter:{sidebar_label:"ion-thumbnail",demoUrl:"/docs/demos/api/thumbnail/index.html",demoSourceUrl:"https://github.com/ionic-team/ionic-docs/tree/main/static/demos/api/thumbnail/index.html"},sidebar:"version-v5/api",previous:{title:"ion-img",permalink:"/docs/v5/api/img"},next:{title:"ion-menu",permalink:"/docs/v5/api/menu"}},d=[{value:"Usage",id:"usage",children:[],level:2},{value:"CSS Custom Properties",id:"css-custom-properties",children:[],level:2}],p={toc:d};function b(e){var n=e.components,t=(0,r.Z)(e,u);return(0,i.kt)("wrapper",(0,a.Z)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"ion-thumbnail"},"ion-thumbnail"),(0,i.kt)("p",null,"Thumbnails are square components that usually wrap an image or icon. They can be used to make it easier to display a group of larger images or provide a preview of the full-size image."),(0,i.kt)("p",null,"Thumbnails can be used by themselves or inside of any element. If placed inside of an ",(0,i.kt)("inlineCode",{parentName:"p"},"ion-item"),", the thumbnail will resize to fit the parent component. To position a thumbnail on the left or right side of an item, set the slot to ",(0,i.kt)("inlineCode",{parentName:"p"},"start")," or ",(0,i.kt)("inlineCode",{parentName:"p"},"end"),", respectively."),(0,i.kt)("h2",{id:"usage"},"Usage"),(0,i.kt)(o.Z,{groupId:"framework",defaultValue:"angular",values:[{value:"angular",label:"Angular"},{value:"javascript",label:"Javascript"},{value:"react",label:"React"},{value:"stencil",label:"Stencil"},{value:"vue",label:"Vue"}],mdxType:"Tabs"},(0,i.kt)(l.Z,{value:"angular",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-html"},'<ion-thumbnail>\n  <img src="https://gravatar.com/avatar/dba6bae8c566f9d4041fb9cd9ada7741?d=identicon&f=y" />\n</ion-thumbnail>\n\n<ion-item>\n  <ion-thumbnail slot="start">\n    <img src="https://gravatar.com/avatar/dba6bae8c566f9d4041fb9cd9ada7741?d=identicon&f=y" />\n  </ion-thumbnail>\n  <ion-label>Item Thumbnail</ion-label>\n</ion-item>\n'))),(0,i.kt)(l.Z,{value:"javascript",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-html"},'<ion-thumbnail>\n  <img src="https://gravatar.com/avatar/dba6bae8c566f9d4041fb9cd9ada7741?d=identicon&f=y" />\n</ion-thumbnail>\n\n<ion-item>\n  <ion-thumbnail slot="start">\n    <img src="https://gravatar.com/avatar/dba6bae8c566f9d4041fb9cd9ada7741?d=identicon&f=y" />\n  </ion-thumbnail>\n  <ion-label>Item Thumbnail</ion-label>\n</ion-item>\n'))),(0,i.kt)(l.Z,{value:"react",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-tsx"},'import React from \'react\';\nimport { IonThumbnail, IonItem, IonLabel, IonContent } from \'@ionic/react\';\n\nexport const ThumbnailExample: React.FC = () => (\n  <IonContent>\n    <IonThumbnail>\n      <img src="https://gravatar.com/avatar/dba6bae8c566f9d4041fb9cd9ada7741?d=identicon&f=y" />\n    </IonThumbnail>\n\n    <IonItem>\n      <IonThumbnail slot="start">\n        <img src="https://gravatar.com/avatar/dba6bae8c566f9d4041fb9cd9ada7741?d=identicon&f=y" />\n      </IonThumbnail>\n      <IonLabel>Item Thumbnail</IonLabel>\n    </IonItem>\n  </IonContent>\n);\n'))),(0,i.kt)(l.Z,{value:"stencil",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-tsx"},"import { Component, h } from '@stencil/core';\n\n@Component({\n  tag: 'thumbnail-example',\n  styleUrl: 'thumbnail-example.css',\n})\nexport class ThumbnailExample {\n  render() {\n    return [\n      <ion-thumbnail>\n        <img src=\"https://gravatar.com/avatar/dba6bae8c566f9d4041fb9cd9ada7741?d=identicon&f=y\" />\n      </ion-thumbnail>,\n\n      <ion-item>\n        <ion-thumbnail slot=\"start\">\n          <img src=\"https://gravatar.com/avatar/dba6bae8c566f9d4041fb9cd9ada7741?d=identicon&f=y\" />\n        </ion-thumbnail>\n        <ion-label>Item Thumbnail</ion-label>\n      </ion-item>,\n    ];\n  }\n}\n"))),(0,i.kt)(l.Z,{value:"vue",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-html"},'<template>\n  <ion-thumbnail>\n    <img src="https://gravatar.com/avatar/dba6bae8c566f9d4041fb9cd9ada7741?d=identicon&f=y" />\n  </ion-thumbnail>\n\n  <ion-item>\n    <ion-thumbnail slot="start">\n      <img src="https://gravatar.com/avatar/dba6bae8c566f9d4041fb9cd9ada7741?d=identicon&f=y" />\n    </ion-thumbnail>\n    <ion-label>Item Thumbnail</ion-label>\n  </ion-item>\n</template>\n\n<script>\n  import { IonItem, IonLabel, IonThumbnail } from \'@ionic/vue\';\n  import { defineComponent } from \'vue\';\n\n  export default defineComponent({\n    components: { IonItem, IonLabel, IonThumbnail },\n  });\n<\/script>\n')))),(0,i.kt)("h2",{id:"css-custom-properties"},"CSS Custom Properties"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Name"),(0,i.kt)("th",{parentName:"tr",align:null},"Description"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"--border-radius")),(0,i.kt)("td",{parentName:"tr",align:null},"Border radius of the thumbnail")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"--size")),(0,i.kt)("td",{parentName:"tr",align:null},"Size of the thumbnail")))))}b.isMDXComponent=!0}}]);