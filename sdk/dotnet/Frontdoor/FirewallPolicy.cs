// *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

using System.Collections.Immutable;
using System.Threading.Tasks;
using Pulumi.Serialization;

namespace Pulumi.Azure.FrontDoor
{
    /// <summary>
    /// Manages an Azure Front Door Web Application Firewall Policy instance.
    /// 
    /// &gt; This content is derived from https://github.com/terraform-providers/terraform-provider-azurerm/blob/master/website/docs/r/frontdoor_firewall_policy.html.markdown.
    /// </summary>
    public partial class FirewallPolicy : Pulumi.CustomResource
    {
        /// <summary>
        /// If a `custom_rule` block's action type is `block`, this is the response body. The body must be specified in base64 encoding.
        /// </summary>
        [Output("customBlockResponseBody")]
        public Output<string?> CustomBlockResponseBody { get; private set; } = null!;

        /// <summary>
        /// If a `custom_rule` block's action type is `block`, this is the response status code. Possible values are `200`, `403`, `405`, `406`, or `429`.
        /// </summary>
        [Output("customBlockResponseStatusCode")]
        public Output<int?> CustomBlockResponseStatusCode { get; private set; } = null!;

        /// <summary>
        /// One or more `custom_rule` blocks as defined below.
        /// </summary>
        [Output("customRules")]
        public Output<ImmutableArray<Outputs.FirewallPolicyCustomRules>> CustomRules { get; private set; } = null!;

        /// <summary>
        /// Is the policy a enabled state or disabled state. Defaults to `true`.
        /// </summary>
        [Output("enabled")]
        public Output<bool?> Enabled { get; private set; } = null!;

        /// <summary>
        /// the Frontend Endpoints associated with this Front Door Web Application Firewall policy.
        /// </summary>
        [Output("frontendEndpointIds")]
        public Output<ImmutableArray<string>> FrontendEndpointIds { get; private set; } = null!;

        /// <summary>
        /// Resource location.
        /// </summary>
        [Output("location")]
        public Output<string> Location { get; private set; } = null!;

        /// <summary>
        /// One or more `managed_rule` blocks as defined below.
        /// </summary>
        [Output("managedRules")]
        public Output<ImmutableArray<Outputs.FirewallPolicyManagedRules>> ManagedRules { get; private set; } = null!;

        /// <summary>
        /// The firewall policy mode. Possible values are `Detection`, `Prevention` and defaults to `Prevention`.
        /// </summary>
        [Output("mode")]
        public Output<string?> Mode { get; private set; } = null!;

        /// <summary>
        /// The name of the policy. Changing this forces a new resource to be created.
        /// </summary>
        [Output("name")]
        public Output<string> Name { get; private set; } = null!;

        /// <summary>
        /// If action type is redirect, this field represents redirect URL for the client.
        /// </summary>
        [Output("redirectUrl")]
        public Output<string?> RedirectUrl { get; private set; } = null!;

        /// <summary>
        /// The name of the resource group. Changing this forces a new resource to be created.
        /// </summary>
        [Output("resourceGroupName")]
        public Output<string> ResourceGroupName { get; private set; } = null!;

        /// <summary>
        /// A mapping of tags to assign to the Web Application Firewall Policy.
        /// </summary>
        [Output("tags")]
        public Output<ImmutableDictionary<string, object>> Tags { get; private set; } = null!;


        /// <summary>
        /// Create a FirewallPolicy resource with the given unique name, arguments, and options.
        /// </summary>
        ///
        /// <param name="name">The unique name of the resource</param>
        /// <param name="args">The arguments used to populate this resource's properties</param>
        /// <param name="options">A bag of options that control this resource's behavior</param>
        public FirewallPolicy(string name, FirewallPolicyArgs args, CustomResourceOptions? options = null)
            : base("azure:frontdoor/firewallPolicy:FirewallPolicy", name, args ?? ResourceArgs.Empty, MakeResourceOptions(options, ""))
        {
        }

