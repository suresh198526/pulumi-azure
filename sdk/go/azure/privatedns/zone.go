// *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

// nolint: lll
package privatedns

import (
	"reflect"

	"github.com/pkg/errors"
	"github.com/pulumi/pulumi/sdk/go/pulumi"
)

// Enables you to manage Private DNS zones within Azure DNS. These zones are hosted on Azure's name servers.
// 
// > This content is derived from https://github.com/terraform-providers/terraform-provider-azurerm/blob/master/website/docs/r/private_dns_zone.html.markdown.
type Zone struct {
	pulumi.CustomResourceState

	// The maximum number of record sets that can be created in this Private DNS zone.
	MaxNumberOfRecordSets pulumi.IntOutput `pulumi:"maxNumberOfRecordSets"`
	// The maximum number of virtual networks that can be linked to this Private DNS zone.
	MaxNumberOfVirtualNetworkLinks pulumi.IntOutput `pulumi:"maxNumberOfVirtualNetworkLinks"`
	// The maximum number of virtual networks that can be linked to this Private DNS zone with registration enabled.
	MaxNumberOfVirtualNetworkLinksWithRegistration pulumi.IntOutput `pulumi:"maxNumberOfVirtualNetworkLinksWithRegistration"`
	// The name of the Private DNS Zone. Must be a valid domain name.
	Name pulumi.StringOutput `pulumi:"name"`
	// The current number of record sets in this Private DNS zone.
	NumberOfRecordSets pulumi.IntOutput `pulumi:"numberOfRecordSets"`
	// Specifies the resource group where the resource exists. Changing this forces a new resource to be created.
	ResourceGroupName pulumi.StringOutput `pulumi:"resourceGroupName"`
	// A mapping of tags to assign to the resource.
	Tags pulumi.StringMapOutput `pulumi:"tags"`
}

// NewZone registers a new resource with the given unique name, arguments, and options.
func NewZone(ctx *pulumi.Context,
	name string, args *ZoneArgs, opts ...pulumi.ResourceOption) (*Zone, error) {
	if args == nil || args.ResourceGroupName == nil {
		return nil, errors.New("missing required argument 'ResourceGroupName'")
	}
	if args == nil {
		args = &ZoneArgs{}
	}
	var resource Zone
	err := ctx.RegisterResource("azure:privatedns/zone:Zone", name, args, &resource, opts...)
	if err != nil {
		return nil, err
	}
	return &resource, nil
}

// GetZone gets an existing Zone resource's state with the given name, ID, and optional
// state properties that are used to uniquely qualify the lookup (nil if not required).
func GetZone(ctx *pulumi.Context,
	name string, id pulumi.IDInput, state *ZoneState, opts ...pulumi.ResourceOption) (*Zone, error) {
	var resource Zone
	err := ctx.ReadResource("azure:privatedns/zone:Zone", name, id, state, &resource, opts...)
	if err != nil {
		return nil, err
	}
	return &resource, nil
}

// Input properties used for looking up and filtering Zone resources.
type zoneState struct {
	// The maximum number of record sets that can be created in this Private DNS zone.
	MaxNumberOfRecordSets *int `pulumi:"maxNumberOfRecordSets"`
	// The maximum number of virtual networks that can be linked to this Private DNS zone.
	MaxNumberOfVirtualNetworkLinks *int `pulumi:"maxNumberOfVirtualNetworkLinks"`
	// The maximum number of virtual networks that can be linked to this Private DNS zone with registration enabled.
	MaxNumberOfVirtualNetworkLinksWithRegistration *int `pulumi:"maxNumberOfVirtualNetworkLinksWithRegistration"`
	// The name of the Private DNS Zone. Must be a valid domain name.
	Name *string `pulumi:"name"`
	// The current number of record sets in this Private DNS zone.
	NumberOfRecordSets *int `pulumi:"numberOfRecordSets"`
	// Specifies the resource group where the resource exists. Changing this forces a new resource to be created.
	ResourceGroupName *string `pulumi:"resourceGroupName"`
	// A mapping of tags to assign to the resource.
	Tags map[string]string `pulumi:"tags"`
}

type ZoneState struct {
	// The maximum number of record sets that can be created in this Private DNS zone.
	MaxNumberOfRecordSets pulumi.IntPtrInput
	// The maximum number of virtual networks that can be linked to this Private DNS zone.
	MaxNumberOfVirtualNetworkLinks pulumi.IntPtrInput
	// The maximum number of virtual networks that can be linked to this Private DNS zone with registration enabled.
	MaxNumberOfVirtualNetworkLinksWithRegistration pulumi.IntPtrInput
	// The name of the Private DNS Zone. Must be a valid domain name.
	Name pulumi.StringPtrInput
	// The current number of record sets in this Private DNS zone.
	NumberOfRecordSets pulumi.IntPtrInput
	// Specifies the resource group where the resource exists. Changing this forces a new resource to be created.
	ResourceGroupName pulumi.StringPtrInput
	// A mapping of tags to assign to the resource.
	Tags pulumi.StringMapInput
}

func (ZoneState) ElementType() reflect.Type {
	return reflect.TypeOf((*zoneState)(nil)).Elem()
}

type zoneArgs struct {
	// The name of the Private DNS Zone. Must be a valid domain name.
	Name *string `pulumi:"name"`
	// Specifies the resource group where the resource exists. Changing this forces a new resource to be created.
	ResourceGroupName string `pulumi:"resourceGroupName"`
	// A mapping of tags to assign to the resource.
	Tags map[string]string `pulumi:"tags"`
}

// The set of arguments for constructing a Zone resource.
type ZoneArgs struct {
	// The name of the Private DNS Zone. Must be a valid domain name.
	Name pulumi.StringPtrInput
	// Specifies the resource group where the resource exists. Changing this forces a new resource to be created.
	ResourceGroupName pulumi.StringInput
	// A mapping of tags to assign to the resource.
	Tags pulumi.StringMapInput
}

func (ZoneArgs) ElementType() reflect.Type {
	return reflect.TypeOf((*zoneArgs)(nil)).Elem()
}

