"use strict";(self.webpackChunkionic_docs=self.webpackChunkionic_docs||[]).push([[92978],{3905:function(t,e,n){n.d(e,{Zo:function(){return u},kt:function(){return k}});var l=n(67294);function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function o(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);e&&(l=l.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,l)}return n}function i(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?o(Object(n),!0).forEach((function(e){r(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function a(t,e){if(null==t)return{};var n,l,r=function(t,e){if(null==t)return{};var n,l,r={},o=Object.keys(t);for(l=0;l<o.length;l++)n=o[l],e.indexOf(n)>=0||(r[n]=t[n]);return r}(t,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);for(l=0;l<o.length;l++)n=o[l],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}var c=l.createContext({}),s=function(t){var e=l.useContext(c),n=e;return t&&(n="function"==typeof t?t(e):i(i({},e),t)),n},u=function(t){var e=s(t.components);return l.createElement(c.Provider,{value:e},t.children)},p={inlineCode:"code",wrapper:function(t){var e=t.children;return l.createElement(l.Fragment,{},e)}},d=l.forwardRef((function(t,e){var n=t.components,r=t.mdxType,o=t.originalType,c=t.parentName,u=a(t,["components","mdxType","originalType","parentName"]),d=s(n),k=r,f=d["".concat(c,".").concat(k)]||d[k]||p[k]||o;return n?l.createElement(f,i(i({ref:e},u),{},{components:n})):l.createElement(f,i({ref:e},u))}));function k(t,e){var n=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var o=n.length,i=new Array(o);i[0]=d;var a={};for(var c in e)hasOwnProperty.call(e,c)&&(a[c]=e[c]);a.originalType=t,a.mdxType="string"==typeof t?t:r,i[1]=a;for(var s=2;s<o;s++)i[s]=n[s];return l.createElement.apply(null,i)}return l.createElement.apply(null,n)}d.displayName="MDXCreateElement"},34929:function(t,e,n){n.r(e),n.d(e,{frontMatter:function(){return a},contentTitle:function(){return c},metadata:function(){return s},toc:function(){return u},default:function(){return d}});var l=n(87462),r=n(63366),o=(n(67294),n(3905)),i=["components"],a={title:"ionic ssh generate",sidebar_label:"ssh generate"},c=void 0,s={unversionedId:"cli/commands/ssh-generate",id:"cli/commands/ssh-generate",isDocsHomePage:!1,title:"ionic ssh generate",description:"Generates a private and public SSH key pair",source:"@site/docs/cli/commands/ssh-generate.md",sourceDirName:"cli/commands",slug:"/cli/commands/ssh-generate",permalink:"/docs/cli/commands/ssh-generate",editUrl:"https://github.com/ionic-team/ionic-cli/edit/develop/packages/@ionic/cli/src/commands/ssh/generate.ts",tags:[],version:"current",frontMatter:{title:"ionic ssh generate",sidebar_label:"ssh generate"},sidebar:"cli",previous:{title:"ssh delete",permalink:"/docs/cli/commands/ssh-delete"},next:{title:"ssh list",permalink:"/docs/cli/commands/ssh-list"}},u=[{value:"Inputs",id:"inputs",children:[],level:2},{value:"Advanced Options",id:"advanced-options",children:[],level:2}],p={toc:u};function d(t){var e=t.components,n=(0,r.Z)(t,i);return(0,o.kt)("wrapper",(0,l.Z)({},p,n,{components:e,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Generates a private and public SSH key pair"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"$ ionic ssh generate [options]\n")),(0,o.kt)("h2",{id:"inputs"},"Inputs"),(0,o.kt)("table",{className:"reference-table"},(0,o.kt)("thead",null,(0,o.kt)("tr",null,(0,o.kt)("th",{colSpan:"2"},(0,o.kt)("h3",null,"key-path")))),(0,o.kt)("tbody",null,(0,o.kt)("tr",null,(0,o.kt)("th",null,"Description"),(0,o.kt)("td",null,(0,o.kt)("p",null,"Destination of private key file"))))),(0,o.kt)("h2",{id:"advanced-options"},"Advanced Options"),(0,o.kt)("table",{className:"reference-table"},(0,o.kt)("thead",null,(0,o.kt)("tr",null,(0,o.kt)("th",{colSpan:"2"},(0,o.kt)("h3",null,(0,o.kt)("a",{href:"#option-type",id:"option-type"},"--type",(0,o.kt)("span",{class:"option-spec"}," =<type>")))))),(0,o.kt)("tbody",null,(0,o.kt)("tr",null,(0,o.kt)("th",null,"Description"),(0,o.kt)("td",null,(0,o.kt)("div",null,(0,o.kt)("p",null,"The type of key to generate: ",(0,o.kt)("code",null,"ecdsa"),", ",(0,o.kt)("code",null,"ed25519"),", ",(0,o.kt)("code",null,"rsa"))))),(0,o.kt)("tr",null,(0,o.kt)("th",null,"Aliases"),(0,o.kt)("td",null,(0,o.kt)("code",null,"-t"))),(0,o.kt)("tr",null,(0,o.kt)("th",null,"Default"),(0,o.kt)("td",null,"rsa"))),(0,o.kt)("thead",null,(0,o.kt)("tr",null,(0,o.kt)("th",{colSpan:"2"},(0,o.kt)("h3",null,(0,o.kt)("a",{href:"#option-bits",id:"option-bits"},"--bits",(0,o.kt)("span",{class:"option-spec"}," =<bits>")))))),(0,o.kt)("tbody",null,(0,o.kt)("tr",null,(0,o.kt)("th",null,"Description"),(0,o.kt)("td",null,(0,o.kt)("div",null,(0,o.kt)("p",null,"Number of bits in the key")))),(0,o.kt)("tr",null,(0,o.kt)("th",null,"Aliases"),(0,o.kt)("td",null,(0,o.kt)("code",null,"-b"))),(0,o.kt)("tr",null,(0,o.kt)("th",null,"Default"),(0,o.kt)("td",null,"2048"))),(0,o.kt)("thead",null,(0,o.kt)("tr",null,(0,o.kt)("th",{colSpan:"2"},(0,o.kt)("h3",null,(0,o.kt)("a",{href:"#option-annotation",id:"option-annotation"},"--annotation",(0,o.kt)("span",{class:"option-spec"}," =<annotation>")))))),(0,o.kt)("tbody",null,(0,o.kt)("tr",null,(0,o.kt)("th",null,"Description"),(0,o.kt)("td",null,(0,o.kt)("div",null,(0,o.kt)("p",null,"Annotation (comment) in public key. Your Ionic email address will be used")))),(0,o.kt)("tr",null,(0,o.kt)("th",null,"Aliases"),(0,o.kt)("td",null,(0,o.kt)("code",null,"-C"))))))}d.isMDXComponent=!0}}]);