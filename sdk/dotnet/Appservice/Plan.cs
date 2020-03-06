// *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

using System.Collections.Generic;
using System.Collections.Immutable;
using System.Threading.Tasks;
using Pulumi.Serialization;

namespace Pulumi.Azure.AppService
{
    /// <summary>
    /// Manages an App Service Plan component.
    /// 
    /// &gt; This content is derived from https://github.com/terraform-providers/terraform-provider-azurerm/blob/master/website/docs/r/app_service_plan.html.markdown.
    /// </summary>
    public partial class Plan : Pulumi.CustomResource
    {
        /// <summary>
        /// The ID of the App Service Environment where the App Service Plan should be located. Changing forces a new resource to be created.
        /// </summary>
        [Output("appServiceEnvironmentId")]
        public Output<string?> AppServiceEnvironmentId { get; private set; } = null!;

        [Output("isXenon")]
        public Output<bool?> IsXenon { get; private set; } = null!;

        /// <summary>
        /// The kind of the App Service Plan to create. Possible values are `Windows` (also available as `App`), `Linux`, `elastic` (for Premium Consumption) and `FunctionApp` (for a Consumption Plan). Defaults to `Windows`. Changing this forces a new resource to be created.
        /// </summary>
        [Output("kind")]
        public Output<string?> Kind { get; private set; } = null!;

        /// <summary>
        /// Specifies the supported Azure location where the resource exists. Changing this forces a new resource to be created.
        /// </summary>
        [Output("location")]
        public Output<string> Location { get; private set; } = null!;

        /// <summary>
        /// The maximum number of total workers allowed for this ElasticScaleEnabled App Service Plan.
        /// </summary>
        [Output("maximumElasticWorkerCount")]
        public Output<int> MaximumElasticWorkerCount { get; private set; } = null!;

        /// <summary>
        /// The maximum number of workers supported with the App Service Plan's sku.
        /// </summary>
        [Output("maximumNumberOfWorkers")]
        public Output<int> MaximumNumberOfWorkers { get; private set; } = null!;

        /// <summary>
        /// Specifies the name of the App Service Plan component. Changing this forces a new resource to be created.
        /// </summary>
        [Output("name")]
        public Output<string> Name { get; private set; } = null!;

        /// <summary>
        /// Can Apps assigned to this App Service Plan be scaled independently? If set to `false` apps assigned to this plan will scale to all instances of the plan.  Defaults to `false`.
        /// </summary>
        [Output("perSiteScaling")]
        public Output<bool?> PerSiteScaling { get; private set; } = null!;

        /// <summary>
        /// Is this App Service Plan `Reserved`. Defaults to `false`.
        /// </summary>
        [Output("reserved")]
        public Output<bool?> Reserved { get; private set; } = null!;

        /// <summary>
        /// The name of the resource group in which to create the App Service Plan component.
        /// </summary>
        [Output("resourceGroupName")]
        public Output<string> ResourceGroupName { get; private set; } = null!;

        /// <summary>
        /// A `sku` block as documented below.
        /// </summary>
        [Output("sku")]
        public Output<Outputs.PlanSku> Sku { get; private set; } = null!;

        /// <summary>
        /// A mapping of tags to assign to the resource.
        /// </summary>
        [Output("tags")]
        public Output<ImmutableDictionary<string, string>?> Tags { get; private set; } = null!;


        /// <summary>
        /// Create a Plan resource with the given unique name, arguments, and options.
        /// </summary>
        ///
        /// <param name="name">The unique name of the resource</param>
        /// <param name="args">The arguments used to populate this resource's properties</param>
        /// <param name="options">A bag of options that control this resource's behavior</param>
        public Plan(string name, PlanArgs args, CustomResourceOptions? options = null)
            : base("azure:appservice/plan:Plan", name, args ?? ResourceArgs.Empty, MakeResourceOptions(options, ""))
        {
        }

        private Plan(string name, Input<string> id, PlanState? state = null, CustomResourceOptions? options = null)
            : base("azure:appservice/plan:Plan", name, state, MakeResourceOptions(options, id))
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
        /// Get an existing Plan resource's state with the given name, ID, and optional extra
        /// properties used to qualify the lookup.
        /// </summary>
        ///
        /// <param name="name">The unique name of the resulting resource.</param>
        /// <param name="id">The unique provider ID of the resource to lookup.</param>
        /// <param name="state">Any extra arguments used during the lookup.</param>
        /// <param name="options">A bag of options that control this resource's behavior</param>
        public static Plan Get(string name, Input<string> id, PlanState? state = null, CustomResourceOptions? options = null)
        {
            return new Plan(name, id, state, options);
        }
    }

    public sealed class PlanArgs : Pulumi.ResourceArgs
    {
        /// <summary>
        /// The ID of the App Service Environment where the App Service Plan should be located. Changing forces a new resource to be created.
        /// </summary>
        [Input("appServiceEnvironmentId")]
        public Input<string>? AppServiceEnvironmentId { get; set; }

        [Input("isXenon")]
        public Input<bool>? IsXenon { get; set; }

        /// <summary>
        /// The kind of the App Service Plan to create. Possible values are `Windows` (also available as `App`), `Linux`, `elastic` (for Premium Consumption) and `FunctionApp` (for a Consumption Plan). Defaults to `Windows`. Changing this forces a new resource to be created.
        /// </summary>
        [Input("kind")]
        public Input<string>? Kind { get; set; }

        /// <summary>
        /// Specifies the supported Azure location where the resource exists. Changing this forces a new resource to be created.
        /// </summary>
        [Input("location")]
        public Input<string>? Location { get; set; }

        /// <summary>
        /// The maximum number of total workers allowed for this ElasticScaleEnabled App Service Plan.
        /// </summary>
        [Input("maximumElasticWorkerCount")]
        public Input<int>? MaximumElasticWorkerCount { get; set; }

