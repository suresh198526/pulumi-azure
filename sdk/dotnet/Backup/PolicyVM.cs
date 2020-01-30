// *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

using System.Collections.Generic;
using System.Collections.Immutable;
using System.Threading.Tasks;
using Pulumi.Serialization;

namespace Pulumi.Azure.Backup
{
    /// <summary>
    /// Manages an Azure Backup VM Backup Policy.
    /// 
    /// &gt; This content is derived from https://github.com/terraform-providers/terraform-provider-azurerm/blob/master/website/docs/r/backup_policy_vm.html.markdown.
    /// </summary>
    public partial class PolicyVM : Pulumi.CustomResource
    {
        /// <summary>
        /// Configures the Policy backup frequency, times &amp; days as documented in the `backup` block below. 
        /// </summary>
        [Output("backup")]
        public Output<Outputs.PolicyVMBackup> Backup { get; private set; } = null!;

        /// <summary>
        /// Specifies the name of the Backup Policy. Changing this forces a new resource to be created.
        /// </summary>
        [Output("name")]
        public Output<string> Name { get; private set; } = null!;

        /// <summary>
        /// Specifies the name of the Recovery Services Vault to use. Changing this forces a new resource to be created.
        /// </summary>
        [Output("recoveryVaultName")]
        public Output<string> RecoveryVaultName { get; private set; } = null!;

        /// <summary>
        /// The name of the resource group in which to create the policy. Changing this forces a new resource to be created.
        /// </summary>
        [Output("resourceGroupName")]
        public Output<string> ResourceGroupName { get; private set; } = null!;

        /// <summary>
        /// Configures the policy daily retention as documented in the `retention_daily` block below. Required when backup frequency is `Daily`.
        /// </summary>
        [Output("retentionDaily")]
        public Output<Outputs.PolicyVMRetentionDaily?> RetentionDaily { get; private set; } = null!;

        /// <summary>
        /// Configures the policy monthly retention as documented in the `retention_monthly` block below.
        /// </summary>
        [Output("retentionMonthly")]
        public Output<Outputs.PolicyVMRetentionMonthly?> RetentionMonthly { get; private set; } = null!;

        /// <summary>
        /// Configures the policy weekly retention as documented in the `retention_weekly` block below. Required when backup frequency is `Weekly`.
        /// </summary>
        [Output("retentionWeekly")]
        public Output<Outputs.PolicyVMRetentionWeekly?> RetentionWeekly { get; private set; } = null!;

        /// <summary>
        /// Configures the policy yearly retention as documented in the `retention_yearly` block below.
        /// </summary>
        [Output("retentionYearly")]
        public Output<Outputs.PolicyVMRetentionYearly?> RetentionYearly { get; private set; } = null!;

        /// <summary>
        /// A mapping of tags to assign to the resource.
        /// </summary>
        [Output("tags")]
        public Output<ImmutableDictionary<string, string>> Tags { get; private set; } = null!;

        /// <summary>
        /// Specifies the timezone. Defaults to `UTC`
        /// </summary>
        [Output("timezone")]
        public Output<string?> Timezone { get; private set; } = null!;


        /// <summary>
        /// Create a PolicyVM resource with the given unique name, arguments, and options.
        /// </summary>
        ///
        /// <param name="name">The unique name of the resource</param>
        /// <param name="args">The arguments used to populate this resource's properties</param>
        /// <param name="options">A bag of options that control this resource's behavior</param>
        public PolicyVM(string name, PolicyVMArgs args, CustomResourceOptions? options = null)
            : base("azure:backup/policyVM:PolicyVM", name, args ?? ResourceArgs.Empty, MakeResourceOptions(options, ""))
        {
        }

        private PolicyVM(string name, Input<string> id, PolicyVMState? state = null, CustomResourceOptions? options = null)
            : base("azure:backup/policyVM:PolicyVM", name, state, MakeResourceOptions(options, id))
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
        /// Get an existing PolicyVM resource's state with the given name, ID, and optional extra
        /// properties used to qualify the lookup.
        /// </summary>
        ///
        /// <param name="name">The unique name of the resulting resource.</param>
        /// <param name="id">The unique provider ID of the resource to lookup.</param>
        /// <param name="state">Any extra arguments used during the lookup.</param>
        /// <param name="options">A bag of options that control this resource's behavior</param>
        public static PolicyVM Get(string name, Input<string> id, PolicyVMState? state = null, CustomResourceOptions? options = null)
        {
            return new PolicyVM(name, id, state, options);
        }
    }

