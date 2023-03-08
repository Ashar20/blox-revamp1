---
title: "  Catalog"
sidebar_label: 'Catalog'
---


## **Catalog**(

 name: str = **None**,

 schema:[blox.catalog.schema.Schema](https://d16mhahokhyjuk.cloudfront.net/staging/blox/catalog/schema.html#Schema) = **None**,

 datasources: list = [],

 id: str = **None**,

 metadata: dict = {},

 extraction_config: list = [],

 config: dict = {},

 status='',

 created_ts='',

 updated_ts='',

 **kwargs

)

Each catalog contains a schema and a datasource.

## **name**: str

Name of catalog. Defaults to None.

## **schema**: [blox.catalog.schema.Schema](https://d16mhahokhyjuk.cloudfront.net/staging/blox/catalog/schema.html#Schema)

Schema table containing all fields of the catalog. Defaults to None.

## **datasources**: list

Source of the data. Defaults to []

## **metadata**: dict

Catalog metadata

## **extraction_config**: list

Each extraction config has mandatory keys ("taxonomy_id","active","graph_id","type")

## **config**: dict

Current status of catalog

## **status**: str

Created time

## **created_ts**: str

Updated time

## **def** **refresh**(self)

Refresh the catalog to get the latest data

Returns: bool: Returns true on succesful refresh

## **def** **save**(self)

Function to update a catalog. Only fields 'name', 'config' , 'metadata' and 'extraction_config' are updated using this method.

returns: self (Catalog): Updated catalog

## **def** **delete**(self)

## **def** **get_summary**(self)

Function to get a catalog summary by the catalog ID

Returns summary(dict): Dictionary containing the summary

## **def** **add_datasource**(self, datasource_payload: dict):

Function to add a datasource to catalog

Parameters

datasource_payload (dict): datasource payload structure

{

    name*: string

    type*: string

    config* {

    }

    mode*: string

    schedule*: string

}

Returns

Catalog object : Catalog object with datasources added to it

## **def** **get_datasource**(self, datasource_id: str):

Function to get datasource by UUID

Parameters

* datasource_id (str): UUID of datasource

Returns

datasource (Datasource obj): Filtered datsource

## **def** **enable**(self):

Function to enable the catalog

Returns

response (dict): Response from API denoting success or failure

## **def** **list_products**(

 self,

 search_text: str = **None**,

 filters: list = [],

 response_fields: list = [],

 facets: list = [],

 page: int = 1,

 facet_limit: int = 100,

 max_content: int = **None**,

 min_content: int = **None**,

 sort_by: str = **None**,

 sort_order='asc'

):

Function to search through the catalog It returns a list of products (in a paginated structure) given a search query and/or list of filters.

Parameters

* search_text (str, optional) - Term(s) for which search operation has to be performed. To be passed for text search case alone.
* filters (list, optional) - List of filters to be applied to the recommendation results. List of filters should be of format [{'field':str,'type':str,'value':str}]
* response_fields (list, optional) - List of fields to be fetched for every product in the response.
* facets (list, optional) - ndicates the list of facets to be returned in the response. Example: brand, size, color, category, sub_cat, etc,
* page (int, optional) - Indicates which page results to be retrieved. Defaults to 2.
* facet_limit (int, optional) - Number of facet values to be returned per facet field. Defaults to 100.
* max_content (int, optional) - Maximum number of products to return. Defaults to None
* min_content (int, optional) - Minimum number of products to return. Defaults to None
* sort_by (str, optional) - Indicates the field using which sort needs to be performed.
* sort_order (enum, optional) - Indicates the sorting order in which results has to be returned.

Returns

`search_results` (dict): search results based on applied filters and/or search query

## **def** **list_records**(

 self,

 search_text: str = **None**,

 filters: list = [],

 response_fields: list = [],

 facets: list = [],

 page: int = 1,

 facet_limit: int = 100,

 max_content: int = **None**,

 min_content: int = **None**,

 sort_by: str = **None**,

 sort_order='asc'

):

Function to search through the catalog It returns a list of records (in a paginated structure) given a search query and/or list of filters.

Parameters

* search_text (str, optional) - Term(s) for which search operation has to be performed. To be passed for text search case alone.
* filters (list, optional) - List of filters to be applied to the recommendation results. List of filters should be of format [{'field':str,'type':str,'value':str}]
* response_fields (list, optional) - List of fields to be fetched for every product in the response.
* facets (list, optional) - ndicates the list of facets to be returned in the response. Example: brand, size, color, category, sub_cat, etc,
* page (int, optional) - Indicates which page results to be retrieved. Defaults to 2.
* facet_limit (int, optional) - Number of facet values to be returned per facet field. Defaults to 100.
* max_content (int, optional) - Maximum number of records to return. Defaults to None
* min_content (int, optional) - Minimum number of records to return. Defaults to None
* sort_by (str, optional) - Indicates the field using which sort needs to be performed.
* sort_order (enum, optional) - Indicates the sorting order in which results has to be returned.

Returns

`search_results` (dict): search results based on applied filters and/or search query

**def** **list_feeds**(self, page_num: int = 1, page_size: int = 10, exclude: list = **None**):

Function to return the list of feeds, for a specified catalog id

Parameters

* page_num (int, optional) - query param, page number for the results to be returned
* page_size (int, optional) - query param, number of results to be returned within each page
* exclude (list, optional) - query param, value(feed_id) passed to this will be excluded from the returned results

Returns

`search_results` (dict): List response of the feeds related to the given catalog_id as per the filters provided

**def** **get_feed**(self, feed_id: str):

Function to return the metadata of a feed of a catalog

Parameters

* feed_id (str, required) - ID of the feed

Returns

* feed_details (dict) - Meta data of the feed

**def** **export_feed**(self, feed_id: str):

Function to return a downloadable url to a CSV File containing the Feed Failures for a given catalog and feed

Parameters

* feed_id (str, required) - ID of the feed

Returns

* url (string) - URL to downloadable CSV File

**def** **edit_records**(self, records):

Method to bulk edit records in a catalog

Parameters

* records (list, required) - List of dicts containing the update payload for each record. Each dict must contain the primary key,value of the record being editted and all the fields of the record.

Returns

* response (dict) - Response dict containng status of update operation for each record

**def** **get_user_history**(self, user_id=**None**, blox_uuid=**None**, events=[]):

Method to get the user history for the given list of events Either user_id or blox_uuid is mandatory.

Args: - user_id (str, optional): user's id. Defaults to None. - blox_uuid (str, optional): Blox UUID of product. Defaults to None. - events (list, optional): List of events such as Buy,PDP Pageview. Defaults to [].

Returns: - response (dict): User history

**def** **get_job_status**(self, job_id):

Method to get status of a job Parameters - job_id (str): UUID of job Returns - response (dict) - Job details such as job_id,status,job_type

##### Inherited Members

**blox.base.base.Blox** get