        /// <summary>
        /// Specifies the name of the App Service Plan component. Changing this forces a new resource to be created.
        /// </summary>
        [Input("name")]
        public Input<string>? Name { get; set; }

        /// <summary>
        /// Can Apps assigned to this App Service Plan be scaled independently? If set to `false` apps assigned to this plan will scale to all instances of the plan.  Defaults to `false`.
        /// </summary>
        [Input("perSiteScaling")]
        public Input<bool>? PerSiteScaling { get; set; }

        /// <summary>
        /// Is this App Service Plan `Reserved`. Defaults to `false`.
        /// </summary>
        [Input("reserved")]
        public Input<bool>? Reserved { get; set; }

        /// <summary>
        /// The name of the resource group in which to create the App Service Plan component.
        /// </summary>
        [Input("resourceGroupName", required: true)]
        public Input<string> ResourceGroupName { get; set; } = null!;

        /// <summary>
        /// A `sku` block as documented below.
        /// </summary>
        [Input("sku", required: true)]
        public Input<Inputs.PlanSkuArgs> Sku { get; set; } = null!;

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

        public PlanArgs()
        {
        }
    }

    public sealed class PlanState : Pulumi.ResourceArgs
    {
        /// <summary>
        /// The ID of the App Service Environment where the App Service Plan should be located. Changing forces a new resource to be created.
        /// </summary>
        [Input("appServiceEnvironmentId")]
        public Input<string>? AppServiceEnvironmentId { get; set; }

        [Input("isXenon")]
        public Input<bool>? IsXenon { get; set; }

        /// <summary>
        /// The kind of the App Service Plan to create. Possible values are `Windows` (also available as `App`), `Linux`, `elastic` (for Premium Consumption) and `FunctionApp` (for a Consumption Plan). Defaults to `Windows`. Changing this forces a new resource to be created.
        /// </summary>
        [Input("kind")]
        public Input<string>? Kind { get; set; }

        /// <summary>
        /// Specifies the supported Azure location where the resource exists. Changing this forces a new resource to be created.
        /// </summary>
        [Input("location")]
        public Input<string>? Location { get; set; }

        /// <summary>
        /// The maximum number of total workers allowed for this ElasticScaleEnabled App Service Plan.
        /// </summary>
        [Input("maximumElasticWorkerCount")]
        public Input<int>? MaximumElasticWorkerCount { get; set; }

        /// <summary>
        /// The maximum number of workers supported with the App Service Plan's sku.
        /// </summary>
        [Input("maximumNumberOfWorkers")]
        public Input<int>? MaximumNumberOfWorkers { get; set; }

        /// <summary>
        /// Specifies the name of the App Service Plan component. Changing this forces a new resource to be created.
        /// </summary>
        [Input("name")]
        public Input<string>? Name { get; set; }

        /// <summary>
        /// Can Apps assigned to this App Service Plan be scaled independently? If set to `false` apps assigned to this plan will scale to all instances of the plan.  Defaults to `false`.
        /// </summary>
        [Input("perSiteScaling")]
        public Input<bool>? PerSiteScaling { get; set; }

        /// <summary>
        /// Is this App Service Plan `Reserved`. Defaults to `false`.
        /// </summary>
        [Input("reserved")]
        public Input<bool>? Reserved { get; set; }

        /// <summary>
        /// The name of the resource group in which to create the App Service Plan component.
        /// </summary>
        [Input("resourceGroupName")]
        public Input<string>? ResourceGroupName { get; set; }

        /// <summary>
        /// A `sku` block as documented below.
        /// </summary>
        [Input("sku")]
        public Input<Inputs.PlanSkuGetArgs>? Sku { get; set; }

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

        public PlanState()
        {
        }
    }

    namespace Inputs
    {

    public sealed class PlanSkuArgs : Pulumi.ResourceArgs
    {
        /// <summary>
        /// Specifies the number of workers associated with this App Service Plan.
        /// </summary>
        [Input("capacity")]
        public Input<int>? Capacity { get; set; }

        /// <summary>
        /// Specifies the plan's instance size.
        /// </summary>
        [Input("size", required: true)]
        public Input<string> Size { get; set; } = null!;

        /// <summary>
        /// Specifies the plan's pricing tier.
        /// </summary>
        [Input("tier", required: true)]
        public Input<string> Tier { get; set; } = null!;

        public PlanSkuArgs()
        {
        }
    }

    public sealed class PlanSkuGetArgs : Pulumi.ResourceArgs
    {
        /// <summary>
        /// Specifies the number of workers associated with this App Service Plan.
        /// </summary>
        [Input("capacity")]
        public Input<int>? Capacity { get; set; }

        /// <summary>
        /// Specifies the plan's instance size.
        /// </summary>
        [Input("size", required: true)]
        public Input<string> Size { get; set; } = null!;

        /// <summary>
        /// Specifies the plan's pricing tier.
        /// </summary>
        [Input("tier", required: true)]
        public Input<string> Tier { get; set; } = null!;

        public PlanSkuGetArgs()
        {
        }
    }
    }

    namespace Outputs
    {

    [OutputType]
    public sealed class PlanSku
    {
        /// <summary>
        /// Specifies the number of workers associated with this App Service Plan.
        /// </summary>
        public readonly int Capacity;
        /// <summary>
        /// Specifies the plan's instance size.
        /// </summary>
        public readonly string Size;
        /// <summary>
        /// Specifies the plan's pricing tier.
        /// </summary>
        public readonly string Tier;

        [OutputConstructor]
        private PlanSku(
            int capacity,
            string size,
            string tier)
        {
            Capacity = capacity;
            Size = size;
            Tier = tier;
        }
    }
    }
}
