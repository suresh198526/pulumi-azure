# coding=utf-8
# *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
# *** Do not edit by hand unless you're certain you know what you are doing! ***

import json
import warnings
import pulumi
import pulumi.runtime
from typing import Union
from .. import utilities, tables

class IoTHub(pulumi.CustomResource):
    endpoints: pulumi.Output[list]
    """
    An `endpoint` block as defined below.
    
      * `batch_frequency_in_seconds` (`float`)
      * `connection_string` (`str`)
      * `container_name` (`str`)
      * `encoding` (`str`)
      * `file_name_format` (`str`)
      * `max_chunk_size_in_bytes` (`float`)
      * `name` (`str`) - Specifies the name of the IotHub resource. Changing this forces a new resource to be created.
      * `type` (`str`)
    """
    event_hub_events_endpoint: pulumi.Output[str]
    """
    The EventHub compatible endpoint for events data
    """
    event_hub_events_path: pulumi.Output[str]
    """
    The EventHub compatible path for events data
    """
    event_hub_operations_endpoint: pulumi.Output[str]
    """
    The EventHub compatible endpoint for operational data
    """
    event_hub_operations_path: pulumi.Output[str]
    """
    The EventHub compatible path for operational data
    """
    event_hub_partition_count: pulumi.Output[float]
    """
    The number of device-to-cloud partitions used by backing event hubs. Must be between `2` and `128`.
    """
    event_hub_retention_in_days: pulumi.Output[float]
    """
    The event hub retention to use in days. Must be between `1` and `7`.
    """
    fallback_route: pulumi.Output[dict]
    """
    A `fallback_route` block as defined below. If the fallback route is enabled, messages that don't match any of the supplied routes are automatically sent to this route. Defaults to messages/events.
    
      * `condition` (`str`)
      * `enabled` (`bool`)
      * `endpoint_names` (`list`)
      * `source` (`str`)
    """
    file_upload: pulumi.Output[dict]
    """
    A `file_upload` block as defined below.
    
      * `connection_string` (`str`)
      * `container_name` (`str`)
      * `default_ttl` (`str`)
      * `lock_duration` (`str`)
      * `max_delivery_count` (`float`)
      * `notifications` (`bool`)
      * `sasTtl` (`str`)
    """
    hostname: pulumi.Output[str]
    """
    The hostname of the IotHub Resource.
    """
    ip_filter_rules: pulumi.Output[list]
    """
    One or more `ip_filter_rule` blocks as defined below.
    
      * `action` (`str`)
      * `ipMask` (`str`)
      * `name` (`str`) - Specifies the name of the IotHub resource. Changing this forces a new resource to be created.
    """
    location: pulumi.Output[str]
    """
    Specifies the supported Azure location where the resource has to be createc. Changing this forces a new resource to be created.
    """
    name: pulumi.Output[str]
    """
    Specifies the name of the IotHub resource. Changing this forces a new resource to be created.
    """
    resource_group_name: pulumi.Output[str]
    """
    The name of the resource group under which the IotHub resource has to be created. Changing this forces a new resource to be created.
    """
    routes: pulumi.Output[list]
    """
    A `route` block as defined below.
    
      * `condition` (`str`)
      * `enabled` (`bool`)
      * `endpoint_names` (`list`)
      * `name` (`str`) - Specifies the name of the IotHub resource. Changing this forces a new resource to be created.
      * `source` (`str`)
    """
    shared_access_policies: pulumi.Output[list]
    """
    One or more `shared_access_policy` blocks as defined below.
    
      * `keyName` (`str`) - The name of the shared access policy.
      * `permissions` (`str`) - The permissions assigned to the shared access policy.
      * `primary_key` (`str`) - The primary key.
      * `secondary_key` (`str`) - The secondary key.
    """
    sku: pulumi.Output[dict]
    """
    A `sku` block as defined below.
    
      * `capacity` (`float`)
      * `name` (`str`) - Specifies the name of the IotHub resource. Changing this forces a new resource to be created.
    """
    tags: pulumi.Output[dict]
    """
    A mapping of tags to assign to the resource.
    """
    type: pulumi.Output[str]
    def __init__(__self__, resource_name, opts=None, endpoints=None, event_hub_partition_count=None, event_hub_retention_in_days=None, fallback_route=None, file_upload=None, ip_filter_rules=None, location=None, name=None, resource_group_name=None, routes=None, sku=None, tags=None, __props__=None, __name__=None, __opts__=None):
        """
        Manages an IotHub
        
        > **NOTE:** Endpoints can be defined either directly on the `iot.IoTHub` resource, or using the `azurerm_iothub_endpoint_*` resources - but the two ways of defining the endpoints cannot be used together. If both are used against the same IoTHub, spurious changes will occur. Also, defining a `azurerm_iothub_endpoint_*` resource and another endpoint of a different type directly on the `iot.IoTHub` resource is not supported.
        
        > **NOTE:** Routes can be defined either directly on the `iot.IoTHub` resource, or using the `iot.Route` resource - but the two cannot be used together. If both are used against the same IoTHub, spurious changes will occur.
        
        > **NOTE:** Fallback route can be defined either directly on the `iot.IoTHub` resource, or using the `iot.FallbackRoute` resource - but the two cannot be used together. If both are used against the same IoTHub, spurious changes will occur.
        
        :param str resource_name: The name of the resource.
        :param pulumi.ResourceOptions opts: Options for the resource.
        :param pulumi.Input[list] endpoints: An `endpoint` block as defined below.
        :param pulumi.Input[float] event_hub_partition_count: The number of device-to-cloud partitions used by backing event hubs. Must be between `2` and `128`.
        :param pulumi.Input[float] event_hub_retention_in_days: The event hub retention to use in days. Must be between `1` and `7`.
        :param pulumi.Input[dict] fallback_route: A `fallback_route` block as defined below. If the fallback route is enabled, messages that don't match any of the supplied routes are automatically sent to this route. Defaults to messages/events.
        :param pulumi.Input[dict] file_upload: A `file_upload` block as defined below.
        :param pulumi.Input[list] ip_filter_rules: One or more `ip_filter_rule` blocks as defined below.
        :param pulumi.Input[str] location: Specifies the supported Azure location where the resource has to be createc. Changing this forces a new resource to be created.
        :param pulumi.Input[str] name: Specifies the name of the IotHub resource. Changing this forces a new resource to be created.
        :param pulumi.Input[str] resource_group_name: The name of the resource group under which the IotHub resource has to be created. Changing this forces a new resource to be created.
        :param pulumi.Input[list] routes: A `route` block as defined below.
        :param pulumi.Input[dict] sku: A `sku` block as defined below.
        :param pulumi.Input[dict] tags: A mapping of tags to assign to the resource.
        
        The **endpoints** object supports the following:
        
          * `batch_frequency_in_seconds` (`pulumi.Input[float]`)
          * `connection_string` (`pulumi.Input[str]`)
          * `container_name` (`pulumi.Input[str]`)
          * `encoding` (`pulumi.Input[str]`)
          * `file_name_format` (`pulumi.Input[str]`)
          * `max_chunk_size_in_bytes` (`pulumi.Input[float]`)
          * `name` (`pulumi.Input[str]`) - Specifies the name of the IotHub resource. Changing this forces a new resource to be created.
          * `type` (`pulumi.Input[str]`)
        
        The **fallback_route** object supports the following:
        
          * `condition` (`pulumi.Input[str]`)
          * `enabled` (`pulumi.Input[bool]`)
          * `endpoint_names` (`pulumi.Input[list]`)
          * `source` (`pulumi.Input[str]`)
        
        The **file_upload** object supports the following:
        
          * `connection_string` (`pulumi.Input[str]`)
          * `container_name` (`pulumi.Input[str]`)
          * `default_ttl` (`pulumi.Input[str]`)
          * `lock_duration` (`pulumi.Input[str]`)
          * `max_delivery_count` (`pulumi.Input[float]`)
          * `notifications` (`pulumi.Input[bool]`)
          * `sasTtl` (`pulumi.Input[str]`)
        
        The **ip_filter_rules** object supports the following:
        
          * `action` (`pulumi.Input[str]`)
          * `ipMask` (`pulumi.Input[str]`)
          * `name` (`pulumi.Input[str]`) - Specifies the name of the IotHub resource. Changing this forces a new resource to be created.
        
        The **routes** object supports the following:
        
          * `condition` (`pulumi.Input[str]`)
          * `enabled` (`pulumi.Input[bool]`)
          * `endpoint_names` (`pulumi.Input[list]`)
          * `name` (`pulumi.Input[str]`) - Specifies the name of the IotHub resource. Changing this forces a new resource to be created.
          * `source` (`pulumi.Input[str]`)
        
        The **sku** object supports the following:
        
          * `capacity` (`pulumi.Input[float]`)
          * `name` (`pulumi.Input[str]`) - Specifies the name of the IotHub resource. Changing this forces a new resource to be created.

        > This content is derived from https://github.com/terraform-providers/terraform-provider-azurerm/blob/master/website/docs/r/iothub.html.markdown.
        """
        if __name__ is not None:
            warnings.warn("explicit use of __name__ is deprecated", DeprecationWarning)
            resource_name = __name__
        if __opts__ is not None:
            warnings.warn("explicit use of __opts__ is deprecated, use 'opts' instead", DeprecationWarning)
            opts = __opts__
        if opts is None:
            opts = pulumi.ResourceOptions()
        if not isinstance(opts, pulumi.ResourceOptions):
            raise TypeError('Expected resource options to be a ResourceOptions instance')
        if opts.version is None:
            opts.version = utilities.get_version()
        if opts.id is None:
            if __props__ is not None:
                raise TypeError('__props__ is only valid when passed in combination with a valid opts.id to get an existing resource')
            __props__ = dict()

            __props__['endpoints'] = endpoints
            __props__['event_hub_partition_count'] = event_hub_partition_count
            __props__['event_hub_retention_in_days'] = event_hub_retention_in_days
            __props__['fallback_route'] = fallback_route
            __props__['file_upload'] = file_upload
            __props__['ip_filter_rules'] = ip_filter_rules
            __props__['location'] = location
            __props__['name'] = name
            if resource_group_name is None:
                raise TypeError("Missing required property 'resource_group_name'")
            __props__['resource_group_name'] = resource_group_name
            __props__['routes'] = routes
            if sku is None:
                raise TypeError("Missing required property 'sku'")
            __props__['sku'] = sku
            __props__['tags'] = tags
            __props__['event_hub_events_endpoint'] = None
            __props__['event_hub_events_path'] = None
            __props__['event_hub_operations_endpoint'] = None
            __props__['event_hub_operations_path'] = None
            __props__['hostname'] = None
            __props__['shared_access_policies'] = None
            __props__['type'] = None
        super(IoTHub, __self__).__init__(
            'azure:iot/ioTHub:IoTHub',
            resource_name,
            __props__,
            opts)

    @staticmethod
    def get(resource_name, id, opts=None, endpoints=None, event_hub_events_endpoint=None, event_hub_events_path=None, event_hub_operations_endpoint=None, event_hub_operations_path=None, event_hub_partition_count=None, event_hub_retention_in_days=None, fallback_route=None, file_upload=None, hostname=None, ip_filter_rules=None, location=None, name=None, resource_group_name=None, routes=None, shared_access_policies=None, sku=None, tags=None, type=None):
        """
        Get an existing IoTHub resource's state with the given name, id, and optional extra
        properties used to qualify the lookup.
        
        :param str resource_name: The unique name of the resulting resource.
        :param str id: The unique provider ID of the resource to lookup.
        :param pulumi.ResourceOptions opts: Options for the resource.
        :param pulumi.Input[list] endpoints: An `endpoint` block as defined below.
        :param pulumi.Input[str] event_hub_events_endpoint: The EventHub compatible endpoint for events data
        :param pulumi.Input[str] event_hub_events_path: The EventHub compatible path for events data
        :param pulumi.Input[str] event_hub_operations_endpoint: The EventHub compatible endpoint for operational data
        :param pulumi.Input[str] event_hub_operations_path: The EventHub compatible path for operational data
        :param pulumi.Input[float] event_hub_partition_count: The number of device-to-cloud partitions used by backing event hubs. Must be between `2` and `128`.
        :param pulumi.Input[float] event_hub_retention_in_days: The event hub retention to use in days. Must be between `1` and `7`.
        :param pulumi.Input[dict] fallback_route: A `fallback_route` block as defined below. If the fallback route is enabled, messages that don't match any of the supplied routes are automatically sent to this route. Defaults to messages/events.
        :param pulumi.Input[dict] file_upload: A `file_upload` block as defined below.
        :param pulumi.Input[str] hostname: The hostname of the IotHub Resource.
        :param pulumi.Input[list] ip_filter_rules: One or more `ip_filter_rule` blocks as defined below.
        :param pulumi.Input[str] location: Specifies the supported Azure location where the resource has to be createc. Changing this forces a new resource to be created.
        :param pulumi.Input[str] name: Specifies the name of the IotHub resource. Changing this forces a new resource to be created.
        :param pulumi.Input[str] resource_group_name: The name of the resource group under which the IotHub resource has to be created. Changing this forces a new resource to be created.
        :param pulumi.Input[list] routes: A `route` block as defined below.
        :param pulumi.Input[list] shared_access_policies: One or more `shared_access_policy` blocks as defined below.
        :param pulumi.Input[dict] sku: A `sku` block as defined below.
        :param pulumi.Input[dict] tags: A mapping of tags to assign to the resource.
        
        The **endpoints** object supports the following:
        
          * `batch_frequency_in_seconds` (`pulumi.Input[float]`)
          * `connection_string` (`pulumi.Input[str]`)
          * `container_name` (`pulumi.Input[str]`)
          * `encoding` (`pulumi.Input[str]`)
          * `file_name_format` (`pulumi.Input[str]`)
          * `max_chunk_size_in_bytes` (`pulumi.Input[float]`)
          * `name` (`pulumi.Input[str]`) - Specifies the name of the IotHub resource. Changing this forces a new resource to be created.
          * `type` (`pulumi.Input[str]`)
        
        The **fallback_route** object supports the following:
        
          * `condition` (`pulumi.Input[str]`)
          * `enabled` (`pulumi.Input[bool]`)
          * `endpoint_names` (`pulumi.Input[list]`)
          * `source` (`pulumi.Input[str]`)
        
        The **file_upload** object supports the following:
        
          * `connection_string` (`pulumi.Input[str]`)
          * `container_name` (`pulumi.Input[str]`)
          * `default_ttl` (`pulumi.Input[str]`)
          * `lock_duration` (`pulumi.Input[str]`)
          * `max_delivery_count` (`pulumi.Input[float]`)
          * `notifications` (`pulumi.Input[bool]`)
          * `sasTtl` (`pulumi.Input[str]`)
        
        The **ip_filter_rules** object supports the following:
        
          * `action` (`pulumi.Input[str]`)
          * `ipMask` (`pulumi.Input[str]`)
          * `name` (`pulumi.Input[str]`) - Specifies the name of the IotHub resource. Changing this forces a new resource to be created.
        
        The **routes** object supports the following:
        
          * `condition` (`pulumi.Input[str]`)
          * `enabled` (`pulumi.Input[bool]`)
          * `endpoint_names` (`pulumi.Input[list]`)
          * `name` (`pulumi.Input[str]`) - Specifies the name of the IotHub resource. Changing this forces a new resource to be created.
          * `source` (`pulumi.Input[str]`)
        
        The **shared_access_policies** object supports the following:
        
          * `keyName` (`pulumi.Input[str]`) - The name of the shared access policy.
          * `permissions` (`pulumi.Input[str]`) - The permissions assigned to the shared access policy.
          * `primary_key` (`pulumi.Input[str]`) - The primary key.
          * `secondary_key` (`pulumi.Input[str]`) - The secondary key.
        
        The **sku** object supports the following:
        
          * `capacity` (`pulumi.Input[float]`)
          * `name` (`pulumi.Input[str]`) - Specifies the name of the IotHub resource. Changing this forces a new resource to be created.

        > This content is derived from https://github.com/terraform-providers/terraform-provider-azurerm/blob/master/website/docs/r/iothub.html.markdown.
        """
        opts = pulumi.ResourceOptions.merge(opts, pulumi.ResourceOptions(id=id))

        __props__ = dict()
        __props__["endpoints"] = endpoints
        __props__["event_hub_events_endpoint"] = event_hub_events_endpoint
        __props__["event_hub_events_path"] = event_hub_events_path
        __props__["event_hub_operations_endpoint"] = event_hub_operations_endpoint
        __props__["event_hub_operations_path"] = event_hub_operations_path
        __props__["event_hub_partition_count"] = event_hub_partition_count
        __props__["event_hub_retention_in_days"] = event_hub_retention_in_days
        __props__["fallback_route"] = fallback_route
        __props__["file_upload"] = file_upload
        __props__["hostname"] = hostname
        __props__["ip_filter_rules"] = ip_filter_rules
        __props__["location"] = location
        __props__["name"] = name
        __props__["resource_group_name"] = resource_group_name
        __props__["routes"] = routes
        __props__["shared_access_policies"] = shared_access_policies
        __props__["sku"] = sku
        __props__["tags"] = tags
        __props__["type"] = type
        return IoTHub(resource_name, opts=opts, __props__=__props__)
    def translate_output_property(self, prop):
        return tables._CAMEL_TO_SNAKE_CASE_TABLE.get(prop) or prop

    def translate_input_property(self, prop):
        return tables._SNAKE_TO_CAMEL_CASE_TABLE.get(prop) or prop

