// *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import { input as inputs, output as outputs } from "../types";
import * as utilities from "../utilities";

/**
 * Manages an AlertingAction Scheduled Query Rules resource within Azure Monitor.
 *
 * ## Import
 *
 * Scheduled Query Rule Alerts can be imported using the `resource id`, e.g.
 *
 * ```sh
 *  $ pulumi import azure:monitoring/scheduledQueryRulesAlert:ScheduledQueryRulesAlert example /subscriptions/00000000-0000-0000-0000-000000000000/resourceGroups/group1/providers/Microsoft.Insights/scheduledQueryRules/myrulename
 * ```
 */
export class ScheduledQueryRulesAlert extends pulumi.CustomResource {
    /**
     * Get an existing ScheduledQueryRulesAlert resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: ScheduledQueryRulesAlertState, opts?: pulumi.CustomResourceOptions): ScheduledQueryRulesAlert {
        return new ScheduledQueryRulesAlert(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'azure:monitoring/scheduledQueryRulesAlert:ScheduledQueryRulesAlert';

    /**
     * Returns true if the given object is an instance of ScheduledQueryRulesAlert.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is ScheduledQueryRulesAlert {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === ScheduledQueryRulesAlert.__pulumiType;
    }

    /**
     * An `action` block as defined below.
     */
    public readonly action!: pulumi.Output<outputs.monitoring.ScheduledQueryRulesAlertAction>;
    /**
     * List of Resource IDs referred into query.
     */
    public readonly authorizedResourceIds!: pulumi.Output<string[] | undefined>;
    /**
     * The resource URI over which log search query is to be run.
     */
    public readonly dataSourceId!: pulumi.Output<string>;
    /**
     * The description of the scheduled query rule.
     */
    public readonly description!: pulumi.Output<string | undefined>;
    /**
     * Whether this scheduled query rule is enabled.  Default is `true`.
     */
    public readonly enabled!: pulumi.Output<boolean | undefined>;
    /**
     * Frequency (in minutes) at which rule condition should be evaluated.  Values must be between 5 and 1440 (inclusive).
     */
    public readonly frequency!: pulumi.Output<number>;
    public readonly location!: pulumi.Output<string>;
    /**
     * The name of the scheduled query rule. Changing this forces a new resource to be created.
     */
    public readonly name!: pulumi.Output<string>;
    /**
     * Log search query.
     */
    public readonly query!: pulumi.Output<string>;
    public readonly queryType!: pulumi.Output<string | undefined>;
    /**
     * The name of the resource group in which to create the scheduled query rule instance.
     */
    public readonly resourceGroupName!: pulumi.Output<string>;
    /**
     * Severity of the alert. Possible values include: 0, 1, 2, 3, or 4.
     */
    public readonly severity!: pulumi.Output<number | undefined>;
    public readonly tags!: pulumi.Output<{[key: string]: string} | undefined>;
    /**
     * Time (in minutes) for which Alerts should be throttled or suppressed.  Values must be between 0 and 10000 (inclusive).
     */
    public readonly throttling!: pulumi.Output<number | undefined>;
    /**
     * Time window for which data needs to be fetched for query (must be greater than or equal to `frequency`).  Values must be between 5 and 2880 (inclusive).
     */
    public readonly timeWindow!: pulumi.Output<number>;
    /**
     * The condition that results in the alert rule being run.
     */
    public readonly trigger!: pulumi.Output<outputs.monitoring.ScheduledQueryRulesAlertTrigger>;

