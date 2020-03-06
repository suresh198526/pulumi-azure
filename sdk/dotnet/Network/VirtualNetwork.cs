// *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

using System.Collections.Generic;
using System.Collections.Immutable;
using System.Threading.Tasks;
using Pulumi.Serialization;

namespace Pulumi.Azure.Network
{
    /// <summary>
    /// Manages a virtual network including any configured subnets. Each subnet can
    /// optionally be configured with a security group to be associated with the subnet.
    /// 
    /// &gt; **NOTE on Virtual Networks and Subnet's:** This provider currently
    /// provides both a standalone Subnet resource, and allows for Subnets to be defined in-line within the Virtual Network resource.
    /// At this time you cannot use a Virtual Network with in-line Subnets in conjunction with any Subnet resources. Doing so will cause a conflict of Subnet configurations and will overwrite Subnet's.
    /// 
    /// &gt; This content is derived from https://github.com/terraform-providers/terraform-provider-azurerm/blob/master/website/docs/r/virtual_network.html.markdown.
    /// </summary>
    public partial class VirtualNetwork : Pulumi.CustomResource
    {
        /// <summary>
        /// The address space that is used the virtual
        /// network. You can supply more than one address space. Changing this forces
        /// a new resource to be created.
        /// </summary>
        [Output("addressSpaces")]
        public Output<ImmutableArray<string>> AddressSpaces { get; private set; } = null!;

        /// <summary>
        /// A `ddos_protection_plan` block as documented below.
        /// </summary>
        [Output("ddosProtectionPlan")]
        public Output<Outputs.VirtualNetworkDdosProtectionPlan?> DdosProtectionPlan { get; private set; } = null!;

        /// <summary>
        /// List of IP addresses of DNS servers
        /// </summary>
        [Output("dnsServers")]
        public Output<ImmutableArray<string>> DnsServers { get; private set; } = null!;

        /// <summary>
        /// The location/region where the virtual network is
        /// created. Changing this forces a new resource to be created.
        /// </summary>
        [Output("location")]
        public Output<string> Location { get; private set; } = null!;

        /// <summary>
        /// The name of the virtual network. Changing this forces a
        /// new resource to be created.
        /// </summary>
        [Output("name")]
        public Output<string> Name { get; private set; } = null!;

        /// <summary>
        /// The name of the resource group in which to
        /// create the virtual network.
        /// </summary>
        [Output("resourceGroupName")]
        public Output<string> ResourceGroupName { get; private set; } = null!;

        /// <summary>
        /// Can be specified multiple times to define multiple
        /// subnets. Each `subnet` block supports fields documented below.
        /// </summary>
        [Output("subnets")]
        public Output<ImmutableArray<Outputs.VirtualNetworkSubnets>> Subnets { get; private set; } = null!;

        /// <summary>
        /// A mapping of tags to assign to the resource.
        /// </summary>
        [Output("tags")]
        public Output<ImmutableDictionary<string, string>?> Tags { get; private set; } = null!;


        /// <summary>
        /// Create a VirtualNetwork resource with the given unique name, arguments, and options.
        /// </summary>
        ///
        /// <param name="name">The unique name of the resource</param>
        /// <param name="args">The arguments used to populate this resource's properties</param>
        /// <param name="options">A bag of options that control this resource's behavior</param>
        public VirtualNetwork(string name, VirtualNetworkArgs args, CustomResourceOptions? options = null)
            : base("azure:network/virtualNetwork:VirtualNetwork", name, args ?? ResourceArgs.Empty, MakeResourceOptions(options, ""))
        {
        }

        private VirtualNetwork(string name, Input<string> id, VirtualNetworkState? state = null, CustomResourceOptions? options = null)
            : base("azure:network/virtualNetwork:VirtualNetwork", name, state, MakeResourceOptions(options, id))
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
        /// Get an existing VirtualNetwork resource's state with the given name, ID, and optional extra
        /// properties used to qualify the lookup.
        /// </summary>
        ///
        /// <param name="name">The unique name of the resulting resource.</param>
        /// <param name="id">The unique provider ID of the resource to lookup.</param>
        /// <param name="state">Any extra arguments used during the lookup.</param>
        /// <param name="options">A bag of options that control this resource's behavior</param>
        public static VirtualNetwork Get(string name, Input<string> id, VirtualNetworkState? state = null, CustomResourceOptions? options = null)
        {
            return new VirtualNetwork(name, id, state, options);
        }
    }

