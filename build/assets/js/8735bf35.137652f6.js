"use strict";(self.webpackChunkionic_docs=self.webpackChunkionic_docs||[]).push([[93597],{58215:function(e,n,t){var a=t(67294);n.Z=function(e){var n=e.children,t=e.hidden,r=e.className;return a.createElement("div",{role:"tabpanel",hidden:t,className:r},n)}},26396:function(e,n,t){t.d(n,{Z:function(){return m}});var a=t(87462),r=t(67294),o=t(72389),i=t(79443);var s=function(){var e=(0,r.useContext)(i.Z);if(null==e)throw new Error('"useUserPreferencesContext" is used outside of "Layout" component.');return e},l=t(89521),c=t(86010),u="tabItem_1uMI";function d(e){var n,t,a,o=e.lazy,i=e.block,d=e.defaultValue,m=e.values,p=e.groupId,v=e.className,f=r.Children.map(e.children,(function(e){if((0,r.isValidElement)(e)&&void 0!==e.props.value)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),h=null!=m?m:f.map((function(e){var n=e.props;return{value:n.value,label:n.label}})),g=(0,l.lx)(h,(function(e,n){return e.value===n.value}));if(g.length>0)throw new Error('Docusaurus error: Duplicate values "'+g.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var w=null===d?d:null!=(n=null!=d?d:null==(t=f.find((function(e){return e.props.default})))?void 0:t.props.value)?n:null==(a=f[0])?void 0:a.props.value;if(null!==w&&!h.some((function(e){return e.value===w})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+w+'" but none of its children has the corresponding value. Available values are: '+h.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var y=s(),k=y.tabGroupChoices,b=y.setTabGroupChoices,N=(0,r.useState)(w),E=N[0],C=N[1],Z=[],T=(0,l.o5)().blockElementScrollPositionUntilNextRender;if(null!=p){var x=k[p];null!=x&&x!==E&&h.some((function(e){return e.value===x}))&&C(x)}var I=function(e){var n=e.currentTarget,t=Z.indexOf(n),a=h[t].value;a!==E&&(T(n),C(a),null!=p&&b(p,a))},_=function(e){var n,t=null;switch(e.key){case"ArrowRight":var a=Z.indexOf(e.currentTarget)+1;t=Z[a]||Z[0];break;case"ArrowLeft":var r=Z.indexOf(e.currentTarget)-1;t=Z[r]||Z[Z.length-1]}null==(n=t)||n.focus()};return r.createElement("div",{className:"tabs-container"},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,c.Z)("tabs",{"tabs--block":i},v)},h.map((function(e){var n=e.value,t=e.label;return r.createElement("li",{role:"tab",tabIndex:E===n?0:-1,"aria-selected":E===n,className:(0,c.Z)("tabs__item",u,{"tabs__item--active":E===n}),key:n,ref:function(e){return Z.push(e)},onKeyDown:_,onFocus:I,onClick:I},null!=t?t:n)}))),o?(0,r.cloneElement)(f.filter((function(e){return e.props.value===E}))[0],{className:"margin-vert--md"}):r.createElement("div",{className:"margin-vert--md"},f.map((function(e,n){return(0,r.cloneElement)(e,{key:n,hidden:e.props.value!==E})}))))}function m(e){var n=(0,o.Z)();return r.createElement(d,(0,a.Z)({key:String(n)},e))}},47758:function(e,n,t){t.d(n,{Z:function(){return l}});var a=t(67294),r=t(86010),o=t(39960),i=t(44996),s="card_3DNo";var l=function(e){var n,t=void 0===e.href,l=void 0!==e.href&&/^http/.test(e.href),c="undefined"===e.header?null:a.createElement("header",{className:"Card-header"},e.header),u=e.hoverIcon||e.icon,d=a.createElement(a.Fragment,null,e.img&&a.createElement("img",{src:(0,i.Z)(e.img),className:"Card-image"}),a.createElement("div",{className:"Card-container"},(e.icon||u)&&a.createElement("div",{className:"Card-icon-row"},e.icon&&a.createElement("img",{src:(0,i.Z)(e.icon),className:"Card-icon Card-icon-default"}),u&&a.createElement("img",{src:(0,i.Z)(u),className:"Card-icon Card-icon-hover"})),e.ionicon&&a.createElement("ion-icon",{name:e.ionicon,className:"Card-ionicon"}),e.iconset&&a.createElement("div",{className:"Card-iconset__container"},e.iconset.split(",").map((function(n,t){return a.createElement("img",{src:(0,i.Z)(n),className:"Card-icon "+(t===e.activeIndex?"Card-icon-active":""),"data-index":t,key:t})}))),e.header&&c,a.createElement("div",{className:"Card-content"},e.children))),m=(0,r.Z)(((n={"Card-with-image":void 0!==e.img,"Card-without-image":void 0===e.img,"Card-size-lg":"lg"===e.size})[e.className]=e.className,n));return t?a.createElement("docs-card",{class:m},a.createElement("div",{className:(0,r.Z)(s,"docs-card")},d)):l?a.createElement("docs-card",{class:m},a.createElement("a",{className:(0,r.Z)(s,"docs-card"),href:e.href,target:"_blank"},d)):a.createElement("docs-card",{class:m},a.createElement(o.default,{to:e.href,className:(0,r.Z)(s,"docs-card")},d))}},88694:function(e,n,t){t.d(n,{Z:function(){return u}});var a=t(87462),r=t(63366),o=t(86010),i=t(67294),s="docsButton_2gXP",l="docsButtonRound_2y-L",c=["href","round"];function u(e){var n,t=e.href,u=e.round,d=void 0!==u&&u,m=(0,r.Z)(e,c);return m.className=(0,o.Z)(((n={})[m.className]=Boolean(m.className),n[s]=!0,n["docs-button"]=!0,n[l]=d,n["docs-button--round"]=d,n)),t?i.createElement("a",(0,a.Z)({href:t,className:"docsButton"},m),m.children):i.createElement("button",(0,a.Z)({className:"docsButton"},m),m.children)}},30235:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return m},contentTitle:function(){return p},metadata:function(){return v},toc:function(){return f},default:function(){return g}});var a=t(87462),r=t(63366),o=(t(67294),t(3905)),i=t(47758),s=t(88694),l=t(26396),c=t(58215),u=t(19055),d=["components"],m={title:"System Alert Window Permission"},p=void 0,v={unversionedId:"native/system-alert-window-permission",id:"native/system-alert-window-permission",isDocsHomePage:!1,title:"System Alert Window Permission",description:"This plugin does something",source:"@site/docs/native/system-alert-window-permission.md",sourceDirName:"native",slug:"/native/system-alert-window-permission",permalink:"/docs/native/system-alert-window-permission",editUrl:"https://github.com/ionic-team/ionic-native/edit/master/src/@awesome-cordova-plugins/plugins/system-alert-window-permission/index.ts",tags:[],version:"current",frontMatter:{title:"System Alert Window Permission"},sidebar:"native",previous:{title:"SumUp",permalink:"/docs/native/sum-up"},next:{title:"Taptic Engine",permalink:"/docs/native/taptic-engine"}},f=[{value:"Supported Platforms",id:"supported-platforms",children:[],level:2},{value:"Usage",id:"usage",children:[{value:"React",id:"react",children:[],level:3},{value:"Angular",id:"angular",children:[],level:3}],level:2}],h={toc:f};function g(e){var n=e.components,t=(0,r.Z)(e,d);return(0,o.kt)("wrapper",(0,a.Z)({},h,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"This plugin does something"),(0,o.kt)("p",null,(0,o.kt)("a",{href:"https://github.com/MaximBelov/cordova-plugin-system-alert-window-permission.git",target:"_blank",rel:"noopener",className:"git-link"},(0,o.kt)("svg",{viewBox:"0 0 512 512"},(0,o.kt)("path",{d:"M416 160c0-35.3-28.7-64-64-64s-64 28.7-64 64c0 23.7 12.9 44.3 32 55.4v8.6c0 19.9-7.8 33.7-25.3 44.9-15.4 9.8-38.1 17.1-67.5 21.5-14 2.1-25.7 6-35.2 10.7V151.4c19.1-11.1 32-31.7 32-55.4 0-35.3-28.7-64-64-64S96 60.7 96 96c0 23.7 12.9 44.3 32 55.4v209.2c-19.1 11.1-32 31.7-32 55.4 0 35.3 28.7 64 64 64s64-28.7 64-64c0-16.6-6.3-31.7-16.7-43.1 1.9-4.9 9.7-16.3 29.4-19.3 38.8-5.8 68.9-15.9 92.3-30.8 36-22.8 55-57 55-98.8v-8.6c19.1-11.1 32-31.7 32-55.4zM160 56c22.1 0 40 17.9 40 40s-17.9 40-40 40-40-17.9-40-40 17.9-40 40-40zm0 400c-22.1 0-40-17.9-40-40s17.9-40 40-40 40 17.9 40 40-17.9 40-40 40zm192-256c-22.1 0-40-17.9-40-40s17.9-40 40-40 40 17.9 40 40-17.9 40-40 40z"}))," https://github.com/MaximBelov/cordova-plugin-system-alert-window-permission.git")),(0,o.kt)("h2",null,"Stuck on a Cordova issue?"),(0,o.kt)(i.Z,{className:"cordova-ee-card",header:"Don't waste precious time on plugin issues.",href:"https://ionicframework.com/sales?product_of_interest=Ionic%20Native",mdxType:"DocsCard"},(0,o.kt)("div",null,(0,o.kt)("img",{src:"/docs/icons/native-cordova-bot.png",class:"cordova-ee-img"}),(0,o.kt)("p",null,"If you're building a serious project, you can't afford to spend hours troubleshooting. Ionic\u2019s experts offer premium advisory services for both community plugins and premier plugins."),(0,o.kt)(s.Z,{className:"native-ee-detail",mdxType:"DocsButton"},"Contact Us Today!"))),(0,o.kt)("h2",{id:"installation"},(0,o.kt)("a",{href:"#installation"},"Installation")),(0,o.kt)(l.Z,{defaultValue:"Capacitor",groupId:"runtime",values:[{value:"Capacitor",label:"Capacitor"},{value:"Cordova",label:"Cordova"},{value:"Enterprise",label:"Enterprise"}],mdxType:"Tabs"},(0,o.kt)(c.Z,{value:"Capacitor",mdxType:"TabItem"},(0,o.kt)(u.Z,{className:"language-shell",mdxType:"CodeBlock"},"$ npm install cordova-plugin-system-alert-window-permission ","\n","$ npm install @awesome-cordova-plugins/system-alert-window-permission ","\n","$ ionic cap sync")),(0,o.kt)(c.Z,{value:"Cordova",mdxType:"TabItem"},(0,o.kt)(u.Z,{className:"language-shell",mdxType:"CodeBlock"},"$ ionic cordova plugin add cordova-plugin-system-alert-window-permission ","\n","$ npm install @awesome-cordova-plugins/system-alert-window-permission ","\n")),(0,o.kt)(c.Z,{value:"Enterprise",mdxType:"TabItem"},(0,o.kt)("blockquote",null,"Ionic Enterprise comes with fully supported and maintained plugins from the Ionic Team. \xa0",(0,o.kt)("a",{class:"btn",href:"https://ionic.io/docs/premier-plugins"},"Learn More")," or if you're interested in an enterprise version of this plugin ",(0,o.kt)("a",{class:"btn",href:"https://ionicframework.com/sales?product_of_interest=Ionic%20Enterprise%20Engine"},"Contact Us")))),(0,o.kt)("h2",{id:"supported-platforms"},"Supported Platforms"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Android")),(0,o.kt)("h2",{id:"usage"},"Usage"),(0,o.kt)("h3",{id:"react"},"React"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"/docs/native/community#react"},"Learn more about using Ionic Native components in React")),(0,o.kt)("h3",{id:"angular"},"Angular"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},"import { SystemAlertWindowPermission } from '@awesome-cordova-plugins/system-alert-window-permission/ngx';\n\n\nconstructor(private systemAlertWindowPermission: SystemAlertWindowPermission) { }\n\n...\n\n\nthis.systemAlertWindowPermission.hasPermission()\n  .then((res: any) => console.log(res))\n  .catch((error: any) => console.error(error));\n\nthis.systemAlertWindowPermission.requestPermission()\n  .then((res: any) => console.log(res))\n  .catch((error: any) => console.error(error));\n\n")))}g.isMDXComponent=!0}}]);