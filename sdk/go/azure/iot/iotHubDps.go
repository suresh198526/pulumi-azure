// *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

package iot

import (
	"github.com/pkg/errors"
	"github.com/pulumi/pulumi/sdk/go/pulumi"
)

// Manages an IotHub Device Provisioning Service.
//
// > This content is derived from https://github.com/terraform-providers/terraform-provider-azurerm/blob/master/website/docs/r/iothub_dps.html.markdown.
type IotHubDps struct {
	s *pulumi.ResourceState
}

// NewIotHubDps registers a new resource with the given unique name, arguments, and options.
func NewIotHubDps(ctx *pulumi.Context,
	name string, args *IotHubDpsArgs, opts ...pulumi.ResourceOpt) (*IotHubDps, error) {
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
	inputs["allocationPolicy"] = nil
	inputs["deviceProvisioningHostName"] = nil
	inputs["idScope"] = nil
	inputs["serviceOperationsHostName"] = nil
	s, err := ctx.RegisterResource("azure:iot/iotHubDps:IotHubDps", name, true, inputs, opts...)
	if err != nil {
		return nil, err
	}
	return &IotHubDps{s: s}, nil
}

// GetIotHubDps gets an existing IotHubDps resource's state with the given name, ID, and optional
// state properties that are used to uniquely qualify the lookup (nil if not required).
func GetIotHubDps(ctx *pulumi.Context,
	name string, id pulumi.ID, state *IotHubDpsState, opts ...pulumi.ResourceOpt) (*IotHubDps, error) {
	inputs := make(map[string]interface{})
	if state != nil {
		inputs["allocationPolicy"] = state.AllocationPolicy
		inputs["deviceProvisioningHostName"] = state.DeviceProvisioningHostName
		inputs["idScope"] = state.IdScope
		inputs["linkedHubs"] = state.LinkedHubs
		inputs["location"] = state.Location
		inputs["name"] = state.Name
		inputs["resourceGroupName"] = state.ResourceGroupName
		inputs["serviceOperationsHostName"] = state.ServiceOperationsHostName
		inputs["sku"] = state.Sku
		inputs["tags"] = state.Tags
	}
	s, err := ctx.ReadResource("azure:iot/iotHubDps:IotHubDps", name, id, inputs, opts...)
	if err != nil {
		return nil, err
	}
	return &IotHubDps{s: s}, nil
}

// URN is this resource's unique name assigned by Pulumi.
func (r *IotHubDps) URN() pulumi.URNOutput {
	return r.s.URN()
}

// ID is this resource's unique identifier assigned by its provider.
func (r *IotHubDps) ID() pulumi.IDOutput {
	return r.s.ID()
}

// The allocation policy of the IoT Device Provisioning Service.
func (r *IotHubDps) AllocationPolicy() pulumi.StringOutput {
	return (pulumi.StringOutput)(r.s.State["allocationPolicy"])
}

// The device endpoint of the IoT Device Provisioning Service.
func (r *IotHubDps) DeviceProvisioningHostName() pulumi.StringOutput {
	return (pulumi.StringOutput)(r.s.State["deviceProvisioningHostName"])
}

// The unique identifier of the IoT Device Provisioning Service.
func (r *IotHubDps) IdScope() pulumi.StringOutput {
	return (pulumi.StringOutput)(r.s.State["idScope"])
}

// A `linkedHub` block as defined below.
func (r *IotHubDps) LinkedHubs() pulumi.ArrayOutput {
	return (pulumi.ArrayOutput)(r.s.State["linkedHubs"])
}

// Specifies the supported Azure location where the resource has to be createc. Changing this forces a new resource to be created.
func (r *IotHubDps) Location() pulumi.StringOutput {
	return (pulumi.StringOutput)(r.s.State["location"])
}

// Specifies the name of the Iot Device Provisioning Service resource. Changing this forces a new resource to be created.
func (r *IotHubDps) Name() pulumi.StringOutput {
	return (pulumi.StringOutput)(r.s.State["name"])
}

// The name of the resource group under which the Iot Device Provisioning Service resource has to be created. Changing this forces a new resource to be created.
func (r *IotHubDps) ResourceGroupName() pulumi.StringOutput {
	return (pulumi.StringOutput)(r.s.State["resourceGroupName"])
}

// The service endpoint of the IoT Device Provisioning Service.
func (r *IotHubDps) ServiceOperationsHostName() pulumi.StringOutput {
	return (pulumi.StringOutput)(r.s.State["serviceOperationsHostName"])
}

// A `sku` block as defined below.
func (r *IotHubDps) Sku() pulumi.Output {
	return r.s.State["sku"]
}

// A mapping of tags to assign to the resource.
func (r *IotHubDps) Tags() pulumi.MapOutput {
	return (pulumi.MapOutput)(r.s.State["tags"])
}

// Input properties used for looking up and filtering IotHubDps resources.
type IotHubDpsState struct {
	// The allocation policy of the IoT Device Provisioning Service.
	AllocationPolicy interface{}
	// The device endpoint of the IoT Device Provisioning Service.
	DeviceProvisioningHostName interface{}
	// The unique identifier of the IoT Device Provisioning Service.
	IdScope interface{}
	// A `linkedHub` block as defined below.
	LinkedHubs interface{}
	// Specifies the supported Azure location where the resource has to be createc. Changing this forces a new resource to be created.
	Location interface{}
	// Specifies the name of the Iot Device Provisioning Service resource. Changing this forces a new resource to be created.
	Name interface{}
	// The name of the resource group under which the Iot Device Provisioning Service resource has to be created. Changing this forces a new resource to be created.
	ResourceGroupName interface{}
	// The service endpoint of the IoT Device Provisioning Service.
	ServiceOperationsHostName interface{}
	// A `sku` block as defined below.
	Sku interface{}
	// A mapping of tags to assign to the resource.
	Tags interface{}
}

// The set of arguments for constructing a IotHubDps resource.
type IotHubDpsArgs struct {
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
