"use strict";(self.webpackChunkionic_docs=self.webpackChunkionic_docs||[]).push([[46971],{3905:function(e,t,n){n.d(t,{Zo:function(){return d},kt:function(){return p}});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=r.createContext({}),l=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},d=function(e){var t=l(e.components);return r.createElement(s.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,d=c(e,["components","mdxType","originalType","parentName"]),u=l(n),p=o,f=u["".concat(s,".").concat(p)]||u[p]||m[p]||a;return n?r.createElement(f,i(i({ref:t},d),{},{components:n})):r.createElement(f,i({ref:t},d))}));function p(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=u;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:o,i[1]=c;for(var l=2;l<a;l++)i[l]=n[l];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},47758:function(e,t,n){n.d(t,{Z:function(){return s}});var r=n(67294),o=n(86010),a=n(39960),i=n(44996),c="card_3DNo";var s=function(e){var t,n=void 0===e.href,s=void 0!==e.href&&/^http/.test(e.href),l="undefined"===e.header?null:r.createElement("header",{className:"Card-header"},e.header),d=e.hoverIcon||e.icon,m=r.createElement(r.Fragment,null,e.img&&r.createElement("img",{src:(0,i.Z)(e.img),className:"Card-image"}),r.createElement("div",{className:"Card-container"},(e.icon||d)&&r.createElement("div",{className:"Card-icon-row"},e.icon&&r.createElement("img",{src:(0,i.Z)(e.icon),className:"Card-icon Card-icon-default"}),d&&r.createElement("img",{src:(0,i.Z)(d),className:"Card-icon Card-icon-hover"})),e.ionicon&&r.createElement("ion-icon",{name:e.ionicon,className:"Card-ionicon"}),e.iconset&&r.createElement("div",{className:"Card-iconset__container"},e.iconset.split(",").map((function(t,n){return r.createElement("img",{src:(0,i.Z)(t),className:"Card-icon "+(n===e.activeIndex?"Card-icon-active":""),"data-index":n,key:n})}))),e.header&&l,r.createElement("div",{className:"Card-content"},e.children))),u=(0,o.Z)(((t={"Card-with-image":void 0!==e.img,"Card-without-image":void 0===e.img,"Card-size-lg":"lg"===e.size})[e.className]=e.className,t));return n?r.createElement("docs-card",{class:u},r.createElement("div",{className:(0,o.Z)(c,"docs-card")},m)):s?r.createElement("docs-card",{class:u},r.createElement("a",{className:(0,o.Z)(c,"docs-card"),href:e.href,target:"_blank"},m)):r.createElement("docs-card",{class:u},r.createElement(a.default,{to:e.href,className:(0,o.Z)(c,"docs-card")},m))}},53445:function(e,t,n){var r=n(67294);t.Z=function(e){return r.createElement("docs-cards",{class:e.className},e.children)}},69653:function(e,t,n){n.d(t,{Z:function(){return c}});var r=n(44996),o=n(86010),a=n(67294),i="nativeEnterprise_BiVj";function c(e){return a.createElement("a",{className:(0,o.Z)(e.className,i),href:"https://support.getblox.ai/wp-content/uploads/2022/11/Blox-demo-video-9.mp4"},a.createElement("div",{className:"image-wrapper"},a.createElement("img",{src:(0,r.Z)("/img/native/discovery.svg"),width:"170",height:"128"})),a.createElement("div",{style:{paddingLeft:60,marginLeft:-70}},a.createElement("img",{src:(0,r.Z)("/img/native/play.svg"),style:{},"margin-right":"10",width:"50",height:"50"})),a.createElement("div",null,a.createElement("p",null,"A video highlighting the features & functionality offered by Blox")))}},15156:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return s},contentTitle:function(){return l},metadata:function(){return d},toc:function(){return m},default:function(){return p}});var r=n(87462),o=n(63366),a=(n(67294),n(3905)),i=(n(47758),n(53445),n(69653)),c=["components"],s={title:"Welcome to Blox",sidebar_label:"Overview",slug:"/",hide_table_of_contents:!0,demoUrl:"https://docs-demo.ionic.io/",demoSourceUrl:"https://github.com/ionic-team/docs-demo"},l=void 0,d={unversionedId:"index",id:"index",isDocsHomePage:!1,title:"Welcome to Blox",description:"<meta",source:"@site/docs/index.md",sourceDirName:".",slug:"/",permalink:"/developer/docs/",editUrl:"https://github.com/ionic-team/ionic-docs/edit/main/docs/index.md",tags:[],version:"current",frontMatter:{title:"Welcome to Blox",sidebar_label:"Overview",slug:"/",hide_table_of_contents:!0,demoUrl:"https://docs-demo.ionic.io/",demoSourceUrl:"https://github.com/ionic-team/docs-demo"},sidebar:"docs",next:{title:"Blox integration",permalink:"/developer/docs/intro/upgrading-to-ionic-6"}},m=[],u={toc:m};function p(e){var t=e.components,n=(0,o.Z)(e,c);return(0,a.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("head",null,(0,a.kt)("title",null),(0,a.kt)("meta",{name:"description",content:"Ionic Framework is an open-source UI toolkit to create your own mobile apps using web technologies with integrations for popular frameworks."})),(0,a.kt)("p",null,"AI is now a necessity and not a luxury for enterprises in 2022. Blox\u2019s Enterprise AI in a Box is a solution that can completely transform businesses through process automation and driving growth by delivering hyper-personalized experiences at scale, in real-time. Blox.ai allows businesses to unlock the power of their data to solve a wide range of business problems from classification & recognition to prediction and forecasting. Blox.ai is a dynamic system that is continuously learning and fully customizable. We have helped solve complex challenges with our custom A.I. solutions across industries like retail, healthcare, financial services, education, entertainment, and more."),(0,a.kt)(i.Z,{mdxType:"NativeEnterpriseCard"}))}p.isMDXComponent=!0}}]);