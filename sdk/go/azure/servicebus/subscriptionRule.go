// *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

package servicebus

import (
	"reflect"

	"github.com/pkg/errors"
	"github.com/pulumi/pulumi/sdk/v2/go/pulumi"
)

// Manages a ServiceBus Subscription Rule.
//
// ## Example Usage
// ### SQL Filter)
//
// ```go
// package main
//
// import (
// 	"github.com/pulumi/pulumi-azure/sdk/v3/go/azure/core"
// 	"github.com/pulumi/pulumi-azure/sdk/v3/go/azure/servicebus"
// 	"github.com/pulumi/pulumi/sdk/v2/go/pulumi"
// )
//
// func main() {
// 	pulumi.Run(func(ctx *pulumi.Context) error {
// 		exampleResourceGroup, err := core.NewResourceGroup(ctx, "exampleResourceGroup", &core.ResourceGroupArgs{
// 			Location: pulumi.String("West Europe"),
// 		})
// 		if err != nil {
// 			return err
// 		}
// 		exampleNamespace, err := servicebus.NewNamespace(ctx, "exampleNamespace", &servicebus.NamespaceArgs{
// 			Location:          exampleResourceGroup.Location,
// 			ResourceGroupName: exampleResourceGroup.Name,
// 			Sku:               pulumi.String("Standard"),
// 			Tags: pulumi.StringMap{
// 				"source": pulumi.String("example"),
// 			},
// 		})
// 		if err != nil {
// 			return err
// 		}
// 		exampleTopic, err := servicebus.NewTopic(ctx, "exampleTopic", &servicebus.TopicArgs{
// 			ResourceGroupName:  exampleResourceGroup.Name,
// 			NamespaceName:      exampleNamespace.Name,
// 			EnablePartitioning: pulumi.Bool(true),
// 		})
// 		if err != nil {
// 			return err
// 		}
// 		exampleSubscription, err := servicebus.NewSubscription(ctx, "exampleSubscription", &servicebus.SubscriptionArgs{
// 			ResourceGroupName: exampleResourceGroup.Name,
// 			NamespaceName:     exampleNamespace.Name,
// 			TopicName:         exampleTopic.Name,
// 			MaxDeliveryCount:  pulumi.Int(1),
// 		})
// 		if err != nil {
// 			return err
// 		}
// 		_, err = servicebus.NewSubscriptionRule(ctx, "exampleSubscriptionRule", &servicebus.SubscriptionRuleArgs{
// 			ResourceGroupName: exampleResourceGroup.Name,
// 			NamespaceName:     exampleNamespace.Name,
// 			TopicName:         exampleTopic.Name,
// 			SubscriptionName:  exampleSubscription.Name,
// 			FilterType:        pulumi.String("SqlFilter"),
// 			SqlFilter:         pulumi.String("colour = 'red'"),
// 		})
// 		if err != nil {
// 			return err
// 		}
// 		return nil
// 	})
// }
// ```
// ### Correlation Filter)
//
// ```go
// package main
//
// import (
// 	"github.com/pulumi/pulumi-azure/sdk/v3/go/azure/core"
// 	"github.com/pulumi/pulumi-azure/sdk/v3/go/azure/servicebus"
// 	"github.com/pulumi/pulumi/sdk/v2/go/pulumi"
// )
//
// func main() {
// 	pulumi.Run(func(ctx *pulumi.Context) error {
// 		exampleResourceGroup, err := core.NewResourceGroup(ctx, "exampleResourceGroup", &core.ResourceGroupArgs{
// 			Location: pulumi.String("West Europe"),
// 		})
// 		if err != nil {
// 			return err
// 		}
// 		exampleNamespace, err := servicebus.NewNamespace(ctx, "exampleNamespace", &servicebus.NamespaceArgs{
// 			Location:          exampleResourceGroup.Location,
// 			ResourceGroupName: exampleResourceGroup.Name,
// 			Sku:               pulumi.String("Standard"),
// 			Tags: pulumi.StringMap{
// 				"source": pulumi.String("example"),
// 			},
// 		})
// 		if err != nil {
// 			return err
// 		}
// 		exampleTopic, err := servicebus.NewTopic(ctx, "exampleTopic", &servicebus.TopicArgs{
// 			ResourceGroupName:  exampleResourceGroup.Name,
// 			NamespaceName:      exampleNamespace.Name,
// 			EnablePartitioning: pulumi.Bool(true),
// 		})
// 		if err != nil {
// 			return err
// 		}
// 		exampleSubscription, err := servicebus.NewSubscription(ctx, "exampleSubscription", &servicebus.SubscriptionArgs{
// 			ResourceGroupName: exampleResourceGroup.Name,
// 			NamespaceName:     exampleNamespace.Name,
// 			TopicName:         exampleTopic.Name,
// 			MaxDeliveryCount:  pulumi.Int(1),
// 		})
// 		if err != nil {
// 			return err
// 		}
// 		_, err = servicebus.NewSubscriptionRule(ctx, "exampleSubscriptionRule", &servicebus.SubscriptionRuleArgs{
// 			ResourceGroupName: exampleResourceGroup.Name,
// 			NamespaceName:     exampleNamespace.Name,
// 			TopicName:         exampleTopic.Name,
// 			SubscriptionName:  exampleSubscription.Name,
// 			FilterType:        pulumi.String("CorrelationFilter"),
// 			CorrelationFilter: &servicebus.SubscriptionRuleCorrelationFilterArgs{
// 				CorrelationId: pulumi.String("high"),
// 				Label:         pulumi.String("red"),
// 				Properties: pulumi.StringMap{
// 					"customProperty": pulumi.String("value"),
// 				},
// 			},
// 		})
// 		if err != nil {
// 			return err
// 		}
// 		return nil
// 	})
// }
// ```
type SubscriptionRule struct {
	pulumi.CustomResourceState

	// Represents set of actions written in SQL language-based syntax that is performed against a BrokeredMessage.
	Action pulumi.StringPtrOutput `pulumi:"action"`
	// A `correlationFilter` block as documented below to be evaluated against a BrokeredMessage. Required when `filterType` is set to `CorrelationFilter`.
	CorrelationFilter SubscriptionRuleCorrelationFilterPtrOutput `pulumi:"correlationFilter"`
	// Type of filter to be applied to a BrokeredMessage. Possible values are `SqlFilter` and `CorrelationFilter`.
	FilterType pulumi.StringOutput `pulumi:"filterType"`
	// Specifies the name of the ServiceBus Subscription Rule. Changing this forces a new resource to be created.
	Name pulumi.StringOutput `pulumi:"name"`
	// The name of the ServiceBus Namespace in which the ServiceBus Topic exists. Changing this forces a new resource to be created.
	NamespaceName pulumi.StringOutput `pulumi:"namespaceName"`
	// The name of the resource group in the ServiceBus Namespace exists. Changing this forces a new resource to be created.
	ResourceGroupName pulumi.StringOutput `pulumi:"resourceGroupName"`
	// Represents a filter written in SQL language-based syntax that to be evaluated against a BrokeredMessage. Required when `filterType` is set to `SqlFilter`.
	SqlFilter pulumi.StringPtrOutput `pulumi:"sqlFilter"`
	// The name of the ServiceBus Subscription in which this Rule should be created. Changing this forces a new resource to be created.
	SubscriptionName pulumi.StringOutput `pulumi:"subscriptionName"`
	// The name of the ServiceBus Topic in which the ServiceBus Subscription exists. Changing this forces a new resource to be created.
	TopicName pulumi.StringOutput `pulumi:"topicName"`
}

