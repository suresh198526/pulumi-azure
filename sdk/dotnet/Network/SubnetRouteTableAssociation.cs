// *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

using System;
using System.Collections.Generic;
using System.Collections.Immutable;
using System.Threading.Tasks;
using Pulumi.Serialization;

namespace Pulumi.Azure.Network
{
    /// <summary>
    /// Associates a Route Table with a Subnet within a Virtual Network.
    /// 
    /// ## Example Usage
    /// 
    /// ```csharp
    /// using Pulumi;
    /// using Azure = Pulumi.Azure;
    /// 
    /// class MyStack : Stack
    /// {
    ///     public MyStack()
    ///     {
    ///         var exampleResourceGroup = new Azure.Core.ResourceGroup("exampleResourceGroup", new Azure.Core.ResourceGroupArgs
    ///         {
    ///             Location = "West Europe",
    ///         });
    ///         var exampleVirtualNetwork = new Azure.Network.VirtualNetwork("exampleVirtualNetwork", new Azure.Network.VirtualNetworkArgs
    ///         {
    ///             AddressSpaces = 
    ///             {
    ///                 "10.0.0.0/16",
    ///             },
    ///             Location = exampleResourceGroup.Location,
    ///             ResourceGroupName = exampleResourceGroup.Name,
    ///         });
    ///         var exampleSubnet = new Azure.Network.Subnet("exampleSubnet", new Azure.Network.SubnetArgs
    ///         {
    ///             ResourceGroupName = exampleResourceGroup.Name,
    ///             VirtualNetworkName = exampleVirtualNetwork.Name,
    ///             AddressPrefixes = 
    ///             {
    ///                 "10.0.2.0/24",
    ///             },
    ///         });
    ///         var exampleRouteTable = new Azure.Network.RouteTable("exampleRouteTable", new Azure.Network.RouteTableArgs
    ///         {
    ///             Location = exampleResourceGroup.Location,
    ///             ResourceGroupName = exampleResourceGroup.Name,
    ///             Routes = 
    ///             {
    ///                 new Azure.Network.Inputs.RouteTableRouteArgs
    ///                 {
    ///                     Name = "example",
    ///                     AddressPrefix = "10.100.0.0/14",
    ///                     NextHopType = "VirtualAppliance",
    ///                     NextHopInIpAddress = "10.10.1.1",
    ///                 },
    ///             },
    ///         });
    ///         var exampleSubnetRouteTableAssociation = new Azure.Network.SubnetRouteTableAssociation("exampleSubnetRouteTableAssociation", new Azure.Network.SubnetRouteTableAssociationArgs
    ///         {
    ///             SubnetId = exampleSubnet.Id,
    ///             RouteTableId = exampleRouteTable.Id,
    ///         });
    ///     }
    /// 
    /// }
    /// ```
    /// </summary>
    public partial class SubnetRouteTableAssociation : Pulumi.CustomResource
    {
        /// <summary>
        /// The ID of the Route Table which should be associated with the Subnet. Changing this forces a new resource to be created.
        /// </summary>
        [Output("routeTableId")]
        public Output<string> RouteTableId { get; private set; } = null!;

        /// <summary>
        /// The ID of the Subnet. Changing this forces a new resource to be created.
        /// </summary>
        [Output("subnetId")]
        public Output<string> SubnetId { get; private set; } = null!;


        /// <summary>
        /// Create a SubnetRouteTableAssociation resource with the given unique name, arguments, and options.
        /// </summary>
        ///
        /// <param name="name">The unique name of the resource</param>
        /// <param name="args">The arguments used to populate this resource's properties</param>
        /// <param name="options">A bag of options that control this resource's behavior</param>
        public SubnetRouteTableAssociation(string name, SubnetRouteTableAssociationArgs args, CustomResourceOptions? options = null)
            : base("azure:network/subnetRouteTableAssociation:SubnetRouteTableAssociation", name, args ?? new SubnetRouteTableAssociationArgs(), MakeResourceOptions(options, ""))
        {
        }

        private SubnetRouteTableAssociation(string name, Input<string> id, SubnetRouteTableAssociationState? state = null, CustomResourceOptions? options = null)
            : base("azure:network/subnetRouteTableAssociation:SubnetRouteTableAssociation", name, state, MakeResourceOptions(options, id))
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
        /// Get an existing SubnetRouteTableAssociation resource's state with the given name, ID, and optional extra
        /// properties used to qualify the lookup.
        /// </summary>
        ///
        /// <param name="name">The unique name of the resulting resource.</param>
        /// <param name="id">The unique provider ID of the resource to lookup.</param>
        /// <param name="state">Any extra arguments used during the lookup.</param>
        /// <param name="options">A bag of options that control this resource's behavior</param>
        public static SubnetRouteTableAssociation Get(string name, Input<string> id, SubnetRouteTableAssociationState? state = null, CustomResourceOptions? options = null)
        {
            return new SubnetRouteTableAssociation(name, id, state, options);
        }
    }

    public sealed class SubnetRouteTableAssociationArgs : Pulumi.ResourceArgs
    {
        /// <summary>
        /// The ID of the Route Table which should be associated with the Subnet. Changing this forces a new resource to be created.
        /// </summary>
        [Input("routeTableId", required: true)]
        public Input<string> RouteTableId { get; set; } = null!;

        /// <summary>
        /// The ID of the Subnet. Changing this forces a new resource to be created.
        /// </summary>
        [Input("subnetId", required: true)]
        public Input<string> SubnetId { get; set; } = null!;

        public SubnetRouteTableAssociationArgs()
        {
        }
    }

    public sealed class SubnetRouteTableAssociationState : Pulumi.ResourceArgs
    {
        /// <summary>
        /// The ID of the Route Table which should be associated with the Subnet. Changing this forces a new resource to be created.
        /// </summary>
        [Input("routeTableId")]
        public Input<string>? RouteTableId { get; set; }

        /// <summary>
        /// The ID of the Subnet. Changing this forces a new resource to be created.
        /// </summary>
        [Input("subnetId")]
        public Input<string>? SubnetId { get; set; }

        public SubnetRouteTableAssociationState()
        {
        }
    }
}
