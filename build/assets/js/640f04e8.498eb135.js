"use strict";(self.webpackChunkionic_docs=self.webpackChunkionic_docs||[]).push([[69143],{58215:function(e,n,t){var a=t(67294);n.Z=function(e){var n=e.children,t=e.hidden,o=e.className;return a.createElement("div",{role:"tabpanel",hidden:t,className:o},n)}},26396:function(e,n,t){t.d(n,{Z:function(){return v}});var a=t(87462),o=t(67294),r=t(72389),c=t(79443);var i=function(){var e=(0,o.useContext)(c.Z);if(null==e)throw new Error('"useUserPreferencesContext" is used outside of "Layout" component.');return e},s=t(89521),l=t(86010),u="tabItem_1uMI";function d(e){var n,t,a,r=e.lazy,c=e.block,d=e.defaultValue,v=e.values,m=e.groupId,p=e.className,f=o.Children.map(e.children,(function(e){if((0,o.isValidElement)(e)&&void 0!==e.props.value)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),h=null!=v?v:f.map((function(e){var n=e.props;return{value:n.value,label:n.label}})),g=(0,s.lx)(h,(function(e,n){return e.value===n.value}));if(g.length>0)throw new Error('Docusaurus error: Duplicate values "'+g.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var k=null===d?d:null!=(n=null!=d?d:null==(t=f.find((function(e){return e.props.default})))?void 0:t.props.value)?n:null==(a=f[0])?void 0:a.props.value;if(null!==k&&!h.some((function(e){return e.value===k})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+k+'" but none of its children has the corresponding value. Available values are: '+h.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var b=i(),N=b.tabGroupChoices,E=b.setTabGroupChoices,C=(0,o.useState)(k),y=C[0],Z=C[1],w=[],x=(0,s.o5)().blockElementScrollPositionUntilNextRender;if(null!=m){var T=N[m];null!=T&&T!==y&&h.some((function(e){return e.value===T}))&&Z(T)}var D=function(e){var n=e.currentTarget,t=w.indexOf(n),a=h[t].value;a!==y&&(x(n),Z(a),null!=m&&E(m,a))},I=function(e){var n,t=null;switch(e.key){case"ArrowRight":var a=w.indexOf(e.currentTarget)+1;t=w[a]||w[0];break;case"ArrowLeft":var o=w.indexOf(e.currentTarget)-1;t=w[o]||w[w.length-1]}null==(n=t)||n.focus()};return o.createElement("div",{className:"tabs-container"},o.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.Z)("tabs",{"tabs--block":c},p)},h.map((function(e){var n=e.value,t=e.label;return o.createElement("li",{role:"tab",tabIndex:y===n?0:-1,"aria-selected":y===n,className:(0,l.Z)("tabs__item",u,{"tabs__item--active":y===n}),key:n,ref:function(e){return w.push(e)},onKeyDown:I,onFocus:D,onClick:D},null!=t?t:n)}))),r?(0,o.cloneElement)(f.filter((function(e){return e.props.value===y}))[0],{className:"margin-vert--md"}):o.createElement("div",{className:"margin-vert--md"},f.map((function(e,n){return(0,o.cloneElement)(e,{key:n,hidden:e.props.value!==y})}))))}function v(e){var n=(0,r.Z)();return o.createElement(d,(0,a.Z)({key:String(n)},e))}},47758:function(e,n,t){t.d(n,{Z:function(){return s}});var a=t(67294),o=t(86010),r=t(39960),c=t(44996),i="card_3DNo";var s=function(e){var n,t=void 0===e.href,s=void 0!==e.href&&/^http/.test(e.href),l="undefined"===e.header?null:a.createElement("header",{className:"Card-header"},e.header),u=e.hoverIcon||e.icon,d=a.createElement(a.Fragment,null,e.img&&a.createElement("img",{src:(0,c.Z)(e.img),className:"Card-image"}),a.createElement("div",{className:"Card-container"},(e.icon||u)&&a.createElement("div",{className:"Card-icon-row"},e.icon&&a.createElement("img",{src:(0,c.Z)(e.icon),className:"Card-icon Card-icon-default"}),u&&a.createElement("img",{src:(0,c.Z)(u),className:"Card-icon Card-icon-hover"})),e.ionicon&&a.createElement("ion-icon",{name:e.ionicon,className:"Card-ionicon"}),e.iconset&&a.createElement("div",{className:"Card-iconset__container"},e.iconset.split(",").map((function(n,t){return a.createElement("img",{src:(0,c.Z)(n),className:"Card-icon "+(t===e.activeIndex?"Card-icon-active":""),"data-index":t,key:t})}))),e.header&&l,a.createElement("div",{className:"Card-content"},e.children))),v=(0,o.Z)(((n={"Card-with-image":void 0!==e.img,"Card-without-image":void 0===e.img,"Card-size-lg":"lg"===e.size})[e.className]=e.className,n));return t?a.createElement("docs-card",{class:v},a.createElement("div",{className:(0,o.Z)(i,"docs-card")},d)):s?a.createElement("docs-card",{class:v},a.createElement("a",{className:(0,o.Z)(i,"docs-card"),href:e.href,target:"_blank"},d)):a.createElement("docs-card",{class:v},a.createElement(r.default,{to:e.href,className:(0,o.Z)(i,"docs-card")},d))}},88694:function(e,n,t){t.d(n,{Z:function(){return u}});var a=t(87462),o=t(63366),r=t(86010),c=t(67294),i="docsButton_2gXP",s="docsButtonRound_2y-L",l=["href","round"];function u(e){var n,t=e.href,u=e.round,d=void 0!==u&&u,v=(0,o.Z)(e,l);return v.className=(0,r.Z)(((n={})[v.className]=Boolean(v.className),n[i]=!0,n["docs-button"]=!0,n[s]=d,n["docs-button--round"]=d,n)),t?c.createElement("a",(0,a.Z)({href:t,className:"docsButton"},v),v.children):c.createElement("button",(0,a.Z)({className:"docsButton"},v),v.children)}},52765:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return v},contentTitle:function(){return m},metadata:function(){return p},toc:function(){return f},default:function(){return g}});var a=t(87462),o=t(63366),r=(t(67294),t(3905)),c=t(47758),i=t(88694),s=t(26396),l=t(58215),u=t(19055),d=["components"],v={sidebar_label:"Device Accounts"},m="Device Accounts",p={unversionedId:"native/device-accounts",id:"version-v5/native/device-accounts",isDocsHomePage:!1,title:"Device Accounts",description:"Gets the Google accounts associated with the Android device",source:"@site/versioned_docs/version-v5/native/device-accounts.md",sourceDirName:"native",slug:"/native/device-accounts",permalink:"/developer/docs/v5/native/device-accounts",editUrl:"https://github.com/ionic-team/ionic-native/edit/master/src/@awesome-cordova-plugins/plugins/device-accounts/index.ts",tags:[],version:"v5",frontMatter:{sidebar_label:"Device Accounts"},sidebar:"version-v5/native",previous:{title:"Deeplinks",permalink:"/developer/docs/v5/native/deeplinks"},next:{title:"Device Motion",permalink:"/developer/docs/v5/native/device-motion"}},f=[{value:"Supported Platforms",id:"supported-platforms",children:[],level:2},{value:"Usage",id:"usage",children:[{value:"React",id:"react",children:[],level:3},{value:"Angular",id:"angular",children:[],level:3}],level:2}],h={toc:f};function g(e){var n=e.components,t=(0,o.Z)(e,d);return(0,r.kt)("wrapper",(0,a.Z)({},h,t,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"device-accounts"},"Device Accounts"),(0,r.kt)("p",null,"Gets the Google accounts associated with the Android device"),(0,r.kt)("p",null,(0,r.kt)("a",{href:"https://github.com/xUnholy/cordova-device-accounts-v2",target:"_blank",rel:"noopener",className:"git-link"},(0,r.kt)("svg",{viewBox:"0 0 512 512"},(0,r.kt)("path",{d:"M416 160c0-35.3-28.7-64-64-64s-64 28.7-64 64c0 23.7 12.9 44.3 32 55.4v8.6c0 19.9-7.8 33.7-25.3 44.9-15.4 9.8-38.1 17.1-67.5 21.5-14 2.1-25.7 6-35.2 10.7V151.4c19.1-11.1 32-31.7 32-55.4 0-35.3-28.7-64-64-64S96 60.7 96 96c0 23.7 12.9 44.3 32 55.4v209.2c-19.1 11.1-32 31.7-32 55.4 0 35.3 28.7 64 64 64s64-28.7 64-64c0-16.6-6.3-31.7-16.7-43.1 1.9-4.9 9.7-16.3 29.4-19.3 38.8-5.8 68.9-15.9 92.3-30.8 36-22.8 55-57 55-98.8v-8.6c19.1-11.1 32-31.7 32-55.4zM160 56c22.1 0 40 17.9 40 40s-17.9 40-40 40-40-17.9-40-40 17.9-40 40-40zm0 400c-22.1 0-40-17.9-40-40s17.9-40 40-40 40 17.9 40 40-17.9 40-40 40zm192-256c-22.1 0-40-17.9-40-40s17.9-40 40-40 40 17.9 40 40-17.9 40-40 40z"}))," ","https://github.com/xUnholy/cordova-device-accounts-v2")),(0,r.kt)("h2",null,"Stuck on a Cordova issue?"),(0,r.kt)(c.Z,{className:"cordova-ee-card",header:"Don't waste precious time on plugin issues.",href:"https://ionicframework.com/sales?product_of_interest=Ionic%20Native",mdxType:"DocsCard"},(0,r.kt)("div",null,(0,r.kt)("img",{src:"/docs/icons/native-cordova-bot.png",class:"cordova-ee-img"}),(0,r.kt)("p",null,"If you're building a serious project, you can't afford to spend hours troubleshooting. Ionic\u2019s experts offer premium advisory services for both community plugins and premier plugins."),(0,r.kt)(i.Z,{className:"native-ee-detail",mdxType:"DocsButton"},"Contact Us Today!"))),(0,r.kt)("h2",{id:"installation"},(0,r.kt)("a",{href:"#installation"},"Installation")),(0,r.kt)(s.Z,{groupId:"runtime",defaultValue:"Capacitor",values:[{value:"Capacitor",label:"Capacitor"},{value:"Cordova",label:"Cordova"},{value:"Enterprise",label:"Enterprise"}],mdxType:"Tabs"},(0,r.kt)(l.Z,{value:"Capacitor",mdxType:"TabItem"},(0,r.kt)(u.Z,{className:"language-shell",mdxType:"CodeBlock"},"$ npm install cordova-device-accounts-v2 ","\n","$ npm install @awesome-cordova-plugins/device-accounts ","\n","$ ionic cap sync")),(0,r.kt)(l.Z,{value:"Cordova",mdxType:"TabItem"},(0,r.kt)(u.Z,{className:"language-shell",mdxType:"CodeBlock"},"$ ionic cordova plugin add cordova-device-accounts-v2 ","\n","$ npm install @awesome-cordova-plugins/device-accounts ","\n")),(0,r.kt)(l.Z,{value:"Enterprise",mdxType:"TabItem"},(0,r.kt)("blockquote",null,"Ionic Enterprise comes with fully supported and maintained plugins from the Ionic Team. \xa0",(0,r.kt)("a",{class:"btn",href:"https://ionic.io/docs/premier-plugins"},"Learn More")," or if you're interested in an enterprise version of this plugin ",(0,r.kt)("a",{class:"btn",href:"https://ionicframework.com/sales?product_of_interest=Ionic%20Enterprise%20Engine"},"Contact Us")))),(0,r.kt)("h2",{id:"supported-platforms"},"Supported Platforms"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Android")),(0,r.kt)("h2",{id:"usage"},"Usage"),(0,r.kt)("h3",{id:"react"},"React"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/developer/docs/v5/native/community#react"},"Learn more about using Ionic Native components in React")),(0,r.kt)("h3",{id:"angular"},"Angular"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx"},"import { DeviceAccounts } from '@awesome-cordova-plugins/device-accounts/ngx';\n\nconstructor(private deviceAccounts: DeviceAccounts) { }\n\n...\n\nthis.deviceAccounts.get()\n  .then(accounts => console.log(accounts))\n  .catch(error => console.error(error));\n\n")))}g.isMDXComponent=!0}}]);