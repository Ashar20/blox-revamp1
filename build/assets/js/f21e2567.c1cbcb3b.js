"use strict";(self.webpackChunkionic_docs=self.webpackChunkionic_docs||[]).push([[69315],{3905:function(e,t,n){n.d(t,{Zo:function(){return s},kt:function(){return h}});var o=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,o,a=function(e,t){if(null==e)return{};var n,o,a={},i=Object.keys(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=o.createContext({}),u=function(e){var t=o.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},s=function(e){var t=u(e.components);return o.createElement(p.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},d=o.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,p=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),d=u(n),h=a,m=d["".concat(p,".").concat(h)]||d[h]||c[h]||i;return n?o.createElement(m,r(r({ref:t},s),{},{components:n})):o.createElement(m,r({ref:t},s))}));function h(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,r=new Array(i);r[0]=d;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:a,r[1]=l;for(var u=2;u<i;u++)r[u]=n[u];return o.createElement.apply(null,r)}return o.createElement.apply(null,n)}d.displayName="MDXCreateElement"},29689:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return l},contentTitle:function(){return p},metadata:function(){return u},toc:function(){return s},default:function(){return d}});var o=n(87462),a=n(63366),i=(n(67294),n(3905)),r=["components"],l={sidebar_label:"Navigation/Routing"},p="Angular Navigation",u={unversionedId:"angular/navigation",id:"version-v5/angular/navigation",isDocsHomePage:!1,title:"Angular Navigation",description:"This guide covers how routing works in an app built with Ionic and Angular.",source:"@site/versioned_docs/version-v5/angular/navigation.md",sourceDirName:"angular",slug:"/angular/navigation",permalink:"/docs/v5/angular/navigation",editUrl:"https://github.com/ionic-team/ionic-docs/edit/main/versioned_docs/version-v5/angular/navigation.md",tags:[],version:"v5",frontMatter:{sidebar_label:"Navigation/Routing"},sidebar:"version-v5/docs",previous:{title:"Lifecycle",permalink:"/docs/v5/angular/lifecycle"},next:{title:"Config",permalink:"/docs/v5/angular/config"}},s=[{value:"A simple Route",id:"a-simple-route",children:[],level:2},{value:"Handling Redirects",id:"handling-redirects",children:[],level:2},{value:"Navigating to different routes",id:"navigating-to-different-routes",children:[],level:2},{value:"Lazy loading routes",id:"lazy-loading-routes",children:[],level:2},{value:"Live Example",id:"live-example",children:[],level:2},{value:"Working with Tabs",id:"working-with-tabs",children:[],level:2}],c={toc:s};function d(e){var t=e.components,n=(0,a.Z)(e,r);return(0,i.kt)("wrapper",(0,o.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"angular-navigation"},"Angular Navigation"),(0,i.kt)("p",null,"This guide covers how routing works in an app built with Ionic and Angular."),(0,i.kt)("p",null,"The Angular Router is one of the most important libraries in an Angular application. Without it, apps would be single view/single context apps or would not be able to maintain their navigation state on browser reloads. With Angular Router, we can create rich apps that are linkable and have rich animations (when paired with Ionic of course). Let's look at the basics of the Angular Router and how we can configure it for Ionic apps."),(0,i.kt)("h2",{id:"a-simple-route"},"A simple Route"),(0,i.kt)("p",null,"For most apps, having some sort of route is often required. The most basic configuration looks a bit like this:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-tsx"},"\nimport { RouterModule } from '@angular/router';\n\n@NgModule({\n  imports: [\n  ...\n  RouterModule.forRoot([\n    { path: '', component: LoginComponent },\n    { path: 'detail', component: DetailComponent },\n  ])\n  ],\n})\n")),(0,i.kt)("p",null,"The simplest breakdown for what we have here is a path/component lookup. When our app loads, the router kicks things off by reading the URL the user is trying to load. In our sample, our route looks for ",(0,i.kt)("inlineCode",{parentName:"p"},"''"),", which is essentially our index route. So for this, we load the ",(0,i.kt)("inlineCode",{parentName:"p"},"LoginComponent"),". Fairly straight forward. This pattern of matching paths with a component continues for every entry we have in the router config. But what if we wanted to load a different path on our initial load?"),(0,i.kt)("h2",{id:"handling-redirects"},"Handling Redirects"),(0,i.kt)("p",null,"For this we can use router redirects. Redirects work the same way that a typical route object does, but just includes a few different keys."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-tsx"},"[\n  { path: '', redirectTo: 'login', pathMatch: 'full' },\n  { path: 'login', component: LoginComponent },\n  { path: 'detail', component: DetailComponent },\n];\n")),(0,i.kt)("p",null,"In our redirect, we look for the index path of our app. Then if we load that, we redirect to the ",(0,i.kt)("inlineCode",{parentName:"p"},"login")," route. The last key of ",(0,i.kt)("inlineCode",{parentName:"p"},"pathMatch")," is required to tell the router how it should look up the path."),(0,i.kt)("p",null,"Since we use ",(0,i.kt)("inlineCode",{parentName:"p"},"full"),", we're telling the router that we should compare the full path, even if ends up being something like ",(0,i.kt)("inlineCode",{parentName:"p"},"/route1/route2/route3"),". Meaning that if we have:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-tsx"},"{ path: '/route1/route2/route3', redirectTo: 'login', pathMatch: 'full' },\n{ path: 'login', component: LoginComponent },\n")),(0,i.kt)("p",null,"And load ",(0,i.kt)("inlineCode",{parentName:"p"},"/route1/route2/route3")," we'll redirect. But if we loaded ",(0,i.kt)("inlineCode",{parentName:"p"},"/route1/route2/route4"),", we won't redirect, as the paths don't match fully."),(0,i.kt)("p",null,"Alternatively, if we used:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-tsx"},"{ path: '/route1/route2', redirectTo: 'login', pathMatch: 'prefix' },\n{ path: 'login', component: LoginComponent },\n")),(0,i.kt)("p",null,"Then load both ",(0,i.kt)("inlineCode",{parentName:"p"},"/route1/route2/route3")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"/route1/route2/route4"),", we'll be redirected for both routes. This is because ",(0,i.kt)("inlineCode",{parentName:"p"},"pathMatch: 'prefix'")," will match only part of the path."),(0,i.kt)("h2",{id:"navigating-to-different-routes"},"Navigating to different routes"),(0,i.kt)("p",null,"Talking about routes is good and all, but how does one actually navigate to said routes? For this, we can use the ",(0,i.kt)("inlineCode",{parentName:"p"},"routerLink")," directive. Let's go back and take our simple router setup from earlier:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts"},"RouterModule.forRoot([\n  { path: '', component: LoginComponent },\n  { path: 'detail', component: DetailComponent },\n]);\n")),(0,i.kt)("p",null,"Now from the ",(0,i.kt)("inlineCode",{parentName:"p"},"LoginComponent"),", we can use the following HTML to navigate to the detail route."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-html"},'<ion-header>\n  <ion-toolbar>\n    <ion-title>Login</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content class="ion-padding">\n  <ion-button [routerLink]="[\'/detail\']">Go to detail</ion-button>\n</ion-content>\n')),(0,i.kt)("p",null,"The important part here is the ",(0,i.kt)("inlineCode",{parentName:"p"},"ion-button")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"routerLink")," directive. RouterLink works on a similar idea as typical ",(0,i.kt)("inlineCode",{parentName:"p"},"href"),"s, but instead of building out the URL as a string, it can be built as an array, which can provide more complicated paths."),(0,i.kt)("p",null,"We also can programmatically navigate in our app by using the router API."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-tsx"},"import { Component } from '@angular/core';\nimport { Router } from '@angular/router';\n\n@Component({\n  ...\n})\nexport class LoginComponent {\n\n  constructor(private router: Router){}\n\n  navigate(){\n    this.router.navigate(['/detail'])\n  }\n}\n")),(0,i.kt)("p",null,"Both options provide the same navigation mechanism, just fitting different use cases."),(0,i.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"A note on navigation with relative URLs: Currently, to support multiple navigation stacks, relative URLs are something not supported"))),(0,i.kt)("h2",{id:"lazy-loading-routes"},"Lazy loading routes"),(0,i.kt)("p",null,"Now the current way our routes are setup makes it so they are included in the same chunk as the root app.module, which is not ideal. Instead, the router has a setup that allows the components to be isolated to their own chunks."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-tsx"},"\nimport { RouterModule } from '@angular/router';\n\n@NgModule({\n  imports: [\n  ...\n  RouterModule.forRoot([\n    { path: '', redirectTo: 'login', pathMatch: 'full' },\n    { path: 'login', loadChildren: () => import('./login/login.module').then(m => m.LoginModule) },\n    { path: 'detail', loadChildren: () => import('./detail/detail.module').then(m => m.DetailModule) }\n  ])\n  ],\n})\n")),(0,i.kt)("p",null,"While similar, the ",(0,i.kt)("inlineCode",{parentName:"p"},"loadChildren")," property is a way to reference a module by using native import instead of a component directly. In order to do this though, we need to create a module for each of the components."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-tsx"},"...\nimport { RouterModule } from '@angular/router';\nimport { LoginComponent } from './login.component';\n\n@NgModule({\n  imports: [\n  ...\n  RouterModule.forChild([\n    { path: '', component: LoginComponent },\n  ])\n  ],\n})\n")),(0,i.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"We're excluding some additional content and only including the necessary parts."))),(0,i.kt)("p",null,"Here, we have a typical Angular Module setup, along with a RouterModule import, but we're now using ",(0,i.kt)("inlineCode",{parentName:"p"},"forChild")," and declaring the component in that setup. With this setup, when we run our build, we will produce separate chunks for both the app component, the login component, and the detail component."),(0,i.kt)("h2",{id:"live-example"},"Live Example"),(0,i.kt)("p",null,"If you would prefer to get hands on with the concepts and code described above, please checkout our ",(0,i.kt)("a",{parentName:"p",href:"https://stackblitz.com/edit/ionic-angular-routing?file=src/app/app-routing.module.ts"},"live example")," of the topics above on StackBlitz."),(0,i.kt)("h2",{id:"working-with-tabs"},"Working with Tabs"),(0,i.kt)("p",null,"With Tabs, the Angular Router provides Ionic the mechanism to know what components should be loaded, but the heavy lifting is actually done by the tabs component. Let's look at a simple example."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts"},"const routes: Routes = [\n  {\n    path: 'tabs',\n    component: TabsPage,\n    children: [\n      {\n        path: 'tab1',\n        children: [\n          {\n            path: '',\n            loadChildren: () => import('../tab1/tab1.module').then((m) => m.Tab1PageModule),\n          },\n        ],\n      },\n      {\n        path: '',\n        redirectTo: '/tabs/tab1',\n        pathMatch: 'full',\n      },\n    ],\n  },\n  {\n    path: '',\n    redirectTo: '/tabs/tab1',\n    pathMatch: 'full',\n  },\n];\n")),(0,i.kt)("p",null,'Here we have a "tabs" path that we load. In this example we call the path "tabs", but the name of the paths can be changed. They can be called whatever fits your app. In that route object, we can define a child route as well. In this example, the top level child route "tab1" acts as our "outlet", and can load additional child routes. For this example, we have a single sub-child-route, which just loads a new component. The markup for the tab is as followed:'),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-html"},'<ion-tabs>\n  <ion-tab-bar slot="bottom">\n    <ion-tab-button tab="tab1">\n      <ion-icon name="flash"></ion-icon>\n      <ion-label>Tab One</ion-label>\n    </ion-tab-button>\n  </ion-tab-bar>\n</ion-tabs>\n')),(0,i.kt)("p",null,"If you've built apps with Ionic before, this should feel familiar. We create a ",(0,i.kt)("inlineCode",{parentName:"p"},"ion-tabs")," component, and provide a ",(0,i.kt)("inlineCode",{parentName:"p"},"ion-tab-bar"),". The ",(0,i.kt)("inlineCode",{parentName:"p"},"ion-tab-bar")," provides a ",(0,i.kt)("inlineCode",{parentName:"p"},"ion-tab-button")," with a ",(0,i.kt)("inlineCode",{parentName:"p"},"tab"),' property that is associated with the tab "outlet" in the router config. Note that the latest version of ',(0,i.kt)("inlineCode",{parentName:"p"},"@ionic/angular")," no longer requires ",(0,i.kt)("inlineCode",{parentName:"p"},"<ion-tab>"),", but instead allows developers to fully customize the tab bar, and the single source of truth lives within the router configuration."))}d.isMDXComponent=!0}}]);