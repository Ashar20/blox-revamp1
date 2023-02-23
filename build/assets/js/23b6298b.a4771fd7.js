"use strict";(self.webpackChunkionic_docs=self.webpackChunkionic_docs||[]).push([[80288],{58215:function(e,a,t){var r=t(67294);a.Z=function(e){var a=e.children,t=e.hidden,n=e.className;return r.createElement("div",{role:"tabpanel",hidden:t,className:n},a)}},26396:function(e,a,t){t.d(a,{Z:function(){return m}});var r=t(87462),n=t(67294),i=t(72389),o=t(79443);var l=function(){var e=(0,n.useContext)(o.Z);if(null==e)throw new Error('"useUserPreferencesContext" is used outside of "Layout" component.');return e},c=t(89521),s=t(86010),u="tabItem_1uMI";function d(e){var a,t,r,i=e.lazy,o=e.block,d=e.defaultValue,m=e.values,p=e.groupId,v=e.className,f=n.Children.map(e.children,(function(e){if((0,n.isValidElement)(e)&&void 0!==e.props.value)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),h=null!=m?m:f.map((function(e){var a=e.props;return{value:a.value,label:a.label}})),g=(0,c.lx)(h,(function(e,a){return e.value===a.value}));if(g.length>0)throw new Error('Docusaurus error: Duplicate values "'+g.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var b=null===d?d:null!=(a=null!=d?d:null==(t=f.find((function(e){return e.props.default})))?void 0:t.props.value)?a:null==(r=f[0])?void 0:r.props.value;if(null!==b&&!h.some((function(e){return e.value===b})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+b+'" but none of its children has the corresponding value. Available values are: '+h.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var k=l(),N=k.tabGroupChoices,E=k.setTabGroupChoices,y=(0,n.useState)(b),C=y[0],w=y[1],Z=[],T=(0,c.o5)().blockElementScrollPositionUntilNextRender;if(null!=p){var I=N[p];null!=I&&I!==C&&h.some((function(e){return e.value===I}))&&w(I)}var x=function(e){var a=e.currentTarget,t=Z.indexOf(a),r=h[t].value;r!==C&&(T(a),w(r),null!=p&&E(p,r))},_=function(e){var a,t=null;switch(e.key){case"ArrowRight":var r=Z.indexOf(e.currentTarget)+1;t=Z[r]||Z[0];break;case"ArrowLeft":var n=Z.indexOf(e.currentTarget)-1;t=Z[n]||Z[Z.length-1]}null==(a=t)||a.focus()};return n.createElement("div",{className:"tabs-container"},n.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,s.Z)("tabs",{"tabs--block":o},v)},h.map((function(e){var a=e.value,t=e.label;return n.createElement("li",{role:"tab",tabIndex:C===a?0:-1,"aria-selected":C===a,className:(0,s.Z)("tabs__item",u,{"tabs__item--active":C===a}),key:a,ref:function(e){return Z.push(e)},onKeyDown:_,onFocus:x,onClick:x},null!=t?t:a)}))),i?(0,n.cloneElement)(f.filter((function(e){return e.props.value===C}))[0],{className:"margin-vert--md"}):n.createElement("div",{className:"margin-vert--md"},f.map((function(e,a){return(0,n.cloneElement)(e,{key:a,hidden:e.props.value!==C})}))))}function m(e){var a=(0,i.Z)();return n.createElement(d,(0,r.Z)({key:String(a)},e))}},47758:function(e,a,t){t.d(a,{Z:function(){return c}});var r=t(67294),n=t(86010),i=t(39960),o=t(44996),l="card_3DNo";var c=function(e){var a,t=void 0===e.href,c=void 0!==e.href&&/^http/.test(e.href),s="undefined"===e.header?null:r.createElement("header",{className:"Card-header"},e.header),u=e.hoverIcon||e.icon,d=r.createElement(r.Fragment,null,e.img&&r.createElement("img",{src:(0,o.Z)(e.img),className:"Card-image"}),r.createElement("div",{className:"Card-container"},(e.icon||u)&&r.createElement("div",{className:"Card-icon-row"},e.icon&&r.createElement("img",{src:(0,o.Z)(e.icon),className:"Card-icon Card-icon-default"}),u&&r.createElement("img",{src:(0,o.Z)(u),className:"Card-icon Card-icon-hover"})),e.ionicon&&r.createElement("ion-icon",{name:e.ionicon,className:"Card-ionicon"}),e.iconset&&r.createElement("div",{className:"Card-iconset__container"},e.iconset.split(",").map((function(a,t){return r.createElement("img",{src:(0,o.Z)(a),className:"Card-icon "+(t===e.activeIndex?"Card-icon-active":""),"data-index":t,key:t})}))),e.header&&s,r.createElement("div",{className:"Card-content"},e.children))),m=(0,n.Z)(((a={"Card-with-image":void 0!==e.img,"Card-without-image":void 0===e.img,"Card-size-lg":"lg"===e.size})[e.className]=e.className,a));return t?r.createElement("docs-card",{class:m},r.createElement("div",{className:(0,n.Z)(l,"docs-card")},d)):c?r.createElement("docs-card",{class:m},r.createElement("a",{className:(0,n.Z)(l,"docs-card"),href:e.href,target:"_blank"},d)):r.createElement("docs-card",{class:m},r.createElement(i.default,{to:e.href,className:(0,n.Z)(l,"docs-card")},d))}},88694:function(e,a,t){t.d(a,{Z:function(){return u}});var r=t(87462),n=t(63366),i=t(86010),o=t(67294),l="docsButton_2gXP",c="docsButtonRound_2y-L",s=["href","round"];function u(e){var a,t=e.href,u=e.round,d=void 0!==u&&u,m=(0,n.Z)(e,s);return m.className=(0,i.Z)(((a={})[m.className]=Boolean(m.className),a[l]=!0,a["docs-button"]=!0,a[c]=d,a["docs-button--round"]=d,a)),t?o.createElement("a",(0,r.Z)({href:t,className:"docsButton"},m),m.children):o.createElement("button",(0,r.Z)({className:"docsButton"},m),m.children)}},80202:function(e,a,t){t.r(a),t.d(a,{frontMatter:function(){return m},contentTitle:function(){return p},metadata:function(){return v},toc:function(){return f},default:function(){return g}});var r=t(87462),n=t(63366),i=(t(67294),t(3905)),o=t(47758),l=t(88694),c=t(26396),s=t(58215),u=t(19055),d=["components"],m={title:"BiometricWrapper"},p=void 0,v={unversionedId:"native/biometric-wrapper",id:"native/biometric-wrapper",isDocsHomePage:!1,title:"BiometricWrapper",description:"This plugin capture biometric(Iris and Fingerprint) and validate the user.",source:"@site/docs/native/biometric-wrapper.md",sourceDirName:"native",slug:"/native/biometric-wrapper",permalink:"/developer/docs/native/biometric-wrapper",editUrl:"https://github.com/ionic-team/ionic-native/edit/master/src/@awesome-cordova-plugins/plugins/biometric-wrapper/index.ts",tags:[],version:"current",frontMatter:{title:"BiometricWrapper"},sidebar:"native",previous:{title:"BioCatch",permalink:"/developer/docs/native/biocatch"},next:{title:"BLE",permalink:"/developer/docs/native/ble"}},f=[{value:"Supported Platforms",id:"supported-platforms",children:[],level:2},{value:"Usage",id:"usage",children:[{value:"React",id:"react",children:[],level:3},{value:"Angular",id:"angular",children:[],level:3}],level:2}],h={toc:f};function g(e){var a=e.components,t=(0,n.Z)(e,d);return(0,i.kt)("wrapper",(0,r.Z)({},h,t,{components:a,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"This plugin capture biometric(Iris and Fingerprint) and validate the user.\nMay be used in Banking domain"),(0,i.kt)("p",null,(0,i.kt)("a",{href:"",target:"_blank",rel:"noopener",className:"git-link"},(0,i.kt)("svg",{viewBox:"0 0 512 512"},(0,i.kt)("path",{d:"M416 160c0-35.3-28.7-64-64-64s-64 28.7-64 64c0 23.7 12.9 44.3 32 55.4v8.6c0 19.9-7.8 33.7-25.3 44.9-15.4 9.8-38.1 17.1-67.5 21.5-14 2.1-25.7 6-35.2 10.7V151.4c19.1-11.1 32-31.7 32-55.4 0-35.3-28.7-64-64-64S96 60.7 96 96c0 23.7 12.9 44.3 32 55.4v209.2c-19.1 11.1-32 31.7-32 55.4 0 35.3 28.7 64 64 64s64-28.7 64-64c0-16.6-6.3-31.7-16.7-43.1 1.9-4.9 9.7-16.3 29.4-19.3 38.8-5.8 68.9-15.9 92.3-30.8 36-22.8 55-57 55-98.8v-8.6c19.1-11.1 32-31.7 32-55.4zM160 56c22.1 0 40 17.9 40 40s-17.9 40-40 40-40-17.9-40-40 17.9-40 40-40zm0 400c-22.1 0-40-17.9-40-40s17.9-40 40-40 40 17.9 40 40-17.9 40-40 40zm192-256c-22.1 0-40-17.9-40-40s17.9-40 40-40 40 17.9 40 40-17.9 40-40 40z"})))),(0,i.kt)("h2",null,"Stuck on a Cordova issue?"),(0,i.kt)(o.Z,{className:"cordova-ee-card",header:"Don't waste precious time on plugin issues.",href:"https://ionicframework.com/sales?product_of_interest=Ionic%20Native",mdxType:"DocsCard"},(0,i.kt)("div",null,(0,i.kt)("img",{src:"/docs/icons/native-cordova-bot.png",class:"cordova-ee-img"}),(0,i.kt)("p",null,"If you're building a serious project, you can't afford to spend hours troubleshooting. Ionic\u2019s experts offer premium advisory services for both community plugins and premier plugins."),(0,i.kt)(l.Z,{className:"native-ee-detail",mdxType:"DocsButton"},"Contact Us Today!"))),(0,i.kt)("h2",{id:"installation"},(0,i.kt)("a",{href:"#installation"},"Installation")),(0,i.kt)(c.Z,{defaultValue:"Capacitor",groupId:"runtime",values:[{value:"Capacitor",label:"Capacitor"},{value:"Cordova",label:"Cordova"},{value:"Enterprise",label:"Enterprise"}],mdxType:"Tabs"},(0,i.kt)(s.Z,{value:"Capacitor",mdxType:"TabItem"},(0,i.kt)(u.Z,{className:"language-shell",mdxType:"CodeBlock"},"$ npm install cordova-plugin-biometric ","\n","$ npm install @awesome-cordova-plugins/biometric-wrapper ","\n","$ ionic cap sync")),(0,i.kt)(s.Z,{value:"Cordova",mdxType:"TabItem"},(0,i.kt)(u.Z,{className:"language-shell",mdxType:"CodeBlock"},"$ ionic cordova plugin add cordova-plugin-biometric ","\n","$ npm install @awesome-cordova-plugins/biometric-wrapper ","\n")),(0,i.kt)(s.Z,{value:"Enterprise",mdxType:"TabItem"},(0,i.kt)("blockquote",null,"Ionic Enterprise comes with fully supported and maintained plugins from the Ionic Team. \xa0",(0,i.kt)("a",{class:"btn",href:"https://ionic.io/docs/premier-plugins"},"Learn More")," or if you're interested in an enterprise version of this plugin ",(0,i.kt)("a",{class:"btn",href:"https://ionicframework.com/sales?product_of_interest=Ionic%20Enterprise%20Engine"},"Contact Us")))),(0,i.kt)("h2",{id:"supported-platforms"},"Supported Platforms"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Android")),(0,i.kt)("h2",{id:"usage"},"Usage"),(0,i.kt)("h3",{id:"react"},"React"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"/developer/docs/native/community#react"},"Learn more about using Ionic Native components in React")),(0,i.kt)("h3",{id:"angular"},"Angular"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-typescript"},"import { BiometricWrapper } from '@awesome-cordova-plugins/biometric-wrapper/ngx';\n\n\nconstructor(private biometricWrapper: BiometricWrapper) { }\n\n...\n\n\nthis.biometricWrapper.activateIris({'PID_XML': '&lt;pid-xml/>'})\n  .then((res: any) => )\n  .catch((error: any) => );\n\n")))}g.isMDXComponent=!0}}]);