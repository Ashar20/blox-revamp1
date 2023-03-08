"use strict";(self.webpackChunkionic_docs=self.webpackChunkionic_docs||[]).push([[72695],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return g}});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=r.createContext({}),p=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},u=function(e){var t=p(e.components);return r.createElement(l.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,l=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),d=p(n),g=o,f=d["".concat(l,".").concat(g)]||d[g]||s[g]||i;return n?r.createElement(f,a(a({ref:t},u),{},{components:n})):r.createElement(f,a({ref:t},u))}));function g(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=d;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:o,a[1]=c;for(var p=2;p<i;p++)a[p]=n[p];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},55221:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return c},contentTitle:function(){return l},metadata:function(){return p},toc:function(){return u},default:function(){return d}});var r=n(87462),o=n(63366),i=(n(67294),n(3905)),a=["components"],c={},l="Blox integration",p={unversionedId:"intro/upgrading-to-ionic-6",id:"intro/upgrading-to-ionic-6",isDocsHomePage:!1,title:"Blox integration",description:"Integration",source:"@site/docs/intro/upgrading-to-ionic-6.md",sourceDirName:"intro",slug:"/intro/upgrading-to-ionic-6",permalink:"/docs/intro/upgrading-to-ionic-6",editUrl:"https://github.com/ionic-team/ionic-docs/edit/main/docs/intro/upgrading-to-ionic-6.md",tags:[],version:"current",frontMatter:{},sidebar:"docs",previous:{title:"Overview",permalink:"/docs/"},next:{title:"Create a catalog",permalink:"/docs/Content Hub/overview"}},u=[{value:"Integration",id:"integration",children:[],level:2},{value:"Integration Via Embed Code",id:"integration-via-embed-code",children:[],level:2},{value:"API",id:"api",children:[],level:2}],s={toc:u};function d(e){var t=e.components,n=(0,o.Z)(e,a);return(0,i.kt)("wrapper",(0,r.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"blox-integration"},"Blox integration"),(0,i.kt)("h2",{id:"integration"},"Integration"),(0,i.kt)("p",null,"Before you can begin building personalized experiences you need to integrate your online store with the Blox app. This section helps you integrate Blox easily in a few short steps."),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://support.getblox.ai/wp-content/uploads/2022/09/Integrate.png",alt:"Alt text",title:"a title"})),(0,i.kt)("h2",{id:"integration-via-embed-code"},"Integration Via Embed Code"),(0,i.kt)("p",null,"Embed code is a piece of code that you\u2019ll add to your website\u2019s pages to publish the experiences created using Blox. There are two ways in which the embed code can be put onto the website:"),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://support.getblox.ai/wp-content/uploads/2022/09/Integrate_2-1024x692.png",alt:"Alt text",title:"a title"})),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"<script>\n  (function(d, r, l) {\n    const b = d.body;\n    const s = d.createElement('script');\n    s.defer = true;\n    s.src = 'https://staging-blox-ai-js.getblox.ai/1.0/blox-ai.staging.js';\n    b.appendChild(s);\n    s.onload = function() {\n      if (typeof window.blox_ai === 'object' && typeof window.blox_ai.init === 'function') {\n        window.blox_ai.init(r, l);\n      }\n    };\n  })(window.document, 'us-east-1', 'bloxDataLayer');\n<\/script>\n\n")),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Launch Digital Experience Hub."),(0,i.kt)("li",{parentName:"ol"},"Click on the ",(0,i.kt)("button",null," Interegate ")," button the navigation bar")),(0,i.kt)("h2",{id:"api"},"API"),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://support.getblox.ai/wp-content/uploads/2022/09/Integrate_3-1024x570.png",alt:"Alt text",title:"a title"})),(0,i.kt)("p",null,"Please visit the ",(0,i.kt)("a",{parentName:"p",href:"https://d16mhahokhyjuk.cloudfront.net/api.html#servers"},"API documentation")," site to get access to all the information you will need to integrate through APIs. You can choose any service you want to access from recommendations, search, listing and Events tracking."))}d.isMDXComponent=!0}}]);