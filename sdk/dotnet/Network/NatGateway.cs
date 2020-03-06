// *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

using System.Collections.Generic;
using System.Collections.Immutable;
using System.Threading.Tasks;
using Pulumi.Serialization;

namespace Pulumi.Azure.Network
{
    /// <summary>
    /// Manages a Azure NAT Gateway.
    /// 
    /// &gt; **NOTE:** The Azure NAT Gateway service is currently in private preview. Your subscription must be on the NAT Gateway private preview whitelist for this resource to be provisioned correctly. If you attempt to provision this resource and receive an `InvalidResourceType` error may mean that your subscription is not part of the NAT Gateway private preview or you are using a region which does not yet support the NAT Gateway private preview service. The NAT Gateway private preview service is currently available in a limited set of regions. Private preview resources may have multiple breaking changes over their lifecycle until they GA. You can opt into the Private Preview by contacting your Microsoft Representative.
    /// 
    /// &gt; This content is derived from https://github.com/terraform-providers/terraform-provider-azurerm/blob/master/website/docs/r/nat_gateway.html.markdown.
    /// </summary>
    public partial class NatGateway : Pulumi.CustomResource
    {
        /// <summary>
        /// The idle timeout which should be used in minutes. Defaults to `4`.
        /// </summary>
        [Output("idleTimeoutInMinutes")]
        public Output<int?> IdleTimeoutInMinutes { get; private set; } = null!;

        /// <summary>
        /// Specifies the supported Azure location where the NAT Gateway should exist. Changing this forces a new resource to be created.
        /// </summary>
        [Output("location")]
        public Output<string> Location { get; private set; } = null!;

        /// <summary>
        /// Specifies the name of the NAT Gateway. Changing this forces a new resource to be created.
        /// </summary>
        [Output("name")]
        public Output<string> Name { get; private set; } = null!;

        /// <summary>
        /// A list of Public IP Address ID's which should be associated with the NAT Gateway resource.
        /// </summary>
        [Output("publicIpAddressIds")]
        public Output<ImmutableArray<string>> PublicIpAddressIds { get; private set; } = null!;

        /// <summary>
        /// A list of Public IP Prefix ID's which should be associated with the NAT Gateway resource.
        /// </summary>
        [Output("publicIpPrefixIds")]
        public Output<ImmutableArray<string>> PublicIpPrefixIds { get; private set; } = null!;

        /// <summary>
        /// Specifies the name of the Resource Group in which the NAT Gateway should exist. Changing this forces a new resource to be created.
        /// </summary>
        [Output("resourceGroupName")]
        public Output<string> ResourceGroupName { get; private set; } = null!;

        /// <summary>
        /// The resource GUID property of the NAT Gateway.
        /// </summary>
        [Output("resourceGuid")]
        public Output<string> ResourceGuid { get; private set; } = null!;

        /// <summary>
        /// The SKU which should be used. At this time the only supported value is `Standard`. Defaults to `Standard`.
        /// </summary>
        [Output("skuName")]
        public Output<string?> SkuName { get; private set; } = null!;

        /// <summary>
        /// A mapping of tags to assign to the resource. Changing this forces a new resource to be created.
        /// </summary>
        [Output("tags")]
        public Output<ImmutableDictionary<string, string>?> Tags { get; private set; } = null!;

        /// <summary>
        /// A list of availability zones where the NAT Gateway should be provisioned. Changing this forces a new resource to be created.
        /// </summary>
        [Output("zones")]
        public Output<ImmutableArray<string>> Zones { get; private set; } = null!;


        /// <summary>
        /// Create a NatGateway resource with the given unique name, arguments, and options.
        /// </summary>
        ///
        /// <param name="name">The unique name of the resource</param>
        /// <param name="args">The arguments used to populate this resource's properties</param>
        /// <param name="options">A bag of options that control this resource's behavior</param>
        public NatGateway(string name, NatGatewayArgs args, CustomResourceOptions? options = null)
            : base("azure:network/natGateway:NatGateway", name, args ?? ResourceArgs.Empty, MakeResourceOptions(options, ""))
        {
        }

        private NatGateway(string name, Input<string> id, NatGatewayState? state = null, CustomResourceOptions? options = null)
            : base("azure:network/natGateway:NatGateway", name, state, MakeResourceOptions(options, id))
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
        /// Get an existing NatGateway resource's state with the given name, ID, and optional extra
        /// properties used to qualify the lookup.
        /// </summary>
        ///
        /// <param name="name">The unique name of the resulting resource.</param>
        /// <param name="id">The unique provider ID of the resource to lookup.</param>
        /// <param name="state">Any extra arguments used during the lookup.</param>
        /// <param name="options">A bag of options that control this resource's behavior</param>
        public static NatGateway Get(string name, Input<string> id, NatGatewayState? state = null, CustomResourceOptions? options = null)
        {
            return new NatGateway(name, id, state, options);
        }
    }

    public sealed class NatGatewayArgs : Pulumi.ResourceArgs
    {
        /// <summary>
        /// The idle timeout which should be used in minutes. Defaults to `4`.
        /// </summary>
        [Input("idleTimeoutInMinutes")]
        public Input<int>? IdleTimeoutInMinutes { get; set; }

