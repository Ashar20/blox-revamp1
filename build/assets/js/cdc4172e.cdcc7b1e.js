"use strict";(self.webpackChunkionic_docs=self.webpackChunkionic_docs||[]).push([[57584],{3905:function(e,t,n){n.d(t,{Zo:function(){return d},kt:function(){return m}});var o=n(67294);function s(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){s(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function r(e,t){if(null==e)return{};var n,o,s=function(e,t){if(null==e)return{};var n,o,s={},l=Object.keys(e);for(o=0;o<l.length;o++)n=l[o],t.indexOf(n)>=0||(s[n]=e[n]);return s}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(o=0;o<l.length;o++)n=l[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(s[n]=e[n])}return s}var a=o.createContext({}),c=function(e){var t=o.useContext(a),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},d=function(e){var t=c(e.components);return o.createElement(a.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},u=o.forwardRef((function(e,t){var n=e.components,s=e.mdxType,l=e.originalType,a=e.parentName,d=r(e,["components","mdxType","originalType","parentName"]),u=c(n),m=s,f=u["".concat(a,".").concat(m)]||u[m]||p[m]||l;return n?o.createElement(f,i(i({ref:t},d),{},{components:n})):o.createElement(f,i({ref:t},d))}));function m(e,t){var n=arguments,s=t&&t.mdxType;if("string"==typeof e||s){var l=n.length,i=new Array(l);i[0]=u;var r={};for(var a in t)hasOwnProperty.call(t,a)&&(r[a]=t[a]);r.originalType=e,r.mdxType="string"==typeof e?e:s,i[1]=r;for(var c=2;c<l;c++)i[c]=n[c];return o.createElement.apply(null,i)}return o.createElement.apply(null,n)}u.displayName="MDXCreateElement"},28207:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return r},contentTitle:function(){return a},metadata:function(){return c},toc:function(){return d},default:function(){return u}});var o=n(87462),s=n(63366),l=(n(67294),n(3905)),i=["components"],r={initialTab:"preview",inlineHtmlPreviews:!0},a="Global Stylesheets",c={unversionedId:"layout/global-stylesheets",id:"version-v5/layout/global-stylesheets",isDocsHomePage:!1,title:"Global Stylesheets",description:"While Ionic Framework component styles are self-contained, there are several global stylesheets that should be included in order to use all of Ionic's features. Some of the stylesheets are required in order for an Ionic Framework app to look and behave properly, and others include optional utilities to quickly style your app.",source:"@site/versioned_docs/version-v5/layout/global-stylesheets.md",sourceDirName:"layout",slug:"/layout/global-stylesheets",permalink:"/developer/docs/v5/layout/global-stylesheets",editUrl:"https://github.com/ionic-team/ionic-docs/edit/main/versioned_docs/version-v5/layout/global-stylesheets.md",tags:[],version:"v5",frontMatter:{initialTab:"preview",inlineHtmlPreviews:!0},sidebar:"version-v5/docs",previous:{title:"Responsive Grid",permalink:"/developer/docs/v5/layout/grid"},next:{title:"CSS Utilities",permalink:"/developer/docs/v5/layout/css-utilities"}},d=[{value:"Available",id:"available",children:[{value:"Required",id:"required",children:[{value:"core.css",id:"corecss",children:[],level:4}],level:3},{value:"Recommended",id:"recommended",children:[{value:"structure.css",id:"structurecss",children:[],level:4},{value:"typography.css",id:"typographycss",children:[],level:4},{value:"normalize.css",id:"normalizecss",children:[],level:4}],level:3},{value:"Optional",id:"optional",children:[{value:"padding.css",id:"paddingcss",children:[],level:4},{value:"float-elements.css",id:"float-elementscss",children:[],level:4},{value:"text-alignment.css",id:"text-alignmentcss",children:[],level:4},{value:"text-transformation.css",id:"text-transformationcss",children:[],level:4},{value:"flex-utils.css",id:"flex-utilscss",children:[],level:4},{value:"display.css",id:"displaycss",children:[],level:4}],level:3}],level:2},{value:"Usage",id:"usage",children:[],level:2}],p={toc:d};function u(e){var t=e.components,n=(0,s.Z)(e,i);return(0,l.kt)("wrapper",(0,o.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"global-stylesheets"},"Global Stylesheets"),(0,l.kt)("p",null,"While Ionic Framework component styles are self-contained, there are several global stylesheets that should be included in order to use all of Ionic's features. Some of the stylesheets are required in order for an Ionic Framework app to look and behave properly, and others include optional utilities to quickly style your app."),(0,l.kt)("h2",{id:"available"},"Available"),(0,l.kt)("h3",{id:"required"},"Required"),(0,l.kt)("p",null,"The following CSS file must be included in order for Ionic Framework to work properly."),(0,l.kt)("h4",{id:"corecss"},"core.css"),(0,l.kt)("p",null,"This file is the only stylesheet that is required in order for Ionic components to work properly. It includes app specific styles, and allows the ",(0,l.kt)("inlineCode",{parentName:"p"},"color")," property to work across components. If this file is not included the colors will not show up and some elements may not appear properly."),(0,l.kt)("h3",{id:"recommended"},"Recommended"),(0,l.kt)("p",null,"The following CSS files are recommended to be included in an Ionic Framework app. If they are not included, some elements may have undesired styles. If Ionic Framework components are being used outside of an app, these files may not be necessary."),(0,l.kt)("h4",{id:"structurecss"},"structure.css"),(0,l.kt)("p",null,"Applies styles to ",(0,l.kt)("inlineCode",{parentName:"p"},"<html>")," and defaults ",(0,l.kt)("inlineCode",{parentName:"p"},"box-sizing")," to ",(0,l.kt)("inlineCode",{parentName:"p"},"border-box"),". It ensures scrolling behaves like native in mobile devices."),(0,l.kt)("h4",{id:"typographycss"},"typography.css"),(0,l.kt)("p",null,"Typography changes the font-family of the entire document and modifies the font styles for heading elements. It also applies positioning styles to some native text elements."),(0,l.kt)("h4",{id:"normalizecss"},"normalize.css"),(0,l.kt)("p",null,"Makes browsers render all elements more consistently and in line with modern standards. It is based on ",(0,l.kt)("a",{parentName:"p",href:"https://necolas.github.io/normalize.css/"},"Normalize.css"),"."),(0,l.kt)("h3",{id:"optional"},"Optional"),(0,l.kt)("p",null,"The following set of CSS files are optional and can safely be commented out or removed if the application is not using any of the features."),(0,l.kt)("h4",{id:"paddingcss"},"padding.css"),(0,l.kt)("p",null,"Adds utility classes to modify the padding or margin on any element, see ",(0,l.kt)("a",{parentName:"p",href:"/developer/docs/v5/layout/css-utilities#content-space"},"CSS Utilities")," for usage information."),(0,l.kt)("h4",{id:"float-elementscss"},"float-elements.css"),(0,l.kt)("p",null,"Adds utility classes to float an element based on the breakpoint and side, see ",(0,l.kt)("a",{parentName:"p",href:"/developer/docs/v5/layout/css-utilities#element-placement"},"CSS Utilities")," for usage information."),(0,l.kt)("h4",{id:"text-alignmentcss"},"text-alignment.css"),(0,l.kt)("p",null,"Adds utility classes to align the text of an element or adjust the white space based on the breakpoint, see ",(0,l.kt)("a",{parentName:"p",href:"/developer/docs/v5/layout/css-utilities#text-alignment"},"CSS Utilities")," for usage information."),(0,l.kt)("h4",{id:"text-transformationcss"},"text-transformation.css"),(0,l.kt)("p",null,"Adds utility classes to transform the text of an element to ",(0,l.kt)("inlineCode",{parentName:"p"},"uppercase"),", ",(0,l.kt)("inlineCode",{parentName:"p"},"lowercase")," or ",(0,l.kt)("inlineCode",{parentName:"p"},"capitalize")," based on the breakpoint, see ",(0,l.kt)("a",{parentName:"p",href:"/developer/docs/v5/layout/css-utilities#text-transformation"},"CSS Utilities")," for usage information."),(0,l.kt)("h4",{id:"flex-utilscss"},"flex-utils.css"),(0,l.kt)("p",null,"Adds utility classes to align flex containers and items, see ",(0,l.kt)("a",{parentName:"p",href:"/developer/docs/v5/layout/css-utilities#flex-properties"},"CSS Utilities")," for usage information."),(0,l.kt)("h4",{id:"displaycss"},"display.css"),(0,l.kt)("p",null,"Adds utility classes to hide any element based on the breakpoint, see ",(0,l.kt)("a",{parentName:"p",href:"/developer/docs/v5/layout/css-utilities#element-display"},"CSS Utilities")," for usage information."),(0,l.kt)("h2",{id:"usage"},"Usage"),(0,l.kt)("p",null,"Refer to ",(0,l.kt)("a",{parentName:"p",href:"/developer/docs/v5/intro/cdn"},"Ionic Packages")," for how to include the global stylesheets based on the framework and ",(0,l.kt)("a",{parentName:"p",href:"/developer/docs/v5/layout/css-utilities"},"CSS Utilities")," for how to use the optional utilities."))}u.isMDXComponent=!0}}]);