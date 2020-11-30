// *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

using System;
using System.Collections.Generic;
using System.Collections.Immutable;
using System.Threading.Tasks;
using Pulumi.Serialization;

namespace Pulumi.Azure.AppService.Inputs
{

    public sealed class AppServiceLogsHttpLogsAzureBlobStorageGetArgs : Pulumi.ResourceArgs
    {
        /// <summary>
        /// The number of days to retain logs for.
        /// </summary>
        [Input("retentionInDays", required: true)]
        public Input<int> RetentionInDays { get; set; } = null!;

        /// <summary>
        /// The URL to the storage container with a shared access signature token appended.
        /// </summary>
        [Input("sasUrl", required: true)]
        public Input<string> SasUrl { get; set; } = null!;

        public AppServiceLogsHttpLogsAzureBlobStorageGetArgs()
        {
        }
    }
}
