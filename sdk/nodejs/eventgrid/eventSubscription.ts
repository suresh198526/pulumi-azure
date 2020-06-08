// *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "../types/input";
import * as outputs from "../types/output";
import * as utilities from "../utilities";

/**
 * Manages an EventGrid Event Subscription
 *
 * ## Example Usage
 *
 *
 *
 * ```typescript
 * import * as pulumi from "@pulumi/pulumi";
 * import * as azure from "@pulumi/azure";
 *
 * const defaultResourceGroup = new azure.core.ResourceGroup("defaultResourceGroup", {location: "West US 2"});
 * const defaultAccount = new azure.storage.Account("defaultAccount", {
 *     resourceGroupName: defaultResourceGroup.name,
 *     location: defaultResourceGroup.location,
 *     accountTier: "Standard",
 *     accountReplicationType: "LRS",
 *     tags: {
 *         environment: "staging",
 *     },
 * });
 * const defaultQueue = new azure.storage.Queue("defaultQueue", {storageAccountName: defaultAccount.name});
 * const defaultEventSubscription = new azure.eventgrid.EventSubscription("defaultEventSubscription", {
 *     scope: defaultResourceGroup.id,
 *     storage_queue_endpoint: {
 *         storageAccountId: defaultAccount.id,
 *         queueName: defaultQueue.name,
 *     },
 * });
 * ```
 */
export class EventSubscription extends pulumi.CustomResource {
    /**
     * Get an existing EventSubscription resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: EventSubscriptionState, opts?: pulumi.CustomResourceOptions): EventSubscription {
        return new EventSubscription(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'azure:eventgrid/eventSubscription:EventSubscription';

    /**
     * Returns true if the given object is an instance of EventSubscription.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is EventSubscription {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === EventSubscription.__pulumiType;
    }

    /**
     * A `advancedFilter` block as defined below.
     */
    public readonly advancedFilter!: pulumi.Output<outputs.eventgrid.EventSubscriptionAdvancedFilter | undefined>;
    /**
     * Specifies the event delivery schema for the event subscription. Possible values include: `EventGridSchema`, `CloudEventSchemaV1_0`, `CustomInputSchema`. Defaults to `EventGridSchema`. Changing this forces a new resource to be created.
     */
    public readonly eventDeliverySchema!: pulumi.Output<string | undefined>;
    /**
     * A `eventhubEndpoint` block as defined below.
     *
     * @deprecated Deprecated in favour of `eventhub_endpoint_id`
     */
    public readonly eventhubEndpoint!: pulumi.Output<outputs.eventgrid.EventSubscriptionEventhubEndpoint>;
    /**
     * Specifies the id where the Event Hub is located.
     */
    public readonly eventhubEndpointId!: pulumi.Output<string>;
    /**
     * Specifies the expiration time of the event subscription (Datetime Format `RFC 3339`).
     */
    public readonly expirationTimeUtc!: pulumi.Output<string | undefined>;
    /**
     * A `hybridConnectionEndpoint` block as defined below.
     *
     * @deprecated Deprecated in favour of `hybrid_connection_endpoint_id`
     */
    public readonly hybridConnectionEndpoint!: pulumi.Output<outputs.eventgrid.EventSubscriptionHybridConnectionEndpoint>;
    /**
     * Specifies the id where the Hybrid Connection is located.
     */
    public readonly hybridConnectionEndpointId!: pulumi.Output<string>;
    /**
     * A list of applicable event types that need to be part of the event subscription.
     */
    public readonly includedEventTypes!: pulumi.Output<string[]>;
    /**
     * A list of labels to assign to the event subscription.
     */
    public readonly labels!: pulumi.Output<string[] | undefined>;
    /**
     * Specifies the name of the EventGrid Event Subscription resource. Changing this forces a new resource to be created.
     */
    public readonly name!: pulumi.Output<string>;
    /**
     * A `retryPolicy` block as defined below.
     */
    public readonly retryPolicy!: pulumi.Output<outputs.eventgrid.EventSubscriptionRetryPolicy>;
    /**
     * Specifies the scope at which the EventGrid Event Subscription should be created. Changing this forces a new resource to be created.
     */
    public readonly scope!: pulumi.Output<string>;
    /**
     * Specifies the id where the Service Bus Queue is located.
     */
    public readonly serviceBusQueueEndpointId!: pulumi.Output<string | undefined>;
    /**
     * Specifies the id where the Service Bus Topic is located.
     */
    public readonly serviceBusTopicEndpointId!: pulumi.Output<string | undefined>;
    /**
     * A `storageBlobDeadLetterDestination` block as defined below.
     */
    public readonly storageBlobDeadLetterDestination!: pulumi.Output<outputs.eventgrid.EventSubscriptionStorageBlobDeadLetterDestination | undefined>;
    /**
     * A `storageQueueEndpoint` block as defined below.
     */
    public readonly storageQueueEndpoint!: pulumi.Output<outputs.eventgrid.EventSubscriptionStorageQueueEndpoint | undefined>;
    /**
     * A `subjectFilter` block as defined below.
     */
    public readonly subjectFilter!: pulumi.Output<outputs.eventgrid.EventSubscriptionSubjectFilter | undefined>;
    /**
     * (Optional) Specifies the name of the topic to associate with the event subscription.
     */
    public readonly topicName!: pulumi.Output<string>;
    /**
     * A `webhookEndpoint` block as defined below.
     */
    public readonly webhookEndpoint!: pulumi.Output<outputs.eventgrid.EventSubscriptionWebhookEndpoint | undefined>;