        private FirewallPolicy(string name, Input<string> id, FirewallPolicyState? state = null, CustomResourceOptions? options = null)
            : base("azure:frontdoor/firewallPolicy:FirewallPolicy", name, state, MakeResourceOptions(options, id))
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
        /// Get an existing FirewallPolicy resource's state with the given name, ID, and optional extra
        /// properties used to qualify the lookup.
        /// </summary>
        ///
        /// <param name="name">The unique name of the resulting resource.</param>
        /// <param name="id">The unique provider ID of the resource to lookup.</param>
        /// <param name="state">Any extra arguments used during the lookup.</param>
        /// <param name="options">A bag of options that control this resource's behavior</param>
        public static FirewallPolicy Get(string name, Input<string> id, FirewallPolicyState? state = null, CustomResourceOptions? options = null)
        {
            return new FirewallPolicy(name, id, state, options);
        }
    }

    public sealed class FirewallPolicyArgs : Pulumi.ResourceArgs
    {
        /// <summary>
        /// If a `custom_rule` block's action type is `block`, this is the response body. The body must be specified in base64 encoding.
        /// </summary>
        [Input("customBlockResponseBody")]
        public Input<string>? CustomBlockResponseBody { get; set; }

        /// <summary>
        /// If a `custom_rule` block's action type is `block`, this is the response status code. Possible values are `200`, `403`, `405`, `406`, or `429`.
        /// </summary>
        [Input("customBlockResponseStatusCode")]
        public Input<int>? CustomBlockResponseStatusCode { get; set; }

        [Input("customRules")]
        private InputList<Inputs.FirewallPolicyCustomRulesArgs>? _customRules;

        /// <summary>
        /// One or more `custom_rule` blocks as defined below.
        /// </summary>
        public InputList<Inputs.FirewallPolicyCustomRulesArgs> CustomRules
        {
            get => _customRules ?? (_customRules = new InputList<Inputs.FirewallPolicyCustomRulesArgs>());
            set => _customRules = value;
        }

        /// <summary>
        /// Is the policy a enabled state or disabled state. Defaults to `true`.
        /// </summary>
        [Input("enabled")]
        public Input<bool>? Enabled { get; set; }

        [Input("managedRules")]
        private InputList<Inputs.FirewallPolicyManagedRulesArgs>? _managedRules;

        /// <summary>
        /// One or more `managed_rule` blocks as defined below.
        /// </summary>
        public InputList<Inputs.FirewallPolicyManagedRulesArgs> ManagedRules
        {
            get => _managedRules ?? (_managedRules = new InputList<Inputs.FirewallPolicyManagedRulesArgs>());
            set => _managedRules = value;
        }

        /// <summary>
        /// The firewall policy mode. Possible values are `Detection`, `Prevention` and defaults to `Prevention`.
        /// </summary>
        [Input("mode")]
        public Input<string>? Mode { get; set; }

        /// <summary>
        /// The name of the policy. Changing this forces a new resource to be created.
        /// </summary>
        [Input("name")]
        public Input<string>? Name { get; set; }

        /// <summary>
        /// If action type is redirect, this field represents redirect URL for the client.
        /// </summary>
        [Input("redirectUrl")]
        public Input<string>? RedirectUrl { get; set; }

        /// <summary>
        /// The name of the resource group. Changing this forces a new resource to be created.
        /// </summary>
        [Input("resourceGroupName", required: true)]
        public Input<string> ResourceGroupName { get; set; } = null!;

        [Input("tags")]
        private InputMap<object>? _tags;

        /// <summary>
        /// A mapping of tags to assign to the Web Application Firewall Policy.
        /// </summary>
        public InputMap<object> Tags
        {
            get => _tags ?? (_tags = new InputMap<object>());
            set => _tags = value;
        }

        public FirewallPolicyArgs()
        {
        }
    }

