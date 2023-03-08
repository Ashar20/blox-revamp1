"use strict";(self.webpackChunkionic_docs=self.webpackChunkionic_docs||[]).push([[34631],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return h}});var o=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,o,a=function(e,t){if(null==e)return{};var n,o,a={},r=Object.keys(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=o.createContext({}),s=function(e){var t=o.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=s(e.components);return o.createElement(p.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},d=o.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,p=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),d=s(n),h=a,g=d["".concat(p,".").concat(h)]||d[h]||c[h]||r;return n?o.createElement(g,i(i({ref:t},u),{},{components:n})):o.createElement(g,i({ref:t},u))}));function h(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,i=new Array(r);i[0]=d;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var s=2;s<r;s++)i[s]=n[s];return o.createElement.apply(null,i)}return o.createElement.apply(null,n)}d.displayName="MDXCreateElement"},46479:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return l},contentTitle:function(){return p},metadata:function(){return s},toc:function(){return u},default:function(){return d}});var o=n(87462),a=n(63366),r=(n(67294),n(3905)),i=["components"],l={},p="Your First Ionic App - Framework v3",s={unversionedId:"developer-resources/guides/first-app-v3/intro",id:"version-v5/developer-resources/guides/first-app-v3/intro",isDocsHomePage:!1,title:"Your First Ionic App - Framework v3",description:"The great thing about Ionic is that with one codebase, you can build for any platform using familiar web tools and languages. Follow along as we create a working Photo Gallery. Here\u2019s the before and after:",source:"@site/versioned_docs/version-v5/developer-resources/guides/first-app-v3/intro.md",sourceDirName:"developer-resources/guides/first-app-v3",slug:"/developer-resources/guides/first-app-v3/intro",permalink:"/docs/v5/developer-resources/guides/first-app-v3/intro",editUrl:"https://github.com/ionic-team/ionic-docs/edit/main/versioned_docs/version-v5/developer-resources/guides/first-app-v3/intro.md",tags:[],version:"v5",frontMatter:{}},u=[{value:"Install Node.js",id:"install-nodejs",children:[],level:2},{value:"Install Ionic",id:"install-ionic",children:[],level:2},{value:"Create an App",id:"create-an-app",children:[],level:2},{value:"Run the App",id:"run-the-app",children:[],level:2},{value:"Photo Gallery!!!",id:"photo-gallery",children:[],level:2}],c={toc:u};function d(e){var t=e.components,l=(0,a.Z)(e,i);return(0,r.kt)("wrapper",(0,o.Z)({},c,l,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"your-first-ionic-app---framework-v3"},"Your First Ionic App - Framework v3"),(0,r.kt)("p",null,"The great thing about Ionic is that with one codebase, you can build for any platform using familiar web tools and languages. Follow along as we create a working Photo Gallery. Here\u2019s the before and after:"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Before and after going through this tutorial",src:n(82335).Z})),(0,r.kt)("p",null,"It\u2019s easy to get started. Reference code for this guide can be ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/ionic-team/photo-gallery-tutorial-ionic3/"},"found on GitHub"),"."),(0,r.kt)("h2",{id:"install-nodejs"},"Install Node.js"),(0,r.kt)("p",null,"If you don\u2019t have Node.js installed already, ",(0,r.kt)("a",{parentName:"p",href:"https://nodejs.org/en/"},"download the LTS version"),"."),(0,r.kt)("h2",{id:"install-ionic"},"Install Ionic"),(0,r.kt)("p",null,"Run the following in the command line (you may need to prepend \u201csudo\u201d on a Mac):"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"npm install -g @ionic/cli\n")),(0,r.kt)("h2",{id:"create-an-app"},"Create an App"),(0,r.kt)("p",null,"Next, create an Ionic app using our \u201cTabs\u201d app template:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"ionic start photo-gallery tabs\n")),(0,r.kt)("p",null,"This starter project comes complete with three pre-built pages and best practices for Ionic development. With common building blocks already in place, we can add more features easily!"),(0,r.kt)("strong",null,"\u201cWould you like to integrate your new app with Cordova to target native iOS and Android?\u201d"),(0,r.kt)("p",null,"Type \u201cy\u201d and press Enter. Project setup may take a few moments."),(0,r.kt)("strong",null,"\u201cInstall the free Appflow SDK and connect your app?\u201d"),(0,r.kt)("p",null,"Type \u201cy\u201d and press Enter. ",(0,r.kt)("a",{parentName:"p",href:"https://ionicframework.com/pro"},"Appflow")," is a powerful set of services and features built on top of the flagship Ionic Framework. This includes updating your app instantly (skipping the app store review process!), packaging apps in the cloud, and error monitoring."),(0,r.kt)("strong",null,"Log into your Ionic Account"),(0,r.kt)("p",null,"Sign in now to easily access awesome features like Live Deploys later in this tutorial."),(0,r.kt)("strong",null,"What would you like to do?"),(0,r.kt)("p",null,"Choose \u201cCreate a new app on Appflow.\u201d"),(0,r.kt)("strong",null,"Which git host would you like to use?"),(0,r.kt)("p",null,"Choose \u201cAppflow.\u201d"),(0,r.kt)("strong",null,"\u201cHow would you like to connect to Appflow?\u201d"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Choose \u201cAutomatically setup a new SSH key pair for Appflow\u201d if you haven\u2019t used SSH before."),(0,r.kt)("li",{parentName:"ul"},"Choose \u201cUse an existing SSH key pair\u201d if you\u2019ve used SSH before.")),(0,r.kt)("p",null,"Next, change into the app folder, then push your code to Appflow:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"$ cd photo-gallery\n$ git push ionic master\n")),(0,r.kt)("p",null,"That\u2019s it! Now for the fun part - let\u2019s see it in action."),(0,r.kt)("h2",{id:"run-the-app"},"Run the App"),(0,r.kt)("p",null,"Run this command next:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"ionic serve\n")),(0,r.kt)("p",null,"And voil\xe0! Your Ionic app is now running in a web browser. Most of your app can be built right in the browser, greatly increasing development speed."),(0,r.kt)("h2",{id:"photo-gallery"},"Photo Gallery!!!"),(0,r.kt)("p",null,"There are three tabs: \u201cHome\u201d, \u201cAbout\u201d, and \u201cContact.\u201d Click on the About tab. It\u2019s a blank canvas, aka the perfect spot to add camera functionality. Let\u2019s begin to transform the About page into a Photo Gallery. Ionic features LiveReload, so when you make changes and save them, the app is updated immediately!"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Before and after going through this tutorial",src:n(1734).Z})),(0,r.kt)("p",null,"Open the photo-gallery app folder in your favorite code editor of choice, then navigate to ",(0,r.kt)("inlineCode",{parentName:"p"},"/src/pages/about/about.html"),". We see:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-html"},'<ion-header>\n  <ion-toolbar>\n    <ion-title>About</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content class="ion-padding"></ion-content>\n')),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"ion-header")," represents the top navigation and toolbar, with \u201cAbout\u201d as the title. We put our app code into ",(0,r.kt)("inlineCode",{parentName:"p"},"ion-content"),". In this case, it\u2019s where we\u2019ll add a button that opens the device\u2019s camera and shows the image captured by the camera. But first, let\u2019s start with something obvious: renaming the About page:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-html"},"<ion-title>Photo Gallery</ion-title>\n")),(0,r.kt)("p",null,"Next, open ",(0,r.kt)("inlineCode",{parentName:"p"},"src/pages/tabs/tabs.html"),". Change the tabTitle to \u201cGallery\u201d and the tabIcon to \u201cimages\u201d:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-html"},'<ion-tabs>\n  <ion-tab [root]="tab1Root" tabTitle="Home" tabIcon="home"></ion-tab>\n  <ion-tab [root]="tab2Root" tabTitle="Gallery" tabIcon="images"></ion-tab>\n  <ion-tab [root]="tab3Root" tabTitle="Contact" tabIcon="contacts"></ion-tab>\n</ion-tabs>\n')),(0,r.kt)("p",null,"Now, back up your changes to Appflow:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"$ git add .\n$ git commit -m \u201cconverting about page to photo gallery\u201d\n$ git push ionic master\n")),(0,r.kt)("p",null,"That\u2019s just the start of all the cool things we can do with Ionic. Up next, we\u2019ll deploy the app to iOS and Android, then continue building the photo gallery."))}d.isMDXComponent=!0},1734:function(e,t,n){t.Z=n.p+"assets/images/email-photogallery-dfb7fe448bcb1bdcd748ee18ed759e8b.gif"},82335:function(e,t,n){t.Z=n.p+"assets/images/gallery-combined-92b67e5ca79ff8e27e6fc506ea482153.png"}}]);