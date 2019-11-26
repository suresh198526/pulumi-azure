// *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

using System.Collections.Immutable;
using System.Threading.Tasks;
using Pulumi.Serialization;

namespace Pulumi.Azure.Iot
{
    /// <summary>
    /// Manages an IotHub Device Provisioning Service.
    /// 
    /// &gt; This content is derived from https://github.com/terraform-providers/terraform-provider-azurerm/blob/master/website/docs/r/iothub_dps.html.markdown.
    /// </summary>
    public partial class IotHubDps : Pulumi.CustomResource
    {
        /// <summary>
        /// The allocation policy of the IoT Device Provisioning Service.
        /// </summary>
        [Output("allocationPolicy")]
        public Output<string> AllocationPolicy { get; private set; } = null!;

        /// <summary>
        /// The device endpoint of the IoT Device Provisioning Service.
        /// </summary>
        [Output("deviceProvisioningHostName")]
        public Output<string> DeviceProvisioningHostName { get; private set; } = null!;

        /// <summary>
        /// The unique identifier of the IoT Device Provisioning Service.
        /// </summary>
        [Output("idScope")]
        public Output<string> IdScope { get; private set; } = null!;

        /// <summary>
        /// A `linked_hub` block as defined below.
        /// </summary>
        [Output("linkedHubs")]
        public Output<ImmutableArray<Outputs.IotHubDpsLinkedHubs>> LinkedHubs { get; private set; } = null!;

        /// <summary>
        /// Specifies the supported Azure location where the resource has to be createc. Changing this forces a new resource to be created.
        /// </summary>
        [Output("location")]
        public Output<string> Location { get; private set; } = null!;

        /// <summary>
        /// Specifies the name of the Iot Device Provisioning Service resource. Changing this forces a new resource to be created.
        /// </summary>
        [Output("name")]
        public Output<string> Name { get; private set; } = null!;

        /// <summary>
        /// The name of the resource group under which the Iot Device Provisioning Service resource has to be created. Changing this forces a new resource to be created.
        /// </summary>
        [Output("resourceGroupName")]
        public Output<string> ResourceGroupName { get; private set; } = null!;

        /// <summary>
        /// The service endpoint of the IoT Device Provisioning Service.
        /// </summary>
        [Output("serviceOperationsHostName")]
        public Output<string> ServiceOperationsHostName { get; private set; } = null!;

        /// <summary>
        /// A `sku` block as defined below.
        /// </summary>
        [Output("sku")]
        public Output<Outputs.IotHubDpsSku> Sku { get; private set; } = null!;

        /// <summary>
        /// A mapping of tags to assign to the resource.
        /// </summary>
        [Output("tags")]
        public Output<ImmutableDictionary<string, object>> Tags { get; private set; } = null!;


        /// <summary>
        /// Create a IotHubDps resource with the given unique name, arguments, and options.
        /// </summary>
        ///
        /// <param name="name">The unique name of the resource</param>
        /// <param name="args">The arguments used to populate this resource's properties</param>
        /// <param name="options">A bag of options that control this resource's behavior</param>
        public IotHubDps(string name, IotHubDpsArgs args, CustomResourceOptions? options = null)
            : base("azure:iot/iotHubDps:IotHubDps", name, args ?? ResourceArgs.Empty, MakeResourceOptions(options, ""))
        {
        }

        private IotHubDps(string name, Input<string> id, IotHubDpsState? state = null, CustomResourceOptions? options = null)
            : base("azure:iot/iotHubDps:IotHubDps", name, state, MakeResourceOptions(options, id))
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
        /// Get an existing IotHubDps resource's state with the given name, ID, and optional extra
        /// properties used to qualify the lookup.
        /// </summary>
        ///
        /// <param name="name">The unique name of the resulting resource.</param>
        /// <param name="id">The unique provider ID of the resource to lookup.</param>
        /// <param name="state">Any extra arguments used during the lookup.</param>
        /// <param name="options">A bag of options that control this resource's behavior</param>
        public static IotHubDps Get(string name, Input<string> id, IotHubDpsState? state = null, CustomResourceOptions? options = null)
        {
            return new IotHubDps(name, id, state, options);
        }
    }

