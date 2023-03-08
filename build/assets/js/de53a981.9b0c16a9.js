"use strict";(self.webpackChunkionic_docs=self.webpackChunkionic_docs||[]).push([[4089],{3905:function(t,n,e){e.d(n,{Zo:function(){return p},kt:function(){return k}});var o=e(67294);function l(t,n,e){return n in t?Object.defineProperty(t,n,{value:e,enumerable:!0,configurable:!0,writable:!0}):t[n]=e,t}function i(t,n){var e=Object.keys(t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);n&&(o=o.filter((function(n){return Object.getOwnPropertyDescriptor(t,n).enumerable}))),e.push.apply(e,o)}return e}function r(t){for(var n=1;n<arguments.length;n++){var e=null!=arguments[n]?arguments[n]:{};n%2?i(Object(e),!0).forEach((function(n){l(t,n,e[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(e)):i(Object(e)).forEach((function(n){Object.defineProperty(t,n,Object.getOwnPropertyDescriptor(e,n))}))}return t}function a(t,n){if(null==t)return{};var e,o,l=function(t,n){if(null==t)return{};var e,o,l={},i=Object.keys(t);for(o=0;o<i.length;o++)e=i[o],n.indexOf(e)>=0||(l[e]=t[e]);return l}(t,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(o=0;o<i.length;o++)e=i[o],n.indexOf(e)>=0||Object.prototype.propertyIsEnumerable.call(t,e)&&(l[e]=t[e])}return l}var c=o.createContext({}),u=function(t){var n=o.useContext(c),e=n;return t&&(e="function"==typeof t?t(n):r(r({},n),t)),e},p=function(t){var n=u(t.components);return o.createElement(c.Provider,{value:n},t.children)},d={inlineCode:"code",wrapper:function(t){var n=t.children;return o.createElement(o.Fragment,{},n)}},s=o.forwardRef((function(t,n){var e=t.components,l=t.mdxType,i=t.originalType,c=t.parentName,p=a(t,["components","mdxType","originalType","parentName"]),s=u(e),k=l,f=s["".concat(c,".").concat(k)]||s[k]||d[k]||i;return e?o.createElement(f,r(r({ref:n},p),{},{components:e})):o.createElement(f,r({ref:n},p))}));function k(t,n){var e=arguments,l=n&&n.mdxType;if("string"==typeof t||l){var i=e.length,r=new Array(i);r[0]=s;var a={};for(var c in n)hasOwnProperty.call(n,c)&&(a[c]=n[c]);a.originalType=t,a.mdxType="string"==typeof t?t:l,r[1]=a;for(var u=2;u<i;u++)r[u]=e[u];return o.createElement.apply(null,r)}return o.createElement.apply(null,e)}s.displayName="MDXCreateElement"},10623:function(t,n,e){e.r(n),e.d(n,{frontMatter:function(){return a},contentTitle:function(){return c},metadata:function(){return u},toc:function(){return p},default:function(){return s}});var o=e(87462),l=e(63366),i=(e(67294),e(3905)),r=["components"],a={sidebar_label:"capacitor build"},c="ionic capacitor build",u={unversionedId:"cli/commands/capacitor-build",id:"version-v5/cli/commands/capacitor-build",isDocsHomePage:!1,title:"ionic capacitor build",description:"Build an Ionic project for a given platform",source:"@site/versioned_docs/version-v5/cli/commands/capacitor-build.md",sourceDirName:"cli/commands",slug:"/cli/commands/capacitor-build",permalink:"/docs/v5/cli/commands/capacitor-build",editUrl:"https://github.com/ionic-team/ionic-cli/edit/develop/packages/@ionic/cli/src/commands/capacitor/build.ts",tags:[],version:"v5",frontMatter:{sidebar_label:"capacitor build"},sidebar:"version-v5/cli",previous:{title:"capacitor add",permalink:"/docs/v5/cli/commands/capacitor-add"},next:{title:"capacitor copy",permalink:"/docs/v5/cli/commands/capacitor-copy"}},p=[{value:"Examples",id:"examples",children:[],level:2},{value:"Inputs",id:"inputs",children:[],level:2},{value:"Options",id:"options",children:[],level:2},{value:"Advanced Options",id:"advanced-options",children:[],level:2}],d={toc:p};function s(t){var n=t.components,e=(0,l.Z)(t,r);return(0,i.kt)("wrapper",(0,o.Z)({},d,e,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"ionic-capacitor-build"},"ionic capacitor build"),(0,i.kt)("p",null,"Build an Ionic project for a given platform"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"ionic capacitor build [options]\n")),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"ionic capacitor build")," will do the following:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Perform ",(0,i.kt)("inlineCode",{parentName:"li"},"ionic build")),(0,i.kt)("li",{parentName:"ul"},"Copy web assets into the specified native platform"),(0,i.kt)("li",{parentName:"ul"},"Open the IDE for your native project (Xcode for iOS, Android Studio for Android)")),(0,i.kt)("p",null,"Once the web assets and configuration are copied into your native project, you can build your app using the native IDE. Unfortunately, programmatically building the native project is not yet supported."),(0,i.kt)("p",null,"To configure your native project, see the common configuration ",(0,i.kt)("a",{parentName:"p",href:"https://capacitorjs.com/docs/basics/configuring-your-app"},"docs")," as well as low-level configuration for ",(0,i.kt)("a",{parentName:"p",href:"https://capacitorjs.com/docs/ios/configuration"},"iOS")," and ",(0,i.kt)("a",{parentName:"p",href:"https://capacitorjs.com/docs/android/configuration"},"Android"),"."),(0,i.kt)("h2",{id:"examples"},"Examples"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"$ ionic capacitor build\n$ ionic capacitor build android\n$ ionic capacitor build ios\n")),(0,i.kt)("h2",{id:"inputs"},"Inputs"),(0,i.kt)("table",{className:"reference-table"},(0,i.kt)("thead",null,(0,i.kt)("tr",null,(0,i.kt)("th",{colSpan:"2"},(0,i.kt)("h3",null,"platform")))),(0,i.kt)("tbody",null,(0,i.kt)("tr",null,(0,i.kt)("th",null,"Description"),(0,i.kt)("td",null,(0,i.kt)("p",null,"The platform to build for (e.g. ",(0,i.kt)("code",null,"android"),", ",(0,i.kt)("code",null,"ios"),")"))))),(0,i.kt)("h2",{id:"options"},"Options"),(0,i.kt)("table",{className:"reference-table"},(0,i.kt)("thead",null,(0,i.kt)("tr",null,(0,i.kt)("th",{colSpan:"2"},(0,i.kt)("h3",null,(0,i.kt)("a",{href:"#option-build",id:"option-build"},"--no-build"))))),(0,i.kt)("tbody",null,(0,i.kt)("tr",null,(0,i.kt)("th",null,"Description"),(0,i.kt)("td",null,(0,i.kt)("p",null,"Do not invoke Ionic build")))),(0,i.kt)("thead",null,(0,i.kt)("tr",null,(0,i.kt)("th",{colSpan:"2"},(0,i.kt)("h3",null,(0,i.kt)("a",{href:"#option-open",id:"option-open"},"--no-open"))))),(0,i.kt)("tbody",null,(0,i.kt)("tr",null,(0,i.kt)("th",null,"Description"),(0,i.kt)("td",null,(0,i.kt)("p",null,"Do not invoke Capacitor open")))),(0,i.kt)("thead",null,(0,i.kt)("tr",null,(0,i.kt)("th",{colSpan:"2"},(0,i.kt)("h3",null,(0,i.kt)("a",{href:"#option-prod",id:"option-prod"},"--prod"))))),(0,i.kt)("tbody",null,(0,i.kt)("tr",null,(0,i.kt)("th",null,"Description"),(0,i.kt)("td",null,(0,i.kt)("p",null,"Flag to use the ",(0,i.kt)("code",null,"production")," configuration"))))),(0,i.kt)("h2",{id:"advanced-options"},"Advanced Options"),(0,i.kt)("table",{className:"reference-table"},(0,i.kt)("thead",null,(0,i.kt)("tr",null,(0,i.kt)("th",{colSpan:"2"},(0,i.kt)("h3",null,(0,i.kt)("a",{href:"#option-configuration",id:"option-configuration"},"--configuration",(0,i.kt)("span",{class:"option-spec"}," =<conf>")))))),(0,i.kt)("tbody",null,(0,i.kt)("tr",null,(0,i.kt)("th",null,"Description"),(0,i.kt)("td",null,(0,i.kt)("div",null,(0,i.kt)("p",null,"Specify the configuration to use.")))),(0,i.kt)("tr",null,(0,i.kt)("th",null,"Aliases"),(0,i.kt)("td",null,(0,i.kt)("code",null,"-c")))),(0,i.kt)("thead",null,(0,i.kt)("tr",null,(0,i.kt)("th",{colSpan:"2"},(0,i.kt)("h3",null,(0,i.kt)("a",{href:"#option-source-map",id:"option-source-map"},"--source-map"))))),(0,i.kt)("tbody",null,(0,i.kt)("tr",null,(0,i.kt)("th",null,"Description"),(0,i.kt)("td",null,(0,i.kt)("div",null,(0,i.kt)("p",null,"Output source maps"))))),(0,i.kt)("thead",null,(0,i.kt)("tr",null,(0,i.kt)("th",{colSpan:"2"},(0,i.kt)("h3",null,(0,i.kt)("a",{href:"#option-watch",id:"option-watch"},"--watch"))))),(0,i.kt)("tbody",null,(0,i.kt)("tr",null,(0,i.kt)("th",null,"Description"),(0,i.kt)("td",null,(0,i.kt)("div",null,(0,i.kt)("p",null,"Rebuild when files change")))))))}s.isMDXComponent=!0}}]);