    public sealed class FirewallPolicyState : Pulumi.ResourceArgs
    {
        /// <summary>
        /// If a `custom_rule` block's action type is `block`, this is the response body. The body must be specified in base64 encoding.
        /// </summary>
        [Input("customBlockResponseBody")]
        public Input<string>? CustomBlockResponseBody { get; set; }

        /// <summary>
        /// If a `custom_rule` block's action type is `block`, this is the response status code. Possible values are `200`, `403`, `405`, `406`, or `429`.
        /// </summary>
        [Input("customBlockResponseStatusCode")]
        public Input<int>? CustomBlockResponseStatusCode { get; set; }

        [Input("customRules")]
        private InputList<Inputs.FirewallPolicyCustomRulesGetArgs>? _customRules;

        /// <summary>
        /// One or more `custom_rule` blocks as defined below.
        /// </summary>
        public InputList<Inputs.FirewallPolicyCustomRulesGetArgs> CustomRules
        {
            get => _customRules ?? (_customRules = new InputList<Inputs.FirewallPolicyCustomRulesGetArgs>());
            set => _customRules = value;
        }

        /// <summary>
        /// Is the policy a enabled state or disabled state. Defaults to `true`.
        /// </summary>
        [Input("enabled")]
        public Input<bool>? Enabled { get; set; }

        [Input("frontendEndpointIds")]
        private InputList<string>? _frontendEndpointIds;

        /// <summary>
        /// the Frontend Endpoints associated with this Front Door Web Application Firewall policy.
        /// </summary>
        public InputList<string> FrontendEndpointIds
        {
            get => _frontendEndpointIds ?? (_frontendEndpointIds = new InputList<string>());
            set => _frontendEndpointIds = value;
        }

        /// <summary>
        /// Resource location.
        /// </summary>
        [Input("location")]
        public Input<string>? Location { get; set; }

        [Input("managedRules")]
        private InputList<Inputs.FirewallPolicyManagedRulesGetArgs>? _managedRules;

        /// <summary>
        /// One or more `managed_rule` blocks as defined below.
        /// </summary>
        public InputList<Inputs.FirewallPolicyManagedRulesGetArgs> ManagedRules
        {
            get => _managedRules ?? (_managedRules = new InputList<Inputs.FirewallPolicyManagedRulesGetArgs>());
            set => _managedRules = value;
        }

        /// <summary>
        /// The firewall policy mode. Possible values are `Detection`, `Prevention` and defaults to `Prevention`.
        /// </summary>
        [Input("mode")]
        public Input<string>? Mode { get; set; }

        /// <summary>
        /// The name of the policy. Changing this forces a new resource to be created.
        /// </summary>
        [Input("name")]
        public Input<string>? Name { get; set; }

        /// <summary>
        /// If action type is redirect, this field represents redirect URL for the client.
        /// </summary>
        [Input("redirectUrl")]
        public Input<string>? RedirectUrl { get; set; }

        /// <summary>
        /// The name of the resource group. Changing this forces a new resource to be created.
        /// </summary>
        [Input("resourceGroupName")]
        public Input<string>? ResourceGroupName { get; set; }

        [Input("tags")]
        private InputMap<object>? _tags;

        /// <summary>
        /// A mapping of tags to assign to the Web Application Firewall Policy.
        /// </summary>
        public InputMap<object> Tags
        {
            get => _tags ?? (_tags = new InputMap<object>());
            set => _tags = value;
        }

        public FirewallPolicyState()
        {
        }
    }

    namespace Inputs
    {

    public sealed class FirewallPolicyCustomRulesArgs : Pulumi.ResourceArgs
    {
        [Input("action", required: true)]
        public Input<string> Action { get; set; } = null!;

        /// <summary>
        /// Is the policy a enabled state or disabled state. Defaults to `true`.
        /// </summary>
        [Input("enabled")]
        public Input<bool>? Enabled { get; set; }

        [Input("matchConditions")]
        private InputList<FirewallPolicyCustomRulesMatchConditionsArgs>? _matchConditions;
        public InputList<FirewallPolicyCustomRulesMatchConditionsArgs> MatchConditions
        {
            get => _matchConditions ?? (_matchConditions = new InputList<FirewallPolicyCustomRulesMatchConditionsArgs>());
            set => _matchConditions = value;
        }

