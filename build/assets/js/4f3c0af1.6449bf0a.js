"use strict";(self.webpackChunkionic_docs=self.webpackChunkionic_docs||[]).push([[28202],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return m}});var r=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=r.createContext({}),s=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=s(e.components);return r.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,l=e.parentName,c=p(e,["components","mdxType","originalType","parentName"]),u=s(n),m=i,h=u["".concat(l,".").concat(m)]||u[m]||d[m]||a;return n?r.createElement(h,o(o({ref:t},c),{},{components:n})):r.createElement(h,o({ref:t},c))}));function m(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,o=new Array(a);o[0]=u;var p={};for(var l in t)hasOwnProperty.call(t,l)&&(p[l]=t[l]);p.originalType=e,p.mdxType="string"==typeof e?e:i,o[1]=p;for(var s=2;s<a;s++)o[s]=n[s];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},93414:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return p},contentTitle:function(){return l},metadata:function(){return s},toc:function(){return c},default:function(){return u}});var r=n(87462),i=n(63366),a=(n(67294),n(3905)),o=["components"],p={sidebar_label:"iOS App Store"},l="iOS App Store Deployment",s={unversionedId:"deployment/app-store",id:"version-v5/deployment/app-store",isDocsHomePage:!1,title:"iOS App Store Deployment",description:"Requirements",source:"@site/versioned_docs/version-v5/deployment/app-store.md",sourceDirName:"deployment",slug:"/deployment/app-store",permalink:"/docs/v5/deployment/app-store",editUrl:"https://github.com/ionic-team/ionic-docs/edit/main/versioned_docs/version-v5/deployment/app-store.md",tags:[],version:"v5",frontMatter:{sidebar_label:"iOS App Store"},sidebar:"version-v5/docs",previous:{title:"Gestures",permalink:"/docs/v5/utilities/gestures"},next:{title:"Android Play Store",permalink:"/docs/v5/deployment/play-store"}},c=[{value:"Requirements",id:"requirements",children:[],level:2},{value:"Generating a release build",id:"generating-a-release-build",children:[],level:2},{value:"Generating Signing Certs",id:"generating-signing-certs",children:[],level:2},{value:"Signing the App in Xcode.",id:"signing-the-app-in-xcode",children:[],level:2},{value:"Updating an app",id:"updating-an-app",children:[],level:2}],d={toc:c};function u(e){var t=e.components,n=(0,i.Z)(e,o);return(0,a.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"ios-app-store-deployment"},"iOS App Store Deployment"),(0,a.kt)("h2",{id:"requirements"},"Requirements"),(0,a.kt)("p",null,"Submitting an App to the iOS App store requires a few things:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Xcode"),(0,a.kt)("li",{parentName:"ul"},"A Paid Apple Developers account"),(0,a.kt)("li",{parentName:"ul"},"A valid provisioning profile"),(0,a.kt)("li",{parentName:"ul"},"App Development and Distribution certificates")),(0,a.kt)("p",null,"To enroll in the Apple Developer Program, follow the instructions ",(0,a.kt)("a",{parentName:"p",href:"https://developer.apple.com/programs/"},"listed here"),"."),(0,a.kt)("h2",{id:"generating-a-release-build"},"Generating a release build"),(0,a.kt)("p",null,"If the iOS platform is not already added, be sure to add it:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"ionic cordova platform add ios\n")),(0,a.kt)("p",null,"With the platform added, run the build command with the ",(0,a.kt)("inlineCode",{parentName:"p"},"--prod")," flag:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"ionic cordova build ios --prod\n")),(0,a.kt)("p",null,"This will generate the minified code for the web portion of an app and copy it over the iOS code base."),(0,a.kt)("p",null,"From here, open the ",(0,a.kt)("inlineCode",{parentName:"p"},".xcworkspace")," file in ",(0,a.kt)("inlineCode",{parentName:"p"},"./platforms/ios/")," to start Xcode."),(0,a.kt)("h2",{id:"generating-signing-certs"},"Generating Signing Certs"),(0,a.kt)("p",null,"Generating certificates for iOS is a bit of an involved process, so be sure to check ",(0,a.kt)("a",{parentName:"p",href:"https://help.apple.com/xcode/mac/current/#/dev3a05256b8"},"Apple's official documentation")," on what certificates are and how to generate them."),(0,a.kt)("p",null,"To create the certificates and profiles needed, visit ",(0,a.kt)("a",{parentName:"p",href:"https://developer.apple.com/membercenter"},"Apple's member center")," and follow the links described in Apple's documentation."),(0,a.kt)("p",null,"There are two types of certificates that matter here, Development, and Distribution. Development Certificates are just that, meant for development time. They are meant to sign an app and deploy it to devices that the certificate has access to."),(0,a.kt)("p",null,"Distribution certs are meant for distributing an app to the store. When an app is signed with a Distribution cert, it can be installed on any device."),(0,a.kt)("h2",{id:"signing-the-app-in-xcode"},"Signing the App in Xcode."),(0,a.kt)("p",null,"After generating the correct certificates, there are options to either have Xcode automatically manage certificates or manually manage them. It's suggested to let Xcode automatically manage certificates. This will make sure that the correct Development and Distribution certs are used, based on the build type selected."),(0,a.kt)("p",null,"With this option selected, select ",(0,a.kt)("inlineCode",{parentName:"p"},"Archive")," from the ",(0,a.kt)("inlineCode",{parentName:"p"},"Product > Archive")," menu. This will build a version of the app that is ready for distribution in the app stores. After archive has been created, Xcode Organizer is opened."),(0,a.kt)("p",null,"Xcode Organizer displays a list with builds of the current app. Pick the last build and click 'Upload to App Store'.\nThere should be a place to select the team followed by some more information on the app and a \"Upload\" button to click."),(0,a.kt)("p",null,"If the upload successfully, the app should be listed on ",(0,a.kt)("a",{parentName:"p",href:"https://itunesconnect.apple.com"},"iTunes Connect")," and listed in 'Activities'.\nFrom there, TestFlight can be enabled for beta testing, or the App can be sent for approval from Apple."),(0,a.kt)("h2",{id:"updating-an-app"},"Updating an app"),(0,a.kt)("p",null,"As an app grows, it will need to be updated with new features and fixes.\nAn app can be updated by either submitting a new version to Apple, or by using a live update service like Appflow's ",(0,a.kt)("a",{href:"https://ionic.io/docs/appflow/deploy/intro",target:"_blank"},"live update feature"),"."),(0,a.kt)("p",null,"With ",(0,a.kt)("strong",null,"Live Updates"),", app changes can be pushed in realtime directly to users from the Appflow dashboard, without waiting for App Store approvals."),(0,a.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,a.kt)("div",{parentName:"div",className:"admonition-heading"},(0,a.kt)("h5",{parentName:"div"},(0,a.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,a.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,a.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,a.kt)("div",{parentName:"div",className:"admonition-content"},(0,a.kt)("p",{parentName:"div"},"In order for the iOS App Store to accept the updated build, the config.xml file will need to be edited to increment the version value, then rebuild the app for release following the same instructions above."))))}u.isMDXComponent=!0}}]);