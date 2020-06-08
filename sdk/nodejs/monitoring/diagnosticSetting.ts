// *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "../types/input";
import * as outputs from "../types/output";
import * as utilities from "../utilities";

/**
 * Manages a Diagnostic Setting for an existing Resource.
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
 * const exampleAccount = exampleResourceGroup.name.apply(name => azure.storage.getAccount({
 *     name: "examplestoracc",
 *     resourceGroupName: name,
 * }));
 * const exampleKeyVault = exampleResourceGroup.name.apply(name => azure.keyvault.getKeyVault({
 *     name: "example-vault",
 *     resourceGroupName: name,
 * }));
 * const exampleDiagnosticSetting = new azure.monitoring.DiagnosticSetting("exampleDiagnosticSetting", {
 *     targetResourceId: exampleKeyVault.id,
 *     storageAccountId: exampleAccount.id,
 *     log: [{
 *         category: "AuditEvent",
 *         enabled: false,
 *         retention_policy: {
 *             enabled: false,
 *         },
 *     }],
 *     metric: [{
 *         category: "AllMetrics",
 *         retention_policy: {
 *             enabled: false,
 *         },
 *     }],
 * });
 * ```
 */
export class DiagnosticSetting extends pulumi.CustomResource {
    /**
     * Get an existing DiagnosticSetting resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: DiagnosticSettingState, opts?: pulumi.CustomResourceOptions): DiagnosticSetting {
        return new DiagnosticSetting(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'azure:monitoring/diagnosticSetting:DiagnosticSetting';

    /**
     * Returns true if the given object is an instance of DiagnosticSetting.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is DiagnosticSetting {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === DiagnosticSetting.__pulumiType;
    }

    /**
     * Specifies the ID of an Event Hub Namespace Authorization Rule used to send Diagnostics Data. Changing this forces a new resource to be created.
     */
    public readonly eventhubAuthorizationRuleId!: pulumi.Output<string | undefined>;
    /**
     * Specifies the name of the Event Hub where Diagnostics Data should be sent. Changing this forces a new resource to be created.
     */
    public readonly eventhubName!: pulumi.Output<string | undefined>;
    /**
     * When set to 'Dedicated' logs sent to a Log Analytics workspace will go into resource specific tables, instead of the legacy AzureDiagnostics table.
     */
    public readonly logAnalyticsDestinationType!: pulumi.Output<string | undefined>;
    /**
     * Specifies the ID of a Log Analytics Workspace where Diagnostics Data should be sent. Changing this forces a new resource to be created.
     */
    public readonly logAnalyticsWorkspaceId!: pulumi.Output<string | undefined>;
    /**
     * One or more `log` blocks as defined below.
     */
    public readonly logs!: pulumi.Output<outputs.monitoring.DiagnosticSettingLog[] | undefined>;
    /**
     * One or more `metric` blocks as defined below.
     */
    public readonly metrics!: pulumi.Output<outputs.monitoring.DiagnosticSettingMetric[] | undefined>;
    /**
     * Specifies the name of the Diagnostic Setting. Changing this forces a new resource to be created.
     */
    public readonly name!: pulumi.Output<string>;
    /**
     * With this parameter you can specify a storage account which should be used to send the logs to. Parameter must be a valid Azure Resource ID. Changing this forces a new resource to be created.
     */
    public readonly storageAccountId!: pulumi.Output<string | undefined>;
    /**
     * The ID of an existing Resource on which to configure Diagnostic Settings. Changing this forces a new resource to be created.
     */
    public readonly targetResourceId!: pulumi.Output<string>;

