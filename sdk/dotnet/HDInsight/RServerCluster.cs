// *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

using System;
using System.Collections.Generic;
using System.Collections.Immutable;
using System.Threading.Tasks;
using Pulumi.Serialization;

namespace Pulumi.Azure.HDInsight
{
    /// <summary>
    /// Manages a HDInsight RServer Cluster.
    /// 
    /// !&gt; **Note:** [HDInsight 3.6 is deprecated and will be retired on 2020-12-31 - HDInsight 4.0 no longer supports RServer Clusters](https://docs.microsoft.com/en-us/azure/hdinsight/hdinsight-component-versioning#available-versions) - as such this resource is deprecated and will be removed in the next major version of the Provider.
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
    ///         var exampleAccount = new Azure.Storage.Account("exampleAccount", new Azure.Storage.AccountArgs
    ///         {
    ///             ResourceGroupName = exampleResourceGroup.Name,
    ///             Location = exampleResourceGroup.Location,
    ///             AccountTier = "Standard",
    ///             AccountReplicationType = "LRS",
    ///         });
    ///         var exampleContainer = new Azure.Storage.Container("exampleContainer", new Azure.Storage.ContainerArgs
    ///         {
    ///             StorageAccountName = exampleAccount.Name,
    ///             ContainerAccessType = "private",
    ///         });
    ///         var exampleRServerCluster = new Azure.HDInsight.RServerCluster("exampleRServerCluster", new Azure.HDInsight.RServerClusterArgs
    ///         {
    ///             ResourceGroupName = exampleResourceGroup.Name,
    ///             Location = exampleResourceGroup.Location,
    ///             ClusterVersion = "3.6",
    ///             Tier = "Standard",
    ///             Rstudio = true,
    ///             Gateway = new Azure.HDInsight.Inputs.RServerClusterGatewayArgs
    ///             {
    ///                 Enabled = true,
    ///                 Username = "acctestusrgw",
    ///                 Password = "Password123!",
    ///             },
    ///             StorageAccounts = 
    ///             {
    ///                 new Azure.HDInsight.Inputs.RServerClusterStorageAccountArgs
    ///                 {
    ///                     StorageContainerId = exampleContainer.Id,
    ///                     StorageAccountKey = exampleAccount.PrimaryAccessKey,
    ///                     IsDefault = true,
    ///                 },
    ///             },
    ///             Roles = new Azure.HDInsight.Inputs.RServerClusterRolesArgs
    ///             {
    ///                 HeadNode = new Azure.HDInsight.Inputs.RServerClusterRolesHeadNodeArgs
    ///                 {
    ///                     VmSize = "Standard_D3_v2",
    ///                     Username = "acctestusrvm",
    ///                     Password = "AccTestvdSC4daf986!",
    ///                 },
    ///                 WorkerNode = new Azure.HDInsight.Inputs.RServerClusterRolesWorkerNodeArgs
    ///                 {
    ///                     VmSize = "Standard_D4_V2",
    ///                     Username = "acctestusrvm",
    ///                     Password = "AccTestvdSC4daf986!",
    ///                     TargetInstanceCount = 3,
    ///                 },
    ///                 ZookeeperNode = new Azure.HDInsight.Inputs.RServerClusterRolesZookeeperNodeArgs
    ///                 {
    ///                     VmSize = "Standard_D3_v2",
    ///                     Username = "acctestusrvm",
    ///                     Password = "AccTestvdSC4daf986!",
    ///                 },
    ///                 EdgeNode = new Azure.HDInsight.Inputs.RServerClusterRolesEdgeNodeArgs
    ///                 {
    ///                     VmSize = "Standard_D3_v2",
    ///                     Username = "acctestusrvm",
    ///                     Password = "AccTestvdSC4daf986!",
    ///                 },
    ///             },
    ///         });
    ///     }
    /// 
    /// }
    /// ```
    /// </summary>
    public partial class RServerCluster : Pulumi.CustomResource
    {
        /// <summary>
        /// Specifies the Version of HDInsights which should be used for this Cluster. Changing this forces a new resource to be created.
        /// </summary>
        [Output("clusterVersion")]
        public Output<string> ClusterVersion { get; private set; } = null!;

        /// <summary>
        /// The SSH Connectivity Endpoint for the Edge Node of the HDInsight RServer Cluster.
        /// </summary>
        [Output("edgeSshEndpoint")]
        public Output<string> EdgeSshEndpoint { get; private set; } = null!;

        /// <summary>
        /// A `gateway` block as defined below.
        /// </summary>
        [Output("gateway")]
        public Output<Outputs.RServerClusterGateway> Gateway { get; private set; } = null!;

        /// <summary>
        /// The HTTPS Connectivity Endpoint for this HDInsight RServer Cluster.
        /// </summary>
        [Output("httpsEndpoint")]
        public Output<string> HttpsEndpoint { get; private set; } = null!;

