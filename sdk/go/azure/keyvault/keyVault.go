// *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

package keyvault

import (
	"reflect"

	"github.com/pkg/errors"
	"github.com/pulumi/pulumi/sdk/v2/go/pulumi"
)

// Manages a Key Vault.
//
// ## Disclaimers
//
// > **Note:** It's possible to define Key Vault Access Policies both within the `keyvault.KeyVault` resource via the `accessPolicy` block and by using the `keyvault.AccessPolicy` resource. However it's not possible to use both methods to manage Access Policies within a KeyVault, since there'll be conflicts.
//
// > **Note:** This provi will automatically recover a soft-deleted Key Vault during Creation if one is found - you can opt out of this using the `features` configuration within the Provider configuration block.
//
// ## Example Usage
//
// ```go
// package main
//
// import (
// 	"github.com/pulumi/pulumi-azure/sdk/v3/go/azure/core"
// 	"github.com/pulumi/pulumi-azure/sdk/v3/go/azure/keyvault"
// 	"github.com/pulumi/pulumi/sdk/v2/go/pulumi"
// )
//
// func main() {
// 	pulumi.Run(func(ctx *pulumi.Context) error {
// 		current, err := core.GetClientConfig(ctx, nil, nil)
// 		if err != nil {
// 			return err
// 		}
// 		exampleResourceGroup, err := core.NewResourceGroup(ctx, "exampleResourceGroup", &core.ResourceGroupArgs{
// 			Location: pulumi.String("West US"),
// 		})
// 		if err != nil {
// 			return err
// 		}
// 		_, err = keyvault.NewKeyVault(ctx, "exampleKeyVault", &keyvault.KeyVaultArgs{
// 			Location:                 exampleResourceGroup.Location,
// 			ResourceGroupName:        exampleResourceGroup.Name,
// 			EnabledForDiskEncryption: pulumi.Bool(true),
// 			TenantId:                 pulumi.String(current.TenantId),
// 			SoftDeleteEnabled:        pulumi.Bool(true),
// 			SoftDeleteRetentionDays:  pulumi.Int(7),
// 			PurgeProtectionEnabled:   pulumi.Bool(false),
// 			SkuName:                  pulumi.String("standard"),
// 			AccessPolicies: keyvault.KeyVaultAccessPolicyArray{
// 				&keyvault.KeyVaultAccessPolicyArgs{
// 					TenantId: pulumi.String(current.TenantId),
// 					ObjectId: pulumi.String(current.ObjectId),
// 					KeyPermissions: pulumi.StringArray{
// 						pulumi.String("get"),
// 					},
// 					SecretPermissions: pulumi.StringArray{
// 						pulumi.String("get"),
// 					},
// 					StoragePermissions: pulumi.StringArray{
// 						pulumi.String("get"),
// 					},
// 				},
// 			},
// 			NetworkAcls: &keyvault.KeyVaultNetworkAclsArgs{
// 				DefaultAction: pulumi.String("Deny"),
// 				Bypass:        pulumi.String("AzureServices"),
// 			},
// 			Tags: pulumi.StringMap{
// 				"environment": pulumi.String("Testing"),
// 			},
// 		})
// 		if err != nil {
// 			return err
// 		}
// 		return nil
// 	})
// }
// ```
type KeyVault struct {
	pulumi.CustomResourceState

	// A list of up to 16 objects describing access policies, as described below.
	AccessPolicies KeyVaultAccessPolicyArrayOutput `pulumi:"accessPolicies"`
	// Boolean flag to specify whether Azure Key Vault uses Role Based Access Control (RBAC) for authorization of data actions. Defaults to `false`.
	EnableRbacAuthorization pulumi.BoolPtrOutput `pulumi:"enableRbacAuthorization"`
	// Boolean flag to specify whether Azure Virtual Machines are permitted to retrieve certificates stored as secrets from the key vault. Defaults to `false`.
	EnabledForDeployment pulumi.BoolPtrOutput `pulumi:"enabledForDeployment"`
	// Boolean flag to specify whether Azure Disk Encryption is permitted to retrieve secrets from the vault and unwrap keys. Defaults to `false`.
	EnabledForDiskEncryption pulumi.BoolPtrOutput `pulumi:"enabledForDiskEncryption"`
	// Boolean flag to specify whether Azure Resource Manager is permitted to retrieve secrets from the key vault. Defaults to `false`.
	EnabledForTemplateDeployment pulumi.BoolPtrOutput `pulumi:"enabledForTemplateDeployment"`
	// Specifies the supported Azure location where the resource exists. Changing this forces a new resource to be created.
	Location pulumi.StringOutput `pulumi:"location"`
	// Specifies the name of the Key Vault. Changing this forces a new resource to be created.
	Name pulumi.StringOutput `pulumi:"name"`
	// A `networkAcls` block as defined below.
	NetworkAcls KeyVaultNetworkAclsOutput `pulumi:"networkAcls"`
	// Is Purge Protection enabled for this Key Vault? Defaults to `false`.
	PurgeProtectionEnabled pulumi.BoolPtrOutput `pulumi:"purgeProtectionEnabled"`
	// The name of the resource group in which to create the Key Vault. Changing this forces a new resource to be created.
	ResourceGroupName pulumi.StringOutput `pulumi:"resourceGroupName"`
	// The Name of the SKU used for this Key Vault. Possible values are `standard` and `premium`.
	SkuName pulumi.StringOutput `pulumi:"skuName"`
	// Should Soft Delete be enabled for this Key Vault? Defaults to `false`.
	SoftDeleteEnabled pulumi.BoolPtrOutput `pulumi:"softDeleteEnabled"`
	// The number of days that items should be retained for once soft-deleted.
	SoftDeleteRetentionDays pulumi.IntPtrOutput `pulumi:"softDeleteRetentionDays"`
	// A mapping of tags to assign to the resource.
	Tags pulumi.StringMapOutput `pulumi:"tags"`
	// The Azure Active Directory tenant ID that should be used for authenticating requests to the key vault.
	TenantId pulumi.StringOutput `pulumi:"tenantId"`
	// The URI of the Key Vault, used for performing operations on keys and secrets.
	VaultUri pulumi.StringOutput `pulumi:"vaultUri"`
}

