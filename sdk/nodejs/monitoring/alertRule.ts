// *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "../types/input";
import * as outputs from "../types/output";
import * as utilities from "../utilities";

/**
 * Manages a [metric-based alert rule](https://docs.microsoft.com/en-us/azure/monitoring-and-diagnostics/monitor-quick-resource-metric-alert-portal) in Azure Monitor.
 * 
 * > **NOTE:** This resource has been [deprecated](https://docs.microsoft.com/en-us/azure/azure-monitor/platform/monitoring-classic-retirement) in favour of the `azure.monitoring.MetricAlert` resource and will be removed in the next major version of the AzureRM Provider. The new resource shares the same fields as this one, and information on migrating across can be found in this guide.
 * 
 * ## Example Usage (CPU Percentage of a virtual machine)
 * 
 * ```typescript
 * import * as pulumi from "@pulumi/pulumi";
 * import * as azure from "@pulumi/azure";
 * 
 * const example = new azure.monitoring.AlertRule("example", {
 *     aggregation: "Average",
 *     description: "An alert rule to watch the metric Percentage CPU",
 *     emailAction: {
 *         customEmails: ["some.user@example.com"],
 *         sendToServiceOwners: false,
 *     },
 *     enabled: true,
 *     location: azurerm_resource_group_example.location,
 *     metricName: "Percentage CPU",
 *     operator: "GreaterThan",
 *     period: "PT5M",
 *     resourceGroupName: azurerm_resource_group_example.name,
 *     resourceId: azurerm_virtual_machine_example.id,
 *     threshold: 75,
 *     webhookAction: {
 *         properties: {
 *             acceptance_test: "true",
 *             severity: "incredible",
 *         },
 *         serviceUri: "https://example.com/some-url",
 *     },
 * });
 * ```
 * 
 * ## Example Usage (Storage usage of a SQL Database)
 * 
 * ```typescript
 * import * as pulumi from "@pulumi/pulumi";
 * import * as azure from "@pulumi/azure";
 * 
 * const example = new azure.monitoring.AlertRule("example", {
 *     aggregation: "Maximum",
 *     description: "An alert rule to watch the metric Storage",
 *     emailAction: {
 *         customEmails: ["some.user@example.com"],
 *         sendToServiceOwners: false,
 *     },
 *     enabled: true,
 *     location: azurerm_resource_group_example.location,
 *     metricName: "storage",
 *     operator: "GreaterThan",
 *     period: "PT10M",
 *     resourceGroupName: azurerm_resource_group_example.name,
 *     resourceId: azurerm_sql_database_example.id,
 *     threshold: 1073741824,
 *     webhookAction: {
 *         properties: {
 *             acceptance_test: "true",
 *             severity: "incredible",
 *         },
 *         serviceUri: "https://example.com/some-url",
 *     },
 * });
 * ```
 *
 * > This content is derived from https://github.com/terraform-providers/terraform-provider-azurerm/blob/master/website/docs/r/metric_alertrule.html.markdown.
 */
export class AlertRule extends pulumi.CustomResource {
    /**
     * Get an existing AlertRule resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: AlertRuleState, opts?: pulumi.CustomResourceOptions): AlertRule {
        return new AlertRule(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'azure:monitoring/alertRule:AlertRule';

    /**
     * Returns true if the given object is an instance of AlertRule.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is AlertRule {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === AlertRule.__pulumiType;
    }

    /**
     * Defines how the metric data is combined over time. Possible values are `Average`, `Minimum`, `Maximum`, `Total`, and `Last`.
     */
    public readonly aggregation!: pulumi.Output<string>;
    /**
     * A verbose description of the alert rule that will be included in the alert email.
     */
    public readonly description!: pulumi.Output<string>;
    /**
     * A `emailAction` block as defined below.
     */
    public readonly emailAction!: pulumi.Output<outputs.monitoring.AlertRuleEmailAction>;
    /**
     * If `true`, the alert rule is enabled. Defaults to `true`.
     */
    public readonly enabled!: pulumi.Output<boolean | undefined>;
    /**
     * Specifies the supported Azure location where the resource exists. Changing this forces a new resource to be created.
     */
    public readonly location!: pulumi.Output<string>;
    /**
     * The metric that defines what the rule monitors.
     */
    public readonly metricName!: pulumi.Output<string>;
    /**
     * Specifies the name of the alert rule. Changing this forces a new resource to be created.
     */
    public readonly name!: pulumi.Output<string>;
    /**
     * The operator used to compare the metric data and the threshold. Possible values are `GreaterThan`, `GreaterThanOrEqual`, `LessThan`, and `LessThanOrEqual`.
     */
    public readonly operator!: pulumi.Output<string>;
    /**
     * The period of time formatted in [ISO 8601 duration format](https://en.wikipedia.org/wiki/ISO_8601#Durations) that is used to monitor the alert activity based on the threshold. The period must be between 5 minutes and 1 day.
     */
    public readonly period!: pulumi.Output<string>;
    /**
     * The name of the resource group in which to create the alert rule. Changing this forces a new resource to be created.
     */
    public readonly resourceGroupName!: pulumi.Output<string>;
    /**
     * The ID of the resource monitored by the alert rule.
     */
    public readonly resourceId!: pulumi.Output<string>;
    /**
     * A mapping of tags to assign to the resource. Changing this forces a new resource to be created.
     */
    public readonly tags!: pulumi.Output<{[key: string]: string}>;
    /**
     * The threshold value that activates the alert.
     */
    public readonly threshold!: pulumi.Output<number>;
    /**
     * A `webhookAction` block as defined below.
     */
    public readonly webhookAction!: pulumi.Output<outputs.monitoring.AlertRuleWebhookAction>;

