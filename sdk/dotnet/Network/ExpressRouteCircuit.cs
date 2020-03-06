// *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

using System.Collections.Generic;
using System.Collections.Immutable;
using System.Threading.Tasks;
using Pulumi.Serialization;

namespace Pulumi.Azure.Network
{
    /// <summary>
    /// Manages an ExpressRoute circuit.
    /// 
    /// &gt; This content is derived from https://github.com/terraform-providers/terraform-provider-azurerm/blob/master/website/docs/r/express_route_circuit.html.markdown.
    /// </summary>
    public partial class ExpressRouteCircuit : Pulumi.CustomResource
    {
        /// <summary>
        /// Allow the circuit to interact with classic (RDFE) resources. The default value is `false`.
        /// </summary>
        [Output("allowClassicOperations")]
        public Output<bool?> AllowClassicOperations { get; private set; } = null!;

        /// <summary>
        /// The bandwidth in Mbps of the circuit being created.
        /// </summary>
        [Output("bandwidthInMbps")]
        public Output<int> BandwidthInMbps { get; private set; } = null!;

        /// <summary>
        /// Specifies the supported Azure location where the resource exists. Changing this forces a new resource to be created.
        /// </summary>
        [Output("location")]
        public Output<string> Location { get; private set; } = null!;

        /// <summary>
        /// The name of the ExpressRoute circuit. Changing this forces a new resource to be created.
        /// </summary>
        [Output("name")]
        public Output<string> Name { get; private set; } = null!;

        /// <summary>
        /// The name of the peering location and **not** the Azure resource location.
        /// </summary>
        [Output("peeringLocation")]
        public Output<string> PeeringLocation { get; private set; } = null!;

        /// <summary>
        /// The name of the resource group in which to create the ExpressRoute circuit. Changing this forces a new resource to be created.
        /// </summary>
        [Output("resourceGroupName")]
        public Output<string> ResourceGroupName { get; private set; } = null!;

        /// <summary>
        /// The string needed by the service provider to provision the ExpressRoute circuit.
        /// </summary>
        [Output("serviceKey")]
        public Output<string> ServiceKey { get; private set; } = null!;

        /// <summary>
        /// The name of the ExpressRoute Service Provider.
        /// </summary>
        [Output("serviceProviderName")]
        public Output<string> ServiceProviderName { get; private set; } = null!;

        /// <summary>
        /// The ExpressRoute circuit provisioning state from your chosen service provider. Possible values are "NotProvisioned", "Provisioning", "Provisioned", and "Deprovisioning".
        /// </summary>
        [Output("serviceProviderProvisioningState")]
        public Output<string> ServiceProviderProvisioningState { get; private set; } = null!;

        /// <summary>
        /// A `sku` block for the ExpressRoute circuit as documented below.
        /// </summary>
        [Output("sku")]
        public Output<Outputs.ExpressRouteCircuitSku> Sku { get; private set; } = null!;

        /// <summary>
        /// A mapping of tags to assign to the resource.
        /// </summary>
        [Output("tags")]
        public Output<ImmutableDictionary<string, string>?> Tags { get; private set; } = null!;


        /// <summary>
        /// Create a ExpressRouteCircuit resource with the given unique name, arguments, and options.
        /// </summary>
        ///
        /// <param name="name">The unique name of the resource</param>
        /// <param name="args">The arguments used to populate this resource's properties</param>
        /// <param name="options">A bag of options that control this resource's behavior</param>
        public ExpressRouteCircuit(string name, ExpressRouteCircuitArgs args, CustomResourceOptions? options = null)
            : base("azure:network/expressRouteCircuit:ExpressRouteCircuit", name, args ?? ResourceArgs.Empty, MakeResourceOptions(options, ""))
        {
        }

        private ExpressRouteCircuit(string name, Input<string> id, ExpressRouteCircuitState? state = null, CustomResourceOptions? options = null)
            : base("azure:network/expressRouteCircuit:ExpressRouteCircuit", name, state, MakeResourceOptions(options, id))
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
        /// Get an existing ExpressRouteCircuit resource's state with the given name, ID, and optional extra
        /// properties used to qualify the lookup.
        /// </summary>
        ///
        /// <param name="name">The unique name of the resulting resource.</param>
        /// <param name="id">The unique provider ID of the resource to lookup.</param>
        /// <param name="state">Any extra arguments used during the lookup.</param>
        /// <param name="options">A bag of options that control this resource's behavior</param>
        public static ExpressRouteCircuit Get(string name, Input<string> id, ExpressRouteCircuitState? state = null, CustomResourceOptions? options = null)
        {
            return new ExpressRouteCircuit(name, id, state, options);
        }
    }

    public sealed class ExpressRouteCircuitArgs : Pulumi.ResourceArgs
    {
        /// <summary>
        /// Allow the circuit to interact with classic (RDFE) resources. The default value is `false`.
        /// </summary>
        [Input("allowClassicOperations")]
        public Input<bool>? AllowClassicOperations { get; set; }

        /// <summary>
        /// The bandwidth in Mbps of the circuit being created.
        /// </summary>
        [Input("bandwidthInMbps", required: true)]
        public Input<int> BandwidthInMbps { get; set; } = null!;

        /// <summary>
        /// Specifies the supported Azure location where the resource exists. Changing this forces a new resource to be created.
        /// </summary>
        [Input("location")]
        public Input<string>? Location { get; set; }

