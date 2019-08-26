# coding=utf-8
# *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
# *** Do not edit by hand unless you're certain you know what you are doing! ***

import json
import warnings
import pulumi
import pulumi.runtime
from typing import Union
from .. import utilities, tables

class Server(pulumi.CustomResource):
    administrator_login: pulumi.Output[str]
    """
    The Administrator Login for the MariaDB Server. Changing this forces a new resource to be created.
    """
    administrator_login_password: pulumi.Output[str]
    """
    The Password associated with the `administrator_login` for the MariaDB Server.
    """
    fqdn: pulumi.Output[str]
    """
    The FQDN of the MariaDB Server.
    """
    location: pulumi.Output[str]
    """
    Specifies the supported Azure location where the resource exists. Changing this forces a new resource to be created.
    """
    name: pulumi.Output[str]
    """
    Specifies the name of the MariaDB Server. Changing this forces a new resource to be created.
    """
    resource_group_name: pulumi.Output[str]
    """
    The name of the resource group in which to create the MariaDB Server. Changing this forces a new resource to be created.
    """
    sku: pulumi.Output[dict]
    """
    A `sku` block as defined below.
    """
    ssl_enforcement: pulumi.Output[str]
    """
    Specifies if SSL should be enforced on connections. Possible values are `Enabled` and `Disabled`.
    """
    storage_profile: pulumi.Output[dict]
    """
    A `storage_profile` block as defined below.
    """
    tags: pulumi.Output[dict]
    """
    A mapping of tags to assign to the resource.
    """
    version: pulumi.Output[str]
    """
    Specifies the version of MariaDB to use. The valid value is `10.2`. Changing this forces a new resource to be created.
    """
    def __init__(__self__, resource_name, opts=None, administrator_login=None, administrator_login_password=None, location=None, name=None, resource_group_name=None, sku=None, ssl_enforcement=None, storage_profile=None, tags=None, version=None, __props__=None, __name__=None, __opts__=None):
        """
        Manages a MariaDB Server.
        
        > **NOTE** MariaDB Server is currently in Public Preview. You can find more information, including [how to register for the Public Preview here](https://azure.microsoft.com/en-us/updates/mariadb-public-preview/).
        
        :param str resource_name: The name of the resource.
        :param pulumi.ResourceOptions opts: Options for the resource.
        :param pulumi.Input[str] administrator_login: The Administrator Login for the MariaDB Server. Changing this forces a new resource to be created.
        :param pulumi.Input[str] administrator_login_password: The Password associated with the `administrator_login` for the MariaDB Server.
        :param pulumi.Input[str] location: Specifies the supported Azure location where the resource exists. Changing this forces a new resource to be created.
        :param pulumi.Input[str] name: Specifies the name of the MariaDB Server. Changing this forces a new resource to be created.
        :param pulumi.Input[str] resource_group_name: The name of the resource group in which to create the MariaDB Server. Changing this forces a new resource to be created.
        :param pulumi.Input[dict] sku: A `sku` block as defined below.
        :param pulumi.Input[str] ssl_enforcement: Specifies if SSL should be enforced on connections. Possible values are `Enabled` and `Disabled`.
        :param pulumi.Input[dict] storage_profile: A `storage_profile` block as defined below.
        :param pulumi.Input[dict] tags: A mapping of tags to assign to the resource.
        :param pulumi.Input[str] version: Specifies the version of MariaDB to use. The valid value is `10.2`. Changing this forces a new resource to be created.

        > This content is derived from https://github.com/terraform-providers/terraform-provider-azurerm/blob/master/website/docs/r/mariadb_server.html.markdown.
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

            if administrator_login is None:
                raise TypeError("Missing required property 'administrator_login'")
            __props__['administrator_login'] = administrator_login
            if administrator_login_password is None:
                raise TypeError("Missing required property 'administrator_login_password'")
            __props__['administrator_login_password'] = administrator_login_password
            __props__['location'] = location
            __props__['name'] = name
            if resource_group_name is None:
                raise TypeError("Missing required property 'resource_group_name'")
            __props__['resource_group_name'] = resource_group_name
            if sku is None:
                raise TypeError("Missing required property 'sku'")
            __props__['sku'] = sku
            if ssl_enforcement is None:
                raise TypeError("Missing required property 'ssl_enforcement'")
            __props__['ssl_enforcement'] = ssl_enforcement
            if storage_profile is None:
                raise TypeError("Missing required property 'storage_profile'")
            __props__['storage_profile'] = storage_profile
            __props__['tags'] = tags
            if version is None:
                raise TypeError("Missing required property 'version'")
            __props__['version'] = version
            __props__['fqdn'] = None
        super(Server, __self__).__init__(
            'azure:mariadb/server:Server',
            resource_name,
            __props__,
            opts)

    @staticmethod
    def get(resource_name, id, opts=None, administrator_login=None, administrator_login_password=None, fqdn=None, location=None, name=None, resource_group_name=None, sku=None, ssl_enforcement=None, storage_profile=None, tags=None, version=None):
        """
        Get an existing Server resource's state with the given name, id, and optional extra
        properties used to qualify the lookup.
        
        :param str resource_name: The unique name of the resulting resource.
        :param str id: The unique provider ID of the resource to lookup.
        :param pulumi.ResourceOptions opts: Options for the resource.
        :param pulumi.Input[str] administrator_login: The Administrator Login for the MariaDB Server. Changing this forces a new resource to be created.
        :param pulumi.Input[str] administrator_login_password: The Password associated with the `administrator_login` for the MariaDB Server.
        :param pulumi.Input[str] fqdn: The FQDN of the MariaDB Server.
        :param pulumi.Input[str] location: Specifies the supported Azure location where the resource exists. Changing this forces a new resource to be created.
        :param pulumi.Input[str] name: Specifies the name of the MariaDB Server. Changing this forces a new resource to be created.
        :param pulumi.Input[str] resource_group_name: The name of the resource group in which to create the MariaDB Server. Changing this forces a new resource to be created.
        :param pulumi.Input[dict] sku: A `sku` block as defined below.
        :param pulumi.Input[str] ssl_enforcement: Specifies if SSL should be enforced on connections. Possible values are `Enabled` and `Disabled`.
        :param pulumi.Input[dict] storage_profile: A `storage_profile` block as defined below.
        :param pulumi.Input[dict] tags: A mapping of tags to assign to the resource.
        :param pulumi.Input[str] version: Specifies the version of MariaDB to use. The valid value is `10.2`. Changing this forces a new resource to be created.

        > This content is derived from https://github.com/terraform-providers/terraform-provider-azurerm/blob/master/website/docs/r/mariadb_server.html.markdown.
        """
        opts = pulumi.ResourceOptions.merge(opts, pulumi.ResourceOptions(id=id))

        __props__ = dict()
        __props__["administrator_login"] = administrator_login
        __props__["administrator_login_password"] = administrator_login_password
        __props__["fqdn"] = fqdn
        __props__["location"] = location
        __props__["name"] = name
        __props__["resource_group_name"] = resource_group_name
        __props__["sku"] = sku
        __props__["ssl_enforcement"] = ssl_enforcement
        __props__["storage_profile"] = storage_profile
        __props__["tags"] = tags
        __props__["version"] = version
        return Server(resource_name, opts=opts, __props__=__props__)
    def translate_output_property(self, prop):
        return tables._CAMEL_TO_SNAKE_CASE_TABLE.get(prop) or prop

    def translate_input_property(self, prop):
        return tables._SNAKE_TO_CAMEL_CASE_TABLE.get(prop) or prop

