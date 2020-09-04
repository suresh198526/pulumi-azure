// *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

using System;
using System.Collections.Generic;
using System.Collections.Immutable;
using System.Threading.Tasks;
using Pulumi.Serialization;

namespace Pulumi.Azure.Compute.Outputs
{

    [OutputType]
    public sealed class WindowsVirtualMachineScaleSetExtension
    {
        /// <summary>
        /// Should the latest version of the Extension be used at Deployment Time, if one is available? This won't auto-update the extension on existing installation. Defaults to `true`.
        /// </summary>
        public readonly bool? AutoUpgradeMinorVersion;
        /// <summary>
        /// A value which, when different to the previous value can be used to force-run the Extension even if the Extension Configuration hasn't changed.
        /// </summary>
        public readonly string? ForceUpdateTag;
        /// <summary>
        /// The name for the Virtual Machine Scale Set Extension.
        /// </summary>
        public readonly string Name;
        /// <summary>
        /// A JSON String which specifies Sensitive Settings (such as Passwords) for the Extension.
        /// </summary>
        public readonly string? ProtectedSettings;
        /// <summary>
        /// An ordered list of Extension names which this should be provisioned after.
        /// </summary>
        public readonly ImmutableArray<string> ProvisionAfterExtensions;
        /// <summary>
        /// Specifies the Publisher of the Extension.
        /// </summary>
        public readonly string Publisher;
        /// <summary>
        /// A JSON String which specifies Settings for the Extension.
        /// </summary>
        public readonly string? Settings;
        /// <summary>
        /// Specifies the Type of the Extension.
        /// </summary>
        public readonly string Type;
        /// <summary>
        /// Specifies the version of the extension to use, available versions can be found using the Azure CLI.
        /// </summary>
        public readonly string TypeHandlerVersion;

        [OutputConstructor]
        private WindowsVirtualMachineScaleSetExtension(
            bool? autoUpgradeMinorVersion,

            string? forceUpdateTag,

            string name,

            string? protectedSettings,

            ImmutableArray<string> provisionAfterExtensions,

            string publisher,

            string? settings,

            string type,

            string typeHandlerVersion)
        {
            AutoUpgradeMinorVersion = autoUpgradeMinorVersion;
            ForceUpdateTag = forceUpdateTag;
            Name = name;
            ProtectedSettings = protectedSettings;
            ProvisionAfterExtensions = provisionAfterExtensions;
            Publisher = publisher;
            Settings = settings;
            Type = type;
            TypeHandlerVersion = typeHandlerVersion;
        }
    }
}
