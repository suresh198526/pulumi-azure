// *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "../types/input";
import * as outputs from "../types/output";
import * as utilities from "../utilities";

/**
 * Manages a AutoScale Setting which can be applied to Virtual Machine Scale Sets, App Services and other scalable resources.
 * 
 * ## Example Usage
 * 
 * ```typescript
 * import * as pulumi from "@pulumi/pulumi";
 * import * as azure from "@pulumi/azure";
 * 
 * const exampleResourceGroup = new azure.core.ResourceGroup("example", {
 *     location: "West US",
 * });
 * const exampleScaleSet = new azure.compute.ScaleSet("example", {});
 * const exampleAutoscaleSetting = new azure.monitoring.AutoscaleSetting("example", {
 *     location: exampleResourceGroup.location,
 *     notification: {
 *         email: {
 *             customEmails: ["admin@contoso.com"],
 *             sendToSubscriptionAdministrator: true,
 *             sendToSubscriptionCoAdministrator: true,
 *         },
 *     },
 *     profiles: [{
 *         capacity: {
 *             default: 1,
 *             maximum: 10,
 *             minimum: 1,
 *         },
 *         name: "defaultProfile",
 *         rules: [
 *             {
 *                 metricTrigger: {
 *                     metricName: "Percentage CPU",
 *                     metricResourceId: exampleScaleSet.id,
 *                     operator: "GreaterThan",
 *                     statistic: "Average",
 *                     threshold: 75,
 *                     timeAggregation: "Average",
 *                     timeGrain: "PT1M",
 *                     timeWindow: "PT5M",
 *                 },
 *                 scaleAction: {
 *                     cooldown: "PT1M",
 *                     direction: "Increase",
 *                     type: "ChangeCount",
 *                     value: 1,
 *                 },
 *             },
 *             {
 *                 metricTrigger: {
 *                     metricName: "Percentage CPU",
 *                     metricResourceId: exampleScaleSet.id,
 *                     operator: "LessThan",
 *                     statistic: "Average",
 *                     threshold: 25,
 *                     timeAggregation: "Average",
 *                     timeGrain: "PT1M",
 *                     timeWindow: "PT5M",
 *                 },
 *                 scaleAction: {
 *                     cooldown: "PT1M",
 *                     direction: "Decrease",
 *                     type: "ChangeCount",
 *                     value: 1,
 *                 },
 *             },
 *         ],
 *     }],
 *     resourceGroupName: exampleResourceGroup.name,
 *     targetResourceId: exampleScaleSet.id,
 * });
 * ```
 * 
 * ## Example Usage (repeating on weekends)
 * 
 * ```typescript
 * import * as pulumi from "@pulumi/pulumi";
 * import * as azure from "@pulumi/azure";
 * 
 * const exampleResourceGroup = new azure.core.ResourceGroup("example", {
 *     location: "West US",
 * });
 * const exampleScaleSet = new azure.compute.ScaleSet("example", {});
 * const exampleAutoscaleSetting = new azure.monitoring.AutoscaleSetting("example", {
 *     location: exampleResourceGroup.location,
 *     notification: {
 *         email: {
 *             customEmails: ["admin@contoso.com"],
 *             sendToSubscriptionAdministrator: true,
 *             sendToSubscriptionCoAdministrator: true,
 *         },
 *     },
 *     profiles: [{
 *         capacity: {
 *             default: 1,
 *             maximum: 10,
 *             minimum: 1,
 *         },
 *         name: "Weekends",
 *         recurrence: {
 *             days: [
 *                 "Saturday",
 *                 "Sunday",
 *             ],
 *             frequency: "Week",
 *             hours: 12,
 *             minutes: 0,
 *             timezone: "Pacific Standard Time",
 *         },
 *         rules: [
 *             {
 *                 metricTrigger: {
 *                     metricName: "Percentage CPU",
 *                     metricResourceId: exampleScaleSet.id,
 *                     operator: "GreaterThan",
 *                     statistic: "Average",
 *                     threshold: 90,
 *                     timeAggregation: "Average",
 *                     timeGrain: "PT1M",
 *                     timeWindow: "PT5M",
 *                 },
 *                 scaleAction: {
 *                     cooldown: "PT1M",
 *                     direction: "Increase",
 *                     type: "ChangeCount",
 *                     value: 2,
 *                 },
 *             },
 *             {
 *                 metricTrigger: {
 *                     metricName: "Percentage CPU",
 *                     metricResourceId: exampleScaleSet.id,
 *                     operator: "LessThan",
 *                     statistic: "Average",
 *                     threshold: 10,
 *                     timeAggregation: "Average",
 *                     timeGrain: "PT1M",
 *                     timeWindow: "PT5M",
 *                 },
 *                 scaleAction: {
 *                     cooldown: "PT1M",
 *                     direction: "Decrease",
 *                     type: "ChangeCount",
 *                     value: 2,
 *                 },
 *             },
 *         ],
 *     }],
 *     resourceGroupName: exampleResourceGroup.name,
 *     targetResourceId: exampleScaleSet.id,
 * });
 * ```
 * 
 * ## Example Usage (for fixed dates)
 * 
 * ```typescript
 * import * as pulumi from "@pulumi/pulumi";
 * import * as azure from "@pulumi/azure";
 * 
 * const exampleResourceGroup = new azure.core.ResourceGroup("example", {
 *     location: "West US",
 * });
 * const exampleScaleSet = new azure.compute.ScaleSet("example", {});
 * const exampleAutoscaleSetting = new azure.monitoring.AutoscaleSetting("example", {
 *     enabled: true,
 *     location: exampleResourceGroup.location,
 *     notification: {
 *         email: {
 *             customEmails: ["admin@contoso.com"],
 *             sendToSubscriptionAdministrator: true,
 *             sendToSubscriptionCoAdministrator: true,
 *         },
 *     },
 *     profiles: [{
 *         capacity: {
 *             default: 1,
 *             maximum: 10,
 *             minimum: 1,
 *         },
 *         fixedDate: {
 *             end: "2020-07-31T23:59:59Z",
 *             start: "2020-07-01T00:00:00Z",
 *             timezone: "Pacific Standard Time",
 *         },
 *         name: "forJuly",
 *         rules: [
 *             {
 *                 metricTrigger: {
 *                     metricName: "Percentage CPU",
 *                     metricResourceId: exampleScaleSet.id,
 *                     operator: "GreaterThan",
 *                     statistic: "Average",
 *                     threshold: 90,
 *                     timeAggregation: "Average",
 *                     timeGrain: "PT1M",
 *                     timeWindow: "PT5M",
 *                 },
 *                 scaleAction: {
 *                     cooldown: "PT1M",
 *                     direction: "Increase",
 *                     type: "ChangeCount",
 *                     value: 2,
 *                 },
 *             },
 *             {
 *                 metricTrigger: {
 *                     metricName: "Percentage CPU",
 *                     metricResourceId: exampleScaleSet.id,
 *                     operator: "LessThan",
 *                     statistic: "Average",
 *                     threshold: 10,
 *                     timeAggregation: "Average",
 *                     timeGrain: "PT1M",
 *                     timeWindow: "PT5M",
 *                 },
 *                 scaleAction: {
 *                     cooldown: "PT1M",
 *                     direction: "Decrease",
 *                     type: "ChangeCount",
 *                     value: 2,
 *                 },
 *             },
 *         ],
 *     }],
 *     resourceGroupName: exampleResourceGroup.name,
 *     targetResourceId: exampleScaleSet.id,
 * });
 * ```
 *
 * > This content is derived from https://github.com/terraform-providers/terraform-provider-azurerm/blob/master/website/docs/r/monitor_autoscale_setting.html.markdown.
 */
