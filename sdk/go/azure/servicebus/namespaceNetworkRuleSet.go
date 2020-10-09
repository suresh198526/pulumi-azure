// *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

package servicebus

import (
	"reflect"

	"github.com/pkg/errors"
	"github.com/pulumi/pulumi/sdk/v2/go/pulumi"
)

// Manages a ServiceBus Namespace Network Rule Set Set.
//
// ## Example Usage
//
// ```go
// package main
//
// import (
// 	"github.com/pulumi/pulumi-azure/sdk/v3/go/azure/core"
// 	"github.com/pulumi/pulumi-azure/sdk/v3/go/azure/network"
// 	"github.com/pulumi/pulumi-azure/sdk/v3/go/azure/servicebus"
// 	"github.com/pulumi/pulumi/sdk/v2/go/pulumi"
// )
//
// func main() {
// 	pulumi.Run(func(ctx *pulumi.Context) error {
// 		exampleResourceGroup, err := core.NewResourceGroup(ctx, "exampleResourceGroup", &core.ResourceGroupArgs{
// 			Location: pulumi.String("West Europe"),
// 		})
// 		if err != nil {
// 			return err
// 		}
// 		exampleNamespace, err := servicebus.NewNamespace(ctx, "exampleNamespace", &servicebus.NamespaceArgs{
// 			Location:          exampleResourceGroup.Location,
// 			ResourceGroupName: exampleResourceGroup.Name,
// 			Sku:               pulumi.String("Premium"),
// 			Capacity:          pulumi.Int(1),
// 		})
// 		if err != nil {
// 			return err
// 		}
// 		exampleVirtualNetwork, err := network.NewVirtualNetwork(ctx, "exampleVirtualNetwork", &network.VirtualNetworkArgs{
// 			Location:          exampleResourceGroup.Location,
// 			ResourceGroupName: exampleResourceGroup.Name,
// 			AddressSpaces: pulumi.StringArray{
// 				pulumi.String("172.17.0.0/16"),
// 			},
// 			DnsServers: pulumi.StringArray{
// 				pulumi.String("10.0.0.4"),
// 				pulumi.String("10.0.0.5"),
// 			},
// 		})
// 		if err != nil {
// 			return err
// 		}
// 		exampleSubnet, err := network.NewSubnet(ctx, "exampleSubnet", &network.SubnetArgs{
// 			ResourceGroupName:  exampleResourceGroup.Name,
// 			VirtualNetworkName: exampleVirtualNetwork.Name,
// 			AddressPrefixes: pulumi.StringArray{
// 				pulumi.String("172.17.0.0/24"),
// 			},
// 			ServiceEndpoints: pulumi.StringArray{
// 				pulumi.String("Microsoft.ServiceBus"),
// 			},
// 		})
// 		if err != nil {
// 			return err
// 		}
// 		_, err = servicebus.NewNamespaceNetworkRuleSet(ctx, "exampleNamespaceNetworkRuleSet", &servicebus.NamespaceNetworkRuleSetArgs{
// 			NamespaceName:     exampleNamespace.Name,
// 			ResourceGroupName: exampleResourceGroup.Name,
// 			DefaultAction:     pulumi.String("Deny"),
// 			NetworkRules: servicebus.NamespaceNetworkRuleSetNetworkRuleArray{
// 				&servicebus.NamespaceNetworkRuleSetNetworkRuleArgs{
// 					SubnetId:                         exampleSubnet.ID(),
// 					IgnoreMissingVnetServiceEndpoint: pulumi.Bool(false),
// 				},
// 			},
// 			IpRules: pulumi.StringArray{
// 				pulumi.String("1.1.1.1"),
// 			},
// 		})
// 		if err != nil {
// 			return err
// 		}
// 		return nil
// 	})
// }
// ```
type NamespaceNetworkRuleSet struct {
	pulumi.CustomResourceState

	// Specifies the default action for the ServiceBus Namespace Network Rule Set. Possible values are `Allow` and `Deny`. Defaults to `Deny`.
	DefaultAction pulumi.StringPtrOutput `pulumi:"defaultAction"`
	// One or more IP Addresses, or CIDR Blocks which should be able to access the ServiceBus Namespace.
	IpRules pulumi.StringArrayOutput `pulumi:"ipRules"`
	// Specifies the ServiceBus Namespace name to which to attach the ServiceBus Namespace Network Rule Set. Changing this forces a new resource to be created.
	NamespaceName pulumi.StringOutput `pulumi:"namespaceName"`
	// One or more `networkRules` blocks as defined below.
	NetworkRules NamespaceNetworkRuleSetNetworkRuleArrayOutput `pulumi:"networkRules"`
	// Specifies the name of the Resource Group where the ServiceBus Namespace Network Rule Set should exist. Changing this forces a new resource to be created.
	ResourceGroupName pulumi.StringOutput `pulumi:"resourceGroupName"`
}

// NewNamespaceNetworkRuleSet registers a new resource with the given unique name, arguments, and options.
func NewNamespaceNetworkRuleSet(ctx *pulumi.Context,
	name string, args *NamespaceNetworkRuleSetArgs, opts ...pulumi.ResourceOption) (*NamespaceNetworkRuleSet, error) {
	if args == nil || args.NamespaceName == nil {
		return nil, errors.New("missing required argument 'NamespaceName'")
	}
	if args == nil || args.ResourceGroupName == nil {
		return nil, errors.New("missing required argument 'ResourceGroupName'")
	}
	if args == nil {
		args = &NamespaceNetworkRuleSetArgs{}
	}
	var resource NamespaceNetworkRuleSet
	err := ctx.RegisterResource("azure:servicebus/namespaceNetworkRuleSet:NamespaceNetworkRuleSet", name, args, &resource, opts...)
	if err != nil {
		return nil, err
	}
	return &resource, nil
}