    public sealed class IotHubDpsArgs : Pulumi.ResourceArgs
    {
        [Input("linkedHubs")]
        private InputList<Inputs.IotHubDpsLinkedHubsArgs>? _linkedHubs;

        /// <summary>
        /// A `linked_hub` block as defined below.
        /// </summary>
        public InputList<Inputs.IotHubDpsLinkedHubsArgs> LinkedHubs
        {
            get => _linkedHubs ?? (_linkedHubs = new InputList<Inputs.IotHubDpsLinkedHubsArgs>());
            set => _linkedHubs = value;
        }

        /// <summary>
        /// Specifies the supported Azure location where the resource has to be createc. Changing this forces a new resource to be created.
        /// </summary>
        [Input("location")]
        public Input<string>? Location { get; set; }

        /// <summary>
        /// Specifies the name of the Iot Device Provisioning Service resource. Changing this forces a new resource to be created.
        /// </summary>
        [Input("name")]
        public Input<string>? Name { get; set; }

        /// <summary>
        /// The name of the resource group under which the Iot Device Provisioning Service resource has to be created. Changing this forces a new resource to be created.
        /// </summary>
        [Input("resourceGroupName", required: true)]
        public Input<string> ResourceGroupName { get; set; } = null!;

        /// <summary>
        /// A `sku` block as defined below.
        /// </summary>
        [Input("sku", required: true)]
        public Input<Inputs.IotHubDpsSkuArgs> Sku { get; set; } = null!;

        [Input("tags")]
        private InputMap<object>? _tags;

        /// <summary>
        /// A mapping of tags to assign to the resource.
        /// </summary>
        public InputMap<object> Tags
        {
            get => _tags ?? (_tags = new InputMap<object>());
            set => _tags = value;
        }

        public IotHubDpsArgs()
        {
        }
    }

    public sealed class IotHubDpsState : Pulumi.ResourceArgs
    {
        /// <summary>
        /// The allocation policy of the IoT Device Provisioning Service.
        /// </summary>
        [Input("allocationPolicy")]
        public Input<string>? AllocationPolicy { get; set; }

        /// <summary>
        /// The device endpoint of the IoT Device Provisioning Service.
        /// </summary>
        [Input("deviceProvisioningHostName")]
        public Input<string>? DeviceProvisioningHostName { get; set; }

        /// <summary>
        /// The unique identifier of the IoT Device Provisioning Service.
        /// </summary>
        [Input("idScope")]
        public Input<string>? IdScope { get; set; }

        [Input("linkedHubs")]
        private InputList<Inputs.IotHubDpsLinkedHubsGetArgs>? _linkedHubs;

        /// <summary>
        /// A `linked_hub` block as defined below.
        /// </summary>
        public InputList<Inputs.IotHubDpsLinkedHubsGetArgs> LinkedHubs
        {
            get => _linkedHubs ?? (_linkedHubs = new InputList<Inputs.IotHubDpsLinkedHubsGetArgs>());
            set => _linkedHubs = value;
        }

        /// <summary>
        /// Specifies the supported Azure location where the resource has to be createc. Changing this forces a new resource to be created.
        /// </summary>
        [Input("location")]
        public Input<string>? Location { get; set; }

        /// <summary>
        /// Specifies the name of the Iot Device Provisioning Service resource. Changing this forces a new resource to be created.
        /// </summary>
        [Input("name")]
        public Input<string>? Name { get; set; }

        /// <summary>
        /// The name of the resource group under which the Iot Device Provisioning Service resource has to be created. Changing this forces a new resource to be created.
        /// </summary>
        [Input("resourceGroupName")]
        public Input<string>? ResourceGroupName { get; set; }

        /// <summary>
        /// The service endpoint of the IoT Device Provisioning Service.
        /// </summary>
        [Input("serviceOperationsHostName")]
        public Input<string>? ServiceOperationsHostName { get; set; }

        /// <summary>
        /// A `sku` block as defined below.
        /// </summary>
        [Input("sku")]
        public Input<Inputs.IotHubDpsSkuGetArgs>? Sku { get; set; }

        [Input("tags")]
        private InputMap<object>? _tags;

        /// <summary>
        /// A mapping of tags to assign to the resource.
        /// </summary>
        public InputMap<object> Tags
        {
            get => _tags ?? (_tags = new InputMap<object>());
            set => _tags = value;
        }

