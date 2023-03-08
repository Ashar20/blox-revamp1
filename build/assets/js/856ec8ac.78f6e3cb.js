"use strict";(self.webpackChunkionic_docs=self.webpackChunkionic_docs||[]).push([[99123],{3905:function(e,t,n){n.d(t,{Zo:function(){return s},kt:function(){return m}});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var u=a.createContext({}),c=function(e){var t=a.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},s=function(e){var t=c(e.components);return a.createElement(u.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},p=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,u=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),p=c(n),m=r,h=p["".concat(u,".").concat(m)]||p[m]||d[m]||i;return n?a.createElement(h,o(o({ref:t},s),{},{components:n})):a.createElement(h,o({ref:t},s))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=p;var l={};for(var u in t)hasOwnProperty.call(t,u)&&(l[u]=t[u]);l.originalType=e,l.mdxType="string"==typeof e?e:r,o[1]=l;for(var c=2;c<i;c++)o[c]=n[c];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}p.displayName="MDXCreateElement"},58215:function(e,t,n){var a=n(67294);t.Z=function(e){var t=e.children,n=e.hidden,r=e.className;return a.createElement("div",{role:"tabpanel",hidden:n,className:r},t)}},26396:function(e,t,n){n.d(t,{Z:function(){return p}});var a=n(87462),r=n(67294),i=n(72389),o=n(79443);var l=function(){var e=(0,r.useContext)(o.Z);if(null==e)throw new Error('"useUserPreferencesContext" is used outside of "Layout" component.');return e},u=n(89521),c=n(86010),s="tabItem_1uMI";function d(e){var t,n,a,i=e.lazy,o=e.block,d=e.defaultValue,p=e.values,m=e.groupId,h=e.className,v=r.Children.map(e.children,(function(e){if((0,r.isValidElement)(e)&&void 0!==e.props.value)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),f=null!=p?p:v.map((function(e){var t=e.props;return{value:t.value,label:t.label}})),b=(0,u.lx)(f,(function(e,t){return e.value===t.value}));if(b.length>0)throw new Error('Docusaurus error: Duplicate values "'+b.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var g=null===d?d:null!=(t=null!=d?d:null==(n=v.find((function(e){return e.props.default})))?void 0:n.props.value)?t:null==(a=v[0])?void 0:a.props.value;if(null!==g&&!f.some((function(e){return e.value===g})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+g+'" but none of its children has the corresponding value. Available values are: '+f.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var k=l(),y=k.tabGroupChoices,N=k.setTabGroupChoices,w=(0,r.useState)(g),A=w[0],O=w[1],T=[],E=(0,u.o5)().blockElementScrollPositionUntilNextRender;if(null!=m){var x=y[m];null!=x&&x!==A&&f.some((function(e){return e.value===x}))&&O(x)}var C=function(e){var t=e.currentTarget,n=T.indexOf(t),a=f[n].value;a!==A&&(E(t),O(a),null!=m&&N(m,a))},I=function(e){var t,n=null;switch(e.key){case"ArrowRight":var a=T.indexOf(e.currentTarget)+1;n=T[a]||T[0];break;case"ArrowLeft":var r=T.indexOf(e.currentTarget)-1;n=T[r]||T[T.length-1]}null==(t=n)||t.focus()};return r.createElement("div",{className:"tabs-container"},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,c.Z)("tabs",{"tabs--block":o},h)},f.map((function(e){var t=e.value,n=e.label;return r.createElement("li",{role:"tab",tabIndex:A===t?0:-1,"aria-selected":A===t,className:(0,c.Z)("tabs__item",s,{"tabs__item--active":A===t}),key:t,ref:function(e){return T.push(e)},onKeyDown:I,onFocus:C,onClick:C},null!=n?n:t)}))),i?(0,r.cloneElement)(v.filter((function(e){return e.props.value===A}))[0],{className:"margin-vert--md"}):r.createElement("div",{className:"margin-vert--md"},v.map((function(e,t){return(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==A})}))))}function p(e){var t=(0,i.Z)();return r.createElement(d,(0,a.Z)({key:String(t)},e))}},55820:function(e,t,n){n.d(t,{Z:function(){return i}});var a=n(67294),r=function(e){var t=(0,a.useState)(e?"loading":"idle"),n=t[0],r=t[1];return(0,a.useEffect)((function(){if(e){var t=document.querySelector('script[src="'+e+'"]');if(t)r(t.getAttribute("data-status"));else{(t=document.createElement("script")).src=e,t.async=!0,t.setAttribute("data-status","loading"),document.body.appendChild(t);var n=function(e){t.setAttribute("data-status","load"===e.type?"ready":"error")};t.addEventListener("load",n),t.addEventListener("error",n)}var a=function(e){r("load"===e.type?"ready":"error")};return t.addEventListener("load",a),t.addEventListener("error",a),function(){t&&(t.removeEventListener("load",a),t.removeEventListener("error",a))}}r("idle")}),[e]),n};var i=function(e){return r("https://static.codepen.io/assets/embed/ei.js"),a.createElement("div",{className:"codepen","data-height":e.height,"data-theme-id":e.theme,"data-default-tab":e.defaultTab,"data-user":e.user,"data-slug-hash":e.slug,"data-preview":e.preview?"true":"false","data-pen-title":e.penTitle,"no-prerender":"true"})}},47082:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return s},contentTitle:function(){return d},metadata:function(){return p},toc:function(){return m},default:function(){return v}});var a=n(87462),r=n(63366),i=(n(67294),n(3905)),o=n(55820),l=n(26396),u=n(58215),c=["components"],s={title:"Audience listing"},d=void 0,p={unversionedId:"Audience Hub/tips",id:"Audience Hub/tips",isDocsHomePage:!1,title:"Audience listing",description:"Keyboard Guide: Tools to Manage an On-Screen Mobile App Keyboard",source:"@site/docs/Audience Hub/tips.md",sourceDirName:"Audience Hub",slug:"/Audience Hub/tips",permalink:"/docs/Audience Hub/tips",editUrl:"https://github.com/ionic-team/ionic-docs/edit/main/docs/Audience Hub/tips.md",tags:[],version:"current",frontMatter:{title:"Audience listing"},sidebar:"docs",previous:{title:"Getting Started",permalink:"/docs/Audience Hub/scaffolding"},next:{title:"Upload Custom Audience",permalink:"/docs/Audience Hub/previewing"}},m=[{value:"Getting to Audience Hub",id:"getting-to-audience-hub",children:[{value:"Usage",id:"usage",children:[],level:3},{value:"Search Audience",id:"search-audience",children:[],level:3},{value:"Sort Columns",id:"sort-columns",children:[],level:3},{value:"Filter Columns",id:"filter-columns",children:[],level:3}],level:2},{value:"Checking Performance Data:",id:"checking-performance-data",children:[],level:2},{value:"Checking Overlap Information",id:"checking-overlap-information",children:[],level:2}],h={toc:m};function v(e){var t=e.components,n=(0,r.Z)(e,c);return(0,i.kt)("wrapper",(0,a.Z)({},h,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("head",null,(0,i.kt)("title",null,"Keyboard Guide: Tools to Manage an On-Screen Mobile App Keyboard"),(0,i.kt)("meta",{name:"description",content:"Accounting for an on-screen keyboard is a common developer roadblock. This guide introduces the tools available for managing on-screen keyboards in mobile apps."})),(0,i.kt)("p",null,"Using Audience Hub you can create a custom audience for any user or user segment, access the list of preset audiences and view their related metrics & overlap information"),(0,i.kt)("h2",{id:"getting-to-audience-hub"},"Getting to Audience Hub"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Navigation:")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"From the Blox Home Page -> Click on Audience Hub to visit the Audience Home Screen. "),(0,i.kt)("li",{parentName:"ul"},"Click on \u2018Audience Manager\u2019 on the navigation bar to access the list of Audiences or to \u2018Upload\u2019 a custom Audience."),(0,i.kt)("li",{parentName:"ul"},"Alternatively, Hover over the Audience Hub on the navigation bar and click on \u2018Audience Manager")),(0,i.kt)("h3",{id:"usage"},"Usage"),(0,i.kt)(l.Z,{groupId:"framework",defaultValue:"javascript",values:[{value:"javascript",label:"JavaScript"},{value:"angular",label:"Angular"},{value:"react",label:"React"},{value:"vue",label:"Vue"}],mdxType:"Tabs"},(0,i.kt)(u.Z,{value:"javascript",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-html"},'<ion-item>\n  <ion-label>Enter search query</ion-label>\n  <ion-input enterkeyhint="search" type="search"></ion-input>\n</ion-item>\n'))),(0,i.kt)(u.Z,{value:"angular",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-html"},'<ion-item>\n  <ion-label>Enter search query</ion-label>\n  <ion-input enterkeyhint="search" type="search"></ion-input>\n</ion-item>\n'))),(0,i.kt)(u.Z,{value:"react",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-html"},'<IonItem>\n  <IonLabel>Enter search query</IonLabel>\n  <IonInput enterkeyhint="search" type="search"></IonInput>\n</IonItem>\n'))),(0,i.kt)(u.Z,{value:"vue",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-html"},'<ion-item>\n  <ion-label>Enter search query</ion-label>\n  <ion-input enterkeyhint="search" type="search"></ion-input>\n</ion-item>\n')))),(0,i.kt)(o.Z,{user:"ionic",slug:"GRpWyRB",height:"350",mdxType:"Codepen"}),(0,i.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"The ",(0,i.kt)("inlineCode",{parentName:"p"},"enterkeyhint")," attribute is supported on devices running Chrome 77+ and iOS Safari 13.4+."))),(0,i.kt)("h3",{id:"search-audience"},"Search Audience"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"You can search for the created Audiences using the Audience name via search bar or use one of the suggested/recently searched keywords."),(0,i.kt)("li",{parentName:"ol"},"You can find the search results populated in the table.")),(0,i.kt)("h3",{id:"sort-columns"},"Sort Columns"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Hover over the column header to find the sort icon next to each column"),(0,i.kt)("li",{parentName:"ol"},"Click the Sort icon to sort the column alphabetically either in ascending or descending order."),(0,i.kt)("li",{parentName:"ol"},"If the sort is applied to multiple columns, the column for which sort was applied last will take precedence.")),(0,i.kt)("h3",{id:"filter-columns"},"Filter Columns"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Hover over the column header to find the filter icon next to each column"),(0,i.kt)("li",{parentName:"ol"},"Click the filter icon to open up a dropdown from which you can multi-select the values to be filtered."),(0,i.kt)("li",{parentName:"ol"},"You can also search for a filter value within the dropdown."),(0,i.kt)("li",{parentName:"ol"},"The table will be populated with the filtered results.")),(0,i.kt)("h2",{id:"checking-performance-data"},"Checking Performance Data:"),(0,i.kt)("p",null,"In the Audience listing table, next to each audience name, by default, you will find data about the performance of that segment. Data includes:"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},(0,i.kt)("strong",{parentName:"th"},"Metrics")),(0,i.kt)("th",{parentName:"tr",align:null},(0,i.kt)("strong",{parentName:"th"},"Description")))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Conversion Rate"),(0,i.kt)("td",{parentName:"tr",align:null},"Number of Orders placed per Visit")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Revenue Per Visit"),(0,i.kt)("td",{parentName:"tr",align:null},"Total Revenue generated per Visit")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"AOV"),(0,i.kt)("td",{parentName:"tr",align:null},"Average Revenue generated per Order")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"AOS"),(0,i.kt)("td",{parentName:"tr",align:null},"Average Products Purchased per Order")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Unique Visitors"),(0,i.kt)("td",{parentName:"tr",align:null},"Number of unique visitors")))),(0,i.kt)("h2",{id:"checking-overlap-information"},"Checking Overlap Information"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"In the Audience listing table, click on the 'Overlap' icon next to the audience name"),(0,i.kt)("li",{parentName:"ol"},"You can view overlap")))}v.isMDXComponent=!0}}]);