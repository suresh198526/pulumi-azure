// *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "../types/input";
import * as outputs from "../types/output";
import * as utilities from "../utilities";

/**
 * Manages a Event Hubs as a nested resource within a Event Hubs namespace.
 *
 * > This content is derived from https://github.com/terraform-providers/terraform-provider-azurerm/blob/master/website/docs/r/eventhub.html.markdown.
 */
export class EventHub extends pulumi.CustomResource {
    /**
     * Get an existing EventHub resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: EventHubState, opts?: pulumi.CustomResourceOptions): EventHub {
        return new EventHub(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'azure:eventhub/eventHub:EventHub';

    /**
     * Returns true if the given object is an instance of EventHub.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is EventHub {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === EventHub.__pulumiType;
    }

    /**
     * A `captureDescription` block as defined below.
     */
    public readonly captureDescription!: pulumi.Output<outputs.eventhub.EventHubCaptureDescription | undefined>;
    /**
     * Specifies the number of days to retain the events for this Event Hub. Needs to be between 1 and 7 days; or 1 day when using a Basic SKU for the parent EventHub Namespace.
     */
    public readonly messageRetention!: pulumi.Output<number>;
    /**
     * Specifies the name of the EventHub Namespace resource. Changing this forces a new resource to be created.
     */
    public readonly name!: pulumi.Output<string>;
    /**
     * Specifies the name of the EventHub Namespace. Changing this forces a new resource to be created.
     */
    public readonly namespaceName!: pulumi.Output<string>;
    /**
     * Specifies the current number of shards on the Event Hub. Changing this forces a new resource to be created.
     */
    public readonly partitionCount!: pulumi.Output<number>;
    /**
     * The identifiers for partitions created for Event Hubs.
     */
    public /*out*/ readonly partitionIds!: pulumi.Output<string[]>;
    /**
     * The name of the resource group in which the EventHub's parent Namespace exists. Changing this forces a new resource to be created.
     */
    public readonly resourceGroupName!: pulumi.Output<string>;

    /**
     * Create a EventHub resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: EventHubArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: EventHubArgs | EventHubState, opts?: pulumi.CustomResourceOptions) {
        let inputs: pulumi.Inputs = {};
        if (opts && opts.id) {
            const state = argsOrState as EventHubState | undefined;
            inputs["captureDescription"] = state ? state.captureDescription : undefined;
            inputs["messageRetention"] = state ? state.messageRetention : undefined;
            inputs["name"] = state ? state.name : undefined;
            inputs["namespaceName"] = state ? state.namespaceName : undefined;
            inputs["partitionCount"] = state ? state.partitionCount : undefined;
            inputs["partitionIds"] = state ? state.partitionIds : undefined;
            inputs["resourceGroupName"] = state ? state.resourceGroupName : undefined;
        } else {
            const args = argsOrState as EventHubArgs | undefined;
            if (!args || args.messageRetention === undefined) {
                throw new Error("Missing required property 'messageRetention'");
            }
            if (!args || args.namespaceName === undefined) {
                throw new Error("Missing required property 'namespaceName'");
            }
            if (!args || args.partitionCount === undefined) {
                throw new Error("Missing required property 'partitionCount'");
            }
            if (!args || args.resourceGroupName === undefined) {
                throw new Error("Missing required property 'resourceGroupName'");
            }
            inputs["captureDescription"] = args ? args.captureDescription : undefined;
            inputs["messageRetention"] = args ? args.messageRetention : undefined;
            inputs["name"] = args ? args.name : undefined;
            inputs["namespaceName"] = args ? args.namespaceName : undefined;
            inputs["partitionCount"] = args ? args.partitionCount : undefined;
            inputs["resourceGroupName"] = args ? args.resourceGroupName : undefined;
            inputs["partitionIds"] = undefined /*out*/;
        }
        if (!opts) {
            opts = {}
        }

        if (!opts.version) {
            opts.version = utilities.getVersion();
        }
        super(EventHub.__pulumiType, name, inputs, opts);
    }
}

/**
 * Input properties used for looking up and filtering EventHub resources.
 */
export interface EventHubState {
    /**
     * A `captureDescription` block as defined below.
     */
    readonly captureDescription?: pulumi.Input<inputs.eventhub.EventHubCaptureDescription>;
    /**
     * Specifies the number of days to retain the events for this Event Hub. Needs to be between 1 and 7 days; or 1 day when using a Basic SKU for the parent EventHub Namespace.
     */
    readonly messageRetention?: pulumi.Input<number>;
    /**
     * Specifies the name of the EventHub Namespace resource. Changing this forces a new resource to be created.
     */
    readonly name?: pulumi.Input<string>;
    /**
     * Specifies the name of the EventHub Namespace. Changing this forces a new resource to be created.
     */
    readonly namespaceName?: pulumi.Input<string>;
    /**
     * Specifies the current number of shards on the Event Hub. Changing this forces a new resource to be created.
     */
    readonly partitionCount?: pulumi.Input<number>;
    /**
     * The identifiers for partitions created for Event Hubs.
     */
    readonly partitionIds?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * The name of the resource group in which the EventHub's parent Namespace exists. Changing this forces a new resource to be created.
     */
    readonly resourceGroupName?: pulumi.Input<string>;
}

/**
 * The set of arguments for constructing a EventHub resource.
 */
export interface EventHubArgs {
    /**
     * A `captureDescription` block as defined below.
     */
    readonly captureDescription?: pulumi.Input<inputs.eventhub.EventHubCaptureDescription>;
    /**
     * Specifies the number of days to retain the events for this Event Hub. Needs to be between 1 and 7 days; or 1 day when using a Basic SKU for the parent EventHub Namespace.
     */
    readonly messageRetention: pulumi.Input<number>;
    /**
     * Specifies the name of the EventHub Namespace resource. Changing this forces a new resource to be created.
     */
    readonly name?: pulumi.Input<string>;
    /**
     * Specifies the name of the EventHub Namespace. Changing this forces a new resource to be created.
     */
    readonly namespaceName: pulumi.Input<string>;
    /**
     * Specifies the current number of shards on the Event Hub. Changing this forces a new resource to be created.
     */
    readonly partitionCount: pulumi.Input<number>;
    /**
     * The name of the resource group in which the EventHub's parent Namespace exists. Changing this forces a new resource to be created.
     */
    readonly resourceGroupName: pulumi.Input<string>;
}
