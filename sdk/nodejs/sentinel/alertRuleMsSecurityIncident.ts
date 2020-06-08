// *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "../utilities";

/**
 * Manages a Sentinel MS Security Incident Alert Rule.
 *
 * ## Example Usage
 *
 *
 *
 * ```typescript
 * import * as pulumi from "@pulumi/pulumi";
 * import * as azure from "@pulumi/azure";
 *
 * const exampleResourceGroup = new azure.core.ResourceGroup("exampleResourceGroup", {location: "West Europe"});
 * const exampleAnalyticsWorkspace = new azure.operationalinsights.AnalyticsWorkspace("exampleAnalyticsWorkspace", {
 *     location: exampleResourceGroup.location,
 *     resourceGroupName: exampleResourceGroup.name,
 *     sku: "pergb2018",
 * });
 * const exampleAlertRuleMsSecurityIncident = new azure.sentinel.AlertRuleMsSecurityIncident("exampleAlertRuleMsSecurityIncident", {
 *     logAnalyticsWorkspaceId: exampleAnalyticsWorkspace.id,
 *     productFilter: "Microsoft Cloud App Security",
 *     displayName: "example rule",
 *     severityFilters: ["High"],
 * });
 * ```
 */
export class AlertRuleMsSecurityIncident extends pulumi.CustomResource {
    /**
     * Get an existing AlertRuleMsSecurityIncident resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: AlertRuleMsSecurityIncidentState, opts?: pulumi.CustomResourceOptions): AlertRuleMsSecurityIncident {
        return new AlertRuleMsSecurityIncident(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'azure:sentinel/alertRuleMsSecurityIncident:AlertRuleMsSecurityIncident';

    /**
     * Returns true if the given object is an instance of AlertRuleMsSecurityIncident.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is AlertRuleMsSecurityIncident {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === AlertRuleMsSecurityIncident.__pulumiType;
    }

    /**
     * The description of this Sentinel MS Security Incident Alert Rule.
     */
    public readonly description!: pulumi.Output<string | undefined>;
    /**
     * The friendly name of this Sentinel MS Security Incident Alert Rule.
     */
    public readonly displayName!: pulumi.Output<string>;
    /**
     * Should this Sentinel MS Security Incident Alert Rule be enabled? Defaults to `true`.
     */
    public readonly enabled!: pulumi.Output<boolean | undefined>;
    /**
     * The ID of the Log Analytics Workspace this Sentinel MS Security Incident Alert Rule belongs to. Changing this forces a new Sentinel MS Security Incident Alert Rule to be created.
     */
    public readonly logAnalyticsWorkspaceId!: pulumi.Output<string>;
    /**
     * The name which should be used for this Sentinel MS Security Incident Alert Rule. Changing this forces a new Sentinel MS Security Incident Alert Rule to be created.
     */
    public readonly name!: pulumi.Output<string>;
    /**
     * The Microsoft Security Service from where the alert will be generated. Possible values are `Azure Active Directory Identity Protection`, `Azure Advanced Threat Protection`, `Azure Security Center`, `Azure Security Center for IoT` and `Microsoft Cloud App Security`.
     */
    public readonly productFilter!: pulumi.Output<string>;
    /**
     * Only create incidents from alerts when alert severity level is contained in this list. Possible values are `High`, `Medium`, `Low` and `Informational`.
     */
    public readonly severityFilters!: pulumi.Output<string[]>;
    /**
     * Only create incidents from alerts when alert name contain text in this list. No filter will happen if this field is absent.
     */
    public readonly textWhitelists!: pulumi.Output<string[] | undefined>;