    public sealed class VirtualNetworkArgs : Pulumi.ResourceArgs
    {
        [Input("addressSpaces", required: true)]
        private InputList<string>? _addressSpaces;

        /// <summary>
        /// The address space that is used the virtual
        /// network. You can supply more than one address space. Changing this forces
        /// a new resource to be created.
        /// </summary>
        public InputList<string> AddressSpaces
        {
            get => _addressSpaces ?? (_addressSpaces = new InputList<string>());
            set => _addressSpaces = value;
        }

        /// <summary>
        /// A `ddos_protection_plan` block as documented below.
        /// </summary>
        [Input("ddosProtectionPlan")]
        public Input<Inputs.VirtualNetworkDdosProtectionPlanArgs>? DdosProtectionPlan { get; set; }

        [Input("dnsServers")]
        private InputList<string>? _dnsServers;

        /// <summary>
        /// List of IP addresses of DNS servers
        /// </summary>
        public InputList<string> DnsServers
        {
            get => _dnsServers ?? (_dnsServers = new InputList<string>());
            set => _dnsServers = value;
        }

        /// <summary>
        /// The location/region where the virtual network is
        /// created. Changing this forces a new resource to be created.
        /// </summary>
        [Input("location")]
        public Input<string>? Location { get; set; }

        /// <summary>
        /// The name of the virtual network. Changing this forces a
        /// new resource to be created.
        /// </summary>
        [Input("name")]
        public Input<string>? Name { get; set; }

        /// <summary>
        /// The name of the resource group in which to
        /// create the virtual network.
        /// </summary>
        [Input("resourceGroupName", required: true)]
        public Input<string> ResourceGroupName { get; set; } = null!;

        [Input("subnets")]
        private InputList<Inputs.VirtualNetworkSubnetsArgs>? _subnets;

        /// <summary>
        /// Can be specified multiple times to define multiple
        /// subnets. Each `subnet` block supports fields documented below.
        /// </summary>
        public InputList<Inputs.VirtualNetworkSubnetsArgs> Subnets
        {
            get => _subnets ?? (_subnets = new InputList<Inputs.VirtualNetworkSubnetsArgs>());
            set => _subnets = value;
        }

        [Input("tags")]
        private InputMap<string>? _tags;

        /// <summary>
        /// A mapping of tags to assign to the resource.
        /// </summary>
        public InputMap<string> Tags
        {
            get => _tags ?? (_tags = new InputMap<string>());
            set => _tags = value;
        }

        public VirtualNetworkArgs()
        {
        }
    }

    public sealed class VirtualNetworkState : Pulumi.ResourceArgs
    {
        [Input("addressSpaces")]
        private InputList<string>? _addressSpaces;

        /// <summary>
        /// The address space that is used the virtual
        /// network. You can supply more than one address space. Changing this forces
        /// a new resource to be created.
        /// </summary>
        public InputList<string> AddressSpaces
        {
            get => _addressSpaces ?? (_addressSpaces = new InputList<string>());
            set => _addressSpaces = value;
        }

        /// <summary>
        /// A `ddos_protection_plan` block as documented below.
        /// </summary>
        [Input("ddosProtectionPlan")]
        public Input<Inputs.VirtualNetworkDdosProtectionPlanGetArgs>? DdosProtectionPlan { get; set; }

        [Input("dnsServers")]
        private InputList<string>? _dnsServers;

        /// <summary>
        /// List of IP addresses of DNS servers
        /// </summary>
        public InputList<string> DnsServers
        {
            get => _dnsServers ?? (_dnsServers = new InputList<string>());
            set => _dnsServers = value;
        }

        /// <summary>
        /// The location/region where the virtual network is
        /// created. Changing this forces a new resource to be created.
        /// </summary>
        [Input("location")]
        public Input<string>? Location { get; set; }

        /// <summary>
        /// The name of the virtual network. Changing this forces a
        /// new resource to be created.
        /// </summary>
        [Input("name")]
        public Input<string>? Name { get; set; }

        /// <summary>
        /// The name of the resource group in which to
        /// create the virtual network.
        /// </summary>
        [Input("resourceGroupName")]
        public Input<string>? ResourceGroupName { get; set; }