        /// <summary>
        /// The name of the policy. Changing this forces a new resource to be created.
        /// </summary>
        [Input("name", required: true)]
        public Input<string> Name { get; set; } = null!;

        [Input("priority")]
        public Input<int>? Priority { get; set; }

        [Input("rateLimitDurationInMinutes")]
        public Input<int>? RateLimitDurationInMinutes { get; set; }

        [Input("rateLimitThreshold")]
        public Input<int>? RateLimitThreshold { get; set; }

        [Input("type", required: true)]
        public Input<string> Type { get; set; } = null!;

        public FirewallPolicyCustomRulesArgs()
        {
        }
    }

    public sealed class FirewallPolicyCustomRulesGetArgs : Pulumi.ResourceArgs
    {
        [Input("action", required: true)]
        public Input<string> Action { get; set; } = null!;

        /// <summary>
        /// Is the policy a enabled state or disabled state. Defaults to `true`.
        /// </summary>
        [Input("enabled")]
        public Input<bool>? Enabled { get; set; }

        [Input("matchConditions")]
        private InputList<FirewallPolicyCustomRulesMatchConditionsGetArgs>? _matchConditions;
        public InputList<FirewallPolicyCustomRulesMatchConditionsGetArgs> MatchConditions
        {
            get => _matchConditions ?? (_matchConditions = new InputList<FirewallPolicyCustomRulesMatchConditionsGetArgs>());
            set => _matchConditions = value;
        }

        /// <summary>
        /// The name of the policy. Changing this forces a new resource to be created.
        /// </summary>
        [Input("name", required: true)]
        public Input<string> Name { get; set; } = null!;

        [Input("priority")]
        public Input<int>? Priority { get; set; }

        [Input("rateLimitDurationInMinutes")]
        public Input<int>? RateLimitDurationInMinutes { get; set; }

        [Input("rateLimitThreshold")]
        public Input<int>? RateLimitThreshold { get; set; }

        [Input("type", required: true)]
        public Input<string> Type { get; set; } = null!;

        public FirewallPolicyCustomRulesGetArgs()
        {
        }
    }

    public sealed class FirewallPolicyCustomRulesMatchConditionsArgs : Pulumi.ResourceArgs
    {
        [Input("matchValues", required: true)]
        private InputList<string>? _matchValues;
        public InputList<string> MatchValues
        {
            get => _matchValues ?? (_matchValues = new InputList<string>());
            set => _matchValues = value;
        }

        [Input("matchVariable", required: true)]
        public Input<string> MatchVariable { get; set; } = null!;

        [Input("negationCondition")]
        public Input<bool>? NegationCondition { get; set; }

        [Input("operator", required: true)]
        public Input<string> Operator { get; set; } = null!;

        [Input("selector")]
        public Input<string>? Selector { get; set; }

        [Input("transforms")]
        private InputList<string>? _transforms;
        public InputList<string> Transforms
        {
            get => _transforms ?? (_transforms = new InputList<string>());
            set => _transforms = value;
        }

        public FirewallPolicyCustomRulesMatchConditionsArgs()
        {
        }
    }

    public sealed class FirewallPolicyCustomRulesMatchConditionsGetArgs : Pulumi.ResourceArgs
    {
        [Input("matchValues", required: true)]
        private InputList<string>? _matchValues;
        public InputList<string> MatchValues
        {
            get => _matchValues ?? (_matchValues = new InputList<string>());
            set => _matchValues = value;
        }

        [Input("matchVariable", required: true)]
        public Input<string> MatchVariable { get; set; } = null!;

        [Input("negationCondition")]
        public Input<bool>? NegationCondition { get; set; }

        [Input("operator", required: true)]
        public Input<string> Operator { get; set; } = null!;

        [Input("selector")]
        public Input<string>? Selector { get; set; }

