// *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

using System;
using System.Collections.Generic;
using System.Collections.Immutable;
using System.Threading.Tasks;
using Pulumi.Serialization;

namespace Pulumi.Azure.OperationalInsights
{
    /// <summary>
    /// Manages a Log Analytics (formally Operational Insights) Workspace.
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
    ///             Location = "East US",
    ///         });
    ///         var exampleAnalyticsWorkspace = new Azure.OperationalInsights.AnalyticsWorkspace("exampleAnalyticsWorkspace", new Azure.OperationalInsights.AnalyticsWorkspaceArgs
    ///         {
    ///             Location = exampleResourceGroup.Location,
    ///             ResourceGroupName = exampleResourceGroup.Name,
    ///             Sku = "PerGB2018",
    ///             RetentionInDays = 30,
    ///         });
    ///     }
    /// 
    /// }
    /// ```
    /// </summary>
    public partial class AnalyticsWorkspace : Pulumi.CustomResource
    {
        /// <summary>
        /// Specifies the supported Azure location where the resource exists. Changing this forces a new resource to be created.
        /// </summary>
        [Output("location")]
        public Output<string> Location { get; private set; } = null!;

        /// <summary>
        /// Specifies the name of the Log Analytics Workspace. Workspace name should include 4-63 letters, digits or '-'. The '-' shouldn't be the first or the last symbol. Changing this forces a new resource to be created.
        /// </summary>
        [Output("name")]
        public Output<string> Name { get; private set; } = null!;

        [Output("portalUrl")]
        public Output<string> PortalUrl { get; private set; } = null!;

        /// <summary>
        /// The Primary shared key for the Log Analytics Workspace.
        /// </summary>
        [Output("primarySharedKey")]
        public Output<string> PrimarySharedKey { get; private set; } = null!;

        /// <summary>
        /// The name of the resource group in which the Log Analytics workspace is created. Changing this forces a new resource to be created.
        /// </summary>
        [Output("resourceGroupName")]
        public Output<string> ResourceGroupName { get; private set; } = null!;

        /// <summary>
        /// The workspace data retention in days. Possible values are either 7 (Free Tier only) or range between 30 and 730.
        /// </summary>
        [Output("retentionInDays")]
        public Output<int> RetentionInDays { get; private set; } = null!;

        /// <summary>
        /// The Secondary shared key for the Log Analytics Workspace.
        /// </summary>
        [Output("secondarySharedKey")]
        public Output<string> SecondarySharedKey { get; private set; } = null!;

        /// <summary>
        /// Specifies the Sku of the Log Analytics Workspace. Possible values are `Free`, `PerNode`, `Premium`, `Standard`, `Standalone`, `Unlimited`, and `PerGB2018` (new Sku as of `2018-04-03`). Defaults to `PerGB2018`.
        /// </summary>
        [Output("sku")]
        public Output<string?> Sku { get; private set; } = null!;

        /// <summary>
        /// A mapping of tags to assign to the resource.
        /// </summary>
        [Output("tags")]
        public Output<ImmutableDictionary<string, string>?> Tags { get; private set; } = null!;

        /// <summary>
        /// The Workspace (or Customer) ID for the Log Analytics Workspace.
        /// </summary>
        [Output("workspaceId")]
        public Output<string> WorkspaceId { get; private set; } = null!;


        /// <summary>
        /// Create a AnalyticsWorkspace resource with the given unique name, arguments, and options.
        /// </summary>
        ///
        /// <param name="name">The unique name of the resource</param>
        /// <param name="args">The arguments used to populate this resource's properties</param>
        /// <param name="options">A bag of options that control this resource's behavior</param>
        public AnalyticsWorkspace(string name, AnalyticsWorkspaceArgs args, CustomResourceOptions? options = null)
            : base("azure:operationalinsights/analyticsWorkspace:AnalyticsWorkspace", name, args ?? new AnalyticsWorkspaceArgs(), MakeResourceOptions(options, ""))
        {
        }