        /// <summary>
        /// The name of the ExpressRoute circuit. Changing this forces a new resource to be created.
        /// </summary>
        [Input("name")]
        public Input<string>? Name { get; set; }

        /// <summary>
        /// The name of the peering location and **not** the Azure resource location.
        /// </summary>
        [Input("peeringLocation", required: true)]
        public Input<string> PeeringLocation { get; set; } = null!;

        /// <summary>
        /// The name of the resource group in which to create the ExpressRoute circuit. Changing this forces a new resource to be created.
        /// </summary>
        [Input("resourceGroupName", required: true)]
        public Input<string> ResourceGroupName { get; set; } = null!;

        /// <summary>
        /// The name of the ExpressRoute Service Provider.
        /// </summary>
        [Input("serviceProviderName", required: true)]
        public Input<string> ServiceProviderName { get; set; } = null!;

        /// <summary>
        /// A `sku` block for the ExpressRoute circuit as documented below.
        /// </summary>
        [Input("sku", required: true)]
        public Input<Inputs.ExpressRouteCircuitSkuArgs> Sku { get; set; } = null!;

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

        public ExpressRouteCircuitArgs()
        {
        }
    }

    public sealed class ExpressRouteCircuitState : Pulumi.ResourceArgs
    {
        /// <summary>
        /// Allow the circuit to interact with classic (RDFE) resources. The default value is `false`.
        /// </summary>
        [Input("allowClassicOperations")]
        public Input<bool>? AllowClassicOperations { get; set; }

        /// <summary>
        /// The bandwidth in Mbps of the circuit being created.
        /// </summary>
        [Input("bandwidthInMbps")]
        public Input<int>? BandwidthInMbps { get; set; }

        /// <summary>
        /// Specifies the supported Azure location where the resource exists. Changing this forces a new resource to be created.
        /// </summary>
        [Input("location")]
        public Input<string>? Location { get; set; }

        /// <summary>
        /// The name of the ExpressRoute circuit. Changing this forces a new resource to be created.
        /// </summary>
        [Input("name")]
        public Input<string>? Name { get; set; }

        /// <summary>
        /// The name of the peering location and **not** the Azure resource location.
        /// </summary>
        [Input("peeringLocation")]
        public Input<string>? PeeringLocation { get; set; }

        /// <summary>
        /// The name of the resource group in which to create the ExpressRoute circuit. Changing this forces a new resource to be created.
        /// </summary>
        [Input("resourceGroupName")]
        public Input<string>? ResourceGroupName { get; set; }

        /// <summary>
        /// The string needed by the service provider to provision the ExpressRoute circuit.
        /// </summary>
        [Input("serviceKey")]
        public Input<string>? ServiceKey { get; set; }

        /// <summary>
        /// The name of the ExpressRoute Service Provider.
        /// </summary>
        [Input("serviceProviderName")]
        public Input<string>? ServiceProviderName { get; set; }

        /// <summary>
        /// The ExpressRoute circuit provisioning state from your chosen service provider. Possible values are "NotProvisioned", "Provisioning", "Provisioned", and "Deprovisioning".
        /// </summary>
        [Input("serviceProviderProvisioningState")]
        public Input<string>? ServiceProviderProvisioningState { get; set; }

        /// <summary>
        /// A `sku` block for the ExpressRoute circuit as documented below.
        /// </summary>
        [Input("sku")]
        public Input<Inputs.ExpressRouteCircuitSkuGetArgs>? Sku { get; set; }

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

        public ExpressRouteCircuitState()
        {
        }
    }

    namespace Inputs
    {

    public sealed class ExpressRouteCircuitSkuArgs : Pulumi.ResourceArgs
    {
        /// <summary>
        /// The billing mode for bandwidth. Possible values are `MeteredData` or `UnlimitedData`.
        /// </summary>
        [Input("family", required: true)]
        public Input<string> Family { get; set; } = null!;

        /// <summary>
        /// The service tier. Possible values are `Basic`, `Local`, `Standard` or `Premium`.
        /// </summary>
        [Input("tier", required: true)]
        public Input<string> Tier { get; set; } = null!;

        public ExpressRouteCircuitSkuArgs()
        {
        }
    }

    public sealed class ExpressRouteCircuitSkuGetArgs : Pulumi.ResourceArgs
    {
        /// <summary>
        /// The billing mode for bandwidth. Possible values are `MeteredData` or `UnlimitedData`.
        /// </summary>
        [Input("family", required: true)]
        public Input<string> Family { get; set; } = null!;

        /// <summary>
        /// The service tier. Possible values are `Basic`, `Local`, `Standard` or `Premium`.
        /// </summary>
        [Input("tier", required: true)]
        public Input<string> Tier { get; set; } = null!;

        public ExpressRouteCircuitSkuGetArgs()
        {
        }
    }
    }

    namespace Outputs
    {

    [OutputType]
    public sealed class ExpressRouteCircuitSku
    {
        /// <summary>
        /// The billing mode for bandwidth. Possible values are `MeteredData` or `UnlimitedData`.
        /// </summary>
        public readonly string Family;
        /// <summary>
        /// The service tier. Possible values are `Basic`, `Local`, `Standard` or `Premium`.
        /// </summary>
        public readonly string Tier;

        [OutputConstructor]
        private ExpressRouteCircuitSku(
            string family,
            string tier)
        {
            Family = family;
            Tier = tier;
        }
    }
    }
}
