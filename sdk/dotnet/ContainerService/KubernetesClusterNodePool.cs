// *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

using System;
using System.Collections.Generic;
using System.Collections.Immutable;
using System.Threading.Tasks;
using Pulumi.Serialization;

namespace Pulumi.Azure.ContainerService
{
    /// <summary>
    /// Manages a Node Pool within a Kubernetes Cluster
    /// 
    /// &gt; **NOTE:** Multiple Node Pools are only supported when the Kubernetes Cluster is using Virtual Machine Scale Sets.
    /// 
    /// ## Example Usage
    /// 
    /// This example provisions a basic Kubernetes Node Pool.
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
    ///         var exampleKubernetesCluster = new Azure.ContainerService.KubernetesCluster("exampleKubernetesCluster", new Azure.ContainerService.KubernetesClusterArgs
    ///         {
    ///             Location = exampleResourceGroup.Location,
    ///             ResourceGroupName = exampleResourceGroup.Name,
    ///             DnsPrefix = "exampleaks1",
    ///             DefaultNodePool = new Azure.ContainerService.Inputs.KubernetesClusterDefaultNodePoolArgs
    ///             {
    ///                 Name = "default",
    ///                 NodeCount = 1,
    ///                 VmSize = "Standard_D2_v2",
    ///             },
    ///             ServicePrincipal = new Azure.ContainerService.Inputs.KubernetesClusterServicePrincipalArgs
    ///             {
    ///                 ClientId = "00000000-0000-0000-0000-000000000000",
    ///                 ClientSecret = "00000000000000000000000000000000",
    ///             },
    ///         });
    ///         var exampleKubernetesClusterNodePool = new Azure.ContainerService.KubernetesClusterNodePool("exampleKubernetesClusterNodePool", new Azure.ContainerService.KubernetesClusterNodePoolArgs
    ///         {
    ///             KubernetesClusterId = exampleKubernetesCluster.Id,
    ///             VmSize = "Standard_DS2_v2",
    ///             NodeCount = 1,
    ///             Tags = 
    ///             {
    ///                 { "Environment", "Production" },
    ///             },
    ///         });
    ///     }
    /// 
    /// }
    /// ```
    /// </summary>
    public partial class KubernetesClusterNodePool : Pulumi.CustomResource
    {
        /// <summary>
        /// A list of Availability Zones where the Nodes in this Node Pool should be created in.
        /// </summary>
        [Output("availabilityZones")]
        public Output<ImmutableArray<string>> AvailabilityZones { get; private set; } = null!;

        /// <summary>
        /// Whether to enable [auto-scaler](https://docs.microsoft.com/en-us/azure/aks/cluster-autoscaler). Defaults to `false`.
        /// </summary>
        [Output("enableAutoScaling")]
        public Output<bool?> EnableAutoScaling { get; private set; } = null!;

        /// <summary>
        /// Should each node have a Public IP Address? Defaults to `false`.
        /// </summary>
        [Output("enableNodePublicIp")]
        public Output<bool?> EnableNodePublicIp { get; private set; } = null!;

        /// <summary>
        /// The Eviction Policy which should be used for Virtual Machines within the Virtual Machine Scale Set powering this Node Pool. Possible values are `Deallocate` and `Delete`. Changing this forces a new resource to be created.
        /// </summary>
        [Output("evictionPolicy")]
        public Output<string?> EvictionPolicy { get; private set; } = null!;

        /// <summary>
        /// The ID of the Kubernetes Cluster where this Node Pool should exist. Changing this forces a new resource to be created.
        /// </summary>
        [Output("kubernetesClusterId")]
        public Output<string> KubernetesClusterId { get; private set; } = null!;

        /// <summary>
        /// The maximum number of nodes which should exist within this Node Pool. Valid values are between `1` and `100` and must be greater than or equal to `min_count`.
        /// </summary>
        [Output("maxCount")]
        public Output<int?> MaxCount { get; private set; } = null!;

        /// <summary>
        /// The maximum number of pods that can run on each agent. Changing this forces a new resource to be created.
        /// </summary>
        [Output("maxPods")]
        public Output<int> MaxPods { get; private set; } = null!;

