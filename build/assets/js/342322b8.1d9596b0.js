"use strict";(self.webpackChunkionic_docs=self.webpackChunkionic_docs||[]).push([[13743],{3905:function(e,t,n){n.d(t,{Zo:function(){return s},kt:function(){return m}});var a=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var d=a.createContext({}),c=function(e){var t=a.useContext(d),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},s=function(e){var t=c(e.components);return a.createElement(d.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,d=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),u=c(n),m=o,v=u["".concat(d,".").concat(m)]||u[m]||p[m]||r;return n?a.createElement(v,i(i({ref:t},s),{},{components:n})):a.createElement(v,i({ref:t},s))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,i=new Array(r);i[0]=u;var l={};for(var d in t)hasOwnProperty.call(t,d)&&(l[d]=t[d]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var c=2;c<r;c++)i[c]=n[c];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},73938:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return l},contentTitle:function(){return d},metadata:function(){return c},toc:function(){return s},default:function(){return u}});var a=n(87462),o=n(63366),r=(n(67294),n(3905)),i=["components"],l={},d="Live Reload",c={unversionedId:"cli/livereload",id:"cli/livereload",isDocsHomePage:!1,title:"Live Reload",description:"One option that can boost productivity when building Ionic apps is Live Reload (or live-reload). When active, Live Reload will reload the browser or Web View when changes in the app are detected. This is particularly useful for developing using hardware devices.",source:"@site/docs/cli/livereload.md",sourceDirName:"cli",slug:"/cli/livereload",permalink:"/docs/cli/livereload",editUrl:"https://github.com/ionic-team/ionic-docs/edit/main/docs/cli/livereload.md",tags:[],version:"current",frontMatter:{},sidebar:"cli",previous:{title:"Configuration",permalink:"/docs/cli/configuration"},next:{title:"Using a Proxy",permalink:"/docs/cli/using-a-proxy"}},s=[{value:"Terms",id:"terms",children:[],level:2},{value:"Usage",id:"usage",children:[{value:"Capacitor",id:"capacitor",children:[],level:3},{value:"Cordova",id:"cordova",children:[{value:"Android",id:"android",children:[],level:4},{value:"iOS",id:"ios",children:[],level:4}],level:3}],level:2},{value:"Tips",id:"tips",children:[],level:2}],p={toc:s};function u(e){var t=e.components,n=(0,o.Z)(e,i);return(0,r.kt)("wrapper",(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"live-reload"},"Live Reload"),(0,r.kt)("p",null,"One option that can boost productivity when building Ionic apps is ",(0,r.kt)("strong",{parentName:"p"},"Live Reload")," (or ",(0,r.kt)("strong",{parentName:"p"},"live-reload"),"). When active, Live Reload will reload the browser or ",(0,r.kt)("a",{parentName:"p",href:"../core-concepts/webview.md"},"Web View")," when changes in the app are detected. This is particularly useful for developing using hardware devices."),(0,r.kt)("h2",{id:"terms"},"Terms"),(0,r.kt)("p",null,"Live Reload is a conflated term. With ",(0,r.kt)("inlineCode",{parentName:"p"},"ionic serve"),", Live Reload just refers to reloading the browser when changes are made. Live Reload can also be used with Capacitor and Cordova to provide the same experience on virtual and hardware devices, which eliminates the need for re-deploying a native binary."),(0,r.kt)("h2",{id:"usage"},"Usage"),(0,r.kt)("p",null,"Since live-reload requires the Web View to load your app from a URL hosted by your computer instead of just reading files on the device, setting up live-reload for hardware devices can be tricky."),(0,r.kt)("p",null,"As with regular device deploys, you will need a cable to connect your device to your computer. The difference is the Ionic CLI configures the Web View to load your app from the dev server on your computer."),(0,r.kt)("h3",{id:"capacitor"},"Capacitor"),(0,r.kt)("p",null,"Capacitor does not yet have a programmatic build for development (track ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/ionic-team/capacitor/issues/324"},"this issue")," for progress), so the Ionic CLI does ",(0,r.kt)("strong",{parentName:"p"},"not")," automatically forward ports for iOS and Android."),(0,r.kt)("p",null,"To use Live Reload with Capacitor, make sure you're either using a virtual device or a hardware device connected to the same Wi-Fi network as your computer. Then, you'll need to specify that you want to use an external address for the dev server using the ",(0,r.kt)("inlineCode",{parentName:"p"},"--external")," flag."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"$ ionic capacitor run ios -l --external\n$ ionic capacitor run android -l --external\n")),(0,r.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"Remember, with the ",(0,r.kt)("inlineCode",{parentName:"p"},"--external")," option, others on your Wi-Fi network will be able to access your app."))),(0,r.kt)("h3",{id:"cordova"},"Cordova"),(0,r.kt)("h4",{id:"android"},"Android"),(0,r.kt)("p",null,"For Android devices, the Ionic CLI will automatically forward the dev server port. This means you can use a ",(0,r.kt)("inlineCode",{parentName:"p"},"localhost")," address and it will refer to your computer when loaded in the Web View, not the device."),(0,r.kt)("p",null,"The following all-in-one command will start a live-reload server on ",(0,r.kt)("inlineCode",{parentName:"p"},"localhost")," and deploy the app to an Android device using Cordova:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"ionic cordova run android -l\n")),(0,r.kt)("h4",{id:"ios"},"iOS"),(0,r.kt)("p",null,"For iOS devices, port forwarding is not yet an option. This means you'll need to connect your device to the same Wi-Fi network as your computer and use an external address for the dev server."),(0,r.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"You can track ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/ionic-team/native-run/issues/20"},"this issue")," for progress on iOS port forwarding with Ionic."))),(0,r.kt)("p",null,"In some cases, the Ionic CLI won't know the address with which to configure the Web View, so you may be prompted to select one. Be sure to select the address of your computer on your Wi-Fi network."),(0,r.kt)("p",null,"The following all-in-one command will start a live-reload server on ",(0,r.kt)("strong",{parentName:"p"},"all addresses")," and deploy the app to an iOS device using Cordova:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"ionic cordova run ios -l --external\n")),(0,r.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"Remember, with the ",(0,r.kt)("inlineCode",{parentName:"p"},"--external")," option, others on your Wi-Fi network will be able to access your app."))),(0,r.kt)("h2",{id:"tips"},"Tips"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"With Cordova, use the ",(0,r.kt)("inlineCode",{parentName:"li"},"--device"),", ",(0,r.kt)("inlineCode",{parentName:"li"},"--emulator"),", and ",(0,r.kt)("inlineCode",{parentName:"li"},"--target")," options to narrow down target devices. Use the ",(0,r.kt)("inlineCode",{parentName:"li"},"--list")," option to list all targets. See usage in the ",(0,r.kt)("a",{parentName:"li",href:"/docs/cli/commands/cordova-run"},"command docs"),"."),(0,r.kt)("li",{parentName:"ul"},"You can separate the dev server process and the deploy process by using ",(0,r.kt)("inlineCode",{parentName:"li"},"ionic serve")," and the ",(0,r.kt)("inlineCode",{parentName:"li"},"--livereload-url")," option of ",(0,r.kt)("inlineCode",{parentName:"li"},"ionic cordova run")," or ",(0,r.kt)("inlineCode",{parentName:"li"},"ionic capacitor run"),"."),(0,r.kt)("li",{parentName:"ul"},"For Android, it is possible to configure ",(0,r.kt)("a",{parentName:"li",href:"https://developer.android.com/studio/command-line/adb"},"adb")," to always forward ports while the adb server is running (see ",(0,r.kt)("inlineCode",{parentName:"li"},"adb reverse"),"). With port forwarding set up, an external address would no longer be required. You can also setup the adb bridge over TCP such that subsequent deploys no longer need a USB cable.")))}u.isMDXComponent=!0}}]);