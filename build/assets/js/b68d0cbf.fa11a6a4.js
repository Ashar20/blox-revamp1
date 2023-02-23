"use strict";(self.webpackChunkionic_docs=self.webpackChunkionic_docs||[]).push([[74712],{58215:function(e,n,a){var t=a(67294);n.Z=function(e){var n=e.children,a=e.hidden,o=e.className;return t.createElement("div",{role:"tabpanel",hidden:a,className:o},n)}},26396:function(e,n,a){a.d(n,{Z:function(){return v}});var t=a(87462),o=a(67294),r=a(72389),i=a(79443);var l=function(){var e=(0,o.useContext)(i.Z);if(null==e)throw new Error('"useUserPreferencesContext" is used outside of "Layout" component.');return e},s=a(89521),u=a(86010),c="tabItem_1uMI";function d(e){var n,a,t,r=e.lazy,i=e.block,d=e.defaultValue,v=e.values,m=e.groupId,p=e.className,h=o.Children.map(e.children,(function(e){if((0,o.isValidElement)(e)&&void 0!==e.props.value)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),f=null!=v?v:h.map((function(e){var n=e.props;return{value:n.value,label:n.label}})),g=(0,s.lx)(f,(function(e,n){return e.value===n.value}));if(g.length>0)throw new Error('Docusaurus error: Duplicate values "'+g.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var k=null===d?d:null!=(n=null!=d?d:null==(a=h.find((function(e){return e.props.default})))?void 0:a.props.value)?n:null==(t=h[0])?void 0:t.props.value;if(null!==k&&!f.some((function(e){return e.value===k})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+k+'" but none of its children has the corresponding value. Available values are: '+f.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var b=l(),N=b.tabGroupChoices,E=b.setTabGroupChoices,y=(0,o.useState)(k),C=y[0],I=y[1],Z=[],w=(0,s.o5)().blockElementScrollPositionUntilNextRender;if(null!=m){var x=N[m];null!=x&&x!==C&&f.some((function(e){return e.value===x}))&&I(x)}var T=function(e){var n=e.currentTarget,a=Z.indexOf(n),t=f[a].value;t!==C&&(w(n),I(t),null!=m&&E(m,t))},A=function(e){var n,a=null;switch(e.key){case"ArrowRight":var t=Z.indexOf(e.currentTarget)+1;a=Z[t]||Z[0];break;case"ArrowLeft":var o=Z.indexOf(e.currentTarget)-1;a=Z[o]||Z[Z.length-1]}null==(n=a)||n.focus()};return o.createElement("div",{className:"tabs-container"},o.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,u.Z)("tabs",{"tabs--block":i},p)},f.map((function(e){var n=e.value,a=e.label;return o.createElement("li",{role:"tab",tabIndex:C===n?0:-1,"aria-selected":C===n,className:(0,u.Z)("tabs__item",c,{"tabs__item--active":C===n}),key:n,ref:function(e){return Z.push(e)},onKeyDown:A,onFocus:T,onClick:T},null!=a?a:n)}))),r?(0,o.cloneElement)(h.filter((function(e){return e.props.value===C}))[0],{className:"margin-vert--md"}):o.createElement("div",{className:"margin-vert--md"},h.map((function(e,n){return(0,o.cloneElement)(e,{key:n,hidden:e.props.value!==C})}))))}function v(e){var n=(0,r.Z)();return o.createElement(d,(0,t.Z)({key:String(n)},e))}},47758:function(e,n,a){a.d(n,{Z:function(){return s}});var t=a(67294),o=a(86010),r=a(39960),i=a(44996),l="card_3DNo";var s=function(e){var n,a=void 0===e.href,s=void 0!==e.href&&/^http/.test(e.href),u="undefined"===e.header?null:t.createElement("header",{className:"Card-header"},e.header),c=e.hoverIcon||e.icon,d=t.createElement(t.Fragment,null,e.img&&t.createElement("img",{src:(0,i.Z)(e.img),className:"Card-image"}),t.createElement("div",{className:"Card-container"},(e.icon||c)&&t.createElement("div",{className:"Card-icon-row"},e.icon&&t.createElement("img",{src:(0,i.Z)(e.icon),className:"Card-icon Card-icon-default"}),c&&t.createElement("img",{src:(0,i.Z)(c),className:"Card-icon Card-icon-hover"})),e.ionicon&&t.createElement("ion-icon",{name:e.ionicon,className:"Card-ionicon"}),e.iconset&&t.createElement("div",{className:"Card-iconset__container"},e.iconset.split(",").map((function(n,a){return t.createElement("img",{src:(0,i.Z)(n),className:"Card-icon "+(a===e.activeIndex?"Card-icon-active":""),"data-index":a,key:a})}))),e.header&&u,t.createElement("div",{className:"Card-content"},e.children))),v=(0,o.Z)(((n={"Card-with-image":void 0!==e.img,"Card-without-image":void 0===e.img,"Card-size-lg":"lg"===e.size})[e.className]=e.className,n));return a?t.createElement("docs-card",{class:v},t.createElement("div",{className:(0,o.Z)(l,"docs-card")},d)):s?t.createElement("docs-card",{class:v},t.createElement("a",{className:(0,o.Z)(l,"docs-card"),href:e.href,target:"_blank"},d)):t.createElement("docs-card",{class:v},t.createElement(r.default,{to:e.href,className:(0,o.Z)(l,"docs-card")},d))}},88694:function(e,n,a){a.d(n,{Z:function(){return c}});var t=a(87462),o=a(63366),r=a(86010),i=a(67294),l="docsButton_2gXP",s="docsButtonRound_2y-L",u=["href","round"];function c(e){var n,a=e.href,c=e.round,d=void 0!==c&&c,v=(0,o.Z)(e,u);return v.className=(0,r.Z)(((n={})[v.className]=Boolean(v.className),n[l]=!0,n["docs-button"]=!0,n[s]=d,n["docs-button--round"]=d,n)),a?i.createElement("a",(0,t.Z)({href:a,className:"docsButton"},v),v.children):i.createElement("button",(0,t.Z)({className:"docsButton"},v),v.children)}},14425:function(e,n,a){a.r(n),a.d(n,{frontMatter:function(){return v},contentTitle:function(){return m},metadata:function(){return p},toc:function(){return h},default:function(){return g}});var t=a(87462),o=a(63366),r=(a(67294),a(3905)),i=a(47758),l=a(88694),s=a(26396),u=a(58215),c=a(19055),d=["components"],v={sidebar_label:"Native Audio"},m="Native Audio",p={unversionedId:"native/native-audio",id:"version-v5/native/native-audio",isDocsHomePage:!1,title:"Native Audio",description:"Native Audio Playback",source:"@site/versioned_docs/version-v5/native/native-audio.md",sourceDirName:"native",slug:"/native/native-audio",permalink:"/developer/docs/v5/native/native-audio",editUrl:"https://github.com/ionic-team/ionic-native/edit/master/src/@awesome-cordova-plugins/plugins/native-audio/index.ts",tags:[],version:"v5",frontMatter:{sidebar_label:"Native Audio"},sidebar:"version-v5/native",previous:{title:"Music Controls",permalink:"/developer/docs/v5/native/music-controls"},next:{title:"Native Geocoder",permalink:"/developer/docs/v5/native/native-geocoder"}},h=[{value:"Supported Platforms",id:"supported-platforms",children:[],level:2},{value:"Usage",id:"usage",children:[{value:"React",id:"react",children:[],level:3},{value:"Angular",id:"angular",children:[],level:3}],level:2}],f={toc:h};function g(e){var n=e.components,a=(0,o.Z)(e,d);return(0,r.kt)("wrapper",(0,t.Z)({},f,a,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"native-audio"},"Native Audio"),(0,r.kt)("p",null,"Native Audio Playback"),(0,r.kt)("p",null,(0,r.kt)("a",{href:"https://github.com/floatinghotpot/cordova-plugin-nativeaudio",target:"_blank",rel:"noopener",className:"git-link"},(0,r.kt)("svg",{viewBox:"0 0 512 512"},(0,r.kt)("path",{d:"M416 160c0-35.3-28.7-64-64-64s-64 28.7-64 64c0 23.7 12.9 44.3 32 55.4v8.6c0 19.9-7.8 33.7-25.3 44.9-15.4 9.8-38.1 17.1-67.5 21.5-14 2.1-25.7 6-35.2 10.7V151.4c19.1-11.1 32-31.7 32-55.4 0-35.3-28.7-64-64-64S96 60.7 96 96c0 23.7 12.9 44.3 32 55.4v209.2c-19.1 11.1-32 31.7-32 55.4 0 35.3 28.7 64 64 64s64-28.7 64-64c0-16.6-6.3-31.7-16.7-43.1 1.9-4.9 9.7-16.3 29.4-19.3 38.8-5.8 68.9-15.9 92.3-30.8 36-22.8 55-57 55-98.8v-8.6c19.1-11.1 32-31.7 32-55.4zM160 56c22.1 0 40 17.9 40 40s-17.9 40-40 40-40-17.9-40-40 17.9-40 40-40zm0 400c-22.1 0-40-17.9-40-40s17.9-40 40-40 40 17.9 40 40-17.9 40-40 40zm192-256c-22.1 0-40-17.9-40-40s17.9-40 40-40 40 17.9 40 40-17.9 40-40 40z"}))," ","https://github.com/floatinghotpot/cordova-plugin-nativeaudio")),(0,r.kt)("h2",null,"Stuck on a Cordova issue?"),(0,r.kt)(i.Z,{className:"cordova-ee-card",header:"Don't waste precious time on plugin issues.",href:"https://ionicframework.com/sales?product_of_interest=Ionic%20Native",mdxType:"DocsCard"},(0,r.kt)("div",null,(0,r.kt)("img",{src:"/docs/icons/native-cordova-bot.png",class:"cordova-ee-img"}),(0,r.kt)("p",null,"If you're building a serious project, you can't afford to spend hours troubleshooting. Ionic\u2019s experts offer premium advisory services for both community plugins and premier plugins."),(0,r.kt)(l.Z,{className:"native-ee-detail",mdxType:"DocsButton"},"Contact Us Today!"))),(0,r.kt)("h2",{id:"installation"},(0,r.kt)("a",{href:"#installation"},"Installation")),(0,r.kt)(s.Z,{groupId:"runtime",defaultValue:"Capacitor",values:[{value:"Capacitor",label:"Capacitor"},{value:"Cordova",label:"Cordova"},{value:"Enterprise",label:"Enterprise"}],mdxType:"Tabs"},(0,r.kt)(u.Z,{value:"Capacitor",mdxType:"TabItem"},(0,r.kt)(c.Z,{className:"language-shell",mdxType:"CodeBlock"},"$ npm install cordova-plugin-nativeaudio ","\n","$ npm install @awesome-cordova-plugins/native-audio ","\n","$ ionic cap sync")),(0,r.kt)(u.Z,{value:"Cordova",mdxType:"TabItem"},(0,r.kt)(c.Z,{className:"language-shell",mdxType:"CodeBlock"},"$ ionic cordova plugin add cordova-plugin-nativeaudio ","\n","$ npm install @awesome-cordova-plugins/native-audio ","\n")),(0,r.kt)(u.Z,{value:"Enterprise",mdxType:"TabItem"},(0,r.kt)("blockquote",null,"Ionic Enterprise comes with fully supported and maintained plugins from the Ionic Team. \xa0",(0,r.kt)("a",{class:"btn",href:"https://ionic.io/docs/premier-plugins"},"Learn More")," or if you're interested in an enterprise version of this plugin ",(0,r.kt)("a",{class:"btn",href:"https://ionicframework.com/sales?product_of_interest=Ionic%20Enterprise%20Engine"},"Contact Us")))),(0,r.kt)("h2",{id:"supported-platforms"},"Supported Platforms"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Android"),(0,r.kt)("li",{parentName:"ul"},"Browser"),(0,r.kt)("li",{parentName:"ul"},"iOS")),(0,r.kt)("h2",{id:"usage"},"Usage"),(0,r.kt)("h3",{id:"react"},"React"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/developer/docs/v5/native/community#react"},"Learn more about using Ionic Native components in React")),(0,r.kt)("h3",{id:"angular"},"Angular"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx"},"import { NativeAudio } from '@awesome-cordova-plugins/native-audio/ngx';\n\nconstructor(private nativeAudio: NativeAudio) { }\n\n...\n\nthis.nativeAudio.preloadSimple('uniqueId1', 'path/to/file.mp3').then(onSuccess, onError);\nthis.nativeAudio.preloadComplex('uniqueId2', 'path/to/file2.mp3', 1, 1, 0).then(onSuccess, onError);\n\nthis.nativeAudio.play('uniqueId1').then(onSuccess, onError);\n\n// can optionally pass a callback to be called when the file is done playing\nthis.nativeAudio.play('uniqueId1', () => console.log('uniqueId1 is done playing'));\n\nthis.nativeAudio.loop('uniqueId2').then(onSuccess, onError);\n\nthis.nativeAudio.setVolumeForComplexAsset('uniqueId2', 0.6).then(onSuccess,onError);\n\nthis.nativeAudio.stop('uniqueId1').then(onSuccess,onError);\n\nthis.nativeAudio.unload('uniqueId1').then(onSuccess,onError);\n\n")))}g.isMDXComponent=!0}}]);