// NewSubscriptionRule registers a new resource with the given unique name, arguments, and options.
func NewSubscriptionRule(ctx *pulumi.Context,
	name string, args *SubscriptionRuleArgs, opts ...pulumi.ResourceOption) (*SubscriptionRule, error) {
	if args == nil || args.FilterType == nil {
		return nil, errors.New("missing required argument 'FilterType'")
	}
	if args == nil || args.NamespaceName == nil {
		return nil, errors.New("missing required argument 'NamespaceName'")
	}
	if args == nil || args.ResourceGroupName == nil {
		return nil, errors.New("missing required argument 'ResourceGroupName'")
	}
	if args == nil || args.SubscriptionName == nil {
		return nil, errors.New("missing required argument 'SubscriptionName'")
	}
	if args == nil || args.TopicName == nil {
		return nil, errors.New("missing required argument 'TopicName'")
	}
	if args == nil {
		args = &SubscriptionRuleArgs{}
	}
	aliases := pulumi.Aliases([]pulumi.Alias{
		{
			Type: pulumi.String("azure:eventhub/subscriptionRule:SubscriptionRule"),
		},
	})
	opts = append(opts, aliases)
	var resource SubscriptionRule
	err := ctx.RegisterResource("azure:servicebus/subscriptionRule:SubscriptionRule", name, args, &resource, opts...)
	if err != nil {
		return nil, err
	}
	return &resource, nil
}

