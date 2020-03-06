// *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

using System.Collections.Generic;
using System.Collections.Immutable;
using System.Threading.Tasks;
using Pulumi.Serialization;

namespace Pulumi.Azure.Compute
{
    /// <summary>
    /// Manages a Virtual Machine Extension to provide post deployment configuration
    /// and run automated tasks.
    /// 
    /// &gt; **NOTE:** Custom Script Extensions for Linux &amp; Windows require that the `commandToExecute` returns a `0` exit code to be classified as successfully deployed. You can achieve this by appending `exit 0` to the end of your `commandToExecute`.
    /// 
    /// &gt; **NOTE:** Custom Script Extensions require that the Azure Virtual Machine Guest Agent is running on the Virtual Machine.
    /// 
    /// &gt; This content is derived from https://github.com/terraform-providers/terraform-provider-azurerm/blob/master/website/docs/r/virtual_machine_extension.html.markdown.
    /// </summary>
    public partial class Extension : Pulumi.CustomResource
    {
        /// <summary>
        /// Specifies if the platform deploys
        /// the latest minor version update to the `type_handler_version` specified.
        /// </summary>
        [Output("autoUpgradeMinorVersion")]
        public Output<bool?> AutoUpgradeMinorVersion { get; private set; } = null!;

        /// <summary>
        /// The name of the virtual machine extension peering. Changing
        /// this forces a new resource to be created.
        /// </summary>
        [Output("name")]
        public Output<string> Name { get; private set; } = null!;

        /// <summary>
        /// The protected_settings passed to the
        /// extension, like settings, these are specified as a JSON object in a string.
        /// </summary>
        [Output("protectedSettings")]
        public Output<string?> ProtectedSettings { get; private set; } = null!;

        /// <summary>
        /// The publisher of the extension, available publishers
        /// can be found by using the Azure CLI.
        /// </summary>
        [Output("publisher")]
        public Output<string> Publisher { get; private set; } = null!;

        /// <summary>
        /// The settings passed to the extension, these are
        /// specified as a JSON object in a string.
        /// </summary>
        [Output("settings")]
        public Output<string?> Settings { get; private set; } = null!;

        /// <summary>
        /// A mapping of tags to assign to the resource.
        /// </summary>
        [Output("tags")]
        public Output<ImmutableDictionary<string, string>?> Tags { get; private set; } = null!;

        /// <summary>
        /// The type of extension, available types for a publisher can
        /// be found using the Azure CLI.
        /// </summary>
        [Output("type")]
        public Output<string> Type { get; private set; } = null!;

        /// <summary>
        /// Specifies the version of the extension to
        /// use, available versions can be found using the Azure CLI.
        /// </summary>
        [Output("typeHandlerVersion")]
        public Output<string> TypeHandlerVersion { get; private set; } = null!;

        /// <summary>
        /// The ID of the Virtual Machine. Changing this forces a new resource to be created
        /// </summary>
        [Output("virtualMachineId")]
        public Output<string> VirtualMachineId { get; private set; } = null!;


        /// <summary>
        /// Create a Extension resource with the given unique name, arguments, and options.
        /// </summary>
        ///
        /// <param name="name">The unique name of the resource</param>
        /// <param name="args">The arguments used to populate this resource's properties</param>
        /// <param name="options">A bag of options that control this resource's behavior</param>
        public Extension(string name, ExtensionArgs args, CustomResourceOptions? options = null)
            : base("azure:compute/extension:Extension", name, args ?? ResourceArgs.Empty, MakeResourceOptions(options, ""))
        {
        }

        private Extension(string name, Input<string> id, ExtensionState? state = null, CustomResourceOptions? options = null)
            : base("azure:compute/extension:Extension", name, state, MakeResourceOptions(options, id))
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
        /// Get an existing Extension resource's state with the given name, ID, and optional extra
        /// properties used to qualify the lookup.
        /// </summary>
        ///
        /// <param name="name">The unique name of the resulting resource.</param>
        /// <param name="id">The unique provider ID of the resource to lookup.</param>
        /// <param name="state">Any extra arguments used during the lookup.</param>
        /// <param name="options">A bag of options that control this resource's behavior</param>
        public static Extension Get(string name, Input<string> id, ExtensionState? state = null, CustomResourceOptions? options = null)
        {
            return new Extension(name, id, state, options);
        }
    }

