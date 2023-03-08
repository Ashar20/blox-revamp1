"use strict";(self.webpackChunkionic_docs=self.webpackChunkionic_docs||[]).push([[47803],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return m}});var o=n(67294);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function a(e,t){if(null==e)return{};var n,o,l=function(e,t){if(null==e)return{};var n,o,l={},r=Object.keys(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var c=o.createContext({}),p=function(e){var t=o.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=p(e.components);return o.createElement(c.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},s=o.forwardRef((function(e,t){var n=e.components,l=e.mdxType,r=e.originalType,c=e.parentName,u=a(e,["components","mdxType","originalType","parentName"]),s=p(n),m=l,k=s["".concat(c,".").concat(m)]||s[m]||d[m]||r;return n?o.createElement(k,i(i({ref:t},u),{},{components:n})):o.createElement(k,i({ref:t},u))}));function m(e,t){var n=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var r=n.length,i=new Array(r);i[0]=s;var a={};for(var c in t)hasOwnProperty.call(t,c)&&(a[c]=t[c]);a.originalType=e,a.mdxType="string"==typeof e?e:l,i[1]=a;for(var p=2;p<r;p++)i[p]=n[p];return o.createElement.apply(null,i)}return o.createElement.apply(null,n)}s.displayName="MDXCreateElement"},75738:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return a},contentTitle:function(){return c},metadata:function(){return p},toc:function(){return u},default:function(){return s}});var o=n(87462),l=n(63366),r=(n(67294),n(3905)),i=["components"],a={sidebar_label:"deploy configure"},c="ionic deploy configure",p={unversionedId:"cli/commands/deploy-configure",id:"version-v5/cli/commands/deploy-configure",isDocsHomePage:!1,title:"ionic deploy configure",description:"Overrides Appflow Deploy configuration",source:"@site/versioned_docs/version-v5/cli/commands/deploy-configure.md",sourceDirName:"cli/commands",slug:"/cli/commands/deploy-configure",permalink:"/docs/v5/cli/commands/deploy-configure",editUrl:"https://github.com/ionic-team/ionic-cli/edit/develop/packages/@ionic/cli/src/commands/deploy/configure.ts",tags:[],version:"v5",frontMatter:{sidebar_label:"deploy configure"},sidebar:"version-v5/cli",previous:{title:"deploy build",permalink:"/docs/v5/cli/commands/deploy-build"},next:{title:"deploy manifest",permalink:"/docs/v5/cli/commands/deploy-manifest"}},u=[{value:"Examples",id:"examples",children:[],level:2},{value:"Inputs",id:"inputs",children:[],level:2},{value:"Options",id:"options",children:[],level:2},{value:"Advanced Options",id:"advanced-options",children:[],level:2}],d={toc:u};function s(e){var t=e.components,n=(0,l.Z)(e,i);return(0,r.kt)("wrapper",(0,o.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"ionic-deploy-configure"},"ionic deploy configure"),(0,r.kt)("p",null,"Overrides Appflow Deploy configuration"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"ionic deploy configure [options]\n")),(0,r.kt)("p",null,"This command overrides configuration for the Appflow Deploy plugin (",(0,r.kt)("inlineCode",{parentName:"p"},"cordova-plugin-ionic"),") in Capacitor projects."),(0,r.kt)("p",null,"For Capacitor projects, if the plugin is already installed, it overrides the configuration variables in the native projects."),(0,r.kt)("p",null,"For Cordova projects this is not implemented because it is better to reinstall the plugin with the different parameters and let Cordova deal with the changes."),(0,r.kt)("h2",{id:"examples"},"Examples"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},'$ ionic deploy configure\n$ ionic deploy configure --app-id=abcd1234 --channel-name="Master" --update-method=background\n$ ionic deploy configure --max-store=2 --min-background-duration=30\n$ ionic deploy configure --app-id=abcd1234 --channel-name="Master" --update-method=background --max-store=2 --min-background-duration=30\n$ ionic deploy configure android\n$ ionic deploy configure ios\n')),(0,r.kt)("h2",{id:"inputs"},"Inputs"),(0,r.kt)("table",{className:"reference-table"},(0,r.kt)("thead",null,(0,r.kt)("tr",null,(0,r.kt)("th",{colSpan:"2"},(0,r.kt)("h3",null,"platform")))),(0,r.kt)("tbody",null,(0,r.kt)("tr",null,(0,r.kt)("th",null,"Description"),(0,r.kt)("td",null,(0,r.kt)("p",null,"The native platform (e.g. ",(0,r.kt)("code",null,"ios"),", ",(0,r.kt)("code",null,"android"),")"))))),(0,r.kt)("h2",{id:"options"},"Options"),(0,r.kt)("table",{className:"reference-table"},(0,r.kt)("thead",null,(0,r.kt)("tr",null,(0,r.kt)("th",{colSpan:"2"},(0,r.kt)("h3",null,(0,r.kt)("a",{href:"#option-app-id",id:"option-app-id"},"--app-id",(0,r.kt)("span",{class:"option-spec"}," =<id>")))))),(0,r.kt)("tbody",null,(0,r.kt)("tr",null,(0,r.kt)("th",null,"Description"),(0,r.kt)("td",null,(0,r.kt)("p",null,"Your Appflow app ID")))),(0,r.kt)("thead",null,(0,r.kt)("tr",null,(0,r.kt)("th",{colSpan:"2"},(0,r.kt)("h3",null,(0,r.kt)("a",{href:"#option-channel-name",id:"option-channel-name"},"--channel-name",(0,r.kt)("span",{class:"option-spec"}," =<name>")))))),(0,r.kt)("tbody",null,(0,r.kt)("tr",null,(0,r.kt)("th",null,"Description"),(0,r.kt)("td",null,(0,r.kt)("p",null,"The channel to check for updates from")))),(0,r.kt)("thead",null,(0,r.kt)("tr",null,(0,r.kt)("th",{colSpan:"2"},(0,r.kt)("h3",null,(0,r.kt)("a",{href:"#option-update-method",id:"option-update-method"},"--update-method",(0,r.kt)("span",{class:"option-spec"}," =<name>")))))),(0,r.kt)("tbody",null,(0,r.kt)("tr",null,(0,r.kt)("th",null,"Description"),(0,r.kt)("td",null,(0,r.kt)("p",null,"The update method that dictates the behavior of the plugin"))))),(0,r.kt)("h2",{id:"advanced-options"},"Advanced Options"),(0,r.kt)("table",{className:"reference-table"},(0,r.kt)("thead",null,(0,r.kt)("tr",null,(0,r.kt)("th",{colSpan:"2"},(0,r.kt)("h3",null,(0,r.kt)("a",{href:"#option-max-store",id:"option-max-store"},"--max-store",(0,r.kt)("span",{class:"option-spec"}," =<quantity>")))))),(0,r.kt)("tbody",null,(0,r.kt)("tr",null,(0,r.kt)("th",null,"Description"),(0,r.kt)("td",null,(0,r.kt)("div",null,(0,r.kt)("p",null,"The maximum number of downloaded versions to store on the device"))))),(0,r.kt)("thead",null,(0,r.kt)("tr",null,(0,r.kt)("th",{colSpan:"2"},(0,r.kt)("h3",null,(0,r.kt)("a",{href:"#option-min-background-duration",id:"option-min-background-duration"},"--min-background-duration",(0,r.kt)("span",{class:"option-spec"}," =<seconds>")))))),(0,r.kt)("tbody",null,(0,r.kt)("tr",null,(0,r.kt)("th",null,"Description"),(0,r.kt)("td",null,(0,r.kt)("div",null,(0,r.kt)("p",null,"The minimum duration after which the app checks for an update in the background")))))))}s.isMDXComponent=!0}}]);