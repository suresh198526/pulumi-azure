// *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

package network

import (
	"context"
	"reflect"

	"github.com/pkg/errors"
	"github.com/pulumi/pulumi/sdk/v2/go/pulumi"
)

// Manages an IP group that contains a list of CIDRs and/or IP addresses.
//
// ## Example Usage
//
// ```go
// package main
//
// import (
// 	"github.com/pulumi/pulumi-azure/sdk/v3/go/azure/core"
// 	"github.com/pulumi/pulumi-azure/sdk/v3/go/azure/network"
// 	"github.com/pulumi/pulumi/sdk/v2/go/pulumi"
// )
//
// func main() {
// 	pulumi.Run(func(ctx *pulumi.Context) error {
// 		exampleResourceGroup, err := core.NewResourceGroup(ctx, "exampleResourceGroup", &core.ResourceGroupArgs{
// 			Location: pulumi.String("westus"),
// 		})
// 		if err != nil {
// 			return err
// 		}
// 		_, err = network.NewIPGroup(ctx, "exampleIPGroup", &network.IPGroupArgs{
// 			Location:          exampleResourceGroup.Location,
// 			ResourceGroupName: exampleResourceGroup.Name,
// 			Cidrs: pulumi.StringArray{
// 				pulumi.String("192.168.0.1"),
// 				pulumi.String("172.16.240.0/20"),
// 				pulumi.String("10.48.0.0/12"),
// 			},
// 			Tags: pulumi.StringMap{
// 				"environment": pulumi.String("Production"),
// 			},
// 		})
// 		if err != nil {
// 			return err
// 		}
// 		return nil
// 	})
// }
// ```
//
// ## Import
//
// IP Groups can be imported using the `resource id`, e.g.
//
// ```sh
//  $ pulumi import azure:network/iPGroup:IPGroup ipgroup1 /subscriptions/00000000-0000-0000-0000-000000000000/resourceGroups/mygroup1/providers/Microsoft.Network/ipGroups/myIpGroup
// ```
type IPGroup struct {
	pulumi.CustomResourceState

	// A list of CIDRs or IP addresses.
	Cidrs pulumi.StringArrayOutput `pulumi:"cidrs"`
	// Specifies the supported Azure location where the resource exists. Changing this forces a new resource to be created.
	Location pulumi.StringOutput `pulumi:"location"`
	// Specifies the name of the IP group. Changing this forces a new resource to be created.
	Name pulumi.StringOutput `pulumi:"name"`
	// The name of the resource group in which to create the IP group. Changing this forces a new resource to be created.
	ResourceGroupName pulumi.StringOutput `pulumi:"resourceGroupName"`
	// A mapping of tags to assign to the resource.
	Tags pulumi.StringMapOutput `pulumi:"tags"`
}

// NewIPGroup registers a new resource with the given unique name, arguments, and options.
func NewIPGroup(ctx *pulumi.Context,
	name string, args *IPGroupArgs, opts ...pulumi.ResourceOption) (*IPGroup, error) {
	if args == nil || args.ResourceGroupName == nil {
		return nil, errors.New("missing required argument 'ResourceGroupName'")
	}
	if args == nil {
		args = &IPGroupArgs{}
	}
	var resource IPGroup
	err := ctx.RegisterResource("azure:network/iPGroup:IPGroup", name, args, &resource, opts...)
	if err != nil {
		return nil, err
	}
	return &resource, nil
}

// GetIPGroup gets an existing IPGroup resource's state with the given name, ID, and optional
// state properties that are used to uniquely qualify the lookup (nil if not required).
func GetIPGroup(ctx *pulumi.Context,
	name string, id pulumi.IDInput, state *IPGroupState, opts ...pulumi.ResourceOption) (*IPGroup, error) {
	var resource IPGroup
	err := ctx.ReadResource("azure:network/iPGroup:IPGroup", name, id, state, &resource, opts...)
	if err != nil {
		return nil, err
	}
	return &resource, nil
}

