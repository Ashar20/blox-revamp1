"use strict";(self.webpackChunkionic_docs=self.webpackChunkionic_docs||[]).push([[59435],{58215:function(e,a,n){var t=n(67294);a.Z=function(e){var a=e.children,n=e.hidden,r=e.className;return t.createElement("div",{role:"tabpanel",hidden:n,className:r},a)}},26396:function(e,a,n){n.d(a,{Z:function(){return m}});var t=n(87462),r=n(67294),o=n(72389),i=n(79443);var l=function(){var e=(0,r.useContext)(i.Z);if(null==e)throw new Error('"useUserPreferencesContext" is used outside of "Layout" component.');return e},c=n(89521),s=n(86010),u="tabItem_1uMI";function d(e){var a,n,t,o=e.lazy,i=e.block,d=e.defaultValue,m=e.values,p=e.groupId,v=e.className,f=r.Children.map(e.children,(function(e){if((0,r.isValidElement)(e)&&void 0!==e.props.value)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),h=null!=m?m:f.map((function(e){var a=e.props;return{value:a.value,label:a.label}})),g=(0,c.lx)(h,(function(e,a){return e.value===a.value}));if(g.length>0)throw new Error('Docusaurus error: Duplicate values "'+g.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var k=null===d?d:null!=(a=null!=d?d:null==(n=f.find((function(e){return e.props.default})))?void 0:n.props.value)?a:null==(t=f[0])?void 0:t.props.value;if(null!==k&&!h.some((function(e){return e.value===k})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+k+'" but none of its children has the corresponding value. Available values are: '+h.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var b=l(),C=b.tabGroupChoices,N=b.setTabGroupChoices,y=(0,r.useState)(k),E=y[0],T=y[1],I=[],w=(0,c.o5)().blockElementScrollPositionUntilNextRender;if(null!=p){var Z=C[p];null!=Z&&Z!==E&&h.some((function(e){return e.value===Z}))&&T(Z)}var x=function(e){var a=e.currentTarget,n=I.indexOf(a),t=h[n].value;t!==E&&(w(a),T(t),null!=p&&N(p,t))},D=function(e){var a,n=null;switch(e.key){case"ArrowRight":var t=I.indexOf(e.currentTarget)+1;n=I[t]||I[0];break;case"ArrowLeft":var r=I.indexOf(e.currentTarget)-1;n=I[r]||I[I.length-1]}null==(a=n)||a.focus()};return r.createElement("div",{className:"tabs-container"},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,s.Z)("tabs",{"tabs--block":i},v)},h.map((function(e){var a=e.value,n=e.label;return r.createElement("li",{role:"tab",tabIndex:E===a?0:-1,"aria-selected":E===a,className:(0,s.Z)("tabs__item",u,{"tabs__item--active":E===a}),key:a,ref:function(e){return I.push(e)},onKeyDown:D,onFocus:x,onClick:x},null!=n?n:a)}))),o?(0,r.cloneElement)(f.filter((function(e){return e.props.value===E}))[0],{className:"margin-vert--md"}):r.createElement("div",{className:"margin-vert--md"},f.map((function(e,a){return(0,r.cloneElement)(e,{key:a,hidden:e.props.value!==E})}))))}function m(e){var a=(0,o.Z)();return r.createElement(d,(0,t.Z)({key:String(a)},e))}},47758:function(e,a,n){n.d(a,{Z:function(){return c}});var t=n(67294),r=n(86010),o=n(39960),i=n(44996),l="card_3DNo";var c=function(e){var a,n=void 0===e.href,c=void 0!==e.href&&/^http/.test(e.href),s="undefined"===e.header?null:t.createElement("header",{className:"Card-header"},e.header),u=e.hoverIcon||e.icon,d=t.createElement(t.Fragment,null,e.img&&t.createElement("img",{src:(0,i.Z)(e.img),className:"Card-image"}),t.createElement("div",{className:"Card-container"},(e.icon||u)&&t.createElement("div",{className:"Card-icon-row"},e.icon&&t.createElement("img",{src:(0,i.Z)(e.icon),className:"Card-icon Card-icon-default"}),u&&t.createElement("img",{src:(0,i.Z)(u),className:"Card-icon Card-icon-hover"})),e.ionicon&&t.createElement("ion-icon",{name:e.ionicon,className:"Card-ionicon"}),e.iconset&&t.createElement("div",{className:"Card-iconset__container"},e.iconset.split(",").map((function(a,n){return t.createElement("img",{src:(0,i.Z)(a),className:"Card-icon "+(n===e.activeIndex?"Card-icon-active":""),"data-index":n,key:n})}))),e.header&&s,t.createElement("div",{className:"Card-content"},e.children))),m=(0,r.Z)(((a={"Card-with-image":void 0!==e.img,"Card-without-image":void 0===e.img,"Card-size-lg":"lg"===e.size})[e.className]=e.className,a));return n?t.createElement("docs-card",{class:m},t.createElement("div",{className:(0,r.Z)(l,"docs-card")},d)):c?t.createElement("docs-card",{class:m},t.createElement("a",{className:(0,r.Z)(l,"docs-card"),href:e.href,target:"_blank"},d)):t.createElement("docs-card",{class:m},t.createElement(o.default,{to:e.href,className:(0,r.Z)(l,"docs-card")},d))}},88694:function(e,a,n){n.d(a,{Z:function(){return u}});var t=n(87462),r=n(63366),o=n(86010),i=n(67294),l="docsButton_2gXP",c="docsButtonRound_2y-L",s=["href","round"];function u(e){var a,n=e.href,u=e.round,d=void 0!==u&&u,m=(0,r.Z)(e,s);return m.className=(0,o.Z)(((a={})[m.className]=Boolean(m.className),a[l]=!0,a["docs-button"]=!0,a[c]=d,a["docs-button--round"]=d,a)),n?i.createElement("a",(0,t.Z)({href:n,className:"docsButton"},m),m.children):i.createElement("button",(0,t.Z)({className:"docsButton"},m),m.children)}},49250:function(e,a,n){n.r(a),n.d(a,{frontMatter:function(){return m},contentTitle:function(){return p},metadata:function(){return v},toc:function(){return f},default:function(){return g}});var t=n(87462),r=n(63366),o=(n(67294),n(3905)),i=n(47758),l=n(88694),c=n(26396),s=n(58215),u=n(19055),d=["components"],m={title:"Camera"},p=void 0,v={unversionedId:"native/camera",id:"native/camera",isDocsHomePage:!1,title:"Camera",description:"Install Camera | Cordova Plugin Cameras for Ionic Applications",source:"@site/docs/native/camera.md",sourceDirName:"native",slug:"/native/camera",permalink:"/developer/docs/native/camera",editUrl:"https://github.com/ionic-team/ionic-native/edit/master/src/@awesome-cordova-plugins/plugins/camera/index.ts",tags:[],version:"current",frontMatter:{title:"Camera"},sidebar:"native",previous:{title:"Camera Preview",permalink:"/developer/docs/native/camera-preview"},next:{title:"Chooser",permalink:"/developer/docs/native/chooser"}},f=[{value:"Supported Platforms",id:"supported-platforms",children:[],level:2},{value:"Usage",id:"usage",children:[{value:"React",id:"react",children:[],level:3},{value:"Angular",id:"angular",children:[],level:3}],level:2}],h={toc:f};function g(e){var a=e.components,n=(0,r.Z)(e,d);return(0,o.kt)("wrapper",(0,t.Z)({},h,n,{components:a,mdxType:"MDXLayout"}),(0,o.kt)("head",null,(0,o.kt)("title",null,"Install Camera | Cordova Plugin Cameras for Ionic Applications"),(0,o.kt)("meta",{name:"description",content:"Use the Cordova plugin to install a camera and take photos or capture videos in-app with Ionic Framework camera component for supported platforms."})),(0,o.kt)("p",null,"Take a photo or capture video."),(0,o.kt)("p",null,"Requires the Cordova plugin: ",(0,o.kt)("inlineCode",{parentName:"p"},"cordova-plugin-camera"),". For more info, please see the ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/apache/cordova-plugin-camera"},"Cordova Camera Plugin Docs"),"."),(0,o.kt)("p",null,"[Warning]"," Since IOS 10 the camera requires permissions to be placed in your config.xml add"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-xml"},'<config-file parent="NSCameraUsageDescription" platform="ios" target="*-Info.plist">\n <string>You can take photos</string>\n</config-file>\n')),(0,o.kt)("p",null,"inside of the <platform name='ios> section"),(0,o.kt)("p",null,(0,o.kt)("a",{href:"https://github.com/apache/cordova-plugin-camera",target:"_blank",rel:"noopener",className:"git-link"},(0,o.kt)("svg",{viewBox:"0 0 512 512"},(0,o.kt)("path",{d:"M416 160c0-35.3-28.7-64-64-64s-64 28.7-64 64c0 23.7 12.9 44.3 32 55.4v8.6c0 19.9-7.8 33.7-25.3 44.9-15.4 9.8-38.1 17.1-67.5 21.5-14 2.1-25.7 6-35.2 10.7V151.4c19.1-11.1 32-31.7 32-55.4 0-35.3-28.7-64-64-64S96 60.7 96 96c0 23.7 12.9 44.3 32 55.4v209.2c-19.1 11.1-32 31.7-32 55.4 0 35.3 28.7 64 64 64s64-28.7 64-64c0-16.6-6.3-31.7-16.7-43.1 1.9-4.9 9.7-16.3 29.4-19.3 38.8-5.8 68.9-15.9 92.3-30.8 36-22.8 55-57 55-98.8v-8.6c19.1-11.1 32-31.7 32-55.4zM160 56c22.1 0 40 17.9 40 40s-17.9 40-40 40-40-17.9-40-40 17.9-40 40-40zm0 400c-22.1 0-40-17.9-40-40s17.9-40 40-40 40 17.9 40 40-17.9 40-40 40zm192-256c-22.1 0-40-17.9-40-40s17.9-40 40-40 40 17.9 40 40-17.9 40-40 40z"}))," https://github.com/apache/cordova-plugin-camera")),(0,o.kt)("h2",null,"Stuck on a Cordova issue?"),(0,o.kt)(i.Z,{className:"cordova-ee-card",header:"Don't waste precious time on plugin issues.",href:"https://ionicframework.com/sales?product_of_interest=Ionic%20Native",mdxType:"DocsCard"},(0,o.kt)("div",null,(0,o.kt)("img",{src:"/docs/icons/native-cordova-bot.png",class:"cordova-ee-img"}),(0,o.kt)("p",null,"If you're building a serious project, you can't afford to spend hours troubleshooting. Ionic\u2019s experts offer premium advisory services for both community plugins and premier plugins."),(0,o.kt)(l.Z,{className:"native-ee-detail",mdxType:"DocsButton"},"Contact Us Today!"))),(0,o.kt)("h2",{id:"installation"},(0,o.kt)("a",{href:"#installation"},"Installation")),(0,o.kt)(c.Z,{defaultValue:"Capacitor",groupId:"runtime",values:[{value:"Capacitor",label:"Capacitor"},{value:"Cordova",label:"Cordova"},{value:"Enterprise",label:"Enterprise"}],mdxType:"Tabs"},(0,o.kt)(s.Z,{value:"Capacitor",mdxType:"TabItem"},(0,o.kt)(u.Z,{className:"language-shell",mdxType:"CodeBlock"},"$ npm install cordova-plugin-camera ","\n","$ npm install @awesome-cordova-plugins/camera ","\n","$ ionic cap sync")),(0,o.kt)(s.Z,{value:"Cordova",mdxType:"TabItem"},(0,o.kt)(u.Z,{className:"language-shell",mdxType:"CodeBlock"},"$ ionic cordova plugin add cordova-plugin-camera ","\n","$ npm install @awesome-cordova-plugins/camera ","\n")),(0,o.kt)(s.Z,{value:"Enterprise",mdxType:"TabItem"},(0,o.kt)("blockquote",null,"Ionic Enterprise comes with fully supported and maintained plugins from the Ionic Team. \xa0",(0,o.kt)("a",{class:"btn",href:"https://ionic.io/docs/premier-plugins"},"Learn More")," or if you're interested in an enterprise version of this plugin ",(0,o.kt)("a",{class:"btn",href:"https://ionicframework.com/sales?product_of_interest=Ionic%20Enterprise%20Engine"},"Contact Us")))),(0,o.kt)("h2",{id:"supported-platforms"},"Supported Platforms"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Android"),(0,o.kt)("li",{parentName:"ul"},"Browser"),(0,o.kt)("li",{parentName:"ul"},"iOS"),(0,o.kt)("li",{parentName:"ul"},"Windows")),(0,o.kt)("h2",{id:"usage"},"Usage"),(0,o.kt)("h3",{id:"react"},"React"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"/developer/docs/native/community#react"},"Learn more about using Ionic Native components in React")),(0,o.kt)("h3",{id:"angular"},"Angular"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},"import { Camera, CameraOptions } from '@awesome-cordova-plugins/camera/ngx';\n\nconstructor(private camera: Camera) { }\n\n...\n\n\nconst options: CameraOptions = {\n  quality: 100,\n  destinationType: this.camera.DestinationType.FILE_URI,\n  encodingType: this.camera.EncodingType.JPEG,\n  mediaType: this.camera.MediaType.PICTURE\n}\n\nthis.camera.getPicture(options).then((imageData) => {\n // imageData is either a base64 encoded string or a file URI\n // If it's base64 (DATA_URL):\n let base64Image = 'data:image/jpeg;base64,' + imageData;\n}, (err) => {\n // Handle error\n});\n")))}g.isMDXComponent=!0}}]);