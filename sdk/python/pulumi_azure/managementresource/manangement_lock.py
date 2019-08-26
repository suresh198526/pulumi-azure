# coding=utf-8
# *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
# *** Do not edit by hand unless you're certain you know what you are doing! ***

import json
import warnings
import pulumi
import pulumi.runtime
from typing import Union
from .. import utilities, tables

class ManangementLock(pulumi.CustomResource):
    lock_level: pulumi.Output[str]
    """
    Specifies the Level to be used for this Lock. Possible values are `CanNotDelete` and `ReadOnly`. Changing this forces a new resource to be created.
    """
    name: pulumi.Output[str]
    """
    Specifies the name of the Management Lock. Changing this forces a new resource to be created.
    """
    notes: pulumi.Output[str]
    """
    Specifies some notes about the lock. Maximum of 512 characters. Changing this forces a new resource to be created.
    """
    scope: pulumi.Output[str]
    """
    Specifies the scope at which the Management Lock should be created. Changing this forces a new resource to be created.
    """
    def __init__(__self__, resource_name, opts=None, lock_level=None, name=None, notes=None, scope=None, __props__=None, __name__=None, __opts__=None):
        """
        Manages a Management Lock which is scoped to a Subscription, Resource Group or Resource.
        
        :param str resource_name: The name of the resource.
        :param pulumi.ResourceOptions opts: Options for the resource.
        :param pulumi.Input[str] lock_level: Specifies the Level to be used for this Lock. Possible values are `CanNotDelete` and `ReadOnly`. Changing this forces a new resource to be created.
        :param pulumi.Input[str] name: Specifies the name of the Management Lock. Changing this forces a new resource to be created.
        :param pulumi.Input[str] notes: Specifies some notes about the lock. Maximum of 512 characters. Changing this forces a new resource to be created.
        :param pulumi.Input[str] scope: Specifies the scope at which the Management Lock should be created. Changing this forces a new resource to be created.

        > This content is derived from https://github.com/terraform-providers/terraform-provider-azurerm/blob/master/website/docs/r/management_lock_legacy.html.markdown.
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

            if lock_level is None:
                raise TypeError("Missing required property 'lock_level'")
            __props__['lock_level'] = lock_level
            __props__['name'] = name
            __props__['notes'] = notes
            if scope is None:
                raise TypeError("Missing required property 'scope'")
            __props__['scope'] = scope
        super(ManangementLock, __self__).__init__(
            'azure:managementresource/manangementLock:ManangementLock',
            resource_name,
            __props__,
            opts)

    @staticmethod
    def get(resource_name, id, opts=None, lock_level=None, name=None, notes=None, scope=None):
        """
        Get an existing ManangementLock resource's state with the given name, id, and optional extra
        properties used to qualify the lookup.
        
        :param str resource_name: The unique name of the resulting resource.
        :param str id: The unique provider ID of the resource to lookup.
        :param pulumi.ResourceOptions opts: Options for the resource.
        :param pulumi.Input[str] lock_level: Specifies the Level to be used for this Lock. Possible values are `CanNotDelete` and `ReadOnly`. Changing this forces a new resource to be created.
        :param pulumi.Input[str] name: Specifies the name of the Management Lock. Changing this forces a new resource to be created.
        :param pulumi.Input[str] notes: Specifies some notes about the lock. Maximum of 512 characters. Changing this forces a new resource to be created.
        :param pulumi.Input[str] scope: Specifies the scope at which the Management Lock should be created. Changing this forces a new resource to be created.

        > This content is derived from https://github.com/terraform-providers/terraform-provider-azurerm/blob/master/website/docs/r/management_lock_legacy.html.markdown.
        """
        opts = pulumi.ResourceOptions.merge(opts, pulumi.ResourceOptions(id=id))

        __props__ = dict()
        __props__["lock_level"] = lock_level
        __props__["name"] = name
        __props__["notes"] = notes
        __props__["scope"] = scope
        return ManangementLock(resource_name, opts=opts, __props__=__props__)
    def translate_output_property(self, prop):
        return tables._CAMEL_TO_SNAKE_CASE_TABLE.get(prop) or prop

    def translate_input_property(self, prop):
        return tables._SNAKE_TO_CAMEL_CASE_TABLE.get(prop) or prop

