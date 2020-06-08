// *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "../utilities";

/**
 * Manages a Event Hubs Consumer Group as a nested resource within an Event Hub.
 *
 * ## Example Usage
 *
 *
 *
 * ```typescript
 * import * as pulumi from "@pulumi/pulumi";
 * import * as azure from "@pulumi/azure";
 *
 * const exampleResourceGroup = new azure.core.ResourceGroup("exampleResourceGroup", {location: "West US"});
 * const exampleEventHubNamespace = new azure.eventhub.EventHubNamespace("exampleEventHubNamespace", {
 *     location: "West US",
 *     resourceGroupName: exampleResourceGroup.name,
 *     sku: "Basic",
 *     capacity: 2,
 *     tags: {
 *         environment: "Production",
 *     },
 * });
 * const exampleEventHub = new azure.eventhub.EventHub("exampleEventHub", {
 *     namespaceName: exampleEventHubNamespace.name,
 *     resourceGroupName: exampleResourceGroup.name,
 *     partitionCount: 2,
 *     messageRetention: 2,
 * });
 * const exampleConsumerGroup = new azure.eventhub.ConsumerGroup("exampleConsumerGroup", {
 *     namespaceName: exampleEventHubNamespace.name,
 *     eventhubName: exampleEventHub.name,
 *     resourceGroupName: exampleResourceGroup.name,
 *     userMetadata: "some-meta-data",
 * });
 * ```
 */
export class ConsumerGroup extends pulumi.CustomResource {
    /**
     * Get an existing ConsumerGroup resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: ConsumerGroupState, opts?: pulumi.CustomResourceOptions): ConsumerGroup {
        return new ConsumerGroup(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'azure:eventhub/consumerGroup:ConsumerGroup';

    /**
     * Returns true if the given object is an instance of ConsumerGroup.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is ConsumerGroup {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === ConsumerGroup.__pulumiType;
    }

    /**
     * Specifies the name of the EventHub. Changing this forces a new resource to be created.
     */
    public readonly eventhubName!: pulumi.Output<string>;
    /**
     * Specifies the name of the EventHub Consumer Group resource. Changing this forces a new resource to be created.
     */
    public readonly name!: pulumi.Output<string>;
    /**
     * Specifies the name of the grandparent EventHub Namespace. Changing this forces a new resource to be created.
     */
    public readonly namespaceName!: pulumi.Output<string>;
    /**
     * The name of the resource group in which the EventHub Consumer Group's grandparent Namespace exists. Changing this forces a new resource to be created.
     */
    public readonly resourceGroupName!: pulumi.Output<string>;
    /**
     * Specifies the user metadata.
     */
    public readonly userMetadata!: pulumi.Output<string | undefined>;

    /**
     * Create a ConsumerGroup resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: ConsumerGroupArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: ConsumerGroupArgs | ConsumerGroupState, opts?: pulumi.CustomResourceOptions) {
        let inputs: pulumi.Inputs = {};
        if (opts && opts.id) {
            const state = argsOrState as ConsumerGroupState | undefined;
            inputs["eventhubName"] = state ? state.eventhubName : undefined;
            inputs["name"] = state ? state.name : undefined;
            inputs["namespaceName"] = state ? state.namespaceName : undefined;
            inputs["resourceGroupName"] = state ? state.resourceGroupName : undefined;
            inputs["userMetadata"] = state ? state.userMetadata : undefined;
        } else {
            const args = argsOrState as ConsumerGroupArgs | undefined;
            if (!args || args.eventhubName === undefined) {
                throw new Error("Missing required property 'eventhubName'");
            }
            if (!args || args.namespaceName === undefined) {
                throw new Error("Missing required property 'namespaceName'");
            }
            if (!args || args.resourceGroupName === undefined) {
                throw new Error("Missing required property 'resourceGroupName'");
            }
            inputs["eventhubName"] = args ? args.eventhubName : undefined;
            inputs["name"] = args ? args.name : undefined;
            inputs["namespaceName"] = args ? args.namespaceName : undefined;
            inputs["resourceGroupName"] = args ? args.resourceGroupName : undefined;
            inputs["userMetadata"] = args ? args.userMetadata : undefined;
        }
        if (!opts) {
            opts = {}
        }

        if (!opts.version) {
            opts.version = utilities.getVersion();
        }
        const aliasOpts = { aliases: [{ type: "azure:eventhub/eventHubConsumerGroup:EventHubConsumerGroup" }] };
        opts = opts ? pulumi.mergeOptions(opts, aliasOpts) : aliasOpts;
        super(ConsumerGroup.__pulumiType, name, inputs, opts);
    }
}

/**
 * Input properties used for looking up and filtering ConsumerGroup resources.
 */
export interface ConsumerGroupState {
    /**
     * Specifies the name of the EventHub. Changing this forces a new resource to be created.
     */
    readonly eventhubName?: pulumi.Input<string>;
    /**
     * Specifies the name of the EventHub Consumer Group resource. Changing this forces a new resource to be created.
     */
    readonly name?: pulumi.Input<string>;
    /**
     * Specifies the name of the grandparent EventHub Namespace. Changing this forces a new resource to be created.
     */
    readonly namespaceName?: pulumi.Input<string>;
    /**
     * The name of the resource group in which the EventHub Consumer Group's grandparent Namespace exists. Changing this forces a new resource to be created.
     */
    readonly resourceGroupName?: pulumi.Input<string>;
    /**
     * Specifies the user metadata.
     */
    readonly userMetadata?: pulumi.Input<string>;
}

/**
 * The set of arguments for constructing a ConsumerGroup resource.
 */
export interface ConsumerGroupArgs {
    /**
     * Specifies the name of the EventHub. Changing this forces a new resource to be created.
     */
    readonly eventhubName: pulumi.Input<string>;
    /**
     * Specifies the name of the EventHub Consumer Group resource. Changing this forces a new resource to be created.
     */
    readonly name?: pulumi.Input<string>;
    /**
     * Specifies the name of the grandparent EventHub Namespace. Changing this forces a new resource to be created.
     */
    readonly namespaceName: pulumi.Input<string>;
    /**
     * The name of the resource group in which the EventHub Consumer Group's grandparent Namespace exists. Changing this forces a new resource to be created.
     */
    readonly resourceGroupName: pulumi.Input<string>;
    /**
     * Specifies the user metadata.
     */
    readonly userMetadata?: pulumi.Input<string>;
}