    public sealed class PolicyVMArgs : Pulumi.ResourceArgs
    {
        /// <summary>
        /// Configures the Policy backup frequency, times &amp; days as documented in the `backup` block below. 
        /// </summary>
        [Input("backup", required: true)]
        public Input<Inputs.PolicyVMBackupArgs> Backup { get; set; } = null!;

        /// <summary>
        /// Specifies the name of the Backup Policy. Changing this forces a new resource to be created.
        /// </summary>
        [Input("name")]
        public Input<string>? Name { get; set; }

        /// <summary>
        /// Specifies the name of the Recovery Services Vault to use. Changing this forces a new resource to be created.
        /// </summary>
        [Input("recoveryVaultName", required: true)]
        public Input<string> RecoveryVaultName { get; set; } = null!;

        /// <summary>
        /// The name of the resource group in which to create the policy. Changing this forces a new resource to be created.
        /// </summary>
        [Input("resourceGroupName", required: true)]
        public Input<string> ResourceGroupName { get; set; } = null!;

        /// <summary>
        /// Configures the policy daily retention as documented in the `retention_daily` block below. Required when backup frequency is `Daily`.
        /// </summary>
        [Input("retentionDaily")]
        public Input<Inputs.PolicyVMRetentionDailyArgs>? RetentionDaily { get; set; }

        /// <summary>
        /// Configures the policy monthly retention as documented in the `retention_monthly` block below.
        /// </summary>
        [Input("retentionMonthly")]
        public Input<Inputs.PolicyVMRetentionMonthlyArgs>? RetentionMonthly { get; set; }

        /// <summary>
        /// Configures the policy weekly retention as documented in the `retention_weekly` block below. Required when backup frequency is `Weekly`.
        /// </summary>
        [Input("retentionWeekly")]
        public Input<Inputs.PolicyVMRetentionWeeklyArgs>? RetentionWeekly { get; set; }

        /// <summary>
        /// Configures the policy yearly retention as documented in the `retention_yearly` block below.
        /// </summary>
        [Input("retentionYearly")]
        public Input<Inputs.PolicyVMRetentionYearlyArgs>? RetentionYearly { get; set; }

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
        /// Specifies the timezone. Defaults to `UTC`
        /// </summary>
        [Input("timezone")]
        public Input<string>? Timezone { get; set; }

        public PolicyVMArgs()
        {
        }
    }

    public sealed class PolicyVMState : Pulumi.ResourceArgs
    {
        /// <summary>
        /// Configures the Policy backup frequency, times &amp; days as documented in the `backup` block below. 
        /// </summary>
        [Input("backup")]
        public Input<Inputs.PolicyVMBackupGetArgs>? Backup { get; set; }

        /// <summary>
        /// Specifies the name of the Backup Policy. Changing this forces a new resource to be created.
        /// </summary>
        [Input("name")]
        public Input<string>? Name { get; set; }

        /// <summary>
        /// Specifies the name of the Recovery Services Vault to use. Changing this forces a new resource to be created.
        /// </summary>
        [Input("recoveryVaultName")]
        public Input<string>? RecoveryVaultName { get; set; }

        /// <summary>
        /// The name of the resource group in which to create the policy. Changing this forces a new resource to be created.
        /// </summary>
        [Input("resourceGroupName")]
        public Input<string>? ResourceGroupName { get; set; }

        /// <summary>
        /// Configures the policy daily retention as documented in the `retention_daily` block below. Required when backup frequency is `Daily`.
        /// </summary>
        [Input("retentionDaily")]
        public Input<Inputs.PolicyVMRetentionDailyGetArgs>? RetentionDaily { get; set; }

        /// <summary>
        /// Configures the policy monthly retention as documented in the `retention_monthly` block below.
        /// </summary>
        [Input("retentionMonthly")]
        public Input<Inputs.PolicyVMRetentionMonthlyGetArgs>? RetentionMonthly { get; set; }

        /// <summary>
        /// Configures the policy weekly retention as documented in the `retention_weekly` block below. Required when backup frequency is `Weekly`.
        /// </summary>
        [Input("retentionWeekly")]
        public Input<Inputs.PolicyVMRetentionWeeklyGetArgs>? RetentionWeekly { get; set; }

