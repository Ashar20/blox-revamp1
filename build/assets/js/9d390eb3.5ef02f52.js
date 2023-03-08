"use strict";(self.webpackChunkionic_docs=self.webpackChunkionic_docs||[]).push([[66623],{3905:function(e,n,r){r.d(n,{Zo:function(){return u},kt:function(){return p}});var t=r(67294);function o(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}function a(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,t)}return r}function i(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?a(Object(r),!0).forEach((function(n){o(e,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))}))}return e}function l(e,n){if(null==e)return{};var r,t,o=function(e,n){if(null==e)return{};var r,t,o={},a=Object.keys(e);for(t=0;t<a.length;t++)r=a[t],n.indexOf(r)>=0||(o[r]=e[r]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(t=0;t<a.length;t++)r=a[t],n.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var c=t.createContext({}),s=function(e){var n=t.useContext(c),r=n;return e&&(r="function"==typeof e?e(n):i(i({},n),e)),r},u=function(e){var n=s(e.components);return t.createElement(c.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},h=t.forwardRef((function(e,n){var r=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),h=s(r),p=o,m=h["".concat(c,".").concat(p)]||h[p]||d[p]||a;return r?t.createElement(m,i(i({ref:n},u),{},{components:r})):t.createElement(m,i({ref:n},u))}));function p(e,n){var r=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=h;var l={};for(var c in n)hasOwnProperty.call(n,c)&&(l[c]=n[c]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var s=2;s<a;s++)i[s]=r[s];return t.createElement.apply(null,i)}return t.createElement.apply(null,r)}h.displayName="MDXCreateElement"},13370:function(e,n,r){r.r(n),r.d(n,{frontMatter:function(){return l},contentTitle:function(){return c},metadata:function(){return s},toc:function(){return u},default:function(){return h}});var t=r(87462),o=r(63366),a=(r(67294),r(3905)),i=["components"],l={},c="Versioning",s={unversionedId:"reference/versioning",id:"version-v5/reference/versioning",isDocsHomePage:!1,title:"Versioning",description:"Ionic Framework follows the Semantic Versioning (SemVer) convention: major.minor.patch. Incompatible API changes increment the major version, adding backwards-compatible functionality increments the minor version, and backwards-compatible bug fixes increment the patch version.",source:"@site/versioned_docs/version-v5/reference/versioning.md",sourceDirName:"reference",slug:"/reference/versioning",permalink:"/docs/v5/reference/versioning",editUrl:"https://github.com/ionic-team/ionic-docs/edit/main/versioned_docs/version-v5/reference/versioning.md",tags:[],version:"v5",frontMatter:{},sidebar:"version-v5/docs",previous:{title:"Glossary",permalink:"/docs/v5/reference/glossary"},next:{title:"Release Notes",permalink:"/docs/v5/reference/release-notes"}},u=[{value:"Release Schedule",id:"release-schedule",children:[{value:"Major Release",id:"major-release",children:[],level:3},{value:"Minor Release",id:"minor-release",children:[],level:3},{value:"Patch Release",id:"patch-release",children:[],level:3}],level:2},{value:"Changelog",id:"changelog",children:[],level:2}],d={toc:u};function h(e){var n=e.components,r=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,t.Z)({},d,r,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"versioning"},"Versioning"),(0,a.kt)("p",null,"Ionic Framework follows the ",(0,a.kt)("a",{href:"https://semver.org/",target:"_blank"},"Semantic Versioning (SemVer)")," convention: ",(0,a.kt)("code",null,"major.minor.patch.")," Incompatible API changes increment the ",(0,a.kt)("code",null,"major")," version, adding backwards-compatible functionality increments the ",(0,a.kt)("code",null,"minor")," version, and backwards-compatible bug fixes increment the ",(0,a.kt)("code",null,"patch")," version."),(0,a.kt)("h2",{id:"release-schedule"},"Release Schedule"),(0,a.kt)("h3",{id:"major-release"},"Major Release"),(0,a.kt)("p",null,"A major release will be published when there is a breaking change introduced in the API. Major releases will occur roughly every ",(0,a.kt)("strong",{parentName:"p"},"6 months")," and may contain breaking changes. Several release candidates will be published prior to a major release in order to get feedback before the final release. An outline of what is changing and why will be included with the release candidates."),(0,a.kt)("h3",{id:"minor-release"},"Minor Release"),(0,a.kt)("p",null,"A minor release will be published when a new feature is added or API changes that are non-breaking are introduced. We will heavily test any changes so that we are confident with the release, but with new code comes the potential for new issues. We are scheduled to release a minor version ",(0,a.kt)("strong",{parentName:"p"},"every month"),", if any features or API changes were made."),(0,a.kt)("h3",{id:"patch-release"},"Patch Release"),(0,a.kt)("p",null,"A patch release will be published when bug fixes were included, but the API has not changed and no breaking changes were introduced. We are scheduled to release a new patch version ",(0,a.kt)("strong",{parentName:"p"},"every other week"),", but there may be times where we need to release sooner or later than scheduled. To ensure patch releases can fix existing code without introducing new issues from the new features, patch releases will always be published prior to a minor release."),(0,a.kt)("h2",{id:"changelog"},"Changelog"),(0,a.kt)("p",null,"To see a list of all notable changes to Ionic please refer to the ",(0,a.kt)("a",{href:"https://github.com/ionic-team/ionic/blob/master/CHANGELOG.md",target:"_blank"},"changelog"),". This contains an ordered\nlist of all bug fixes and new features under each release."))}h.isMDXComponent=!0}}]);