// GetSubscriptionRule gets an existing SubscriptionRule resource's state with the given name, ID, and optional
// state properties that are used to uniquely qualify the lookup (nil if not required).
func GetSubscriptionRule(ctx *pulumi.Context,
	name string, id pulumi.IDInput, state *SubscriptionRuleState, opts ...pulumi.ResourceOption) (*SubscriptionRule, error) {
	var resource SubscriptionRule
	err := ctx.ReadResource("azure:servicebus/subscriptionRule:SubscriptionRule", name, id, state, &resource, opts...)
	if err != nil {
		return nil, err
	}
	return &resource, nil
}

// Input properties used for looking up and filtering SubscriptionRule resources.
type subscriptionRuleState struct {
	// Represents set of actions written in SQL language-based syntax that is performed against a BrokeredMessage.
	Action *string `pulumi:"action"`
	// A `correlationFilter` block as documented below to be evaluated against a BrokeredMessage. Required when `filterType` is set to `CorrelationFilter`.
	CorrelationFilter *SubscriptionRuleCorrelationFilter `pulumi:"correlationFilter"`
	// Type of filter to be applied to a BrokeredMessage. Possible values are `SqlFilter` and `CorrelationFilter`.
	FilterType *string `pulumi:"filterType"`
	// Specifies the name of the ServiceBus Subscription Rule. Changing this forces a new resource to be created.
	Name *string `pulumi:"name"`
	// The name of the ServiceBus Namespace in which the ServiceBus Topic exists. Changing this forces a new resource to be created.
	NamespaceName *string `pulumi:"namespaceName"`
	// The name of the resource group in the ServiceBus Namespace exists. Changing this forces a new resource to be created.
	ResourceGroupName *string `pulumi:"resourceGroupName"`
	// Represents a filter written in SQL language-based syntax that to be evaluated against a BrokeredMessage. Required when `filterType` is set to `SqlFilter`.
	SqlFilter *string `pulumi:"sqlFilter"`
	// The name of the ServiceBus Subscription in which this Rule should be created. Changing this forces a new resource to be created.
	SubscriptionName *string `pulumi:"subscriptionName"`
	// The name of the ServiceBus Topic in which the ServiceBus Subscription exists. Changing this forces a new resource to be created.
	TopicName *string `pulumi:"topicName"`
}

type SubscriptionRuleState struct {
	// Represents set of actions written in SQL language-based syntax that is performed against a BrokeredMessage.
	Action pulumi.StringPtrInput
	// A `correlationFilter` block as documented below to be evaluated against a BrokeredMessage. Required when `filterType` is set to `CorrelationFilter`.
	CorrelationFilter SubscriptionRuleCorrelationFilterPtrInput
	// Type of filter to be applied to a BrokeredMessage. Possible values are `SqlFilter` and `CorrelationFilter`.
	FilterType pulumi.StringPtrInput
	// Specifies the name of the ServiceBus Subscription Rule. Changing this forces a new resource to be created.
	Name pulumi.StringPtrInput
	// The name of the ServiceBus Namespace in which the ServiceBus Topic exists. Changing this forces a new resource to be created.
	NamespaceName pulumi.StringPtrInput
	// The name of the resource group in the ServiceBus Namespace exists. Changing this forces a new resource to be created.
	ResourceGroupName pulumi.StringPtrInput
	// Represents a filter written in SQL language-based syntax that to be evaluated against a BrokeredMessage. Required when `filterType` is set to `SqlFilter`.
	SqlFilter pulumi.StringPtrInput
	// The name of the ServiceBus Subscription in which this Rule should be created. Changing this forces a new resource to be created.
	SubscriptionName pulumi.StringPtrInput
	// The name of the ServiceBus Topic in which the ServiceBus Subscription exists. Changing this forces a new resource to be created.
	TopicName pulumi.StringPtrInput
}

