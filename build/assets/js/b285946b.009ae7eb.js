"use strict";(self.webpackChunkionic_docs=self.webpackChunkionic_docs||[]).push([[65505],{58215:function(e,t,n){var a=n(67294);t.Z=function(e){var t=e.children,n=e.hidden,r=e.className;return a.createElement("div",{role:"tabpanel",hidden:n,className:r},t)}},26396:function(e,t,n){n.d(t,{Z:function(){return m}});var a=n(87462),r=n(67294),o=n(72389),c=n(79443);var i=function(){var e=(0,r.useContext)(c.Z);if(null==e)throw new Error('"useUserPreferencesContext" is used outside of "Layout" component.');return e},l=n(89521),s=n(86010),u="tabItem_1uMI";function d(e){var t,n,a,o=e.lazy,c=e.block,d=e.defaultValue,m=e.values,p=e.groupId,h=e.className,v=r.Children.map(e.children,(function(e){if((0,r.isValidElement)(e)&&void 0!==e.props.value)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),f=null!=m?m:v.map((function(e){var t=e.props;return{value:t.value,label:t.label}})),g=(0,l.lx)(f,(function(e,t){return e.value===t.value}));if(g.length>0)throw new Error('Docusaurus error: Duplicate values "'+g.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var k=null===d?d:null!=(t=null!=d?d:null==(n=v.find((function(e){return e.props.default})))?void 0:n.props.value)?t:null==(a=v[0])?void 0:a.props.value;if(null!==k&&!f.some((function(e){return e.value===k})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+k+'" but none of its children has the corresponding value. Available values are: '+f.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var b=i(),y=b.tabGroupChoices,N=b.setTabGroupChoices,E=(0,r.useState)(k),C=E[0],w=E[1],T=[],Z=(0,l.o5)().blockElementScrollPositionUntilNextRender;if(null!=p){var x=y[p];null!=x&&x!==C&&f.some((function(e){return e.value===x}))&&w(x)}var I=function(e){var t=e.currentTarget,n=T.indexOf(t),a=f[n].value;a!==C&&(Z(t),w(a),null!=p&&N(p,a))},B=function(e){var t,n=null;switch(e.key){case"ArrowRight":var a=T.indexOf(e.currentTarget)+1;n=T[a]||T[0];break;case"ArrowLeft":var r=T.indexOf(e.currentTarget)-1;n=T[r]||T[T.length-1]}null==(t=n)||t.focus()};return r.createElement("div",{className:"tabs-container"},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,s.Z)("tabs",{"tabs--block":c},h)},f.map((function(e){var t=e.value,n=e.label;return r.createElement("li",{role:"tab",tabIndex:C===t?0:-1,"aria-selected":C===t,className:(0,s.Z)("tabs__item",u,{"tabs__item--active":C===t}),key:t,ref:function(e){return T.push(e)},onKeyDown:B,onFocus:I,onClick:I},null!=n?n:t)}))),o?(0,r.cloneElement)(v.filter((function(e){return e.props.value===C}))[0],{className:"margin-vert--md"}):r.createElement("div",{className:"margin-vert--md"},v.map((function(e,t){return(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==C})}))))}function m(e){var t=(0,o.Z)();return r.createElement(d,(0,a.Z)({key:String(t)},e))}},47758:function(e,t,n){n.d(t,{Z:function(){return l}});var a=n(67294),r=n(86010),o=n(39960),c=n(44996),i="card_3DNo";var l=function(e){var t,n=void 0===e.href,l=void 0!==e.href&&/^http/.test(e.href),s="undefined"===e.header?null:a.createElement("header",{className:"Card-header"},e.header),u=e.hoverIcon||e.icon,d=a.createElement(a.Fragment,null,e.img&&a.createElement("img",{src:(0,c.Z)(e.img),className:"Card-image"}),a.createElement("div",{className:"Card-container"},(e.icon||u)&&a.createElement("div",{className:"Card-icon-row"},e.icon&&a.createElement("img",{src:(0,c.Z)(e.icon),className:"Card-icon Card-icon-default"}),u&&a.createElement("img",{src:(0,c.Z)(u),className:"Card-icon Card-icon-hover"})),e.ionicon&&a.createElement("ion-icon",{name:e.ionicon,className:"Card-ionicon"}),e.iconset&&a.createElement("div",{className:"Card-iconset__container"},e.iconset.split(",").map((function(t,n){return a.createElement("img",{src:(0,c.Z)(t),className:"Card-icon "+(n===e.activeIndex?"Card-icon-active":""),"data-index":n,key:n})}))),e.header&&s,a.createElement("div",{className:"Card-content"},e.children))),m=(0,r.Z)(((t={"Card-with-image":void 0!==e.img,"Card-without-image":void 0===e.img,"Card-size-lg":"lg"===e.size})[e.className]=e.className,t));return n?a.createElement("docs-card",{class:m},a.createElement("div",{className:(0,r.Z)(i,"docs-card")},d)):l?a.createElement("docs-card",{class:m},a.createElement("a",{className:(0,r.Z)(i,"docs-card"),href:e.href,target:"_blank"},d)):a.createElement("docs-card",{class:m},a.createElement(o.default,{to:e.href,className:(0,r.Z)(i,"docs-card")},d))}},88694:function(e,t,n){n.d(t,{Z:function(){return u}});var a=n(87462),r=n(63366),o=n(86010),c=n(67294),i="docsButton_2gXP",l="docsButtonRound_2y-L",s=["href","round"];function u(e){var t,n=e.href,u=e.round,d=void 0!==u&&u,m=(0,r.Z)(e,s);return m.className=(0,o.Z)(((t={})[m.className]=Boolean(m.className),t[i]=!0,t["docs-button"]=!0,t[l]=d,t["docs-button--round"]=d,t)),n?c.createElement("a",(0,a.Z)({href:n,className:"docsButton"},m),m.children):c.createElement("button",(0,a.Z)({className:"docsButton"},m),m.children)}},11427:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return m},contentTitle:function(){return p},metadata:function(){return h},toc:function(){return v},default:function(){return g}});var a=n(87462),r=n(63366),o=(n(67294),n(3905)),c=n(47758),i=n(88694),l=n(26396),s=n(58215),u=n(19055),d=["components"],m={sidebar_label:"Background Fetch"},p="Background Fetch",h={unversionedId:"native/background-fetch",id:"version-v5/native/background-fetch",isDocsHomePage:!1,title:"Background Fetch",description:"iOS Background Fetch Implementation. See//developer.apple.com/reference/uikit/uiapplication#1657399",source:"@site/versioned_docs/version-v5/native/background-fetch.md",sourceDirName:"native",slug:"/native/background-fetch",permalink:"/developer/docs/v5/native/background-fetch",editUrl:"https://github.com/ionic-team/ionic-native/edit/master/src/@awesome-cordova-plugins/plugins/background-fetch/index.ts",tags:[],version:"v5",frontMatter:{sidebar_label:"Background Fetch"},sidebar:"version-v5/native",previous:{title:"Appsflyer",permalink:"/developer/docs/v5/native/appsflyer"},next:{title:"Background Geolocation",permalink:"/developer/docs/v5/native/background-geolocation"}},v=[{value:"Supported Platforms",id:"supported-platforms",children:[],level:2},{value:"Usage",id:"usage",children:[{value:"React",id:"react",children:[],level:3},{value:"Angular",id:"angular",children:[],level:3}],level:2}],f={toc:v};function g(e){var t=e.components,n=(0,r.Z)(e,d);return(0,o.kt)("wrapper",(0,a.Z)({},f,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"background-fetch"},"Background Fetch"),(0,o.kt)("p",null,"iOS Background Fetch Implementation. See: ",(0,o.kt)("a",{parentName:"p",href:"https://developer.apple.com/reference/uikit/uiapplication#1657399"},"https://developer.apple.com/reference/uikit/uiapplication#1657399"),"\niOS Background Fetch is basically an API which wakes up your app about every 15 minutes (during the user's prime-time hours) and provides your app exactly 30s of background running-time. This plugin will execute your provided callbackFn whenever a background-fetch event occurs. There is no way to increase the rate which a fetch-event occurs and this plugin sets the rate to the most frequent possible value of UIApplicationBackgroundFetchIntervalMinimum -- iOS determines the rate automatically based upon device usage and time-of-day (ie: fetch-rate is about ~15min during prime-time hours; less frequently when the user is presumed to be sleeping, at 3am for example).\nFor more detail, please see ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/transistorsoft/cordova-plugin-background-fetch"},"https://github.com/transistorsoft/cordova-plugin-background-fetch")),(0,o.kt)("p",null,(0,o.kt)("a",{href:"https://github.com/transistorsoft/cordova-plugin-background-fetch",target:"_blank",rel:"noopener",className:"git-link"},(0,o.kt)("svg",{viewBox:"0 0 512 512"},(0,o.kt)("path",{d:"M416 160c0-35.3-28.7-64-64-64s-64 28.7-64 64c0 23.7 12.9 44.3 32 55.4v8.6c0 19.9-7.8 33.7-25.3 44.9-15.4 9.8-38.1 17.1-67.5 21.5-14 2.1-25.7 6-35.2 10.7V151.4c19.1-11.1 32-31.7 32-55.4 0-35.3-28.7-64-64-64S96 60.7 96 96c0 23.7 12.9 44.3 32 55.4v209.2c-19.1 11.1-32 31.7-32 55.4 0 35.3 28.7 64 64 64s64-28.7 64-64c0-16.6-6.3-31.7-16.7-43.1 1.9-4.9 9.7-16.3 29.4-19.3 38.8-5.8 68.9-15.9 92.3-30.8 36-22.8 55-57 55-98.8v-8.6c19.1-11.1 32-31.7 32-55.4zM160 56c22.1 0 40 17.9 40 40s-17.9 40-40 40-40-17.9-40-40 17.9-40 40-40zm0 400c-22.1 0-40-17.9-40-40s17.9-40 40-40 40 17.9 40 40-17.9 40-40 40zm192-256c-22.1 0-40-17.9-40-40s17.9-40 40-40 40 17.9 40 40-17.9 40-40 40z"}))," ","https://github.com/transistorsoft/cordova-plugin-background-fetch")),(0,o.kt)("h2",null,"Stuck on a Cordova issue?"),(0,o.kt)(c.Z,{className:"cordova-ee-card",header:"Don't waste precious time on plugin issues.",href:"https://ionicframework.com/sales?product_of_interest=Ionic%20Native",mdxType:"DocsCard"},(0,o.kt)("div",null,(0,o.kt)("img",{src:"/docs/icons/native-cordova-bot.png",class:"cordova-ee-img"}),(0,o.kt)("p",null,"If you're building a serious project, you can't afford to spend hours troubleshooting. Ionic\u2019s experts offer premium advisory services for both community plugins and premier plugins."),(0,o.kt)(i.Z,{className:"native-ee-detail",mdxType:"DocsButton"},"Contact Us Today!"))),(0,o.kt)("h2",{id:"installation"},(0,o.kt)("a",{href:"#installation"},"Installation")),(0,o.kt)(l.Z,{groupId:"runtime",defaultValue:"Capacitor",values:[{value:"Capacitor",label:"Capacitor"},{value:"Cordova",label:"Cordova"},{value:"Enterprise",label:"Enterprise"}],mdxType:"Tabs"},(0,o.kt)(s.Z,{value:"Capacitor",mdxType:"TabItem"},(0,o.kt)(u.Z,{className:"language-shell",mdxType:"CodeBlock"},"$ npm install cordova-plugin-background-fetch ","\n","$ npm install @awesome-cordova-plugins/background-fetch ","\n","$ ionic cap sync")),(0,o.kt)(s.Z,{value:"Cordova",mdxType:"TabItem"},(0,o.kt)(u.Z,{className:"language-shell",mdxType:"CodeBlock"},"$ ionic cordova plugin add cordova-plugin-background-fetch ","\n","$ npm install @awesome-cordova-plugins/background-fetch ","\n")),(0,o.kt)(s.Z,{value:"Enterprise",mdxType:"TabItem"},(0,o.kt)("blockquote",null,"Ionic Enterprise comes with fully supported and maintained plugins from the Ionic Team. \xa0",(0,o.kt)("a",{class:"btn",href:"https://ionic.io/docs/premier-plugins"},"Learn More")," or if you're interested in an enterprise version of this plugin ",(0,o.kt)("a",{class:"btn",href:"https://ionicframework.com/sales?product_of_interest=Ionic%20Enterprise%20Engine"},"Contact Us")))),(0,o.kt)("h2",{id:"supported-platforms"},"Supported Platforms"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"iOS")),(0,o.kt)("h2",{id:"usage"},"Usage"),(0,o.kt)("h3",{id:"react"},"React"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"/developer/docs/v5/native/community#react"},"Learn more about using Ionic Native components in React")),(0,o.kt)("h3",{id:"angular"},"Angular"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx"},"import { BackgroundFetch, BackgroundFetchConfig } from '@awesome-cordova-plugins/background-fetch/ngx';\n\n\nconstructor(private backgroundFetch: BackgroundFetch) {\n\n  const config: BackgroundFetchConfig = {\n    stopOnTerminate: false, // Set true to cease background-fetch from operating after user \"closes\" the app. Defaults to true.\n  }\n\n  backgroundFetch.configure(config)\n     .then(() => {\n         console.log('Background Fetch initialized');\n\n         this.backgroundFetch.finish();\n\n     })\n     .catch(e => console.log('Error initializing background fetch', e));\n\n  // Start the background-fetch API. Your callbackFn provided to #configure will be executed each time a background-fetch event occurs. NOTE the #configure method automatically calls #start. You do not have to call this method after you #configure the plugin\n  backgroundFetch.start();\n\n  // Stop the background-fetch API from firing fetch events. Your callbackFn provided to #configure will no longer be executed.\n  backgroundFetch.stop();\n\n\n}\n\n")))}g.isMDXComponent=!0}}]);