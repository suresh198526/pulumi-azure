// *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

package privatedns

import (
	"github.com/pkg/errors"
	"github.com/pulumi/pulumi/sdk/go/pulumi"
)

// Enables you to manage DNS PTR Records within Azure Private DNS.
//
// > This content is derived from https://github.com/terraform-providers/terraform-provider-azurerm/blob/master/website/docs/r/private_dns_ptr_record.html.markdown.
type PTRRecord struct {
	s *pulumi.ResourceState
}

// NewPTRRecord registers a new resource with the given unique name, arguments, and options.
func NewPTRRecord(ctx *pulumi.Context,
	name string, args *PTRRecordArgs, opts ...pulumi.ResourceOpt) (*PTRRecord, error) {
	if args == nil || args.Records == nil {
		return nil, errors.New("missing required argument 'Records'")
	}
	if args == nil || args.ResourceGroupName == nil {
		return nil, errors.New("missing required argument 'ResourceGroupName'")
	}
	if args == nil || args.Ttl == nil {
		return nil, errors.New("missing required argument 'Ttl'")
	}
	if args == nil || args.ZoneName == nil {
		return nil, errors.New("missing required argument 'ZoneName'")
	}
	inputs := make(map[string]interface{})
	if args == nil {
		inputs["name"] = nil
		inputs["records"] = nil
		inputs["resourceGroupName"] = nil
		inputs["tags"] = nil
		inputs["ttl"] = nil
		inputs["zoneName"] = nil
	} else {
		inputs["name"] = args.Name
		inputs["records"] = args.Records
		inputs["resourceGroupName"] = args.ResourceGroupName
		inputs["tags"] = args.Tags
		inputs["ttl"] = args.Ttl
		inputs["zoneName"] = args.ZoneName
	}
	s, err := ctx.RegisterResource("azure:privatedns/pTRRecord:PTRRecord", name, true, inputs, opts...)
	if err != nil {
		return nil, err
	}
	return &PTRRecord{s: s}, nil
}

// GetPTRRecord gets an existing PTRRecord resource's state with the given name, ID, and optional
// state properties that are used to uniquely qualify the lookup (nil if not required).
func GetPTRRecord(ctx *pulumi.Context,
	name string, id pulumi.ID, state *PTRRecordState, opts ...pulumi.ResourceOpt) (*PTRRecord, error) {
	inputs := make(map[string]interface{})
	if state != nil {
		inputs["name"] = state.Name
		inputs["records"] = state.Records
		inputs["resourceGroupName"] = state.ResourceGroupName
		inputs["tags"] = state.Tags
		inputs["ttl"] = state.Ttl
		inputs["zoneName"] = state.ZoneName
	}
	s, err := ctx.ReadResource("azure:privatedns/pTRRecord:PTRRecord", name, id, inputs, opts...)
	if err != nil {
		return nil, err
	}
	return &PTRRecord{s: s}, nil
}

// URN is this resource's unique name assigned by Pulumi.
func (r *PTRRecord) URN() pulumi.URNOutput {
	return r.s.URN()
}

// ID is this resource's unique identifier assigned by its provider.
func (r *PTRRecord) ID() pulumi.IDOutput {
	return r.s.ID()
}

// The name of the DNS PTR Record. Changing this forces a new resource to be created.
func (r *PTRRecord) Name() pulumi.StringOutput {
	return (pulumi.StringOutput)(r.s.State["name"])
}

// List of Fully Qualified Domain Names.
func (r *PTRRecord) Records() pulumi.ArrayOutput {
	return (pulumi.ArrayOutput)(r.s.State["records"])
}

// Specifies the resource group where the resource exists. Changing this forces a new resource to be created.
func (r *PTRRecord) ResourceGroupName() pulumi.StringOutput {
	return (pulumi.StringOutput)(r.s.State["resourceGroupName"])
}

// A mapping of tags to assign to the resource.
func (r *PTRRecord) Tags() pulumi.MapOutput {
	return (pulumi.MapOutput)(r.s.State["tags"])
}

func (r *PTRRecord) Ttl() pulumi.IntOutput {
	return (pulumi.IntOutput)(r.s.State["ttl"])
}

// Specifies the Private DNS Zone where the resource exists. Changing this forces a new resource to be created.
func (r *PTRRecord) ZoneName() pulumi.StringOutput {
	return (pulumi.StringOutput)(r.s.State["zoneName"])
}

// Input properties used for looking up and filtering PTRRecord resources.
type PTRRecordState struct {
	// The name of the DNS PTR Record. Changing this forces a new resource to be created.
	Name interface{}
	// List of Fully Qualified Domain Names.
	Records interface{}
	// Specifies the resource group where the resource exists. Changing this forces a new resource to be created.
	ResourceGroupName interface{}
	// A mapping of tags to assign to the resource.
	Tags interface{}
	Ttl interface{}
	// Specifies the Private DNS Zone where the resource exists. Changing this forces a new resource to be created.
	ZoneName interface{}
}

// The set of arguments for constructing a PTRRecord resource.
type PTRRecordArgs struct {
	// The name of the DNS PTR Record. Changing this forces a new resource to be created.
	Name interface{}
	// List of Fully Qualified Domain Names.
	Records interface{}
	// Specifies the resource group where the resource exists. Changing this forces a new resource to be created.
	ResourceGroupName interface{}
	// A mapping of tags to assign to the resource.
	Tags interface{}
	Ttl interface{}
	// Specifies the Private DNS Zone where the resource exists. Changing this forces a new resource to be created.
	ZoneName interface{}
}
