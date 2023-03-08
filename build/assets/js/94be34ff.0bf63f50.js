"use strict";(self.webpackChunkionic_docs=self.webpackChunkionic_docs||[]).push([[210],{58215:function(e,a,n){var t=n(67294);a.Z=function(e){var a=e.children,n=e.hidden,o=e.className;return t.createElement("div",{role:"tabpanel",hidden:n,className:o},a)}},26396:function(e,a,n){n.d(a,{Z:function(){return d}});var t=n(87462),o=n(67294),r=n(72389),i=n(79443);var l=function(){var e=(0,o.useContext)(i.Z);if(null==e)throw new Error('"useUserPreferencesContext" is used outside of "Layout" component.');return e},s=n(89521),c=n(86010),u="tabItem_1uMI";function m(e){var a,n,t,r=e.lazy,i=e.block,m=e.defaultValue,d=e.values,p=e.groupId,v=e.className,f=o.Children.map(e.children,(function(e){if((0,o.isValidElement)(e)&&void 0!==e.props.value)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),h=null!=d?d:f.map((function(e){var a=e.props;return{value:a.value,label:a.label}})),g=(0,s.lx)(h,(function(e,a){return e.value===a.value}));if(g.length>0)throw new Error('Docusaurus error: Duplicate values "'+g.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var k=null===m?m:null!=(a=null!=m?m:null==(n=f.find((function(e){return e.props.default})))?void 0:n.props.value)?a:null==(t=f[0])?void 0:t.props.value;if(null!==k&&!h.some((function(e){return e.value===k})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+k+'" but none of its children has the corresponding value. Available values are: '+h.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var b=l(),C=b.tabGroupChoices,N=b.setTabGroupChoices,E=(0,o.useState)(k),w=E[0],y=E[1],Z=[],x=(0,s.o5)().blockElementScrollPositionUntilNextRender;if(null!=p){var T=C[p];null!=T&&T!==w&&h.some((function(e){return e.value===T}))&&y(T)}var I=function(e){var a=e.currentTarget,n=Z.indexOf(a),t=h[n].value;t!==w&&(x(a),y(t),null!=p&&N(p,t))},_=function(e){var a,n=null;switch(e.key){case"ArrowRight":var t=Z.indexOf(e.currentTarget)+1;n=Z[t]||Z[0];break;case"ArrowLeft":var o=Z.indexOf(e.currentTarget)-1;n=Z[o]||Z[Z.length-1]}null==(a=n)||a.focus()};return o.createElement("div",{className:"tabs-container"},o.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,c.Z)("tabs",{"tabs--block":i},v)},h.map((function(e){var a=e.value,n=e.label;return o.createElement("li",{role:"tab",tabIndex:w===a?0:-1,"aria-selected":w===a,className:(0,c.Z)("tabs__item",u,{"tabs__item--active":w===a}),key:a,ref:function(e){return Z.push(e)},onKeyDown:_,onFocus:I,onClick:I},null!=n?n:a)}))),r?(0,o.cloneElement)(f.filter((function(e){return e.props.value===w}))[0],{className:"margin-vert--md"}):o.createElement("div",{className:"margin-vert--md"},f.map((function(e,a){return(0,o.cloneElement)(e,{key:a,hidden:e.props.value!==w})}))))}function d(e){var a=(0,r.Z)();return o.createElement(m,(0,t.Z)({key:String(a)},e))}},47758:function(e,a,n){n.d(a,{Z:function(){return s}});var t=n(67294),o=n(86010),r=n(39960),i=n(44996),l="card_3DNo";var s=function(e){var a,n=void 0===e.href,s=void 0!==e.href&&/^http/.test(e.href),c="undefined"===e.header?null:t.createElement("header",{className:"Card-header"},e.header),u=e.hoverIcon||e.icon,m=t.createElement(t.Fragment,null,e.img&&t.createElement("img",{src:(0,i.Z)(e.img),className:"Card-image"}),t.createElement("div",{className:"Card-container"},(e.icon||u)&&t.createElement("div",{className:"Card-icon-row"},e.icon&&t.createElement("img",{src:(0,i.Z)(e.icon),className:"Card-icon Card-icon-default"}),u&&t.createElement("img",{src:(0,i.Z)(u),className:"Card-icon Card-icon-hover"})),e.ionicon&&t.createElement("ion-icon",{name:e.ionicon,className:"Card-ionicon"}),e.iconset&&t.createElement("div",{className:"Card-iconset__container"},e.iconset.split(",").map((function(a,n){return t.createElement("img",{src:(0,i.Z)(a),className:"Card-icon "+(n===e.activeIndex?"Card-icon-active":""),"data-index":n,key:n})}))),e.header&&c,t.createElement("div",{className:"Card-content"},e.children))),d=(0,o.Z)(((a={"Card-with-image":void 0!==e.img,"Card-without-image":void 0===e.img,"Card-size-lg":"lg"===e.size})[e.className]=e.className,a));return n?t.createElement("docs-card",{class:d},t.createElement("div",{className:(0,o.Z)(l,"docs-card")},m)):s?t.createElement("docs-card",{class:d},t.createElement("a",{className:(0,o.Z)(l,"docs-card"),href:e.href,target:"_blank"},m)):t.createElement("docs-card",{class:d},t.createElement(r.default,{to:e.href,className:(0,o.Z)(l,"docs-card")},m))}},88694:function(e,a,n){n.d(a,{Z:function(){return u}});var t=n(87462),o=n(63366),r=n(86010),i=n(67294),l="docsButton_2gXP",s="docsButtonRound_2y-L",c=["href","round"];function u(e){var a,n=e.href,u=e.round,m=void 0!==u&&u,d=(0,o.Z)(e,c);return d.className=(0,r.Z)(((a={})[d.className]=Boolean(d.className),a[l]=!0,a["docs-button"]=!0,a[s]=m,a["docs-button--round"]=m,a)),n?i.createElement("a",(0,t.Z)({href:n,className:"docsButton"},d),d.children):i.createElement("button",(0,t.Z)({className:"docsButton"},d),d.children)}},47710:function(e,a,n){n.r(a),n.d(a,{frontMatter:function(){return d},contentTitle:function(){return p},metadata:function(){return v},toc:function(){return f},default:function(){return g}});var t=n(87462),o=n(63366),r=(n(67294),n(3905)),i=n(47758),l=n(88694),s=n(26396),c=n(58215),u=n(19055),m=["components"],d={sidebar_label:"Email Composer"},p="Email Composer",v={unversionedId:"native/email-composer",id:"version-v5/native/email-composer",isDocsHomePage:!1,title:"Email Composer",description:"Requires Cordova plugin: cordova-plugin-email-composer. For more info, please see the Email Composer plugin docs.",source:"@site/versioned_docs/version-v5/native/email-composer.md",sourceDirName:"native",slug:"/native/email-composer",permalink:"/docs/v5/native/email-composer",editUrl:"https://github.com/ionic-team/ionic-native/edit/master/src/@awesome-cordova-plugins/plugins/email-composer/index.ts",tags:[],version:"v5",frontMatter:{sidebar_label:"Email Composer"},sidebar:"version-v5/native",previous:{title:"Document Viewer",permalink:"/docs/v5/native/document-viewer"},next:{title:"Answers",permalink:"/docs/v5/native/fabric"}},f=[{value:"Supported Platforms",id:"supported-platforms",children:[],level:2},{value:"Usage",id:"usage",children:[{value:"React",id:"react",children:[],level:3},{value:"Angular",id:"angular",children:[],level:3}],level:2}],h={toc:f};function g(e){var a=e.components,n=(0,o.Z)(e,m);return(0,r.kt)("wrapper",(0,t.Z)({},h,n,{components:a,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"email-composer"},"Email Composer"),(0,r.kt)("p",null,"Requires Cordova plugin: cordova-plugin-email-composer. For more info, please see the ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/hypery2k/cordova-email-plugin"},"Email Composer plugin docs"),"."),(0,r.kt)("p",null,(0,r.kt)("a",{href:"https://github.com/katzer/cordova-plugin-email-composer",target:"_blank",rel:"noopener",className:"git-link"},(0,r.kt)("svg",{viewBox:"0 0 512 512"},(0,r.kt)("path",{d:"M416 160c0-35.3-28.7-64-64-64s-64 28.7-64 64c0 23.7 12.9 44.3 32 55.4v8.6c0 19.9-7.8 33.7-25.3 44.9-15.4 9.8-38.1 17.1-67.5 21.5-14 2.1-25.7 6-35.2 10.7V151.4c19.1-11.1 32-31.7 32-55.4 0-35.3-28.7-64-64-64S96 60.7 96 96c0 23.7 12.9 44.3 32 55.4v209.2c-19.1 11.1-32 31.7-32 55.4 0 35.3 28.7 64 64 64s64-28.7 64-64c0-16.6-6.3-31.7-16.7-43.1 1.9-4.9 9.7-16.3 29.4-19.3 38.8-5.8 68.9-15.9 92.3-30.8 36-22.8 55-57 55-98.8v-8.6c19.1-11.1 32-31.7 32-55.4zM160 56c22.1 0 40 17.9 40 40s-17.9 40-40 40-40-17.9-40-40 17.9-40 40-40zm0 400c-22.1 0-40-17.9-40-40s17.9-40 40-40 40 17.9 40 40-17.9 40-40 40zm192-256c-22.1 0-40-17.9-40-40s17.9-40 40-40 40 17.9 40 40-17.9 40-40 40z"}))," ","https://github.com/katzer/cordova-plugin-email-composer")),(0,r.kt)("h2",null,"Stuck on a Cordova issue?"),(0,r.kt)(i.Z,{className:"cordova-ee-card",header:"Don't waste precious time on plugin issues.",href:"https://ionicframework.com/sales?product_of_interest=Ionic%20Native",mdxType:"DocsCard"},(0,r.kt)("div",null,(0,r.kt)("img",{src:"/docs/icons/native-cordova-bot.png",class:"cordova-ee-img"}),(0,r.kt)("p",null,"If you're building a serious project, you can't afford to spend hours troubleshooting. Ionic\u2019s experts offer premium advisory services for both community plugins and premier plugins."),(0,r.kt)(l.Z,{className:"native-ee-detail",mdxType:"DocsButton"},"Contact Us Today!"))),(0,r.kt)("h2",{id:"installation"},(0,r.kt)("a",{href:"#installation"},"Installation")),(0,r.kt)(s.Z,{groupId:"runtime",defaultValue:"Capacitor",values:[{value:"Capacitor",label:"Capacitor"},{value:"Cordova",label:"Cordova"},{value:"Enterprise",label:"Enterprise"}],mdxType:"Tabs"},(0,r.kt)(c.Z,{value:"Capacitor",mdxType:"TabItem"},(0,r.kt)(u.Z,{className:"language-shell",mdxType:"CodeBlock"},"$ npm install cordova-plugin-email-composer ","\n","$ npm install @awesome-cordova-plugins/email-composer ","\n","$ ionic cap sync")),(0,r.kt)(c.Z,{value:"Cordova",mdxType:"TabItem"},(0,r.kt)(u.Z,{className:"language-shell",mdxType:"CodeBlock"},"$ ionic cordova plugin add cordova-plugin-email-composer ","\n","$ npm install @awesome-cordova-plugins/email-composer ","\n")),(0,r.kt)(c.Z,{value:"Enterprise",mdxType:"TabItem"},(0,r.kt)("blockquote",null,"Ionic Enterprise comes with fully supported and maintained plugins from the Ionic Team. \xa0",(0,r.kt)("a",{class:"btn",href:"https://ionic.io/docs/premier-plugins"},"Learn More")," or if you're interested in an enterprise version of this plugin ",(0,r.kt)("a",{class:"btn",href:"https://ionicframework.com/sales?product_of_interest=Ionic%20Enterprise%20Engine"},"Contact Us")))),(0,r.kt)("h2",{id:"supported-platforms"},"Supported Platforms"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Amazon Fire OS"),(0,r.kt)("li",{parentName:"ul"},"Android"),(0,r.kt)("li",{parentName:"ul"},"Browser"),(0,r.kt)("li",{parentName:"ul"},"iOS"),(0,r.kt)("li",{parentName:"ul"},"Windows"),(0,r.kt)("li",{parentName:"ul"},"macOS")),(0,r.kt)("h2",{id:"usage"},"Usage"),(0,r.kt)("h3",{id:"react"},"React"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/docs/v5/native/community#react"},"Learn more about using Ionic Native components in React")),(0,r.kt)("h3",{id:"angular"},"Angular"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx"},"import { EmailComposer } from '@awesome-cordova-plugins/email-composer/ngx';\n\nconstructor(private emailComposer: EmailComposer) { }\n\n...\n\n\nthis.emailComposer.getClients().then((apps: []) => {\n   // Returns an array of configured email clients for the device\n});\n\nthis.emailComposer.hasClient().then(app, (isValid: boolean) => {\n if (isValid) {\n   // Now we know we have a valid email client configured\n   // Not specifying an app will return true if at least one email client is configured\n }\n});\n\nthis.emailComposer.hasAccount().then((isValid: boolean) => {\n if (isValid) {\n   // Now we know we have a valid email account configured\n }\n});\n\nthis.emailComposer.isAvailable().then(app, (available: boolean) => {\n if(available) {\n   // Now we know we can send an email, calls hasClient and hasAccount\n   // Not specifying an app will return true if at least one email client is configured\n }\n});\n\nlet email = {\n  to: 'max@mustermann.de',\n  cc: 'erika@mustermann.de',\n  bcc: ['john@doe.com', 'jane@doe.com'],\n  attachments: [\n    'file://img/logo.png',\n    'res://icon.png',\n    'base64:icon.png//iVBORw0KGgoAAAANSUhEUg...',\n    'file://README.pdf'\n  ],\n  subject: 'Cordova Icons',\n  body: 'How are you? Nice greetings from Leipzig',\n  isHtml: true\n}\n\n// Send a text message using default options\nthis.emailComposer.open(email);\n")),(0,r.kt)("p",null,"You can also assign aliases to email apps"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"// add alias\nthis.email.addAlias('gmail', 'com.google.android.gm');\n\n// then use alias when sending email\nthis.email.open({\n  app: 'gmail',\n  ...\n});\n")))}g.isMDXComponent=!0}}]);