// Input properties used for looking up and filtering IPGroup resources.
type ipgroupState struct {
	// A list of CIDRs or IP addresses.
	Cidrs []string `pulumi:"cidrs"`
	// Specifies the supported Azure location where the resource exists. Changing this forces a new resource to be created.
	Location *string `pulumi:"location"`
	// Specifies the name of the IP group. Changing this forces a new resource to be created.
	Name *string `pulumi:"name"`
	// The name of the resource group in which to create the IP group. Changing this forces a new resource to be created.
	ResourceGroupName *string `pulumi:"resourceGroupName"`
	// A mapping of tags to assign to the resource.
	Tags map[string]string `pulumi:"tags"`
}

type IPGroupState struct {
	// A list of CIDRs or IP addresses.
	Cidrs pulumi.StringArrayInput
	// Specifies the supported Azure location where the resource exists. Changing this forces a new resource to be created.
	Location pulumi.StringPtrInput
	// Specifies the name of the IP group. Changing this forces a new resource to be created.
	Name pulumi.StringPtrInput
	// The name of the resource group in which to create the IP group. Changing this forces a new resource to be created.
	ResourceGroupName pulumi.StringPtrInput
	// A mapping of tags to assign to the resource.
	Tags pulumi.StringMapInput
}

func (IPGroupState) ElementType() reflect.Type {
	return reflect.TypeOf((*ipgroupState)(nil)).Elem()
}

type ipgroupArgs struct {
	// A list of CIDRs or IP addresses.
	Cidrs []string `pulumi:"cidrs"`
	// Specifies the supported Azure location where the resource exists. Changing this forces a new resource to be created.
	Location *string `pulumi:"location"`
	// Specifies the name of the IP group. Changing this forces a new resource to be created.
	Name *string `pulumi:"name"`
	// The name of the resource group in which to create the IP group. Changing this forces a new resource to be created.
	ResourceGroupName string `pulumi:"resourceGroupName"`
	// A mapping of tags to assign to the resource.
	Tags map[string]string `pulumi:"tags"`
}

// The set of arguments for constructing a IPGroup resource.
type IPGroupArgs struct {
	// A list of CIDRs or IP addresses.
	Cidrs pulumi.StringArrayInput
	// Specifies the supported Azure location where the resource exists. Changing this forces a new resource to be created.
	Location pulumi.StringPtrInput
	// Specifies the name of the IP group. Changing this forces a new resource to be created.
	Name pulumi.StringPtrInput
	// The name of the resource group in which to create the IP group. Changing this forces a new resource to be created.
	ResourceGroupName pulumi.StringInput
	// A mapping of tags to assign to the resource.
	Tags pulumi.StringMapInput
}

func (IPGroupArgs) ElementType() reflect.Type {
	return reflect.TypeOf((*ipgroupArgs)(nil)).Elem()
}

type IPGroupInput interface {
	pulumi.Input

	ToIPGroupOutput() IPGroupOutput
	ToIPGroupOutputWithContext(ctx context.Context) IPGroupOutput
}

func (IPGroup) ElementType() reflect.Type {
	return reflect.TypeOf((*IPGroup)(nil)).Elem()
}

func (i IPGroup) ToIPGroupOutput() IPGroupOutput {
	return i.ToIPGroupOutputWithContext(context.Background())
}

func (i IPGroup) ToIPGroupOutputWithContext(ctx context.Context) IPGroupOutput {
	return pulumi.ToOutputWithContext(ctx, i).(IPGroupOutput)
}

type IPGroupOutput struct {
	*pulumi.OutputState
}

func (IPGroupOutput) ElementType() reflect.Type {
	return reflect.TypeOf((*IPGroupOutput)(nil)).Elem()
}

func (o IPGroupOutput) ToIPGroupOutput() IPGroupOutput {
	return o
}

func (o IPGroupOutput) ToIPGroupOutputWithContext(ctx context.Context) IPGroupOutput {
	return o
}

func init() {
	pulumi.RegisterOutputType(IPGroupOutput{})
}
