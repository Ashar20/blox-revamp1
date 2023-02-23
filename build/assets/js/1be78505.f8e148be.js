"use strict";(self.webpackChunkionic_docs=self.webpackChunkionic_docs||[]).push([[29514,24608],{39649:function(e,t,n){n.d(t,{N:function(){return m},Z:function(){return p}});var a=n(63366),r=n(87462),l=n(67294),i=n(86010),o=n(95999),c=n(89521),d="anchorWithStickyNavbar_31ik",s="anchorWithHideOnScrollNavbar_3R7-",u=["id"],m=function(e){var t=Object.assign({},e);return l.createElement("header",null,l.createElement("h1",(0,r.Z)({},t,{id:void 0}),t.children))},p=function(e){return"h1"===e?m:(t=e,function(e){var n,m=e.id,p=(0,a.Z)(e,u),h=(0,c.LU)().navbar.hideOnScroll;return m?l.createElement(t,(0,r.Z)({},p,{className:(0,i.Z)("anchor",(n={},n[s]=h,n[d]=!h,n)),id:m}),p.children,l.createElement("a",{"aria-hidden":"true",className:"hash-link",href:"#"+m,title:(0,o.I)({id:"theme.common.headingLinkTitle",message:"Direct link to heading",description:"Title for link to heading"})},"\u200b")):l.createElement(t,p)});var t}},24608:function(e,t,n){n.r(t);var a=n(67294),r=n(16365),l=n(95999);t.default=function(){return a.createElement(r.Z,{title:(0,l.I)({id:"theme.NotFound.title",message:"Page Not Found"})},a.createElement("main",{className:"container margin-vert--xl"},a.createElement("div",{className:"row"},a.createElement("div",{className:"col col--6 col--offset-3"},a.createElement("h1",{className:"hero__title"},a.createElement(l.Z,{id:"theme.NotFound.title",description:"The title of the 404 page"},"Page Not Found")),a.createElement("p",null,a.createElement(l.Z,{id:"theme.NotFound.p1",description:"The first paragraph of the 404 page"},"We could not find what you were looking for.")),a.createElement("p",null,a.createElement(l.Z,{id:"theme.NotFound.p2",description:"The 2nd paragraph of the 404 page"},"Please contact the owner of the site that linked you to the original URL and let them know their link is broken."))))))}},75004:function(e,t,n){n.r(t),n.d(t,{default:function(){return ce}});var a=n(67294),r=n(3905),l=n(46291),i=n(16365),o=n(86010),c=n(89521),d=n(93783),s=n(55537),u=n(87462),m=function(e){return a.createElement("svg",(0,u.Z)({width:"20",height:"20","aria-hidden":"true"},e),a.createElement("g",{fill:"#7a7a7a"},a.createElement("path",{d:"M9.992 10.023c0 .2-.062.399-.172.547l-4.996 7.492a.982.982 0 01-.828.454H1c-.55 0-1-.453-1-1 0-.2.059-.403.168-.551l4.629-6.942L.168 3.078A.939.939 0 010 2.528c0-.548.45-.997 1-.997h2.996c.352 0 .649.18.828.45L9.82 9.472c.11.148.172.347.172.55zm0 0"}),a.createElement("path",{d:"M19.98 10.023c0 .2-.058.399-.168.547l-4.996 7.492a.987.987 0 01-.828.454h-3c-.547 0-.996-.453-.996-1 0-.2.059-.403.168-.551l4.625-6.942-4.625-6.945a.939.939 0 01-.168-.55 1 1 0 01.996-.997h3c.348 0 .649.18.828.45l4.996 7.492c.11.148.168.347.168.55zm0 0"})))},p=n(95999),h=n(63366),b=n(39960),f=n(13919),v=n(90541),E="menuLinkText_1J2g",g=["items"],k=["item"],Z=["item","onItemClick","activePath","level"],_=["item","onItemClick","activePath","level"],C=function e(t,n){return"link"===t.type?(0,c.Mg)(t.href,n):"category"===t.type&&t.items.some((function(t){return e(t,n)}))},N=(0,a.memo)((function(e){var t=e.items,n=(0,h.Z)(e,g);return a.createElement(a.Fragment,null,t.map((function(e,t){return a.createElement(S,(0,u.Z)({key:t,item:e},n))})))}));function S(e){var t=e.item,n=(0,h.Z)(e,k);return"category"===t.type?0===t.items.length?null:a.createElement(T,(0,u.Z)({item:t},n)):a.createElement(y,(0,u.Z)({item:t},n))}function T(e){var t,n=e.item,r=e.onItemClick,l=e.activePath,i=e.level,d=(0,h.Z)(e,Z),s=n.items,m=n.label,p=n.collapsible,b=n.className,f=C(n,l),v=(0,c.uR)({initialState:function(){return!!p&&(!f&&n.collapsed)}}),g=v.collapsed,k=v.setCollapsed,_=v.toggleCollapsed;return function(e){var t=e.isActive,n=e.collapsed,r=e.setCollapsed,l=(0,c.D9)(t);(0,a.useEffect)((function(){t&&!l&&n&&r(!1)}),[t,l,n,r])}({isActive:f,collapsed:g,setCollapsed:k}),a.createElement("li",{className:(0,o.Z)(c.kM.docs.docSidebarItemCategory,c.kM.docs.docSidebarItemCategoryLevel(i),"menu__list-item",{"menu__list-item--collapsed":g},b)},a.createElement("a",(0,u.Z)({className:(0,o.Z)("menu__link",(t={"menu__link--sublist":p,"menu__link--active":p&&f},t[E]=!p,t)),onClick:p?function(e){e.preventDefault(),_()}:void 0,href:p?"#":void 0},d),m),a.createElement(c.zF,{lazy:!0,as:"ul",className:"menu__list",collapsed:g},a.createElement(N,{items:s,tabIndex:g?-1:0,onItemClick:r,activePath:l,level:i+1})))}function y(e){var t=e.item,n=e.onItemClick,r=e.activePath,l=e.level,i=(0,h.Z)(e,_),d=t.href,s=t.label,m=t.className,p=C(t,r);return a.createElement("li",{className:(0,o.Z)(c.kM.docs.docSidebarItemLink,c.kM.docs.docSidebarItemLinkLevel(l),"menu__list-item",m),key:s},a.createElement(b.default,(0,u.Z)({className:(0,o.Z)("menu__link",{"menu__link--active":p}),"aria-current":p?"page":void 0,to:d},(0,f.Z)(d)&&{onClick:n},i),(0,f.Z)(d)?s:a.createElement("span",null,s,a.createElement(v.Z,null))))}var I="sidebar_15mo",M="sidebarWithHideableNavbar_267A",A="sidebarHidden_2kNb",L="sidebarLogo_3h0W",x="menu_Bmed",w="menuWithAnnouncementBar_2WvA",B="collapseSidebarButton_1CGd",F="collapseSidebarButtonIcon_3E-R";function P(e){var t=e.onClick;return a.createElement("button",{type:"button",title:(0,p.I)({id:"theme.docs.sidebar.collapseButtonTitle",message:"Collapse sidebar",description:"The title attribute for collapse button of doc sidebar"}),"aria-label":(0,p.I)({id:"theme.docs.sidebar.collapseButtonAriaLabel",message:"Collapse sidebar",description:"The title attribute for collapse button of doc sidebar"}),className:(0,o.Z)("button button--secondary button--outline",B),onClick:t},a.createElement(m,{className:F}))}function R(e){var t,n,r=e.path,l=e.sidebar,i=e.onCollapse,d=e.isHidden,u=function(){var e=(0,c.nT)().isActive,t=(0,a.useState)(e),n=t[0],r=t[1];return(0,c.RF)((function(t){var n=t.scrollY;e&&r(0===n)}),[e]),e&&n}(),m=(0,c.LU)(),p=m.navbar.hideOnScroll,h=m.hideableSidebar;return a.createElement("div",{className:(0,o.Z)(I,(t={},t[M]=p,t[A]=d,t))},p&&a.createElement(s.Z,{tabIndex:-1,className:L}),a.createElement("nav",{className:(0,o.Z)("menu thin-scrollbar",x,(n={},n[w]=u,n))},a.createElement("ul",{className:(0,o.Z)(c.kM.docs.docSidebarMenu,"menu__list")},a.createElement(N,{items:l,activePath:r,level:1}))),h&&a.createElement(P,{onClick:i}))}var D=function(e){var t=e.toggleSidebar,n=e.sidebar,r=e.path;return a.createElement("ul",{className:(0,o.Z)(c.kM.docs.docSidebarMenu,"menu__list")},a.createElement(N,{items:n,activePath:r,onItemClick:function(){return t()},level:1}))};function W(e){return a.createElement(c.Cv,{component:D,props:e})}var H=a.memo(R),O=a.memo(W);function U(e){var t=(0,d.Z)(),n="desktop"===t||"ssr"===t,r="mobile"===t;return a.createElement(a.Fragment,null,n&&a.createElement(H,e),r&&a.createElement(O,e))}function V(e){return a.createElement(a.Fragment,null,a.createElement(s.Z,null),a.createElement(U,e))}var j=n(12859),z=n(19055),Y=n(39649),J="details_1VDD";function X(e){var t=Object.assign({},e);return a.createElement(c.PO,(0,u.Z)({},t,{className:(0,o.Z)("alert alert--info",J,t.className)}))}var q=["mdxType","originalType"];var G={head:function(e){var t=a.Children.map(e.children,(function(e){return function(e){var t,n;if(null!=e&&null!=(t=e.props)&&t.mdxType&&null!=e&&null!=(n=e.props)&&n.originalType){var r=e.props,l=(r.mdxType,r.originalType,(0,h.Z)(r,q));return a.createElement(e.props.originalType,l)}return e}(e)}));return a.createElement(j.default,e,t)},code:function(e){var t=e.children;return(0,a.isValidElement)(t)?t:t.includes("\n")?a.createElement(z.Z,e):a.createElement("code",e)},a:function(e){return a.createElement(b.default,e)},pre:function(e){var t,n=e.children;return(0,a.isValidElement)(n)&&(0,a.isValidElement)(null==n||null==(t=n.props)?void 0:t.children)?n.props.children:a.createElement(z.Z,(0,a.isValidElement)(n)?null==n?void 0:n.props:Object.assign({},e))},details:function(e){var t=a.Children.toArray(e.children),n=t.find((function(e){var t;return"summary"===(null==e||null==(t=e.props)?void 0:t.mdxType)})),r=a.createElement(a.Fragment,null,t.filter((function(e){return e!==n})));return a.createElement(X,(0,u.Z)({},e,{summary:n}),r)},h1:(0,Y.Z)("h1"),h2:(0,Y.Z)("h2"),h3:(0,Y.Z)("h3"),h4:(0,Y.Z)("h4"),h5:(0,Y.Z)("h5"),h6:(0,Y.Z)("h6")},K=["children"],Q=Object.assign({},G,{table:function(e){var t=e.children,n=(0,h.Z)(e,K),r=t[0].props.children.props.children,l=!Array.isArray(r)||r.every((function(e){return e.props.children}));return a.createElement("div",{className:"table-wrapper"},a.createElement("table",(0,u.Z)({},n,{children:l?t:t.slice(1)})))}}),$=n(24608),ee="backToTopButton_35hR",te="backToTopButtonShow_18ls";function ne(){var e=(0,a.useRef)(null);return{smoothScrollTop:function(){var t;e.current=(t=null,function e(){var n=document.documentElement.scrollTop;n>0&&(t=requestAnimationFrame(e),window.scrollTo(0,Math.floor(.85*n)))}(),function(){return t&&cancelAnimationFrame(t)})},cancelScrollToTop:function(){return null==e.current?void 0:e.current()}}}var ae=function(){var e,t=(0,a.useState)(!1),n=t[0],r=t[1],l=(0,a.useRef)(!1),i=ne(),d=i.smoothScrollTop,s=i.cancelScrollToTop;return(0,c.RF)((function(e,t){var n=e.scrollY,a=null==t?void 0:t.scrollY;if(a)if(l.current)l.current=!1;else{var i=n<a;if(i||s(),n<300)r(!1);else if(i){var o=document.documentElement.scrollHeight;n+window.innerHeight<o&&r(!0)}else r(!1)}})),(0,c.SL)((function(e){e.location.hash&&(l.current=!0,r(!1))})),a.createElement("button",{"aria-label":(0,p.I)({id:"theme.BackToTopButton.buttonAriaLabel",message:"Scroll back to top",description:"The ARIA label for the back to top button"}),className:(0,o.Z)("clean-btn",c.kM.common.backToTopButton,ee,(e={},e[te]=n,e)),type:"button",onClick:function(){return d()}})},re=n(76775),le=n(49893),ie={docPage:"docPage_3AUJ",docMainContainer:"docMainContainer_2AUC",docSidebarContainer:"docSidebarContainer_2LAn",docMainContainerEnhanced:"docMainContainerEnhanced_27Ec",docSidebarContainerHidden:"docSidebarContainerHidden_2lve",collapsedDocSidebar:"collapsedDocSidebar_23gX",expandSidebarButtonIcon:"expandSidebarButtonIcon_11nM",docItemWrapperEnhanced:"docItemWrapperEnhanced_2WAn"};function oe(e){var t,n,l,d=e.currentDocRoute,s=e.versionMetadata,u=e.children,h=s.pluginId,b=s.version,f=d.sidebar,v=f?s.docsSidebars[f]:void 0,E=(0,a.useState)(!1),g=E[0],k=E[1],Z=(0,a.useState)(!1),_=Z[0],C=Z[1],N=(0,a.useCallback)((function(){_&&C(!1),k((function(e){return!e}))}),[_]);return a.createElement(i.Z,{wrapperClassName:c.kM.wrapper.docsPages,pageClassName:c.kM.page.docsDocPage,searchMetadata:{version:b,tag:(0,c.os)(h,b)}},a.createElement("div",{className:(0,o.Z)(ie.docPage)},a.createElement(ae,null),v&&a.createElement("aside",{className:(0,o.Z)(ie.docSidebarContainer,(t={},t[ie.docSidebarContainerHidden]=g,t)),onTransitionEnd:function(e){e.currentTarget.classList.contains(ie.docSidebarContainer)&&g&&C(!0)}},a.createElement(V,{key:f,sidebar:v,path:d.path,onCollapse:N,isHidden:_}),_&&a.createElement("div",{className:ie.collapsedDocSidebar,title:(0,p.I)({id:"theme.docs.sidebar.expandButtonTitle",message:"Expand sidebar",description:"The ARIA label and title attribute for expand button of doc sidebar"}),"aria-label":(0,p.I)({id:"theme.docs.sidebar.expandButtonAriaLabel",message:"Expand sidebar",description:"The ARIA label and title attribute for expand button of doc sidebar"}),tabIndex:0,role:"button",onKeyDown:N,onClick:N},a.createElement(m,{className:ie.expandSidebarButtonIcon}))),a.createElement("div",null,a.createElement(le.Z,null),a.createElement("main",{className:(0,o.Z)(ie.docMainContainer,(n={},n[ie.docMainContainerEnhanced]=g||!v,n))},a.createElement("div",{className:(0,o.Z)("container padding-top--md padding-bottom--lg",ie.docItemWrapper,(l={},l[ie.docItemWrapperEnhanced]=g,l))},a.createElement(r.Zo,{components:Q},u))))))}var ce=function(e){var t=e.route.routes,n=e.versionMetadata,r=e.location,i=t.find((function(e){return(0,re.LX)(r.pathname,e)}));return i?a.createElement(a.Fragment,null,a.createElement(j.default,null,a.createElement("html",{className:n.className})),a.createElement(oe,{currentDocRoute:i,versionMetadata:n},(0,l.Z)(t,{versionMetadata:n}))):a.createElement($.default,null)}}}]);