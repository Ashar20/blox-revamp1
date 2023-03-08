"use strict";(self.webpackChunkionic_docs=self.webpackChunkionic_docs||[]).push([[11300],{3905:function(e,t,r){r.d(t,{Zo:function(){return u},kt:function(){return m}});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var l=n.createContext({}),i=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},u=function(e){var t=i(e.components);return n.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),d=i(r),m=o,h=d["".concat(l,".").concat(m)]||d[m]||p[m]||a;return r?n.createElement(h,c(c({ref:t},u),{},{components:r})):n.createElement(h,c({ref:t},u))}));function m(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,c=new Array(a);c[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:o,c[1]=s;for(var i=2;i<a;i++)c[i]=r[i];return n.createElement.apply(null,c)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},93911:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return s},contentTitle:function(){return l},metadata:function(){return i},toc:function(){return u},default:function(){return d}});var n=r(87462),o=r(63366),a=(r(67294),r(3905)),c=["components"],s={title:"ionic cordova resources",sidebar_label:"cordova resources"},l=void 0,i={unversionedId:"cli/commands/cordova-resources",id:"cli/commands/cordova-resources",isDocsHomePage:!1,title:"ionic cordova resources",description:"Splash Screen Image Icon Generator | Generate Cordova Resources",source:"@site/docs/cli/commands/cordova-resources.md",sourceDirName:"cli/commands",slug:"/cli/commands/cordova-resources",permalink:"/docs/cli/commands/cordova-resources",editUrl:"https://github.com/ionic-team/ionic-cli/edit/develop/packages/@ionic/cli/src/commands/cordova/resources.ts",tags:[],version:"current",frontMatter:{title:"ionic cordova resources",sidebar_label:"cordova resources"},sidebar:"cli",previous:{title:"cordova requirements",permalink:"/docs/cli/commands/cordova-requirements"},next:{title:"cordova run",permalink:"/docs/cli/commands/cordova-run"}},u=[{value:"Examples",id:"examples",children:[],level:2},{value:"Inputs",id:"inputs",children:[],level:2},{value:"Options",id:"options",children:[],level:2}],p={toc:u};function d(e){var t=e.components,r=(0,o.Z)(e,c);return(0,a.kt)("wrapper",(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("head",null,(0,a.kt)("title",null,"Splash Screen Image Icon Generator | Generate Cordova Resources"),(0,a.kt)("meta",{name:"description",content:"Generate perfectly-sized icons and splash screens from PNG source images for your Cordova platforms. Automatically create icons with Ionic Cordova Resources."})),(0,a.kt)("p",null,"Automatically create icon and splash screen resources"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"$ ionic cordova resources [options]\n")),(0,a.kt)("p",null,"Generate perfectly sized icons and splash screens from PNG source images for your Cordova platforms with this command."),(0,a.kt)("p",null,"The source image for icons should ideally be at least ",(0,a.kt)("strong",{parentName:"p"},"1024\xd71024px")," and located at ",(0,a.kt)("strong",{parentName:"p"},"resources/icon.png"),". The source image for splash screens should ideally be at least ",(0,a.kt)("strong",{parentName:"p"},"2732\xd72732px")," and located at ",(0,a.kt)("strong",{parentName:"p"},"resources/splash.png"),". If you used ",(0,a.kt)("inlineCode",{parentName:"p"},"ionic start"),", there should already be default Ionic resources in the ",(0,a.kt)("strong",{parentName:"p"},"resources/")," directory, which you can overwrite."),(0,a.kt)("p",null,"You can also generate platform-specific icons and splash screens by placing them in the respective ",(0,a.kt)("strong",{parentName:"p"},"resources/","<","platform",">","/")," directory. For example, to generate an icon for Android, place your image at ",(0,a.kt)("strong",{parentName:"p"},"resources/android/icon.png"),"."),(0,a.kt)("p",null,"For best results, the splash screen's artwork should roughly fit within a square (",(0,a.kt)("strong",{parentName:"p"},"1200\xd71200px"),") at the center of the image. You can use ",(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("a",{parentName:"strong",href:"https://code.ionicframework.com/resources/splash.psd"},"https://code.ionicframework.com/resources/splash.psd"))," as a template for your splash screen."),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"ionic cordova resources")," will automatically update your ",(0,a.kt)("strong",{parentName:"p"},"config.xml")," to reflect the changes in the generated images, which Cordova then configures."),(0,a.kt)("p",null,"This command uses the ",(0,a.kt)("inlineCode",{parentName:"p"},"cordova-res")," ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/ionic-team/cordova-res"},"utility")," to generate resources locally."),(0,a.kt)("p",null,"Cordova reference documentation:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Icons: ",(0,a.kt)("strong",{parentName:"li"},(0,a.kt)("a",{parentName:"strong",href:"https://cordova.apache.org/docs/en/latest/config_ref/images.html"},"https://cordova.apache.org/docs/en/latest/config_ref/images.html"))),(0,a.kt)("li",{parentName:"ul"},"Splash Screens: ",(0,a.kt)("strong",{parentName:"li"},(0,a.kt)("a",{parentName:"strong",href:"https://cordova.apache.org/docs/en/latest/reference/cordova-plugin-splashscreen/"},"https://cordova.apache.org/docs/en/latest/reference/cordova-plugin-splashscreen/")))),(0,a.kt)("h2",{id:"examples"},"Examples"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"$ ionic cordova resources \n$ ionic cordova resources ios\n$ ionic cordova resources android\n")),(0,a.kt)("h2",{id:"inputs"},"Inputs"),(0,a.kt)("table",{className:"reference-table"},(0,a.kt)("thead",null,(0,a.kt)("tr",null,(0,a.kt)("th",{colSpan:"2"},(0,a.kt)("h3",null,"platform")))),(0,a.kt)("tbody",null,(0,a.kt)("tr",null,(0,a.kt)("th",null,"Description"),(0,a.kt)("td",null,(0,a.kt)("p",null,"The platform for which you would like to generate resources (",(0,a.kt)("code",null,"ios"),", ",(0,a.kt)("code",null,"android"),")"))))),(0,a.kt)("h2",{id:"options"},"Options"),(0,a.kt)("table",{className:"reference-table"},(0,a.kt)("thead",null,(0,a.kt)("tr",null,(0,a.kt)("th",{colSpan:"2"},(0,a.kt)("h3",null,(0,a.kt)("a",{href:"#option-icon",id:"option-icon"},"--icon"))))),(0,a.kt)("tbody",null,(0,a.kt)("tr",null,(0,a.kt)("th",null,"Description"),(0,a.kt)("td",null,(0,a.kt)("p",null,"Generate icon resources"))),(0,a.kt)("tr",null,(0,a.kt)("th",null,"Aliases"),(0,a.kt)("td",null,(0,a.kt)("code",null,"-i")))),(0,a.kt)("thead",null,(0,a.kt)("tr",null,(0,a.kt)("th",{colSpan:"2"},(0,a.kt)("h3",null,(0,a.kt)("a",{href:"#option-splash",id:"option-splash"},"--splash"))))),(0,a.kt)("tbody",null,(0,a.kt)("tr",null,(0,a.kt)("th",null,"Description"),(0,a.kt)("td",null,(0,a.kt)("p",null,"Generate splash screen resources"))),(0,a.kt)("tr",null,(0,a.kt)("th",null,"Aliases"),(0,a.kt)("td",null,(0,a.kt)("code",null,"-s"))))))}d.isMDXComponent=!0}}]);