"use strict";(self.webpackChunkionic_docs=self.webpackChunkionic_docs||[]).push([[79808],{58215:function(e,a,t){var n=t(67294);a.Z=function(e){var a=e.children,t=e.hidden,r=e.className;return n.createElement("div",{role:"tabpanel",hidden:t,className:r},a)}},26396:function(e,a,t){t.d(a,{Z:function(){return p}});var n=t(87462),r=t(67294),o=t(72389),l=t(79443);var s=function(){var e=(0,r.useContext)(l.Z);if(null==e)throw new Error('"useUserPreferencesContext" is used outside of "Layout" component.');return e},i=t(89521),c=t(86010),u="tabItem_1uMI";function d(e){var a,t,n,o=e.lazy,l=e.block,d=e.defaultValue,p=e.values,m=e.groupId,v=e.className,f=r.Children.map(e.children,(function(e){if((0,r.isValidElement)(e)&&void 0!==e.props.value)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),h=null!=p?p:f.map((function(e){var a=e.props;return{value:a.value,label:a.label}})),g=(0,i.lx)(h,(function(e,a){return e.value===a.value}));if(g.length>0)throw new Error('Docusaurus error: Duplicate values "'+g.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var k=null===d?d:null!=(a=null!=d?d:null==(t=f.find((function(e){return e.props.default})))?void 0:t.props.value)?a:null==(n=f[0])?void 0:n.props.value;if(null!==k&&!h.some((function(e){return e.value===k})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+k+'" but none of its children has the corresponding value. Available values are: '+h.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var b=s(),y=b.tabGroupChoices,N=b.setTabGroupChoices,C=(0,r.useState)(k),E=C[0],Z=C[1],w=[],T=(0,i.o5)().blockElementScrollPositionUntilNextRender;if(null!=m){var x=y[m];null!=x&&x!==E&&h.some((function(e){return e.value===x}))&&Z(x)}var I=function(e){var a=e.currentTarget,t=w.indexOf(a),n=h[t].value;n!==E&&(T(a),Z(n),null!=m&&N(m,n))},_=function(e){var a,t=null;switch(e.key){case"ArrowRight":var n=w.indexOf(e.currentTarget)+1;t=w[n]||w[0];break;case"ArrowLeft":var r=w.indexOf(e.currentTarget)-1;t=w[r]||w[w.length-1]}null==(a=t)||a.focus()};return r.createElement("div",{className:"tabs-container"},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,c.Z)("tabs",{"tabs--block":l},v)},h.map((function(e){var a=e.value,t=e.label;return r.createElement("li",{role:"tab",tabIndex:E===a?0:-1,"aria-selected":E===a,className:(0,c.Z)("tabs__item",u,{"tabs__item--active":E===a}),key:a,ref:function(e){return w.push(e)},onKeyDown:_,onFocus:I,onClick:I},null!=t?t:a)}))),o?(0,r.cloneElement)(f.filter((function(e){return e.props.value===E}))[0],{className:"margin-vert--md"}):r.createElement("div",{className:"margin-vert--md"},f.map((function(e,a){return(0,r.cloneElement)(e,{key:a,hidden:e.props.value!==E})}))))}function p(e){var a=(0,o.Z)();return r.createElement(d,(0,n.Z)({key:String(a)},e))}},47758:function(e,a,t){t.d(a,{Z:function(){return i}});var n=t(67294),r=t(86010),o=t(39960),l=t(44996),s="card_3DNo";var i=function(e){var a,t=void 0===e.href,i=void 0!==e.href&&/^http/.test(e.href),c="undefined"===e.header?null:n.createElement("header",{className:"Card-header"},e.header),u=e.hoverIcon||e.icon,d=n.createElement(n.Fragment,null,e.img&&n.createElement("img",{src:(0,l.Z)(e.img),className:"Card-image"}),n.createElement("div",{className:"Card-container"},(e.icon||u)&&n.createElement("div",{className:"Card-icon-row"},e.icon&&n.createElement("img",{src:(0,l.Z)(e.icon),className:"Card-icon Card-icon-default"}),u&&n.createElement("img",{src:(0,l.Z)(u),className:"Card-icon Card-icon-hover"})),e.ionicon&&n.createElement("ion-icon",{name:e.ionicon,className:"Card-ionicon"}),e.iconset&&n.createElement("div",{className:"Card-iconset__container"},e.iconset.split(",").map((function(a,t){return n.createElement("img",{src:(0,l.Z)(a),className:"Card-icon "+(t===e.activeIndex?"Card-icon-active":""),"data-index":t,key:t})}))),e.header&&c,n.createElement("div",{className:"Card-content"},e.children))),p=(0,r.Z)(((a={"Card-with-image":void 0!==e.img,"Card-without-image":void 0===e.img,"Card-size-lg":"lg"===e.size})[e.className]=e.className,a));return t?n.createElement("docs-card",{class:p},n.createElement("div",{className:(0,r.Z)(s,"docs-card")},d)):i?n.createElement("docs-card",{class:p},n.createElement("a",{className:(0,r.Z)(s,"docs-card"),href:e.href,target:"_blank"},d)):n.createElement("docs-card",{class:p},n.createElement(o.default,{to:e.href,className:(0,r.Z)(s,"docs-card")},d))}},88694:function(e,a,t){t.d(a,{Z:function(){return u}});var n=t(87462),r=t(63366),o=t(86010),l=t(67294),s="docsButton_2gXP",i="docsButtonRound_2y-L",c=["href","round"];function u(e){var a,t=e.href,u=e.round,d=void 0!==u&&u,p=(0,r.Z)(e,c);return p.className=(0,o.Z)(((a={})[p.className]=Boolean(p.className),a[s]=!0,a["docs-button"]=!0,a[i]=d,a["docs-button--round"]=d,a)),t?l.createElement("a",(0,n.Z)({href:t,className:"docsButton"},p),p.children):l.createElement("button",(0,n.Z)({className:"docsButton"},p),p.children)}},1686:function(e,a,t){t.r(a),t.d(a,{frontMatter:function(){return p},contentTitle:function(){return m},metadata:function(){return v},toc:function(){return f},default:function(){return g}});var n=t(87462),r=t(63366),o=(t(67294),t(3905)),l=t(47758),s=t(88694),i=t(26396),c=t(58215),u=t(19055),d=["components"],p={sidebar_label:"Appsflyer"},m="Appsflyer",v={unversionedId:"native/appsflyer",id:"version-v5/native/appsflyer",isDocsHomePage:!1,title:"Appsflyer",description:"Appsflyer Cordova SDK support for Attribution",source:"@site/versioned_docs/version-v5/native/appsflyer.md",sourceDirName:"native",slug:"/native/appsflyer",permalink:"/docs/v5/native/appsflyer",editUrl:"https://github.com/ionic-team/ionic-native/edit/master/src/@awesome-cordova-plugins/plugins/appsflyer/index.ts",tags:[],version:"v5",frontMatter:{sidebar_label:"Appsflyer"},sidebar:"version-v5/native",previous:{title:"Apple Wallet",permalink:"/docs/v5/native/apple-wallet"},next:{title:"Background Fetch",permalink:"/docs/v5/native/background-fetch"}},f=[{value:"Supported Platforms",id:"supported-platforms",children:[],level:2},{value:"Usage",id:"usage",children:[{value:"React",id:"react",children:[],level:3},{value:"Angular",id:"angular",children:[],level:3}],level:2}],h={toc:f};function g(e){var a=e.components,t=(0,r.Z)(e,d);return(0,o.kt)("wrapper",(0,n.Z)({},h,t,{components:a,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"appsflyer"},"Appsflyer"),(0,o.kt)("p",null,"Appsflyer Cordova SDK support for Attribution"),(0,o.kt)("p",null,(0,o.kt)("a",{href:"https://github.com/AppsFlyerSDK/cordova-plugin-appsflyer-sdk",target:"_blank",rel:"noopener",className:"git-link"},(0,o.kt)("svg",{viewBox:"0 0 512 512"},(0,o.kt)("path",{d:"M416 160c0-35.3-28.7-64-64-64s-64 28.7-64 64c0 23.7 12.9 44.3 32 55.4v8.6c0 19.9-7.8 33.7-25.3 44.9-15.4 9.8-38.1 17.1-67.5 21.5-14 2.1-25.7 6-35.2 10.7V151.4c19.1-11.1 32-31.7 32-55.4 0-35.3-28.7-64-64-64S96 60.7 96 96c0 23.7 12.9 44.3 32 55.4v209.2c-19.1 11.1-32 31.7-32 55.4 0 35.3 28.7 64 64 64s64-28.7 64-64c0-16.6-6.3-31.7-16.7-43.1 1.9-4.9 9.7-16.3 29.4-19.3 38.8-5.8 68.9-15.9 92.3-30.8 36-22.8 55-57 55-98.8v-8.6c19.1-11.1 32-31.7 32-55.4zM160 56c22.1 0 40 17.9 40 40s-17.9 40-40 40-40-17.9-40-40 17.9-40 40-40zm0 400c-22.1 0-40-17.9-40-40s17.9-40 40-40 40 17.9 40 40-17.9 40-40 40zm192-256c-22.1 0-40-17.9-40-40s17.9-40 40-40 40 17.9 40 40-17.9 40-40 40z"}))," ","https://github.com/AppsFlyerSDK/cordova-plugin-appsflyer-sdk")),(0,o.kt)("h2",null,"Stuck on a Cordova issue?"),(0,o.kt)(l.Z,{className:"cordova-ee-card",header:"Don't waste precious time on plugin issues.",href:"https://ionicframework.com/sales?product_of_interest=Ionic%20Native",mdxType:"DocsCard"},(0,o.kt)("div",null,(0,o.kt)("img",{src:"/docs/icons/native-cordova-bot.png",class:"cordova-ee-img"}),(0,o.kt)("p",null,"If you're building a serious project, you can't afford to spend hours troubleshooting. Ionic\u2019s experts offer premium advisory services for both community plugins and premier plugins."),(0,o.kt)(s.Z,{className:"native-ee-detail",mdxType:"DocsButton"},"Contact Us Today!"))),(0,o.kt)("h2",{id:"installation"},(0,o.kt)("a",{href:"#installation"},"Installation")),(0,o.kt)(i.Z,{groupId:"runtime",defaultValue:"Capacitor",values:[{value:"Capacitor",label:"Capacitor"},{value:"Cordova",label:"Cordova"},{value:"Enterprise",label:"Enterprise"}],mdxType:"Tabs"},(0,o.kt)(c.Z,{value:"Capacitor",mdxType:"TabItem"},(0,o.kt)(u.Z,{className:"language-shell",mdxType:"CodeBlock"},"$ npm install cordova-plugin-appsflyer-sdk ","\n","$ npm install @awesome-cordova-plugins/appsflyer ","\n","$ ionic cap sync")),(0,o.kt)(c.Z,{value:"Cordova",mdxType:"TabItem"},(0,o.kt)(u.Z,{className:"language-shell",mdxType:"CodeBlock"},"$ ionic cordova plugin add cordova-plugin-appsflyer-sdk ","\n","$ npm install @awesome-cordova-plugins/appsflyer ","\n")),(0,o.kt)(c.Z,{value:"Enterprise",mdxType:"TabItem"},(0,o.kt)("blockquote",null,"Ionic Enterprise comes with fully supported and maintained plugins from the Ionic Team. \xa0",(0,o.kt)("a",{class:"btn",href:"https://ionic.io/docs/premier-plugins"},"Learn More")," or if you're interested in an enterprise version of this plugin ",(0,o.kt)("a",{class:"btn",href:"https://ionicframework.com/sales?product_of_interest=Ionic%20Enterprise%20Engine"},"Contact Us")))),(0,o.kt)("h2",{id:"supported-platforms"},"Supported Platforms"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"iOS"),(0,o.kt)("li",{parentName:"ul"},"Android")),(0,o.kt)("h2",{id:"usage"},"Usage"),(0,o.kt)("h3",{id:"react"},"React"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"/docs/v5/native/community#react"},"Learn more about using Ionic Native components in React")),(0,o.kt)("h3",{id:"angular"},"Angular"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx"},"import { Appsflyer } from '@awesome-cordova-plugins/appsflyer/ngx';\n\n\nconstructor(private appsflyer: Appsflyer) { }\n\n...\n\n\nthis.appsflyer.initSdk(options);\n\n")))}g.isMDXComponent=!0}}]);