    /**
     * Create a AlertRule resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: AlertRuleArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: AlertRuleArgs | AlertRuleState, opts?: pulumi.CustomResourceOptions) {
        let inputs: pulumi.Inputs = {};
        if (opts && opts.id) {
            const state = argsOrState as AlertRuleState | undefined;
            inputs["aggregation"] = state ? state.aggregation : undefined;
            inputs["description"] = state ? state.description : undefined;
            inputs["emailAction"] = state ? state.emailAction : undefined;
            inputs["enabled"] = state ? state.enabled : undefined;
            inputs["location"] = state ? state.location : undefined;
            inputs["metricName"] = state ? state.metricName : undefined;
            inputs["name"] = state ? state.name : undefined;
            inputs["operator"] = state ? state.operator : undefined;
            inputs["period"] = state ? state.period : undefined;
            inputs["resourceGroupName"] = state ? state.resourceGroupName : undefined;
            inputs["resourceId"] = state ? state.resourceId : undefined;
            inputs["tags"] = state ? state.tags : undefined;
            inputs["threshold"] = state ? state.threshold : undefined;
            inputs["webhookAction"] = state ? state.webhookAction : undefined;
        } else {
            const args = argsOrState as AlertRuleArgs | undefined;
            if (!args || args.aggregation === undefined) {
                throw new Error("Missing required property 'aggregation'");
            }
            if (!args || args.metricName === undefined) {
                throw new Error("Missing required property 'metricName'");
            }
            if (!args || args.operator === undefined) {
                throw new Error("Missing required property 'operator'");
            }
            if (!args || args.period === undefined) {
                throw new Error("Missing required property 'period'");
            }
            if (!args || args.resourceGroupName === undefined) {
                throw new Error("Missing required property 'resourceGroupName'");
            }
            if (!args || args.resourceId === undefined) {
                throw new Error("Missing required property 'resourceId'");
            }
            if (!args || args.threshold === undefined) {
                throw new Error("Missing required property 'threshold'");
            }
            inputs["aggregation"] = args ? args.aggregation : undefined;
            inputs["description"] = args ? args.description : undefined;
            inputs["emailAction"] = args ? args.emailAction : undefined;
            inputs["enabled"] = args ? args.enabled : undefined;
            inputs["location"] = args ? args.location : undefined;
            inputs["metricName"] = args ? args.metricName : undefined;
            inputs["name"] = args ? args.name : undefined;
            inputs["operator"] = args ? args.operator : undefined;
            inputs["period"] = args ? args.period : undefined;
            inputs["resourceGroupName"] = args ? args.resourceGroupName : undefined;
            inputs["resourceId"] = args ? args.resourceId : undefined;
            inputs["tags"] = args ? args.tags : undefined;
            inputs["threshold"] = args ? args.threshold : undefined;
            inputs["webhookAction"] = args ? args.webhookAction : undefined;
        }
        if (!opts) {
            opts = {}
        }

        if (!opts.version) {
            opts.version = utilities.getVersion();
        }
        super(AlertRule.__pulumiType, name, inputs, opts);
    }
}

/**
 * Input properties used for looking up and filtering AlertRule resources.
 */
export interface AlertRuleState {
    /**
     * Defines how the metric data is combined over time. Possible values are `Average`, `Minimum`, `Maximum`, `Total`, and `Last`.
     */
    readonly aggregation?: pulumi.Input<string>;
    /**
     * A verbose description of the alert rule that will be included in the alert email.
     */
    readonly description?: pulumi.Input<string>;
    /**
     * A `emailAction` block as defined below.
     */
    readonly emailAction?: pulumi.Input<inputs.monitoring.AlertRuleEmailAction>;
    /**
     * If `true`, the alert rule is enabled. Defaults to `true`.
     */
    readonly enabled?: pulumi.Input<boolean>;
    /**
     * Specifies the supported Azure location where the resource exists. Changing this forces a new resource to be created.
     */
    readonly location?: pulumi.Input<string>;
    /**
     * The metric that defines what the rule monitors.
     */
    readonly metricName?: pulumi.Input<string>;
    /**
     * Specifies the name of the alert rule. Changing this forces a new resource to be created.
     */
    readonly name?: pulumi.Input<string>;
    /**
     * The operator used to compare the metric data and the threshold. Possible values are `GreaterThan`, `GreaterThanOrEqual`, `LessThan`, and `LessThanOrEqual`.
     */
    readonly operator?: pulumi.Input<string>;
    /**
     * The period of time formatted in [ISO 8601 duration format](https://en.wikipedia.org/wiki/ISO_8601#Durations) that is used to monitor the alert activity based on the threshold. The period must be between 5 minutes and 1 day.
     */
    readonly period?: pulumi.Input<string>;
    /**
     * The name of the resource group in which to create the alert rule. Changing this forces a new resource to be created.
     */
    readonly resourceGroupName?: pulumi.Input<string>;
    /**
     * The ID of the resource monitored by the alert rule.
     */
    readonly resourceId?: pulumi.Input<string>;
    /**
     * A mapping of tags to assign to the resource. Changing this forces a new resource to be created.
     */
    readonly tags?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
    /**
     * The threshold value that activates the alert.
     */
    readonly threshold?: pulumi.Input<number>;
    /**
     * A `webhookAction` block as defined below.
     */
    readonly webhookAction?: pulumi.Input<inputs.monitoring.AlertRuleWebhookAction>;
}

/**
 * The set of arguments for constructing a AlertRule resource.
 */
export interface AlertRuleArgs {
    /**
     * Defines how the metric data is combined over time. Possible values are `Average`, `Minimum`, `Maximum`, `Total`, and `Last`.
     */
    readonly aggregation: pulumi.Input<string>;
    /**
     * A verbose description of the alert rule that will be included in the alert email.
     */
    readonly description?: pulumi.Input<string>;
    /**
     * A `emailAction` block as defined below.
     */
    readonly emailAction?: pulumi.Input<inputs.monitoring.AlertRuleEmailAction>;
    /**
     * If `true`, the alert rule is enabled. Defaults to `true`.
     */
    readonly enabled?: pulumi.Input<boolean>;
    /**
     * Specifies the supported Azure location where the resource exists. Changing this forces a new resource to be created.
     */
    readonly location?: pulumi.Input<string>;
    /**
     * The metric that defines what the rule monitors.
     */
    readonly metricName: pulumi.Input<string>;
    /**
     * Specifies the name of the alert rule. Changing this forces a new resource to be created.
     */
    readonly name?: pulumi.Input<string>;
    /**
     * The operator used to compare the metric data and the threshold. Possible values are `GreaterThan`, `GreaterThanOrEqual`, `LessThan`, and `LessThanOrEqual`.
     */
    readonly operator: pulumi.Input<string>;
    /**
     * The period of time formatted in [ISO 8601 duration format](https://en.wikipedia.org/wiki/ISO_8601#Durations) that is used to monitor the alert activity based on the threshold. The period must be between 5 minutes and 1 day.
     */
    readonly period: pulumi.Input<string>;
    /**
     * The name of the resource group in which to create the alert rule. Changing this forces a new resource to be created.
     */
    readonly resourceGroupName: pulumi.Input<string>;
    /**
     * The ID of the resource monitored by the alert rule.
     */
    readonly resourceId: pulumi.Input<string>;
    /**
     * A mapping of tags to assign to the resource. Changing this forces a new resource to be created.
     */
    readonly tags?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
    /**
     * The threshold value that activates the alert.
     */
    readonly threshold: pulumi.Input<number>;
    /**
     * A `webhookAction` block as defined below.
     */
    readonly webhookAction?: pulumi.Input<inputs.monitoring.AlertRuleWebhookAction>;
}