// NewKeyVault registers a new resource with the given unique name, arguments, and options.
func NewKeyVault(ctx *pulumi.Context,
	name string, args *KeyVaultArgs, opts ...pulumi.ResourceOption) (*KeyVault, error) {
	if args == nil || args.ResourceGroupName == nil {
		return nil, errors.New("missing required argument 'ResourceGroupName'")
	}
	if args == nil || args.SkuName == nil {
		return nil, errors.New("missing required argument 'SkuName'")
	}
	if args == nil || args.TenantId == nil {
		return nil, errors.New("missing required argument 'TenantId'")
	}
	if args == nil {
		args = &KeyVaultArgs{}
	}
	var resource KeyVault
	err := ctx.RegisterResource("azure:keyvault/keyVault:KeyVault", name, args, &resource, opts...)
	if err != nil {
		return nil, err
	}
	return &resource, nil
}

// GetKeyVault gets an existing KeyVault resource's state with the given name, ID, and optional
// state properties that are used to uniquely qualify the lookup (nil if not required).
func GetKeyVault(ctx *pulumi.Context,
	name string, id pulumi.IDInput, state *KeyVaultState, opts ...pulumi.ResourceOption) (*KeyVault, error) {
	var resource KeyVault
	err := ctx.ReadResource("azure:keyvault/keyVault:KeyVault", name, id, state, &resource, opts...)
	if err != nil {
		return nil, err
	}
	return &resource, nil
}

