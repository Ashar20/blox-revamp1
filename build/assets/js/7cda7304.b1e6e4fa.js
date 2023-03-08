"use strict";(self.webpackChunkionic_docs=self.webpackChunkionic_docs||[]).push([[23946],{3905:function(t,e,l){l.d(e,{Zo:function(){return p},kt:function(){return d}});var n=l(67294);function o(t,e,l){return e in t?Object.defineProperty(t,e,{value:l,enumerable:!0,configurable:!0,writable:!0}):t[e]=l,t}function r(t,e){var l=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),l.push.apply(l,n)}return l}function i(t){for(var e=1;e<arguments.length;e++){var l=null!=arguments[e]?arguments[e]:{};e%2?r(Object(l),!0).forEach((function(e){o(t,e,l[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(l)):r(Object(l)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(l,e))}))}return t}function a(t,e){if(null==t)return{};var l,n,o=function(t,e){if(null==t)return{};var l,n,o={},r=Object.keys(t);for(n=0;n<r.length;n++)l=r[n],e.indexOf(l)>=0||(o[l]=t[l]);return o}(t,e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);for(n=0;n<r.length;n++)l=r[n],e.indexOf(l)>=0||Object.prototype.propertyIsEnumerable.call(t,l)&&(o[l]=t[l])}return o}var s=n.createContext({}),u=function(t){var e=n.useContext(s),l=e;return t&&(l="function"==typeof t?t(e):i(i({},e),t)),l},p=function(t){var e=u(t.components);return n.createElement(s.Provider,{value:e},t.children)},c={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},k=n.forwardRef((function(t,e){var l=t.components,o=t.mdxType,r=t.originalType,s=t.parentName,p=a(t,["components","mdxType","originalType","parentName"]),k=u(l),d=o,h=k["".concat(s,".").concat(d)]||k[d]||c[d]||r;return l?n.createElement(h,i(i({ref:e},p),{},{components:l})):n.createElement(h,i({ref:e},p))}));function d(t,e){var l=arguments,o=e&&e.mdxType;if("string"==typeof t||o){var r=l.length,i=new Array(r);i[0]=k;var a={};for(var s in e)hasOwnProperty.call(e,s)&&(a[s]=e[s]);a.originalType=t,a.mdxType="string"==typeof t?t:o,i[1]=a;for(var u=2;u<r;u++)i[u]=l[u];return n.createElement.apply(null,i)}return n.createElement.apply(null,l)}k.displayName="MDXCreateElement"},34321:function(t,e,l){l.r(e),l.d(e,{frontMatter:function(){return a},contentTitle:function(){return s},metadata:function(){return u},toc:function(){return p},default:function(){return k}});var n=l(87462),o=l(63366),r=(l(67294),l(3905)),i=["components"],a={title:"ionic serve",sidebar_label:"serve"},s=void 0,u={unversionedId:"cli/commands/serve",id:"cli/commands/serve",isDocsHomePage:!1,title:"ionic serve",description:"ionic serve: Start a Local Development Server for App Dev/Testing",source:"@site/docs/cli/commands/serve.md",sourceDirName:"cli/commands",slug:"/cli/commands/serve",permalink:"/docs/cli/commands/serve",editUrl:"https://github.com/ionic-team/ionic-cli/edit/develop/packages/@ionic/cli/src/commands/serve.ts",tags:[],version:"current",frontMatter:{title:"ionic serve",sidebar_label:"serve"},sidebar:"cli",previous:{title:"repair",permalink:"/docs/cli/commands/repair"},next:{title:"signup",permalink:"/docs/cli/commands/signup"}},p=[{value:"Examples",id:"examples",children:[],level:2},{value:"Options",id:"options",children:[],level:2},{value:"Advanced Options",id:"advanced-options",children:[],level:2}],c={toc:p};function k(t){var e=t.components,l=(0,o.Z)(t,i);return(0,r.kt)("wrapper",(0,n.Z)({},c,l,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("head",null,(0,r.kt)("title",null,"ionic serve: Start a Local Development Server for App Dev/Testing"),(0,r.kt)("meta",{name:"description",content:"Start a local development server for app dev/testing with ionic serve. Learn how to easily spin up a development server which launches in your browser."})),(0,r.kt)("p",null,"Start a local dev server for app dev/testing"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"$ ionic serve [options]\n")),(0,r.kt)("p",null,"Easily spin up a development server which launches in your browser. It watches for changes in your source files and automatically reloads with the updated build."),(0,r.kt)("p",null,"By default, ",(0,r.kt)("inlineCode",{parentName:"p"},"ionic serve")," boots up a development server on ",(0,r.kt)("inlineCode",{parentName:"p"},"localhost"),". To serve to your LAN, specify the ",(0,r.kt)("inlineCode",{parentName:"p"},"--external")," option, which will use all network interfaces and print the external address(es) on which your app is being served."),(0,r.kt)("p",null,"Try the ",(0,r.kt)("inlineCode",{parentName:"p"},"--lab")," option to see multiple platforms at once."),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"ionic serve")," uses the Angular CLI. Use ",(0,r.kt)("inlineCode",{parentName:"p"},"ng serve --help")," to list all Angular CLI options for serving your app. See the ",(0,r.kt)("inlineCode",{parentName:"p"},"ng serve")," ",(0,r.kt)("a",{parentName:"p",href:"https://angular.io/cli/serve"},"docs")," for explanations. Options not listed below are considered advanced and can be passed to the Angular CLI using the ",(0,r.kt)("inlineCode",{parentName:"p"},"--")," separator after the Ionic CLI arguments. See the examples."),(0,r.kt)("p",null,"The dev server can use HTTPS via the ",(0,r.kt)("inlineCode",{parentName:"p"},"--ssl")," option ",(0,r.kt)("strong",{parentName:"p"},"(experimental)"),". There are several known issues with HTTPS. See issue ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/ionic-team/ionic-cli/issues/3305"},"#3305"),"."),(0,r.kt)("h2",{id:"examples"},"Examples"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"$ ionic serve \n$ ionic serve --external\n$ ionic serve --lab\n$ ionic serve -- --proxy-config proxy.conf.json\n")),(0,r.kt)("h2",{id:"options"},"Options"),(0,r.kt)("table",{className:"reference-table"},(0,r.kt)("thead",null,(0,r.kt)("tr",null,(0,r.kt)("th",{colSpan:"2"},(0,r.kt)("h3",null,(0,r.kt)("a",{href:"#option-ssl",id:"option-ssl"},"--ssl"))))),(0,r.kt)("tbody",null,(0,r.kt)("tr",null,(0,r.kt)("th",null,"Description"),(0,r.kt)("td",null,(0,r.kt)("p",null,"Use HTTPS for the dev server")))),(0,r.kt)("thead",null,(0,r.kt)("tr",null,(0,r.kt)("th",{colSpan:"2"},(0,r.kt)("h3",null,(0,r.kt)("a",{href:"#option-prod",id:"option-prod"},"--prod"))))),(0,r.kt)("tbody",null,(0,r.kt)("tr",null,(0,r.kt)("th",null,"Description"),(0,r.kt)("td",null,(0,r.kt)("p",null,"Flag to use the ",(0,r.kt)("code",null,"production")," configuration")))),(0,r.kt)("thead",null,(0,r.kt)("tr",null,(0,r.kt)("th",{colSpan:"2"},(0,r.kt)("h3",null,(0,r.kt)("a",{href:"#option-external",id:"option-external"},"--external"))))),(0,r.kt)("tbody",null,(0,r.kt)("tr",null,(0,r.kt)("th",null,"Description"),(0,r.kt)("td",null,(0,r.kt)("p",null,"Host dev server on all network interfaces (i.e. ",(0,r.kt)("code",null,"--host=0.0.0.0"),")")))),(0,r.kt)("thead",null,(0,r.kt)("tr",null,(0,r.kt)("th",{colSpan:"2"},(0,r.kt)("h3",null,(0,r.kt)("a",{href:"#option-livereload",id:"option-livereload"},"--no-livereload"))))),(0,r.kt)("tbody",null,(0,r.kt)("tr",null,(0,r.kt)("th",null,"Description"),(0,r.kt)("td",null,(0,r.kt)("p",null,"Do not spin up dev server--just serve files")))),(0,r.kt)("thead",null,(0,r.kt)("tr",null,(0,r.kt)("th",{colSpan:"2"},(0,r.kt)("h3",null,(0,r.kt)("a",{href:"#option-open",id:"option-open"},"--no-open"))))),(0,r.kt)("tbody",null,(0,r.kt)("tr",null,(0,r.kt)("th",null,"Description"),(0,r.kt)("td",null,(0,r.kt)("p",null,"Do not open a browser window")))),(0,r.kt)("thead",null,(0,r.kt)("tr",null,(0,r.kt)("th",{colSpan:"2"},(0,r.kt)("h3",null,(0,r.kt)("a",{href:"#option-lab",id:"option-lab"},"--lab"))))),(0,r.kt)("tbody",null,(0,r.kt)("tr",null,(0,r.kt)("th",null,"Description"),(0,r.kt)("td",null,(0,r.kt)("p",null,"Test your apps on multiple platform types in the browser"))),(0,r.kt)("tr",null,(0,r.kt)("th",null,"Aliases"),(0,r.kt)("td",null,(0,r.kt)("code",null,"-l"))))),(0,r.kt)("h2",{id:"advanced-options"},"Advanced Options"),(0,r.kt)("table",{className:"reference-table"},(0,r.kt)("thead",null,(0,r.kt)("tr",null,(0,r.kt)("th",{colSpan:"2"},(0,r.kt)("h3",null,(0,r.kt)("a",{href:"#option-consolelogs",id:"option-consolelogs"},"--consolelogs"))))),(0,r.kt)("tbody",null,(0,r.kt)("tr",null,(0,r.kt)("th",null,"Description"),(0,r.kt)("td",null,(0,r.kt)("div",null,(0,r.kt)("p",null,"Print app console logs to the terminal"))))),(0,r.kt)("thead",null,(0,r.kt)("tr",null,(0,r.kt)("th",{colSpan:"2"},(0,r.kt)("h3",null,(0,r.kt)("a",{href:"#option-consolelogs-port",id:"option-consolelogs-port"},"--consolelogs-port",(0,r.kt)("span",{class:"option-spec"}," =<port>")))))),(0,r.kt)("tbody",null,(0,r.kt)("tr",null,(0,r.kt)("th",null,"Description"),(0,r.kt)("td",null,(0,r.kt)("div",null,(0,r.kt)("p",null,"Use specific port for console logs server"))))),(0,r.kt)("thead",null,(0,r.kt)("tr",null,(0,r.kt)("th",{colSpan:"2"},(0,r.kt)("h3",null,(0,r.kt)("a",{href:"#option-configuration",id:"option-configuration"},"--configuration",(0,r.kt)("span",{class:"option-spec"}," =<conf>")))))),(0,r.kt)("tbody",null,(0,r.kt)("tr",null,(0,r.kt)("th",null,"Description"),(0,r.kt)("td",null,(0,r.kt)("div",null,(0,r.kt)("p",null,"Specify the configuration to use.")))),(0,r.kt)("tr",null,(0,r.kt)("th",null,"Aliases"),(0,r.kt)("td",null,(0,r.kt)("code",null,"-c")))),(0,r.kt)("thead",null,(0,r.kt)("tr",null,(0,r.kt)("th",{colSpan:"2"},(0,r.kt)("h3",null,(0,r.kt)("a",{href:"#option-source-map",id:"option-source-map"},"--source-map"))))),(0,r.kt)("tbody",null,(0,r.kt)("tr",null,(0,r.kt)("th",null,"Description"),(0,r.kt)("td",null,(0,r.kt)("div",null,(0,r.kt)("p",null,"Output sourcemaps"))))),(0,r.kt)("thead",null,(0,r.kt)("tr",null,(0,r.kt)("th",{colSpan:"2"},(0,r.kt)("h3",null,(0,r.kt)("a",{href:"#option-host",id:"option-host"},"--host",(0,r.kt)("span",{class:"option-spec"}," =<host>")))))),(0,r.kt)("tbody",null,(0,r.kt)("tr",null,(0,r.kt)("th",null,"Description"),(0,r.kt)("td",null,(0,r.kt)("div",null,(0,r.kt)("p",null,"Use specific host for the dev server")))),(0,r.kt)("tr",null,(0,r.kt)("th",null,"Default"),(0,r.kt)("td",null,"localhost"))),(0,r.kt)("thead",null,(0,r.kt)("tr",null,(0,r.kt)("th",{colSpan:"2"},(0,r.kt)("h3",null,(0,r.kt)("a",{href:"#option-port",id:"option-port"},"--port",(0,r.kt)("span",{class:"option-spec"}," =<port>")))))),(0,r.kt)("tbody",null,(0,r.kt)("tr",null,(0,r.kt)("th",null,"Description"),(0,r.kt)("td",null,(0,r.kt)("div",null,(0,r.kt)("p",null,"Use specific port for the dev server")))),(0,r.kt)("tr",null,(0,r.kt)("th",null,"Aliases"),(0,r.kt)("td",null,(0,r.kt)("code",null,"-p"))),(0,r.kt)("tr",null,(0,r.kt)("th",null,"Default"),(0,r.kt)("td",null,"8100"))),(0,r.kt)("thead",null,(0,r.kt)("tr",null,(0,r.kt)("th",{colSpan:"2"},(0,r.kt)("h3",null,(0,r.kt)("a",{href:"#option-public-host",id:"option-public-host"},"--public-host",(0,r.kt)("span",{class:"option-spec"}," =<host>")))))),(0,r.kt)("tbody",null,(0,r.kt)("tr",null,(0,r.kt)("th",null,"Description"),(0,r.kt)("td",null,(0,r.kt)("div",null,(0,r.kt)("p",null,"The host used for the browser or web view"))))),(0,r.kt)("thead",null,(0,r.kt)("tr",null,(0,r.kt)("th",{colSpan:"2"},(0,r.kt)("h3",null,(0,r.kt)("a",{href:"#option-lab-host",id:"option-lab-host"},"--lab-host",(0,r.kt)("span",{class:"option-spec"}," =<host>")))))),(0,r.kt)("tbody",null,(0,r.kt)("tr",null,(0,r.kt)("th",null,"Description"),(0,r.kt)("td",null,(0,r.kt)("div",null,(0,r.kt)("p",null,"Use specific host for Ionic Lab server")))),(0,r.kt)("tr",null,(0,r.kt)("th",null,"Default"),(0,r.kt)("td",null,"localhost"))),(0,r.kt)("thead",null,(0,r.kt)("tr",null,(0,r.kt)("th",{colSpan:"2"},(0,r.kt)("h3",null,(0,r.kt)("a",{href:"#option-lab-port",id:"option-lab-port"},"--lab-port",(0,r.kt)("span",{class:"option-spec"}," =<port>")))))),(0,r.kt)("tbody",null,(0,r.kt)("tr",null,(0,r.kt)("th",null,"Description"),(0,r.kt)("td",null,(0,r.kt)("div",null,(0,r.kt)("p",null,"Use specific port for Ionic Lab server")))),(0,r.kt)("tr",null,(0,r.kt)("th",null,"Default"),(0,r.kt)("td",null,"8200"))),(0,r.kt)("thead",null,(0,r.kt)("tr",null,(0,r.kt)("th",{colSpan:"2"},(0,r.kt)("h3",null,(0,r.kt)("a",{href:"#option-browser",id:"option-browser"},"--browser",(0,r.kt)("span",{class:"option-spec"}," =<browser>")))))),(0,r.kt)("tbody",null,(0,r.kt)("tr",null,(0,r.kt)("th",null,"Description"),(0,r.kt)("td",null,(0,r.kt)("div",null,(0,r.kt)("p",null,"Specifies the browser to use (",(0,r.kt)("code",null,"safari"),", ",(0,r.kt)("code",null,"firefox"),", ",(0,r.kt)("code",null,"google chrome"),")")))),(0,r.kt)("tr",null,(0,r.kt)("th",null,"Aliases"),(0,r.kt)("td",null,(0,r.kt)("code",null,"-w")))),(0,r.kt)("thead",null,(0,r.kt)("tr",null,(0,r.kt)("th",{colSpan:"2"},(0,r.kt)("h3",null,(0,r.kt)("a",{href:"#option-browseroption",id:"option-browseroption"},"--browseroption",(0,r.kt)("span",{class:"option-spec"}," =<path>")))))),(0,r.kt)("tbody",null,(0,r.kt)("tr",null,(0,r.kt)("th",null,"Description"),(0,r.kt)("td",null,(0,r.kt)("div",null,(0,r.kt)("p",null,"Specifies a path to open to (",(0,r.kt)("code",null,"/#/tab/dash"),")")))),(0,r.kt)("tr",null,(0,r.kt)("th",null,"Aliases"),(0,r.kt)("td",null,(0,r.kt)("code",null,"-o"))))))}k.isMDXComponent=!0}}]);