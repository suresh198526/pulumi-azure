// *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

using System;
using System.Collections.Generic;
using System.Collections.Immutable;
using System.Threading.Tasks;
using Pulumi.Serialization;

namespace Pulumi.Azure.AppService
{
    /// <summary>
    /// Manages a App Service Managed Certificate.
    /// 
    /// ## Import
    /// 
    /// App Service Managed Certificates can be imported using the `resource id`, e.g.
    /// 
    /// ```sh
    ///  $ pulumi import azure:appservice/managedCertificate:ManagedCertificate example /subscriptions/00000000-0000-0000-0000-000000000000/resourceGroups/resGroup1/providers/Microsoft.Web/certificates/customhost.contoso.com
    /// ```
    /// </summary>
    public partial class ManagedCertificate : Pulumi.CustomResource
    {
        /// <summary>
        /// The Canonical Name of the Certificate.
        /// </summary>
        [Output("canonicalName")]
        public Output<string> CanonicalName { get; private set; } = null!;

        /// <summary>
        /// The ID of the App Service Custom Hostname Binding for the Certificate. Changing this forces a new App Service Managed Certificate to be created.
        /// </summary>
        [Output("customHostnameBindingId")]
        public Output<string> CustomHostnameBindingId { get; private set; } = null!;

        /// <summary>
        /// The expiration date of the Certificate.
        /// </summary>
        [Output("expirationDate")]
        public Output<string> ExpirationDate { get; private set; } = null!;

        /// <summary>
        /// The friendly name of the Certificate.
        /// </summary>
        [Output("friendlyName")]
        public Output<string> FriendlyName { get; private set; } = null!;

        /// <summary>
        /// The list of Host Names for the Certificate.
        /// </summary>
        [Output("hostNames")]
        public Output<ImmutableArray<string>> HostNames { get; private set; } = null!;

        /// <summary>
        /// The Start date for the Certificate.
        /// </summary>
        [Output("issueDate")]
        public Output<string> IssueDate { get; private set; } = null!;

        /// <summary>
        /// The issuer of the Certificate.
        /// </summary>
        [Output("issuer")]
        public Output<string> Issuer { get; private set; } = null!;

        /// <summary>
        /// The Subject Name for the Certificate.
        /// </summary>
        [Output("subjectName")]
        public Output<string> SubjectName { get; private set; } = null!;

        /// <summary>
        /// A mapping of tags which should be assigned to the App Service Managed Certificate.
        /// </summary>
        [Output("tags")]
        public Output<ImmutableDictionary<string, string>?> Tags { get; private set; } = null!;

        /// <summary>
        /// The Certificate Thumbprint.
        /// </summary>
        [Output("thumbprint")]
        public Output<string> Thumbprint { get; private set; } = null!;


        /// <summary>
        /// Create a ManagedCertificate resource with the given unique name, arguments, and options.
        /// </summary>
        ///
        /// <param name="name">The unique name of the resource</param>
        /// <param name="args">The arguments used to populate this resource's properties</param>
        /// <param name="options">A bag of options that control this resource's behavior</param>
        public ManagedCertificate(string name, ManagedCertificateArgs args, CustomResourceOptions? options = null)
            : base("azure:appservice/managedCertificate:ManagedCertificate", name, args ?? new ManagedCertificateArgs(), MakeResourceOptions(options, ""))
        {
        }

        private ManagedCertificate(string name, Input<string> id, ManagedCertificateState? state = null, CustomResourceOptions? options = null)
            : base("azure:appservice/managedCertificate:ManagedCertificate", name, state, MakeResourceOptions(options, id))
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
        /// Get an existing ManagedCertificate resource's state with the given name, ID, and optional extra
        /// properties used to qualify the lookup.
        /// </summary>
        ///
        /// <param name="name">The unique name of the resulting resource.</param>
        /// <param name="id">The unique provider ID of the resource to lookup.</param>
        /// <param name="state">Any extra arguments used during the lookup.</param>
        /// <param name="options">A bag of options that control this resource's behavior</param>
        public static ManagedCertificate Get(string name, Input<string> id, ManagedCertificateState? state = null, CustomResourceOptions? options = null)
        {
            return new ManagedCertificate(name, id, state, options);
        }
    }

    public sealed class ManagedCertificateArgs : Pulumi.ResourceArgs
    {
        /// <summary>
        /// The ID of the App Service Custom Hostname Binding for the Certificate. Changing this forces a new App Service Managed Certificate to be created.
        /// </summary>
        [Input("customHostnameBindingId", required: true)]
        public Input<string> CustomHostnameBindingId { get; set; } = null!;

        [Input("tags")]
        private InputMap<string>? _tags;

        /// <summary>
        /// A mapping of tags which should be assigned to the App Service Managed Certificate.
        /// </summary>
        public InputMap<string> Tags
        {
            get => _tags ?? (_tags = new InputMap<string>());
            set => _tags = value;
        }

        public ManagedCertificateArgs()
        {
        }
    }

    public sealed class ManagedCertificateState : Pulumi.ResourceArgs
    {
        /// <summary>
        /// The Canonical Name of the Certificate.
        /// </summary>
        [Input("canonicalName")]
        public Input<string>? CanonicalName { get; set; }

        /// <summary>
        /// The ID of the App Service Custom Hostname Binding for the Certificate. Changing this forces a new App Service Managed Certificate to be created.
        /// </summary>
        [Input("customHostnameBindingId")]
        public Input<string>? CustomHostnameBindingId { get; set; }

        /// <summary>
        /// The expiration date of the Certificate.
        /// </summary>
        [Input("expirationDate")]
        public Input<string>? ExpirationDate { get; set; }

        /// <summary>
        /// The friendly name of the Certificate.
        /// </summary>
        [Input("friendlyName")]
        public Input<string>? FriendlyName { get; set; }

        [Input("hostNames")]
        private InputList<string>? _hostNames;

        /// <summary>
        /// The list of Host Names for the Certificate.
        /// </summary>
        public InputList<string> HostNames
        {
            get => _hostNames ?? (_hostNames = new InputList<string>());
            set => _hostNames = value;
        }

        /// <summary>
        /// The Start date for the Certificate.
        /// </summary>
        [Input("issueDate")]
        public Input<string>? IssueDate { get; set; }

        /// <summary>
        /// The issuer of the Certificate.
        /// </summary>
        [Input("issuer")]
        public Input<string>? Issuer { get; set; }

        /// <summary>
        /// The Subject Name for the Certificate.
        /// </summary>
        [Input("subjectName")]
        public Input<string>? SubjectName { get; set; }

        [Input("tags")]
        private InputMap<string>? _tags;

        /// <summary>
        /// A mapping of tags which should be assigned to the App Service Managed Certificate.
        /// </summary>
        public InputMap<string> Tags
        {
            get => _tags ?? (_tags = new InputMap<string>());
            set => _tags = value;
        }

        /// <summary>
        /// The Certificate Thumbprint.
        /// </summary>
        [Input("thumbprint")]
        public Input<string>? Thumbprint { get; set; }

        public ManagedCertificateState()
        {
        }
    }
}
