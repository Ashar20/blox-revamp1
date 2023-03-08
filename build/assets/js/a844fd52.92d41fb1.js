"use strict";(self.webpackChunkionic_docs=self.webpackChunkionic_docs||[]).push([[99630],{3905:function(e,t,n){n.d(t,{Zo:function(){return s},kt:function(){return d}});var o=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function a(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},i=Object.keys(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=o.createContext({}),p=function(e){var t=o.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},s=function(e){var t=p(e.components);return o.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},m=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,c=e.parentName,s=a(e,["components","mdxType","originalType","parentName"]),m=p(n),d=r,f=m["".concat(c,".").concat(d)]||m[d]||u[d]||i;return n?o.createElement(f,l(l({ref:t},s),{},{components:n})):o.createElement(f,l({ref:t},s))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,l=new Array(i);l[0]=m;var a={};for(var c in t)hasOwnProperty.call(t,c)&&(a[c]=t[c]);a.originalType=e,a.mdxType="string"==typeof e?e:r,l[1]=a;for(var p=2;p<i;p++)l[p]=n[p];return o.createElement.apply(null,l)}return o.createElement.apply(null,n)}m.displayName="MDXCreateElement"},31035:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return a},contentTitle:function(){return c},metadata:function(){return p},toc:function(){return s},default:function(){return m}});var o=n(87462),r=n(63366),i=(n(67294),n(3905)),l=["components"],a={title:"ionic link",sidebar_label:"link"},c=void 0,p={unversionedId:"cli/commands/link",id:"cli/commands/link",isDocsHomePage:!1,title:"ionic link",description:"Link Command: Use Appflow to Connect Local Apps to Ionic",source:"@site/docs/cli/commands/link.md",sourceDirName:"cli/commands",slug:"/cli/commands/link",permalink:"/docs/cli/commands/link",editUrl:"https://github.com/ionic-team/ionic-cli/edit/develop/packages/@ionic/cli/src/commands/link.ts",tags:[],version:"current",frontMatter:{title:"ionic link",sidebar_label:"link"},sidebar:"cli",previous:{title:"integrations list",permalink:"/docs/cli/commands/integrations-list"},next:{title:"login",permalink:"/docs/cli/commands/login"}},s=[{value:"Examples",id:"examples",children:[],level:2},{value:"Inputs",id:"inputs",children:[],level:2}],u={toc:s};function m(e){var t=e.components,n=(0,r.Z)(e,l);return(0,i.kt)("wrapper",(0,o.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("head",null,(0,i.kt)("title",null,"Link Command: Use Appflow to Connect Local Apps to Ionic"),(0,i.kt)("meta",{name:"description",content:"Link apps on Appflow to local Ionic projects with this command. Learn more about how to connect local apps to Ionic using the link command."})),(0,i.kt)("p",null,"Connect local apps to Ionic"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"$ ionic link [options]\n")),(0,i.kt)("p",null,"Link apps on Appflow to local Ionic projects with this command."),(0,i.kt)("p",null,"If the ",(0,i.kt)("inlineCode",{parentName:"p"},"id")," argument is excluded, this command will prompt you to select an app from Appflow."),(0,i.kt)("p",null,"Appflow uses a git-based workflow to manage app updates. During the linking process, select ",(0,i.kt)("strong",{parentName:"p"},"GitHub")," (recommended) or ",(0,i.kt)("strong",{parentName:"p"},"Appflow")," as a git host. See our ",(0,i.kt)("a",{parentName:"p",href:"https://ionicframework.com/docs/appflow/basics/git"},"documentation")," for more information."),(0,i.kt)("p",null,"Ultimately, this command sets the ",(0,i.kt)("strong",{parentName:"p"},"id")," property in ",(0,i.kt)("strong",{parentName:"p"},"./ionic.config.json"),", which marks this app as linked."),(0,i.kt)("p",null,"If you are having issues linking, please get in touch with our ",(0,i.kt)("a",{parentName:"p",href:"https://ion.link/support-request"},"Support"),"."),(0,i.kt)("h2",{id:"examples"},"Examples"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"$ ionic link \n$ ionic link a1b2c3d4\n")),(0,i.kt)("h2",{id:"inputs"},"Inputs"),(0,i.kt)("table",{className:"reference-table"},(0,i.kt)("thead",null,(0,i.kt)("tr",null,(0,i.kt)("th",{colSpan:"2"},(0,i.kt)("h3",null,"id")))),(0,i.kt)("tbody",null,(0,i.kt)("tr",null,(0,i.kt)("th",null,"Description"),(0,i.kt)("td",null,(0,i.kt)("p",null,"The Appflow ID of the app to link (e.g. ",(0,i.kt)("code",null,"a1b2c3d4"),")"))))))}m.isMDXComponent=!0}}]);