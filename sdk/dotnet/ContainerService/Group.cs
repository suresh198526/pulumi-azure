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
    /// Manages as an Azure Container Group instance.
    /// 
    /// ## Example Usage
    /// 
    /// This example provisions a Basic Container.
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
    ///         var exampleGroup = new Azure.ContainerService.Group("exampleGroup", new Azure.ContainerService.GroupArgs
    ///         {
    ///             Location = exampleResourceGroup.Location,
    ///             ResourceGroupName = exampleResourceGroup.Name,
    ///             IpAddressType = "public",
    ///             DnsNameLabel = "aci-label",
    ///             OsType = "Linux",
    ///             Containers = 
    ///             {
    ///                 new Azure.ContainerService.Inputs.GroupContainerArgs
    ///                 {
    ///                     Name = "hello-world",
    ///                     Image = "microsoft/aci-helloworld:latest",
    ///                     Cpu = 0.5,
    ///                     Memory = 1.5,
    ///                     Ports = 
    ///                     {
    ///                         new Azure.ContainerService.Inputs.GroupContainerPortArgs
    ///                         {
    ///                             Port = 443,
    ///                             Protocol = "TCP",
    ///                         },
    ///                     },
    ///                 },
    ///                 new Azure.ContainerService.Inputs.GroupContainerArgs
    ///                 {
    ///                     Name = "sidecar",
    ///                     Image = "microsoft/aci-tutorial-sidecar",
    ///                     Cpu = 0.5,
    ///                     Memory = 1.5,
    ///                 },
    ///             },
    ///             Tags = 
    ///             {
    ///                 { "environment", "testing" },
    ///             },
    ///         });
    ///     }
    /// 
    /// }
    /// ```
    /// </summary>
    public partial class Group : Pulumi.CustomResource
    {
        /// <summary>
        /// The definition of a container that is part of the group as documented in the `container` block below. Changing this forces a new resource to be created.
        /// </summary>
        [Output("containers")]
        public Output<ImmutableArray<Outputs.GroupContainer>> Containers { get; private set; } = null!;

        /// <summary>
        /// A `diagnostics` block as documented below.
        /// </summary>
        [Output("diagnostics")]
        public Output<Outputs.GroupDiagnostics?> Diagnostics { get; private set; } = null!;

        /// <summary>
        /// A `dns_config` block as documented below.
        /// </summary>
        [Output("dnsConfig")]
        public Output<Outputs.GroupDnsConfig?> DnsConfig { get; private set; } = null!;

        /// <summary>
        /// The DNS label/name for the container groups IP. Changing this forces a new resource to be created.
        /// </summary>
        [Output("dnsNameLabel")]
        public Output<string?> DnsNameLabel { get; private set; } = null!;

        /// <summary>
        /// The FQDN of the container group derived from `dns_name_label`.
        /// </summary>
        [Output("fqdn")]
        public Output<string> Fqdn { get; private set; } = null!;

        /// <summary>
        /// An `identity` block as defined below.
        /// </summary>
        [Output("identity")]
        public Output<Outputs.GroupIdentity> Identity { get; private set; } = null!;

        /// <summary>
        /// A `image_registry_credential` block as documented below. Changing this forces a new resource to be created.
        /// </summary>
        [Output("imageRegistryCredentials")]
        public Output<ImmutableArray<Outputs.GroupImageRegistryCredential>> ImageRegistryCredentials { get; private set; } = null!;

        /// <summary>
        /// The IP address allocated to the container group.
        /// </summary>
        [Output("ipAddress")]
        public Output<string> IpAddress { get; private set; } = null!;

        /// <summary>
        /// Specifies the ip address type of the container. `Public` or `Private`. Changing this forces a new resource to be created. If set to `Private`, `network_profile_id` also needs to be set.
        /// </summary>
        [Output("ipAddressType")]
        public Output<string?> IpAddressType { get; private set; } = null!;

        /// <summary>
        /// Specifies the supported Azure location where the resource exists. Changing this forces a new resource to be created.
        /// </summary>
        [Output("location")]
        public Output<string> Location { get; private set; } = null!;

        /// <summary>
        /// Specifies the name of the Container Group. Changing this forces a new resource to be created.
        /// </summary>
        [Output("name")]
        public Output<string> Name { get; private set; } = null!;

        /// <summary>
        /// Network profile ID for deploying to virtual network.
        /// </summary>
        [Output("networkProfileId")]
        public Output<string?> NetworkProfileId { get; private set; } = null!;

        /// <summary>
        /// The OS for the container group. Allowed values are `Linux` and `Windows`. Changing this forces a new resource to be created.
        /// </summary>
        [Output("osType")]
        public Output<string> OsType { get; private set; } = null!;

        /// <summary>
        /// The name of the resource group in which to create the Container Group. Changing this forces a new resource to be created.
        /// </summary>
        [Output("resourceGroupName")]
        public Output<string> ResourceGroupName { get; private set; } = null!;

        /// <summary>
        /// Restart policy for the container group. Allowed values are `Always`, `Never`, `OnFailure`. Defaults to `Always`. Changing this forces a new resource to be created.
        /// </summary>
        [Output("restartPolicy")]
        public Output<string?> RestartPolicy { get; private set; } = null!;

        /// <summary>
        /// A mapping of tags to assign to the resource. Changing this forces a new resource to be created.
        /// </summary>
        [Output("tags")]
        public Output<ImmutableDictionary<string, string>?> Tags { get; private set; } = null!;


        /// <summary>
        /// Create a Group resource with the given unique name, arguments, and options.
        /// </summary>
        ///
        /// <param name="name">The unique name of the resource</param>
        /// <param name="args">The arguments used to populate this resource's properties</param>
        /// <param name="options">A bag of options that control this resource's behavior</param>
        public Group(string name, GroupArgs args, CustomResourceOptions? options = null)
            : base("azure:containerservice/group:Group", name, args ?? new GroupArgs(), MakeResourceOptions(options, ""))
        {
        }

        private Group(string name, Input<string> id, GroupState? state = null, CustomResourceOptions? options = null)
            : base("azure:containerservice/group:Group", name, state, MakeResourceOptions(options, id))
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
        /// Get an existing Group resource's state with the given name, ID, and optional extra
        /// properties used to qualify the lookup.
        /// </summary>
        ///
        /// <param name="name">The unique name of the resulting resource.</param>
        /// <param name="id">The unique provider ID of the resource to lookup.</param>
        /// <param name="state">Any extra arguments used during the lookup.</param>
        /// <param name="options">A bag of options that control this resource's behavior</param>
        public static Group Get(string name, Input<string> id, GroupState? state = null, CustomResourceOptions? options = null)
        {
            return new Group(name, id, state, options);
        }
    }

    public sealed class GroupArgs : Pulumi.ResourceArgs
    {
        [Input("containers", required: true)]
        private InputList<Inputs.GroupContainerArgs>? _containers;

        /// <summary>
        /// The definition of a container that is part of the group as documented in the `container` block below. Changing this forces a new resource to be created.
        /// </summary>
        public InputList<Inputs.GroupContainerArgs> Containers
        {
            get => _containers ?? (_containers = new InputList<Inputs.GroupContainerArgs>());
            set => _containers = value;
        }

        /// <summary>
        /// A `diagnostics` block as documented below.
        /// </summary>
        [Input("diagnostics")]
        public Input<Inputs.GroupDiagnosticsArgs>? Diagnostics { get; set; }

        /// <summary>
        /// A `dns_config` block as documented below.
        /// </summary>
        [Input("dnsConfig")]
        public Input<Inputs.GroupDnsConfigArgs>? DnsConfig { get; set; }

        /// <summary>
        /// The DNS label/name for the container groups IP. Changing this forces a new resource to be created.
        /// </summary>
        [Input("dnsNameLabel")]
        public Input<string>? DnsNameLabel { get; set; }

        /// <summary>
        /// An `identity` block as defined below.
        /// </summary>
        [Input("identity")]
        public Input<Inputs.GroupIdentityArgs>? Identity { get; set; }

        [Input("imageRegistryCredentials")]
        private InputList<Inputs.GroupImageRegistryCredentialArgs>? _imageRegistryCredentials;

        /// <summary>
        /// A `image_registry_credential` block as documented below. Changing this forces a new resource to be created.
        /// </summary>
        public InputList<Inputs.GroupImageRegistryCredentialArgs> ImageRegistryCredentials
        {
            get => _imageRegistryCredentials ?? (_imageRegistryCredentials = new InputList<Inputs.GroupImageRegistryCredentialArgs>());
            set => _imageRegistryCredentials = value;
        }

        /// <summary>
        /// Specifies the ip address type of the container. `Public` or `Private`. Changing this forces a new resource to be created. If set to `Private`, `network_profile_id` also needs to be set.
        /// </summary>
        [Input("ipAddressType")]
        public Input<string>? IpAddressType { get; set; }

        /// <summary>
        /// Specifies the supported Azure location where the resource exists. Changing this forces a new resource to be created.
        /// </summary>
        [Input("location")]
        public Input<string>? Location { get; set; }

        /// <summary>
        /// Specifies the name of the Container Group. Changing this forces a new resource to be created.
        /// </summary>
        [Input("name")]
        public Input<string>? Name { get; set; }

        /// <summary>
        /// Network profile ID for deploying to virtual network.
        /// </summary>
        [Input("networkProfileId")]
        public Input<string>? NetworkProfileId { get; set; }

        /// <summary>
        /// The OS for the container group. Allowed values are `Linux` and `Windows`. Changing this forces a new resource to be created.
        /// </summary>
        [Input("osType", required: true)]
        public Input<string> OsType { get; set; } = null!;

        /// <summary>
        /// The name of the resource group in which to create the Container Group. Changing this forces a new resource to be created.
        /// </summary>
        [Input("resourceGroupName", required: true)]
        public Input<string> ResourceGroupName { get; set; } = null!;

        /// <summary>
        /// Restart policy for the container group. Allowed values are `Always`, `Never`, `OnFailure`. Defaults to `Always`. Changing this forces a new resource to be created.
        /// </summary>
        [Input("restartPolicy")]
        public Input<string>? RestartPolicy { get; set; }

        [Input("tags")]
        private InputMap<string>? _tags;

        /// <summary>
        /// A mapping of tags to assign to the resource. Changing this forces a new resource to be created.
        /// </summary>
        public InputMap<string> Tags
        {
            get => _tags ?? (_tags = new InputMap<string>());
            set => _tags = value;
        }

        public GroupArgs()
        {
        }
    }

    public sealed class GroupState : Pulumi.ResourceArgs
    {
        [Input("containers")]
        private InputList<Inputs.GroupContainerGetArgs>? _containers;

        /// <summary>
        /// The definition of a container that is part of the group as documented in the `container` block below. Changing this forces a new resource to be created.
        /// </summary>
        public InputList<Inputs.GroupContainerGetArgs> Containers
        {
            get => _containers ?? (_containers = new InputList<Inputs.GroupContainerGetArgs>());
            set => _containers = value;
        }

        /// <summary>
        /// A `diagnostics` block as documented below.
        /// </summary>
        [Input("diagnostics")]
        public Input<Inputs.GroupDiagnosticsGetArgs>? Diagnostics { get; set; }

        /// <summary>
        /// A `dns_config` block as documented below.
        /// </summary>
        [Input("dnsConfig")]
        public Input<Inputs.GroupDnsConfigGetArgs>? DnsConfig { get; set; }

        /// <summary>
        /// The DNS label/name for the container groups IP. Changing this forces a new resource to be created.
        /// </summary>
        [Input("dnsNameLabel")]
        public Input<string>? DnsNameLabel { get; set; }

        /// <summary>
        /// The FQDN of the container group derived from `dns_name_label`.
        /// </summary>
        [Input("fqdn")]
        public Input<string>? Fqdn { get; set; }

        /// <summary>
        /// An `identity` block as defined below.
        /// </summary>
        [Input("identity")]
        public Input<Inputs.GroupIdentityGetArgs>? Identity { get; set; }

        [Input("imageRegistryCredentials")]
        private InputList<Inputs.GroupImageRegistryCredentialGetArgs>? _imageRegistryCredentials;

        /// <summary>
        /// A `image_registry_credential` block as documented below. Changing this forces a new resource to be created.
        /// </summary>
        public InputList<Inputs.GroupImageRegistryCredentialGetArgs> ImageRegistryCredentials
        {
            get => _imageRegistryCredentials ?? (_imageRegistryCredentials = new InputList<Inputs.GroupImageRegistryCredentialGetArgs>());
            set => _imageRegistryCredentials = value;
        }

        /// <summary>
        /// The IP address allocated to the container group.
        /// </summary>
        [Input("ipAddress")]
        public Input<string>? IpAddress { get; set; }

        /// <summary>
        /// Specifies the ip address type of the container. `Public` or `Private`. Changing this forces a new resource to be created. If set to `Private`, `network_profile_id` also needs to be set.
        /// </summary>
        [Input("ipAddressType")]
        public Input<string>? IpAddressType { get; set; }

        /// <summary>
        /// Specifies the supported Azure location where the resource exists. Changing this forces a new resource to be created.
        /// </summary>
        [Input("location")]
        public Input<string>? Location { get; set; }

        /// <summary>
        /// Specifies the name of the Container Group. Changing this forces a new resource to be created.
        /// </summary>
        [Input("name")]
        public Input<string>? Name { get; set; }

        /// <summary>
        /// Network profile ID for deploying to virtual network.
        /// </summary>
        [Input("networkProfileId")]
        public Input<string>? NetworkProfileId { get; set; }

        /// <summary>
        /// The OS for the container group. Allowed values are `Linux` and `Windows`. Changing this forces a new resource to be created.
        /// </summary>
        [Input("osType")]
        public Input<string>? OsType { get; set; }

        /// <summary>
        /// The name of the resource group in which to create the Container Group. Changing this forces a new resource to be created.
        /// </summary>
        [Input("resourceGroupName")]
        public Input<string>? ResourceGroupName { get; set; }

        /// <summary>
        /// Restart policy for the container group. Allowed values are `Always`, `Never`, `OnFailure`. Defaults to `Always`. Changing this forces a new resource to be created.
        /// </summary>
        [Input("restartPolicy")]
        public Input<string>? RestartPolicy { get; set; }

        [Input("tags")]
        private InputMap<string>? _tags;

        /// <summary>
        /// A mapping of tags to assign to the resource. Changing this forces a new resource to be created.
        /// </summary>
        public InputMap<string> Tags
        {
            get => _tags ?? (_tags = new InputMap<string>());
            set => _tags = value;
        }

        public GroupState()
        {
        }
    }
}