        /// <summary>
        /// The minimum number of nodes which should exist within this Node Pool. Valid values are between `1` and `100` and must be less than or equal to `max_count`.
        /// </summary>
        [Output("minCount")]
        public Output<int?> MinCount { get; private set; } = null!;

        /// <summary>
        /// Should this Node Pool be used for System or User resources? Possible values are `System` and `User`. Defaults to `User`.
        /// </summary>
        [Output("mode")]
        public Output<string?> Mode { get; private set; } = null!;

        /// <summary>
        /// The name of the Node Pool which should be created within the Kubernetes Cluster. Changing this forces a new resource to be created.
        /// </summary>
        [Output("name")]
        public Output<string> Name { get; private set; } = null!;

        /// <summary>
        /// The initial number of nodes which should exist within this Node Pool. Valid values are between `1` and `100` and must be a value in the range `min_count` - `max_count`.
        /// </summary>
        [Output("nodeCount")]
        public Output<int> NodeCount { get; private set; } = null!;

        /// <summary>
        /// A map of Kubernetes labels which should be applied to nodes in this Node Pool. Changing this forces a new resource to be created.
        /// </summary>
        [Output("nodeLabels")]
        public Output<ImmutableDictionary<string, string>?> NodeLabels { get; private set; } = null!;

        /// <summary>
        /// A list of Kubernetes taints which should be applied to nodes in the agent pool (e.g `key=value:NoSchedule`). Changing this forces a new resource to be created.
        /// </summary>
        [Output("nodeTaints")]
        public Output<ImmutableArray<string>> NodeTaints { get; private set; } = null!;

        /// <summary>
        /// Version of Kubernetes used for the Agents. If not specified, the latest recommended version will be used at provisioning time (but won't auto-upgrade)
        /// </summary>
        [Output("orchestratorVersion")]
        public Output<string> OrchestratorVersion { get; private set; } = null!;

        /// <summary>
        /// The Agent Operating System disk size in GB. Changing this forces a new resource to be created.
        /// </summary>
        [Output("osDiskSizeGb")]
        public Output<int> OsDiskSizeGb { get; private set; } = null!;

        /// <summary>
        /// The Operating System which should be used for this Node Pool. Changing this forces a new resource to be created. Possible values are `Linux` and `Windows`. Defaults to `Linux`.
        /// </summary>
        [Output("osType")]
        public Output<string?> OsType { get; private set; } = null!;

        /// <summary>
        /// The Priority for Virtual Machines within the Virtual Machine Scale Set that powers this Node Pool. Possible values are `Regular` and `Spot`. Defaults to `Regular`. Changing this forces a new resource to be created.
        /// </summary>
        [Output("priority")]
        public Output<string?> Priority { get; private set; } = null!;

        /// <summary>
        /// The maximum price you're willing to pay in USD per Virtual Machine. Valid values are `-1` (the current on-demand price for a Virtual Machine) or a positive value with up to five decimal places. Changing this forces a new resource to be created.
        /// </summary>
        [Output("spotMaxPrice")]
        public Output<double?> SpotMaxPrice { get; private set; } = null!;

        /// <summary>
        /// A mapping of tags to assign to the resource.
        /// </summary>
        [Output("tags")]
        public Output<ImmutableDictionary<string, string>?> Tags { get; private set; } = null!;

        /// <summary>
        /// The SKU which should be used for the Virtual Machines used in this Node Pool. Changing this forces a new resource to be created.
        /// </summary>
        [Output("vmSize")]
        public Output<string> VmSize { get; private set; } = null!;

        /// <summary>
        /// The ID of the Subnet where this Node Pool should exist.
        /// </summary>
        [Output("vnetSubnetId")]
        public Output<string?> VnetSubnetId { get; private set; } = null!;


        /// <summary>
        /// Create a KubernetesClusterNodePool resource with the given unique name, arguments, and options.
        /// </summary>
        ///
        /// <param name="name">The unique name of the resource</param>
        /// <param name="args">The arguments used to populate this resource's properties</param>
        /// <param name="options">A bag of options that control this resource's behavior</param>
        public KubernetesClusterNodePool(string name, KubernetesClusterNodePoolArgs args, CustomResourceOptions? options = null)
            : base("azure:containerservice/kubernetesClusterNodePool:KubernetesClusterNodePool", name, args ?? new KubernetesClusterNodePoolArgs(), MakeResourceOptions(options, ""))
        {
        }

