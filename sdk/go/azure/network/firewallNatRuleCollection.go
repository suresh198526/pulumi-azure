// *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

package network

import (
	"reflect"

	"github.com/pkg/errors"
	"github.com/pulumi/pulumi/sdk/v2/go/pulumi"
)

// Manages a NAT Rule Collection within an Azure Firewall.
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
// 			Location: pulumi.String("North Europe"),
// 		})
// 		if err != nil {
// 			return err
// 		}
// 		exampleVirtualNetwork, err := network.NewVirtualNetwork(ctx, "exampleVirtualNetwork", &network.VirtualNetworkArgs{
// 			AddressSpaces: pulumi.StringArray{
// 				pulumi.String("10.0.0.0/16"),
// 			},
// 			Location:          exampleResourceGroup.Location,
// 			ResourceGroupName: exampleResourceGroup.Name,
// 		})
// 		if err != nil {
// 			return err
// 		}
// 		exampleSubnet, err := network.NewSubnet(ctx, "exampleSubnet", &network.SubnetArgs{
// 			ResourceGroupName:  exampleResourceGroup.Name,
// 			VirtualNetworkName: exampleVirtualNetwork.Name,
// 			AddressPrefix:      pulumi.String("10.0.1.0/24"),
// 		})
// 		if err != nil {
// 			return err
// 		}
// 		examplePublicIp, err := network.NewPublicIp(ctx, "examplePublicIp", &network.PublicIpArgs{
// 			Location:          exampleResourceGroup.Location,
// 			ResourceGroupName: exampleResourceGroup.Name,
// 			AllocationMethod:  pulumi.String("Static"),
// 			Sku:               pulumi.String("Standard"),
// 		})
// 		if err != nil {
// 			return err
// 		}
// 		exampleFirewall, err := network.NewFirewall(ctx, "exampleFirewall", &network.FirewallArgs{
// 			Location:          exampleResourceGroup.Location,
// 			ResourceGroupName: exampleResourceGroup.Name,
// 			IpConfigurations: network.FirewallIpConfigurationArray{
// 				&network.FirewallIpConfigurationArgs{
// 					Name:              pulumi.String("configuration"),
// 					SubnetId:          exampleSubnet.ID(),
// 					PublicIpAddressId: examplePublicIp.ID(),
// 				},
// 			},
// 		})
// 		if err != nil {
// 			return err
// 		}
// 		_, err = network.NewFirewallNatRuleCollection(ctx, "exampleFirewallNatRuleCollection", &network.FirewallNatRuleCollectionArgs{
// 			AzureFirewallName: exampleFirewall.Name,
// 			ResourceGroupName: exampleResourceGroup.Name,
// 			Priority:          pulumi.Int(100),
// 			Action:            pulumi.String("Dnat"),
// 			Rules: network.FirewallNatRuleCollectionRuleArray{
// 				&network.FirewallNatRuleCollectionRuleArgs{
// 					Name: pulumi.String("testrule"),
// 					SourceAddresses: pulumi.StringArray{
// 						pulumi.String("10.0.0.0/16"),
// 					},
// 					DestinationPorts: pulumi.StringArray{
// 						pulumi.String("53"),
// 					},
// 					DestinationAddresses: pulumi.StringArray{
// 						examplePublicIp.IpAddress,
// 					},
// 					TranslatedPort:    pulumi.String("53"),
// 					TranslatedAddress: pulumi.String("8.8.8.8"),
// 					Protocols: pulumi.StringArray{
// 						pulumi.String("TCP"),
// 						pulumi.String("UDP"),
// 					},
// 				},
// 			},
// 		})
// 		if err != nil {
// 			return err
// 		}
// 		return nil
// 	})
// }
// ```
type FirewallNatRuleCollection struct {
	pulumi.CustomResourceState

	// Specifies the action the rule will apply to matching traffic. Possible values are `Dnat` and `Snat`.
	Action pulumi.StringOutput `pulumi:"action"`
	// Specifies the name of the Firewall in which the NAT Rule Collection should be created. Changing this forces a new resource to be created.
	AzureFirewallName pulumi.StringOutput `pulumi:"azureFirewallName"`
	// Specifies the name of the NAT Rule Collection which must be unique within the Firewall. Changing this forces a new resource to be created.
	Name pulumi.StringOutput `pulumi:"name"`
	// Specifies the priority of the rule collection. Possible values are between `100` - `65000`.
	Priority pulumi.IntOutput `pulumi:"priority"`
	// Specifies the name of the Resource Group in which the Firewall exists. Changing this forces a new resource to be created.
	ResourceGroupName pulumi.StringOutput `pulumi:"resourceGroupName"`
	// One or more `rule` blocks as defined below.
	Rules FirewallNatRuleCollectionRuleArrayOutput `pulumi:"rules"`
}

// NewFirewallNatRuleCollection registers a new resource with the given unique name, arguments, and options.
func NewFirewallNatRuleCollection(ctx *pulumi.Context,
	name string, args *FirewallNatRuleCollectionArgs, opts ...pulumi.ResourceOption) (*FirewallNatRuleCollection, error) {
	if args == nil || args.Action == nil {
		return nil, errors.New("missing required argument 'Action'")
	}
	if args == nil || args.AzureFirewallName == nil {
		return nil, errors.New("missing required argument 'AzureFirewallName'")
	}
	if args == nil || args.Priority == nil {
		return nil, errors.New("missing required argument 'Priority'")
	}
	if args == nil || args.ResourceGroupName == nil {
		return nil, errors.New("missing required argument 'ResourceGroupName'")
	}
	if args == nil || args.Rules == nil {
		return nil, errors.New("missing required argument 'Rules'")
	}
	if args == nil {
		args = &FirewallNatRuleCollectionArgs{}
	}
	var resource FirewallNatRuleCollection
	err := ctx.RegisterResource("azure:network/firewallNatRuleCollection:FirewallNatRuleCollection", name, args, &resource, opts...)
	if err != nil {
		return nil, err
	}
	return &resource, nil
}

