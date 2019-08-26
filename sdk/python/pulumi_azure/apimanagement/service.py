# coding=utf-8
# *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
# *** Do not edit by hand unless you're certain you know what you are doing! ***

import json
import warnings
import pulumi
import pulumi.runtime
from typing import Union
from .. import utilities, tables

class Service(pulumi.CustomResource):
    additional_location: pulumi.Output[dict]
    """
    One or more `additional_location` blocks as defined below.
    """
    certificates: pulumi.Output[list]
    """
    One or more (up to 10) `certificate` blocks as defined below.
    """
    gateway_regional_url: pulumi.Output[str]
    """
    The URL of the Regional Gateway for the API Management Service in the specified region.
    """
    gateway_url: pulumi.Output[str]
    """
    The URL of the Gateway for the API Management Service.
    """
    hostname_configuration: pulumi.Output[dict]
    """
    A `hostname_configuration` block as defined below.
    """
    identity: pulumi.Output[dict]
    """
    An `identity` block is documented below.
    """
    location: pulumi.Output[str]
    """
    The Azure location where the API Management Service exists. Changing this forces a new resource to be created.
    """
    management_api_url: pulumi.Output[str]
    """
    The URL for the Management API associated with this API Management service.
    """
    name: pulumi.Output[str]
    """
    The name of the API Management Service. Changing this forces a new resource to be created.
    """
    notification_sender_email: pulumi.Output[str]
    """
    Email address from which the notification will be sent.
    """
    policy: pulumi.Output[dict]
    """
    A `policy` block as defined below.
    """
    portal_url: pulumi.Output[str]
    """
    The URL for the Publisher Portal associated with this API Management service.
    """
    public_ip_addresses: pulumi.Output[list]
    """
    Public Static Load Balanced IP addresses of the API Management service in the additional location. Available only for Basic, Standard and Premium SKU.
    """
    publisher_email: pulumi.Output[str]
    """
    The email of publisher/company.
    """
    publisher_name: pulumi.Output[str]
    """
    The name of publisher/company.
    """
    resource_group_name: pulumi.Output[str]
    """
    The name of the Resource Group in which the API Management Service should be exist. Changing this forces a new resource to be created.
    """
    scm_url: pulumi.Output[str]
    """
    The URL for the SCM (Source Code Management) Endpoint associated with this API Management service.
    """
    security: pulumi.Output[dict]
    """
    A `security` block as defined below.
    """
    sign_in: pulumi.Output[dict]
    """
    A `sign_in` block as defined below.
    """
    sign_up: pulumi.Output[dict]
    """
    A `sign_up` block as defined below.
    """
    sku: pulumi.Output[dict]
    """
    A `sku` block as documented below.
    """
    tags: pulumi.Output[dict]
    """
    A mapping of tags assigned to the resource.
    """
    def __init__(__self__, resource_name, opts=None, additional_location=None, certificates=None, hostname_configuration=None, identity=None, location=None, name=None, notification_sender_email=None, policy=None, publisher_email=None, publisher_name=None, resource_group_name=None, security=None, sign_in=None, sign_up=None, sku=None, tags=None, __props__=None, __name__=None, __opts__=None):
        """
        Manages an API Management Service.
        
        :param str resource_name: The name of the resource.
        :param pulumi.ResourceOptions opts: Options for the resource.
        :param pulumi.Input[dict] additional_location: One or more `additional_location` blocks as defined below.
        :param pulumi.Input[list] certificates: One or more (up to 10) `certificate` blocks as defined below.
        :param pulumi.Input[dict] hostname_configuration: A `hostname_configuration` block as defined below.
        :param pulumi.Input[dict] identity: An `identity` block is documented below.
        :param pulumi.Input[str] location: The Azure location where the API Management Service exists. Changing this forces a new resource to be created.
        :param pulumi.Input[str] name: The name of the API Management Service. Changing this forces a new resource to be created.
        :param pulumi.Input[str] notification_sender_email: Email address from which the notification will be sent.
        :param pulumi.Input[dict] policy: A `policy` block as defined below.
        :param pulumi.Input[str] publisher_email: The email of publisher/company.
        :param pulumi.Input[str] publisher_name: The name of publisher/company.
        :param pulumi.Input[str] resource_group_name: The name of the Resource Group in which the API Management Service should be exist. Changing this forces a new resource to be created.
        :param pulumi.Input[dict] security: A `security` block as defined below.
        :param pulumi.Input[dict] sign_in: A `sign_in` block as defined below.
        :param pulumi.Input[dict] sign_up: A `sign_up` block as defined below.
        :param pulumi.Input[dict] sku: A `sku` block as documented below.
        :param pulumi.Input[dict] tags: A mapping of tags assigned to the resource.

        > This content is derived from https://github.com/terraform-providers/terraform-provider-azurerm/blob/master/website/docs/r/api_management.html.markdown.
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

            __props__['additional_location'] = additional_location
            __props__['certificates'] = certificates
            __props__['hostname_configuration'] = hostname_configuration
            __props__['identity'] = identity
            __props__['location'] = location
            __props__['name'] = name
            __props__['notification_sender_email'] = notification_sender_email
            __props__['policy'] = policy
            if publisher_email is None:
                raise TypeError("Missing required property 'publisher_email'")
            __props__['publisher_email'] = publisher_email
            if publisher_name is None:
                raise TypeError("Missing required property 'publisher_name'")
            __props__['publisher_name'] = publisher_name
            if resource_group_name is None:
                raise TypeError("Missing required property 'resource_group_name'")
            __props__['resource_group_name'] = resource_group_name
            __props__['security'] = security
            __props__['sign_in'] = sign_in
            __props__['sign_up'] = sign_up
            if sku is None:
                raise TypeError("Missing required property 'sku'")
            __props__['sku'] = sku
            __props__['tags'] = tags
            __props__['gateway_regional_url'] = None
            __props__['gateway_url'] = None
            __props__['management_api_url'] = None
            __props__['portal_url'] = None
            __props__['public_ip_addresses'] = None
            __props__['scm_url'] = None
        super(Service, __self__).__init__(
            'azure:apimanagement/service:Service',
            resource_name,
            __props__,
            opts)

    @staticmethod
    def get(resource_name, id, opts=None, additional_location=None, certificates=None, gateway_regional_url=None, gateway_url=None, hostname_configuration=None, identity=None, location=None, management_api_url=None, name=None, notification_sender_email=None, policy=None, portal_url=None, public_ip_addresses=None, publisher_email=None, publisher_name=None, resource_group_name=None, scm_url=None, security=None, sign_in=None, sign_up=None, sku=None, tags=None):
        """
        Get an existing Service resource's state with the given name, id, and optional extra
        properties used to qualify the lookup.
        
        :param str resource_name: The unique name of the resulting resource.
        :param str id: The unique provider ID of the resource to lookup.
        :param pulumi.ResourceOptions opts: Options for the resource.
        :param pulumi.Input[dict] additional_location: One or more `additional_location` blocks as defined below.
        :param pulumi.Input[list] certificates: One or more (up to 10) `certificate` blocks as defined below.
        :param pulumi.Input[str] gateway_regional_url: The URL of the Regional Gateway for the API Management Service in the specified region.
        :param pulumi.Input[str] gateway_url: The URL of the Gateway for the API Management Service.
        :param pulumi.Input[dict] hostname_configuration: A `hostname_configuration` block as defined below.
        :param pulumi.Input[dict] identity: An `identity` block is documented below.
        :param pulumi.Input[str] location: The Azure location where the API Management Service exists. Changing this forces a new resource to be created.
        :param pulumi.Input[str] management_api_url: The URL for the Management API associated with this API Management service.
        :param pulumi.Input[str] name: The name of the API Management Service. Changing this forces a new resource to be created.
        :param pulumi.Input[str] notification_sender_email: Email address from which the notification will be sent.
        :param pulumi.Input[dict] policy: A `policy` block as defined below.
        :param pulumi.Input[str] portal_url: The URL for the Publisher Portal associated with this API Management service.
        :param pulumi.Input[list] public_ip_addresses: Public Static Load Balanced IP addresses of the API Management service in the additional location. Available only for Basic, Standard and Premium SKU.
        :param pulumi.Input[str] publisher_email: The email of publisher/company.
        :param pulumi.Input[str] publisher_name: The name of publisher/company.
        :param pulumi.Input[str] resource_group_name: The name of the Resource Group in which the API Management Service should be exist. Changing this forces a new resource to be created.
        :param pulumi.Input[str] scm_url: The URL for the SCM (Source Code Management) Endpoint associated with this API Management service.
        :param pulumi.Input[dict] security: A `security` block as defined below.
        :param pulumi.Input[dict] sign_in: A `sign_in` block as defined below.
        :param pulumi.Input[dict] sign_up: A `sign_up` block as defined below.
        :param pulumi.Input[dict] sku: A `sku` block as documented below.
        :param pulumi.Input[dict] tags: A mapping of tags assigned to the resource.

        > This content is derived from https://github.com/terraform-providers/terraform-provider-azurerm/blob/master/website/docs/r/api_management.html.markdown.
        """
        opts = pulumi.ResourceOptions.merge(opts, pulumi.ResourceOptions(id=id))

        __props__ = dict()
        __props__["additional_location"] = additional_location
        __props__["certificates"] = certificates
        __props__["gateway_regional_url"] = gateway_regional_url
        __props__["gateway_url"] = gateway_url
        __props__["hostname_configuration"] = hostname_configuration
        __props__["identity"] = identity
        __props__["location"] = location
        __props__["management_api_url"] = management_api_url
        __props__["name"] = name
        __props__["notification_sender_email"] = notification_sender_email
        __props__["policy"] = policy
        __props__["portal_url"] = portal_url
        __props__["public_ip_addresses"] = public_ip_addresses
        __props__["publisher_email"] = publisher_email
        __props__["publisher_name"] = publisher_name
        __props__["resource_group_name"] = resource_group_name
        __props__["scm_url"] = scm_url
        __props__["security"] = security
        __props__["sign_in"] = sign_in
        __props__["sign_up"] = sign_up
        __props__["sku"] = sku
        __props__["tags"] = tags
        return Service(resource_name, opts=opts, __props__=__props__)
    def translate_output_property(self, prop):
        return tables._CAMEL_TO_SNAKE_CASE_TABLE.get(prop) or prop

    def translate_input_property(self, prop):
        return tables._SNAKE_TO_CAMEL_CASE_TABLE.get(prop) or prop

