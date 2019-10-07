# coding=utf-8
# *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
# *** Do not edit by hand unless you're certain you know what you are doing! ***

import json
import warnings
import pulumi
import pulumi.runtime
from typing import Union
from .. import utilities, tables

class Profile(pulumi.CustomResource):
    container_network_interface: pulumi.Output[dict]
    """
    A `container_network_interface` block as documented below.
    
      * `ip_configurations` (`list`)
    
        * `name` (`str`) - Specifies the name of the Network Profile. Changing this forces a new resource to be created.
        * `subnet_id` (`str`)
    
      * `name` (`str`) - Specifies the name of the Network Profile. Changing this forces a new resource to be created.
    """
    container_network_interface_ids: pulumi.Output[list]
    """
    One or more Resource IDs of Azure Container Network Interfaces.
    """
    location: pulumi.Output[str]
    """
    Specifies the supported Azure location where the resource exists. Changing this forces a new resource to be created.
    """
    name: pulumi.Output[str]
    """
    Specifies the name of the Network Profile. Changing this forces a new resource to be created.
    """
    resource_group_name: pulumi.Output[str]
    """
    The name of the resource group in which to create the resource. Changing this forces a new resource to be created.
    """
    tags: pulumi.Output[dict]
    """
    A mapping of tags to assign to the resource.
    """
    def __init__(__self__, resource_name, opts=None, container_network_interface=None, location=None, name=None, resource_group_name=None, tags=None, __props__=None, __name__=None, __opts__=None):
        """
        Manages an Azure Network Profile.
        
        :param str resource_name: The name of the resource.
        :param pulumi.ResourceOptions opts: Options for the resource.
        :param pulumi.Input[dict] container_network_interface: A `container_network_interface` block as documented below.
        :param pulumi.Input[str] location: Specifies the supported Azure location where the resource exists. Changing this forces a new resource to be created.
        :param pulumi.Input[str] name: Specifies the name of the Network Profile. Changing this forces a new resource to be created.
        :param pulumi.Input[str] resource_group_name: The name of the resource group in which to create the resource. Changing this forces a new resource to be created.
        :param pulumi.Input[dict] tags: A mapping of tags to assign to the resource.
        
        The **container_network_interface** object supports the following:
        
          * `ip_configurations` (`pulumi.Input[list]`)
        
            * `name` (`pulumi.Input[str]`) - Specifies the name of the Network Profile. Changing this forces a new resource to be created.
            * `subnet_id` (`pulumi.Input[str]`)
        
          * `name` (`pulumi.Input[str]`) - Specifies the name of the Network Profile. Changing this forces a new resource to be created.

        > This content is derived from https://github.com/terraform-providers/terraform-provider-azurerm/blob/master/website/docs/r/network_profile.html.markdown.
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

            if container_network_interface is None:
                raise TypeError("Missing required property 'container_network_interface'")
            __props__['container_network_interface'] = container_network_interface
            __props__['location'] = location
            __props__['name'] = name
            if resource_group_name is None:
                raise TypeError("Missing required property 'resource_group_name'")
            __props__['resource_group_name'] = resource_group_name
            __props__['tags'] = tags
            __props__['container_network_interface_ids'] = None
        super(Profile, __self__).__init__(
            'azure:network/profile:Profile',
            resource_name,
            __props__,
            opts)

    @staticmethod
    def get(resource_name, id, opts=None, container_network_interface=None, container_network_interface_ids=None, location=None, name=None, resource_group_name=None, tags=None):
        """
        Get an existing Profile resource's state with the given name, id, and optional extra
        properties used to qualify the lookup.
        
        :param str resource_name: The unique name of the resulting resource.
        :param str id: The unique provider ID of the resource to lookup.
        :param pulumi.ResourceOptions opts: Options for the resource.
        :param pulumi.Input[dict] container_network_interface: A `container_network_interface` block as documented below.
        :param pulumi.Input[list] container_network_interface_ids: One or more Resource IDs of Azure Container Network Interfaces.
        :param pulumi.Input[str] location: Specifies the supported Azure location where the resource exists. Changing this forces a new resource to be created.
        :param pulumi.Input[str] name: Specifies the name of the Network Profile. Changing this forces a new resource to be created.
        :param pulumi.Input[str] resource_group_name: The name of the resource group in which to create the resource. Changing this forces a new resource to be created.
        :param pulumi.Input[dict] tags: A mapping of tags to assign to the resource.
        
        The **container_network_interface** object supports the following:
        
          * `ip_configurations` (`pulumi.Input[list]`)
        
            * `name` (`pulumi.Input[str]`) - Specifies the name of the Network Profile. Changing this forces a new resource to be created.
            * `subnet_id` (`pulumi.Input[str]`)
        
          * `name` (`pulumi.Input[str]`) - Specifies the name of the Network Profile. Changing this forces a new resource to be created.

        > This content is derived from https://github.com/terraform-providers/terraform-provider-azurerm/blob/master/website/docs/r/network_profile.html.markdown.
        """
        opts = pulumi.ResourceOptions.merge(opts, pulumi.ResourceOptions(id=id))

        __props__ = dict()
        __props__["container_network_interface"] = container_network_interface
        __props__["container_network_interface_ids"] = container_network_interface_ids
        __props__["location"] = location
        __props__["name"] = name
        __props__["resource_group_name"] = resource_group_name
        __props__["tags"] = tags
        return Profile(resource_name, opts=opts, __props__=__props__)
    def translate_output_property(self, prop):
        return tables._CAMEL_TO_SNAKE_CASE_TABLE.get(prop) or prop

    def translate_input_property(self, prop):
        return tables._SNAKE_TO_CAMEL_CASE_TABLE.get(prop) or prop

