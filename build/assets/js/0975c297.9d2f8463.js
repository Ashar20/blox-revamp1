"use strict";(self.webpackChunkionic_docs=self.webpackChunkionic_docs||[]).push([[14205],{58215:function(e,a,n){var t=n(67294);a.Z=function(e){var a=e.children,n=e.hidden,r=e.className;return t.createElement("div",{role:"tabpanel",hidden:n,className:r},a)}},26396:function(e,a,n){n.d(a,{Z:function(){return p}});var t=n(87462),r=n(67294),s=n(72389),o=n(79443);var i=function(){var e=(0,r.useContext)(o.Z);if(null==e)throw new Error('"useUserPreferencesContext" is used outside of "Layout" component.');return e},l=n(89521),c=n(86010),u="tabItem_1uMI";function d(e){var a,n,t,s=e.lazy,o=e.block,d=e.defaultValue,p=e.values,h=e.groupId,m=e.className,v=r.Children.map(e.children,(function(e){if((0,r.isValidElement)(e)&&void 0!==e.props.value)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),f=null!=p?p:v.map((function(e){var a=e.props;return{value:a.value,label:a.label}})),g=(0,l.lx)(f,(function(e,a){return e.value===a.value}));if(g.length>0)throw new Error('Docusaurus error: Duplicate values "'+g.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var k=null===d?d:null!=(a=null!=d?d:null==(n=v.find((function(e){return e.props.default})))?void 0:n.props.value)?a:null==(t=v[0])?void 0:t.props.value;if(null!==k&&!f.some((function(e){return e.value===k})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+k+'" but none of its children has the corresponding value. Available values are: '+f.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var b=i(),C=b.tabGroupChoices,S=b.setTabGroupChoices,N=(0,r.useState)(k),y=N[0],E=N[1],w=[],T=(0,l.o5)().blockElementScrollPositionUntilNextRender;if(null!=h){var Z=C[h];null!=Z&&Z!==y&&f.some((function(e){return e.value===Z}))&&E(Z)}var x=function(e){var a=e.currentTarget,n=w.indexOf(a),t=f[n].value;t!==y&&(T(a),E(t),null!=h&&S(h,t))},I=function(e){var a,n=null;switch(e.key){case"ArrowRight":var t=w.indexOf(e.currentTarget)+1;n=w[t]||w[0];break;case"ArrowLeft":var r=w.indexOf(e.currentTarget)-1;n=w[r]||w[w.length-1]}null==(a=n)||a.focus()};return r.createElement("div",{className:"tabs-container"},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,c.Z)("tabs",{"tabs--block":o},m)},f.map((function(e){var a=e.value,n=e.label;return r.createElement("li",{role:"tab",tabIndex:y===a?0:-1,"aria-selected":y===a,className:(0,c.Z)("tabs__item",u,{"tabs__item--active":y===a}),key:a,ref:function(e){return w.push(e)},onKeyDown:I,onFocus:x,onClick:x},null!=n?n:a)}))),s?(0,r.cloneElement)(v.filter((function(e){return e.props.value===y}))[0],{className:"margin-vert--md"}):r.createElement("div",{className:"margin-vert--md"},v.map((function(e,a){return(0,r.cloneElement)(e,{key:a,hidden:e.props.value!==y})}))))}function p(e){var a=(0,s.Z)();return r.createElement(d,(0,t.Z)({key:String(a)},e))}},47758:function(e,a,n){n.d(a,{Z:function(){return l}});var t=n(67294),r=n(86010),s=n(39960),o=n(44996),i="card_3DNo";var l=function(e){var a,n=void 0===e.href,l=void 0!==e.href&&/^http/.test(e.href),c="undefined"===e.header?null:t.createElement("header",{className:"Card-header"},e.header),u=e.hoverIcon||e.icon,d=t.createElement(t.Fragment,null,e.img&&t.createElement("img",{src:(0,o.Z)(e.img),className:"Card-image"}),t.createElement("div",{className:"Card-container"},(e.icon||u)&&t.createElement("div",{className:"Card-icon-row"},e.icon&&t.createElement("img",{src:(0,o.Z)(e.icon),className:"Card-icon Card-icon-default"}),u&&t.createElement("img",{src:(0,o.Z)(u),className:"Card-icon Card-icon-hover"})),e.ionicon&&t.createElement("ion-icon",{name:e.ionicon,className:"Card-ionicon"}),e.iconset&&t.createElement("div",{className:"Card-iconset__container"},e.iconset.split(",").map((function(a,n){return t.createElement("img",{src:(0,o.Z)(a),className:"Card-icon "+(n===e.activeIndex?"Card-icon-active":""),"data-index":n,key:n})}))),e.header&&c,t.createElement("div",{className:"Card-content"},e.children))),p=(0,r.Z)(((a={"Card-with-image":void 0!==e.img,"Card-without-image":void 0===e.img,"Card-size-lg":"lg"===e.size})[e.className]=e.className,a));return n?t.createElement("docs-card",{class:p},t.createElement("div",{className:(0,r.Z)(i,"docs-card")},d)):l?t.createElement("docs-card",{class:p},t.createElement("a",{className:(0,r.Z)(i,"docs-card"),href:e.href,target:"_blank"},d)):t.createElement("docs-card",{class:p},t.createElement(s.default,{to:e.href,className:(0,r.Z)(i,"docs-card")},d))}},88694:function(e,a,n){n.d(a,{Z:function(){return u}});var t=n(87462),r=n(63366),s=n(86010),o=n(67294),i="docsButton_2gXP",l="docsButtonRound_2y-L",c=["href","round"];function u(e){var a,n=e.href,u=e.round,d=void 0!==u&&u,p=(0,r.Z)(e,c);return p.className=(0,s.Z)(((a={})[p.className]=Boolean(p.className),a[i]=!0,a["docs-button"]=!0,a[l]=d,a["docs-button--round"]=d,a)),n?o.createElement("a",(0,t.Z)({href:n,className:"docsButton"},p),p.children):o.createElement("button",(0,t.Z)({className:"docsButton"},p),p.children)}},31869:function(e,a,n){n.r(a),n.d(a,{frontMatter:function(){return p},contentTitle:function(){return h},metadata:function(){return m},toc:function(){return v},default:function(){return g}});var t=n(87462),r=n(63366),s=(n(67294),n(3905)),o=n(47758),i=n(88694),l=n(26396),c=n(58215),u=n(19055),d=["components"],p={title:"Splash Screen | Cordova Splash Screen Plugin for Android & iOS",description:"This Cordova plugin displays and hides a splash screen during application launch. Show and hide the splash screen after the Android or iOS app has loaded.",sidebar_label:"Splash Screen"},h="Splash Screen",m={unversionedId:"native/splash-screen",id:"version-v5/native/splash-screen",isDocsHomePage:!1,title:"Splash Screen | Cordova Splash Screen Plugin for Android & iOS",description:"This Cordova plugin displays and hides a splash screen during application launch. Show and hide the splash screen after the Android or iOS app has loaded.",source:"@site/versioned_docs/version-v5/native/splash-screen.md",sourceDirName:"native",slug:"/native/splash-screen",permalink:"/docs/v5/native/splash-screen",editUrl:"https://github.com/ionic-team/ionic-native/edit/master/src/@awesome-cordova-plugins/plugins/splash-screen/index.ts",tags:[],version:"v5",frontMatter:{title:"Splash Screen | Cordova Splash Screen Plugin for Android & iOS",description:"This Cordova plugin displays and hides a splash screen during application launch. Show and hide the splash screen after the Android or iOS app has loaded.",sidebar_label:"Splash Screen"},sidebar:"version-v5/native",previous:{title:"Spinner Dialog",permalink:"/docs/v5/native/spinner-dialog"},next:{title:"Spotify Auth",permalink:"/docs/v5/native/spotify-auth"}},v=[{value:"Supported Platforms",id:"supported-platforms",children:[],level:2},{value:"Capacitor",id:"capacitor",children:[],level:2},{value:"Usage",id:"usage",children:[{value:"React",id:"react",children:[],level:3},{value:"Angular",id:"angular",children:[],level:3}],level:2}],f={toc:v};function g(e){var a=e.components,n=(0,r.Z)(e,d);return(0,s.kt)("wrapper",(0,t.Z)({},f,n,{components:a,mdxType:"MDXLayout"}),(0,s.kt)("h1",{id:"splash-screen"},"Splash Screen"),(0,s.kt)("p",null,"This plugin displays and hides a splash screen during application launch. The methods below allows showing and hiding the splashscreen after the app has loaded."),(0,s.kt)("p",null,(0,s.kt)("a",{href:"https://github.com/apache/cordova-plugin-splashscreen",target:"_blank",rel:"noopener",className:"git-link"},(0,s.kt)("svg",{viewBox:"0 0 512 512"},(0,s.kt)("path",{d:"M416 160c0-35.3-28.7-64-64-64s-64 28.7-64 64c0 23.7 12.9 44.3 32 55.4v8.6c0 19.9-7.8 33.7-25.3 44.9-15.4 9.8-38.1 17.1-67.5 21.5-14 2.1-25.7 6-35.2 10.7V151.4c19.1-11.1 32-31.7 32-55.4 0-35.3-28.7-64-64-64S96 60.7 96 96c0 23.7 12.9 44.3 32 55.4v209.2c-19.1 11.1-32 31.7-32 55.4 0 35.3 28.7 64 64 64s64-28.7 64-64c0-16.6-6.3-31.7-16.7-43.1 1.9-4.9 9.7-16.3 29.4-19.3 38.8-5.8 68.9-15.9 92.3-30.8 36-22.8 55-57 55-98.8v-8.6c19.1-11.1 32-31.7 32-55.4zM160 56c22.1 0 40 17.9 40 40s-17.9 40-40 40-40-17.9-40-40 17.9-40 40-40zm0 400c-22.1 0-40-17.9-40-40s17.9-40 40-40 40 17.9 40 40-17.9 40-40 40zm192-256c-22.1 0-40-17.9-40-40s17.9-40 40-40 40 17.9 40 40-17.9 40-40 40z"}))," ","https://github.com/apache/cordova-plugin-splashscreen")),(0,s.kt)("h2",null,"Stuck on a Cordova issue?"),(0,s.kt)(o.Z,{className:"cordova-ee-card",header:"Don't waste precious time on plugin issues.",href:"https://ionicframework.com/sales?product_of_interest=Ionic%20Native",mdxType:"DocsCard"},(0,s.kt)("div",null,(0,s.kt)("img",{src:"/docs/icons/native-cordova-bot.png",class:"cordova-ee-img"}),(0,s.kt)("p",null,"If you're building a serious project, you can't afford to spend hours troubleshooting. Ionic\u2019s experts offer premium advisory services for both community plugins and premier plugins."),(0,s.kt)(i.Z,{className:"native-ee-detail",mdxType:"DocsButton"},"Contact Us Today!"))),(0,s.kt)("h2",{id:"installation"},(0,s.kt)("a",{href:"#installation"},"Installation")),(0,s.kt)(l.Z,{groupId:"runtime",defaultValue:"Capacitor",values:[{value:"Capacitor",label:"Capacitor"},{value:"Cordova",label:"Cordova"},{value:"Enterprise",label:"Enterprise"}],mdxType:"Tabs"},(0,s.kt)(c.Z,{value:"Capacitor",mdxType:"TabItem"},(0,s.kt)(u.Z,{className:"language-shell",mdxType:"CodeBlock"},"$ npm install cordova-plugin-splashscreen ","\n","$ npm install @awesome-cordova-plugins/splash-screen ","\n","$ ionic cap sync")),(0,s.kt)(c.Z,{value:"Cordova",mdxType:"TabItem"},(0,s.kt)(u.Z,{className:"language-shell",mdxType:"CodeBlock"},"$ ionic cordova plugin add cordova-plugin-splashscreen ","\n","$ npm install @awesome-cordova-plugins/splash-screen ","\n")),(0,s.kt)(c.Z,{value:"Enterprise",mdxType:"TabItem"},(0,s.kt)("blockquote",null,"Ionic Enterprise comes with fully supported and maintained plugins from the Ionic Team. \xa0",(0,s.kt)("a",{class:"btn",href:"https://ionic.io/docs/premier-plugins"},"Learn More")," or if you're interested in an enterprise version of this plugin ",(0,s.kt)("a",{class:"btn",href:"https://ionicframework.com/sales?product_of_interest=Ionic%20Enterprise%20Engine"},"Contact Us")))),(0,s.kt)("h2",{id:"supported-platforms"},"Supported Platforms"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"Amazon Fire OS"),(0,s.kt)("li",{parentName:"ul"},"Android"),(0,s.kt)("li",{parentName:"ul"},"iOS"),(0,s.kt)("li",{parentName:"ul"},"Windows")),(0,s.kt)("h2",{id:"capacitor"},"Capacitor"),(0,s.kt)("p",null,"Not Compatible"),(0,s.kt)("h2",{id:"usage"},"Usage"),(0,s.kt)("h3",{id:"react"},"React"),(0,s.kt)("p",null,(0,s.kt)("a",{parentName:"p",href:"/docs/v5/native/community#react"},"Learn more about using Ionic Native components in React")),(0,s.kt)("h3",{id:"angular"},"Angular"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-tsx"},"import { SplashScreen } from '@awesome-cordova-plugins/splash-screen/ngx';\n\nconstructor(private splashScreen: SplashScreen) { }\n\n...\n\nthis.splashScreen.show();\n\nthis.splashScreen.hide();\n")))}g.isMDXComponent=!0}}]);