"use strict";(self.webpackChunkionic_docs=self.webpackChunkionic_docs||[]).push([[59758],{58215:function(e,a,t){var n=t(67294);a.Z=function(e){var a=e.children,t=e.hidden,r=e.className;return n.createElement("div",{role:"tabpanel",hidden:t,className:r},a)}},26396:function(e,a,t){t.d(a,{Z:function(){return p}});var n=t(87462),r=t(67294),i=t(72389),o=t(79443);var l=function(){var e=(0,r.useContext)(o.Z);if(null==e)throw new Error('"useUserPreferencesContext" is used outside of "Layout" component.');return e},c=t(89521),s=t(86010),u="tabItem_1uMI";function d(e){var a,t,n,i=e.lazy,o=e.block,d=e.defaultValue,p=e.values,m=e.groupId,v=e.className,h=r.Children.map(e.children,(function(e){if((0,r.isValidElement)(e)&&void 0!==e.props.value)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),f=null!=p?p:h.map((function(e){var a=e.props;return{value:a.value,label:a.label}})),g=(0,c.lx)(f,(function(e,a){return e.value===a.value}));if(g.length>0)throw new Error('Docusaurus error: Duplicate values "'+g.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var k=null===d?d:null!=(a=null!=d?d:null==(t=h.find((function(e){return e.props.default})))?void 0:t.props.value)?a:null==(n=h[0])?void 0:n.props.value;if(null!==k&&!f.some((function(e){return e.value===k})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+k+'" but none of its children has the corresponding value. Available values are: '+f.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var b=l(),C=b.tabGroupChoices,N=b.setTabGroupChoices,E=(0,r.useState)(k),y=E[0],Z=E[1],w=[],T=(0,c.o5)().blockElementScrollPositionUntilNextRender;if(null!=m){var x=C[m];null!=x&&x!==y&&f.some((function(e){return e.value===x}))&&Z(x)}var I=function(e){var a=e.currentTarget,t=w.indexOf(a),n=f[t].value;n!==y&&(T(a),Z(n),null!=m&&N(m,n))},_=function(e){var a,t=null;switch(e.key){case"ArrowRight":var n=w.indexOf(e.currentTarget)+1;t=w[n]||w[0];break;case"ArrowLeft":var r=w.indexOf(e.currentTarget)-1;t=w[r]||w[w.length-1]}null==(a=t)||a.focus()};return r.createElement("div",{className:"tabs-container"},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,s.Z)("tabs",{"tabs--block":o},v)},f.map((function(e){var a=e.value,t=e.label;return r.createElement("li",{role:"tab",tabIndex:y===a?0:-1,"aria-selected":y===a,className:(0,s.Z)("tabs__item",u,{"tabs__item--active":y===a}),key:a,ref:function(e){return w.push(e)},onKeyDown:_,onFocus:I,onClick:I},null!=t?t:a)}))),i?(0,r.cloneElement)(h.filter((function(e){return e.props.value===y}))[0],{className:"margin-vert--md"}):r.createElement("div",{className:"margin-vert--md"},h.map((function(e,a){return(0,r.cloneElement)(e,{key:a,hidden:e.props.value!==y})}))))}function p(e){var a=(0,i.Z)();return r.createElement(d,(0,n.Z)({key:String(a)},e))}},47758:function(e,a,t){t.d(a,{Z:function(){return c}});var n=t(67294),r=t(86010),i=t(39960),o=t(44996),l="card_3DNo";var c=function(e){var a,t=void 0===e.href,c=void 0!==e.href&&/^http/.test(e.href),s="undefined"===e.header?null:n.createElement("header",{className:"Card-header"},e.header),u=e.hoverIcon||e.icon,d=n.createElement(n.Fragment,null,e.img&&n.createElement("img",{src:(0,o.Z)(e.img),className:"Card-image"}),n.createElement("div",{className:"Card-container"},(e.icon||u)&&n.createElement("div",{className:"Card-icon-row"},e.icon&&n.createElement("img",{src:(0,o.Z)(e.icon),className:"Card-icon Card-icon-default"}),u&&n.createElement("img",{src:(0,o.Z)(u),className:"Card-icon Card-icon-hover"})),e.ionicon&&n.createElement("ion-icon",{name:e.ionicon,className:"Card-ionicon"}),e.iconset&&n.createElement("div",{className:"Card-iconset__container"},e.iconset.split(",").map((function(a,t){return n.createElement("img",{src:(0,o.Z)(a),className:"Card-icon "+(t===e.activeIndex?"Card-icon-active":""),"data-index":t,key:t})}))),e.header&&s,n.createElement("div",{className:"Card-content"},e.children))),p=(0,r.Z)(((a={"Card-with-image":void 0!==e.img,"Card-without-image":void 0===e.img,"Card-size-lg":"lg"===e.size})[e.className]=e.className,a));return t?n.createElement("docs-card",{class:p},n.createElement("div",{className:(0,r.Z)(l,"docs-card")},d)):c?n.createElement("docs-card",{class:p},n.createElement("a",{className:(0,r.Z)(l,"docs-card"),href:e.href,target:"_blank"},d)):n.createElement("docs-card",{class:p},n.createElement(i.default,{to:e.href,className:(0,r.Z)(l,"docs-card")},d))}},88694:function(e,a,t){t.d(a,{Z:function(){return u}});var n=t(87462),r=t(63366),i=t(86010),o=t(67294),l="docsButton_2gXP",c="docsButtonRound_2y-L",s=["href","round"];function u(e){var a,t=e.href,u=e.round,d=void 0!==u&&u,p=(0,r.Z)(e,s);return p.className=(0,i.Z)(((a={})[p.className]=Boolean(p.className),a[l]=!0,a["docs-button"]=!0,a[c]=d,a["docs-button--round"]=d,a)),t?o.createElement("a",(0,n.Z)({href:t,className:"docsButton"},p),p.children):o.createElement("button",(0,n.Z)({className:"docsButton"},p),p.children)}},10920:function(e,a,t){t.r(a),t.d(a,{frontMatter:function(){return p},contentTitle:function(){return m},metadata:function(){return v},toc:function(){return h},default:function(){return g}});var n=t(87462),r=t(63366),i=(t(67294),t(3905)),o=t(47758),l=t(88694),c=t(26396),s=t(58215),u=t(19055),d=["components"],p={sidebar_label:"Media Capture"},m="Media Capture",v={unversionedId:"native/media-capture",id:"version-v5/native/media-capture",isDocsHomePage:!1,title:"Media Capture",description:"This plugin provides access to the device's audio, image, and video capture capabilities.",source:"@site/versioned_docs/version-v5/native/media-capture.md",sourceDirName:"native",slug:"/native/media-capture",permalink:"/developer/docs/v5/native/media-capture",editUrl:"https://github.com/ionic-team/ionic-native/edit/master/src/@awesome-cordova-plugins/plugins/media-capture/index.ts",tags:[],version:"v5",frontMatter:{sidebar_label:"Media Capture"},sidebar:"version-v5/native",previous:{title:"Lottie Splash Screen",permalink:"/developer/docs/v5/native/lottie-splash-screen"},next:{title:"Media",permalink:"/developer/docs/v5/native/media"}},h=[{value:"Supported Platforms",id:"supported-platforms",children:[],level:2},{value:"Usage",id:"usage",children:[{value:"React",id:"react",children:[],level:3},{value:"Angular",id:"angular",children:[],level:3}],level:2}],f={toc:h};function g(e){var a=e.components,t=(0,r.Z)(e,d);return(0,i.kt)("wrapper",(0,n.Z)({},f,t,{components:a,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"media-capture"},"Media Capture"),(0,i.kt)("p",null,"This plugin provides access to the device's audio, image, and video capture capabilities."),(0,i.kt)("p",null,"Requires Cordova plugin: ",(0,i.kt)("inlineCode",{parentName:"p"},"cordova-plugin-media-capture"),". For more info, please see the ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/apache/cordova-plugin-media-capture"},"Media Capture plugin docs"),"."),(0,i.kt)("p",null,(0,i.kt)("a",{href:"https://github.com/apache/cordova-plugin-media-capture",target:"_blank",rel:"noopener",className:"git-link"},(0,i.kt)("svg",{viewBox:"0 0 512 512"},(0,i.kt)("path",{d:"M416 160c0-35.3-28.7-64-64-64s-64 28.7-64 64c0 23.7 12.9 44.3 32 55.4v8.6c0 19.9-7.8 33.7-25.3 44.9-15.4 9.8-38.1 17.1-67.5 21.5-14 2.1-25.7 6-35.2 10.7V151.4c19.1-11.1 32-31.7 32-55.4 0-35.3-28.7-64-64-64S96 60.7 96 96c0 23.7 12.9 44.3 32 55.4v209.2c-19.1 11.1-32 31.7-32 55.4 0 35.3 28.7 64 64 64s64-28.7 64-64c0-16.6-6.3-31.7-16.7-43.1 1.9-4.9 9.7-16.3 29.4-19.3 38.8-5.8 68.9-15.9 92.3-30.8 36-22.8 55-57 55-98.8v-8.6c19.1-11.1 32-31.7 32-55.4zM160 56c22.1 0 40 17.9 40 40s-17.9 40-40 40-40-17.9-40-40 17.9-40 40-40zm0 400c-22.1 0-40-17.9-40-40s17.9-40 40-40 40 17.9 40 40-17.9 40-40 40zm192-256c-22.1 0-40-17.9-40-40s17.9-40 40-40 40 17.9 40 40-17.9 40-40 40z"}))," ","https://github.com/apache/cordova-plugin-media-capture")),(0,i.kt)("h2",null,"Stuck on a Cordova issue?"),(0,i.kt)(o.Z,{className:"cordova-ee-card",header:"Don't waste precious time on plugin issues.",href:"https://ionicframework.com/sales?product_of_interest=Ionic%20Native",mdxType:"DocsCard"},(0,i.kt)("div",null,(0,i.kt)("img",{src:"/docs/icons/native-cordova-bot.png",class:"cordova-ee-img"}),(0,i.kt)("p",null,"If you're building a serious project, you can't afford to spend hours troubleshooting. Ionic\u2019s experts offer premium advisory services for both community plugins and premier plugins."),(0,i.kt)(l.Z,{className:"native-ee-detail",mdxType:"DocsButton"},"Contact Us Today!"))),(0,i.kt)("h2",{id:"installation"},(0,i.kt)("a",{href:"#installation"},"Installation")),(0,i.kt)(c.Z,{groupId:"runtime",defaultValue:"Capacitor",values:[{value:"Capacitor",label:"Capacitor"},{value:"Cordova",label:"Cordova"},{value:"Enterprise",label:"Enterprise"}],mdxType:"Tabs"},(0,i.kt)(s.Z,{value:"Capacitor",mdxType:"TabItem"},(0,i.kt)(u.Z,{className:"language-shell",mdxType:"CodeBlock"},"$ npm install cordova-plugin-media-capture ","\n","$ npm install @awesome-cordova-plugins/media-capture ","\n","$ ionic cap sync")),(0,i.kt)(s.Z,{value:"Cordova",mdxType:"TabItem"},(0,i.kt)(u.Z,{className:"language-shell",mdxType:"CodeBlock"},"$ ionic cordova plugin add cordova-plugin-media-capture ","\n","$ npm install @awesome-cordova-plugins/media-capture ","\n")),(0,i.kt)(s.Z,{value:"Enterprise",mdxType:"TabItem"},(0,i.kt)("blockquote",null,"Ionic Enterprise comes with fully supported and maintained plugins from the Ionic Team. \xa0",(0,i.kt)("a",{class:"btn",href:"https://ionic.io/docs/premier-plugins"},"Learn More")," or if you're interested in an enterprise version of this plugin ",(0,i.kt)("a",{class:"btn",href:"https://ionicframework.com/sales?product_of_interest=Ionic%20Enterprise%20Engine"},"Contact Us")))),(0,i.kt)("h2",{id:"supported-platforms"},"Supported Platforms"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Android"),(0,i.kt)("li",{parentName:"ul"},"Browser"),(0,i.kt)("li",{parentName:"ul"},"iOS"),(0,i.kt)("li",{parentName:"ul"},"Windows")),(0,i.kt)("h2",{id:"usage"},"Usage"),(0,i.kt)("h3",{id:"react"},"React"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"/developer/docs/v5/native/community#react"},"Learn more about using Ionic Native components in React")),(0,i.kt)("h3",{id:"angular"},"Angular"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-tsx"},"import { MediaCapture, MediaFile, CaptureError, CaptureImageOptions } from '@awesome-cordova-plugins/media-capture/ngx';\n\n\nconstructor(private mediaCapture: MediaCapture) { }\n\n...\n\n\nlet options: CaptureImageOptions = { limit: 3 }\nthis.mediaCapture.captureImage(options)\n  .then(\n    (data: MediaFile[]) => console.log(data),\n    (err: CaptureError) => console.error(err)\n  );\n\n")))}g.isMDXComponent=!0}}]);