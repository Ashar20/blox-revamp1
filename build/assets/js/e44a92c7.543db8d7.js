"use strict";(self.webpackChunkionic_docs=self.webpackChunkionic_docs||[]).push([[56978],{3905:function(n,e,t){t.d(e,{Zo:function(){return m},kt:function(){return u}});var a=t(67294);function i(n,e,t){return e in n?Object.defineProperty(n,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):n[e]=t,n}function o(n,e){var t=Object.keys(n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(n);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),t.push.apply(t,a)}return t}function l(n){for(var e=1;e<arguments.length;e++){var t=null!=arguments[e]?arguments[e]:{};e%2?o(Object(t),!0).forEach((function(e){i(n,e,t[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(e){Object.defineProperty(n,e,Object.getOwnPropertyDescriptor(t,e))}))}return n}function s(n,e){if(null==n)return{};var t,a,i=function(n,e){if(null==n)return{};var t,a,i={},o=Object.keys(n);for(a=0;a<o.length;a++)t=o[a],e.indexOf(t)>=0||(i[t]=n[t]);return i}(n,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(n);for(a=0;a<o.length;a++)t=o[a],e.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(n,t)&&(i[t]=n[t])}return i}var r=a.createContext({}),d=function(n){var e=a.useContext(r),t=e;return n&&(t="function"==typeof n?n(e):l(l({},e),n)),t},m=function(n){var e=d(n.components);return a.createElement(r.Provider,{value:e},n.children)},p={inlineCode:"code",wrapper:function(n){var e=n.children;return a.createElement(a.Fragment,{},e)}},c=a.forwardRef((function(n,e){var t=n.components,i=n.mdxType,o=n.originalType,r=n.parentName,m=s(n,["components","mdxType","originalType","parentName"]),c=d(t),u=i,k=c["".concat(r,".").concat(u)]||c[u]||p[u]||o;return t?a.createElement(k,l(l({ref:e},m),{},{components:t})):a.createElement(k,l({ref:e},m))}));function u(n,e){var t=arguments,i=e&&e.mdxType;if("string"==typeof n||i){var o=t.length,l=new Array(o);l[0]=c;var s={};for(var r in e)hasOwnProperty.call(e,r)&&(s[r]=e[r]);s.originalType=n,s.mdxType="string"==typeof n?n:i,l[1]=s;for(var d=2;d<o;d++)l[d]=t[d];return a.createElement.apply(null,l)}return a.createElement.apply(null,t)}c.displayName="MDXCreateElement"},58215:function(n,e,t){var a=t(67294);e.Z=function(n){var e=n.children,t=n.hidden,i=n.className;return a.createElement("div",{role:"tabpanel",hidden:t,className:i},e)}},26396:function(n,e,t){t.d(e,{Z:function(){return c}});var a=t(87462),i=t(67294),o=t(72389),l=t(79443);var s=function(){var n=(0,i.useContext)(l.Z);if(null==n)throw new Error('"useUserPreferencesContext" is used outside of "Layout" component.');return n},r=t(89521),d=t(86010),m="tabItem_1uMI";function p(n){var e,t,a,o=n.lazy,l=n.block,p=n.defaultValue,c=n.values,u=n.groupId,k=n.className,h=i.Children.map(n.children,(function(n){if((0,i.isValidElement)(n)&&void 0!==n.props.value)return n;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof n.type?n.type:n.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),x=null!=c?c:h.map((function(n){var e=n.props;return{value:e.value,label:e.label}})),b=(0,r.lx)(x,(function(n,e){return n.value===e.value}));if(b.length>0)throw new Error('Docusaurus error: Duplicate values "'+b.map((function(n){return n.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var v=null===p?p:null!=(e=null!=p?p:null==(t=h.find((function(n){return n.props.default})))?void 0:t.props.value)?e:null==(a=h[0])?void 0:a.props.value;if(null!==v&&!x.some((function(n){return n.value===v})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+v+'" but none of its children has the corresponding value. Available values are: '+x.map((function(n){return n.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var g=s(),y=g.tabGroupChoices,f=g.setTabGroupChoices,I=(0,i.useState)(v),w=I[0],N=I[1],T=[],S=(0,r.o5)().blockElementScrollPositionUntilNextRender;if(null!=u){var L=y[u];null!=L&&L!==w&&x.some((function(n){return n.value===L}))&&N(L)}var C=function(n){var e=n.currentTarget,t=T.indexOf(e),a=x[t].value;a!==w&&(S(e),N(a),null!=u&&f(u,a))},E=function(n){var e,t=null;switch(n.key){case"ArrowRight":var a=T.indexOf(n.currentTarget)+1;t=T[a]||T[0];break;case"ArrowLeft":var i=T.indexOf(n.currentTarget)-1;t=T[i]||T[T.length-1]}null==(e=t)||e.focus()};return i.createElement("div",{className:"tabs-container"},i.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,d.Z)("tabs",{"tabs--block":l},k)},x.map((function(n){var e=n.value,t=n.label;return i.createElement("li",{role:"tab",tabIndex:w===e?0:-1,"aria-selected":w===e,className:(0,d.Z)("tabs__item",m,{"tabs__item--active":w===e}),key:e,ref:function(n){return T.push(n)},onKeyDown:E,onFocus:C,onClick:C},null!=t?t:e)}))),o?(0,i.cloneElement)(h.filter((function(n){return n.props.value===w}))[0],{className:"margin-vert--md"}):i.createElement("div",{className:"margin-vert--md"},h.map((function(n,e){return(0,i.cloneElement)(n,{key:e,hidden:n.props.value!==w})}))))}function c(n){var e=(0,o.Z)();return i.createElement(p,(0,a.Z)({key:String(e)},n))}},18121:function(n,e,t){t.r(e),t.d(e,{frontMatter:function(){return d},contentTitle:function(){return m},metadata:function(){return p},toc:function(){return c},default:function(){return k}});var a=t(87462),i=t(63366),o=(t(67294),t(3905)),l=t(26396),s=t(58215),r=["components"],d={title:"Skeleton Text | Skeleton Loading Placeholder & Framework for Text",description:"ion-skeleton-text is a component for rendering placeholder content. The element will render a gray block at the specified width as a loading text framework.",sidebar_label:"ion-skeleton-text",demoUrl:"/docs/demos/api/skeleton-text/index.html",demoSourceUrl:"https://github.com/ionic-team/ionic-docs/tree/main/static/demos/api/skeleton-text/index.html"},m="ion-skeleton-text",p={unversionedId:"api/skeleton-text",id:"version-v5/api/skeleton-text",isDocsHomePage:!1,title:"Skeleton Text | Skeleton Loading Placeholder & Framework for Text",description:"ion-skeleton-text is a component for rendering placeholder content. The element will render a gray block at the specified width as a loading text framework.",source:"@site/versioned_docs/version-v5/api/skeleton-text.md",sourceDirName:"api",slug:"/api/skeleton-text",permalink:"/docs/v5/api/skeleton-text",editUrl:"https://github.com/ionic-team/ionic-docs/tree/main/docs/api/skeleton-text.md",tags:[],version:"v5",frontMatter:{title:"Skeleton Text | Skeleton Loading Placeholder & Framework for Text",description:"ion-skeleton-text is a component for rendering placeholder content. The element will render a gray block at the specified width as a loading text framework.",sidebar_label:"ion-skeleton-text",demoUrl:"/docs/demos/api/skeleton-text/index.html",demoSourceUrl:"https://github.com/ionic-team/ionic-docs/tree/main/static/demos/api/skeleton-text/index.html"},sidebar:"version-v5/api",previous:{title:"ion-progress-bar",permalink:"/docs/v5/api/progress-bar"},next:{title:"ion-spinner",permalink:"/docs/v5/api/spinner"}},c=[{value:"Usage",id:"usage",children:[],level:2},{value:"Properties",id:"properties",children:[{value:"animated",id:"animated",children:[],level:3}],level:2},{value:"CSS Custom Properties",id:"css-custom-properties",children:[],level:2}],u={toc:c};function k(n){var e=n.components,t=(0,i.Z)(n,r);return(0,o.kt)("wrapper",(0,a.Z)({},u,t,{components:e,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"ion-skeleton-text"},"ion-skeleton-text"),(0,o.kt)("p",null,"Skeleton Text is a component for rendering placeholder content. The element will render a gray block at the specified width."),(0,o.kt)("h2",{id:"usage"},"Usage"),(0,o.kt)(l.Z,{groupId:"framework",defaultValue:"angular",values:[{value:"angular",label:"Angular"},{value:"javascript",label:"Javascript"},{value:"react",label:"React"},{value:"stencil",label:"Stencil"},{value:"vue",label:"Vue"}],mdxType:"Tabs"},(0,o.kt)(s.Z,{value:"angular",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-html"},'\x3c!-- Data to display after skeleton screen --\x3e\n<div *ngIf="data">\n  <div class="ion-padding">\n    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla ac eros est. Cras iaculis pulvinar arcu non vehicula.\n    Fusce at quam a eros malesuada condimentum. Aliquam tincidunt tincidunt vehicula.\n  </div>\n\n  <ion-list>\n    <ion-list-header>\n      <ion-label> Data </ion-label>\n    </ion-list-header>\n    <ion-item>\n      <ion-avatar slot="start">\n        <img src="./avatar.svg" />\n      </ion-avatar>\n      <ion-label>\n        <h3>{{ data.heading }}</h3>\n        <p>{{ data.para1 }}</p>\n        <p>{{ data.para2 }}</p>\n      </ion-label>\n    </ion-item>\n    <ion-item>\n      <ion-thumbnail slot="start">\n        <img src="./thumbnail.svg" />\n      </ion-thumbnail>\n      <ion-label>\n        <h3>{{ data.heading }}</h3>\n        <p>{{ data.para1 }}</p>\n        <p>{{ data.para2 }}</p>\n      </ion-label>\n    </ion-item>\n    <ion-item>\n      <ion-icon name="call" slot="start"></ion-icon>\n      <ion-label>\n        <h3>{{ data.heading }}</h3>\n        <p>{{ data.para1 }}</p>\n        <p>{{ data.para2 }}</p>\n      </ion-label>\n    </ion-item>\n  </ion-list>\n</div>\n\n\x3c!-- Skeleton screen --\x3e\n<div *ngIf="!data">\n  <div class="ion-padding custom-skeleton">\n    <ion-skeleton-text animated style="width: 60%"></ion-skeleton-text>\n    <ion-skeleton-text animated></ion-skeleton-text>\n    <ion-skeleton-text animated style="width: 88%"></ion-skeleton-text>\n    <ion-skeleton-text animated style="width: 70%"></ion-skeleton-text>\n    <ion-skeleton-text animated style="width: 60%"></ion-skeleton-text>\n  </div>\n\n  <ion-list>\n    <ion-list-header>\n      <ion-label>\n        <ion-skeleton-text animated style="width: 20%"></ion-skeleton-text>\n      </ion-label>\n    </ion-list-header>\n    <ion-item>\n      <ion-avatar slot="start">\n        <ion-skeleton-text animated></ion-skeleton-text>\n      </ion-avatar>\n      <ion-label>\n        <h3>\n          <ion-skeleton-text animated style="width: 50%"></ion-skeleton-text>\n        </h3>\n        <p>\n          <ion-skeleton-text animated style="width: 80%"></ion-skeleton-text>\n        </p>\n        <p>\n          <ion-skeleton-text animated style="width: 60%"></ion-skeleton-text>\n        </p>\n      </ion-label>\n    </ion-item>\n    <ion-item>\n      <ion-thumbnail slot="start">\n        <ion-skeleton-text animated></ion-skeleton-text>\n      </ion-thumbnail>\n      <ion-label>\n        <h3>\n          <ion-skeleton-text animated style="width: 50%"></ion-skeleton-text>\n        </h3>\n        <p>\n          <ion-skeleton-text animated style="width: 80%"></ion-skeleton-text>\n        </p>\n        <p>\n          <ion-skeleton-text animated style="width: 60%"></ion-skeleton-text>\n        </p>\n      </ion-label>\n    </ion-item>\n    <ion-item>\n      <ion-skeleton-text animated style="width: 27px; height: 27px" slot="start"></ion-skeleton-text>\n      <ion-label>\n        <h3>\n          <ion-skeleton-text animated style="width: 50%"></ion-skeleton-text>\n        </h3>\n        <p>\n          <ion-skeleton-text animated style="width: 80%"></ion-skeleton-text>\n        </p>\n        <p>\n          <ion-skeleton-text animated style="width: 60%"></ion-skeleton-text>\n        </p>\n      </ion-label>\n    </ion-item>\n  </ion-list>\n</div>\n')),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-css"},"/* Custom Skeleton Line Height and Margin */\n.custom-skeleton ion-skeleton-text {\n  line-height: 13px;\n}\n\n.custom-skeleton ion-skeleton-text:last-child {\n  margin-bottom: 5px;\n}\n")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx"},"import { Component } from '@angular/core';\n\n@Component({\n  selector: 'skeleton-text-example',\n  templateUrl: 'skeleton-text-example.html',\n  styleUrls: ['./skeleton-text-example.css'],\n})\nexport class SkeletonTextExample {\n  data: any;\n\n  constructor() {}\n\n  ionViewWillEnter() {\n    setTimeout(() => {\n      this.data = {\n        heading: 'Normal text',\n        para1: 'Lorem ipsum dolor sit amet, consectetur',\n        para2: 'adipiscing elit.',\n      };\n    }, 5000);\n  }\n}\n"))),(0,o.kt)(s.Z,{value:"javascript",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-html"},'\x3c!-- Data to display after skeleton screen --\x3e\n<div id="data">\n  <div class="ion-padding">\n    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla ac eros est. Cras iaculis pulvinar arcu non vehicula.\n    Fusce at quam a eros malesuada condimentum. Aliquam tincidunt tincidunt vehicula.\n  </div>\n\n  <ion-list>\n    <ion-list-header>\n      <ion-label> Data </ion-label>\n    </ion-list-header>\n    <ion-item>\n      <ion-avatar slot="start">\n        <img src="./avatar.svg" />\n      </ion-avatar>\n      <ion-label>\n        <h3>Normal text</h3>\n        <p>Lorem ipsum dolor sit amet, consectetur</p>\n        <p>adipiscing elit.</p>\n      </ion-label>\n    </ion-item>\n    <ion-item>\n      <ion-thumbnail slot="start">\n        <img src="./thumbnail.svg" />\n      </ion-thumbnail>\n      <ion-label>\n        <h3>Normal text</h3>\n        <p>Lorem ipsum dolor sit amet, consectetur</p>\n        <p>adipiscing elit.</p>\n      </ion-label>\n    </ion-item>\n    <ion-item>\n      <ion-icon name="call" slot="start"></ion-icon>\n      <ion-label>\n        <h3>Normal text</h3>\n        <p>Lorem ipsum dolor sit amet, consectetur</p>\n        <p>adipiscing elit.</p>\n      </ion-label>\n    </ion-item>\n  </ion-list>\n</div>\n\n\x3c!-- Skeleton screen --\x3e\n<div id="skeleton">\n  <div class="ion-padding custom-skeleton">\n    <ion-skeleton-text animated style="width: 60%"></ion-skeleton-text>\n    <ion-skeleton-text animated></ion-skeleton-text>\n    <ion-skeleton-text animated style="width: 88%"></ion-skeleton-text>\n    <ion-skeleton-text animated style="width: 70%"></ion-skeleton-text>\n    <ion-skeleton-text animated style="width: 60%"></ion-skeleton-text>\n  </div>\n\n  <ion-list>\n    <ion-list-header>\n      <ion-label>\n        <ion-skeleton-text animated style="width: 20%"></ion-skeleton-text>\n      </ion-label>\n    </ion-list-header>\n    <ion-item>\n      <ion-avatar slot="start">\n        <ion-skeleton-text animated></ion-skeleton-text>\n      </ion-avatar>\n      <ion-label>\n        <h3>\n          <ion-skeleton-text animated style="width: 50%"></ion-skeleton-text>\n        </h3>\n        <p>\n          <ion-skeleton-text animated style="width: 80%"></ion-skeleton-text>\n        </p>\n        <p>\n          <ion-skeleton-text animated style="width: 60%"></ion-skeleton-text>\n        </p>\n      </ion-label>\n    </ion-item>\n    <ion-item>\n      <ion-thumbnail slot="start">\n        <ion-skeleton-text animated></ion-skeleton-text>\n      </ion-thumbnail>\n      <ion-label>\n        <h3>\n          <ion-skeleton-text animated style="width: 50%"></ion-skeleton-text>\n        </h3>\n        <p>\n          <ion-skeleton-text animated style="width: 80%"></ion-skeleton-text>\n        </p>\n        <p>\n          <ion-skeleton-text animated style="width: 60%"></ion-skeleton-text>\n        </p>\n      </ion-label>\n    </ion-item>\n    <ion-item>\n      <ion-skeleton-text animated style="width: 27px; height: 27px" slot="start"></ion-skeleton-text>\n      <ion-label>\n        <h3>\n          <ion-skeleton-text animated style="width: 50%"></ion-skeleton-text>\n        </h3>\n        <p>\n          <ion-skeleton-text animated style="width: 80%"></ion-skeleton-text>\n        </p>\n        <p>\n          <ion-skeleton-text animated style="width: 60%"></ion-skeleton-text>\n        </p>\n      </ion-label>\n    </ion-item>\n  </ion-list>\n</div>\n')),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-css"},"#data {\n  display: none;\n}\n\n/* Custom Skeleton Line Height and Margin */\n.custom-skeleton ion-skeleton-text {\n  line-height: 13px;\n}\n\n.custom-skeleton ion-skeleton-text:last-child {\n  margin-bottom: 5px;\n}\n")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},"function onLoad() {\n  const skeletonEl = document.getElementById('skeleton');\n  const dataEl = document.getElementById('data');\n\n  setTimeout(() => {\n    skeletonEl.style.display = 'none';\n    dataEl.style.display = 'block';\n  }, 5000);\n}\n"))),(0,o.kt)(s.Z,{value:"react",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx"},"import React, { useState } from 'react';\nimport {\n  IonContent,\n  IonItem,\n  IonAvatar,\n  IonLabel,\n  IonSkeletonText,\n  IonListHeader,\n  IonIcon,\n  IonThumbnail,\n  IonList,\n} from '@ionic/react';\nimport { call } from 'ionicons/icons';\n\nimport './SkeletonTextExample.css';\n\nexport const SkeletonTextExample: React.FC = () => {\n  const [data, setData] = useState();\n\n  setTimeout(() => {\n    setData({\n      heading: 'Normal text',\n      para1: 'Lorem ipsum dolor sit amet, consectetur',\n      para2: 'adipiscing elit.',\n    });\n  }, 5000);\n\n  return (\n    <IonContent>\n      {data ? (\n        <>\n          <div className=\"ion-padding\">\n            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla ac eros est. Cras iaculis pulvinar arcu non\n            vehicula. Fusce at quam a eros malesuada condimentum. Aliquam tincidunt tincidunt vehicula.\n          </div>\n\n          <IonList>\n            <IonListHeader>\n              <IonLabel>Data</IonLabel>\n            </IonListHeader>\n            <IonItem>\n              <IonAvatar slot=\"start\">\n                <img src=\"./avatar.svg\" />\n              </IonAvatar>\n              <IonLabel>\n                <h3>{data.heading}</h3>\n                <p>{data.para1}</p>\n                <p>{data.para2}</p>\n              </IonLabel>\n            </IonItem>\n            <IonItem>\n              <IonThumbnail slot=\"start\">\n                <img src=\"./thumbnail.svg\" />\n              </IonThumbnail>\n              <IonLabel>\n                <h3>{data.heading}</h3>\n                <p>{data.para1}</p>\n                <p>{data.para2}</p>\n              </IonLabel>\n            </IonItem>\n            <IonItem>\n              <IonIcon icon={call} slot=\"start\" />\n              <IonLabel>\n                <h3>{data.heading}</h3>\n                <p>{data.para1}</p>\n                <p>{data.para2}</p>\n              </IonLabel>\n            </IonItem>\n          </IonList>\n        </>\n      ) : (\n        <>\n          <div className=\"ion-padding custom-skeleton\">\n            <IonSkeletonText animated style={{ width: '60%' }} />\n            <IonSkeletonText animated />\n            <IonSkeletonText animated style={{ width: '88%' }} />\n            <IonSkeletonText animated style={{ width: '70%' }} />\n            <IonSkeletonText animated style={{ width: '60%' }} />\n          </div>\n\n          <IonList>\n            <IonListHeader>\n              <IonLabel>\n                <IonSkeletonText animated style={{ width: '20%' }} />\n              </IonLabel>\n            </IonListHeader>\n            <IonItem>\n              <IonAvatar slot=\"start\">\n                <IonSkeletonText animated />\n              </IonAvatar>\n              <IonLabel>\n                <h3>\n                  <IonSkeletonText animated style={{ width: '50%' }} />\n                </h3>\n                <p>\n                  <IonSkeletonText animated style={{ width: '80%' }} />\n                </p>\n                <p>\n                  <IonSkeletonText animated style={{ width: '60%' }} />\n                </p>\n              </IonLabel>\n            </IonItem>\n            <IonItem>\n              <IonThumbnail slot=\"start\">\n                <IonSkeletonText animated />\n              </IonThumbnail>\n              <IonLabel>\n                <h3>\n                  <IonSkeletonText animated style={{ width: '50%' }} />\n                </h3>\n                <p>\n                  <IonSkeletonText animated style={{ width: '80%' }} />\n                </p>\n                <p>\n                  <IonSkeletonText animated style={{ width: '60%' }} />\n                </p>\n              </IonLabel>\n            </IonItem>\n            <IonItem>\n              <IonSkeletonText animated style={{ width: '27px', height: '27px' }} slot=\"start\" />\n              <IonLabel>\n                <h3>\n                  <IonSkeletonText animated style={{ width: '50%' }} />\n                </h3>\n                <p>\n                  <IonSkeletonText animated style={{ width: '80%' }} />\n                </p>\n                <p>\n                  <IonSkeletonText animated style={{ width: '60%' }} />\n                </p>\n              </IonLabel>\n            </IonItem>\n          </IonList>\n        </>\n      )}\n    </IonContent>\n  );\n};\n")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-css"},"/* Custom Skeleton Line Height and Margin */\n.custom-skeleton ion-skeleton-text {\n  line-height: 13px;\n}\n\n.custom-skeleton ion-skeleton-text:last-child {\n  margin-bottom: 5px;\n}\n"))),(0,o.kt)(s.Z,{value:"stencil",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx"},"import { Component, State, h } from '@stencil/core';\n\n@Component({\n  tag: 'skeleton-text-example',\n  styleUrl: 'skeleton-text-example.css',\n})\nexport class SkeletonTextExample {\n  @State() data: any;\n\n  componentWillLoad() {\n    // Data will show after 5 seconds\n    setTimeout(() => {\n      this.data = {\n        heading: 'Normal text',\n        para1: 'Lorem ipsum dolor sit amet, consectetur',\n        para2: 'adipiscing elit.',\n      };\n    }, 5000);\n  }\n\n  // Render skeleton screen when there is no data\n  renderSkeletonScreen() {\n    return [\n      <ion-content>\n        <div class=\"ion-padding custom-skeleton\">\n          <ion-skeleton-text animated style={{ width: '60%' }}></ion-skeleton-text>\n          <ion-skeleton-text animated></ion-skeleton-text>\n          <ion-skeleton-text animated style={{ width: '88%' }}></ion-skeleton-text>\n          <ion-skeleton-text animated style={{ width: '70%' }}></ion-skeleton-text>\n          <ion-skeleton-text animated style={{ width: '60%' }}></ion-skeleton-text>\n        </div>\n\n        <ion-list>\n          <ion-list-header>\n            <ion-label>\n              <ion-skeleton-text animated style={{ width: '20%' }}></ion-skeleton-text>\n            </ion-label>\n          </ion-list-header>\n          <ion-item>\n            <ion-avatar slot=\"start\">\n              <ion-skeleton-text animated></ion-skeleton-text>\n            </ion-avatar>\n            <ion-label>\n              <h3>\n                <ion-skeleton-text animated style={{ width: '50%' }}></ion-skeleton-text>\n              </h3>\n              <p>\n                <ion-skeleton-text animated style={{ width: '80%' }}></ion-skeleton-text>\n              </p>\n              <p>\n                <ion-skeleton-text animated style={{ width: '60%' }}></ion-skeleton-text>\n              </p>\n            </ion-label>\n          </ion-item>\n          <ion-item>\n            <ion-thumbnail slot=\"start\">\n              <ion-skeleton-text animated></ion-skeleton-text>\n            </ion-thumbnail>\n            <ion-label>\n              <h3>\n                <ion-skeleton-text animated style={{ width: '50%' }}></ion-skeleton-text>\n              </h3>\n              <p>\n                <ion-skeleton-text animated style={{ width: '80%' }}></ion-skeleton-text>\n              </p>\n              <p>\n                <ion-skeleton-text animated style={{ width: '60%' }}></ion-skeleton-text>\n              </p>\n            </ion-label>\n          </ion-item>\n          <ion-item>\n            <ion-skeleton-text animated style={{ width: '27p', height: '27px' }} slot=\"start\"></ion-skeleton-text>\n            <ion-label>\n              <h3>\n                <ion-skeleton-text animated style={{ width: '50%' }}></ion-skeleton-text>\n              </h3>\n              <p>\n                <ion-skeleton-text animated style={{ width: '80%' }}></ion-skeleton-text>\n              </p>\n              <p>\n                <ion-skeleton-text animated style={{ width: '60%' }}></ion-skeleton-text>\n              </p>\n            </ion-label>\n          </ion-item>\n        </ion-list>\n      </ion-content>,\n    ];\n  }\n\n  // Render the elements with data\n  renderDataScreen() {\n    return [\n      <ion-content>\n        <div class=\"ion-padding\">\n          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla ac eros est. Cras iaculis pulvinar arcu non\n          vehicula. Fusce at quam a eros malesuada condimentum. Aliquam tincidunt tincidunt vehicula.\n        </div>\n\n        <ion-list>\n          <ion-list-header>\n            <ion-label>Data</ion-label>\n          </ion-list-header>\n          <ion-item>\n            <ion-avatar slot=\"start\">\n              <img src=\"./avatar.svg\" />\n            </ion-avatar>\n            <ion-label>\n              <h3>{this.data.heading}</h3>\n              <p>{this.data.para1}</p>\n              <p>{this.data.para2}</p>\n            </ion-label>\n          </ion-item>\n          <ion-item>\n            <ion-thumbnail slot=\"start\">\n              <img src=\"./thumbnail.svg\" />\n            </ion-thumbnail>\n            <ion-label>\n              <h3>{this.data.heading}</h3>\n              <p>{this.data.para1}</p>\n              <p>{this.data.para2}</p>\n            </ion-label>\n          </ion-item>\n          <ion-item>\n            <ion-icon name=\"call\" slot=\"start\"></ion-icon>\n            <ion-label>\n              <h3>{this.data.heading}</h3>\n              <p>{this.data.para1}</p>\n              <p>{this.data.para2}</p>\n            </ion-label>\n          </ion-item>\n        </ion-list>\n      </ion-content>,\n    ];\n  }\n\n  render() {\n    if (this.data) {\n      return this.renderDataScreen();\n    } else {\n      return this.renderSkeletonScreen();\n    }\n  }\n}\n")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-css"},"/* Custom Skeleton Line Height and Margin */\n.custom-skeleton ion-skeleton-text {\n  line-height: 13px;\n}\n\n.custom-skeleton ion-skeleton-text:last-child {\n  margin-bottom: 5px;\n}\n"))),(0,o.kt)(s.Z,{value:"vue",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-html"},'<template>\n  \x3c!-- Data to display after skeleton screen --\x3e\n  <div v-if="data">\n    <div class="ion-padding">\n      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla ac eros est. Cras iaculis pulvinar arcu non\n      vehicula. Fusce at quam a eros malesuada condimentum. Aliquam tincidunt tincidunt vehicula.\n    </div>\n\n    <ion-list>\n      <ion-list-header>\n        <ion-label> Data </ion-label>\n      </ion-list-header>\n      <ion-item>\n        <ion-avatar slot="start">\n          <img src="./avatar.svg" />\n        </ion-avatar>\n        <ion-label>\n          <h3>{{ data.heading }}</h3>\n          <p>{{ data.para1 }}</p>\n          <p>{{ data.para2 }}</p>\n        </ion-label>\n      </ion-item>\n      <ion-item>\n        <ion-thumbnail slot="start">\n          <img src="./thumbnail.svg" />\n        </ion-thumbnail>\n        <ion-label>\n          <h3>{{ data.heading }}</h3>\n          <p>{{ data.para1 }}</p>\n          <p>{{ data.para2 }}</p>\n        </ion-label>\n      </ion-item>\n      <ion-item>\n        <ion-icon :icon="call" slot="start"></ion-icon>\n        <ion-label>\n          <h3>{{ data.heading }}</h3>\n          <p>{{ data.para1 }}</p>\n          <p>{{ data.para2 }}</p>\n        </ion-label>\n      </ion-item>\n    </ion-list>\n  </div>\n\n  \x3c!-- Skeleton screen --\x3e\n  <div v-if="!data">\n    <div class="ion-padding custom-skeleton">\n      <ion-skeleton-text animated style="width: 60%"></ion-skeleton-text>\n      <ion-skeleton-text animated></ion-skeleton-text>\n      <ion-skeleton-text animated style="width: 88%"></ion-skeleton-text>\n      <ion-skeleton-text animated style="width: 70%"></ion-skeleton-text>\n      <ion-skeleton-text animated style="width: 60%"></ion-skeleton-text>\n    </div>\n\n    <ion-list>\n      <ion-list-header>\n        <ion-label>\n          <ion-skeleton-text animated style="width: 20%"></ion-skeleton-text>\n        </ion-label>\n      </ion-list-header>\n      <ion-item>\n        <ion-avatar slot="start">\n          <ion-skeleton-text animated></ion-skeleton-text>\n        </ion-avatar>\n        <ion-label>\n          <h3>\n            <ion-skeleton-text animated style="width: 50%"></ion-skeleton-text>\n          </h3>\n          <p>\n            <ion-skeleton-text animated style="width: 80%"></ion-skeleton-text>\n          </p>\n          <p>\n            <ion-skeleton-text animated style="width: 60%"></ion-skeleton-text>\n          </p>\n        </ion-label>\n      </ion-item>\n      <ion-item>\n        <ion-thumbnail slot="start">\n          <ion-skeleton-text animated></ion-skeleton-text>\n        </ion-thumbnail>\n        <ion-label>\n          <h3>\n            <ion-skeleton-text animated style="width: 50%"></ion-skeleton-text>\n          </h3>\n          <p>\n            <ion-skeleton-text animated style="width: 80%"></ion-skeleton-text>\n          </p>\n          <p>\n            <ion-skeleton-text animated style="width: 60%"></ion-skeleton-text>\n          </p>\n        </ion-label>\n      </ion-item>\n      <ion-item>\n        <ion-skeleton-text animated style="width: 27px; height: 27px" slot="start"></ion-skeleton-text>\n        <ion-label>\n          <h3>\n            <ion-skeleton-text animated style="width: 50%"></ion-skeleton-text>\n          </h3>\n          <p>\n            <ion-skeleton-text animated style="width: 80%"></ion-skeleton-text>\n          </p>\n          <p>\n            <ion-skeleton-text animated style="width: 60%"></ion-skeleton-text>\n          </p>\n        </ion-label>\n      </ion-item>\n    </ion-list>\n  </div>\n</template>\n\n<style>\n  /* Custom Skeleton Line Height and Margin */\n  .custom-skeleton ion-skeleton-text {\n    line-height: 13px;\n  }\n\n  .custom-skeleton ion-skeleton-text:last-child {\n    margin-bottom: 5px;\n  }\n</style>\n\n<script>\n  import {\n    IonAvatar,\n    IonIcon,\n    IonItem,\n    IonLabel,\n    IonList,\n    IonListHeader,\n    IonSkeletonText,\n    IonThumbnail,\n  } from \'@ionic/vue\';\n  import { call } from \'ionicons/icons\';\n  import { defineComponent, ref } from \'vue\';\n\n  export default defineComponent({\n    components: {\n      IonAvatar,\n      IonIcon,\n      IonItem,\n      IonLabel,\n      IonList,\n      IonListHeader,\n      IonSkeletonText,\n      IonThumbnail,\n    },\n    setup() {\n      const data = ref();\n\n      setTimeout(() => {\n        data.value = {\n          heading: \'Normal text\',\n          para1: \'Lorem ipsum dolor sit amet, consectetur\',\n          para2: \'adipiscing elit.\',\n        };\n      }, 5000);\n\n      return { data };\n    },\n  });\n<\/script>\n')))),(0,o.kt)("h2",{id:"properties"},"Properties"),(0,o.kt)("h3",{id:"animated"},"animated"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null}),(0,o.kt)("th",{parentName:"tr",align:null}))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("strong",{parentName:"td"},"Description")),(0,o.kt)("td",{parentName:"tr",align:null},"If ",(0,o.kt)("inlineCode",{parentName:"td"},"true"),", the skeleton text will animate.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("strong",{parentName:"td"},"Attribute")),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"animated"))),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("strong",{parentName:"td"},"Type")),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"boolean"))),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("strong",{parentName:"td"},"Default")),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"false"))))),(0,o.kt)("h2",{id:"css-custom-properties"},"CSS Custom Properties"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Name"),(0,o.kt)("th",{parentName:"tr",align:null},"Description"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"--background")),(0,o.kt)("td",{parentName:"tr",align:null},"Background of the skeleton text")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"--background-rgb")),(0,o.kt)("td",{parentName:"tr",align:null},"Background of the skeleton text in rgb format")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"--border-radius")),(0,o.kt)("td",{parentName:"tr",align:null},"Border radius of the skeleton text")))))}k.isMDXComponent=!0}}]);