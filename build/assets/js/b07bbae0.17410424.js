"use strict";(self.webpackChunkionic_docs=self.webpackChunkionic_docs||[]).push([[19814],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return m}});var a=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=a.createContext({}),p=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},u=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},h=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),h=p(n),m=i,d=h["".concat(s,".").concat(m)]||h[m]||c[m]||o;return n?a.createElement(d,r(r({ref:t},u),{},{components:n})):a.createElement(d,r({ref:t},u))}));function m(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,r=new Array(o);r[0]=h;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:i,r[1]=l;for(var p=2;p<o;p++)r[p]=n[p];return a.createElement.apply(null,r)}return a.createElement.apply(null,n)}h.displayName="MDXCreateElement"},2502:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return l},contentTitle:function(){return s},metadata:function(){return p},toc:function(){return u},default:function(){return h}});var a=n(87462),i=n(63366),o=(n(67294),n(3905)),r=["components"],l={sidebar_label:"How to Contribute"},s="Contributing to Ionic",p={unversionedId:"contributing/how-to-contribute",id:"version-v5/contributing/how-to-contribute",isDocsHomePage:!1,title:"Contributing to Ionic",description:"Thanks for the interest in contributing to Ionic Framework!",source:"@site/versioned_docs/version-v5/contributing/how-to-contribute.md",sourceDirName:"contributing",slug:"/contributing/how-to-contribute",permalink:"/docs/v5/contributing/how-to-contribute",editUrl:"https://github.com/ionic-team/ionic-docs/edit/main/versioned_docs/version-v5/contributing/how-to-contribute.md",tags:[],version:"v5",frontMatter:{sidebar_label:"How to Contribute"},sidebar:"version-v5/docs",previous:{title:"What are PWAs?",permalink:"/docs/v5/core-concepts/what-are-progressive-web-apps"},next:{title:"Code of Conduct",permalink:"/docs/v5/contributing/coc"}},u=[{value:"Contributing Etiquette",id:"contributing-etiquette",children:[],level:2},{value:"Creating an Issue",id:"creating-an-issue",children:[],level:2},{value:"Creating a Good Code Reproduction",id:"creating-a-good-code-reproduction",children:[{value:"What is a Code Reproduction?",id:"what-is-a-code-reproduction",children:[],level:3},{value:"Why Should You Create a Reproduction?",id:"why-should-you-create-a-reproduction",children:[],level:3},{value:"How to Create a Reproduction",id:"how-to-create-a-reproduction",children:[],level:3},{value:"Benefits of Creating a Reproduction",id:"benefits-of-creating-a-reproduction",children:[],level:3}],level:2},{value:"Creating a Pull Request",id:"creating-a-pull-request",children:[{value:"Setup",id:"setup",children:[],level:3},{value:"Core",id:"core",children:[{value:"Modifying Components",id:"modifying-components",children:[],level:4},{value:"Preview Changes",id:"preview-changes",children:[],level:4},{value:"Lint Changes",id:"lint-changes",children:[],level:4},{value:"Modifying Documentation",id:"modifying-documentation",children:[],level:4},{value:"Modifying Tests",id:"modifying-tests",children:[{value:"Screenshot Tests",id:"screenshot-tests",children:[],level:5}],level:4},{value:"Building Changes",id:"building-changes",children:[],level:4}],level:3},{value:"Submit Pull Request",id:"submit-pull-request",children:[],level:3}],level:2},{value:"Commit Message Guidelines",id:"commit-message-guidelines",children:[{value:"Commit Message Format",id:"commit-message-format",children:[],level:3},{value:"Revert",id:"revert",children:[],level:3},{value:"Type",id:"type",children:[],level:3},{value:"Scope",id:"scope",children:[],level:3},{value:"Subject",id:"subject",children:[],level:3},{value:"Body",id:"body",children:[],level:3},{value:"Footer",id:"footer",children:[],level:3},{value:"Examples",id:"examples",children:[],level:3}],level:2},{value:"License",id:"license",children:[],level:2}],c={toc:u};function h(e){var t=e.components,n=(0,i.Z)(e,r);return(0,o.kt)("wrapper",(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"contributing-to-ionic"},"Contributing to Ionic"),(0,o.kt)("p",null,"Thanks for the interest in contributing to Ionic Framework!"),(0,o.kt)("h2",{id:"contributing-etiquette"},"Contributing Etiquette"),(0,o.kt)("p",null,"Please see the ",(0,o.kt)("a",{parentName:"p",href:"/docs/v5/contributing/coc"},"Contributor Code of Conduct")," for information on the rules of conduct."),(0,o.kt)("h2",{id:"creating-an-issue"},"Creating an Issue"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"If you have a question about using the framework, please ask on the ",(0,o.kt)("a",{parentName:"p",href:"http://forum.ionicframework.com/"},"Ionic Forum")," or in the ",(0,o.kt)("a",{parentName:"p",href:"https://ionicworldwide.herokuapp.com/"},"Ionic Worldwide Slack")," group.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"It is required that you clearly describe the steps necessary to reproduce the issue you are running into. Although we would love to help our users as much as possible, diagnosing issues without clear reproduction steps is extremely time-consuming and simply not sustainable.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"The issue list of the ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/ionic-team/ionic"},"Ionic")," repository is exclusively for bug reports and feature requests. Non-conforming issues will be closed immediately.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},'Issues with no clear steps to reproduce will not be triaged. If an issue is labeled with "needs: reply" and receives no further replies from the author of the issue for more than 14 days, it will be closed.')),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"If you think you have found a bug, or have a new feature idea, please start by making sure it hasn't already been ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/ionic-team/ionic/issues?utf8=%E2%9C%93&q=is%3Aissue"},"reported"),". You can search through existing issues to see if there is a similar one reported. Include closed issues as it may have been closed with a solution.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Next, ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/ionic-team/ionic/issues/new/choose"},"create a new issue")," that thoroughly explains the problem. Please fill out the populated issue form before submitting the issue."))),(0,o.kt)("h2",{id:"creating-a-good-code-reproduction"},"Creating a Good Code Reproduction"),(0,o.kt)("h3",{id:"what-is-a-code-reproduction"},"What is a Code Reproduction?"),(0,o.kt)("p",null,"A code reproduction is a small application that is built to demonstrate a particular issue. The code reproduction should contain the minimum amount of code needed to recreate the issue and should focus on a single issue."),(0,o.kt)("h3",{id:"why-should-you-create-a-reproduction"},"Why Should You Create a Reproduction?"),(0,o.kt)("p",null,"A code reproduction of the issue you are experiencing helps us better isolate the cause of the problem. This is an important first step to getting any bug fixed!"),(0,o.kt)("p",null,"Without a reliable code reproduction, it is unlikely we will be able to resolve the issue, leading to it being closed. In other words, creating a code reproduction of the issue helps us help you."),(0,o.kt)("h3",{id:"how-to-create-a-reproduction"},"How to Create a Reproduction"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Create a new Ionic application using one of our starter templates. The ",(0,o.kt)("inlineCode",{parentName:"li"},"blank")," starter application is a great choice for this. You can create one using the following Ionic CLI command: ",(0,o.kt)("inlineCode",{parentName:"li"},"ionic start myApp blank")),(0,o.kt)("li",{parentName:"ul"},"Add the minimum amount of code needed to recreate the issue you are experiencing. Do not include anything that is not required to reproduce the issue. This includes any 3rd party plugins you have installed."),(0,o.kt)("li",{parentName:"ul"},"Publish the application on GitHub and include a link to it when ",(0,o.kt)("a",{parentName:"li",href:"#creating-an-issue"},"creating an issue"),"."),(0,o.kt)("li",{parentName:"ul"},"Be sure to include steps to reproduce the issue. These steps should be clear and easy to follow.")),(0,o.kt)("h3",{id:"benefits-of-creating-a-reproduction"},"Benefits of Creating a Reproduction"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Uses the latest version of Ionic:")," By creating a new Ionic application, you are ensuring that you are testing against the latest version of the framework. Sometimes the issues you are experiencing have already been resolved in a newer version of the framework!"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Minimal surface area:")," By removing code that is not needed in order to reproduce the issue, it makes it easier to identify the cause of the issue."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"No secret code needed:")," Creating a minimal reproduction of the issue prevents you from having to publish any proprietary code used in your project."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Get help fixing the issue:")," If we can reliably reproduce an issue, there is a good chance we will be able to address it.")),(0,o.kt)("h2",{id:"creating-a-pull-request"},"Creating a Pull Request"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"We appreciate you taking the time to contribute! Before submitting a pull request, we ask that you please ",(0,o.kt)("a",{parentName:"p",href:"#creating-an-issue"},"create an issue")," that explains the bug or feature request and let us know that you plan on creating a pull request for it. If an issue already exists, please comment on that issue letting us know you would like to submit a pull request for it. This helps us to keep track of the pull request and make sure there isn't duplicated effort.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Looking for an issue to fix? Make sure to look through our issues with the ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/ionic-team/ionic/issues?q=is%3Aopen+is%3Aissue+label%3A%22help+wanted%22"},"help wanted")," label!"))),(0,o.kt)("h3",{id:"setup"},"Setup"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("a",{parentName:"li",href:"https://nodejs.org/"},"Download the installer")," for the LTS version of Node.js. This is the best way to also ",(0,o.kt)("a",{parentName:"li",href:"https://blog.npmjs.org/post/85484771375/how-to-install-npm#_=_"},"install npm"),"."),(0,o.kt)("li",{parentName:"ol"},"Fork the ",(0,o.kt)("a",{parentName:"li",href:"https://github.com/ionic-team/ionic"},"Ionic")," repository."),(0,o.kt)("li",{parentName:"ol"},"Clone your fork."),(0,o.kt)("li",{parentName:"ol"},"Create a new branch from master for your change."),(0,o.kt)("li",{parentName:"ol"},"Navigate into the directory of the package you wish to modify (core, angular, etc.)."),(0,o.kt)("li",{parentName:"ol"},"Run ",(0,o.kt)("inlineCode",{parentName:"li"},"npm install")," to install dependencies for this package."),(0,o.kt)("li",{parentName:"ol"},"Follow the steps for the specific package below.")),(0,o.kt)("h3",{id:"core"},"Core"),(0,o.kt)("h4",{id:"modifying-components"},"Modifying Components"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Locate the component(s) to modify inside ",(0,o.kt)("inlineCode",{parentName:"li"},"/core/src/components/"),"."),(0,o.kt)("li",{parentName:"ol"},"Take a look at the ",(0,o.kt)("a",{parentName:"li",href:"https://stenciljs.com/docs/introduction/"},"Stencil Documentation")," and other components to understand the implementation of these components."),(0,o.kt)("li",{parentName:"ol"},"Make your changes to the component. If the change is overly complex or out of the ordinary, add comments so we can understand the changes."),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("a",{parentName:"li",href:"#preview-changes"},"Preview your changes")," locally."),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("a",{parentName:"li",href:"#modifying-documentation"},"Modify the documentation")," if needed."),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("a",{parentName:"li",href:"#lint-changes"},"Run lint")," on the directory and make sure there are no errors."),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("a",{parentName:"li",href:"#building-changes"},"Build the project"),"."),(0,o.kt)("li",{parentName:"ol"},"After the build is finished, commit the changes. Please follow the ",(0,o.kt)("a",{parentName:"li",href:"#commit-message-format"},"commit message format")," for every commit."),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("a",{parentName:"li",href:"#submit-pull-request"},"Submit a Pull Request")," of your changes.")),(0,o.kt)("h4",{id:"preview-changes"},"Preview Changes"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Run ",(0,o.kt)("inlineCode",{parentName:"li"},"npm start")," from within the ",(0,o.kt)("inlineCode",{parentName:"li"},"core")," directory."),(0,o.kt)("li",{parentName:"ol"},"A browser should open at ",(0,o.kt)("inlineCode",{parentName:"li"},"http://localhost:3333/"),"."),(0,o.kt)("li",{parentName:"ol"},"From here, navigate to one of the component's tests to preview your changes."),(0,o.kt)("li",{parentName:"ol"},"If a test showing your change doesn't exist, ",(0,o.kt)("a",{parentName:"li",href:"#modifying-tests"},"add a new test or update an existing one"),"."),(0,o.kt)("li",{parentName:"ol"},"To test in RTL mode, once you are in the desired component's test, add ",(0,o.kt)("inlineCode",{parentName:"li"},"?rtl=true")," at the end of the url; for example: ",(0,o.kt)("inlineCode",{parentName:"li"},"http://localhost:3333/src/components/alert/test/basic?rtl=true"),".")),(0,o.kt)("h4",{id:"lint-changes"},"Lint Changes"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Run ",(0,o.kt)("inlineCode",{parentName:"li"},"npm run lint")," to lint the TypeScript and Sass."),(0,o.kt)("li",{parentName:"ol"},"If there are lint errors, run ",(0,o.kt)("inlineCode",{parentName:"li"},"npm run lint.fix")," to automatically fix any errors. Repeat step 1 to ensure the errors have been fixed, and manually fix them if not."),(0,o.kt)("li",{parentName:"ol"},"To lint and fix only TypeScript errors, run ",(0,o.kt)("inlineCode",{parentName:"li"},"npm run lint.ts")," and ",(0,o.kt)("inlineCode",{parentName:"li"},"npm run lint.ts.fix"),", respectively."),(0,o.kt)("li",{parentName:"ol"},"To lint and fix only Sass errors, run ",(0,o.kt)("inlineCode",{parentName:"li"},"npm run lint.sass")," and ",(0,o.kt)("inlineCode",{parentName:"li"},"npm run lint.sass.fix"),", respectively.")),(0,o.kt)("h4",{id:"modifying-documentation"},"Modifying Documentation"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Locate the ",(0,o.kt)("inlineCode",{parentName:"li"},"readme.md")," file in the component's directory."),(0,o.kt)("li",{parentName:"ol"},"Modify the documentation ",(0,o.kt)("strong",{parentName:"li"},"above")," the line that says ",(0,o.kt)("inlineCode",{parentName:"li"},"\x3c!-- Auto Generated Below --\x3e")," in this file."),(0,o.kt)("li",{parentName:"ol"},"To update any of the auto generated documentation below that line, make the relevant changes in the following places:")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"Usage"),": update the component's usage examples in the component's ",(0,o.kt)("inlineCode",{parentName:"li"},"usage/")," directory"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"Properties"),", ",(0,o.kt)("inlineCode",{parentName:"li"},"Events"),", or ",(0,o.kt)("inlineCode",{parentName:"li"},"Methods"),": update the component's TypeScript file (",(0,o.kt)("inlineCode",{parentName:"li"},"*.tsx"),")"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"CSS Custom Properties"),": update the component's main Sass file (",(0,o.kt)("inlineCode",{parentName:"li"},"*.scss"),")")),(0,o.kt)("h4",{id:"modifying-tests"},"Modifying Tests"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Locate the test to modify inside the ",(0,o.kt)("inlineCode",{parentName:"li"},"test/")," folder in the component's directory."),(0,o.kt)("li",{parentName:"ol"},"If a test exists, modify the test by adding an example to reproduce the problem fixed or feature added."),(0,o.kt)("li",{parentName:"ol"},"If a new test is needed, the easiest way is to copy the ",(0,o.kt)("inlineCode",{parentName:"li"},"basic/")," directory from the component's ",(0,o.kt)("inlineCode",{parentName:"li"},"test/")," directory, rename it, and edit the content in both the ",(0,o.kt)("inlineCode",{parentName:"li"},"index.html")," and ",(0,o.kt)("inlineCode",{parentName:"li"},"e2e.ts")," file (see ",(0,o.kt)("a",{parentName:"li",href:"#screenshot-tests"},"Screenshot Tests")," for more information on this file)."),(0,o.kt)("li",{parentName:"ol"},"The ",(0,o.kt)("inlineCode",{parentName:"li"},"preview/")," directory is used in the documentation as a demo. Only update this test if there is a bug in the test or if the API has a change that hasn't been updated in the test.")),(0,o.kt)("h5",{id:"screenshot-tests"},"Screenshot Tests"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"If the test exists in screenshot, there will be a file named ",(0,o.kt)("inlineCode",{parentName:"li"},"e2e.ts")," in the directory of the test."),(0,o.kt)("li",{parentName:"ol"},"A screenshot test can be added by including this file and adding one or more ",(0,o.kt)("inlineCode",{parentName:"li"},"test()")," calls that include a call to ",(0,o.kt)("inlineCode",{parentName:"li"},"page.compareScreenshot()"),". See ",(0,o.kt)("a",{parentName:"li",href:"https://stenciljs.com/docs/end-to-end-testing"},"Stencil end-to-end testing")," and existing tests in ",(0,o.kt)("inlineCode",{parentName:"li"},"core/")," for examples."),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("strong",{parentName:"li"},"Important:")," each ",(0,o.kt)("inlineCode",{parentName:"li"},"test()")," should have only one screenshot (",(0,o.kt)("inlineCode",{parentName:"li"},"page.compareScreenshot()"),") call ",(0,o.kt)("strong",{parentName:"li"},"or")," it should check the expect at the end of each test. If there is a mismatch it will fail the test which will prevent the rest of the test from running, i.e. if the first screenshot fails the remaining screenshot calls would not be called ",(0,o.kt)("em",{parentName:"li"},"unless")," they are in a separate test or all of the expects are called at the end."),(0,o.kt)("li",{parentName:"ol"},"To run screenshot locally, use the following command: ",(0,o.kt)("inlineCode",{parentName:"li"},"npm run test.screenshot"),".",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"To run screenshot for a specific test, pass the path to the test or a string to search for."),(0,o.kt)("li",{parentName:"ul"},"For example, running all ",(0,o.kt)("inlineCode",{parentName:"li"},"alert")," tests: ",(0,o.kt)("inlineCode",{parentName:"li"},"npm run test.screenshot alert"),"."),(0,o.kt)("li",{parentName:"ul"},"Or, running the basic ",(0,o.kt)("inlineCode",{parentName:"li"},"alert")," tests: ",(0,o.kt)("inlineCode",{parentName:"li"},"npm run test.screenshot src/components/alert/test/basic/e2e.ts"),".")))),(0,o.kt)("h4",{id:"building-changes"},"Building Changes"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Once all changes have been made and the documentation has been updated, run ",(0,o.kt)("inlineCode",{parentName:"li"},"npm run build")," inside of the ",(0,o.kt)("inlineCode",{parentName:"li"},"core")," directory. This will add your changes to any auto-generated files, if necessary."),(0,o.kt)("li",{parentName:"ol"},"Review the changes and, if everything looks correct, ",(0,o.kt)("a",{parentName:"li",href:"#commit-message-format"},"commit")," the changes."),(0,o.kt)("li",{parentName:"ol"},"Make sure the build has finished before committing. If you made changes to the documentation, properties, methods, or anything else that requires an update to a generate file, this needs to be committed."),(0,o.kt)("li",{parentName:"ol"},"After the changes have been pushed, publish the branch and ",(0,o.kt)("a",{parentName:"li",href:"#creating-a-pull-request"},"create a pull request"),".")),(0,o.kt)("h3",{id:"submit-pull-request"},"Submit Pull Request"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/ionic-team/ionic/compare"},"Create a new pull request")," with the ",(0,o.kt)("inlineCode",{parentName:"li"},"master")," branch as the ",(0,o.kt)("inlineCode",{parentName:"li"},"base"),". You may need to click on ",(0,o.kt)("inlineCode",{parentName:"li"},"compare across forks")," to find your changes."),(0,o.kt)("li",{parentName:"ol"},"See the ",(0,o.kt)("a",{parentName:"li",href:"https://help.github.com/articles/creating-a-pull-request-from-a-fork/"},"Creating a pull request from a fork")," GitHub help article for more information."),(0,o.kt)("li",{parentName:"ol"},"Please fill out the provided Pull Request template to the best of your ability and include any issues that are related.")),(0,o.kt)("h2",{id:"commit-message-guidelines"},"Commit Message Guidelines"),(0,o.kt)("p",null,"We have very precise rules over how our git commit messages should be formatted. This leads to readable messages that are easy to follow when looking through the project history. We also use the git commit messages to generate our ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/ionic-team/ionic/blob/master/CHANGELOG.md"},"changelog"),". Our format closely resembles Angular's ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/angular/angular/blob/master/CONTRIBUTING.md#commit"},"commit message guidelines"),"."),(0,o.kt)("h3",{id:"commit-message-format"},"Commit Message Format"),(0,o.kt)("p",null,"We follow the ",(0,o.kt)("a",{parentName:"p",href:"https://www.conventionalcommits.org/"},"Conventional Commits specification"),". A commit message consists of a ",(0,o.kt)("strong",{parentName:"p"},"header"),", ",(0,o.kt)("strong",{parentName:"p"},"body")," and ",(0,o.kt)("strong",{parentName:"p"},"footer"),". The header has a ",(0,o.kt)("strong",{parentName:"p"},"type"),", ",(0,o.kt)("strong",{parentName:"p"},"scope")," and ",(0,o.kt)("strong",{parentName:"p"},"subject"),":"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"<type>(<scope>): <subject>\n<BLANK LINE>\n<body>\n<BLANK LINE>\n<footer>\n")),(0,o.kt)("p",null,"The ",(0,o.kt)("strong",{parentName:"p"},"header")," is mandatory and the ",(0,o.kt)("strong",{parentName:"p"},"scope")," of the header is optional."),(0,o.kt)("h3",{id:"revert"},"Revert"),(0,o.kt)("p",null,"If the commit reverts a previous commit, it should begin with ",(0,o.kt)("inlineCode",{parentName:"p"},"revert: "),", followed by the header of the reverted commit. In the body it should say: ",(0,o.kt)("inlineCode",{parentName:"p"},"This reverts commit <hash>."),", where the hash is the SHA of the commit being reverted."),(0,o.kt)("h3",{id:"type"},"Type"),(0,o.kt)("p",null,"If the prefix is ",(0,o.kt)("inlineCode",{parentName:"p"},"feat"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"fix")," or ",(0,o.kt)("inlineCode",{parentName:"p"},"perf"),", it will appear in the changelog. However if there is any ",(0,o.kt)("a",{parentName:"p",href:"#footer"},"BREAKING CHANGE"),", the commit will always appear in the changelog."),(0,o.kt)("p",null,"Must be one of the following:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"feat"),": A new feature"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"fix"),": A bug fix"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"docs"),": Documentation only changes"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"style"),": Changes that do not affect the meaning of the code (white-space, formatting, missing semi-colons, etc)"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"refactor"),": A code change that neither fixes a bug nor adds a feature"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"perf"),": A code change that improves performance"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"test"),": Adding missing tests"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"chore"),": Changes to the build process or auxiliary tools and libraries such as documentation generation")),(0,o.kt)("h3",{id:"scope"},"Scope"),(0,o.kt)("p",null,"The scope can be anything specifying place of the commit change. Usually it will refer to a component but it can also refer to a utility. For example ",(0,o.kt)("inlineCode",{parentName:"p"},"action-sheet"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"button"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"css"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"menu"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"nav"),", etc. If you make multiple commits for the same component, please keep the naming of this component consistent. For example, if you make a change to navigation and the first commit is ",(0,o.kt)("inlineCode",{parentName:"p"},"fix(nav)"),", you should continue to use ",(0,o.kt)("inlineCode",{parentName:"p"},"nav")," for any more commits related to navigation. As a general rule, if you're modifying a component use the name of the folder."),(0,o.kt)("h3",{id:"subject"},"Subject"),(0,o.kt)("p",null,"The subject contains succinct description of the change:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},'use the imperative, present tense: "change" not "changed" nor "changes"'),(0,o.kt)("li",{parentName:"ul"},"do not capitalize first letter"),(0,o.kt)("li",{parentName:"ul"},"do not place a period ",(0,o.kt)("inlineCode",{parentName:"li"},".")," at the end"),(0,o.kt)("li",{parentName:"ul"},"entire length of the commit message must not go over 50 characters"),(0,o.kt)("li",{parentName:"ul"},"describe what the commit does, not what issue it relates to or fixes"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"be brief, yet descriptive")," - we should have a good understanding of what the commit does by reading the subject")),(0,o.kt)("h3",{id:"body"},"Body"),(0,o.kt)("p",null,"Just as in the ",(0,o.kt)("strong",{parentName:"p"},"subject"),', use the imperative, present tense: "change" not "changed" nor "changes".\nThe body should include the motivation for the change and contrast this with previous behavior.'),(0,o.kt)("h3",{id:"footer"},"Footer"),(0,o.kt)("p",null,"The footer should contain any information about ",(0,o.kt)("strong",{parentName:"p"},"Breaking Changes")," and is also the place to\nreference GitHub issues that this commit ",(0,o.kt)("strong",{parentName:"p"},"Closes"),"."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Breaking Changes")," should start with the word ",(0,o.kt)("inlineCode",{parentName:"p"},"BREAKING CHANGE:")," with a space or two newlines. The rest of the commit message is then used for this."),(0,o.kt)("h3",{id:"examples"},"Examples"),(0,o.kt)("p",null,"Does not appear in the generated changelog:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"docs(changelog): update steps to update\n")),(0,o.kt)("p",null,'Appears under "Features" header, toast subheader:'),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"feat(toast): add 'buttons' property\n")),(0,o.kt)("p",null,'Appears under "Bug Fixes" header, skeleton-text subheader, with a link to issue #28:'),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"fix(skeleton-text): use proper color when animated\n\ncloses #28\n")),(0,o.kt)("p",null,'Appears under "Performance Improvements" header, and under "Breaking Changes" with the breaking change explanation:'),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"perf(css): remove all css utility attributes\n\nBREAKING CHANGE: The CSS utility attributes have been removed. Use CSS classes instead.\n")),(0,o.kt)("p",null,'Appears under "Breaking Changes" with the breaking change explanation:'),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"refactor(animations): update to new animation system\n\nBREAKING CHANGE:\n\nRemoves the old animation system to use the new Ionic animations.\n")),(0,o.kt)("p",null,"The following commit and commit ",(0,o.kt)("inlineCode",{parentName:"p"},"667ecc1"),' do not appear in the changelog if they are under the same release. If not, the revert commit appears under the "Reverts" header.'),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"revert: feat(skeleton-text): add animated property\n\nThis reverts commit 667ecc1654a317a13331b17617d973392f415f02.\n")),(0,o.kt)("h2",{id:"license"},"License"),(0,o.kt)("p",null,"By contributing your code to the ionic-team/ionic GitHub Repository, you agree to license your contribution under the MIT license."))}h.isMDXComponent=!0}}]);