"use strict";(self.webpackChunkionic_docs=self.webpackChunkionic_docs||[]).push([[97069],{58215:function(e,t,a){var n=a(67294);t.Z=function(e){var t=e.children,a=e.hidden,r=e.className;return n.createElement("div",{role:"tabpanel",hidden:a,className:r},t)}},26396:function(e,t,a){a.d(t,{Z:function(){return p}});var n=a(87462),r=a(67294),o=a(72389),i=a(79443);var l=function(){var e=(0,r.useContext)(i.Z);if(null==e)throw new Error('"useUserPreferencesContext" is used outside of "Layout" component.');return e},s=a(89521),u=a(86010),c="tabItem_1uMI";function d(e){var t,a,n,o=e.lazy,i=e.block,d=e.defaultValue,p=e.values,m=e.groupId,h=e.className,v=r.Children.map(e.children,(function(e){if((0,r.isValidElement)(e)&&void 0!==e.props.value)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),f=null!=p?p:v.map((function(e){var t=e.props;return{value:t.value,label:t.label}})),k=(0,s.lx)(f,(function(e,t){return e.value===t.value}));if(k.length>0)throw new Error('Docusaurus error: Duplicate values "'+k.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var g=null===d?d:null!=(t=null!=d?d:null==(a=v.find((function(e){return e.props.default})))?void 0:a.props.value)?t:null==(n=v[0])?void 0:n.props.value;if(null!==g&&!f.some((function(e){return e.value===g})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+g+'" but none of its children has the corresponding value. Available values are: '+f.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var b=l(),N=b.tabGroupChoices,y=b.setTabGroupChoices,C=(0,r.useState)(g),w=C[0],E=C[1],Z=[],I=(0,s.o5)().blockElementScrollPositionUntilNextRender;if(null!=m){var T=N[m];null!=T&&T!==w&&f.some((function(e){return e.value===T}))&&E(T)}var P=function(e){var t=e.currentTarget,a=Z.indexOf(t),n=f[a].value;n!==w&&(I(t),E(n),null!=m&&y(m,n))},x=function(e){var t,a=null;switch(e.key){case"ArrowRight":var n=Z.indexOf(e.currentTarget)+1;a=Z[n]||Z[0];break;case"ArrowLeft":var r=Z.indexOf(e.currentTarget)-1;a=Z[r]||Z[Z.length-1]}null==(t=a)||t.focus()};return r.createElement("div",{className:"tabs-container"},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,u.Z)("tabs",{"tabs--block":i},h)},f.map((function(e){var t=e.value,a=e.label;return r.createElement("li",{role:"tab",tabIndex:w===t?0:-1,"aria-selected":w===t,className:(0,u.Z)("tabs__item",c,{"tabs__item--active":w===t}),key:t,ref:function(e){return Z.push(e)},onKeyDown:x,onFocus:P,onClick:P},null!=a?a:t)}))),o?(0,r.cloneElement)(v.filter((function(e){return e.props.value===w}))[0],{className:"margin-vert--md"}):r.createElement("div",{className:"margin-vert--md"},v.map((function(e,t){return(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==w})}))))}function p(e){var t=(0,o.Z)();return r.createElement(d,(0,n.Z)({key:String(t)},e))}},47758:function(e,t,a){a.d(t,{Z:function(){return s}});var n=a(67294),r=a(86010),o=a(39960),i=a(44996),l="card_3DNo";var s=function(e){var t,a=void 0===e.href,s=void 0!==e.href&&/^http/.test(e.href),u="undefined"===e.header?null:n.createElement("header",{className:"Card-header"},e.header),c=e.hoverIcon||e.icon,d=n.createElement(n.Fragment,null,e.img&&n.createElement("img",{src:(0,i.Z)(e.img),className:"Card-image"}),n.createElement("div",{className:"Card-container"},(e.icon||c)&&n.createElement("div",{className:"Card-icon-row"},e.icon&&n.createElement("img",{src:(0,i.Z)(e.icon),className:"Card-icon Card-icon-default"}),c&&n.createElement("img",{src:(0,i.Z)(c),className:"Card-icon Card-icon-hover"})),e.ionicon&&n.createElement("ion-icon",{name:e.ionicon,className:"Card-ionicon"}),e.iconset&&n.createElement("div",{className:"Card-iconset__container"},e.iconset.split(",").map((function(t,a){return n.createElement("img",{src:(0,i.Z)(t),className:"Card-icon "+(a===e.activeIndex?"Card-icon-active":""),"data-index":a,key:a})}))),e.header&&u,n.createElement("div",{className:"Card-content"},e.children))),p=(0,r.Z)(((t={"Card-with-image":void 0!==e.img,"Card-without-image":void 0===e.img,"Card-size-lg":"lg"===e.size})[e.className]=e.className,t));return a?n.createElement("docs-card",{class:p},n.createElement("div",{className:(0,r.Z)(l,"docs-card")},d)):s?n.createElement("docs-card",{class:p},n.createElement("a",{className:(0,r.Z)(l,"docs-card"),href:e.href,target:"_blank"},d)):n.createElement("docs-card",{class:p},n.createElement(o.default,{to:e.href,className:(0,r.Z)(l,"docs-card")},d))}},88694:function(e,t,a){a.d(t,{Z:function(){return c}});var n=a(87462),r=a(63366),o=a(86010),i=a(67294),l="docsButton_2gXP",s="docsButtonRound_2y-L",u=["href","round"];function c(e){var t,a=e.href,c=e.round,d=void 0!==c&&c,p=(0,r.Z)(e,u);return p.className=(0,o.Z)(((t={})[p.className]=Boolean(p.className),t[l]=!0,t["docs-button"]=!0,t[s]=d,t["docs-button--round"]=d,t)),a?i.createElement("a",(0,n.Z)({href:a,className:"docsButton"},p),p.children):i.createElement("button",(0,n.Z)({className:"docsButton"},p),p.children)}},23995:function(e,t,a){a.r(t),a.d(t,{frontMatter:function(){return p},contentTitle:function(){return m},metadata:function(){return h},toc:function(){return v},default:function(){return k}});var n=a(87462),r=a(63366),o=(a(67294),a(3905)),i=a(47758),l=a(88694),s=a(26396),u=a(58215),c=a(19055),d=["components"],p={title:"Purchases"},m=void 0,h={unversionedId:"native/purchases",id:"native/purchases",isDocsHomePage:!1,title:"Purchases",description:"Purchases Plugin: A Solution to Manage In-App Subscriptions",source:"@site/docs/native/purchases.md",sourceDirName:"native",slug:"/native/purchases",permalink:"/docs/native/purchases",editUrl:"https://github.com/ionic-team/ionic-native/edit/master/src/@awesome-cordova-plugins/plugins/purchases/index.ts",tags:[],version:"current",frontMatter:{title:"Purchases"},sidebar:"native",previous:{title:"PSPDFKit-Cordova",permalink:"/docs/native/pspdfkit-cordova"},next:{title:"Push",permalink:"/docs/native/push"}},v=[{value:"Features",id:"features",children:[],level:2},{value:"Getting Started",id:"getting-started",children:[],level:2},{value:"Supported Platforms",id:"supported-platforms",children:[],level:2},{value:"Usage",id:"usage",children:[{value:"React",id:"react",children:[],level:3},{value:"Angular",id:"angular",children:[{value:"1. Get a RevenueCat API key",id:"1-get-a-revenuecat-api-key",children:[],level:4},{value:"2. Initialize the SDK",id:"2-initialize-the-sdk",children:[],level:4},{value:"3. Quickstart",id:"3-quickstart",children:[],level:4}],level:3},{value:"Requirements",id:"requirements",children:[],level:3}],level:2}],f={toc:v};function k(e){var t=e.components,a=(0,r.Z)(e,d);return(0,o.kt)("wrapper",(0,n.Z)({},f,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("head",null,(0,o.kt)("title",null,"Purchases Plugin: A Solution to Manage In-App Subscriptions"),(0,o.kt)("meta",{name:"description",content:"The purchases plugin is a cross-platform solution for managing in-app subscriptions\u2014a backend is also provided via RevenueCat. Read to learn more."})),(0,o.kt)("p",null,"Purchases is a cross platform solution for managing in-app subscriptions. A backend is also provided via ",(0,o.kt)("a",{parentName:"p",href:"https://www.revenuecat.com"},"RevenueCat")),(0,o.kt)("h2",{id:"features"},"Features"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null}),(0,o.kt)("th",{parentName:"tr",align:null},"RevenueCat"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"\u2705"),(0,o.kt)("td",{parentName:"tr",align:null},"Server-side receipt validation")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"\u27a1\ufe0f"),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("a",{parentName:"td",href:"https://docs.revenuecat.com/docs/webhooks"},"Webhooks")," - enhanced server-to-server communication with events for purchases, renewals, cancellations, and more")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"\ud83c\udfaf"),(0,o.kt)("td",{parentName:"tr",align:null},"Subscription status tracking - know whether a user is subscribed whether they're on iOS, Android or web")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"\ud83d\udcca"),(0,o.kt)("td",{parentName:"tr",align:null},"Analytics - automatic calculation of metrics like conversion, mrr, and churn")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"\ud83d\udcdd"),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("a",{parentName:"td",href:"https://docs.revenuecat.com/docs"},"Online documentation")," up to date")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"\ud83d\udd00"),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("a",{parentName:"td",href:"https://www.revenuecat.com/integrations"},"Integrations")," - over a dozen integrations to easily send purchase data where you need it")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"\ud83d\udcaf"),(0,o.kt)("td",{parentName:"tr",align:null},"Well maintained - ",(0,o.kt)("a",{parentName:"td",href:"https://github.com/RevenueCat/cordova-plugin-purchases/releases"},"frequent releases"))),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"\ud83d\udcee"),(0,o.kt)("td",{parentName:"tr",align:null},"Great support - ",(0,o.kt)("a",{parentName:"td",href:"https://revenuecat.zendesk.com"},"Help Center"))),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"\ud83e\udd29"),(0,o.kt)("td",{parentName:"tr",align:null},"Awesome ",(0,o.kt)("a",{parentName:"td",href:"https://trello.com/b/RZRnWRbI/revenuecat-product-roadmap"},"new features"))))),(0,o.kt)("h2",{id:"getting-started"},"Getting Started"),(0,o.kt)("p",null,"For more detailed information, you can view our complete documentation at ",(0,o.kt)("a",{parentName:"p",href:"https://docs.revenuecat.com/docs"},"docs.revenuecat.com"),"."),(0,o.kt)("p",null,(0,o.kt)("a",{href:"https://github.com/RevenueCat/cordova-plugin-purchases",target:"_blank",rel:"noopener",className:"git-link"},(0,o.kt)("svg",{viewBox:"0 0 512 512"},(0,o.kt)("path",{d:"M416 160c0-35.3-28.7-64-64-64s-64 28.7-64 64c0 23.7 12.9 44.3 32 55.4v8.6c0 19.9-7.8 33.7-25.3 44.9-15.4 9.8-38.1 17.1-67.5 21.5-14 2.1-25.7 6-35.2 10.7V151.4c19.1-11.1 32-31.7 32-55.4 0-35.3-28.7-64-64-64S96 60.7 96 96c0 23.7 12.9 44.3 32 55.4v209.2c-19.1 11.1-32 31.7-32 55.4 0 35.3 28.7 64 64 64s64-28.7 64-64c0-16.6-6.3-31.7-16.7-43.1 1.9-4.9 9.7-16.3 29.4-19.3 38.8-5.8 68.9-15.9 92.3-30.8 36-22.8 55-57 55-98.8v-8.6c19.1-11.1 32-31.7 32-55.4zM160 56c22.1 0 40 17.9 40 40s-17.9 40-40 40-40-17.9-40-40 17.9-40 40-40zm0 400c-22.1 0-40-17.9-40-40s17.9-40 40-40 40 17.9 40 40-17.9 40-40 40zm192-256c-22.1 0-40-17.9-40-40s17.9-40 40-40 40 17.9 40 40-17.9 40-40 40z"}))," https://github.com/RevenueCat/cordova-plugin-purchases")),(0,o.kt)("h2",null,"Stuck on a Cordova issue?"),(0,o.kt)(i.Z,{className:"cordova-ee-card",header:"Don't waste precious time on plugin issues.",href:"https://ionicframework.com/sales?product_of_interest=Ionic%20Native",mdxType:"DocsCard"},(0,o.kt)("div",null,(0,o.kt)("img",{src:"/docs/icons/native-cordova-bot.png",class:"cordova-ee-img"}),(0,o.kt)("p",null,"If you're building a serious project, you can't afford to spend hours troubleshooting. Ionic\u2019s experts offer premium advisory services for both community plugins and premier plugins."),(0,o.kt)(l.Z,{className:"native-ee-detail",mdxType:"DocsButton"},"Contact Us Today!"))),(0,o.kt)("h2",{id:"installation"},(0,o.kt)("a",{href:"#installation"},"Installation")),(0,o.kt)(s.Z,{defaultValue:"Capacitor",groupId:"runtime",values:[{value:"Capacitor",label:"Capacitor"},{value:"Cordova",label:"Cordova"},{value:"Enterprise",label:"Enterprise"}],mdxType:"Tabs"},(0,o.kt)(u.Z,{value:"Capacitor",mdxType:"TabItem"},(0,o.kt)(c.Z,{className:"language-shell",mdxType:"CodeBlock"},"$ npm install cordova-plugin-purchases@2.3.0 ","\n","$ npm install @awesome-cordova-plugins/purchases ","\n","$ ionic cap sync")),(0,o.kt)(u.Z,{value:"Cordova",mdxType:"TabItem"},(0,o.kt)(c.Z,{className:"language-shell",mdxType:"CodeBlock"},"$ ionic cordova plugin add cordova-plugin-purchases@2.3.0 ","\n","$ npm install @awesome-cordova-plugins/purchases ","\n")),(0,o.kt)(u.Z,{value:"Enterprise",mdxType:"TabItem"},(0,o.kt)("blockquote",null,"Ionic Enterprise comes with fully supported and maintained plugins from the Ionic Team. \xa0",(0,o.kt)("a",{class:"btn",href:"https://ionic.io/docs/premier-plugins"},"Learn More")," or if you're interested in an enterprise version of this plugin ",(0,o.kt)("a",{class:"btn",href:"https://ionicframework.com/sales?product_of_interest=Ionic%20Enterprise%20Engine"},"Contact Us")))),(0,o.kt)("h2",{id:"supported-platforms"},"Supported Platforms"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Android"),(0,o.kt)("li",{parentName:"ul"},"iOS")),(0,o.kt)("h2",{id:"usage"},"Usage"),(0,o.kt)("h3",{id:"react"},"React"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"/docs/native/community#react"},"Learn more about using Ionic Native components in React")),(0,o.kt)("h3",{id:"angular"},"Angular"),(0,o.kt)("h4",{id:"1-get-a-revenuecat-api-key"},"1. Get a RevenueCat API key"),(0,o.kt)("p",null,"Log in to the ",(0,o.kt)("a",{parentName:"p",href:"https://app.revenuecat.com"},"RevenueCat dashboard")," and obtain a free API key for your application."),(0,o.kt)("h4",{id:"2-initialize-the-sdk"},"2. Initialize the SDK"),(0,o.kt)("p",null,"You should only configure ",(0,o.kt)("em",{parentName:"p"},"Purchases")," once (usually on app launch) as soon as your app has a unique user id for your user. This can be when a user logs in if you have accounts or on launch if you can generate a random user identifier."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},' import { Platform } from "@ionic/angular";\n import { Purchases } from "@awesome-cordova-plugins/purchases/ngx";\n\n constructor(public platform: Platform, private purchases: Purchases) {\n     platform.ready().then(() => {\n         this.purchases.setDebugLogsEnabled(true); // Enable to get debug logs\n         this.purchases.setup("my_api_key", "my_app_user_id");\n     }\n }\n')),(0,o.kt)("h4",{id:"3-quickstart"},"3. Quickstart"),(0,o.kt)("p",null,"Please follow the ",(0,o.kt)("a",{parentName:"p",href:"https://docs.revenuecat.com/docs/"},"Quickstart Guide")," for more information on how to use the SDK"),(0,o.kt)("h3",{id:"requirements"},"Requirements"),(0,o.kt)("p",null,"Requires XCode 11.0+ and minimum target iOS 9.0+\nThis plugin has been tested with cordova-plugin-purchases@"))}k.isMDXComponent=!0}}]);