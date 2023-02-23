"use strict";(self.webpackChunkionic_docs=self.webpackChunkionic_docs||[]).push([[15400],{58215:function(e,n,a){var t=a(67294);n.Z=function(e){var n=e.children,a=e.hidden,r=e.className;return t.createElement("div",{role:"tabpanel",hidden:a,className:r},n)}},26396:function(e,n,a){a.d(n,{Z:function(){return p}});var t=a(87462),r=a(67294),o=a(72389),i=a(79443);var l=function(){var e=(0,r.useContext)(i.Z);if(null==e)throw new Error('"useUserPreferencesContext" is used outside of "Layout" component.');return e},s=a(89521),c=a(86010),u="tabItem_1uMI";function d(e){var n,a,t,o=e.lazy,i=e.block,d=e.defaultValue,p=e.values,m=e.groupId,v=e.className,f=r.Children.map(e.children,(function(e){if((0,r.isValidElement)(e)&&void 0!==e.props.value)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),h=null!=p?p:f.map((function(e){var n=e.props;return{value:n.value,label:n.label}})),g=(0,s.lx)(h,(function(e,n){return e.value===n.value}));if(g.length>0)throw new Error('Docusaurus error: Duplicate values "'+g.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var k=null===d?d:null!=(n=null!=d?d:null==(a=f.find((function(e){return e.props.default})))?void 0:a.props.value)?n:null==(t=f[0])?void 0:t.props.value;if(null!==k&&!h.some((function(e){return e.value===k})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+k+'" but none of its children has the corresponding value. Available values are: '+h.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var b=l(),w=b.tabGroupChoices,N=b.setTabGroupChoices,y=(0,r.useState)(k),C=y[0],E=y[1],I=[],Z=(0,s.o5)().blockElementScrollPositionUntilNextRender;if(null!=m){var T=w[m];null!=T&&T!==C&&h.some((function(e){return e.value===T}))&&E(T)}var x=function(e){var n=e.currentTarget,a=I.indexOf(n),t=h[a].value;t!==C&&(Z(n),E(t),null!=m&&N(m,t))},R=function(e){var n,a=null;switch(e.key){case"ArrowRight":var t=I.indexOf(e.currentTarget)+1;a=I[t]||I[0];break;case"ArrowLeft":var r=I.indexOf(e.currentTarget)-1;a=I[r]||I[I.length-1]}null==(n=a)||n.focus()};return r.createElement("div",{className:"tabs-container"},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,c.Z)("tabs",{"tabs--block":i},v)},h.map((function(e){var n=e.value,a=e.label;return r.createElement("li",{role:"tab",tabIndex:C===n?0:-1,"aria-selected":C===n,className:(0,c.Z)("tabs__item",u,{"tabs__item--active":C===n}),key:n,ref:function(e){return I.push(e)},onKeyDown:R,onFocus:x,onClick:x},null!=a?a:n)}))),o?(0,r.cloneElement)(f.filter((function(e){return e.props.value===C}))[0],{className:"margin-vert--md"}):r.createElement("div",{className:"margin-vert--md"},f.map((function(e,n){return(0,r.cloneElement)(e,{key:n,hidden:e.props.value!==C})}))))}function p(e){var n=(0,o.Z)();return r.createElement(d,(0,t.Z)({key:String(n)},e))}},47758:function(e,n,a){a.d(n,{Z:function(){return s}});var t=a(67294),r=a(86010),o=a(39960),i=a(44996),l="card_3DNo";var s=function(e){var n,a=void 0===e.href,s=void 0!==e.href&&/^http/.test(e.href),c="undefined"===e.header?null:t.createElement("header",{className:"Card-header"},e.header),u=e.hoverIcon||e.icon,d=t.createElement(t.Fragment,null,e.img&&t.createElement("img",{src:(0,i.Z)(e.img),className:"Card-image"}),t.createElement("div",{className:"Card-container"},(e.icon||u)&&t.createElement("div",{className:"Card-icon-row"},e.icon&&t.createElement("img",{src:(0,i.Z)(e.icon),className:"Card-icon Card-icon-default"}),u&&t.createElement("img",{src:(0,i.Z)(u),className:"Card-icon Card-icon-hover"})),e.ionicon&&t.createElement("ion-icon",{name:e.ionicon,className:"Card-ionicon"}),e.iconset&&t.createElement("div",{className:"Card-iconset__container"},e.iconset.split(",").map((function(n,a){return t.createElement("img",{src:(0,i.Z)(n),className:"Card-icon "+(a===e.activeIndex?"Card-icon-active":""),"data-index":a,key:a})}))),e.header&&c,t.createElement("div",{className:"Card-content"},e.children))),p=(0,r.Z)(((n={"Card-with-image":void 0!==e.img,"Card-without-image":void 0===e.img,"Card-size-lg":"lg"===e.size})[e.className]=e.className,n));return a?t.createElement("docs-card",{class:p},t.createElement("div",{className:(0,r.Z)(l,"docs-card")},d)):s?t.createElement("docs-card",{class:p},t.createElement("a",{className:(0,r.Z)(l,"docs-card"),href:e.href,target:"_blank"},d)):t.createElement("docs-card",{class:p},t.createElement(o.default,{to:e.href,className:(0,r.Z)(l,"docs-card")},d))}},88694:function(e,n,a){a.d(n,{Z:function(){return u}});var t=a(87462),r=a(63366),o=a(86010),i=a(67294),l="docsButton_2gXP",s="docsButtonRound_2y-L",c=["href","round"];function u(e){var n,a=e.href,u=e.round,d=void 0!==u&&u,p=(0,r.Z)(e,c);return p.className=(0,o.Z)(((n={})[p.className]=Boolean(p.className),n[l]=!0,n["docs-button"]=!0,n[s]=d,n["docs-button--round"]=d,n)),a?i.createElement("a",(0,t.Z)({href:a,className:"docsButton"},p),p.children):i.createElement("button",(0,t.Z)({className:"docsButton"},p),p.children)}},77027:function(e,n,a){a.r(n),a.d(n,{frontMatter:function(){return p},contentTitle:function(){return m},metadata:function(){return v},toc:function(){return f},default:function(){return g}});var t=a(87462),r=a(63366),o=(a(67294),a(3905)),i=a(47758),l=a(88694),s=a(26396),c=a(58215),u=a(19055),d=["components"],p={title:"In App Review"},m=void 0,v={unversionedId:"native/in-app-review",id:"native/in-app-review",isDocsHomePage:!1,title:"In App Review",description:"In App Review Plugin for iOS Devices | Ionic Framework Docs",source:"@site/docs/native/in-app-review.md",sourceDirName:"native",slug:"/native/in-app-review",permalink:"/developer/docs/native/in-app-review",editUrl:"https://github.com/ionic-team/ionic-native/edit/master/src/@awesome-cordova-plugins/plugins/in-app-review/index.ts",tags:[],version:"current",frontMatter:{title:"In App Review"},sidebar:"native",previous:{title:"In App Purchase 2",permalink:"/developer/docs/native/in-app-purchase-2"},next:{title:"Insomnia",permalink:"/developer/docs/native/insomnia"}},f=[{value:"Supported Platforms",id:"supported-platforms",children:[],level:2},{value:"Usage",id:"usage",children:[{value:"React",id:"react",children:[],level:3},{value:"Angular",id:"angular",children:[],level:3}],level:2}],h={toc:f};function g(e){var n=e.components,a=(0,r.Z)(e,d);return(0,o.kt)("wrapper",(0,t.Z)({},h,a,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("head",null,(0,o.kt)("title",null,"In App Review Plugin for iOS Devices | Ionic Framework Docs"),(0,o.kt)("meta",{name:"description",content:"The In App Review plugin uses the iOS class SKStore\u200bReview\u200bController to open the inApp review popup available since iOS 10.3. Read to learn more about usage."})),(0,o.kt)("p",null,"This plugin does use the iOS class SKStore\u200bReview\u200bController to open the inApp review popup available since iOS 10.3"),(0,o.kt)("p",null,"This functionality only works on iOS devices"),(0,o.kt)("p",null,(0,o.kt)("a",{href:"https://github.com/omaxlive/com.omarben.inappreview",target:"_blank",rel:"noopener",className:"git-link"},(0,o.kt)("svg",{viewBox:"0 0 512 512"},(0,o.kt)("path",{d:"M416 160c0-35.3-28.7-64-64-64s-64 28.7-64 64c0 23.7 12.9 44.3 32 55.4v8.6c0 19.9-7.8 33.7-25.3 44.9-15.4 9.8-38.1 17.1-67.5 21.5-14 2.1-25.7 6-35.2 10.7V151.4c19.1-11.1 32-31.7 32-55.4 0-35.3-28.7-64-64-64S96 60.7 96 96c0 23.7 12.9 44.3 32 55.4v209.2c-19.1 11.1-32 31.7-32 55.4 0 35.3 28.7 64 64 64s64-28.7 64-64c0-16.6-6.3-31.7-16.7-43.1 1.9-4.9 9.7-16.3 29.4-19.3 38.8-5.8 68.9-15.9 92.3-30.8 36-22.8 55-57 55-98.8v-8.6c19.1-11.1 32-31.7 32-55.4zM160 56c22.1 0 40 17.9 40 40s-17.9 40-40 40-40-17.9-40-40 17.9-40 40-40zm0 400c-22.1 0-40-17.9-40-40s17.9-40 40-40 40 17.9 40 40-17.9 40-40 40zm192-256c-22.1 0-40-17.9-40-40s17.9-40 40-40 40 17.9 40 40-17.9 40-40 40z"}))," https://github.com/omaxlive/com.omarben.inappreview")),(0,o.kt)("h2",null,"Stuck on a Cordova issue?"),(0,o.kt)(i.Z,{className:"cordova-ee-card",header:"Don't waste precious time on plugin issues.",href:"https://ionicframework.com/sales?product_of_interest=Ionic%20Native",mdxType:"DocsCard"},(0,o.kt)("div",null,(0,o.kt)("img",{src:"/docs/icons/native-cordova-bot.png",class:"cordova-ee-img"}),(0,o.kt)("p",null,"If you're building a serious project, you can't afford to spend hours troubleshooting. Ionic\u2019s experts offer premium advisory services for both community plugins and premier plugins."),(0,o.kt)(l.Z,{className:"native-ee-detail",mdxType:"DocsButton"},"Contact Us Today!"))),(0,o.kt)("h2",{id:"installation"},(0,o.kt)("a",{href:"#installation"},"Installation")),(0,o.kt)(s.Z,{defaultValue:"Capacitor",groupId:"runtime",values:[{value:"Capacitor",label:"Capacitor"},{value:"Cordova",label:"Cordova"},{value:"Enterprise",label:"Enterprise"}],mdxType:"Tabs"},(0,o.kt)(c.Z,{value:"Capacitor",mdxType:"TabItem"},(0,o.kt)(u.Z,{className:"language-shell",mdxType:"CodeBlock"},"$ npm install com.omarben.inappreview ","\n","$ npm install @awesome-cordova-plugins/in-app-review ","\n","$ ionic cap sync")),(0,o.kt)(c.Z,{value:"Cordova",mdxType:"TabItem"},(0,o.kt)(u.Z,{className:"language-shell",mdxType:"CodeBlock"},"$ ionic cordova plugin add com.omarben.inappreview ","\n","$ npm install @awesome-cordova-plugins/in-app-review ","\n")),(0,o.kt)(c.Z,{value:"Enterprise",mdxType:"TabItem"},(0,o.kt)("blockquote",null,"Ionic Enterprise comes with fully supported and maintained plugins from the Ionic Team. \xa0",(0,o.kt)("a",{class:"btn",href:"https://ionic.io/docs/premier-plugins"},"Learn More")," or if you're interested in an enterprise version of this plugin ",(0,o.kt)("a",{class:"btn",href:"https://ionicframework.com/sales?product_of_interest=Ionic%20Enterprise%20Engine"},"Contact Us")))),(0,o.kt)("h2",{id:"supported-platforms"},"Supported Platforms"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"iOS")),(0,o.kt)("h2",{id:"usage"},"Usage"),(0,o.kt)("h3",{id:"react"},"React"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"/developer/docs/native/community#react"},"Learn more about using Ionic Native components in React")),(0,o.kt)("h3",{id:"angular"},"Angular"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},"import { InAppReview } from '@awesome-cordova-plugins/in-app-review/ngx';\n\n\nconstructor(private inAppReview: InAppReview) { }\n\n...\n\n\nthis.inAppReview.requestReview()\n  .then((res: any) => console.log(res))\n  .catch((error: any) => console.error(error));\n\n")))}g.isMDXComponent=!0}}]);