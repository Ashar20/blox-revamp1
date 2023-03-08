---
title: "ion-app"
---
from swagger_client.api import CatalogsApi
from blox.base import Blox
from blox.exceptions import BloxApiError,BloxException
from swagger_client.rest import ApiException
import json
import traceback
class Datasource(Blox):
    def __init__(self,catalog_id,datasource_id,datasource_details,**kwargs):
        super().__init__(**kwargs)
        self.catalog_api = CatalogsApi(self.api_client)
        self.catalog_id = catalog_id
        self.datasource_id = datasource_id
        self.datasource_details = datasource_details


    def test_connection(self):

        try:
            response = self.catalog_api.test_datasource(catalog_id=self.catalog_id,datasource_id = self.datasource_id ,_preload_content = False)
            _ , request_id = self._get_data_from_response(response)
            response_data = json.loads(response.data)
            self.logger.info('request_id: {0}'.format(request_id))        
            return response_data
        except ApiException as api_exception:
            self.logger.exception("API exception")
            raise BloxApiError(status = api_exception.status,reason = api_exception.reason, body = api_exception.body)
        except:
            self.logger.exception("SDK exception")
            raise BloxException(fmt="Error while testing connection")


    def run(self):
        try:
            response = self.catalog_api.datasource_run_now(catalog_id=self.catalog_id,datasource_id = self.datasource_id ,_preload_content = False)
            _ , request_id = self._get_data_from_response(response)
            response_data = json.loads(response.data)
            self.logger.exception("SDK exception")
            return response_data
        except ApiException as api_exception:
            self.logger.exception("API exception")
            raise BloxApiError(status = api_exception.status,reason = api_exception.reason, body = api_exception.body)
        except:
            self.logger.exception("SDK exception")
            raise BloxException(fmt="Error while running datasource")


    def infer_schema(self):
        """
        Function to infer schema for a given datasource
        **Parameters**
            datasource ( Datasource obj ): Schema is infered for this datasource

        **Returns**
            response (dict): Response from API denoting success or failure
        """

        try:
            #catalog_api = CatalogsApi()
            response = self.catalog_api.infer_schema(catalog_id=self.catalog_id,datasource_id = self.datasource_id ,_preload_content = False)
            data, request_id = self._get_data_from_response(response)

            self.logger.info('request_id: {0}'.format(request_id))        
            return data
        except ApiException as api_exception:
            self.logger.exception("API exception")
            raise BloxApiError(status = api_exception.status,reason = api_exception.reason, body = api_exception.body)
        except:
            self.logger.exception("SDK exception")
            raise BloxException(fmt="Error while infering schema")

    def save(self):
        """
        Function to update a datasource

        **Parameters**
            datasource ( Datasource obj ): Schema is infered for this datasource
        
        **Returns**
            `datasource`: `blox.catalog.datasource.Datasource` object
        """
        try:
            payload = {
                'name': self.datasource_details['name'],
                # 'type': self.datasource_details['type'],
                'config': self.datasource_details['config'],
                # 'mode': self.datasource_details['mode']
            }
            schedule = self.datasource_details.get('schedule', None)
            if schedule:
                payload['schedule'] = schedule
            response = self.catalog_api.update_datasource(body=payload, catalog_id=self.catalog_id, datasource_id=self.datasource_id,_preload_content=False)
            _ , request_id = self._get_data_from_response(response)

            self.logger.info('request_id: {0}'.format(request_id))        
            return self
        except ApiException as api_exception:
            self.logger.exception("API exception")
            raise BloxApiError(status = api_exception.status,reason = api_exception.reason, body = api_exception.body)
        except:
            self.logger.exception("SDK exception")
            raise BloxException(fmt="Error while updating datasource")

    def delete(self):
        """
        Function to delete a datasource
        
        **Returns**
            None
        """
        try:
            response = self.catalog_api.delete_datasource(catalog_id=self.catalog_id, datasource_id=self.datasource_id,_preload_content=False)
            _ , request_id = self._get_data_from_response(response)

            self.logger.info('request_id: {0}'.format(request_id))        
            return None
        except ApiException as api_exception:
            self.logger.exception("API exception")
            raise BloxApiError(status = api_exception.status,reason = api_exception.reason, body = api_exception.body)
        except:
            self.logger.exception("SDK exception")
            raise BloxException(fmt="Error while deleting datasource")
