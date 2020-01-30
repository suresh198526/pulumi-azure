// *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

// nolint: lll
package privatedns

import (
	"reflect"

	"github.com/pkg/errors"
	"github.com/pulumi/pulumi/sdk/go/pulumi"
)

// > This content is derived from https://github.com/terraform-providers/terraform-provider-azurerm/blob/master/website/docs/r/private_link_endpoint.html.markdown.
type LinkEndpoint struct {
	pulumi.CustomResourceState

	// The supported Azure location where the resource exists. Changing this forces a new resource to be created.
	Location pulumi.StringOutput `pulumi:"location"`
	// Specifies the Name of the Private Service Connection. Changing this forces a new resource to be created.
	Name pulumi.StringOutput `pulumi:"name"`
	// A `privateServiceConnection` block as defined below.
	PrivateServiceConnection LinkEndpointPrivateServiceConnectionOutput `pulumi:"privateServiceConnection"`
	// Specifies the Name of the Resource Group within which the Private Link Endpoint should exist. Changing this forces a new resource to be created.
	ResourceGroupName pulumi.StringOutput `pulumi:"resourceGroupName"`
	// The ID of the Subnet from which Private IP Addresses will be allocated for this Private Link Endpoint. Changing this forces a new resource to be created.
	SubnetId pulumi.StringOutput `pulumi:"subnetId"`
}

// NewLinkEndpoint registers a new resource with the given unique name, arguments, and options.
func NewLinkEndpoint(ctx *pulumi.Context,
	name string, args *LinkEndpointArgs, opts ...pulumi.ResourceOption) (*LinkEndpoint, error) {
	if args == nil || args.PrivateServiceConnection == nil {
		return nil, errors.New("missing required argument 'PrivateServiceConnection'")
	}
	if args == nil || args.ResourceGroupName == nil {
		return nil, errors.New("missing required argument 'ResourceGroupName'")
	}
	if args == nil || args.SubnetId == nil {
		return nil, errors.New("missing required argument 'SubnetId'")
	}
	if args == nil {
		args = &LinkEndpointArgs{}
	}
	var resource LinkEndpoint
	err := ctx.RegisterResource("azure:privatedns/linkEndpoint:LinkEndpoint", name, args, &resource, opts...)
	if err != nil {
		return nil, err
	}
	return &resource, nil
}

// GetLinkEndpoint gets an existing LinkEndpoint resource's state with the given name, ID, and optional
// state properties that are used to uniquely qualify the lookup (nil if not required).
func GetLinkEndpoint(ctx *pulumi.Context,
	name string, id pulumi.IDInput, state *LinkEndpointState, opts ...pulumi.ResourceOption) (*LinkEndpoint, error) {
	var resource LinkEndpoint
	err := ctx.ReadResource("azure:privatedns/linkEndpoint:LinkEndpoint", name, id, state, &resource, opts...)
	if err != nil {
		return nil, err
	}
	return &resource, nil
}

// Input properties used for looking up and filtering LinkEndpoint resources.
type linkEndpointState struct {
	// The supported Azure location where the resource exists. Changing this forces a new resource to be created.
	Location *string `pulumi:"location"`
	// Specifies the Name of the Private Service Connection. Changing this forces a new resource to be created.
	Name *string `pulumi:"name"`
	// A `privateServiceConnection` block as defined below.
	PrivateServiceConnection *LinkEndpointPrivateServiceConnection `pulumi:"privateServiceConnection"`
	// Specifies the Name of the Resource Group within which the Private Link Endpoint should exist. Changing this forces a new resource to be created.
	ResourceGroupName *string `pulumi:"resourceGroupName"`
	// The ID of the Subnet from which Private IP Addresses will be allocated for this Private Link Endpoint. Changing this forces a new resource to be created.
	SubnetId *string `pulumi:"subnetId"`
}

type LinkEndpointState struct {
	// The supported Azure location where the resource exists. Changing this forces a new resource to be created.
	Location pulumi.StringPtrInput
	// Specifies the Name of the Private Service Connection. Changing this forces a new resource to be created.
	Name pulumi.StringPtrInput
	// A `privateServiceConnection` block as defined below.
	PrivateServiceConnection LinkEndpointPrivateServiceConnectionPtrInput
	// Specifies the Name of the Resource Group within which the Private Link Endpoint should exist. Changing this forces a new resource to be created.
	ResourceGroupName pulumi.StringPtrInput
	// The ID of the Subnet from which Private IP Addresses will be allocated for this Private Link Endpoint. Changing this forces a new resource to be created.
	SubnetId pulumi.StringPtrInput
}

func (LinkEndpointState) ElementType() reflect.Type {
	return reflect.TypeOf((*linkEndpointState)(nil)).Elem()
}

type linkEndpointArgs struct {
	// The supported Azure location where the resource exists. Changing this forces a new resource to be created.
	Location *string `pulumi:"location"`
	// Specifies the Name of the Private Service Connection. Changing this forces a new resource to be created.
	Name *string `pulumi:"name"`
	// A `privateServiceConnection` block as defined below.
	PrivateServiceConnection LinkEndpointPrivateServiceConnection `pulumi:"privateServiceConnection"`
	// Specifies the Name of the Resource Group within which the Private Link Endpoint should exist. Changing this forces a new resource to be created.
	ResourceGroupName string `pulumi:"resourceGroupName"`
	// The ID of the Subnet from which Private IP Addresses will be allocated for this Private Link Endpoint. Changing this forces a new resource to be created.
	SubnetId string `pulumi:"subnetId"`
}

// The set of arguments for constructing a LinkEndpoint resource.
type LinkEndpointArgs struct {
	// The supported Azure location where the resource exists. Changing this forces a new resource to be created.
	Location pulumi.StringPtrInput
	// Specifies the Name of the Private Service Connection. Changing this forces a new resource to be created.
	Name pulumi.StringPtrInput
	// A `privateServiceConnection` block as defined below.
	PrivateServiceConnection LinkEndpointPrivateServiceConnectionInput
	// Specifies the Name of the Resource Group within which the Private Link Endpoint should exist. Changing this forces a new resource to be created.
	ResourceGroupName pulumi.StringInput
	// The ID of the Subnet from which Private IP Addresses will be allocated for this Private Link Endpoint. Changing this forces a new resource to be created.
	SubnetId pulumi.StringInput
}

func (LinkEndpointArgs) ElementType() reflect.Type {
	return reflect.TypeOf((*linkEndpointArgs)(nil)).Elem()
}
