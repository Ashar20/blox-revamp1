"use strict";(self.webpackChunkionic_docs=self.webpackChunkionic_docs||[]).push([[54456],{58215:function(e,n,r){var a=r(67294);n.Z=function(e){var n=e.children,r=e.hidden,t=e.className;return a.createElement("div",{role:"tabpanel",hidden:r,className:t},n)}},26396:function(e,n,r){r.d(n,{Z:function(){return m}});var a=r(87462),t=r(67294),o=r(72389),l=r(79443);var i=function(){var e=(0,t.useContext)(l.Z);if(null==e)throw new Error('"useUserPreferencesContext" is used outside of "Layout" component.');return e},s=r(89521),c=r(86010),u="tabItem_1uMI";function d(e){var n,r,a,o=e.lazy,l=e.block,d=e.defaultValue,m=e.values,p=e.groupId,v=e.className,f=t.Children.map(e.children,(function(e){if((0,t.isValidElement)(e)&&void 0!==e.props.value)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),h=null!=m?m:f.map((function(e){var n=e.props;return{value:n.value,label:n.label}})),g=(0,s.lx)(h,(function(e,n){return e.value===n.value}));if(g.length>0)throw new Error('Docusaurus error: Duplicate values "'+g.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var b=null===d?d:null!=(n=null!=d?d:null==(r=f.find((function(e){return e.props.default})))?void 0:r.props.value)?n:null==(a=f[0])?void 0:a.props.value;if(null!==b&&!h.some((function(e){return e.value===b})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+b+'" but none of its children has the corresponding value. Available values are: '+h.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var k=i(),y=k.tabGroupChoices,N=k.setTabGroupChoices,E=(0,t.useState)(b),C=E[0],w=E[1],x=[],T=(0,s.o5)().blockElementScrollPositionUntilNextRender;if(null!=p){var Z=y[p];null!=Z&&Z!==C&&h.some((function(e){return e.value===Z}))&&w(Z)}var I=function(e){var n=e.currentTarget,r=x.indexOf(n),a=h[r].value;a!==C&&(T(n),w(a),null!=p&&N(p,a))},_=function(e){var n,r=null;switch(e.key){case"ArrowRight":var a=x.indexOf(e.currentTarget)+1;r=x[a]||x[0];break;case"ArrowLeft":var t=x.indexOf(e.currentTarget)-1;r=x[t]||x[x.length-1]}null==(n=r)||n.focus()};return t.createElement("div",{className:"tabs-container"},t.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,c.Z)("tabs",{"tabs--block":l},v)},h.map((function(e){var n=e.value,r=e.label;return t.createElement("li",{role:"tab",tabIndex:C===n?0:-1,"aria-selected":C===n,className:(0,c.Z)("tabs__item",u,{"tabs__item--active":C===n}),key:n,ref:function(e){return x.push(e)},onKeyDown:_,onFocus:I,onClick:I},null!=r?r:n)}))),o?(0,t.cloneElement)(f.filter((function(e){return e.props.value===C}))[0],{className:"margin-vert--md"}):t.createElement("div",{className:"margin-vert--md"},f.map((function(e,n){return(0,t.cloneElement)(e,{key:n,hidden:e.props.value!==C})}))))}function m(e){var n=(0,o.Z)();return t.createElement(d,(0,a.Z)({key:String(n)},e))}},47758:function(e,n,r){r.d(n,{Z:function(){return s}});var a=r(67294),t=r(86010),o=r(39960),l=r(44996),i="card_3DNo";var s=function(e){var n,r=void 0===e.href,s=void 0!==e.href&&/^http/.test(e.href),c="undefined"===e.header?null:a.createElement("header",{className:"Card-header"},e.header),u=e.hoverIcon||e.icon,d=a.createElement(a.Fragment,null,e.img&&a.createElement("img",{src:(0,l.Z)(e.img),className:"Card-image"}),a.createElement("div",{className:"Card-container"},(e.icon||u)&&a.createElement("div",{className:"Card-icon-row"},e.icon&&a.createElement("img",{src:(0,l.Z)(e.icon),className:"Card-icon Card-icon-default"}),u&&a.createElement("img",{src:(0,l.Z)(u),className:"Card-icon Card-icon-hover"})),e.ionicon&&a.createElement("ion-icon",{name:e.ionicon,className:"Card-ionicon"}),e.iconset&&a.createElement("div",{className:"Card-iconset__container"},e.iconset.split(",").map((function(n,r){return a.createElement("img",{src:(0,l.Z)(n),className:"Card-icon "+(r===e.activeIndex?"Card-icon-active":""),"data-index":r,key:r})}))),e.header&&c,a.createElement("div",{className:"Card-content"},e.children))),m=(0,t.Z)(((n={"Card-with-image":void 0!==e.img,"Card-without-image":void 0===e.img,"Card-size-lg":"lg"===e.size})[e.className]=e.className,n));return r?a.createElement("docs-card",{class:m},a.createElement("div",{className:(0,t.Z)(i,"docs-card")},d)):s?a.createElement("docs-card",{class:m},a.createElement("a",{className:(0,t.Z)(i,"docs-card"),href:e.href,target:"_blank"},d)):a.createElement("docs-card",{class:m},a.createElement(o.default,{to:e.href,className:(0,t.Z)(i,"docs-card")},d))}},88694:function(e,n,r){r.d(n,{Z:function(){return u}});var a=r(87462),t=r(63366),o=r(86010),l=r(67294),i="docsButton_2gXP",s="docsButtonRound_2y-L",c=["href","round"];function u(e){var n,r=e.href,u=e.round,d=void 0!==u&&u,m=(0,t.Z)(e,c);return m.className=(0,o.Z)(((n={})[m.className]=Boolean(m.className),n[i]=!0,n["docs-button"]=!0,n[s]=d,n["docs-button--round"]=d,n)),r?l.createElement("a",(0,a.Z)({href:r,className:"docsButton"},m),m.children):l.createElement("button",(0,a.Z)({className:"docsButton"},m),m.children)}},44584:function(e,n,r){r.r(n),r.d(n,{frontMatter:function(){return m},contentTitle:function(){return p},metadata:function(){return v},toc:function(){return f},default:function(){return g}});var a=r(87462),t=r(63366),o=(r(67294),r(3905)),l=r(47758),i=r(88694),s=r(26396),c=r(58215),u=r(19055),d=["components"],m={sidebar_label:"Android Full Screen"},p="Android Full Screen",v={unversionedId:"native/android-full-screen",id:"version-v5/native/android-full-screen",isDocsHomePage:!1,title:"Android Full Screen",description:"This plugin enables developers to offer users a true full screen experience in their Cordova and PhoneGap apps for Android.",source:"@site/versioned_docs/version-v5/native/android-full-screen.md",sourceDirName:"native",slug:"/native/android-full-screen",permalink:"/developer/docs/v5/native/android-full-screen",editUrl:"https://github.com/ionic-team/ionic-native/edit/master/src/@awesome-cordova-plugins/plugins/android-full-screen/index.ts",tags:[],version:"v5",frontMatter:{sidebar_label:"Android Full Screen"},sidebar:"version-v5/native",previous:{title:"Android ExoPlayer",permalink:"/developer/docs/v5/native/android-exoplayer"},next:{title:"Android Notch",permalink:"/developer/docs/v5/native/android-notch"}},f=[{value:"Supported Platforms",id:"supported-platforms",children:[],level:2},{value:"Usage",id:"usage",children:[{value:"React",id:"react",children:[],level:3},{value:"Angular",id:"angular",children:[],level:3}],level:2}],h={toc:f};function g(e){var n=e.components,r=(0,t.Z)(e,d);return(0,o.kt)("wrapper",(0,a.Z)({},h,r,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"android-full-screen"},"Android Full Screen"),(0,o.kt)("p",null,'This plugin enables developers to offer users a true full screen experience in their Cordova and PhoneGap apps for Android.\nUsing Android 4.0+, you can use true full screen in "lean mode", the way you see in apps like YouTube, expanding the app right to the edges of the screen, hiding the status and navigation bars until the user next interacts. This is ideally suited to video or cut-scene content.\nIn Android 4.4+, however, you can now enter true full screen, fully interactive immersive mode. In this mode, your app will remain in true full screen until you choose otherwise; users can swipe down from the top of the screen to temporarily display the system UI.'),(0,o.kt)("p",null,(0,o.kt)("a",{href:"https://github.com/mesmotronic/cordova-plugin-fullscreen",target:"_blank",rel:"noopener",className:"git-link"},(0,o.kt)("svg",{viewBox:"0 0 512 512"},(0,o.kt)("path",{d:"M416 160c0-35.3-28.7-64-64-64s-64 28.7-64 64c0 23.7 12.9 44.3 32 55.4v8.6c0 19.9-7.8 33.7-25.3 44.9-15.4 9.8-38.1 17.1-67.5 21.5-14 2.1-25.7 6-35.2 10.7V151.4c19.1-11.1 32-31.7 32-55.4 0-35.3-28.7-64-64-64S96 60.7 96 96c0 23.7 12.9 44.3 32 55.4v209.2c-19.1 11.1-32 31.7-32 55.4 0 35.3 28.7 64 64 64s64-28.7 64-64c0-16.6-6.3-31.7-16.7-43.1 1.9-4.9 9.7-16.3 29.4-19.3 38.8-5.8 68.9-15.9 92.3-30.8 36-22.8 55-57 55-98.8v-8.6c19.1-11.1 32-31.7 32-55.4zM160 56c22.1 0 40 17.9 40 40s-17.9 40-40 40-40-17.9-40-40 17.9-40 40-40zm0 400c-22.1 0-40-17.9-40-40s17.9-40 40-40 40 17.9 40 40-17.9 40-40 40zm192-256c-22.1 0-40-17.9-40-40s17.9-40 40-40 40 17.9 40 40-17.9 40-40 40z"}))," ","https://github.com/mesmotronic/cordova-plugin-fullscreen")),(0,o.kt)("h2",null,"Stuck on a Cordova issue?"),(0,o.kt)(l.Z,{className:"cordova-ee-card",header:"Don't waste precious time on plugin issues.",href:"https://ionicframework.com/sales?product_of_interest=Ionic%20Native",mdxType:"DocsCard"},(0,o.kt)("div",null,(0,o.kt)("img",{src:"/docs/icons/native-cordova-bot.png",class:"cordova-ee-img"}),(0,o.kt)("p",null,"If you're building a serious project, you can't afford to spend hours troubleshooting. Ionic\u2019s experts offer premium advisory services for both community plugins and premier plugins."),(0,o.kt)(i.Z,{className:"native-ee-detail",mdxType:"DocsButton"},"Contact Us Today!"))),(0,o.kt)("h2",{id:"installation"},(0,o.kt)("a",{href:"#installation"},"Installation")),(0,o.kt)(s.Z,{groupId:"runtime",defaultValue:"Capacitor",values:[{value:"Capacitor",label:"Capacitor"},{value:"Cordova",label:"Cordova"},{value:"Enterprise",label:"Enterprise"}],mdxType:"Tabs"},(0,o.kt)(c.Z,{value:"Capacitor",mdxType:"TabItem"},(0,o.kt)(u.Z,{className:"language-shell",mdxType:"CodeBlock"},"$ npm install cordova-plugin-fullscreen ","\n","$ npm install @awesome-cordova-plugins/android-full-screen ","\n","$ ionic cap sync")),(0,o.kt)(c.Z,{value:"Cordova",mdxType:"TabItem"},(0,o.kt)(u.Z,{className:"language-shell",mdxType:"CodeBlock"},"$ ionic cordova plugin add cordova-plugin-fullscreen ","\n","$ npm install @awesome-cordova-plugins/android-full-screen ","\n")),(0,o.kt)(c.Z,{value:"Enterprise",mdxType:"TabItem"},(0,o.kt)("blockquote",null,"Ionic Enterprise comes with fully supported and maintained plugins from the Ionic Team. \xa0",(0,o.kt)("a",{class:"btn",href:"https://ionic.io/docs/premier-plugins"},"Learn More")," or if you're interested in an enterprise version of this plugin ",(0,o.kt)("a",{class:"btn",href:"https://ionicframework.com/sales?product_of_interest=Ionic%20Enterprise%20Engine"},"Contact Us")))),(0,o.kt)("h2",{id:"supported-platforms"},"Supported Platforms"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Android")),(0,o.kt)("h2",{id:"usage"},"Usage"),(0,o.kt)("h3",{id:"react"},"React"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"/developer/docs/v5/native/community#react"},"Learn more about using Ionic Native components in React")),(0,o.kt)("h3",{id:"angular"},"Angular"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx"},"import { AndroidFullScreen } from '@awesome-cordova-plugins/android-full-screen/ngx';\n\nconstructor(private androidFullScreen: AndroidFullScreen) { }\n\n...\n\nthis.androidFullScreen.isImmersiveModeSupported()\n  .then(() => console.log('Immersive mode supported'))\n  .catch(err => console.log(err));\n\n")))}g.isMDXComponent=!0}}]);