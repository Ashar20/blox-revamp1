export default {
  "title": "Blox support",
  "tagline": "Ionic is the app platform for web developers. Build amazing mobile, web, and desktop apps all with one shared code base and open web standards",
  "url": "https://ionicframework.com",
  "baseUrl": "/docs/",
  "i18n": {
    "defaultLocale": "en",
    "locales": [
      "en"
    ],
    "localeConfigs": {
      "en": {
        "label": "English",
        "direction": "ltr"
      }
    }
  },
  "onBrokenLinks": "warn",
  "onBrokenMarkdownLinks": "warn",
  "favicon": "img/meta/blox box (1).svg",
  "organizationName": "ionic-team",
  "projectName": "ionic-docs",
  "themeConfig": {
    "metadata": [
      {
        "name": "og:image",
        "content": "https://ionicframework.com/docs/img/meta/open-graph.png"
      },
      {
        "name": "twitter:image",
        "content": "https://ionicframework.com/docs/img/meta/open-graph.png"
      },
      {
        "name": "twitter:card",
        "content": "summary_large_image"
      },
      {
        "name": "twitter:domain",
        "content": "ionicframework.com"
      },
      {
        "name": "twitter:site",
        "content": "@ionicframework"
      },
      {
        "name": "twitter:creator",
        "content": "ionicframework"
      },
      {
        "name": "fb:page_id",
        "content": "1321836767955949"
      },
      {
        "name": "og:type",
        "content": "website"
      },
      {
        "name": "og:site_name",
        "content": "Ionic Framework Docs"
      }
    ],
    "colorMode": {
      "defaultMode": "light",
      "disableSwitch": false,
      "respectPrefersColorScheme": false,
      "switchConfig": {
        "darkIcon": "🌜",
        "darkIconStyle": {},
        "lightIcon": "🌞",
        "lightIconStyle": {}
      }
    },
    "navbar": {
      "hideOnScroll": true,
      "logo": {
        "alt": "Site Logo",
        "src": "/img/logos/bloxlight.png",
        "srcDark": "/img/logos/bloxdark.png",
        "href": "/",
        "target": "_self",
        "width": 139,
        "height": 28
      },
      "items": [
        {
          "type": "doc",
          "docId": "index",
          "label": "User Guide",
          "position": "left"
        },
        {
          "type": "doc",
          "docId": "components",
          "label": "Python Client Documentation",
          "position": "left",
          "width": "20em"
        },
        {
          "type": "doc",
          "docId": "cli",
          "label": "Concepts",
          "position": "left"
        },
        {
          "type": "doc",
          "docId": "native",
          "label": "APK Documentation",
          "position": "left"
        },
        {
          "type": "cta",
          "position": "left",
          "text": "Raise a Ticket",
          "href": "https://getblox.freshdesk.com/support/tickets/new"
        },
        {
          "type": "separator",
          "position": "right"
        },
        {
          "type": "search",
          "position": "right"
        },
        {
          "type": "separator",
          "position": "right"
        },
        {
          "type": "localeDropdown",
          "position": "right",
          "dropdownItemsBefore": [],
          "dropdownItemsAfter": [
            {
              "href": "https://ionicframework.com/translate",
              "label": "Translate",
              "target": "_blank",
              "rel": null
            }
          ],
          "className": "icon-link language navbar__item"
        },
        {
          "type": "iconLink",
          "position": "right",
          "icon": {
            "alt": "twitter logo",
            "src": "/logos/twitter.svg",
            "href": "https://twitter.com/Ionicframework",
            "target": "_blank"
          }
        }
      ]
    },
    "tagManager": {
      "trackingID": "GTM-TKMGCBC"
    },
    "prism": {
      "theme": {
        "plain": {},
        "styles": []
      },
      "additionalLanguages": [
        "shell-session",
        "http"
      ]
    },
    "algolia": {
      "appId": "O9QSL985BS",
      "apiKey": "ceb5366064b8fbf70959827cf9f69227",
      "indexName": "ionicframework",
      "contextualSearch": true,
      "searchParameters": {}
    },
    "docs": {
      "versionPersistence": "localStorage"
    },
    "hideableSidebar": false,
    "tableOfContents": {
      "minHeadingLevel": 2,
      "maxHeadingLevel": 3
    }
  },
  "plugins": [
    "docusaurus-plugin-sass",
    [
      "docusaurus-plugin-module-alias",
      {
        "alias": {
          "styled-components": "/Users/silasashar/Documents/GitHub/blox-support-site/node_modules/styled-components",
          "react": "/Users/silasashar/Documents/GitHub/blox-support-site/node_modules/react",
          "react-dom": "/Users/silasashar/Documents/GitHub/blox-support-site/node_modules/react-dom",
          "@components": "/Users/silasashar/Documents/GitHub/blox-support-site/src/components"
        }
      }
    ],
    [
      "@docusaurus/plugin-content-docs",
      {
        "routeBasePath": "/",
        "sidebarPath": "/Users/silasashar/Documents/GitHub/blox-support-site/sidebars.js",
        "exclude": [
          "README.md"
        ],
        "lastVersion": "current",
        "versions": {
          "current": {
            "label": "v6",
            "banner": "none"
          }
        }
      }
    ],
    "@docusaurus/plugin-content-pages",
    "@docusaurus/plugin-debug",
    "@docusaurus/plugin-sitemap",
    "@ionic-internal/docusaurus-plugin-tag-manager",
    null
  ],
  "themes": [
    [
      "/Users/silasashar/Documents/GitHub/blox-support-site/docusaurus-theme-classic",
      {
        "customCss": [
          "/Users/silasashar/Documents/GitHub/blox-support-site/node_modules/modern-normalize/modern-normalize.css",
          "/Users/silasashar/Documents/GitHub/blox-support-site/node_modules/@ionic-internal/ionic-ds/dist/tokens/tokens.css",
          "/Users/silasashar/Documents/GitHub/blox-support-site/src/styles/custom.scss"
        ]
      }
    ],
    "/Users/silasashar/Documents/GitHub/blox-support-site/node_modules/@docusaurus/theme-search-algolia"
  ],
  "customFields": {},
  "baseUrlIssueBanner": true,
  "onDuplicateRoutes": "warn",
  "presets": [],
  "titleDelimiter": "|",
  "noIndex": false
};