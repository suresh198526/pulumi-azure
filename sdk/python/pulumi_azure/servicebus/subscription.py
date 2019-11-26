# coding=utf-8
# *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
# *** Do not edit by hand unless you're certain you know what you are doing! ***

import json
import warnings
import pulumi
import pulumi.runtime
from typing import Union
from .. import utilities, tables

class Subscription(pulumi.CustomResource):
    auto_delete_on_idle: pulumi.Output[str]
    """
    The idle interval after which the
    Subscription is automatically deleted, minimum of 5 minutes. Provided in the
    TimeSpan format.
    """
    dead_lettering_on_filter_evaluation_exceptions: pulumi.Output[bool]
    dead_lettering_on_message_expiration: pulumi.Output[bool]
    """
    Boolean flag which controls
    whether the Subscription has dead letter support when a message expires. Defaults
    to false.
    """
    default_message_ttl: pulumi.Output[str]
    """
    The TTL of messages sent to this Subscription
    if no TTL value is set on the message itself. Provided in the TimeSpan
    format.
    """
    enable_batched_operations: pulumi.Output[bool]
    """
    Boolean flag which controls whether the
    Subscription supports batched operations. Defaults to false.
    """
    forward_dead_lettered_messages_to: pulumi.Output[str]
    """
    The name of a Queue or Topic to automatically forward Dead Letter messages to.
    """
    forward_to: pulumi.Output[str]
    """
    The name of a Queue or Topic to automatically forward messages to.
    """
    location: pulumi.Output[str]
    """
    Specifies the supported Azure location where the resource exists.
    Changing this forces a new resource to be created.
    """
    lock_duration: pulumi.Output[str]
    """
    The lock duration for the subscription, maximum
    supported value is 5 minutes. Defaults to 1 minute.
    """
    max_delivery_count: pulumi.Output[float]
    """
    The maximum number of deliveries.
    """
    name: pulumi.Output[str]
    """
    Specifies the name of the ServiceBus Subscription resource.
    Changing this forces a new resource to be created.
    """
    namespace_name: pulumi.Output[str]
    """
    The name of the ServiceBus Namespace to create
    this Subscription in. Changing this forces a new resource to be created.
    """
    requires_session: pulumi.Output[bool]
    """
    Boolean flag which controls whether this Subscription
    supports the concept of a session. Defaults to false. Changing this forces a
    new resource to be created.
    """
    resource_group_name: pulumi.Output[str]
    """
    The name of the resource group in which to
    create the namespace. Changing this forces a new resource to be created.
    """
    topic_name: pulumi.Output[str]
    """
    The name of the ServiceBus Topic to create
    this Subscription in. Changing this forces a new resource to be created.
    """
    def __init__(__self__, resource_name, opts=None, auto_delete_on_idle=None, dead_lettering_on_filter_evaluation_exceptions=None, dead_lettering_on_message_expiration=None, default_message_ttl=None, enable_batched_operations=None, forward_dead_lettered_messages_to=None, forward_to=None, location=None, lock_duration=None, max_delivery_count=None, name=None, namespace_name=None, requires_session=None, resource_group_name=None, topic_name=None, __props__=None, __name__=None, __opts__=None):
        """
        Manages a ServiceBus Subscription.
        
        :param str resource_name: The name of the resource.
        :param pulumi.ResourceOptions opts: Options for the resource.
        :param pulumi.Input[str] auto_delete_on_idle: The idle interval after which the
               Subscription is automatically deleted, minimum of 5 minutes. Provided in the
               TimeSpan format.
        :param pulumi.Input[bool] dead_lettering_on_message_expiration: Boolean flag which controls
               whether the Subscription has dead letter support when a message expires. Defaults
               to false.
        :param pulumi.Input[str] default_message_ttl: The TTL of messages sent to this Subscription
               if no TTL value is set on the message itself. Provided in the TimeSpan
               format.
        :param pulumi.Input[bool] enable_batched_operations: Boolean flag which controls whether the
               Subscription supports batched operations. Defaults to false.
        :param pulumi.Input[str] forward_dead_lettered_messages_to: The name of a Queue or Topic to automatically forward Dead Letter messages to.
        :param pulumi.Input[str] forward_to: The name of a Queue or Topic to automatically forward messages to.
        :param pulumi.Input[str] location: Specifies the supported Azure location where the resource exists.
               Changing this forces a new resource to be created.
        :param pulumi.Input[str] lock_duration: The lock duration for the subscription, maximum
               supported value is 5 minutes. Defaults to 1 minute.
        :param pulumi.Input[float] max_delivery_count: The maximum number of deliveries.
        :param pulumi.Input[str] name: Specifies the name of the ServiceBus Subscription resource.
               Changing this forces a new resource to be created.
        :param pulumi.Input[str] namespace_name: The name of the ServiceBus Namespace to create
               this Subscription in. Changing this forces a new resource to be created.
        :param pulumi.Input[bool] requires_session: Boolean flag which controls whether this Subscription
               supports the concept of a session. Defaults to false. Changing this forces a
               new resource to be created.
        :param pulumi.Input[str] resource_group_name: The name of the resource group in which to
               create the namespace. Changing this forces a new resource to be created.
        :param pulumi.Input[str] topic_name: The name of the ServiceBus Topic to create
               this Subscription in. Changing this forces a new resource to be created.

        > This content is derived from https://github.com/terraform-providers/terraform-provider-azurerm/blob/master/website/docs/r/servicebus_subscription.html.markdown.
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

            __props__['auto_delete_on_idle'] = auto_delete_on_idle
            __props__['dead_lettering_on_filter_evaluation_exceptions'] = dead_lettering_on_filter_evaluation_exceptions
            __props__['dead_lettering_on_message_expiration'] = dead_lettering_on_message_expiration
            __props__['default_message_ttl'] = default_message_ttl
            __props__['enable_batched_operations'] = enable_batched_operations
            __props__['forward_dead_lettered_messages_to'] = forward_dead_lettered_messages_to
            __props__['forward_to'] = forward_to
            __props__['location'] = location
            __props__['lock_duration'] = lock_duration
            if max_delivery_count is None:
                raise TypeError("Missing required property 'max_delivery_count'")
            __props__['max_delivery_count'] = max_delivery_count
            __props__['name'] = name
            if namespace_name is None:
                raise TypeError("Missing required property 'namespace_name'")
            __props__['namespace_name'] = namespace_name
            __props__['requires_session'] = requires_session
            if resource_group_name is None:
                raise TypeError("Missing required property 'resource_group_name'")
            __props__['resource_group_name'] = resource_group_name
            if topic_name is None:
                raise TypeError("Missing required property 'topic_name'")
            __props__['topic_name'] = topic_name
        alias_opts = pulumi.ResourceOptions(aliases=[pulumi.Alias(type_="azure:eventhub/subscription:Subscription")])
        opts = pulumi.ResourceOptions.merge(opts, alias_opts)
        super(Subscription, __self__).__init__(
            'azure:servicebus/subscription:Subscription',
            resource_name,
            __props__,
            opts)

    @staticmethod
    def get(resource_name, id, opts=None, auto_delete_on_idle=None, dead_lettering_on_filter_evaluation_exceptions=None, dead_lettering_on_message_expiration=None, default_message_ttl=None, enable_batched_operations=None, forward_dead_lettered_messages_to=None, forward_to=None, location=None, lock_duration=None, max_delivery_count=None, name=None, namespace_name=None, requires_session=None, resource_group_name=None, topic_name=None):
        """
        Get an existing Subscription resource's state with the given name, id, and optional extra
        properties used to qualify the lookup.
        
        :param str resource_name: The unique name of the resulting resource.
        :param str id: The unique provider ID of the resource to lookup.
        :param pulumi.ResourceOptions opts: Options for the resource.
        :param pulumi.Input[str] auto_delete_on_idle: The idle interval after which the
               Subscription is automatically deleted, minimum of 5 minutes. Provided in the
               TimeSpan format.
        :param pulumi.Input[bool] dead_lettering_on_message_expiration: Boolean flag which controls
               whether the Subscription has dead letter support when a message expires. Defaults
               to false.
        :param pulumi.Input[str] default_message_ttl: The TTL of messages sent to this Subscription
               if no TTL value is set on the message itself. Provided in the TimeSpan
               format.
        :param pulumi.Input[bool] enable_batched_operations: Boolean flag which controls whether the
               Subscription supports batched operations. Defaults to false.
        :param pulumi.Input[str] forward_dead_lettered_messages_to: The name of a Queue or Topic to automatically forward Dead Letter messages to.
        :param pulumi.Input[str] forward_to: The name of a Queue or Topic to automatically forward messages to.
        :param pulumi.Input[str] location: Specifies the supported Azure location where the resource exists.
               Changing this forces a new resource to be created.
        :param pulumi.Input[str] lock_duration: The lock duration for the subscription, maximum
               supported value is 5 minutes. Defaults to 1 minute.
        :param pulumi.Input[float] max_delivery_count: The maximum number of deliveries.
        :param pulumi.Input[str] name: Specifies the name of the ServiceBus Subscription resource.
               Changing this forces a new resource to be created.
        :param pulumi.Input[str] namespace_name: The name of the ServiceBus Namespace to create
               this Subscription in. Changing this forces a new resource to be created.
        :param pulumi.Input[bool] requires_session: Boolean flag which controls whether this Subscription
               supports the concept of a session. Defaults to false. Changing this forces a
               new resource to be created.
        :param pulumi.Input[str] resource_group_name: The name of the resource group in which to
               create the namespace. Changing this forces a new resource to be created.
        :param pulumi.Input[str] topic_name: The name of the ServiceBus Topic to create
               this Subscription in. Changing this forces a new resource to be created.

        > This content is derived from https://github.com/terraform-providers/terraform-provider-azurerm/blob/master/website/docs/r/servicebus_subscription.html.markdown.
        """
        opts = pulumi.ResourceOptions.merge(opts, pulumi.ResourceOptions(id=id))

        __props__ = dict()
        __props__["auto_delete_on_idle"] = auto_delete_on_idle
        __props__["dead_lettering_on_filter_evaluation_exceptions"] = dead_lettering_on_filter_evaluation_exceptions
        __props__["dead_lettering_on_message_expiration"] = dead_lettering_on_message_expiration
        __props__["default_message_ttl"] = default_message_ttl
        __props__["enable_batched_operations"] = enable_batched_operations
        __props__["forward_dead_lettered_messages_to"] = forward_dead_lettered_messages_to
        __props__["forward_to"] = forward_to
        __props__["location"] = location
        __props__["lock_duration"] = lock_duration
        __props__["max_delivery_count"] = max_delivery_count
        __props__["name"] = name
        __props__["namespace_name"] = namespace_name
        __props__["requires_session"] = requires_session
        __props__["resource_group_name"] = resource_group_name
        __props__["topic_name"] = topic_name
        return Subscription(resource_name, opts=opts, __props__=__props__)
    def translate_output_property(self, prop):
        return tables._CAMEL_TO_SNAKE_CASE_TABLE.get(prop) or prop

    def translate_input_property(self, prop):
        return tables._SNAKE_TO_CAMEL_CASE_TABLE.get(prop) or prop

