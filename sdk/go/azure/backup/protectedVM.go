// *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

// nolint: lll
package backup

import (
	"reflect"

	"github.com/pkg/errors"
	"github.com/pulumi/pulumi/sdk/go/pulumi"
)

// Manages Azure Backup for an Azure VM
// 
// > This content is derived from https://github.com/terraform-providers/terraform-provider-azurerm/blob/master/website/docs/r/backup_protected_vm.html.markdown.
type ProtectedVM struct {
	pulumi.CustomResourceState

	// Specifies the id of the backup policy to use.
	BackupPolicyId pulumi.StringOutput `pulumi:"backupPolicyId"`
	// Specifies the name of the Recovery Services Vault to use. Changing this forces a new resource to be created.
	RecoveryVaultName pulumi.StringOutput `pulumi:"recoveryVaultName"`
	// The name of the resource group in which to create the Recovery Services Protected VM. Changing this forces a new resource to be created.
	ResourceGroupName pulumi.StringOutput `pulumi:"resourceGroupName"`
	// Specifies the ID of the VM to backup. Changing this forces a new resource to be created.
	SourceVmId pulumi.StringOutput `pulumi:"sourceVmId"`
	// A mapping of tags to assign to the resource.
	Tags pulumi.StringMapOutput `pulumi:"tags"`
}

// NewProtectedVM registers a new resource with the given unique name, arguments, and options.
func NewProtectedVM(ctx *pulumi.Context,
	name string, args *ProtectedVMArgs, opts ...pulumi.ResourceOption) (*ProtectedVM, error) {
	if args == nil || args.BackupPolicyId == nil {
		return nil, errors.New("missing required argument 'BackupPolicyId'")
	}
	if args == nil || args.RecoveryVaultName == nil {
		return nil, errors.New("missing required argument 'RecoveryVaultName'")
	}
	if args == nil || args.ResourceGroupName == nil {
		return nil, errors.New("missing required argument 'ResourceGroupName'")
	}
	if args == nil || args.SourceVmId == nil {
		return nil, errors.New("missing required argument 'SourceVmId'")
	}
	if args == nil {
		args = &ProtectedVMArgs{}
	}
	var resource ProtectedVM
	err := ctx.RegisterResource("azure:backup/protectedVM:ProtectedVM", name, args, &resource, opts...)
	if err != nil {
		return nil, err
	}
	return &resource, nil
}

// GetProtectedVM gets an existing ProtectedVM resource's state with the given name, ID, and optional
// state properties that are used to uniquely qualify the lookup (nil if not required).
func GetProtectedVM(ctx *pulumi.Context,
	name string, id pulumi.IDInput, state *ProtectedVMState, opts ...pulumi.ResourceOption) (*ProtectedVM, error) {
	var resource ProtectedVM
	err := ctx.ReadResource("azure:backup/protectedVM:ProtectedVM", name, id, state, &resource, opts...)
	if err != nil {
		return nil, err
	}
	return &resource, nil
}

// Input properties used for looking up and filtering ProtectedVM resources.
type protectedVMState struct {
	// Specifies the id of the backup policy to use.
	BackupPolicyId *string `pulumi:"backupPolicyId"`
	// Specifies the name of the Recovery Services Vault to use. Changing this forces a new resource to be created.
	RecoveryVaultName *string `pulumi:"recoveryVaultName"`
	// The name of the resource group in which to create the Recovery Services Protected VM. Changing this forces a new resource to be created.
	ResourceGroupName *string `pulumi:"resourceGroupName"`
	// Specifies the ID of the VM to backup. Changing this forces a new resource to be created.
	SourceVmId *string `pulumi:"sourceVmId"`
	// A mapping of tags to assign to the resource.
	Tags map[string]string `pulumi:"tags"`
}

type ProtectedVMState struct {
	// Specifies the id of the backup policy to use.
	BackupPolicyId pulumi.StringPtrInput
	// Specifies the name of the Recovery Services Vault to use. Changing this forces a new resource to be created.
	RecoveryVaultName pulumi.StringPtrInput
	// The name of the resource group in which to create the Recovery Services Protected VM. Changing this forces a new resource to be created.
	ResourceGroupName pulumi.StringPtrInput
	// Specifies the ID of the VM to backup. Changing this forces a new resource to be created.
	SourceVmId pulumi.StringPtrInput
	// A mapping of tags to assign to the resource.
	Tags pulumi.StringMapInput
}

func (ProtectedVMState) ElementType() reflect.Type {
	return reflect.TypeOf((*protectedVMState)(nil)).Elem()
}

type protectedVMArgs struct {
	// Specifies the id of the backup policy to use.
	BackupPolicyId string `pulumi:"backupPolicyId"`
	// Specifies the name of the Recovery Services Vault to use. Changing this forces a new resource to be created.
	RecoveryVaultName string `pulumi:"recoveryVaultName"`
	// The name of the resource group in which to create the Recovery Services Protected VM. Changing this forces a new resource to be created.
	ResourceGroupName string `pulumi:"resourceGroupName"`
	// Specifies the ID of the VM to backup. Changing this forces a new resource to be created.
	SourceVmId string `pulumi:"sourceVmId"`
	// A mapping of tags to assign to the resource.
	Tags map[string]string `pulumi:"tags"`
}

// The set of arguments for constructing a ProtectedVM resource.
type ProtectedVMArgs struct {
	// Specifies the id of the backup policy to use.
	BackupPolicyId pulumi.StringInput
	// Specifies the name of the Recovery Services Vault to use. Changing this forces a new resource to be created.
	RecoveryVaultName pulumi.StringInput
	// The name of the resource group in which to create the Recovery Services Protected VM. Changing this forces a new resource to be created.
	ResourceGroupName pulumi.StringInput
	// Specifies the ID of the VM to backup. Changing this forces a new resource to be created.
	SourceVmId pulumi.StringInput
	// A mapping of tags to assign to the resource.
	Tags pulumi.StringMapInput
}

func (ProtectedVMArgs) ElementType() reflect.Type {
	return reflect.TypeOf((*protectedVMArgs)(nil)).Elem()
}
