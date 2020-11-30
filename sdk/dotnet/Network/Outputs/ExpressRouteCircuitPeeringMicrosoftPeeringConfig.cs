// *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

using System;
using System.Collections.Generic;
using System.Collections.Immutable;
using System.Threading.Tasks;
using Pulumi.Serialization;

namespace Pulumi.Azure.Network.Outputs
{

    [OutputType]
    public sealed class ExpressRouteCircuitPeeringMicrosoftPeeringConfig
    {
        /// <summary>
        /// A list of Advertised Public Prefixes.
        /// </summary>
        public readonly ImmutableArray<string> AdvertisedPublicPrefixes;
        /// <summary>
        /// The CustomerASN of the peering.
        /// </summary>
        public readonly int? CustomerAsn;
        /// <summary>
        /// The Routing Registry against which the AS number and prefixes are registered. For example:  `ARIN`, `RIPE`, `AFRINIC` etc.
        /// </summary>
        public readonly string? RoutingRegistryName;

        [OutputConstructor]
        private ExpressRouteCircuitPeeringMicrosoftPeeringConfig(
            ImmutableArray<string> advertisedPublicPrefixes,

            int? customerAsn,

            string? routingRegistryName)
        {
            AdvertisedPublicPrefixes = advertisedPublicPrefixes;
            CustomerAsn = customerAsn;
            RoutingRegistryName = routingRegistryName;
        }
    }
}
