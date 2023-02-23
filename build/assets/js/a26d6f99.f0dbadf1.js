"use strict";(self.webpackChunkionic_docs=self.webpackChunkionic_docs||[]).push([[38597],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return k}});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=r.createContext({}),p=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},u=function(e){var t=p(e.components);return r.createElement(c.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},s=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,l=e.originalType,c=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),s=p(n),k=o,m=s["".concat(c,".").concat(k)]||s[k]||d[k]||l;return n?r.createElement(m,a(a({ref:t},u),{},{components:n})):r.createElement(m,a({ref:t},u))}));function k(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var l=n.length,a=new Array(l);a[0]=s;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:o,a[1]=i;for(var p=2;p<l;p++)a[p]=n[p];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}s.displayName="MDXCreateElement"},40149:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return i},contentTitle:function(){return c},metadata:function(){return p},toc:function(){return u},default:function(){return s}});var r=n(87462),o=n(63366),l=(n(67294),n(3905)),a=["components"],i={title:"ionic cordova prepare",sidebar_label:"cordova prepare"},c=void 0,p={unversionedId:"cli/commands/cordova-prepare",id:"cli/commands/cordova-prepare",isDocsHomePage:!1,title:"ionic cordova prepare",description:"Cordova Prepare: Copy iOS/Android Assets for Native Builds",source:"@site/docs/cli/commands/cordova-prepare.md",sourceDirName:"cli/commands",slug:"/cli/commands/cordova-prepare",permalink:"/developer/docs/cli/commands/cordova-prepare",editUrl:"https://github.com/ionic-team/ionic-cli/edit/develop/packages/@ionic/cli/src/commands/cordova/prepare.ts",tags:[],version:"current",frontMatter:{title:"ionic cordova prepare",sidebar_label:"cordova prepare"},sidebar:"cli",previous:{title:"cordova plugin",permalink:"/developer/docs/cli/commands/cordova-plugin"},next:{title:"cordova requirements",permalink:"/developer/docs/cli/commands/cordova-requirements"}},u=[{value:"Examples",id:"examples",children:[],level:2},{value:"Inputs",id:"inputs",children:[],level:2},{value:"Options",id:"options",children:[],level:2},{value:"Advanced Options",id:"advanced-options",children:[],level:2}],d={toc:u};function s(e){var t=e.components,n=(0,o.Z)(e,a);return(0,l.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("head",null,(0,l.kt)("title",null,"Cordova Prepare: Copy iOS/Android Assets for Native Builds"),(0,l.kt)("meta",{name:"description",content:"Ionic Cordova Prepare copies iOS and Android assets to Cordova platforms, preparing them for native builds. Read for examples and to learn more about usage."})),(0,l.kt)("p",null,"Copies assets to Cordova platforms, preparing them for native builds"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"$ ionic cordova prepare [options]\n")),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"ionic cordova prepare")," will do the following:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Perform an Ionic build, which compiles web assets to ",(0,l.kt)("strong",{parentName:"li"},"www/"),"."),(0,l.kt)("li",{parentName:"ul"},"Copy the ",(0,l.kt)("strong",{parentName:"li"},"www/")," directory into your Cordova platforms."),(0,l.kt)("li",{parentName:"ul"},"Transform ",(0,l.kt)("strong",{parentName:"li"},"config.xml")," into platform-specific manifest files."),(0,l.kt)("li",{parentName:"ul"},"Copy icons and splash screens from ",(0,l.kt)("strong",{parentName:"li"},"resources/")," to into your Cordova platforms."),(0,l.kt)("li",{parentName:"ul"},"Copy plugin files into specified platforms.")),(0,l.kt)("p",null,"You may wish to use ",(0,l.kt)("inlineCode",{parentName:"p"},"ionic cordova prepare")," if you run your project with Android Studio or Xcode."),(0,l.kt)("h2",{id:"examples"},"Examples"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"$ ionic cordova prepare \n$ ionic cordova prepare ios\n$ ionic cordova prepare android\n")),(0,l.kt)("h2",{id:"inputs"},"Inputs"),(0,l.kt)("table",{className:"reference-table"},(0,l.kt)("thead",null,(0,l.kt)("tr",null,(0,l.kt)("th",{colSpan:"2"},(0,l.kt)("h3",null,"platform")))),(0,l.kt)("tbody",null,(0,l.kt)("tr",null,(0,l.kt)("th",null,"Description"),(0,l.kt)("td",null,(0,l.kt)("p",null,"The platform you would like to prepare (e.g. ",(0,l.kt)("code",null,"android"),", ",(0,l.kt)("code",null,"ios"),")"))))),(0,l.kt)("h2",{id:"options"},"Options"),(0,l.kt)("table",{className:"reference-table"},(0,l.kt)("thead",null,(0,l.kt)("tr",null,(0,l.kt)("th",{colSpan:"2"},(0,l.kt)("h3",null,(0,l.kt)("a",{href:"#option-build",id:"option-build"},"--no-build"))))),(0,l.kt)("tbody",null,(0,l.kt)("tr",null,(0,l.kt)("th",null,"Description"),(0,l.kt)("td",null,(0,l.kt)("p",null,"Do not invoke an Ionic build")))),(0,l.kt)("thead",null,(0,l.kt)("tr",null,(0,l.kt)("th",{colSpan:"2"},(0,l.kt)("h3",null,(0,l.kt)("a",{href:"#option-prod",id:"option-prod"},"--prod"))))),(0,l.kt)("tbody",null,(0,l.kt)("tr",null,(0,l.kt)("th",null,"Description"),(0,l.kt)("td",null,(0,l.kt)("p",null,"Flag to use the ",(0,l.kt)("code",null,"production")," configuration"))))),(0,l.kt)("h2",{id:"advanced-options"},"Advanced Options"),(0,l.kt)("table",{className:"reference-table"},(0,l.kt)("thead",null,(0,l.kt)("tr",null,(0,l.kt)("th",{colSpan:"2"},(0,l.kt)("h3",null,(0,l.kt)("a",{href:"#option-configuration",id:"option-configuration"},"--configuration",(0,l.kt)("span",{class:"option-spec"}," =<conf>")))))),(0,l.kt)("tbody",null,(0,l.kt)("tr",null,(0,l.kt)("th",null,"Description"),(0,l.kt)("td",null,(0,l.kt)("div",null,(0,l.kt)("p",null,"Specify the configuration to use.")))),(0,l.kt)("tr",null,(0,l.kt)("th",null,"Aliases"),(0,l.kt)("td",null,(0,l.kt)("code",null,"-c")))),(0,l.kt)("thead",null,(0,l.kt)("tr",null,(0,l.kt)("th",{colSpan:"2"},(0,l.kt)("h3",null,(0,l.kt)("a",{href:"#option-source-map",id:"option-source-map"},"--source-map"))))),(0,l.kt)("tbody",null,(0,l.kt)("tr",null,(0,l.kt)("th",null,"Description"),(0,l.kt)("td",null,(0,l.kt)("div",null,(0,l.kt)("p",null,"Output source maps"))))),(0,l.kt)("thead",null,(0,l.kt)("tr",null,(0,l.kt)("th",{colSpan:"2"},(0,l.kt)("h3",null,(0,l.kt)("a",{href:"#option-watch",id:"option-watch"},"--watch"))))),(0,l.kt)("tbody",null,(0,l.kt)("tr",null,(0,l.kt)("th",null,"Description"),(0,l.kt)("td",null,(0,l.kt)("div",null,(0,l.kt)("p",null,"Rebuild when files change")))))))}s.isMDXComponent=!0}}]);