// GetFirewallNatRuleCollection gets an existing FirewallNatRuleCollection resource's state with the given name, ID, and optional
// state properties that are used to uniquely qualify the lookup (nil if not required).
func GetFirewallNatRuleCollection(ctx *pulumi.Context,
	name string, id pulumi.IDInput, state *FirewallNatRuleCollectionState, opts ...pulumi.ResourceOption) (*FirewallNatRuleCollection, error) {
	var resource FirewallNatRuleCollection
	err := ctx.ReadResource("azure:network/firewallNatRuleCollection:FirewallNatRuleCollection", name, id, state, &resource, opts...)
	if err != nil {
		return nil, err
	}
	return &resource, nil
}

// Input properties used for looking up and filtering FirewallNatRuleCollection resources.
type firewallNatRuleCollectionState struct {
	// Specifies the action the rule will apply to matching traffic. Possible values are `Dnat` and `Snat`.
	Action *string `pulumi:"action"`
	// Specifies the name of the Firewall in which the NAT Rule Collection should be created. Changing this forces a new resource to be created.
	AzureFirewallName *string `pulumi:"azureFirewallName"`
	// Specifies the name of the NAT Rule Collection which must be unique within the Firewall. Changing this forces a new resource to be created.
	Name *string `pulumi:"name"`
	// Specifies the priority of the rule collection. Possible values are between `100` - `65000`.
	Priority *int `pulumi:"priority"`
	// Specifies the name of the Resource Group in which the Firewall exists. Changing this forces a new resource to be created.
	ResourceGroupName *string `pulumi:"resourceGroupName"`
	// One or more `rule` blocks as defined below.
	Rules []FirewallNatRuleCollectionRule `pulumi:"rules"`
}

type FirewallNatRuleCollectionState struct {
	// Specifies the action the rule will apply to matching traffic. Possible values are `Dnat` and `Snat`.
	Action pulumi.StringPtrInput
	// Specifies the name of the Firewall in which the NAT Rule Collection should be created. Changing this forces a new resource to be created.
	AzureFirewallName pulumi.StringPtrInput
	// Specifies the name of the NAT Rule Collection which must be unique within the Firewall. Changing this forces a new resource to be created.
	Name pulumi.StringPtrInput
	// Specifies the priority of the rule collection. Possible values are between `100` - `65000`.
	Priority pulumi.IntPtrInput
	// Specifies the name of the Resource Group in which the Firewall exists. Changing this forces a new resource to be created.
	ResourceGroupName pulumi.StringPtrInput
	// One or more `rule` blocks as defined below.
	Rules FirewallNatRuleCollectionRuleArrayInput
}

func (FirewallNatRuleCollectionState) ElementType() reflect.Type {
	return reflect.TypeOf((*firewallNatRuleCollectionState)(nil)).Elem()
}

type firewallNatRuleCollectionArgs struct {
	// Specifies the action the rule will apply to matching traffic. Possible values are `Dnat` and `Snat`.
	Action string `pulumi:"action"`
	// Specifies the name of the Firewall in which the NAT Rule Collection should be created. Changing this forces a new resource to be created.
	AzureFirewallName string `pulumi:"azureFirewallName"`
	// Specifies the name of the NAT Rule Collection which must be unique within the Firewall. Changing this forces a new resource to be created.
	Name *string `pulumi:"name"`
	// Specifies the priority of the rule collection. Possible values are between `100` - `65000`.
	Priority int `pulumi:"priority"`
	// Specifies the name of the Resource Group in which the Firewall exists. Changing this forces a new resource to be created.
	ResourceGroupName string `pulumi:"resourceGroupName"`
	// One or more `rule` blocks as defined below.
	Rules []FirewallNatRuleCollectionRule `pulumi:"rules"`
}

// The set of arguments for constructing a FirewallNatRuleCollection resource.
type FirewallNatRuleCollectionArgs struct {
	// Specifies the action the rule will apply to matching traffic. Possible values are `Dnat` and `Snat`.
	Action pulumi.StringInput
	// Specifies the name of the Firewall in which the NAT Rule Collection should be created. Changing this forces a new resource to be created.
	AzureFirewallName pulumi.StringInput
	// Specifies the name of the NAT Rule Collection which must be unique within the Firewall. Changing this forces a new resource to be created.
	Name pulumi.StringPtrInput
	// Specifies the priority of the rule collection. Possible values are between `100` - `65000`.
	Priority pulumi.IntInput
	// Specifies the name of the Resource Group in which the Firewall exists. Changing this forces a new resource to be created.
	ResourceGroupName pulumi.StringInput
	// One or more `rule` blocks as defined below.
	Rules FirewallNatRuleCollectionRuleArrayInput
}

func (FirewallNatRuleCollectionArgs) ElementType() reflect.Type {
	return reflect.TypeOf((*firewallNatRuleCollectionArgs)(nil)).Elem()
}
