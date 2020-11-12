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
    public sealed class VirtualHubConnectionRoutingStaticVnetRoute
    {
        /// <summary>
        /// A list of CIDR Ranges which should be used as Address Prefixes.
        /// </summary>
        public readonly ImmutableArray<string> AddressPrefixes;
        /// <summary>
        /// The name which should be used for this Static Route.
        /// </summary>
        public readonly string? Name;
        /// <summary>
        /// The IP Address which should be used for the Next Hop.
        /// </summary>
        public readonly string? NextHopIpAddress;

        [OutputConstructor]
        private VirtualHubConnectionRoutingStaticVnetRoute(
            ImmutableArray<string> addressPrefixes,

            string? name,

            string? nextHopIpAddress)
        {
            AddressPrefixes = addressPrefixes;
            Name = name;
            NextHopIpAddress = nextHopIpAddress;
        }
    }
}