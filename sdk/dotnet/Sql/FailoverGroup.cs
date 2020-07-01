// *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

using System;
using System.Collections.Generic;
using System.Collections.Immutable;
using System.Threading.Tasks;
using Pulumi.Serialization;

namespace Pulumi.Azure.Sql
{
    /// <summary>
    /// Create a failover group of databases on a collection of Azure SQL servers.
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
    ///             Location = "uksouth",
    ///         });
    ///         var primary = new Azure.Sql.SqlServer("primary", new Azure.Sql.SqlServerArgs
    ///         {
    ///             ResourceGroupName = exampleResourceGroup.Name,
    ///             Location = exampleResourceGroup.Location,
    ///             Version = "12.0",
    ///             AdministratorLogin = "sqladmin",
    ///             AdministratorLoginPassword = "pa$$w0rd",
    ///         });
    ///         var secondary = new Azure.Sql.SqlServer("secondary", new Azure.Sql.SqlServerArgs
    ///         {
    ///             ResourceGroupName = exampleResourceGroup.Name,
    ///             Location = "northeurope",
    ///             Version = "12.0",
    ///             AdministratorLogin = "sqladmin",
    ///             AdministratorLoginPassword = "pa$$w0rd",
    ///         });
    ///         var db1 = new Azure.Sql.Database("db1", new Azure.Sql.DatabaseArgs
    ///         {
    ///             ResourceGroupName = primary.ResourceGroupName,
    ///             Location = primary.Location,
    ///             ServerName = primary.Name,
    ///         });
    ///         var exampleFailoverGroup = new Azure.Sql.FailoverGroup("exampleFailoverGroup", new Azure.Sql.FailoverGroupArgs
    ///         {
    ///             ResourceGroupName = primary.ResourceGroupName,
    ///             ServerName = primary.Name,
    ///             Databases = 
    ///             {
    ///                 db1.Id,
    ///             },
    ///             PartnerServers = 
    ///             {
    ///                 new Azure.Sql.Inputs.FailoverGroupPartnerServerArgs
    ///                 {
    ///                     Id = secondary.Id,
    ///                 },
    ///             },
    ///             ReadWriteEndpointFailoverPolicy = new Azure.Sql.Inputs.FailoverGroupReadWriteEndpointFailoverPolicyArgs
    ///             {
    ///                 Mode = "Automatic",
    ///                 GraceMinutes = 60,
    ///             },
    ///         });
    ///     }
    /// 
    /// }
    /// ```
    /// </summary>
    public partial class FailoverGroup : Pulumi.CustomResource
    {
        /// <summary>
        /// A list of database ids to add to the failover group
        /// </summary>
        [Output("databases")]
        public Output<ImmutableArray<string>> Databases { get; private set; } = null!;

        /// <summary>
        /// the location of the failover group.
        /// </summary>
        [Output("location")]
        public Output<string> Location { get; private set; } = null!;

        /// <summary>
        /// The name of the failover group. Changing this forces a new resource to be created.
        /// </summary>
        [Output("name")]
        public Output<string> Name { get; private set; } = null!;

        /// <summary>
        /// A list of secondary servers as documented below
        /// </summary>
        [Output("partnerServers")]
        public Output<ImmutableArray<Outputs.FailoverGroupPartnerServer>> PartnerServers { get; private set; } = null!;

        /// <summary>
        /// A read/write policy as documented below
        /// </summary>
        [Output("readWriteEndpointFailoverPolicy")]
        public Output<Outputs.FailoverGroupReadWriteEndpointFailoverPolicy> ReadWriteEndpointFailoverPolicy { get; private set; } = null!;

        /// <summary>
        /// a read-only policy as documented below
        /// </summary>
        [Output("readonlyEndpointFailoverPolicy")]
        public Output<Outputs.FailoverGroupReadonlyEndpointFailoverPolicy> ReadonlyEndpointFailoverPolicy { get; private set; } = null!;

        /// <summary>
        /// The name of the resource group containing the SQL server
        /// </summary>
        [Output("resourceGroupName")]
        public Output<string> ResourceGroupName { get; private set; } = null!;

        /// <summary>
        /// local replication role of the failover group instance.
        /// </summary>
        [Output("role")]
        public Output<string> Role { get; private set; } = null!;

        /// <summary>
        /// The name of the primary SQL server. Changing this forces a new resource to be created.
        /// </summary>
        [Output("serverName")]
        public Output<string> ServerName { get; private set; } = null!;

        /// <summary>
        /// A mapping of tags to assign to the resource.
        /// </summary>
        [Output("tags")]
        public Output<ImmutableDictionary<string, string>?> Tags { get; private set; } = null!;


        /// <summary>
        /// Create a FailoverGroup resource with the given unique name, arguments, and options.
        /// </summary>
        ///
        /// <param name="name">The unique name of the resource</param>
        /// <param name="args">The arguments used to populate this resource's properties</param>
        /// <param name="options">A bag of options that control this resource's behavior</param>
        public FailoverGroup(string name, FailoverGroupArgs args, CustomResourceOptions? options = null)
            : base("azure:sql/failoverGroup:FailoverGroup", name, args ?? new FailoverGroupArgs(), MakeResourceOptions(options, ""))
        {
        }

