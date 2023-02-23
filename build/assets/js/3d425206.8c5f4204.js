"use strict";(self.webpackChunkionic_docs=self.webpackChunkionic_docs||[]).push([[35780],{3905:function(e,t,n){n.d(t,{Zo:function(){return s},kt:function(){return m}});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function a(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=r.createContext({}),u=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},s=function(e){var t=u(e.components);return r.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,c=e.parentName,s=a(e,["components","mdxType","originalType","parentName"]),d=u(n),m=o,f=d["".concat(c,".").concat(m)]||d[m]||p[m]||i;return n?r.createElement(f,l(l({ref:t},s),{},{components:n})):r.createElement(f,l({ref:t},s))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,l=new Array(i);l[0]=d;var a={};for(var c in t)hasOwnProperty.call(t,c)&&(a[c]=t[c]);a.originalType=e,a.mdxType="string"==typeof e?e:o,l[1]=a;for(var u=2;u<i;u++)l[u]=n[u];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},16345:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return a},contentTitle:function(){return c},metadata:function(){return u},toc:function(){return s},default:function(){return d}});var r=n(87462),o=n(63366),i=(n(67294),n(3905)),l=["components"],a={title:"ionic login",sidebar_label:"login"},c=void 0,u={unversionedId:"cli/commands/login",id:"cli/commands/login",isDocsHomePage:!1,title:"ionic login",description:"Ionic Secure App Login: Authenticate and Retrieve a User Token",source:"@site/docs/cli/commands/login.md",sourceDirName:"cli/commands",slug:"/cli/commands/login",permalink:"/developer/docs/cli/commands/login",editUrl:"https://github.com/ionic-team/ionic-cli/edit/develop/packages/@ionic/cli/src/commands/login.ts",tags:[],version:"current",frontMatter:{title:"ionic login",sidebar_label:"login"},sidebar:"cli",previous:{title:"link",permalink:"/developer/docs/cli/commands/link"},next:{title:"logout",permalink:"/developer/docs/cli/commands/logout"}},s=[{value:"Examples",id:"examples",children:[],level:2},{value:"Inputs",id:"inputs",children:[],level:2}],p={toc:s};function d(e){var t=e.components,n=(0,o.Z)(e,l);return(0,i.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("head",null,(0,i.kt)("title",null,"Ionic Secure App Login: Authenticate and Retrieve a User Token"),(0,i.kt)("meta",{name:"description",content:"For a secure login, authenticate with Ionic and retrieve a user token \u2014 stored in the CLI config. Learn the most secure way to log in to Ionic Framework apps."})),(0,i.kt)("p",null,"Log in to Ionic"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"$ ionic login [options]\n")),(0,i.kt)("p",null,"Authenticate with Ionic and retrieve a user token, which is stored in the CLI config. Running ",(0,i.kt)("inlineCode",{parentName:"p"},"ionic login")," will open a browser where you can submit your credentials."),(0,i.kt)("p",null,"If the ",(0,i.kt)("inlineCode",{parentName:"p"},"IONIC_TOKEN")," environment variable is set, the CLI will automatically authenticate you. Use the Dashboard to generate a Personal Access Token."),(0,i.kt)("p",null,"If you need to create an Ionic account, use ",(0,i.kt)("inlineCode",{parentName:"p"},"ionic signup")," or the Ionic ",(0,i.kt)("a",{parentName:"p",href:"https://ionicframework.com/signup"},"Website"),"."),(0,i.kt)("p",null,"If you are having issues logging in, please get in touch with our ",(0,i.kt)("a",{parentName:"p",href:"https://ion.link/support-request"},"Support"),"."),(0,i.kt)("h2",{id:"examples"},"Examples"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"$ ionic login \n")),(0,i.kt)("h2",{id:"inputs"},"Inputs"),(0,i.kt)("table",{className:"reference-table"},(0,i.kt)("thead",null,(0,i.kt)("tr",null,(0,i.kt)("th",{colSpan:"2"},(0,i.kt)("h3",null,"email")))),(0,i.kt)("tbody",null,(0,i.kt)("tr",null,(0,i.kt)("th",null,"Description"),(0,i.kt)("td",null,(0,i.kt)("p",null,"Your email address (deprecated)")))),(0,i.kt)("thead",null,(0,i.kt)("tr",null,(0,i.kt)("th",{colSpan:"2"},(0,i.kt)("h3",null,"password")))),(0,i.kt)("tbody",null,(0,i.kt)("tr",null,(0,i.kt)("th",null,"Description"),(0,i.kt)("td",null,(0,i.kt)("p",null,"Your password (deprecated)"))))))}d.isMDXComponent=!0}}]);