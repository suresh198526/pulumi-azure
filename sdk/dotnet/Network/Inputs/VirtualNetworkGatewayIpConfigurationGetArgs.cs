// *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

using System;
using System.Collections.Generic;
using System.Collections.Immutable;
using System.Threading.Tasks;
using Pulumi.Serialization;

namespace Pulumi.Azure.Network.Inputs
{

    public sealed class VirtualNetworkGatewayIpConfigurationGetArgs : Pulumi.ResourceArgs
    {
        /// <summary>
        /// A user-defined name of the revoked certificate.
        /// </summary>
        [Input("name")]
        public Input<string>? Name { get; set; }

        /// <summary>
        /// Defines how the private IP address
        /// of the gateways virtual interface is assigned. Valid options are `Static` or
        /// `Dynamic`. Defaults to `Dynamic`.
        /// </summary>
        [Input("privateIpAddressAllocation")]
        public Input<string>? PrivateIpAddressAllocation { get; set; }

        /// <summary>
        /// The ID of the public ip address to associate
        /// with the Virtual Network Gateway.
        /// </summary>
        [Input("publicIpAddressId")]
        public Input<string>? PublicIpAddressId { get; set; }

        /// <summary>
        /// The ID of the gateway subnet of a virtual network in
        /// which the virtual network gateway will be created. It is mandatory that
        /// the associated subnet is named `GatewaySubnet`. Therefore, each virtual
        /// network can contain at most a single Virtual Network Gateway.
        /// </summary>
        [Input("subnetId", required: true)]
        public Input<string> SubnetId { get; set; } = null!;

        public VirtualNetworkGatewayIpConfigurationGetArgs()
        {
        }
    }
}