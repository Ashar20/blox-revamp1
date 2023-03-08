"use strict";(self.webpackChunkionic_docs=self.webpackChunkionic_docs||[]).push([[17768],{3905:function(e,n,t){t.d(n,{Zo:function(){return c},kt:function(){return m}});var a=t(67294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var l=a.createContext({}),p=function(e){var n=a.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},c=function(e){var n=p(e.components);return a.createElement(l.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},u=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),u=p(t),m=r,g=u["".concat(l,".").concat(m)]||u[m]||d[m]||o;return t?a.createElement(g,i(i({ref:n},c),{},{components:t})):a.createElement(g,i({ref:n},c))}));function m(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var o=t.length,i=new Array(o);i[0]=u;var s={};for(var l in n)hasOwnProperty.call(n,l)&&(s[l]=n[l]);s.originalType=e,s.mdxType="string"==typeof e?e:r,i[1]=s;for(var p=2;p<o;p++)i[p]=t[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,t)}u.displayName="MDXCreateElement"},7991:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return s},contentTitle:function(){return l},metadata:function(){return p},toc:function(){return c},default:function(){return u}});var a=t(87462),r=t(63366),o=(t(67294),t(3905)),i=["components"],s={},l="Scaffolding",p={unversionedId:"developing/scaffolding",id:"version-v5/developing/scaffolding",isDocsHomePage:!1,title:"Scaffolding",description:"Once an app is created by the Ionic CLI, the next step is to start building out features and components. The majority of the app will be developed in the src/app/ directory.",source:"@site/versioned_docs/version-v5/developing/scaffolding.md",sourceDirName:"developing",slug:"/developing/scaffolding",permalink:"/docs/v5/developing/scaffolding",editUrl:"https://github.com/ionic-team/ionic-docs/edit/main/versioned_docs/version-v5/developing/scaffolding.md",tags:[],version:"v5",frontMatter:{},sidebar:"version-v5/docs",previous:{title:"Previewing",permalink:"/docs/v5/developing/previewing"},next:{title:"Developing for iOS",permalink:"/docs/v5/developing/ios"}},c=[{value:"Project Structure",id:"project-structure",children:[],level:2},{value:"Generating New Features",id:"generating-new-features",children:[],level:2}],d={toc:c};function u(e){var n=e.components,t=(0,r.Z)(e,i);return(0,o.kt)("wrapper",(0,a.Z)({},d,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"scaffolding"},"Scaffolding"),(0,o.kt)("p",null,"Once an app is created by the Ionic CLI, the next step is to start building out features and components. The majority of the app will be developed in the ",(0,o.kt)("inlineCode",{parentName:"p"},"src/app/")," directory."),(0,o.kt)("h2",{id:"project-structure"},"Project Structure"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"src/\n\u251c\u2500\u2500 app/\n\u251c\u2500\u2500 assets/\n\u251c\u2500\u2500 environments/\n\u251c\u2500\u2500 theme/\n\u251c\u2500\u2500 global.scss\n\u251c\u2500\u2500 index.html\n\u251c\u2500\u2500 main.ts\n\u251c\u2500\u2500 polyfills.ts\n\u251c\u2500\u2500 test.ts\n\u2514\u2500\u2500 zone-flags.ts\n")),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"src/")," directory has items such as the ",(0,o.kt)("inlineCode",{parentName:"p"},"index.html")," file, configuration files for tests, an asset folder for images, and the main ",(0,o.kt)("inlineCode",{parentName:"p"},"app/")," directory for the app's code."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"src/\n\u2514\u2500\u2500 app/\n    \u251c\u2500\u2500 app-routing.module.ts\n    \u251c\u2500\u2500 app.component.html\n    \u251c\u2500\u2500 app.component.spec.ts\n    \u251c\u2500\u2500 app.component.ts\n    \u2514\u2500\u2500 app.module.ts\n")),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"src/app/")," directory contains the root app component and module as well as additional directories that contain app features such as pages, components, services, etc."),(0,o.kt)("h2",{id:"generating-new-features"},"Generating New Features"),(0,o.kt)("p",null,"The Ionic CLI can generate new app features with the ",(0,o.kt)("a",{parentName:"p",href:"/docs/v5/cli/commands/generate"},(0,o.kt)("inlineCode",{parentName:"a"},"ionic generate"))," command. By running ",(0,o.kt)("inlineCode",{parentName:"p"},"ionic generate")," in the command line, a selection prompt is displayed which lists the available features that can be generated."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell-session"},"$ ionic generate\n? What would you like to generate?\n\u276f page\n  component\n  service\n  module\n  class\n  directive\n  guard\n")),(0,o.kt)("p",null,"After a selection is made, the Ionic CLI will prompt for a name. The name can be a path, allowing easy generation of features within an organized project structure."),(0,o.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"Any level of nesting is allowed, such as ",(0,o.kt)("inlineCode",{parentName:"p"},"portfolio/intro"),". You can easily scope components to pages by using ",(0,o.kt)("inlineCode",{parentName:"p"},'ionic g component "portfolio/intro/About Me"'),", for example."))),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell-session"},"$ ionic generate\n? What would you like to generate? page\n? Name/path of page: portfolio \u2588\n")),(0,o.kt)("p",null,"Alternatively, the ",(0,o.kt)("inlineCode",{parentName:"p"},"type")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"name")," of the generated feature can be entered on the command line:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell-session"},'$ ionic g page "User Detail"\n> ng generate page "User Detail"\nCREATE src/app/user-detail/user-detail.module.ts (564 bytes)\nCREATE src/app/user-detail/user-detail.page.scss (0 bytes)\nCREATE src/app/user-detail/user-detail.page.html (138 bytes)\nCREATE src/app/user-detail/user-detail.page.spec.ts (720 bytes)\nCREATE src/app/user-detail/user-detail.page.ts (280 bytes)\nUPDATE src/app/app-routing.module.ts (475 bytes)\n[OK] Generated page!\n')),(0,o.kt)("p",null,"The Ionic CLI uses the underlying framework tooling to stay close to best practices. For ",(0,o.kt)("inlineCode",{parentName:"p"},"@ionic/angular"),", the Angular CLI is used under the hood."),(0,o.kt)("p",null,"After creating the files and directories for the new page, the CLI will also update the router configuration to include the new page. This reduces the amount of manual work needed to keep the development lifecycle moving."),(0,o.kt)("p",null,"For more details, run ",(0,o.kt)("inlineCode",{parentName:"p"},"ionic g --help")," from the command line or see ",(0,o.kt)("a",{parentName:"p",href:"/docs/v5/cli/commands/generate"},"the documentation")," for ",(0,o.kt)("inlineCode",{parentName:"p"},"ionic generate"),"."))}u.isMDXComponent=!0}}]);