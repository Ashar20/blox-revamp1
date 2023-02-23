"use strict";(self.webpackChunkionic_docs=self.webpackChunkionic_docs||[]).push([[76737],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return d}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=r.createContext({}),s=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=s(e.components);return r.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,p=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),m=s(n),d=a,g=m["".concat(p,".").concat(d)]||m[d]||u[d]||i;return n?r.createElement(g,o(o({ref:t},c),{},{components:n})):r.createElement(g,o({ref:t},c))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=m;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var s=2;s<i;s++)o[s]=n[s];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},27011:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return l},contentTitle:function(){return p},metadata:function(){return s},toc:function(){return c},default:function(){return m}});var r=n(87462),a=n(63366),i=(n(67294),n(3905)),o=["components"],l={sidebar_label:"Starting"},p="Starting an App",s={unversionedId:"developing/starting",id:"version-v5/developing/starting",isDocsHomePage:!1,title:"Starting an App",description:"Starting a new Ionic app is incredibly simple. From the command line, run the ionic start command and the CLI will handle the rest.",source:"@site/versioned_docs/version-v5/developing/starting.md",sourceDirName:"developing",slug:"/developing/starting",permalink:"/developer/docs/v5/developing/starting",editUrl:"https://github.com/ionic-team/ionic-docs/edit/main/versioned_docs/version-v5/developing/starting.md",tags:[],version:"v5",frontMatter:{sidebar_label:"Starting"},sidebar:"version-v5/docs",previous:{title:"Next Steps",permalink:"/developer/docs/v5/intro/next"},next:{title:"Previewing",permalink:"/developer/docs/v5/developing/previewing"}},c=[],u={toc:c};function m(e){var t=e.components,n=(0,a.Z)(e,o);return(0,i.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"starting-an-app"},"Starting an App"),(0,i.kt)("p",null,"Starting a new Ionic app is incredibly simple. From the command line, run the ",(0,i.kt)("inlineCode",{parentName:"p"},"ionic start")," command and the CLI will handle the rest."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell-session"},"$ ionic start\n\nEvery great app needs a name! \ud83d\ude0d\n\nPlease enter the full name of your app. You can change this at any time.\nTo bypass this prompt next time, supply name,\nthe first argument to ionic start.\n\n? Project name: \u2588\n")),(0,i.kt)("p",null,"The Ionic CLI will display prompts asking for the new project's name and which template to use. These details can be provided as command arguments:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell-session"},"$ ionic start myApp tabs\n")),(0,i.kt)("p",null,"Here, ",(0,i.kt)("inlineCode",{parentName:"p"},"myApp")," is the name of the project, ",(0,i.kt)("inlineCode",{parentName:"p"},"tabs")," is the starter template, and the project type is ",(0,i.kt)("inlineCode",{parentName:"p"},"angular"),"."),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"tabs")," is not the only project template available. Between all project types, there are three templates available:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"tabs"),": A tabs based layout"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"sidemenu"),": A sidemenu based layout"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"blank"),": An empty project with a single page")),(0,i.kt)("p",null,"See all available templates with the following command:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell-session"},"$ ionic start --list\n")),(0,i.kt)("p",null,"These templates provide a great starting point for any app and include all the best practices for making a code base scale."))}m.isMDXComponent=!0}}]);