export class AutoscaleSetting extends pulumi.CustomResource {
    /**
     * Get an existing AutoscaleSetting resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: AutoscaleSettingState, opts?: pulumi.CustomResourceOptions): AutoscaleSetting {
        return new AutoscaleSetting(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'azure:monitoring/autoscaleSetting:AutoscaleSetting';

    /**
     * Returns true if the given object is an instance of AutoscaleSetting.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is AutoscaleSetting {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === AutoscaleSetting.__pulumiType;
    }

    /**
     * Specifies whether automatic scaling is enabled for the target resource. Defaults to `true`.
     */
    public readonly enabled!: pulumi.Output<boolean | undefined>;
    /**
     * Specifies the supported Azure location where the AutoScale Setting should exist. Changing this forces a new resource to be created.
     */
    public readonly location!: pulumi.Output<string>;
    /**
     * The name of the AutoScale Setting. Changing this forces a new resource to be created.
     */
    public readonly name!: pulumi.Output<string>;
    /**
     * Specifies a `notification` block as defined below.
     */
    public readonly notification!: pulumi.Output<outputs.monitoring.AutoscaleSettingNotification | undefined>;
    /**
     * Specifies one or more (up to 20) `profile` blocks as defined below.
     */
    public readonly profiles!: pulumi.Output<outputs.monitoring.AutoscaleSettingProfile[]>;
    /**
     * The name of the Resource Group in the AutoScale Setting should be created. Changing this forces a new resource to be created.
     */
    public readonly resourceGroupName!: pulumi.Output<string>;
    /**
     * A mapping of tags to assign to the resource.
     */
    public readonly tags!: pulumi.Output<{[key: string]: any}>;
    /**
     * Specifies the resource ID of the resource that the autoscale setting should be added to.
     */
    public readonly targetResourceId!: pulumi.Output<string>;

