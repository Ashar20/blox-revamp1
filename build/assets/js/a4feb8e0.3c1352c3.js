"use strict";(self.webpackChunkionic_docs=self.webpackChunkionic_docs||[]).push([[12396],{58215:function(e,n,t){var o=t(67294);n.Z=function(e){var n=e.children,t=e.hidden,r=e.className;return o.createElement("div",{role:"tabpanel",hidden:t,className:r},n)}},26396:function(e,n,t){t.d(n,{Z:function(){return m}});var o=t(87462),r=t(67294),a=t(72389),i=t(79443);var l=function(){var e=(0,r.useContext)(i.Z);if(null==e)throw new Error('"useUserPreferencesContext" is used outside of "Layout" component.');return e},s=t(89521),c=t(86010),d="tabItem_1uMI";function u(e){var n,t,o,a=e.lazy,i=e.block,u=e.defaultValue,m=e.values,p=e.groupId,h=e.className,v=r.Children.map(e.children,(function(e){if((0,r.isValidElement)(e)&&void 0!==e.props.value)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),f=null!=m?m:v.map((function(e){var n=e.props;return{value:n.value,label:n.label}})),g=(0,s.lx)(f,(function(e,n){return e.value===n.value}));if(g.length>0)throw new Error('Docusaurus error: Duplicate values "'+g.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var b=null===u?u:null!=(n=null!=u?u:null==(t=v.find((function(e){return e.props.default})))?void 0:t.props.value)?n:null==(o=v[0])?void 0:o.props.value;if(null!==b&&!f.some((function(e){return e.value===b})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+b+'" but none of its children has the corresponding value. Available values are: '+f.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var k=l(),N=k.tabGroupChoices,E=k.setTabGroupChoices,y=(0,r.useState)(b),C=y[0],x=y[1],I=[],T=(0,s.o5)().blockElementScrollPositionUntilNextRender;if(null!=p){var Z=N[p];null!=Z&&Z!==C&&f.some((function(e){return e.value===Z}))&&x(Z)}var w=function(e){var n=e.currentTarget,t=I.indexOf(n),o=f[t].value;o!==C&&(T(n),x(o),null!=p&&E(p,o))},_=function(e){var n,t=null;switch(e.key){case"ArrowRight":var o=I.indexOf(e.currentTarget)+1;t=I[o]||I[0];break;case"ArrowLeft":var r=I.indexOf(e.currentTarget)-1;t=I[r]||I[I.length-1]}null==(n=t)||n.focus()};return r.createElement("div",{className:"tabs-container"},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,c.Z)("tabs",{"tabs--block":i},h)},f.map((function(e){var n=e.value,t=e.label;return r.createElement("li",{role:"tab",tabIndex:C===n?0:-1,"aria-selected":C===n,className:(0,c.Z)("tabs__item",d,{"tabs__item--active":C===n}),key:n,ref:function(e){return I.push(e)},onKeyDown:_,onFocus:w,onClick:w},null!=t?t:n)}))),a?(0,r.cloneElement)(v.filter((function(e){return e.props.value===C}))[0],{className:"margin-vert--md"}):r.createElement("div",{className:"margin-vert--md"},v.map((function(e,n){return(0,r.cloneElement)(e,{key:n,hidden:e.props.value!==C})}))))}function m(e){var n=(0,a.Z)();return r.createElement(u,(0,o.Z)({key:String(n)},e))}},47758:function(e,n,t){t.d(n,{Z:function(){return s}});var o=t(67294),r=t(86010),a=t(39960),i=t(44996),l="card_3DNo";var s=function(e){var n,t=void 0===e.href,s=void 0!==e.href&&/^http/.test(e.href),c="undefined"===e.header?null:o.createElement("header",{className:"Card-header"},e.header),d=e.hoverIcon||e.icon,u=o.createElement(o.Fragment,null,e.img&&o.createElement("img",{src:(0,i.Z)(e.img),className:"Card-image"}),o.createElement("div",{className:"Card-container"},(e.icon||d)&&o.createElement("div",{className:"Card-icon-row"},e.icon&&o.createElement("img",{src:(0,i.Z)(e.icon),className:"Card-icon Card-icon-default"}),d&&o.createElement("img",{src:(0,i.Z)(d),className:"Card-icon Card-icon-hover"})),e.ionicon&&o.createElement("ion-icon",{name:e.ionicon,className:"Card-ionicon"}),e.iconset&&o.createElement("div",{className:"Card-iconset__container"},e.iconset.split(",").map((function(n,t){return o.createElement("img",{src:(0,i.Z)(n),className:"Card-icon "+(t===e.activeIndex?"Card-icon-active":""),"data-index":t,key:t})}))),e.header&&c,o.createElement("div",{className:"Card-content"},e.children))),m=(0,r.Z)(((n={"Card-with-image":void 0!==e.img,"Card-without-image":void 0===e.img,"Card-size-lg":"lg"===e.size})[e.className]=e.className,n));return t?o.createElement("docs-card",{class:m},o.createElement("div",{className:(0,r.Z)(l,"docs-card")},u)):s?o.createElement("docs-card",{class:m},o.createElement("a",{className:(0,r.Z)(l,"docs-card"),href:e.href,target:"_blank"},u)):o.createElement("docs-card",{class:m},o.createElement(a.default,{to:e.href,className:(0,r.Z)(l,"docs-card")},u))}},88694:function(e,n,t){t.d(n,{Z:function(){return d}});var o=t(87462),r=t(63366),a=t(86010),i=t(67294),l="docsButton_2gXP",s="docsButtonRound_2y-L",c=["href","round"];function d(e){var n,t=e.href,d=e.round,u=void 0!==d&&d,m=(0,r.Z)(e,c);return m.className=(0,a.Z)(((n={})[m.className]=Boolean(m.className),n[l]=!0,n["docs-button"]=!0,n[s]=u,n["docs-button--round"]=u,n)),t?i.createElement("a",(0,o.Z)({href:t,className:"docsButton"},m),m.children):i.createElement("button",(0,o.Z)({className:"docsButton"},m),m.children)}},82197:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return m},contentTitle:function(){return p},metadata:function(){return h},toc:function(){return v},default:function(){return g}});var o=t(87462),r=t(63366),a=(t(67294),t(3905)),i=t(47758),l=t(88694),s=t(26396),c=t(58215),d=t(19055),u=["components"],m={title:"Android Notch"},p=void 0,h={unversionedId:"native/android-notch",id:"native/android-notch",isDocsHomePage:!1,title:"Android Notch",description:"Android Notch: Plugin to Enable Cutout and Devices Inset Sizes",source:"@site/docs/native/android-notch.md",sourceDirName:"native",slug:"/native/android-notch",permalink:"/developer/docs/native/android-notch",editUrl:"https://github.com/ionic-team/ionic-native/edit/master/src/@awesome-cordova-plugins/plugins/android-notch/index.ts",tags:[],version:"current",frontMatter:{title:"Android Notch"},sidebar:"native",previous:{title:"Android Full Screen",permalink:"/developer/docs/native/android-full-screen"},next:{title:"Android Permissions",permalink:"/developer/docs/native/android-permissions"}},v=[{value:"Supported Platforms",id:"supported-platforms",children:[],level:2},{value:"Usage",id:"usage",children:[{value:"React",id:"react",children:[],level:3},{value:"Angular",id:"angular",children:[],level:3}],level:2}],f={toc:v};function g(e){var n=e.components,t=(0,r.Z)(e,u);return(0,a.kt)("wrapper",(0,o.Z)({},f,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("head",null,(0,a.kt)("title",null,"Android Notch: Plugin to Enable Cutout and Devices Inset Sizes"),(0,a.kt)("meta",{name:"description",content:"The Android Notch plugin enables developers to get the cutout and android devices inset sizes. Read to learn more about usage and installation."})),(0,a.kt)("p",null,"This plugin enables developers to get the cutout and android devices inset sizes\nIt is based on the cordova plugin developed by @tobspr: ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/tobspr/cordova-plugin-android-notch"},"https://github.com/tobspr/cordova-plugin-android-notch"),"\nThis plugin works on all android versions, but we can only detect notches starting from Android 9."),(0,a.kt)("p",null,(0,a.kt)("a",{href:"https://github.com/tobspr/cordova-plugin-android-notch.git",target:"_blank",rel:"noopener",className:"git-link"},(0,a.kt)("svg",{viewBox:"0 0 512 512"},(0,a.kt)("path",{d:"M416 160c0-35.3-28.7-64-64-64s-64 28.7-64 64c0 23.7 12.9 44.3 32 55.4v8.6c0 19.9-7.8 33.7-25.3 44.9-15.4 9.8-38.1 17.1-67.5 21.5-14 2.1-25.7 6-35.2 10.7V151.4c19.1-11.1 32-31.7 32-55.4 0-35.3-28.7-64-64-64S96 60.7 96 96c0 23.7 12.9 44.3 32 55.4v209.2c-19.1 11.1-32 31.7-32 55.4 0 35.3 28.7 64 64 64s64-28.7 64-64c0-16.6-6.3-31.7-16.7-43.1 1.9-4.9 9.7-16.3 29.4-19.3 38.8-5.8 68.9-15.9 92.3-30.8 36-22.8 55-57 55-98.8v-8.6c19.1-11.1 32-31.7 32-55.4zM160 56c22.1 0 40 17.9 40 40s-17.9 40-40 40-40-17.9-40-40 17.9-40 40-40zm0 400c-22.1 0-40-17.9-40-40s17.9-40 40-40 40 17.9 40 40-17.9 40-40 40zm192-256c-22.1 0-40-17.9-40-40s17.9-40 40-40 40 17.9 40 40-17.9 40-40 40z"}))," https://github.com/tobspr/cordova-plugin-android-notch.git")),(0,a.kt)("h2",null,"Stuck on a Cordova issue?"),(0,a.kt)(i.Z,{className:"cordova-ee-card",header:"Don't waste precious time on plugin issues.",href:"https://ionicframework.com/sales?product_of_interest=Ionic%20Native",mdxType:"DocsCard"},(0,a.kt)("div",null,(0,a.kt)("img",{src:"/docs/icons/native-cordova-bot.png",class:"cordova-ee-img"}),(0,a.kt)("p",null,"If you're building a serious project, you can't afford to spend hours troubleshooting. Ionic\u2019s experts offer premium advisory services for both community plugins and premier plugins."),(0,a.kt)(l.Z,{className:"native-ee-detail",mdxType:"DocsButton"},"Contact Us Today!"))),(0,a.kt)("h2",{id:"installation"},(0,a.kt)("a",{href:"#installation"},"Installation")),(0,a.kt)(s.Z,{defaultValue:"Capacitor",groupId:"runtime",values:[{value:"Capacitor",label:"Capacitor"},{value:"Cordova",label:"Cordova"},{value:"Enterprise",label:"Enterprise"}],mdxType:"Tabs"},(0,a.kt)(c.Z,{value:"Capacitor",mdxType:"TabItem"},(0,a.kt)(d.Z,{className:"language-shell",mdxType:"CodeBlock"},"$ npm install cordova-plugin-android-notch ","\n","$ npm install @awesome-cordova-plugins/android-notch ","\n","$ ionic cap sync")),(0,a.kt)(c.Z,{value:"Cordova",mdxType:"TabItem"},(0,a.kt)(d.Z,{className:"language-shell",mdxType:"CodeBlock"},"$ ionic cordova plugin add cordova-plugin-android-notch ","\n","$ npm install @awesome-cordova-plugins/android-notch ","\n")),(0,a.kt)(c.Z,{value:"Enterprise",mdxType:"TabItem"},(0,a.kt)("blockquote",null,"Ionic Enterprise comes with fully supported and maintained plugins from the Ionic Team. \xa0",(0,a.kt)("a",{class:"btn",href:"https://ionic.io/docs/premier-plugins"},"Learn More")," or if you're interested in an enterprise version of this plugin ",(0,a.kt)("a",{class:"btn",href:"https://ionicframework.com/sales?product_of_interest=Ionic%20Enterprise%20Engine"},"Contact Us")))),(0,a.kt)("h2",{id:"supported-platforms"},"Supported Platforms"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Android")),(0,a.kt)("h2",{id:"usage"},"Usage"),(0,a.kt)("h3",{id:"react"},"React"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"/developer/docs/native/community#react"},"Learn more about using Ionic Native components in React")),(0,a.kt)("h3",{id:"angular"},"Angular"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"import { AndroidNotch } from '@awesome-cordova-plugins/android-notch/ngx';\n\n\nconstructor(private androidNotch: AndroidNotch) { }\n\n...\n\n\nthis.androidNotch.hasCutout()\n   .then((px: number) => console.log('Inset size: '), px)\n   .catch((error: any) => console.log('Error: ', error))\n\nthis.androidNotch.getInsetTop()\n   .then((px: number) => console.log('Inset size: '), px)\n   .catch((error: any) => console.log('Error: ', error))\n\nthis.androidNotch.getInsetRight()\n   .then((px: number) => console.log('Inset size: '), px)\n   .catch((error: any) => console.log('Error: ', error))\n\nthis.androidNotch.getInsetBottom()\n   .then((px: number) => console.log('Inset size: '), px)\n   .catch((error: any) => console.log('Error: ', error))\n\nthis.androidNotch.getInsetLeft()\n   .then((px: number) => console.log('Inset size: '), px)\n   .catch((error: any) => console.log('Error: ', error))\n\n")))}g.isMDXComponent=!0}}]);