---
title: "  Catalog"
sidebar_label: 'Schema'
---

### class Schema(blox.base.base.Blox)

[](https://d16mhahokhyjuk.cloudfront.net/staging/blox/catalog/schema.html#Schema)

### Schema(catalog_id, fields=[], **kwargs)
 
[](https://d16mhahokhyjuk.cloudfront.net/staging/blox/catalog/schema.html#Schema.__init__)

### def initalize(self, schema_payload)

[](https://d16mhahokhyjuk.cloudfront.net/staging/blox/catalog/schema.html#Schema.initalize)

Sets the fields sent in the form of list of dicts to the schema table

**Parameters**

- `schema_payload`  - List of fields to be added to schema

def  initialize(self, schema_payload):

[](https://d16mhahokhyjuk.cloudfront.net/staging/blox/catalog/schema.html#Schema.initialize)

Sets the fields sent in the form of list of dicts to the schema table

**Parameters**

- `schema_payload`  - List of fields to be added to schema

def  edit(self, add: list = None, delete: list = None, update: list = None):

[](https://d16mhahokhyjuk.cloudfront.net/staging/blox/catalog/schema.html#Schema.edit)

Method to add,delete and update fields to schema

**Parameters**  -  `add`  (list): list of fields to be added -  `delete`  (list): list of field names to be deleted -  `update`  (list): list of fields to be updated

**Returns**  -  `data`  (dict): Dict containing information of job pointing to the update job

def  add_fields(self, fields: list):

[](https://d16mhahokhyjuk.cloudfront.net/staging/blox/catalog/schema.html#Schema.add_fields)

Method to add fields to schema

**Parameters**  -  `fields`  (list): List of field dicts to be added

**Returns**  -  `data`  (dict): Dict containing information of job pointing to the update job

def  update_fields(self, fields):

[](https://d16mhahokhyjuk.cloudfront.net/staging/blox/catalog/schema.html#Schema.update_fields)

Method to update fields in schema

**Parameters**  -  `fields`  (list): List of field dicts to be updated.

**Returns**  -  `data`  (dict): Dict containing information of job pointing to the update job

def  remove_fields(self, fields: list):

[](https://d16mhahokhyjuk.cloudfront.net/staging/blox/catalog/schema.html#Schema.remove_fields)

Method to delete fields in schema

**Parameters**  -  `fields`  (list): List of field names (str) to be deleted

**Returns**  -  `data`  (dict): Dict containing information of job pointing to the update job

def  filter_fields( self, facet=None, index=None, search=None, meta=None, blox_generated=None, boost=None):

[](https://d16mhahokhyjuk.cloudfront.net/staging/blox/catalog/schema.html#Schema.filter_fields)

Method to filter fields of a schema based on the field attributes

**Parameters**  `facet`  (bool, optional): Filter for field if facet=True. Defaults to None.  `index`  (bool, optional): Filter for field if index=True. Defaults to None.  `search`  (bool, optional): Filter for field if search=True. Defaults to None.  `meta`  (bool, optional): Filter for field if meta=True. Defaults to None.  `blox_generated`  (bool, optional): Filter for field if blox_generated=True (internal fields). Defaults to None.  `boost`  (bool, optional): Filter for field if boost=True. Defaults to None.

**Returns**  filtered_fields (list): list of filtered fields

### Inherited Members

blox.base.base.Blox

get
