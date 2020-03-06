// *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "../types/input";
import * as outputs from "../types/output";
import * as utilities from "../utilities";

/**
 * Manages a Automation Schedule.
 *
 * > This content is derived from https://github.com/terraform-providers/terraform-provider-azurerm/blob/master/website/docs/r/automation_schedule.html.markdown.
 */
export class Schedule extends pulumi.CustomResource {
    /**
     * Get an existing Schedule resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: ScheduleState, opts?: pulumi.CustomResourceOptions): Schedule {
        return new Schedule(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'azure:automation/schedule:Schedule';

    /**
     * Returns true if the given object is an instance of Schedule.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is Schedule {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === Schedule.__pulumiType;
    }

    /**
     * The name of the automation account in which the Schedule is created. Changing this forces a new resource to be created.
     */
    public readonly automationAccountName!: pulumi.Output<string>;
    /**
     * A description for this Schedule.
     */
    public readonly description!: pulumi.Output<string | undefined>;
    /**
     * The end time of the schedule.
     */
    public readonly expiryTime!: pulumi.Output<string>;
    /**
     * The frequency of the schedule. - can be either `OneTime`, `Day`, `Hour`, `Week`, or `Month`.
     */
    public readonly frequency!: pulumi.Output<string>;
    /**
     * The number of `frequency`s between runs. Only valid when frequency is `Day`, `Hour`, `Week`, or `Month` and defaults to `1`.
     */
    public readonly interval!: pulumi.Output<number>;
    /**
     * List of days of the month that the job should execute on. Must be between `1` and `31`. `-1` for last day of the month. Only valid when frequency is `Month`.
     */
    public readonly monthDays!: pulumi.Output<number[] | undefined>;
    /**
     * List of occurrences of days within a month. Only valid when frequency is `Month`. The `monthlyOccurrence` block supports fields documented below.
     */
    public readonly monthlyOccurrences!: pulumi.Output<outputs.automation.ScheduleMonthlyOccurrence[] | undefined>;
    /**
     * Specifies the name of the Schedule. Changing this forces a new resource to be created.
     */
    public readonly name!: pulumi.Output<string>;
    /**
     * The name of the resource group in which the Schedule is created. Changing this forces a new resource to be created.
     */
    public readonly resourceGroupName!: pulumi.Output<string>;
    /**
     * Start time of the schedule. Must be at least five minutes in the future. Defaults to seven minutes in the future from the time the resource is created.
     */
    public readonly startTime!: pulumi.Output<string>;
    /**
     * The timezone of the start time. Defaults to `UTC`. For possible values see: https://msdn.microsoft.com/en-us/library/ms912391(v=winembedded.11).aspx
     */
    public readonly timezone!: pulumi.Output<string | undefined>;
    /**
     * List of days of the week that the job should execute on. Only valid when frequency is `Week`.
     */
    public readonly weekDays!: pulumi.Output<string[] | undefined>;

