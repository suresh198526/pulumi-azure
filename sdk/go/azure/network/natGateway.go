// *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

// nolint: lll
package network

import (
	"reflect"

	"github.com/pkg/errors"
	"github.com/pulumi/pulumi/sdk/go/pulumi"
)

// Manages a Azure NAT Gateway.
// 
// > **NOTE:** The Azure NAT Gateway service is currently in private preview. Your subscription must be on the NAT Gateway private preview whitelist for this resource to be provisioned correctly. If you attempt to provision this resource and receive an `InvalidResourceType` error may mean that your subscription is not part of the NAT Gateway private preview or you are using a region which does not yet support the NAT Gateway private preview service. The NAT Gateway private preview service is currently available in a limited set of regions. Private preview resources may have multiple breaking changes over their lifecycle until they GA. You can opt into the Private Preview by contacting your Microsoft Representative.
// 
// > This content is derived from https://github.com/terraform-providers/terraform-provider-azurerm/blob/master/website/docs/r/nat_gateway.html.markdown.
type NatGateway struct {
	pulumi.CustomResourceState

	// The idle timeout which should be used in minutes. Defaults to `4`.
	IdleTimeoutInMinutes pulumi.IntPtrOutput `pulumi:"idleTimeoutInMinutes"`
	// Specifies the supported Azure location where the NAT Gateway should exist. Changing this forces a new resource to be created.
	Location pulumi.StringOutput `pulumi:"location"`
	// Specifies the name of the NAT Gateway. Changing this forces a new resource to be created.
	Name pulumi.StringOutput `pulumi:"name"`
	// A list of Public IP Address ID's which should be associated with the NAT Gateway resource.
	PublicIpAddressIds pulumi.StringArrayOutput `pulumi:"publicIpAddressIds"`
	// A list of Public IP Prefix ID's which should be associated with the NAT Gateway resource.
	PublicIpPrefixIds pulumi.StringArrayOutput `pulumi:"publicIpPrefixIds"`
	// Specifies the name of the Resource Group in which the NAT Gateway should exist. Changing this forces a new resource to be created.
	ResourceGroupName pulumi.StringOutput `pulumi:"resourceGroupName"`
	// The resource GUID property of the NAT Gateway.
	ResourceGuid pulumi.StringOutput `pulumi:"resourceGuid"`
	// The SKU which should be used. At this time the only supported value is `Standard`. Defaults to `Standard`.
	SkuName pulumi.StringPtrOutput `pulumi:"skuName"`
	// A mapping of tags to assign to the resource. Changing this forces a new resource to be created.
	Tags pulumi.StringMapOutput `pulumi:"tags"`
	// A list of availability zones where the NAT Gateway should be provisioned. Changing this forces a new resource to be created.
	Zones pulumi.StringArrayOutput `pulumi:"zones"`
}

// NewNatGateway registers a new resource with the given unique name, arguments, and options.
func NewNatGateway(ctx *pulumi.Context,
	name string, args *NatGatewayArgs, opts ...pulumi.ResourceOption) (*NatGateway, error) {
	if args == nil || args.ResourceGroupName == nil {
		return nil, errors.New("missing required argument 'ResourceGroupName'")
	}
	if args == nil {
		args = &NatGatewayArgs{}
	}
	var resource NatGateway
	err := ctx.RegisterResource("azure:network/natGateway:NatGateway", name, args, &resource, opts...)
	if err != nil {
		return nil, err
	}
	return &resource, nil
}

// GetNatGateway gets an existing NatGateway resource's state with the given name, ID, and optional
// state properties that are used to uniquely qualify the lookup (nil if not required).
func GetNatGateway(ctx *pulumi.Context,
	name string, id pulumi.IDInput, state *NatGatewayState, opts ...pulumi.ResourceOption) (*NatGateway, error) {
	var resource NatGateway
	err := ctx.ReadResource("azure:network/natGateway:NatGateway", name, id, state, &resource, opts...)
	if err != nil {
		return nil, err
	}
	return &resource, nil
}

// Input properties used for looking up and filtering NatGateway resources.
type natGatewayState struct {
	// The idle timeout which should be used in minutes. Defaults to `4`.
	IdleTimeoutInMinutes *int `pulumi:"idleTimeoutInMinutes"`
	// Specifies the supported Azure location where the NAT Gateway should exist. Changing this forces a new resource to be created.
	Location *string `pulumi:"location"`
	// Specifies the name of the NAT Gateway. Changing this forces a new resource to be created.
	Name *string `pulumi:"name"`
	// A list of Public IP Address ID's which should be associated with the NAT Gateway resource.
	PublicIpAddressIds []string `pulumi:"publicIpAddressIds"`
	// A list of Public IP Prefix ID's which should be associated with the NAT Gateway resource.
	PublicIpPrefixIds []string `pulumi:"publicIpPrefixIds"`
	// Specifies the name of the Resource Group in which the NAT Gateway should exist. Changing this forces a new resource to be created.
	ResourceGroupName *string `pulumi:"resourceGroupName"`
	// The resource GUID property of the NAT Gateway.
	ResourceGuid *string `pulumi:"resourceGuid"`
	// The SKU which should be used. At this time the only supported value is `Standard`. Defaults to `Standard`.
	SkuName *string `pulumi:"skuName"`
	// A mapping of tags to assign to the resource. Changing this forces a new resource to be created.
	Tags map[string]string `pulumi:"tags"`
	// A list of availability zones where the NAT Gateway should be provisioned. Changing this forces a new resource to be created.
	Zones []string `pulumi:"zones"`
}

