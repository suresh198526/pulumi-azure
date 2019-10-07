// *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

package eventhub

import (
	"github.com/pkg/errors"
	"github.com/pulumi/pulumi/sdk/go/pulumi"
)

// Manages an Disaster Recovery Config for an Event Hub Namespace.
//
// > This content is derived from https://github.com/terraform-providers/terraform-provider-azurerm/blob/master/website/docs/r/eventhub_namespace_disaster_recovery_config.html.markdown.
type EventhubNamespaceDisasterRecoveryConfig struct {
	s *pulumi.ResourceState
}

// NewEventhubNamespaceDisasterRecoveryConfig registers a new resource with the given unique name, arguments, and options.
func NewEventhubNamespaceDisasterRecoveryConfig(ctx *pulumi.Context,
	name string, args *EventhubNamespaceDisasterRecoveryConfigArgs, opts ...pulumi.ResourceOpt) (*EventhubNamespaceDisasterRecoveryConfig, error) {
	if args == nil || args.NamespaceName == nil {
		return nil, errors.New("missing required argument 'NamespaceName'")
	}
	if args == nil || args.PartnerNamespaceId == nil {
		return nil, errors.New("missing required argument 'PartnerNamespaceId'")
	}
	if args == nil || args.ResourceGroupName == nil {
		return nil, errors.New("missing required argument 'ResourceGroupName'")
	}
	inputs := make(map[string]interface{})
	if args == nil {
		inputs["alternateName"] = nil
		inputs["name"] = nil
		inputs["namespaceName"] = nil
		inputs["partnerNamespaceId"] = nil
		inputs["resourceGroupName"] = nil
	} else {
		inputs["alternateName"] = args.AlternateName
		inputs["name"] = args.Name
		inputs["namespaceName"] = args.NamespaceName
		inputs["partnerNamespaceId"] = args.PartnerNamespaceId
		inputs["resourceGroupName"] = args.ResourceGroupName
	}
	s, err := ctx.RegisterResource("azure:eventhub/eventhubNamespaceDisasterRecoveryConfig:EventhubNamespaceDisasterRecoveryConfig", name, true, inputs, opts...)
	if err != nil {
		return nil, err
	}
	return &EventhubNamespaceDisasterRecoveryConfig{s: s}, nil
}

// GetEventhubNamespaceDisasterRecoveryConfig gets an existing EventhubNamespaceDisasterRecoveryConfig resource's state with the given name, ID, and optional
// state properties that are used to uniquely qualify the lookup (nil if not required).
func GetEventhubNamespaceDisasterRecoveryConfig(ctx *pulumi.Context,
	name string, id pulumi.ID, state *EventhubNamespaceDisasterRecoveryConfigState, opts ...pulumi.ResourceOpt) (*EventhubNamespaceDisasterRecoveryConfig, error) {
	inputs := make(map[string]interface{})
	if state != nil {
		inputs["alternateName"] = state.AlternateName
		inputs["name"] = state.Name
		inputs["namespaceName"] = state.NamespaceName
		inputs["partnerNamespaceId"] = state.PartnerNamespaceId
		inputs["resourceGroupName"] = state.ResourceGroupName
	}
	s, err := ctx.ReadResource("azure:eventhub/eventhubNamespaceDisasterRecoveryConfig:EventhubNamespaceDisasterRecoveryConfig", name, id, inputs, opts...)
	if err != nil {
		return nil, err
	}
	return &EventhubNamespaceDisasterRecoveryConfig{s: s}, nil
}

// URN is this resource's unique name assigned by Pulumi.
func (r *EventhubNamespaceDisasterRecoveryConfig) URN() *pulumi.URNOutput {
	return r.s.URN()
}

// ID is this resource's unique identifier assigned by its provider.
func (r *EventhubNamespaceDisasterRecoveryConfig) ID() *pulumi.IDOutput {
	return r.s.ID()
}

// An alternate name to use when the Disaster Recovery Config's name is the same as the replicated namespace's name. 
func (r *EventhubNamespaceDisasterRecoveryConfig) AlternateName() *pulumi.StringOutput {
	return (*pulumi.StringOutput)(r.s.State["alternateName"])
}

// Specifies the name of the Disaster Recovery Config. Changing this forces a new resource to be created.
func (r *EventhubNamespaceDisasterRecoveryConfig) Name() *pulumi.StringOutput {
	return (*pulumi.StringOutput)(r.s.State["name"])
}

// Specifies the name of the primary EventHub Namespace to replicate. Changing this forces a new resource to be created.
func (r *EventhubNamespaceDisasterRecoveryConfig) NamespaceName() *pulumi.StringOutput {
	return (*pulumi.StringOutput)(r.s.State["namespaceName"])
}

// The ID of the EventHub Namespace to replicate to.
func (r *EventhubNamespaceDisasterRecoveryConfig) PartnerNamespaceId() *pulumi.StringOutput {
	return (*pulumi.StringOutput)(r.s.State["partnerNamespaceId"])
}

// The name of the resource group in which the Disaster Recovery Config exists. Changing this forces a new resource to be created.
func (r *EventhubNamespaceDisasterRecoveryConfig) ResourceGroupName() *pulumi.StringOutput {
	return (*pulumi.StringOutput)(r.s.State["resourceGroupName"])
}

// Input properties used for looking up and filtering EventhubNamespaceDisasterRecoveryConfig resources.
type EventhubNamespaceDisasterRecoveryConfigState struct {
	// An alternate name to use when the Disaster Recovery Config's name is the same as the replicated namespace's name. 
	AlternateName interface{}
	// Specifies the name of the Disaster Recovery Config. Changing this forces a new resource to be created.
	Name interface{}
	// Specifies the name of the primary EventHub Namespace to replicate. Changing this forces a new resource to be created.
	NamespaceName interface{}
	// The ID of the EventHub Namespace to replicate to.
	PartnerNamespaceId interface{}
	// The name of the resource group in which the Disaster Recovery Config exists. Changing this forces a new resource to be created.
	ResourceGroupName interface{}
}

// The set of arguments for constructing a EventhubNamespaceDisasterRecoveryConfig resource.
type EventhubNamespaceDisasterRecoveryConfigArgs struct {
	// An alternate name to use when the Disaster Recovery Config's name is the same as the replicated namespace's name. 
	AlternateName interface{}
	// Specifies the name of the Disaster Recovery Config. Changing this forces a new resource to be created.
	Name interface{}
	// Specifies the name of the primary EventHub Namespace to replicate. Changing this forces a new resource to be created.
	NamespaceName interface{}
	// The ID of the EventHub Namespace to replicate to.
	PartnerNamespaceId interface{}
	// The name of the resource group in which the Disaster Recovery Config exists. Changing this forces a new resource to be created.
	ResourceGroupName interface{}
}
