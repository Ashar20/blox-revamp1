"use strict";(self.webpackChunkionic_docs=self.webpackChunkionic_docs||[]).push([[72276],{3905:function(t,n,l){l.d(n,{Zo:function(){return p},kt:function(){return k}});var e=l(67294);function o(t,n,l){return n in t?Object.defineProperty(t,n,{value:l,enumerable:!0,configurable:!0,writable:!0}):t[n]=l,t}function r(t,n){var l=Object.keys(t);if(Object.getOwnPropertySymbols){var e=Object.getOwnPropertySymbols(t);n&&(e=e.filter((function(n){return Object.getOwnPropertyDescriptor(t,n).enumerable}))),l.push.apply(l,e)}return l}function i(t){for(var n=1;n<arguments.length;n++){var l=null!=arguments[n]?arguments[n]:{};n%2?r(Object(l),!0).forEach((function(n){o(t,n,l[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(l)):r(Object(l)).forEach((function(n){Object.defineProperty(t,n,Object.getOwnPropertyDescriptor(l,n))}))}return t}function u(t,n){if(null==t)return{};var l,e,o=function(t,n){if(null==t)return{};var l,e,o={},r=Object.keys(t);for(e=0;e<r.length;e++)l=r[e],n.indexOf(l)>=0||(o[l]=t[l]);return o}(t,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);for(e=0;e<r.length;e++)l=r[e],n.indexOf(l)>=0||Object.prototype.propertyIsEnumerable.call(t,l)&&(o[l]=t[l])}return o}var a=e.createContext({}),d=function(t){var n=e.useContext(a),l=n;return t&&(l="function"==typeof t?t(n):i(i({},n),t)),l},p=function(t){var n=d(t.components);return e.createElement(a.Provider,{value:n},t.children)},c={inlineCode:"code",wrapper:function(t){var n=t.children;return e.createElement(e.Fragment,{},n)}},s=e.forwardRef((function(t,n){var l=t.components,o=t.mdxType,r=t.originalType,a=t.parentName,p=u(t,["components","mdxType","originalType","parentName"]),s=d(l),k=o,h=s["".concat(a,".").concat(k)]||s[k]||c[k]||r;return l?e.createElement(h,i(i({ref:n},p),{},{components:l})):e.createElement(h,i({ref:n},p))}));function k(t,n){var l=arguments,o=n&&n.mdxType;if("string"==typeof t||o){var r=l.length,i=new Array(r);i[0]=s;var u={};for(var a in n)hasOwnProperty.call(n,a)&&(u[a]=n[a]);u.originalType=t,u.mdxType="string"==typeof t?t:o,i[1]=u;for(var d=2;d<r;d++)i[d]=l[d];return e.createElement.apply(null,i)}return e.createElement.apply(null,l)}s.displayName="MDXCreateElement"},62182:function(t,n,l){l.r(n),l.d(n,{frontMatter:function(){return u},contentTitle:function(){return a},metadata:function(){return d},toc:function(){return p},default:function(){return s}});var e=l(87462),o=l(63366),r=(l(67294),l(3905)),i=["components"],u={title:"ionic cordova run",sidebar_label:"cordova run"},a=void 0,d={unversionedId:"cli/commands/cordova-run",id:"cli/commands/cordova-run",isDocsHomePage:!1,title:"ionic cordova run",description:"ionic cordova run: native-run Android and iOS Apps in Browsers",source:"@site/docs/cli/commands/cordova-run.md",sourceDirName:"cli/commands",slug:"/cli/commands/cordova-run",permalink:"/docs/cli/commands/cordova-run",editUrl:"https://github.com/ionic-team/ionic-cli/edit/develop/packages/@ionic/cli/src/commands/cordova/run.ts",tags:[],version:"current",frontMatter:{title:"ionic cordova run",sidebar_label:"cordova run"},sidebar:"cli",previous:{title:"cordova resources",permalink:"/docs/cli/commands/cordova-resources"},next:{title:"deploy add",permalink:"/docs/cli/commands/deploy-add"}},p=[{value:"Examples",id:"examples",children:[],level:2},{value:"Inputs",id:"inputs",children:[],level:2},{value:"Options",id:"options",children:[],level:2},{value:"Advanced Options",id:"advanced-options",children:[],level:2}],c={toc:p};function s(t){var n=t.components,l=(0,o.Z)(t,i);return(0,r.kt)("wrapper",(0,e.Z)({},c,l,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("head",null,(0,r.kt)("title",null,"ionic cordova run: native-run Android and iOS Apps in Browsers"),(0,r.kt)("meta",{name:"description",content:"Build your app and deploy it to devices and emulators using ionic cordova run. Use the native-run utility to run your app in an Android or iOS device browser."})),(0,r.kt)("p",null,"Run an Ionic project on a connected device"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"$ ionic cordova run [options]\n")),(0,r.kt)("p",null,"Build your app and deploy it to devices and emulators using this command. Optionally specify the ",(0,r.kt)("inlineCode",{parentName:"p"},"--livereload")," option to use the dev server from ",(0,r.kt)("inlineCode",{parentName:"p"},"ionic serve")," for livereload functionality."),(0,r.kt)("p",null,"This command will first use ",(0,r.kt)("inlineCode",{parentName:"p"},"ionic build")," to build web assets (or ",(0,r.kt)("inlineCode",{parentName:"p"},"ionic serve")," with the ",(0,r.kt)("inlineCode",{parentName:"p"},"--livereload")," option). Then, ",(0,r.kt)("inlineCode",{parentName:"p"},"cordova build")," is used to compile and prepare your app. Finally, the ",(0,r.kt)("inlineCode",{parentName:"p"},"native-run")," ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/ionic-team/native-run"},"utility")," is used to run your app on a device. To use Cordova for this process instead, use the ",(0,r.kt)("inlineCode",{parentName:"p"},"--no-native-run")," option."),(0,r.kt)("p",null,"If you have multiple devices and emulators, you can target a specific one with the ",(0,r.kt)("inlineCode",{parentName:"p"},"--target")," option. You can list targets with ",(0,r.kt)("inlineCode",{parentName:"p"},"--list"),"."),(0,r.kt)("p",null,"For Android and iOS, you can setup Remote Debugging on your device with browser development tools using these ",(0,r.kt)("a",{parentName:"p",href:"https://ionicframework.com/docs/developer-resources/developer-tips"},"docs"),"."),(0,r.kt)("p",null,"When using ",(0,r.kt)("inlineCode",{parentName:"p"},"--livereload")," with hardware devices, remember that livereload needs an active connection between device and computer. In some scenarios, you may need to host the dev server on an external address using the ",(0,r.kt)("inlineCode",{parentName:"p"},"--external")," option. See these ",(0,r.kt)("a",{parentName:"p",href:"https://ionicframework.com/docs/cli/livereload"},"docs")," for more information."),(0,r.kt)("p",null,"Just like with ",(0,r.kt)("inlineCode",{parentName:"p"},"ionic cordova build"),", you can pass additional options to the Cordova CLI using the ",(0,r.kt)("inlineCode",{parentName:"p"},"--")," separator. To pass additional options to the dev server, consider using ",(0,r.kt)("inlineCode",{parentName:"p"},"ionic serve")," separately and using the ",(0,r.kt)("inlineCode",{parentName:"p"},"--livereload-url")," option."),(0,r.kt)("h2",{id:"examples"},"Examples"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},'$ ionic cordova run android\n$ ionic cordova run android --buildConfig=build.json\n$ ionic cordova run android --prod --release -- -- --gradleArg=-PcdvBuildMultipleApks=true\n$ ionic cordova run android --prod --release -- -- --keystore=filename.keystore --alias=myalias\n$ ionic cordova run android --prod --release -- -- --minSdkVersion=21\n$ ionic cordova run android --prod --release -- -- --versionCode=55\n$ ionic cordova run android --prod --release --buildConfig=build.json\n$ ionic cordova run android -l\n$ ionic cordova run ios\n$ ionic cordova run ios --buildConfig=build.json\n$ ionic cordova run ios --livereload --external\n$ ionic cordova run ios --livereload-url=http://localhost:8100\n$ ionic cordova run ios --prod --release\n$ ionic cordova run ios --prod --release -- --developmentTeam="ABCD" --codeSignIdentity="iPhone Developer" --packageType="app-store"\n$ ionic cordova run ios --prod --release --buildConfig=build.json\n')),(0,r.kt)("h2",{id:"inputs"},"Inputs"),(0,r.kt)("table",{className:"reference-table"},(0,r.kt)("thead",null,(0,r.kt)("tr",null,(0,r.kt)("th",{colSpan:"2"},(0,r.kt)("h3",null,"platform")))),(0,r.kt)("tbody",null,(0,r.kt)("tr",null,(0,r.kt)("th",null,"Description"),(0,r.kt)("td",null,(0,r.kt)("p",null,"The platform to run (e.g. ",(0,r.kt)("code",null,"android"),", ",(0,r.kt)("code",null,"ios"),")"))))),(0,r.kt)("h2",{id:"options"},"Options"),(0,r.kt)("table",{className:"reference-table"},(0,r.kt)("thead",null,(0,r.kt)("tr",null,(0,r.kt)("th",{colSpan:"2"},(0,r.kt)("h3",null,(0,r.kt)("a",{href:"#option-ssl",id:"option-ssl"},"--ssl"))))),(0,r.kt)("tbody",null,(0,r.kt)("tr",null,(0,r.kt)("th",null,"Description"),(0,r.kt)("td",null,(0,r.kt)("p",null,"Use HTTPS for the dev server")))),(0,r.kt)("thead",null,(0,r.kt)("tr",null,(0,r.kt)("th",{colSpan:"2"},(0,r.kt)("h3",null,(0,r.kt)("a",{href:"#option-list",id:"option-list"},"--list"))))),(0,r.kt)("tbody",null,(0,r.kt)("tr",null,(0,r.kt)("th",null,"Description"),(0,r.kt)("td",null,(0,r.kt)("p",null,"List all available targets")))),(0,r.kt)("thead",null,(0,r.kt)("tr",null,(0,r.kt)("th",{colSpan:"2"},(0,r.kt)("h3",null,(0,r.kt)("a",{href:"#option-build",id:"option-build"},"--no-build"))))),(0,r.kt)("tbody",null,(0,r.kt)("tr",null,(0,r.kt)("th",null,"Description"),(0,r.kt)("td",null,(0,r.kt)("p",null,"Do not invoke Ionic build")))),(0,r.kt)("thead",null,(0,r.kt)("tr",null,(0,r.kt)("th",{colSpan:"2"},(0,r.kt)("h3",null,(0,r.kt)("a",{href:"#option-external",id:"option-external"},"--external"))))),(0,r.kt)("tbody",null,(0,r.kt)("tr",null,(0,r.kt)("th",null,"Description"),(0,r.kt)("td",null,(0,r.kt)("p",null,"Host dev server on all network interfaces (i.e. ",(0,r.kt)("code",null,"--host=0.0.0.0"),")")))),(0,r.kt)("thead",null,(0,r.kt)("tr",null,(0,r.kt)("th",{colSpan:"2"},(0,r.kt)("h3",null,(0,r.kt)("a",{href:"#option-livereload",id:"option-livereload"},"--livereload"))))),(0,r.kt)("tbody",null,(0,r.kt)("tr",null,(0,r.kt)("th",null,"Description"),(0,r.kt)("td",null,(0,r.kt)("p",null,"Spin up dev server to live-reload www files"))),(0,r.kt)("tr",null,(0,r.kt)("th",null,"Aliases"),(0,r.kt)("td",null,(0,r.kt)("code",null,"-l")))),(0,r.kt)("thead",null,(0,r.kt)("tr",null,(0,r.kt)("th",{colSpan:"2"},(0,r.kt)("h3",null,(0,r.kt)("a",{href:"#option-livereload-url",id:"option-livereload-url"},"--livereload-url",(0,r.kt)("span",{class:"option-spec"}," =<url>")))))),(0,r.kt)("tbody",null,(0,r.kt)("tr",null,(0,r.kt)("th",null,"Description"),(0,r.kt)("td",null,(0,r.kt)("p",null,"Provide a custom URL to the dev server")))),(0,r.kt)("thead",null,(0,r.kt)("tr",null,(0,r.kt)("th",{colSpan:"2"},(0,r.kt)("h3",null,(0,r.kt)("a",{href:"#option-prod",id:"option-prod"},"--prod"))))),(0,r.kt)("tbody",null,(0,r.kt)("tr",null,(0,r.kt)("th",null,"Description"),(0,r.kt)("td",null,(0,r.kt)("p",null,"Flag to use the ",(0,r.kt)("code",null,"production")," configuration")))),(0,r.kt)("thead",null,(0,r.kt)("tr",null,(0,r.kt)("th",{colSpan:"2"},(0,r.kt)("h3",null,(0,r.kt)("a",{href:"#option-debug",id:"option-debug"},"--debug"))))),(0,r.kt)("tbody",null,(0,r.kt)("tr",null,(0,r.kt)("th",null,"Description"),(0,r.kt)("td",null,(0,r.kt)("p",null,"Mark as a debug build")))),(0,r.kt)("thead",null,(0,r.kt)("tr",null,(0,r.kt)("th",{colSpan:"2"},(0,r.kt)("h3",null,(0,r.kt)("a",{href:"#option-release",id:"option-release"},"--release"))))),(0,r.kt)("tbody",null,(0,r.kt)("tr",null,(0,r.kt)("th",null,"Description"),(0,r.kt)("td",null,(0,r.kt)("p",null,"Mark as a release build")))),(0,r.kt)("thead",null,(0,r.kt)("tr",null,(0,r.kt)("th",{colSpan:"2"},(0,r.kt)("h3",null,(0,r.kt)("a",{href:"#option-device",id:"option-device"},"--device"))))),(0,r.kt)("tbody",null,(0,r.kt)("tr",null,(0,r.kt)("th",null,"Description"),(0,r.kt)("td",null,(0,r.kt)("p",null,"Deploy build to a device")))),(0,r.kt)("thead",null,(0,r.kt)("tr",null,(0,r.kt)("th",{colSpan:"2"},(0,r.kt)("h3",null,(0,r.kt)("a",{href:"#option-emulator",id:"option-emulator"},"--emulator"))))),(0,r.kt)("tbody",null,(0,r.kt)("tr",null,(0,r.kt)("th",null,"Description"),(0,r.kt)("td",null,(0,r.kt)("p",null,"Deploy build to an emulator")))),(0,r.kt)("thead",null,(0,r.kt)("tr",null,(0,r.kt)("th",{colSpan:"2"},(0,r.kt)("h3",null,(0,r.kt)("a",{href:"#option-native-run",id:"option-native-run"},"--no-native-run"))))),(0,r.kt)("tbody",null,(0,r.kt)("tr",null,(0,r.kt)("th",null,"Description"),(0,r.kt)("td",null,(0,r.kt)("p",null,"Do not use ",(0,r.kt)("code",null,"native-run")," to run the app; use Cordova instead")))),(0,r.kt)("thead",null,(0,r.kt)("tr",null,(0,r.kt)("th",{colSpan:"2"},(0,r.kt)("h3",null,(0,r.kt)("a",{href:"#option-connect",id:"option-connect"},"--connect"))))),(0,r.kt)("tbody",null,(0,r.kt)("tr",null,(0,r.kt)("th",null,"Description"),(0,r.kt)("td",null,(0,r.kt)("p",null,"Tie the running app to the process"))))),(0,r.kt)("h2",{id:"advanced-options"},"Advanced Options"),(0,r.kt)("table",{className:"reference-table"},(0,r.kt)("thead",null,(0,r.kt)("tr",null,(0,r.kt)("th",{colSpan:"2"},(0,r.kt)("h3",null,(0,r.kt)("a",{href:"#option-consolelogs",id:"option-consolelogs"},"--consolelogs"))))),(0,r.kt)("tbody",null,(0,r.kt)("tr",null,(0,r.kt)("th",null,"Description"),(0,r.kt)("td",null,(0,r.kt)("div",null,(0,r.kt)("p",null,"Print app console logs to the terminal"))))),(0,r.kt)("thead",null,(0,r.kt)("tr",null,(0,r.kt)("th",{colSpan:"2"},(0,r.kt)("h3",null,(0,r.kt)("a",{href:"#option-consolelogs-port",id:"option-consolelogs-port"},"--consolelogs-port",(0,r.kt)("span",{class:"option-spec"}," =<port>")))))),(0,r.kt)("tbody",null,(0,r.kt)("tr",null,(0,r.kt)("th",null,"Description"),(0,r.kt)("td",null,(0,r.kt)("div",null,(0,r.kt)("p",null,"Use specific port for console logs server"))))),(0,r.kt)("thead",null,(0,r.kt)("tr",null,(0,r.kt)("th",{colSpan:"2"},(0,r.kt)("h3",null,(0,r.kt)("a",{href:"#option-host",id:"option-host"},"--host",(0,r.kt)("span",{class:"option-spec"}," =<host>")))))),(0,r.kt)("tbody",null,(0,r.kt)("tr",null,(0,r.kt)("th",null,"Description"),(0,r.kt)("td",null,(0,r.kt)("div",null,(0,r.kt)("p",null,"Use specific host for the dev server")))),(0,r.kt)("tr",null,(0,r.kt)("th",null,"Default"),(0,r.kt)("td",null,"localhost"))),(0,r.kt)("thead",null,(0,r.kt)("tr",null,(0,r.kt)("th",{colSpan:"2"},(0,r.kt)("h3",null,(0,r.kt)("a",{href:"#option-port",id:"option-port"},"--port",(0,r.kt)("span",{class:"option-spec"}," =<port>")))))),(0,r.kt)("tbody",null,(0,r.kt)("tr",null,(0,r.kt)("th",null,"Description"),(0,r.kt)("td",null,(0,r.kt)("div",null,(0,r.kt)("p",null,"Use specific port for the dev server")))),(0,r.kt)("tr",null,(0,r.kt)("th",null,"Aliases"),(0,r.kt)("td",null,(0,r.kt)("code",null,"-p"))),(0,r.kt)("tr",null,(0,r.kt)("th",null,"Default"),(0,r.kt)("td",null,"8100"))),(0,r.kt)("thead",null,(0,r.kt)("tr",null,(0,r.kt)("th",{colSpan:"2"},(0,r.kt)("h3",null,(0,r.kt)("a",{href:"#option-public-host",id:"option-public-host"},"--public-host",(0,r.kt)("span",{class:"option-spec"}," =<host>")))))),(0,r.kt)("tbody",null,(0,r.kt)("tr",null,(0,r.kt)("th",null,"Description"),(0,r.kt)("td",null,(0,r.kt)("div",null,(0,r.kt)("p",null,"The host used for the browser or web view"))))),(0,r.kt)("thead",null,(0,r.kt)("tr",null,(0,r.kt)("th",{colSpan:"2"},(0,r.kt)("h3",null,(0,r.kt)("a",{href:"#option-configuration",id:"option-configuration"},"--configuration",(0,r.kt)("span",{class:"option-spec"}," =<conf>")))))),(0,r.kt)("tbody",null,(0,r.kt)("tr",null,(0,r.kt)("th",null,"Description"),(0,r.kt)("td",null,(0,r.kt)("div",null,(0,r.kt)("p",null,"Specify the configuration to use.")))),(0,r.kt)("tr",null,(0,r.kt)("th",null,"Aliases"),(0,r.kt)("td",null,(0,r.kt)("code",null,"-c")))),(0,r.kt)("thead",null,(0,r.kt)("tr",null,(0,r.kt)("th",{colSpan:"2"},(0,r.kt)("h3",null,(0,r.kt)("a",{href:"#option-source-map",id:"option-source-map"},"--source-map"))))),(0,r.kt)("tbody",null,(0,r.kt)("tr",null,(0,r.kt)("th",null,"Description"),(0,r.kt)("td",null,(0,r.kt)("div",null,(0,r.kt)("p",null,"Output source maps"))))),(0,r.kt)("thead",null,(0,r.kt)("tr",null,(0,r.kt)("th",{colSpan:"2"},(0,r.kt)("h3",null,(0,r.kt)("a",{href:"#option-buildConfig",id:"option-buildConfig"},"--buildConfig",(0,r.kt)("span",{class:"option-spec"}," =<file>")))))),(0,r.kt)("tbody",null,(0,r.kt)("tr",null,(0,r.kt)("th",null,"Description"),(0,r.kt)("td",null,(0,r.kt)("div",null,(0,r.kt)("p",null,"Use the specified build configuration"))))),(0,r.kt)("thead",null,(0,r.kt)("tr",null,(0,r.kt)("th",{colSpan:"2"},(0,r.kt)("h3",null,(0,r.kt)("a",{href:"#option-target",id:"option-target"},"--target",(0,r.kt)("span",{class:"option-spec"}," =<target>")))))),(0,r.kt)("tbody",null,(0,r.kt)("tr",null,(0,r.kt)("th",null,"Description"),(0,r.kt)("td",null,(0,r.kt)("div",null,(0,r.kt)("p",null,"Deploy build to a device (use ",(0,r.kt)("code",null,"--list")," to see all)"))))),(0,r.kt)("thead",null,(0,r.kt)("tr",null,(0,r.kt)("th",{colSpan:"2"},(0,r.kt)("h3",null,(0,r.kt)("a",{href:"#option-json",id:"option-json"},"--json"))))),(0,r.kt)("tbody",null,(0,r.kt)("tr",null,(0,r.kt)("th",null,"Description"),(0,r.kt)("td",null,(0,r.kt)("div",null,(0,r.kt)("p",null,"Output targets in JSON")))))))}s.isMDXComponent=!0}}]);