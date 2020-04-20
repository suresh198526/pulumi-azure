// *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

using System;
using System.Collections.Generic;
using System.Collections.Immutable;
using System.Threading.Tasks;
using Pulumi.Serialization;

namespace Pulumi.Azure.Cdn.Inputs
{

    public sealed class EndpointDeliveryRuleCacheExpirationActionArgs : Pulumi.ResourceArgs
    {
        /// <summary>
        /// The behavior of the cache. Valid values are `BypassCache`, `Override` and `SetIfMissing`.
        /// </summary>
        [Input("behavior", required: true)]
        public Input<string> Behavior { get; set; } = null!;

        /// <summary>
        /// Duration of the cache. Only allowed when `behavior` is set to `Override` or `SetIfMissing`. Format: `[d.]hh:mm:ss`
        /// </summary>
        [Input("duration")]
        public Input<string>? Duration { get; set; }

        public EndpointDeliveryRuleCacheExpirationActionArgs()
        {
        }
    }
}
