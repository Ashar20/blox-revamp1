"use strict";(self.webpackChunkionic_docs=self.webpackChunkionic_docs||[]).push([[3563],{58215:function(e,n,t){var r=t(67294);n.Z=function(e){var n=e.children,t=e.hidden,a=e.className;return r.createElement("div",{role:"tabpanel",hidden:t,className:a},n)}},26396:function(e,n,t){t.d(n,{Z:function(){return m}});var r=t(87462),a=t(67294),i=t(72389),o=t(79443);var l=function(){var e=(0,a.useContext)(o.Z);if(null==e)throw new Error('"useUserPreferencesContext" is used outside of "Layout" component.');return e},c=t(89521),s=t(86010),u="tabItem_1uMI";function d(e){var n,t,r,i=e.lazy,o=e.block,d=e.defaultValue,m=e.values,p=e.groupId,v=e.className,g=a.Children.map(e.children,(function(e){if((0,a.isValidElement)(e)&&void 0!==e.props.value)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),h=null!=m?m:g.map((function(e){var n=e.props;return{value:n.value,label:n.label}})),f=(0,c.lx)(h,(function(e,n){return e.value===n.value}));if(f.length>0)throw new Error('Docusaurus error: Duplicate values "'+f.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var b=null===d?d:null!=(n=null!=d?d:null==(t=g.find((function(e){return e.props.default})))?void 0:t.props.value)?n:null==(r=g[0])?void 0:r.props.value;if(null!==b&&!h.some((function(e){return e.value===b})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+b+'" but none of its children has the corresponding value. Available values are: '+h.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var k=l(),C=k.tabGroupChoices,N=k.setTabGroupChoices,E=(0,a.useState)(b),I=E[0],y=E[1],w=[],z=(0,c.o5)().blockElementScrollPositionUntilNextRender;if(null!=p){var S=C[p];null!=S&&S!==I&&h.some((function(e){return e.value===S}))&&y(S)}var Z=function(e){var n=e.currentTarget,t=w.indexOf(n),r=h[t].value;r!==I&&(z(n),y(r),null!=p&&N(p,r))},T=function(e){var n,t=null;switch(e.key){case"ArrowRight":var r=w.indexOf(e.currentTarget)+1;t=w[r]||w[0];break;case"ArrowLeft":var a=w.indexOf(e.currentTarget)-1;t=w[a]||w[w.length-1]}null==(n=t)||n.focus()};return a.createElement("div",{className:"tabs-container"},a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,s.Z)("tabs",{"tabs--block":o},v)},h.map((function(e){var n=e.value,t=e.label;return a.createElement("li",{role:"tab",tabIndex:I===n?0:-1,"aria-selected":I===n,className:(0,s.Z)("tabs__item",u,{"tabs__item--active":I===n}),key:n,ref:function(e){return w.push(e)},onKeyDown:T,onFocus:Z,onClick:Z},null!=t?t:n)}))),i?(0,a.cloneElement)(g.filter((function(e){return e.props.value===I}))[0],{className:"margin-vert--md"}):a.createElement("div",{className:"margin-vert--md"},g.map((function(e,n){return(0,a.cloneElement)(e,{key:n,hidden:e.props.value!==I})}))))}function m(e){var n=(0,i.Z)();return a.createElement(d,(0,r.Z)({key:String(n)},e))}},47758:function(e,n,t){t.d(n,{Z:function(){return c}});var r=t(67294),a=t(86010),i=t(39960),o=t(44996),l="card_3DNo";var c=function(e){var n,t=void 0===e.href,c=void 0!==e.href&&/^http/.test(e.href),s="undefined"===e.header?null:r.createElement("header",{className:"Card-header"},e.header),u=e.hoverIcon||e.icon,d=r.createElement(r.Fragment,null,e.img&&r.createElement("img",{src:(0,o.Z)(e.img),className:"Card-image"}),r.createElement("div",{className:"Card-container"},(e.icon||u)&&r.createElement("div",{className:"Card-icon-row"},e.icon&&r.createElement("img",{src:(0,o.Z)(e.icon),className:"Card-icon Card-icon-default"}),u&&r.createElement("img",{src:(0,o.Z)(u),className:"Card-icon Card-icon-hover"})),e.ionicon&&r.createElement("ion-icon",{name:e.ionicon,className:"Card-ionicon"}),e.iconset&&r.createElement("div",{className:"Card-iconset__container"},e.iconset.split(",").map((function(n,t){return r.createElement("img",{src:(0,o.Z)(n),className:"Card-icon "+(t===e.activeIndex?"Card-icon-active":""),"data-index":t,key:t})}))),e.header&&s,r.createElement("div",{className:"Card-content"},e.children))),m=(0,a.Z)(((n={"Card-with-image":void 0!==e.img,"Card-without-image":void 0===e.img,"Card-size-lg":"lg"===e.size})[e.className]=e.className,n));return t?r.createElement("docs-card",{class:m},r.createElement("div",{className:(0,a.Z)(l,"docs-card")},d)):c?r.createElement("docs-card",{class:m},r.createElement("a",{className:(0,a.Z)(l,"docs-card"),href:e.href,target:"_blank"},d)):r.createElement("docs-card",{class:m},r.createElement(i.default,{to:e.href,className:(0,a.Z)(l,"docs-card")},d))}},88694:function(e,n,t){t.d(n,{Z:function(){return u}});var r=t(87462),a=t(63366),i=t(86010),o=t(67294),l="docsButton_2gXP",c="docsButtonRound_2y-L",s=["href","round"];function u(e){var n,t=e.href,u=e.round,d=void 0!==u&&u,m=(0,a.Z)(e,s);return m.className=(0,i.Z)(((n={})[m.className]=Boolean(m.className),n[l]=!0,n["docs-button"]=!0,n[c]=d,n["docs-button--round"]=d,n)),t?o.createElement("a",(0,r.Z)({href:t,className:"docsButton"},m),m.children):o.createElement("button",(0,r.Z)({className:"docsButton"},m),m.children)}},62214:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return m},contentTitle:function(){return p},metadata:function(){return v},toc:function(){return g},default:function(){return f}});var r=t(87462),a=t(63366),i=(t(67294),t(3905)),o=t(47758),l=t(88694),c=t(26396),s=t(58215),u=t(19055),d=["components"],m={title:"BlinkId"},p=void 0,v={unversionedId:"native/blinkid",id:"native/blinkid",isDocsHomePage:!1,title:"BlinkId",description:"Microblink SDK wrapper for barcode and document scanning. See the",source:"@site/docs/native/blinkid.md",sourceDirName:"native",slug:"/native/blinkid",permalink:"/developer/docs/native/blinkid",editUrl:"https://github.com/ionic-team/ionic-native/edit/master/src/@awesome-cordova-plugins/plugins/blinkid/index.ts",tags:[],version:"current",frontMatter:{title:"BlinkId"},sidebar:"native",previous:{title:"BLE",permalink:"/developer/docs/native/ble"},next:{title:"Bluetooth Classic Serial Port",permalink:"/developer/docs/native/bluetooth-classic-serial-port"}},g=[{value:"Supported Platforms",id:"supported-platforms",children:[],level:2},{value:"Usage",id:"usage",children:[{value:"React",id:"react",children:[],level:3},{value:"Angular",id:"angular",children:[],level:3}],level:2}],h={toc:g};function f(e){var n=e.components,t=(0,a.Z)(e,d);return(0,i.kt)("wrapper",(0,r.Z)({},h,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Microblink SDK wrapper for barcode and document scanning. See the\nblinkid-phonegap repository for available recognizers and other settings"),(0,i.kt)("p",null,(0,i.kt)("a",{href:"https://github.com/BlinkID/blinkid-phonegap",target:"_blank",rel:"noopener",className:"git-link"},(0,i.kt)("svg",{viewBox:"0 0 512 512"},(0,i.kt)("path",{d:"M416 160c0-35.3-28.7-64-64-64s-64 28.7-64 64c0 23.7 12.9 44.3 32 55.4v8.6c0 19.9-7.8 33.7-25.3 44.9-15.4 9.8-38.1 17.1-67.5 21.5-14 2.1-25.7 6-35.2 10.7V151.4c19.1-11.1 32-31.7 32-55.4 0-35.3-28.7-64-64-64S96 60.7 96 96c0 23.7 12.9 44.3 32 55.4v209.2c-19.1 11.1-32 31.7-32 55.4 0 35.3 28.7 64 64 64s64-28.7 64-64c0-16.6-6.3-31.7-16.7-43.1 1.9-4.9 9.7-16.3 29.4-19.3 38.8-5.8 68.9-15.9 92.3-30.8 36-22.8 55-57 55-98.8v-8.6c19.1-11.1 32-31.7 32-55.4zM160 56c22.1 0 40 17.9 40 40s-17.9 40-40 40-40-17.9-40-40 17.9-40 40-40zm0 400c-22.1 0-40-17.9-40-40s17.9-40 40-40 40 17.9 40 40-17.9 40-40 40zm192-256c-22.1 0-40-17.9-40-40s17.9-40 40-40 40 17.9 40 40-17.9 40-40 40z"}))," https://github.com/BlinkID/blinkid-phonegap")),(0,i.kt)("h2",null,"Stuck on a Cordova issue?"),(0,i.kt)(o.Z,{className:"cordova-ee-card",header:"Don't waste precious time on plugin issues.",href:"https://ionicframework.com/sales?product_of_interest=Ionic%20Native",mdxType:"DocsCard"},(0,i.kt)("div",null,(0,i.kt)("img",{src:"/docs/icons/native-cordova-bot.png",class:"cordova-ee-img"}),(0,i.kt)("p",null,"If you're building a serious project, you can't afford to spend hours troubleshooting. Ionic\u2019s experts offer premium advisory services for both community plugins and premier plugins."),(0,i.kt)(l.Z,{className:"native-ee-detail",mdxType:"DocsButton"},"Contact Us Today!"))),(0,i.kt)("h2",{id:"installation"},(0,i.kt)("a",{href:"#installation"},"Installation")),(0,i.kt)(c.Z,{defaultValue:"Capacitor",groupId:"runtime",values:[{value:"Capacitor",label:"Capacitor"},{value:"Cordova",label:"Cordova"},{value:"Enterprise",label:"Enterprise"}],mdxType:"Tabs"},(0,i.kt)(s.Z,{value:"Capacitor",mdxType:"TabItem"},(0,i.kt)(u.Z,{className:"language-shell",mdxType:"CodeBlock"},"$ npm install blinkid-cordova ","\n","$ npm install @awesome-cordova-plugins/blinkid ","\n","$ ionic cap sync")),(0,i.kt)(s.Z,{value:"Cordova",mdxType:"TabItem"},(0,i.kt)(u.Z,{className:"language-shell",mdxType:"CodeBlock"},"$ ionic cordova plugin add blinkid-cordova ","\n","$ npm install @awesome-cordova-plugins/blinkid ","\n")),(0,i.kt)(s.Z,{value:"Enterprise",mdxType:"TabItem"},(0,i.kt)("blockquote",null,"Ionic Enterprise comes with fully supported and maintained plugins from the Ionic Team. \xa0",(0,i.kt)("a",{class:"btn",href:"https://ionic.io/docs/premier-plugins"},"Learn More")," or if you're interested in an enterprise version of this plugin ",(0,i.kt)("a",{class:"btn",href:"https://ionicframework.com/sales?product_of_interest=Ionic%20Enterprise%20Engine"},"Contact Us")))),(0,i.kt)("h2",{id:"supported-platforms"},"Supported Platforms"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"iOS"),(0,i.kt)("li",{parentName:"ul"},"Android")),(0,i.kt)("h2",{id:"usage"},"Usage"),(0,i.kt)("h3",{id:"react"},"React"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"/developer/docs/native/community#react"},"Learn more about using Ionic Native components in React")),(0,i.kt)("h3",{id:"angular"},"Angular"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-typescript"},"import { BlinkId, RecognizerResultState } from '@awesome-cordova-plugins/blinkid/ngx';\n\nconstructor(private blinkId: BlinkId) { }\n\n...\n\nconst overlaySettings = new this.blinkId.DocumentOverlaySettings();\n\nconst usdlRecognizer = new this.blinkId.UsdlRecognizer();\nconst usdlSuccessFrameGrabber = new this.blinkId.SuccessFrameGrabberRecognizer(usdlRecognizer);\n\nconst barcodeRecognizer = new this.blinkId.BarcodeRecognizer();\nbarcodeRecognizer.scanPdf417 = true;\n\nconst recognizerCollection = new this.blinkId.RecognizerCollection([\n  usdlSuccessFrameGrabber,\n  barcodeRecognizer,\n]);\n\nconst canceled = await this.blinkId.scanWithCamera(\n  overlaySettings,\n  recognizerCollection,\n  { ios: IOS_LICENSE_KEY, android: ANDROID_LICENSE_KEY },\n);\n\nif (!canceled) {\n  if (usdlRecognizer.result.resultState === RecognizerResultState.valid) {\n    const successFrame = usdlSuccessFrameGrabber.result.successFrame;\n    if (successFrame) {\n      this.base64Img = `data:image/jpg;base64, ${successFrame}`;\n      this.fields = usdlRecognizer.result.fields;\n    }\n  } else {\n    this.barcodeStringData = barcodeRecognizer.result.stringData;\n  }\n}\n\n...\n\nconst overlaySettings = new this.blinkId.BlinkCardOverlaySettings();\nconst recognizer = new this.blinkId.BlinkCardRecognizer();\nrecognizer.returnFullDocumentImage = false;\nrecognizer.detectGlare = true;\nrecognizer.extractCvv = true;\nrecognizer.extractValidThru = true;\nrecognizer.extractOwner = true;\n\nconst recognizerCollection = new this.blinkId.RecognizerCollection([recognizer]);\nconst canceled = await this.blinkId.scanWithCamera(\n  overlaySettings,\n  recognizerCollection,\n  {\n    ios: '', //iOS License Key\n    android: '' //Android License Key\n  },\n);\n\nif (!canceled) {\n  if (recognizer.result.resultState === RecognizerResultState.valid) {\n    const results = recognizer.result;\n\n    if (results.resultState === RecognizerResultState.valid) {\n      const ccInfo = {\n        cardNumber: Number(results.cardNumber),\n        expirationMonth: Number(results.validThru.month),\n        expirationYear: Number(results.validThru.year),\n        cvv: Number(results.cvv)\n      };\n    }\n  }\n")))}f.isMDXComponent=!0}}]);