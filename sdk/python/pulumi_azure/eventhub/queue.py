# coding=utf-8
# *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
# *** Do not edit by hand unless you're certain you know what you are doing! ***

import pulumi
import pulumi.runtime

class Queue(pulumi.CustomResource):
    """
    Create and manage a ServiceBus Queue.
    """
    def __init__(__self__, __name__, __opts__=None, auto_delete_on_idle=None, dead_lettering_on_message_expiration=None, default_message_ttl=None, duplicate_detection_history_time_window=None, enable_batched_operations=None, enable_express=None, enable_partitioning=None, location=None, lock_duration=None, max_size_in_megabytes=None, name=None, namespace_name=None, requires_duplicate_detection=None, requires_session=None, resource_group_name=None, support_ordering=None):
        """Create a Queue resource with the given unique name, props, and options."""
        if not __name__:
            raise TypeError('Missing resource name argument (for URN creation)')
        if not isinstance(__name__, basestring):
            raise TypeError('Expected resource name to be a string')
        if __opts__ and not isinstance(__opts__, pulumi.ResourceOptions):
            raise TypeError('Expected resource options to be a ResourceOptions instance')

        __props__ = dict()

        if auto_delete_on_idle and not isinstance(auto_delete_on_idle, basestring):
            raise TypeError('Expected property auto_delete_on_idle to be a basestring')
        __self__.auto_delete_on_idle = auto_delete_on_idle
        """
        The idle interval after which the
        Queue is automatically deleted, minimum of 5 minutes. Provided in the [TimeSpan](#timespan-format)
        format.
        """
        __props__['autoDeleteOnIdle'] = auto_delete_on_idle

        if dead_lettering_on_message_expiration and not isinstance(dead_lettering_on_message_expiration, bool):
            raise TypeError('Expected property dead_lettering_on_message_expiration to be a bool')
        __self__.dead_lettering_on_message_expiration = dead_lettering_on_message_expiration
        __props__['deadLetteringOnMessageExpiration'] = dead_lettering_on_message_expiration

        if default_message_ttl and not isinstance(default_message_ttl, basestring):
            raise TypeError('Expected property default_message_ttl to be a basestring')
        __self__.default_message_ttl = default_message_ttl
        """
        The TTL of messages sent to this queue. This is the default value
        used when TTL is not set on message itself. Provided in the [TimeSpan](#timespan-format)
        format.
        """
        __props__['defaultMessageTtl'] = default_message_ttl

        if duplicate_detection_history_time_window and not isinstance(duplicate_detection_history_time_window, basestring):
            raise TypeError('Expected property duplicate_detection_history_time_window to be a basestring')
        __self__.duplicate_detection_history_time_window = duplicate_detection_history_time_window
        """
        The duration during which
        duplicates can be detected. Default value is 10 minutes. Provided in the [TimeSpan](#timespan-format) format.
        """
        __props__['duplicateDetectionHistoryTimeWindow'] = duplicate_detection_history_time_window

        if enable_batched_operations and not isinstance(enable_batched_operations, bool):
            raise TypeError('Expected property enable_batched_operations to be a bool')
        __self__.enable_batched_operations = enable_batched_operations
        __props__['enableBatchedOperations'] = enable_batched_operations

        if enable_express and not isinstance(enable_express, bool):
            raise TypeError('Expected property enable_express to be a bool')
        __self__.enable_express = enable_express
        """
        Boolean flag which controls whether Express Entities
        are enabled. An express queue holds a message in memory temporarily before writing
        it to persistent storage. Defaults to `false` for Basic and Standard. For Premium, it MUST
        be set to `false`.
        """
        __props__['enableExpress'] = enable_express

        if enable_partitioning and not isinstance(enable_partitioning, bool):
            raise TypeError('Expected property enable_partitioning to be a bool')
        __self__.enable_partitioning = enable_partitioning
        """
        Boolean flag which controls whether to enable
        the queue to be partitioned across multiple message brokers. Changing this forces
        a new resource to be created. Defaults to `false` for Basic and Standard. For Premium, it MUST
        be set to `true`.
        """
        __props__['enablePartitioning'] = enable_partitioning

        if location and not isinstance(location, basestring):
            raise TypeError('Expected property location to be a basestring')
        __self__.location = location
        """
        Specifies the supported Azure location where the resource exists.
        Changing this forces a new resource to be created.
        """
        __props__['location'] = location

        if lock_duration and not isinstance(lock_duration, basestring):
            raise TypeError('Expected property lock_duration to be a basestring')
        __self__.lock_duration = lock_duration
        """
        The ISO 8601 timespan duration of a peek-lock; that is, the amount of time that the message is locked for other receivers. Maximum value is 5 minutes. Defaults to 1 minute. (`PT1M`)
        """
        __props__['lockDuration'] = lock_duration

        if max_size_in_megabytes and not isinstance(max_size_in_megabytes, int):
            raise TypeError('Expected property max_size_in_megabytes to be a int')
        __self__.max_size_in_megabytes = max_size_in_megabytes
        """
        Integer value which controls the size of
        memory allocated for the queue. For supported values see the "Queue/topic size"
        section of [this document](https://docs.microsoft.com/en-us/azure/service-bus-messaging/service-bus-quotas).
        """
        __props__['maxSizeInMegabytes'] = max_size_in_megabytes

        if name and not isinstance(name, basestring):
            raise TypeError('Expected property name to be a basestring')
        __self__.name = name
        """
        Specifies the name of the ServiceBus Queue resource. Changing this forces a
        new resource to be created.
        """
        __props__['name'] = name

        if not namespace_name:
            raise TypeError('Missing required property namespace_name')
        elif not isinstance(namespace_name, basestring):
            raise TypeError('Expected property namespace_name to be a basestring')
        __self__.namespace_name = namespace_name
        """
        The name of the ServiceBus Namespace to create
        this queue in. Changing this forces a new resource to be created.
        """
        __props__['namespaceName'] = namespace_name

        if requires_duplicate_detection and not isinstance(requires_duplicate_detection, bool):
            raise TypeError('Expected property requires_duplicate_detection to be a bool')
        __self__.requires_duplicate_detection = requires_duplicate_detection
        """
        Boolean flag which controls whether
        the Queue requires duplicate detection. Changing this forces
        a new resource to be created. Defaults to `false`.
        """
        __props__['requiresDuplicateDetection'] = requires_duplicate_detection

        if requires_session and not isinstance(requires_session, bool):
            raise TypeError('Expected property requires_session to be a bool')
        __self__.requires_session = requires_session
        """
        Boolean flag which controls whether the Queue has dead letter support when a message expires. Defaults to `false`.
        """
        __props__['requiresSession'] = requires_session

        if not resource_group_name:
            raise TypeError('Missing required property resource_group_name')
        elif not isinstance(resource_group_name, basestring):
            raise TypeError('Expected property resource_group_name to be a basestring')
        __self__.resource_group_name = resource_group_name
        """
        The name of the resource group in which to
        create the namespace. Changing this forces a new resource to be created.
        """
        __props__['resourceGroupName'] = resource_group_name

        if support_ordering and not isinstance(support_ordering, bool):
            raise TypeError('Expected property support_ordering to be a bool')
        __self__.support_ordering = support_ordering
        __props__['supportOrdering'] = support_ordering

        super(Queue, __self__).__init__(
            'azure:eventhub/queue:Queue',
            __name__,
            __props__,
            __opts__)

    def set_outputs(self, outs):
        if 'autoDeleteOnIdle' in outs:
            self.auto_delete_on_idle = outs['autoDeleteOnIdle']
        if 'deadLetteringOnMessageExpiration' in outs:
            self.dead_lettering_on_message_expiration = outs['deadLetteringOnMessageExpiration']
        if 'defaultMessageTtl' in outs:
            self.default_message_ttl = outs['defaultMessageTtl']
        if 'duplicateDetectionHistoryTimeWindow' in outs:
            self.duplicate_detection_history_time_window = outs['duplicateDetectionHistoryTimeWindow']
        if 'enableBatchedOperations' in outs:
            self.enable_batched_operations = outs['enableBatchedOperations']
        if 'enableExpress' in outs:
            self.enable_express = outs['enableExpress']
        if 'enablePartitioning' in outs:
            self.enable_partitioning = outs['enablePartitioning']
        if 'location' in outs:
            self.location = outs['location']
        if 'lockDuration' in outs:
            self.lock_duration = outs['lockDuration']
        if 'maxSizeInMegabytes' in outs:
            self.max_size_in_megabytes = outs['maxSizeInMegabytes']
        if 'name' in outs:
            self.name = outs['name']
        if 'namespaceName' in outs:
            self.namespace_name = outs['namespaceName']
        if 'requiresDuplicateDetection' in outs:
            self.requires_duplicate_detection = outs['requiresDuplicateDetection']
        if 'requiresSession' in outs:
            self.requires_session = outs['requiresSession']
        if 'resourceGroupName' in outs:
            self.resource_group_name = outs['resourceGroupName']
        if 'supportOrdering' in outs:
            self.support_ordering = outs['supportOrdering']