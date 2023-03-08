"use strict";(self.webpackChunkionic_docs=self.webpackChunkionic_docs||[]).push([[28472],{58215:function(e,n,a){var t=a(67294);n.Z=function(e){var n=e.children,a=e.hidden,o=e.className;return t.createElement("div",{role:"tabpanel",hidden:a,className:o},n)}},26396:function(e,n,a){a.d(n,{Z:function(){return m}});var t=a(87462),o=a(67294),i=a(72389),r=a(79443);var l=function(){var e=(0,o.useContext)(r.Z);if(null==e)throw new Error('"useUserPreferencesContext" is used outside of "Layout" component.');return e},u=a(89521),s=a(86010),c="tabItem_1uMI";function d(e){var n,a,t,i=e.lazy,r=e.block,d=e.defaultValue,m=e.values,v=e.groupId,p=e.className,h=o.Children.map(e.children,(function(e){if((0,o.isValidElement)(e)&&void 0!==e.props.value)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),f=null!=m?m:h.map((function(e){var n=e.props;return{value:n.value,label:n.label}})),g=(0,u.lx)(f,(function(e,n){return e.value===n.value}));if(g.length>0)throw new Error('Docusaurus error: Duplicate values "'+g.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var k=null===d?d:null!=(n=null!=d?d:null==(a=h.find((function(e){return e.props.default})))?void 0:a.props.value)?n:null==(t=h[0])?void 0:t.props.value;if(null!==k&&!f.some((function(e){return e.value===k})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+k+'" but none of its children has the corresponding value. Available values are: '+f.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var b=l(),N=b.tabGroupChoices,E=b.setTabGroupChoices,y=(0,o.useState)(k),C=y[0],I=y[1],w=[],Z=(0,u.o5)().blockElementScrollPositionUntilNextRender;if(null!=v){var A=N[v];null!=A&&A!==C&&f.some((function(e){return e.value===A}))&&I(A)}var T=function(e){var n=e.currentTarget,a=w.indexOf(n),t=f[a].value;t!==C&&(Z(n),I(t),null!=v&&E(v,t))},x=function(e){var n,a=null;switch(e.key){case"ArrowRight":var t=w.indexOf(e.currentTarget)+1;a=w[t]||w[0];break;case"ArrowLeft":var o=w.indexOf(e.currentTarget)-1;a=w[o]||w[w.length-1]}null==(n=a)||n.focus()};return o.createElement("div",{className:"tabs-container"},o.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,s.Z)("tabs",{"tabs--block":r},p)},f.map((function(e){var n=e.value,a=e.label;return o.createElement("li",{role:"tab",tabIndex:C===n?0:-1,"aria-selected":C===n,className:(0,s.Z)("tabs__item",c,{"tabs__item--active":C===n}),key:n,ref:function(e){return w.push(e)},onKeyDown:x,onFocus:T,onClick:T},null!=a?a:n)}))),i?(0,o.cloneElement)(h.filter((function(e){return e.props.value===C}))[0],{className:"margin-vert--md"}):o.createElement("div",{className:"margin-vert--md"},h.map((function(e,n){return(0,o.cloneElement)(e,{key:n,hidden:e.props.value!==C})}))))}function m(e){var n=(0,i.Z)();return o.createElement(d,(0,t.Z)({key:String(n)},e))}},47758:function(e,n,a){a.d(n,{Z:function(){return u}});var t=a(67294),o=a(86010),i=a(39960),r=a(44996),l="card_3DNo";var u=function(e){var n,a=void 0===e.href,u=void 0!==e.href&&/^http/.test(e.href),s="undefined"===e.header?null:t.createElement("header",{className:"Card-header"},e.header),c=e.hoverIcon||e.icon,d=t.createElement(t.Fragment,null,e.img&&t.createElement("img",{src:(0,r.Z)(e.img),className:"Card-image"}),t.createElement("div",{className:"Card-container"},(e.icon||c)&&t.createElement("div",{className:"Card-icon-row"},e.icon&&t.createElement("img",{src:(0,r.Z)(e.icon),className:"Card-icon Card-icon-default"}),c&&t.createElement("img",{src:(0,r.Z)(c),className:"Card-icon Card-icon-hover"})),e.ionicon&&t.createElement("ion-icon",{name:e.ionicon,className:"Card-ionicon"}),e.iconset&&t.createElement("div",{className:"Card-iconset__container"},e.iconset.split(",").map((function(n,a){return t.createElement("img",{src:(0,r.Z)(n),className:"Card-icon "+(a===e.activeIndex?"Card-icon-active":""),"data-index":a,key:a})}))),e.header&&s,t.createElement("div",{className:"Card-content"},e.children))),m=(0,o.Z)(((n={"Card-with-image":void 0!==e.img,"Card-without-image":void 0===e.img,"Card-size-lg":"lg"===e.size})[e.className]=e.className,n));return a?t.createElement("docs-card",{class:m},t.createElement("div",{className:(0,o.Z)(l,"docs-card")},d)):u?t.createElement("docs-card",{class:m},t.createElement("a",{className:(0,o.Z)(l,"docs-card"),href:e.href,target:"_blank"},d)):t.createElement("docs-card",{class:m},t.createElement(i.default,{to:e.href,className:(0,o.Z)(l,"docs-card")},d))}},88694:function(e,n,a){a.d(n,{Z:function(){return c}});var t=a(87462),o=a(63366),i=a(86010),r=a(67294),l="docsButton_2gXP",u="docsButtonRound_2y-L",s=["href","round"];function c(e){var n,a=e.href,c=e.round,d=void 0!==c&&c,m=(0,o.Z)(e,s);return m.className=(0,i.Z)(((n={})[m.className]=Boolean(m.className),n[l]=!0,n["docs-button"]=!0,n[u]=d,n["docs-button--round"]=d,n)),a?r.createElement("a",(0,t.Z)({href:a,className:"docsButton"},m),m.children):r.createElement("button",(0,t.Z)({className:"docsButton"},m),m.children)}},73188:function(e,n,a){a.r(n),a.d(n,{frontMatter:function(){return m},contentTitle:function(){return v},metadata:function(){return p},toc:function(){return h},default:function(){return g}});var t=a(87462),o=a(63366),i=(a(67294),a(3905)),r=a(47758),l=a(88694),u=a(26396),s=a(58215),c=a(19055),d=["components"],m={title:"Native Audio"},v=void 0,p={unversionedId:"native/native-audio",id:"native/native-audio",isDocsHomePage:!1,title:"Native Audio",description:"Native Audio | Cordova Native Audio Plugin for Audio Playback",source:"@site/docs/native/native-audio.md",sourceDirName:"native",slug:"/native/native-audio",permalink:"/docs/native/native-audio",editUrl:"https://github.com/ionic-team/ionic-native/edit/master/src/@awesome-cordova-plugins/plugins/native-audio/index.ts",tags:[],version:"current",frontMatter:{title:"Native Audio"},sidebar:"native",previous:{title:"Music Controls",permalink:"/docs/native/music-controls"},next:{title:"Native Geocoder",permalink:"/docs/native/native-geocoder"}},h=[{value:"Supported Platforms",id:"supported-platforms",children:[],level:2},{value:"Usage",id:"usage",children:[{value:"React",id:"react",children:[],level:3},{value:"Angular",id:"angular",children:[],level:3}],level:2}],f={toc:h};function g(e){var n=e.components,a=(0,o.Z)(e,d);return(0,i.kt)("wrapper",(0,t.Z)({},f,a,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("head",null,(0,i.kt)("title",null,"Native Audio | Cordova Native Audio Plugin for Audio Playback"),(0,i.kt)("meta",{name:"description",content:"Native Audio for Ionic Framework applications is run through the cordova-plugin-nativeaudio. Read for more information on Native Audio Playback and usage."})),(0,i.kt)("p",null,"Native Audio Playback"),(0,i.kt)("p",null,(0,i.kt)("a",{href:"https://github.com/floatinghotpot/cordova-plugin-nativeaudio",target:"_blank",rel:"noopener",className:"git-link"},(0,i.kt)("svg",{viewBox:"0 0 512 512"},(0,i.kt)("path",{d:"M416 160c0-35.3-28.7-64-64-64s-64 28.7-64 64c0 23.7 12.9 44.3 32 55.4v8.6c0 19.9-7.8 33.7-25.3 44.9-15.4 9.8-38.1 17.1-67.5 21.5-14 2.1-25.7 6-35.2 10.7V151.4c19.1-11.1 32-31.7 32-55.4 0-35.3-28.7-64-64-64S96 60.7 96 96c0 23.7 12.9 44.3 32 55.4v209.2c-19.1 11.1-32 31.7-32 55.4 0 35.3 28.7 64 64 64s64-28.7 64-64c0-16.6-6.3-31.7-16.7-43.1 1.9-4.9 9.7-16.3 29.4-19.3 38.8-5.8 68.9-15.9 92.3-30.8 36-22.8 55-57 55-98.8v-8.6c19.1-11.1 32-31.7 32-55.4zM160 56c22.1 0 40 17.9 40 40s-17.9 40-40 40-40-17.9-40-40 17.9-40 40-40zm0 400c-22.1 0-40-17.9-40-40s17.9-40 40-40 40 17.9 40 40-17.9 40-40 40zm192-256c-22.1 0-40-17.9-40-40s17.9-40 40-40 40 17.9 40 40-17.9 40-40 40z"}))," https://github.com/floatinghotpot/cordova-plugin-nativeaudio")),(0,i.kt)("h2",null,"Stuck on a Cordova issue?"),(0,i.kt)(r.Z,{className:"cordova-ee-card",header:"Don't waste precious time on plugin issues.",href:"https://ionicframework.com/sales?product_of_interest=Ionic%20Native",mdxType:"DocsCard"},(0,i.kt)("div",null,(0,i.kt)("img",{src:"/docs/icons/native-cordova-bot.png",class:"cordova-ee-img"}),(0,i.kt)("p",null,"If you're building a serious project, you can't afford to spend hours troubleshooting. Ionic\u2019s experts offer premium advisory services for both community plugins and premier plugins."),(0,i.kt)(l.Z,{className:"native-ee-detail",mdxType:"DocsButton"},"Contact Us Today!"))),(0,i.kt)("h2",{id:"installation"},(0,i.kt)("a",{href:"#installation"},"Installation")),(0,i.kt)(u.Z,{defaultValue:"Capacitor",groupId:"runtime",values:[{value:"Capacitor",label:"Capacitor"},{value:"Cordova",label:"Cordova"},{value:"Enterprise",label:"Enterprise"}],mdxType:"Tabs"},(0,i.kt)(s.Z,{value:"Capacitor",mdxType:"TabItem"},(0,i.kt)(c.Z,{className:"language-shell",mdxType:"CodeBlock"},"$ npm install cordova-plugin-nativeaudio ","\n","$ npm install @awesome-cordova-plugins/native-audio ","\n","$ ionic cap sync")),(0,i.kt)(s.Z,{value:"Cordova",mdxType:"TabItem"},(0,i.kt)(c.Z,{className:"language-shell",mdxType:"CodeBlock"},"$ ionic cordova plugin add cordova-plugin-nativeaudio ","\n","$ npm install @awesome-cordova-plugins/native-audio ","\n")),(0,i.kt)(s.Z,{value:"Enterprise",mdxType:"TabItem"},(0,i.kt)("blockquote",null,"Ionic Enterprise comes with fully supported and maintained plugins from the Ionic Team. \xa0",(0,i.kt)("a",{class:"btn",href:"https://ionic.io/docs/premier-plugins"},"Learn More")," or if you're interested in an enterprise version of this plugin ",(0,i.kt)("a",{class:"btn",href:"https://ionicframework.com/sales?product_of_interest=Ionic%20Enterprise%20Engine"},"Contact Us")))),(0,i.kt)("h2",{id:"supported-platforms"},"Supported Platforms"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Android"),(0,i.kt)("li",{parentName:"ul"},"Browser"),(0,i.kt)("li",{parentName:"ul"},"iOS")),(0,i.kt)("h2",{id:"usage"},"Usage"),(0,i.kt)("h3",{id:"react"},"React"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"/docs/native/community#react"},"Learn more about using Ionic Native components in React")),(0,i.kt)("h3",{id:"angular"},"Angular"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-typescript"},"import { NativeAudio } from '@awesome-cordova-plugins/native-audio/ngx';\n\nconstructor(private nativeAudio: NativeAudio) { }\n\n...\n\nthis.nativeAudio.preloadSimple('uniqueId1', 'path/to/file.mp3').then(onSuccess, onError);\nthis.nativeAudio.preloadComplex('uniqueId2', 'path/to/file2.mp3', 1, 1, 0).then(onSuccess, onError);\n\nthis.nativeAudio.play('uniqueId1').then(onSuccess, onError);\n\n// can optionally pass a callback to be called when the file is done playing\nthis.nativeAudio.play('uniqueId1', () => console.log('uniqueId1 is done playing'));\n\nthis.nativeAudio.loop('uniqueId2').then(onSuccess, onError);\n\nthis.nativeAudio.setVolumeForComplexAsset('uniqueId2', 0.6).then(onSuccess,onError);\n\nthis.nativeAudio.stop('uniqueId1').then(onSuccess,onError);\n\nthis.nativeAudio.unload('uniqueId1').then(onSuccess,onError);\n\n")))}g.isMDXComponent=!0}}]);