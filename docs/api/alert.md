---
title: "  Catalog"
sidebar_label: 'Catalog Manager'
---


<details>
  <summary>Click me</summary>

  ```class CatalogManager(Blox):
    def __init__(self, **kwargs):
        """

        Catalog Manager is used to list, get and create `blox.catalog.catalog.Catalog` instances
    
        """
        super().__init__(**kwargs)
        self.catalog_api = CatalogsApi(self.api_client)
    
    #
    def list(self):
        # This Function list the catalog
        '''
        Function to return a list of catalog objects for the given api key of a specific client

        **Parameters** 
        - None

        **Returns**
        - `catalogs` : list of `blox.catalog.catalog.Catalog`
        
        
        '''

        catalog_instances = []

        try:
            response = self.catalog_api.get_catalogs(_preload_content = False)
            catalog_list, request_id = self._get_data_from_response(response)
            #print(catalog_list)
            
            for catalog in catalog_list:
                catalog_instances.append(
                    Catalog(
                        name=catalog['name'],
                        schema=catalog['schema'], 
                        datasources=catalog['data_sources'],
                        id=catalog['catalog_id'],
                        metadata=catalog['metadata'],
                        extraction_config=catalog['extraction_config'],
                        config = catalog['config'],
                        status = catalog['status'],
                        x_api_key=self.x_api_key,
                        created_ts=catalog['created_ts'],
                        updated_ts=catalog['updated_ts'])
                    ) 


            self.logger.info('request_id: {0}'.format(request_id))        
            return catalog_instances
        except ApiException as api_exception:
            self.logger.exception("API exception")
            raise BloxApiError(status = api_exception.status,reason = api_exception.reason, body = api_exception.body)
        except:
            self.logger.exception("SDK exception")
            raise BloxException(fmt="Error in retrieving catalogs")

    
    def create(self,name:str = None,extraction_config:list = None,metadata:dict = None,config:dict = None):
        '''
        Function to create Catalog 

        **Parameters**
        - `name` (str): Name of catalog
        - `extraction_config` (list, optional): list of extraction configs. Each one must contain keys: "taxonomy_id","active","graph_id","type"
        - `metadata` (dict, optional): metadata

        **Returns**
        - `catalog` : `blox.catalog.catalog.Catalog`

        '''
        

        payload = {
            "name": name
        }

        if extraction_config:
            payload.update({"extraction_config":extraction_config})
        if metadata:
            payload.update({"metadata":metadata})
        if config:
            payload.update({"config":config})

        try:
            
            response = self.catalog_api.create_catalog(body = payload,_preload_content = False)
            
            catalog, request_id = self._get_data_from_response(response)
            

            #print(catalog)
            catalog_instance = Catalog(
                                name=catalog['name'],
                                schema=catalog['schema'], 
                                datasources=catalog['data_sources'],
                                id=catalog['catalog_id'],
                                metadata=catalog['metadata'],
                                extraction_config=catalog['extraction_config'],
                                config = catalog['config'],
                                x_api_key=self.x_api_key,
                                created_ts=catalog['created_ts'],
                                updated_ts=catalog['updated_ts'])
            
            self.logger.info('request_id: {0}'.format(request_id))                
            return catalog_instance
        except ApiException as api_exception:
            self.logger.exception("API exception")
            raise BloxApiError(status = api_exception.status,reason = api_exception.reason, body = api_exception.body)
        except:
            self.logger.exception("SDK exception")
            raise BloxException(fmt="Error in creating catalog: {0}".format(name))

    
    def get(self,id:str):
        '''
        Function that Returns catalog object when catalog_id is given

        **Parameters**
        - `catalog_id` (str) : UUID of catalog

        **Returns**
        - `catalog` : `blox.catalog.catalog.Catalog`

        '''
        try:
            
            response = self.catalog_api.get_catalog_by_id(catalog_id = id,_preload_content = False)
            catalog, request_id = self._get_data_from_response(response)
            catalog_instance = Catalog(
                                name=catalog['name'],
                                schema=catalog['schema'], 
                                datasources=catalog['data_sources'],
                                id=catalog['catalog_id'],
                                metadata=catalog['metadata'],
                                extraction_config=catalog['extraction_config'],
                                config = catalog['config'],
                                status = catalog['status'],
                                x_api_key=self.x_api_key,
                                created_ts=catalog['created_ts'],
                                updated_ts=catalog['updated_ts'])
            self.logger.info('request_id: {0}'.format(request_id))                
            return catalog_instance
        except ApiException as api_exception:
            self.logger.exception("API exception")
            raise BloxApiError(status = api_exception.status,reason = api_exception.reason, body = api_exception.body)
        except:
            self.logger.exception("SDK exception")
            raise BloxException(fmt="Error in retrieving catalog: {0}".format(id))
  ```

