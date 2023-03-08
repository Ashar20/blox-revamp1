"use strict";(self.webpackChunkionic_docs=self.webpackChunkionic_docs||[]).push([[28649],{3905:function(e,t,r){r.d(t,{Zo:function(){return d},kt:function(){return m}});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var c=n.createContext({}),p=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},d=function(e){var t=p(e.components);return n.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},s=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),s=p(r),m=o,h=s["".concat(c,".").concat(m)]||s[m]||u[m]||a;return r?n.createElement(h,l(l({ref:t},d),{},{components:r})):n.createElement(h,l({ref:t},d))}));function m(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,l=new Array(a);l[0]=s;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:o,l[1]=i;for(var p=2;p<a;p++)l[p]=r[p];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}s.displayName="MDXCreateElement"},76521:function(e,t,r){r.d(t,{Z:function(){return d}});var n=r(63366),o=r(86010),a=r(67294),l="codeColor_2Tki",i="codeColorBlock_1_3w",c="codeColorValue_1KFa",p=["color"];var d=function(e){var t=e.color,r=(0,n.Z)(e,p);return a.createElement("div",{className:(0,o.Z)(l,r.className,"code-color")},a.createElement("span",{className:i,style:Object.assign({backgroundColor:t},r.style)}),r.children&&a.createElement("code",{className:c},r.children))}},13164:function(e,t,r){r.d(t,{Z:function(){return d}});var n=r(87462),o=r(63366),a=r(86010),l=r(67294),i=r(85350),c={colorDot:"colorDot_108x",colorDotDark:"colorDotDark_1lWm",colorDotLight:"colorDotLight_3Aq2"},p=["color"];function d(e){var t=e.color,r=(0,o.Z)(e,p),d=(0,i.Z)().isDarkTheme;return l.createElement("div",(0,n.Z)({style:{backgroundColor:t},className:(0,a.Z)(r.className,"color-dot",c.colorDot,c["colorDot"+(d?"Dark":"Light")])},r))}},32569:function(e,t,r){r.d(t,{Z:function(){return u}});var n=r(87462),o=r(63366),a=r(67294),l=r(86010),i=r(51056),c=r(85350),p={colorInput:"colorInput_3rvk",colorInputLight:"colorInputLight_JAY1",colorInputDark:"colorInputDark_OlH5",colorPickerWrapper:"colorPickerWrapper_qzTi",colorPicker:"colorPicker_1Aqu"},d=["color","setColor"];function u(e){var t=e.color,r=e.setColor,u=(0,o.Z)(e,d),s=(0,c.Z)().isDarkTheme;return a.createElement("div",(0,n.Z)({},u,{className:(0,l.Z)("color-input",p.colorInput,u.className,p["colorInput"+(s?"Dark":"Light")])}),a.createElement("div",{className:p.colorPickerWrapper,style:{"--background-c":t}},a.createElement("input",{type:"color",onChange:function(e){var t=e.target;return r(t.value)},value:t,className:p.colorPicker})),a.createElement(i.Z,null,a.createElement("input",{onChange:function(e){var t=e.target;return r(t.value)},value:t})))}},51056:function(e,t,r){r.d(t,{Z:function(){return c}});var n=r(87462),o=r(86010),a=r(67294),l={inputWrapper:"inputWrapper_31bA",inputWrapperLight:"inputWrapperLight_3xEP",inputWrapperDark:"inputWrapperDark_14BM"},i=r(85350);function c(e){var t=Object.assign({},e),r=(0,i.Z)().isDarkTheme;return a.createElement("div",(0,n.Z)({},t,{className:(0,o.Z)(t.className,"input-wrapper",l.inputWrapper,l["inputWrapper"+(r?"Dark":"Light")])}))}},10290:function(e,t,r){r.d(t,{I:function(){return i}});var n=function(e){var t=e.toString(16);return 1===t.length?"0"+t:t},o=function(e){return"#"+(e=e.replace(/^#?([a-f\d])([a-f\d])([a-f\d])$/i,(function(e,t,r,n){return t+t+r+r+n+n}))).replace("#","")},a=function(e){var t=e.r,r=e.g,o=e.b;return"#"+n(t)+n(r)+n(o)},l=function(e){var t=e.r,r=e.g,n=e.b;t=Math.max(Math.min(t/255,1),0),r=Math.max(Math.min(r/255,1),0),n=Math.max(Math.min(n/255,1),0);var o,a,l,i=Math.max(t,r,n),c=Math.min(t,r,n),p=Math.min(1,Math.max(0,(i+c)/2));return i!==c?(o=i-c,l=p>.5?o/(2-i-c):o/(i+c),a=i===t?(r-n)/o+(r<n?6:0):i===r?(n-t)/o+2:(t-r)/o+4,a/=6):a=l=0,{h:Math.round(360*a),s:Math.round(100*l),l:Math.round(100*p)}},i=function(){function e(e){if("string"==typeof e&&/rgb\(/.test(e)){var t,r=null!=(t=/rgb\((\d{1,3}), ?(\d{1,3}), ?(\d{1,3})\)/.exec(e))?t:[];e={r:parseInt(r[0],10),g:parseInt(r[1],10),b:parseInt(r[2],10)}}else if("string"==typeof e&&/hsl\(/.test(e)){var n,i=null!=(n=/hsl\((\d{1,3}), ?(\d{1,3}%), ?(\d{1,3}%)\)/.exec(e))?n:[];e={h:parseInt(i[0],10),s:parseInt(i[1],10),l:parseInt(i[2],10)}}if("string"==typeof e)e=e.replace(/\s/g,""),this.hex=o(e),this.rgb=function(e){e=(e=o(e)).replace("#","");var t=parseInt(e,16);return{r:t>>16&255,g:t>>8&255,b:255&t}}(this.hex),this.hsl=l(this.rgb);else if("r"in e&&"g"in e&&"b"in e)this.rgb=e,this.hex=a(this.rgb),this.hsl=l(this.rgb);else{if(!("h"in e&&"s"in e&&"l"in e))throw new Error("Incorrect value passed.");this.hsl=e,this.rgb=function(e){var t=e.h,r=e.s,n=e.l;if(t/=360,n/=100,0==(r/=100))return{r:n=Math.round(255*n),g:n,b:n};var o=function(e,t,r){return r<0&&(r+=1),r>1&&(r-=1),r<1/6?e+6*(t-e)*r:r<.5?t:r<2/3?e+(t-e)*(2/3-r)*6:e},a=n<.5?n*(1+r):n+r-n*r,l=2*n-a,i=o(l,a,t+1/3),c=o(l,a,t),p=o(l,a,t-1/3);return{r:Math.round(255*i),g:Math.round(255*c),b:Math.round(255*p)}}(this.hsl),this.hex=a(this.rgb)}var c;this.yiq=(299*(c=this.rgb).r+587*c.g+114*c.b)/1e3}e.isColor=function(e){return!!/rgb\((\d{1,3}), ?(\d{1,3}), ?(\d{1,3})\)/.test(e)||/(^#[0-9a-fA-F]+)/.test(e.trim())};var t=e.prototype;return t.contrast=function(t){return void 0===t&&(t=128),new e(this.yiq>=t?"#000":"#fff")},t.mix=function(t,r){void 0===r&&(r=.5);var n=t instanceof e?t:new e(t);return new e(function(e,t,r){void 0===r&&(r=.5);var n=e.rgb,o=t.rgb,a=1-r;return{r:Math.round(r*o.r+a*n.r),g:Math.round(r*o.g+a*n.g),b:Math.round(r*o.b+a*n.b)}}(this,n,r))},t.shade=function(e){return void 0===e&&(e=.12),this.mix({r:0,g:0,b:0},e)},t.tint=function(e){return void 0===e&&(e=.1),this.mix({r:255,g:255,b:255},e)},t.toList=function(){var e=this.rgb;return e.r+","+e.g+","+e.b},e}()},6379:function(e,t,r){r.d(t,{ZP:function(){return o},vC:function(){return a}});var n=r(10290),o=function(e,t){void 0===e&&(e="#ffffff"),void 0===t&&(t="#000000");var r=new n.I(e);return new Array(19).fill(null).map((function(e,n){return r.mix(t,5*(n+1)/100).hex}))},a=function(e){var t=new n.I(e),r=t.contrast(),o=t.tint(),a=t.shade();return{value:e,valueRgb:l(t.rgb),contrast:r.hex,contrastRgb:l(r.rgb),tint:o.hex,shade:a.hex}},l=function(e){return e.r+","+e.g+","+e.b}},83923:function(e,t,r){r.r(t),r.d(t,{contentTitle:function(){return b},default:function(){return C},frontMatter:function(){return f},metadata:function(){return N},toc:function(){return v}});var n=r(87462),o=r(63366),a=r(67294),l=r(3905),i=r(76521),c=r(13164),p=r(32569),d=r(10290),u=r(6379),s=r(86010),m="inputRows_3o2i",h="codePre_1T3l";function g(e){var t=(0,a.useState)("#ffffff"),r=t[0],n=t[1],o=(0,a.useState)("#000000"),l=o[0],g=o[1],k=(0,a.useState)((0,u.ZP)(r,l)),f=k[0],b=k[1];return(0,a.useEffect)((function(){b((0,u.ZP)(r,l))}),[r,l]),a.createElement("div",{className:(0,s.Z)(e.className,"stepped-color-generator")},a.createElement("div",{className:(0,s.Z)(m)},a.createElement(c.Z,{color:r}),a.createElement("h3",null,"Background"),a.createElement(p.Z,{color:r,setColor:n}),a.createElement(c.Z,{color:l}),a.createElement("h3",null,"Text"),a.createElement(p.Z,{color:l,setColor:g})),a.createElement("pre",{className:(0,s.Z)(h)},a.createElement("code",null,":root ","{","\n","\t","--ion-background-color: ",a.createElement(i.Z,{color:r},r),";","\n","\t","--ion-background-color-rgb:"," ",a.createElement(i.Z,{color:r},new d.I(r).toList()),";","\n","\n","\t","--ion-text-color: ",a.createElement(i.Z,{color:l},l),";","\n","\t","--ion-text-color-rgb: ",a.createElement(i.Z,{color:l},new d.I(l).toList()),";","\n","\n",f.map((function(e,t){return a.createElement(a.Fragment,null,"\t","--ion-color-step-",50*(t+1),": ",a.createElement(i.Z,{color:e},e),";","\n")})),"}","\n")))}var k=["components"],f={title:"Ionic App Themes | Change Default App Background Themes & Colors",description:"Several global variables change the default theme of an entire application. Create a custom background and text color theme for your app with Ionic themes.",sidebar_label:"Themes",initialTab:"preview",inlineHtmlPreviews:!0},b="Themes",N={unversionedId:"theming/themes",id:"version-v5/theming/themes",isDocsHomePage:!1,title:"Ionic App Themes | Change Default App Background Themes & Colors",description:"Several global variables change the default theme of an entire application. Create a custom background and text color theme for your app with Ionic themes.",source:"@site/versioned_docs/version-v5/theming/themes.md",sourceDirName:"theming",slug:"/theming/themes",permalink:"/docs/v5/theming/themes",editUrl:"https://github.com/ionic-team/ionic-docs/edit/main/versioned_docs/version-v5/theming/themes.md",tags:[],version:"v5",frontMatter:{title:"Ionic App Themes | Change Default App Background Themes & Colors",description:"Several global variables change the default theme of an entire application. Create a custom background and text color theme for your app with Ionic themes.",sidebar_label:"Themes",initialTab:"preview",inlineHtmlPreviews:!0},sidebar:"version-v5/docs",previous:{title:"Colors",permalink:"/docs/v5/theming/colors"},next:{title:"Dark Mode",permalink:"/docs/v5/theming/dark-mode"}},v=[{value:"Application Colors",id:"application-colors",children:[],level:2},{value:"Stepped Colors",id:"stepped-colors",children:[],level:2},{value:"Stepped Color Generator",id:"stepped-color-generator",children:[],level:2}],y={toc:v};function C(e){var t=e.components,r=(0,o.Z)(e,k);return(0,l.kt)("wrapper",(0,n.Z)({},y,r,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"themes"},"Themes"),(0,l.kt)("p",null,"Ionic provides several global variables that are used throughout components to change the default theme of an entire application. ",(0,l.kt)("a",{parentName:"p",href:"#application-colors"},"Application Colors")," are useful to change the look of most of the Ionic components, and ",(0,l.kt)("a",{parentName:"p",href:"#stepped-colors"},"Stepped Colors")," are used as variations in some of the Ionic components."),(0,l.kt)("h2",{id:"application-colors"},"Application Colors"),(0,l.kt)("p",null,"The application colors are used in multiple places in Ionic. These are useful for easily creating dark themes or themes that match a brand."),(0,l.kt)("p",null,"It is important to note that the background and text color variables also require a rgb variable to be set in ",(0,l.kt)("a",{href:"https://developer.mozilla.org/en-US/docs/Glossary/RGB",target:"_blank"},"rgb format"),". See ",(0,l.kt)("a",{parentName:"p",href:"/docs/v5/theming/advanced#the-alpha-problem"},"The Alpha Problem")," for an explanation of why the ",(0,l.kt)("inlineCode",{parentName:"p"},"rgb")," property is also needed."),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Name"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"--ion-background-color")),(0,l.kt)("td",{parentName:"tr",align:null},"Background color of the entire app")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"--ion-background-color-rgb")),(0,l.kt)("td",{parentName:"tr",align:null},"Background color of the entire app, rgb format")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"--ion-text-color")),(0,l.kt)("td",{parentName:"tr",align:null},"Text color of the entire app")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"--ion-text-color-rgb")),(0,l.kt)("td",{parentName:"tr",align:null},"Text color of the entire app, rgb format")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"--ion-backdrop-color")),(0,l.kt)("td",{parentName:"tr",align:null},"Color of the Backdrop component")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"--ion-backdrop-opacity")),(0,l.kt)("td",{parentName:"tr",align:null},"Opacity of the Backdrop component")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"--ion-overlay-background-color")),(0,l.kt)("td",{parentName:"tr",align:null},"Background color of the overlays")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"--ion-border-color")),(0,l.kt)("td",{parentName:"tr",align:null},"Border color")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"--ion-box-shadow-color")),(0,l.kt)("td",{parentName:"tr",align:null},"Box shadow color")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"--ion-tab-bar-background")),(0,l.kt)("td",{parentName:"tr",align:null},"Background of the Tab Bar")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"--ion-tab-bar-background-focused")),(0,l.kt)("td",{parentName:"tr",align:null},"Background of the focused Tab Bar")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"--ion-tab-bar-border-color")),(0,l.kt)("td",{parentName:"tr",align:null},"Border color of the Tab Bar")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"--ion-tab-bar-color")),(0,l.kt)("td",{parentName:"tr",align:null},"Color of the Tab Bar")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"--ion-tab-bar-color-selected")),(0,l.kt)("td",{parentName:"tr",align:null},"Color of the selected Tab Button")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"--ion-toolbar-background")),(0,l.kt)("td",{parentName:"tr",align:null},"Background of the Toolbar")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"--ion-toolbar-border-color")),(0,l.kt)("td",{parentName:"tr",align:null},"Border color of the Toolbar")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"--ion-toolbar-color")),(0,l.kt)("td",{parentName:"tr",align:null},"Color of the components in the Toolbar")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"--ion-toolbar-segment-color")),(0,l.kt)("td",{parentName:"tr",align:null},"Color of the Segment Buttons in the Toolbar")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"--ion-toolbar-segment-color-checked")),(0,l.kt)("td",{parentName:"tr",align:null},"Color of the checked Segment Buttons in the Toolbar")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"--ion-toolbar-segment-background")),(0,l.kt)("td",{parentName:"tr",align:null},"Background of the Segment Buttons in the Toolbar")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"--ion-toolbar-segment-background-checked")),(0,l.kt)("td",{parentName:"tr",align:null},"Background of the Segment Buttons in the Toolbar")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"--ion-toolbar-segment-indicator-color")),(0,l.kt)("td",{parentName:"tr",align:null},"Color of the Segment Button indicator in the Toolbar")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"--ion-item-background")),(0,l.kt)("td",{parentName:"tr",align:null},"Background of the Item")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"--ion-item-border-color")),(0,l.kt)("td",{parentName:"tr",align:null},"Border color of the Item")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"--ion-item-color")),(0,l.kt)("td",{parentName:"tr",align:null},"Color of the components in the Item")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"--ion-placeholder-color")),(0,l.kt)("td",{parentName:"tr",align:null},"Color of the placeholder in Inputs")))),(0,l.kt)("h2",{id:"stepped-colors"},"Stepped Colors"),(0,l.kt)("p",null,"After exploring different ways to customize the Ionic theme, we found that we couldn't use just one background or text color. In order to imply importance and depth throughout the design, we need to use different shades of the background and text colors. To accommodate this pattern, we created stepped colors."),(0,l.kt)("p",null,"While updating the background (",(0,l.kt)("inlineCode",{parentName:"p"},"--ion-background-color"),") and text (",(0,l.kt)("inlineCode",{parentName:"p"},"--ion-text-color"),") variables will change the look of the app for most components, there are certain Ionic components where it may look off, or broken. This will be more apparent when applying a darker theme."),(0,l.kt)("p",null,"In some components we use a shade darker than the background or lighter than the text. For example, an item heading text may need to be ",(0,l.kt)(i.Z,{color:"#404040",mdxType:"CodeColor"},"#404040"),", which is a few shades lighter than our default text color. Meanwhile, the loading component background is a shade darker than white, using ",(0,l.kt)(i.Z,{color:"#f2f2f2",mdxType:"CodeColor"},"#f2f2f2"),". We use stepped colors in order to define these slight variations. It is important to update the stepped colors when updating the background or text color of an application."),(0,l.kt)("p",null,"By default, the Ionic stepped colors start at the default background color value ",(0,l.kt)(i.Z,{color:"#ffffff",mdxType:"CodeColor"},"#ffffff")," and mix with the text color value ",(0,l.kt)(i.Z,{color:"#000000",mdxType:"CodeColor"},"#000000")," using an increasing percentage. The full list of stepped colors is shown in the generator below."),(0,l.kt)("h2",{id:"stepped-color-generator"},"Stepped Color Generator"),(0,l.kt)("p",null,"Create a custom background and text color theme for your app. Update the background or text color\u2019s hex values below, then copy and paste the generated code directly into your Ionic project."),(0,l.kt)(g,{mdxType:"SteppedColorGenerator"}))}C.isMDXComponent=!0}}]);