type NatGatewayState struct {
	// The idle timeout which should be used in minutes. Defaults to `4`.
	IdleTimeoutInMinutes pulumi.IntPtrInput
	// Specifies the supported Azure location where the NAT Gateway should exist. Changing this forces a new resource to be created.
	Location pulumi.StringPtrInput
	// Specifies the name of the NAT Gateway. Changing this forces a new resource to be created.
	Name pulumi.StringPtrInput
	// A list of Public IP Address ID's which should be associated with the NAT Gateway resource.
	PublicIpAddressIds pulumi.StringArrayInput
	// A list of Public IP Prefix ID's which should be associated with the NAT Gateway resource.
	PublicIpPrefixIds pulumi.StringArrayInput
	// Specifies the name of the Resource Group in which the NAT Gateway should exist. Changing this forces a new resource to be created.
	ResourceGroupName pulumi.StringPtrInput
	// The resource GUID property of the NAT Gateway.
	ResourceGuid pulumi.StringPtrInput
	// The SKU which should be used. At this time the only supported value is `Standard`. Defaults to `Standard`.
	SkuName pulumi.StringPtrInput
	// A mapping of tags to assign to the resource. Changing this forces a new resource to be created.
	Tags pulumi.StringMapInput
	// A list of availability zones where the NAT Gateway should be provisioned. Changing this forces a new resource to be created.
	Zones pulumi.StringArrayInput
}

func (NatGatewayState) ElementType() reflect.Type {
	return reflect.TypeOf((*natGatewayState)(nil)).Elem()
}

type natGatewayArgs struct {
	// The idle timeout which should be used in minutes. Defaults to `4`.
	IdleTimeoutInMinutes *int `pulumi:"idleTimeoutInMinutes"`
	// Specifies the supported Azure location where the NAT Gateway should exist. Changing this forces a new resource to be created.
	Location *string `pulumi:"location"`
	// Specifies the name of the NAT Gateway. Changing this forces a new resource to be created.
	Name *string `pulumi:"name"`
	// A list of Public IP Address ID's which should be associated with the NAT Gateway resource.
	PublicIpAddressIds []string `pulumi:"publicIpAddressIds"`
	// A list of Public IP Prefix ID's which should be associated with the NAT Gateway resource.
	PublicIpPrefixIds []string `pulumi:"publicIpPrefixIds"`
	// Specifies the name of the Resource Group in which the NAT Gateway should exist. Changing this forces a new resource to be created.
	ResourceGroupName string `pulumi:"resourceGroupName"`
	// The SKU which should be used. At this time the only supported value is `Standard`. Defaults to `Standard`.
	SkuName *string `pulumi:"skuName"`
	// A mapping of tags to assign to the resource. Changing this forces a new resource to be created.
	Tags map[string]string `pulumi:"tags"`
	// A list of availability zones where the NAT Gateway should be provisioned. Changing this forces a new resource to be created.
	Zones []string `pulumi:"zones"`
}

// The set of arguments for constructing a NatGateway resource.
type NatGatewayArgs struct {
	// The idle timeout which should be used in minutes. Defaults to `4`.
	IdleTimeoutInMinutes pulumi.IntPtrInput
	// Specifies the supported Azure location where the NAT Gateway should exist. Changing this forces a new resource to be created.
	Location pulumi.StringPtrInput
	// Specifies the name of the NAT Gateway. Changing this forces a new resource to be created.
	Name pulumi.StringPtrInput
	// A list of Public IP Address ID's which should be associated with the NAT Gateway resource.
	PublicIpAddressIds pulumi.StringArrayInput
	// A list of Public IP Prefix ID's which should be associated with the NAT Gateway resource.
	PublicIpPrefixIds pulumi.StringArrayInput
	// Specifies the name of the Resource Group in which the NAT Gateway should exist. Changing this forces a new resource to be created.
	ResourceGroupName pulumi.StringInput
	// The SKU which should be used. At this time the only supported value is `Standard`. Defaults to `Standard`.
	SkuName pulumi.StringPtrInput
	// A mapping of tags to assign to the resource. Changing this forces a new resource to be created.
	Tags pulumi.StringMapInput
	// A list of availability zones where the NAT Gateway should be provisioned. Changing this forces a new resource to be created.
	Zones pulumi.StringArrayInput
}

func (NatGatewayArgs) ElementType() reflect.Type {
	return reflect.TypeOf((*natGatewayArgs)(nil)).Elem()
}

