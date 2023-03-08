"use strict";(self.webpackChunkionic_docs=self.webpackChunkionic_docs||[]).push([[44957],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return f}});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function a(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},s=Object.keys(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=r.createContext({}),p=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=p(e.components);return r.createElement(c.Provider,{value:t},e.children)},l={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,s=e.originalType,c=e.parentName,u=a(e,["components","mdxType","originalType","parentName"]),m=p(n),f=o,d=m["".concat(c,".").concat(f)]||m[f]||l[f]||s;return n?r.createElement(d,i(i({ref:t},u),{},{components:n})):r.createElement(d,i({ref:t},u))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var s=n.length,i=new Array(s);i[0]=m;var a={};for(var c in t)hasOwnProperty.call(t,c)&&(a[c]=t[c]);a.originalType=e,a.mdxType="string"==typeof e?e:o,i[1]=a;for(var p=2;p<s;p++)i[p]=n[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},53164:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return a},contentTitle:function(){return c},metadata:function(){return p},toc:function(){return u},default:function(){return m}});var r=n(87462),o=n(63366),s=(n(67294),n(3905)),i=["components"],a={title:"ionic ssh setup",sidebar_label:"ssh setup"},c=void 0,p={unversionedId:"cli/commands/ssh-setup",id:"cli/commands/ssh-setup",isDocsHomePage:!1,title:"ionic ssh setup",description:"Setup your Ionic SSH keys automatically",source:"@site/docs/cli/commands/ssh-setup.md",sourceDirName:"cli/commands",slug:"/cli/commands/ssh-setup",permalink:"/docs/cli/commands/ssh-setup",editUrl:"https://github.com/ionic-team/ionic-cli/edit/develop/packages/@ionic/cli/src/commands/ssh/setup.ts",tags:[],version:"current",frontMatter:{title:"ionic ssh setup",sidebar_label:"ssh setup"},sidebar:"cli",previous:{title:"ssh list",permalink:"/docs/cli/commands/ssh-list"},next:{title:"ssh use",permalink:"/docs/cli/commands/ssh-use"}},u=[],l={toc:u};function m(e){var t=e.components,n=(0,o.Z)(e,i);return(0,s.kt)("wrapper",(0,r.Z)({},l,n,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("p",null,"Setup your Ionic SSH keys automatically"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-shell"},"$ ionic ssh setup [options]\n")),(0,s.kt)("p",null,"This command offers a setup wizard for Ionic SSH keys using a series of prompts. For more control, see the commands available for managing SSH keys with the ",(0,s.kt)("inlineCode",{parentName:"p"},"ionic ssh --help")," command. For an entirely manual approach, see ",(0,s.kt)("strong",{parentName:"p"},"Personal Settings")," => ",(0,s.kt)("strong",{parentName:"p"},"SSH Keys")," in the ",(0,s.kt)("a",{parentName:"p",href:"https://dashboard.ionicframework.com/settings/ssh-keys"},"Dashboard"),"."),(0,s.kt)("p",null,"If you are having issues setting up SSH keys, please get in touch with our ",(0,s.kt)("a",{parentName:"p",href:"https://ion.link/support-request"},"Support"),"."))}m.isMDXComponent=!0}}]);