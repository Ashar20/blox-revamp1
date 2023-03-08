"use strict";(self.webpackChunkionic_docs=self.webpackChunkionic_docs||[]).push([[4364],{3905:function(t,e,n){n.d(e,{Zo:function(){return u},kt:function(){return s}});var a=n(67294);function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function l(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function o(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?l(Object(n),!0).forEach((function(e){r(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function i(t,e){if(null==t)return{};var n,a,r=function(t,e){if(null==t)return{};var n,a,r={},l=Object.keys(t);for(a=0;a<l.length;a++)n=l[a],e.indexOf(n)>=0||(r[n]=t[n]);return r}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(a=0;a<l.length;a++)n=l[a],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}var d=a.createContext({}),p=function(t){var e=a.useContext(d),n=e;return t&&(n="function"==typeof t?t(e):o(o({},e),t)),n},u=function(t){var e=p(t.components);return a.createElement(d.Provider,{value:e},t.children)},b={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},m=a.forwardRef((function(t,e){var n=t.components,r=t.mdxType,l=t.originalType,d=t.parentName,u=i(t,["components","mdxType","originalType","parentName"]),m=p(n),s=r,c=m["".concat(d,".").concat(s)]||m[s]||b[s]||l;return n?a.createElement(c,o(o({ref:e},u),{},{components:n})):a.createElement(c,o({ref:e},u))}));function s(t,e){var n=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var l=n.length,o=new Array(l);o[0]=m;var i={};for(var d in e)hasOwnProperty.call(e,d)&&(i[d]=e[d]);i.originalType=t,i.mdxType="string"==typeof t?t:r,o[1]=i;for(var p=2;p<l;p++)o[p]=n[p];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},58215:function(t,e,n){var a=n(67294);e.Z=function(t){var e=t.children,n=t.hidden,r=t.className;return a.createElement("div",{role:"tabpanel",hidden:n,className:r},e)}},26396:function(t,e,n){n.d(e,{Z:function(){return m}});var a=n(87462),r=n(67294),l=n(72389),o=n(79443);var i=function(){var t=(0,r.useContext)(o.Z);if(null==t)throw new Error('"useUserPreferencesContext" is used outside of "Layout" component.');return t},d=n(89521),p=n(86010),u="tabItem_1uMI";function b(t){var e,n,a,l=t.lazy,o=t.block,b=t.defaultValue,m=t.values,s=t.groupId,c=t.className,k=r.Children.map(t.children,(function(t){if((0,r.isValidElement)(t)&&void 0!==t.props.value)return t;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof t.type?t.type:t.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),N=null!=m?m:k.map((function(t){var e=t.props;return{value:e.value,label:e.label}})),g=(0,d.lx)(N,(function(t,e){return t.value===e.value}));if(g.length>0)throw new Error('Docusaurus error: Duplicate values "'+g.map((function(t){return t.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var h=null===b?b:null!=(e=null!=b?b:null==(n=k.find((function(t){return t.props.default})))?void 0:n.props.value)?e:null==(a=k[0])?void 0:a.props.value;if(null!==h&&!N.some((function(t){return t.value===h})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+h+'" but none of its children has the corresponding value. Available values are: '+N.map((function(t){return t.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var f=i(),y=f.tabGroupChoices,v=f.setTabGroupChoices,C=(0,r.useState)(h),T=C[0],I=C[1],w=[],x=(0,d.o5)().blockElementScrollPositionUntilNextRender;if(null!=s){var S=y[s];null!=S&&S!==T&&N.some((function(t){return t.value===S}))&&I(S)}var D=function(t){var e=t.currentTarget,n=w.indexOf(e),a=N[n].value;a!==T&&(x(e),I(a),null!=s&&v(s,a))},O=function(t){var e,n=null;switch(t.key){case"ArrowRight":var a=w.indexOf(t.currentTarget)+1;n=w[a]||w[0];break;case"ArrowLeft":var r=w.indexOf(t.currentTarget)-1;n=w[r]||w[w.length-1]}null==(e=n)||e.focus()};return r.createElement("div",{className:"tabs-container"},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,p.Z)("tabs",{"tabs--block":o},c)},N.map((function(t){var e=t.value,n=t.label;return r.createElement("li",{role:"tab",tabIndex:T===e?0:-1,"aria-selected":T===e,className:(0,p.Z)("tabs__item",u,{"tabs__item--active":T===e}),key:e,ref:function(t){return w.push(t)},onKeyDown:O,onFocus:D,onClick:D},null!=n?n:e)}))),l?(0,r.cloneElement)(k.filter((function(t){return t.props.value===T}))[0],{className:"margin-vert--md"}):r.createElement("div",{className:"margin-vert--md"},k.map((function(t,e){return(0,r.cloneElement)(t,{key:e,hidden:t.props.value!==T})}))))}function m(t){var e=(0,l.Z)();return r.createElement(b,(0,a.Z)({key:String(e)},t))}},85342:function(t,e,n){n.r(e),n.d(e,{frontMatter:function(){return p},contentTitle:function(){return u},metadata:function(){return b},toc:function(){return m},default:function(){return c}});var a=n(87462),r=n(63366),l=(n(67294),n(3905)),o=n(26396),i=n(58215),d=["components"],p={sidebar_label:"ion-tab-button"},u="ion-tab-button",b={unversionedId:"api/tab-button",id:"version-v5/api/tab-button",isDocsHomePage:!1,title:"ion-tab-button",description:"A tab button is a UI component that is placed inside of a tab bar. The tab button can specify the layout of the icon and label and connect to a tab view.",source:"@site/versioned_docs/version-v5/api/tab-button.md",sourceDirName:"api",slug:"/api/tab-button",permalink:"/docs/v5/api/tab-button",editUrl:"https://github.com/ionic-team/ionic-docs/tree/main/docs/api/tab-button.md",tags:[],version:"v5",frontMatter:{sidebar_label:"ion-tab-button"},sidebar:"version-v5/api",previous:{title:"ion-tab-bar",permalink:"/docs/v5/api/tab-bar"},next:{title:"ion-toast",permalink:"/docs/v5/api/toast"}},m=[{value:"Usage",id:"usage",children:[],level:2},{value:"Properties",id:"properties",children:[{value:"disabled",id:"disabled",children:[],level:3},{value:"download",id:"download",children:[],level:3},{value:"href",id:"href",children:[],level:3},{value:"layout",id:"layout",children:[],level:3},{value:"mode",id:"mode",children:[],level:3},{value:"rel",id:"rel",children:[],level:3},{value:"selected",id:"selected",children:[],level:3},{value:"tab",id:"tab",children:[],level:3},{value:"target",id:"target",children:[],level:3}],level:2},{value:"CSS Shadow Parts",id:"css-shadow-parts",children:[],level:2},{value:"CSS Custom Properties",id:"css-custom-properties",children:[],level:2}],s={toc:m};function c(t){var e=t.components,n=(0,r.Z)(t,d);return(0,l.kt)("wrapper",(0,a.Z)({},s,n,{components:e,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"ion-tab-button"},"ion-tab-button"),(0,l.kt)("p",null,"A tab button is a UI component that is placed inside of a ",(0,l.kt)("a",{parentName:"p",href:"/docs/v5/api/tab-bar"},"tab bar"),". The tab button can specify the layout of the icon and label and connect to a ",(0,l.kt)("a",{parentName:"p",href:"/docs/v5/api/tab"},"tab view"),"."),(0,l.kt)("p",null,"See the ",(0,l.kt)("a",{parentName:"p",href:"/docs/v5/api/tabs"},"tabs documentation")," for more details on configuring tabs."),(0,l.kt)("h2",{id:"usage"},"Usage"),(0,l.kt)(o.Z,{groupId:"framework",defaultValue:"angular",values:[{value:"angular",label:"Angular"},{value:"javascript",label:"Javascript"},{value:"react",label:"React"},{value:"stencil",label:"Stencil"},{value:"vue",label:"Vue"}],mdxType:"Tabs"},(0,l.kt)(i.Z,{value:"angular",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-html"},'<ion-tabs>\n  \x3c!-- Tab bar --\x3e\n  <ion-tab-bar slot="bottom">\n    <ion-tab-button tab="schedule">\n      <ion-icon name="calendar"></ion-icon>\n      <ion-label>Schedule</ion-label>\n    </ion-tab-button>\n\n    <ion-tab-button tab="speakers">\n      <ion-icon name="person-circle"></ion-icon>\n      <ion-label>Speakers</ion-label>\n    </ion-tab-button>\n\n    <ion-tab-button tab="map">\n      <ion-icon name="map"></ion-icon>\n      <ion-label>Map</ion-label>\n    </ion-tab-button>\n\n    <ion-tab-button tab="about">\n      <ion-icon name="information-circle"></ion-icon>\n      <ion-label>About</ion-label>\n    </ion-tab-button>\n  </ion-tab-bar>\n</ion-tabs>\n'))),(0,l.kt)(i.Z,{value:"javascript",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-html"},'<ion-tabs>\n  \x3c!-- Tab views --\x3e\n  <ion-tab tab="schedule">\n    <ion-router-outlet name="schedule"></ion-router-outlet>\n  </ion-tab>\n\n  <ion-tab tab="speakers">\n    <ion-router-outlet name="speakers"></ion-router-outlet>\n  </ion-tab>\n\n  <ion-tab tab="map">\n    <ion-router-outlet name="map"></ion-router-outlet>\n  </ion-tab>\n\n  <ion-tab tab="about">\n    <ion-router-outlet name="about"></ion-router-outlet>\n  </ion-tab>\n\n  \x3c!-- Tab bar --\x3e\n  <ion-tab-bar slot="bottom">\n    <ion-tab-button tab="schedule" href="/app/tabs/(schedule:schedule)">\n      <ion-icon name="calendar"></ion-icon>\n      <ion-label>Schedule</ion-label>\n    </ion-tab-button>\n\n    <ion-tab-button tab="speakers" href="/app/tabs/(speakers:speakers)">\n      <ion-icon name="person-circle"></ion-icon>\n      <ion-label>Speakers</ion-label>\n    </ion-tab-button>\n\n    <ion-tab-button tab="map" href="/app/tabs/(map:map)">\n      <ion-icon name="map"></ion-icon>\n      <ion-label>Map</ion-label>\n    </ion-tab-button>\n\n    <ion-tab-button tab="about" href="/app/tabs/(about:about)">\n      <ion-icon name="information-circle"></ion-icon>\n      <ion-label>About</ion-label>\n    </ion-tab-button>\n  </ion-tab-bar>\n</ion-tabs>\n'))),(0,l.kt)(i.Z,{value:"react",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-tsx"},'import React from \'react\';\nimport { IonTabs, IonTabBar, IonTabButton, IonIcon, IonLabel, IonContent } from \'@ionic/react\';\nimport { calendar, personCircle, map, informationCircle } from \'ionicons/icons\';\n\nexport const TabButtonExample: React.FC = () => (\n  <IonContent>\n    <IonTabs>\n      {/*-- Tab bar --*/}\n      <IonTabBar slot="bottom">\n        <IonTabButton tab="schedule">\n          <IonIcon icon={calendar} />\n          <IonLabel>Schedule</IonLabel>\n        </IonTabButton>\n\n        <IonTabButton tab="speakers">\n          <IonIcon icon={personCircle} />\n          <IonLabel>Speakers</IonLabel>\n        </IonTabButton>\n\n        <IonTabButton tab="map">\n          <IonIcon icon={map} />\n          <IonLabel>Map</IonLabel>\n        </IonTabButton>\n\n        <IonTabButton tab="about">\n          <IonIcon icon={informationCircle} />\n          <IonLabel>About</IonLabel>\n        </IonTabButton>\n      </IonTabBar>\n    </IonTabs>\n  </IonContent>\n);\n'))),(0,l.kt)(i.Z,{value:"stencil",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-tsx"},'import { Component, h } from \'@stencil/core\';\n\n@Component({\n  tag: \'tab-button-example\',\n  styleUrl: \'tab-button-example.css\',\n})\nexport class TabButtonExample {\n  render() {\n    return [\n      <ion-tabs>\n        {/* Tab views */}\n        <ion-tab tab="schedule">\n          <ion-router-outlet name="schedule"></ion-router-outlet>\n        </ion-tab>\n\n        <ion-tab tab="speakers">\n          <ion-router-outlet name="speakers"></ion-router-outlet>\n        </ion-tab>\n\n        <ion-tab tab="map">\n          <ion-router-outlet name="map"></ion-router-outlet>\n        </ion-tab>\n\n        <ion-tab tab="about">\n          <ion-router-outlet name="about"></ion-router-outlet>\n        </ion-tab>\n\n        {/* Tab bar */}\n        <ion-tab-bar slot="bottom">\n          <ion-tab-button tab="schedule" href="/app/tabs/(schedule:schedule)">\n            <ion-icon name="calendar"></ion-icon>\n            <ion-label>Schedule</ion-label>\n          </ion-tab-button>\n\n          <ion-tab-button tab="speakers" href="/app/tabs/(speakers:speakers)">\n            <ion-icon name="person-circle"></ion-icon>\n            <ion-label>Speakers</ion-label>\n          </ion-tab-button>\n\n          <ion-tab-button tab="map" href="/app/tabs/(map:map)">\n            <ion-icon name="map"></ion-icon>\n            <ion-label>Map</ion-label>\n          </ion-tab-button>\n\n          <ion-tab-button tab="about" href="/app/tabs/(about:about)">\n            <ion-icon name="information-circle"></ion-icon>\n            <ion-label>About</ion-label>\n          </ion-tab-button>\n        </ion-tab-bar>\n      </ion-tabs>,\n    ];\n  }\n}\n'))),(0,l.kt)(i.Z,{value:"vue",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-html"},'<template>\n  <ion-tabs>\n    \x3c!-- Tab bar --\x3e\n    <ion-tab-bar slot="bottom">\n      <ion-tab-button tab="schedule" href="/tabs/schedule">\n        <ion-icon :icon="calendar"></ion-icon>\n        <ion-label>Schedule</ion-label>\n      </ion-tab-button>\n\n      <ion-tab-button tab="speakers" href="/tabs/speakers">\n        <ion-icon :icon="person-circle"></ion-icon>\n        <ion-label>Speakers</ion-label>\n      </ion-tab-button>\n\n      <ion-tab-button tab="map" href="/tabs/map">\n        <ion-icon :icon="map"></ion-icon>\n        <ion-label>Map</ion-label>\n      </ion-tab-button>\n\n      <ion-tab-button tab="about" href="/tabs/about">\n        <ion-icon :icon="informationCircle"></ion-icon>\n        <ion-label>About</ion-label>\n      </ion-tab-button>\n    </ion-tab-bar>\n  </ion-tabs>\n</template>\n\n<script>\n  import { IonIcon, IonLabel, IonTabBar, IonTabButton, IonTabs } from \'@ionic/vue\';\n  import { calendar, informationCircle, map, personCircle } from \'ionicons/icons\';\n  import { defineComponent } from \'vue\';\n\n  export default defineComponent({\n    components: {\n      IonIcon,\n      IonLabel,\n      IonTabBar,\n      IonTabButton,\n      IonTabs,\n    },\n    setup() {\n      return { calendar, informationCircle, map, personCircle };\n    },\n  });\n<\/script>\n')))),(0,l.kt)("h2",{id:"properties"},"Properties"),(0,l.kt)("h3",{id:"disabled"},"disabled"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null}),(0,l.kt)("th",{parentName:"tr",align:null}))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"Description")),(0,l.kt)("td",{parentName:"tr",align:null},"If ",(0,l.kt)("inlineCode",{parentName:"td"},"true"),", the user cannot interact with the tab button.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"Attribute")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"disabled"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"Type")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"boolean"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"Default")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"false"))))),(0,l.kt)("h3",{id:"download"},"download"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null}),(0,l.kt)("th",{parentName:"tr",align:null}))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"Description")),(0,l.kt)("td",{parentName:"tr",align:null},"This attribute instructs browsers to download a URL instead of navigating to",(0,l.kt)("br",null),"it, so the user will be prompted to save it as a local file. If the attribute",(0,l.kt)("br",null),"has a value, it is used as the pre-filled file name in the Save prompt",(0,l.kt)("br",null),"(the user can still change the file name if they want).")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"Attribute")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"download"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"Type")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"string \\| undefined"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"Default")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"undefined"))))),(0,l.kt)("h3",{id:"href"},"href"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null}),(0,l.kt)("th",{parentName:"tr",align:null}))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"Description")),(0,l.kt)("td",{parentName:"tr",align:null},"Contains a URL or a URL fragment that the hyperlink points to.",(0,l.kt)("br",null),"If this property is set, an anchor tag will be rendered.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"Attribute")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"href"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"Type")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"string \\| undefined"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"Default")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"undefined"))))),(0,l.kt)("h3",{id:"layout"},"layout"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null}),(0,l.kt)("th",{parentName:"tr",align:null}))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"Description")),(0,l.kt)("td",{parentName:"tr",align:null},"Set the layout of the text and icon in the tab bar.",(0,l.kt)("br",null),"It defaults to ",(0,l.kt)("inlineCode",{parentName:"td"},"'icon-top'"),".")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"Attribute")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"layout"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"Type")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},'"icon-bottom" \\| "icon-end" \\| "icon-hide" \\| "icon-start" \\| "icon-top" \\| "label-hide" \\| undefined'))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"Default")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"undefined"))))),(0,l.kt)("h3",{id:"mode"},"mode"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null}),(0,l.kt)("th",{parentName:"tr",align:null}))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"Description")),(0,l.kt)("td",{parentName:"tr",align:null},"The mode determines which platform styles to use.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"Attribute")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"mode"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"Type")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},'"ios" \\| "md"'))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"Default")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"undefined"))))),(0,l.kt)("h3",{id:"rel"},"rel"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null}),(0,l.kt)("th",{parentName:"tr",align:null}))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"Description")),(0,l.kt)("td",{parentName:"tr",align:null},"Specifies the relationship of the target object to the link object.",(0,l.kt)("br",null),"The value is a space-separated list of ",(0,l.kt)("a",{parentName:"td",href:"https://developer.mozilla.org/en-US/docs/Web/HTML/Link_types"},"link types"),".")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"Attribute")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"rel"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"Type")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"string \\| undefined"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"Default")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"undefined"))))),(0,l.kt)("h3",{id:"selected"},"selected"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null}),(0,l.kt)("th",{parentName:"tr",align:null}))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"Description")),(0,l.kt)("td",{parentName:"tr",align:null},"The selected tab component")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"Attribute")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"selected"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"Type")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"boolean"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"Default")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"false"))))),(0,l.kt)("h3",{id:"tab"},"tab"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null}),(0,l.kt)("th",{parentName:"tr",align:null}))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"Description")),(0,l.kt)("td",{parentName:"tr",align:null},"A tab id must be provided for each ",(0,l.kt)("inlineCode",{parentName:"td"},"ion-tab"),". It's used internally to reference",(0,l.kt)("br",null),"the selected tab or by the router to switch between them.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"Attribute")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"tab"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"Type")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"string \\| undefined"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"Default")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"undefined"))))),(0,l.kt)("h3",{id:"target"},"target"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null}),(0,l.kt)("th",{parentName:"tr",align:null}))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"Description")),(0,l.kt)("td",{parentName:"tr",align:null},"Specifies where to display the linked URL.",(0,l.kt)("br",null),"Only applies when an ",(0,l.kt)("inlineCode",{parentName:"td"},"href")," is provided.",(0,l.kt)("br",null),"Special keywords: ",(0,l.kt)("inlineCode",{parentName:"td"},'"_blank"'),", ",(0,l.kt)("inlineCode",{parentName:"td"},'"_self"'),", ",(0,l.kt)("inlineCode",{parentName:"td"},'"_parent"'),", ",(0,l.kt)("inlineCode",{parentName:"td"},'"_top"'),".")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"Attribute")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"target"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"Type")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"string \\| undefined"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"Default")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"undefined"))))),(0,l.kt)("h2",{id:"css-shadow-parts"},"CSS Shadow Parts"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Name"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"native")),(0,l.kt)("td",{parentName:"tr",align:null},"The native HTML anchor element that wraps all child elements.")))),(0,l.kt)("h2",{id:"css-custom-properties"},"CSS Custom Properties"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Name"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"--background")),(0,l.kt)("td",{parentName:"tr",align:null},"Background of the tab button")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"--background-focused")),(0,l.kt)("td",{parentName:"tr",align:null},"Background of the tab button when focused with the tab key")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"--background-focused-opacity")),(0,l.kt)("td",{parentName:"tr",align:null},"Opacity of the tab button background when focused with the tab key")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"--color")),(0,l.kt)("td",{parentName:"tr",align:null},"Color of the tab button")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"--color-focused")),(0,l.kt)("td",{parentName:"tr",align:null},"Color of the tab button when focused with the tab key")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"--color-selected")),(0,l.kt)("td",{parentName:"tr",align:null},"Color of the selected tab button")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"--padding-bottom")),(0,l.kt)("td",{parentName:"tr",align:null},"Bottom padding of the tab button")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"--padding-end")),(0,l.kt)("td",{parentName:"tr",align:null},"Right padding if direction is left-to-right, and left padding if direction is right-to-left of the tab button")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"--padding-start")),(0,l.kt)("td",{parentName:"tr",align:null},"Left padding if direction is left-to-right, and right padding if direction is right-to-left of the tab button")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"--padding-top")),(0,l.kt)("td",{parentName:"tr",align:null},"Top padding of the tab button")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"--ripple-color")),(0,l.kt)("td",{parentName:"tr",align:null},"Color of the button ripple effect")))))}c.isMDXComponent=!0}}]);