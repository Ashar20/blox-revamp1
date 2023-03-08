"use strict";(self.webpackChunkionic_docs=self.webpackChunkionic_docs||[]).push([[4593],{3905:function(e,n,t){t.d(n,{Zo:function(){return u},kt:function(){return s}});var a=t(67294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function p(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var o=a.createContext({}),c=function(e){var n=a.useContext(o),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},u=function(e){var n=c(e.components);return a.createElement(o.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},f=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,i=e.originalType,o=e.parentName,u=p(e,["components","mdxType","originalType","parentName"]),f=c(t),s=r,m=f["".concat(o,".").concat(s)]||f[s]||d[s]||i;return t?a.createElement(m,l(l({ref:n},u),{},{components:t})):a.createElement(m,l({ref:n},u))}));function s(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var i=t.length,l=new Array(i);l[0]=f;var p={};for(var o in n)hasOwnProperty.call(n,o)&&(p[o]=n[o]);p.originalType=e,p.mdxType="string"==typeof e?e:r,l[1]=p;for(var c=2;c<i;c++)l[c]=t[c];return a.createElement.apply(null,l)}return a.createElement.apply(null,t)}f.displayName="MDXCreateElement"},58215:function(e,n,t){var a=t(67294);n.Z=function(e){var n=e.children,t=e.hidden,r=e.className;return a.createElement("div",{role:"tabpanel",hidden:t,className:r},n)}},26396:function(e,n,t){t.d(n,{Z:function(){return f}});var a=t(87462),r=t(67294),i=t(72389),l=t(79443);var p=function(){var e=(0,r.useContext)(l.Z);if(null==e)throw new Error('"useUserPreferencesContext" is used outside of "Layout" component.');return e},o=t(89521),c=t(86010),u="tabItem_1uMI";function d(e){var n,t,a,i=e.lazy,l=e.block,d=e.defaultValue,f=e.values,s=e.groupId,m=e.className,b=r.Children.map(e.children,(function(e){if((0,r.isValidElement)(e)&&void 0!==e.props.value)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),v=null!=f?f:b.map((function(e){var n=e.props;return{value:n.value,label:n.label}})),h=(0,o.lx)(v,(function(e,n){return e.value===n.value}));if(h.length>0)throw new Error('Docusaurus error: Duplicate values "'+h.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var k=null===d?d:null!=(n=null!=d?d:null==(t=b.find((function(e){return e.props.default})))?void 0:t.props.value)?n:null==(a=b[0])?void 0:a.props.value;if(null!==k&&!v.some((function(e){return e.value===k})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+k+'" but none of its children has the corresponding value. Available values are: '+v.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var y=p(),g=y.tabGroupChoices,N=y.setTabGroupChoices,w=(0,r.useState)(k),E=w[0],T=w[1],x=[],I=(0,o.o5)().blockElementScrollPositionUntilNextRender;if(null!=s){var C=g[s];null!=C&&C!==E&&v.some((function(e){return e.value===C}))&&T(C)}var A=function(e){var n=e.currentTarget,t=x.indexOf(n),a=v[t].value;a!==E&&(I(n),T(a),null!=s&&N(s,a))},O=function(e){var n,t=null;switch(e.key){case"ArrowRight":var a=x.indexOf(e.currentTarget)+1;t=x[a]||x[0];break;case"ArrowLeft":var r=x.indexOf(e.currentTarget)-1;t=x[r]||x[x.length-1]}null==(n=t)||n.focus()};return r.createElement("div",{className:"tabs-container"},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,c.Z)("tabs",{"tabs--block":l},m)},v.map((function(e){var n=e.value,t=e.label;return r.createElement("li",{role:"tab",tabIndex:E===n?0:-1,"aria-selected":E===n,className:(0,c.Z)("tabs__item",u,{"tabs__item--active":E===n}),key:n,ref:function(e){return x.push(e)},onKeyDown:O,onFocus:A,onClick:A},null!=t?t:n)}))),i?(0,r.cloneElement)(b.filter((function(e){return e.props.value===E}))[0],{className:"margin-vert--md"}):r.createElement("div",{className:"margin-vert--md"},b.map((function(e,n){return(0,r.cloneElement)(e,{key:n,hidden:e.props.value!==E})}))))}function f(e){var n=(0,i.Z)();return r.createElement(d,(0,a.Z)({key:String(n)},e))}},51864:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return c},contentTitle:function(){return u},metadata:function(){return d},toc:function(){return f},default:function(){return m}});var a=t(87462),r=t(63366),i=(t(67294),t(3905)),l=t(26396),p=t(58215),o=["components"],c={sidebar_label:"ion-ripple-effect"},u="ion-ripple-effect",d={unversionedId:"api/ripple-effect",id:"version-v5/api/ripple-effect",isDocsHomePage:!1,title:"ion-ripple-effect",description:"The ripple effect component adds the Material Design ink ripple interaction effect. This component can only be used inside of an `` and can be added to any component.",source:"@site/versioned_docs/version-v5/api/ripple-effect.md",sourceDirName:"api",slug:"/api/ripple-effect",permalink:"/docs/v5/api/ripple-effect",editUrl:"https://github.com/ionic-team/ionic-docs/tree/main/docs/api/ripple-effect.md",tags:[],version:"v5",frontMatter:{sidebar_label:"ion-ripple-effect"},sidebar:"version-v5/api",previous:{title:"ion-button",permalink:"/docs/v5/api/button"},next:{title:"ion-card",permalink:"/docs/v5/api/card"}},f=[{value:"Usage",id:"usage",children:[],level:2},{value:"Properties",id:"properties",children:[{value:"type",id:"type",children:[],level:3}],level:2},{value:"Methods",id:"methods",children:[{value:"addRipple",id:"addripple",children:[],level:3}],level:2}],s={toc:f};function m(e){var n=e.components,t=(0,r.Z)(e,o);return(0,i.kt)("wrapper",(0,a.Z)({},s,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"ion-ripple-effect"},"ion-ripple-effect"),(0,i.kt)("p",null,"The ripple effect component adds the ",(0,i.kt)("a",{parentName:"p",href:"https://material.io/develop/web/components/ripples/"},"Material Design ink ripple interaction effect"),". This component can only be used inside of an ",(0,i.kt)("inlineCode",{parentName:"p"},"<ion-app>")," and can be added to any component."),(0,i.kt)("p",null,"It's important to note that the parent should have ",(0,i.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/CSS/position"},"relative positioning")," because the ripple effect is absolutely positioned and will cover the closest parent with relative positioning. The parent element should also be given the ",(0,i.kt)("inlineCode",{parentName:"p"},"ion-activatable")," class, which tells the ripple effect that the element is clickable."),(0,i.kt)("p",null,"The default type, ",(0,i.kt)("inlineCode",{parentName:"p"},'"bounded"'),", will expand the ripple effect from the click position outwards. To add a ripple effect that always starts in the center of the element and expands in a circle, add an ",(0,i.kt)("inlineCode",{parentName:"p"},'"unbounded"')," type. It's recommended to add ",(0,i.kt)("inlineCode",{parentName:"p"},"overflow: hidden")," to the parent element to avoid the ripple overflowing its container, especially with an unbounded ripple."),(0,i.kt)("h2",{id:"usage"},"Usage"),(0,i.kt)(l.Z,{groupId:"framework",defaultValue:"angular",values:[{value:"angular",label:"Angular"},{value:"javascript",label:"Javascript"},{value:"react",label:"React"},{value:"stencil",label:"Stencil"},{value:"vue",label:"Vue"}],mdxType:"Tabs"},(0,i.kt)(p.Z,{value:"angular",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-html"},'<ion-app>\n  <ion-content>\n    <div class="ion-activatable ripple-parent">\n      A plain div with a bounded ripple effect\n      <ion-ripple-effect></ion-ripple-effect>\n    </div>\n\n    <button class="ion-activatable ripple-parent">\n      A button with a bounded ripple effect\n      <ion-ripple-effect></ion-ripple-effect>\n    </button>\n\n    <div class="ion-activatable ripple-parent">\n      A plain div with an unbounded ripple effect\n      <ion-ripple-effect type="unbounded"></ion-ripple-effect>\n    </div>\n\n    <button class="ion-activatable ripple-parent">\n      A button with an unbounded ripple effect\n      <ion-ripple-effect type="unbounded"></ion-ripple-effect>\n    </button>\n  </ion-content>\n</ion-app>\n')),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-css"},".ripple-parent {\n  position: relative;\n  overflow: hidden;\n}\n"))),(0,i.kt)(p.Z,{value:"javascript",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-html"},'<ion-app>\n  <ion-content>\n    <div class="ion-activatable ripple-parent">\n      A plain div with a bounded ripple effect\n      <ion-ripple-effect></ion-ripple-effect>\n    </div>\n\n    <button class="ion-activatable ripple-parent">\n      A button with a bounded ripple effect\n      <ion-ripple-effect></ion-ripple-effect>\n    </button>\n\n    <div class="ion-activatable ripple-parent">\n      A plain div with an unbounded ripple effect\n      <ion-ripple-effect type="unbounded"></ion-ripple-effect>\n    </div>\n\n    <button class="ion-activatable ripple-parent">\n      A button with an unbounded ripple effect\n      <ion-ripple-effect type="unbounded"></ion-ripple-effect>\n    </button>\n  </ion-content>\n</ion-app>\n')),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-css"},".ripple-parent {\n  position: relative;\n  overflow: hidden;\n}\n"))),(0,i.kt)(p.Z,{value:"react",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-tsx"},'import React from \'react\';\nimport { IonApp, IonContent, IonRippleEffect } from \'@ionic/react\';\nimport \'./RippleEffectExample.css\';\n\nexport const RippleExample: React.FC = () => (\n  <IonApp>\n    <IonContent>\n      <div className="ion-activatable ripple-parent">\n        A plain div with a bounded ripple effect\n        <IonRippleEffect></IonRippleEffect>\n      </div>\n\n      <button className="ion-activatable ripple-parent">\n        A button with a bounded ripple effect\n        <IonRippleEffect></IonRippleEffect>\n      </button>\n\n      <div className="ion-activatable ripple-parent">\n        A plain div with an unbounded ripple effect\n        <IonRippleEffect type="unbounded"></IonRippleEffect>\n      </div>\n\n      <button className="ion-activatable ripple-parent">\n        A button with an unbounded ripple effect\n        <IonRippleEffect type="unbounded"></IonRippleEffect>\n      </button>\n    </IonContent>\n  </IonApp>\n);\n')),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-css"},".ripple-parent {\n  position: relative;\n  overflow: hidden;\n}\n"))),(0,i.kt)(p.Z,{value:"stencil",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-tsx"},'import { Component, h } from \'@stencil/core\';\n\n@Component({\n  tag: \'ripple-effect-example\',\n  styleUrl: \'ripple-effect-example.css\',\n})\nexport class RippleEffectExample {\n  render() {\n    return [\n      <ion-app>\n        <ion-content>\n          <div class="ion-activatable ripple-parent">\n            A plain div with a bounded ripple effect\n            <ion-ripple-effect></ion-ripple-effect>\n          </div>\n\n          <button class="ion-activatable ripple-parent">\n            A button with a bounded ripple effect\n            <ion-ripple-effect></ion-ripple-effect>\n          </button>\n\n          <div class="ion-activatable ripple-parent">\n            A plain div with an unbounded ripple effect\n            <ion-ripple-effect type="unbounded"></ion-ripple-effect>\n          </div>\n\n          <button class="ion-activatable ripple-parent">\n            A button with an unbounded ripple effect\n            <ion-ripple-effect type="unbounded"></ion-ripple-effect>\n          </button>\n        </ion-content>\n      </ion-app>,\n    ];\n  }\n}\n')),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-css"},".ripple-parent {\n  position: relative;\n  overflow: hidden;\n}\n"))),(0,i.kt)(p.Z,{value:"vue",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-html"},'<template>\n  <ion-app>\n    <ion-content>\n      <div class="ion-activatable ripple-parent">\n        A plain div with a bounded ripple effect\n        <ion-ripple-effect></ion-ripple-effect>\n      </div>\n\n      <button class="ion-activatable ripple-parent">\n        A button with a bounded ripple effect\n        <ion-ripple-effect></ion-ripple-effect>\n      </button>\n\n      <div class="ion-activatable ripple-parent">\n        A plain div with an unbounded ripple effect\n        <ion-ripple-effect type="unbounded"></ion-ripple-effect>\n      </div>\n\n      <button class="ion-activatable ripple-parent">\n        A button with an unbounded ripple effect\n        <ion-ripple-effect type="unbounded"></ion-ripple-effect>\n      </button>\n    </ion-content>\n  </ion-app>\n</template>\n\n<style>\n  .ripple-parent {\n    position: relative;\n    overflow: hidden;\n  }\n</style>\n\n<script>\n  import { IonApp, IonContent, IonRippleEffect } from \'@ionic/vue\';\n  import { defineComponent } from \'vue\';\n\n  export default defineComponent({\n    components: { IonApp, IonContent, IonRippleEffect },\n  });\n<\/script>\n')))),(0,i.kt)("h2",{id:"properties"},"Properties"),(0,i.kt)("h3",{id:"type"},"type"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null}),(0,i.kt)("th",{parentName:"tr",align:null}))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("strong",{parentName:"td"},"Description")),(0,i.kt)("td",{parentName:"tr",align:null},"Sets the type of ripple-effect:",(0,i.kt)("br",null),(0,i.kt)("br",null),"- ",(0,i.kt)("inlineCode",{parentName:"td"},"bounded"),": the ripple effect expands from the user's click position",(0,i.kt)("br",null),"- ",(0,i.kt)("inlineCode",{parentName:"td"},"unbounded"),": the ripple effect expands from the center of the button and overflows the container.",(0,i.kt)("br",null),(0,i.kt)("br",null),"NOTE: Surfaces for bounded ripples should have the overflow property set to hidden,",(0,i.kt)("br",null),"while surfaces for unbounded ripples should have it set to visible.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("strong",{parentName:"td"},"Attribute")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"type"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("strong",{parentName:"td"},"Type")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},'"bounded" \\| "unbounded"'))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("strong",{parentName:"td"},"Default")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"'bounded'"))))),(0,i.kt)("h2",{id:"methods"},"Methods"),(0,i.kt)("h3",{id:"addripple"},"addRipple"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null}),(0,i.kt)("th",{parentName:"tr",align:null}))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("strong",{parentName:"td"},"Description")),(0,i.kt)("td",{parentName:"tr",align:null},"Adds the ripple effect to the parent element.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("strong",{parentName:"td"},"Signature")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"addRipple(x: number, y: number) => Promise<() => void>"))))))}m.isMDXComponent=!0}}]);