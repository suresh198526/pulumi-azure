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
    public sealed class GetImagesImageDataDiskResult
    {
        /// <summary>
        /// the URI in Azure storage of the blob used to create the image.
        /// </summary>
        public readonly string BlobUri;
        /// <summary>
        /// the caching mode for the Data Disk.
        /// </summary>
        public readonly string Caching;
        /// <summary>
        /// the logical unit number of the data disk.
        /// </summary>
        public readonly int Lun;
        /// <summary>
        /// the ID of the Managed Disk used as the Data Disk Image.
        /// </summary>
        public readonly string ManagedDiskId;
        /// <summary>
        /// the size of this Data Disk in GB.
        /// </summary>
        public readonly int SizeGb;

        [OutputConstructor]
        private GetImagesImageDataDiskResult(
            string blobUri,

            string caching,

            int lun,

            string managedDiskId,

            int sizeGb)
        {
            BlobUri = blobUri;
            Caching = caching;
            Lun = lun;
            ManagedDiskId = managedDiskId;
            SizeGb = sizeGb;
        }
    }
}