    /**
     * Create a AutoscaleSetting resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: AutoscaleSettingArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: AutoscaleSettingArgs | AutoscaleSettingState, opts?: pulumi.CustomResourceOptions) {
        let inputs: pulumi.Inputs = {};
        if (opts && opts.id) {
            const state = argsOrState as AutoscaleSettingState | undefined;
            inputs["enabled"] = state ? state.enabled : undefined;
            inputs["location"] = state ? state.location : undefined;
            inputs["name"] = state ? state.name : undefined;
            inputs["notification"] = state ? state.notification : undefined;
            inputs["profiles"] = state ? state.profiles : undefined;
            inputs["resourceGroupName"] = state ? state.resourceGroupName : undefined;
            inputs["tags"] = state ? state.tags : undefined;
            inputs["targetResourceId"] = state ? state.targetResourceId : undefined;
        } else {
            const args = argsOrState as AutoscaleSettingArgs | undefined;
            if (!args || args.profiles === undefined) {
                throw new Error("Missing required property 'profiles'");
            }
            if (!args || args.resourceGroupName === undefined) {
                throw new Error("Missing required property 'resourceGroupName'");
            }
            if (!args || args.targetResourceId === undefined) {
                throw new Error("Missing required property 'targetResourceId'");
            }
            inputs["enabled"] = args ? args.enabled : undefined;
            inputs["location"] = args ? args.location : undefined;
            inputs["name"] = args ? args.name : undefined;
            inputs["notification"] = args ? args.notification : undefined;
            inputs["profiles"] = args ? args.profiles : undefined;
            inputs["resourceGroupName"] = args ? args.resourceGroupName : undefined;
            inputs["tags"] = args ? args.tags : undefined;
            inputs["targetResourceId"] = args ? args.targetResourceId : undefined;
        }
        if (!opts) {
            opts = {}
        }

        if (!opts.version) {
            opts.version = utilities.getVersion();
        }
        super(AutoscaleSetting.__pulumiType, name, inputs, opts);
    }
}

/**
 * Input properties used for looking up and filtering AutoscaleSetting resources.
 */
export interface AutoscaleSettingState {
    /**
     * Specifies whether automatic scaling is enabled for the target resource. Defaults to `true`.
     */
    readonly enabled?: pulumi.Input<boolean>;
    /**
     * Specifies the supported Azure location where the AutoScale Setting should exist. Changing this forces a new resource to be created.
     */
    readonly location?: pulumi.Input<string>;
    /**
     * The name of the AutoScale Setting. Changing this forces a new resource to be created.
     */
    readonly name?: pulumi.Input<string>;
    /**
     * Specifies a `notification` block as defined below.
     */
    readonly notification?: pulumi.Input<inputs.monitoring.AutoscaleSettingNotification>;
    /**
     * Specifies one or more (up to 20) `profile` blocks as defined below.
     */
    readonly profiles?: pulumi.Input<pulumi.Input<inputs.monitoring.AutoscaleSettingProfile>[]>;
    /**
     * The name of the Resource Group in the AutoScale Setting should be created. Changing this forces a new resource to be created.
     */
    readonly resourceGroupName?: pulumi.Input<string>;
    /**
     * A mapping of tags to assign to the resource.
     */
    readonly tags?: pulumi.Input<{[key: string]: any}>;
    /**
     * Specifies the resource ID of the resource that the autoscale setting should be added to.
     */
    readonly targetResourceId?: pulumi.Input<string>;
}

/**
 * The set of arguments for constructing a AutoscaleSetting resource.
 */
export interface AutoscaleSettingArgs {
    /**
     * Specifies whether automatic scaling is enabled for the target resource. Defaults to `true`.
     */
    readonly enabled?: pulumi.Input<boolean>;
    /**
     * Specifies the supported Azure location where the AutoScale Setting should exist. Changing this forces a new resource to be created.
     */
    readonly location?: pulumi.Input<string>;
    /**
     * The name of the AutoScale Setting. Changing this forces a new resource to be created.
     */
    readonly name?: pulumi.Input<string>;
    /**
     * Specifies a `notification` block as defined below.
     */
    readonly notification?: pulumi.Input<inputs.monitoring.AutoscaleSettingNotification>;
    /**
     * Specifies one or more (up to 20) `profile` blocks as defined below.
     */
    readonly profiles: pulumi.Input<pulumi.Input<inputs.monitoring.AutoscaleSettingProfile>[]>;
    /**
     * The name of the Resource Group in the AutoScale Setting should be created. Changing this forces a new resource to be created.
     */
    readonly resourceGroupName: pulumi.Input<string>;
    /**
     * A mapping of tags to assign to the resource.
     */
    readonly tags?: pulumi.Input<{[key: string]: any}>;
    /**
     * Specifies the resource ID of the resource that the autoscale setting should be added to.
     */
    readonly targetResourceId: pulumi.Input<string>;
}