        private KubernetesClusterNodePool(string name, Input<string> id, KubernetesClusterNodePoolState? state = null, CustomResourceOptions? options = null)
            : base("azure:containerservice/kubernetesClusterNodePool:KubernetesClusterNodePool", name, state, MakeResourceOptions(options, id))
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
        /// Get an existing KubernetesClusterNodePool resource's state with the given name, ID, and optional extra
        /// properties used to qualify the lookup.
        /// </summary>
        ///
        /// <param name="name">The unique name of the resulting resource.</param>
        /// <param name="id">The unique provider ID of the resource to lookup.</param>
        /// <param name="state">Any extra arguments used during the lookup.</param>
        /// <param name="options">A bag of options that control this resource's behavior</param>
        public static KubernetesClusterNodePool Get(string name, Input<string> id, KubernetesClusterNodePoolState? state = null, CustomResourceOptions? options = null)
        {
            return new KubernetesClusterNodePool(name, id, state, options);
        }
    }

    public sealed class KubernetesClusterNodePoolArgs : Pulumi.ResourceArgs
    {
        [Input("availabilityZones")]
        private InputList<string>? _availabilityZones;

        /// <summary>
        /// A list of Availability Zones where the Nodes in this Node Pool should be created in.
        /// </summary>
        public InputList<string> AvailabilityZones
        {
            get => _availabilityZones ?? (_availabilityZones = new InputList<string>());
            set => _availabilityZones = value;
        }

        /// <summary>
        /// Whether to enable [auto-scaler](https://docs.microsoft.com/en-us/azure/aks/cluster-autoscaler). Defaults to `false`.
        /// </summary>
        [Input("enableAutoScaling")]
        public Input<bool>? EnableAutoScaling { get; set; }

        /// <summary>
        /// Should each node have a Public IP Address? Defaults to `false`.
        /// </summary>
        [Input("enableNodePublicIp")]
        public Input<bool>? EnableNodePublicIp { get; set; }

        /// <summary>
        /// The Eviction Policy which should be used for Virtual Machines within the Virtual Machine Scale Set powering this Node Pool. Possible values are `Deallocate` and `Delete`. Changing this forces a new resource to be created.
        /// </summary>
        [Input("evictionPolicy")]
        public Input<string>? EvictionPolicy { get; set; }

        /// <summary>
        /// The ID of the Kubernetes Cluster where this Node Pool should exist. Changing this forces a new resource to be created.
        /// </summary>
        [Input("kubernetesClusterId", required: true)]
        public Input<string> KubernetesClusterId { get; set; } = null!;

        /// <summary>
        /// The maximum number of nodes which should exist within this Node Pool. Valid values are between `1` and `100` and must be greater than or equal to `min_count`.
        /// </summary>
        [Input("maxCount")]
        public Input<int>? MaxCount { get; set; }

        /// <summary>
        /// The maximum number of pods that can run on each agent. Changing this forces a new resource to be created.
        /// </summary>
        [Input("maxPods")]
        public Input<int>? MaxPods { get; set; }

        /// <summary>
        /// The minimum number of nodes which should exist within this Node Pool. Valid values are between `1` and `100` and must be less than or equal to `max_count`.
        /// </summary>
        [Input("minCount")]
        public Input<int>? MinCount { get; set; }

        /// <summary>
        /// Should this Node Pool be used for System or User resources? Possible values are `System` and `User`. Defaults to `User`.
        /// </summary>
        [Input("mode")]
        public Input<string>? Mode { get; set; }

        /// <summary>
        /// The name of the Node Pool which should be created within the Kubernetes Cluster. Changing this forces a new resource to be created.
        /// </summary>
        [Input("name")]
        public Input<string>? Name { get; set; }

        /// <summary>
        /// The initial number of nodes which should exist within this Node Pool. Valid values are between `1` and `100` and must be a value in the range `min_count` - `max_count`.
        /// </summary>
        [Input("nodeCount")]
        public Input<int>? NodeCount { get; set; }

        [Input("nodeLabels")]
        private InputMap<string>? _nodeLabels;

