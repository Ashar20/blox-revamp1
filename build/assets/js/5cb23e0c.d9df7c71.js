"use strict";(self.webpackChunkionic_docs=self.webpackChunkionic_docs||[]).push([[32667],{58215:function(e,a,n){var t=n(67294);a.Z=function(e){var a=e.children,n=e.hidden,r=e.className;return t.createElement("div",{role:"tabpanel",hidden:n,className:r},a)}},26396:function(e,a,n){n.d(a,{Z:function(){return m}});var t=n(87462),r=n(67294),i=n(72389),o=n(79443);var l=function(){var e=(0,r.useContext)(o.Z);if(null==e)throw new Error('"useUserPreferencesContext" is used outside of "Layout" component.');return e},s=n(89521),c=n(86010),u="tabItem_1uMI";function d(e){var a,n,t,i=e.lazy,o=e.block,d=e.defaultValue,m=e.values,p=e.groupId,h=e.className,v=r.Children.map(e.children,(function(e){if((0,r.isValidElement)(e)&&void 0!==e.props.value)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),g=null!=m?m:v.map((function(e){var a=e.props;return{value:a.value,label:a.label}})),f=(0,s.lx)(g,(function(e,a){return e.value===a.value}));if(f.length>0)throw new Error('Docusaurus error: Duplicate values "'+f.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var k=null===d?d:null!=(a=null!=d?d:null==(n=v.find((function(e){return e.props.default})))?void 0:n.props.value)?a:null==(t=v[0])?void 0:t.props.value;if(null!==k&&!g.some((function(e){return e.value===k})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+k+'" but none of its children has the corresponding value. Available values are: '+g.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var b=l(),S=b.tabGroupChoices,E=b.setTabGroupChoices,N=(0,r.useState)(k),C=N[0],y=N[1],w=[],x=(0,s.o5)().blockElementScrollPositionUntilNextRender;if(null!=p){var Z=S[p];null!=Z&&Z!==C&&g.some((function(e){return e.value===Z}))&&y(Z)}var I=function(e){var a=e.currentTarget,n=w.indexOf(a),t=g[n].value;t!==C&&(x(a),y(t),null!=p&&E(p,t))},T=function(e){var a,n=null;switch(e.key){case"ArrowRight":var t=w.indexOf(e.currentTarget)+1;n=w[t]||w[0];break;case"ArrowLeft":var r=w.indexOf(e.currentTarget)-1;n=w[r]||w[w.length-1]}null==(a=n)||a.focus()};return r.createElement("div",{className:"tabs-container"},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,c.Z)("tabs",{"tabs--block":o},h)},g.map((function(e){var a=e.value,n=e.label;return r.createElement("li",{role:"tab",tabIndex:C===a?0:-1,"aria-selected":C===a,className:(0,c.Z)("tabs__item",u,{"tabs__item--active":C===a}),key:a,ref:function(e){return w.push(e)},onKeyDown:T,onFocus:I,onClick:I},null!=n?n:a)}))),i?(0,r.cloneElement)(v.filter((function(e){return e.props.value===C}))[0],{className:"margin-vert--md"}):r.createElement("div",{className:"margin-vert--md"},v.map((function(e,a){return(0,r.cloneElement)(e,{key:a,hidden:e.props.value!==C})}))))}function m(e){var a=(0,i.Z)();return r.createElement(d,(0,t.Z)({key:String(a)},e))}},47758:function(e,a,n){n.d(a,{Z:function(){return s}});var t=n(67294),r=n(86010),i=n(39960),o=n(44996),l="card_3DNo";var s=function(e){var a,n=void 0===e.href,s=void 0!==e.href&&/^http/.test(e.href),c="undefined"===e.header?null:t.createElement("header",{className:"Card-header"},e.header),u=e.hoverIcon||e.icon,d=t.createElement(t.Fragment,null,e.img&&t.createElement("img",{src:(0,o.Z)(e.img),className:"Card-image"}),t.createElement("div",{className:"Card-container"},(e.icon||u)&&t.createElement("div",{className:"Card-icon-row"},e.icon&&t.createElement("img",{src:(0,o.Z)(e.icon),className:"Card-icon Card-icon-default"}),u&&t.createElement("img",{src:(0,o.Z)(u),className:"Card-icon Card-icon-hover"})),e.ionicon&&t.createElement("ion-icon",{name:e.ionicon,className:"Card-ionicon"}),e.iconset&&t.createElement("div",{className:"Card-iconset__container"},e.iconset.split(",").map((function(a,n){return t.createElement("img",{src:(0,o.Z)(a),className:"Card-icon "+(n===e.activeIndex?"Card-icon-active":""),"data-index":n,key:n})}))),e.header&&c,t.createElement("div",{className:"Card-content"},e.children))),m=(0,r.Z)(((a={"Card-with-image":void 0!==e.img,"Card-without-image":void 0===e.img,"Card-size-lg":"lg"===e.size})[e.className]=e.className,a));return n?t.createElement("docs-card",{class:m},t.createElement("div",{className:(0,r.Z)(l,"docs-card")},d)):s?t.createElement("docs-card",{class:m},t.createElement("a",{className:(0,r.Z)(l,"docs-card"),href:e.href,target:"_blank"},d)):t.createElement("docs-card",{class:m},t.createElement(i.default,{to:e.href,className:(0,r.Z)(l,"docs-card")},d))}},88694:function(e,a,n){n.d(a,{Z:function(){return u}});var t=n(87462),r=n(63366),i=n(86010),o=n(67294),l="docsButton_2gXP",s="docsButtonRound_2y-L",c=["href","round"];function u(e){var a,n=e.href,u=e.round,d=void 0!==u&&u,m=(0,r.Z)(e,c);return m.className=(0,i.Z)(((a={})[m.className]=Boolean(m.className),a[l]=!0,a["docs-button"]=!0,a[s]=d,a["docs-button--round"]=d,a)),n?o.createElement("a",(0,t.Z)({href:n,className:"docsButton"},m),m.children):o.createElement("button",(0,t.Z)({className:"docsButton"},m),m.children)}},71742:function(e,a,n){n.r(a),n.d(a,{frontMatter:function(){return m},contentTitle:function(){return p},metadata:function(){return h},toc:function(){return v},default:function(){return f}});var t=n(87462),r=n(63366),i=(n(67294),n(3905)),o=n(47758),l=n(88694),s=n(26396),c=n(58215),u=n(19055),d=["components"],m={title:"Social Sharing | Cordova Social Sharing Plugin for Ionic Apps",description:"Social sharing for Ionic apps allows you to share text, files, images, and links via social networks, SMS, and email\u2014read to learn about this Cordova Plugin.",sidebar_label:"Social Sharing"},p="Social Sharing",h={unversionedId:"native/social-sharing",id:"version-v5/native/social-sharing",isDocsHomePage:!1,title:"Social Sharing | Cordova Social Sharing Plugin for Ionic Apps",description:"Social sharing for Ionic apps allows you to share text, files, images, and links via social networks, SMS, and email\u2014read to learn about this Cordova Plugin.",source:"@site/versioned_docs/version-v5/native/social-sharing.md",sourceDirName:"native",slug:"/native/social-sharing",permalink:"/docs/v5/native/social-sharing",editUrl:"https://github.com/ionic-team/ionic-native/edit/master/src/@awesome-cordova-plugins/plugins/social-sharing/index.ts",tags:[],version:"v5",frontMatter:{title:"Social Sharing | Cordova Social Sharing Plugin for Ionic Apps",description:"Social sharing for Ionic apps allows you to share text, files, images, and links via social networks, SMS, and email\u2014read to learn about this Cordova Plugin.",sidebar_label:"Social Sharing"},sidebar:"version-v5/native",previous:{title:"SMS",permalink:"/docs/v5/native/sms"},next:{title:"Speech Recognition",permalink:"/docs/v5/native/speech-recognition"}},v=[{value:"Supported Platforms",id:"supported-platforms",children:[],level:2},{value:"Usage",id:"usage",children:[{value:"React",id:"react",children:[],level:3},{value:"Angular",id:"angular",children:[],level:3}],level:2}],g={toc:v};function f(e){var a=e.components,n=(0,r.Z)(e,d);return(0,i.kt)("wrapper",(0,t.Z)({},g,n,{components:a,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"social-sharing"},"Social Sharing"),(0,i.kt)("p",null,"Share text, files, images, and links via social networks, sms, and email."),(0,i.kt)("p",null,"For Browser usage check out the Web Share API docs: ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/EddyVerbruggen/SocialSharing-PhoneGap-Plugin#5-web-share-api"},"https://github.com/EddyVerbruggen/SocialSharing-PhoneGap-Plugin#5-web-share-api")),(0,i.kt)("p",null,(0,i.kt)("a",{href:"https://github.com/EddyVerbruggen/SocialSharing-PhoneGap-Plugin",target:"_blank",rel:"noopener",className:"git-link"},(0,i.kt)("svg",{viewBox:"0 0 512 512"},(0,i.kt)("path",{d:"M416 160c0-35.3-28.7-64-64-64s-64 28.7-64 64c0 23.7 12.9 44.3 32 55.4v8.6c0 19.9-7.8 33.7-25.3 44.9-15.4 9.8-38.1 17.1-67.5 21.5-14 2.1-25.7 6-35.2 10.7V151.4c19.1-11.1 32-31.7 32-55.4 0-35.3-28.7-64-64-64S96 60.7 96 96c0 23.7 12.9 44.3 32 55.4v209.2c-19.1 11.1-32 31.7-32 55.4 0 35.3 28.7 64 64 64s64-28.7 64-64c0-16.6-6.3-31.7-16.7-43.1 1.9-4.9 9.7-16.3 29.4-19.3 38.8-5.8 68.9-15.9 92.3-30.8 36-22.8 55-57 55-98.8v-8.6c19.1-11.1 32-31.7 32-55.4zM160 56c22.1 0 40 17.9 40 40s-17.9 40-40 40-40-17.9-40-40 17.9-40 40-40zm0 400c-22.1 0-40-17.9-40-40s17.9-40 40-40 40 17.9 40 40-17.9 40-40 40zm192-256c-22.1 0-40-17.9-40-40s17.9-40 40-40 40 17.9 40 40-17.9 40-40 40z"}))," ","https://github.com/EddyVerbruggen/SocialSharing-PhoneGap-Plugin")),(0,i.kt)("h2",null,"Stuck on a Cordova issue?"),(0,i.kt)(o.Z,{className:"cordova-ee-card",header:"Don't waste precious time on plugin issues.",href:"https://ionicframework.com/sales?product_of_interest=Ionic%20Native",mdxType:"DocsCard"},(0,i.kt)("div",null,(0,i.kt)("img",{src:"/docs/icons/native-cordova-bot.png",class:"cordova-ee-img"}),(0,i.kt)("p",null,"If you're building a serious project, you can't afford to spend hours troubleshooting. Ionic\u2019s experts offer premium advisory services for both community plugins and premier plugins."),(0,i.kt)(l.Z,{className:"native-ee-detail",mdxType:"DocsButton"},"Contact Us Today!"))),(0,i.kt)("h2",{id:"installation"},(0,i.kt)("a",{href:"#installation"},"Installation")),(0,i.kt)(s.Z,{groupId:"runtime",defaultValue:"Capacitor",values:[{value:"Capacitor",label:"Capacitor"},{value:"Cordova",label:"Cordova"},{value:"Enterprise",label:"Enterprise"}],mdxType:"Tabs"},(0,i.kt)(c.Z,{value:"Capacitor",mdxType:"TabItem"},(0,i.kt)(u.Z,{className:"language-shell",mdxType:"CodeBlock"},"$ npm install cordova-plugin-x-socialsharing ","\n","$ npm install @awesome-cordova-plugins/social-sharing ","\n","$ ionic cap sync")),(0,i.kt)(c.Z,{value:"Cordova",mdxType:"TabItem"},(0,i.kt)(u.Z,{className:"language-shell",mdxType:"CodeBlock"},"$ ionic cordova plugin add cordova-plugin-x-socialsharing ","\n","$ npm install @awesome-cordova-plugins/social-sharing ","\n")),(0,i.kt)(c.Z,{value:"Enterprise",mdxType:"TabItem"},(0,i.kt)("blockquote",null,"Ionic Enterprise comes with fully supported and maintained plugins from the Ionic Team. \xa0",(0,i.kt)("a",{class:"btn",href:"https://ionic.io/docs/premier-plugins"},"Learn More")," or if you're interested in an enterprise version of this plugin ",(0,i.kt)("a",{class:"btn",href:"https://ionicframework.com/sales?product_of_interest=Ionic%20Enterprise%20Engine"},"Contact Us")))),(0,i.kt)("h2",{id:"supported-platforms"},"Supported Platforms"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Android"),(0,i.kt)("li",{parentName:"ul"},"Browser"),(0,i.kt)("li",{parentName:"ul"},"iOS"),(0,i.kt)("li",{parentName:"ul"},"Windows"),(0,i.kt)("li",{parentName:"ul"},"Windows Phone")),(0,i.kt)("h2",{id:"usage"},"Usage"),(0,i.kt)("h3",{id:"react"},"React"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"/docs/v5/native/community#react"},"Learn more about using Ionic Native components in React")),(0,i.kt)("h3",{id:"angular"},"Angular"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-tsx"},"import { SocialSharing } from '@awesome-cordova-plugins/social-sharing/ngx';\n\nconstructor(private socialSharing: SocialSharing) { }\n\n...\n\n// Check if sharing via email is supported\nthis.socialSharing.canShareViaEmail().then(() => {\n  // Sharing via email is possible\n}).catch(() => {\n  // Sharing via email is not possible\n});\n\n// Share via email\nthis.socialSharing.shareViaEmail('Body', 'Subject', ['recipient@example.org']).then(() => {\n  // Success!\n}).catch(() => {\n  // Error!\n});\n")))}f.isMDXComponent=!0}}]);