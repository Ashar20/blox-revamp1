# Blox integration 



## Integration 

Before you can begin building personalized experiences you need to integrate your online store with the Blox app. This section helps you integrate Blox easily in a few short steps.

![Alt text]( https://support.getblox.ai/wp-content/uploads/2022/09/Integrate.png "a title")


## Integration Via Embed Code

Embed code is a piece of code that you’ll add to your website’s pages to publish the experiences created using Blox. There are two ways in which the embed code can be put onto the website:

![Alt text]( https://support.getblox.ai/wp-content/uploads/2022/09/Integrate_2-1024x692.png "a title")



```
<script>
  (function(d, r, l) {
    const b = d.body;
    const s = d.createElement('script');
    s.defer = true;
    s.src = 'https://staging-blox-ai-js.getblox.ai/1.0/blox-ai.staging.js';
    b.appendChild(s);
    s.onload = function() {
      if (typeof window.blox_ai === 'object' && typeof window.blox_ai.init === 'function') {
        window.blox_ai.init(r, l);
      }
    };
  })(window.document, 'us-east-1', 'bloxDataLayer');
</script>

```
1. Launch Digital Experience Hub.
2. Click on the <button> Interegate </button> button the navigation bar


## API 

![Alt text]( https://support.getblox.ai/wp-content/uploads/2022/09/Integrate_3-1024x570.png "a title")

Please visit the [API documentation](https://d16mhahokhyjuk.cloudfront.net/api.html#servers) site to get access to all the information you will need to integrate through APIs. You can choose any service you want to access from recommendations, search, listing and Events tracking. 