// Input properties used for looking up and filtering KeyVault resources.
type keyVaultState struct {
	// A list of up to 16 objects describing access policies, as described below.
	AccessPolicies []KeyVaultAccessPolicy `pulumi:"accessPolicies"`
	// Boolean flag to specify whether Azure Key Vault uses Role Based Access Control (RBAC) for authorization of data actions. Defaults to `false`.
	EnableRbacAuthorization *bool `pulumi:"enableRbacAuthorization"`
	// Boolean flag to specify whether Azure Virtual Machines are permitted to retrieve certificates stored as secrets from the key vault. Defaults to `false`.
	EnabledForDeployment *bool `pulumi:"enabledForDeployment"`
	// Boolean flag to specify whether Azure Disk Encryption is permitted to retrieve secrets from the vault and unwrap keys. Defaults to `false`.
	EnabledForDiskEncryption *bool `pulumi:"enabledForDiskEncryption"`
	// Boolean flag to specify whether Azure Resource Manager is permitted to retrieve secrets from the key vault. Defaults to `false`.
	EnabledForTemplateDeployment *bool `pulumi:"enabledForTemplateDeployment"`
	// Specifies the supported Azure location where the resource exists. Changing this forces a new resource to be created.
	Location *string `pulumi:"location"`
	// Specifies the name of the Key Vault. Changing this forces a new resource to be created.
	Name *string `pulumi:"name"`
	// A `networkAcls` block as defined below.
	NetworkAcls *KeyVaultNetworkAcls `pulumi:"networkAcls"`
	// Is Purge Protection enabled for this Key Vault? Defaults to `false`.
	PurgeProtectionEnabled *bool `pulumi:"purgeProtectionEnabled"`
	// The name of the resource group in which to create the Key Vault. Changing this forces a new resource to be created.
	ResourceGroupName *string `pulumi:"resourceGroupName"`
	// The Name of the SKU used for this Key Vault. Possible values are `standard` and `premium`.
	SkuName *string `pulumi:"skuName"`
	// Should Soft Delete be enabled for this Key Vault? Defaults to `false`.
	SoftDeleteEnabled *bool `pulumi:"softDeleteEnabled"`
	// The number of days that items should be retained for once soft-deleted.
	SoftDeleteRetentionDays *int `pulumi:"softDeleteRetentionDays"`
	// A mapping of tags to assign to the resource.
	Tags map[string]string `pulumi:"tags"`
	// The Azure Active Directory tenant ID that should be used for authenticating requests to the key vault.
	TenantId *string `pulumi:"tenantId"`
	// The URI of the Key Vault, used for performing operations on keys and secrets.
	VaultUri *string `pulumi:"vaultUri"`
}

type KeyVaultState struct {
	// A list of up to 16 objects describing access policies, as described below.
	AccessPolicies KeyVaultAccessPolicyArrayInput
	// Boolean flag to specify whether Azure Key Vault uses Role Based Access Control (RBAC) for authorization of data actions. Defaults to `false`.
	EnableRbacAuthorization pulumi.BoolPtrInput
	// Boolean flag to specify whether Azure Virtual Machines are permitted to retrieve certificates stored as secrets from the key vault. Defaults to `false`.
	EnabledForDeployment pulumi.BoolPtrInput
	// Boolean flag to specify whether Azure Disk Encryption is permitted to retrieve secrets from the vault and unwrap keys. Defaults to `false`.
	EnabledForDiskEncryption pulumi.BoolPtrInput
	// Boolean flag to specify whether Azure Resource Manager is permitted to retrieve secrets from the key vault. Defaults to `false`.
	EnabledForTemplateDeployment pulumi.BoolPtrInput
	// Specifies the supported Azure location where the resource exists. Changing this forces a new resource to be created.
	Location pulumi.StringPtrInput
	// Specifies the name of the Key Vault. Changing this forces a new resource to be created.
	Name pulumi.StringPtrInput
	// A `networkAcls` block as defined below.
	NetworkAcls KeyVaultNetworkAclsPtrInput
	// Is Purge Protection enabled for this Key Vault? Defaults to `false`.
	PurgeProtectionEnabled pulumi.BoolPtrInput
	// The name of the resource group in which to create the Key Vault. Changing this forces a new resource to be created.
	ResourceGroupName pulumi.StringPtrInput
	// The Name of the SKU used for this Key Vault. Possible values are `standard` and `premium`.
	SkuName pulumi.StringPtrInput
	// Should Soft Delete be enabled for this Key Vault? Defaults to `false`.
	SoftDeleteEnabled pulumi.BoolPtrInput
	// The number of days that items should be retained for once soft-deleted.
	SoftDeleteRetentionDays pulumi.IntPtrInput
	// A mapping of tags to assign to the resource.
	Tags pulumi.StringMapInput
	// The Azure Active Directory tenant ID that should be used for authenticating requests to the key vault.
	TenantId pulumi.StringPtrInput
	// The URI of the Key Vault, used for performing operations on keys and secrets.
	VaultUri pulumi.StringPtrInput
}

func (KeyVaultState) ElementType() reflect.Type {
	return reflect.TypeOf((*keyVaultState)(nil)).Elem()
}