        /// <summary>
        /// A map of Kubernetes labels which should be applied to nodes in this Node Pool. Changing this forces a new resource to be created.
        /// </summary>
        public InputMap<string> NodeLabels
        {
            get => _nodeLabels ?? (_nodeLabels = new InputMap<string>());
            set => _nodeLabels = value;
        }

        [Input("nodeTaints")]
        private InputList<string>? _nodeTaints;

        /// <summary>
        /// A list of Kubernetes taints which should be applied to nodes in the agent pool (e.g `key=value:NoSchedule`). Changing this forces a new resource to be created.
        /// </summary>
        public InputList<string> NodeTaints
        {
            get => _nodeTaints ?? (_nodeTaints = new InputList<string>());
            set => _nodeTaints = value;
        }

        /// <summary>
        /// Version of Kubernetes used for the Agents. If not specified, the latest recommended version will be used at provisioning time (but won't auto-upgrade)
        /// </summary>
        [Input("orchestratorVersion")]
        public Input<string>? OrchestratorVersion { get; set; }

        /// <summary>
        /// The Agent Operating System disk size in GB. Changing this forces a new resource to be created.
        /// </summary>
        [Input("osDiskSizeGb")]
        public Input<int>? OsDiskSizeGb { get; set; }

        /// <summary>
        /// The Operating System which should be used for this Node Pool. Changing this forces a new resource to be created. Possible values are `Linux` and `Windows`. Defaults to `Linux`.
        /// </summary>
        [Input("osType")]
        public Input<string>? OsType { get; set; }

        /// <summary>
        /// The Priority for Virtual Machines within the Virtual Machine Scale Set that powers this Node Pool. Possible values are `Regular` and `Spot`. Defaults to `Regular`. Changing this forces a new resource to be created.
        /// </summary>
        [Input("priority")]
        public Input<string>? Priority { get; set; }

        /// <summary>
        /// The maximum price you're willing to pay in USD per Virtual Machine. Valid values are `-1` (the current on-demand price for a Virtual Machine) or a positive value with up to five decimal places. Changing this forces a new resource to be created.
        /// </summary>
        [Input("spotMaxPrice")]
        public Input<double>? SpotMaxPrice { get; set; }

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

        /// <summary>
        /// The SKU which should be used for the Virtual Machines used in this Node Pool. Changing this forces a new resource to be created.
        /// </summary>
        [Input("vmSize", required: true)]
        public Input<string> VmSize { get; set; } = null!;

        /// <summary>
        /// The ID of the Subnet where this Node Pool should exist.
        /// </summary>
        [Input("vnetSubnetId")]
        public Input<string>? VnetSubnetId { get; set; }

        public KubernetesClusterNodePoolArgs()
        {
        }
    }

    public sealed class KubernetesClusterNodePoolState : Pulumi.ResourceArgs
    {
        [Input("availabilityZones")]
        private InputList<string>? _availabilityZones;

        /// <summary>
        /// A list of Availability Zones where the Nodes in this Node Pool should be created in.
        /// </summary>
        public InputList<string> AvailabilityZones
        {
            get => _availabilityZones ?? (_availabilityZones = new InputList<string>());
            set => _availabilityZones = value;
        }

        /// <summary>
        /// Whether to enable [auto-scaler](https://docs.microsoft.com/en-us/azure/aks/cluster-autoscaler). Defaults to `false`.
        /// </summary>
        [Input("enableAutoScaling")]
        public Input<bool>? EnableAutoScaling { get; set; }

        /// <summary>
        /// Should each node have a Public IP Address? Defaults to `false`.
        /// </summary>
        [Input("enableNodePublicIp")]
        public Input<bool>? EnableNodePublicIp { get; set; }

        /// <summary>
        /// The Eviction Policy which should be used for Virtual Machines within the Virtual Machine Scale Set powering this Node Pool. Possible values are `Deallocate` and `Delete`. Changing this forces a new resource to be created.
        /// </summary>
        [Input("evictionPolicy")]
        public Input<string>? EvictionPolicy { get; set; }

        /// <summary>
        /// The ID of the Kubernetes Cluster where this Node Pool should exist. Changing this forces a new resource to be created.
        /// </summary>
        [Input("kubernetesClusterId")]
        public Input<string>? KubernetesClusterId { get; set; }