        /// <summary>
        /// Specifies the supported Azure location where the NAT Gateway should exist. Changing this forces a new resource to be created.
        /// </summary>
        [Input("location")]
        public Input<string>? Location { get; set; }

        /// <summary>
        /// Specifies the name of the NAT Gateway. Changing this forces a new resource to be created.
        /// </summary>
        [Input("name")]
        public Input<string>? Name { get; set; }

        [Input("publicIpAddressIds")]
        private InputList<string>? _publicIpAddressIds;

        /// <summary>
        /// A list of Public IP Address ID's which should be associated with the NAT Gateway resource.
        /// </summary>
        public InputList<string> PublicIpAddressIds
        {
            get => _publicIpAddressIds ?? (_publicIpAddressIds = new InputList<string>());
            set => _publicIpAddressIds = value;
        }

        [Input("publicIpPrefixIds")]
        private InputList<string>? _publicIpPrefixIds;

        /// <summary>
        /// A list of Public IP Prefix ID's which should be associated with the NAT Gateway resource.
        /// </summary>
        public InputList<string> PublicIpPrefixIds
        {
            get => _publicIpPrefixIds ?? (_publicIpPrefixIds = new InputList<string>());
            set => _publicIpPrefixIds = value;
        }

        /// <summary>
        /// Specifies the name of the Resource Group in which the NAT Gateway should exist. Changing this forces a new resource to be created.
        /// </summary>
        [Input("resourceGroupName", required: true)]
        public Input<string> ResourceGroupName { get; set; } = null!;

        /// <summary>
        /// The SKU which should be used. At this time the only supported value is `Standard`. Defaults to `Standard`.
        /// </summary>
        [Input("skuName")]
        public Input<string>? SkuName { get; set; }

        [Input("tags")]
        private InputMap<string>? _tags;

        /// <summary>
        /// A mapping of tags to assign to the resource. Changing this forces a new resource to be created.
        /// </summary>
        public InputMap<string> Tags
        {
            get => _tags ?? (_tags = new InputMap<string>());
            set => _tags = value;
        }

        [Input("zones")]
        private InputList<string>? _zones;

        /// <summary>
        /// A list of availability zones where the NAT Gateway should be provisioned. Changing this forces a new resource to be created.
        /// </summary>
        public InputList<string> Zones
        {
            get => _zones ?? (_zones = new InputList<string>());
            set => _zones = value;
        }

        public NatGatewayArgs()
        {
        }
    }

    public sealed class NatGatewayState : Pulumi.ResourceArgs
    {
        /// <summary>
        /// The idle timeout which should be used in minutes. Defaults to `4`.
        /// </summary>
        [Input("idleTimeoutInMinutes")]
        public Input<int>? IdleTimeoutInMinutes { get; set; }

        /// <summary>
        /// Specifies the supported Azure location where the NAT Gateway should exist. Changing this forces a new resource to be created.
        /// </summary>
        [Input("location")]
        public Input<string>? Location { get; set; }

        /// <summary>
        /// Specifies the name of the NAT Gateway. Changing this forces a new resource to be created.
        /// </summary>
        [Input("name")]
        public Input<string>? Name { get; set; }

        [Input("publicIpAddressIds")]
        private InputList<string>? _publicIpAddressIds;

        /// <summary>
        /// A list of Public IP Address ID's which should be associated with the NAT Gateway resource.
        /// </summary>
        public InputList<string> PublicIpAddressIds
        {
            get => _publicIpAddressIds ?? (_publicIpAddressIds = new InputList<string>());
            set => _publicIpAddressIds = value;
        }

        [Input("publicIpPrefixIds")]
        private InputList<string>? _publicIpPrefixIds;

        /// <summary>
        /// A list of Public IP Prefix ID's which should be associated with the NAT Gateway resource.
        /// </summary>
        public InputList<string> PublicIpPrefixIds
        {
            get => _publicIpPrefixIds ?? (_publicIpPrefixIds = new InputList<string>());
            set => _publicIpPrefixIds = value;
        }

        /// <summary>
        /// Specifies the name of the Resource Group in which the NAT Gateway should exist. Changing this forces a new resource to be created.
        /// </summary>
        [Input("resourceGroupName")]
        public Input<string>? ResourceGroupName { get; set; }

        /// <summary>
        /// The resource GUID property of the NAT Gateway.
        /// </summary>
        [Input("resourceGuid")]
        public Input<string>? ResourceGuid { get; set; }

        /// <summary>
        /// The SKU which should be used. At this time the only supported value is `Standard`. Defaults to `Standard`.
        /// </summary>
        [Input("skuName")]
        public Input<string>? SkuName { get; set; }

        [Input("tags")]
        private InputMap<string>? _tags;

        /// <summary>
        /// A mapping of tags to assign to the resource. Changing this forces a new resource to be created.
        /// </summary>
        public InputMap<string> Tags
        {
            get => _tags ?? (_tags = new InputMap<string>());
            set => _tags = value;
        }

        [Input("zones")]
        private InputList<string>? _zones;

        /// <summary>
        /// A list of availability zones where the NAT Gateway should be provisioned. Changing this forces a new resource to be created.
        /// </summary>
        public InputList<string> Zones
        {
            get => _zones ?? (_zones = new InputList<string>());
            set => _zones = value;
        }

        public NatGatewayState()
        {
        }
    }
}
