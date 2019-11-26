// *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

package iot

import (
	"github.com/pkg/errors"
	"github.com/pulumi/pulumi/sdk/go/pulumi"
)

// Manages an IotHub Device Provisioning Service.
//
// > This content is derived from https://github.com/terraform-providers/terraform-provider-azurerm/blob/master/website/docs/r/iot_dps.html.markdown.
type Dps struct {
	s *pulumi.ResourceState
}

// NewDps registers a new resource with the given unique name, arguments, and options.
func NewDps(ctx *pulumi.Context,
	name string, args *DpsArgs, opts ...pulumi.ResourceOpt) (*Dps, error) {
	if args == nil || args.ResourceGroupName == nil {
		return nil, errors.New("missing required argument 'ResourceGroupName'")
	}
	if args == nil || args.Sku == nil {
		return nil, errors.New("missing required argument 'Sku'")
	}
	inputs := make(map[string]interface{})
	if args == nil {
		inputs["linkedHubs"] = nil
		inputs["location"] = nil
		inputs["name"] = nil
		inputs["resourceGroupName"] = nil
		inputs["sku"] = nil
		inputs["tags"] = nil
	} else {
		inputs["linkedHubs"] = args.LinkedHubs
		inputs["location"] = args.Location
		inputs["name"] = args.Name
		inputs["resourceGroupName"] = args.ResourceGroupName
		inputs["sku"] = args.Sku
		inputs["tags"] = args.Tags
	}
	s, err := ctx.RegisterResource("azure:iot/dps:Dps", name, true, inputs, opts...)
	if err != nil {
		return nil, err
	}
	return &Dps{s: s}, nil
}

// GetDps gets an existing Dps resource's state with the given name, ID, and optional
// state properties that are used to uniquely qualify the lookup (nil if not required).
func GetDps(ctx *pulumi.Context,
	name string, id pulumi.ID, state *DpsState, opts ...pulumi.ResourceOpt) (*Dps, error) {
	inputs := make(map[string]interface{})
	if state != nil {
		inputs["linkedHubs"] = state.LinkedHubs
		inputs["location"] = state.Location
		inputs["name"] = state.Name
		inputs["resourceGroupName"] = state.ResourceGroupName
		inputs["sku"] = state.Sku
		inputs["tags"] = state.Tags
	}
	s, err := ctx.ReadResource("azure:iot/dps:Dps", name, id, inputs, opts...)
	if err != nil {
		return nil, err
	}
	return &Dps{s: s}, nil
}

// URN is this resource's unique name assigned by Pulumi.
func (r *Dps) URN() pulumi.URNOutput {
	return r.s.URN()
}

// ID is this resource's unique identifier assigned by its provider.
func (r *Dps) ID() pulumi.IDOutput {
	return r.s.ID()
}

// A `linkedHub` block as defined below.
func (r *Dps) LinkedHubs() pulumi.ArrayOutput {
	return (pulumi.ArrayOutput)(r.s.State["linkedHubs"])
}

// Specifies the supported Azure location where the resource has to be createc. Changing this forces a new resource to be created.
func (r *Dps) Location() pulumi.StringOutput {
	return (pulumi.StringOutput)(r.s.State["location"])
}

// Specifies the name of the Iot Device Provisioning Service resource. Changing this forces a new resource to be created.
func (r *Dps) Name() pulumi.StringOutput {
	return (pulumi.StringOutput)(r.s.State["name"])
}

// The name of the resource group under which the Iot Device Provisioning Service resource has to be created. Changing this forces a new resource to be created.
func (r *Dps) ResourceGroupName() pulumi.StringOutput {
	return (pulumi.StringOutput)(r.s.State["resourceGroupName"])
}

// A `sku` block as defined below.
func (r *Dps) Sku() pulumi.Output {
	return r.s.State["sku"]
}

// A mapping of tags to assign to the resource.
func (r *Dps) Tags() pulumi.MapOutput {
	return (pulumi.MapOutput)(r.s.State["tags"])
}

// Input properties used for looking up and filtering Dps resources.
type DpsState struct {
	// A `linkedHub` block as defined below.
	LinkedHubs interface{}
	// Specifies the supported Azure location where the resource has to be createc. Changing this forces a new resource to be created.
	Location interface{}
	// Specifies the name of the Iot Device Provisioning Service resource. Changing this forces a new resource to be created.
	Name interface{}
	// The name of the resource group under which the Iot Device Provisioning Service resource has to be created. Changing this forces a new resource to be created.
	ResourceGroupName interface{}
	// A `sku` block as defined below.
	Sku interface{}
	// A mapping of tags to assign to the resource.
	Tags interface{}
}

// The set of arguments for constructing a Dps resource.
type DpsArgs struct {
	// A `linkedHub` block as defined below.
	LinkedHubs interface{}
	// Specifies the supported Azure location where the resource has to be createc. Changing this forces a new resource to be created.
	Location interface{}
	// Specifies the name of the Iot Device Provisioning Service resource. Changing this forces a new resource to be created.
	Name interface{}
	// The name of the resource group under which the Iot Device Provisioning Service resource has to be created. Changing this forces a new resource to be created.
	ResourceGroupName interface{}
	// A `sku` block as defined below.
	Sku interface{}
	// A mapping of tags to assign to the resource.
	Tags interface{}
}
