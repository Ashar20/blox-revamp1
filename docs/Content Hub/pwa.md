---
title: Content Hub - FAQ
sidebar_label: FAQ's
---

<details>
    <summary> What is Content Hub? What does it do? </summary>
   Content Hub enables you to create Catalogs by uploading data from different datasources, manage Catalog content, and enrich Catalog content.
</details>
<details>
    <summary>How do I create a Catalog?</summary>
    You can create a Catalog by clicking on ‘Create New’ in the Explore screen. Click here, to find detailed instructions on how to create a Catalog.
</details>
<details>
    <summary>How can I access a Catalog’s Content?</summary>
   In the Catalog listing table, either click on the Catalog Name or on the ‘info’ icon. Click here, to find detailed instructions on how to access & manage Catalog content.
</details>
<details>
    <summary>What are the types of data sources supported?</summary>
   We currently support 
Amazon s3
SFTP
Kafka
Manual File upload

</details>
<details>
    <summary>Can I upload data from shopify feed?</summary>
   No, we currently don’t support Shopify feed as a data source. Please check our list of currently supported here.
</details>
<details>
    <summary>What is a schema?</summary>
   A schema represents how the Catalog data is organized in the database; the relationship between entities like table name, field, attribute, field type etc.
</details>
<details>
    <summary>What is a feed?</summary>
   A feed is a collection of data.
</details>
<details>
    <summary>Can I edit a Catalog after ‘Submit’?</summary>
   Yes, click on the ‘edit’ icon next to each Catalog name in the listing table or click on the ‘Update Catalog settings’ CTA from the Catalog Explore screen.
</details>
<details>
    <summary>What are the types of Catalog supported?</summary>
   We currently support four types of Catalog
Product Catalog
Document Catalog
Banner Catalog
Offer Catalog

</details>
<details>
    <summary>What are the segments supported?</summary>
   We currently support a host of segments. Please find the list here
</details>
<details>
    <summary>What does ‘Test Connection’ do?</summary>
   Test Connection verifies if all the details provided as part of the Catalog creation process are valid. Test connection must be successful in order to proceed to finish configuring the Catalog.
</details>
<details>
    <summary>Can I change the Primary Key after a Catalog has been Submitted?</summary>
   No, it’s not possible to change the Primary key after the Catalog has been submitted.
</details>
<details>
    <summary>What are the data types supported for Primary Key?</summary>
   Currently, we only support “String” data type for primary key.
</details>
<details>
    <summary>When will the catalog sync during initial setup? Is it based on the sync schedule?</summary>
   Initial sync happens immediately, Following ones happen according to schedule.
</details>
<details>
    <summary>What are the sync options available for a Catalog?</summary>
   We support a variety of sync & schedule options as part of the Catalog. Please click here to learn more about sync.
</details>
<details>
    <summary>If a data file from a customer has duplicate column headers, what is the default behavior in handling it?
    </summary>
   If they are mapped to different fields, then they will be treated as different
</details>
<details>
    <summary>How can I update the mapping after a Catalog has been Submitted?</summary>
   Yes, click on the ‘edit’ icon next to each Catalog name in the listing table or click on the ‘Update Catalog settings’ CTA from the Catalog Explore screen. And update mapping as required.
</details>
<details>
    <summary>How can I enrich a Catalog Content?</summary>
   In the Enrich screen, click on ‘Create New’ to create a Project for a Catalog & enrich the content.
</details>
<details>
    <summary>Can I create a Project without a Catalog?</summary>
   No, it’s not possible to create a Project without a Catalog
</details>
<details>
    <summary>Can I use multiple Catalogs in the same Project?</summary>
   No, a Project can be created for only one Catalog.
If a Catalog is used in multiple Projects & Strategies, What happens to all the entities if 

</details>
<details>
    <summary>If a Catalog is used in multiple Projects & Strategies, What happens to all the entities if the Catalog is deleted?
</summary>
   Only the Catalog is deleted, Projects & Strategies are unaffected. However the Project cannot be used to further enrich new content, already enriched content is still available for access.
</details>
<details>
    <summary>What does Index in catalog creation do? Where is it used in the tool?</summary>
   Index means that the fields will be indexed in the database & filtering operations are enabled. Fields will be available for querying (to retrieve metadata)
</details>
<details>
    <summary>What does Facet in catalog creation do? Where is it used in the tool?</summary>
   Facet enables grouping and sorting operations on the field. Any field that is faceted will show up on the list of facets (typically found on the left side of a search result page) that people can use to narrow down the search results.
</details>
<details>
    <summary>What does Search in catalog creation do? Where is it used in the tool?</summary>
   The data in this field will show up in search results.
</details>
<details>
    <summary>What does Personalize in catalog creation do? Where is it used in the tool?</summary>
   These fields can be used for personalization strategies
</details>
<details>
    <summary>What is a Taxonomy?</summary>
   A Taxonomy is a hierarchical structure of attributes to tag the data against. The taxonomy provides a structure and flow to organize your data from root to leaf nodes. For example, ‘color’ is an attribute, while the actual colors ‘red’, ‘blue’, etc are possible values for the color attribute. Depending on your choice of segment, a preset taxonomy is recommended by default.
</details>
<details>
    <summary>What is Feed Sampling?</summary>
   Every time a feed is imported into a Project, only a random sample of 3000 items are digested for enrichment.
</details>
<details>
    <summary>What is short term learning (STL)?
</summary>
   After labeling a few data points, clicking on the STL icon will apply the learnings to all data points in the taxonomy.
</details>
