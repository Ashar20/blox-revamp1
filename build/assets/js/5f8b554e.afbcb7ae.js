"use strict";(self.webpackChunkionic_docs=self.webpackChunkionic_docs||[]).push([[52224],{3905:function(t,e,n){n.d(e,{Zo:function(){return m},kt:function(){return s}});var a=n(67294);function i(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function r(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function o(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?r(Object(n),!0).forEach((function(e){i(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function l(t,e){if(null==t)return{};var n,a,i=function(t,e){if(null==t)return{};var n,a,i={},r=Object.keys(t);for(a=0;a<r.length;a++)n=r[a],e.indexOf(n)>=0||(i[n]=t[n]);return i}(t,e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);for(a=0;a<r.length;a++)n=r[a],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(i[n]=t[n])}return i}var d=a.createContext({}),p=function(t){var e=a.useContext(d),n=e;return t&&(n="function"==typeof t?t(e):o(o({},e),t)),n},m=function(t){var e=p(t.components);return a.createElement(d.Provider,{value:e},t.children)},u={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},k=a.forwardRef((function(t,e){var n=t.components,i=t.mdxType,r=t.originalType,d=t.parentName,m=l(t,["components","mdxType","originalType","parentName"]),k=p(n),s=i,c=k["".concat(d,".").concat(s)]||k[s]||u[s]||r;return n?a.createElement(c,o(o({ref:e},m),{},{components:n})):a.createElement(c,o({ref:e},m))}));function s(t,e){var n=arguments,i=e&&e.mdxType;if("string"==typeof t||i){var r=n.length,o=new Array(r);o[0]=k;var l={};for(var d in e)hasOwnProperty.call(e,d)&&(l[d]=e[d]);l.originalType=t,l.mdxType="string"==typeof t?t:i,o[1]=l;for(var p=2;p<r;p++)o[p]=n[p];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}k.displayName="MDXCreateElement"},11173:function(t,e,n){n.r(e),n.d(e,{frontMatter:function(){return l},contentTitle:function(){return d},metadata:function(){return p},toc:function(){return m},default:function(){return k}});var a=n(87462),i=n(63366),r=(n(67294),n(3905)),o=["components"],l={},d="Config",p={unversionedId:"angular/config",id:"version-v5/angular/config",isDocsHomePage:!1,title:"Config",description:"Ionic Config provides a way to change the properties of components globally across an app. It can set the app mode, tab button layout, animations, and more.",source:"@site/versioned_docs/version-v5/angular/config.md",sourceDirName:"angular",slug:"/angular/config",permalink:"/docs/v5/angular/config",editUrl:"https://github.com/ionic-team/ionic-docs/edit/main/versioned_docs/version-v5/angular/config.md",tags:[],version:"v5",frontMatter:{},sidebar:"version-v5/docs",previous:{title:"Navigation/Routing",permalink:"/docs/v5/angular/navigation"},next:{title:"Platform",permalink:"/docs/v5/angular/platform"}},m=[{value:"Global Config",id:"global-config",children:[],level:2},{value:"Per-Component Config",id:"per-component-config",children:[],level:2},{value:"Per-Platform Config",id:"per-platform-config",children:[],level:2},{value:"Config Options",id:"config-options",children:[],level:2}],u={toc:m};function k(t){var e=t.components,n=(0,i.Z)(t,o);return(0,r.kt)("wrapper",(0,a.Z)({},u,n,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"config"},"Config"),(0,r.kt)("p",null,"Ionic Config provides a way to change the properties of components globally across an app. It can set the app mode, tab button layout, animations, and more."),(0,r.kt)("h2",{id:"global-config"},"Global Config"),(0,r.kt)("p",null,"To override the initial Ionic config for the app, provide a config in ",(0,r.kt)("inlineCode",{parentName:"p"},"IonicModule.forRoot")," in the ",(0,r.kt)("inlineCode",{parentName:"p"},"app.module.ts")," file."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx"},"import { IonicModule } from '@ionic/angular';\n\n@NgModule({\n  ...\n  imports: [\n    BrowserModule,\n    IonicModule.forRoot({\n      rippleEffect: false,\n      mode: 'md'\n    }),\n    AppRoutingModule\n  ],\n  ...\n})\n")),(0,r.kt)("p",null,"In the above example, we are disabling the Material Design ripple effect across the app, as well as forcing the mode to be Material Design."),(0,r.kt)("h2",{id:"per-component-config"},"Per-Component Config"),(0,r.kt)("p",null,"Ionic Config is not reactive, so it is recommended to use a component's properties when you want to override its default behavior rather than set its config globally."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx"},"import { IonicModule } from '@ionic/angular';\n\n@NgModule({\n  ...\n  imports: [\n    BrowserModule,\n    IonicModule.forRoot({\n      backButtonText: 'Go Back'\n    }),\n    AppRoutingModule\n  ],\n  ...\n})\n")),(0,r.kt)("p",null,"This will set the default text for ",(0,r.kt)("inlineCode",{parentName:"p"},"ion-back-button")," to ",(0,r.kt)("inlineCode",{parentName:"p"},"Go Back"),". However, if you were to change the value of the ",(0,r.kt)("inlineCode",{parentName:"p"},"backButtonText")," config to ",(0,r.kt)("inlineCode",{parentName:"p"},"Do Not Go Back"),", the ",(0,r.kt)("inlineCode",{parentName:"p"},"ion-back-button")," default text would still default to ",(0,r.kt)("inlineCode",{parentName:"p"},"Go Back")," as the component has already been initialized and rendered. Instead, it is recommended to use the ",(0,r.kt)("inlineCode",{parentName:"p"},"text")," property on ",(0,r.kt)("inlineCode",{parentName:"p"},"ion-back-button"),"."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-html"},'<ion-back-button [text]="getBackButtonText()"></ion-back-button>\n')),(0,r.kt)("p",null,"In this example we have used our ",(0,r.kt)("inlineCode",{parentName:"p"},"ion-back-button")," in such a way that the text can be dynamically updated if there were to be a change that warranted it, such as a language or locale change. The ",(0,r.kt)("inlineCode",{parentName:"p"},"getBackButtonText")," method would be responsible for returning the correct text."),(0,r.kt)("h2",{id:"per-platform-config"},"Per-Platform Config"),(0,r.kt)("p",null,"Ionic Config can also be set on a per-platform basis. For example, this allows you to disable animations if the app is being run in a browser on a potentially slower device. Developers can take advantage of the Platform utilities to accomplish this."),(0,r.kt)("p",null,"Since the config is set at runtime, you will not have access to the Platform Dependency Injection. Instead, you can use the underlying functions that the provider uses directly."),(0,r.kt)("p",null,"In the following example, we are disabling all animations in our Ionic app only if the app is running in a mobile web browser.\nThe ",(0,r.kt)("inlineCode",{parentName:"p"},"isPlatform()")," call returns ",(0,r.kt)("inlineCode",{parentName:"p"},"true")," or ",(0,r.kt)("inlineCode",{parentName:"p"},"false")," based upon the platform that is passed in. See the ",(0,r.kt)("a",{parentName:"p",href:"/docs/v5/angular/platform#platforms"},"Platform Documentation")," for a list of possible values."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx"},"import { isPlatform, IonicModule } from '@ionic/angular';\n\n@NgModule({\n  ...\n  imports: [\n    BrowserModule,\n    IonicModule.forRoot({\n      animated: !isPlatform('mobileweb')\n    }),\n    AppRoutingModule\n  ],\n  ...\n})\n")),(0,r.kt)("p",null,"The next example allows you to set an entirely different configuration based upon the platform, falling back to a default config if no platforms match:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx"},"import { isPlatform, IonicModule } from '@ionic/angular';\n\nconst getConfig = () => {\n  if (isPlatform('hybrid')) {\n    return {\n      backButtonText: 'Previous',\n      tabButtonLayout: 'label-hide'\n    }\n  }\n\n  return {\n    menuIcon: 'ellipsis-vertical'\n  }\n}\n@NgModule({\n  ...\n  imports: [\n    BrowserModule,\n    IonicModule.forRoot(getConfig()),\n    AppRoutingModule\n  ],\n  ...\n})\n")),(0,r.kt)("p",null,"Finally, this example allows you to accumulate a config object based upon different platform requirements:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx"},"import { isPlatform, IonicModule } from '@ionic/angular';\n\nconst getConfig = () => {\n  let config = {\n    animated: false\n  };\n\n  if (isPlatform('iphone')) {\n    config = {\n      ...config,\n      backButtonText: 'Previous'\n    }\n  }\n\n  return config;\n}\n@NgModule({\n  ...\n  imports: [\n    BrowserModule,\n    IonicModule.forRoot(getConfig()),\n    AppRoutingModule\n  ],\n  ...\n})\n")),(0,r.kt)("h2",{id:"config-options"},"Config Options"),(0,r.kt)("p",null,"Below is a list of config options that Ionic uses."),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Config"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"actionSheetEnter")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"AnimationBuilder")),(0,r.kt)("td",{parentName:"tr",align:null},"Provides a custom enter animation for all ",(0,r.kt)("inlineCode",{parentName:"td"},"ion-action-sheet"),', overriding the default "animation".')),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"actionSheetLeave")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"AnimationBuilder")),(0,r.kt)("td",{parentName:"tr",align:null},"Provides a custom leave animation for all ",(0,r.kt)("inlineCode",{parentName:"td"},"ion-action-sheet"),', overriding the default "animation".')),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"alertEnter")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"AnimationBuilder")),(0,r.kt)("td",{parentName:"tr",align:null},"Provides a custom enter animation for all ",(0,r.kt)("inlineCode",{parentName:"td"},"ion-alert"),', overriding the default "animation".')),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"alertLeave")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"AnimationBuilder")),(0,r.kt)("td",{parentName:"tr",align:null},"Provides a custom leave animation for all ",(0,r.kt)("inlineCode",{parentName:"td"},"ion-alert"),', overriding the default "animation".')),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"animated")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"boolean")),(0,r.kt)("td",{parentName:"tr",align:null},"If ",(0,r.kt)("inlineCode",{parentName:"td"},"true"),", Ionic will enable all animations and transitions across the app.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"backButtonIcon")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"string")),(0,r.kt)("td",{parentName:"tr",align:null},"Overrides the default icon in all ",(0,r.kt)("inlineCode",{parentName:"td"},"<ion-back-button>")," components.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"backButtonText")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"string")),(0,r.kt)("td",{parentName:"tr",align:null},"Overrides the default text in all ",(0,r.kt)("inlineCode",{parentName:"td"},"<ion-back-button>")," components.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"hardwareBackButton")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"boolean")),(0,r.kt)("td",{parentName:"tr",align:null},"If ",(0,r.kt)("inlineCode",{parentName:"td"},"true"),", Ionic will respond to the hardware back button in an Android device.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"infiniteLoadingSpinner")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"SpinnerTypes")),(0,r.kt)("td",{parentName:"tr",align:null},"Overrides the default spinner type in all ",(0,r.kt)("inlineCode",{parentName:"td"},"<ion-infinite-scroll-content>")," components.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"loadingEnter")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"AnimationBuilder")),(0,r.kt)("td",{parentName:"tr",align:null},"Provides a custom enter animation for all ",(0,r.kt)("inlineCode",{parentName:"td"},"ion-loading"),', overriding the default "animation".')),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"loadingLeave")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"AnimationBuilder")),(0,r.kt)("td",{parentName:"tr",align:null},"Provides a custom leave animation for all ",(0,r.kt)("inlineCode",{parentName:"td"},"ion-loading"),', overriding the default "animation".')),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"loadingSpinner")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"SpinnerTypes")),(0,r.kt)("td",{parentName:"tr",align:null},"Overrides the default spinner for all ",(0,r.kt)("inlineCode",{parentName:"td"},"ion-loading")," overlays.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"menuIcon")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"string")),(0,r.kt)("td",{parentName:"tr",align:null},"Overrides the default icon in all ",(0,r.kt)("inlineCode",{parentName:"td"},"<ion-menu-button>")," components.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"menuType")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"string")),(0,r.kt)("td",{parentName:"tr",align:null},"Overrides the default menu type for all ",(0,r.kt)("inlineCode",{parentName:"td"},"<ion-menu>")," components.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"modalEnter")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"AnimationBuilder")),(0,r.kt)("td",{parentName:"tr",align:null},"Provides a custom enter animation for all ",(0,r.kt)("inlineCode",{parentName:"td"},"ion-modal"),', overriding the default "animation".')),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"modalLeave")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"AnimationBuilder")),(0,r.kt)("td",{parentName:"tr",align:null},"Provides a custom leave animation for all ",(0,r.kt)("inlineCode",{parentName:"td"},"ion-modal"),', overriding the default "animation".')),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"mode")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"Mode")),(0,r.kt)("td",{parentName:"tr",align:null},"The mode determines which platform styles to use for the whole application.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"navAnimation")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"AnimationBuilder")),(0,r.kt)("td",{parentName:"tr",align:null},'Overrides the default "animation" of all ',(0,r.kt)("inlineCode",{parentName:"td"},"ion-nav")," and ",(0,r.kt)("inlineCode",{parentName:"td"},"ion-router-outlet")," across the whole application.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"pickerEnter")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"AnimationBuilder")),(0,r.kt)("td",{parentName:"tr",align:null},"Provides a custom enter animation for all ",(0,r.kt)("inlineCode",{parentName:"td"},"ion-picker"),', overriding the default "animation".')),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"pickerLeave")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"AnimationBuilder")),(0,r.kt)("td",{parentName:"tr",align:null},"Provides a custom leave animation for all ",(0,r.kt)("inlineCode",{parentName:"td"},"ion-picker"),', overriding the default "animation".')),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"popoverEnter")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"AnimationBuilder")),(0,r.kt)("td",{parentName:"tr",align:null},"Provides a custom enter animation for all ",(0,r.kt)("inlineCode",{parentName:"td"},"ion-popover"),', overriding the default "animation".')),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"popoverLeave")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"AnimationBuilder")),(0,r.kt)("td",{parentName:"tr",align:null},"Provides a custom leave animation for all ",(0,r.kt)("inlineCode",{parentName:"td"},"ion-popover"),', overriding the default "animation".')),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"refreshingIcon")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"string")),(0,r.kt)("td",{parentName:"tr",align:null},"Overrides the default icon in all ",(0,r.kt)("inlineCode",{parentName:"td"},"<ion-refresh-content>")," components.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"refreshingSpinner")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"SpinnerTypes")),(0,r.kt)("td",{parentName:"tr",align:null},"Overrides the default spinner type in all ",(0,r.kt)("inlineCode",{parentName:"td"},"<ion-refresh-content>")," components.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"sanitizerEnabled")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"boolean")),(0,r.kt)("td",{parentName:"tr",align:null},"If ",(0,r.kt)("inlineCode",{parentName:"td"},"true"),", Ionic will enable a basic DOM sanitizer on component properties that accept custom HTML.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"spinner")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"SpinnerTypes")),(0,r.kt)("td",{parentName:"tr",align:null},"Overrides the default spinner in all ",(0,r.kt)("inlineCode",{parentName:"td"},"<ion-spinner>")," components.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"statusTap")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"boolean")),(0,r.kt)("td",{parentName:"tr",align:null},"If ",(0,r.kt)("inlineCode",{parentName:"td"},"true"),", clicking or tapping the status bar will cause the content to scroll to the top.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"swipeBackEnabled")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"boolean")),(0,r.kt)("td",{parentName:"tr",align:null},"If ",(0,r.kt)("inlineCode",{parentName:"td"},"true"),', Ionic will enable the "swipe-to-go-back" gesture across the application.')),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"tabButtonLayout")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"TabButtonLayout")),(0,r.kt)("td",{parentName:"tr",align:null},'Overrides the default "layout" of all ',(0,r.kt)("inlineCode",{parentName:"td"},"ion-bar-button")," across the whole application.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"toastEnter")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"AnimationBuilder")),(0,r.kt)("td",{parentName:"tr",align:null},"Provides a custom enter animation for all ",(0,r.kt)("inlineCode",{parentName:"td"},"ion-toast"),', overriding the default "animation".')),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"toastLeave")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"AnimationBuilder")),(0,r.kt)("td",{parentName:"tr",align:null},"Provides a custom leave animation for all ",(0,r.kt)("inlineCode",{parentName:"td"},"ion-toast"),', overriding the default "animation".')))))}k.isMDXComponent=!0}}]);