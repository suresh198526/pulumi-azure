# coding=utf-8
# *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
# *** Do not edit by hand unless you're certain you know what you are doing! ***

import json
import warnings
import pulumi
import pulumi.runtime
from typing import Union
from .. import utilities, tables

class IntegrationRuntimeManaged(pulumi.CustomResource):
    catalog_info: pulumi.Output[dict]
    """
    A `catalog_info` block as defined below.
    
      * `administratorLogin` (`str`)
      * `administratorPassword` (`str`)
      * `pricing_tier` (`str`)
      * `serverEndpoint` (`str`)
    """
    custom_setup_script: pulumi.Output[dict]
    """
    A `custom_setup_script` block as defined below.
    
      * `blobContainerUri` (`str`)
      * `sasToken` (`str`)
    """
    data_factory_name: pulumi.Output[str]
    """
    Specifies the name of the Data Factory the Managed Integration Runtime belongs to. Changing this forces a new resource to be created.
    """
    description: pulumi.Output[str]
    edition: pulumi.Output[str]
    """
    The Managed Integration Runtime edition. Valid values are `Standard` and `Enterprise`. Defaults to `Standard`.
    """
    license_type: pulumi.Output[str]
    """
    The type of the license that is used. Valid values are `LicenseIncluded` and `BasePrize`. Defaults to `LicenseIncluded`.
    """
    location: pulumi.Output[str]
    """
    Specifies the supported Azure location where the resource exists. Changing this forces a new resource to be created.
    """
    max_parallel_executions_per_node: pulumi.Output[float]
    """
    Defines the maximum parallel executions per node. Defaults to `1`. Max is `16`.
    """
    name: pulumi.Output[str]
    """
    Specifies the name of the Managed Integration Runtime. Changing this forces a new resource to be created. Must be globally unique. See the [Microsoft documentation](https://docs.microsoft.com/en-us/azure/data-factory/naming-rules) for all restrictions.
    """
    node_size: pulumi.Output[str]
    """
    The size of the nodes on which the Managed Integration Runtime runs. Valid values are: `Standard_D2_v3`, `Standard_D4_v3`, `Standard_D8_v3`, `Standard_D16_v3`, `Standard_D32_v3`, `Standard_D64_v3`, `Standard_E2_v3`, `Standard_E4_v3`, `Standard_E8_v3`, `Standard_E16_v3`, `Standard_E32_v3`, `Standard_E64_v3`, `Standard_D1_v2`, `Standard_D2_v2`, `Standard_D3_v2`, `Standard_D4_v2`, `Standard_A4_v2` and `Standard_A8_v2`
    """
    number_of_nodes: pulumi.Output[float]
    """
    Number of nodes for the Managed Integration Runtime. Max is `10`. Defaults to `1`.
    """
    resource_group_name: pulumi.Output[str]
    """
    The name of the resource group in which to create the Managed Integration Runtime. Changing this forces a new resource to be created.
    """
    vnet_integration: pulumi.Output[dict]
    """
    A `vnet_integration` block as defined below.
    
      * `subnetName` (`str`)
      * `vnetId` (`str`)
    """
    def __init__(__self__, resource_name, opts=None, catalog_info=None, custom_setup_script=None, data_factory_name=None, description=None, edition=None, license_type=None, location=None, max_parallel_executions_per_node=None, name=None, node_size=None, number_of_nodes=None, resource_group_name=None, vnet_integration=None, __props__=None, __name__=None, __opts__=None):
        """
        Manages an Azure Data Factory Managed Integration Runtime.
        
        :param str resource_name: The name of the resource.
        :param pulumi.ResourceOptions opts: Options for the resource.
        :param pulumi.Input[dict] catalog_info: A `catalog_info` block as defined below.
        :param pulumi.Input[dict] custom_setup_script: A `custom_setup_script` block as defined below.
        :param pulumi.Input[str] data_factory_name: Specifies the name of the Data Factory the Managed Integration Runtime belongs to. Changing this forces a new resource to be created.
        :param pulumi.Input[str] edition: The Managed Integration Runtime edition. Valid values are `Standard` and `Enterprise`. Defaults to `Standard`.
        :param pulumi.Input[str] license_type: The type of the license that is used. Valid values are `LicenseIncluded` and `BasePrize`. Defaults to `LicenseIncluded`.
        :param pulumi.Input[str] location: Specifies the supported Azure location where the resource exists. Changing this forces a new resource to be created.
        :param pulumi.Input[float] max_parallel_executions_per_node: Defines the maximum parallel executions per node. Defaults to `1`. Max is `16`.
        :param pulumi.Input[str] name: Specifies the name of the Managed Integration Runtime. Changing this forces a new resource to be created. Must be globally unique. See the [Microsoft documentation](https://docs.microsoft.com/en-us/azure/data-factory/naming-rules) for all restrictions.
        :param pulumi.Input[str] node_size: The size of the nodes on which the Managed Integration Runtime runs. Valid values are: `Standard_D2_v3`, `Standard_D4_v3`, `Standard_D8_v3`, `Standard_D16_v3`, `Standard_D32_v3`, `Standard_D64_v3`, `Standard_E2_v3`, `Standard_E4_v3`, `Standard_E8_v3`, `Standard_E16_v3`, `Standard_E32_v3`, `Standard_E64_v3`, `Standard_D1_v2`, `Standard_D2_v2`, `Standard_D3_v2`, `Standard_D4_v2`, `Standard_A4_v2` and `Standard_A8_v2`
        :param pulumi.Input[float] number_of_nodes: Number of nodes for the Managed Integration Runtime. Max is `10`. Defaults to `1`.
        :param pulumi.Input[str] resource_group_name: The name of the resource group in which to create the Managed Integration Runtime. Changing this forces a new resource to be created.
        :param pulumi.Input[dict] vnet_integration: A `vnet_integration` block as defined below.
        
        The **catalog_info** object supports the following:
        
          * `administratorLogin` (`pulumi.Input[str]`)
          * `administratorPassword` (`pulumi.Input[str]`)
          * `pricing_tier` (`pulumi.Input[str]`)
          * `serverEndpoint` (`pulumi.Input[str]`)
        
        The **custom_setup_script** object supports the following:
        
          * `blobContainerUri` (`pulumi.Input[str]`)
          * `sasToken` (`pulumi.Input[str]`)
        
        The **vnet_integration** object supports the following:
        
          * `subnetName` (`pulumi.Input[str]`)
          * `vnetId` (`pulumi.Input[str]`)

        > This content is derived from https://github.com/terraform-providers/terraform-provider-azurerm/blob/master/website/docs/r/data_factory_integration_runtime_managed.html.markdown.
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

            __props__['catalog_info'] = catalog_info
            __props__['custom_setup_script'] = custom_setup_script
            if data_factory_name is None:
                raise TypeError("Missing required property 'data_factory_name'")
            __props__['data_factory_name'] = data_factory_name
            __props__['description'] = description
            __props__['edition'] = edition
            __props__['license_type'] = license_type
            __props__['location'] = location
            __props__['max_parallel_executions_per_node'] = max_parallel_executions_per_node
            __props__['name'] = name
            if node_size is None:
                raise TypeError("Missing required property 'node_size'")
            __props__['node_size'] = node_size
            __props__['number_of_nodes'] = number_of_nodes
            if resource_group_name is None:
                raise TypeError("Missing required property 'resource_group_name'")
            __props__['resource_group_name'] = resource_group_name
            __props__['vnet_integration'] = vnet_integration
        super(IntegrationRuntimeManaged, __self__).__init__(
            'azure:datafactory/integrationRuntimeManaged:IntegrationRuntimeManaged',
            resource_name,
            __props__,
            opts)

    @staticmethod
    def get(resource_name, id, opts=None, catalog_info=None, custom_setup_script=None, data_factory_name=None, description=None, edition=None, license_type=None, location=None, max_parallel_executions_per_node=None, name=None, node_size=None, number_of_nodes=None, resource_group_name=None, vnet_integration=None):
        """
        Get an existing IntegrationRuntimeManaged resource's state with the given name, id, and optional extra
        properties used to qualify the lookup.
        
        :param str resource_name: The unique name of the resulting resource.
        :param str id: The unique provider ID of the resource to lookup.
        :param pulumi.ResourceOptions opts: Options for the resource.
        :param pulumi.Input[dict] catalog_info: A `catalog_info` block as defined below.
        :param pulumi.Input[dict] custom_setup_script: A `custom_setup_script` block as defined below.
        :param pulumi.Input[str] data_factory_name: Specifies the name of the Data Factory the Managed Integration Runtime belongs to. Changing this forces a new resource to be created.
        :param pulumi.Input[str] edition: The Managed Integration Runtime edition. Valid values are `Standard` and `Enterprise`. Defaults to `Standard`.
        :param pulumi.Input[str] license_type: The type of the license that is used. Valid values are `LicenseIncluded` and `BasePrize`. Defaults to `LicenseIncluded`.
        :param pulumi.Input[str] location: Specifies the supported Azure location where the resource exists. Changing this forces a new resource to be created.
        :param pulumi.Input[float] max_parallel_executions_per_node: Defines the maximum parallel executions per node. Defaults to `1`. Max is `16`.
        :param pulumi.Input[str] name: Specifies the name of the Managed Integration Runtime. Changing this forces a new resource to be created. Must be globally unique. See the [Microsoft documentation](https://docs.microsoft.com/en-us/azure/data-factory/naming-rules) for all restrictions.
        :param pulumi.Input[str] node_size: The size of the nodes on which the Managed Integration Runtime runs. Valid values are: `Standard_D2_v3`, `Standard_D4_v3`, `Standard_D8_v3`, `Standard_D16_v3`, `Standard_D32_v3`, `Standard_D64_v3`, `Standard_E2_v3`, `Standard_E4_v3`, `Standard_E8_v3`, `Standard_E16_v3`, `Standard_E32_v3`, `Standard_E64_v3`, `Standard_D1_v2`, `Standard_D2_v2`, `Standard_D3_v2`, `Standard_D4_v2`, `Standard_A4_v2` and `Standard_A8_v2`
        :param pulumi.Input[float] number_of_nodes: Number of nodes for the Managed Integration Runtime. Max is `10`. Defaults to `1`.
        :param pulumi.Input[str] resource_group_name: The name of the resource group in which to create the Managed Integration Runtime. Changing this forces a new resource to be created.
        :param pulumi.Input[dict] vnet_integration: A `vnet_integration` block as defined below.
        
        The **catalog_info** object supports the following:
        
          * `administratorLogin` (`pulumi.Input[str]`)
          * `administratorPassword` (`pulumi.Input[str]`)
          * `pricing_tier` (`pulumi.Input[str]`)
          * `serverEndpoint` (`pulumi.Input[str]`)
        
        The **custom_setup_script** object supports the following:
        
          * `blobContainerUri` (`pulumi.Input[str]`)
          * `sasToken` (`pulumi.Input[str]`)
        
        The **vnet_integration** object supports the following:
        
          * `subnetName` (`pulumi.Input[str]`)
          * `vnetId` (`pulumi.Input[str]`)

        > This content is derived from https://github.com/terraform-providers/terraform-provider-azurerm/blob/master/website/docs/r/data_factory_integration_runtime_managed.html.markdown.
        """
        opts = pulumi.ResourceOptions.merge(opts, pulumi.ResourceOptions(id=id))

        __props__ = dict()
        __props__["catalog_info"] = catalog_info
        __props__["custom_setup_script"] = custom_setup_script
        __props__["data_factory_name"] = data_factory_name
        __props__["description"] = description
        __props__["edition"] = edition
        __props__["license_type"] = license_type
        __props__["location"] = location
        __props__["max_parallel_executions_per_node"] = max_parallel_executions_per_node
        __props__["name"] = name
        __props__["node_size"] = node_size
        __props__["number_of_nodes"] = number_of_nodes
        __props__["resource_group_name"] = resource_group_name
        __props__["vnet_integration"] = vnet_integration
        return IntegrationRuntimeManaged(resource_name, opts=opts, __props__=__props__)
    def translate_output_property(self, prop):
        return tables._CAMEL_TO_SNAKE_CASE_TABLE.get(prop) or prop

    def translate_input_property(self, prop):
        return tables._SNAKE_TO_CAMEL_CASE_TABLE.get(prop) or prop

