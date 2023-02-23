---
sidebar_label: Data organization 
---

server {
  listen 8080 default_server;
  listen [::]:8080 default_server;
  root /srv/build/;
  error_page 404 $document_root/404.html;
  index index.html;

  access_log /var/log/nginx/vue.ai.access.log;
  error_log /var/log/nginx/vue.ai.error.log;

  index index.html index.htm;

  location / {
    rewrite / /developer/docs/ permanent;
  }

  location ~ ^/developer/docs$ {
    rewrite  ^/(.*)$ $scheme://$http_host/developer/docs/ permanent;
  }

  # Handle docusaurus assets
  location ~ ^/developer/docs/assets/(.*)/(.*)$ {
    try_files $uri $uri/ /assets/$1/$2;
    expires 1y;
    access_log off;
    add_header Cache-Control "public";
  }

  # Handle images
  location ~ ^/developer/docs/img/(.*).(jpg|jpeg|gif|png|ico|cur|gz|svg|svgz|mp4|ogg|ogv|webm|htc)$ {
    try_files $uri $uri/ /img/$1.$2;
    expires 1M;
    access_log off;
    add_header Cache-Control "public";
  }

  # Use index.html of respective sub directories
  location ~ ^/developer/docs/(.*) {
      try_files $uri $uri/ /$1/index.html;
  }

  # Any route containing a file extension
  location ~ ^.+\..+$ {
    try_files $uri /404.html;
  }
}
~  