        [Input("transforms")]
        private InputList<string>? _transforms;
        public InputList<string> Transforms
        {
            get => _transforms ?? (_transforms = new InputList<string>());
            set => _transforms = value;
        }

        public FirewallPolicyCustomRulesMatchConditionsGetArgs()
        {
        }
    }

    public sealed class FirewallPolicyManagedRulesArgs : Pulumi.ResourceArgs
    {
        [Input("overrides")]
        private InputList<FirewallPolicyManagedRulesOverridesArgs>? _overrides;
        public InputList<FirewallPolicyManagedRulesOverridesArgs> Overrides
        {
            get => _overrides ?? (_overrides = new InputList<FirewallPolicyManagedRulesOverridesArgs>());
            set => _overrides = value;
        }

        [Input("type", required: true)]
        public Input<string> Type { get; set; } = null!;

        [Input("version", required: true)]
        public Input<string> Version { get; set; } = null!;

        public FirewallPolicyManagedRulesArgs()
        {
        }
    }

    public sealed class FirewallPolicyManagedRulesGetArgs : Pulumi.ResourceArgs
    {
        [Input("overrides")]
        private InputList<FirewallPolicyManagedRulesOverridesGetArgs>? _overrides;
        public InputList<FirewallPolicyManagedRulesOverridesGetArgs> Overrides
        {
            get => _overrides ?? (_overrides = new InputList<FirewallPolicyManagedRulesOverridesGetArgs>());
            set => _overrides = value;
        }

        [Input("type", required: true)]
        public Input<string> Type { get; set; } = null!;

        [Input("version", required: true)]
        public Input<string> Version { get; set; } = null!;

        public FirewallPolicyManagedRulesGetArgs()
        {
        }
    }

    public sealed class FirewallPolicyManagedRulesOverridesArgs : Pulumi.ResourceArgs
    {
        [Input("rules")]
        private InputList<FirewallPolicyManagedRulesOverridesRulesArgs>? _rules;
        public InputList<FirewallPolicyManagedRulesOverridesRulesArgs> Rules
        {
            get => _rules ?? (_rules = new InputList<FirewallPolicyManagedRulesOverridesRulesArgs>());
            set => _rules = value;
        }

        [Input("ruleGroupName", required: true)]
        public Input<string> RuleGroupName { get; set; } = null!;

        public FirewallPolicyManagedRulesOverridesArgs()
        {
        }
    }

    public sealed class FirewallPolicyManagedRulesOverridesGetArgs : Pulumi.ResourceArgs
    {
        [Input("rules")]
        private InputList<FirewallPolicyManagedRulesOverridesRulesGetArgs>? _rules;
        public InputList<FirewallPolicyManagedRulesOverridesRulesGetArgs> Rules
        {
            get => _rules ?? (_rules = new InputList<FirewallPolicyManagedRulesOverridesRulesGetArgs>());
            set => _rules = value;
        }

        [Input("ruleGroupName", required: true)]
        public Input<string> RuleGroupName { get; set; } = null!;

        public FirewallPolicyManagedRulesOverridesGetArgs()
        {
        }
    }

    public sealed class FirewallPolicyManagedRulesOverridesRulesArgs : Pulumi.ResourceArgs
    {
        [Input("action", required: true)]
        public Input<string> Action { get; set; } = null!;

        /// <summary>
        /// Is the policy a enabled state or disabled state. Defaults to `true`.
        /// </summary>
        [Input("enabled")]
        public Input<bool>? Enabled { get; set; }

        [Input("ruleId", required: true)]
        public Input<string> RuleId { get; set; } = null!;

        public FirewallPolicyManagedRulesOverridesRulesArgs()
        {
        }
    }

    public sealed class FirewallPolicyManagedRulesOverridesRulesGetArgs : Pulumi.ResourceArgs
    {
        [Input("action", required: true)]
        public Input<string> Action { get; set; } = null!;

