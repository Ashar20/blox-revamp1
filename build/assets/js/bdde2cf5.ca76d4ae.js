"use strict";(self.webpackChunkionic_docs=self.webpackChunkionic_docs||[]).push([[34877],{3905:function(t,e,n){n.d(e,{Zo:function(){return u},kt:function(){return k}});var o=n(67294);function l(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function r(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);e&&(o=o.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,o)}return n}function c(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?r(Object(n),!0).forEach((function(e){l(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function i(t,e){if(null==t)return{};var n,o,l=function(t,e){if(null==t)return{};var n,o,l={},r=Object.keys(t);for(o=0;o<r.length;o++)n=r[o],e.indexOf(n)>=0||(l[n]=t[n]);return l}(t,e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);for(o=0;o<r.length;o++)n=r[o],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(l[n]=t[n])}return l}var a=o.createContext({}),p=function(t){var e=o.useContext(a),n=e;return t&&(n="function"==typeof t?t(e):c(c({},e),t)),n},u=function(t){var e=p(t.components);return o.createElement(a.Provider,{value:e},t.children)},s={inlineCode:"code",wrapper:function(t){var e=t.children;return o.createElement(o.Fragment,{},e)}},d=o.forwardRef((function(t,e){var n=t.components,l=t.mdxType,r=t.originalType,a=t.parentName,u=i(t,["components","mdxType","originalType","parentName"]),d=p(n),k=l,f=d["".concat(a,".").concat(k)]||d[k]||s[k]||r;return n?o.createElement(f,c(c({ref:e},u),{},{components:n})):o.createElement(f,c({ref:e},u))}));function k(t,e){var n=arguments,l=e&&e.mdxType;if("string"==typeof t||l){var r=n.length,c=new Array(r);c[0]=d;var i={};for(var a in e)hasOwnProperty.call(e,a)&&(i[a]=e[a]);i.originalType=t,i.mdxType="string"==typeof t?t:l,c[1]=i;for(var p=2;p<r;p++)c[p]=n[p];return o.createElement.apply(null,c)}return o.createElement.apply(null,n)}d.displayName="MDXCreateElement"},56332:function(t,e,n){n.r(e),n.d(e,{frontMatter:function(){return i},contentTitle:function(){return a},metadata:function(){return p},toc:function(){return u},default:function(){return d}});var o=n(87462),l=n(63366),r=(n(67294),n(3905)),c=["components"],i={sidebar_label:"capacitor copy"},a="ionic capacitor copy",p={unversionedId:"cli/commands/capacitor-copy",id:"version-v5/cli/commands/capacitor-copy",isDocsHomePage:!1,title:"ionic capacitor copy",description:"Copy web assets to native platforms",source:"@site/versioned_docs/version-v5/cli/commands/capacitor-copy.md",sourceDirName:"cli/commands",slug:"/cli/commands/capacitor-copy",permalink:"/developer/docs/v5/cli/commands/capacitor-copy",editUrl:"https://github.com/ionic-team/ionic-cli/edit/develop/packages/@ionic/cli/src/commands/capacitor/copy.ts",tags:[],version:"v5",frontMatter:{sidebar_label:"capacitor copy"},sidebar:"version-v5/cli",previous:{title:"capacitor build",permalink:"/developer/docs/v5/cli/commands/capacitor-build"},next:{title:"capacitor open",permalink:"/developer/docs/v5/cli/commands/capacitor-open"}},u=[{value:"Inputs",id:"inputs",children:[],level:2},{value:"Options",id:"options",children:[],level:2},{value:"Advanced Options",id:"advanced-options",children:[],level:2}],s={toc:u};function d(t){var e=t.components,n=(0,l.Z)(t,c);return(0,r.kt)("wrapper",(0,o.Z)({},s,n,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"ionic-capacitor-copy"},"ionic capacitor copy"),(0,r.kt)("p",null,"Copy web assets to native platforms"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"ionic capacitor copy [options]\n")),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"ionic capacitor copy")," will do the following:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Perform an Ionic build, which compiles web assets"),(0,r.kt)("li",{parentName:"ul"},"Copy web assets to Capacitor native platform(s)")),(0,r.kt)("h2",{id:"inputs"},"Inputs"),(0,r.kt)("table",{className:"reference-table"},(0,r.kt)("thead",null,(0,r.kt)("tr",null,(0,r.kt)("th",{colSpan:"2"},(0,r.kt)("h3",null,"platform")))),(0,r.kt)("tbody",null,(0,r.kt)("tr",null,(0,r.kt)("th",null,"Description"),(0,r.kt)("td",null,(0,r.kt)("p",null,"The platform to copy (e.g. ",(0,r.kt)("code",null,"android"),", ",(0,r.kt)("code",null,"ios"),", ",(0,r.kt)("code",null,"electron"),")"))))),(0,r.kt)("h2",{id:"options"},"Options"),(0,r.kt)("table",{className:"reference-table"},(0,r.kt)("thead",null,(0,r.kt)("tr",null,(0,r.kt)("th",{colSpan:"2"},(0,r.kt)("h3",null,(0,r.kt)("a",{href:"#option-build",id:"option-build"},"--no-build"))))),(0,r.kt)("tbody",null,(0,r.kt)("tr",null,(0,r.kt)("th",null,"Description"),(0,r.kt)("td",null,(0,r.kt)("p",null,"Do not invoke an Ionic build")))),(0,r.kt)("thead",null,(0,r.kt)("tr",null,(0,r.kt)("th",{colSpan:"2"},(0,r.kt)("h3",null,(0,r.kt)("a",{href:"#option-prod",id:"option-prod"},"--prod"))))),(0,r.kt)("tbody",null,(0,r.kt)("tr",null,(0,r.kt)("th",null,"Description"),(0,r.kt)("td",null,(0,r.kt)("p",null,"Flag to use the ",(0,r.kt)("code",null,"production")," configuration"))))),(0,r.kt)("h2",{id:"advanced-options"},"Advanced Options"),(0,r.kt)("table",{className:"reference-table"},(0,r.kt)("thead",null,(0,r.kt)("tr",null,(0,r.kt)("th",{colSpan:"2"},(0,r.kt)("h3",null,(0,r.kt)("a",{href:"#option-configuration",id:"option-configuration"},"--configuration",(0,r.kt)("span",{class:"option-spec"}," =<conf>")))))),(0,r.kt)("tbody",null,(0,r.kt)("tr",null,(0,r.kt)("th",null,"Description"),(0,r.kt)("td",null,(0,r.kt)("div",null,(0,r.kt)("p",null,"Specify the configuration to use.")))),(0,r.kt)("tr",null,(0,r.kt)("th",null,"Aliases"),(0,r.kt)("td",null,(0,r.kt)("code",null,"-c")))),(0,r.kt)("thead",null,(0,r.kt)("tr",null,(0,r.kt)("th",{colSpan:"2"},(0,r.kt)("h3",null,(0,r.kt)("a",{href:"#option-source-map",id:"option-source-map"},"--source-map"))))),(0,r.kt)("tbody",null,(0,r.kt)("tr",null,(0,r.kt)("th",null,"Description"),(0,r.kt)("td",null,(0,r.kt)("div",null,(0,r.kt)("p",null,"Output source maps"))))),(0,r.kt)("thead",null,(0,r.kt)("tr",null,(0,r.kt)("th",{colSpan:"2"},(0,r.kt)("h3",null,(0,r.kt)("a",{href:"#option-watch",id:"option-watch"},"--watch"))))),(0,r.kt)("tbody",null,(0,r.kt)("tr",null,(0,r.kt)("th",null,"Description"),(0,r.kt)("td",null,(0,r.kt)("div",null,(0,r.kt)("p",null,"Rebuild when files change")))))))}d.isMDXComponent=!0}}]);