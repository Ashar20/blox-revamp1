"use strict";(self.webpackChunkionic_docs=self.webpackChunkionic_docs||[]).push([[1268],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return u}});var a=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=a.createContext({}),p=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=p(e.components);return a.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},h=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),h=p(n),u=o,f=h["".concat(l,".").concat(u)]||h[u]||d[u]||r;return n?a.createElement(f,i(i({ref:t},c),{},{components:n})):a.createElement(f,i({ref:t},c))}));function u(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,i=new Array(r);i[0]=h;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:o,i[1]=s;for(var p=2;p<r;p++)i[p]=n[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}h.displayName="MDXCreateElement"},91830:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return s},contentTitle:function(){return l},metadata:function(){return p},toc:function(){return c},default:function(){return h}});var a=n(87462),o=n(63366),r=(n(67294),n(3905)),i=["components"],s={sidebar_label:"Loading Photos"},l="Loading Photos from the Filesystem",p={unversionedId:"angular/your-first-app/loading-photos",id:"version-v5/angular/your-first-app/loading-photos",isDocsHomePage:!1,title:"Loading Photos from the Filesystem",description:"We\u2019ve implemented photo taking and saving to the filesystem. There\u2019s one last piece of functionality missing: the photos are stored in the filesystem, but we need a way to save pointers to each file so that they can be displayed again in the photo gallery.",source:"@site/versioned_docs/version-v5/angular/your-first-app/4-loading-photos.md",sourceDirName:"angular/your-first-app",slug:"/angular/your-first-app/loading-photos",permalink:"/docs/v5/angular/your-first-app/loading-photos",editUrl:"https://github.com/ionic-team/ionic-docs/edit/main/versioned_docs/version-v5/angular/your-first-app/4-loading-photos.md",tags:[],version:"v5",sidebarPosition:4,frontMatter:{sidebar_label:"Loading Photos"},sidebar:"version-v5/docs",previous:{title:"Saving Photos",permalink:"/docs/v5/angular/your-first-app/saving-photos"},next:{title:"Adding Mobile",permalink:"/docs/v5/angular/your-first-app/adding-mobile"}},c=[{value:"Preferences API",id:"preferences-api",children:[],level:2}],d={toc:c};function h(e){var t=e.components,n=(0,o.Z)(e,i);return(0,r.kt)("wrapper",(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"loading-photos-from-the-filesystem"},"Loading Photos from the Filesystem"),(0,r.kt)("p",null,"We\u2019ve implemented photo taking and saving to the filesystem. There\u2019s one last piece of functionality missing: the photos are stored in the filesystem, but we need a way to save pointers to each file so that they can be displayed again in the photo gallery."),(0,r.kt)("p",null,"Fortunately, this is easy: we\u2019ll leverage the Capacitor ",(0,r.kt)("a",{parentName:"p",href:"https://capacitorjs.com/docs/apis/preferences"},"Preferences API")," to store our array of Photos in a key-value store."),(0,r.kt)("h2",{id:"preferences-api"},"Preferences API"),(0,r.kt)("p",null,"Begin by defining a constant variable that will act as the key for the store:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx"},"export class PhotoService {\n  public photos: UserPhoto[] = [];\n  private PHOTO_STORAGE: string = 'photos';\n\n  // other code\n}\n")),(0,r.kt)("p",null,"Next, at the end of the ",(0,r.kt)("inlineCode",{parentName:"p"},"addNewToGallery")," function, add a call to ",(0,r.kt)("inlineCode",{parentName:"p"},"Preferences.set()")," to save the Photos array. By adding it here, the Photos array is stored each time a new photo is taken. This way, it doesn\u2019t matter when the app user closes or switches to a different app - all photo data is saved."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx"},"Preferences.set({\n  key: this.PHOTO_STORAGE,\n  value: JSON.stringify(this.photos),\n});\n")),(0,r.kt)("p",null,"With the photo array data saved, create a function called ",(0,r.kt)("inlineCode",{parentName:"p"},"loadSaved()")," that can retrieve that data. We use the same key to retrieve the photos array in JSON format, then parse it into an array:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx"},"public async loadSaved() {\n  // Retrieve cached photo array data\n  const photoList = await Preferences.get({ key: this.PHOTO_STORAGE });\n  this.photos = JSON.parse(photoList.value) || [];\n\n  // more to come...\n}\n")),(0,r.kt)("p",null,"On mobile (coming up next!), we can directly set the source of an image tag - ",(0,r.kt)("inlineCode",{parentName:"p"},'<img src="x" />')," - to each photo file on the Filesystem, displaying them automatically. On the web, however, we must read each image from the Filesystem into base64 format, using a new ",(0,r.kt)("inlineCode",{parentName:"p"},"base64")," property on the ",(0,r.kt)("inlineCode",{parentName:"p"},"Photo")," object. This is because the Filesystem API uses ",(0,r.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/API/IndexedDB_API"},"IndexedDB")," under the hood. Below is the code you need to add in the ",(0,r.kt)("inlineCode",{parentName:"p"},"loadSaved()")," function you just added:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx"},"// Display the photo by reading into base64 format\nfor (let photo of this.photos) {\n  // Read each saved photo's data from the Filesystem\n  const readFile = await Filesystem.readFile({\n    path: photo.filepath,\n    directory: Directory.Data,\n  });\n\n  // Web platform only: Load the photo as base64 data\n  photo.webviewPath = `data:image/jpeg;base64,${readFile.data}`;\n}\n")),(0,r.kt)("p",null,"After, call this new method in ",(0,r.kt)("inlineCode",{parentName:"p"},"tab2.page.ts")," so that when the user first navigates to Tab 2 (the Photo Gallery), all photos are loaded and displayed on the screen."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx"},"async ngOnInit() {\n  await this.photoService.loadSaved();\n}\n")),(0,r.kt)("p",null,"That\u2019s it! We\u2019ve built a complete Photo Gallery feature in our Ionic app that works on the web. Next up, we\u2019ll transform it into a mobile app for iOS and Android!"))}h.isMDXComponent=!0}}]);