"use strict";(self.webpackChunkionic_docs=self.webpackChunkionic_docs||[]).push([[21670],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return c}});var a=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=a.createContext({}),p=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},u=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},h={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),d=p(n),c=o,m=d["".concat(s,".").concat(c)]||d[c]||h[c]||i;return n?a.createElement(m,r(r({ref:t},u),{},{components:n})):a.createElement(m,r({ref:t},u))}));function c(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,r=new Array(i);r[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:o,r[1]=l;for(var p=2;p<i;p++)r[p]=n[p];return a.createElement.apply(null,r)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},32727:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return s},contentTitle:function(){return p},metadata:function(){return u},toc:function(){return h},default:function(){return c}});var a=n(87462),o=n(63366),i=(n(67294),n(3905)),r=n(44996),l=["components"],s={title:"Angular Navigation",sidebar_label:"Navigation/Routing"},p=void 0,u={unversionedId:"Content Hub/navigation",id:"Content Hub/navigation",isDocsHomePage:!1,title:"Angular Navigation",description:"Angular Navigation: How Routing & Redirects Work in Angular Apps",source:"@site/docs/Content Hub/navigation.md",sourceDirName:"Content Hub",slug:"/Content Hub/navigation",permalink:"/docs/Content Hub/navigation",editUrl:"https://github.com/ionic-team/ionic-docs/edit/main/docs/Content Hub/navigation.md",tags:[],version:"current",frontMatter:{title:"Angular Navigation",sidebar_label:"Navigation/Routing"}},h=[{value:"A simple Route",id:"a-simple-route",children:[],level:2},{value:"Handling Redirects",id:"handling-redirects",children:[],level:2},{value:"Navigating to different routes",id:"navigating-to-different-routes",children:[{value:"Navigating using LocationStrategy.historyGo",id:"navigating-using-locationstrategyhistorygo",children:[],level:3}],level:2},{value:"Lazy loading routes",id:"lazy-loading-routes",children:[],level:2},{value:"Live Example",id:"live-example",children:[],level:2},{value:"Linear Routing versus Non-Linear Routing",id:"linear-routing-versus-non-linear-routing",children:[{value:"Linear Routing",id:"linear-routing",children:[],level:3},{value:"Non-Linear Routing",id:"non-linear-routing",children:[],level:3},{value:"Which one should I choose?",id:"which-one-should-i-choose",children:[],level:3}],level:2},{value:"Shared URLs versus Nested Routes",id:"shared-urls-versus-nested-routes",children:[{value:"Shared URLs",id:"shared-urls",children:[],level:3},{value:"Nested Routes",id:"nested-routes",children:[],level:3},{value:"Which one should I choose?",id:"which-one-should-i-choose-1",children:[],level:3}],level:2},{value:"Working with Tabs",id:"working-with-tabs",children:[{value:"How Tabs in Ionic Work",id:"how-tabs-in-ionic-work",children:[],level:3},{value:"Child Routes within Tabs",id:"child-routes-within-tabs",children:[],level:3},{value:"Switching Between Tabs",id:"switching-between-tabs",children:[],level:3}],level:2}],d={toc:h};function c(e){var t=e.components,n=(0,o.Z)(e,l);return(0,i.kt)("wrapper",(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("head",null,(0,i.kt)("title",null,"Angular Navigation: How Routing & Redirects Work in Angular Apps"),(0,i.kt)("meta",{name:"description",content:"Our Angular Navigation guide covers how routing works in an app built with Ionic and Angular. Read to learn more about basic routing and redirects in Angular."})),(0,i.kt)("p",null,"This guide covers how routing works in an app built with Ionic and Angular."),(0,i.kt)("p",null,"The Angular Router is one of the most important libraries in an Angular application. Without it, apps would be single view/single context apps or would not be able to maintain their navigation state on browser reloads. With Angular Router, we can create rich apps that are linkable and have rich animations (when paired with Ionic of course). Let's look at the basics of the Angular Router and how we can configure it for Ionic apps."),(0,i.kt)("h2",{id:"a-simple-route"},"A simple Route"),(0,i.kt)("p",null,"For most apps, having some sort of route is often required. The most basic configuration looks a bit like this:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-tsx"},"\nimport { RouterModule } from '@angular/router';\n\n@NgModule({\n  imports: [\n  ...\n  RouterModule.forRoot([\n    { path: '', component: LoginComponent },\n    { path: 'detail', component: DetailComponent },\n  ])\n  ],\n})\n")),(0,i.kt)("p",null,"The simplest breakdown for what we have here is a path/component lookup. When our app loads, the router kicks things off by reading the URL the user is trying to load. In our sample, our route looks for ",(0,i.kt)("inlineCode",{parentName:"p"},"''"),", which is essentially our index route. So for this, we load the ",(0,i.kt)("inlineCode",{parentName:"p"},"LoginComponent"),". Fairly straight forward. This pattern of matching paths with a component continues for every entry we have in the router config. But what if we wanted to load a different path on our initial load?"),(0,i.kt)("h2",{id:"handling-redirects"},"Handling Redirects"),(0,i.kt)("p",null,"For this we can use router redirects. Redirects work the same way that a typical route object does, but just includes a few different keys."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-tsx"},"[\n  { path: '', redirectTo: 'login', pathMatch: 'full' },\n  { path: 'login', component: LoginComponent },\n  { path: 'detail', component: DetailComponent },\n];\n")),(0,i.kt)("p",null,"In our redirect, we look for the index path of our app. Then if we load that, we redirect to the ",(0,i.kt)("inlineCode",{parentName:"p"},"login")," route. The last key of ",(0,i.kt)("inlineCode",{parentName:"p"},"pathMatch")," is required to tell the router how it should look up the path."),(0,i.kt)("p",null,"Since we use ",(0,i.kt)("inlineCode",{parentName:"p"},"full"),", we're telling the router that we should compare the full path, even if ends up being something like ",(0,i.kt)("inlineCode",{parentName:"p"},"/route1/route2/route3"),". Meaning that if we have:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-tsx"},"{ path: '/route1/route2/route3', redirectTo: 'login', pathMatch: 'full' },\n{ path: 'login', component: LoginComponent },\n")),(0,i.kt)("p",null,"And load ",(0,i.kt)("inlineCode",{parentName:"p"},"/route1/route2/route3")," we'll redirect. But if we loaded ",(0,i.kt)("inlineCode",{parentName:"p"},"/route1/route2/route4"),", we won't redirect, as the paths don't match fully."),(0,i.kt)("p",null,"Alternatively, if we used:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-tsx"},"{ path: '/route1/route2', redirectTo: 'login', pathMatch: 'prefix' },\n{ path: 'login', component: LoginComponent },\n")),(0,i.kt)("p",null,"Then load both ",(0,i.kt)("inlineCode",{parentName:"p"},"/route1/route2/route3")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"/route1/route2/route4"),", we'll be redirected for both routes. This is because ",(0,i.kt)("inlineCode",{parentName:"p"},"pathMatch: 'prefix'")," will match only part of the path."),(0,i.kt)("h2",{id:"navigating-to-different-routes"},"Navigating to different routes"),(0,i.kt)("p",null,"Talking about routes is good and all, but how does one actually navigate to said routes? For this, we can use the ",(0,i.kt)("inlineCode",{parentName:"p"},"routerLink")," directive. Let's go back and take our simple router setup from earlier:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts"},"RouterModule.forRoot([\n  { path: '', component: LoginComponent },\n  { path: 'detail', component: DetailComponent },\n]);\n")),(0,i.kt)("p",null,"Now from the ",(0,i.kt)("inlineCode",{parentName:"p"},"LoginComponent"),", we can use the following HTML to navigate to the detail route."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-html"},'<ion-header>\n  <ion-toolbar>\n    <ion-title>Login</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content class="ion-padding">\n  <ion-button [routerLink]="[\'/detail\']">Go to detail</ion-button>\n</ion-content>\n')),(0,i.kt)("p",null,"The important part here is the ",(0,i.kt)("inlineCode",{parentName:"p"},"ion-button")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"routerLink")," directive. RouterLink works on a similar idea as typical ",(0,i.kt)("inlineCode",{parentName:"p"},"href"),"s, but instead of building out the URL as a string, it can be built as an array, which can provide more complicated paths."),(0,i.kt)("p",null,"We also can programmatically navigate in our app by using the router API."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-tsx"},"import { Component } from '@angular/core';\nimport { Router } from '@angular/router';\n\n@Component({\n  ...\n})\nexport class LoginComponent {\n\n  constructor(private router: Router){}\n\n  navigate(){\n    this.router.navigate(['/detail'])\n  }\n}\n")),(0,i.kt)("p",null,"Both options provide the same navigation mechanism, just fitting different use cases."),(0,i.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"A note on navigation with relative URLs: Currently, to support multiple navigation stacks, relative URLs are something not supported"))),(0,i.kt)("h3",{id:"navigating-using-locationstrategyhistorygo"},"Navigating using LocationStrategy.historyGo"),(0,i.kt)("p",null,"Angular Router has a ",(0,i.kt)("a",{parentName:"p",href:"https://angular.io/api/common/LocationStrategy#historyGo"},"LocationStrategy.historyGo")," method that allows developers to move forward or backward through the application history. Let's take a look at an example."),(0,i.kt)("p",null,"Say you have the following application history:"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"/pageA")," --\x3e ",(0,i.kt)("inlineCode",{parentName:"p"},"/pageB")," --\x3e ",(0,i.kt)("inlineCode",{parentName:"p"},"/pageC")),(0,i.kt)("p",null,"If you were to call ",(0,i.kt)("inlineCode",{parentName:"p"},"LocationStrategy.historyGo(-2)")," on ",(0,i.kt)("inlineCode",{parentName:"p"},"/pageC"),", you would be brought back to ",(0,i.kt)("inlineCode",{parentName:"p"},"/pageA"),". If you then called ",(0,i.kt)("inlineCode",{parentName:"p"},"LocationStrategy.historyGo(2)"),", you would be brought to ",(0,i.kt)("inlineCode",{parentName:"p"},"/pageC"),"."),(0,i.kt)("p",null,"An key characteristic of ",(0,i.kt)("inlineCode",{parentName:"p"},"LocationStrategy.historyGo()")," is that it expects your application history to be linear. This means that ",(0,i.kt)("inlineCode",{parentName:"p"},"LocationStrategy.historyGo()")," should not be used in applications that make use of non-linear routing. See ",(0,i.kt)("a",{parentName:"p",href:"#linear-routing-versus-non-linear-routing"},"Linear Routing versus Non-Linear Routing")," for more information."),(0,i.kt)("h2",{id:"lazy-loading-routes"},"Lazy loading routes"),(0,i.kt)("p",null,"Now the current way our routes are setup makes it so they are included in the same chunk as the root app.module, which is not ideal. Instead, the router has a setup that allows the components to be isolated to their own chunks."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-tsx"},"\nimport { RouterModule } from '@angular/router';\n\n@NgModule({\n  imports: [\n  ...\n  RouterModule.forRoot([\n    { path: '', redirectTo: 'login', pathMatch: 'full' },\n    { path: 'login', loadChildren: () => import('./login/login.module').then(m => m.LoginModule) },\n    { path: 'detail', loadChildren: () => import('./detail/detail.module').then(m => m.DetailModule) }\n  ])\n  ],\n})\n")),(0,i.kt)("p",null,"While similar, the ",(0,i.kt)("inlineCode",{parentName:"p"},"loadChildren")," property is a way to reference a module by using native import instead of a component directly. In order to do this though, we need to create a module for each of the components."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-tsx"},"...\nimport { RouterModule } from '@angular/router';\nimport { LoginComponent } from './login.component';\n\n@NgModule({\n  imports: [\n  ...\n  RouterModule.forChild([\n    { path: '', component: LoginComponent },\n  ])\n  ],\n})\n")),(0,i.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"We're excluding some additional content and only including the necessary parts."))),(0,i.kt)("p",null,"Here, we have a typical Angular Module setup, along with a RouterModule import, but we're now using ",(0,i.kt)("inlineCode",{parentName:"p"},"forChild")," and declaring the component in that setup. With this setup, when we run our build, we will produce separate chunks for both the app component, the login component, and the detail component."),(0,i.kt)("h2",{id:"live-example"},"Live Example"),(0,i.kt)("p",null,"If you would prefer to get hands on with the concepts and code described above, please checkout our ",(0,i.kt)("a",{parentName:"p",href:"https://stackblitz.com/edit/ionic-angular-routing?file=src/app/app-routing.module.ts"},"live example")," of the topics above on StackBlitz."),(0,i.kt)("h2",{id:"linear-routing-versus-non-linear-routing"},"Linear Routing versus Non-Linear Routing"),(0,i.kt)("h3",{id:"linear-routing"},"Linear Routing"),(0,i.kt)("p",null,"If you have built a web app that uses routing, you likely have used linear routing before. Linear routing means that you can move forward or backward through the application history by pushing and popping pages."),(0,i.kt)("p",null,"The following is an example of linear routing in a mobile app:"),(0,i.kt)("video",{style:{margin:"40px auto",display:"flex"},width:"400",src:(0,r.Z)("video/linear-routing-demo.mp4"),controls:!0}),(0,i.kt)("p",null,"The application history in this example has the following path:"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"Accessibility")," --\x3e ",(0,i.kt)("inlineCode",{parentName:"p"},"VoiceOver")," --\x3e ",(0,i.kt)("inlineCode",{parentName:"p"},"Speech")),(0,i.kt)("p",null,"When we press the back button, we follow that same routing path except in reverse. Linear routing is helpful in that it allows for simple and predictable routing behaviors. It also means we can use router Angular Router APIs such as ",(0,i.kt)("a",{parentName:"p",href:"#navigating-using-locationstrategy"},"LocationStrategy.historyGo()"),"."),(0,i.kt)("p",null,"The downside of linear routing is that it does not allow for complex user experiences such as tab views. This is where non-linear routing comes into play."),(0,i.kt)("h3",{id:"non-linear-routing"},"Non-Linear Routing"),(0,i.kt)("p",null,"Non-linear routing is a concept that may be new to many web developers learning to build mobile apps with Ionic."),(0,i.kt)("p",null,"Non-linear routing means that the view that the user should go back to is not necessarily the previous view that was displayed on the screen."),(0,i.kt)("p",null,"The following is an example of non-linear routing:"),(0,i.kt)("video",{style:{margin:"40px auto",display:"flex"},width:"400",src:(0,r.Z)("video/non-linear-routing-demo.mp4"),controls:!0}),(0,i.kt)("p",null,"In the example above, we start on the ",(0,i.kt)("inlineCode",{parentName:"p"},"Originals")," tab. Tapping a card brings us to the ",(0,i.kt)("inlineCode",{parentName:"p"},"Ted Lasso")," view within the ",(0,i.kt)("inlineCode",{parentName:"p"},"Originals")," tab."),(0,i.kt)("p",null,"From here, we switch to the ",(0,i.kt)("inlineCode",{parentName:"p"},"Search")," tab. Then, we tap the ",(0,i.kt)("inlineCode",{parentName:"p"},"Originals")," tab again and are brought back to the ",(0,i.kt)("inlineCode",{parentName:"p"},"Ted Lasso")," view. At this point, we have started using non-linear routing."),(0,i.kt)("p",null,"Why is this non-linear routing? The previous view we were on was the ",(0,i.kt)("inlineCode",{parentName:"p"},"Search")," view. However, pressing the back button on the ",(0,i.kt)("inlineCode",{parentName:"p"},"Ted Lasso")," view should bring us back to the root ",(0,i.kt)("inlineCode",{parentName:"p"},"Originals")," view. This happens because each tab in a mobile app is treated as its own stack. The ",(0,i.kt)("a",{parentName:"p",href:"#working-with-tabs"},"Working with Tabs")," sections goes over this in more detail."),(0,i.kt)("p",null,"If tapping the back button simply called ",(0,i.kt)("inlineCode",{parentName:"p"},"LocationStrategy.historyGo(-1)")," from the ",(0,i.kt)("inlineCode",{parentName:"p"},"Ted Lasso")," view, we would be brought back to the ",(0,i.kt)("inlineCode",{parentName:"p"},"Search")," view which is not correct."),(0,i.kt)("p",null,"Non-linear routing allows for sophisticated user flows that linear routing cannot handle. However, certain linear routing APIs such as ",(0,i.kt)("inlineCode",{parentName:"p"},"LocationStrategy.historyGo()")," cannot be used in this non-linear environment. This means that ",(0,i.kt)("inlineCode",{parentName:"p"},"LocationStrategy.historyGo()")," should not be used when using tabs or nested outlets."),(0,i.kt)("h3",{id:"which-one-should-i-choose"},"Which one should I choose?"),(0,i.kt)("p",null,"We recommend keeping your application as simple as possible until you need to add non-linear routing. Non-linear routing is very powerful, but it also adds a considerable amount of complexity to mobile applications."),(0,i.kt)("p",null,"The two most common uses of non-linear routing is with tabs and nested ",(0,i.kt)("inlineCode",{parentName:"p"},"ion-router-outlet"),"s. We recommend only using non-linear routing if your application meets the tabs or nested router outlet use cases."),(0,i.kt)("p",null,"For more on tabs, please see ",(0,i.kt)("a",{parentName:"p",href:"#working-with-tabs"},"Working with Tabs"),"."),(0,i.kt)("p",null,"For more on nested router outlets, please see ",(0,i.kt)("a",{parentName:"p",href:"#nested-routes"},"Nested Routes"),"."),(0,i.kt)("h2",{id:"shared-urls-versus-nested-routes"},"Shared URLs versus Nested Routes"),(0,i.kt)("p",null,"A common point of confusion when setting up routing is deciding between shared URLs or nested routes. This part of the guide will explain both and help you decide which one to use."),(0,i.kt)("h3",{id:"shared-urls"},"Shared URLs"),(0,i.kt)("p",null,"Shared URLs is a route configuration where routes have pieces of the URL in common. The following is an example of a shared URL configuration:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-tsx"},"const routes: Routes = [\n  {\n    path: 'dashboard',\n    component: DashboardMainPage,\n  },\n  {\n    path: 'dashboard/stats',\n    component: DashboardStatsPage,\n  },\n];\n")),(0,i.kt)("p",null,'The above routes are considered "shared" because they reuse the ',(0,i.kt)("inlineCode",{parentName:"p"},"dashboard")," piece of the URL."),(0,i.kt)("h3",{id:"nested-routes"},"Nested Routes"),(0,i.kt)("p",null,"Nested Routes is a route configuration where routes are listed as children of other routes. The following is an example of a nested route configuration:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-tsx"},"const routes: Routes = [\n  {\n    path: 'dashboard',\n    component: DashboardRouterOutlet,\n    children: [\n      {\n        path: '',\n        component: DashboardMainPage,\n      },\n      {\n        path: 'stats',\n        component: DashboardStatsPage,\n      },\n    ],\n  },\n];\n")),(0,i.kt)("p",null,"The above routes are nested because they are in the ",(0,i.kt)("inlineCode",{parentName:"p"},"children")," array of the parent route. Notice that the parent route renders the ",(0,i.kt)("inlineCode",{parentName:"p"},"DashboardRouterOutlet")," component. When you nest routes, you need to render another instance of ",(0,i.kt)("inlineCode",{parentName:"p"},"ion-router-outlet"),"."),(0,i.kt)("h3",{id:"which-one-should-i-choose-1"},"Which one should I choose?"),(0,i.kt)("p",null,"Shared URLs are great when you want to transition from page A to page B while preserving the relationship between the two pages in the URL. In our previous example, a button on the ",(0,i.kt)("inlineCode",{parentName:"p"},"/dashboard")," page could transition to the ",(0,i.kt)("inlineCode",{parentName:"p"},"/dashboard/stats")," page. The relationship between the two pages is preserved because of a) the page transition and b) the url."),(0,i.kt)("p",null,"Nested routes should be used when you want to render content in outlet A while also rendering sub-content inside of a nested outlet B. The most common use case you will run into is tabs. When you load up a tabs Ionic starter application, you will see ",(0,i.kt)("inlineCode",{parentName:"p"},"ion-tab-bar")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"ion-tabs")," components rendered in the first ",(0,i.kt)("inlineCode",{parentName:"p"},"ion-router-outlet"),". The ",(0,i.kt)("inlineCode",{parentName:"p"},"ion-tabs")," component renders another ",(0,i.kt)("inlineCode",{parentName:"p"},"ion-router-outlet")," which is responsible for rendering the contents of each tab."),(0,i.kt)("p",null,"There are very few use cases in which nested routes make sense in mobile applications. When in doubt, use the shared URL route configuration. We strongly caution against using nested routing in contexts other than tabs as it can quickly make navigating your app confusing."),(0,i.kt)("h2",{id:"working-with-tabs"},"Working with Tabs"),(0,i.kt)("p",null,"With Tabs, the Angular Router provides Ionic the mechanism to know what components should be loaded, but the heavy lifting is actually done by the tabs component. Let's look at a simple example."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts"},"const routes: Routes = [\n  {\n    path: 'tabs',\n    component: TabsPage,\n    children: [\n      {\n        path: 'tab1',\n        children: [\n          {\n            path: '',\n            loadChildren: () => import('../tab1/tab1.module').then((m) => m.Tab1PageModule),\n          },\n        ],\n      },\n      {\n        path: '',\n        redirectTo: '/tabs/tab1',\n        pathMatch: 'full',\n      },\n    ],\n  },\n  {\n    path: '',\n    redirectTo: '/tabs/tab1',\n    pathMatch: 'full',\n  },\n];\n")),(0,i.kt)("p",null,'Here we have a "tabs" path that we load. In this example we call the path "tabs", but the name of the paths can be changed. They can be called whatever fits your app. In that route object, we can define a child route as well. In this example, the top level child route "tab1" acts as our "outlet", and can load additional child routes. For this example, we have a single sub-child-route, which just loads a new component. The markup for the tab is as follows:'),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-html"},'<ion-tabs>\n  <ion-tab-bar slot="bottom">\n    <ion-tab-button tab="tab1">\n      <ion-icon name="flash"></ion-icon>\n      <ion-label>Tab One</ion-label>\n    </ion-tab-button>\n  </ion-tab-bar>\n</ion-tabs>\n')),(0,i.kt)("p",null,"If you've built apps with Ionic before, this should feel familiar. We create a ",(0,i.kt)("inlineCode",{parentName:"p"},"ion-tabs")," component, and provide a ",(0,i.kt)("inlineCode",{parentName:"p"},"ion-tab-bar"),". The ",(0,i.kt)("inlineCode",{parentName:"p"},"ion-tab-bar")," provides a ",(0,i.kt)("inlineCode",{parentName:"p"},"ion-tab-button")," with a ",(0,i.kt)("inlineCode",{parentName:"p"},"tab"),' property that is associated with the tab "outlet" in the router config. Note that the latest version of ',(0,i.kt)("inlineCode",{parentName:"p"},"@ionic/angular")," no longer requires ",(0,i.kt)("inlineCode",{parentName:"p"},"<ion-tab>"),", but instead allows developers to fully customize the tab bar, and the single source of truth lives within the router configuration."),(0,i.kt)("h3",{id:"how-tabs-in-ionic-work"},"How Tabs in Ionic Work"),(0,i.kt)("p",null,"Each tab in Ionic is treated as an individual navigation stack. This means if you have three tabs in your application, each tab has its own navigation stack. Within each stack you can navigate forwards (push a view) and backwards (pop a view)."),(0,i.kt)("p",null,"This behavior is important to note as it is different than most tab implementations that are found in other web based UI libraries. Other libraries typically manage tabs as one single history stack."),(0,i.kt)("p",null,"Since Ionic is focused on helping developers build mobile apps, the tabs in Ionic are designed to match native mobile tabs as closely as possible. As a result, there may be certain behaviors in Ionic's tabs that differ from tabs implementations you have seen in other UI libraries. Read on to learn more about some of these differences."),(0,i.kt)("h3",{id:"child-routes-within-tabs"},"Child Routes within Tabs"),(0,i.kt)("p",null,"When adding additional routes to tabs you should write them as sibling routes with the parent tab as the path prefix. The example below defines the ",(0,i.kt)("inlineCode",{parentName:"p"},"/tabs/tab1/view")," route as a sibling of the ",(0,i.kt)("inlineCode",{parentName:"p"},"/tabs/tab1")," route. Since this new route has the ",(0,i.kt)("inlineCode",{parentName:"p"},"tab1")," prefix, it will be rendered inside of the ",(0,i.kt)("inlineCode",{parentName:"p"},"Tabs")," component, and Tab 1 will still be selected in the ",(0,i.kt)("inlineCode",{parentName:"p"},"ion-tab-bar"),"."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts"},"const routes: Routes = [\n  {\n    path: 'tabs',\n    component: TabsPage,\n    children: [\n      {\n        path: 'tab1',\n        children: [\n          {\n            path: '',\n            loadChildren: () => import('../tab1/tab1.module').then((m) => m.Tab1PageModule),\n          },\n        ],\n      },\n      {\n        path: 'tab1/view',\n        children: [\n          {\n            path: '',\n            loadChildren: () => import('../tab1/tab1view.module').then((m) => m.Tab1ViewPageModule),\n          },\n        ],\n      },\n      {\n        path: 'tab2',\n        children: [\n          {\n            path: '',\n            loadChildren: () => import('../tab2/tab2.module').then((m) => m.Tab2PageModule),\n          },\n        ],\n      },\n      {\n        path: 'tab3',\n        children: [\n          {\n            path: '',\n            loadChildren: () => import('../tab3/tab3.module').then((m) => m.Tab3PageModule),\n          },\n        ],\n      },\n    ],\n  },\n  {\n    path: '',\n    redirectTo: '/tabs/tab1',\n    pathMatch: 'full',\n  },\n];\n")),(0,i.kt)("h3",{id:"switching-between-tabs"},"Switching Between Tabs"),(0,i.kt)("p",null,"Since each tab is its own navigation stack, it is important to note that these navigation stacks should never interact. This means that there should never be a button in Tab 1 that routes a user to Tab 2. In other words, tabs should only be changed by the user tapping a tab button in the tab bar."),(0,i.kt)("p",null,'A good example of this in practice is the iOS App Store and Google Play Store mobile applications. These apps both provide tabbed interfaces, but neither one ever routes the user across tabs. For example, the "Games" tab in the iOS App Store app never directs users to the "Search" tab and vice versa.'),(0,i.kt)("p",null,"Let's take a look at a couple common mistakes that are made with tabs."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"A Settings Tab That Multiple Tabs Reference")),(0,i.kt)("p",null,"A common practice is to create a Settings view as its own tab. This is great if developers need to present several nested settings menus. However, other tabs should never try to route to the Settings tab. As we mentioned above, the only way that the Settings tab should be activated is by a user tapping the appropriate tab button."),(0,i.kt)("p",null,"If you find that your tabs need to reference the Settings tab, we recommend making the Settings view a modal by using ",(0,i.kt)("inlineCode",{parentName:"p"},"ion-modal"),". This is a practice found in the iOS App Store app. With this approach, any tab can present the modal without breaking the mobile tabs pattern of each tab being its own stack."),(0,i.kt)("p",null,'The example below shows how the iOS App Store app handles presenting an "Account" view from multiple tabs. By presenting the "Account" view in a modal, the app can work within the mobile tabs best practices to show the same view across multiple tabs.'),(0,i.kt)("video",{style:{margin:"40px auto",display:"flex"},width:"400",src:(0,r.Z)("video/tabs-account-demo.mp4"),controls:!0}),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Reusing Views Across Tabs")),(0,i.kt)("p",null,"Another common practice is to present the same view in multiple tabs. Developers often try to do this by having the view contained in a single tab, with other tabs routing to that tab. As we mentioned above, this breaks the mobile tabs pattern and should be avoided."),(0,i.kt)("p",null,'Instead, we recommend having routes in each tab that reference the same component. This is a practice done in popular apps like Spotify. For example, you can access an album or podcast from the "Home", "Search", and "Your Library" tabs. When accessing the album or podcast, users stay within that tab. The app does this by creating routes per tab and sharing a common component in the codebase.'),(0,i.kt)("p",null,"The example below shows how the Spotify app reuses the same album component to show content in multiple tabs. Notice that each screenshot shows the same album but from a different tab."),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"center"},"Home Tab"),(0,i.kt)("th",{parentName:"tr",align:"center"},"Search Tab"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"center"},(0,i.kt)("img",{src:(0,r.Z)("img/usage/tabs-home.jpg")})),(0,i.kt)("td",{parentName:"tr",align:"center"},(0,i.kt)("img",{src:(0,r.Z)("img/usage/tabs-search.jpg")}))))))}c.isMDXComponent=!0}}]);