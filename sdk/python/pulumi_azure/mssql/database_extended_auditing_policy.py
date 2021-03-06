# coding=utf-8
# *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
# *** Do not edit by hand unless you're certain you know what you are doing! ***

import warnings
import pulumi
import pulumi.runtime
from typing import Any, Mapping, Optional, Sequence, Union
from .. import _utilities, _tables

__all__ = ['DatabaseExtendedAuditingPolicy']


class DatabaseExtendedAuditingPolicy(pulumi.CustomResource):
    def __init__(__self__,
                 resource_name: str,
                 opts: Optional[pulumi.ResourceOptions] = None,
                 database_id: Optional[pulumi.Input[str]] = None,
                 retention_in_days: Optional[pulumi.Input[int]] = None,
                 storage_account_access_key: Optional[pulumi.Input[str]] = None,
                 storage_account_access_key_is_secondary: Optional[pulumi.Input[bool]] = None,
                 storage_endpoint: Optional[pulumi.Input[str]] = None,
                 __props__=None,
                 __name__=None,
                 __opts__=None):
        """
        Manages a Ms Sql Database Extended Auditing Policy.

        > **NOTE:** The Database Extended Auditing Policy Can be set inline here as well as with the mssql_database_extended_auditing_policy resource resource. You can only use one or the other and using both will cause a conflict.

        ## Example Usage

        ```python
        import pulumi
        import pulumi_azure as azure

        example_resource_group = azure.core.ResourceGroup("exampleResourceGroup", location="West Europe")
        example_server = azure.mssql.Server("exampleServer",
            resource_group_name=example_resource_group.name,
            location=example_resource_group.location,
            version="12.0",
            administrator_login="missadministrator",
            administrator_login_password="AdminPassword123!")
        example_database = azure.mssql.Database("exampleDatabase", server_id=example_server.id)
        example_account = azure.storage.Account("exampleAccount",
            resource_group_name=example_resource_group.name,
            location=example_resource_group.location,
            account_tier="Standard",
            account_replication_type="LRS")
        example_database_extended_auditing_policy = azure.mssql.DatabaseExtendedAuditingPolicy("exampleDatabaseExtendedAuditingPolicy",
            database_id=example_database.id,
            storage_endpoint=example_account.primary_blob_endpoint,
            storage_account_access_key=example_account.primary_access_key,
            storage_account_access_key_is_secondary=False,
            retention_in_days=6)
        ```

        ## Import

        Ms Sql Database Extended Auditing Policys can be imported using the `resource id`, e.g.

        ```sh
         $ pulumi import azure:mssql/databaseExtendedAuditingPolicy:DatabaseExtendedAuditingPolicy example /subscriptions/00000000-0000-0000-0000-000000000000/resourceGroups/group1/providers/Microsoft.Sql/servers/sqlServer1/databases/db1/extendedAuditingSettings/default
        ```

        :param str resource_name: The name of the resource.
        :param pulumi.ResourceOptions opts: Options for the resource.
        :param pulumi.Input[str] database_id: The ID of the sql database to set the extended auditing policy. Changing this forces a new resource to be created.
        :param pulumi.Input[int] retention_in_days: The number of days to retain logs for in the storage account.
        :param pulumi.Input[str] storage_account_access_key: The access key to use for the auditing storage account.
        :param pulumi.Input[bool] storage_account_access_key_is_secondary: Is `storage_account_access_key` value the storage's secondary key?
        :param pulumi.Input[str] storage_endpoint: The blob storage endpoint (e.g. https://MyAccount.blob.core.windows.net). This blob storage will hold all extended auditing logs.
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
            opts.version = _utilities.get_version()
        if opts.id is None:
            if __props__ is not None:
                raise TypeError('__props__ is only valid when passed in combination with a valid opts.id to get an existing resource')
            __props__ = dict()

            if database_id is None:
                raise TypeError("Missing required property 'database_id'")
            __props__['database_id'] = database_id
            __props__['retention_in_days'] = retention_in_days
            __props__['storage_account_access_key'] = storage_account_access_key
            __props__['storage_account_access_key_is_secondary'] = storage_account_access_key_is_secondary
            if storage_endpoint is None:
                raise TypeError("Missing required property 'storage_endpoint'")
            __props__['storage_endpoint'] = storage_endpoint
        super(DatabaseExtendedAuditingPolicy, __self__).__init__(
            'azure:mssql/databaseExtendedAuditingPolicy:DatabaseExtendedAuditingPolicy',
            resource_name,
            __props__,
            opts)

    @staticmethod
    def get(resource_name: str,
            id: pulumi.Input[str],
            opts: Optional[pulumi.ResourceOptions] = None,
            database_id: Optional[pulumi.Input[str]] = None,
            retention_in_days: Optional[pulumi.Input[int]] = None,
            storage_account_access_key: Optional[pulumi.Input[str]] = None,
            storage_account_access_key_is_secondary: Optional[pulumi.Input[bool]] = None,
            storage_endpoint: Optional[pulumi.Input[str]] = None) -> 'DatabaseExtendedAuditingPolicy':
        """
        Get an existing DatabaseExtendedAuditingPolicy resource's state with the given name, id, and optional extra
        properties used to qualify the lookup.

        :param str resource_name: The unique name of the resulting resource.
        :param pulumi.Input[str] id: The unique provider ID of the resource to lookup.
        :param pulumi.ResourceOptions opts: Options for the resource.
        :param pulumi.Input[str] database_id: The ID of the sql database to set the extended auditing policy. Changing this forces a new resource to be created.
        :param pulumi.Input[int] retention_in_days: The number of days to retain logs for in the storage account.
        :param pulumi.Input[str] storage_account_access_key: The access key to use for the auditing storage account.
        :param pulumi.Input[bool] storage_account_access_key_is_secondary: Is `storage_account_access_key` value the storage's secondary key?
        :param pulumi.Input[str] storage_endpoint: The blob storage endpoint (e.g. https://MyAccount.blob.core.windows.net). This blob storage will hold all extended auditing logs.
        """
        opts = pulumi.ResourceOptions.merge(opts, pulumi.ResourceOptions(id=id))

        __props__ = dict()

        __props__["database_id"] = database_id
        __props__["retention_in_days"] = retention_in_days
        __props__["storage_account_access_key"] = storage_account_access_key
        __props__["storage_account_access_key_is_secondary"] = storage_account_access_key_is_secondary
        __props__["storage_endpoint"] = storage_endpoint
        return DatabaseExtendedAuditingPolicy(resource_name, opts=opts, __props__=__props__)

    @property
    @pulumi.getter(name="databaseId")
    def database_id(self) -> pulumi.Output[str]:
        """
        The ID of the sql database to set the extended auditing policy. Changing this forces a new resource to be created.
        """
        return pulumi.get(self, "database_id")

    @property
    @pulumi.getter(name="retentionInDays")
    def retention_in_days(self) -> pulumi.Output[Optional[int]]:
        """
        The number of days to retain logs for in the storage account.
        """
        return pulumi.get(self, "retention_in_days")

    @property
    @pulumi.getter(name="storageAccountAccessKey")
    def storage_account_access_key(self) -> pulumi.Output[Optional[str]]:
        """
        The access key to use for the auditing storage account.
        """
        return pulumi.get(self, "storage_account_access_key")

    @property
    @pulumi.getter(name="storageAccountAccessKeyIsSecondary")
    def storage_account_access_key_is_secondary(self) -> pulumi.Output[Optional[bool]]:
        """
        Is `storage_account_access_key` value the storage's secondary key?
        """
        return pulumi.get(self, "storage_account_access_key_is_secondary")

    @property
    @pulumi.getter(name="storageEndpoint")
    def storage_endpoint(self) -> pulumi.Output[str]:
        """
        The blob storage endpoint (e.g. https://MyAccount.blob.core.windows.net). This blob storage will hold all extended auditing logs.
        """
        return pulumi.get(self, "storage_endpoint")

    def translate_output_property(self, prop):
        return _tables.CAMEL_TO_SNAKE_CASE_TABLE.get(prop) or prop

    def translate_input_property(self, prop):
        return _tables.SNAKE_TO_CAMEL_CASE_TABLE.get(prop) or prop

