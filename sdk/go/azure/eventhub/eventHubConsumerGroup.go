// *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

// nolint: lll
package eventhub

import (
	"reflect"

	"github.com/pkg/errors"
	"github.com/pulumi/pulumi/sdk/go/pulumi"
)

// Manages a Event Hubs Consumer Group as a nested resource within an Event Hub.
// 
// > This content is derived from https://github.com/terraform-providers/terraform-provider-azurerm/blob/master/website/docs/r/eventhub_consumer_group_legacy.html.markdown.
type EventHubConsumerGroup struct {
	pulumi.CustomResourceState

	// Specifies the name of the EventHub. Changing this forces a new resource to be created.
	EventhubName pulumi.StringOutput `pulumi:"eventhubName"`
	// Specifies the name of the EventHub Consumer Group resource. Changing this forces a new resource to be created.
	Name pulumi.StringOutput `pulumi:"name"`
	// Specifies the name of the grandparent EventHub Namespace. Changing this forces a new resource to be created.
	NamespaceName pulumi.StringOutput `pulumi:"namespaceName"`
	// The name of the resource group in which the EventHub Consumer Group's grandparent Namespace exists. Changing this forces a new resource to be created.
	ResourceGroupName pulumi.StringOutput `pulumi:"resourceGroupName"`
	// Specifies the user metadata.
	UserMetadata pulumi.StringPtrOutput `pulumi:"userMetadata"`
}

// NewEventHubConsumerGroup registers a new resource with the given unique name, arguments, and options.
func NewEventHubConsumerGroup(ctx *pulumi.Context,
	name string, args *EventHubConsumerGroupArgs, opts ...pulumi.ResourceOption) (*EventHubConsumerGroup, error) {
	if args == nil || args.EventhubName == nil {
		return nil, errors.New("missing required argument 'EventhubName'")
	}
	if args == nil || args.NamespaceName == nil {
		return nil, errors.New("missing required argument 'NamespaceName'")
	}
	if args == nil || args.ResourceGroupName == nil {
		return nil, errors.New("missing required argument 'ResourceGroupName'")
	}
	if args == nil {
		args = &EventHubConsumerGroupArgs{}
	}
	var resource EventHubConsumerGroup
	err := ctx.RegisterResource("azure:eventhub/eventHubConsumerGroup:EventHubConsumerGroup", name, args, &resource, opts...)
	if err != nil {
		return nil, err
	}
	return &resource, nil
}

// GetEventHubConsumerGroup gets an existing EventHubConsumerGroup resource's state with the given name, ID, and optional
// state properties that are used to uniquely qualify the lookup (nil if not required).
func GetEventHubConsumerGroup(ctx *pulumi.Context,
	name string, id pulumi.IDInput, state *EventHubConsumerGroupState, opts ...pulumi.ResourceOption) (*EventHubConsumerGroup, error) {
	var resource EventHubConsumerGroup
	err := ctx.ReadResource("azure:eventhub/eventHubConsumerGroup:EventHubConsumerGroup", name, id, state, &resource, opts...)
	if err != nil {
		return nil, err
	}
	return &resource, nil
}

// Input properties used for looking up and filtering EventHubConsumerGroup resources.
type eventHubConsumerGroupState struct {
	// Specifies the name of the EventHub. Changing this forces a new resource to be created.
	EventhubName *string `pulumi:"eventhubName"`
	// Specifies the name of the EventHub Consumer Group resource. Changing this forces a new resource to be created.
	Name *string `pulumi:"name"`
	// Specifies the name of the grandparent EventHub Namespace. Changing this forces a new resource to be created.
	NamespaceName *string `pulumi:"namespaceName"`
	// The name of the resource group in which the EventHub Consumer Group's grandparent Namespace exists. Changing this forces a new resource to be created.
	ResourceGroupName *string `pulumi:"resourceGroupName"`
	// Specifies the user metadata.
	UserMetadata *string `pulumi:"userMetadata"`
}

type EventHubConsumerGroupState struct {
	// Specifies the name of the EventHub. Changing this forces a new resource to be created.
	EventhubName pulumi.StringPtrInput
	// Specifies the name of the EventHub Consumer Group resource. Changing this forces a new resource to be created.
	Name pulumi.StringPtrInput
	// Specifies the name of the grandparent EventHub Namespace. Changing this forces a new resource to be created.
	NamespaceName pulumi.StringPtrInput
	// The name of the resource group in which the EventHub Consumer Group's grandparent Namespace exists. Changing this forces a new resource to be created.
	ResourceGroupName pulumi.StringPtrInput
	// Specifies the user metadata.
	UserMetadata pulumi.StringPtrInput
}

func (EventHubConsumerGroupState) ElementType() reflect.Type {
	return reflect.TypeOf((*eventHubConsumerGroupState)(nil)).Elem()
}

type eventHubConsumerGroupArgs struct {
	// Specifies the name of the EventHub. Changing this forces a new resource to be created.
	EventhubName string `pulumi:"eventhubName"`
	// Specifies the name of the EventHub Consumer Group resource. Changing this forces a new resource to be created.
	Name *string `pulumi:"name"`
	// Specifies the name of the grandparent EventHub Namespace. Changing this forces a new resource to be created.
	NamespaceName string `pulumi:"namespaceName"`
	// The name of the resource group in which the EventHub Consumer Group's grandparent Namespace exists. Changing this forces a new resource to be created.
	ResourceGroupName string `pulumi:"resourceGroupName"`
	// Specifies the user metadata.
	UserMetadata *string `pulumi:"userMetadata"`
}

// The set of arguments for constructing a EventHubConsumerGroup resource.
type EventHubConsumerGroupArgs struct {
	// Specifies the name of the EventHub. Changing this forces a new resource to be created.
	EventhubName pulumi.StringInput
	// Specifies the name of the EventHub Consumer Group resource. Changing this forces a new resource to be created.
	Name pulumi.StringPtrInput
	// Specifies the name of the grandparent EventHub Namespace. Changing this forces a new resource to be created.
	NamespaceName pulumi.StringInput
	// The name of the resource group in which the EventHub Consumer Group's grandparent Namespace exists. Changing this forces a new resource to be created.
	ResourceGroupName pulumi.StringInput
	// Specifies the user metadata.
	UserMetadata pulumi.StringPtrInput
}

func (EventHubConsumerGroupArgs) ElementType() reflect.Type {
	return reflect.TypeOf((*eventHubConsumerGroupArgs)(nil)).Elem()
}

