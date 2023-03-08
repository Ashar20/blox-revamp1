"use strict";(self.webpackChunkionic_docs=self.webpackChunkionic_docs||[]).push([[85107],{58215:function(e,t,a){var r=a(67294);t.Z=function(e){var t=e.children,a=e.hidden,o=e.className;return r.createElement("div",{role:"tabpanel",hidden:a,className:o},t)}},26396:function(e,t,a){a.d(t,{Z:function(){return m}});var r=a(87462),o=a(67294),n=a(72389),i=a(79443);var l=function(){var e=(0,o.useContext)(i.Z);if(null==e)throw new Error('"useUserPreferencesContext" is used outside of "Layout" component.');return e},s=a(89521),c=a(86010),u="tabItem_1uMI";function d(e){var t,a,r,n=e.lazy,i=e.block,d=e.defaultValue,m=e.values,p=e.groupId,h=e.className,v=o.Children.map(e.children,(function(e){if((0,o.isValidElement)(e)&&void 0!==e.props.value)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),f=null!=m?m:v.map((function(e){var t=e.props;return{value:t.value,label:t.label}})),b=(0,s.lx)(f,(function(e,t){return e.value===t.value}));if(b.length>0)throw new Error('Docusaurus error: Duplicate values "'+b.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var g=null===d?d:null!=(t=null!=d?d:null==(a=v.find((function(e){return e.props.default})))?void 0:a.props.value)?t:null==(r=v[0])?void 0:r.props.value;if(null!==g&&!f.some((function(e){return e.value===g})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+g+'" but none of its children has the corresponding value. Available values are: '+f.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var y=l(),k=y.tabGroupChoices,N=y.setTabGroupChoices,E=(0,o.useState)(g),C=E[0],w=E[1],I=[],Z=(0,s.o5)().blockElementScrollPositionUntilNextRender;if(null!=p){var T=k[p];null!=T&&T!==C&&f.some((function(e){return e.value===T}))&&w(T)}var x=function(e){var t=e.currentTarget,a=I.indexOf(t),r=f[a].value;r!==C&&(Z(t),w(r),null!=p&&N(p,r))},L=function(e){var t,a=null;switch(e.key){case"ArrowRight":var r=I.indexOf(e.currentTarget)+1;a=I[r]||I[0];break;case"ArrowLeft":var o=I.indexOf(e.currentTarget)-1;a=I[o]||I[I.length-1]}null==(t=a)||t.focus()};return o.createElement("div",{className:"tabs-container"},o.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,c.Z)("tabs",{"tabs--block":i},h)},f.map((function(e){var t=e.value,a=e.label;return o.createElement("li",{role:"tab",tabIndex:C===t?0:-1,"aria-selected":C===t,className:(0,c.Z)("tabs__item",u,{"tabs__item--active":C===t}),key:t,ref:function(e){return I.push(e)},onKeyDown:L,onFocus:x,onClick:x},null!=a?a:t)}))),n?(0,o.cloneElement)(v.filter((function(e){return e.props.value===C}))[0],{className:"margin-vert--md"}):o.createElement("div",{className:"margin-vert--md"},v.map((function(e,t){return(0,o.cloneElement)(e,{key:t,hidden:e.props.value!==C})}))))}function m(e){var t=(0,n.Z)();return o.createElement(d,(0,r.Z)({key:String(t)},e))}},47758:function(e,t,a){a.d(t,{Z:function(){return s}});var r=a(67294),o=a(86010),n=a(39960),i=a(44996),l="card_3DNo";var s=function(e){var t,a=void 0===e.href,s=void 0!==e.href&&/^http/.test(e.href),c="undefined"===e.header?null:r.createElement("header",{className:"Card-header"},e.header),u=e.hoverIcon||e.icon,d=r.createElement(r.Fragment,null,e.img&&r.createElement("img",{src:(0,i.Z)(e.img),className:"Card-image"}),r.createElement("div",{className:"Card-container"},(e.icon||u)&&r.createElement("div",{className:"Card-icon-row"},e.icon&&r.createElement("img",{src:(0,i.Z)(e.icon),className:"Card-icon Card-icon-default"}),u&&r.createElement("img",{src:(0,i.Z)(u),className:"Card-icon Card-icon-hover"})),e.ionicon&&r.createElement("ion-icon",{name:e.ionicon,className:"Card-ionicon"}),e.iconset&&r.createElement("div",{className:"Card-iconset__container"},e.iconset.split(",").map((function(t,a){return r.createElement("img",{src:(0,i.Z)(t),className:"Card-icon "+(a===e.activeIndex?"Card-icon-active":""),"data-index":a,key:a})}))),e.header&&c,r.createElement("div",{className:"Card-content"},e.children))),m=(0,o.Z)(((t={"Card-with-image":void 0!==e.img,"Card-without-image":void 0===e.img,"Card-size-lg":"lg"===e.size})[e.className]=e.className,t));return a?r.createElement("docs-card",{class:m},r.createElement("div",{className:(0,o.Z)(l,"docs-card")},d)):s?r.createElement("docs-card",{class:m},r.createElement("a",{className:(0,o.Z)(l,"docs-card"),href:e.href,target:"_blank"},d)):r.createElement("docs-card",{class:m},r.createElement(n.default,{to:e.href,className:(0,o.Z)(l,"docs-card")},d))}},88694:function(e,t,a){a.d(t,{Z:function(){return u}});var r=a(87462),o=a(63366),n=a(86010),i=a(67294),l="docsButton_2gXP",s="docsButtonRound_2y-L",c=["href","round"];function u(e){var t,a=e.href,u=e.round,d=void 0!==u&&u,m=(0,o.Z)(e,c);return m.className=(0,n.Z)(((t={})[m.className]=Boolean(m.className),t[l]=!0,t["docs-button"]=!0,t[s]=d,t["docs-button--round"]=d,t)),a?i.createElement("a",(0,r.Z)({href:a,className:"docsButton"},m),m.children):i.createElement("button",(0,r.Z)({className:"docsButton"},m),m.children)}},38735:function(e,t,a){a.r(t),a.d(t,{frontMatter:function(){return m},contentTitle:function(){return p},metadata:function(){return h},toc:function(){return v},default:function(){return b}});var r=a(87462),o=a(63366),n=(a(67294),a(3905)),i=a(47758),l=a(88694),s=a(26396),c=a(58215),u=a(19055),d=["components"],m={sidebar_label:"Photo Library"},p="Photo Library",h={unversionedId:"native/photo-library",id:"version-v5/native/photo-library",isDocsHomePage:!1,title:"Photo Library",description:"The PhotoLibrary plugin allows access to photos from device by url. So you can use plain img tag to display photos and their thumbnails, and different 3rd party libraries as well.",source:"@site/versioned_docs/version-v5/native/photo-library.md",sourceDirName:"native",slug:"/native/photo-library",permalink:"/docs/v5/native/photo-library",editUrl:"https://github.com/ionic-team/ionic-native/edit/master/src/@awesome-cordova-plugins/plugins/photo-library/index.ts",tags:[],version:"v5",frontMatter:{sidebar_label:"Photo Library"},sidebar:"version-v5/native",previous:{title:"PDFGenerator",permalink:"/docs/v5/native/pdf-generator"},next:{title:"Photo Viewer",permalink:"/docs/v5/native/photo-viewer"}},v=[{value:"Supported Platforms",id:"supported-platforms",children:[],level:2},{value:"Usage",id:"usage",children:[{value:"React",id:"react",children:[],level:3},{value:"Angular",id:"angular",children:[],level:3}],level:2}],f={toc:v};function b(e){var t=e.components,a=(0,o.Z)(e,d);return(0,n.kt)("wrapper",(0,r.Z)({},f,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"photo-library"},"Photo Library"),(0,n.kt)("p",null,"The PhotoLibrary plugin allows access to photos from device by url. So you can use plain img tag to display photos and their thumbnails, and different 3rd party libraries as well.\nSaving photos and videos to the library is also supported.\ncdvphotolibrary urls should be trusted by Angular. See plugin homepage to learn how."),(0,n.kt)("p",null,(0,n.kt)("a",{href:"https://github.com/terikon/cordova-plugin-photo-library",target:"_blank",rel:"noopener",className:"git-link"},(0,n.kt)("svg",{viewBox:"0 0 512 512"},(0,n.kt)("path",{d:"M416 160c0-35.3-28.7-64-64-64s-64 28.7-64 64c0 23.7 12.9 44.3 32 55.4v8.6c0 19.9-7.8 33.7-25.3 44.9-15.4 9.8-38.1 17.1-67.5 21.5-14 2.1-25.7 6-35.2 10.7V151.4c19.1-11.1 32-31.7 32-55.4 0-35.3-28.7-64-64-64S96 60.7 96 96c0 23.7 12.9 44.3 32 55.4v209.2c-19.1 11.1-32 31.7-32 55.4 0 35.3 28.7 64 64 64s64-28.7 64-64c0-16.6-6.3-31.7-16.7-43.1 1.9-4.9 9.7-16.3 29.4-19.3 38.8-5.8 68.9-15.9 92.3-30.8 36-22.8 55-57 55-98.8v-8.6c19.1-11.1 32-31.7 32-55.4zM160 56c22.1 0 40 17.9 40 40s-17.9 40-40 40-40-17.9-40-40 17.9-40 40-40zm0 400c-22.1 0-40-17.9-40-40s17.9-40 40-40 40 17.9 40 40-17.9 40-40 40zm192-256c-22.1 0-40-17.9-40-40s17.9-40 40-40 40 17.9 40 40-17.9 40-40 40z"}))," ","https://github.com/terikon/cordova-plugin-photo-library")),(0,n.kt)("h2",null,"Stuck on a Cordova issue?"),(0,n.kt)(i.Z,{className:"cordova-ee-card",header:"Don't waste precious time on plugin issues.",href:"https://ionicframework.com/sales?product_of_interest=Ionic%20Native",mdxType:"DocsCard"},(0,n.kt)("div",null,(0,n.kt)("img",{src:"/docs/icons/native-cordova-bot.png",class:"cordova-ee-img"}),(0,n.kt)("p",null,"If you're building a serious project, you can't afford to spend hours troubleshooting. Ionic\u2019s experts offer premium advisory services for both community plugins and premier plugins."),(0,n.kt)(l.Z,{className:"native-ee-detail",mdxType:"DocsButton"},"Contact Us Today!"))),(0,n.kt)("h2",{id:"installation"},(0,n.kt)("a",{href:"#installation"},"Installation")),(0,n.kt)(s.Z,{groupId:"runtime",defaultValue:"Capacitor",values:[{value:"Capacitor",label:"Capacitor"},{value:"Cordova",label:"Cordova"},{value:"Enterprise",label:"Enterprise"}],mdxType:"Tabs"},(0,n.kt)(c.Z,{value:"Capacitor",mdxType:"TabItem"},(0,n.kt)(u.Z,{className:"language-shell",mdxType:"CodeBlock"},"$ npm install cordova-plugin-photo-library ","\n","$ npm install @awesome-cordova-plugins/photo-library ","\n","$ ionic cap sync")),(0,n.kt)(c.Z,{value:"Cordova",mdxType:"TabItem"},(0,n.kt)(u.Z,{className:"language-shell",mdxType:"CodeBlock"},"$ ionic cordova plugin add cordova-plugin-photo-library ","\n","$ npm install @awesome-cordova-plugins/photo-library ","\n")),(0,n.kt)(c.Z,{value:"Enterprise",mdxType:"TabItem"},(0,n.kt)("blockquote",null,"Ionic Enterprise comes with fully supported and maintained plugins from the Ionic Team. \xa0",(0,n.kt)("a",{class:"btn",href:"https://ionic.io/docs/premier-plugins"},"Learn More")," or if you're interested in an enterprise version of this plugin ",(0,n.kt)("a",{class:"btn",href:"https://ionicframework.com/sales?product_of_interest=Ionic%20Enterprise%20Engine"},"Contact Us")))),(0,n.kt)("h2",{id:"supported-platforms"},"Supported Platforms"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Android"),(0,n.kt)("li",{parentName:"ul"},"Browser"),(0,n.kt)("li",{parentName:"ul"},"iOS")),(0,n.kt)("h2",{id:"usage"},"Usage"),(0,n.kt)("h3",{id:"react"},"React"),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"/docs/v5/native/community#react"},"Learn more about using Ionic Native components in React")),(0,n.kt)("h3",{id:"angular"},"Angular"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-tsx"},"import { PhotoLibrary } from '@awesome-cordova-plugins/photo-library/ngx';\n\nconstructor(private photoLibrary: PhotoLibrary) { }\n\nthis.photoLibrary.requestAuthorization().then(() => {\n  this.photoLibrary.getLibrary().subscribe({\n    next: library => {\n      library.forEach(function(libraryItem) {\n        console.log(libraryItem.id);          // ID of the photo\n        console.log(libraryItem.photoURL);    // Cross-platform access to photo\n        console.log(libraryItem.thumbnailURL);// Cross-platform access to thumbnail\n        console.log(libraryItem.fileName);\n        console.log(libraryItem.width);\n        console.log(libraryItem.height);\n        console.log(libraryItem.creationDate);\n        console.log(libraryItem.latitude);\n        console.log(libraryItem.longitude);\n        console.log(libraryItem.albumIds);    // array of ids of appropriate AlbumItem, only of includeAlbumsData was used\n      });\n    },\n    error: err => { console.log('could not get photos'); },\n    complete: () => { console.log('done getting photos'); }\n  });\n})\n.catch(err => console.log('permissions weren\\'t granted'));\n\n")))}b.isMDXComponent=!0}}]);