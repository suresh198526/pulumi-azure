# coding=utf-8
# *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
# *** Do not edit by hand unless you're certain you know what you are doing! ***

import warnings
import pulumi
import pulumi.runtime
from typing import Any, Mapping, Optional, Sequence, Union
from .. import _utilities, _tables
from . import outputs
from ._inputs import *

__all__ = ['KeyVault']


class KeyVault(pulumi.CustomResource):
    def __init__(__self__,
                 resource_name: str,
                 opts: Optional[pulumi.ResourceOptions] = None,
                 access_policies: Optional[pulumi.Input[Sequence[pulumi.Input[pulumi.InputType['KeyVaultAccessPolicyArgs']]]]] = None,
                 enable_rbac_authorization: Optional[pulumi.Input[bool]] = None,
                 enabled_for_deployment: Optional[pulumi.Input[bool]] = None,
                 enabled_for_disk_encryption: Optional[pulumi.Input[bool]] = None,
                 enabled_for_template_deployment: Optional[pulumi.Input[bool]] = None,
                 location: Optional[pulumi.Input[str]] = None,
                 name: Optional[pulumi.Input[str]] = None,
                 network_acls: Optional[pulumi.Input[pulumi.InputType['KeyVaultNetworkAclsArgs']]] = None,
                 purge_protection_enabled: Optional[pulumi.Input[bool]] = None,
                 resource_group_name: Optional[pulumi.Input[str]] = None,
                 sku_name: Optional[pulumi.Input[str]] = None,
                 soft_delete_enabled: Optional[pulumi.Input[bool]] = None,
                 soft_delete_retention_days: Optional[pulumi.Input[int]] = None,
                 tags: Optional[pulumi.Input[Mapping[str, pulumi.Input[str]]]] = None,
                 tenant_id: Optional[pulumi.Input[str]] = None,
                 __props__=None,
                 __name__=None,
                 __opts__=None):
        """
        Manages a Key Vault.

        ## Disclaimers

        > **Note:** It's possible to define Key Vault Access Policies both within the `keyvault.KeyVault` resource via the `access_policy` block and by using the `keyvault.AccessPolicy` resource. However it's not possible to use both methods to manage Access Policies within a KeyVault, since there'll be conflicts.

        > **Note:** This provi will automatically recover a soft-deleted Key Vault during Creation if one is found - you can opt out of this using the `features` configuration within the Provider configuration block.

        ## Example Usage

        ```python
        import pulumi
        import pulumi_azure as azure

        current = azure.core.get_client_config()
        example_resource_group = azure.core.ResourceGroup("exampleResourceGroup", location="West US")
        example_key_vault = azure.keyvault.KeyVault("exampleKeyVault",
            location=example_resource_group.location,
            resource_group_name=example_resource_group.name,
            enabled_for_disk_encryption=True,
            tenant_id=current.tenant_id,
            soft_delete_enabled=True,
            soft_delete_retention_days=7,
            purge_protection_enabled=False,
            sku_name="standard",
            access_policies=[azure.keyvault.KeyVaultAccessPolicyArgs(
                tenant_id=current.tenant_id,
                object_id=current.object_id,
                key_permissions=["get"],
                secret_permissions=["get"],
                storage_permissions=["get"],
            )],
            network_acls=azure.keyvault.KeyVaultNetworkAclsArgs(
                default_action="Deny",
                bypass="AzureServices",
            ),
            tags={
                "environment": "Testing",
            })
        ```

        :param str resource_name: The name of the resource.
        :param pulumi.ResourceOptions opts: Options for the resource.
        :param pulumi.Input[Sequence[pulumi.Input[pulumi.InputType['KeyVaultAccessPolicyArgs']]]] access_policies: A list of up to 16 objects describing access policies, as described below.
        :param pulumi.Input[bool] enable_rbac_authorization: Boolean flag to specify whether Azure Key Vault uses Role Based Access Control (RBAC) for authorization of data actions. Defaults to `false`.
        :param pulumi.Input[bool] enabled_for_deployment: Boolean flag to specify whether Azure Virtual Machines are permitted to retrieve certificates stored as secrets from the key vault. Defaults to `false`.
        :param pulumi.Input[bool] enabled_for_disk_encryption: Boolean flag to specify whether Azure Disk Encryption is permitted to retrieve secrets from the vault and unwrap keys. Defaults to `false`.
        :param pulumi.Input[bool] enabled_for_template_deployment: Boolean flag to specify whether Azure Resource Manager is permitted to retrieve secrets from the key vault. Defaults to `false`.
        :param pulumi.Input[str] location: Specifies the supported Azure location where the resource exists. Changing this forces a new resource to be created.
        :param pulumi.Input[str] name: Specifies the name of the Key Vault. Changing this forces a new resource to be created.
        :param pulumi.Input[pulumi.InputType['KeyVaultNetworkAclsArgs']] network_acls: A `network_acls` block as defined below.
        :param pulumi.Input[bool] purge_protection_enabled: Is Purge Protection enabled for this Key Vault? Defaults to `false`.
        :param pulumi.Input[str] resource_group_name: The name of the resource group in which to create the Key Vault. Changing this forces a new resource to be created.
        :param pulumi.Input[str] sku_name: The Name of the SKU used for this Key Vault. Possible values are `standard` and `premium`.
        :param pulumi.Input[bool] soft_delete_enabled: Should Soft Delete be enabled for this Key Vault? Defaults to `false`.
        :param pulumi.Input[int] soft_delete_retention_days: The number of days that items should be retained for once soft-deleted.
        :param pulumi.Input[Mapping[str, pulumi.Input[str]]] tags: A mapping of tags to assign to the resource.
        :param pulumi.Input[str] tenant_id: The Azure Active Directory tenant ID that should be used for authenticating requests to the key vault.
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

            __props__['access_policies'] = access_policies
            __props__['enable_rbac_authorization'] = enable_rbac_authorization
            __props__['enabled_for_deployment'] = enabled_for_deployment
            __props__['enabled_for_disk_encryption'] = enabled_for_disk_encryption
            __props__['enabled_for_template_deployment'] = enabled_for_template_deployment
            __props__['location'] = location
            __props__['name'] = name
            __props__['network_acls'] = network_acls
            __props__['purge_protection_enabled'] = purge_protection_enabled
            if resource_group_name is None:
                raise TypeError("Missing required property 'resource_group_name'")
            __props__['resource_group_name'] = resource_group_name
            if sku_name is None:
                raise TypeError("Missing required property 'sku_name'")
            __props__['sku_name'] = sku_name
            __props__['soft_delete_enabled'] = soft_delete_enabled
            __props__['soft_delete_retention_days'] = soft_delete_retention_days
            __props__['tags'] = tags
            if tenant_id is None:
                raise TypeError("Missing required property 'tenant_id'")
            __props__['tenant_id'] = tenant_id
            __props__['vault_uri'] = None
        super(KeyVault, __self__).__init__(
            'azure:keyvault/keyVault:KeyVault',
            resource_name,
            __props__,
            opts)

    @staticmethod
    def get(resource_name: str,
            id: pulumi.Input[str],
            opts: Optional[pulumi.ResourceOptions] = None,
            access_policies: Optional[pulumi.Input[Sequence[pulumi.Input[pulumi.InputType['KeyVaultAccessPolicyArgs']]]]] = None,
            enable_rbac_authorization: Optional[pulumi.Input[bool]] = None,
            enabled_for_deployment: Optional[pulumi.Input[bool]] = None,
            enabled_for_disk_encryption: Optional[pulumi.Input[bool]] = None,
            enabled_for_template_deployment: Optional[pulumi.Input[bool]] = None,
            location: Optional[pulumi.Input[str]] = None,
            name: Optional[pulumi.Input[str]] = None,
            network_acls: Optional[pulumi.Input[pulumi.InputType['KeyVaultNetworkAclsArgs']]] = None,
            purge_protection_enabled: Optional[pulumi.Input[bool]] = None,
            resource_group_name: Optional[pulumi.Input[str]] = None,
            sku_name: Optional[pulumi.Input[str]] = None,
            soft_delete_enabled: Optional[pulumi.Input[bool]] = None,
            soft_delete_retention_days: Optional[pulumi.Input[int]] = None,
            tags: Optional[pulumi.Input[Mapping[str, pulumi.Input[str]]]] = None,
            tenant_id: Optional[pulumi.Input[str]] = None,
            vault_uri: Optional[pulumi.Input[str]] = None) -> 'KeyVault':
        """
        Get an existing KeyVault resource's state with the given name, id, and optional extra
        properties used to qualify the lookup.

        :param str resource_name: The unique name of the resulting resource.
        :param pulumi.Input[str] id: The unique provider ID of the resource to lookup.
        :param pulumi.ResourceOptions opts: Options for the resource.
        :param pulumi.Input[Sequence[pulumi.Input[pulumi.InputType['KeyVaultAccessPolicyArgs']]]] access_policies: A list of up to 16 objects describing access policies, as described below.
        :param pulumi.Input[bool] enable_rbac_authorization: Boolean flag to specify whether Azure Key Vault uses Role Based Access Control (RBAC) for authorization of data actions. Defaults to `false`.
        :param pulumi.Input[bool] enabled_for_deployment: Boolean flag to specify whether Azure Virtual Machines are permitted to retrieve certificates stored as secrets from the key vault. Defaults to `false`.
        :param pulumi.Input[bool] enabled_for_disk_encryption: Boolean flag to specify whether Azure Disk Encryption is permitted to retrieve secrets from the vault and unwrap keys. Defaults to `false`.
        :param pulumi.Input[bool] enabled_for_template_deployment: Boolean flag to specify whether Azure Resource Manager is permitted to retrieve secrets from the key vault. Defaults to `false`.
        :param pulumi.Input[str] location: Specifies the supported Azure location where the resource exists. Changing this forces a new resource to be created.
        :param pulumi.Input[str] name: Specifies the name of the Key Vault. Changing this forces a new resource to be created.
        :param pulumi.Input[pulumi.InputType['KeyVaultNetworkAclsArgs']] network_acls: A `network_acls` block as defined below.
        :param pulumi.Input[bool] purge_protection_enabled: Is Purge Protection enabled for this Key Vault? Defaults to `false`.
        :param pulumi.Input[str] resource_group_name: The name of the resource group in which to create the Key Vault. Changing this forces a new resource to be created.
        :param pulumi.Input[str] sku_name: The Name of the SKU used for this Key Vault. Possible values are `standard` and `premium`.
        :param pulumi.Input[bool] soft_delete_enabled: Should Soft Delete be enabled for this Key Vault? Defaults to `false`.
        :param pulumi.Input[int] soft_delete_retention_days: The number of days that items should be retained for once soft-deleted.
        :param pulumi.Input[Mapping[str, pulumi.Input[str]]] tags: A mapping of tags to assign to the resource.
        :param pulumi.Input[str] tenant_id: The Azure Active Directory tenant ID that should be used for authenticating requests to the key vault.
        :param pulumi.Input[str] vault_uri: The URI of the Key Vault, used for performing operations on keys and secrets.
        """
        opts = pulumi.ResourceOptions.merge(opts, pulumi.ResourceOptions(id=id))

        __props__ = dict()

        __props__["access_policies"] = access_policies
        __props__["enable_rbac_authorization"] = enable_rbac_authorization
        __props__["enabled_for_deployment"] = enabled_for_deployment
        __props__["enabled_for_disk_encryption"] = enabled_for_disk_encryption
        __props__["enabled_for_template_deployment"] = enabled_for_template_deployment
        __props__["location"] = location
        __props__["name"] = name
        __props__["network_acls"] = network_acls
        __props__["purge_protection_enabled"] = purge_protection_enabled
        __props__["resource_group_name"] = resource_group_name
        __props__["sku_name"] = sku_name
        __props__["soft_delete_enabled"] = soft_delete_enabled
        __props__["soft_delete_retention_days"] = soft_delete_retention_days
        __props__["tags"] = tags
        __props__["tenant_id"] = tenant_id
        __props__["vault_uri"] = vault_uri
        return KeyVault(resource_name, opts=opts, __props__=__props__)

    @property
    @pulumi.getter(name="accessPolicies")
    def access_policies(self) -> pulumi.Output[Sequence['outputs.KeyVaultAccessPolicy']]:
        """
        A list of up to 16 objects describing access policies, as described below.
        """
        return pulumi.get(self, "access_policies")

    @property
    @pulumi.getter(name="enableRbacAuthorization")
    def enable_rbac_authorization(self) -> pulumi.Output[Optional[bool]]:
        """
        Boolean flag to specify whether Azure Key Vault uses Role Based Access Control (RBAC) for authorization of data actions. Defaults to `false`.
        """
        return pulumi.get(self, "enable_rbac_authorization")

    @property
    @pulumi.getter(name="enabledForDeployment")
    def enabled_for_deployment(self) -> pulumi.Output[Optional[bool]]:
        """
        Boolean flag to specify whether Azure Virtual Machines are permitted to retrieve certificates stored as secrets from the key vault. Defaults to `false`.
        """
        return pulumi.get(self, "enabled_for_deployment")

    @property
    @pulumi.getter(name="enabledForDiskEncryption")
    def enabled_for_disk_encryption(self) -> pulumi.Output[Optional[bool]]:
        """
        Boolean flag to specify whether Azure Disk Encryption is permitted to retrieve secrets from the vault and unwrap keys. Defaults to `false`.
        """
        return pulumi.get(self, "enabled_for_disk_encryption")

    @property
    @pulumi.getter(name="enabledForTemplateDeployment")
    def enabled_for_template_deployment(self) -> pulumi.Output[Optional[bool]]:
        """
        Boolean flag to specify whether Azure Resource Manager is permitted to retrieve secrets from the key vault. Defaults to `false`.
        """
        return pulumi.get(self, "enabled_for_template_deployment")

    @property
    @pulumi.getter
    def location(self) -> pulumi.Output[str]:
        """
        Specifies the supported Azure location where the resource exists. Changing this forces a new resource to be created.
        """
        return pulumi.get(self, "location")

    @property
    @pulumi.getter
    def name(self) -> pulumi.Output[str]:
        """
        Specifies the name of the Key Vault. Changing this forces a new resource to be created.
        """
        return pulumi.get(self, "name")

    @property
    @pulumi.getter(name="networkAcls")
    def network_acls(self) -> pulumi.Output['outputs.KeyVaultNetworkAcls']:
        """
        A `network_acls` block as defined below.
        """
        return pulumi.get(self, "network_acls")

    @property
    @pulumi.getter(name="purgeProtectionEnabled")
    def purge_protection_enabled(self) -> pulumi.Output[Optional[bool]]:
        """
        Is Purge Protection enabled for this Key Vault? Defaults to `false`.
        """
        return pulumi.get(self, "purge_protection_enabled")

    @property
    @pulumi.getter(name="resourceGroupName")
    def resource_group_name(self) -> pulumi.Output[str]:
        """
        The name of the resource group in which to create the Key Vault. Changing this forces a new resource to be created.
        """
        return pulumi.get(self, "resource_group_name")

    @property
    @pulumi.getter(name="skuName")
    def sku_name(self) -> pulumi.Output[str]:
        """
        The Name of the SKU used for this Key Vault. Possible values are `standard` and `premium`.
        """
        return pulumi.get(self, "sku_name")

    @property
    @pulumi.getter(name="softDeleteEnabled")
    def soft_delete_enabled(self) -> pulumi.Output[Optional[bool]]:
        """
        Should Soft Delete be enabled for this Key Vault? Defaults to `false`.
        """
        return pulumi.get(self, "soft_delete_enabled")

    @property
    @pulumi.getter(name="softDeleteRetentionDays")
    def soft_delete_retention_days(self) -> pulumi.Output[Optional[int]]:
        """
        The number of days that items should be retained for once soft-deleted.
        """
        return pulumi.get(self, "soft_delete_retention_days")

    @property
    @pulumi.getter
    def tags(self) -> pulumi.Output[Optional[Mapping[str, str]]]:
        """
        A mapping of tags to assign to the resource.
        """
        return pulumi.get(self, "tags")

    @property
    @pulumi.getter(name="tenantId")
    def tenant_id(self) -> pulumi.Output[str]:
        """
        The Azure Active Directory tenant ID that should be used for authenticating requests to the key vault.
        """
        return pulumi.get(self, "tenant_id")

    @property
    @pulumi.getter(name="vaultUri")
    def vault_uri(self) -> pulumi.Output[str]:
        """
        The URI of the Key Vault, used for performing operations on keys and secrets.
        """
        return pulumi.get(self, "vault_uri")

    def translate_output_property(self, prop):
        return _tables.CAMEL_TO_SNAKE_CASE_TABLE.get(prop) or prop

    def translate_input_property(self, prop):
        return _tables.SNAKE_TO_CAMEL_CASE_TABLE.get(prop) or prop

