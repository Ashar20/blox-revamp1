"use strict";(self.webpackChunkionic_docs=self.webpackChunkionic_docs||[]).push([[27952],{58215:function(e,n,a){var t=a(67294);n.Z=function(e){var n=e.children,a=e.hidden,r=e.className;return t.createElement("div",{role:"tabpanel",hidden:a,className:r},n)}},26396:function(e,n,a){a.d(n,{Z:function(){return m}});var t=a(87462),r=a(67294),o=a(72389),i=a(79443);var s=function(){var e=(0,r.useContext)(i.Z);if(null==e)throw new Error('"useUserPreferencesContext" is used outside of "Layout" component.');return e},l=a(89521),c=a(86010),u="tabItem_1uMI";function d(e){var n,a,t,o=e.lazy,i=e.block,d=e.defaultValue,m=e.values,v=e.groupId,p=e.className,h=r.Children.map(e.children,(function(e){if((0,r.isValidElement)(e)&&void 0!==e.props.value)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),f=null!=m?m:h.map((function(e){var n=e.props;return{value:n.value,label:n.label}})),g=(0,l.lx)(f,(function(e,n){return e.value===n.value}));if(g.length>0)throw new Error('Docusaurus error: Duplicate values "'+g.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var b=null===d?d:null!=(n=null!=d?d:null==(a=h.find((function(e){return e.props.default})))?void 0:a.props.value)?n:null==(t=h[0])?void 0:t.props.value;if(null!==b&&!f.some((function(e){return e.value===b})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+b+'" but none of its children has the corresponding value. Available values are: '+f.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var k=s(),N=k.tabGroupChoices,y=k.setTabGroupChoices,C=(0,r.useState)(b),E=C[0],w=C[1],Z=[],T=(0,l.o5)().blockElementScrollPositionUntilNextRender;if(null!=v){var x=N[v];null!=x&&x!==E&&f.some((function(e){return e.value===x}))&&w(x)}var D=function(e){var n=e.currentTarget,a=Z.indexOf(n),t=f[a].value;t!==E&&(T(n),w(t),null!=v&&y(v,t))},I=function(e){var n,a=null;switch(e.key){case"ArrowRight":var t=Z.indexOf(e.currentTarget)+1;a=Z[t]||Z[0];break;case"ArrowLeft":var r=Z.indexOf(e.currentTarget)-1;a=Z[r]||Z[Z.length-1]}null==(n=a)||n.focus()};return r.createElement("div",{className:"tabs-container"},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,c.Z)("tabs",{"tabs--block":i},p)},f.map((function(e){var n=e.value,a=e.label;return r.createElement("li",{role:"tab",tabIndex:E===n?0:-1,"aria-selected":E===n,className:(0,c.Z)("tabs__item",u,{"tabs__item--active":E===n}),key:n,ref:function(e){return Z.push(e)},onKeyDown:I,onFocus:D,onClick:D},null!=a?a:n)}))),o?(0,r.cloneElement)(h.filter((function(e){return e.props.value===E}))[0],{className:"margin-vert--md"}):r.createElement("div",{className:"margin-vert--md"},h.map((function(e,n){return(0,r.cloneElement)(e,{key:n,hidden:e.props.value!==E})}))))}function m(e){var n=(0,o.Z)();return r.createElement(d,(0,t.Z)({key:String(n)},e))}},47758:function(e,n,a){a.d(n,{Z:function(){return l}});var t=a(67294),r=a(86010),o=a(39960),i=a(44996),s="card_3DNo";var l=function(e){var n,a=void 0===e.href,l=void 0!==e.href&&/^http/.test(e.href),c="undefined"===e.header?null:t.createElement("header",{className:"Card-header"},e.header),u=e.hoverIcon||e.icon,d=t.createElement(t.Fragment,null,e.img&&t.createElement("img",{src:(0,i.Z)(e.img),className:"Card-image"}),t.createElement("div",{className:"Card-container"},(e.icon||u)&&t.createElement("div",{className:"Card-icon-row"},e.icon&&t.createElement("img",{src:(0,i.Z)(e.icon),className:"Card-icon Card-icon-default"}),u&&t.createElement("img",{src:(0,i.Z)(u),className:"Card-icon Card-icon-hover"})),e.ionicon&&t.createElement("ion-icon",{name:e.ionicon,className:"Card-ionicon"}),e.iconset&&t.createElement("div",{className:"Card-iconset__container"},e.iconset.split(",").map((function(n,a){return t.createElement("img",{src:(0,i.Z)(n),className:"Card-icon "+(a===e.activeIndex?"Card-icon-active":""),"data-index":a,key:a})}))),e.header&&c,t.createElement("div",{className:"Card-content"},e.children))),m=(0,r.Z)(((n={"Card-with-image":void 0!==e.img,"Card-without-image":void 0===e.img,"Card-size-lg":"lg"===e.size})[e.className]=e.className,n));return a?t.createElement("docs-card",{class:m},t.createElement("div",{className:(0,r.Z)(s,"docs-card")},d)):l?t.createElement("docs-card",{class:m},t.createElement("a",{className:(0,r.Z)(s,"docs-card"),href:e.href,target:"_blank"},d)):t.createElement("docs-card",{class:m},t.createElement(o.default,{to:e.href,className:(0,r.Z)(s,"docs-card")},d))}},88694:function(e,n,a){a.d(n,{Z:function(){return u}});var t=a(87462),r=a(63366),o=a(86010),i=a(67294),s="docsButton_2gXP",l="docsButtonRound_2y-L",c=["href","round"];function u(e){var n,a=e.href,u=e.round,d=void 0!==u&&u,m=(0,r.Z)(e,c);return m.className=(0,o.Z)(((n={})[m.className]=Boolean(m.className),n[s]=!0,n["docs-button"]=!0,n[l]=d,n["docs-button--round"]=d,n)),a?i.createElement("a",(0,t.Z)({href:a,className:"docsButton"},m),m.children):i.createElement("button",(0,t.Z)({className:"docsButton"},m),m.children)}},60565:function(e,n,a){a.r(n),a.d(n,{frontMatter:function(){return m},contentTitle:function(){return v},metadata:function(){return p},toc:function(){return h},default:function(){return g}});var t=a(87462),r=a(63366),o=(a(67294),a(3905)),i=a(47758),s=a(88694),l=a(26396),c=a(58215),u=a(19055),d=["components"],m={sidebar_label:"DNS"},v="DNS",p={unversionedId:"native/dns",id:"version-v5/native/dns",isDocsHomePage:!1,title:"DNS",description:"A plugin for Apache Cordova that enables applications to manually resolve hostnames into an underlying network address. This is mostly useful for determining whether there is a problem with the device's DNS server configuration.",source:"@site/versioned_docs/version-v5/native/dns.md",sourceDirName:"native",slug:"/native/dns",permalink:"/developer/docs/v5/native/dns",editUrl:"https://github.com/ionic-team/ionic-native/edit/master/src/@awesome-cordova-plugins/plugins/dns/index.ts",tags:[],version:"v5",frontMatter:{sidebar_label:"DNS"},sidebar:"version-v5/native",previous:{title:"Dialogs",permalink:"/developer/docs/v5/native/dialogs"},next:{title:"iOS DocumentPicker",permalink:"/developer/docs/v5/native/document-picker"}},h=[{value:"Supported Platforms",id:"supported-platforms",children:[],level:2},{value:"Usage",id:"usage",children:[{value:"React",id:"react",children:[],level:3},{value:"Angular",id:"angular",children:[],level:3}],level:2}],f={toc:h};function g(e){var n=e.components,a=(0,r.Z)(e,d);return(0,o.kt)("wrapper",(0,t.Z)({},f,a,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"dns"},"DNS"),(0,o.kt)("p",null,"A plugin for Apache Cordova that enables applications to manually resolve hostnames into an underlying network address. This is mostly useful for determining whether there is a problem with the device's DNS server configuration."),(0,o.kt)("p",null,(0,o.kt)("a",{href:"https://bitbucket.org/zegeba/cordova-plugin-dns",target:"_blank",rel:"noopener",className:"git-link"},(0,o.kt)("svg",{viewBox:"0 0 512 512"},(0,o.kt)("path",{d:"M416 160c0-35.3-28.7-64-64-64s-64 28.7-64 64c0 23.7 12.9 44.3 32 55.4v8.6c0 19.9-7.8 33.7-25.3 44.9-15.4 9.8-38.1 17.1-67.5 21.5-14 2.1-25.7 6-35.2 10.7V151.4c19.1-11.1 32-31.7 32-55.4 0-35.3-28.7-64-64-64S96 60.7 96 96c0 23.7 12.9 44.3 32 55.4v209.2c-19.1 11.1-32 31.7-32 55.4 0 35.3 28.7 64 64 64s64-28.7 64-64c0-16.6-6.3-31.7-16.7-43.1 1.9-4.9 9.7-16.3 29.4-19.3 38.8-5.8 68.9-15.9 92.3-30.8 36-22.8 55-57 55-98.8v-8.6c19.1-11.1 32-31.7 32-55.4zM160 56c22.1 0 40 17.9 40 40s-17.9 40-40 40-40-17.9-40-40 17.9-40 40-40zm0 400c-22.1 0-40-17.9-40-40s17.9-40 40-40 40 17.9 40 40-17.9 40-40 40zm192-256c-22.1 0-40-17.9-40-40s17.9-40 40-40 40 17.9 40 40-17.9 40-40 40z"}))," ","https://bitbucket.org/zegeba/cordova-plugin-dns")),(0,o.kt)("h2",null,"Stuck on a Cordova issue?"),(0,o.kt)(i.Z,{className:"cordova-ee-card",header:"Don't waste precious time on plugin issues.",href:"https://ionicframework.com/sales?product_of_interest=Ionic%20Native",mdxType:"DocsCard"},(0,o.kt)("div",null,(0,o.kt)("img",{src:"/docs/icons/native-cordova-bot.png",class:"cordova-ee-img"}),(0,o.kt)("p",null,"If you're building a serious project, you can't afford to spend hours troubleshooting. Ionic\u2019s experts offer premium advisory services for both community plugins and premier plugins."),(0,o.kt)(s.Z,{className:"native-ee-detail",mdxType:"DocsButton"},"Contact Us Today!"))),(0,o.kt)("h2",{id:"installation"},(0,o.kt)("a",{href:"#installation"},"Installation")),(0,o.kt)(l.Z,{groupId:"runtime",defaultValue:"Capacitor",values:[{value:"Capacitor",label:"Capacitor"},{value:"Cordova",label:"Cordova"},{value:"Enterprise",label:"Enterprise"}],mdxType:"Tabs"},(0,o.kt)(c.Z,{value:"Capacitor",mdxType:"TabItem"},(0,o.kt)(u.Z,{className:"language-shell",mdxType:"CodeBlock"},"$ npm install cordova-plugin-dns ","\n","$ npm install @awesome-cordova-plugins/dns ","\n","$ ionic cap sync")),(0,o.kt)(c.Z,{value:"Cordova",mdxType:"TabItem"},(0,o.kt)(u.Z,{className:"language-shell",mdxType:"CodeBlock"},"$ ionic cordova plugin add cordova-plugin-dns ","\n","$ npm install @awesome-cordova-plugins/dns ","\n")),(0,o.kt)(c.Z,{value:"Enterprise",mdxType:"TabItem"},(0,o.kt)("blockquote",null,"Ionic Enterprise comes with fully supported and maintained plugins from the Ionic Team. \xa0",(0,o.kt)("a",{class:"btn",href:"https://ionic.io/docs/premier-plugins"},"Learn More")," or if you're interested in an enterprise version of this plugin ",(0,o.kt)("a",{class:"btn",href:"https://ionicframework.com/sales?product_of_interest=Ionic%20Enterprise%20Engine"},"Contact Us")))),(0,o.kt)("h2",{id:"supported-platforms"},"Supported Platforms"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Android")),(0,o.kt)("h2",{id:"usage"},"Usage"),(0,o.kt)("h3",{id:"react"},"React"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"/developer/docs/v5/native/community#react"},"Learn more about using Ionic Native components in React")),(0,o.kt)("h3",{id:"angular"},"Angular"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx"},"import { DNS } from '@awesome-cordova-plugins/dns/ngx';\n\n\nconstructor(private dns: DNS) { }\n\n...\nthis.dns.resolve(hostname)\n  .then(\n    address => console.log('Resolved ' + hostname + ' to ' + address),\n    error => console.log('Failed to resolve ' + hostname + ': ' + error)\n  );\n\n")))}g.isMDXComponent=!0}}]);