        [Input("subnets")]
        private InputList<Inputs.VirtualNetworkSubnetsGetArgs>? _subnets;

        /// <summary>
        /// Can be specified multiple times to define multiple
        /// subnets. Each `subnet` block supports fields documented below.
        /// </summary>
        public InputList<Inputs.VirtualNetworkSubnetsGetArgs> Subnets
        {
            get => _subnets ?? (_subnets = new InputList<Inputs.VirtualNetworkSubnetsGetArgs>());
            set => _subnets = value;
        }

        [Input("tags")]
        private InputMap<string>? _tags;

        /// <summary>
        /// A mapping of tags to assign to the resource.
        /// </summary>
        public InputMap<string> Tags
        {
            get => _tags ?? (_tags = new InputMap<string>());
            set => _tags = value;
        }

        public VirtualNetworkState()
        {
        }
    }

    namespace Inputs
    {

    public sealed class VirtualNetworkDdosProtectionPlanArgs : Pulumi.ResourceArgs
    {
        [Input("enable", required: true)]
        public Input<bool> Enable { get; set; } = null!;

        /// <summary>
        /// The ID of this subnet.
        /// </summary>
        [Input("id", required: true)]
        public Input<string> Id { get; set; } = null!;

        public VirtualNetworkDdosProtectionPlanArgs()
        {
        }
    }

    public sealed class VirtualNetworkDdosProtectionPlanGetArgs : Pulumi.ResourceArgs
    {
        [Input("enable", required: true)]
        public Input<bool> Enable { get; set; } = null!;

        /// <summary>
        /// The ID of this subnet.
        /// </summary>
        [Input("id", required: true)]
        public Input<string> Id { get; set; } = null!;

        public VirtualNetworkDdosProtectionPlanGetArgs()
        {
        }
    }

    public sealed class VirtualNetworkSubnetsArgs : Pulumi.ResourceArgs
    {
        [Input("addressPrefix", required: true)]
        public Input<string> AddressPrefix { get; set; } = null!;

        /// <summary>
        /// The ID of this subnet.
        /// </summary>
        [Input("id")]
        public Input<string>? Id { get; set; }

        /// <summary>
        /// The name of the virtual network. Changing this forces a
        /// new resource to be created.
        /// </summary>
        [Input("name", required: true)]
        public Input<string> Name { get; set; } = null!;

        [Input("securityGroup")]
        public Input<string>? SecurityGroup { get; set; }

        public VirtualNetworkSubnetsArgs()
        {
        }
    }

    public sealed class VirtualNetworkSubnetsGetArgs : Pulumi.ResourceArgs
    {
        [Input("addressPrefix", required: true)]
        public Input<string> AddressPrefix { get; set; } = null!;

        /// <summary>
        /// The ID of this subnet.
        /// </summary>
        [Input("id")]
        public Input<string>? Id { get; set; }

        /// <summary>
        /// The name of the virtual network. Changing this forces a
        /// new resource to be created.
        /// </summary>
        [Input("name", required: true)]
        public Input<string> Name { get; set; } = null!;

        [Input("securityGroup")]
        public Input<string>? SecurityGroup { get; set; }

        public VirtualNetworkSubnetsGetArgs()
        {
        }
    }
    }

    namespace Outputs
    {

    [OutputType]
    public sealed class VirtualNetworkDdosProtectionPlan
    {
        public readonly bool Enable;
        /// <summary>
        /// The ID of this subnet.
        /// </summary>
        public readonly string Id;

        [OutputConstructor]
        private VirtualNetworkDdosProtectionPlan(
            bool enable,
            string id)
        {
            Enable = enable;
            Id = id;
        }
    }

    [OutputType]
    public sealed class VirtualNetworkSubnets
    {
        public readonly string AddressPrefix;
        /// <summary>
        /// The ID of this subnet.
        /// </summary>
        public readonly string Id;
        /// <summary>
        /// The name of the virtual network. Changing this forces a
        /// new resource to be created.
        /// </summary>
        public readonly string Name;
        public readonly string? SecurityGroup;

        [OutputConstructor]
        private VirtualNetworkSubnets(
            string addressPrefix,
            string id,
            string name,
            string? securityGroup)
        {
            AddressPrefix = addressPrefix;
            Id = id;
            Name = name;
            SecurityGroup = securityGroup;
        }
    }
    }
}
