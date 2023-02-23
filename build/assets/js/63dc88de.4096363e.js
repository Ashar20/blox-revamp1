"use strict";(self.webpackChunkionic_docs=self.webpackChunkionic_docs||[]).push([[15949],{3905:function(e,n,t){t.d(n,{Zo:function(){return p},kt:function(){return d}});var o=t(67294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);n&&(o=o.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,o)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function a(e,n){if(null==e)return{};var t,o,r=function(e,n){if(null==e)return{};var t,o,r={},i=Object.keys(e);for(o=0;o<i.length;o++)t=i[o],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)t=i[o],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var c=o.createContext({}),s=function(e){var n=o.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},p=function(e){var n=s(e.components);return o.createElement(c.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return o.createElement(o.Fragment,{},n)}},m=o.forwardRef((function(e,n){var t=e.components,r=e.mdxType,i=e.originalType,c=e.parentName,p=a(e,["components","mdxType","originalType","parentName"]),m=s(t),d=r,g=m["".concat(c,".").concat(d)]||m[d]||u[d]||i;return t?o.createElement(g,l(l({ref:n},p),{},{components:t})):o.createElement(g,l({ref:n},p))}));function d(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var i=t.length,l=new Array(i);l[0]=m;var a={};for(var c in n)hasOwnProperty.call(n,c)&&(a[c]=n[c]);a.originalType=e,a.mdxType="string"==typeof e?e:r,l[1]=a;for(var s=2;s<i;s++)l[s]=t[s];return o.createElement.apply(null,l)}return o.createElement.apply(null,t)}m.displayName="MDXCreateElement"},66153:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return a},contentTitle:function(){return c},metadata:function(){return s},toc:function(){return p},default:function(){return m}});var o=t(87462),r=t(63366),i=(t(67294),t(3905)),l=["components"],a={sidebar_label:"login"},c="ionic login",s={unversionedId:"cli/commands/login",id:"version-v5/cli/commands/login",isDocsHomePage:!1,title:"ionic login",description:"Log in to Ionic",source:"@site/versioned_docs/version-v5/cli/commands/login.md",sourceDirName:"cli/commands",slug:"/cli/commands/login",permalink:"/developer/docs/v5/cli/commands/login",editUrl:"https://github.com/ionic-team/ionic-cli/edit/develop/packages/@ionic/cli/src/commands/login.ts",tags:[],version:"v5",frontMatter:{sidebar_label:"login"},sidebar:"version-v5/cli",previous:{title:"link",permalink:"/developer/docs/v5/cli/commands/link"},next:{title:"logout",permalink:"/developer/docs/v5/cli/commands/logout"}},p=[{value:"Examples",id:"examples",children:[],level:2},{value:"Inputs",id:"inputs",children:[],level:2}],u={toc:p};function m(e){var n=e.components,t=(0,r.Z)(e,l);return(0,i.kt)("wrapper",(0,o.Z)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"ionic-login"},"ionic login"),(0,i.kt)("p",null,"Log in to Ionic"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"ionic login [options]\n")),(0,i.kt)("p",null,"Authenticate with Ionic and retrieve a user token, which is stored in the CLI config. The most secure way to log in is running ",(0,i.kt)("inlineCode",{parentName:"p"},"ionic login")," without arguments, which will open a browser where you can submit your credentials."),(0,i.kt)("p",null,"If the ",(0,i.kt)("inlineCode",{parentName:"p"},"IONIC_TOKEN")," environment variable is set, the CLI will automatically authenticate you. To retrieve your user token, first use ",(0,i.kt)("inlineCode",{parentName:"p"},"ionic login <email> <password>")," to log in, then use ",(0,i.kt)("inlineCode",{parentName:"p"},"ionic config get -g tokens.user")," to print the token. (",(0,i.kt)("strong",{parentName:"p"},"Note"),": Tokens retrieved from the browser login are short-lived and not recommended for use with ",(0,i.kt)("inlineCode",{parentName:"p"},"IONIC_TOKEN"),".)"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"ionic login")," will also accept ",(0,i.kt)("inlineCode",{parentName:"p"},"password")," through stdin, e.g.: ",(0,i.kt)("inlineCode",{parentName:"p"},'echo "<password>" | ionic login <email>'),"."),(0,i.kt)("p",null,"If you need to create an Ionic account, use ",(0,i.kt)("inlineCode",{parentName:"p"},"ionic signup")," or the Ionic ",(0,i.kt)("a",{parentName:"p",href:"https://ionicframework.com/signup"},"Website"),"."),(0,i.kt)("p",null,"You can reset your password in the ",(0,i.kt)("a",{parentName:"p",href:"https://dashboard.ionicframework.com/reset-password"},"Dashboard"),"."),(0,i.kt)("p",null,"If you are having issues logging in, please get in touch with our ",(0,i.kt)("a",{parentName:"p",href:"https://ion.link/support-request"},"Support"),"."),(0,i.kt)("h2",{id:"examples"},"Examples"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"$ ionic login\n$ ionic login john@example.com\n$ ionic login hello@example.com secret\n")),(0,i.kt)("h2",{id:"inputs"},"Inputs"),(0,i.kt)("table",{className:"reference-table"},(0,i.kt)("thead",null,(0,i.kt)("tr",null,(0,i.kt)("th",{colSpan:"2"},(0,i.kt)("h3",null,"email")))),(0,i.kt)("tbody",null,(0,i.kt)("tr",null,(0,i.kt)("th",null,"Description"),(0,i.kt)("td",null,(0,i.kt)("p",null,"Your email address")))),(0,i.kt)("thead",null,(0,i.kt)("tr",null,(0,i.kt)("th",{colSpan:"2"},(0,i.kt)("h3",null,"password")))),(0,i.kt)("tbody",null,(0,i.kt)("tr",null,(0,i.kt)("th",null,"Description"),(0,i.kt)("td",null,(0,i.kt)("p",null,"Your password"))))))}m.isMDXComponent=!0}}]);