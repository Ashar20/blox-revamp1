"use strict";(self.webpackChunkionic_docs=self.webpackChunkionic_docs||[]).push([[18233],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return m}});var o=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},c=Object.keys(e);for(o=0;o<c.length;o++)n=c[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(o=0;o<c.length;o++)n=c[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var a=o.createContext({}),s=function(e){var t=o.useContext(a),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=s(e.components);return o.createElement(a.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},p=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,c=e.originalType,a=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),p=s(n),m=r,f=p["".concat(a,".").concat(m)]||p[m]||d[m]||c;return n?o.createElement(f,i(i({ref:t},u),{},{components:n})):o.createElement(f,i({ref:t},u))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var c=n.length,i=new Array(c);i[0]=p;var l={};for(var a in t)hasOwnProperty.call(t,a)&&(l[a]=t[a]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var s=2;s<c;s++)i[s]=n[s];return o.createElement.apply(null,i)}return o.createElement.apply(null,n)}p.displayName="MDXCreateElement"},72321:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return l},contentTitle:function(){return a},metadata:function(){return s},toc:function(){return u},default:function(){return p}});var o=n(87462),r=n(63366),c=(n(67294),n(3905)),i=["components"],l={title:"ionic doctor check",sidebar_label:"doctor check"},a=void 0,s={unversionedId:"cli/commands/doctor-check",id:"cli/commands/doctor-check",isDocsHomePage:!1,title:"ionic doctor check",description:"ionic doctor check: Command to Check Issues on Ionic Projects",source:"@site/docs/cli/commands/doctor-check.md",sourceDirName:"cli/commands",slug:"/cli/commands/doctor-check",permalink:"/developer/docs/cli/commands/doctor-check",editUrl:"https://github.com/ionic-team/ionic-cli/edit/develop/packages/@ionic/cli/src/commands/doctor/check.ts",tags:[],version:"current",frontMatter:{title:"ionic doctor check",sidebar_label:"doctor check"},sidebar:"cli",previous:{title:"docs",permalink:"/developer/docs/cli/commands/docs"},next:{title:"doctor list",permalink:"/developer/docs/cli/commands/doctor-list"}},u=[{value:"Examples",id:"examples",children:[],level:2},{value:"Inputs",id:"inputs",children:[],level:2}],d={toc:u};function p(e){var t=e.components,n=(0,r.Z)(e,i);return(0,c.kt)("wrapper",(0,o.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,c.kt)("head",null,(0,c.kt)("title",null,"ionic doctor check: Command to Check Issues on Ionic Projects"),(0,c.kt)("meta",{name:"description",content:"Check the health of your Ionic project using the doctor check command. Read more for usage and how to check issues with examples from Ionic Framework."})),(0,c.kt)("p",null,"Check the health of your Ionic project"),(0,c.kt)("pre",null,(0,c.kt)("code",{parentName:"pre",className:"language-shell"},"$ ionic doctor check [options]\n")),(0,c.kt)("p",null,"This command detects and prints common issues and suggested steps to fix them."),(0,c.kt)("p",null,"Some issues can be fixed automatically. See ",(0,c.kt)("inlineCode",{parentName:"p"},"ionic doctor treat --help"),"."),(0,c.kt)("p",null,"Optionally supply the ",(0,c.kt)("inlineCode",{parentName:"p"},"id")," argument to check a single issue. Use ",(0,c.kt)("inlineCode",{parentName:"p"},"ionic doctor list")," to list all known issues."),(0,c.kt)("h2",{id:"examples"},"Examples"),(0,c.kt)("pre",null,(0,c.kt)("code",{parentName:"pre",className:"language-shell"},"$ ionic doctor check \n$ ionic doctor check git-not-used\n")),(0,c.kt)("h2",{id:"inputs"},"Inputs"),(0,c.kt)("table",{className:"reference-table"},(0,c.kt)("thead",null,(0,c.kt)("tr",null,(0,c.kt)("th",{colSpan:"2"},(0,c.kt)("h3",null,"id")))),(0,c.kt)("tbody",null,(0,c.kt)("tr",null,(0,c.kt)("th",null,"Description"),(0,c.kt)("td",null,(0,c.kt)("p",null,"The issue identifier"))))))}p.isMDXComponent=!0}}]);