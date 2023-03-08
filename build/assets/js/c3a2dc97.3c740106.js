"use strict";(self.webpackChunkionic_docs=self.webpackChunkionic_docs||[]).push([[70223],{58215:function(e,a,t){var o=t(67294);a.Z=function(e){var a=e.children,t=e.hidden,n=e.className;return o.createElement("div",{role:"tabpanel",hidden:t,className:n},a)}},26396:function(e,a,t){t.d(a,{Z:function(){return d}});var o=t(87462),n=t(67294),i=t(72389),r=t(79443);var c=function(){var e=(0,n.useContext)(r.Z);if(null==e)throw new Error('"useUserPreferencesContext" is used outside of "Layout" component.');return e},l=t(89521),s=t(86010),p="tabItem_1uMI";function u(e){var a,t,o,i=e.lazy,r=e.block,u=e.defaultValue,d=e.values,m=e.groupId,h=e.className,f=n.Children.map(e.children,(function(e){if((0,n.isValidElement)(e)&&void 0!==e.props.value)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),v=null!=d?d:f.map((function(e){var a=e.props;return{value:a.value,label:a.label}})),k=(0,l.lx)(v,(function(e,a){return e.value===a.value}));if(k.length>0)throw new Error('Docusaurus error: Duplicate values "'+k.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var b=null===u?u:null!=(a=null!=u?u:null==(t=f.find((function(e){return e.props.default})))?void 0:t.props.value)?a:null==(o=f[0])?void 0:o.props.value;if(null!==b&&!v.some((function(e){return e.value===b})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+b+'" but none of its children has the corresponding value. Available values are: '+v.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var g=c(),C=g.tabGroupChoices,F=g.setTabGroupChoices,E=(0,n.useState)(b),N=E[0],y=E[1],I=[],w=(0,l.o5)().blockElementScrollPositionUntilNextRender;if(null!=m){var R=C[m];null!=R&&R!==N&&v.some((function(e){return e.value===R}))&&y(R)}var Z=function(e){var a=e.currentTarget,t=I.indexOf(a),o=v[t].value;o!==N&&(w(a),y(o),null!=m&&F(m,o))},A=function(e){var a,t=null;switch(e.key){case"ArrowRight":var o=I.indexOf(e.currentTarget)+1;t=I[o]||I[0];break;case"ArrowLeft":var n=I.indexOf(e.currentTarget)-1;t=I[n]||I[I.length-1]}null==(a=t)||a.focus()};return n.createElement("div",{className:"tabs-container"},n.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,s.Z)("tabs",{"tabs--block":r},h)},v.map((function(e){var a=e.value,t=e.label;return n.createElement("li",{role:"tab",tabIndex:N===a?0:-1,"aria-selected":N===a,className:(0,s.Z)("tabs__item",p,{"tabs__item--active":N===a}),key:a,ref:function(e){return I.push(e)},onKeyDown:A,onFocus:Z,onClick:Z},null!=t?t:a)}))),i?(0,n.cloneElement)(f.filter((function(e){return e.props.value===N}))[0],{className:"margin-vert--md"}):n.createElement("div",{className:"margin-vert--md"},f.map((function(e,a){return(0,n.cloneElement)(e,{key:a,hidden:e.props.value!==N})}))))}function d(e){var a=(0,i.Z)();return n.createElement(u,(0,o.Z)({key:String(a)},e))}},47758:function(e,a,t){t.d(a,{Z:function(){return l}});var o=t(67294),n=t(86010),i=t(39960),r=t(44996),c="card_3DNo";var l=function(e){var a,t=void 0===e.href,l=void 0!==e.href&&/^http/.test(e.href),s="undefined"===e.header?null:o.createElement("header",{className:"Card-header"},e.header),p=e.hoverIcon||e.icon,u=o.createElement(o.Fragment,null,e.img&&o.createElement("img",{src:(0,r.Z)(e.img),className:"Card-image"}),o.createElement("div",{className:"Card-container"},(e.icon||p)&&o.createElement("div",{className:"Card-icon-row"},e.icon&&o.createElement("img",{src:(0,r.Z)(e.icon),className:"Card-icon Card-icon-default"}),p&&o.createElement("img",{src:(0,r.Z)(p),className:"Card-icon Card-icon-hover"})),e.ionicon&&o.createElement("ion-icon",{name:e.ionicon,className:"Card-ionicon"}),e.iconset&&o.createElement("div",{className:"Card-iconset__container"},e.iconset.split(",").map((function(a,t){return o.createElement("img",{src:(0,r.Z)(a),className:"Card-icon "+(t===e.activeIndex?"Card-icon-active":""),"data-index":t,key:t})}))),e.header&&s,o.createElement("div",{className:"Card-content"},e.children))),d=(0,n.Z)(((a={"Card-with-image":void 0!==e.img,"Card-without-image":void 0===e.img,"Card-size-lg":"lg"===e.size})[e.className]=e.className,a));return t?o.createElement("docs-card",{class:d},o.createElement("div",{className:(0,n.Z)(c,"docs-card")},u)):l?o.createElement("docs-card",{class:d},o.createElement("a",{className:(0,n.Z)(c,"docs-card"),href:e.href,target:"_blank"},u)):o.createElement("docs-card",{class:d},o.createElement(i.default,{to:e.href,className:(0,n.Z)(c,"docs-card")},u))}},88694:function(e,a,t){t.d(a,{Z:function(){return p}});var o=t(87462),n=t(63366),i=t(86010),r=t(67294),c="docsButton_2gXP",l="docsButtonRound_2y-L",s=["href","round"];function p(e){var a,t=e.href,p=e.round,u=void 0!==p&&p,d=(0,n.Z)(e,s);return d.className=(0,i.Z)(((a={})[d.className]=Boolean(d.className),a[c]=!0,a["docs-button"]=!0,a[l]=u,a["docs-button--round"]=u,a)),t?r.createElement("a",(0,o.Z)({href:t,className:"docsButton"},d),d.children):r.createElement("button",(0,o.Z)({className:"docsButton"},d),d.children)}},51829:function(e,a,t){t.r(a),t.d(a,{frontMatter:function(){return d},contentTitle:function(){return m},metadata:function(){return h},toc:function(){return f},default:function(){return k}});var o=t(87462),n=t(63366),i=(t(67294),t(3905)),r=t(47758),c=t(88694),l=t(26396),s=t(58215),p=t(19055),u=["components"],d={title:"Facebook Connect Plugin | Facebook Docs in Ionic Documentation",description:"Ionic Documentation's Facebook Docs explain how to use the Facebook Connect Cordova Plugin to obtain access to the native FB application on iOS and Android.",sidebar_label:"Facebook"},m="Facebook",h={unversionedId:"native/facebook",id:"version-v5/native/facebook",isDocsHomePage:!1,title:"Facebook Connect Plugin | Facebook Docs in Ionic Documentation",description:"Ionic Documentation's Facebook Docs explain how to use the Facebook Connect Cordova Plugin to obtain access to the native FB application on iOS and Android.",source:"@site/versioned_docs/version-v5/native/facebook.md",sourceDirName:"native",slug:"/native/facebook",permalink:"/docs/v5/native/facebook",editUrl:"https://github.com/ionic-team/ionic-native/edit/master/src/@awesome-cordova-plugins/plugins/facebook/index.ts",tags:[],version:"v5",frontMatter:{title:"Facebook Connect Plugin | Facebook Docs in Ionic Documentation",description:"Ionic Documentation's Facebook Docs explain how to use the Facebook Connect Cordova Plugin to obtain access to the native FB application on iOS and Android.",sidebar_label:"Facebook"},sidebar:"version-v5/native",previous:{title:"Answers",permalink:"/docs/v5/native/fabric"},next:{title:"FCM",permalink:"/docs/v5/native/fcm"}},f=[{value:"Installation",id:"installation",children:[],level:4},{value:"iOS Install",id:"ios-install",children:[],level:4},{value:"Android Install",id:"android-install",children:[],level:4},{value:"Events",id:"events",children:[],level:2},{value:"Supported Platforms",id:"supported-platforms",children:[],level:2},{value:"Usage",id:"usage",children:[{value:"React",id:"react",children:[],level:3},{value:"Angular",id:"angular",children:[],level:3}],level:2}],v={toc:f};function k(e){var a=e.components,d=(0,n.Z)(e,u);return(0,i.kt)("wrapper",(0,o.Z)({},v,d,{components:a,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"facebook"},"Facebook"),(0,i.kt)("p",null,"Use the Facebook Connect plugin to obtain access to the native FB application on iOS and Android."),(0,i.kt)("p",null,"Requires Cordova plugin: ",(0,i.kt)("inlineCode",{parentName:"p"},"cordova-plugin-facebook-connect"),". For more info, please see the ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/cordova-plugin-facebook-connect/cordova-plugin-facebook-connect"},"Facebook Connect"),"."),(0,i.kt)("h4",{id:"installation"},"Installation"),(0,i.kt)("p",null,"To use the FB plugin, you first have to create a new Facebook App inside of the Facebook developer portal at ",(0,i.kt)("a",{parentName:"p",href:"https://developers.facebook.com/apps"},"https://developers.facebook.com/apps"),"."),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://developers.facebook.com/apps/"},(0,i.kt)("img",{alt:"fb-getstarted-1",src:t(55602).Z}))),(0,i.kt)("p",null,"Retrieve the ",(0,i.kt)("inlineCode",{parentName:"p"},"App ID")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"App Name"),"."),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://developers.facebook.com/apps/"},(0,i.kt)("img",{alt:"fb-getstarted-2",src:t(54642).Z}))),(0,i.kt)("p",null,"Then type in the following command in your Terminal, where APP_ID and APP_NAME are the values from the Facebook Developer portal."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},' ionic cordova plugin add cordova-plugin-facebook-connect --variable APP_ID="123456789" --variable APP_NAME="myApplication"\n')),(0,i.kt)("p",null,"After, you'll need to add the native platforms you'll be using to your app in the Facebook Developer portal under your app's Settings:"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://developers.facebook.com/apps/"},(0,i.kt)("img",{alt:"fb-getstarted-3",src:t(92920).Z}))),(0,i.kt)("p",null,"Click ",(0,i.kt)("inlineCode",{parentName:"p"},"'Add Platform'"),"."),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://developers.facebook.com/apps/"},(0,i.kt)("img",{alt:"fb-getstarted-4",src:t(91837).Z}))),(0,i.kt)("p",null,"At this point you'll need to open your project's ",(0,i.kt)("a",{parentName:"p",href:"https://cordova.apache.org/docs/en/latest/config_ref/index.html"},(0,i.kt)("inlineCode",{parentName:"a"},"config.xml"))," file, found in the root directory of your project."),(0,i.kt)("p",null,"Take note of the ",(0,i.kt)("inlineCode",{parentName:"p"},"id")," for the next step:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},'<widget id="com.mycompany.testapp" version="0.0.1" xmlns="http://www.w3.org/ns/widgets" xmlns:cdv="http://cordova.apache.org/ns/1.0">\n')),(0,i.kt)("p",null,"You can also edit the ",(0,i.kt)("inlineCode",{parentName:"p"},"id")," to whatever you'd like it to be."),(0,i.kt)("h4",{id:"ios-install"},"iOS Install"),(0,i.kt)("p",null,"Under 'Bundle ID', add the ",(0,i.kt)("inlineCode",{parentName:"p"},"id")," from your ",(0,i.kt)("inlineCode",{parentName:"p"},"config.xml")," file:"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://developers.facebook.com/apps/"},(0,i.kt)("img",{alt:"fb-getstarted-5",src:t(28101).Z}))),(0,i.kt)("h4",{id:"android-install"},"Android Install"),(0,i.kt)("p",null,"Under 'Google Play Package Name', add the ",(0,i.kt)("inlineCode",{parentName:"p"},"id")," from your ",(0,i.kt)("inlineCode",{parentName:"p"},"config.xml")," file:"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://developers.facebook.com/apps/"},(0,i.kt)("img",{alt:"fb-getstarted-6",src:t(48046).Z}))),(0,i.kt)("p",null,"And that's it! You can now make calls to Facebook using the plugin."),(0,i.kt)("h2",{id:"events"},"Events"),(0,i.kt)("p",null,"App events allow you to understand the makeup of users engaging with your app, measure the performance of your Facebook mobile app ads, and reach specific sets of your users with Facebook mobile app ads."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"[iOS][https://developers.facebook.com/docs/ios/app-events]","(",(0,i.kt)("a",{parentName:"li",href:"https://developers.facebook.com/docs/ios/app-events"},"https://developers.facebook.com/docs/ios/app-events"),")"),(0,i.kt)("li",{parentName:"ul"},"[Android][https://developers.facebook.com/docs/android/app-events]","(",(0,i.kt)("a",{parentName:"li",href:"https://developers.facebook.com/docs/android/app-events"},"https://developers.facebook.com/docs/android/app-events"),")"),(0,i.kt)("li",{parentName:"ul"},"[JS]"," Does not have an Events API, so the plugin functions are empty and will return an automatic success")),(0,i.kt)("p",null,"Activation events are automatically tracked for you in the plugin."),(0,i.kt)("p",null,"Events are listed on the ",(0,i.kt)("a",{parentName:"p",href:"https://www.facebook.com/insights/"},"insights page"),"."),(0,i.kt)("p",null,"For tracking events, see ",(0,i.kt)("inlineCode",{parentName:"p"},"logEvent")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"logPurchase"),"."),(0,i.kt)("p",null,(0,i.kt)("a",{href:"https://github.com/cordova-plugin-facebook-connect/cordova-plugin-facebook-connect",target:"_blank",rel:"noopener",className:"git-link"},(0,i.kt)("svg",{viewBox:"0 0 512 512"},(0,i.kt)("path",{d:"M416 160c0-35.3-28.7-64-64-64s-64 28.7-64 64c0 23.7 12.9 44.3 32 55.4v8.6c0 19.9-7.8 33.7-25.3 44.9-15.4 9.8-38.1 17.1-67.5 21.5-14 2.1-25.7 6-35.2 10.7V151.4c19.1-11.1 32-31.7 32-55.4 0-35.3-28.7-64-64-64S96 60.7 96 96c0 23.7 12.9 44.3 32 55.4v209.2c-19.1 11.1-32 31.7-32 55.4 0 35.3 28.7 64 64 64s64-28.7 64-64c0-16.6-6.3-31.7-16.7-43.1 1.9-4.9 9.7-16.3 29.4-19.3 38.8-5.8 68.9-15.9 92.3-30.8 36-22.8 55-57 55-98.8v-8.6c19.1-11.1 32-31.7 32-55.4zM160 56c22.1 0 40 17.9 40 40s-17.9 40-40 40-40-17.9-40-40 17.9-40 40-40zm0 400c-22.1 0-40-17.9-40-40s17.9-40 40-40 40 17.9 40 40-17.9 40-40 40zm192-256c-22.1 0-40-17.9-40-40s17.9-40 40-40 40 17.9 40 40-17.9 40-40 40z"}))," ","https://github.com/cordova-plugin-facebook-connect/cordova-plugin-facebook-connect")),(0,i.kt)("h2",null,"Stuck on a Cordova issue?"),(0,i.kt)(r.Z,{className:"cordova-ee-card",header:"Don't waste precious time on plugin issues.",href:"https://ionicframework.com/sales?product_of_interest=Ionic%20Native",mdxType:"DocsCard"},(0,i.kt)("div",null,(0,i.kt)("img",{src:"/docs/icons/native-cordova-bot.png",class:"cordova-ee-img"}),(0,i.kt)("p",null,"If you're building a serious project, you can't afford to spend hours troubleshooting. Ionic\u2019s experts offer premium advisory services for both community plugins and premier plugins."),(0,i.kt)(c.Z,{className:"native-ee-detail",mdxType:"DocsButton"},"Contact Us Today!"))),(0,i.kt)("h2",{id:"installation"},(0,i.kt)("a",{href:"#installation"},"Installation")),(0,i.kt)(l.Z,{groupId:"runtime",defaultValue:"Capacitor",values:[{value:"Capacitor",label:"Capacitor"},{value:"Cordova",label:"Cordova"},{value:"Enterprise",label:"Enterprise"}],mdxType:"Tabs"},(0,i.kt)(s.Z,{value:"Capacitor",mdxType:"TabItem"},(0,i.kt)(p.Z,{className:"language-shell",mdxType:"CodeBlock"},"$ npm install cordova-plugin-facebook-connect ","\n","$ npm install @awesome-cordova-plugins/facebook ","\n","$ ionic cap sync")),(0,i.kt)(s.Z,{value:"Cordova",mdxType:"TabItem"},(0,i.kt)(p.Z,{className:"language-shell",mdxType:"CodeBlock"},"$ ionic cordova plugin add cordova-plugin-facebook-connect ","\n","$ npm install @awesome-cordova-plugins/facebook ","\n")),(0,i.kt)(s.Z,{value:"Enterprise",mdxType:"TabItem"},(0,i.kt)("blockquote",null,"Ionic Enterprise comes with fully supported and maintained plugins from the Ionic Team. \xa0",(0,i.kt)("a",{class:"btn",href:"https://ionic.io/docs/premier-plugins"},"Learn More")," or if you're interested in an enterprise version of this plugin ",(0,i.kt)("a",{class:"btn",href:"https://ionicframework.com/sales?product_of_interest=Ionic%20Enterprise%20Engine"},"Contact Us")))),(0,i.kt)("h2",{id:"supported-platforms"},"Supported Platforms"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Android"),(0,i.kt)("li",{parentName:"ul"},"iOS"),(0,i.kt)("li",{parentName:"ul"},"Browser")),(0,i.kt)("h2",{id:"usage"},"Usage"),(0,i.kt)("h3",{id:"react"},"React"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"/docs/v5/native/community#react"},"Learn more about using Ionic Native components in React")),(0,i.kt)("h3",{id:"angular"},"Angular"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-tsx"},"import { Facebook, FacebookLoginResponse } from '@awesome-cordova-plugins/facebook/ngx';\n\nconstructor(private fb: Facebook) { }\n\n...\n\nthis.fb.login(['public_profile', 'user_friends', 'email'])\n  .then((res: FacebookLoginResponse) => console.log('Logged into Facebook!', res))\n  .catch(e => console.log('Error logging into Facebook', e));\n\n\nthis.fb.logEvent(this.fb.EVENTS.EVENT_NAME_ADDED_TO_CART);\n\n")))}k.isMDXComponent=!0},55602:function(e,a){a.Z="data:image/png;base64,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"},54642:function(e,a,t){a.Z=t.p+"assets/images/2-31595bd7deb656b16d6d6ed603cdb2b6.png"},92920:function(e,a){a.Z="data:image/png;base64,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"},91837:function(e,a,t){a.Z=t.p+"assets/images/4-56c1c3f95ca0871c7d8214a01ec14bc5.png"},28101:function(e,a,t){a.Z=t.p+"assets/images/5-28d54a591b992b7b8897c378035f51e5.png"},48046:function(e,a,t){a.Z=t.p+"assets/images/6-79935da4c256eeb799d84a186aad5e81.png"}}]);