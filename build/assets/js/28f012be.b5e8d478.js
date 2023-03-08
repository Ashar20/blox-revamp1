"use strict";(self.webpackChunkionic_docs=self.webpackChunkionic_docs||[]).push([[13401],{58215:function(e,n,a){var t=a(67294);n.Z=function(e){var n=e.children,a=e.hidden,r=e.className;return t.createElement("div",{role:"tabpanel",hidden:a,className:r},n)}},26396:function(e,n,a){a.d(n,{Z:function(){return p}});var t=a(87462),r=a(67294),o=a(72389),l=a(79443);var i=function(){var e=(0,r.useContext)(l.Z);if(null==e)throw new Error('"useUserPreferencesContext" is used outside of "Layout" component.');return e},s=a(89521),c=a(86010),u="tabItem_1uMI";function d(e){var n,a,t,o=e.lazy,l=e.block,d=e.defaultValue,p=e.values,m=e.groupId,f=e.className,v=r.Children.map(e.children,(function(e){if((0,r.isValidElement)(e)&&void 0!==e.props.value)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),h=null!=p?p:v.map((function(e){var n=e.props;return{value:n.value,label:n.label}})),g=(0,s.lx)(h,(function(e,n){return e.value===n.value}));if(g.length>0)throw new Error('Docusaurus error: Duplicate values "'+g.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var k=null===d?d:null!=(n=null!=d?d:null==(a=v.find((function(e){return e.props.default})))?void 0:a.props.value)?n:null==(t=v[0])?void 0:t.props.value;if(null!==k&&!h.some((function(e){return e.value===k})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+k+'" but none of its children has the corresponding value. Available values are: '+h.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var b=i(),w=b.tabGroupChoices,N=b.setTabGroupChoices,T=(0,r.useState)(k),y=T[0],C=T[1],E=[],Z=(0,s.o5)().blockElementScrollPositionUntilNextRender;if(null!=m){var x=w[m];null!=x&&x!==y&&h.some((function(e){return e.value===x}))&&C(x)}var I=function(e){var n=e.currentTarget,a=E.indexOf(n),t=h[a].value;t!==y&&(Z(n),C(t),null!=m&&N(m,t))},F=function(e){var n,a=null;switch(e.key){case"ArrowRight":var t=E.indexOf(e.currentTarget)+1;a=E[t]||E[0];break;case"ArrowLeft":var r=E.indexOf(e.currentTarget)-1;a=E[r]||E[E.length-1]}null==(n=a)||n.focus()};return r.createElement("div",{className:"tabs-container"},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,c.Z)("tabs",{"tabs--block":l},f)},h.map((function(e){var n=e.value,a=e.label;return r.createElement("li",{role:"tab",tabIndex:y===n?0:-1,"aria-selected":y===n,className:(0,c.Z)("tabs__item",u,{"tabs__item--active":y===n}),key:n,ref:function(e){return E.push(e)},onKeyDown:F,onFocus:I,onClick:I},null!=a?a:n)}))),o?(0,r.cloneElement)(v.filter((function(e){return e.props.value===y}))[0],{className:"margin-vert--md"}):r.createElement("div",{className:"margin-vert--md"},v.map((function(e,n){return(0,r.cloneElement)(e,{key:n,hidden:e.props.value!==y})}))))}function p(e){var n=(0,o.Z)();return r.createElement(d,(0,t.Z)({key:String(n)},e))}},47758:function(e,n,a){a.d(n,{Z:function(){return s}});var t=a(67294),r=a(86010),o=a(39960),l=a(44996),i="card_3DNo";var s=function(e){var n,a=void 0===e.href,s=void 0!==e.href&&/^http/.test(e.href),c="undefined"===e.header?null:t.createElement("header",{className:"Card-header"},e.header),u=e.hoverIcon||e.icon,d=t.createElement(t.Fragment,null,e.img&&t.createElement("img",{src:(0,l.Z)(e.img),className:"Card-image"}),t.createElement("div",{className:"Card-container"},(e.icon||u)&&t.createElement("div",{className:"Card-icon-row"},e.icon&&t.createElement("img",{src:(0,l.Z)(e.icon),className:"Card-icon Card-icon-default"}),u&&t.createElement("img",{src:(0,l.Z)(u),className:"Card-icon Card-icon-hover"})),e.ionicon&&t.createElement("ion-icon",{name:e.ionicon,className:"Card-ionicon"}),e.iconset&&t.createElement("div",{className:"Card-iconset__container"},e.iconset.split(",").map((function(n,a){return t.createElement("img",{src:(0,l.Z)(n),className:"Card-icon "+(a===e.activeIndex?"Card-icon-active":""),"data-index":a,key:a})}))),e.header&&c,t.createElement("div",{className:"Card-content"},e.children))),p=(0,r.Z)(((n={"Card-with-image":void 0!==e.img,"Card-without-image":void 0===e.img,"Card-size-lg":"lg"===e.size})[e.className]=e.className,n));return a?t.createElement("docs-card",{class:p},t.createElement("div",{className:(0,r.Z)(i,"docs-card")},d)):s?t.createElement("docs-card",{class:p},t.createElement("a",{className:(0,r.Z)(i,"docs-card"),href:e.href,target:"_blank"},d)):t.createElement("docs-card",{class:p},t.createElement(o.default,{to:e.href,className:(0,r.Z)(i,"docs-card")},d))}},88694:function(e,n,a){a.d(n,{Z:function(){return u}});var t=a(87462),r=a(63366),o=a(86010),l=a(67294),i="docsButton_2gXP",s="docsButtonRound_2y-L",c=["href","round"];function u(e){var n,a=e.href,u=e.round,d=void 0!==u&&u,p=(0,r.Z)(e,c);return p.className=(0,o.Z)(((n={})[p.className]=Boolean(p.className),n[i]=!0,n["docs-button"]=!0,n[s]=d,n["docs-button--round"]=d,n)),a?l.createElement("a",(0,t.Z)({href:a,className:"docsButton"},p),p.children):l.createElement("button",(0,t.Z)({className:"docsButton"},p),p.children)}},30282:function(e,n,a){a.r(n),a.d(n,{frontMatter:function(){return p},contentTitle:function(){return m},metadata:function(){return f},toc:function(){return v},default:function(){return g}});var t=a(87462),r=a(63366),o=(a(67294),a(3905)),l=a(47758),i=a(88694),s=a(26396),c=a(58215),u=a(19055),d=["components"],p={title:"File Transfer "},m=void 0,f={unversionedId:"native/file-transfer",id:"native/file-transfer",isDocsHomePage:!1,title:"File Transfer ",description:"File Transfer | Cordova Docs File Transfer Download Plugin",source:"@site/docs/native/file-transfer.md",sourceDirName:"native",slug:"/native/file-transfer",permalink:"/docs/native/file-transfer",editUrl:"https://github.com/ionic-team/ionic-native/edit/master/src/@awesome-cordova-plugins/plugins/file-transfer/index.ts",tags:[],version:"current",frontMatter:{title:"File Transfer "},sidebar:"native",previous:{title:"File Path",permalink:"/docs/native/file-path"},next:{title:"File",permalink:"/docs/native/file"}},v=[{value:"Supported Platforms",id:"supported-platforms",children:[],level:2},{value:"Usage",id:"usage",children:[{value:"React",id:"react",children:[],level:3},{value:"Angular",id:"angular",children:[],level:3}],level:2}],h={toc:v};function g(e){var n=e.components,a=(0,r.Z)(e,d);return(0,o.kt)("wrapper",(0,t.Z)({},h,a,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("head",null,(0,o.kt)("title",null,"File Transfer | Cordova Docs File Transfer Download Plugin"),(0,o.kt)("meta",{name:"description",content:"The Cordova File Transfer plug in allows you to upload and download docs files. This plugin is supported on iOS, Android, Windows, and more platforms."})),(0,o.kt)("p",null,"This plugin allows you to upload and download files."),(0,o.kt)("p",null,(0,o.kt)("a",{href:"https://github.com/apache/cordova-plugin-file-transfer",target:"_blank",rel:"noopener",className:"git-link"},(0,o.kt)("svg",{viewBox:"0 0 512 512"},(0,o.kt)("path",{d:"M416 160c0-35.3-28.7-64-64-64s-64 28.7-64 64c0 23.7 12.9 44.3 32 55.4v8.6c0 19.9-7.8 33.7-25.3 44.9-15.4 9.8-38.1 17.1-67.5 21.5-14 2.1-25.7 6-35.2 10.7V151.4c19.1-11.1 32-31.7 32-55.4 0-35.3-28.7-64-64-64S96 60.7 96 96c0 23.7 12.9 44.3 32 55.4v209.2c-19.1 11.1-32 31.7-32 55.4 0 35.3 28.7 64 64 64s64-28.7 64-64c0-16.6-6.3-31.7-16.7-43.1 1.9-4.9 9.7-16.3 29.4-19.3 38.8-5.8 68.9-15.9 92.3-30.8 36-22.8 55-57 55-98.8v-8.6c19.1-11.1 32-31.7 32-55.4zM160 56c22.1 0 40 17.9 40 40s-17.9 40-40 40-40-17.9-40-40 17.9-40 40-40zm0 400c-22.1 0-40-17.9-40-40s17.9-40 40-40 40 17.9 40 40-17.9 40-40 40zm192-256c-22.1 0-40-17.9-40-40s17.9-40 40-40 40 17.9 40 40-17.9 40-40 40z"}))," https://github.com/apache/cordova-plugin-file-transfer")),(0,o.kt)("h2",null,"Stuck on a Cordova issue?"),(0,o.kt)(l.Z,{className:"cordova-ee-card",header:"Don't waste precious time on plugin issues.",href:"https://ionicframework.com/sales?product_of_interest=Ionic%20Native",mdxType:"DocsCard"},(0,o.kt)("div",null,(0,o.kt)("img",{src:"/docs/icons/native-cordova-bot.png",class:"cordova-ee-img"}),(0,o.kt)("p",null,"If you're building a serious project, you can't afford to spend hours troubleshooting. Ionic\u2019s experts offer premium advisory services for both community plugins and premier plugins."),(0,o.kt)(i.Z,{className:"native-ee-detail",mdxType:"DocsButton"},"Contact Us Today!"))),(0,o.kt)("h2",{id:"installation"},(0,o.kt)("a",{href:"#installation"},"Installation")),(0,o.kt)(s.Z,{defaultValue:"Capacitor",groupId:"runtime",values:[{value:"Capacitor",label:"Capacitor"},{value:"Cordova",label:"Cordova"},{value:"Enterprise",label:"Enterprise"}],mdxType:"Tabs"},(0,o.kt)(c.Z,{value:"Capacitor",mdxType:"TabItem"},(0,o.kt)(u.Z,{className:"language-shell",mdxType:"CodeBlock"},"$ npm install cordova-plugin-file-transfer ","\n","$ npm install @awesome-cordova-plugins/file-transfer ","\n","$ ionic cap sync")),(0,o.kt)(c.Z,{value:"Cordova",mdxType:"TabItem"},(0,o.kt)(u.Z,{className:"language-shell",mdxType:"CodeBlock"},"$ ionic cordova plugin add cordova-plugin-file-transfer ","\n","$ npm install @awesome-cordova-plugins/file-transfer ","\n")),(0,o.kt)(c.Z,{value:"Enterprise",mdxType:"TabItem"},(0,o.kt)("blockquote",null,"Ionic Enterprise comes with fully supported and maintained plugins from the Ionic Team. \xa0",(0,o.kt)("a",{class:"btn",href:"https://ionic.io/docs/premier-plugins"},"Learn More")," or if you're interested in an enterprise version of this plugin ",(0,o.kt)("a",{class:"btn",href:"https://ionicframework.com/sales?product_of_interest=Ionic%20Enterprise%20Engine"},"Contact Us")))),(0,o.kt)("h2",{id:"supported-platforms"},"Supported Platforms"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Amazon Fire OS"),(0,o.kt)("li",{parentName:"ul"},"Android"),(0,o.kt)("li",{parentName:"ul"},"Browser"),(0,o.kt)("li",{parentName:"ul"},"iOS"),(0,o.kt)("li",{parentName:"ul"},"Ubuntu"),(0,o.kt)("li",{parentName:"ul"},"Windows"),(0,o.kt)("li",{parentName:"ul"},"Windows Phone")),(0,o.kt)("h2",{id:"usage"},"Usage"),(0,o.kt)("h3",{id:"react"},"React"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"/docs/native/community#react"},"Learn more about using Ionic Native components in React")),(0,o.kt)("h3",{id:"angular"},"Angular"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},"import { FileTransfer, FileUploadOptions, FileTransferObject } from '@awesome-cordova-plugins/file-transfer/ngx';\nimport { File } from '@awesome-cordova-plugins/file';\n\nconstructor(private transfer: FileTransfer, private file: File) { }\n\n...\n\nconst fileTransfer: FileTransferObject = this.transfer.create();\n\n// Upload a file:\nfileTransfer.upload(..).then(..).catch(..);\n\n// Download a file:\nfileTransfer.download(..).then(..).catch(..);\n\n// Abort active transfer:\nfileTransfer.abort();\n\n// full example\nupload() {\n  let options: FileUploadOptions = {\n     fileKey: 'file',\n     fileName: 'name.jpg',\n     headers: {}\n     .....\n  }\n\n  fileTransfer.upload('&lt;file path>', '&lt;api endpoint>', options)\n   .then((data) => {\n     // success\n   }, (err) => {\n     // error\n   })\n}\n\ndownload() {\n  const url = 'http://www.example.com/file.pdf';\n  fileTransfer.download(url, this.file.dataDirectory + 'file.pdf').then((entry) => {\n    console.log('download complete: ' + entry.toURL());\n  }, (error) => {\n    // handle error\n  });\n}\n\n")),(0,o.kt)("p",null,"To store files in a different/publicly accessible directory, please refer to the following link\n",(0,o.kt)("a",{parentName:"p",href:"https://github.com/apache/cordova-plugin-file#where-to-store-files"},"https://github.com/apache/cordova-plugin-file#where-to-store-files")))}g.isMDXComponent=!0}}]);