        /// <summary>
        /// Specifies the Azure Region which this HDInsight RServer Cluster should exist. Changing this forces a new resource to be created.
        /// </summary>
        [Output("location")]
        public Output<string> Location { get; private set; } = null!;

        /// <summary>
        /// Specifies the name for this HDInsight RServer Cluster. Changing this forces a new resource to be created.
        /// </summary>
        [Output("name")]
        public Output<string> Name { get; private set; } = null!;

        /// <summary>
        /// Specifies the name of the Resource Group in which this HDInsight RServer Cluster should exist. Changing this forces a new resource to be created.
        /// </summary>
        [Output("resourceGroupName")]
        public Output<string> ResourceGroupName { get; private set; } = null!;

        /// <summary>
        /// A `roles` block as defined below.
        /// </summary>
        [Output("roles")]
        public Output<Outputs.RServerClusterRoles> Roles { get; private set; } = null!;

        /// <summary>
        /// Should R Studio community edition for RServer be installed? Changing this forces a new resource to be created.
        /// </summary>
        [Output("rstudio")]
        public Output<bool> Rstudio { get; private set; } = null!;

        /// <summary>
        /// The SSH Connectivity Endpoint for this HDInsight RServer Cluster.
        /// </summary>
        [Output("sshEndpoint")]
        public Output<string> SshEndpoint { get; private set; } = null!;

        /// <summary>
        /// One or more `storage_account` block as defined below.
        /// </summary>
        [Output("storageAccounts")]
        public Output<ImmutableArray<Outputs.RServerClusterStorageAccount>> StorageAccounts { get; private set; } = null!;

        /// <summary>
        /// A map of Tags which should be assigned to this HDInsight RServer Cluster.
        /// </summary>
        [Output("tags")]
        public Output<ImmutableDictionary<string, string>?> Tags { get; private set; } = null!;

        /// <summary>
        /// Specifies the Tier which should be used for this HDInsight RServer Cluster. Possible values are `Standard` or `Premium`. Changing this forces a new resource to be created.
        /// </summary>
        [Output("tier")]
        public Output<string> Tier { get; private set; } = null!;

        [Output("tlsMinVersion")]
        public Output<string?> TlsMinVersion { get; private set; } = null!;


        /// <summary>
        /// Create a RServerCluster resource with the given unique name, arguments, and options.
        /// </summary>
        ///
        /// <param name="name">The unique name of the resource</param>
        /// <param name="args">The arguments used to populate this resource's properties</param>
        /// <param name="options">A bag of options that control this resource's behavior</param>
        public RServerCluster(string name, RServerClusterArgs args, CustomResourceOptions? options = null)
            : base("azure:hdinsight/rServerCluster:RServerCluster", name, args ?? new RServerClusterArgs(), MakeResourceOptions(options, ""))
        {
        }

        private RServerCluster(string name, Input<string> id, RServerClusterState? state = null, CustomResourceOptions? options = null)
            : base("azure:hdinsight/rServerCluster:RServerCluster", name, state, MakeResourceOptions(options, id))
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
        /// Get an existing RServerCluster resource's state with the given name, ID, and optional extra
        /// properties used to qualify the lookup.
        /// </summary>
        ///
        /// <param name="name">The unique name of the resulting resource.</param>
        /// <param name="id">The unique provider ID of the resource to lookup.</param>
        /// <param name="state">Any extra arguments used during the lookup.</param>
        /// <param name="options">A bag of options that control this resource's behavior</param>
        public static RServerCluster Get(string name, Input<string> id, RServerClusterState? state = null, CustomResourceOptions? options = null)
        {
            return new RServerCluster(name, id, state, options);
        }
    }

    public sealed class RServerClusterArgs : Pulumi.ResourceArgs
    {
        /// <summary>
        /// Specifies the Version of HDInsights which should be used for this Cluster. Changing this forces a new resource to be created.
        /// </summary>
        [Input("clusterVersion", required: true)]
        public Input<string> ClusterVersion { get; set; } = null!;

        /// <summary>
        /// A `gateway` block as defined below.
        /// </summary>
        [Input("gateway", required: true)]
        public Input<Inputs.RServerClusterGatewayArgs> Gateway { get; set; } = null!;

        /// <summary>
        /// Specifies the Azure Region which this HDInsight RServer Cluster should exist. Changing this forces a new resource to be created.
        /// </summary>
        [Input("location")]
        public Input<string>? Location { get; set; }

        /// <summary>
        /// Specifies the name for this HDInsight RServer Cluster. Changing this forces a new resource to be created.
        /// </summary>
        [Input("name")]
        public Input<string>? Name { get; set; }

        /// <summary>
        /// Specifies the name of the Resource Group in which this HDInsight RServer Cluster should exist. Changing this forces a new resource to be created.
        /// </summary>
        [Input("resourceGroupName", required: true)]
        public Input<string> ResourceGroupName { get; set; } = null!;

        /// <summary>
        /// A `roles` block as defined below.
        /// </summary>
        [Input("roles", required: true)]
        public Input<Inputs.RServerClusterRolesArgs> Roles { get; set; } = null!;

