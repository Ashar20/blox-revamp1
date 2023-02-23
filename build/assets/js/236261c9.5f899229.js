"use strict";(self.webpackChunkionic_docs=self.webpackChunkionic_docs||[]).push([[98798],{58215:function(e,a,n){var t=n(67294);a.Z=function(e){var a=e.children,n=e.hidden,r=e.className;return t.createElement("div",{role:"tabpanel",hidden:n,className:r},a)}},26396:function(e,a,n){n.d(a,{Z:function(){return m}});var t=n(87462),r=n(67294),o=n(72389),i=n(79443);var s=function(){var e=(0,r.useContext)(i.Z);if(null==e)throw new Error('"useUserPreferencesContext" is used outside of "Layout" component.');return e},l=n(89521),c=n(86010),u="tabItem_1uMI";function d(e){var a,n,t,o=e.lazy,i=e.block,d=e.defaultValue,m=e.values,p=e.groupId,v=e.className,f=r.Children.map(e.children,(function(e){if((0,r.isValidElement)(e)&&void 0!==e.props.value)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),h=null!=m?m:f.map((function(e){var a=e.props;return{value:a.value,label:a.label}})),b=(0,l.lx)(h,(function(e,a){return e.value===a.value}));if(b.length>0)throw new Error('Docusaurus error: Duplicate values "'+b.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var g=null===d?d:null!=(a=null!=d?d:null==(n=f.find((function(e){return e.props.default})))?void 0:n.props.value)?a:null==(t=f[0])?void 0:t.props.value;if(null!==g&&!h.some((function(e){return e.value===g})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+g+'" but none of its children has the corresponding value. Available values are: '+h.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var k=s(),N=k.tabGroupChoices,C=k.setTabGroupChoices,E=(0,r.useState)(g),y=E[0],x=E[1],T=[],Z=(0,l.o5)().blockElementScrollPositionUntilNextRender;if(null!=p){var w=N[p];null!=w&&w!==y&&h.some((function(e){return e.value===w}))&&x(w)}var I=function(e){var a=e.currentTarget,n=T.indexOf(a),t=h[n].value;t!==y&&(Z(a),x(t),null!=p&&C(p,t))},F=function(e){var a,n=null;switch(e.key){case"ArrowRight":var t=T.indexOf(e.currentTarget)+1;n=T[t]||T[0];break;case"ArrowLeft":var r=T.indexOf(e.currentTarget)-1;n=T[r]||T[T.length-1]}null==(a=n)||a.focus()};return r.createElement("div",{className:"tabs-container"},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,c.Z)("tabs",{"tabs--block":i},v)},h.map((function(e){var a=e.value,n=e.label;return r.createElement("li",{role:"tab",tabIndex:y===a?0:-1,"aria-selected":y===a,className:(0,c.Z)("tabs__item",u,{"tabs__item--active":y===a}),key:a,ref:function(e){return T.push(e)},onKeyDown:F,onFocus:I,onClick:I},null!=n?n:a)}))),o?(0,r.cloneElement)(f.filter((function(e){return e.props.value===y}))[0],{className:"margin-vert--md"}):r.createElement("div",{className:"margin-vert--md"},f.map((function(e,a){return(0,r.cloneElement)(e,{key:a,hidden:e.props.value!==y})}))))}function m(e){var a=(0,o.Z)();return r.createElement(d,(0,t.Z)({key:String(a)},e))}},47758:function(e,a,n){n.d(a,{Z:function(){return l}});var t=n(67294),r=n(86010),o=n(39960),i=n(44996),s="card_3DNo";var l=function(e){var a,n=void 0===e.href,l=void 0!==e.href&&/^http/.test(e.href),c="undefined"===e.header?null:t.createElement("header",{className:"Card-header"},e.header),u=e.hoverIcon||e.icon,d=t.createElement(t.Fragment,null,e.img&&t.createElement("img",{src:(0,i.Z)(e.img),className:"Card-image"}),t.createElement("div",{className:"Card-container"},(e.icon||u)&&t.createElement("div",{className:"Card-icon-row"},e.icon&&t.createElement("img",{src:(0,i.Z)(e.icon),className:"Card-icon Card-icon-default"}),u&&t.createElement("img",{src:(0,i.Z)(u),className:"Card-icon Card-icon-hover"})),e.ionicon&&t.createElement("ion-icon",{name:e.ionicon,className:"Card-ionicon"}),e.iconset&&t.createElement("div",{className:"Card-iconset__container"},e.iconset.split(",").map((function(a,n){return t.createElement("img",{src:(0,i.Z)(a),className:"Card-icon "+(n===e.activeIndex?"Card-icon-active":""),"data-index":n,key:n})}))),e.header&&c,t.createElement("div",{className:"Card-content"},e.children))),m=(0,r.Z)(((a={"Card-with-image":void 0!==e.img,"Card-without-image":void 0===e.img,"Card-size-lg":"lg"===e.size})[e.className]=e.className,a));return n?t.createElement("docs-card",{class:m},t.createElement("div",{className:(0,r.Z)(s,"docs-card")},d)):l?t.createElement("docs-card",{class:m},t.createElement("a",{className:(0,r.Z)(s,"docs-card"),href:e.href,target:"_blank"},d)):t.createElement("docs-card",{class:m},t.createElement(o.default,{to:e.href,className:(0,r.Z)(s,"docs-card")},d))}},88694:function(e,a,n){n.d(a,{Z:function(){return u}});var t=n(87462),r=n(63366),o=n(86010),i=n(67294),s="docsButton_2gXP",l="docsButtonRound_2y-L",c=["href","round"];function u(e){var a,n=e.href,u=e.round,d=void 0!==u&&u,m=(0,r.Z)(e,c);return m.className=(0,o.Z)(((a={})[m.className]=Boolean(m.className),a[s]=!0,a["docs-button"]=!0,a[l]=d,a["docs-button--round"]=d,a)),n?i.createElement("a",(0,t.Z)({href:n,className:"docsButton"},m),m.children):i.createElement("button",(0,t.Z)({className:"docsButton"},m),m.children)}},98376:function(e,a,n){n.r(a),n.d(a,{frontMatter:function(){return m},contentTitle:function(){return p},metadata:function(){return v},toc:function(){return f},default:function(){return b}});var t=n(87462),r=n(63366),o=(n(67294),n(3905)),i=n(47758),s=n(88694),l=n(26396),c=n(58215),u=n(19055),d=["components"],m={title:"Firebase X"},p=void 0,v={unversionedId:"native/firebase-x",id:"native/firebase-x",isDocsHomePage:!1,title:"Firebase X",description:"Firebase X | Cordova Firebase X Ionic Native App Plugin",source:"@site/docs/native/firebase-x.md",sourceDirName:"native",slug:"/native/firebase-x",permalink:"/developer/docs/native/firebase-x",editUrl:"https://github.com/ionic-team/ionic-native/edit/master/src/@awesome-cordova-plugins/plugins/firebase-x/index.ts",tags:[],version:"current",frontMatter:{title:"Firebase X"},sidebar:"native",previous:{title:"Firebase Vision",permalink:"/developer/docs/native/firebase-vision"},next:{title:"Firebase",permalink:"/developer/docs/native/firebase"}},f=[{value:"Supported Platforms",id:"supported-platforms",children:[],level:2},{value:"Usage",id:"usage",children:[{value:"React",id:"react",children:[],level:3},{value:"Angular",id:"angular",children:[],level:3}],level:2}],h={toc:f};function b(e){var a=e.components,n=(0,r.Z)(e,d);return(0,o.kt)("wrapper",(0,t.Z)({},h,n,{components:a,mdxType:"MDXLayout"}),(0,o.kt)("head",null,(0,o.kt)("title",null,"Firebase X | Cordova Firebase X Ionic Native App Plugin"),(0,o.kt)("meta",{name:"description",content:"The Firebase X plugin brings push notifications, analytics, event tracking, and more from Google Firebase to your Cordova project on Ionic Framework apps!"})),(0,o.kt)("p",null,"This plugin brings push notifications, analytics, event tracking, crash reporting and more from Google Firebase to your Cordova project! Android and iOS supported.\nIt is a maintained fork from unmaintained ionic-navite plugin called Firebase."),(0,o.kt)("p",null,(0,o.kt)("a",{href:"https://github.com/dpa99c/cordova-plugin-firebasex",target:"_blank",rel:"noopener",className:"git-link"},(0,o.kt)("svg",{viewBox:"0 0 512 512"},(0,o.kt)("path",{d:"M416 160c0-35.3-28.7-64-64-64s-64 28.7-64 64c0 23.7 12.9 44.3 32 55.4v8.6c0 19.9-7.8 33.7-25.3 44.9-15.4 9.8-38.1 17.1-67.5 21.5-14 2.1-25.7 6-35.2 10.7V151.4c19.1-11.1 32-31.7 32-55.4 0-35.3-28.7-64-64-64S96 60.7 96 96c0 23.7 12.9 44.3 32 55.4v209.2c-19.1 11.1-32 31.7-32 55.4 0 35.3 28.7 64 64 64s64-28.7 64-64c0-16.6-6.3-31.7-16.7-43.1 1.9-4.9 9.7-16.3 29.4-19.3 38.8-5.8 68.9-15.9 92.3-30.8 36-22.8 55-57 55-98.8v-8.6c19.1-11.1 32-31.7 32-55.4zM160 56c22.1 0 40 17.9 40 40s-17.9 40-40 40-40-17.9-40-40 17.9-40 40-40zm0 400c-22.1 0-40-17.9-40-40s17.9-40 40-40 40 17.9 40 40-17.9 40-40 40zm192-256c-22.1 0-40-17.9-40-40s17.9-40 40-40 40 17.9 40 40-17.9 40-40 40z"}))," https://github.com/dpa99c/cordova-plugin-firebasex")),(0,o.kt)("h2",null,"Stuck on a Cordova issue?"),(0,o.kt)(i.Z,{className:"cordova-ee-card",header:"Don't waste precious time on plugin issues.",href:"https://ionicframework.com/sales?product_of_interest=Ionic%20Native",mdxType:"DocsCard"},(0,o.kt)("div",null,(0,o.kt)("img",{src:"/docs/icons/native-cordova-bot.png",class:"cordova-ee-img"}),(0,o.kt)("p",null,"If you're building a serious project, you can't afford to spend hours troubleshooting. Ionic\u2019s experts offer premium advisory services for both community plugins and premier plugins."),(0,o.kt)(s.Z,{className:"native-ee-detail",mdxType:"DocsButton"},"Contact Us Today!"))),(0,o.kt)("h2",{id:"installation"},(0,o.kt)("a",{href:"#installation"},"Installation")),(0,o.kt)(l.Z,{defaultValue:"Capacitor",groupId:"runtime",values:[{value:"Capacitor",label:"Capacitor"},{value:"Cordova",label:"Cordova"},{value:"Enterprise",label:"Enterprise"}],mdxType:"Tabs"},(0,o.kt)(c.Z,{value:"Capacitor",mdxType:"TabItem"},(0,o.kt)(u.Z,{className:"language-shell",mdxType:"CodeBlock"},"$ npm install cordova-plugin-firebasex ","\n","$ npm install @awesome-cordova-plugins/firebase-x ","\n","$ ionic cap sync")),(0,o.kt)(c.Z,{value:"Cordova",mdxType:"TabItem"},(0,o.kt)(u.Z,{className:"language-shell",mdxType:"CodeBlock"},"$ ionic cordova plugin add cordova-plugin-firebasex ","\n","$ npm install @awesome-cordova-plugins/firebase-x ","\n")),(0,o.kt)(c.Z,{value:"Enterprise",mdxType:"TabItem"},(0,o.kt)("blockquote",null,"Ionic Enterprise comes with fully supported and maintained plugins from the Ionic Team. \xa0",(0,o.kt)("a",{class:"btn",href:"https://ionic.io/docs/premier-plugins"},"Learn More")," or if you're interested in an enterprise version of this plugin ",(0,o.kt)("a",{class:"btn",href:"https://ionicframework.com/sales?product_of_interest=Ionic%20Enterprise%20Engine"},"Contact Us")))),(0,o.kt)("h2",{id:"supported-platforms"},"Supported Platforms"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Android"),(0,o.kt)("li",{parentName:"ul"},"iOS")),(0,o.kt)("h2",{id:"usage"},"Usage"),(0,o.kt)("h3",{id:"react"},"React"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"/developer/docs/native/community#react"},"Learn more about using Ionic Native components in React")),(0,o.kt)("h3",{id:"angular"},"Angular"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},"import { FirebaseX } from '@awesome-cordova-plugins/firebase-x/ngx';\n\n\nconstructor(private firebaseX: FirebaseX) { }\n\n...\n\n\nthis.firebaseX.getToken()\n  .then(token => console.log(`The token is ${token}`)) // save the token server-side and use it to push notifications to this device\n  .catch(error => console.error('Error getting token', error));\n\nthis.firebaseX.onMessageReceived()\n  .subscribe(data => console.log(`User opened a notification ${data}`));\n\nthis.firebaseX.onTokenRefresh()\n  .subscribe((token: string) => console.log(`Got a new token ${token}`));\n")))}b.isMDXComponent=!0}}]);