    /**
     * Create a ScheduledQueryRulesAlert resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: ScheduledQueryRulesAlertArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: ScheduledQueryRulesAlertArgs | ScheduledQueryRulesAlertState, opts?: pulumi.CustomResourceOptions) {
        let inputs: pulumi.Inputs = {};
        if (opts && opts.id) {
            const state = argsOrState as ScheduledQueryRulesAlertState | undefined;
            inputs["action"] = state ? state.action : undefined;
            inputs["authorizedResourceIds"] = state ? state.authorizedResourceIds : undefined;
            inputs["dataSourceId"] = state ? state.dataSourceId : undefined;
            inputs["description"] = state ? state.description : undefined;
            inputs["enabled"] = state ? state.enabled : undefined;
            inputs["frequency"] = state ? state.frequency : undefined;
            inputs["location"] = state ? state.location : undefined;
            inputs["name"] = state ? state.name : undefined;
            inputs["query"] = state ? state.query : undefined;
            inputs["queryType"] = state ? state.queryType : undefined;
            inputs["resourceGroupName"] = state ? state.resourceGroupName : undefined;
            inputs["severity"] = state ? state.severity : undefined;
            inputs["tags"] = state ? state.tags : undefined;
            inputs["throttling"] = state ? state.throttling : undefined;
            inputs["timeWindow"] = state ? state.timeWindow : undefined;
            inputs["trigger"] = state ? state.trigger : undefined;
        } else {
            const args = argsOrState as ScheduledQueryRulesAlertArgs | undefined;
            if (!args || args.action === undefined) {
                throw new Error("Missing required property 'action'");
            }
            if (!args || args.dataSourceId === undefined) {
                throw new Error("Missing required property 'dataSourceId'");
            }
            if (!args || args.frequency === undefined) {
                throw new Error("Missing required property 'frequency'");
            }
            if (!args || args.query === undefined) {
                throw new Error("Missing required property 'query'");
            }
            if (!args || args.resourceGroupName === undefined) {
                throw new Error("Missing required property 'resourceGroupName'");
            }
            if (!args || args.timeWindow === undefined) {
                throw new Error("Missing required property 'timeWindow'");
            }
            if (!args || args.trigger === undefined) {
                throw new Error("Missing required property 'trigger'");
            }
            inputs["action"] = args ? args.action : undefined;
            inputs["authorizedResourceIds"] = args ? args.authorizedResourceIds : undefined;
            inputs["dataSourceId"] = args ? args.dataSourceId : undefined;
            inputs["description"] = args ? args.description : undefined;
            inputs["enabled"] = args ? args.enabled : undefined;
            inputs["frequency"] = args ? args.frequency : undefined;
            inputs["location"] = args ? args.location : undefined;
            inputs["name"] = args ? args.name : undefined;
            inputs["query"] = args ? args.query : undefined;
            inputs["queryType"] = args ? args.queryType : undefined;
            inputs["resourceGroupName"] = args ? args.resourceGroupName : undefined;
            inputs["severity"] = args ? args.severity : undefined;
            inputs["tags"] = args ? args.tags : undefined;
            inputs["throttling"] = args ? args.throttling : undefined;
            inputs["timeWindow"] = args ? args.timeWindow : undefined;
            inputs["trigger"] = args ? args.trigger : undefined;
        }
        if (!opts) {
            opts = {}
        }

        if (!opts.version) {
            opts.version = utilities.getVersion();
        }
        super(ScheduledQueryRulesAlert.__pulumiType, name, inputs, opts);
    }
}

/**
 * Input properties used for looking up and filtering ScheduledQueryRulesAlert resources.
 */
export interface ScheduledQueryRulesAlertState {
    /**
     * An `action` block as defined below.
     */
    readonly action?: pulumi.Input<inputs.monitoring.ScheduledQueryRulesAlertAction>;
    /**
     * List of Resource IDs referred into query.
     */
    readonly authorizedResourceIds?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * The resource URI over which log search query is to be run.
     */
    readonly dataSourceId?: pulumi.Input<string>;
    /**
     * The description of the scheduled query rule.
     */
    readonly description?: pulumi.Input<string>;
    /**
     * Whether this scheduled query rule is enabled.  Default is `true`.
     */
    readonly enabled?: pulumi.Input<boolean>;
    /**
     * Frequency (in minutes) at which rule condition should be evaluated.  Values must be between 5 and 1440 (inclusive).
     */
    readonly frequency?: pulumi.Input<number>;
    readonly location?: pulumi.Input<string>;
    /**
     * The name of the scheduled query rule. Changing this forces a new resource to be created.
     */
    readonly name?: pulumi.Input<string>;
    /**
     * Log search query.
     */
    readonly query?: pulumi.Input<string>;
    readonly queryType?: pulumi.Input<string>;
    /**
     * The name of the resource group in which to create the scheduled query rule instance.
     */
    readonly resourceGroupName?: pulumi.Input<string>;
    /**
     * Severity of the alert. Possible values include: 0, 1, 2, 3, or 4.
     */
    readonly severity?: pulumi.Input<number>;
    readonly tags?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
    /**
     * Time (in minutes) for which Alerts should be throttled or suppressed.  Values must be between 0 and 10000 (inclusive).
     */
    readonly throttling?: pulumi.Input<number>;
    /**
     * Time window for which data needs to be fetched for query (must be greater than or equal to `frequency`).  Values must be between 5 and 2880 (inclusive).
     */
    readonly timeWindow?: pulumi.Input<number>;
    /**
     * The condition that results in the alert rule being run.
     */
    readonly trigger?: pulumi.Input<inputs.monitoring.ScheduledQueryRulesAlertTrigger>;
}

/**
 * The set of arguments for constructing a ScheduledQueryRulesAlert resource.
 */
export interface ScheduledQueryRulesAlertArgs {
    /**
     * An `action` block as defined below.
     */
    readonly action: pulumi.Input<inputs.monitoring.ScheduledQueryRulesAlertAction>;
    /**
     * List of Resource IDs referred into query.
     */
    readonly authorizedResourceIds?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * The resource URI over which log search query is to be run.
     */
    readonly dataSourceId: pulumi.Input<string>;
    /**
     * The description of the scheduled query rule.
     */
    readonly description?: pulumi.Input<string>;
    /**
     * Whether this scheduled query rule is enabled.  Default is `true`.
     */
    readonly enabled?: pulumi.Input<boolean>;
    /**
     * Frequency (in minutes) at which rule condition should be evaluated.  Values must be between 5 and 1440 (inclusive).
     */
    readonly frequency: pulumi.Input<number>;
    readonly location?: pulumi.Input<string>;
    /**
     * The name of the scheduled query rule. Changing this forces a new resource to be created.
     */
    readonly name?: pulumi.Input<string>;
    /**
     * Log search query.
     */
    readonly query: pulumi.Input<string>;
    readonly queryType?: pulumi.Input<string>;
    /**
     * The name of the resource group in which to create the scheduled query rule instance.
     */
    readonly resourceGroupName: pulumi.Input<string>;
    /**
     * Severity of the alert. Possible values include: 0, 1, 2, 3, or 4.
     */
    readonly severity?: pulumi.Input<number>;
    readonly tags?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
    /**
     * Time (in minutes) for which Alerts should be throttled or suppressed.  Values must be between 0 and 10000 (inclusive).
     */
    readonly throttling?: pulumi.Input<number>;
    /**
     * Time window for which data needs to be fetched for query (must be greater than or equal to `frequency`).  Values must be between 5 and 2880 (inclusive).
     */
    readonly timeWindow: pulumi.Input<number>;
    /**
     * The condition that results in the alert rule being run.
     */
    readonly trigger: pulumi.Input<inputs.monitoring.ScheduledQueryRulesAlertTrigger>;
}
