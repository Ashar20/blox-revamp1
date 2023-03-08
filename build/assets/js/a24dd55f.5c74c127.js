"use strict";(self.webpackChunkionic_docs=self.webpackChunkionic_docs||[]).push([[24649],{3905:function(n,e,t){t.d(e,{Zo:function(){return u},kt:function(){return d}});var o=t(67294);function a(n,e,t){return e in n?Object.defineProperty(n,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):n[e]=t,n}function l(n,e){var t=Object.keys(n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(n);e&&(o=o.filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),t.push.apply(t,o)}return t}function i(n){for(var e=1;e<arguments.length;e++){var t=null!=arguments[e]?arguments[e]:{};e%2?l(Object(t),!0).forEach((function(e){a(n,e,t[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(e){Object.defineProperty(n,e,Object.getOwnPropertyDescriptor(t,e))}))}return n}function r(n,e){if(null==n)return{};var t,o,a=function(n,e){if(null==n)return{};var t,o,a={},l=Object.keys(n);for(o=0;o<l.length;o++)t=l[o],e.indexOf(t)>=0||(a[t]=n[t]);return a}(n,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(n);for(o=0;o<l.length;o++)t=l[o],e.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(n,t)&&(a[t]=n[t])}return a}var m=o.createContext({}),s=function(n){var e=o.useContext(m),t=e;return n&&(t="function"==typeof n?n(e):i(i({},e),n)),t},u=function(n){var e=s(n.components);return o.createElement(m.Provider,{value:e},n.children)},g={inlineCode:"code",wrapper:function(n){var e=n.children;return o.createElement(o.Fragment,{},e)}},b=o.forwardRef((function(n,e){var t=n.components,a=n.mdxType,l=n.originalType,m=n.parentName,u=r(n,["components","mdxType","originalType","parentName"]),b=s(t),d=a,c=b["".concat(m,".").concat(d)]||b[d]||g[d]||l;return t?o.createElement(c,i(i({ref:e},u),{},{components:t})):o.createElement(c,i({ref:e},u))}));function d(n,e){var t=arguments,a=e&&e.mdxType;if("string"==typeof n||a){var l=t.length,i=new Array(l);i[0]=b;var r={};for(var m in e)hasOwnProperty.call(e,m)&&(r[m]=e[m]);r.originalType=n,r.mdxType="string"==typeof n?n:a,i[1]=r;for(var s=2;s<l;s++)i[s]=t[s];return o.createElement.apply(null,i)}return o.createElement.apply(null,t)}b.displayName="MDXCreateElement"},58215:function(n,e,t){var o=t(67294);e.Z=function(n){var e=n.children,t=n.hidden,a=n.className;return o.createElement("div",{role:"tabpanel",hidden:t,className:a},e)}},26396:function(n,e,t){t.d(e,{Z:function(){return b}});var o=t(87462),a=t(67294),l=t(72389),i=t(79443);var r=function(){var n=(0,a.useContext)(i.Z);if(null==n)throw new Error('"useUserPreferencesContext" is used outside of "Layout" component.');return n},m=t(89521),s=t(86010),u="tabItem_1uMI";function g(n){var e,t,o,l=n.lazy,i=n.block,g=n.defaultValue,b=n.values,d=n.groupId,c=n.className,p=a.Children.map(n.children,(function(n){if((0,a.isValidElement)(n)&&void 0!==n.props.value)return n;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof n.type?n.type:n.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),v=null!=b?b:p.map((function(n){var e=n.props;return{value:e.value,label:e.label}})),h=(0,m.lx)(v,(function(n,e){return n.value===e.value}));if(h.length>0)throw new Error('Docusaurus error: Duplicate values "'+h.map((function(n){return n.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var k=null===g?g:null!=(e=null!=g?g:null==(t=p.find((function(n){return n.props.default})))?void 0:t.props.value)?e:null==(o=p[0])?void 0:o.props.value;if(null!==k&&!v.some((function(n){return n.value===k})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+k+'" but none of its children has the corresponding value. Available values are: '+v.map((function(n){return n.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var N=r(),y=N.tabGroupChoices,f=N.setTabGroupChoices,I=(0,a.useState)(k),S=I[0],C=I[1],x=[],w=(0,m.o5)().blockElementScrollPositionUntilNextRender;if(null!=d){var T=y[d];null!=T&&T!==S&&v.some((function(n){return n.value===T}))&&C(T)}var B=function(n){var e=n.currentTarget,t=x.indexOf(e),o=v[t].value;o!==S&&(w(e),C(o),null!=d&&f(d,o))},D=function(n){var e,t=null;switch(n.key){case"ArrowRight":var o=x.indexOf(n.currentTarget)+1;t=x[o]||x[0];break;case"ArrowLeft":var a=x.indexOf(n.currentTarget)-1;t=x[a]||x[x.length-1]}null==(e=t)||e.focus()};return a.createElement("div",{className:"tabs-container"},a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,s.Z)("tabs",{"tabs--block":i},c)},v.map((function(n){var e=n.value,t=n.label;return a.createElement("li",{role:"tab",tabIndex:S===e?0:-1,"aria-selected":S===e,className:(0,s.Z)("tabs__item",u,{"tabs__item--active":S===e}),key:e,ref:function(n){return x.push(n)},onKeyDown:D,onFocus:B,onClick:B},null!=t?t:e)}))),l?(0,a.cloneElement)(p.filter((function(n){return n.props.value===S}))[0],{className:"margin-vert--md"}):a.createElement("div",{className:"margin-vert--md"},p.map((function(n,e){return(0,a.cloneElement)(n,{key:e,hidden:n.props.value!==S})}))))}function b(n){var e=(0,l.Z)();return a.createElement(g,(0,o.Z)({key:String(e)},n))}},14897:function(n,e,t){t.r(e),t.d(e,{frontMatter:function(){return s},contentTitle:function(){return u},metadata:function(){return g},toc:function(){return b},default:function(){return c}});var o=t(87462),a=t(63366),l=(t(67294),t(3905)),i=t(26396),r=t(58215),m=["components"],s={sidebar_label:"ion-segment",demoUrl:"/docs/demos/api/segment/index.html",demoSourceUrl:"https://github.com/ionic-team/ionic-docs/tree/main/static/demos/api/segment/index.html"},u="ion-segment",g={unversionedId:"api/segment",id:"version-v5/api/segment",isDocsHomePage:!1,title:"ion-segment",description:"Segments display a group of related buttons, sometimes known as segmented controls, in a horizontal row. They can be displayed inside of a toolbar or the main content.",source:"@site/versioned_docs/version-v5/api/segment.md",sourceDirName:"api",slug:"/api/segment",permalink:"/docs/v5/api/segment",editUrl:"https://github.com/ionic-team/ionic-docs/tree/main/docs/api/segment.md",tags:[],version:"v5",frontMatter:{sidebar_label:"ion-segment",demoUrl:"/docs/demos/api/segment/index.html",demoSourceUrl:"https://github.com/ionic-team/ionic-docs/tree/main/static/demos/api/segment/index.html"},sidebar:"version-v5/api",previous:{title:"ion-searchbar",permalink:"/docs/v5/api/searchbar"},next:{title:"ion-segment-button",permalink:"/docs/v5/api/segment-button"}},b=[{value:"Scrollable Segments",id:"scrollable-segments",children:[],level:2},{value:"Usage",id:"usage",children:[],level:2},{value:"Properties",id:"properties",children:[{value:"color",id:"color",children:[],level:3},{value:"disabled",id:"disabled",children:[],level:3},{value:"mode",id:"mode",children:[],level:3},{value:"scrollable",id:"scrollable",children:[],level:3},{value:"swipeGesture",id:"swipegesture",children:[],level:3},{value:"value",id:"value",children:[],level:3}],level:2},{value:"Events",id:"events",children:[],level:2},{value:"CSS Custom Properties",id:"css-custom-properties",children:[],level:2}],d={toc:b};function c(n){var e=n.components,t=(0,a.Z)(n,m);return(0,l.kt)("wrapper",(0,o.Z)({},d,t,{components:e,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"ion-segment"},"ion-segment"),(0,l.kt)("p",null,"Segments display a group of related buttons, sometimes known as segmented controls, in a horizontal row. They can be displayed inside of a toolbar or the main content."),(0,l.kt)("p",null,"Their functionality is similar to tabs, where selecting one will deselect all others. Segments are useful for toggling between different views inside of the content. Tabs should be used instead of a segment when clicking on a control should navigate between pages."),(0,l.kt)("h2",{id:"scrollable-segments"},"Scrollable Segments"),(0,l.kt)("p",null,"Segments are not scrollable by default. Each segment button has a fixed width, and the width is determined by dividing the number of segment buttons by the screen width. This ensures that each segment button can be displayed on the screen without having to scroll. As a result, some segment buttons with longer labels may get cut off. To avoid this we recommend either using a shorter label or switching to a scrollable segment by setting the ",(0,l.kt)("inlineCode",{parentName:"p"},"scrollable")," property to ",(0,l.kt)("inlineCode",{parentName:"p"},"true"),". This will cause the segment to scroll horizontally, but will allow each segment button to have a variable width."),(0,l.kt)("h2",{id:"usage"},"Usage"),(0,l.kt)(i.Z,{groupId:"framework",defaultValue:"angular",values:[{value:"angular",label:"Angular"},{value:"javascript",label:"Javascript"},{value:"react",label:"React"},{value:"stencil",label:"Stencil"},{value:"vue",label:"Vue"}],mdxType:"Tabs"},(0,l.kt)(r.Z,{value:"angular",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-html"},'\x3c!-- Default Segment --\x3e\n<ion-segment (ionChange)="segmentChanged($event)">\n  <ion-segment-button value="friends">\n    <ion-label>Friends</ion-label>\n  </ion-segment-button>\n  <ion-segment-button value="enemies">\n    <ion-label>Enemies</ion-label>\n  </ion-segment-button>\n</ion-segment>\n\n\x3c!-- Disabled Segment --\x3e\n<ion-segment (ionChange)="segmentChanged($event)" disabled value="sunny">\n  <ion-segment-button value="sunny">\n    <ion-label>Sunny</ion-label>\n  </ion-segment-button>\n  <ion-segment-button value="rainy">\n    <ion-label>Rainy</ion-label>\n  </ion-segment-button>\n</ion-segment>\n\n\x3c!-- Segment with anchors --\x3e\n<ion-segment (ionChange)="segmentChanged($event)">\n  <ion-segment-button value="dogs">\n    <ion-label>Dogs</ion-label>\n  </ion-segment-button>\n  <ion-segment-button value="cats">\n    <ion-label>Cats</ion-label>\n  </ion-segment-button>\n</ion-segment>\n\n\x3c!-- Scrollable Segment --\x3e\n<ion-segment scrollable value="heart">\n  <ion-segment-button value="home">\n    <ion-icon name="home"></ion-icon>\n  </ion-segment-button>\n  <ion-segment-button value="heart">\n    <ion-icon name="heart"></ion-icon>\n  </ion-segment-button>\n  <ion-segment-button value="pin">\n    <ion-icon name="pin"></ion-icon>\n  </ion-segment-button>\n  <ion-segment-button value="star">\n    <ion-icon name="star"></ion-icon>\n  </ion-segment-button>\n  <ion-segment-button value="call">\n    <ion-icon name="call"></ion-icon>\n  </ion-segment-button>\n  <ion-segment-button value="globe">\n    <ion-icon name="globe"></ion-icon>\n  </ion-segment-button>\n  <ion-segment-button value="basket">\n    <ion-icon name="basket"></ion-icon>\n  </ion-segment-button>\n</ion-segment>\n\n\x3c!-- Segment with secondary color --\x3e\n<ion-segment (ionChange)="segmentChanged($event)" color="secondary">\n  <ion-segment-button value="standard">\n    <ion-label>Standard</ion-label>\n  </ion-segment-button>\n  <ion-segment-button value="hybrid">\n    <ion-label>Hybrid</ion-label>\n  </ion-segment-button>\n  <ion-segment-button value="sat">\n    <ion-label>Satellite</ion-label>\n  </ion-segment-button>\n</ion-segment>\n\n\x3c!-- Segment in a toolbar --\x3e\n<ion-toolbar>\n  <ion-segment (ionChange)="segmentChanged($event)">\n    <ion-segment-button value="camera">\n      <ion-icon name="camera"></ion-icon>\n    </ion-segment-button>\n    <ion-segment-button value="bookmark">\n      <ion-icon name="bookmark"></ion-icon>\n    </ion-segment-button>\n  </ion-segment>\n</ion-toolbar>\n\n\x3c!-- Segment with default selection --\x3e\n<ion-segment (ionChange)="segmentChanged($event)" value="javascript">\n  <ion-segment-button value="python">\n    <ion-label>Python</ion-label>\n  </ion-segment-button>\n  <ion-segment-button value="javascript">\n    <ion-label>Javascript</ion-label>\n  </ion-segment-button>\n</ion-segment>\n')),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-tsx"},"import { Component } from '@angular/core';\n\n@Component({\n  selector: 'segment-example',\n  templateUrl: 'segment-example.html',\n  styleUrls: ['./segment-example.css'],\n})\nexport class SegmentExample {\n  segmentChanged(ev: any) {\n    console.log('Segment changed', ev);\n  }\n}\n"))),(0,l.kt)(r.Z,{value:"javascript",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-html"},'\x3c!-- Default Segment --\x3e\n<ion-segment>\n  <ion-segment-button value="friends">\n    <ion-label>Friends</ion-label>\n  </ion-segment-button>\n  <ion-segment-button value="enemies">\n    <ion-label>Enemies</ion-label>\n  </ion-segment-button>\n</ion-segment>\n\n\x3c!-- Disabled Segment --\x3e\n<ion-segment disabled value="sunny">\n  <ion-segment-button value="sunny">\n    <ion-label>Sunny</ion-label>\n  </ion-segment-button>\n  <ion-segment-button value="rainy">\n    <ion-label>Rainy</ion-label>\n  </ion-segment-button>\n</ion-segment>\n\n\x3c!-- Segment with anchors --\x3e\n<ion-segment>\n  <ion-segment-button value="dogs">\n    <ion-label>Dogs</ion-label>\n  </ion-segment-button>\n  <ion-segment-button value="cats">\n    <ion-label>Cats</ion-label>\n  </ion-segment-button>\n</ion-segment>\n\n\x3c!-- Scrollable Segment --\x3e\n<ion-segment scrollable value="heart">\n  <ion-segment-button value="home">\n    <ion-icon name="home"></ion-icon>\n  </ion-segment-button>\n  <ion-segment-button value="heart">\n    <ion-icon name="heart"></ion-icon>\n  </ion-segment-button>\n  <ion-segment-button value="pin">\n    <ion-icon name="pin"></ion-icon>\n  </ion-segment-button>\n  <ion-segment-button value="star">\n    <ion-icon name="star"></ion-icon>\n  </ion-segment-button>\n  <ion-segment-button value="call">\n    <ion-icon name="call"></ion-icon>\n  </ion-segment-button>\n  <ion-segment-button value="globe">\n    <ion-icon name="globe"></ion-icon>\n  </ion-segment-button>\n  <ion-segment-button value="basket">\n    <ion-icon name="basket"></ion-icon>\n  </ion-segment-button>\n</ion-segment>\n\n\x3c!-- Segment with secondary color --\x3e\n<ion-segment color="secondary">\n  <ion-segment-button value="standard">\n    <ion-label>Standard</ion-label>\n  </ion-segment-button>\n  <ion-segment-button value="hybrid">\n    <ion-label>Hybrid</ion-label>\n  </ion-segment-button>\n  <ion-segment-button value="sat">\n    <ion-label>Satellite</ion-label>\n  </ion-segment-button>\n</ion-segment>\n\n\x3c!-- Segment in a toolbar --\x3e\n<ion-toolbar>\n  <ion-segment>\n    <ion-segment-button value="camera">\n      <ion-icon name="camera"></ion-icon>\n    </ion-segment-button>\n    <ion-segment-button value="bookmark">\n      <ion-icon name="bookmark"></ion-icon>\n    </ion-segment-button>\n  </ion-segment>\n</ion-toolbar>\n\n\x3c!-- Segment with default selection --\x3e\n<ion-segment value="javascript">\n  <ion-segment-button value="python">\n    <ion-label>Python</ion-label>\n  </ion-segment-button>\n  <ion-segment-button value="javascript">\n    <ion-label>Javascript</ion-label>\n  </ion-segment-button>\n</ion-segment>\n')),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-javascript"},"// Listen for ionChange on all segments\nconst segments = document.querySelectorAll('ion-segment');\nfor (let i = 0; i < segments.length; i++) {\n  segments[i].addEventListener('ionChange', (ev) => {\n    console.log('Segment changed', ev);\n  });\n}\n"))),(0,l.kt)(r.Z,{value:"react",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-tsx"},'import React from \'react\';\nimport {\n  IonContent,\n  IonHeader,\n  IonPage,\n  IonTitle,\n  IonToolbar,\n  IonSegment,\n  IonSegmentButton,\n  IonLabel,\n  IonIcon,\n} from \'@ionic/react\';\nimport { call, home, heart, pin, star, globe, basket, camera, bookmark } from \'ionicons/icons\';\n\nexport const SegmentExamples: React.FC = () => {\n  return (\n    <IonPage>\n      <IonHeader>\n        <IonToolbar>\n          <IonTitle>SegmentExamples</IonTitle>\n        </IonToolbar>\n      </IonHeader>\n      <IonContent>\n        {/*-- Default Segment --*/}\n        <IonSegment onIonChange={(e) => console.log(\'Segment selected\', e.detail.value)}>\n          <IonSegmentButton value="friends">\n            <IonLabel>Friends</IonLabel>\n          </IonSegmentButton>\n          <IonSegmentButton value="enemies">\n            <IonLabel>Enemies</IonLabel>\n          </IonSegmentButton>\n        </IonSegment>\n\n        {/*-- Disabled Segment --*/}\n        <IonSegment onIonChange={(e) => console.log(\'Segment selected\', e.detail.value)} disabled value="sunny">\n          <IonSegmentButton value="sunny">\n            <IonLabel>Sunny</IonLabel>\n          </IonSegmentButton>\n          <IonSegmentButton value="rainy">\n            <IonLabel>Rainy</IonLabel>\n          </IonSegmentButton>\n        </IonSegment>\n\n        {/*-- Segment with anchors --*/}\n        <IonSegment onIonChange={(e) => console.log(\'Segment selected\', e.detail.value)}>\n          <IonSegmentButton value="dogs">\n            <IonLabel>Dogs</IonLabel>\n          </IonSegmentButton>\n          <IonSegmentButton value="cats">\n            <IonLabel>Cats</IonLabel>\n          </IonSegmentButton>\n        </IonSegment>\n\n        {/*-- Scrollable Segment --*/}\n        <IonSegment scrollable value="heart">\n          <IonSegmentButton value="home">\n            <IonIcon icon={home} />\n          </IonSegmentButton>\n          <IonSegmentButton value="heart">\n            <IonIcon icon={heart} />\n          </IonSegmentButton>\n          <IonSegmentButton value="pin">\n            <IonIcon icon={pin} />\n          </IonSegmentButton>\n          <IonSegmentButton value="star">\n            <IonIcon icon={star} />\n          </IonSegmentButton>\n          <IonSegmentButton value="call">\n            <IonIcon icon={call} />\n          </IonSegmentButton>\n          <IonSegmentButton value="globe">\n            <IonIcon icon={globe} />\n          </IonSegmentButton>\n          <IonSegmentButton value="basket">\n            <IonIcon icon={basket} />\n          </IonSegmentButton>\n        </IonSegment>\n\n        {/*-- Segment with secondary color --*/}\n        <IonSegment onIonChange={(e) => console.log(\'Segment selected\', e.detail.value)} color="secondary">\n          <IonSegmentButton value="standard">\n            <IonLabel>Standard</IonLabel>\n          </IonSegmentButton>\n          <IonSegmentButton value="hybrid">\n            <IonLabel>Hybrid</IonLabel>\n          </IonSegmentButton>\n          <IonSegmentButton value="sat">\n            <IonLabel>Satellite</IonLabel>\n          </IonSegmentButton>\n        </IonSegment>\n\n        {/*-- Segment in a toolbar --*/}\n        <IonToolbar>\n          <IonSegment onIonChange={(e) => console.log(\'Segment selected\', e.detail.value)}>\n            <IonSegmentButton value="camera">\n              <IonIcon icon={camera} />\n            </IonSegmentButton>\n            <IonSegmentButton value="bookmark">\n              <IonIcon icon={bookmark} />\n            </IonSegmentButton>\n          </IonSegment>\n        </IonToolbar>\n\n        {/*-- Segment with default selection --*/}\n        <IonSegment onIonChange={(e) => console.log(\'Segment selected\', e.detail.value)} value="javascript">\n          <IonSegmentButton value="python">\n            <IonLabel>Python</IonLabel>\n          </IonSegmentButton>\n          <IonSegmentButton value="javascript">\n            <IonLabel>Javascript</IonLabel>\n          </IonSegmentButton>\n        </IonSegment>\n      </IonContent>\n    </IonPage>\n  );\n};\n'))),(0,l.kt)(r.Z,{value:"stencil",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-tsx"},'import { Component, h } from \'@stencil/core\';\n\n@Component({\n  tag: \'segment-example\',\n  styleUrl: \'segment-example.css\',\n})\nexport class SegmentExample {\n  segmentChanged(ev: any) {\n    console.log(\'Segment changed\', ev);\n  }\n\n  render() {\n    return [\n      // Default Segment\n      <ion-segment onIonChange={(ev) => this.segmentChanged(ev)}>\n        <ion-segment-button value="friends">\n          <ion-label>Friends</ion-label>\n        </ion-segment-button>\n        <ion-segment-button value="enemies">\n          <ion-label>Enemies</ion-label>\n        </ion-segment-button>\n      </ion-segment>,\n\n      // Disabled Segment\n      <ion-segment onIonChange={(ev) => this.segmentChanged(ev)} disabled={true} value="sunny">\n        <ion-segment-button value="sunny">\n          <ion-label>Sunny</ion-label>\n        </ion-segment-button>\n        <ion-segment-button value="rainy">\n          <ion-label>Rainy</ion-label>\n        </ion-segment-button>\n      </ion-segment>,\n\n      // Segment with anchors\n      <ion-segment onIonChange={(ev) => this.segmentChanged(ev)}>\n        <ion-segment-button value="dogs">\n          <ion-label>Dogs</ion-label>\n        </ion-segment-button>\n        <ion-segment-button value="cats">\n          <ion-label>Cats</ion-label>\n        </ion-segment-button>\n      </ion-segment>,\n\n      // Scrollable Segment\n      <ion-segment scrollable value="heart">\n        <ion-segment-button value="home">\n          <ion-icon name="home"></ion-icon>\n        </ion-segment-button>\n        <ion-segment-button value="heart">\n          <ion-icon name="heart"></ion-icon>\n        </ion-segment-button>\n        <ion-segment-button value="pin">\n          <ion-icon name="pin"></ion-icon>\n        </ion-segment-button>\n        <ion-segment-button value="star">\n          <ion-icon name="star"></ion-icon>\n        </ion-segment-button>\n        <ion-segment-button value="call">\n          <ion-icon name="call"></ion-icon>\n        </ion-segment-button>\n        <ion-segment-button value="globe">\n          <ion-icon name="globe"></ion-icon>\n        </ion-segment-button>\n        <ion-segment-button value="basket">\n          <ion-icon name="basket"></ion-icon>\n        </ion-segment-button>\n      </ion-segment>,\n\n      // Segment with secondary color\n      <ion-segment onIonChange={(ev) => this.segmentChanged(ev)} color="secondary">\n        <ion-segment-button value="standard">\n          <ion-label>Standard</ion-label>\n        </ion-segment-button>\n        <ion-segment-button value="hybrid">\n          <ion-label>Hybrid</ion-label>\n        </ion-segment-button>\n        <ion-segment-button value="sat">\n          <ion-label>Satellite</ion-label>\n        </ion-segment-button>\n      </ion-segment>,\n\n      // Segment in a toolbar\n      <ion-toolbar>\n        <ion-segment onIonChange={(ev) => this.segmentChanged(ev)}>\n          <ion-segment-button value="camera">\n            <ion-icon name="camera"></ion-icon>\n          </ion-segment-button>\n          <ion-segment-button value="bookmark">\n            <ion-icon name="bookmark"></ion-icon>\n          </ion-segment-button>\n        </ion-segment>\n      </ion-toolbar>,\n\n      // Segment with default selection\n      <ion-segment onIonChange={(ev) => this.segmentChanged(ev)} value="javascript">\n        <ion-segment-button value="python">\n          <ion-label>Python</ion-label>\n        </ion-segment-button>\n        <ion-segment-button value="javascript">\n          <ion-label>Javascript</ion-label>\n        </ion-segment-button>\n      </ion-segment>,\n    ];\n  }\n}\n'))),(0,l.kt)(r.Z,{value:"vue",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-html"},'<template>\n  \x3c!-- Default Segment --\x3e\n  <ion-segment @ionChange="segmentChanged($event)">\n    <ion-segment-button value="friends">\n      <ion-label>Friends</ion-label>\n    </ion-segment-button>\n    <ion-segment-button value="enemies">\n      <ion-label>Enemies</ion-label>\n    </ion-segment-button>\n  </ion-segment>\n\n  \x3c!-- Disabled Segment --\x3e\n  <ion-segment @ionChange="segmentChanged($event)" disabled value="sunny">\n    <ion-segment-button value="sunny">\n      <ion-label>Sunny</ion-label>\n    </ion-segment-button>\n    <ion-segment-button value="rainy">\n      <ion-label>Rainy</ion-label>\n    </ion-segment-button>\n  </ion-segment>\n\n  \x3c!-- Segment with anchors --\x3e\n  <ion-segment @ionChange="segmentChanged($event)">\n    <ion-segment-button value="dogs">\n      <ion-label>Dogs</ion-label>\n    </ion-segment-button>\n    <ion-segment-button value="cats">\n      <ion-label>Cats</ion-label>\n    </ion-segment-button>\n  </ion-segment>\n\n  \x3c!-- Scrollable Segment --\x3e\n  <ion-segment scrollable value="heart">\n    <ion-segment-button value="home">\n      <ion-icon name="home"></ion-icon>\n    </ion-segment-button>\n    <ion-segment-button value="heart">\n      <ion-icon name="heart"></ion-icon>\n    </ion-segment-button>\n    <ion-segment-button value="pin">\n      <ion-icon name="pin"></ion-icon>\n    </ion-segment-button>\n    <ion-segment-button value="star">\n      <ion-icon name="star"></ion-icon>\n    </ion-segment-button>\n    <ion-segment-button value="call">\n      <ion-icon name="call"></ion-icon>\n    </ion-segment-button>\n    <ion-segment-button value="globe">\n      <ion-icon name="globe"></ion-icon>\n    </ion-segment-button>\n    <ion-segment-button value="basket">\n      <ion-icon name="basket"></ion-icon>\n    </ion-segment-button>\n  </ion-segment>\n\n  \x3c!-- Segment with secondary color --\x3e\n  <ion-segment @ionChange="segmentChanged($event)" color="secondary">\n    <ion-segment-button value="standard">\n      <ion-label>Standard</ion-label>\n    </ion-segment-button>\n    <ion-segment-button value="hybrid">\n      <ion-label>Hybrid</ion-label>\n    </ion-segment-button>\n    <ion-segment-button value="sat">\n      <ion-label>Satellite</ion-label>\n    </ion-segment-button>\n  </ion-segment>\n\n  \x3c!-- Segment in a toolbar --\x3e\n  <ion-toolbar>\n    <ion-segment @ionChange="segmentChanged($event)">\n      <ion-segment-button value="camera">\n        <ion-icon name="camera"></ion-icon>\n      </ion-segment-button>\n      <ion-segment-button value="bookmark">\n        <ion-icon name="bookmark"></ion-icon>\n      </ion-segment-button>\n    </ion-segment>\n  </ion-toolbar>\n\n  \x3c!-- Segment with default selection --\x3e\n  <ion-segment @ionChange="segmentChanged($event)" value="javascript">\n    <ion-segment-button value="python">\n      <ion-label>Python</ion-label>\n    </ion-segment-button>\n    <ion-segment-button value="javascript">\n      <ion-label>Javascript</ion-label>\n    </ion-segment-button>\n  </ion-segment>\n</template>\n\n<script lang="ts">\n  import { IonSegment, IonSegmentButton, IonToolbar } from \'@ionic/vue\';\n  import { defineComponent } from \'vue\';\n\n  export default defineComponent({\n    components: { IonSegment, IonSegmentButton, IonToolbar },\n    methods: {\n      segmentChanged(ev: CustomEvent) {\n        console.log(\'Segment changed\', ev);\n      },\n    },\n  });\n<\/script>\n')))),(0,l.kt)("h2",{id:"properties"},"Properties"),(0,l.kt)("h3",{id:"color"},"color"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null}),(0,l.kt)("th",{parentName:"tr",align:null}))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"Description")),(0,l.kt)("td",{parentName:"tr",align:null},"The color to use from your application's color palette.",(0,l.kt)("br",null),"Default options are: ",(0,l.kt)("inlineCode",{parentName:"td"},'"primary"'),", ",(0,l.kt)("inlineCode",{parentName:"td"},'"secondary"'),", ",(0,l.kt)("inlineCode",{parentName:"td"},'"tertiary"'),", ",(0,l.kt)("inlineCode",{parentName:"td"},'"success"'),", ",(0,l.kt)("inlineCode",{parentName:"td"},'"warning"'),", ",(0,l.kt)("inlineCode",{parentName:"td"},'"danger"'),", ",(0,l.kt)("inlineCode",{parentName:"td"},'"light"'),", ",(0,l.kt)("inlineCode",{parentName:"td"},'"medium"'),", and ",(0,l.kt)("inlineCode",{parentName:"td"},'"dark"'),".",(0,l.kt)("br",null),"For more information on colors, see ",(0,l.kt)("a",{parentName:"td",href:"/docs/v5/theming/basics"},"theming"),".")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"Attribute")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"color"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"Type")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"string \\| undefined"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"Default")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"undefined"))))),(0,l.kt)("h3",{id:"disabled"},"disabled"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null}),(0,l.kt)("th",{parentName:"tr",align:null}))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"Description")),(0,l.kt)("td",{parentName:"tr",align:null},"If ",(0,l.kt)("inlineCode",{parentName:"td"},"true"),", the user cannot interact with the segment.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"Attribute")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"disabled"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"Type")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"boolean"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"Default")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"false"))))),(0,l.kt)("h3",{id:"mode"},"mode"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null}),(0,l.kt)("th",{parentName:"tr",align:null}))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"Description")),(0,l.kt)("td",{parentName:"tr",align:null},"The mode determines which platform styles to use.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"Attribute")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"mode"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"Type")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},'"ios" \\| "md"'))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"Default")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"undefined"))))),(0,l.kt)("h3",{id:"scrollable"},"scrollable"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null}),(0,l.kt)("th",{parentName:"tr",align:null}))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"Description")),(0,l.kt)("td",{parentName:"tr",align:null},"If ",(0,l.kt)("inlineCode",{parentName:"td"},"true"),", the segment buttons will overflow and the user can swipe to see them.",(0,l.kt)("br",null),"In addition, this will disable the gesture to drag the indicator between the buttons",(0,l.kt)("br",null),"in order to swipe to see hidden buttons.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"Attribute")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"scrollable"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"Type")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"boolean"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"Default")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"false"))))),(0,l.kt)("h3",{id:"swipegesture"},"swipeGesture"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null}),(0,l.kt)("th",{parentName:"tr",align:null}))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"Description")),(0,l.kt)("td",{parentName:"tr",align:null},"If ",(0,l.kt)("inlineCode",{parentName:"td"},"true"),", users will be able to swipe between segment buttons to activate them.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"Attribute")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"swipe-gesture"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"Type")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"boolean"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"Default")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"true"))))),(0,l.kt)("h3",{id:"value"},"value"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null}),(0,l.kt)("th",{parentName:"tr",align:null}))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"Description")),(0,l.kt)("td",{parentName:"tr",align:null},"the value of the segment.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"Attribute")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"value"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"Type")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"null \\| string \\| undefined"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"Default")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"undefined"))))),(0,l.kt)("h2",{id:"events"},"Events"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Name"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"ionChange")),(0,l.kt)("td",{parentName:"tr",align:null},"Emitted when the value property has changed and any")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"dragging pointer has been released from ",(0,l.kt)("inlineCode",{parentName:"td"},"ion-segment"),"."),(0,l.kt)("td",{parentName:"tr",align:null})))),(0,l.kt)("h2",{id:"css-custom-properties"},"CSS Custom Properties"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Name"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"--background")),(0,l.kt)("td",{parentName:"tr",align:null},"Background of the segment button")))))}c.isMDXComponent=!0}}]);