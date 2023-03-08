"use strict";(self.webpackChunkionic_docs=self.webpackChunkionic_docs||[]).push([[70011],{58215:function(e,n,a){var t=a(67294);n.Z=function(e){var n=e.children,a=e.hidden,i=e.className;return t.createElement("div",{role:"tabpanel",hidden:a,className:i},n)}},26396:function(e,n,a){a.d(n,{Z:function(){return m}});var t=a(87462),i=a(67294),o=a(72389),r=a(79443);var s=function(){var e=(0,i.useContext)(r.Z);if(null==e)throw new Error('"useUserPreferencesContext" is used outside of "Layout" component.');return e},l=a(89521),c=a(86010),u="tabItem_1uMI";function d(e){var n,a,t,o=e.lazy,r=e.block,d=e.defaultValue,m=e.values,p=e.groupId,g=e.className,v=i.Children.map(e.children,(function(e){if((0,i.isValidElement)(e)&&void 0!==e.props.value)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),f=null!=m?m:v.map((function(e){var n=e.props;return{value:n.value,label:n.label}})),h=(0,l.lx)(f,(function(e,n){return e.value===n.value}));if(h.length>0)throw new Error('Docusaurus error: Duplicate values "'+h.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var b=null===d?d:null!=(n=null!=d?d:null==(a=v.find((function(e){return e.props.default})))?void 0:a.props.value)?n:null==(t=v[0])?void 0:t.props.value;if(null!==b&&!f.some((function(e){return e.value===b})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+b+'" but none of its children has the corresponding value. Available values are: '+f.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var k=s(),y=k.tabGroupChoices,N=k.setTabGroupChoices,C=(0,i.useState)(b),E=C[0],M=C[1],Z=[],w=(0,l.o5)().blockElementScrollPositionUntilNextRender;if(null!=p){var T=y[p];null!=T&&T!==E&&f.some((function(e){return e.value===T}))&&M(T)}var I=function(e){var n=e.currentTarget,a=Z.indexOf(n),t=f[a].value;t!==E&&(w(n),M(t),null!=p&&N(p,t))},x=function(e){var n,a=null;switch(e.key){case"ArrowRight":var t=Z.indexOf(e.currentTarget)+1;a=Z[t]||Z[0];break;case"ArrowLeft":var i=Z.indexOf(e.currentTarget)-1;a=Z[i]||Z[Z.length-1]}null==(n=a)||n.focus()};return i.createElement("div",{className:"tabs-container"},i.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,c.Z)("tabs",{"tabs--block":r},g)},f.map((function(e){var n=e.value,a=e.label;return i.createElement("li",{role:"tab",tabIndex:E===n?0:-1,"aria-selected":E===n,className:(0,c.Z)("tabs__item",u,{"tabs__item--active":E===n}),key:n,ref:function(e){return Z.push(e)},onKeyDown:x,onFocus:I,onClick:I},null!=a?a:n)}))),o?(0,i.cloneElement)(v.filter((function(e){return e.props.value===E}))[0],{className:"margin-vert--md"}):i.createElement("div",{className:"margin-vert--md"},v.map((function(e,n){return(0,i.cloneElement)(e,{key:n,hidden:e.props.value!==E})}))))}function m(e){var n=(0,o.Z)();return i.createElement(d,(0,t.Z)({key:String(n)},e))}},47758:function(e,n,a){a.d(n,{Z:function(){return l}});var t=a(67294),i=a(86010),o=a(39960),r=a(44996),s="card_3DNo";var l=function(e){var n,a=void 0===e.href,l=void 0!==e.href&&/^http/.test(e.href),c="undefined"===e.header?null:t.createElement("header",{className:"Card-header"},e.header),u=e.hoverIcon||e.icon,d=t.createElement(t.Fragment,null,e.img&&t.createElement("img",{src:(0,r.Z)(e.img),className:"Card-image"}),t.createElement("div",{className:"Card-container"},(e.icon||u)&&t.createElement("div",{className:"Card-icon-row"},e.icon&&t.createElement("img",{src:(0,r.Z)(e.icon),className:"Card-icon Card-icon-default"}),u&&t.createElement("img",{src:(0,r.Z)(u),className:"Card-icon Card-icon-hover"})),e.ionicon&&t.createElement("ion-icon",{name:e.ionicon,className:"Card-ionicon"}),e.iconset&&t.createElement("div",{className:"Card-iconset__container"},e.iconset.split(",").map((function(n,a){return t.createElement("img",{src:(0,r.Z)(n),className:"Card-icon "+(a===e.activeIndex?"Card-icon-active":""),"data-index":a,key:a})}))),e.header&&c,t.createElement("div",{className:"Card-content"},e.children))),m=(0,i.Z)(((n={"Card-with-image":void 0!==e.img,"Card-without-image":void 0===e.img,"Card-size-lg":"lg"===e.size})[e.className]=e.className,n));return a?t.createElement("docs-card",{class:m},t.createElement("div",{className:(0,i.Z)(s,"docs-card")},d)):l?t.createElement("docs-card",{class:m},t.createElement("a",{className:(0,i.Z)(s,"docs-card"),href:e.href,target:"_blank"},d)):t.createElement("docs-card",{class:m},t.createElement(o.default,{to:e.href,className:(0,i.Z)(s,"docs-card")},d))}},88694:function(e,n,a){a.d(n,{Z:function(){return u}});var t=a(87462),i=a(63366),o=a(86010),r=a(67294),s="docsButton_2gXP",l="docsButtonRound_2y-L",c=["href","round"];function u(e){var n,a=e.href,u=e.round,d=void 0!==u&&u,m=(0,i.Z)(e,c);return m.className=(0,o.Z)(((n={})[m.className]=Boolean(m.className),n[s]=!0,n["docs-button"]=!0,n[l]=d,n["docs-button--round"]=d,n)),a?r.createElement("a",(0,t.Z)({href:a,className:"docsButton"},m),m.children):r.createElement("button",(0,t.Z)({className:"docsButton"},m),m.children)}},16689:function(e,n,a){a.r(n),a.d(n,{frontMatter:function(){return m},contentTitle:function(){return p},metadata:function(){return g},toc:function(){return v},default:function(){return h}});var t=a(87462),i=a(63366),o=(a(67294),a(3905)),r=a(47758),s=a(88694),l=a(26396),c=a(58215),u=a(19055),d=["components"],m={title:"Mobile Messaging"},p=void 0,g={unversionedId:"native/mobile-messaging",id:"native/mobile-messaging",isDocsHomePage:!1,title:"Mobile Messaging",description:"Mobile Messaging SDK for Android and iOS Apps | Ionic",source:"@site/docs/native/mobile-messaging.md",sourceDirName:"native",slug:"/native/mobile-messaging",permalink:"/docs/native/mobile-messaging",editUrl:"https://github.com/ionic-team/ionic-native/edit/master/src/@awesome-cordova-plugins/plugins/mobile-messaging/index.ts",tags:[],version:"current",frontMatter:{title:"Mobile Messaging"},sidebar:"native",previous:{title:"MLKitTranslate",permalink:"/docs/native/mlkit-translate"},next:{title:"Multiple Documents Picker",permalink:"/docs/native/multiple-document-picker"}},v=[{value:"Supported Platforms",id:"supported-platforms",children:[],level:2},{value:"Usage",id:"usage",children:[{value:"React",id:"react",children:[],level:3},{value:"Angular",id:"angular",children:[],level:3}],level:2}],f={toc:v};function h(e){var n=e.components,a=(0,i.Z)(e,d);return(0,o.kt)("wrapper",(0,t.Z)({},f,a,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("head",null,(0,o.kt)("title",null,"Mobile Messaging SDK for Android and iOS Apps | Ionic"),(0,o.kt)("meta",{name:"description",content:"Mobile Messaging SDK is designed and developed to easily enable push notification channel in your mobile application. Read for more on use with Android and iOS."})),(0,o.kt)("p",null,"Mobile Messaging SDK is designed and developed to easily enable push notification channel in your mobile application.\nIn almost no time of implementation you get push notification in your application and access to the features of ",(0,o.kt)("a",{parentName:"p",href:"https://portal.infobip.com/push/"},"Infobip IP Messaging Platform"),".\nThis document describes library integration steps for your Cordova project."),(0,o.kt)("p",null,"For more info see ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/infobip/mobile-messaging-cordova-plugin"},"Cordova plugin docs")),(0,o.kt)("p",null,(0,o.kt)("a",{href:"https://github.com/infobip/mobile-messaging-cordova-plugin",target:"_blank",rel:"noopener",className:"git-link"},(0,o.kt)("svg",{viewBox:"0 0 512 512"},(0,o.kt)("path",{d:"M416 160c0-35.3-28.7-64-64-64s-64 28.7-64 64c0 23.7 12.9 44.3 32 55.4v8.6c0 19.9-7.8 33.7-25.3 44.9-15.4 9.8-38.1 17.1-67.5 21.5-14 2.1-25.7 6-35.2 10.7V151.4c19.1-11.1 32-31.7 32-55.4 0-35.3-28.7-64-64-64S96 60.7 96 96c0 23.7 12.9 44.3 32 55.4v209.2c-19.1 11.1-32 31.7-32 55.4 0 35.3 28.7 64 64 64s64-28.7 64-64c0-16.6-6.3-31.7-16.7-43.1 1.9-4.9 9.7-16.3 29.4-19.3 38.8-5.8 68.9-15.9 92.3-30.8 36-22.8 55-57 55-98.8v-8.6c19.1-11.1 32-31.7 32-55.4zM160 56c22.1 0 40 17.9 40 40s-17.9 40-40 40-40-17.9-40-40 17.9-40 40-40zm0 400c-22.1 0-40-17.9-40-40s17.9-40 40-40 40 17.9 40 40-17.9 40-40 40zm192-256c-22.1 0-40-17.9-40-40s17.9-40 40-40 40 17.9 40 40-17.9 40-40 40z"}))," https://github.com/infobip/mobile-messaging-cordova-plugin")),(0,o.kt)("h2",null,"Stuck on a Cordova issue?"),(0,o.kt)(r.Z,{className:"cordova-ee-card",header:"Don't waste precious time on plugin issues.",href:"https://ionicframework.com/sales?product_of_interest=Ionic%20Native",mdxType:"DocsCard"},(0,o.kt)("div",null,(0,o.kt)("img",{src:"/docs/icons/native-cordova-bot.png",class:"cordova-ee-img"}),(0,o.kt)("p",null,"If you're building a serious project, you can't afford to spend hours troubleshooting. Ionic\u2019s experts offer premium advisory services for both community plugins and premier plugins."),(0,o.kt)(s.Z,{className:"native-ee-detail",mdxType:"DocsButton"},"Contact Us Today!"))),(0,o.kt)("h2",{id:"installation"},(0,o.kt)("a",{href:"#installation"},"Installation")),(0,o.kt)(l.Z,{defaultValue:"Capacitor",groupId:"runtime",values:[{value:"Capacitor",label:"Capacitor"},{value:"Cordova",label:"Cordova"},{value:"Enterprise",label:"Enterprise"}],mdxType:"Tabs"},(0,o.kt)(c.Z,{value:"Capacitor",mdxType:"TabItem"},(0,o.kt)(u.Z,{className:"language-shell",mdxType:"CodeBlock"},"$ npm install com-infobip-plugins-mobilemessaging ","\n","$ npm install @awesome-cordova-plugins/mobile-messaging ","\n","$ ionic cap sync")),(0,o.kt)(c.Z,{value:"Cordova",mdxType:"TabItem"},(0,o.kt)(u.Z,{className:"language-shell",mdxType:"CodeBlock"},"$ ionic cordova plugin add com-infobip-plugins-mobilemessaging ","\n","$ npm install @awesome-cordova-plugins/mobile-messaging ","\n")),(0,o.kt)(c.Z,{value:"Enterprise",mdxType:"TabItem"},(0,o.kt)("blockquote",null,"Ionic Enterprise comes with fully supported and maintained plugins from the Ionic Team. \xa0",(0,o.kt)("a",{class:"btn",href:"https://ionic.io/docs/premier-plugins"},"Learn More")," or if you're interested in an enterprise version of this plugin ",(0,o.kt)("a",{class:"btn",href:"https://ionicframework.com/sales?product_of_interest=Ionic%20Enterprise%20Engine"},"Contact Us")))),(0,o.kt)("h2",{id:"supported-platforms"},"Supported Platforms"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Android"),(0,o.kt)("li",{parentName:"ul"},"iOS")),(0,o.kt)("h2",{id:"usage"},"Usage"),(0,o.kt)("h3",{id:"react"},"React"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"/docs/native/community#react"},"Learn more about using Ionic Native components in React")),(0,o.kt)("h3",{id:"angular"},"Angular"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},"import { MobileMessaging } from '@awesome-cordova-plugins/mobile-messaging/ngx';\n\n\nconstructor(private mobileMessaging: MobileMessaging) { }\n\n...\n\n\n this.mobileMessaging.init({\n   applicationCode: '&lt;your_application_code>',\n   geofencingEnabled: '&lt;true/false>',\n   defaultMessageStorage: '&lt;true/false>',\n   ios: {\n     notificationTypes: ['alert', 'badge', 'sound']\n   },\n   android: {\n     notificationIcon: &lt;String; a resource name for a status bar icon (without extension), located in '/platforms/android/app/src/main/res/mipmap'>,\n     multipleNotifications: &lt;Boolean; set to 'true' to enable multiple notifications>,\n     notificationAccentColor: &lt;String; set to hex color value in format '#RRGGBB' or '#AARRGGBB'>\n    }}, (err) => {\n     ...\n   });\n\n this.mobileMessaging.register('messageReceived').subscribe((message: Message) => {\n   ...\n });\n\n")))}h.isMDXComponent=!0}}]);