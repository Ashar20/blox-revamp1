"use strict";(self.webpackChunkionic_docs=self.webpackChunkionic_docs||[]).push([[78307],{58215:function(e,n,t){var a=t(67294);n.Z=function(e){var n=e.children,t=e.hidden,i=e.className;return a.createElement("div",{role:"tabpanel",hidden:t,className:i},n)}},26396:function(e,n,t){t.d(n,{Z:function(){return d}});var a=t(87462),i=t(67294),r=t(72389),o=t(79443);var l=function(){var e=(0,i.useContext)(o.Z);if(null==e)throw new Error('"useUserPreferencesContext" is used outside of "Layout" component.');return e},s=t(89521),c=t(86010),u="tabItem_1uMI";function p(e){var n,t,a,r=e.lazy,o=e.block,p=e.defaultValue,d=e.values,m=e.groupId,h=e.className,v=i.Children.map(e.children,(function(e){if((0,i.isValidElement)(e)&&void 0!==e.props.value)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),g=null!=d?d:v.map((function(e){var n=e.props;return{value:n.value,label:n.label}})),f=(0,s.lx)(g,(function(e,n){return e.value===n.value}));if(f.length>0)throw new Error('Docusaurus error: Duplicate values "'+f.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var k=null===p?p:null!=(n=null!=p?p:null==(t=v.find((function(e){return e.props.default})))?void 0:t.props.value)?n:null==(a=v[0])?void 0:a.props.value;if(null!==k&&!g.some((function(e){return e.value===k})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+k+'" but none of its children has the corresponding value. Available values are: '+g.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var b=l(),w=b.tabGroupChoices,y=b.setTabGroupChoices,N=(0,i.useState)(k),E=N[0],A=N[1],I=[],C=(0,s.o5)().blockElementScrollPositionUntilNextRender;if(null!=m){var S=w[m];null!=S&&S!==E&&g.some((function(e){return e.value===S}))&&A(S)}var Z=function(e){var n=e.currentTarget,t=I.indexOf(n),a=g[t].value;a!==E&&(C(n),A(a),null!=m&&y(m,a))},T=function(e){var n,t=null;switch(e.key){case"ArrowRight":var a=I.indexOf(e.currentTarget)+1;t=I[a]||I[0];break;case"ArrowLeft":var i=I.indexOf(e.currentTarget)-1;t=I[i]||I[I.length-1]}null==(n=t)||n.focus()};return i.createElement("div",{className:"tabs-container"},i.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,c.Z)("tabs",{"tabs--block":o},h)},g.map((function(e){var n=e.value,t=e.label;return i.createElement("li",{role:"tab",tabIndex:E===n?0:-1,"aria-selected":E===n,className:(0,c.Z)("tabs__item",u,{"tabs__item--active":E===n}),key:n,ref:function(e){return I.push(e)},onKeyDown:T,onFocus:Z,onClick:Z},null!=t?t:n)}))),r?(0,i.cloneElement)(v.filter((function(e){return e.props.value===E}))[0],{className:"margin-vert--md"}):i.createElement("div",{className:"margin-vert--md"},v.map((function(e,n){return(0,i.cloneElement)(e,{key:n,hidden:e.props.value!==E})}))))}function d(e){var n=(0,r.Z)();return i.createElement(p,(0,a.Z)({key:String(n)},e))}},47758:function(e,n,t){t.d(n,{Z:function(){return s}});var a=t(67294),i=t(86010),r=t(39960),o=t(44996),l="card_3DNo";var s=function(e){var n,t=void 0===e.href,s=void 0!==e.href&&/^http/.test(e.href),c="undefined"===e.header?null:a.createElement("header",{className:"Card-header"},e.header),u=e.hoverIcon||e.icon,p=a.createElement(a.Fragment,null,e.img&&a.createElement("img",{src:(0,o.Z)(e.img),className:"Card-image"}),a.createElement("div",{className:"Card-container"},(e.icon||u)&&a.createElement("div",{className:"Card-icon-row"},e.icon&&a.createElement("img",{src:(0,o.Z)(e.icon),className:"Card-icon Card-icon-default"}),u&&a.createElement("img",{src:(0,o.Z)(u),className:"Card-icon Card-icon-hover"})),e.ionicon&&a.createElement("ion-icon",{name:e.ionicon,className:"Card-ionicon"}),e.iconset&&a.createElement("div",{className:"Card-iconset__container"},e.iconset.split(",").map((function(n,t){return a.createElement("img",{src:(0,o.Z)(n),className:"Card-icon "+(t===e.activeIndex?"Card-icon-active":""),"data-index":t,key:t})}))),e.header&&c,a.createElement("div",{className:"Card-content"},e.children))),d=(0,i.Z)(((n={"Card-with-image":void 0!==e.img,"Card-without-image":void 0===e.img,"Card-size-lg":"lg"===e.size})[e.className]=e.className,n));return t?a.createElement("docs-card",{class:d},a.createElement("div",{className:(0,i.Z)(l,"docs-card")},p)):s?a.createElement("docs-card",{class:d},a.createElement("a",{className:(0,i.Z)(l,"docs-card"),href:e.href,target:"_blank"},p)):a.createElement("docs-card",{class:d},a.createElement(r.default,{to:e.href,className:(0,i.Z)(l,"docs-card")},p))}},88694:function(e,n,t){t.d(n,{Z:function(){return u}});var a=t(87462),i=t(63366),r=t(86010),o=t(67294),l="docsButton_2gXP",s="docsButtonRound_2y-L",c=["href","round"];function u(e){var n,t=e.href,u=e.round,p=void 0!==u&&u,d=(0,i.Z)(e,c);return d.className=(0,r.Z)(((n={})[d.className]=Boolean(d.className),n[l]=!0,n["docs-button"]=!0,n[s]=p,n["docs-button--round"]=p,n)),t?o.createElement("a",(0,a.Z)({href:t,className:"docsButton"},d),d.children):o.createElement("button",(0,a.Z)({className:"docsButton"},d),d.children)}},93498:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return d},contentTitle:function(){return m},metadata:function(){return h},toc:function(){return v},default:function(){return f}});var a=t(87462),i=t(63366),r=(t(67294),t(3905)),o=t(47758),l=t(88694),s=t(26396),c=t(58215),u=t(19055),p=["components"],d={title:"Sign In With Apple"},m=void 0,h={unversionedId:"native/sign-in-with-apple",id:"native/sign-in-with-apple",isDocsHomePage:!1,title:"Sign In With Apple",description:"Sign in With Apple: Login to Apps & Websites With Apple ID",source:"@site/docs/native/sign-in-with-apple.md",sourceDirName:"native",slug:"/native/sign-in-with-apple",permalink:"/docs/native/sign-in-with-apple",editUrl:"https://github.com/ionic-team/ionic-native/edit/master/src/@awesome-cordova-plugins/plugins/sign-in-with-apple/index.ts",tags:[],version:"current",frontMatter:{title:"Sign In With Apple"},sidebar:"native",previous:{title:"Shake",permalink:"/docs/native/shake"},next:{title:"Smartlook",permalink:"/docs/native/smartlook"}},v=[{value:"Supported Platforms",id:"supported-platforms",children:[],level:2},{value:"Usage",id:"usage",children:[{value:"React",id:"react",children:[],level:3},{value:"Angular",id:"angular",children:[],level:3}],level:2}],g={toc:v};function f(e){var n=e.components,t=(0,i.Z)(e,p);return(0,r.kt)("wrapper",(0,a.Z)({},g,t,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("head",null,(0,r.kt)("title",null,"Sign in With Apple: Login to Apps & Websites With Apple ID"),(0,r.kt)("meta",{name:"description",content:"Sign in with Apple makes it easy for users to sign in to your apps and websites using their Apple ID. Read to learn more about installation and usage."})),(0,r.kt)("p",null,"Sign in with Apple makes it easy for users to sign in to your apps and websites using their Apple ID.\nInstead of filling out forms, verifying email addresses, and choosing new passwords,\nthey can use Sign in with Apple to set up an account and start using your app right away.\nAll accounts are protected with two-factor authentication for superior security,\nand Apple will not track users\u2019 activity in your app or website.\n",(0,r.kt)("em",{parentName:"p"},"Source:")," ",(0,r.kt)("a",{parentName:"p",href:"https://developer.apple.com/sign-in-with-apple/"},"https://developer.apple.com/sign-in-with-apple/")),(0,r.kt)("p",null,(0,r.kt)("a",{href:"https://github.com/twogate/cordova-plugin-sign-in-with-apple",target:"_blank",rel:"noopener",className:"git-link"},(0,r.kt)("svg",{viewBox:"0 0 512 512"},(0,r.kt)("path",{d:"M416 160c0-35.3-28.7-64-64-64s-64 28.7-64 64c0 23.7 12.9 44.3 32 55.4v8.6c0 19.9-7.8 33.7-25.3 44.9-15.4 9.8-38.1 17.1-67.5 21.5-14 2.1-25.7 6-35.2 10.7V151.4c19.1-11.1 32-31.7 32-55.4 0-35.3-28.7-64-64-64S96 60.7 96 96c0 23.7 12.9 44.3 32 55.4v209.2c-19.1 11.1-32 31.7-32 55.4 0 35.3 28.7 64 64 64s64-28.7 64-64c0-16.6-6.3-31.7-16.7-43.1 1.9-4.9 9.7-16.3 29.4-19.3 38.8-5.8 68.9-15.9 92.3-30.8 36-22.8 55-57 55-98.8v-8.6c19.1-11.1 32-31.7 32-55.4zM160 56c22.1 0 40 17.9 40 40s-17.9 40-40 40-40-17.9-40-40 17.9-40 40-40zm0 400c-22.1 0-40-17.9-40-40s17.9-40 40-40 40 17.9 40 40-17.9 40-40 40zm192-256c-22.1 0-40-17.9-40-40s17.9-40 40-40 40 17.9 40 40-17.9 40-40 40z"}))," https://github.com/twogate/cordova-plugin-sign-in-with-apple")),(0,r.kt)("h2",null,"Stuck on a Cordova issue?"),(0,r.kt)(o.Z,{className:"cordova-ee-card",header:"Don't waste precious time on plugin issues.",href:"https://ionicframework.com/sales?product_of_interest=Ionic%20Native",mdxType:"DocsCard"},(0,r.kt)("div",null,(0,r.kt)("img",{src:"/docs/icons/native-cordova-bot.png",class:"cordova-ee-img"}),(0,r.kt)("p",null,"If you're building a serious project, you can't afford to spend hours troubleshooting. Ionic\u2019s experts offer premium advisory services for both community plugins and premier plugins."),(0,r.kt)(l.Z,{className:"native-ee-detail",mdxType:"DocsButton"},"Contact Us Today!"))),(0,r.kt)("h2",{id:"installation"},(0,r.kt)("a",{href:"#installation"},"Installation")),(0,r.kt)(s.Z,{defaultValue:"Capacitor",groupId:"runtime",values:[{value:"Capacitor",label:"Capacitor"},{value:"Cordova",label:"Cordova"},{value:"Enterprise",label:"Enterprise"}],mdxType:"Tabs"},(0,r.kt)(c.Z,{value:"Capacitor",mdxType:"TabItem"},(0,r.kt)(u.Z,{className:"language-shell",mdxType:"CodeBlock"},"$ npm install cordova-plugin-sign-in-with-apple ","\n","$ npm install @awesome-cordova-plugins/sign-in-with-apple ","\n","$ ionic cap sync")),(0,r.kt)(c.Z,{value:"Cordova",mdxType:"TabItem"},(0,r.kt)(u.Z,{className:"language-shell",mdxType:"CodeBlock"},"$ ionic cordova plugin add cordova-plugin-sign-in-with-apple ","\n","$ npm install @awesome-cordova-plugins/sign-in-with-apple ","\n")),(0,r.kt)(c.Z,{value:"Enterprise",mdxType:"TabItem"},(0,r.kt)("blockquote",null,"Ionic Enterprise comes with fully supported and maintained plugins from the Ionic Team. \xa0",(0,r.kt)("a",{class:"btn",href:"https://ionic.io/docs/premier-plugins"},"Learn More")," or if you're interested in an enterprise version of this plugin ",(0,r.kt)("a",{class:"btn",href:"https://ionicframework.com/sales?product_of_interest=Ionic%20Enterprise%20Engine"},"Contact Us")))),(0,r.kt)("h2",{id:"supported-platforms"},"Supported Platforms"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"iOS")),(0,r.kt)("h2",{id:"usage"},"Usage"),(0,r.kt)("h3",{id:"react"},"React"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/docs/native/community#react"},"Learn more about using Ionic Native components in React")),(0,r.kt)("h3",{id:"angular"},"Angular"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"import { SignInWithApple, AppleSignInResponse, AppleSignInErrorResponse, ASAuthorizationAppleIDRequest } from '@awesome-cordova-plugins/sign-in-with-apple/ngx';\n\n\nconstructor(private signInWithApple: SignInWithApple) { }\n\n...\n\n\n  this.signInWithApple.signin({\n    requestedScopes: [\n      ASAuthorizationAppleIDRequest.ASAuthorizationScopeFullName,\n      ASAuthorizationAppleIDRequest.ASAuthorizationScopeEmail\n    ]\n  })\n  .then((res: AppleSignInResponse) => {\n    // https://developer.apple.com/documentation/signinwithapplerestapi/verifying_a_user\n    alert('Send token to apple for verification: ' + res.identityToken);\n    console.log(res);\n  })\n  .catch((error: AppleSignInErrorResponse) => {\n    alert(error.code + ' ' + error.localizedDescription);\n    console.error(error);\n  });\n\n")))}f.isMDXComponent=!0}}]);