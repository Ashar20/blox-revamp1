"use strict";(self.webpackChunkionic_docs=self.webpackChunkionic_docs||[]).push([[94050],{58215:function(e,t,n){var a=n(67294);t.Z=function(e){var t=e.children,n=e.hidden,o=e.className;return a.createElement("div",{role:"tabpanel",hidden:n,className:o},t)}},26396:function(e,t,n){n.d(t,{Z:function(){return m}});var a=n(87462),o=n(67294),r=n(72389),i=n(79443);var s=function(){var e=(0,o.useContext)(i.Z);if(null==e)throw new Error('"useUserPreferencesContext" is used outside of "Layout" component.');return e},l=n(89521),c=n(86010),u="tabItem_1uMI";function d(e){var t,n,a,r=e.lazy,i=e.block,d=e.defaultValue,m=e.values,p=e.groupId,v=e.className,h=o.Children.map(e.children,(function(e){if((0,o.isValidElement)(e)&&void 0!==e.props.value)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),f=null!=m?m:h.map((function(e){var t=e.props;return{value:t.value,label:t.label}})),g=(0,l.lx)(f,(function(e,t){return e.value===t.value}));if(g.length>0)throw new Error('Docusaurus error: Duplicate values "'+g.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var b=null===d?d:null!=(t=null!=d?d:null==(n=h.find((function(e){return e.props.default})))?void 0:n.props.value)?t:null==(a=h[0])?void 0:a.props.value;if(null!==b&&!f.some((function(e){return e.value===b})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+b+'" but none of its children has the corresponding value. Available values are: '+f.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var k=s(),N=k.tabGroupChoices,E=k.setTabGroupChoices,C=(0,o.useState)(b),y=C[0],w=C[1],T=[],Z=(0,l.o5)().blockElementScrollPositionUntilNextRender;if(null!=p){var x=N[p];null!=x&&x!==y&&f.some((function(e){return e.value===x}))&&w(x)}var S=function(e){var t=e.currentTarget,n=T.indexOf(t),a=f[n].value;a!==y&&(Z(t),w(a),null!=p&&E(p,a))},I=function(e){var t,n=null;switch(e.key){case"ArrowRight":var a=T.indexOf(e.currentTarget)+1;n=T[a]||T[0];break;case"ArrowLeft":var o=T.indexOf(e.currentTarget)-1;n=T[o]||T[T.length-1]}null==(t=n)||t.focus()};return o.createElement("div",{className:"tabs-container"},o.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,c.Z)("tabs",{"tabs--block":i},v)},f.map((function(e){var t=e.value,n=e.label;return o.createElement("li",{role:"tab",tabIndex:y===t?0:-1,"aria-selected":y===t,className:(0,c.Z)("tabs__item",u,{"tabs__item--active":y===t}),key:t,ref:function(e){return T.push(e)},onKeyDown:I,onFocus:S,onClick:S},null!=n?n:t)}))),r?(0,o.cloneElement)(h.filter((function(e){return e.props.value===y}))[0],{className:"margin-vert--md"}):o.createElement("div",{className:"margin-vert--md"},h.map((function(e,t){return(0,o.cloneElement)(e,{key:t,hidden:e.props.value!==y})}))))}function m(e){var t=(0,r.Z)();return o.createElement(d,(0,a.Z)({key:String(t)},e))}},47758:function(e,t,n){n.d(t,{Z:function(){return l}});var a=n(67294),o=n(86010),r=n(39960),i=n(44996),s="card_3DNo";var l=function(e){var t,n=void 0===e.href,l=void 0!==e.href&&/^http/.test(e.href),c="undefined"===e.header?null:a.createElement("header",{className:"Card-header"},e.header),u=e.hoverIcon||e.icon,d=a.createElement(a.Fragment,null,e.img&&a.createElement("img",{src:(0,i.Z)(e.img),className:"Card-image"}),a.createElement("div",{className:"Card-container"},(e.icon||u)&&a.createElement("div",{className:"Card-icon-row"},e.icon&&a.createElement("img",{src:(0,i.Z)(e.icon),className:"Card-icon Card-icon-default"}),u&&a.createElement("img",{src:(0,i.Z)(u),className:"Card-icon Card-icon-hover"})),e.ionicon&&a.createElement("ion-icon",{name:e.ionicon,className:"Card-ionicon"}),e.iconset&&a.createElement("div",{className:"Card-iconset__container"},e.iconset.split(",").map((function(t,n){return a.createElement("img",{src:(0,i.Z)(t),className:"Card-icon "+(n===e.activeIndex?"Card-icon-active":""),"data-index":n,key:n})}))),e.header&&c,a.createElement("div",{className:"Card-content"},e.children))),m=(0,o.Z)(((t={"Card-with-image":void 0!==e.img,"Card-without-image":void 0===e.img,"Card-size-lg":"lg"===e.size})[e.className]=e.className,t));return n?a.createElement("docs-card",{class:m},a.createElement("div",{className:(0,o.Z)(s,"docs-card")},d)):l?a.createElement("docs-card",{class:m},a.createElement("a",{className:(0,o.Z)(s,"docs-card"),href:e.href,target:"_blank"},d)):a.createElement("docs-card",{class:m},a.createElement(r.default,{to:e.href,className:(0,o.Z)(s,"docs-card")},d))}},88694:function(e,t,n){n.d(t,{Z:function(){return u}});var a=n(87462),o=n(63366),r=n(86010),i=n(67294),s="docsButton_2gXP",l="docsButtonRound_2y-L",c=["href","round"];function u(e){var t,n=e.href,u=e.round,d=void 0!==u&&u,m=(0,o.Z)(e,c);return m.className=(0,r.Z)(((t={})[m.className]=Boolean(m.className),t[s]=!0,t["docs-button"]=!0,t[l]=d,t["docs-button--round"]=d,t)),n?i.createElement("a",(0,a.Z)({href:n,className:"docsButton"},m),m.children):i.createElement("button",(0,a.Z)({className:"docsButton"},m),m.children)}},88802:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return m},contentTitle:function(){return p},metadata:function(){return v},toc:function(){return h},default:function(){return g}});var a=n(87462),o=n(63366),r=(n(67294),n(3905)),i=n(47758),s=n(88694),l=n(26396),c=n(58215),u=n(19055),d=["components"],m={sidebar_label:"Action Sheet"},p="Action Sheet",v={unversionedId:"native/action-sheet",id:"version-v5/native/action-sheet",isDocsHomePage:!1,title:"Action Sheet",description:"The ActionSheet plugin shows a native list of options the user can choose from.",source:"@site/versioned_docs/version-v5/native/action-sheet.md",sourceDirName:"native",slug:"/native/action-sheet",permalink:"/developer/docs/v5/native/action-sheet",editUrl:"https://github.com/ionic-team/ionic-native/edit/master/src/@awesome-cordova-plugins/plugins/action-sheet/index.ts",tags:[],version:"v5",frontMatter:{sidebar_label:"Action Sheet"},sidebar:"version-v5/native",previous:{title:"ABBYY Real-Time Recognition",permalink:"/developer/docs/v5/native/abbyy-rtr"},next:{title:"Adjust",permalink:"/developer/docs/v5/native/adjust"}},h=[{value:"Supported Platforms",id:"supported-platforms",children:[],level:2},{value:"Usage",id:"usage",children:[{value:"React",id:"react",children:[],level:3},{value:"Angular",id:"angular",children:[],level:3}],level:2}],f={toc:h};function g(e){var t=e.components,n=(0,o.Z)(e,d);return(0,r.kt)("wrapper",(0,a.Z)({},f,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"action-sheet"},"Action Sheet"),(0,r.kt)("p",null,"The ActionSheet plugin shows a native list of options the user can choose from."),(0,r.kt)("p",null,"Requires Cordova plugin: ",(0,r.kt)("inlineCode",{parentName:"p"},"cordova-plugin-actionsheet"),". For more info, please see the ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/EddyVerbruggen/cordova-plugin-actionsheet"},"ActionSheet plugin docs"),"."),(0,r.kt)("p",null,(0,r.kt)("a",{href:"https://github.com/EddyVerbruggen/cordova-plugin-actionsheet",target:"_blank",rel:"noopener",className:"git-link"},(0,r.kt)("svg",{viewBox:"0 0 512 512"},(0,r.kt)("path",{d:"M416 160c0-35.3-28.7-64-64-64s-64 28.7-64 64c0 23.7 12.9 44.3 32 55.4v8.6c0 19.9-7.8 33.7-25.3 44.9-15.4 9.8-38.1 17.1-67.5 21.5-14 2.1-25.7 6-35.2 10.7V151.4c19.1-11.1 32-31.7 32-55.4 0-35.3-28.7-64-64-64S96 60.7 96 96c0 23.7 12.9 44.3 32 55.4v209.2c-19.1 11.1-32 31.7-32 55.4 0 35.3 28.7 64 64 64s64-28.7 64-64c0-16.6-6.3-31.7-16.7-43.1 1.9-4.9 9.7-16.3 29.4-19.3 38.8-5.8 68.9-15.9 92.3-30.8 36-22.8 55-57 55-98.8v-8.6c19.1-11.1 32-31.7 32-55.4zM160 56c22.1 0 40 17.9 40 40s-17.9 40-40 40-40-17.9-40-40 17.9-40 40-40zm0 400c-22.1 0-40-17.9-40-40s17.9-40 40-40 40 17.9 40 40-17.9 40-40 40zm192-256c-22.1 0-40-17.9-40-40s17.9-40 40-40 40 17.9 40 40-17.9 40-40 40z"}))," ","https://github.com/EddyVerbruggen/cordova-plugin-actionsheet")),(0,r.kt)("h2",null,"Stuck on a Cordova issue?"),(0,r.kt)(i.Z,{className:"cordova-ee-card",header:"Don't waste precious time on plugin issues.",href:"https://ionicframework.com/sales?product_of_interest=Ionic%20Native",mdxType:"DocsCard"},(0,r.kt)("div",null,(0,r.kt)("img",{src:"/docs/icons/native-cordova-bot.png",class:"cordova-ee-img"}),(0,r.kt)("p",null,"If you're building a serious project, you can't afford to spend hours troubleshooting. Ionic\u2019s experts offer premium advisory services for both community plugins and premier plugins."),(0,r.kt)(s.Z,{className:"native-ee-detail",mdxType:"DocsButton"},"Contact Us Today!"))),(0,r.kt)("h2",{id:"installation"},(0,r.kt)("a",{href:"#installation"},"Installation")),(0,r.kt)(l.Z,{groupId:"runtime",defaultValue:"Capacitor",values:[{value:"Capacitor",label:"Capacitor"},{value:"Cordova",label:"Cordova"},{value:"Enterprise",label:"Enterprise"}],mdxType:"Tabs"},(0,r.kt)(c.Z,{value:"Capacitor",mdxType:"TabItem"},(0,r.kt)(u.Z,{className:"language-shell",mdxType:"CodeBlock"},"$ npm install cordova-plugin-actionsheet ","\n","$ npm install @awesome-cordova-plugins/action-sheet ","\n","$ ionic cap sync")),(0,r.kt)(c.Z,{value:"Cordova",mdxType:"TabItem"},(0,r.kt)(u.Z,{className:"language-shell",mdxType:"CodeBlock"},"$ ionic cordova plugin add cordova-plugin-actionsheet ","\n","$ npm install @awesome-cordova-plugins/action-sheet ","\n")),(0,r.kt)(c.Z,{value:"Enterprise",mdxType:"TabItem"},(0,r.kt)("blockquote",null,"Ionic Enterprise comes with fully supported and maintained plugins from the Ionic Team. \xa0",(0,r.kt)("a",{class:"btn",href:"https://ionic.io/docs/premier-plugins"},"Learn More")," or if you're interested in an enterprise version of this plugin ",(0,r.kt)("a",{class:"btn",href:"https://ionicframework.com/sales?product_of_interest=Ionic%20Enterprise%20Engine"},"Contact Us")))),(0,r.kt)("h2",{id:"supported-platforms"},"Supported Platforms"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Android"),(0,r.kt)("li",{parentName:"ul"},"Browser"),(0,r.kt)("li",{parentName:"ul"},"iOS"),(0,r.kt)("li",{parentName:"ul"},"Windows"),(0,r.kt)("li",{parentName:"ul"},"Windows Phone 8")),(0,r.kt)("h2",{id:"usage"},"Usage"),(0,r.kt)("h3",{id:"react"},"React"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/developer/docs/v5/native/community#react"},"Learn more about using Ionic Native components in React")),(0,r.kt)("h3",{id:"angular"},"Angular"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx"},"import { ActionSheet, ActionSheetOptions } from '@awesome-cordova-plugins/action-sheet/ngx';\n\nconstructor(private actionSheet: ActionSheet) { }\n\n...\n\n\nlet buttonLabels = ['Share via Facebook', 'Share via Twitter'];\n\nconst options: ActionSheetOptions = {\n  title: 'What do you want with this image?',\n  subtitle: 'Choose an action',\n  buttonLabels: buttonLabels,\n  addCancelButtonWithLabel: 'Cancel',\n  addDestructiveButtonWithLabel: 'Delete',\n  androidTheme: this.actionSheet.ANDROID_THEMES.THEME_HOLO_DARK,\n  destructiveButtonLast: true\n}\n\nthis.actionSheet.show(options).then((buttonIndex: number) => {\n  console.log('Button pressed: ' + buttonIndex);\n});\n")))}g.isMDXComponent=!0}}]);