class Datasource(blox.base.base.Blox):
class Datasource(Blox):
    def __init__(self,catalog_id,datasource_id,datasource_details,**kwargs):
        super().__init__(**kwargs)
        self.catalog_api = CatalogsApi(self.api_client)
        self.catalog_id = catalog_id
        self.datasource_id = datasource_id
        self.datasource_details = datasource_details


    def test_connection(self):

        try:
            response = self.catalog_api.test_datasource(catalog_id=self.catalog_id,datasource_id = self.datasource_id ,_preload_content = False)
            _ , request_id = self._get_data_from_response(response)
            response_data = json.loads(response.data)
            self.logger.info('request_id: {0}'.format(request_id))        
            return response_data
        except ApiException as api_exception:
            self.logger.exception("API exception")
            raise BloxApiError(status = api_exception.status,reason = api_exception.reason, body = api_exception.body)
        except:
            self.logger.exception("SDK exception")
            raise BloxException(fmt="Error while testing connection")


    def run(self):
        try:
            response = self.catalog_api.datasource_run_now(catalog_id=self.catalog_id,datasource_id = self.datasource_id ,_preload_content = False)
            _ , request_id = self._get_data_from_response(response)
            response_data = json.loads(response.data)
            self.logger.exception("SDK exception")
            return response_data
        except ApiException as api_exception:
            self.logger.exception("API exception")
            raise BloxApiError(status = api_exception.status,reason = api_exception.reason, body = api_exception.body)
        except:
            self.logger.exception("SDK exception")
            raise BloxException(fmt="Error while running datasource")


    def infer_schema(self):
        """
        Function to infer schema for a given datasource
        **Parameters**
            datasource ( Datasource obj ): Schema is infered for this datasource

        **Returns**
            response (dict): Response from API denoting success or failure
        """

        try:
            #catalog_api = CatalogsApi()
            response = self.catalog_api.infer_schema(catalog_id=self.catalog_id,datasource_id = self.datasource_id ,_preload_content = False)
            data, request_id = self._get_data_from_response(response)

            self.logger.info('request_id: {0}'.format(request_id))        
            return data
        except ApiException as api_exception:
            self.logger.exception("API exception")
            raise BloxApiError(status = api_exception.status,reason = api_exception.reason, body = api_exception.body)
        except:
            self.logger.exception("SDK exception")
            raise BloxException(fmt="Error while infering schema")

    def save(self):
        """
        Function to update a datasource

        **Parameters**
            datasource ( Datasource obj ): Schema is infered for this datasource
        
        **Returns**
            `datasource`: `blox.catalog.datasource.Datasource` object
        """
        try:
            payload = {
                'name': self.datasource_details['name'],
                # 'type': self.datasource_details['type'],
                'config': self.datasource_details['config'],
                # 'mode': self.datasource_details['mode']
            }
            schedule = self.datasource_details.get('schedule', None)
            if schedule:
                payload['schedule'] = schedule
            response = self.catalog_api.update_datasource(body=payload, catalog_id=self.catalog_id, datasource_id=self.datasource_id,_preload_content=False)
            _ , request_id = self._get_data_from_response(response)

            self.logger.info('request_id: {0}'.format(request_id))        
            return self
        except ApiException as api_exception:
            self.logger.exception("API exception")
            raise BloxApiError(status = api_exception.status,reason = api_exception.reason, body = api_exception.body)
        except:
            self.logger.exception("SDK exception")
            raise BloxException(fmt="Error while updating datasource")

    def delete(self):
        """
        Function to delete a datasource
        
        **Returns**
            None
        """
        try:
            response = self.catalog_api.delete_datasource(catalog_id=self.catalog_id, datasource_id=self.datasource_id,_preload_content=False)
            _ , request_id = self._get_data_from_response(response)

            self.logger.info('request_id: {0}'.format(request_id))        
            return None
        except ApiException as api_exception:
            self.logger.exception("API exception")
            raise BloxApiError(status = api_exception.status,reason = api_exception.reason, body = api_exception.body)
        except:
            self.logger.exception("SDK exception")
            raise BloxException(fmt="Error while deleting datasource")
Datasource(catalog_id, datasource_id, datasource_details, **kwargs)
    def __init__(self,catalog_id,datasource_id,datasource_details,**kwargs):
        super().__init__(**kwargs)
        self.catalog_api = CatalogsApi(self.api_client)
        self.catalog_id = catalog_id
        self.datasource_id = datasource_id
        self.datasource_details = datasource_details
