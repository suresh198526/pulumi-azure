// *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

using System;
using System.Collections.Generic;
using System.Collections.Immutable;
using System.Threading.Tasks;
using Pulumi.Serialization;

namespace Pulumi.Azure.Storage.Inputs
{

    public sealed class ManagementPolicyRuleFiltersGetArgs : Pulumi.ResourceArgs
    {
        [Input("blobTypes")]
        private InputList<string>? _blobTypes;

        /// <summary>
        /// An array of predefined values. Valid options are `blockBlob` and `appendBlob`.
        /// </summary>
        public InputList<string> BlobTypes
        {
            get => _blobTypes ?? (_blobTypes = new InputList<string>());
            set => _blobTypes = value;
        }

        [Input("prefixMatches")]
        private InputList<string>? _prefixMatches;

        /// <summary>
        /// An array of strings for prefixes to be matched.
        /// </summary>
        public InputList<string> PrefixMatches
        {
            get => _prefixMatches ?? (_prefixMatches = new InputList<string>());
            set => _prefixMatches = value;
        }

        public ManagementPolicyRuleFiltersGetArgs()
        {
        }
    }
}
