// *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

using System.Collections.Generic;
using System.Collections.Immutable;
using System.Threading.Tasks;
using Pulumi.Serialization;

namespace Pulumi.Azure.Network
{
    /// <summary>
    /// Manages a virtual network peering which allows resources to access other
    /// resources in the linked virtual network.
    /// 
    /// ## Note
    /// 
    /// Virtual Network peerings cannot be created, updated or deleted concurrently.
    /// 
    /// &gt; This content is derived from https://github.com/terraform-providers/terraform-provider-azurerm/blob/master/website/docs/r/virtual_network_peering.html.markdown.
    /// </summary>
    public partial class VirtualNetworkPeering : Pulumi.CustomResource
    {
        /// <summary>
        /// Controls if forwarded traffic from  VMs
        /// in the remote virtual network is allowed. Defaults to false.
        /// </summary>
        [Output("allowForwardedTraffic")]
        public Output<bool> AllowForwardedTraffic { get; private set; } = null!;

        /// <summary>
        /// Controls gatewayLinks can be used in the
        /// remote virtual network’s link to the local virtual network.
        /// </summary>
        [Output("allowGatewayTransit")]
        public Output<bool> AllowGatewayTransit { get; private set; } = null!;

        /// <summary>
        /// Controls if the VMs in the remote
        /// virtual network can access VMs in the local virtual network. Defaults to
        /// true.
        /// </summary>
        [Output("allowVirtualNetworkAccess")]
        public Output<bool?> AllowVirtualNetworkAccess { get; private set; } = null!;

        /// <summary>
        /// The name of the virtual network peering. Changing this
        /// forces a new resource to be created.
        /// </summary>
        [Output("name")]
        public Output<string> Name { get; private set; } = null!;

        /// <summary>
        /// The full Azure resource ID of the
        /// remote virtual network.  Changing this forces a new resource to be created.
        /// </summary>
        [Output("remoteVirtualNetworkId")]
        public Output<string> RemoteVirtualNetworkId { get; private set; } = null!;

        /// <summary>
        /// The name of the resource group in which to
        /// create the virtual network. Changing this forces a new resource to be
        /// created.
        /// </summary>
        [Output("resourceGroupName")]
        public Output<string> ResourceGroupName { get; private set; } = null!;

        /// <summary>
        /// Controls if remote gateways can be used on
        /// the local virtual network. If the flag is set to `true`, and
        /// `allow_gateway_transit` on the remote peering is also `true`, virtual network will
        /// use gateways of remote virtual network for transit. Only one peering can
        /// have this flag set to `true`. This flag cannot be set if virtual network
        /// already has a gateway. Defaults to `false`.
        /// </summary>
        [Output("useRemoteGateways")]
        public Output<bool> UseRemoteGateways { get; private set; } = null!;

        /// <summary>
        /// The name of the virtual network. Changing
        /// this forces a new resource to be created.
        /// </summary>
        [Output("virtualNetworkName")]
        public Output<string> VirtualNetworkName { get; private set; } = null!;


        /// <summary>
        /// Create a VirtualNetworkPeering resource with the given unique name, arguments, and options.
        /// </summary>
        ///
        /// <param name="name">The unique name of the resource</param>
        /// <param name="args">The arguments used to populate this resource's properties</param>
        /// <param name="options">A bag of options that control this resource's behavior</param>
        public VirtualNetworkPeering(string name, VirtualNetworkPeeringArgs args, CustomResourceOptions? options = null)
            : base("azure:network/virtualNetworkPeering:VirtualNetworkPeering", name, args ?? ResourceArgs.Empty, MakeResourceOptions(options, ""))
        {
        }

        private VirtualNetworkPeering(string name, Input<string> id, VirtualNetworkPeeringState? state = null, CustomResourceOptions? options = null)
            : base("azure:network/virtualNetworkPeering:VirtualNetworkPeering", name, state, MakeResourceOptions(options, id))
        {
        }

        private static CustomResourceOptions MakeResourceOptions(CustomResourceOptions? options, Input<string>? id)
        {
            var defaultOptions = new CustomResourceOptions
            {
                Version = Utilities.Version,
            };
            var merged = CustomResourceOptions.Merge(defaultOptions, options);
            // Override the ID if one was specified for consistency with other language SDKs.
            merged.Id = id ?? merged.Id;
            return merged;
        }
        /// <summary>
        /// Get an existing VirtualNetworkPeering resource's state with the given name, ID, and optional extra
        /// properties used to qualify the lookup.
        /// </summary>
        ///
        /// <param name="name">The unique name of the resulting resource.</param>
        /// <param name="id">The unique provider ID of the resource to lookup.</param>
        /// <param name="state">Any extra arguments used during the lookup.</param>
        /// <param name="options">A bag of options that control this resource's behavior</param>
        public static VirtualNetworkPeering Get(string name, Input<string> id, VirtualNetworkPeeringState? state = null, CustomResourceOptions? options = null)
        {
            return new VirtualNetworkPeering(name, id, state, options);
        }
    }

