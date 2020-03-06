# coding=utf-8
# *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
# *** Do not edit by hand unless you're certain you know what you are doing! ***

import json
import warnings
import pulumi
import pulumi.runtime
from typing import Union
from .. import utilities, tables

class ZipBlob(pulumi.CustomResource):
    access_tier: pulumi.Output[str]
    content_type: pulumi.Output[str]
    metadata: pulumi.Output[dict]
    name: pulumi.Output[str]
    parallelism: pulumi.Output[float]
    size: pulumi.Output[float]
    content: pulumi.Output[pulumi.Archive]
    source_content: pulumi.Output[str]
    source_uri: pulumi.Output[str]
    storage_account_name: pulumi.Output[str]
    storage_container_name: pulumi.Output[str]
    type: pulumi.Output[str]
    url: pulumi.Output[str]
    def __init__(__self__, resource_name, opts=None, access_tier=None, content_type=None, metadata=None, name=None, parallelism=None, size=None, content=None, source_content=None, source_uri=None, storage_account_name=None, storage_container_name=None, type=None, __props__=None, __name__=None, __opts__=None):
        """
        Create a ZipBlob resource with the given unique name, props, and options.
        
        :param str resource_name: The name of the resource.
        :param pulumi.ResourceOptions opts: Options for the resource.
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

            __props__['access_tier'] = access_tier
            __props__['content_type'] = content_type
            __props__['metadata'] = metadata
            __props__['name'] = name
            __props__['parallelism'] = parallelism
            __props__['size'] = size
            __props__['content'] = content
            __props__['source_content'] = source_content
            __props__['source_uri'] = source_uri
            if storage_account_name is None:
                raise TypeError("Missing required property 'storage_account_name'")
            __props__['storage_account_name'] = storage_account_name
            if storage_container_name is None:
                raise TypeError("Missing required property 'storage_container_name'")
            __props__['storage_container_name'] = storage_container_name
            if type is None:
                raise TypeError("Missing required property 'type'")
            __props__['type'] = type
            __props__['url'] = None
        super(ZipBlob, __self__).__init__(
            'azure:storage/zipBlob:ZipBlob',
            resource_name,
            __props__,
            opts)

    @staticmethod
    def get(resource_name, id, opts=None, access_tier=None, content_type=None, metadata=None, name=None, parallelism=None, size=None, content=None, source_content=None, source_uri=None, storage_account_name=None, storage_container_name=None, type=None, url=None):
        """
        Get an existing ZipBlob resource's state with the given name, id, and optional extra
        properties used to qualify the lookup.
        
        :param str resource_name: The unique name of the resulting resource.
        :param str id: The unique provider ID of the resource to lookup.
        :param pulumi.ResourceOptions opts: Options for the resource.
        """
        opts = pulumi.ResourceOptions.merge(opts, pulumi.ResourceOptions(id=id))

        __props__ = dict()
        __props__["access_tier"] = access_tier
        __props__["content_type"] = content_type
        __props__["metadata"] = metadata
        __props__["name"] = name
        __props__["parallelism"] = parallelism
        __props__["size"] = size
        __props__["content"] = content
        __props__["source_content"] = source_content
        __props__["source_uri"] = source_uri
        __props__["storage_account_name"] = storage_account_name
        __props__["storage_container_name"] = storage_container_name
        __props__["type"] = type
        __props__["url"] = url
        return ZipBlob(resource_name, opts=opts, __props__=__props__)
    def translate_output_property(self, prop):
        return tables._CAMEL_TO_SNAKE_CASE_TABLE.get(prop) or prop

    def translate_input_property(self, prop):
        return tables._SNAKE_TO_CAMEL_CASE_TABLE.get(prop) or prop

