"use strict";(self.webpackChunkionic_docs=self.webpackChunkionic_docs||[]).push([[75110],{58215:function(e,t,n){var r=n(67294);t.Z=function(e){var t=e.children,n=e.hidden,a=e.className;return r.createElement("div",{role:"tabpanel",hidden:n,className:a},t)}},26396:function(e,t,n){n.d(t,{Z:function(){return m}});var r=n(87462),a=n(67294),o=n(72389),i=n(79443);var l=function(){var e=(0,a.useContext)(i.Z);if(null==e)throw new Error('"useUserPreferencesContext" is used outside of "Layout" component.');return e},c=n(89521),s=n(86010),u="tabItem_1uMI";function d(e){var t,n,r,o=e.lazy,i=e.block,d=e.defaultValue,m=e.values,p=e.groupId,f=e.className,v=a.Children.map(e.children,(function(e){if((0,a.isValidElement)(e)&&void 0!==e.props.value)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),h=null!=m?m:v.map((function(e){var t=e.props;return{value:t.value,label:t.label}})),k=(0,c.lx)(h,(function(e,t){return e.value===t.value}));if(k.length>0)throw new Error('Docusaurus error: Duplicate values "'+k.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var g=null===d?d:null!=(t=null!=d?d:null==(n=v.find((function(e){return e.props.default})))?void 0:n.props.value)?t:null==(r=v[0])?void 0:r.props.value;if(null!==g&&!h.some((function(e){return e.value===g})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+g+'" but none of its children has the corresponding value. Available values are: '+h.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var b=l(),w=b.tabGroupChoices,N=b.setTabGroupChoices,y=(0,a.useState)(g),C=y[0],E=y[1],I=[],Z=(0,c.o5)().blockElementScrollPositionUntilNextRender;if(null!=p){var x=w[p];null!=x&&x!==C&&h.some((function(e){return e.value===x}))&&E(x)}var T=function(e){var t=e.currentTarget,n=I.indexOf(t),r=h[n].value;r!==C&&(Z(t),E(r),null!=p&&N(p,r))},P=function(e){var t,n=null;switch(e.key){case"ArrowRight":var r=I.indexOf(e.currentTarget)+1;n=I[r]||I[0];break;case"ArrowLeft":var a=I.indexOf(e.currentTarget)-1;n=I[a]||I[I.length-1]}null==(t=n)||t.focus()};return a.createElement("div",{className:"tabs-container"},a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,s.Z)("tabs",{"tabs--block":i},f)},h.map((function(e){var t=e.value,n=e.label;return a.createElement("li",{role:"tab",tabIndex:C===t?0:-1,"aria-selected":C===t,className:(0,s.Z)("tabs__item",u,{"tabs__item--active":C===t}),key:t,ref:function(e){return I.push(e)},onKeyDown:P,onFocus:T,onClick:T},null!=n?n:t)}))),o?(0,a.cloneElement)(v.filter((function(e){return e.props.value===C}))[0],{className:"margin-vert--md"}):a.createElement("div",{className:"margin-vert--md"},v.map((function(e,t){return(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==C})}))))}function m(e){var t=(0,o.Z)();return a.createElement(d,(0,r.Z)({key:String(t)},e))}},47758:function(e,t,n){n.d(t,{Z:function(){return c}});var r=n(67294),a=n(86010),o=n(39960),i=n(44996),l="card_3DNo";var c=function(e){var t,n=void 0===e.href,c=void 0!==e.href&&/^http/.test(e.href),s="undefined"===e.header?null:r.createElement("header",{className:"Card-header"},e.header),u=e.hoverIcon||e.icon,d=r.createElement(r.Fragment,null,e.img&&r.createElement("img",{src:(0,i.Z)(e.img),className:"Card-image"}),r.createElement("div",{className:"Card-container"},(e.icon||u)&&r.createElement("div",{className:"Card-icon-row"},e.icon&&r.createElement("img",{src:(0,i.Z)(e.icon),className:"Card-icon Card-icon-default"}),u&&r.createElement("img",{src:(0,i.Z)(u),className:"Card-icon Card-icon-hover"})),e.ionicon&&r.createElement("ion-icon",{name:e.ionicon,className:"Card-ionicon"}),e.iconset&&r.createElement("div",{className:"Card-iconset__container"},e.iconset.split(",").map((function(t,n){return r.createElement("img",{src:(0,i.Z)(t),className:"Card-icon "+(n===e.activeIndex?"Card-icon-active":""),"data-index":n,key:n})}))),e.header&&s,r.createElement("div",{className:"Card-content"},e.children))),m=(0,a.Z)(((t={"Card-with-image":void 0!==e.img,"Card-without-image":void 0===e.img,"Card-size-lg":"lg"===e.size})[e.className]=e.className,t));return n?r.createElement("docs-card",{class:m},r.createElement("div",{className:(0,a.Z)(l,"docs-card")},d)):c?r.createElement("docs-card",{class:m},r.createElement("a",{className:(0,a.Z)(l,"docs-card"),href:e.href,target:"_blank"},d)):r.createElement("docs-card",{class:m},r.createElement(o.default,{to:e.href,className:(0,a.Z)(l,"docs-card")},d))}},88694:function(e,t,n){n.d(t,{Z:function(){return u}});var r=n(87462),a=n(63366),o=n(86010),i=n(67294),l="docsButton_2gXP",c="docsButtonRound_2y-L",s=["href","round"];function u(e){var t,n=e.href,u=e.round,d=void 0!==u&&u,m=(0,a.Z)(e,s);return m.className=(0,o.Z)(((t={})[m.className]=Boolean(m.className),t[l]=!0,t["docs-button"]=!0,t[c]=d,t["docs-button--round"]=d,t)),n?i.createElement("a",(0,r.Z)({href:n,className:"docsButton"},m),m.children):i.createElement("button",(0,r.Z)({className:"docsButton"},m),m.children)}},13982:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return m},contentTitle:function(){return p},metadata:function(){return f},toc:function(){return v},default:function(){return k}});var r=n(87462),a=n(63366),o=(n(67294),n(3905)),i=n(47758),l=n(88694),c=n(26396),s=n(58215),u=n(19055),d=["components"],m={title:"Network Interface"},p=void 0,f={unversionedId:"native/network-interface",id:"native/network-interface",isDocsHomePage:!1,title:"Network Interface",description:"Network interface information plugin for Cordova/PhoneGap that supports Android, Blackberry 10, Browser, iOS, and Windows Phone 8.",source:"@site/docs/native/network-interface.md",sourceDirName:"native",slug:"/native/network-interface",permalink:"/docs/native/network-interface",editUrl:"https://github.com/ionic-team/ionic-native/edit/master/src/@awesome-cordova-plugins/plugins/network-interface/index.ts",tags:[],version:"current",frontMatter:{title:"Network Interface"},sidebar:"native",previous:{title:"Native Storage",permalink:"/docs/native/native-storage"},next:{title:"Network",permalink:"/docs/native/network"}},v=[{value:"Supported Platforms",id:"supported-platforms",children:[],level:2},{value:"Usage",id:"usage",children:[{value:"React",id:"react",children:[],level:3},{value:"Angular",id:"angular",children:[],level:3}],level:2}],h={toc:v};function k(e){var t=e.components,n=(0,a.Z)(e,d);return(0,o.kt)("wrapper",(0,r.Z)({},h,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Network interface information plugin for Cordova/PhoneGap that supports Android, Blackberry 10, Browser, iOS, and Windows Phone 8."),(0,o.kt)("p",null,(0,o.kt)("a",{href:"https://github.com/salbahra/cordova-plugin-networkinterface",target:"_blank",rel:"noopener",className:"git-link"},(0,o.kt)("svg",{viewBox:"0 0 512 512"},(0,o.kt)("path",{d:"M416 160c0-35.3-28.7-64-64-64s-64 28.7-64 64c0 23.7 12.9 44.3 32 55.4v8.6c0 19.9-7.8 33.7-25.3 44.9-15.4 9.8-38.1 17.1-67.5 21.5-14 2.1-25.7 6-35.2 10.7V151.4c19.1-11.1 32-31.7 32-55.4 0-35.3-28.7-64-64-64S96 60.7 96 96c0 23.7 12.9 44.3 32 55.4v209.2c-19.1 11.1-32 31.7-32 55.4 0 35.3 28.7 64 64 64s64-28.7 64-64c0-16.6-6.3-31.7-16.7-43.1 1.9-4.9 9.7-16.3 29.4-19.3 38.8-5.8 68.9-15.9 92.3-30.8 36-22.8 55-57 55-98.8v-8.6c19.1-11.1 32-31.7 32-55.4zM160 56c22.1 0 40 17.9 40 40s-17.9 40-40 40-40-17.9-40-40 17.9-40 40-40zm0 400c-22.1 0-40-17.9-40-40s17.9-40 40-40 40 17.9 40 40-17.9 40-40 40zm192-256c-22.1 0-40-17.9-40-40s17.9-40 40-40 40 17.9 40 40-17.9 40-40 40z"}))," https://github.com/salbahra/cordova-plugin-networkinterface")),(0,o.kt)("h2",null,"Stuck on a Cordova issue?"),(0,o.kt)(i.Z,{className:"cordova-ee-card",header:"Don't waste precious time on plugin issues.",href:"https://ionicframework.com/sales?product_of_interest=Ionic%20Native",mdxType:"DocsCard"},(0,o.kt)("div",null,(0,o.kt)("img",{src:"/docs/icons/native-cordova-bot.png",class:"cordova-ee-img"}),(0,o.kt)("p",null,"If you're building a serious project, you can't afford to spend hours troubleshooting. Ionic\u2019s experts offer premium advisory services for both community plugins and premier plugins."),(0,o.kt)(l.Z,{className:"native-ee-detail",mdxType:"DocsButton"},"Contact Us Today!"))),(0,o.kt)("h2",{id:"installation"},(0,o.kt)("a",{href:"#installation"},"Installation")),(0,o.kt)(c.Z,{defaultValue:"Capacitor",groupId:"runtime",values:[{value:"Capacitor",label:"Capacitor"},{value:"Cordova",label:"Cordova"},{value:"Enterprise",label:"Enterprise"}],mdxType:"Tabs"},(0,o.kt)(s.Z,{value:"Capacitor",mdxType:"TabItem"},(0,o.kt)(u.Z,{className:"language-shell",mdxType:"CodeBlock"},"$ npm install cordova-plugin-networkinterface ","\n","$ npm install @awesome-cordova-plugins/network-interface ","\n","$ ionic cap sync")),(0,o.kt)(s.Z,{value:"Cordova",mdxType:"TabItem"},(0,o.kt)(u.Z,{className:"language-shell",mdxType:"CodeBlock"},"$ ionic cordova plugin add cordova-plugin-networkinterface ","\n","$ npm install @awesome-cordova-plugins/network-interface ","\n")),(0,o.kt)(s.Z,{value:"Enterprise",mdxType:"TabItem"},(0,o.kt)("blockquote",null,"Ionic Enterprise comes with fully supported and maintained plugins from the Ionic Team. \xa0",(0,o.kt)("a",{class:"btn",href:"https://ionic.io/docs/premier-plugins"},"Learn More")," or if you're interested in an enterprise version of this plugin ",(0,o.kt)("a",{class:"btn",href:"https://ionicframework.com/sales?product_of_interest=Ionic%20Enterprise%20Engine"},"Contact Us")))),(0,o.kt)("h2",{id:"supported-platforms"},"Supported Platforms"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Android"),(0,o.kt)("li",{parentName:"ul"},"BlackBerry 10"),(0,o.kt)("li",{parentName:"ul"},"Browser"),(0,o.kt)("li",{parentName:"ul"},"iOS"),(0,o.kt)("li",{parentName:"ul"},"Windows"),(0,o.kt)("li",{parentName:"ul"},"Windows Phone")),(0,o.kt)("h2",{id:"usage"},"Usage"),(0,o.kt)("h3",{id:"react"},"React"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"/docs/native/community#react"},"Learn more about using Ionic Native components in React")),(0,o.kt)("h3",{id:"angular"},"Angular"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},"import { NetworkInterface } from '@awesome-cordova-plugins/network-interface/ngx';\n\nconstructor( private networkInterface: NetworkInterface ) {\n\n  this.networkInterface.getWiFiIPAddress()\n    .then(address => console.info(`IP: ${address.ip}, Subnet: ${address.subnet}`))\n    .catch(error => console.error(`Unable to get IP: ${error}`));\n\n  this.networkInterface.getCarrierIPAddress()\n    .then(address => console.info(`IP: ${address.ip}, Subnet: ${address.subnet}`))\n    .catch(error => console.error(`Unable to get IP: ${error}`));\n\n  const url = 'www.github.com';\n  this.networkInterface.getHttpProxyInformation(url)\n    .then(proxy => console.info(`Type: ${proxy.type}, Host: ${proxy.host}, Port: ${proxy.port}`))\n    .catch(error => console.error(`Unable to get proxy info: ${error}`));\n}\n")))}k.isMDXComponent=!0}}]);