    /**
     * Create a AlertRuleMsSecurityIncident resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: AlertRuleMsSecurityIncidentArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: AlertRuleMsSecurityIncidentArgs | AlertRuleMsSecurityIncidentState, opts?: pulumi.CustomResourceOptions) {
        let inputs: pulumi.Inputs = {};
        if (opts && opts.id) {
            const state = argsOrState as AlertRuleMsSecurityIncidentState | undefined;
            inputs["description"] = state ? state.description : undefined;
            inputs["displayName"] = state ? state.displayName : undefined;
            inputs["enabled"] = state ? state.enabled : undefined;
            inputs["logAnalyticsWorkspaceId"] = state ? state.logAnalyticsWorkspaceId : undefined;
            inputs["name"] = state ? state.name : undefined;
            inputs["productFilter"] = state ? state.productFilter : undefined;
            inputs["severityFilters"] = state ? state.severityFilters : undefined;
            inputs["textWhitelists"] = state ? state.textWhitelists : undefined;
        } else {
            const args = argsOrState as AlertRuleMsSecurityIncidentArgs | undefined;
            if (!args || args.displayName === undefined) {
                throw new Error("Missing required property 'displayName'");
            }
            if (!args || args.logAnalyticsWorkspaceId === undefined) {
                throw new Error("Missing required property 'logAnalyticsWorkspaceId'");
            }
            if (!args || args.productFilter === undefined) {
                throw new Error("Missing required property 'productFilter'");
            }
            if (!args || args.severityFilters === undefined) {
                throw new Error("Missing required property 'severityFilters'");
            }
            inputs["description"] = args ? args.description : undefined;
            inputs["displayName"] = args ? args.displayName : undefined;
            inputs["enabled"] = args ? args.enabled : undefined;
            inputs["logAnalyticsWorkspaceId"] = args ? args.logAnalyticsWorkspaceId : undefined;
            inputs["name"] = args ? args.name : undefined;
            inputs["productFilter"] = args ? args.productFilter : undefined;
            inputs["severityFilters"] = args ? args.severityFilters : undefined;
            inputs["textWhitelists"] = args ? args.textWhitelists : undefined;
        }
        if (!opts) {
            opts = {}
        }

        if (!opts.version) {
            opts.version = utilities.getVersion();
        }
        super(AlertRuleMsSecurityIncident.__pulumiType, name, inputs, opts);
    }
}

/**
 * Input properties used for looking up and filtering AlertRuleMsSecurityIncident resources.
 */
export interface AlertRuleMsSecurityIncidentState {
    /**
     * The description of this Sentinel MS Security Incident Alert Rule.
     */
    readonly description?: pulumi.Input<string>;
    /**
     * The friendly name of this Sentinel MS Security Incident Alert Rule.
     */
    readonly displayName?: pulumi.Input<string>;
    /**
     * Should this Sentinel MS Security Incident Alert Rule be enabled? Defaults to `true`.
     */
    readonly enabled?: pulumi.Input<boolean>;
    /**
     * The ID of the Log Analytics Workspace this Sentinel MS Security Incident Alert Rule belongs to. Changing this forces a new Sentinel MS Security Incident Alert Rule to be created.
     */
    readonly logAnalyticsWorkspaceId?: pulumi.Input<string>;
    /**
     * The name which should be used for this Sentinel MS Security Incident Alert Rule. Changing this forces a new Sentinel MS Security Incident Alert Rule to be created.
     */
    readonly name?: pulumi.Input<string>;
    /**
     * The Microsoft Security Service from where the alert will be generated. Possible values are `Azure Active Directory Identity Protection`, `Azure Advanced Threat Protection`, `Azure Security Center`, `Azure Security Center for IoT` and `Microsoft Cloud App Security`.
     */
    readonly productFilter?: pulumi.Input<string>;
    /**
     * Only create incidents from alerts when alert severity level is contained in this list. Possible values are `High`, `Medium`, `Low` and `Informational`.
     */
    readonly severityFilters?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * Only create incidents from alerts when alert name contain text in this list. No filter will happen if this field is absent.
     */
    readonly textWhitelists?: pulumi.Input<pulumi.Input<string>[]>;
}

/**
 * The set of arguments for constructing a AlertRuleMsSecurityIncident resource.
 */
export interface AlertRuleMsSecurityIncidentArgs {
    /**
     * The description of this Sentinel MS Security Incident Alert Rule.
     */
    readonly description?: pulumi.Input<string>;
    /**
     * The friendly name of this Sentinel MS Security Incident Alert Rule.
     */
    readonly displayName: pulumi.Input<string>;
    /**
     * Should this Sentinel MS Security Incident Alert Rule be enabled? Defaults to `true`.
     */
    readonly enabled?: pulumi.Input<boolean>;
    /**
     * The ID of the Log Analytics Workspace this Sentinel MS Security Incident Alert Rule belongs to. Changing this forces a new Sentinel MS Security Incident Alert Rule to be created.
     */
    readonly logAnalyticsWorkspaceId: pulumi.Input<string>;
    /**
     * The name which should be used for this Sentinel MS Security Incident Alert Rule. Changing this forces a new Sentinel MS Security Incident Alert Rule to be created.
     */
    readonly name?: pulumi.Input<string>;
    /**
     * The Microsoft Security Service from where the alert will be generated. Possible values are `Azure Active Directory Identity Protection`, `Azure Advanced Threat Protection`, `Azure Security Center`, `Azure Security Center for IoT` and `Microsoft Cloud App Security`.
     */
    readonly productFilter: pulumi.Input<string>;
    /**
     * Only create incidents from alerts when alert severity level is contained in this list. Possible values are `High`, `Medium`, `Low` and `Informational`.
     */
    readonly severityFilters: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * Only create incidents from alerts when alert name contain text in this list. No filter will happen if this field is absent.
     */
    readonly textWhitelists?: pulumi.Input<pulumi.Input<string>[]>;
}
