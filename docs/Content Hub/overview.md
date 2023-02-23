---
title: 'Create a Catalog'
sidebar_label: Create a catalog
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
<head>
  <title>I</title>
  <meta
    name="description"
    content="Content Hub enables you to create and manage different types of catalogs by ingesting data from various data sources, processing these, and making them available for applications."
  />
</head>

Content Hub enables you to create and manage different types of catalogs by ingesting data from various data sources, processing these, and making them available for applications.

## Getting to Content Hub

`Navigation`

* From the Blox Home Page &rarr; Click on Content Hub to visit the Content Home Screen. 

* Click on Explore on the navigation bar.

* Alternatively, hover over the Content Hub on the navigation bar and click on Explore.

![alt text](https://staging-supportv2.getblox.ai/wp-content/uploads/2022/08/contn.png)
## Create a new Catalog 

A catalog is a collection of datasets and attributes.


In the Explore screen, click on “Create new” to create a blank Catalog (no configuration is preselected), or Click on one of the “Suggested” Catalog to create a Catalog with some configuration preselected.
1. Enter an unique Catalog Name
2. Select a Catalog Type.
3. Select a Segment for the Catalog.
:::
:::note
* It is mandatory to select a catalog type & segment during Catalog creation process
* You can save your Catalog configuration anytime by clicking on “Continue Later” CTA & clicking on “Save & Exit”. 
* The Catalog is displayed on the listing screen in a draft state. (Partially filled details are not saved).
:::

![alt text](https://staging-supportv2.getblox.ai/wp-content/uploads/2022/08/explore-home-1024x574.png)
## Configure a Connector
 
Connector enables you to connect with a data source that is used to fetch data. There are multiple upload methods supported in Blox. Below are some of the supported connectors and how to use them.

![alt text](https://staging-supportv2.getblox.ai/wp-content/uploads/2022/08/explore-home-1024x574.png)

* Enter the Upload Method Name for the connector
* Choose an Upload method type from the dropdown
:::note
Depending on the upload method selected, the corresponding configuration fields will be displayed.

* Fill all the mandatory fields for the selected upload method type
* Click on “Test Connection”.
:::note
Test Connection verifies all the details provided are valid. Test connection must be successful in order to proceed to the next step.

There are 4 pre-set  catalog types currently supported in Blox:

* Product Catalog 
* Banner Catalog 
* Offer Catalog 
* Documents 
Catalog type enables Blox to identify the type of incoming data, so that it can be processed accordingly. In addition to these, any other type of catalogs can be uploaded as well which will be processed as is, with no presets.



And there are  segments types currently supported in Blox:

1. Default/No Segment 
2. Fashion 
3. Grocery 
4. Furniture 
5. Electronics 
6. Beauty 
7. Book 
8. Home & Kitchen 
9. Other 
10. Appliances

Choosing segment type configures the attributes to be mapped in the next step. It also enables Blox to automatically extract attributes according to the segment type.
:::

:::note
The default extraction of attributes is only supported if the catalog type is product catalog and the segment type is fashion.
:::
## Set up sync settings 


Sync frequency is the interval with which the catalog is to be fetched from the given data source. You can choose to either append or replace the existing catalog with the incoming catalog.

1. Once ‘Test Connection’ is successful, optionally you can also configure the Sync Settings.
2. Select a ‘Sync Mode’
3. From the dropdown select a ‘Sync Frequency’

:::note
Depending on the ‘Sync Frequency’ selected, the corresponding configuration fields will be displayed.

* Configure all the required fields, to finish setting up Sync for the Catalog
* After you finish configuring the connector, Click on “Next Step” to proceed to the Map Fields step.
:::note
## Choose Language & Primary Key

The primary key is a field that is used to identify each row in the catalog. Uniquely 

Based on the language of your Catalog Content, Select all applicable Languages.
Choose the field that you would like to set as the primary key

:::note
- Depending on the ‘Sync Frequency’ selected, the corresponding configuration fields will be displayed.
- We recommend you select a field with only unique values as the Primary Key. 
- Only String data type is supported for Primary Key.
- The Primary Key is automatically indexed, made face table & searchable. 
- Once you submit a Catalog it is not possible to change the Primary Key. 

:::note
## Create Catalog Schema 

A schema represents how the Catalog data is organized in the database; the relationship between entities like table name, field, attributes, field type, etc.

:::note
The header of the columns in the uploaded file is displayed under the “Field” column.
- For each field, select an attribute, the field type, and validation, and choose whether this field is indexed, made facetable, searchable, & available for personalization.
- When Facet, Search or Personalize is enabled for a field, it is automatically indexed.
- Click on the ‘delete’ icon to remove this file from the Catalog Schema.
- It is not possible to Submit a catalog without Mapping all fields in the catalog.
- Once done, Click on “Submit”. The catalog syncing process will start.
- You can follow the Catalog sync status via the “Status” column in the “Explore” screen.

:::note

| Term   | Definition | 
| ---------- | -------- | 
| Attribute   | Helps define the data within each field. Choose the attribute from the drop down and map it with the corresponding field     |
| Field Type | Specifies the data type of the field. Choose the appropriate option from the drop down       |  
| Validation | Denotes how the system should handle the sync process in case of an error with each field. Skip row & sync: Skips the row with an error and continues to sync.Delete cell data and sync: Skips the data of the field value and continues to sync     |  
| Index | Makes the field available for filtering, querying and to retrieve metadata for the corresponding data point.       |  
| Facet | 	Enable grouping and sorting operations on the field. ** Note: ** Only Indexed fields can be marked for facet.** Note: ** It is highly recommended to mark facets for field type: Strings      |  
| Search | Enables the field to be available for text and reverse search. Searching for a value of this field type will show up in the search results.      |  
| Personalize |   Enables the field to be used for recommendation and personalisation.     |  



