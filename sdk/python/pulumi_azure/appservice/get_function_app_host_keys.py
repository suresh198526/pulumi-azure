# coding=utf-8
# *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
# *** Do not edit by hand unless you're certain you know what you are doing! ***

import warnings
import pulumi
import pulumi.runtime
from typing import Any, Mapping, Optional, Sequence, Union
from .. import _utilities, _tables

__all__ = [
    'GetFunctionAppHostKeysResult',
    'AwaitableGetFunctionAppHostKeysResult',
    'get_function_app_host_keys',
]

@pulumi.output_type
class GetFunctionAppHostKeysResult:
    """
    A collection of values returned by getFunctionAppHostKeys.
    """
    def __init__(__self__, default_function_key=None, id=None, master_key=None, name=None, primary_key=None, resource_group_name=None):
        if default_function_key and not isinstance(default_function_key, str):
            raise TypeError("Expected argument 'default_function_key' to be a str")
        pulumi.set(__self__, "default_function_key", default_function_key)
        if id and not isinstance(id, str):
            raise TypeError("Expected argument 'id' to be a str")
        pulumi.set(__self__, "id", id)
        if master_key and not isinstance(master_key, str):
            raise TypeError("Expected argument 'master_key' to be a str")
        if master_key is not None:
            warnings.warn("This property has been renamed to `primary_key` and will be removed in v3.0 of the provider in support of HashiCorp's inclusive language policy which can be found here: https://discuss.hashicorp.com/t/inclusive-language-changes", DeprecationWarning)
            pulumi.log.warn("master_key is deprecated: This property has been renamed to `primary_key` and will be removed in v3.0 of the provider in support of HashiCorp's inclusive language policy which can be found here: https://discuss.hashicorp.com/t/inclusive-language-changes")

        pulumi.set(__self__, "master_key", master_key)
        if name and not isinstance(name, str):
            raise TypeError("Expected argument 'name' to be a str")
        pulumi.set(__self__, "name", name)
        if primary_key and not isinstance(primary_key, str):
            raise TypeError("Expected argument 'primary_key' to be a str")
        pulumi.set(__self__, "primary_key", primary_key)
        if resource_group_name and not isinstance(resource_group_name, str):
            raise TypeError("Expected argument 'resource_group_name' to be a str")
        pulumi.set(__self__, "resource_group_name", resource_group_name)

    @property
    @pulumi.getter(name="defaultFunctionKey")
    def default_function_key(self) -> str:
        """
        Function App resource's default function key.
        """
        return pulumi.get(self, "default_function_key")

    @property
    @pulumi.getter
    def id(self) -> str:
        """
        The provider-assigned unique ID for this managed resource.
        """
        return pulumi.get(self, "id")

    @property
    @pulumi.getter(name="masterKey")
    def master_key(self) -> str:
        """
        Function App resource's secret key
        """
        return pulumi.get(self, "master_key")

    @property
    @pulumi.getter
    def name(self) -> str:
        return pulumi.get(self, "name")

    @property
    @pulumi.getter(name="primaryKey")
    def primary_key(self) -> str:
        return pulumi.get(self, "primary_key")

    @property
    @pulumi.getter(name="resourceGroupName")
    def resource_group_name(self) -> str:
        return pulumi.get(self, "resource_group_name")


class AwaitableGetFunctionAppHostKeysResult(GetFunctionAppHostKeysResult):
    # pylint: disable=using-constant-test
    def __await__(self):
        if False:
            yield self
        return GetFunctionAppHostKeysResult(
            default_function_key=self.default_function_key,
            id=self.id,
            master_key=self.master_key,
            name=self.name,
            primary_key=self.primary_key,
            resource_group_name=self.resource_group_name)


def get_function_app_host_keys(name: Optional[str] = None,
                               resource_group_name: Optional[str] = None,
                               opts: Optional[pulumi.InvokeOptions] = None) -> AwaitableGetFunctionAppHostKeysResult:
    """
    Use this data source to fetch the Host Keys of an existing Function App

    ## Example Usage

    ```python
    import pulumi
    import pulumi_azure as azure

    example = azure.appservice.get_function_app_host_keys(name="example-function",
        resource_group_name=azurerm_resource_group["example"]["name"])
    ```

    > **Note:** All arguments including the secret value will be stored in the raw state as plain-text, including `default_function_key` and `master_key`. [Read more about sensitive data in state](https://www.terraform.io/docs/state/sensitive-data.html).


    :param str name: The name of the Function App.
    :param str resource_group_name: The name of the Resource Group where the Function App exists.
    """
    __args__ = dict()
    __args__['name'] = name
    __args__['resourceGroupName'] = resource_group_name
    if opts is None:
        opts = pulumi.InvokeOptions()
    if opts.version is None:
        opts.version = _utilities.get_version()
    __ret__ = pulumi.runtime.invoke('azure:appservice/getFunctionAppHostKeys:getFunctionAppHostKeys', __args__, opts=opts, typ=GetFunctionAppHostKeysResult).value

    return AwaitableGetFunctionAppHostKeysResult(
        default_function_key=__ret__.default_function_key,
        id=__ret__.id,
        master_key=__ret__.master_key,
        name=__ret__.name,
        primary_key=__ret__.primary_key,
        resource_group_name=__ret__.resource_group_name)