    /**
     * Create a Schedule resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: ScheduleArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: ScheduleArgs | ScheduleState, opts?: pulumi.CustomResourceOptions) {
        let inputs: pulumi.Inputs = {};
        if (opts && opts.id) {
            const state = argsOrState as ScheduleState | undefined;
            inputs["automationAccountName"] = state ? state.automationAccountName : undefined;
            inputs["description"] = state ? state.description : undefined;
            inputs["expiryTime"] = state ? state.expiryTime : undefined;
            inputs["frequency"] = state ? state.frequency : undefined;
            inputs["interval"] = state ? state.interval : undefined;
            inputs["monthDays"] = state ? state.monthDays : undefined;
            inputs["monthlyOccurrences"] = state ? state.monthlyOccurrences : undefined;
            inputs["name"] = state ? state.name : undefined;
            inputs["resourceGroupName"] = state ? state.resourceGroupName : undefined;
            inputs["startTime"] = state ? state.startTime : undefined;
            inputs["timezone"] = state ? state.timezone : undefined;
            inputs["weekDays"] = state ? state.weekDays : undefined;
        } else {
            const args = argsOrState as ScheduleArgs | undefined;
            if (!args || args.automationAccountName === undefined) {
                throw new Error("Missing required property 'automationAccountName'");
            }
            if (!args || args.frequency === undefined) {
                throw new Error("Missing required property 'frequency'");
            }
            if (!args || args.resourceGroupName === undefined) {
                throw new Error("Missing required property 'resourceGroupName'");
            }
            inputs["automationAccountName"] = args ? args.automationAccountName : undefined;
            inputs["description"] = args ? args.description : undefined;
            inputs["expiryTime"] = args ? args.expiryTime : undefined;
            inputs["frequency"] = args ? args.frequency : undefined;
            inputs["interval"] = args ? args.interval : undefined;
            inputs["monthDays"] = args ? args.monthDays : undefined;
            inputs["monthlyOccurrences"] = args ? args.monthlyOccurrences : undefined;
            inputs["name"] = args ? args.name : undefined;
            inputs["resourceGroupName"] = args ? args.resourceGroupName : undefined;
            inputs["startTime"] = args ? args.startTime : undefined;
            inputs["timezone"] = args ? args.timezone : undefined;
            inputs["weekDays"] = args ? args.weekDays : undefined;
        }
        if (!opts) {
            opts = {}
        }

        if (!opts.version) {
            opts.version = utilities.getVersion();
        }
        super(Schedule.__pulumiType, name, inputs, opts);
    }
}

/**
 * Input properties used for looking up and filtering Schedule resources.
 */
export interface ScheduleState {
    /**
     * The name of the automation account in which the Schedule is created. Changing this forces a new resource to be created.
     */
    readonly automationAccountName?: pulumi.Input<string>;
    /**
     * A description for this Schedule.
     */
    readonly description?: pulumi.Input<string>;
    /**
     * The end time of the schedule.
     */
    readonly expiryTime?: pulumi.Input<string>;
    /**
     * The frequency of the schedule. - can be either `OneTime`, `Day`, `Hour`, `Week`, or `Month`.
     */
    readonly frequency?: pulumi.Input<string>;
    /**
     * The number of `frequency`s between runs. Only valid when frequency is `Day`, `Hour`, `Week`, or `Month` and defaults to `1`.
     */
    readonly interval?: pulumi.Input<number>;
    /**
     * List of days of the month that the job should execute on. Must be between `1` and `31`. `-1` for last day of the month. Only valid when frequency is `Month`.
     */
    readonly monthDays?: pulumi.Input<pulumi.Input<number>[]>;
    /**
     * List of occurrences of days within a month. Only valid when frequency is `Month`. The `monthlyOccurrence` block supports fields documented below.
     */
    readonly monthlyOccurrences?: pulumi.Input<pulumi.Input<inputs.automation.ScheduleMonthlyOccurrence>[]>;
    /**
     * Specifies the name of the Schedule. Changing this forces a new resource to be created.
     */
    readonly name?: pulumi.Input<string>;
    /**
     * The name of the resource group in which the Schedule is created. Changing this forces a new resource to be created.
     */
    readonly resourceGroupName?: pulumi.Input<string>;
    /**
     * Start time of the schedule. Must be at least five minutes in the future. Defaults to seven minutes in the future from the time the resource is created.
     */
    readonly startTime?: pulumi.Input<string>;
    /**
     * The timezone of the start time. Defaults to `UTC`. For possible values see: https://msdn.microsoft.com/en-us/library/ms912391(v=winembedded.11).aspx
     */
    readonly timezone?: pulumi.Input<string>;
    /**
     * List of days of the week that the job should execute on. Only valid when frequency is `Week`.
     */
    readonly weekDays?: pulumi.Input<pulumi.Input<string>[]>;
}

/**
 * The set of arguments for constructing a Schedule resource.
 */
export interface ScheduleArgs {
    /**
     * The name of the automation account in which the Schedule is created. Changing this forces a new resource to be created.
     */
    readonly automationAccountName: pulumi.Input<string>;
    /**
     * A description for this Schedule.
     */
    readonly description?: pulumi.Input<string>;
    /**
     * The end time of the schedule.
     */
    readonly expiryTime?: pulumi.Input<string>;
    /**
     * The frequency of the schedule. - can be either `OneTime`, `Day`, `Hour`, `Week`, or `Month`.
     */
    readonly frequency: pulumi.Input<string>;
    /**
     * The number of `frequency`s between runs. Only valid when frequency is `Day`, `Hour`, `Week`, or `Month` and defaults to `1`.
     */
    readonly interval?: pulumi.Input<number>;
    /**
     * List of days of the month that the job should execute on. Must be between `1` and `31`. `-1` for last day of the month. Only valid when frequency is `Month`.
     */
    readonly monthDays?: pulumi.Input<pulumi.Input<number>[]>;
    /**
     * List of occurrences of days within a month. Only valid when frequency is `Month`. The `monthlyOccurrence` block supports fields documented below.
     */
    readonly monthlyOccurrences?: pulumi.Input<pulumi.Input<inputs.automation.ScheduleMonthlyOccurrence>[]>;
    /**
     * Specifies the name of the Schedule. Changing this forces a new resource to be created.
     */
    readonly name?: pulumi.Input<string>;
    /**
     * The name of the resource group in which the Schedule is created. Changing this forces a new resource to be created.
     */
    readonly resourceGroupName: pulumi.Input<string>;
    /**
     * Start time of the schedule. Must be at least five minutes in the future. Defaults to seven minutes in the future from the time the resource is created.
     */
    readonly startTime?: pulumi.Input<string>;
    /**
     * The timezone of the start time. Defaults to `UTC`. For possible values see: https://msdn.microsoft.com/en-us/library/ms912391(v=winembedded.11).aspx
     */
    readonly timezone?: pulumi.Input<string>;
    /**
     * List of days of the week that the job should execute on. Only valid when frequency is `Week`.
     */
    readonly weekDays?: pulumi.Input<pulumi.Input<string>[]>;
}