        private FailoverGroup(string name, Input<string> id, FailoverGroupState? state = null, CustomResourceOptions? options = null)
            : base("azure:sql/failoverGroup:FailoverGroup", name, state, MakeResourceOptions(options, id))
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
        /// Get an existing FailoverGroup resource's state with the given name, ID, and optional extra
        /// properties used to qualify the lookup.
        /// </summary>
        ///
        /// <param name="name">The unique name of the resulting resource.</param>
        /// <param name="id">The unique provider ID of the resource to lookup.</param>
        /// <param name="state">Any extra arguments used during the lookup.</param>
        /// <param name="options">A bag of options that control this resource's behavior</param>
        public static FailoverGroup Get(string name, Input<string> id, FailoverGroupState? state = null, CustomResourceOptions? options = null)
        {
            return new FailoverGroup(name, id, state, options);
        }
    }

    public sealed class FailoverGroupArgs : Pulumi.ResourceArgs
    {
        [Input("databases")]
        private InputList<string>? _databases;

        /// <summary>
        /// A list of database ids to add to the failover group
        /// </summary>
        public InputList<string> Databases
        {
            get => _databases ?? (_databases = new InputList<string>());
            set => _databases = value;
        }

        /// <summary>
        /// The name of the failover group. Changing this forces a new resource to be created.
        /// </summary>
        [Input("name")]
        public Input<string>? Name { get; set; }

        [Input("partnerServers", required: true)]
        private InputList<Inputs.FailoverGroupPartnerServerArgs>? _partnerServers;

        /// <summary>
        /// A list of secondary servers as documented below
        /// </summary>
        public InputList<Inputs.FailoverGroupPartnerServerArgs> PartnerServers
        {
            get => _partnerServers ?? (_partnerServers = new InputList<Inputs.FailoverGroupPartnerServerArgs>());
            set => _partnerServers = value;
        }

        /// <summary>
        /// A read/write policy as documented below
        /// </summary>
        [Input("readWriteEndpointFailoverPolicy", required: true)]
        public Input<Inputs.FailoverGroupReadWriteEndpointFailoverPolicyArgs> ReadWriteEndpointFailoverPolicy { get; set; } = null!;

        /// <summary>
        /// a read-only policy as documented below
        /// </summary>
        [Input("readonlyEndpointFailoverPolicy")]
        public Input<Inputs.FailoverGroupReadonlyEndpointFailoverPolicyArgs>? ReadonlyEndpointFailoverPolicy { get; set; }

        /// <summary>
        /// The name of the resource group containing the SQL server
        /// </summary>
        [Input("resourceGroupName", required: true)]
        public Input<string> ResourceGroupName { get; set; } = null!;

        /// <summary>
        /// The name of the primary SQL server. Changing this forces a new resource to be created.
        /// </summary>
        [Input("serverName", required: true)]
        public Input<string> ServerName { get; set; } = null!;

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

        public FailoverGroupArgs()
        {
        }
    }

    public sealed class FailoverGroupState : Pulumi.ResourceArgs
    {
        [Input("databases")]
        private InputList<string>? _databases;

        /// <summary>
        /// A list of database ids to add to the failover group
        /// </summary>
        public InputList<string> Databases
        {
            get => _databases ?? (_databases = new InputList<string>());
            set => _databases = value;
        }

        /// <summary>
        /// the location of the failover group.
        /// </summary>
        [Input("location")]
        public Input<string>? Location { get; set; }

        /// <summary>
        /// The name of the failover group. Changing this forces a new resource to be created.
        /// </summary>
        [Input("name")]
        public Input<string>? Name { get; set; }

        [Input("partnerServers")]
        private InputList<Inputs.FailoverGroupPartnerServerGetArgs>? _partnerServers;

        /// <summary>
        /// A list of secondary servers as documented below
        /// </summary>
        public InputList<Inputs.FailoverGroupPartnerServerGetArgs> PartnerServers
        {
            get => _partnerServers ?? (_partnerServers = new InputList<Inputs.FailoverGroupPartnerServerGetArgs>());
            set => _partnerServers = value;
        }

        /// <summary>
        /// A read/write policy as documented below
        /// </summary>
        [Input("readWriteEndpointFailoverPolicy")]
        public Input<Inputs.FailoverGroupReadWriteEndpointFailoverPolicyGetArgs>? ReadWriteEndpointFailoverPolicy { get; set; }

        /// <summary>
        /// a read-only policy as documented below
        /// </summary>
        [Input("readonlyEndpointFailoverPolicy")]
        public Input<Inputs.FailoverGroupReadonlyEndpointFailoverPolicyGetArgs>? ReadonlyEndpointFailoverPolicy { get; set; }

        /// <summary>
        /// The name of the resource group containing the SQL server
        /// </summary>
        [Input("resourceGroupName")]
        public Input<string>? ResourceGroupName { get; set; }

        /// <summary>
        /// local replication role of the failover group instance.
        /// </summary>
        [Input("role")]
        public Input<string>? Role { get; set; }

        /// <summary>
        /// The name of the primary SQL server. Changing this forces a new resource to be created.
        /// </summary>
        [Input("serverName")]
        public Input<string>? ServerName { get; set; }

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

        public FailoverGroupState()
        {
        }
    }
}
