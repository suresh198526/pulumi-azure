// *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

package core

import (
	"reflect"

	"github.com/pulumi/pulumi/sdk/v2/go/pulumi"
)

// Manages a Resource Group.
//
// ## Example Usage
//
// ```go
// package main
//
// import (
// 	"github.com/pulumi/pulumi-azure/sdk/v3/go/azure/core"
// 	"github.com/pulumi/pulumi/sdk/v2/go/pulumi"
// )
//
// func main() {
// 	pulumi.Run(func(ctx *pulumi.Context) error {
// 		_, err := core.NewResourceGroup(ctx, "example", &core.ResourceGroupArgs{
// 			Location: pulumi.String("West Europe"),
// 		})
// 		if err != nil {
// 			return err
// 		}
// 		return nil
// 	})
// }
// ```
type ResourceGroup struct {
	pulumi.CustomResourceState

	// The Azure Region where the Resource Group should exist. Changing this forces a new Resource Group to be created.
	Location pulumi.StringOutput `pulumi:"location"`
	// The Name which should be used for this Resource Group. Changing this forces a new Resource Group to be created.
	Name pulumi.StringOutput `pulumi:"name"`
	// A mapping of tags which should be assigned to the Resource Group.
	Tags pulumi.StringMapOutput `pulumi:"tags"`
}

// NewResourceGroup registers a new resource with the given unique name, arguments, and options.
func NewResourceGroup(ctx *pulumi.Context,
	name string, args *ResourceGroupArgs, opts ...pulumi.ResourceOption) (*ResourceGroup, error) {
	if args == nil {
		args = &ResourceGroupArgs{}
	}
	var resource ResourceGroup
	err := ctx.RegisterResource("azure:core/resourceGroup:ResourceGroup", name, args, &resource, opts...)
	if err != nil {
		return nil, err
	}
	return &resource, nil
}

// GetResourceGroup gets an existing ResourceGroup resource's state with the given name, ID, and optional
// state properties that are used to uniquely qualify the lookup (nil if not required).
func GetResourceGroup(ctx *pulumi.Context,
	name string, id pulumi.IDInput, state *ResourceGroupState, opts ...pulumi.ResourceOption) (*ResourceGroup, error) {
	var resource ResourceGroup
	err := ctx.ReadResource("azure:core/resourceGroup:ResourceGroup", name, id, state, &resource, opts...)
	if err != nil {
		return nil, err
	}
	return &resource, nil
}

// Input properties used for looking up and filtering ResourceGroup resources.
type resourceGroupState struct {
	// The Azure Region where the Resource Group should exist. Changing this forces a new Resource Group to be created.
	Location *string `pulumi:"location"`
	// The Name which should be used for this Resource Group. Changing this forces a new Resource Group to be created.
	Name *string `pulumi:"name"`
	// A mapping of tags which should be assigned to the Resource Group.
	Tags map[string]string `pulumi:"tags"`
}

type ResourceGroupState struct {
	// The Azure Region where the Resource Group should exist. Changing this forces a new Resource Group to be created.
	Location pulumi.StringPtrInput
	// The Name which should be used for this Resource Group. Changing this forces a new Resource Group to be created.
	Name pulumi.StringPtrInput
	// A mapping of tags which should be assigned to the Resource Group.
	Tags pulumi.StringMapInput
}

func (ResourceGroupState) ElementType() reflect.Type {
	return reflect.TypeOf((*resourceGroupState)(nil)).Elem()
}

type resourceGroupArgs struct {
	// The Azure Region where the Resource Group should exist. Changing this forces a new Resource Group to be created.
	Location *string `pulumi:"location"`
	// The Name which should be used for this Resource Group. Changing this forces a new Resource Group to be created.
	Name *string `pulumi:"name"`
	// A mapping of tags which should be assigned to the Resource Group.
	Tags map[string]string `pulumi:"tags"`
}

// The set of arguments for constructing a ResourceGroup resource.
type ResourceGroupArgs struct {
	// The Azure Region where the Resource Group should exist. Changing this forces a new Resource Group to be created.
	Location pulumi.StringPtrInput
	// The Name which should be used for this Resource Group. Changing this forces a new Resource Group to be created.
	Name pulumi.StringPtrInput
	// A mapping of tags which should be assigned to the Resource Group.
	Tags pulumi.StringMapInput
}

func (ResourceGroupArgs) ElementType() reflect.Type {
	return reflect.TypeOf((*resourceGroupArgs)(nil)).Elem()
}
