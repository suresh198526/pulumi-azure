// *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

using System;
using System.Collections.Generic;
using System.Collections.Immutable;
using System.Threading.Tasks;
using Pulumi.Serialization;

namespace Pulumi.Azure.Cdn.Outputs
{

    [OutputType]
    public sealed class EndpointGlobalDeliveryRuleCacheKeyQueryStringAction
    {
        /// <summary>
        /// The behavior of the cache key for query strings. Valid values are `Exclude`, `ExcludeAll`, `Include` and `IncludeAll`.
        /// </summary>
        public readonly string Behavior;
        /// <summary>
        /// Comma separated list of parameter values.
        /// </summary>
        public readonly string? Parameters;

        [OutputConstructor]
        private EndpointGlobalDeliveryRuleCacheKeyQueryStringAction(
            string behavior,

            string? parameters)
        {
            Behavior = behavior;
            Parameters = parameters;
        }
    }
}