        public IotHubDpsState()
        {
        }
    }

    namespace Inputs
    {

    public sealed class IotHubDpsLinkedHubsArgs : Pulumi.ResourceArgs
    {
        [Input("allocationWeight")]
        public Input<int>? AllocationWeight { get; set; }

        [Input("applyAllocationPolicy")]
        public Input<bool>? ApplyAllocationPolicy { get; set; }

        [Input("connectionString", required: true)]
        public Input<string> ConnectionString { get; set; } = null!;

        [Input("hostname")]
        public Input<string>? Hostname { get; set; }

        /// <summary>
        /// Specifies the supported Azure location where the resource has to be createc. Changing this forces a new resource to be created.
        /// </summary>
        [Input("location", required: true)]
        public Input<string> Location { get; set; } = null!;

        public IotHubDpsLinkedHubsArgs()
        {
        }
    }

    public sealed class IotHubDpsLinkedHubsGetArgs : Pulumi.ResourceArgs
    {
        [Input("allocationWeight")]
        public Input<int>? AllocationWeight { get; set; }

        [Input("applyAllocationPolicy")]
        public Input<bool>? ApplyAllocationPolicy { get; set; }

        [Input("connectionString", required: true)]
        public Input<string> ConnectionString { get; set; } = null!;

        [Input("hostname")]
        public Input<string>? Hostname { get; set; }

        /// <summary>
        /// Specifies the supported Azure location where the resource has to be createc. Changing this forces a new resource to be created.
        /// </summary>
        [Input("location", required: true)]
        public Input<string> Location { get; set; } = null!;

        public IotHubDpsLinkedHubsGetArgs()
        {
        }
    }

    public sealed class IotHubDpsSkuArgs : Pulumi.ResourceArgs
    {
        [Input("capacity", required: true)]
        public Input<int> Capacity { get; set; } = null!;

        /// <summary>
        /// Specifies the name of the Iot Device Provisioning Service resource. Changing this forces a new resource to be created.
        /// </summary>
        [Input("name", required: true)]
        public Input<string> Name { get; set; } = null!;

        [Input("tier", required: true)]
        public Input<string> Tier { get; set; } = null!;

        public IotHubDpsSkuArgs()
        {
        }
    }

    public sealed class IotHubDpsSkuGetArgs : Pulumi.ResourceArgs
    {
        [Input("capacity", required: true)]
        public Input<int> Capacity { get; set; } = null!;

        /// <summary>
        /// Specifies the name of the Iot Device Provisioning Service resource. Changing this forces a new resource to be created.
        /// </summary>
        [Input("name", required: true)]
        public Input<string> Name { get; set; } = null!;

        [Input("tier", required: true)]
        public Input<string> Tier { get; set; } = null!;

        public IotHubDpsSkuGetArgs()
        {
        }
    }
    }

    namespace Outputs
    {

    [OutputType]
    public sealed class IotHubDpsLinkedHubs
    {
        public readonly int? AllocationWeight;
        public readonly bool? ApplyAllocationPolicy;
        public readonly string ConnectionString;
        public readonly string Hostname;
        /// <summary>
        /// Specifies the supported Azure location where the resource has to be createc. Changing this forces a new resource to be created.
        /// </summary>
        public readonly string Location;

        [OutputConstructor]
        private IotHubDpsLinkedHubs(
            int? allocationWeight,
            bool? applyAllocationPolicy,
            string connectionString,
            string hostname,
            string location)
        {
            AllocationWeight = allocationWeight;
            ApplyAllocationPolicy = applyAllocationPolicy;
            ConnectionString = connectionString;
            Hostname = hostname;
            Location = location;
        }
    }

    [OutputType]
    public sealed class IotHubDpsSku
    {
        public readonly int Capacity;
        /// <summary>
        /// Specifies the name of the Iot Device Provisioning Service resource. Changing this forces a new resource to be created.
        /// </summary>
        public readonly string Name;
        public readonly string Tier;

        [OutputConstructor]
        private IotHubDpsSku(
            int capacity,
            string name,
            string tier)
        {
            Capacity = capacity;
            Name = name;
            Tier = tier;
        }
    }
    }
}
