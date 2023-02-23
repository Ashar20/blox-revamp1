"use strict";(self.webpackChunkionic_docs=self.webpackChunkionic_docs||[]).push([[67082],{3905:function(e,t,n){n.d(t,{Zo:function(){return s},kt:function(){return d}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),p=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},s=function(e){var t=p(e.components);return r.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),m=p(n),d=a,g=m["".concat(c,".").concat(d)]||m[d]||u[d]||o;return n?r.createElement(g,i(i({ref:t},s),{},{components:n})):r.createElement(g,i({ref:t},s))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=m;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var p=2;p<o;p++)i[p]=n[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},24758:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return l},contentTitle:function(){return c},metadata:function(){return p},toc:function(){return s},default:function(){return m}});var r=n(87462),a=n(63366),o=(n(67294),n(3905)),i=["components"],l={sidebar_label:"generate"},c="ionic generate",p={unversionedId:"cli/commands/generate",id:"version-v5/cli/commands/generate",isDocsHomePage:!1,title:"ionic generate",description:"Create Pages, Components, & Angular Features",source:"@site/versioned_docs/version-v5/cli/commands/generate.md",sourceDirName:"cli/commands",slug:"/cli/commands/generate",permalink:"/developer/docs/v5/cli/commands/generate",editUrl:"https://github.com/ionic-team/ionic-cli/edit/develop/packages/@ionic/cli/src/commands/generate.ts",tags:[],version:"v5",frontMatter:{sidebar_label:"generate"},sidebar:"version-v5/cli",previous:{title:"enterprise register",permalink:"/developer/docs/v5/cli/commands/enterprise-register"},next:{title:"git remote",permalink:"/developer/docs/v5/cli/commands/git-remote"}},s=[{value:"Examples",id:"examples",children:[],level:2},{value:"Inputs",id:"inputs",children:[],level:2}],u={toc:s};function m(e){var t=e.components,n=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"ionic-generate"},"ionic generate"),(0,o.kt)("p",null,"Create Pages, Components, & Angular Features"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"ionic generate [options]\n")),(0,o.kt)("p",null,"Automatically create framework features with Ionic Generate. This command uses the Angular CLI to generate features such as ",(0,o.kt)("inlineCode",{parentName:"p"},"pages"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"components"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"directives"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"services"),", and more."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"For a full list of available types, use ",(0,o.kt)("inlineCode",{parentName:"li"},"npx ng g --help")),(0,o.kt)("li",{parentName:"ul"},"For a list of options for a types, use ",(0,o.kt)("inlineCode",{parentName:"li"},"npx ng g <type> --help"))),(0,o.kt)("p",null,"You can specify a path to nest your feature within any number of subdirectories. For example, specify a name of ",(0,o.kt)("inlineCode",{parentName:"p"},'"pages/New Page"')," to generate page files at ",(0,o.kt)("strong",{parentName:"p"},"src/app/pages/new-page/"),"."),(0,o.kt)("p",null,"To test a generator before file modifications are made, use the ",(0,o.kt)("inlineCode",{parentName:"p"},"--dry-run")," option."),(0,o.kt)("h2",{id:"examples"},"Examples"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"$ ionic generate\n$ ionic generate page\n$ ionic generate page contact\n$ ionic generate component contact/form\n$ ionic generate component login-form --change-detection=OnPush\n$ ionic generate directive ripple --skip-import\n$ ionic generate service api/user\n")),(0,o.kt)("h2",{id:"inputs"},"Inputs"),(0,o.kt)("table",{className:"reference-table"},(0,o.kt)("thead",null,(0,o.kt)("tr",null,(0,o.kt)("th",{colSpan:"2"},(0,o.kt)("h3",null,"type")))),(0,o.kt)("tbody",null,(0,o.kt)("tr",null,(0,o.kt)("th",null,"Description"),(0,o.kt)("td",null,(0,o.kt)("p",null,"The type of feature (e.g. ",(0,o.kt)("code",null,"page"),", ",(0,o.kt)("code",null,"component"),", ",(0,o.kt)("code",null,"directive"),","," ",(0,o.kt)("code",null,"service"),")")))),(0,o.kt)("thead",null,(0,o.kt)("tr",null,(0,o.kt)("th",{colSpan:"2"},(0,o.kt)("h3",null,"name")))),(0,o.kt)("tbody",null,(0,o.kt)("tr",null,(0,o.kt)("th",null,"Description"),(0,o.kt)("td",null,(0,o.kt)("p",null,"The name/path of the feature being generated"))))))}m.isMDXComponent=!0}}]);