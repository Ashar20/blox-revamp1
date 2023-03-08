"use strict";(self.webpackChunkionic_docs=self.webpackChunkionic_docs||[]).push([[76903],{58215:function(e,n,r){var t=r(67294);n.Z=function(e){var n=e.children,r=e.hidden,a=e.className;return t.createElement("div",{role:"tabpanel",hidden:r,className:a},n)}},26396:function(e,n,r){r.d(n,{Z:function(){return v}});var t=r(87462),a=r(67294),o=r(72389),i=r(79443);var c=function(){var e=(0,a.useContext)(i.Z);if(null==e)throw new Error('"useUserPreferencesContext" is used outside of "Layout" component.');return e},s=r(89521),l=r(86010),u="tabItem_1uMI";function d(e){var n,r,t,o=e.lazy,i=e.block,d=e.defaultValue,v=e.values,m=e.groupId,p=e.className,f=a.Children.map(e.children,(function(e){if((0,a.isValidElement)(e)&&void 0!==e.props.value)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),h=null!=v?v:f.map((function(e){var n=e.props;return{value:n.value,label:n.label}})),g=(0,s.lx)(h,(function(e,n){return e.value===n.value}));if(g.length>0)throw new Error('Docusaurus error: Duplicate values "'+g.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var k=null===d?d:null!=(n=null!=d?d:null==(r=f.find((function(e){return e.props.default})))?void 0:r.props.value)?n:null==(t=f[0])?void 0:t.props.value;if(null!==k&&!h.some((function(e){return e.value===k})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+k+'" but none of its children has the corresponding value. Available values are: '+h.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var b=c(),y=b.tabGroupChoices,N=b.setTabGroupChoices,E=(0,a.useState)(k),C=E[0],w=E[1],Z=[],T=(0,s.o5)().blockElementScrollPositionUntilNextRender;if(null!=m){var D=y[m];null!=D&&D!==C&&h.some((function(e){return e.value===D}))&&w(D)}var x=function(e){var n=e.currentTarget,r=Z.indexOf(n),t=h[r].value;t!==C&&(T(n),w(t),null!=m&&N(m,t))},S=function(e){var n,r=null;switch(e.key){case"ArrowRight":var t=Z.indexOf(e.currentTarget)+1;r=Z[t]||Z[0];break;case"ArrowLeft":var a=Z.indexOf(e.currentTarget)-1;r=Z[a]||Z[Z.length-1]}null==(n=r)||n.focus()};return a.createElement("div",{className:"tabs-container"},a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.Z)("tabs",{"tabs--block":i},p)},h.map((function(e){var n=e.value,r=e.label;return a.createElement("li",{role:"tab",tabIndex:C===n?0:-1,"aria-selected":C===n,className:(0,l.Z)("tabs__item",u,{"tabs__item--active":C===n}),key:n,ref:function(e){return Z.push(e)},onKeyDown:S,onFocus:x,onClick:x},null!=r?r:n)}))),o?(0,a.cloneElement)(f.filter((function(e){return e.props.value===C}))[0],{className:"margin-vert--md"}):a.createElement("div",{className:"margin-vert--md"},f.map((function(e,n){return(0,a.cloneElement)(e,{key:n,hidden:e.props.value!==C})}))))}function v(e){var n=(0,o.Z)();return a.createElement(d,(0,t.Z)({key:String(n)},e))}},47758:function(e,n,r){r.d(n,{Z:function(){return s}});var t=r(67294),a=r(86010),o=r(39960),i=r(44996),c="card_3DNo";var s=function(e){var n,r=void 0===e.href,s=void 0!==e.href&&/^http/.test(e.href),l="undefined"===e.header?null:t.createElement("header",{className:"Card-header"},e.header),u=e.hoverIcon||e.icon,d=t.createElement(t.Fragment,null,e.img&&t.createElement("img",{src:(0,i.Z)(e.img),className:"Card-image"}),t.createElement("div",{className:"Card-container"},(e.icon||u)&&t.createElement("div",{className:"Card-icon-row"},e.icon&&t.createElement("img",{src:(0,i.Z)(e.icon),className:"Card-icon Card-icon-default"}),u&&t.createElement("img",{src:(0,i.Z)(u),className:"Card-icon Card-icon-hover"})),e.ionicon&&t.createElement("ion-icon",{name:e.ionicon,className:"Card-ionicon"}),e.iconset&&t.createElement("div",{className:"Card-iconset__container"},e.iconset.split(",").map((function(n,r){return t.createElement("img",{src:(0,i.Z)(n),className:"Card-icon "+(r===e.activeIndex?"Card-icon-active":""),"data-index":r,key:r})}))),e.header&&l,t.createElement("div",{className:"Card-content"},e.children))),v=(0,a.Z)(((n={"Card-with-image":void 0!==e.img,"Card-without-image":void 0===e.img,"Card-size-lg":"lg"===e.size})[e.className]=e.className,n));return r?t.createElement("docs-card",{class:v},t.createElement("div",{className:(0,a.Z)(c,"docs-card")},d)):s?t.createElement("docs-card",{class:v},t.createElement("a",{className:(0,a.Z)(c,"docs-card"),href:e.href,target:"_blank"},d)):t.createElement("docs-card",{class:v},t.createElement(o.default,{to:e.href,className:(0,a.Z)(c,"docs-card")},d))}},88694:function(e,n,r){r.d(n,{Z:function(){return u}});var t=r(87462),a=r(63366),o=r(86010),i=r(67294),c="docsButton_2gXP",s="docsButtonRound_2y-L",l=["href","round"];function u(e){var n,r=e.href,u=e.round,d=void 0!==u&&u,v=(0,a.Z)(e,l);return v.className=(0,o.Z)(((n={})[v.className]=Boolean(v.className),n[c]=!0,n["docs-button"]=!0,n[s]=d,n["docs-button--round"]=d,n)),r?i.createElement("a",(0,t.Z)({href:r,className:"docsButton"},v),v.children):i.createElement("button",(0,t.Z)({className:"docsButton"},v),v.children)}},74723:function(e,n,r){r.r(n),r.d(n,{frontMatter:function(){return v},contentTitle:function(){return m},metadata:function(){return p},toc:function(){return f},default:function(){return g}});var t=r(87462),a=r(63366),o=(r(67294),r(3905)),i=r(47758),c=r(88694),s=r(26396),l=r(58215),u=r(19055),d=["components"],v={sidebar_label:"ServiceDiscovery"},m="ServiceDiscovery",p={unversionedId:"native/service-discovery",id:"version-v5/native/service-discovery",isDocsHomePage:!1,title:"ServiceDiscovery",description:"Simple plugin to get any SSDP / UPnP / DLNA service on a local network",source:"@site/versioned_docs/version-v5/native/service-discovery.md",sourceDirName:"native",slug:"/native/service-discovery",permalink:"/docs/v5/native/service-discovery",editUrl:"https://github.com/ionic-team/ionic-native/edit/master/src/@awesome-cordova-plugins/plugins/service-discovery/index.ts",tags:[],version:"v5",frontMatter:{sidebar_label:"ServiceDiscovery"},sidebar:"version-v5/native",previous:{title:"Screen Orientation",permalink:"/docs/v5/native/screen-orientation"},next:{title:"Shake",permalink:"/docs/v5/native/shake"}},f=[{value:"Supported Platforms",id:"supported-platforms",children:[],level:2},{value:"Usage",id:"usage",children:[{value:"React",id:"react",children:[],level:3},{value:"Angular",id:"angular",children:[],level:3}],level:2}],h={toc:f};function g(e){var n=e.components,r=(0,a.Z)(e,d);return(0,o.kt)("wrapper",(0,t.Z)({},h,r,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"servicediscovery"},"ServiceDiscovery"),(0,o.kt)("p",null,"Simple plugin to get any SSDP / UPnP / DLNA service on a local network"),(0,o.kt)("p",null,(0,o.kt)("a",{href:"https://github.com/scottdermott/cordova-plugin-discovery",target:"_blank",rel:"noopener",className:"git-link"},(0,o.kt)("svg",{viewBox:"0 0 512 512"},(0,o.kt)("path",{d:"M416 160c0-35.3-28.7-64-64-64s-64 28.7-64 64c0 23.7 12.9 44.3 32 55.4v8.6c0 19.9-7.8 33.7-25.3 44.9-15.4 9.8-38.1 17.1-67.5 21.5-14 2.1-25.7 6-35.2 10.7V151.4c19.1-11.1 32-31.7 32-55.4 0-35.3-28.7-64-64-64S96 60.7 96 96c0 23.7 12.9 44.3 32 55.4v209.2c-19.1 11.1-32 31.7-32 55.4 0 35.3 28.7 64 64 64s64-28.7 64-64c0-16.6-6.3-31.7-16.7-43.1 1.9-4.9 9.7-16.3 29.4-19.3 38.8-5.8 68.9-15.9 92.3-30.8 36-22.8 55-57 55-98.8v-8.6c19.1-11.1 32-31.7 32-55.4zM160 56c22.1 0 40 17.9 40 40s-17.9 40-40 40-40-17.9-40-40 17.9-40 40-40zm0 400c-22.1 0-40-17.9-40-40s17.9-40 40-40 40 17.9 40 40-17.9 40-40 40zm192-256c-22.1 0-40-17.9-40-40s17.9-40 40-40 40 17.9 40 40-17.9 40-40 40z"}))," ","https://github.com/scottdermott/cordova-plugin-discovery")),(0,o.kt)("h2",null,"Stuck on a Cordova issue?"),(0,o.kt)(i.Z,{className:"cordova-ee-card",header:"Don't waste precious time on plugin issues.",href:"https://ionicframework.com/sales?product_of_interest=Ionic%20Native",mdxType:"DocsCard"},(0,o.kt)("div",null,(0,o.kt)("img",{src:"/docs/icons/native-cordova-bot.png",class:"cordova-ee-img"}),(0,o.kt)("p",null,"If you're building a serious project, you can't afford to spend hours troubleshooting. Ionic\u2019s experts offer premium advisory services for both community plugins and premier plugins."),(0,o.kt)(c.Z,{className:"native-ee-detail",mdxType:"DocsButton"},"Contact Us Today!"))),(0,o.kt)("h2",{id:"installation"},(0,o.kt)("a",{href:"#installation"},"Installation")),(0,o.kt)(s.Z,{groupId:"runtime",defaultValue:"Capacitor",values:[{value:"Capacitor",label:"Capacitor"},{value:"Cordova",label:"Cordova"},{value:"Enterprise",label:"Enterprise"}],mdxType:"Tabs"},(0,o.kt)(l.Z,{value:"Capacitor",mdxType:"TabItem"},(0,o.kt)(u.Z,{className:"language-shell",mdxType:"CodeBlock"},"$ npm install cordova-plugin-discovery ","\n","$ npm install @awesome-cordova-plugins/service-discovery ","\n","$ ionic cap sync")),(0,o.kt)(l.Z,{value:"Cordova",mdxType:"TabItem"},(0,o.kt)(u.Z,{className:"language-shell",mdxType:"CodeBlock"},"$ ionic cordova plugin add cordova-plugin-discovery ","\n","$ npm install @awesome-cordova-plugins/service-discovery ","\n")),(0,o.kt)(l.Z,{value:"Enterprise",mdxType:"TabItem"},(0,o.kt)("blockquote",null,"Ionic Enterprise comes with fully supported and maintained plugins from the Ionic Team. \xa0",(0,o.kt)("a",{class:"btn",href:"https://ionic.io/docs/premier-plugins"},"Learn More")," or if you're interested in an enterprise version of this plugin ",(0,o.kt)("a",{class:"btn",href:"https://ionicframework.com/sales?product_of_interest=Ionic%20Enterprise%20Engine"},"Contact Us")))),(0,o.kt)("h2",{id:"supported-platforms"},"Supported Platforms"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Android"),(0,o.kt)("li",{parentName:"ul"},"iOS")),(0,o.kt)("h2",{id:"usage"},"Usage"),(0,o.kt)("h3",{id:"react"},"React"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"/docs/v5/native/community#react"},"Learn more about using Ionic Native components in React")),(0,o.kt)("h3",{id:"angular"},"Angular"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx"},"import { ServiceDiscovery } from '@awesome-cordova-plugins/service-discovery';\n\n\nconstructor(private serviceDiscovery: ServiceDiscovery) { }\n\n...\n\n\nthis.serviceDiscovery.getNetworkServices('ssdp:all')\n  .then(devices => console.log(devices))\n  .catch(error => console.error(error));\n\n")))}g.isMDXComponent=!0}}]);