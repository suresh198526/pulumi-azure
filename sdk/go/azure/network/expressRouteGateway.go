// *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

// nolint: lll
package network

import (
	"reflect"

	"github.com/pkg/errors"
	"github.com/pulumi/pulumi/sdk/go/pulumi"
)

// Manages an ExpressRoute gateway.
// 
// > This content is derived from https://github.com/terraform-providers/terraform-provider-azurerm/blob/master/website/docs/r/express_route_gateway.html.markdown.
type ExpressRouteGateway struct {
	pulumi.CustomResourceState

	// Specifies the supported Azure location where the resource exists. Changing this forces a new resource to be created.
	Location pulumi.StringOutput `pulumi:"location"`
	// The name of the ExpressRoute gateway. Changing this forces a new resource to be created.
	Name pulumi.StringOutput `pulumi:"name"`
	// The name of the resource group in which to create the ExpressRoute gateway. Changing this forces a new resource to be created.
	ResourceGroupName pulumi.StringOutput `pulumi:"resourceGroupName"`
	// The number of scale units with which to provision the ExpressRoute gateway. Each scale unit is equal to 2Gbps, with support for up to 10 scale units (20Gbps).
	ScaleUnits pulumi.IntOutput `pulumi:"scaleUnits"`
	// A mapping of tags to assign to the resource.
	Tags pulumi.StringMapOutput `pulumi:"tags"`
	// The ID of a Virtual HUB within which the ExpressRoute gateway should be created.
	VirtualHubId pulumi.StringOutput `pulumi:"virtualHubId"`
}

// NewExpressRouteGateway registers a new resource with the given unique name, arguments, and options.
func NewExpressRouteGateway(ctx *pulumi.Context,
	name string, args *ExpressRouteGatewayArgs, opts ...pulumi.ResourceOption) (*ExpressRouteGateway, error) {
	if args == nil || args.ResourceGroupName == nil {
		return nil, errors.New("missing required argument 'ResourceGroupName'")
	}
	if args == nil || args.ScaleUnits == nil {
		return nil, errors.New("missing required argument 'ScaleUnits'")
	}
	if args == nil || args.VirtualHubId == nil {
		return nil, errors.New("missing required argument 'VirtualHubId'")
	}
	if args == nil {
		args = &ExpressRouteGatewayArgs{}
	}
	var resource ExpressRouteGateway
	err := ctx.RegisterResource("azure:network/expressRouteGateway:ExpressRouteGateway", name, args, &resource, opts...)
	if err != nil {
		return nil, err
	}
	return &resource, nil
}

// GetExpressRouteGateway gets an existing ExpressRouteGateway resource's state with the given name, ID, and optional
// state properties that are used to uniquely qualify the lookup (nil if not required).
func GetExpressRouteGateway(ctx *pulumi.Context,
	name string, id pulumi.IDInput, state *ExpressRouteGatewayState, opts ...pulumi.ResourceOption) (*ExpressRouteGateway, error) {
	var resource ExpressRouteGateway
	err := ctx.ReadResource("azure:network/expressRouteGateway:ExpressRouteGateway", name, id, state, &resource, opts...)
	if err != nil {
		return nil, err
	}
	return &resource, nil
}

// Input properties used for looking up and filtering ExpressRouteGateway resources.
type expressRouteGatewayState struct {
	// Specifies the supported Azure location where the resource exists. Changing this forces a new resource to be created.
	Location *string `pulumi:"location"`
	// The name of the ExpressRoute gateway. Changing this forces a new resource to be created.
	Name *string `pulumi:"name"`
	// The name of the resource group in which to create the ExpressRoute gateway. Changing this forces a new resource to be created.
	ResourceGroupName *string `pulumi:"resourceGroupName"`
	// The number of scale units with which to provision the ExpressRoute gateway. Each scale unit is equal to 2Gbps, with support for up to 10 scale units (20Gbps).
	ScaleUnits *int `pulumi:"scaleUnits"`
	// A mapping of tags to assign to the resource.
	Tags map[string]string `pulumi:"tags"`
	// The ID of a Virtual HUB within which the ExpressRoute gateway should be created.
	VirtualHubId *string `pulumi:"virtualHubId"`
}

type ExpressRouteGatewayState struct {
	// Specifies the supported Azure location where the resource exists. Changing this forces a new resource to be created.
	Location pulumi.StringPtrInput
	// The name of the ExpressRoute gateway. Changing this forces a new resource to be created.
	Name pulumi.StringPtrInput
	// The name of the resource group in which to create the ExpressRoute gateway. Changing this forces a new resource to be created.
	ResourceGroupName pulumi.StringPtrInput
	// The number of scale units with which to provision the ExpressRoute gateway. Each scale unit is equal to 2Gbps, with support for up to 10 scale units (20Gbps).
	ScaleUnits pulumi.IntPtrInput
	// A mapping of tags to assign to the resource.
	Tags pulumi.StringMapInput
	// The ID of a Virtual HUB within which the ExpressRoute gateway should be created.
	VirtualHubId pulumi.StringPtrInput
}

func (ExpressRouteGatewayState) ElementType() reflect.Type {
	return reflect.TypeOf((*expressRouteGatewayState)(nil)).Elem()
}

type expressRouteGatewayArgs struct {
	// Specifies the supported Azure location where the resource exists. Changing this forces a new resource to be created.
	Location *string `pulumi:"location"`
	// The name of the ExpressRoute gateway. Changing this forces a new resource to be created.
	Name *string `pulumi:"name"`
	// The name of the resource group in which to create the ExpressRoute gateway. Changing this forces a new resource to be created.
	ResourceGroupName string `pulumi:"resourceGroupName"`
	// The number of scale units with which to provision the ExpressRoute gateway. Each scale unit is equal to 2Gbps, with support for up to 10 scale units (20Gbps).
	ScaleUnits int `pulumi:"scaleUnits"`
	// A mapping of tags to assign to the resource.
	Tags map[string]string `pulumi:"tags"`
	// The ID of a Virtual HUB within which the ExpressRoute gateway should be created.
	VirtualHubId string `pulumi:"virtualHubId"`
}

// The set of arguments for constructing a ExpressRouteGateway resource.
type ExpressRouteGatewayArgs struct {
	// Specifies the supported Azure location where the resource exists. Changing this forces a new resource to be created.
	Location pulumi.StringPtrInput
	// The name of the ExpressRoute gateway. Changing this forces a new resource to be created.
	Name pulumi.StringPtrInput
	// The name of the resource group in which to create the ExpressRoute gateway. Changing this forces a new resource to be created.
	ResourceGroupName pulumi.StringInput
	// The number of scale units with which to provision the ExpressRoute gateway. Each scale unit is equal to 2Gbps, with support for up to 10 scale units (20Gbps).
	ScaleUnits pulumi.IntInput
	// A mapping of tags to assign to the resource.
	Tags pulumi.StringMapInput
	// The ID of a Virtual HUB within which the ExpressRoute gateway should be created.
	VirtualHubId pulumi.StringInput
}

func (ExpressRouteGatewayArgs) ElementType() reflect.Type {
	return reflect.TypeOf((*expressRouteGatewayArgs)(nil)).Elem()
}