    public sealed class ExtensionArgs : Pulumi.ResourceArgs
    {
        /// <summary>
        /// Specifies if the platform deploys
        /// the latest minor version update to the `type_handler_version` specified.
        /// </summary>
        [Input("autoUpgradeMinorVersion")]
        public Input<bool>? AutoUpgradeMinorVersion { get; set; }

        /// <summary>
        /// The name of the virtual machine extension peering. Changing
        /// this forces a new resource to be created.
        /// </summary>
        [Input("name")]
        public Input<string>? Name { get; set; }

        /// <summary>
        /// The protected_settings passed to the
        /// extension, like settings, these are specified as a JSON object in a string.
        /// </summary>
        [Input("protectedSettings")]
        public Input<string>? ProtectedSettings { get; set; }

        /// <summary>
        /// The publisher of the extension, available publishers
        /// can be found by using the Azure CLI.
        /// </summary>
        [Input("publisher", required: true)]
        public Input<string> Publisher { get; set; } = null!;

        /// <summary>
        /// The settings passed to the extension, these are
        /// specified as a JSON object in a string.
        /// </summary>
        [Input("settings")]
        public Input<string>? Settings { get; set; }

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
        /// The type of extension, available types for a publisher can
        /// be found using the Azure CLI.
        /// </summary>
        [Input("type", required: true)]
        public Input<string> Type { get; set; } = null!;

        /// <summary>
        /// Specifies the version of the extension to
        /// use, available versions can be found using the Azure CLI.
        /// </summary>
        [Input("typeHandlerVersion", required: true)]
        public Input<string> TypeHandlerVersion { get; set; } = null!;

        /// <summary>
        /// The ID of the Virtual Machine. Changing this forces a new resource to be created
        /// </summary>
        [Input("virtualMachineId", required: true)]
        public Input<string> VirtualMachineId { get; set; } = null!;

        public ExtensionArgs()
        {
        }
    }

    public sealed class ExtensionState : Pulumi.ResourceArgs
    {
        /// <summary>
        /// Specifies if the platform deploys
        /// the latest minor version update to the `type_handler_version` specified.
        /// </summary>
        [Input("autoUpgradeMinorVersion")]
        public Input<bool>? AutoUpgradeMinorVersion { get; set; }

        /// <summary>
        /// The name of the virtual machine extension peering. Changing
        /// this forces a new resource to be created.
        /// </summary>
        [Input("name")]
        public Input<string>? Name { get; set; }

        /// <summary>
        /// The protected_settings passed to the
        /// extension, like settings, these are specified as a JSON object in a string.
        /// </summary>
        [Input("protectedSettings")]
        public Input<string>? ProtectedSettings { get; set; }

        /// <summary>
        /// The publisher of the extension, available publishers
        /// can be found by using the Azure CLI.
        /// </summary>
        [Input("publisher")]
        public Input<string>? Publisher { get; set; }

        /// <summary>
        /// The settings passed to the extension, these are
        /// specified as a JSON object in a string.
        /// </summary>
        [Input("settings")]
        public Input<string>? Settings { get; set; }

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
        /// The type of extension, available types for a publisher can
        /// be found using the Azure CLI.
        /// </summary>
        [Input("type")]
        public Input<string>? Type { get; set; }

        /// <summary>
        /// Specifies the version of the extension to
        /// use, available versions can be found using the Azure CLI.
        /// </summary>
        [Input("typeHandlerVersion")]
        public Input<string>? TypeHandlerVersion { get; set; }

        /// <summary>
        /// The ID of the Virtual Machine. Changing this forces a new resource to be created
        /// </summary>
        [Input("virtualMachineId")]
        public Input<string>? VirtualMachineId { get; set; }

        public ExtensionState()
        {
        }
    }
}
