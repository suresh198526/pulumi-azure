// *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

using System;
using System.Collections.Generic;
using System.Collections.Immutable;
using System.Threading.Tasks;
using Pulumi.Serialization;

namespace Pulumi.Azure.EventHub.Inputs
{

    public sealed class EventSubscriptionRetryPolicyGetArgs : Pulumi.ResourceArgs
    {
        /// <summary>
        /// Specifies the time to live (in minutes) for events. Supported range is `1` to `1440`. Defaults to `1440`. See [official documentation](https://docs.microsoft.com/en-us/azure/event-grid/manage-event-delivery#set-retry-policy) for more details.
        /// </summary>
        [Input("eventTimeToLive", required: true)]
        public Input<int> EventTimeToLive { get; set; } = null!;

        /// <summary>
        /// Specifies the maximum number of delivery retry attempts for events.
        /// </summary>
        [Input("maxDeliveryAttempts", required: true)]
        public Input<int> MaxDeliveryAttempts { get; set; } = null!;

        public EventSubscriptionRetryPolicyGetArgs()
        {
        }
    }
}