def test_connection(self):
    def test_connection(self):

        try:
            response = self.catalog_api.test_datasource(catalog_id=self.catalog_id,datasource_id = self.datasource_id ,_preload_content = False)
            _ , request_id = self._get_data_from_response(response)
            response_data = json.loads(response.data)
            self.logger.info('request_id: {0}'.format(request_id))        
            return response_data
        except ApiException as api_exception:
            self.logger.exception("API exception")
            raise BloxApiError(status = api_exception.status,reason = api_exception.reason, body = api_exception.body)
        except:
            self.logger.exception("SDK exception")
            raise BloxException(fmt="Error while testing connection")
def run(self):
    def run(self):
        try:
            response = self.catalog_api.datasource_run_now(catalog_id=self.catalog_id,datasource_id = self.datasource_id ,_preload_content = False)
            _ , request_id = self._get_data_from_response(response)
            response_data = json.loads(response.data)
            self.logger.exception("SDK exception")
            return response_data
        except ApiException as api_exception:
            self.logger.exception("API exception")
            raise BloxApiError(status = api_exception.status,reason = api_exception.reason, body = api_exception.body)
        except:
            self.logger.exception("SDK exception")
            raise BloxException(fmt="Error while running datasource")
def infer_schema(self):
    def infer_schema(self):
        """
        Function to infer schema for a given datasource
        **Parameters**
            datasource ( Datasource obj ): Schema is infered for this datasource

        **Returns**
            response (dict): Response from API denoting success or failure
        """

        try:
            #catalog_api = CatalogsApi()
            response = self.catalog_api.infer_schema(catalog_id=self.catalog_id,datasource_id = self.datasource_id ,_preload_content = False)
            data, request_id = self._get_data_from_response(response)

            self.logger.info('request_id: {0}'.format(request_id))        
            return data
        except ApiException as api_exception:
            self.logger.exception("API exception")
            raise BloxApiError(status = api_exception.status,reason = api_exception.reason, body = api_exception.body)
        except:
            self.logger.exception("SDK exception")
            raise BloxException(fmt="Error while infering schema")
Function to infer schema for a given datasource Parameters datasource ( Datasource obj ): Schema is infered for this datasource

Returns response (dict): Response from API denoting success or failure

def save(self):
    def save(self):
        """
        Function to update a datasource

        **Parameters**
            datasource ( Datasource obj ): Schema is infered for this datasource
        
        **Returns**
            `datasource`: `blox.catalog.datasource.Datasource` object
        """
        try:
            payload = {
                'name': self.datasource_details['name'],
                # 'type': self.datasource_details['type'],
                'config': self.datasource_details['config'],
                # 'mode': self.datasource_details['mode']
            }
            schedule = self.datasource_details.get('schedule', None)
            if schedule:
                payload['schedule'] = schedule
            response = self.catalog_api.update_datasource(body=payload, catalog_id=self.catalog_id, datasource_id=self.datasource_id,_preload_content=False)
            _ , request_id = self._get_data_from_response(response)

            self.logger.info('request_id: {0}'.format(request_id))        
            return self
        except ApiException as api_exception:
            self.logger.exception("API exception")
            raise BloxApiError(status = api_exception.status,reason = api_exception.reason, body = api_exception.body)
        except:
            self.logger.exception("SDK exception")
            raise BloxException(fmt="Error while updating datasource")
Function to update a datasource

Parameters datasource ( Datasource obj ): Schema is infered for this datasource

Returns datasource: blox.catalog.datasource.Datasource object

def delete(self):
    def delete(self):
        """
        Function to delete a datasource
        
        **Returns**
            None
        """
        try:
            response = self.catalog_api.delete_datasource(catalog_id=self.catalog_id, datasource_id=self.datasource_id,_preload_content=False)
            _ , request_id = self._get_data_from_response(response)

            self.logger.info('request_id: {0}'.format(request_id))        
            return None
        except ApiException as api_exception:
            self.logger.exception("API exception")
            raise BloxApiError(status = api_exception.status,reason = api_exception.reason, body = api_exception.body)
        except:
            self.logger.exception("SDK exception")
            raise BloxException(fmt="Error while deleting datasource")
Function to delete a datasource

Returns None

Inherited Members
blox.base.base.Blox get