        private AnalyticsWorkspace(string name, Input<string> id, AnalyticsWorkspaceState? state = null, CustomResourceOptions? options = null)
            : base("azure:operationalinsights/analyticsWorkspace:AnalyticsWorkspace", name, state, MakeResourceOptions(options, id))
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
        /// Get an existing AnalyticsWorkspace resource's state with the given name, ID, and optional extra
        /// properties used to qualify the lookup.
        /// </summary>
        ///
        /// <param name="name">The unique name of the resulting resource.</param>
        /// <param name="id">The unique provider ID of the resource to lookup.</param>
        /// <param name="state">Any extra arguments used during the lookup.</param>
        /// <param name="options">A bag of options that control this resource's behavior</param>
        public static AnalyticsWorkspace Get(string name, Input<string> id, AnalyticsWorkspaceState? state = null, CustomResourceOptions? options = null)
        {
            return new AnalyticsWorkspace(name, id, state, options);
        }
    }

    public sealed class AnalyticsWorkspaceArgs : Pulumi.ResourceArgs
    {
        /// <summary>
        /// Specifies the supported Azure location where the resource exists. Changing this forces a new resource to be created.
        /// </summary>
        [Input("location")]
        public Input<string>? Location { get; set; }

        /// <summary>
        /// Specifies the name of the Log Analytics Workspace. Workspace name should include 4-63 letters, digits or '-'. The '-' shouldn't be the first or the last symbol. Changing this forces a new resource to be created.
        /// </summary>
        [Input("name")]
        public Input<string>? Name { get; set; }

        /// <summary>
        /// The name of the resource group in which the Log Analytics workspace is created. Changing this forces a new resource to be created.
        /// </summary>
        [Input("resourceGroupName", required: true)]
        public Input<string> ResourceGroupName { get; set; } = null!;

        /// <summary>
        /// The workspace data retention in days. Possible values are either 7 (Free Tier only) or range between 30 and 730.
        /// </summary>
        [Input("retentionInDays")]
        public Input<int>? RetentionInDays { get; set; }

        /// <summary>
        /// Specifies the Sku of the Log Analytics Workspace. Possible values are `Free`, `PerNode`, `Premium`, `Standard`, `Standalone`, `Unlimited`, and `PerGB2018` (new Sku as of `2018-04-03`). Defaults to `PerGB2018`.
        /// </summary>
        [Input("sku")]
        public Input<string>? Sku { get; set; }

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

        public AnalyticsWorkspaceArgs()
        {
        }
    }

    public sealed class AnalyticsWorkspaceState : Pulumi.ResourceArgs
    {
        /// <summary>
        /// Specifies the supported Azure location where the resource exists. Changing this forces a new resource to be created.
        /// </summary>
        [Input("location")]
        public Input<string>? Location { get; set; }

        /// <summary>
        /// Specifies the name of the Log Analytics Workspace. Workspace name should include 4-63 letters, digits or '-'. The '-' shouldn't be the first or the last symbol. Changing this forces a new resource to be created.
        /// </summary>
        [Input("name")]
        public Input<string>? Name { get; set; }

        [Input("portalUrl")]
        public Input<string>? PortalUrl { get; set; }

        /// <summary>
        /// The Primary shared key for the Log Analytics Workspace.
        /// </summary>
        [Input("primarySharedKey")]
        public Input<string>? PrimarySharedKey { get; set; }

        /// <summary>
        /// The name of the resource group in which the Log Analytics workspace is created. Changing this forces a new resource to be created.
        /// </summary>
        [Input("resourceGroupName")]
        public Input<string>? ResourceGroupName { get; set; }

        /// <summary>
        /// The workspace data retention in days. Possible values are either 7 (Free Tier only) or range between 30 and 730.
        /// </summary>
        [Input("retentionInDays")]
        public Input<int>? RetentionInDays { get; set; }

        /// <summary>
        /// The Secondary shared key for the Log Analytics Workspace.
        /// </summary>
        [Input("secondarySharedKey")]
        public Input<string>? SecondarySharedKey { get; set; }

        /// <summary>
        /// Specifies the Sku of the Log Analytics Workspace. Possible values are `Free`, `PerNode`, `Premium`, `Standard`, `Standalone`, `Unlimited`, and `PerGB2018` (new Sku as of `2018-04-03`). Defaults to `PerGB2018`.
        /// </summary>
        [Input("sku")]
        public Input<string>? Sku { get; set; }

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
        /// The Workspace (or Customer) ID for the Log Analytics Workspace.
        /// </summary>
        [Input("workspaceId")]
        public Input<string>? WorkspaceId { get; set; }

        public AnalyticsWorkspaceState()
        {
        }
    }
}
