// *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

using System;
using System.Collections.Generic;
using System.Collections.Immutable;
using System.Threading.Tasks;
using Pulumi.Serialization;

namespace Pulumi.Azure.Storage.Outputs
{

    [OutputType]
    public sealed class ManagementPolicyRule
    {
        /// <summary>
        /// An `actions` block as documented below.
        /// </summary>
        public readonly Outputs.ManagementPolicyRuleActions Actions;
        /// <summary>
        /// Boolean to specify whether the rule is enabled.
        /// </summary>
        public readonly bool Enabled;
        /// <summary>
        /// A `filter` block as documented below.
        /// </summary>
        public readonly Outputs.ManagementPolicyRuleFilters? Filters;
        /// <summary>
        /// A rule name can contain any combination of alpha numeric characters. Rule name is case-sensitive. It must be unique within a policy.
        /// </summary>
        public readonly string Name;

        [OutputConstructor]
        private ManagementPolicyRule(
            Outputs.ManagementPolicyRuleActions actions,

            bool enabled,

            Outputs.ManagementPolicyRuleFilters? filters,

            string name)
        {
            Actions = actions;
            Enabled = enabled;
            Filters = filters;
            Name = name;
        }
    }
}