        /// <summary>
        /// The maximum number of nodes which should exist within this Node Pool. Valid values are between `1` and `100` and must be greater than or equal to `min_count`.
        /// </summary>
        [Input("maxCount")]
        public Input<int>? MaxCount { get; set; }

        /// <summary>
        /// The maximum number of pods that can run on each agent. Changing this forces a new resource to be created.
        /// </summary>
        [Input("maxPods")]
        public Input<int>? MaxPods { get; set; }

        /// <summary>
        /// The minimum number of nodes which should exist within this Node Pool. Valid values are between `1` and `100` and must be less than or equal to `max_count`.
        /// </summary>
        [Input("minCount")]
        public Input<int>? MinCount { get; set; }

        /// <summary>
        /// Should this Node Pool be used for System or User resources? Possible values are `System` and `User`. Defaults to `User`.
        /// </summary>
        [Input("mode")]
        public Input<string>? Mode { get; set; }

        /// <summary>
        /// The name of the Node Pool which should be created within the Kubernetes Cluster. Changing this forces a new resource to be created.
        /// </summary>
        [Input("name")]
        public Input<string>? Name { get; set; }

        /// <summary>
        /// The initial number of nodes which should exist within this Node Pool. Valid values are between `1` and `100` and must be a value in the range `min_count` - `max_count`.
        /// </summary>
        [Input("nodeCount")]
        public Input<int>? NodeCount { get; set; }

        [Input("nodeLabels")]
        private InputMap<string>? _nodeLabels;

        /// <summary>
        /// A map of Kubernetes labels which should be applied to nodes in this Node Pool. Changing this forces a new resource to be created.
        /// </summary>
        public InputMap<string> NodeLabels
        {
            get => _nodeLabels ?? (_nodeLabels = new InputMap<string>());
            set => _nodeLabels = value;
        }

        [Input("nodeTaints")]
        private InputList<string>? _nodeTaints;

        /// <summary>
        /// A list of Kubernetes taints which should be applied to nodes in the agent pool (e.g `key=value:NoSchedule`). Changing this forces a new resource to be created.
        /// </summary>
        public InputList<string> NodeTaints
        {
            get => _nodeTaints ?? (_nodeTaints = new InputList<string>());
            set => _nodeTaints = value;
        }

        /// <summary>
        /// Version of Kubernetes used for the Agents. If not specified, the latest recommended version will be used at provisioning time (but won't auto-upgrade)
        /// </summary>
        [Input("orchestratorVersion")]
        public Input<string>? OrchestratorVersion { get; set; }

        /// <summary>
        /// The Agent Operating System disk size in GB. Changing this forces a new resource to be created.
        /// </summary>
        [Input("osDiskSizeGb")]
        public Input<int>? OsDiskSizeGb { get; set; }

        /// <summary>
        /// The Operating System which should be used for this Node Pool. Changing this forces a new resource to be created. Possible values are `Linux` and `Windows`. Defaults to `Linux`.
        /// </summary>
        [Input("osType")]
        public Input<string>? OsType { get; set; }

        /// <summary>
        /// The Priority for Virtual Machines within the Virtual Machine Scale Set that powers this Node Pool. Possible values are `Regular` and `Spot`. Defaults to `Regular`. Changing this forces a new resource to be created.
        /// </summary>
        [Input("priority")]
        public Input<string>? Priority { get; set; }

        /// <summary>
        /// The maximum price you're willing to pay in USD per Virtual Machine. Valid values are `-1` (the current on-demand price for a Virtual Machine) or a positive value with up to five decimal places. Changing this forces a new resource to be created.
        /// </summary>
        [Input("spotMaxPrice")]
        public Input<double>? SpotMaxPrice { get; set; }

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

        /// <summary>
        /// The SKU which should be used for the Virtual Machines used in this Node Pool. Changing this forces a new resource to be created.
        /// </summary>
        [Input("vmSize")]
        public Input<string>? VmSize { get; set; }

        /// <summary>
        /// The ID of the Subnet where this Node Pool should exist.
        /// </summary>
        [Input("vnetSubnetId")]
        public Input<string>? VnetSubnetId { get; set; }

        public KubernetesClusterNodePoolState()
        {
        }
    }
}
