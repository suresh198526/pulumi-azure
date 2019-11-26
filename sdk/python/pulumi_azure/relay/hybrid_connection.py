# coding=utf-8
# *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
# *** Do not edit by hand unless you're certain you know what you are doing! ***

import json
import warnings
import pulumi
import pulumi.runtime
from typing import Union
from .. import utilities, tables

class HybridConnection(pulumi.CustomResource):
    name: pulumi.Output[str]
    """
    Specifies the name of the Azure Relay Hybrid Connection. Changing this forces a new resource to be created.
    """
    relay_namespace_name: pulumi.Output[str]
    """
    The name of the Azure Relay in which to create the Azure Relay Hybrid Connection. Changing this forces a new resource to be created.
    """
    requires_client_authorization: pulumi.Output[bool]
    """
    Specify if client authorization is needed for this hybrid connection. True by default. Changing this forces a new resource to be created.
    """
    resource_group_name: pulumi.Output[str]
    """
    The name of the resource group in which to create the Azure Relay Hybrid Connection. Changing this forces a new resource to be created.
    """
    user_metadata: pulumi.Output[str]
    """
    The usermetadata is a placeholder to store user-defined string data for the hybrid connection endpoint. For example, it can be used to store descriptive data, such as a list of teams and their contact information. Also, user-defined configuration settings can be stored.
    """
    def __init__(__self__, resource_name, opts=None, name=None, relay_namespace_name=None, requires_client_authorization=None, resource_group_name=None, user_metadata=None, __props__=None, __name__=None, __opts__=None):
        """
        Manages an Azure Relay Hybrid Connection.
        
        :param str resource_name: The name of the resource.
        :param pulumi.ResourceOptions opts: Options for the resource.
        :param pulumi.Input[str] name: Specifies the name of the Azure Relay Hybrid Connection. Changing this forces a new resource to be created.
        :param pulumi.Input[str] relay_namespace_name: The name of the Azure Relay in which to create the Azure Relay Hybrid Connection. Changing this forces a new resource to be created.
        :param pulumi.Input[bool] requires_client_authorization: Specify if client authorization is needed for this hybrid connection. True by default. Changing this forces a new resource to be created.
        :param pulumi.Input[str] resource_group_name: The name of the resource group in which to create the Azure Relay Hybrid Connection. Changing this forces a new resource to be created.
        :param pulumi.Input[str] user_metadata: The usermetadata is a placeholder to store user-defined string data for the hybrid connection endpoint. For example, it can be used to store descriptive data, such as a list of teams and their contact information. Also, user-defined configuration settings can be stored.

        > This content is derived from https://github.com/terraform-providers/terraform-provider-azurerm/blob/master/website/docs/r/relay_hybrid_connection.html.markdown.
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

            __props__['name'] = name
            if relay_namespace_name is None:
                raise TypeError("Missing required property 'relay_namespace_name'")
            __props__['relay_namespace_name'] = relay_namespace_name
            __props__['requires_client_authorization'] = requires_client_authorization
            if resource_group_name is None:
                raise TypeError("Missing required property 'resource_group_name'")
            __props__['resource_group_name'] = resource_group_name
            __props__['user_metadata'] = user_metadata
        super(HybridConnection, __self__).__init__(
            'azure:relay/hybridConnection:HybridConnection',
            resource_name,
            __props__,
            opts)

    @staticmethod
    def get(resource_name, id, opts=None, name=None, relay_namespace_name=None, requires_client_authorization=None, resource_group_name=None, user_metadata=None):
        """
        Get an existing HybridConnection resource's state with the given name, id, and optional extra
        properties used to qualify the lookup.
        
        :param str resource_name: The unique name of the resulting resource.
        :param str id: The unique provider ID of the resource to lookup.
        :param pulumi.ResourceOptions opts: Options for the resource.
        :param pulumi.Input[str] name: Specifies the name of the Azure Relay Hybrid Connection. Changing this forces a new resource to be created.
        :param pulumi.Input[str] relay_namespace_name: The name of the Azure Relay in which to create the Azure Relay Hybrid Connection. Changing this forces a new resource to be created.
        :param pulumi.Input[bool] requires_client_authorization: Specify if client authorization is needed for this hybrid connection. True by default. Changing this forces a new resource to be created.
        :param pulumi.Input[str] resource_group_name: The name of the resource group in which to create the Azure Relay Hybrid Connection. Changing this forces a new resource to be created.
        :param pulumi.Input[str] user_metadata: The usermetadata is a placeholder to store user-defined string data for the hybrid connection endpoint. For example, it can be used to store descriptive data, such as a list of teams and their contact information. Also, user-defined configuration settings can be stored.

        > This content is derived from https://github.com/terraform-providers/terraform-provider-azurerm/blob/master/website/docs/r/relay_hybrid_connection.html.markdown.
        """
        opts = pulumi.ResourceOptions.merge(opts, pulumi.ResourceOptions(id=id))

        __props__ = dict()
        __props__["name"] = name
        __props__["relay_namespace_name"] = relay_namespace_name
        __props__["requires_client_authorization"] = requires_client_authorization
        __props__["resource_group_name"] = resource_group_name
        __props__["user_metadata"] = user_metadata
        return HybridConnection(resource_name, opts=opts, __props__=__props__)
    def translate_output_property(self, prop):
        return tables._CAMEL_TO_SNAKE_CASE_TABLE.get(prop) or prop

    def translate_input_property(self, prop):
        return tables._SNAKE_TO_CAMEL_CASE_TABLE.get(prop) or prop

