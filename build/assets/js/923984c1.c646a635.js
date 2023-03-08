"use strict";(self.webpackChunkionic_docs=self.webpackChunkionic_docs||[]).push([[59043],{3905:function(t,e,n){n.d(e,{Zo:function(){return p},kt:function(){return k}});var o=n(67294);function l(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function r(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);e&&(o=o.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,o)}return n}function i(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?r(Object(n),!0).forEach((function(e){l(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function a(t,e){if(null==t)return{};var n,o,l=function(t,e){if(null==t)return{};var n,o,l={},r=Object.keys(t);for(o=0;o<r.length;o++)n=r[o],e.indexOf(n)>=0||(l[n]=t[n]);return l}(t,e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);for(o=0;o<r.length;o++)n=r[o],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(l[n]=t[n])}return l}var c=o.createContext({}),s=function(t){var e=o.useContext(c),n=e;return t&&(n="function"==typeof t?t(e):i(i({},e),t)),n},p=function(t){var e=s(t.components);return o.createElement(c.Provider,{value:e},t.children)},u={inlineCode:"code",wrapper:function(t){var e=t.children;return o.createElement(o.Fragment,{},e)}},d=o.forwardRef((function(t,e){var n=t.components,l=t.mdxType,r=t.originalType,c=t.parentName,p=a(t,["components","mdxType","originalType","parentName"]),d=s(n),k=l,f=d["".concat(c,".").concat(k)]||d[k]||u[k]||r;return n?o.createElement(f,i(i({ref:e},p),{},{components:n})):o.createElement(f,i({ref:e},p))}));function k(t,e){var n=arguments,l=e&&e.mdxType;if("string"==typeof t||l){var r=n.length,i=new Array(r);i[0]=d;var a={};for(var c in e)hasOwnProperty.call(e,c)&&(a[c]=e[c]);a.originalType=t,a.mdxType="string"==typeof t?t:l,i[1]=a;for(var s=2;s<r;s++)i[s]=n[s];return o.createElement.apply(null,i)}return o.createElement.apply(null,n)}d.displayName="MDXCreateElement"},50051:function(t,e,n){n.r(e),n.d(e,{frontMatter:function(){return a},contentTitle:function(){return c},metadata:function(){return s},toc:function(){return p},default:function(){return d}});var o=n(87462),l=n(63366),r=(n(67294),n(3905)),i=["components"],a={title:"ionic config set",sidebar_label:"config set"},c=void 0,s={unversionedId:"cli/commands/config-set",id:"cli/commands/config-set",isDocsHomePage:!1,title:"ionic config set",description:"ionic config set: App Command to Write Configuration Values",source:"@site/docs/cli/commands/config-set.md",sourceDirName:"cli/commands",slug:"/cli/commands/config-set",permalink:"/docs/cli/commands/config-set",editUrl:"https://github.com/ionic-team/ionic-cli/edit/develop/packages/@ionic/cli/src/commands/config/set.ts",tags:[],version:"current",frontMatter:{title:"ionic config set",sidebar_label:"config set"},sidebar:"cli",previous:{title:"config get",permalink:"/docs/cli/commands/config-get"},next:{title:"config unset",permalink:"/docs/cli/commands/config-unset"}},p=[{value:"Examples",id:"examples",children:[],level:2},{value:"Inputs",id:"inputs",children:[],level:2},{value:"Options",id:"options",children:[],level:2},{value:"Advanced Options",id:"advanced-options",children:[],level:2}],u={toc:p};function d(t){var e=t.components,n=(0,l.Z)(t,i);return(0,r.kt)("wrapper",(0,o.Z)({},u,n,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("head",null,(0,r.kt)("title",null,"ionic config set: App Command to Write Configuration Values"),(0,r.kt)("meta",{name:"description",content:"ionic config sets config values on Ionic apps. This command writes configuration values to the project's ./ionic.config.json file. Read to learn more."})),(0,r.kt)("p",null,"Set config values"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"$ ionic config set [options]\n")),(0,r.kt)("p",null,"This command writes configuration values to the project's ",(0,r.kt)("strong",{parentName:"p"},"./ionic.config.json")," file. It can also operate on the global CLI configuration (",(0,r.kt)("strong",{parentName:"p"},"~/.ionic/config.json"),") using the ",(0,r.kt)("inlineCode",{parentName:"p"},"--global")," option."),(0,r.kt)("p",null,"For nested properties, separate nest levels with dots. For example, the property name ",(0,r.kt)("inlineCode",{parentName:"p"},"integrations.cordova")," will look in the ",(0,r.kt)("strong",{parentName:"p"},"integrations")," object for the ",(0,r.kt)("strong",{parentName:"p"},"cordova")," property."),(0,r.kt)("p",null,"For multi-app projects, this command is scoped to the current project by default. To operate at the root of the project configuration file instead, use the ",(0,r.kt)("inlineCode",{parentName:"p"},"--root")," option."),(0,r.kt)("p",null,"This command will attempt to coerce ",(0,r.kt)("inlineCode",{parentName:"p"},"value")," into a suitable JSON type. If it is JSON-parsable, such as ",(0,r.kt)("inlineCode",{parentName:"p"},"123"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"true"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"[]"),", etc., then it takes the parsed result. Otherwise, the value is interpreted as a string. For stricter input, use ",(0,r.kt)("inlineCode",{parentName:"p"},"--json"),", which will error with non-JSON values."),(0,r.kt)("p",null,"By default, if ",(0,r.kt)("inlineCode",{parentName:"p"},"property")," exists and is an object or an array, the value is not overwritten. To disable this check and always overwrite the property, use ",(0,r.kt)("inlineCode",{parentName:"p"},"--force"),"."),(0,r.kt)("h2",{id:"examples"},"Examples"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},'$ ionic config set name newAppName\n$ ionic config set name "\\"newAppName\\"" --json\n$ ionic config set -g interactive false\n')),(0,r.kt)("h2",{id:"inputs"},"Inputs"),(0,r.kt)("table",{className:"reference-table"},(0,r.kt)("thead",null,(0,r.kt)("tr",null,(0,r.kt)("th",{colSpan:"2"},(0,r.kt)("h3",null,"property")))),(0,r.kt)("tbody",null,(0,r.kt)("tr",null,(0,r.kt)("th",null,"Description"),(0,r.kt)("td",null,(0,r.kt)("p",null,"The property name you wish to set")))),(0,r.kt)("thead",null,(0,r.kt)("tr",null,(0,r.kt)("th",{colSpan:"2"},(0,r.kt)("h3",null,"value")))),(0,r.kt)("tbody",null,(0,r.kt)("tr",null,(0,r.kt)("th",null,"Description"),(0,r.kt)("td",null,(0,r.kt)("p",null,"The new value of the given property"))))),(0,r.kt)("h2",{id:"options"},"Options"),(0,r.kt)("table",{className:"reference-table"},(0,r.kt)("thead",null,(0,r.kt)("tr",null,(0,r.kt)("th",{colSpan:"2"},(0,r.kt)("h3",null,(0,r.kt)("a",{href:"#option-global",id:"option-global"},"--global"))))),(0,r.kt)("tbody",null,(0,r.kt)("tr",null,(0,r.kt)("th",null,"Description"),(0,r.kt)("td",null,(0,r.kt)("p",null,"Use global CLI config"))),(0,r.kt)("tr",null,(0,r.kt)("th",null,"Aliases"),(0,r.kt)("td",null,(0,r.kt)("code",null,"-g"))))),(0,r.kt)("h2",{id:"advanced-options"},"Advanced Options"),(0,r.kt)("table",{className:"reference-table"},(0,r.kt)("thead",null,(0,r.kt)("tr",null,(0,r.kt)("th",{colSpan:"2"},(0,r.kt)("h3",null,(0,r.kt)("a",{href:"#option-json",id:"option-json"},"--json"))))),(0,r.kt)("tbody",null,(0,r.kt)("tr",null,(0,r.kt)("th",null,"Description"),(0,r.kt)("td",null,(0,r.kt)("div",null,(0,r.kt)("p",null,"Always interpret ",(0,r.kt)("code",null,"value")," as JSON"))))),(0,r.kt)("thead",null,(0,r.kt)("tr",null,(0,r.kt)("th",{colSpan:"2"},(0,r.kt)("h3",null,(0,r.kt)("a",{href:"#option-force",id:"option-force"},"--force"))))),(0,r.kt)("tbody",null,(0,r.kt)("tr",null,(0,r.kt)("th",null,"Description"),(0,r.kt)("td",null,(0,r.kt)("div",null,(0,r.kt)("p",null,"Always overwrite existing values"))))),(0,r.kt)("thead",null,(0,r.kt)("tr",null,(0,r.kt)("th",{colSpan:"2"},(0,r.kt)("h3",null,(0,r.kt)("a",{href:"#option-root",id:"option-root"},"--root"))))),(0,r.kt)("tbody",null,(0,r.kt)("tr",null,(0,r.kt)("th",null,"Description"),(0,r.kt)("td",null,(0,r.kt)("div",null,(0,r.kt)("p",null,"Operate on root of ",(0,r.kt)("strong",null,"./ionic.config.json"))))))))}d.isMDXComponent=!0}}]);