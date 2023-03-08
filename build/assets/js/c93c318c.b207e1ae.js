"use strict";(self.webpackChunkionic_docs=self.webpackChunkionic_docs||[]).push([[60397],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return m}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),p=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=p(e.components);return r.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},h=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,s=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),h=p(n),m=a,c=h["".concat(s,".").concat(m)]||h[m]||d[m]||l;return n?r.createElement(c,o(o({ref:t},u),{},{components:n})):r.createElement(c,o({ref:t},u))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,o=new Array(l);o[0]=h;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:a,o[1]=i;for(var p=2;p<l;p++)o[p]=n[p];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}h.displayName="MDXCreateElement"},58215:function(e,t,n){var r=n(67294);t.Z=function(e){var t=e.children,n=e.hidden,a=e.className;return r.createElement("div",{role:"tabpanel",hidden:n,className:a},t)}},26396:function(e,t,n){n.d(t,{Z:function(){return h}});var r=n(87462),a=n(67294),l=n(72389),o=n(79443);var i=function(){var e=(0,a.useContext)(o.Z);if(null==e)throw new Error('"useUserPreferencesContext" is used outside of "Layout" component.');return e},s=n(89521),p=n(86010),u="tabItem_1uMI";function d(e){var t,n,r,l=e.lazy,o=e.block,d=e.defaultValue,h=e.values,m=e.groupId,c=e.className,f=a.Children.map(e.children,(function(e){if((0,a.isValidElement)(e)&&void 0!==e.props.value)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),k=null!=h?h:f.map((function(e){var t=e.props;return{value:t.value,label:t.label}})),g=(0,s.lx)(k,(function(e,t){return e.value===t.value}));if(g.length>0)throw new Error('Docusaurus error: Duplicate values "'+g.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var N=null===d?d:null!=(t=null!=d?d:null==(n=f.find((function(e){return e.props.default})))?void 0:n.props.value)?t:null==(r=f[0])?void 0:r.props.value;if(null!==N&&!k.some((function(e){return e.value===N})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+N+'" but none of its children has the corresponding value. Available values are: '+k.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var b=i(),v=b.tabGroupChoices,y=b.setTabGroupChoices,C=(0,a.useState)(N),x=C[0],w=C[1],R=[],T=(0,s.o5)().blockElementScrollPositionUntilNextRender;if(null!=m){var I=v[m];null!=I&&I!==x&&k.some((function(e){return e.value===I}))&&w(I)}var D=function(e){var t=e.currentTarget,n=R.indexOf(t),r=k[n].value;r!==x&&(T(t),w(r),null!=m&&y(m,r))},O=function(e){var t,n=null;switch(e.key){case"ArrowRight":var r=R.indexOf(e.currentTarget)+1;n=R[r]||R[0];break;case"ArrowLeft":var a=R.indexOf(e.currentTarget)-1;n=R[a]||R[R.length-1]}null==(t=n)||t.focus()};return a.createElement("div",{className:"tabs-container"},a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,p.Z)("tabs",{"tabs--block":o},c)},k.map((function(e){var t=e.value,n=e.label;return a.createElement("li",{role:"tab",tabIndex:x===t?0:-1,"aria-selected":x===t,className:(0,p.Z)("tabs__item",u,{"tabs__item--active":x===t}),key:t,ref:function(e){return R.push(e)},onKeyDown:O,onFocus:D,onClick:D},null!=n?n:t)}))),l?(0,a.cloneElement)(f.filter((function(e){return e.props.value===x}))[0],{className:"margin-vert--md"}):a.createElement("div",{className:"margin-vert--md"},f.map((function(e,t){return(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==x})}))))}function h(e){var t=(0,l.Z)();return a.createElement(d,(0,r.Z)({key:String(t)},e))}},18290:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return p},contentTitle:function(){return u},metadata:function(){return d},toc:function(){return h},default:function(){return c}});var r=n(87462),a=n(63366),l=(n(67294),n(3905)),o=n(26396),i=n(58215),s=["components"],p={sidebar_label:"ion-refresher",demoUrl:"/docs/demos/api/refresher/index.html",demoSourceUrl:"https://github.com/ionic-team/ionic-docs/tree/main/static/demos/api/refresher/index.html"},u="ion-refresher",d={unversionedId:"api/refresher",id:"version-v5/api/refresher",isDocsHomePage:!1,title:"ion-refresher",description:"The refresher provides pull-to-refresh functionality on a content component.",source:"@site/versioned_docs/version-v5/api/refresher.md",sourceDirName:"api",slug:"/api/refresher",permalink:"/docs/v5/api/refresher",editUrl:"https://github.com/ionic-team/ionic-docs/tree/main/docs/api/refresher.md",tags:[],version:"v5",frontMatter:{sidebar_label:"ion-refresher",demoUrl:"/docs/demos/api/refresher/index.html",demoSourceUrl:"https://github.com/ionic-team/ionic-docs/tree/main/static/demos/api/refresher/index.html"},sidebar:"version-v5/api",previous:{title:"ion-range",permalink:"/docs/v5/api/range"},next:{title:"ion-refresher-content",permalink:"/docs/v5/api/refresher-content"}},h=[{value:"Native Refreshers",id:"native-refreshers",children:[{value:"iOS Usage",id:"ios-usage",children:[],level:3},{value:"Android Usage",id:"android-usage",children:[],level:3}],level:2},{value:"Usage",id:"usage",children:[],level:2},{value:"Properties",id:"properties",children:[{value:"closeDuration",id:"closeduration",children:[],level:3},{value:"disabled",id:"disabled",children:[],level:3},{value:"pullFactor",id:"pullfactor",children:[],level:3},{value:"pullMax",id:"pullmax",children:[],level:3},{value:"pullMin",id:"pullmin",children:[],level:3},{value:"snapbackDuration",id:"snapbackduration",children:[],level:3}],level:2},{value:"Events",id:"events",children:[],level:2},{value:"Methods",id:"methods",children:[{value:"cancel",id:"cancel",children:[],level:3},{value:"complete",id:"complete",children:[],level:3},{value:"getProgress",id:"getprogress",children:[],level:3}],level:2}],m={toc:h};function c(e){var t=e.components,n=(0,a.Z)(e,s);return(0,l.kt)("wrapper",(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"ion-refresher"},"ion-refresher"),(0,l.kt)("p",null,"The refresher provides pull-to-refresh functionality on a content component.\nThe pull-to-refresh pattern lets a user pull down on a list of data using touch\nin order to retrieve more data."),(0,l.kt)("p",null,"Data should be modified during the refresher's output events. Once the async\noperation has completed and the refreshing should end, call ",(0,l.kt)("inlineCode",{parentName:"p"},"complete()")," on the\nrefresher."),(0,l.kt)("h2",{id:"native-refreshers"},"Native Refreshers"),(0,l.kt)("p",null,"Both iOS and Android platforms provide refreshers that take advantage of properties exposed by their respective devices that give pull to refresh a fluid, native-like feel."),(0,l.kt)("p",null,"Certain properties such as ",(0,l.kt)("inlineCode",{parentName:"p"},"pullMin")," and ",(0,l.kt)("inlineCode",{parentName:"p"},"snapbackDuration")," are not compatible because much of the native refreshers are scroll-based. See ",(0,l.kt)("a",{parentName:"p",href:"#properties"},"Refresher Properties")," for more information."),(0,l.kt)("h3",{id:"ios-usage"},"iOS Usage"),(0,l.kt)("p",null,"Using the iOS native ",(0,l.kt)("inlineCode",{parentName:"p"},"ion-refresher")," requires setting the ",(0,l.kt)("inlineCode",{parentName:"p"},"pullingIcon")," property on ",(0,l.kt)("inlineCode",{parentName:"p"},"ion-refresher-content")," to the value of one of the available spinners. See the ",(0,l.kt)("a",{parentName:"p",href:"/docs/v5/api/spinner#properties"},"Spinner Documentation")," for accepted values. The ",(0,l.kt)("inlineCode",{parentName:"p"},"pullingIcon")," defaults to the ",(0,l.kt)("inlineCode",{parentName:"p"},"lines")," spinner on iOS. The spinner tick marks will be progressively shown as the user pulls down on the page."),(0,l.kt)("p",null,"The iOS native ",(0,l.kt)("inlineCode",{parentName:"p"},"ion-refresher")," relies on rubber band scrolling in order to work properly and is only compatible with iOS devices as a result. We provide a fallback refresher for apps running in iOS mode on devices that do not support rubber band scrolling."),(0,l.kt)("h3",{id:"android-usage"},"Android Usage"),(0,l.kt)("p",null,"Using the MD native ",(0,l.kt)("inlineCode",{parentName:"p"},"ion-refresher")," requires setting the ",(0,l.kt)("inlineCode",{parentName:"p"},"pullingIcon")," property on ",(0,l.kt)("inlineCode",{parentName:"p"},"ion-refresher-content")," to the value of one of the available spinners. See the ",(0,l.kt)("a",{parentName:"p",href:"/docs/v5/api/spinner#properties"},"ion-spinner Documentation")," for accepted values. ",(0,l.kt)("inlineCode",{parentName:"p"},"pullingIcon")," defaults to the ",(0,l.kt)("inlineCode",{parentName:"p"},"circular")," spinner on MD."),(0,l.kt)("h2",{id:"usage"},"Usage"),(0,l.kt)(o.Z,{groupId:"framework",defaultValue:"angular",values:[{value:"angular",label:"Angular"},{value:"javascript",label:"Javascript"},{value:"react",label:"React"},{value:"stencil",label:"Stencil"},{value:"vue",label:"Vue"}],mdxType:"Tabs"},(0,l.kt)(i.Z,{value:"angular",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-html"},'\x3c!-- Default Refresher --\x3e\n<ion-content>\n  <ion-refresher slot="fixed" (ionRefresh)="doRefresh($event)">\n    <ion-refresher-content></ion-refresher-content>\n  </ion-refresher>\n</ion-content>\n\n\x3c!-- Custom Refresher Properties --\x3e\n<ion-content>\n  <ion-refresher slot="fixed" pullFactor="0.5" pullMin="100" pullMax="200">\n    <ion-refresher-content></ion-refresher-content>\n  </ion-refresher>\n</ion-content>\n\n\x3c!-- Custom Refresher Content --\x3e\n<ion-content>\n  <ion-refresher slot="fixed" (ionRefresh)="doRefresh($event)">\n    <ion-refresher-content\n      pullingIcon="chevron-down-circle-outline"\n      pullingText="Pull to refresh"\n      refreshingSpinner="circles"\n      refreshingText="Refreshing..."\n    >\n    </ion-refresher-content>\n  </ion-refresher>\n</ion-content>\n')),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-tsx"},"import { Component } from '@angular/core';\n\n@Component({\n  selector: 'refresher-example',\n  templateUrl: 'refresher-example.html',\n  styleUrls: ['./refresher-example.css'],\n})\nexport class RefresherExample {\n  constructor() {}\n\n  doRefresh(event) {\n    console.log('Begin async operation');\n\n    setTimeout(() => {\n      console.log('Async operation has ended');\n      event.target.complete();\n    }, 2000);\n  }\n}\n"))),(0,l.kt)(i.Z,{value:"javascript",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-html"},'\x3c!-- Default Refresher --\x3e\n<ion-content>\n  <ion-refresher slot="fixed">\n    <ion-refresher-content></ion-refresher-content>\n  </ion-refresher>\n</ion-content>\n\n\x3c!-- Custom Refresher Properties --\x3e\n<ion-content>\n  <ion-refresher slot="fixed" pull-factor="0.5" pull-min="100" pull-max="200">\n    <ion-refresher-content></ion-refresher-content>\n  </ion-refresher>\n</ion-content>\n\n\x3c!-- Custom Refresher Content --\x3e\n<ion-content>\n  <ion-refresher slot="fixed">\n    <ion-refresher-content\n      pulling-icon="chevron-down-circle-outline"\n      pulling-text="Pull to refresh"\n      refreshing-spinner="circles"\n      refreshing-text="Refreshing..."\n    >\n    </ion-refresher-content>\n  </ion-refresher>\n</ion-content>\n'))),(0,l.kt)(i.Z,{value:"react",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-tsx"},"import React from 'react';\nimport { IonContent, IonRefresher, IonRefresherContent } from '@ionic/react';\nimport { RefresherEventDetail } from '@ionic/core';\nimport { chevronDownCircleOutline } from 'ionicons/icons';\n\nfunction doRefresh(event: CustomEvent<RefresherEventDetail>) {\n  console.log('Begin async operation');\n\n  setTimeout(() => {\n    console.log('Async operation has ended');\n    event.detail.complete();\n  }, 2000);\n}\n\nexport const RefresherExample: React.FC = () => (\n  <IonContent>\n    {/*-- Default Refresher --*/}\n    <IonContent>\n      <IonRefresher slot=\"fixed\" onIonRefresh={doRefresh}>\n        <IonRefresherContent></IonRefresherContent>\n      </IonRefresher>\n    </IonContent>\n\n    {/*-- Custom Refresher Properties --*/}\n    <IonContent>\n      <IonRefresher slot=\"fixed\" onIonRefresh={doRefresh} pullFactor={0.5} pullMin={100} pullMax={200}>\n        <IonRefresherContent></IonRefresherContent>\n      </IonRefresher>\n    </IonContent>\n\n    {/*-- Custom Refresher Content --*/}\n    <IonContent>\n      <IonRefresher slot=\"fixed\" onIonRefresh={doRefresh}>\n        <IonRefresherContent\n          pullingIcon={chevronDownCircleOutline}\n          pullingText=\"Pull to refresh\"\n          refreshingSpinner=\"circles\"\n          refreshingText=\"Refreshing...\"\n        ></IonRefresherContent>\n      </IonRefresher>\n    </IonContent>\n  </IonContent>\n);\n"))),(0,l.kt)(i.Z,{value:"stencil",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-tsx"},'import { Component, h } from \'@stencil/core\';\n\n@Component({\n  tag: \'refresher-example\',\n  styleUrl: \'refresher-example.css\',\n})\nexport class RefresherExample {\n  doRefresh(ev: any) {\n    console.log(\'Begin async operation\');\n\n    setTimeout(() => {\n      console.log(\'Async operation has ended\');\n      ev.target.complete();\n    }, 2000);\n  }\n\n  render() {\n    return [\n      // Default Refresher\n      <ion-content>\n        <ion-refresher slot="fixed" onIonRefresh={(ev) => this.doRefresh(ev)}>\n          <ion-refresher-content></ion-refresher-content>\n        </ion-refresher>\n      </ion-content>,\n\n      // Custom Refresher Properties\n      <ion-content>\n        <ion-refresher slot="fixed" pullFactor={0.5} pullMin={100} pullMax={200}>\n          <ion-refresher-content></ion-refresher-content>\n        </ion-refresher>\n      </ion-content>,\n\n      // Custom Refresher Content\n      <ion-content>\n        <ion-refresher slot="fixed" onIonRefresh={(ev) => this.doRefresh(ev)}>\n          <ion-refresher-content\n            pullingIcon="chevron-down-circle-outline"\n            pullingText="Pull to refresh"\n            refreshingSpinner="circles"\n            refreshingText="Refreshing..."\n          ></ion-refresher-content>\n        </ion-refresher>\n      </ion-content>,\n    ];\n  }\n}\n'))),(0,l.kt)(i.Z,{value:"vue",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-html"},'<template>\n  \x3c!-- Default Refresher --\x3e\n  <ion-content>\n    <ion-refresher slot="fixed" @ionRefresh="doRefresh($event)">\n      <ion-refresher-content></ion-refresher-content>\n    </ion-refresher>\n  </ion-content>\n\n  \x3c!-- Custom Refresher Properties --\x3e\n  <ion-content>\n    <ion-refresher slot="fixed" pull-factor="0.5" pull-min="100" pull-max="200">\n      <ion-refresher-content></ion-refresher-content>\n    </ion-refresher>\n  </ion-content>\n\n  \x3c!-- Custom Refresher Content --\x3e\n  <ion-content>\n    <ion-refresher slot="fixed" @ionRefresh="doRefresh($event)">\n      <ion-refresher-content\n        :pulling-icon="chevronDownCircleOutline"\n        pulling-text="Pull to refresh"\n        refreshing-spinner="circles"\n        refreshing-text="Refreshing..."\n      >\n      </ion-refresher-content>\n    </ion-refresher>\n  </ion-content>\n</template>\n\n<script lang="ts">\n  import { IonContent, IonRefresher, IonRefresherContent } from \'@ionic/vue\';\n  import { chevronDownCircleOutline } from \'ionicons/icons\';\n  import { defineComponent } from \'vue\';\n\n  export default defineComponent({\n    components: { IonContent, IonRefresher, IonRefresherContent },\n    setup() {\n      const doRefresh = (event: CustomEvent) => {\n        console.log(\'Begin async operation\');\n\n        setTimeout(() => {\n          console.log(\'Async operation has ended\');\n          event.target.complete();\n        }, 2000);\n      };\n      return { chevronDownCircleOutline, doRefresh };\n    },\n  });\n<\/script>\n')))),(0,l.kt)("h2",{id:"properties"},"Properties"),(0,l.kt)("h3",{id:"closeduration"},"closeDuration"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null}),(0,l.kt)("th",{parentName:"tr",align:null}))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"Description")),(0,l.kt)("td",{parentName:"tr",align:null},"Time it takes to close the refresher.",(0,l.kt)("br",null),"Does not apply when the refresher content uses a spinner,",(0,l.kt)("br",null),"enabling the native refresher.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"Attribute")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"close-duration"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"Type")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"string"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"Default")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"'280ms'"))))),(0,l.kt)("h3",{id:"disabled"},"disabled"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null}),(0,l.kt)("th",{parentName:"tr",align:null}))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"Description")),(0,l.kt)("td",{parentName:"tr",align:null},"If ",(0,l.kt)("inlineCode",{parentName:"td"},"true"),", the refresher will be hidden.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"Attribute")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"disabled"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"Type")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"boolean"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"Default")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"false"))))),(0,l.kt)("h3",{id:"pullfactor"},"pullFactor"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null}),(0,l.kt)("th",{parentName:"tr",align:null}))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"Description")),(0,l.kt)("td",{parentName:"tr",align:null},"How much to multiply the pull speed by. To slow the pull animation down,",(0,l.kt)("br",null),"pass a number less than ",(0,l.kt)("inlineCode",{parentName:"td"},"1"),". To speed up the pull, pass a number greater",(0,l.kt)("br",null),"than ",(0,l.kt)("inlineCode",{parentName:"td"},"1"),". The default value is ",(0,l.kt)("inlineCode",{parentName:"td"},"1")," which is equal to the speed of the cursor.",(0,l.kt)("br",null),"If a negative value is passed in, the factor will be ",(0,l.kt)("inlineCode",{parentName:"td"},"1")," instead.",(0,l.kt)("br",null),(0,l.kt)("br",null),"For example: If the value passed is ",(0,l.kt)("inlineCode",{parentName:"td"},"1.2")," and the content is dragged by",(0,l.kt)("br",null),(0,l.kt)("inlineCode",{parentName:"td"},"10")," pixels, instead of ",(0,l.kt)("inlineCode",{parentName:"td"},"10")," pixels the content will be pulled by ",(0,l.kt)("inlineCode",{parentName:"td"},"12")," pixels",(0,l.kt)("br",null),"(an increase of 20 percent). If the value passed is ",(0,l.kt)("inlineCode",{parentName:"td"},"0.8"),", the dragged amount",(0,l.kt)("br",null),"will be ",(0,l.kt)("inlineCode",{parentName:"td"},"8")," pixels, less than the amount the cursor has moved.",(0,l.kt)("br",null),(0,l.kt)("br",null),"Does not apply when the refresher content uses a spinner,",(0,l.kt)("br",null),"enabling the native refresher.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"Attribute")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"pull-factor"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"Type")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"number"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"Default")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"1"))))),(0,l.kt)("h3",{id:"pullmax"},"pullMax"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null}),(0,l.kt)("th",{parentName:"tr",align:null}))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"Description")),(0,l.kt)("td",{parentName:"tr",align:null},"The maximum distance of the pull until the refresher",(0,l.kt)("br",null),"will automatically go into the ",(0,l.kt)("inlineCode",{parentName:"td"},"refreshing")," state.",(0,l.kt)("br",null),"Defaults to the result of ",(0,l.kt)("inlineCode",{parentName:"td"},"pullMin + 60"),".",(0,l.kt)("br",null),"Does not apply when the refresher content uses a spinner,",(0,l.kt)("br",null),"enabling the native refresher.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"Attribute")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"pull-max"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"Type")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"number"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"Default")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"this.pullMin + 60"))))),(0,l.kt)("h3",{id:"pullmin"},"pullMin"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null}),(0,l.kt)("th",{parentName:"tr",align:null}))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"Description")),(0,l.kt)("td",{parentName:"tr",align:null},"The minimum distance the user must pull down until the",(0,l.kt)("br",null),"refresher will go into the ",(0,l.kt)("inlineCode",{parentName:"td"},"refreshing")," state.",(0,l.kt)("br",null),"Does not apply when the refresher content uses a spinner,",(0,l.kt)("br",null),"enabling the native refresher.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"Attribute")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"pull-min"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"Type")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"number"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"Default")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"60"))))),(0,l.kt)("h3",{id:"snapbackduration"},"snapbackDuration"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null}),(0,l.kt)("th",{parentName:"tr",align:null}))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"Description")),(0,l.kt)("td",{parentName:"tr",align:null},"Time it takes the refresher to to snap back to the ",(0,l.kt)("inlineCode",{parentName:"td"},"refreshing")," state.",(0,l.kt)("br",null),"Does not apply when the refresher content uses a spinner,",(0,l.kt)("br",null),"enabling the native refresher.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"Attribute")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"snapback-duration"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"Type")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"string"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"Default")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"'280ms'"))))),(0,l.kt)("h2",{id:"events"},"Events"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Name"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"ionPull")),(0,l.kt)("td",{parentName:"tr",align:null},"Emitted while the user is pulling down the content and exposing the refresher.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"ionRefresh")),(0,l.kt)("td",{parentName:"tr",align:null},"Emitted when the user lets go of the content and has pulled down")))),(0,l.kt)("p",null,"further than the ",(0,l.kt)("inlineCode",{parentName:"p"},"pullMin")," or pulls the content down and exceeds the pullMax.\nUpdates the refresher state to ",(0,l.kt)("inlineCode",{parentName:"p"},"refreshing"),". The ",(0,l.kt)("inlineCode",{parentName:"p"},"complete()")," method should be\ncalled when the async operation has completed. |\n| ",(0,l.kt)("inlineCode",{parentName:"p"},"ionStart")," | Emitted when the user begins to start pulling down. |"),(0,l.kt)("h2",{id:"methods"},"Methods"),(0,l.kt)("h3",{id:"cancel"},"cancel"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null}),(0,l.kt)("th",{parentName:"tr",align:null}))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"Description")),(0,l.kt)("td",{parentName:"tr",align:null},"Changes the refresher's state from ",(0,l.kt)("inlineCode",{parentName:"td"},"refreshing")," to ",(0,l.kt)("inlineCode",{parentName:"td"},"cancelling"),".")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"Signature")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"cancel() => Promise<void>"))))),(0,l.kt)("h3",{id:"complete"},"complete"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null}),(0,l.kt)("th",{parentName:"tr",align:null}))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"Description")),(0,l.kt)("td",{parentName:"tr",align:null},"Call ",(0,l.kt)("inlineCode",{parentName:"td"},"complete()")," when your async operation has completed.",(0,l.kt)("br",null),"For example, the ",(0,l.kt)("inlineCode",{parentName:"td"},"refreshing")," state is while the app is performing",(0,l.kt)("br",null),"an asynchronous operation, such as receiving more data from an",(0,l.kt)("br",null),"AJAX request. Once the data has been received, you then call this",(0,l.kt)("br",null),"method to signify that the refreshing has completed and to close",(0,l.kt)("br",null),"the refresher. This method also changes the refresher's state from",(0,l.kt)("br",null),(0,l.kt)("inlineCode",{parentName:"td"},"refreshing")," to ",(0,l.kt)("inlineCode",{parentName:"td"},"completing"),".")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"Signature")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"complete() => Promise<void>"))))),(0,l.kt)("h3",{id:"getprogress"},"getProgress"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null}),(0,l.kt)("th",{parentName:"tr",align:null}))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"Description")),(0,l.kt)("td",{parentName:"tr",align:null},"A number representing how far down the user has pulled.",(0,l.kt)("br",null),"The number ",(0,l.kt)("inlineCode",{parentName:"td"},"0")," represents the user hasn't pulled down at all. The",(0,l.kt)("br",null),"number ",(0,l.kt)("inlineCode",{parentName:"td"},"1"),", and anything greater than ",(0,l.kt)("inlineCode",{parentName:"td"},"1"),", represents that the user",(0,l.kt)("br",null),"has pulled far enough down that when they let go then the refresh will",(0,l.kt)("br",null),"happen. If they let go and the number is less than ",(0,l.kt)("inlineCode",{parentName:"td"},"1"),", then the",(0,l.kt)("br",null),"refresh will not happen, and the content will return to it's original",(0,l.kt)("br",null),"position.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"Signature")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"getProgress() => Promise<number>"))))))}c.isMDXComponent=!0}}]);