</details>

Catalog Manager is used to list, get and create blox.catalog.catalog.Catalog instances.

<details>
  <summary>Click me</summary>
  
  ```   def __init__(self, **kwargs):
        """

        Catalog Manager is used to list, get and create `blox.catalog.catalog.Catalog` instances
    
        """
        super().__init__(**kwargs)
        self.catalog_api = CatalogsApi(self.api_client)
  ```

</details>

## def list(self)

<details>
  <summary>Click me</summary>
  
  ```     def list(self):
        # This Function list the catalog
        '''
        Function to return a list of catalog objects for the given api key of a specific client

        **Parameters** 
        - None

        **Returns**
        - `catalogs` : list of `blox.catalog.catalog.Catalog`
        
        
        '''

        catalog_instances = []

        try:
            response = self.catalog_api.get_catalogs(_preload_content = False)
            catalog_list, request_id = self._get_data_from_response(response)
            #print(catalog_list)
            
            for catalog in catalog_list:
                catalog_instances.append(
                    Catalog(
                        name=catalog['name'],
                        schema=catalog['schema'], 
                        datasources=catalog['data_sources'],
                        id=catalog['catalog_id'],
                        metadata=catalog['metadata'],
                        extraction_config=catalog['extraction_config'],
                        config = catalog['config'],
                        status = catalog['status'],
                        x_api_key=self.x_api_key,
                        created_ts=catalog['created_ts'],
                        updated_ts=catalog['updated_ts'])
                    ) 


            self.logger.info('request_id: {0}'.format(request_id))        
            return catalog_instances
        except ApiException as api_exception:
            self.logger.exception("API exception")
            raise BloxApiError(status = api_exception.status,reason = api_exception.reason, body = api_exception.body)
        except:
            self.logger.exception("SDK exception")
            raise BloxException(fmt="Error in retrieving catalogs")
  ```

</details>

Function to return a list of catalog objects for the given api key of a specific client

- **Parameters**
       None
- **Returns**
    `catalogs`  : list of  `[blox.catalog.catalog.Catalog](https://d16mhahokhyjuk.cloudfront.net/staging/blox/catalog/catalog.html#Catalog)`

<details>

  <summary> click me</summary>


  
  ```  def create(self,name:str = None,extraction_config:list = None,metadata:dict = None,config:dict = None):
        '''
        Function to create Catalog 

        **Parameters**
        - `name` (str): Name of catalog
        - `extraction_config` (list, optional): list of extraction configs. Each one must contain keys: "taxonomy_id","active","graph_id","type"
        - `metadata` (dict, optional): metadata

        **Returns**
        - `catalog` : `blox.catalog.catalog.Catalog`

        '''
        

        payload = {
            "name": name
        }

        if extraction_config:
            payload.update({"extraction_config":extraction_config})
        if metadata:
            payload.update({"metadata":metadata})
        if config:
            payload.update({"config":config})

        try:
            
            response = self.catalog_api.create_catalog(body = payload,_preload_content = False)
            
            catalog, request_id = self._get_data_from_response(response)
            

            #print(catalog)
            catalog_instance = Catalog(
                                name=catalog['name'],
                                schema=catalog['schema'], 
                                datasources=catalog['data_sources'],
                                id=catalog['catalog_id'],
                                metadata=catalog['metadata'],
                                extraction_config=catalog['extraction_config'],
                                config = catalog['config'],
                                x_api_key=self.x_api_key,
                                created_ts=catalog['created_ts'],
                                updated_ts=catalog['updated_ts'])
            
            self.logger.info('request_id: {0}'.format(request_id))                
            return catalog_instance
        except ApiException as api_exception:
            self.logger.exception("API exception")
            raise BloxApiError(status = api_exception.status,reason = api_exception.reason, body = api_exception.body)
        except:
            self.logger.exception("SDK exception")
            raise BloxException(fmt="Error in creating catalog: {0}".format(name))
  ```

</details>
