"use strict";(self.webpackChunkionic_docs=self.webpackChunkionic_docs||[]).push([[94344],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return u}});var o=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,o,a=function(e,t){if(null==e)return{};var n,o,a={},r=Object.keys(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=o.createContext({}),c=function(e){var t=o.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=c(e.components);return o.createElement(l.Provider,{value:t},e.children)},h={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},d=o.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),d=c(n),u=a,f=d["".concat(l,".").concat(u)]||d[u]||h[u]||r;return n?o.createElement(f,i(i({ref:t},p),{},{components:n})):o.createElement(f,i({ref:t},p))}));function u(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,i=new Array(r);i[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var c=2;c<r;c++)i[c]=n[c];return o.createElement.apply(null,i)}return o.createElement.apply(null,n)}d.displayName="MDXCreateElement"},58389:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return s},contentTitle:function(){return l},metadata:function(){return c},toc:function(){return p},default:function(){return d}});var o=n(87462),a=n(63366),r=(n(67294),n(3905)),i=["components"],s={sidebar_label:"Loading Photos"},l="Loading Photos from the Filesystem",c={unversionedId:"react/your-first-app/loading-photos",id:"version-v5/react/your-first-app/loading-photos",isDocsHomePage:!1,title:"Loading Photos from the Filesystem",description:"We\u2019ve implemented photo taking and saving to the filesystem. There\u2019s one last piece of functionality missing: the photos are stored in the filesystem, but we need a way to save pointers to each file so that they can be displayed again in the photo gallery.",source:"@site/versioned_docs/version-v5/react/your-first-app/4-loading-photos.md",sourceDirName:"react/your-first-app",slug:"/react/your-first-app/loading-photos",permalink:"/docs/v5/react/your-first-app/loading-photos",editUrl:"https://github.com/ionic-team/ionic-docs/edit/main/versioned_docs/version-v5/react/your-first-app/4-loading-photos.md",tags:[],version:"v5",sidebarPosition:4,frontMatter:{sidebar_label:"Loading Photos"},sidebar:"version-v5/docs",previous:{title:"Saving Photos",permalink:"/docs/v5/react/your-first-app/saving-photos"},next:{title:"Adding Mobile",permalink:"/docs/v5/react/your-first-app/adding-mobile"}},p=[{value:"Preferences API",id:"preferences-api",children:[],level:2}],h={toc:p};function d(e){var t=e.components,n=(0,a.Z)(e,i);return(0,r.kt)("wrapper",(0,o.Z)({},h,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"loading-photos-from-the-filesystem"},"Loading Photos from the Filesystem"),(0,r.kt)("p",null,"We\u2019ve implemented photo taking and saving to the filesystem. There\u2019s one last piece of functionality missing: the photos are stored in the filesystem, but we need a way to save pointers to each file so that they can be displayed again in the photo gallery."),(0,r.kt)("p",null,"Fortunately, this is easy: we\u2019ll leverage the Capacitor ",(0,r.kt)("a",{parentName:"p",href:"https://capacitorjs.com/docs/apis/preferences"},"Preferences API")," to store our array of Photos in a key-value store."),(0,r.kt)("h2",{id:"preferences-api"},"Preferences API"),(0,r.kt)("p",null,"Begin by defining a constant variable that will act as the key for the store before the ",(0,r.kt)("inlineCode",{parentName:"p"},"usePhotoGallery")," function definition in ",(0,r.kt)("inlineCode",{parentName:"p"},"src/hooks/usePhotoGallery.ts"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx"},"const PHOTO_STORAGE = 'photos';\nexport function usePhotoGallery() {}\n")),(0,r.kt)("p",null,"Then, use the ",(0,r.kt)("inlineCode",{parentName:"p"},"Storage")," class to get access to the get and set methods for reading and writing to device storage:"),(0,r.kt)("p",null,"At the end of the ",(0,r.kt)("inlineCode",{parentName:"p"},"takePhoto")," function, add a call to ",(0,r.kt)("inlineCode",{parentName:"p"},"Preferences.set()")," to save the Photos array. By adding it here, the Photos array is stored each time a new photo is taken. This way, it doesn\u2019t matter when the app user closes or switches to a different app - all photo data is saved."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx"},"Preferences.set({ key: PHOTO_STORAGE, value: JSON.stringify(newPhotos) });\n")),(0,r.kt)("p",null,"With the photo array data saved, we will create a method that will retrieve the data when the hook loads. We will do so by using React's ",(0,r.kt)("inlineCode",{parentName:"p"},"useEffect")," hook. Insert this above the ",(0,r.kt)("inlineCode",{parentName:"p"},"takePhoto")," declaration. Here is the code, and we will break it down:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx"},"useEffect(() => {\n  const loadSaved = async () => {\n    const { value } = await Preferences.get({ key: PHOTO_STORAGE });\n    const photosInPreferences = (value ? JSON.parse(value) : []) as UserPhoto[];\n\n    for (let photo of photosInPreferences) {\n      const file = await Filesystem.readFile({\n        path: photo.filepath,\n        directory: Directory.Data,\n      });\n      // Web platform only: Load the photo as base64 data\n      photo.webviewPath = `data:image/jpeg;base64,${file.data}`;\n    }\n    setPhotos(photosInPreferences);\n  };\n  loadSaved();\n}, []);\n")),(0,r.kt)("p",null,"This seems a bit scary at first, so let's walk through it, first by looking at the second parameter we pass into the hook: the dependency array ",(0,r.kt)("inlineCode",{parentName:"p"},"[]"),"."),(0,r.kt)("p",null,"The useEffect hook, by default, gets called each time a component renders, unless, we pass in a dependency array. In that case, it will only run when a dependency gets updated. In our case we only want it to be called once. By passing in an empty array, which will not be changed, we can prevent the hook from being called multiple times."),(0,r.kt)("p",null,"The first parameter to ",(0,r.kt)("inlineCode",{parentName:"p"},"useEffect")," is the function that will be called by the effect. We pass in an anonymous arrow function, and inside of it we define another asynchronous method and then immediately call this. We have to call the async function from within the hook as the hook callback can't be asynchronous itself."),(0,r.kt)("p",null,"On mobile (coming up next!), we can directly set the source of an image tag - ",(0,r.kt)("inlineCode",{parentName:"p"},"<img src=\u201dx\u201d />")," - to each photo file on the Filesystem, displaying them automatically. On the web, however, we must read each image from the Filesystem into base64 format, because the Filesystem API stores them in base64 within ",(0,r.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/API/IndexedDB_API"},"IndexedDB")," under the hood."),(0,r.kt)("p",null,"That\u2019s it! We\u2019ve built a complete Photo Gallery feature in our Ionic app that works on the web. Next up, we\u2019ll transform it into a mobile app for iOS and Android!"))}d.isMDXComponent=!0}}]);