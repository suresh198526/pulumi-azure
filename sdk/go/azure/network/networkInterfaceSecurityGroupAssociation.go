// *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

// nolint: lll
package network

import (
	"reflect"

	"github.com/pkg/errors"
	"github.com/pulumi/pulumi/sdk/go/pulumi"
)

// Manages the association between a Network Interface and a Network Security Group.
// 
// > This content is derived from https://github.com/terraform-providers/terraform-provider-azurerm/blob/master/website/docs/r/network_interface_security_group_association.html.markdown.
type NetworkInterfaceSecurityGroupAssociation struct {
	pulumi.CustomResourceState

	// The ID of the Network Interface. Changing this forces a new resource to be created.
	NetworkInterfaceId pulumi.StringOutput `pulumi:"networkInterfaceId"`
	// The ID of the Network Security Group which should be attached to the Network Interface. Changing this forces a new resource to be created.
	NetworkSecurityGroupId pulumi.StringOutput `pulumi:"networkSecurityGroupId"`
}

// NewNetworkInterfaceSecurityGroupAssociation registers a new resource with the given unique name, arguments, and options.
func NewNetworkInterfaceSecurityGroupAssociation(ctx *pulumi.Context,
	name string, args *NetworkInterfaceSecurityGroupAssociationArgs, opts ...pulumi.ResourceOption) (*NetworkInterfaceSecurityGroupAssociation, error) {
	if args == nil || args.NetworkInterfaceId == nil {
		return nil, errors.New("missing required argument 'NetworkInterfaceId'")
	}
	if args == nil || args.NetworkSecurityGroupId == nil {
		return nil, errors.New("missing required argument 'NetworkSecurityGroupId'")
	}
	if args == nil {
		args = &NetworkInterfaceSecurityGroupAssociationArgs{}
	}
	var resource NetworkInterfaceSecurityGroupAssociation
	err := ctx.RegisterResource("azure:network/networkInterfaceSecurityGroupAssociation:NetworkInterfaceSecurityGroupAssociation", name, args, &resource, opts...)
	if err != nil {
		return nil, err
	}
	return &resource, nil
}

// GetNetworkInterfaceSecurityGroupAssociation gets an existing NetworkInterfaceSecurityGroupAssociation resource's state with the given name, ID, and optional
// state properties that are used to uniquely qualify the lookup (nil if not required).
func GetNetworkInterfaceSecurityGroupAssociation(ctx *pulumi.Context,
	name string, id pulumi.IDInput, state *NetworkInterfaceSecurityGroupAssociationState, opts ...pulumi.ResourceOption) (*NetworkInterfaceSecurityGroupAssociation, error) {
	var resource NetworkInterfaceSecurityGroupAssociation
	err := ctx.ReadResource("azure:network/networkInterfaceSecurityGroupAssociation:NetworkInterfaceSecurityGroupAssociation", name, id, state, &resource, opts...)
	if err != nil {
		return nil, err
	}
	return &resource, nil
}

// Input properties used for looking up and filtering NetworkInterfaceSecurityGroupAssociation resources.
type networkInterfaceSecurityGroupAssociationState struct {
	// The ID of the Network Interface. Changing this forces a new resource to be created.
	NetworkInterfaceId *string `pulumi:"networkInterfaceId"`
	// The ID of the Network Security Group which should be attached to the Network Interface. Changing this forces a new resource to be created.
	NetworkSecurityGroupId *string `pulumi:"networkSecurityGroupId"`
}

type NetworkInterfaceSecurityGroupAssociationState struct {
	// The ID of the Network Interface. Changing this forces a new resource to be created.
	NetworkInterfaceId pulumi.StringPtrInput
	// The ID of the Network Security Group which should be attached to the Network Interface. Changing this forces a new resource to be created.
	NetworkSecurityGroupId pulumi.StringPtrInput
}

func (NetworkInterfaceSecurityGroupAssociationState) ElementType() reflect.Type {
	return reflect.TypeOf((*networkInterfaceSecurityGroupAssociationState)(nil)).Elem()
}

type networkInterfaceSecurityGroupAssociationArgs struct {
	// The ID of the Network Interface. Changing this forces a new resource to be created.
	NetworkInterfaceId string `pulumi:"networkInterfaceId"`
	// The ID of the Network Security Group which should be attached to the Network Interface. Changing this forces a new resource to be created.
	NetworkSecurityGroupId string `pulumi:"networkSecurityGroupId"`
}

// The set of arguments for constructing a NetworkInterfaceSecurityGroupAssociation resource.
type NetworkInterfaceSecurityGroupAssociationArgs struct {
	// The ID of the Network Interface. Changing this forces a new resource to be created.
	NetworkInterfaceId pulumi.StringInput
	// The ID of the Network Security Group which should be attached to the Network Interface. Changing this forces a new resource to be created.
	NetworkSecurityGroupId pulumi.StringInput
}

func (NetworkInterfaceSecurityGroupAssociationArgs) ElementType() reflect.Type {
	return reflect.TypeOf((*networkInterfaceSecurityGroupAssociationArgs)(nil)).Elem()
}

