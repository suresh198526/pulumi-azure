// *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

using System.Collections.Immutable;
using System.Threading.Tasks;
using Pulumi.Serialization;

namespace Pulumi.Azure.Compute
{
    public static partial class Invokes
    {
        /// <summary>
        /// Use this data source to access information about an existing Snapshot.
        /// 
        /// &gt; This content is derived from https://github.com/terraform-providers/terraform-provider-azurerm/blob/master/website/docs/d/snapshot.html.markdown.
        /// </summary>
        public static Task<GetSnapshotResult> GetSnapshot(GetSnapshotArgs args, InvokeOptions? options = null)
            => Pulumi.Deployment.Instance.InvokeAsync<GetSnapshotResult>("azure:compute/getSnapshot:getSnapshot", args ?? ResourceArgs.Empty, options.WithVersion());
    }

    public sealed class GetSnapshotArgs : Pulumi.ResourceArgs
    {
        /// <summary>
        /// Specifies the name of the Snapshot.
        /// </summary>
        [Input("name", required: true)]
        public Input<string> Name { get; set; } = null!;

        /// <summary>
        /// Specifies the name of the resource group the Snapshot is located in.
        /// </summary>
        [Input("resourceGroupName", required: true)]
        public Input<string> ResourceGroupName { get; set; } = null!;

        public GetSnapshotArgs()
        {
        }
    }

    [OutputType]
    public sealed class GetSnapshotResult
    {
        public readonly string CreationOption;
        /// <summary>
        /// The size of the Snapshotted Disk in GB.
        /// </summary>
        public readonly int DiskSizeGb;
        public readonly ImmutableArray<Outputs.GetSnapshotEncryptionSettingsResult> EncryptionSettings;
        public readonly string Name;
        public readonly string OsType;
        public readonly string ResourceGroupName;
        /// <summary>
        /// The reference to an existing snapshot.
        /// </summary>
        public readonly string SourceResourceId;
        /// <summary>
        /// The URI to a Managed or Unmanaged Disk.
        /// </summary>
        public readonly string SourceUri;
        /// <summary>
        /// The ID of an storage account.
        /// </summary>
        public readonly string StorageAccountId;
        public readonly string TimeCreated;
        /// <summary>
        /// id is the provider-assigned unique ID for this managed resource.
        /// </summary>
        public readonly string Id;

        [OutputConstructor]
        private GetSnapshotResult(
            string creationOption,
            int diskSizeGb,
            ImmutableArray<Outputs.GetSnapshotEncryptionSettingsResult> encryptionSettings,
            string name,
            string osType,
            string resourceGroupName,
            string sourceResourceId,
            string sourceUri,
            string storageAccountId,
            string timeCreated,
            string id)
        {
            CreationOption = creationOption;
            DiskSizeGb = diskSizeGb;
            EncryptionSettings = encryptionSettings;
            Name = name;
            OsType = osType;
            ResourceGroupName = resourceGroupName;
            SourceResourceId = sourceResourceId;
            SourceUri = sourceUri;
            StorageAccountId = storageAccountId;
            TimeCreated = timeCreated;
            Id = id;
        }
    }

    namespace Outputs
    {

    [OutputType]
    public sealed class GetSnapshotEncryptionSettingsDiskEncryptionKeysResult
    {
        public readonly string SecretUrl;
        public readonly string SourceVaultId;

        [OutputConstructor]
        private GetSnapshotEncryptionSettingsDiskEncryptionKeysResult(
            string secretUrl,
            string sourceVaultId)
        {
            SecretUrl = secretUrl;
            SourceVaultId = sourceVaultId;
        }
    }

    [OutputType]
    public sealed class GetSnapshotEncryptionSettingsKeyEncryptionKeysResult
    {
        public readonly string KeyUrl;
        public readonly string SourceVaultId;

        [OutputConstructor]
        private GetSnapshotEncryptionSettingsKeyEncryptionKeysResult(
            string keyUrl,
            string sourceVaultId)
        {
            KeyUrl = keyUrl;
            SourceVaultId = sourceVaultId;
        }
    }

    [OutputType]
    public sealed class GetSnapshotEncryptionSettingsResult
    {
        public readonly ImmutableArray<GetSnapshotEncryptionSettingsDiskEncryptionKeysResult> DiskEncryptionKeys;
        public readonly bool Enabled;
        public readonly ImmutableArray<GetSnapshotEncryptionSettingsKeyEncryptionKeysResult> KeyEncryptionKeys;

        [OutputConstructor]
        private GetSnapshotEncryptionSettingsResult(
            ImmutableArray<GetSnapshotEncryptionSettingsDiskEncryptionKeysResult> diskEncryptionKeys,
            bool enabled,
            ImmutableArray<GetSnapshotEncryptionSettingsKeyEncryptionKeysResult> keyEncryptionKeys)
        {
            DiskEncryptionKeys = diskEncryptionKeys;
            Enabled = enabled;
            KeyEncryptionKeys = keyEncryptionKeys;
        }
    }
    }
}