type keyVaultArgs struct {
	// A list of up to 16 objects describing access policies, as described below.
	AccessPolicies []KeyVaultAccessPolicy `pulumi:"accessPolicies"`
	// Boolean flag to specify whether Azure Key Vault uses Role Based Access Control (RBAC) for authorization of data actions. Defaults to `false`.
	EnableRbacAuthorization *bool `pulumi:"enableRbacAuthorization"`
	// Boolean flag to specify whether Azure Virtual Machines are permitted to retrieve certificates stored as secrets from the key vault. Defaults to `false`.
	EnabledForDeployment *bool `pulumi:"enabledForDeployment"`
	// Boolean flag to specify whether Azure Disk Encryption is permitted to retrieve secrets from the vault and unwrap keys. Defaults to `false`.
	EnabledForDiskEncryption *bool `pulumi:"enabledForDiskEncryption"`
	// Boolean flag to specify whether Azure Resource Manager is permitted to retrieve secrets from the key vault. Defaults to `false`.
	EnabledForTemplateDeployment *bool `pulumi:"enabledForTemplateDeployment"`
	// Specifies the supported Azure location where the resource exists. Changing this forces a new resource to be created.
	Location *string `pulumi:"location"`
	// Specifies the name of the Key Vault. Changing this forces a new resource to be created.
	Name *string `pulumi:"name"`
	// A `networkAcls` block as defined below.
	NetworkAcls *KeyVaultNetworkAcls `pulumi:"networkAcls"`
	// Is Purge Protection enabled for this Key Vault? Defaults to `false`.
	PurgeProtectionEnabled *bool `pulumi:"purgeProtectionEnabled"`
	// The name of the resource group in which to create the Key Vault. Changing this forces a new resource to be created.
	ResourceGroupName string `pulumi:"resourceGroupName"`
	// The Name of the SKU used for this Key Vault. Possible values are `standard` and `premium`.
	SkuName string `pulumi:"skuName"`
	// Should Soft Delete be enabled for this Key Vault? Defaults to `false`.
	SoftDeleteEnabled *bool `pulumi:"softDeleteEnabled"`
	// The number of days that items should be retained for once soft-deleted.
	SoftDeleteRetentionDays *int `pulumi:"softDeleteRetentionDays"`
	// A mapping of tags to assign to the resource.
	Tags map[string]string `pulumi:"tags"`
	// The Azure Active Directory tenant ID that should be used for authenticating requests to the key vault.
	TenantId string `pulumi:"tenantId"`
}

// The set of arguments for constructing a KeyVault resource.
type KeyVaultArgs struct {
	// A list of up to 16 objects describing access policies, as described below.
	AccessPolicies KeyVaultAccessPolicyArrayInput
	// Boolean flag to specify whether Azure Key Vault uses Role Based Access Control (RBAC) for authorization of data actions. Defaults to `false`.
	EnableRbacAuthorization pulumi.BoolPtrInput
	// Boolean flag to specify whether Azure Virtual Machines are permitted to retrieve certificates stored as secrets from the key vault. Defaults to `false`.
	EnabledForDeployment pulumi.BoolPtrInput
	// Boolean flag to specify whether Azure Disk Encryption is permitted to retrieve secrets from the vault and unwrap keys. Defaults to `false`.
	EnabledForDiskEncryption pulumi.BoolPtrInput
	// Boolean flag to specify whether Azure Resource Manager is permitted to retrieve secrets from the key vault. Defaults to `false`.
	EnabledForTemplateDeployment pulumi.BoolPtrInput
	// Specifies the supported Azure location where the resource exists. Changing this forces a new resource to be created.
	Location pulumi.StringPtrInput
	// Specifies the name of the Key Vault. Changing this forces a new resource to be created.
	Name pulumi.StringPtrInput
	// A `networkAcls` block as defined below.
	NetworkAcls KeyVaultNetworkAclsPtrInput
	// Is Purge Protection enabled for this Key Vault? Defaults to `false`.
	PurgeProtectionEnabled pulumi.BoolPtrInput
	// The name of the resource group in which to create the Key Vault. Changing this forces a new resource to be created.
	ResourceGroupName pulumi.StringInput
	// The Name of the SKU used for this Key Vault. Possible values are `standard` and `premium`.
	SkuName pulumi.StringInput
	// Should Soft Delete be enabled for this Key Vault? Defaults to `false`.
	SoftDeleteEnabled pulumi.BoolPtrInput
	// The number of days that items should be retained for once soft-deleted.
	SoftDeleteRetentionDays pulumi.IntPtrInput
	// A mapping of tags to assign to the resource.
	Tags pulumi.StringMapInput
	// The Azure Active Directory tenant ID that should be used for authenticating requests to the key vault.
	TenantId pulumi.StringInput
}

func (KeyVaultArgs) ElementType() reflect.Type {
	return reflect.TypeOf((*keyVaultArgs)(nil)).Elem()
}