    public sealed class VirtualNetworkPeeringArgs : Pulumi.ResourceArgs
    {
        /// <summary>
        /// Controls if forwarded traffic from  VMs
        /// in the remote virtual network is allowed. Defaults to false.
        /// </summary>
        [Input("allowForwardedTraffic")]
        public Input<bool>? AllowForwardedTraffic { get; set; }

        /// <summary>
        /// Controls gatewayLinks can be used in the
        /// remote virtual network’s link to the local virtual network.
        /// </summary>
        [Input("allowGatewayTransit")]
        public Input<bool>? AllowGatewayTransit { get; set; }

        /// <summary>
        /// Controls if the VMs in the remote
        /// virtual network can access VMs in the local virtual network. Defaults to
        /// true.
        /// </summary>
        [Input("allowVirtualNetworkAccess")]
        public Input<bool>? AllowVirtualNetworkAccess { get; set; }

        /// <summary>
        /// The name of the virtual network peering. Changing this
        /// forces a new resource to be created.
        /// </summary>
        [Input("name")]
        public Input<string>? Name { get; set; }

        /// <summary>
        /// The full Azure resource ID of the
        /// remote virtual network.  Changing this forces a new resource to be created.
        /// </summary>
        [Input("remoteVirtualNetworkId", required: true)]
        public Input<string> RemoteVirtualNetworkId { get; set; } = null!;

        /// <summary>
        /// The name of the resource group in which to
        /// create the virtual network. Changing this forces a new resource to be
        /// created.
        /// </summary>
        [Input("resourceGroupName", required: true)]
        public Input<string> ResourceGroupName { get; set; } = null!;

        /// <summary>
        /// Controls if remote gateways can be used on
        /// the local virtual network. If the flag is set to `true`, and
        /// `allow_gateway_transit` on the remote peering is also `true`, virtual network will
        /// use gateways of remote virtual network for transit. Only one peering can
        /// have this flag set to `true`. This flag cannot be set if virtual network
        /// already has a gateway. Defaults to `false`.
        /// </summary>
        [Input("useRemoteGateways")]
        public Input<bool>? UseRemoteGateways { get; set; }

        /// <summary>
        /// The name of the virtual network. Changing
        /// this forces a new resource to be created.
        /// </summary>
        [Input("virtualNetworkName", required: true)]
        public Input<string> VirtualNetworkName { get; set; } = null!;

        public VirtualNetworkPeeringArgs()
        {
        }
    }

    public sealed class VirtualNetworkPeeringState : Pulumi.ResourceArgs
    {
        /// <summary>
        /// Controls if forwarded traffic from  VMs
        /// in the remote virtual network is allowed. Defaults to false.
        /// </summary>
        [Input("allowForwardedTraffic")]
        public Input<bool>? AllowForwardedTraffic { get; set; }

        /// <summary>
        /// Controls gatewayLinks can be used in the
        /// remote virtual network’s link to the local virtual network.
        /// </summary>
        [Input("allowGatewayTransit")]
        public Input<bool>? AllowGatewayTransit { get; set; }

        /// <summary>
        /// Controls if the VMs in the remote
        /// virtual network can access VMs in the local virtual network. Defaults to
        /// true.
        /// </summary>
        [Input("allowVirtualNetworkAccess")]
        public Input<bool>? AllowVirtualNetworkAccess { get; set; }

        /// <summary>
        /// The name of the virtual network peering. Changing this
        /// forces a new resource to be created.
        /// </summary>
        [Input("name")]
        public Input<string>? Name { get; set; }

        /// <summary>
        /// The full Azure resource ID of the
        /// remote virtual network.  Changing this forces a new resource to be created.
        /// </summary>
        [Input("remoteVirtualNetworkId")]
        public Input<string>? RemoteVirtualNetworkId { get; set; }

        /// <summary>
        /// The name of the resource group in which to
        /// create the virtual network. Changing this forces a new resource to be
        /// created.
        /// </summary>
        [Input("resourceGroupName")]
        public Input<string>? ResourceGroupName { get; set; }

        /// <summary>
        /// Controls if remote gateways can be used on
        /// the local virtual network. If the flag is set to `true`, and
        /// `allow_gateway_transit` on the remote peering is also `true`, virtual network will
        /// use gateways of remote virtual network for transit. Only one peering can
        /// have this flag set to `true`. This flag cannot be set if virtual network
        /// already has a gateway. Defaults to `false`.
        /// </summary>
        [Input("useRemoteGateways")]
        public Input<bool>? UseRemoteGateways { get; set; }

        /// <summary>
        /// The name of the virtual network. Changing
        /// this forces a new resource to be created.
        /// </summary>
        [Input("virtualNetworkName")]
        public Input<string>? VirtualNetworkName { get; set; }

        public VirtualNetworkPeeringState()
        {
        }
    }
}