        /// <summary>
        /// Configures the policy yearly retention as documented in the `retention_yearly` block below.
        /// </summary>
        [Input("retentionYearly")]
        public Input<Inputs.PolicyVMRetentionYearlyGetArgs>? RetentionYearly { get; set; }

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
        /// Specifies the timezone. Defaults to `UTC`
        /// </summary>
        [Input("timezone")]
        public Input<string>? Timezone { get; set; }

        public PolicyVMState()
        {
        }
    }

    namespace Inputs
    {

    public sealed class PolicyVMBackupArgs : Pulumi.ResourceArgs
    {
        [Input("frequency", required: true)]
        public Input<string> Frequency { get; set; } = null!;

        [Input("time", required: true)]
        public Input<string> Time { get; set; } = null!;

        [Input("weekdays")]
        private InputList<string>? _weekdays;
        public InputList<string> Weekdays
        {
            get => _weekdays ?? (_weekdays = new InputList<string>());
            set => _weekdays = value;
        }

        public PolicyVMBackupArgs()
        {
        }
    }

    public sealed class PolicyVMBackupGetArgs : Pulumi.ResourceArgs
    {
        [Input("frequency", required: true)]
        public Input<string> Frequency { get; set; } = null!;

        [Input("time", required: true)]
        public Input<string> Time { get; set; } = null!;

        [Input("weekdays")]
        private InputList<string>? _weekdays;
        public InputList<string> Weekdays
        {
            get => _weekdays ?? (_weekdays = new InputList<string>());
            set => _weekdays = value;
        }

        public PolicyVMBackupGetArgs()
        {
        }
    }

    public sealed class PolicyVMRetentionDailyArgs : Pulumi.ResourceArgs
    {
        [Input("count", required: true)]
        public Input<int> Count { get; set; } = null!;

        public PolicyVMRetentionDailyArgs()
        {
        }
    }

    public sealed class PolicyVMRetentionDailyGetArgs : Pulumi.ResourceArgs
    {
        [Input("count", required: true)]
        public Input<int> Count { get; set; } = null!;

        public PolicyVMRetentionDailyGetArgs()
        {
        }
    }

    public sealed class PolicyVMRetentionMonthlyArgs : Pulumi.ResourceArgs
    {
        [Input("count", required: true)]
        public Input<int> Count { get; set; } = null!;

        [Input("weekdays", required: true)]
        private InputList<string>? _weekdays;
        public InputList<string> Weekdays
        {
            get => _weekdays ?? (_weekdays = new InputList<string>());
            set => _weekdays = value;
        }

        [Input("weeks", required: true)]
        private InputList<string>? _weeks;
        public InputList<string> Weeks
        {
            get => _weeks ?? (_weeks = new InputList<string>());
            set => _weeks = value;
        }

        public PolicyVMRetentionMonthlyArgs()
        {
        }
    }

    public sealed class PolicyVMRetentionMonthlyGetArgs : Pulumi.ResourceArgs
    {
        [Input("count", required: true)]
        public Input<int> Count { get; set; } = null!;

        [Input("weekdays", required: true)]
        private InputList<string>? _weekdays;
        public InputList<string> Weekdays
        {
            get => _weekdays ?? (_weekdays = new InputList<string>());
            set => _weekdays = value;
        }

        [Input("weeks", required: true)]
        private InputList<string>? _weeks;
        public InputList<string> Weeks
        {
            get => _weeks ?? (_weeks = new InputList<string>());
            set => _weeks = value;
        }

        public PolicyVMRetentionMonthlyGetArgs()
        {
        }
    }

    public sealed class PolicyVMRetentionWeeklyArgs : Pulumi.ResourceArgs
    {
        [Input("count", required: true)]
        public Input<int> Count { get; set; } = null!;

        [Input("weekdays", required: true)]
        private InputList<string>? _weekdays;
        public InputList<string> Weekdays
        {
            get => _weekdays ?? (_weekdays = new InputList<string>());
            set => _weekdays = value;
        }

        public PolicyVMRetentionWeeklyArgs()
        {
        }
    }

    public sealed class PolicyVMRetentionWeeklyGetArgs : Pulumi.ResourceArgs
    {
        [Input("count", required: true)]
        public Input<int> Count { get; set; } = null!;