        /// <summary>
        /// Should R Studio community edition for RServer be installed? Changing this forces a new resource to be created.
        /// </summary>
        [Input("rstudio", required: true)]
        public Input<bool> Rstudio { get; set; } = null!;

        [Input("storageAccounts")]
        private InputList<Inputs.RServerClusterStorageAccountArgs>? _storageAccounts;

        /// <summary>
        /// One or more `storage_account` block as defined below.
        /// </summary>
        public InputList<Inputs.RServerClusterStorageAccountArgs> StorageAccounts
        {
            get => _storageAccounts ?? (_storageAccounts = new InputList<Inputs.RServerClusterStorageAccountArgs>());
            set => _storageAccounts = value;
        }

        [Input("tags")]
        private InputMap<string>? _tags;

        /// <summary>
        /// A map of Tags which should be assigned to this HDInsight RServer Cluster.
        /// </summary>
        public InputMap<string> Tags
        {
            get => _tags ?? (_tags = new InputMap<string>());
            set => _tags = value;
        }

        /// <summary>
        /// Specifies the Tier which should be used for this HDInsight RServer Cluster. Possible values are `Standard` or `Premium`. Changing this forces a new resource to be created.
        /// </summary>
        [Input("tier", required: true)]
        public Input<string> Tier { get; set; } = null!;

        [Input("tlsMinVersion")]
        public Input<string>? TlsMinVersion { get; set; }

        public RServerClusterArgs()
        {
        }
    }

    public sealed class RServerClusterState : Pulumi.ResourceArgs
    {
        /// <summary>
        /// Specifies the Version of HDInsights which should be used for this Cluster. Changing this forces a new resource to be created.
        /// </summary>
        [Input("clusterVersion")]
        public Input<string>? ClusterVersion { get; set; }

        /// <summary>
        /// The SSH Connectivity Endpoint for the Edge Node of the HDInsight RServer Cluster.
        /// </summary>
        [Input("edgeSshEndpoint")]
        public Input<string>? EdgeSshEndpoint { get; set; }

        /// <summary>
        /// A `gateway` block as defined below.
        /// </summary>
        [Input("gateway")]
        public Input<Inputs.RServerClusterGatewayGetArgs>? Gateway { get; set; }

        /// <summary>
        /// The HTTPS Connectivity Endpoint for this HDInsight RServer Cluster.
        /// </summary>
        [Input("httpsEndpoint")]
        public Input<string>? HttpsEndpoint { get; set; }

        /// <summary>
        /// Specifies the Azure Region which this HDInsight RServer Cluster should exist. Changing this forces a new resource to be created.
        /// </summary>
        [Input("location")]
        public Input<string>? Location { get; set; }

        /// <summary>
        /// Specifies the name for this HDInsight RServer Cluster. Changing this forces a new resource to be created.
        /// </summary>
        [Input("name")]
        public Input<string>? Name { get; set; }

        /// <summary>
        /// Specifies the name of the Resource Group in which this HDInsight RServer Cluster should exist. Changing this forces a new resource to be created.
        /// </summary>
        [Input("resourceGroupName")]
        public Input<string>? ResourceGroupName { get; set; }

        /// <summary>
        /// A `roles` block as defined below.
        /// </summary>
        [Input("roles")]
        public Input<Inputs.RServerClusterRolesGetArgs>? Roles { get; set; }

        /// <summary>
        /// Should R Studio community edition for RServer be installed? Changing this forces a new resource to be created.
        /// </summary>
        [Input("rstudio")]
        public Input<bool>? Rstudio { get; set; }

        /// <summary>
        /// The SSH Connectivity Endpoint for this HDInsight RServer Cluster.
        /// </summary>
        [Input("sshEndpoint")]
        public Input<string>? SshEndpoint { get; set; }

        [Input("storageAccounts")]
        private InputList<Inputs.RServerClusterStorageAccountGetArgs>? _storageAccounts;

        /// <summary>
        /// One or more `storage_account` block as defined below.
        /// </summary>
        public InputList<Inputs.RServerClusterStorageAccountGetArgs> StorageAccounts
        {
            get => _storageAccounts ?? (_storageAccounts = new InputList<Inputs.RServerClusterStorageAccountGetArgs>());
            set => _storageAccounts = value;
        }

        [Input("tags")]
        private InputMap<string>? _tags;

        /// <summary>
        /// A map of Tags which should be assigned to this HDInsight RServer Cluster.
        /// </summary>
        public InputMap<string> Tags
        {
            get => _tags ?? (_tags = new InputMap<string>());
            set => _tags = value;
        }

        /// <summary>
        /// Specifies the Tier which should be used for this HDInsight RServer Cluster. Possible values are `Standard` or `Premium`. Changing this forces a new resource to be created.
        /// </summary>
        [Input("tier")]
        public Input<string>? Tier { get; set; }

        [Input("tlsMinVersion")]
        public Input<string>? TlsMinVersion { get; set; }

        public RServerClusterState()
        {
        }
    }
}
