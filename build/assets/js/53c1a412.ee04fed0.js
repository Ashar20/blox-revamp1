"use strict";(self.webpackChunkionic_docs=self.webpackChunkionic_docs||[]).push([[57102],{3905:function(e,t,n){n.d(t,{Zo:function(){return l},kt:function(){return p}});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=r.createContext({}),d=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},l=function(e){var t=d(e.components);return r.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),m=d(n),p=o,f=m["".concat(s,".").concat(p)]||m[p]||u[p]||a;return n?r.createElement(f,i(i({ref:t},l),{},{components:n})):r.createElement(f,i({ref:t},l))}));function p(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=m;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:o,i[1]=c;for(var d=2;d<a;d++)i[d]=n[d];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},47758:function(e,t,n){n.d(t,{Z:function(){return s}});var r=n(67294),o=n(86010),a=n(39960),i=n(44996),c="card_3DNo";var s=function(e){var t,n=void 0===e.href,s=void 0!==e.href&&/^http/.test(e.href),d="undefined"===e.header?null:r.createElement("header",{className:"Card-header"},e.header),l=e.hoverIcon||e.icon,u=r.createElement(r.Fragment,null,e.img&&r.createElement("img",{src:(0,i.Z)(e.img),className:"Card-image"}),r.createElement("div",{className:"Card-container"},(e.icon||l)&&r.createElement("div",{className:"Card-icon-row"},e.icon&&r.createElement("img",{src:(0,i.Z)(e.icon),className:"Card-icon Card-icon-default"}),l&&r.createElement("img",{src:(0,i.Z)(l),className:"Card-icon Card-icon-hover"})),e.ionicon&&r.createElement("ion-icon",{name:e.ionicon,className:"Card-ionicon"}),e.iconset&&r.createElement("div",{className:"Card-iconset__container"},e.iconset.split(",").map((function(t,n){return r.createElement("img",{src:(0,i.Z)(t),className:"Card-icon "+(n===e.activeIndex?"Card-icon-active":""),"data-index":n,key:n})}))),e.header&&d,r.createElement("div",{className:"Card-content"},e.children))),m=(0,o.Z)(((t={"Card-with-image":void 0!==e.img,"Card-without-image":void 0===e.img,"Card-size-lg":"lg"===e.size})[e.className]=e.className,t));return n?r.createElement("docs-card",{class:m},r.createElement("div",{className:(0,o.Z)(c,"docs-card")},u)):s?r.createElement("docs-card",{class:m},r.createElement("a",{className:(0,o.Z)(c,"docs-card"),href:e.href,target:"_blank"},u)):r.createElement("docs-card",{class:m},r.createElement(a.default,{to:e.href,className:(0,o.Z)(c,"docs-card")},u))}},53445:function(e,t,n){var r=n(67294);t.Z=function(e){return r.createElement("docs-cards",{class:e.className},e.children)}},4653:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return d},contentTitle:function(){return l},metadata:function(){return u},toc:function(){return m},default:function(){return f}});var r=n(87462),o=n(63366),a=(n(67294),n(3905)),i=n(47758),c=n(53445),s=["components"],d={hide_table_of_contents:!0},l="Welcome to Studio",u={unversionedId:"studio",id:"version-v5/studio",isDocsHomePage:!1,title:"Welcome to Studio",description:"Ionic Studio is a fast and easy app builder that helps teams build and prototype apps with minimal coding.",source:"@site/versioned_docs/version-v5/studio.md",sourceDirName:".",slug:"/studio",permalink:"/docs/v5/studio",editUrl:"https://github.com/ionic-team/ionic-docs/edit/main/versioned_docs/version-v5/studio.md",tags:[],version:"v5",frontMatter:{hide_table_of_contents:!0}},m=[],p={toc:m};function f(e){var t=e.components,n=(0,o.Z)(e,s);return(0,a.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"welcome-to-studio"},"Welcome to Studio"),(0,a.kt)("p",null,"Ionic Studio is a fast and easy app builder that helps teams build and prototype apps with minimal coding."),(0,a.kt)("p",null,"Studio is designed to integrate into an existing developer workflow, rather than replace it, enabling developers and architects to build visually ",(0,a.kt)("em",{parentName:"p"},"or")," drop down to code using their favorite tools."),(0,a.kt)("p",null,"Studio\nfully supports bringing code back into the tool, something virtually unheard of in the app development tools market."),(0,a.kt)("p",null,"Studio is a desktop tool and requires a subscription, and is only for Ionic Angular 4.x+ projects. To get started, sign up below:"),(0,a.kt)(c.Z,{class:"static-width",mdxType:"DocsCards"},(0,a.kt)(i.Z,{header:"Get Studio",href:"https://ionicframework.com/studio?utm_source=docs&utm_medium=website&utm_campaign=studio%20launch",icon:"/icons/guide-installation-icon.png",mdxType:"DocsCard"},(0,a.kt)("p",null,"Sign up for Studio and start building today.")),(0,a.kt)(i.Z,{header:"News & Updates",icon:"/icons/guide-news-icon.png",mdxType:"DocsCard"},(0,a.kt)("p",null,"Delivered within Studio as well as over email.")),(0,a.kt)(i.Z,{header:"Studio FAQ",href:"studio/faq",icon:"/icons/guide-faq-icon.png",mdxType:"DocsCard"},(0,a.kt)("p",null,"Find answers to common questions about Ionic Studio."))))}f.isMDXComponent=!0}}]);