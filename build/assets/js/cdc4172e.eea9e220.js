"use strict";(self.webpackChunkionic_docs=self.webpackChunkionic_docs||[]).push([[57584],{3905:function(e,t,n){n.d(t,{Zo:function(){return d},kt:function(){return m}});var s=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);t&&(s=s.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,s)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function r(e,t){if(null==e)return{};var n,s,i=function(e,t){if(null==e)return{};var n,s,i={},o=Object.keys(e);for(s=0;s<o.length;s++)n=o[s],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(s=0;s<o.length;s++)n=o[s],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var a=s.createContext({}),c=function(e){var t=s.useContext(a),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},d=function(e){var t=c(e.components);return s.createElement(a.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return s.createElement(s.Fragment,{},t)}},p=s.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,a=e.parentName,d=r(e,["components","mdxType","originalType","parentName"]),p=c(n),m=i,f=p["".concat(a,".").concat(m)]||p[m]||u[m]||o;return n?s.createElement(f,l(l({ref:t},d),{},{components:n})):s.createElement(f,l({ref:t},d))}));function m(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,l=new Array(o);l[0]=p;var r={};for(var a in t)hasOwnProperty.call(t,a)&&(r[a]=t[a]);r.originalType=e,r.mdxType="string"==typeof e?e:i,l[1]=r;for(var c=2;c<o;c++)l[c]=n[c];return s.createElement.apply(null,l)}return s.createElement.apply(null,n)}p.displayName="MDXCreateElement"},28207:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return r},contentTitle:function(){return a},metadata:function(){return c},toc:function(){return d},default:function(){return p}});var s=n(87462),i=n(63366),o=(n(67294),n(3905)),l=["components"],r={initialTab:"preview",inlineHtmlPreviews:!0},a="Global Stylesheets",c={unversionedId:"layout/global-stylesheets",id:"version-v5/layout/global-stylesheets",isDocsHomePage:!1,title:"Global Stylesheets",description:"While Ionic Framework component styles are self-contained, there are several global stylesheets that should be included in order to use all of Ionic's features. Some of the stylesheets are required in order for an Ionic Framework app to look and behave properly, and others include optional utilities to quickly style your app.",source:"@site/versioned_docs/version-v5/layout/global-stylesheets.md",sourceDirName:"layout",slug:"/layout/global-stylesheets",permalink:"/docs/v5/layout/global-stylesheets",editUrl:"https://github.com/ionic-team/ionic-docs/edit/main/versioned_docs/version-v5/layout/global-stylesheets.md",tags:[],version:"v5",frontMatter:{initialTab:"preview",inlineHtmlPreviews:!0},sidebar:"version-v5/docs",previous:{title:"Responsive Grid",permalink:"/docs/v5/layout/grid"},next:{title:"CSS Utilities",permalink:"/docs/v5/layout/css-utilities"}},d=[{value:"Available",id:"available",children:[{value:"Required",id:"required",children:[{value:"core.css",id:"corecss",children:[],level:4}],level:3},{value:"Recommended",id:"recommended",children:[{value:"structure.css",id:"structurecss",children:[],level:4},{value:"typography.css",id:"typographycss",children:[],level:4},{value:"normalize.css",id:"normalizecss",children:[],level:4}],level:3},{value:"Optional",id:"optional",children:[{value:"padding.css",id:"paddingcss",children:[],level:4},{value:"float-elements.css",id:"float-elementscss",children:[],level:4},{value:"text-alignment.css",id:"text-alignmentcss",children:[],level:4},{value:"text-transformation.css",id:"text-transformationcss",children:[],level:4},{value:"flex-utils.css",id:"flex-utilscss",children:[],level:4},{value:"display.css",id:"displaycss",children:[],level:4}],level:3}],level:2},{value:"Usage",id:"usage",children:[],level:2}],u={toc:d};function p(e){var t=e.components,n=(0,i.Z)(e,l);return(0,o.kt)("wrapper",(0,s.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"global-stylesheets"},"Global Stylesheets"),(0,o.kt)("p",null,"While Ionic Framework component styles are self-contained, there are several global stylesheets that should be included in order to use all of Ionic's features. Some of the stylesheets are required in order for an Ionic Framework app to look and behave properly, and others include optional utilities to quickly style your app."),(0,o.kt)("h2",{id:"available"},"Available"),(0,o.kt)("h3",{id:"required"},"Required"),(0,o.kt)("p",null,"The following CSS file must be included in order for Ionic Framework to work properly."),(0,o.kt)("h4",{id:"corecss"},"core.css"),(0,o.kt)("p",null,"This file is the only stylesheet that is required in order for Ionic components to work properly. It includes app specific styles, and allows the ",(0,o.kt)("inlineCode",{parentName:"p"},"color")," property to work across components. If this file is not included the colors will not show up and some elements may not appear properly."),(0,o.kt)("h3",{id:"recommended"},"Recommended"),(0,o.kt)("p",null,"The following CSS files are recommended to be included in an Ionic Framework app. If they are not included, some elements may have undesired styles. If Ionic Framework components are being used outside of an app, these files may not be necessary."),(0,o.kt)("h4",{id:"structurecss"},"structure.css"),(0,o.kt)("p",null,"Applies styles to ",(0,o.kt)("inlineCode",{parentName:"p"},"<html>")," and defaults ",(0,o.kt)("inlineCode",{parentName:"p"},"box-sizing")," to ",(0,o.kt)("inlineCode",{parentName:"p"},"border-box"),". It ensures scrolling behaves like native in mobile devices."),(0,o.kt)("h4",{id:"typographycss"},"typography.css"),(0,o.kt)("p",null,"Typography changes the font-family of the entire document and modifies the font styles for heading elements. It also applies positioning styles to some native text elements."),(0,o.kt)("h4",{id:"normalizecss"},"normalize.css"),(0,o.kt)("p",null,"Makes browsers render all elements more consistently and in line with modern standards. It is based on ",(0,o.kt)("a",{parentName:"p",href:"https://necolas.github.io/normalize.css/"},"Normalize.css"),"."),(0,o.kt)("h3",{id:"optional"},"Optional"),(0,o.kt)("p",null,"The following set of CSS files are optional and can safely be commented out or removed if the application is not using any of the features."),(0,o.kt)("h4",{id:"paddingcss"},"padding.css"),(0,o.kt)("p",null,"Adds utility classes to modify the padding or margin on any element, see ",(0,o.kt)("a",{parentName:"p",href:"/docs/v5/layout/css-utilities#content-space"},"CSS Utilities")," for usage information."),(0,o.kt)("h4",{id:"float-elementscss"},"float-elements.css"),(0,o.kt)("p",null,"Adds utility classes to float an element based on the breakpoint and side, see ",(0,o.kt)("a",{parentName:"p",href:"/docs/v5/layout/css-utilities#element-placement"},"CSS Utilities")," for usage information."),(0,o.kt)("h4",{id:"text-alignmentcss"},"text-alignment.css"),(0,o.kt)("p",null,"Adds utility classes to align the text of an element or adjust the white space based on the breakpoint, see ",(0,o.kt)("a",{parentName:"p",href:"/docs/v5/layout/css-utilities#text-alignment"},"CSS Utilities")," for usage information."),(0,o.kt)("h4",{id:"text-transformationcss"},"text-transformation.css"),(0,o.kt)("p",null,"Adds utility classes to transform the text of an element to ",(0,o.kt)("inlineCode",{parentName:"p"},"uppercase"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"lowercase")," or ",(0,o.kt)("inlineCode",{parentName:"p"},"capitalize")," based on the breakpoint, see ",(0,o.kt)("a",{parentName:"p",href:"/docs/v5/layout/css-utilities#text-transformation"},"CSS Utilities")," for usage information."),(0,o.kt)("h4",{id:"flex-utilscss"},"flex-utils.css"),(0,o.kt)("p",null,"Adds utility classes to align flex containers and items, see ",(0,o.kt)("a",{parentName:"p",href:"/docs/v5/layout/css-utilities#flex-properties"},"CSS Utilities")," for usage information."),(0,o.kt)("h4",{id:"displaycss"},"display.css"),(0,o.kt)("p",null,"Adds utility classes to hide any element based on the breakpoint, see ",(0,o.kt)("a",{parentName:"p",href:"/docs/v5/layout/css-utilities#element-display"},"CSS Utilities")," for usage information."),(0,o.kt)("h2",{id:"usage"},"Usage"),(0,o.kt)("p",null,"Refer to ",(0,o.kt)("a",{parentName:"p",href:"/docs/v5/intro/cdn"},"Ionic Packages")," for how to include the global stylesheets based on the framework and ",(0,o.kt)("a",{parentName:"p",href:"/docs/v5/layout/css-utilities"},"CSS Utilities")," for how to use the optional utilities."))}p.isMDXComponent=!0}}]);