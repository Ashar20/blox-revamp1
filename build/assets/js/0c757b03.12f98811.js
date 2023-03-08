"use strict";(self.webpackChunkionic_docs=self.webpackChunkionic_docs||[]).push([[24562],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return m}});var o=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,o,a=function(e,t){if(null==e)return{};var n,o,a={},r=Object.keys(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=o.createContext({}),p=function(e){var t=o.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=p(e.components);return o.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},d=o.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=p(n),m=a,h=d["".concat(s,".").concat(m)]||d[m]||u[m]||r;return n?o.createElement(h,i(i({ref:t},c),{},{components:n})):o.createElement(h,i({ref:t},c))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,i=new Array(r);i[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var p=2;p<r;p++)i[p]=n[p];return o.createElement.apply(null,i)}return o.createElement.apply(null,n)}d.displayName="MDXCreateElement"},95555:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return l},contentTitle:function(){return s},metadata:function(){return p},toc:function(){return c},default:function(){return d}});var o=n(87462),a=n(63366),r=(n(67294),n(3905)),i=["components"],l={},s="Your First Ionic App: Angular",p={unversionedId:"developer-resources/guides/first-app-v4/intro",id:"version-v5/developer-resources/guides/first-app-v4/intro",isDocsHomePage:!1,title:"Your First Ionic App: Angular",description:"The great thing about Ionic is that with one codebase, you can build for any platform using familiar web tools and languages. Follow along as we create a working Photo Gallery. Here\u2019s the before and after:",source:"@site/versioned_docs/version-v5/developer-resources/guides/first-app-v4/intro.md",sourceDirName:"developer-resources/guides/first-app-v4",slug:"/developer-resources/guides/first-app-v4/intro",permalink:"/docs/v5/developer-resources/guides/first-app-v4/intro",editUrl:"https://github.com/ionic-team/ionic-docs/edit/main/versioned_docs/version-v5/developer-resources/guides/first-app-v4/intro.md",tags:[],version:"v5",frontMatter:{}},c=[{value:"Required Tools",id:"required-tools",children:[],level:2},{value:"Install Ionic and Cordova",id:"install-ionic-and-cordova",children:[],level:2},{value:"Create an App",id:"create-an-app",children:[],level:2},{value:"Run the App",id:"run-the-app",children:[],level:2},{value:"Photo Gallery!!!",id:"photo-gallery",children:[],level:2}],u={toc:c};function d(e){var t=e.components,l=(0,a.Z)(e,i);return(0,r.kt)("wrapper",(0,o.Z)({},u,l,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"your-first-ionic-app-angular"},"Your First Ionic App: Angular"),(0,r.kt)("p",null,"The great thing about Ionic is that with one codebase, you can build for any platform using familiar web tools and languages. Follow along as we create a working Photo Gallery. Here\u2019s the before and after:"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Before and after going through this tutorial",src:n(82335).Z})),(0,r.kt)("p",null,"It\u2019s easy to get started. Note that all code referenced in this guide can be ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/ionic-team/photo-gallery-tutorial-ionic4/"},"found on GitHub"),"."),(0,r.kt)("h2",{id:"required-tools"},"Required Tools"),(0,r.kt)("p",null,"Download/install these right away to ensure an optimal Ionic development experience:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://git-scm.com/downloads"},"Git")," for version control."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",null,"SSH client"),", such as [PuTTy](https://www.putty.org/), for secure login to Appflow."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",null,"Node.js")," for interacting with the Ionic ecosystem. [Download the LTS version here](https://nodejs.org/en/)."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",null,"A code editor")," for... writing code! We are fans of [Visual Studio Code](https://code.visualstudio.com/)."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",null,"Command-line terminal (CLI)"),": FYI ",(0,r.kt)("strong",null,"Windows")," users, for the best Ionic experience, we recommend the built-in command line (cmd) or the Powershell CLI, running in Administrator mode. For ",(0,r.kt)("strong",null,"Mac/Linux")," users, virtually any terminal will work.")),(0,r.kt)("h2",{id:"install-ionic-and-cordova"},"Install Ionic and Cordova"),(0,r.kt)("p",null,"Run the following in the command line:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"npm install -g @ionic/cli cordova\n")),(0,r.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"The ",(0,r.kt)("inlineCode",{parentName:"p"},"-g")," option means ",(0,r.kt)("em",{parentName:"p"},"install globally"),". When packages are installed globally, ",(0,r.kt)("inlineCode",{parentName:"p"},"EACCES")," permission errors can occur."),(0,r.kt)("p",{parentName:"div"},"Consider setting up npm to operate globally without elevated permissions. See ",(0,r.kt)("a",{parentName:"p",href:"/docs/v5/developing/tips#resolving-permission-errors"},"Resolving Permission Errors")," for more information."))),(0,r.kt)("h2",{id:"create-an-app"},"Create an App"),(0,r.kt)("p",null,"Next, create an Ionic Angular app using our \u201cTabs\u201d app template:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"ionic start photo-gallery tabs\n")),(0,r.kt)("p",null,"This starter project comes complete with three pre-built pages and best practices for Ionic development. With common building blocks already in place, we can add more features easily!"),(0,r.kt)("p",null,"Next, change into the app folder:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"cd photo-gallery\n")),(0,r.kt)("p",null,"That\u2019s it! Now for the fun part - let\u2019s see the app in action."),(0,r.kt)("h2",{id:"run-the-app"},"Run the App"),(0,r.kt)("p",null,"Run this command next:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"ionic serve\n")),(0,r.kt)("p",null,"And voil\xe0! Your Ionic app is now running in a web browser. Most of your app can be built right in the browser, greatly increasing development speed."),(0,r.kt)("h2",{id:"photo-gallery"},"Photo Gallery!!!"),(0,r.kt)("p",null,"There are three tabs. Click on the Tab2 tab. It\u2019s a blank canvas, aka the perfect spot to add camera functionality. Let\u2019s begin to transform this page into a Photo Gallery. Ionic features LiveReload, so when you make changes and save them, the app is updated immediately!"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Before and after going through this tutorial",src:n(1734).Z})),(0,r.kt)("p",null,"Open the photo-gallery app folder in your favorite code editor of choice, then navigate to ",(0,r.kt)("inlineCode",{parentName:"p"},"/src/app/tab2/tab2.page.html"),". We see:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-html"},'<ion-header>\n  <ion-toolbar>\n    <ion-title>Tab Two</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content class="ion-padding"></ion-content>\n')),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"ion-header"),' represents the top navigation and toolbar, with "Tab 2" as the title. We put our app code into ',(0,r.kt)("inlineCode",{parentName:"p"},"ion-content"),". In this case, it\u2019s where we\u2019ll add a button that opens the device\u2019s camera and shows the image captured by the camera. But first, let\u2019s start with something obvious: renaming the Tab Two page:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-html"},"<ion-title>Photo Gallery</ion-title>\n")),(0,r.kt)("p",null,"Next, open ",(0,r.kt)("inlineCode",{parentName:"p"},"src/app/tabs/tabs.page.html"),". Change the label to \u201cGallery\u201d and the icon name to \u201cimages\u201d:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-html"},'<ion-tab-button tab="tab2">\n  <ion-icon name="images"></ion-icon>\n  <ion-label>Gallery</ion-label>\n</ion-tab-button>\n')),(0,r.kt)("p",null,"That\u2019s just the start of all the cool things we can do with Ionic. Up next, we\u2019ll deploy the app to your iOS or Android device, then continue building the photo gallery."))}d.isMDXComponent=!0},1734:function(e,t,n){t.Z=n.p+"assets/images/email-photogallery-dfb7fe448bcb1bdcd748ee18ed759e8b.gif"},82335:function(e,t,n){t.Z=n.p+"assets/images/gallery-combined-92b67e5ca79ff8e27e6fc506ea482153.png"}}]);