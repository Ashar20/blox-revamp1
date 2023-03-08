---
title: UI Components
hide_table_of_contents: true
allow_different_nesting: true
---

### What is Blox Python Client?

The Blox SDK allows access to the capabilities of Blox. We currently support a Python client.

### Goal

To install Blox SDK and start using the APIs

### Prerequisites

* Blox Account API_KEY
* python3 and virtualenv to be installed in your work environment

_NOTE : Blox Python client does not allow any admin-level operation._

_DISCLAIMER : Currently, any modification/creation of any entity done through the SDK will not reflect in the Blox Application. However, changes made in Blox application will be observable through the SDK._

### Getting started

The wheel objects currosponding to the blox-sdk are mentioned here [https://pidev.madstreetden.xyz/packages/](https://pidev.madstreetden.xyz/packages/)

Install the wheel object using pip

You will be prompted to provide credentials for the installation

pip install <https://pidev.madstreetden.xyz/packages/blox-0.0.6-py3-none-any.whl>

### Steps to instantiate

Blox Object needs to be instantiated to enable the usage of SDK methods. The account API key has to be provided as input.

from blox.base import Blox

blox = Blox(x_api_key=API_KEY)

Refer to the list of Blox python sub-modules from the left panel. All sub-modules in the SDK are accessed as follows:

module_manager = blox.get('MODULE_NAME')

## **Content Onboarding**

**Goal**

Blox allows you to upload any kind of structured content, a catalog, through various connectors.

**Prerequisites**

1. Python SDK (Link to SDK installation)
2. Valid Blox Account (Link to account creation)
3. Supported data format (Link to documentation)
4. Supported data sources (Link to documentation)
5. Data to be onboarded

### 1. Create a catalog

Create a catalog with a name

catalog_manager = blox.get('catalog')

catalog = catalog_manager.create(name='apparel')

### 2. Discover connectors

Discover the predefined connectors supported by the system. Every connector configuration will have the data access details which includes path, authentication etc

connector_manager = blox.get('connector')

connector_manager.list()

:::NOTE: Currently, only S3 connectors are operational:::

### 3. Add a data source

Mention the data source from where we can start consuming the data. The configuration from the connector is what will be passed here.

datasource = {

  "name": "s3_source",

  "type": "s3",

  "config": {

    "path": 's3://products/fashion_catalog/',

    "format": "csv"

  },

  "mode": "incremental", _# (incremental | full_sync)_

  "schedule": "0 0/30 ** * ?"  _# cron_

}

catalog.add_datasource(datasource)

How to verify if the specified data source is valid and is reachable?

catalog.datasources[0].test_connection()

We can also infer the schema of a data source. It could be useful in setting the schema of the catalog from the inferred schema.

catalog.datasources[0].infer_schema()

### 4. Set extraction config

If we want the catalog to pass through enrichment flows to extract tags, then we need to specify the extraction configs in the catalog configuration. There are preset models available which can be reused or you can build your own model using Enrich flow and use the same here.

:::NOTE: Only the type:DIGESTION extraction configs can be used:::

Discover the existing extraction configs

extraction_config_manager = blox.get('extraction_config')

extraction_config = extraction_config_manager.list[type='digestion'](0)

extraction_config_manager.**dict**

Set the extraction config in catalog schema

catalog.extraction_config = [{

  'taxonomy_id': 'TAXONOMY_ID',

  'active': **True**,

  'graph_id': 'GRAPH_ID',

  'type': 'digestion'

}]

catalog.config = {

  'autodelete': **False**

}

catalog.save()

### 5. Set Schema

The schema defines the list of fields in the catalog

fields = [

    {

        "index": **True**,

        "search": **False**,

        "facet": **True**,

        "type": "string",

        "primary_key": **True**,

        "mandatory": **True**,

        "name": "product_id",

        "personalize": **True**,

        "meta": "identifier"

    },

    {

        "index": **True**,

        "search": **True**,

        "facet": **False**,

        "type": "string",

        "primary_key": **False**,

        "mandatory": **True**,

        "name": "title",

        "personalize": **False**,

        "meta": "title"

    },

    {

        "index": **True**,

         "search": **True**,

         "facet": **True**,

         "type": "string",

         "primary_key": **False**,

         "mandatory": **True**,

         "name": "brand",

         "personalize": **True**,

         "meta": "brand"

     }

]

catalog.schema.initialize({ "fields": fields })

How to verify if the schema is saved?

catalog = catalog_manager.get('CATALOG_ID') _# Get upto-date instance_

catalog.schema.fields

### 6. Process the catalog

There are two parts to processing a catalog

1. The required resources should be provisioned and scheduling should be enabled
2. Processing of data

Enable method provisions the required resources, sets up the scheduling and ensures the data starts processing at the scheduled time ascynchronously; It also triggers the initial run of the data source.

catalog.enable()

How to verify the status of the catalog?

catalog = catalog_manager.get('CATALOG_ID') _# Get upto-date instance_

catalog.status

Possible values for catalog status :

1. NOT READY - Resources provisioning is not done
2. READY - Resources provisioning was successful
3. UPDATING - Catalog update is in progress
4. DELETING - Catalog delete is in progress

# NOTE: A catalog needs to be in READY state for it to be useable

How to check the progress of the catalog processing after provisioning is ready:

catalog.get_summary()

Run method overrides the schedule and start a run immediately

catalog.datasources[0].run()

 7. Explore the catalog

Once the catalog is in READY state, we can get the summary of the catalog

catalog.get_summary()

A catalog can have more than one feed. Every catalog run creates a feed To retrieve all the feeds for a catalog

catalog.list_feeds(page_num=1,page_size=10)

Once the catalog is onboarded, we can browse the records in the catalog

catalog.list_records(filters=[{'field':'brand','type':'exact','value':'Alexander Mcqueen'}],sort_by='brand',max_content=50)

In order to search for a particular text, supply a search_text param

catalog.list_records(search_text='Levi', sort_by='price')

## Connectors

A connector is a preset configuration of a data source. The discover connector API returns the required credentials and configurations necessary to create a 'DataSource' of the corresponding type of connector. The connectors supported are: s3, sftp, kafka

S3 - Connect and process catalog data from S3 files

Connector configuration required:

```
<table>
  <tr>
   <td><strong>Parameter</strong>
   </td>
   <td><strong>Type</strong>
   </td>
   <td><strong>Description</strong>
   </td>
   <td><strong>Preset/Example Value</strong>
   </td>
  </tr>
  <tr>
   <td>type
   </td>
   <td>string
   </td>
   <td>type of the connector
   </td>
   <td>s3
   </td>
  </tr>
  <tr>
   <td>config
   </td>
   <td>json
   </td>
   <td>configurations for the connector datasource
   </td>
   <td>-
   </td>
  </tr>
  <tr>
   <td>config.properties
   </td>
   <td>json
   </td>
   <td>data configs such as path and format
   </td>
   <td>-
   </td>
  </tr>
  <tr>
   <td>config.properties.path
   </td>
   <td>string
   </td>
   <td>datasource s3 path that describes folders where catalog files (feeds) are upload
   </td>
   <td>s3://catalog/products/data
   </td>
  </tr>
  <tr>
   <td>config.properties.format
   </td>
   <td>string
   </td>
   <td>s3 file formats in which feeds are uploaded
   </td>
   <td>csv
   </td>
  </tr>
  <tr>
   <td>key
   </td>
   <td>string
   </td>
   <td>AWS S3 access key required to connect to the bucket
   </td>
   <td>-
   </td>
  </tr>
  <tr>
   <td>secret
   </td>
   <td>string
   </td>
   <td>AWS secret required to connect to the bucket
   </td>
   <td>-
   </td>
  </tr>
  <tr>
   <td>token
   </td>
   <td>string
   </td>
   <td>AWS token required to connect to the bucket, if s3 bucket is not public
   </td>
   <td>-
   </td>
  </tr>
</table>
```

Kafka - Connect and process catalog data from Kafka

Connector configuration required:

```
<table>
  <tr>
   <td><strong>Parameter</strong>
   </td>
   <td><strong>Type</strong>
   </td>
   <td><strong>Description</strong>
   </td>
   <td><strong>Preset/Example Value</strong>
   </td>
  </tr>
  <tr>
   <td>type
   </td>
   <td>string
   </td>
   <td>type of the connector
   </td>
   <td>kafka
   </td>
  </tr>
  <tr>
   <td>config
   </td>
   <td>json
   </td>
   <td>configurations for the connector datasource
   </td>
   <td>-
   </td>
  </tr>
  <tr>
   <td>config.properties
   </td>
   <td>json
   </td>
   <td>data configs such as brokers and security protocol
   </td>
   <td>-
   </td>
  </tr>
  <tr>
   <td>config.properties.kafka_brokers
   </td>
   <td>array
   </td>
   <td>kafka broker urls in an array
   </td>
   <td>["b-2.kafka.eu-central-1.amazonaws.com:9092", "b-1.kafka.eu-central-1.amazonaws.com:9092"]
   </td>
  </tr>
  <tr>
   <td>config.properties.security_protocol
   </td>
   <td>string
   </td>
   <td>Security protocol to use to connect to kafka. Kafka brokers can be SSL enabled
   </td>
   <td>PLAINTEXT
   </td>
  </tr>
</table>
```

1. \
Catalog - Defines the configuration and the data for the content to be onboarded (Configs+Feed)
    1. Data source - Defines the source from where the data should be onboarded in the system
    2. Type - Defines the type of the connector that is used to connect to the data source
    3. Mode - Defines if a data that we receive is going to be incremental or full sync

        1.

Full Sync - In this mode, we process the entire catalog every day or at any cadence that is agreed upon. The following rules are applied to make the updates:

```
<table>
  <tr>
   <td><strong>Scenario</strong>
   </td>
   <td><strong>Record Status</strong>
   </td>
   <td><strong>Behavior</strong>
   </td>
  </tr>
  <tr>
   <td>Day 1 - New record P1 received in the catalog
   </td>
   <td>New record
   </td>
   <td>System will add this as a new record
   </td>
  </tr>
  <tr>
   <td>Day 1 - New record P1 added, Day 2 - P1 update received in the catalog
   </td>
   <td>Update record
   </td>
   <td>System will be update all the fields with the new record
   </td>
  </tr>
  <tr>
   <td>Day 1 - New record P1 added, Day 2 - P1 not received in the catalog
   </td>
   <td>Record marked unavailable
   </td>
   <td>System will assume that the record which is not sent is unavailable and mark it internally as unavailable
   </td>
  </tr>
</table>
```

        2.
Delta Mode - In this mode, we process only the delta updates on a daily basis or on any cadence that is agreed upon. The following rules are applied to make the updates:

```

<table>
  <tr>
   <td><strong>Scenario</strong>
   </td>
   <td><strong>Record Status</strong>
   </td>
   <td><strong>Behavior</strong>
   </td>
  </tr>
  <tr>
   <td>Day 1 - New record P1 received in the catalog
   </td>
   <td>New record
   </td>
   <td>System will add this as a new record
   </td>
  </tr>
  <tr>
   <td>Day 1 - New record P1 added, Day 2 - P1 update received in the catalog
   </td>
   <td>Update record
   </td>
   <td>System will be update all the fields with the new record
   </td>
  </tr>
  <tr>
   <td>Day 1 - New record P1 added, Day 2 - P1 marked as unavailable in the catalog
   </td>
   <td>Record marked unavailable
   </td>
   <td>System will mark the record as unavailable only when it is sent as unavailable in the catalog
   </td>
  </tr>
</table>
```

    4.  \
Schedule - Defines the schedule for syncing the catalog on a regular basis. [CronTrigger formats](http://www.quartz-scheduler.org/documentation/quartz-2.1.7/tutorials/tutorial-lesson-06.html) are used to specify the schedules
    5. Schema - Defines the fields in the catalog along with their data types & the settings to enable use cases. Definition of the fields are below :
        3. name - Name of the field (No special characters except underscore)
        4. type - Data type of the field. Supported data types are :
            1. string - For eg : Field name : title, Value : "abc"
            2. integer - For eg : Field name : count, Value : 100
            3. float - For eg : Field name : price, Value : 29.99
            4. boolean - For eg : Field name : available, Value : true/false
            5. datetime - For eg : Field name : created_date, Value : "2019-01-01"/"2019-01-01'T'00:00:00.000Z"
            6. array_of_int - For eg : Field name : sizes, Value : [32,34,36]
            7. array_of_float - For eg : Field name : prices, Value : [2.99, 4.89, 9.10]
            8. array_of_strings - For eg : Field name : keywords, Value : ["abc", "def", "ghi"]
            9. dict - For eg : Field name : tags, Value : {"color": "Blue", "material": "Leather"}. Dict data type allows the user to define a schema for each of the attributes within it. This provides more control to the users to enable use cases at every attribute level within the dict. {{ "index": True, "search": True, "facet": True, "type": "string", "mandatory": True, "name": "material", "personalize": False}, { "index": True, "search": True, "facet": False, "type": "string", "mandatory": True, "name": "color", "personalize": False}}
            10. map - For eg : Field name : tags, Value : {"color": "Blue", "material": "Leather"}. Map data type allows the user to have an open schema. It does not accept attribute level configuration.
        5. primary_key - To denote the primary identifier in a catalog. Only one field in the schema can be marked as primary_key
        6. mandatory - To denote if the field is mandatory or optional. System will drop the record if the value is not present for this field
        7. index - To enable filtering operations on the field
        8. facet - To enable grouping and sorting operations on the field. Indexed fields can only be marked for facet
        9. search - To enable search operations on the field . Indexed fields can only be marked for search
        10. personalize - To enable personalisation operations on the field. Indexed fields can only be marked for personalize
        11. meta - A meaningful definition to the field. Please refer [document](https://madstreetden.atlassian.net/l/cp/gv0iqRam)
    6. Extraction Config - Defines the configuration to extract tags from the records based on the models built and deployed
2. Feed - Data for the catalog

## **Events Onboarding**

Goal

Event definitions need to be setup in order to make use of Blox's powerful personalization capabilities

### Create an event definition

An event definition requires an event template to be associated with it

Get a template to be linked with the definition

t_list = template_manager.list()

t_obj = t_list[0]

Apart from a template creating an event definition requires name, description and event schema

entity = definition_manager.create(name='addToWishlist',template=t_obj,description='testing',schema=[{

        'source_field': 'user_id',

        'data_type': 'string',

        'mandatory': **True**,

        'alias': **None**,

        'catalog_id': **None**,

        'catalog_key': **None**,

        'event_payload': **True**,

        'resolution_inferred': **False**,

        'meta_type': 'user_id',

        'explode_field': **False**

    }, {

        'source_field': 'source_prodid',

        'data_type': 'string',

        'mandatory': **True**,

        'alias': **None**,

        'catalog_id': "catalog_id",

        'catalog_key': 'product_id',

        'event_payload': **True**,

        'resolution_inferred': **False**,

        'meta_type': 'item_identifier',

        'explode_field': **False**

    }, {

        'source_field': 'epoch',

        'data_type': 'string',

        'mandatory': **True**,

        'alias': **None**,

        'catalog_id': **None**,

        'catalog_key': **None**,

        'event_payload': **False**,

        'resolution_inferred': **False**,

        'meta_type': 'timestamp',

        'explode_field': **False**

    }, {

        'source_field': 'event_name',

        'data_type': 'string',

        'mandatory': **True**,

        'alias': 'event_name',

        'catalog_id': **None**,

        'catalog_key': **None**,

        'event_payload': **True**,

        'resolution_inferred': **False**,

        'meta_type': 'event_name',

        'explode_field': **False**

    }])

### Enable Event Definition

In order to create the event or track it, the event pipeline must be enabled

definition_manager.enable()

### Get event pipeline status

We can track the status of the pipeline using the following get status method

definition_manger.get_status()

### Create event (track event)

We can create or track a new event for an account by passing in a valid payload

event = definition_manager.get('abbcd05c-2501-11ed-a969-eedfd7791c3a')

track_payload = {

    "event_name":"PDPPageView","timestamp":1661493138771,"blox_uuid":"62f8570e-3a0e-416f-83ce-9106c8fdf13c","url":"https://uat.usplworld.com/imara/product/details/a18jaickd551a-mirror-work-churidar-kurta-dupatta-set/#productDetail","medium":"website","platform":"desktop","page_type":"pdp","page_name":"PDP Imara","product_id":"A18JAICKD551A"

}

event.create_event(body = track_payload)

## **Logging**

The client writes its logs to the logger named BLOX_SDK_LOGGER; This can be set to stdout using the below function:

**def** set_logger(level=logging.DEBUG,format = '**%(asctime)s** - **%(name)s** - **%(funcName)s** - **%(filename)s** - **%(levelname)s** - **%(message)s**'):

    _"""_

_function to set a i/o stream handling logger._

_That prints the logs in std for the given level and format._

_Args:_

_level (logging, optional): Minimum Level of the log. Defaults to logging.DEBUG._

_format (str, optional): Format of the log. Defaults to '%(asctime)s - %(name)s - %(funcName)s - %(filename)s - %(levelname)s - %(message)s'._
    _"""_

    **from** **logging** **import** StreamHandler

    **from** **sys** **import** stdout

    new_logger = logging.getLogger('BLOX_SDK_LOGGER')

    new_logger.setLevel(level)

    handler = logging.StreamHandler(stdout)

    formatter = logging.Formatter(format)

    handler.setFormatter(formatter)

    new_logger.addHandler(handler)


        new_logger.setLevel(logging.DEBUG)