// GetNamespaceNetworkRuleSet gets an existing NamespaceNetworkRuleSet resource's state with the given name, ID, and optional
// state properties that are used to uniquely qualify the lookup (nil if not required).
func GetNamespaceNetworkRuleSet(ctx *pulumi.Context,
	name string, id pulumi.IDInput, state *NamespaceNetworkRuleSetState, opts ...pulumi.ResourceOption) (*NamespaceNetworkRuleSet, error) {
	var resource NamespaceNetworkRuleSet
	err := ctx.ReadResource("azure:servicebus/namespaceNetworkRuleSet:NamespaceNetworkRuleSet", name, id, state, &resource, opts...)
	if err != nil {
		return nil, err
	}
	return &resource, nil
}

// Input properties used for looking up and filtering NamespaceNetworkRuleSet resources.
type namespaceNetworkRuleSetState struct {
	// Specifies the default action for the ServiceBus Namespace Network Rule Set. Possible values are `Allow` and `Deny`. Defaults to `Deny`.
	DefaultAction *string `pulumi:"defaultAction"`
	// One or more IP Addresses, or CIDR Blocks which should be able to access the ServiceBus Namespace.
	IpRules []string `pulumi:"ipRules"`
	// Specifies the ServiceBus Namespace name to which to attach the ServiceBus Namespace Network Rule Set. Changing this forces a new resource to be created.
	NamespaceName *string `pulumi:"namespaceName"`
	// One or more `networkRules` blocks as defined below.
	NetworkRules []NamespaceNetworkRuleSetNetworkRule `pulumi:"networkRules"`
	// Specifies the name of the Resource Group where the ServiceBus Namespace Network Rule Set should exist. Changing this forces a new resource to be created.
	ResourceGroupName *string `pulumi:"resourceGroupName"`
}

type NamespaceNetworkRuleSetState struct {
	// Specifies the default action for the ServiceBus Namespace Network Rule Set. Possible values are `Allow` and `Deny`. Defaults to `Deny`.
	DefaultAction pulumi.StringPtrInput
	// One or more IP Addresses, or CIDR Blocks which should be able to access the ServiceBus Namespace.
	IpRules pulumi.StringArrayInput
	// Specifies the ServiceBus Namespace name to which to attach the ServiceBus Namespace Network Rule Set. Changing this forces a new resource to be created.
	NamespaceName pulumi.StringPtrInput
	// One or more `networkRules` blocks as defined below.
	NetworkRules NamespaceNetworkRuleSetNetworkRuleArrayInput
	// Specifies the name of the Resource Group where the ServiceBus Namespace Network Rule Set should exist. Changing this forces a new resource to be created.
	ResourceGroupName pulumi.StringPtrInput
}

func (NamespaceNetworkRuleSetState) ElementType() reflect.Type {
	return reflect.TypeOf((*namespaceNetworkRuleSetState)(nil)).Elem()
}

type namespaceNetworkRuleSetArgs struct {
	// Specifies the default action for the ServiceBus Namespace Network Rule Set. Possible values are `Allow` and `Deny`. Defaults to `Deny`.
	DefaultAction *string `pulumi:"defaultAction"`
	// One or more IP Addresses, or CIDR Blocks which should be able to access the ServiceBus Namespace.
	IpRules []string `pulumi:"ipRules"`
	// Specifies the ServiceBus Namespace name to which to attach the ServiceBus Namespace Network Rule Set. Changing this forces a new resource to be created.
	NamespaceName string `pulumi:"namespaceName"`
	// One or more `networkRules` blocks as defined below.
	NetworkRules []NamespaceNetworkRuleSetNetworkRule `pulumi:"networkRules"`
	// Specifies the name of the Resource Group where the ServiceBus Namespace Network Rule Set should exist. Changing this forces a new resource to be created.
	ResourceGroupName string `pulumi:"resourceGroupName"`
}

// The set of arguments for constructing a NamespaceNetworkRuleSet resource.
type NamespaceNetworkRuleSetArgs struct {
	// Specifies the default action for the ServiceBus Namespace Network Rule Set. Possible values are `Allow` and `Deny`. Defaults to `Deny`.
	DefaultAction pulumi.StringPtrInput
	// One or more IP Addresses, or CIDR Blocks which should be able to access the ServiceBus Namespace.
	IpRules pulumi.StringArrayInput
	// Specifies the ServiceBus Namespace name to which to attach the ServiceBus Namespace Network Rule Set. Changing this forces a new resource to be created.
	NamespaceName pulumi.StringInput
	// One or more `networkRules` blocks as defined below.
	NetworkRules NamespaceNetworkRuleSetNetworkRuleArrayInput
	// Specifies the name of the Resource Group where the ServiceBus Namespace Network Rule Set should exist. Changing this forces a new resource to be created.
	ResourceGroupName pulumi.StringInput
}

func (NamespaceNetworkRuleSetArgs) ElementType() reflect.Type {
	return reflect.TypeOf((*namespaceNetworkRuleSetArgs)(nil)).Elem()
}