    /**
     * Create a EventSubscription resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: EventSubscriptionArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: EventSubscriptionArgs | EventSubscriptionState, opts?: pulumi.CustomResourceOptions) {
        let inputs: pulumi.Inputs = {};
        if (opts && opts.id) {
            const state = argsOrState as EventSubscriptionState | undefined;
            inputs["advancedFilter"] = state ? state.advancedFilter : undefined;
            inputs["eventDeliverySchema"] = state ? state.eventDeliverySchema : undefined;
            inputs["eventhubEndpoint"] = state ? state.eventhubEndpoint : undefined;
            inputs["eventhubEndpointId"] = state ? state.eventhubEndpointId : undefined;
            inputs["expirationTimeUtc"] = state ? state.expirationTimeUtc : undefined;
            inputs["hybridConnectionEndpoint"] = state ? state.hybridConnectionEndpoint : undefined;
            inputs["hybridConnectionEndpointId"] = state ? state.hybridConnectionEndpointId : undefined;
            inputs["includedEventTypes"] = state ? state.includedEventTypes : undefined;
            inputs["labels"] = state ? state.labels : undefined;
            inputs["name"] = state ? state.name : undefined;
            inputs["retryPolicy"] = state ? state.retryPolicy : undefined;
            inputs["scope"] = state ? state.scope : undefined;
            inputs["serviceBusQueueEndpointId"] = state ? state.serviceBusQueueEndpointId : undefined;
            inputs["serviceBusTopicEndpointId"] = state ? state.serviceBusTopicEndpointId : undefined;
            inputs["storageBlobDeadLetterDestination"] = state ? state.storageBlobDeadLetterDestination : undefined;
            inputs["storageQueueEndpoint"] = state ? state.storageQueueEndpoint : undefined;
            inputs["subjectFilter"] = state ? state.subjectFilter : undefined;
            inputs["topicName"] = state ? state.topicName : undefined;
            inputs["webhookEndpoint"] = state ? state.webhookEndpoint : undefined;
        } else {
            const args = argsOrState as EventSubscriptionArgs | undefined;
            if (!args || args.scope === undefined) {
                throw new Error("Missing required property 'scope'");
            }
            inputs["advancedFilter"] = args ? args.advancedFilter : undefined;
            inputs["eventDeliverySchema"] = args ? args.eventDeliverySchema : undefined;
            inputs["eventhubEndpoint"] = args ? args.eventhubEndpoint : undefined;
            inputs["eventhubEndpointId"] = args ? args.eventhubEndpointId : undefined;
            inputs["expirationTimeUtc"] = args ? args.expirationTimeUtc : undefined;
            inputs["hybridConnectionEndpoint"] = args ? args.hybridConnectionEndpoint : undefined;
            inputs["hybridConnectionEndpointId"] = args ? args.hybridConnectionEndpointId : undefined;
            inputs["includedEventTypes"] = args ? args.includedEventTypes : undefined;
            inputs["labels"] = args ? args.labels : undefined;
            inputs["name"] = args ? args.name : undefined;
            inputs["retryPolicy"] = args ? args.retryPolicy : undefined;
            inputs["scope"] = args ? args.scope : undefined;
            inputs["serviceBusQueueEndpointId"] = args ? args.serviceBusQueueEndpointId : undefined;
            inputs["serviceBusTopicEndpointId"] = args ? args.serviceBusTopicEndpointId : undefined;
            inputs["storageBlobDeadLetterDestination"] = args ? args.storageBlobDeadLetterDestination : undefined;
            inputs["storageQueueEndpoint"] = args ? args.storageQueueEndpoint : undefined;
            inputs["subjectFilter"] = args ? args.subjectFilter : undefined;
            inputs["topicName"] = args ? args.topicName : undefined;
            inputs["webhookEndpoint"] = args ? args.webhookEndpoint : undefined;
        }
        if (!opts) {
            opts = {}
        }

        if (!opts.version) {
            opts.version = utilities.getVersion();
        }
        const aliasOpts = { aliases: [{ type: "azure:eventhub/eventSubscription:EventSubscription" }] };
        opts = opts ? pulumi.mergeOptions(opts, aliasOpts) : aliasOpts;
        super(EventSubscription.__pulumiType, name, inputs, opts);
    }
}

/**
 * Input properties used for looking up and filtering EventSubscription resources.
 */
export interface EventSubscriptionState {
    /**
     * A `advancedFilter` block as defined below.
     */
    readonly advancedFilter?: pulumi.Input<inputs.eventgrid.EventSubscriptionAdvancedFilter>;
    /**
     * Specifies the event delivery schema for the event subscription. Possible values include: `EventGridSchema`, `CloudEventSchemaV1_0`, `CustomInputSchema`. Defaults to `EventGridSchema`. Changing this forces a new resource to be created.
     */
    readonly eventDeliverySchema?: pulumi.Input<string>;
    /**
     * A `eventhubEndpoint` block as defined below.
     *
     * @deprecated Deprecated in favour of `eventhub_endpoint_id`
     */
    readonly eventhubEndpoint?: pulumi.Input<inputs.eventgrid.EventSubscriptionEventhubEndpoint>;
    /**
     * Specifies the id where the Event Hub is located.
     */
    readonly eventhubEndpointId?: pulumi.Input<string>;
    /**
     * Specifies the expiration time of the event subscription (Datetime Format `RFC 3339`).
     */
    readonly expirationTimeUtc?: pulumi.Input<string>;
    /**
     * A `hybridConnectionEndpoint` block as defined below.
     *
     * @deprecated Deprecated in favour of `hybrid_connection_endpoint_id`
     */
    readonly hybridConnectionEndpoint?: pulumi.Input<inputs.eventgrid.EventSubscriptionHybridConnectionEndpoint>;
    /**
     * Specifies the id where the Hybrid Connection is located.
     */
    readonly hybridConnectionEndpointId?: pulumi.Input<string>;
    /**
     * A list of applicable event types that need to be part of the event subscription.
     */
    readonly includedEventTypes?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * A list of labels to assign to the event subscription.
     */
    readonly labels?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * Specifies the name of the EventGrid Event Subscription resource. Changing this forces a new resource to be created.
     */
    readonly name?: pulumi.Input<string>;
    /**
     * A `retryPolicy` block as defined below.
     */
    readonly retryPolicy?: pulumi.Input<inputs.eventgrid.EventSubscriptionRetryPolicy>;
    /**
     * Specifies the scope at which the EventGrid Event Subscription should be created. Changing this forces a new resource to be created.
     */
    readonly scope?: pulumi.Input<string>;
    /**
     * Specifies the id where the Service Bus Queue is located.
     */
    readonly serviceBusQueueEndpointId?: pulumi.Input<string>;
    /**
     * Specifies the id where the Service Bus Topic is located.
     */
    readonly serviceBusTopicEndpointId?: pulumi.Input<string>;
    /**
     * A `storageBlobDeadLetterDestination` block as defined below.
     */
    readonly storageBlobDeadLetterDestination?: pulumi.Input<inputs.eventgrid.EventSubscriptionStorageBlobDeadLetterDestination>;
    /**
     * A `storageQueueEndpoint` block as defined below.
     */
    readonly storageQueueEndpoint?: pulumi.Input<inputs.eventgrid.EventSubscriptionStorageQueueEndpoint>;
    /**
     * A `subjectFilter` block as defined below.
     */
    readonly subjectFilter?: pulumi.Input<inputs.eventgrid.EventSubscriptionSubjectFilter>;
    /**
     * (Optional) Specifies the name of the topic to associate with the event subscription.
     */
    readonly topicName?: pulumi.Input<string>;
    /**
     * A `webhookEndpoint` block as defined below.
     */
    readonly webhookEndpoint?: pulumi.Input<inputs.eventgrid.EventSubscriptionWebhookEndpoint>;
}

/**
 * The set of arguments for constructing a EventSubscription resource.
 */
export interface EventSubscriptionArgs {
    /**
     * A `advancedFilter` block as defined below.
     */
    readonly advancedFilter?: pulumi.Input<inputs.eventgrid.EventSubscriptionAdvancedFilter>;
    /**
     * Specifies the event delivery schema for the event subscription. Possible values include: `EventGridSchema`, `CloudEventSchemaV1_0`, `CustomInputSchema`. Defaults to `EventGridSchema`. Changing this forces a new resource to be created.
     */
    readonly eventDeliverySchema?: pulumi.Input<string>;
    /**
     * A `eventhubEndpoint` block as defined below.
     *
     * @deprecated Deprecated in favour of `eventhub_endpoint_id`
     */
    readonly eventhubEndpoint?: pulumi.Input<inputs.eventgrid.EventSubscriptionEventhubEndpoint>;
    /**
     * Specifies the id where the Event Hub is located.
     */
    readonly eventhubEndpointId?: pulumi.Input<string>;
    /**
     * Specifies the expiration time of the event subscription (Datetime Format `RFC 3339`).
     */
    readonly expirationTimeUtc?: pulumi.Input<string>;
    /**
     * A `hybridConnectionEndpoint` block as defined below.
     *
     * @deprecated Deprecated in favour of `hybrid_connection_endpoint_id`
     */
    readonly hybridConnectionEndpoint?: pulumi.Input<inputs.eventgrid.EventSubscriptionHybridConnectionEndpoint>;
    /**
     * Specifies the id where the Hybrid Connection is located.
     */
    readonly hybridConnectionEndpointId?: pulumi.Input<string>;
    /**
     * A list of applicable event types that need to be part of the event subscription.
     */
    readonly includedEventTypes?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * A list of labels to assign to the event subscription.
     */
    readonly labels?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * Specifies the name of the EventGrid Event Subscription resource. Changing this forces a new resource to be created.
     */
    readonly name?: pulumi.Input<string>;
    /**
     * A `retryPolicy` block as defined below.
     */
    readonly retryPolicy?: pulumi.Input<inputs.eventgrid.EventSubscriptionRetryPolicy>;
    /**
     * Specifies the scope at which the EventGrid Event Subscription should be created. Changing this forces a new resource to be created.
     */
    readonly scope: pulumi.Input<string>;
    /**
     * Specifies the id where the Service Bus Queue is located.
     */
    readonly serviceBusQueueEndpointId?: pulumi.Input<string>;
    /**
     * Specifies the id where the Service Bus Topic is located.
     */
    readonly serviceBusTopicEndpointId?: pulumi.Input<string>;
    /**
     * A `storageBlobDeadLetterDestination` block as defined below.
     */
    readonly storageBlobDeadLetterDestination?: pulumi.Input<inputs.eventgrid.EventSubscriptionStorageBlobDeadLetterDestination>;
    /**
     * A `storageQueueEndpoint` block as defined below.
     */
    readonly storageQueueEndpoint?: pulumi.Input<inputs.eventgrid.EventSubscriptionStorageQueueEndpoint>;
    /**
     * A `subjectFilter` block as defined below.
     */
    readonly subjectFilter?: pulumi.Input<inputs.eventgrid.EventSubscriptionSubjectFilter>;
    /**
     * (Optional) Specifies the name of the topic to associate with the event subscription.
     */
    readonly topicName?: pulumi.Input<string>;
    /**
     * A `webhookEndpoint` block as defined below.
     */
    readonly webhookEndpoint?: pulumi.Input<inputs.eventgrid.EventSubscriptionWebhookEndpoint>;
}
