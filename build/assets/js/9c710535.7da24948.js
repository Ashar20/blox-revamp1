"use strict";(self.webpackChunkionic_docs=self.webpackChunkionic_docs||[]).push([[68594],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return m}});var o=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=o.createContext({}),p=function(e){var t=o.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=p(e.components);return o.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},d=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),d=p(n),m=r,f=d["".concat(l,".").concat(m)]||d[m]||u[m]||a;return n?o.createElement(f,i(i({ref:t},c),{},{components:n})):o.createElement(f,i({ref:t},c))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,i=new Array(a);i[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:r,i[1]=s;for(var p=2;p<a;p++)i[p]=n[p];return o.createElement.apply(null,i)}return o.createElement.apply(null,n)}d.displayName="MDXCreateElement"},13618:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return s},contentTitle:function(){return l},metadata:function(){return p},toc:function(){return c},default:function(){return d}});var o=n(87462),r=n(63366),a=(n(67294),n(3905)),i=["components"],s={},l="Make It Your Own! Ionic Theming",p={unversionedId:"developer-resources/guides/first-app-v4/theming",id:"developer-resources/guides/first-app-v4/theming",isDocsHomePage:!1,title:"Make It Your Own! Ionic Theming",description:"Previously, we converted our single use Camera app into an epic photo gallery. Now, let\u2019s explore how to make the photo gallery our own with Ionic theming. The visual design of the app is incredibly important - fortunately, Ionic provides a lot for us out-of-the-box.",source:"@site/docs/developer-resources/guides/first-app-v4/theming.md",sourceDirName:"developer-resources/guides/first-app-v4",slug:"/developer-resources/guides/first-app-v4/theming",permalink:"/docs/developer-resources/guides/first-app-v4/theming",editUrl:"https://github.com/ionic-team/ionic-docs/edit/main/docs/developer-resources/guides/first-app-v4/theming.md",tags:[],version:"current",frontMatter:{}},c=[],u={toc:c};function d(e){var t=e.components,s=(0,r.Z)(e,i);return(0,a.kt)("wrapper",(0,o.Z)({},u,s,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"make-it-your-own-ionic-theming"},"Make It Your Own! Ionic Theming"),(0,a.kt)("p",null,"Previously, we converted our single use Camera app into an epic photo gallery. Now, let\u2019s explore how to make the photo gallery our own with Ionic theming. The visual design of the app is incredibly important - fortunately, Ionic provides a lot for us out-of-the-box."),(0,a.kt)("p",null,"Ionic has nine default colors, defined as CSS variables, that can be used to change the color of its UI components:"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"v4-theming-defaults",src:n(36695).Z})),(0,a.kt)("p",null,"You can customize each color further by supplying a base, contrast, shade, and tint properties. These provide flexible control over your styles:"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"v4-theming-properties",src:n(77570).Z})),(0,a.kt)("p",null,"You can find these colors defined in ",(0,a.kt)("inlineCode",{parentName:"p"},"src/theme/variables.scss"),"."),(0,a.kt)("p",null,"By changing these variables here and there, you can easily update the entire theme of the application! Try changing a few of them and watch the app update in DevApp. For example, change the default blue color for Primary to purple:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-css"},"/** Ionic CSS Variables **/\n:root {\n  /** primary **/\n  --ion-color-primary: #b36bff;\n  --ion-color-primary-rgb: 179, 107, 255;\n  --ion-color-primary-contrast: #000000;\n  --ion-color-primary-contrast-rgb: 0, 0, 0;\n  --ion-color-primary-shade: #9e5ee0;\n  --ion-color-primary-tint: #bb7aff;\n}\n")),(0,a.kt)("p",null,"The easiest and most powerful way to create custom color palettes for your app\u2019s UI is Ionic's ",(0,a.kt)("a",{parentName:"p",href:"../../../theming/color-generator.md"},"Color Generator tool"),". As you change a color\u2019s hex values, the embedded demo app automatically reflects the new colors. When you've finished making changes, simply copy and paste the generated code directly into your Ionic project."),(0,a.kt)("p",null,"But wait, there\u2019s more! Ionic automatically provides platform specific styles based on the device the application is running on, giving that native look and feel your users are used to:"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"ios and android comparison",src:n(11782).Z})),(0,a.kt)("p",null,"In our app, this is clearly visible in how the header and the icons are styled."),(0,a.kt)("p",null,"If you want consistency, you can tell Ionic to use the same mode regardless of platform. For example, to apply Material Design (Android\u2019s platform style), set it globally in the App Module class. Open ",(0,a.kt)("inlineCode",{parentName:"p"},"src/app/app.module.ts"),", then set the ",(0,a.kt)("inlineCode",{parentName:"p"},"mode")," property:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-Javascript"},'imports: [\n    BrowserModule,\n    IonicModule.forRoot({\n      mode: "md"\n    }),\n    IonicStorageModule.forRoot()\n  ],\n')),(0,a.kt)("p",null,"Now, the iOS version of our app has a Material Design skin!"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"ios and android comparison",src:n(94282).Z})),(0,a.kt)("p",null,"Creating gorgeous-looking Ionic apps is easy with CSS variables and platform-specific styling. You now have everything you need to get started with Ionic."),(0,a.kt)("p",null,"Go forth and build great apps!"))}d.isMDXComponent=!0},11782:function(e,t,n){t.Z=n.p+"assets/images/ion-lab-comparison-88025ce381e3b322f8e2c3206bb71a1d.png"},94282:function(e,t,n){t.Z=n.p+"assets/images/ion-lab-md-styling-d1d0a9aab74f81df2d64d558f0b2785f.png"},36695:function(e,t,n){t.Z=n.p+"assets/images/theming-defaults-a2ab19224a8babec03ca15f24e4782b0.png"},77570:function(e,t,n){t.Z=n.p+"assets/images/theming-properties-f464344f35b779c05a86edcad05eb2fd.png"}}]);