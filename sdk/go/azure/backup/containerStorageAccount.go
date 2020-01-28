// *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

// nolint: lll
package backup

import (
	"reflect"

	"github.com/pkg/errors"
	"github.com/pulumi/pulumi/sdk/go/pulumi"
)

// Manages registration of a storage account with Azure Backup. Storage accounts must be registered with an Azure Recovery Vault in order to backup file shares within the storage account. Registering a storage account with a vault creates what is known as a protection container within Azure Recovery Services. Once the container is created, Azure file shares within the storage account can be backed up using the `backup.ProtectedFileShare` resource.
// 
// > **NOTE:** Azure Backup for Azure File Shares is currently in public preview. During the preview, the service is subject to additional limitations and unsupported backup scenarios. [Read More](https://docs.microsoft.com/en-us/azure/backup/backup-azure-files#limitations-for-azure-file-share-backup-during-preview)
// 
// > This content is derived from https://github.com/terraform-providers/terraform-provider-azurerm/blob/master/website/docs/r/backup_container_storage_account.html.markdown.
type ContainerStorageAccount struct {
	pulumi.CustomResourceState

	// The name of the vault where the storage account will be registered.
	RecoveryVaultName pulumi.StringOutput `pulumi:"recoveryVaultName"`
	// Name of the resource group where the vault is located.
	ResourceGroupName pulumi.StringOutput `pulumi:"resourceGroupName"`
	// Azure Resource ID of the storage account to be registered
	StorageAccountId pulumi.StringOutput `pulumi:"storageAccountId"`
}

// NewContainerStorageAccount registers a new resource with the given unique name, arguments, and options.
func NewContainerStorageAccount(ctx *pulumi.Context,
	name string, args *ContainerStorageAccountArgs, opts ...pulumi.ResourceOption) (*ContainerStorageAccount, error) {
	if args == nil || args.RecoveryVaultName == nil {
		return nil, errors.New("missing required argument 'RecoveryVaultName'")
	}
	if args == nil || args.ResourceGroupName == nil {
		return nil, errors.New("missing required argument 'ResourceGroupName'")
	}
	if args == nil || args.StorageAccountId == nil {
		return nil, errors.New("missing required argument 'StorageAccountId'")
	}
	if args == nil {
		args = &ContainerStorageAccountArgs{}
	}
	var resource ContainerStorageAccount
	err := ctx.RegisterResource("azure:backup/containerStorageAccount:ContainerStorageAccount", name, args, &resource, opts...)
	if err != nil {
		return nil, err
	}
	return &resource, nil
}

// GetContainerStorageAccount gets an existing ContainerStorageAccount resource's state with the given name, ID, and optional
// state properties that are used to uniquely qualify the lookup (nil if not required).
func GetContainerStorageAccount(ctx *pulumi.Context,
	name string, id pulumi.IDInput, state *ContainerStorageAccountState, opts ...pulumi.ResourceOption) (*ContainerStorageAccount, error) {
	var resource ContainerStorageAccount
	err := ctx.ReadResource("azure:backup/containerStorageAccount:ContainerStorageAccount", name, id, state, &resource, opts...)
	if err != nil {
		return nil, err
	}
	return &resource, nil
}

// Input properties used for looking up and filtering ContainerStorageAccount resources.
type containerStorageAccountState struct {
	// The name of the vault where the storage account will be registered.
	RecoveryVaultName *string `pulumi:"recoveryVaultName"`
	// Name of the resource group where the vault is located.
	ResourceGroupName *string `pulumi:"resourceGroupName"`
	// Azure Resource ID of the storage account to be registered
	StorageAccountId *string `pulumi:"storageAccountId"`
}

type ContainerStorageAccountState struct {
	// The name of the vault where the storage account will be registered.
	RecoveryVaultName pulumi.StringPtrInput
	// Name of the resource group where the vault is located.
	ResourceGroupName pulumi.StringPtrInput
	// Azure Resource ID of the storage account to be registered
	StorageAccountId pulumi.StringPtrInput
}

func (ContainerStorageAccountState) ElementType() reflect.Type {
	return reflect.TypeOf((*containerStorageAccountState)(nil)).Elem()
}

type containerStorageAccountArgs struct {
	// The name of the vault where the storage account will be registered.
	RecoveryVaultName string `pulumi:"recoveryVaultName"`
	// Name of the resource group where the vault is located.
	ResourceGroupName string `pulumi:"resourceGroupName"`
	// Azure Resource ID of the storage account to be registered
	StorageAccountId string `pulumi:"storageAccountId"`
}

// The set of arguments for constructing a ContainerStorageAccount resource.
type ContainerStorageAccountArgs struct {
	// The name of the vault where the storage account will be registered.
	RecoveryVaultName pulumi.StringInput
	// Name of the resource group where the vault is located.
	ResourceGroupName pulumi.StringInput
	// Azure Resource ID of the storage account to be registered
	StorageAccountId pulumi.StringInput
}

func (ContainerStorageAccountArgs) ElementType() reflect.Type {
	return reflect.TypeOf((*containerStorageAccountArgs)(nil)).Elem()
}