        [Input("weekdays", required: true)]
        private InputList<string>? _weekdays;
        public InputList<string> Weekdays
        {
            get => _weekdays ?? (_weekdays = new InputList<string>());
            set => _weekdays = value;
        }

        public PolicyVMRetentionWeeklyGetArgs()
        {
        }
    }

    public sealed class PolicyVMRetentionYearlyArgs : Pulumi.ResourceArgs
    {
        [Input("count", required: true)]
        public Input<int> Count { get; set; } = null!;

        [Input("months", required: true)]
        private InputList<string>? _months;
        public InputList<string> Months
        {
            get => _months ?? (_months = new InputList<string>());
            set => _months = value;
        }

        [Input("weekdays", required: true)]
        private InputList<string>? _weekdays;
        public InputList<string> Weekdays
        {
            get => _weekdays ?? (_weekdays = new InputList<string>());
            set => _weekdays = value;
        }

        [Input("weeks", required: true)]
        private InputList<string>? _weeks;
        public InputList<string> Weeks
        {
            get => _weeks ?? (_weeks = new InputList<string>());
            set => _weeks = value;
        }

        public PolicyVMRetentionYearlyArgs()
        {
        }
    }

    public sealed class PolicyVMRetentionYearlyGetArgs : Pulumi.ResourceArgs
    {
        [Input("count", required: true)]
        public Input<int> Count { get; set; } = null!;

        [Input("months", required: true)]
        private InputList<string>? _months;
        public InputList<string> Months
        {
            get => _months ?? (_months = new InputList<string>());
            set => _months = value;
        }

        [Input("weekdays", required: true)]
        private InputList<string>? _weekdays;
        public InputList<string> Weekdays
        {
            get => _weekdays ?? (_weekdays = new InputList<string>());
            set => _weekdays = value;
        }

        [Input("weeks", required: true)]
        private InputList<string>? _weeks;
        public InputList<string> Weeks
        {
            get => _weeks ?? (_weeks = new InputList<string>());
            set => _weeks = value;
        }

        public PolicyVMRetentionYearlyGetArgs()
        {
        }
    }
    }

    namespace Outputs
    {

    [OutputType]
    public sealed class PolicyVMBackup
    {
        public readonly string Frequency;
        public readonly string Time;
        public readonly ImmutableArray<string> Weekdays;

        [OutputConstructor]
        private PolicyVMBackup(
            string frequency,
            string time,
            ImmutableArray<string> weekdays)
        {
            Frequency = frequency;
            Time = time;
            Weekdays = weekdays;
        }
    }

    [OutputType]
    public sealed class PolicyVMRetentionDaily
    {
        public readonly int Count;

        [OutputConstructor]
        private PolicyVMRetentionDaily(int count)
        {
            Count = count;
        }
    }

    [OutputType]
    public sealed class PolicyVMRetentionMonthly
    {
        public readonly int Count;
        public readonly ImmutableArray<string> Weekdays;
        public readonly ImmutableArray<string> Weeks;

        [OutputConstructor]
        private PolicyVMRetentionMonthly(
            int count,
            ImmutableArray<string> weekdays,
            ImmutableArray<string> weeks)
        {
            Count = count;
            Weekdays = weekdays;
            Weeks = weeks;
        }
    }

    [OutputType]
    public sealed class PolicyVMRetentionWeekly
    {
        public readonly int Count;
        public readonly ImmutableArray<string> Weekdays;

        [OutputConstructor]
        private PolicyVMRetentionWeekly(
            int count,
            ImmutableArray<string> weekdays)
        {
            Count = count;
            Weekdays = weekdays;
        }
    }

    [OutputType]
    public sealed class PolicyVMRetentionYearly
    {
        public readonly int Count;
        public readonly ImmutableArray<string> Months;
        public readonly ImmutableArray<string> Weekdays;
        public readonly ImmutableArray<string> Weeks;

        [OutputConstructor]
        private PolicyVMRetentionYearly(
            int count,
            ImmutableArray<string> months,
            ImmutableArray<string> weekdays,
            ImmutableArray<string> weeks)
        {
            Count = count;
            Months = months;
            Weekdays = weekdays;
            Weeks = weeks;
        }
    }
    }
}