func (SubscriptionRuleState) ElementType() reflect.Type {
	return reflect.TypeOf((*subscriptionRuleState)(nil)).Elem()
}

type subscriptionRuleArgs struct {
	// Represents set of actions written in SQL language-based syntax that is performed against a BrokeredMessage.
	Action *string `pulumi:"action"`
	// A `correlationFilter` block as documented below to be evaluated against a BrokeredMessage. Required when `filterType` is set to `CorrelationFilter`.
	CorrelationFilter *SubscriptionRuleCorrelationFilter `pulumi:"correlationFilter"`
	// Type of filter to be applied to a BrokeredMessage. Possible values are `SqlFilter` and `CorrelationFilter`.
	FilterType string `pulumi:"filterType"`
	// Specifies the name of the ServiceBus Subscription Rule. Changing this forces a new resource to be created.
	Name *string `pulumi:"name"`
	// The name of the ServiceBus Namespace in which the ServiceBus Topic exists. Changing this forces a new resource to be created.
	NamespaceName string `pulumi:"namespaceName"`
	// The name of the resource group in the ServiceBus Namespace exists. Changing this forces a new resource to be created.
	ResourceGroupName string `pulumi:"resourceGroupName"`
	// Represents a filter written in SQL language-based syntax that to be evaluated against a BrokeredMessage. Required when `filterType` is set to `SqlFilter`.
	SqlFilter *string `pulumi:"sqlFilter"`
	// The name of the ServiceBus Subscription in which this Rule should be created. Changing this forces a new resource to be created.
	SubscriptionName string `pulumi:"subscriptionName"`
	// The name of the ServiceBus Topic in which the ServiceBus Subscription exists. Changing this forces a new resource to be created.
	TopicName string `pulumi:"topicName"`
}

// The set of arguments for constructing a SubscriptionRule resource.
type SubscriptionRuleArgs struct {
	// Represents set of actions written in SQL language-based syntax that is performed against a BrokeredMessage.
	Action pulumi.StringPtrInput
	// A `correlationFilter` block as documented below to be evaluated against a BrokeredMessage. Required when `filterType` is set to `CorrelationFilter`.
	CorrelationFilter SubscriptionRuleCorrelationFilterPtrInput
	// Type of filter to be applied to a BrokeredMessage. Possible values are `SqlFilter` and `CorrelationFilter`.
	FilterType pulumi.StringInput
	// Specifies the name of the ServiceBus Subscription Rule. Changing this forces a new resource to be created.
	Name pulumi.StringPtrInput
	// The name of the ServiceBus Namespace in which the ServiceBus Topic exists. Changing this forces a new resource to be created.
	NamespaceName pulumi.StringInput
	// The name of the resource group in the ServiceBus Namespace exists. Changing this forces a new resource to be created.
	ResourceGroupName pulumi.StringInput
	// Represents a filter written in SQL language-based syntax that to be evaluated against a BrokeredMessage. Required when `filterType` is set to `SqlFilter`.
	SqlFilter pulumi.StringPtrInput
	// The name of the ServiceBus Subscription in which this Rule should be created. Changing this forces a new resource to be created.
	SubscriptionName pulumi.StringInput
	// The name of the ServiceBus Topic in which the ServiceBus Subscription exists. Changing this forces a new resource to be created.
	TopicName pulumi.StringInput
}

func (SubscriptionRuleArgs) ElementType() reflect.Type {
	return reflect.TypeOf((*subscriptionRuleArgs)(nil)).Elem()
}
