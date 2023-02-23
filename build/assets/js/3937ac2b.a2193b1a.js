"use strict";(self.webpackChunkionic_docs=self.webpackChunkionic_docs||[]).push([[9546],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return f}});var o=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},i=Object.keys(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var a=o.createContext({}),s=function(e){var t=o.useContext(a),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},u=function(e){var t=s(e.components);return o.createElement(a.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},d=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,a=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),d=s(n),f=r,m=d["".concat(a,".").concat(f)]||d[f]||p[f]||i;return n?o.createElement(m,l(l({ref:t},u),{},{components:n})):o.createElement(m,l({ref:t},u))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,l=new Array(i);l[0]=d;var c={};for(var a in t)hasOwnProperty.call(t,a)&&(c[a]=t[a]);c.originalType=e,c.mdxType="string"==typeof e?e:r,l[1]=c;for(var s=2;s<i;s++)l[s]=n[s];return o.createElement.apply(null,l)}return o.createElement.apply(null,n)}d.displayName="MDXCreateElement"},48781:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return c},contentTitle:function(){return a},metadata:function(){return s},toc:function(){return u},default:function(){return d}});var o=n(87462),r=n(63366),i=(n(67294),n(3905)),l=["components"],c={sidebar_label:"config unset"},a="ionic config unset",s={unversionedId:"cli/commands/config-unset",id:"version-v5/cli/commands/config-unset",isDocsHomePage:!1,title:"ionic config unset",description:"Delete config values",source:"@site/versioned_docs/version-v5/cli/commands/config-unset.md",sourceDirName:"cli/commands",slug:"/cli/commands/config-unset",permalink:"/developer/docs/v5/cli/commands/config-unset",editUrl:"https://github.com/ionic-team/ionic-cli/edit/develop/packages/@ionic/cli/src/commands/config/unset.ts",tags:[],version:"v5",frontMatter:{sidebar_label:"config unset"},sidebar:"version-v5/cli",previous:{title:"config set",permalink:"/developer/docs/v5/cli/commands/config-set"},next:{title:"cordova build",permalink:"/developer/docs/v5/cli/commands/cordova-build"}},u=[{value:"Examples",id:"examples",children:[],level:2},{value:"Inputs",id:"inputs",children:[],level:2},{value:"Options",id:"options",children:[],level:2},{value:"Advanced Options",id:"advanced-options",children:[],level:2}],p={toc:u};function d(e){var t=e.components,n=(0,r.Z)(e,l);return(0,i.kt)("wrapper",(0,o.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"ionic-config-unset"},"ionic config unset"),(0,i.kt)("p",null,"Delete config values"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"ionic config unset [options]\n")),(0,i.kt)("p",null,"This command deletes configuration values from the project's ",(0,i.kt)("strong",{parentName:"p"},"./ionic.config.json")," file. It can also operate on the global CLI configuration (",(0,i.kt)("strong",{parentName:"p"},"~/.ionic/config.json"),") using the ",(0,i.kt)("inlineCode",{parentName:"p"},"--global")," option."),(0,i.kt)("p",null,"For nested properties, separate nest levels with dots. For example, the property name ",(0,i.kt)("inlineCode",{parentName:"p"},"integrations.cordova")," will look in the ",(0,i.kt)("strong",{parentName:"p"},"integrations")," object for the ",(0,i.kt)("strong",{parentName:"p"},"cordova")," property."),(0,i.kt)("p",null,"For multi-app projects, this command is scoped to the current project by default. To operate at the root of the project configuration file instead, use the ",(0,i.kt)("inlineCode",{parentName:"p"},"--root")," option."),(0,i.kt)("h2",{id:"examples"},"Examples"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"$ ionic config unset\n$ ionic config unset type\n$ ionic config unset --global git.setup\n$ ionic config unset -g interactive\n")),(0,i.kt)("h2",{id:"inputs"},"Inputs"),(0,i.kt)("table",{className:"reference-table"},(0,i.kt)("thead",null,(0,i.kt)("tr",null,(0,i.kt)("th",{colSpan:"2"},(0,i.kt)("h3",null,"property")))),(0,i.kt)("tbody",null,(0,i.kt)("tr",null,(0,i.kt)("th",null,"Description"),(0,i.kt)("td",null,(0,i.kt)("p",null,"The property name you wish to delete"))))),(0,i.kt)("h2",{id:"options"},"Options"),(0,i.kt)("table",{className:"reference-table"},(0,i.kt)("thead",null,(0,i.kt)("tr",null,(0,i.kt)("th",{colSpan:"2"},(0,i.kt)("h3",null,(0,i.kt)("a",{href:"#option-global",id:"option-global"},"--global"))))),(0,i.kt)("tbody",null,(0,i.kt)("tr",null,(0,i.kt)("th",null,"Description"),(0,i.kt)("td",null,(0,i.kt)("p",null,"Use global CLI config"))),(0,i.kt)("tr",null,(0,i.kt)("th",null,"Aliases"),(0,i.kt)("td",null,(0,i.kt)("code",null,"-g"))))),(0,i.kt)("h2",{id:"advanced-options"},"Advanced Options"),(0,i.kt)("table",{className:"reference-table"},(0,i.kt)("thead",null,(0,i.kt)("tr",null,(0,i.kt)("th",{colSpan:"2"},(0,i.kt)("h3",null,(0,i.kt)("a",{href:"#option-root",id:"option-root"},"--root"))))),(0,i.kt)("tbody",null,(0,i.kt)("tr",null,(0,i.kt)("th",null,"Description"),(0,i.kt)("td",null,(0,i.kt)("div",null,(0,i.kt)("p",null,"Operate on root of ",(0,i.kt)("strong",null,"./ionic.config.json"))))))))}d.isMDXComponent=!0}}]);