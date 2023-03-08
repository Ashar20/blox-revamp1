"use strict";(self.webpackChunkionic_docs=self.webpackChunkionic_docs||[]).push([[30594],{58215:function(e,n,t){var a=t(67294);n.Z=function(e){var n=e.children,t=e.hidden,r=e.className;return a.createElement("div",{role:"tabpanel",hidden:t,className:r},n)}},26396:function(e,n,t){t.d(n,{Z:function(){return m}});var a=t(87462),r=t(67294),o=t(72389),s=t(79443);var i=function(){var e=(0,r.useContext)(s.Z);if(null==e)throw new Error('"useUserPreferencesContext" is used outside of "Layout" component.');return e},c=t(89521),l=t(86010),u="tabItem_1uMI";function d(e){var n,t,a,o=e.lazy,s=e.block,d=e.defaultValue,m=e.values,p=e.groupId,v=e.className,h=r.Children.map(e.children,(function(e){if((0,r.isValidElement)(e)&&void 0!==e.props.value)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),f=null!=m?m:h.map((function(e){var n=e.props;return{value:n.value,label:n.label}})),g=(0,c.lx)(f,(function(e,n){return e.value===n.value}));if(g.length>0)throw new Error('Docusaurus error: Duplicate values "'+g.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var y=null===d?d:null!=(n=null!=d?d:null==(t=h.find((function(e){return e.props.default})))?void 0:t.props.value)?n:null==(a=h[0])?void 0:a.props.value;if(null!==y&&!f.some((function(e){return e.value===y})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+y+'" but none of its children has the corresponding value. Available values are: '+f.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var k=i(),b=k.tabGroupChoices,E=k.setTabGroupChoices,N=(0,r.useState)(y),I=N[0],w=N[1],C=[],T=(0,c.o5)().blockElementScrollPositionUntilNextRender;if(null!=p){var Z=b[p];null!=Z&&Z!==I&&f.some((function(e){return e.value===Z}))&&w(Z)}var S=function(e){var n=e.currentTarget,t=C.indexOf(n),a=f[t].value;a!==I&&(T(n),w(a),null!=p&&E(p,a))},x=function(e){var n,t=null;switch(e.key){case"ArrowRight":var a=C.indexOf(e.currentTarget)+1;t=C[a]||C[0];break;case"ArrowLeft":var r=C.indexOf(e.currentTarget)-1;t=C[r]||C[C.length-1]}null==(n=t)||n.focus()};return r.createElement("div",{className:"tabs-container"},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.Z)("tabs",{"tabs--block":s},v)},f.map((function(e){var n=e.value,t=e.label;return r.createElement("li",{role:"tab",tabIndex:I===n?0:-1,"aria-selected":I===n,className:(0,l.Z)("tabs__item",u,{"tabs__item--active":I===n}),key:n,ref:function(e){return C.push(e)},onKeyDown:x,onFocus:S,onClick:S},null!=t?t:n)}))),o?(0,r.cloneElement)(h.filter((function(e){return e.props.value===I}))[0],{className:"margin-vert--md"}):r.createElement("div",{className:"margin-vert--md"},h.map((function(e,n){return(0,r.cloneElement)(e,{key:n,hidden:e.props.value!==I})}))))}function m(e){var n=(0,o.Z)();return r.createElement(d,(0,a.Z)({key:String(n)},e))}},47758:function(e,n,t){t.d(n,{Z:function(){return c}});var a=t(67294),r=t(86010),o=t(39960),s=t(44996),i="card_3DNo";var c=function(e){var n,t=void 0===e.href,c=void 0!==e.href&&/^http/.test(e.href),l="undefined"===e.header?null:a.createElement("header",{className:"Card-header"},e.header),u=e.hoverIcon||e.icon,d=a.createElement(a.Fragment,null,e.img&&a.createElement("img",{src:(0,s.Z)(e.img),className:"Card-image"}),a.createElement("div",{className:"Card-container"},(e.icon||u)&&a.createElement("div",{className:"Card-icon-row"},e.icon&&a.createElement("img",{src:(0,s.Z)(e.icon),className:"Card-icon Card-icon-default"}),u&&a.createElement("img",{src:(0,s.Z)(u),className:"Card-icon Card-icon-hover"})),e.ionicon&&a.createElement("ion-icon",{name:e.ionicon,className:"Card-ionicon"}),e.iconset&&a.createElement("div",{className:"Card-iconset__container"},e.iconset.split(",").map((function(n,t){return a.createElement("img",{src:(0,s.Z)(n),className:"Card-icon "+(t===e.activeIndex?"Card-icon-active":""),"data-index":t,key:t})}))),e.header&&l,a.createElement("div",{className:"Card-content"},e.children))),m=(0,r.Z)(((n={"Card-with-image":void 0!==e.img,"Card-without-image":void 0===e.img,"Card-size-lg":"lg"===e.size})[e.className]=e.className,n));return t?a.createElement("docs-card",{class:m},a.createElement("div",{className:(0,r.Z)(i,"docs-card")},d)):c?a.createElement("docs-card",{class:m},a.createElement("a",{className:(0,r.Z)(i,"docs-card"),href:e.href,target:"_blank"},d)):a.createElement("docs-card",{class:m},a.createElement(o.default,{to:e.href,className:(0,r.Z)(i,"docs-card")},d))}},88694:function(e,n,t){t.d(n,{Z:function(){return u}});var a=t(87462),r=t(63366),o=t(86010),s=t(67294),i="docsButton_2gXP",c="docsButtonRound_2y-L",l=["href","round"];function u(e){var n,t=e.href,u=e.round,d=void 0!==u&&u,m=(0,r.Z)(e,l);return m.className=(0,o.Z)(((n={})[m.className]=Boolean(m.className),n[i]=!0,n["docs-button"]=!0,n[c]=d,n["docs-button--round"]=d,n)),t?s.createElement("a",(0,a.Z)({href:t,className:"docsButton"},m),m.children):s.createElement("button",(0,a.Z)({className:"docsButton"},m),m.children)}},6634:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return m},contentTitle:function(){return p},metadata:function(){return v},toc:function(){return h},default:function(){return g}});var a=t(87462),r=t(63366),o=(t(67294),t(3905)),s=t(47758),i=t(88694),c=t(26396),l=t(58215),u=t(19055),d=["components"],m={title:"AES256"},p=void 0,v={unversionedId:"native/aes-256",id:"native/aes-256",isDocsHomePage:!1,title:"AES256",description:"AES256 | Perform AES 256 Encryption and Decryption on Plain Text",source:"@site/docs/native/aes-256.md",sourceDirName:"native",slug:"/native/aes-256",permalink:"/docs/native/aes-256",editUrl:"https://github.com/ionic-team/ionic-native/edit/master/src/@awesome-cordova-plugins/plugins/aes-256/index.ts",tags:[],version:"current",frontMatter:{title:"AES256"},sidebar:"native",previous:{title:"AdMob",permalink:"/docs/native/admob"},next:{title:"AllInOneSDK",permalink:"/docs/native/all-in-one-sdk"}},h=[{value:"Supported Platforms",id:"supported-platforms",children:[],level:2},{value:"Usage",id:"usage",children:[{value:"React",id:"react",children:[],level:3},{value:"Angular",id:"angular",children:[],level:3}],level:2}],f={toc:h};function g(e){var n=e.components,t=(0,r.Z)(e,d);return(0,o.kt)("wrapper",(0,a.Z)({},f,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("head",null,(0,o.kt)("title",null,"AES256 | Perform AES 256 Encryption and Decryption on Plain Text"),(0,o.kt)("meta",{name:"description",content:"This plugin allows you to perform AES 256 encryption and decryption on the plain text. It's a cross-platform plugin which supports both Android and iOS."})),(0,o.kt)("p",null,"This cordova ionic plugin allows you to perform AES 256 encryption and decryption on the plain text.\nIt's a cross-platform plugin which supports both Android and iOS.\nThe encryption and decryption are performed on the device native layer so that the performance is much faster."),(0,o.kt)("p",null,(0,o.kt)("a",{href:"https://github.com/Ideas2IT/cordova-aes256",target:"_blank",rel:"noopener",className:"git-link"},(0,o.kt)("svg",{viewBox:"0 0 512 512"},(0,o.kt)("path",{d:"M416 160c0-35.3-28.7-64-64-64s-64 28.7-64 64c0 23.7 12.9 44.3 32 55.4v8.6c0 19.9-7.8 33.7-25.3 44.9-15.4 9.8-38.1 17.1-67.5 21.5-14 2.1-25.7 6-35.2 10.7V151.4c19.1-11.1 32-31.7 32-55.4 0-35.3-28.7-64-64-64S96 60.7 96 96c0 23.7 12.9 44.3 32 55.4v209.2c-19.1 11.1-32 31.7-32 55.4 0 35.3 28.7 64 64 64s64-28.7 64-64c0-16.6-6.3-31.7-16.7-43.1 1.9-4.9 9.7-16.3 29.4-19.3 38.8-5.8 68.9-15.9 92.3-30.8 36-22.8 55-57 55-98.8v-8.6c19.1-11.1 32-31.7 32-55.4zM160 56c22.1 0 40 17.9 40 40s-17.9 40-40 40-40-17.9-40-40 17.9-40 40-40zm0 400c-22.1 0-40-17.9-40-40s17.9-40 40-40 40 17.9 40 40-17.9 40-40 40zm192-256c-22.1 0-40-17.9-40-40s17.9-40 40-40 40 17.9 40 40-17.9 40-40 40z"}))," https://github.com/Ideas2IT/cordova-aes256")),(0,o.kt)("h2",null,"Stuck on a Cordova issue?"),(0,o.kt)(s.Z,{className:"cordova-ee-card",header:"Don't waste precious time on plugin issues.",href:"https://ionicframework.com/sales?product_of_interest=Ionic%20Native",mdxType:"DocsCard"},(0,o.kt)("div",null,(0,o.kt)("img",{src:"/docs/icons/native-cordova-bot.png",class:"cordova-ee-img"}),(0,o.kt)("p",null,"If you're building a serious project, you can't afford to spend hours troubleshooting. Ionic\u2019s experts offer premium advisory services for both community plugins and premier plugins."),(0,o.kt)(i.Z,{className:"native-ee-detail",mdxType:"DocsButton"},"Contact Us Today!"))),(0,o.kt)("h2",{id:"installation"},(0,o.kt)("a",{href:"#installation"},"Installation")),(0,o.kt)(c.Z,{defaultValue:"Capacitor",groupId:"runtime",values:[{value:"Capacitor",label:"Capacitor"},{value:"Cordova",label:"Cordova"},{value:"Enterprise",label:"Enterprise"}],mdxType:"Tabs"},(0,o.kt)(l.Z,{value:"Capacitor",mdxType:"TabItem"},(0,o.kt)(u.Z,{className:"language-shell",mdxType:"CodeBlock"},"$ npm install cordova-plugin-aes256-encryption ","\n","$ npm install @awesome-cordova-plugins/aes-256 ","\n","$ ionic cap sync")),(0,o.kt)(l.Z,{value:"Cordova",mdxType:"TabItem"},(0,o.kt)(u.Z,{className:"language-shell",mdxType:"CodeBlock"},"$ ionic cordova plugin add cordova-plugin-aes256-encryption ","\n","$ npm install @awesome-cordova-plugins/aes-256 ","\n")),(0,o.kt)(l.Z,{value:"Enterprise",mdxType:"TabItem"},(0,o.kt)("blockquote",null,"Ionic Enterprise comes with fully supported and maintained plugins from the Ionic Team. \xa0",(0,o.kt)("a",{class:"btn",href:"https://ionic.io/docs/premier-plugins"},"Learn More")," or if you're interested in an enterprise version of this plugin ",(0,o.kt)("a",{class:"btn",href:"https://ionicframework.com/sales?product_of_interest=Ionic%20Enterprise%20Engine"},"Contact Us")))),(0,o.kt)("h2",{id:"supported-platforms"},"Supported Platforms"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Android"),(0,o.kt)("li",{parentName:"ul"},"iOS")),(0,o.kt)("h2",{id:"usage"},"Usage"),(0,o.kt)("h3",{id:"react"},"React"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"/docs/native/community#react"},"Learn more about using Ionic Native components in React")),(0,o.kt)("h3",{id:"angular"},"Angular"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},"import { AES256 } from '@awesome-cordova-plugins/aes-256/ngx';\n\nprivate secureKey: string;\nprivate secureIV: string;\n\nconstructor(private aes256: AES256) {\n   this.generateSecureKeyAndIV(); // To generate the random secureKey and secureIV\n}\n\n...\n\nasync generateSecureKeyAndIV() {\n   this.secureKey = await this.aes256.generateSecureKey('random password 12345'); // Returns a 32 bytes string\n   this.secureIV = await this.aes256.generateSecureIV('random password 12345'); // Returns a 16 bytes string\n}\n\nthis.aes256.encrypt(this.secureKey, this.secureIV, 'testdata')\n  .then(res => console.log('Encrypted Data: ',res))\n  .catch((error: any) => console.error(error));\n\nthis.aes256.decrypt(this.secureKey, this.secureIV, 'encryptedData')\n  .then(res => console.log('Decrypted Data : ',res))\n  .catch((error: any) => console.error(error));\n\n\n* this.aes256.generateSecureKey('random password 12345')\n  .then(res => console.log('Secure Key : ',res))\n  .catch((error: any) => console.error(error));\n\n\n* this.aes256.generateSecureIV('random password 12345')\n  .then(res => console.log('Secure IV : ',res))\n  .catch((error: any) => console.error(error));\n\n")))}g.isMDXComponent=!0}}]);