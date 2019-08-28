# coding=utf-8
# *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
# *** Do not edit by hand unless you're certain you know what you are doing! ***

import json
import warnings
import pulumi
import pulumi.runtime
from typing import Union
from .. import utilities, tables

class Assignment(pulumi.CustomResource):
    name: pulumi.Output[str]
    """
    A unique UUID/GUID for this Role Assignment - one will be generated if not specified. Changing this forces a new resource to be created.
    """
    principal_id: pulumi.Output[str]
    """
    The ID of the Principal (User, Group, Service Principal, or Application) to assign the Role Definition to. Changing this forces a new resource to be created. 
    """
    role_definition_id: pulumi.Output[str]
    """
    The Scoped-ID of the Role Definition. Changing this forces a new resource to be created. Conflicts with `role_definition_name`.
    """
    role_definition_name: pulumi.Output[str]
    """
    The name of a built-in Role. Changing this forces a new resource to be created. Conflicts with `role_definition_id`.
    """
    scope: pulumi.Output[str]
    """
    The scope at which the Role Assignment applies to, such as `/subscriptions/0b1f6471-1bf0-4dda-aec3-111122223333`, `/subscriptions/0b1f6471-1bf0-4dda-aec3-111122223333/resourceGroups/myGroup`, or `/subscriptions/0b1f6471-1bf0-4dda-aec3-111122223333/resourceGroups/myGroup/providers/Microsoft.Compute/virtualMachines/myVM`, or `/providers/Microsoft.Management/managementGroups/myMG`. Changing this forces a new resource to be created.
    """
    def __init__(__self__, resource_name, opts=None, name=None, principal_id=None, role_definition_id=None, role_definition_name=None, scope=None, __props__=None, __name__=None, __opts__=None):
        """
        Assigns a given Principal (User or Application) to a given Role.
        
        :param str resource_name: The name of the resource.
        :param pulumi.ResourceOptions opts: Options for the resource.
        :param pulumi.Input[str] name: A unique UUID/GUID for this Role Assignment - one will be generated if not specified. Changing this forces a new resource to be created.
        :param pulumi.Input[str] principal_id: The ID of the Principal (User, Group, Service Principal, or Application) to assign the Role Definition to. Changing this forces a new resource to be created. 
        :param pulumi.Input[str] role_definition_id: The Scoped-ID of the Role Definition. Changing this forces a new resource to be created. Conflicts with `role_definition_name`.
        :param pulumi.Input[str] role_definition_name: The name of a built-in Role. Changing this forces a new resource to be created. Conflicts with `role_definition_id`.
        :param pulumi.Input[str] scope: The scope at which the Role Assignment applies to, such as `/subscriptions/0b1f6471-1bf0-4dda-aec3-111122223333`, `/subscriptions/0b1f6471-1bf0-4dda-aec3-111122223333/resourceGroups/myGroup`, or `/subscriptions/0b1f6471-1bf0-4dda-aec3-111122223333/resourceGroups/myGroup/providers/Microsoft.Compute/virtualMachines/myVM`, or `/providers/Microsoft.Management/managementGroups/myMG`. Changing this forces a new resource to be created.

        > This content is derived from https://github.com/terraform-providers/terraform-provider-azurerm/blob/master/website/docs/r/role_assignment.html.markdown.
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
            if principal_id is None:
                raise TypeError("Missing required property 'principal_id'")
            __props__['principal_id'] = principal_id
            __props__['role_definition_id'] = role_definition_id
            __props__['role_definition_name'] = role_definition_name
            if scope is None:
                raise TypeError("Missing required property 'scope'")
            __props__['scope'] = scope
        alias_opts = pulumi.ResourceOptions(aliases=[pulumi.Alias(type_="azure:role/assignment:Assignment")])
        opts = pulumi.ResourceOptions.merge(opts, alias_opts)
        super(Assignment, __self__).__init__(
            'azure:authorization/assignment:Assignment',
            resource_name,
            __props__,
            opts)

    @staticmethod
    def get(resource_name, id, opts=None, name=None, principal_id=None, role_definition_id=None, role_definition_name=None, scope=None):
        """
        Get an existing Assignment resource's state with the given name, id, and optional extra
        properties used to qualify the lookup.
        
        :param str resource_name: The unique name of the resulting resource.
        :param str id: The unique provider ID of the resource to lookup.
        :param pulumi.ResourceOptions opts: Options for the resource.
        :param pulumi.Input[str] name: A unique UUID/GUID for this Role Assignment - one will be generated if not specified. Changing this forces a new resource to be created.
        :param pulumi.Input[str] principal_id: The ID of the Principal (User, Group, Service Principal, or Application) to assign the Role Definition to. Changing this forces a new resource to be created. 
        :param pulumi.Input[str] role_definition_id: The Scoped-ID of the Role Definition. Changing this forces a new resource to be created. Conflicts with `role_definition_name`.
        :param pulumi.Input[str] role_definition_name: The name of a built-in Role. Changing this forces a new resource to be created. Conflicts with `role_definition_id`.
        :param pulumi.Input[str] scope: The scope at which the Role Assignment applies to, such as `/subscriptions/0b1f6471-1bf0-4dda-aec3-111122223333`, `/subscriptions/0b1f6471-1bf0-4dda-aec3-111122223333/resourceGroups/myGroup`, or `/subscriptions/0b1f6471-1bf0-4dda-aec3-111122223333/resourceGroups/myGroup/providers/Microsoft.Compute/virtualMachines/myVM`, or `/providers/Microsoft.Management/managementGroups/myMG`. Changing this forces a new resource to be created.

        > This content is derived from https://github.com/terraform-providers/terraform-provider-azurerm/blob/master/website/docs/r/role_assignment.html.markdown.
        """
        opts = pulumi.ResourceOptions.merge(opts, pulumi.ResourceOptions(id=id))

        __props__ = dict()
        __props__["name"] = name
        __props__["principal_id"] = principal_id
        __props__["role_definition_id"] = role_definition_id
        __props__["role_definition_name"] = role_definition_name
        __props__["scope"] = scope
        return Assignment(resource_name, opts=opts, __props__=__props__)
    def translate_output_property(self, prop):
        return tables._CAMEL_TO_SNAKE_CASE_TABLE.get(prop) or prop

    def translate_input_property(self, prop):
        return tables._SNAKE_TO_CAMEL_CASE_TABLE.get(prop) or prop