        /// <summary>
        /// Is the policy a enabled state or disabled state. Defaults to `true`.
        /// </summary>
        [Input("enabled")]
        public Input<bool>? Enabled { get; set; }

        [Input("ruleId", required: true)]
        public Input<string> RuleId { get; set; } = null!;

        public FirewallPolicyManagedRulesOverridesRulesGetArgs()
        {
        }
    }
    }

    namespace Outputs
    {

    [OutputType]
    public sealed class FirewallPolicyCustomRules
    {
        public readonly string Action;
        /// <summary>
        /// Is the policy a enabled state or disabled state. Defaults to `true`.
        /// </summary>
        public readonly bool? Enabled;
        public readonly ImmutableArray<FirewallPolicyCustomRulesMatchConditions> MatchConditions;
        /// <summary>
        /// The name of the policy. Changing this forces a new resource to be created.
        /// </summary>
        public readonly string Name;
        public readonly int? Priority;
        public readonly int? RateLimitDurationInMinutes;
        public readonly int? RateLimitThreshold;
        public readonly string Type;

        [OutputConstructor]
        private FirewallPolicyCustomRules(
            string action,
            bool? enabled,
            ImmutableArray<FirewallPolicyCustomRulesMatchConditions> matchConditions,
            string name,
            int? priority,
            int? rateLimitDurationInMinutes,
            int? rateLimitThreshold,
            string type)
        {
            Action = action;
            Enabled = enabled;
            MatchConditions = matchConditions;
            Name = name;
            Priority = priority;
            RateLimitDurationInMinutes = rateLimitDurationInMinutes;
            RateLimitThreshold = rateLimitThreshold;
            Type = type;
        }
    }

    [OutputType]
    public sealed class FirewallPolicyCustomRulesMatchConditions
    {
        public readonly ImmutableArray<string> MatchValues;
        public readonly string MatchVariable;
        public readonly bool? NegationCondition;
        public readonly string Operator;
        public readonly string? Selector;
        public readonly ImmutableArray<string> Transforms;

        [OutputConstructor]
        private FirewallPolicyCustomRulesMatchConditions(
            ImmutableArray<string> matchValues,
            string matchVariable,
            bool? negationCondition,
            string @operator,
            string? selector,
            ImmutableArray<string> transforms)
        {
            MatchValues = matchValues;
            MatchVariable = matchVariable;
            NegationCondition = negationCondition;
            Operator = @operator;
            Selector = selector;
            Transforms = transforms;
        }
    }

    [OutputType]
    public sealed class FirewallPolicyManagedRules
    {
        public readonly ImmutableArray<FirewallPolicyManagedRulesOverrides> Overrides;
        public readonly string Type;
        public readonly string Version;

        [OutputConstructor]
        private FirewallPolicyManagedRules(
            ImmutableArray<FirewallPolicyManagedRulesOverrides> overrides,
            string type,
            string version)
        {
            Overrides = overrides;
            Type = type;
            Version = version;
        }
    }

    [OutputType]
    public sealed class FirewallPolicyManagedRulesOverrides
    {
        public readonly ImmutableArray<FirewallPolicyManagedRulesOverridesRules> Rules;
        public readonly string RuleGroupName;

        [OutputConstructor]
        private FirewallPolicyManagedRulesOverrides(
            ImmutableArray<FirewallPolicyManagedRulesOverridesRules> rules,
            string ruleGroupName)
        {
            Rules = rules;
            RuleGroupName = ruleGroupName;
        }
    }

    [OutputType]
    public sealed class FirewallPolicyManagedRulesOverridesRules
    {
        public readonly string Action;
        /// <summary>
        /// Is the policy a enabled state or disabled state. Defaults to `true`.
        /// </summary>
        public readonly bool? Enabled;
        public readonly string RuleId;

        [OutputConstructor]
        private FirewallPolicyManagedRulesOverridesRules(
            string action,
            bool? enabled,
            string ruleId)
        {
            Action = action;
            Enabled = enabled;
            RuleId = ruleId;
        }
    }
    }
}