# coding=utf-8
# *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
# *** Do not edit by hand unless you're certain you know what you are doing! ***

import json
import warnings
import pulumi
import pulumi.runtime
from typing import Union
from .. import utilities, tables

class Certificate(pulumi.CustomResource):
    automation_account_name: pulumi.Output[str]
    """
    The name of the automation account in which the Certificate is created. Changing this forces a new resource to be created.
    """
    base64: pulumi.Output[str]
    """
    Base64 encoded value of the certificate.
    """
    description: pulumi.Output[str]
    """
    The description of this Automation Certificate.
    """
    exportable: pulumi.Output[bool]
    name: pulumi.Output[str]
    """
    Specifies the name of the Certificate. Changing this forces a new resource to be created.
    """
    resource_group_name: pulumi.Output[str]
    """
    The name of the resource group in which the Certificate is created. Changing this forces a new resource to be created.
    """
    thumbprint: pulumi.Output[str]
    """
    The thumbprint for the certificate.
    """
    def __init__(__self__, resource_name, opts=None, automation_account_name=None, base64=None, description=None, name=None, resource_group_name=None, __props__=None, __name__=None, __opts__=None):
        """
        Manages an Automation Certificate.
        
        :param str resource_name: The name of the resource.
        :param pulumi.ResourceOptions opts: Options for the resource.
        :param pulumi.Input[str] automation_account_name: The name of the automation account in which the Certificate is created. Changing this forces a new resource to be created.
        :param pulumi.Input[str] base64: Base64 encoded value of the certificate.
        :param pulumi.Input[str] description: The description of this Automation Certificate.
        :param pulumi.Input[str] name: Specifies the name of the Certificate. Changing this forces a new resource to be created.
        :param pulumi.Input[str] resource_group_name: The name of the resource group in which the Certificate is created. Changing this forces a new resource to be created.

        > This content is derived from https://github.com/terraform-providers/terraform-provider-azurerm/blob/master/website/docs/r/automation_certificate.html.markdown.
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

            if automation_account_name is None:
                raise TypeError("Missing required property 'automation_account_name'")
            __props__['automation_account_name'] = automation_account_name
            if base64 is None:
                raise TypeError("Missing required property 'base64'")
            __props__['base64'] = base64
            __props__['description'] = description
            __props__['name'] = name
            if resource_group_name is None:
                raise TypeError("Missing required property 'resource_group_name'")
            __props__['resource_group_name'] = resource_group_name
            __props__['exportable'] = None
            __props__['thumbprint'] = None
        super(Certificate, __self__).__init__(
            'azure:automation/certificate:Certificate',
            resource_name,
            __props__,
            opts)

    @staticmethod
    def get(resource_name, id, opts=None, automation_account_name=None, base64=None, description=None, exportable=None, name=None, resource_group_name=None, thumbprint=None):
        """
        Get an existing Certificate resource's state with the given name, id, and optional extra
        properties used to qualify the lookup.
        
        :param str resource_name: The unique name of the resulting resource.
        :param str id: The unique provider ID of the resource to lookup.
        :param pulumi.ResourceOptions opts: Options for the resource.
        :param pulumi.Input[str] automation_account_name: The name of the automation account in which the Certificate is created. Changing this forces a new resource to be created.
        :param pulumi.Input[str] base64: Base64 encoded value of the certificate.
        :param pulumi.Input[str] description: The description of this Automation Certificate.
        :param pulumi.Input[str] name: Specifies the name of the Certificate. Changing this forces a new resource to be created.
        :param pulumi.Input[str] resource_group_name: The name of the resource group in which the Certificate is created. Changing this forces a new resource to be created.
        :param pulumi.Input[str] thumbprint: The thumbprint for the certificate.

        > This content is derived from https://github.com/terraform-providers/terraform-provider-azurerm/blob/master/website/docs/r/automation_certificate.html.markdown.
        """
        opts = pulumi.ResourceOptions.merge(opts, pulumi.ResourceOptions(id=id))

        __props__ = dict()
        __props__["automation_account_name"] = automation_account_name
        __props__["base64"] = base64
        __props__["description"] = description
        __props__["exportable"] = exportable
        __props__["name"] = name
        __props__["resource_group_name"] = resource_group_name
        __props__["thumbprint"] = thumbprint
        return Certificate(resource_name, opts=opts, __props__=__props__)
    def translate_output_property(self, prop):
        return tables._CAMEL_TO_SNAKE_CASE_TABLE.get(prop) or prop

    def translate_input_property(self, prop):
        return tables._SNAKE_TO_CAMEL_CASE_TABLE.get(prop) or prop