    /**
     * Create a DiagnosticSetting resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: DiagnosticSettingArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: DiagnosticSettingArgs | DiagnosticSettingState, opts?: pulumi.CustomResourceOptions) {
        let inputs: pulumi.Inputs = {};
        if (opts && opts.id) {
            const state = argsOrState as DiagnosticSettingState | undefined;
            inputs["eventhubAuthorizationRuleId"] = state ? state.eventhubAuthorizationRuleId : undefined;
            inputs["eventhubName"] = state ? state.eventhubName : undefined;
            inputs["logAnalyticsDestinationType"] = state ? state.logAnalyticsDestinationType : undefined;
            inputs["logAnalyticsWorkspaceId"] = state ? state.logAnalyticsWorkspaceId : undefined;
            inputs["logs"] = state ? state.logs : undefined;
            inputs["metrics"] = state ? state.metrics : undefined;
            inputs["name"] = state ? state.name : undefined;
            inputs["storageAccountId"] = state ? state.storageAccountId : undefined;
            inputs["targetResourceId"] = state ? state.targetResourceId : undefined;
        } else {
            const args = argsOrState as DiagnosticSettingArgs | undefined;
            if (!args || args.targetResourceId === undefined) {
                throw new Error("Missing required property 'targetResourceId'");
            }
            inputs["eventhubAuthorizationRuleId"] = args ? args.eventhubAuthorizationRuleId : undefined;
            inputs["eventhubName"] = args ? args.eventhubName : undefined;
            inputs["logAnalyticsDestinationType"] = args ? args.logAnalyticsDestinationType : undefined;
            inputs["logAnalyticsWorkspaceId"] = args ? args.logAnalyticsWorkspaceId : undefined;
            inputs["logs"] = args ? args.logs : undefined;
            inputs["metrics"] = args ? args.metrics : undefined;
            inputs["name"] = args ? args.name : undefined;
            inputs["storageAccountId"] = args ? args.storageAccountId : undefined;
            inputs["targetResourceId"] = args ? args.targetResourceId : undefined;
        }
        if (!opts) {
            opts = {}
        }

        if (!opts.version) {
            opts.version = utilities.getVersion();
        }
        super(DiagnosticSetting.__pulumiType, name, inputs, opts);
    }
}

/**
 * Input properties used for looking up and filtering DiagnosticSetting resources.
 */
export interface DiagnosticSettingState {
    /**
     * Specifies the ID of an Event Hub Namespace Authorization Rule used to send Diagnostics Data. Changing this forces a new resource to be created.
     */
    readonly eventhubAuthorizationRuleId?: pulumi.Input<string>;
    /**
     * Specifies the name of the Event Hub where Diagnostics Data should be sent. Changing this forces a new resource to be created.
     */
    readonly eventhubName?: pulumi.Input<string>;
    /**
     * When set to 'Dedicated' logs sent to a Log Analytics workspace will go into resource specific tables, instead of the legacy AzureDiagnostics table.
     */
    readonly logAnalyticsDestinationType?: pulumi.Input<string>;
    /**
     * Specifies the ID of a Log Analytics Workspace where Diagnostics Data should be sent. Changing this forces a new resource to be created.
     */
    readonly logAnalyticsWorkspaceId?: pulumi.Input<string>;
    /**
     * One or more `log` blocks as defined below.
     */
    readonly logs?: pulumi.Input<pulumi.Input<inputs.monitoring.DiagnosticSettingLog>[]>;
    /**
     * One or more `metric` blocks as defined below.
     */
    readonly metrics?: pulumi.Input<pulumi.Input<inputs.monitoring.DiagnosticSettingMetric>[]>;
    /**
     * Specifies the name of the Diagnostic Setting. Changing this forces a new resource to be created.
     */
    readonly name?: pulumi.Input<string>;
    /**
     * With this parameter you can specify a storage account which should be used to send the logs to. Parameter must be a valid Azure Resource ID. Changing this forces a new resource to be created.
     */
    readonly storageAccountId?: pulumi.Input<string>;
    /**
     * The ID of an existing Resource on which to configure Diagnostic Settings. Changing this forces a new resource to be created.
     */
    readonly targetResourceId?: pulumi.Input<string>;
}

/**
 * The set of arguments for constructing a DiagnosticSetting resource.
 */
export interface DiagnosticSettingArgs {
    /**
     * Specifies the ID of an Event Hub Namespace Authorization Rule used to send Diagnostics Data. Changing this forces a new resource to be created.
     */
    readonly eventhubAuthorizationRuleId?: pulumi.Input<string>;
    /**
     * Specifies the name of the Event Hub where Diagnostics Data should be sent. Changing this forces a new resource to be created.
     */
    readonly eventhubName?: pulumi.Input<string>;
    /**
     * When set to 'Dedicated' logs sent to a Log Analytics workspace will go into resource specific tables, instead of the legacy AzureDiagnostics table.
     */
    readonly logAnalyticsDestinationType?: pulumi.Input<string>;
    /**
     * Specifies the ID of a Log Analytics Workspace where Diagnostics Data should be sent. Changing this forces a new resource to be created.
     */
    readonly logAnalyticsWorkspaceId?: pulumi.Input<string>;
    /**
     * One or more `log` blocks as defined below.
     */
    readonly logs?: pulumi.Input<pulumi.Input<inputs.monitoring.DiagnosticSettingLog>[]>;
    /**
     * One or more `metric` blocks as defined below.
     */
    readonly metrics?: pulumi.Input<pulumi.Input<inputs.monitoring.DiagnosticSettingMetric>[]>;
    /**
     * Specifies the name of the Diagnostic Setting. Changing this forces a new resource to be created.
     */
    readonly name?: pulumi.Input<string>;
    /**
     * With this parameter you can specify a storage account which should be used to send the logs to. Parameter must be a valid Azure Resource ID. Changing this forces a new resource to be created.
     */
    readonly storageAccountId?: pulumi.Input<string>;
    /**
     * The ID of an existing Resource on which to configure Diagnostic Settings. Changing this forces a new resource to be created.
     */
    readonly targetResourceId: pulumi.Input<string>;
}
