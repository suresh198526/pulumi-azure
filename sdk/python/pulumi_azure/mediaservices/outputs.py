# coding=utf-8
# *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
# *** Do not edit by hand unless you're certain you know what you are doing! ***

import warnings
import pulumi
import pulumi.runtime
from typing import Any, Mapping, Optional, Sequence, Union
from .. import _utilities, _tables

__all__ = [
    'AccountIdentity',
    'AccountStorageAccount',
]

@pulumi.output_type
class AccountIdentity(dict):
    def __init__(__self__, *,
                 principal_id: Optional[str] = None,
                 tenant_id: Optional[str] = None,
                 type: Optional[str] = None):
        """
        :param str principal_id: The Principal ID associated with this Managed Service Identity.
        :param str tenant_id: The Tenant ID associated with this Managed Service Identity.
        :param str type: Specifies the type of Managed Service Identity that should be configured on this Media Services Account. Possible value is  `SystemAssigned`.
        """
        if principal_id is not None:
            pulumi.set(__self__, "principal_id", principal_id)
        if tenant_id is not None:
            pulumi.set(__self__, "tenant_id", tenant_id)
        if type is not None:
            pulumi.set(__self__, "type", type)

    @property
    @pulumi.getter(name="principalId")
    def principal_id(self) -> Optional[str]:
        """
        The Principal ID associated with this Managed Service Identity.
        """
        return pulumi.get(self, "principal_id")

    @property
    @pulumi.getter(name="tenantId")
    def tenant_id(self) -> Optional[str]:
        """
        The Tenant ID associated with this Managed Service Identity.
        """
        return pulumi.get(self, "tenant_id")

    @property
    @pulumi.getter
    def type(self) -> Optional[str]:
        """
        Specifies the type of Managed Service Identity that should be configured on this Media Services Account. Possible value is  `SystemAssigned`.
        """
        return pulumi.get(self, "type")

    def _translate_property(self, prop):
        return _tables.CAMEL_TO_SNAKE_CASE_TABLE.get(prop) or prop


@pulumi.output_type
class AccountStorageAccount(dict):
    def __init__(__self__, *,
                 id: str,
                 is_primary: Optional[bool] = None):
        """
        :param str id: Specifies the ID of the Storage Account that will be associated with the Media Services instance.
        :param bool is_primary: Specifies whether the storage account should be the primary account or not. Defaults to `false`.
        """
        pulumi.set(__self__, "id", id)
        if is_primary is not None:
            pulumi.set(__self__, "is_primary", is_primary)

    @property
    @pulumi.getter
    def id(self) -> str:
        """
        Specifies the ID of the Storage Account that will be associated with the Media Services instance.
        """
        return pulumi.get(self, "id")

    @property
    @pulumi.getter(name="isPrimary")
    def is_primary(self) -> Optional[bool]:
        """
        Specifies whether the storage account should be the primary account or not. Defaults to `false`.
        """
        return pulumi.get(self, "is_primary")

    def _translate_property(self, prop):
        return _tables.CAMEL_TO_SNAKE_CASE_TABLE.get(prop) or prop


