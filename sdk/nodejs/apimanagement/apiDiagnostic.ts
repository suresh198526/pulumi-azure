// *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import { input as inputs, output as outputs } from "../types";
import * as utilities from "../utilities";

/**
 * Manages a API Management Service API Diagnostics Logs.
 *
 * ## Example Usage
 *
 * ```typescript
 * import * as pulumi from "@pulumi/pulumi";
 * import * as azure from "@pulumi/azure";
 *
 * const exampleResourceGroup = new azure.core.ResourceGroup("exampleResourceGroup", {location: "West Europe"});
 * const exampleInsights = new azure.appinsights.Insights("exampleInsights", {
 *     location: exampleResourceGroup.location,
 *     resourceGroupName: exampleResourceGroup.name,
 *     applicationType: "web",
 * });
 * const exampleService = new azure.apimanagement.Service("exampleService", {
 *     location: exampleResourceGroup.location,
 *     resourceGroupName: exampleResourceGroup.name,
 *     publisherName: "My Company",
 *     publisherEmail: "company@mycompany.io",
 *     skuName: "Developer_1",
 * });
 * const exampleApi = new azure.apimanagement.Api("exampleApi", {
 *     resourceGroupName: exampleResourceGroup.name,
 *     apiManagementName: exampleService.name,
 *     revision: "1",
 *     displayName: "Example API",
 *     path: "example",
 *     protocols: ["https"],
 *     "import": {
 *         contentFormat: "swagger-link-json",
 *         contentValue: "http://conferenceapi.azurewebsites.net/?format=json",
 *     },
 * });
 * const exampleLogger = new azure.apimanagement.Logger("exampleLogger", {
 *     apiManagementName: exampleService.name,
 *     resourceGroupName: exampleResourceGroup.name,
 *     applicationInsights: {
 *         instrumentationKey: exampleInsights.instrumentationKey,
 *     },
 * });
 * const exampleApiDiagnostic = new azure.apimanagement.ApiDiagnostic("exampleApiDiagnostic", {
 *     resourceGroupName: exampleResourceGroup.name,
 *     apiManagementName: exampleService.name,
 *     apiName: exampleApi.name,
 *     apiManagementLoggerId: exampleLogger.id,
 *     alwaysLogErrors: true,
 *     logClientIp: true,
 *     verbosity: "Verbose",
 *     httpCorrelationProtocol: "W3C",
 *     frontendRequest: {
 *         bodyBytes: 32,
 *         headersToLogs: [
 *             "content-type",
 *             "accept",
 *             "origin",
 *         ],
 *     },
 *     frontendResponse: {
 *         bodyBytes: 32,
 *         headersToLogs: [
 *             "content-type",
 *             "content-length",
 *             "origin",
 *         ],
 *     },
 *     backendRequest: {
 *         bodyBytes: 32,
 *         headersToLogs: [
 *             "content-type",
 *             "accept",
 *             "origin",
 *         ],
 *     },
 *     backendResponse: {
 *         bodyBytes: 32,
 *         headersToLogs: [
 *             "content-type",
 *             "content-length",
 *             "origin",
 *         ],
 *     },
 * });
 * ```
 *
 * ## Import
 *
 * API Management Service API Diagnostics Logs can be imported using the `resource id`, e.g.
 *
 * ```sh
 *  $ pulumi import azure:apimanagement/apiDiagnostic:ApiDiagnostic example /subscriptions/00000000-0000-0000-0000-000000000000/resourceGroups/group1/providers/Microsoft.ApiManagement/service/instance1/apis/api1/diagnostics/diagnostic1/loggers/logger1
 * ```
 */
export class ApiDiagnostic extends pulumi.CustomResource {
    /**
     * Get an existing ApiDiagnostic resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: ApiDiagnosticState, opts?: pulumi.CustomResourceOptions): ApiDiagnostic {
        return new ApiDiagnostic(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'azure:apimanagement/apiDiagnostic:ApiDiagnostic';

    /**
     * Returns true if the given object is an instance of ApiDiagnostic.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is ApiDiagnostic {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === ApiDiagnostic.__pulumiType;
    }

    /**
     * Always log errors. Send telemetry if there is an erroneous condition, regardless of sampling settings.
     */
    public readonly alwaysLogErrors!: pulumi.Output<boolean>;
    /**
     * The ID (name) of the Diagnostics Logger.
     */
    public readonly apiManagementLoggerId!: pulumi.Output<string>;
    /**
     * The name of the API Management Service instance. Changing this forces a new API Management Service API Diagnostics Logs to be created.
     */
    public readonly apiManagementName!: pulumi.Output<string>;
    /**
     * The name of the API on which to configure the Diagnostics Logs. Changing this forces a new API Management Service API Diagnostics Logs to be created.
     */
    public readonly apiName!: pulumi.Output<string>;
    /**
     * A `backendRequest` block as defined below.
     */
    public readonly backendRequest!: pulumi.Output<outputs.apimanagement.ApiDiagnosticBackendRequest>;
    /**
     * A `backendResponse` block as defined below.
     */
    public readonly backendResponse!: pulumi.Output<outputs.apimanagement.ApiDiagnosticBackendResponse>;
    /**
     * A `frontendRequest` block as defined below.
     */
    public readonly frontendRequest!: pulumi.Output<outputs.apimanagement.ApiDiagnosticFrontendRequest>;
    /**
     * A `frontendResponse` block as defined below.
     */
    public readonly frontendResponse!: pulumi.Output<outputs.apimanagement.ApiDiagnosticFrontendResponse>;
    /**
     * The HTTP Correlation Protocol to use. Possible values are `None`, `Legacy` or `W3C`.
     */
    public readonly httpCorrelationProtocol!: pulumi.Output<string>;
    /**
     * Identifier of the Diagnostics Logs. Possible values are `applicationinsights` and `azuremonitor`. Changing this forces a new API Management Service API Diagnostics Logs to be created.
     */
    public readonly identifier!: pulumi.Output<string>;
    /**
     * Log client IP address.
     */
    public readonly logClientIp!: pulumi.Output<boolean>;
    /**
     * The name of the Resource Group where the API Management Service API Diagnostics Logs should exist. Changing this forces a new API Management Service API Diagnostics Logs to be created.
     */
    public readonly resourceGroupName!: pulumi.Output<string>;
    /**
     * Logging verbosity. Possible values are `verbose`, `information` or `error`.
     */
    public readonly verbosity!: pulumi.Output<string>;

    /**
     * Create a ApiDiagnostic resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: ApiDiagnosticArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: ApiDiagnosticArgs | ApiDiagnosticState, opts?: pulumi.CustomResourceOptions) {
        let inputs: pulumi.Inputs = {};
        if (opts && opts.id) {
            const state = argsOrState as ApiDiagnosticState | undefined;
            inputs["alwaysLogErrors"] = state ? state.alwaysLogErrors : undefined;
            inputs["apiManagementLoggerId"] = state ? state.apiManagementLoggerId : undefined;
            inputs["apiManagementName"] = state ? state.apiManagementName : undefined;
            inputs["apiName"] = state ? state.apiName : undefined;
            inputs["backendRequest"] = state ? state.backendRequest : undefined;
            inputs["backendResponse"] = state ? state.backendResponse : undefined;
            inputs["frontendRequest"] = state ? state.frontendRequest : undefined;
            inputs["frontendResponse"] = state ? state.frontendResponse : undefined;
            inputs["httpCorrelationProtocol"] = state ? state.httpCorrelationProtocol : undefined;
            inputs["identifier"] = state ? state.identifier : undefined;
            inputs["logClientIp"] = state ? state.logClientIp : undefined;
            inputs["resourceGroupName"] = state ? state.resourceGroupName : undefined;
            inputs["verbosity"] = state ? state.verbosity : undefined;
        } else {
            const args = argsOrState as ApiDiagnosticArgs | undefined;
            if (!args || args.apiManagementLoggerId === undefined) {
                throw new Error("Missing required property 'apiManagementLoggerId'");
            }
            if (!args || args.apiManagementName === undefined) {
                throw new Error("Missing required property 'apiManagementName'");
            }
            if (!args || args.apiName === undefined) {
                throw new Error("Missing required property 'apiName'");
            }
            if (!args || args.identifier === undefined) {
                throw new Error("Missing required property 'identifier'");
            }
            if (!args || args.resourceGroupName === undefined) {
                throw new Error("Missing required property 'resourceGroupName'");
            }
            inputs["alwaysLogErrors"] = args ? args.alwaysLogErrors : undefined;
            inputs["apiManagementLoggerId"] = args ? args.apiManagementLoggerId : undefined;
            inputs["apiManagementName"] = args ? args.apiManagementName : undefined;
            inputs["apiName"] = args ? args.apiName : undefined;
            inputs["backendRequest"] = args ? args.backendRequest : undefined;
            inputs["backendResponse"] = args ? args.backendResponse : undefined;
            inputs["frontendRequest"] = args ? args.frontendRequest : undefined;
            inputs["frontendResponse"] = args ? args.frontendResponse : undefined;
            inputs["httpCorrelationProtocol"] = args ? args.httpCorrelationProtocol : undefined;
            inputs["identifier"] = args ? args.identifier : undefined;
            inputs["logClientIp"] = args ? args.logClientIp : undefined;
            inputs["resourceGroupName"] = args ? args.resourceGroupName : undefined;
            inputs["verbosity"] = args ? args.verbosity : undefined;
        }
        if (!opts) {
            opts = {}
        }

        if (!opts.version) {
            opts.version = utilities.getVersion();
        }
        super(ApiDiagnostic.__pulumiType, name, inputs, opts);
    }
}

/**
 * Input properties used for looking up and filtering ApiDiagnostic resources.
 */
export interface ApiDiagnosticState {
    /**
     * Always log errors. Send telemetry if there is an erroneous condition, regardless of sampling settings.
     */
    readonly alwaysLogErrors?: pulumi.Input<boolean>;
    /**
     * The ID (name) of the Diagnostics Logger.
     */
    readonly apiManagementLoggerId?: pulumi.Input<string>;
    /**
     * The name of the API Management Service instance. Changing this forces a new API Management Service API Diagnostics Logs to be created.
     */
    readonly apiManagementName?: pulumi.Input<string>;
    /**
     * The name of the API on which to configure the Diagnostics Logs. Changing this forces a new API Management Service API Diagnostics Logs to be created.
     */
    readonly apiName?: pulumi.Input<string>;
    /**
     * A `backendRequest` block as defined below.
     */
    readonly backendRequest?: pulumi.Input<inputs.apimanagement.ApiDiagnosticBackendRequest>;
    /**
     * A `backendResponse` block as defined below.
     */
    readonly backendResponse?: pulumi.Input<inputs.apimanagement.ApiDiagnosticBackendResponse>;
    /**
     * A `frontendRequest` block as defined below.
     */
    readonly frontendRequest?: pulumi.Input<inputs.apimanagement.ApiDiagnosticFrontendRequest>;
    /**
     * A `frontendResponse` block as defined below.
     */
    readonly frontendResponse?: pulumi.Input<inputs.apimanagement.ApiDiagnosticFrontendResponse>;
    /**
     * The HTTP Correlation Protocol to use. Possible values are `None`, `Legacy` or `W3C`.
     */
    readonly httpCorrelationProtocol?: pulumi.Input<string>;
    /**
     * Identifier of the Diagnostics Logs. Possible values are `applicationinsights` and `azuremonitor`. Changing this forces a new API Management Service API Diagnostics Logs to be created.
     */
    readonly identifier?: pulumi.Input<string>;
    /**
     * Log client IP address.
     */
    readonly logClientIp?: pulumi.Input<boolean>;
    /**
     * The name of the Resource Group where the API Management Service API Diagnostics Logs should exist. Changing this forces a new API Management Service API Diagnostics Logs to be created.
     */
    readonly resourceGroupName?: pulumi.Input<string>;
    /**
     * Logging verbosity. Possible values are `verbose`, `information` or `error`.
     */
    readonly verbosity?: pulumi.Input<string>;
}

/**
 * The set of arguments for constructing a ApiDiagnostic resource.
 */
export interface ApiDiagnosticArgs {
    /**
     * Always log errors. Send telemetry if there is an erroneous condition, regardless of sampling settings.
     */
    readonly alwaysLogErrors?: pulumi.Input<boolean>;
    /**
     * The ID (name) of the Diagnostics Logger.
     */
    readonly apiManagementLoggerId: pulumi.Input<string>;
    /**
     * The name of the API Management Service instance. Changing this forces a new API Management Service API Diagnostics Logs to be created.
     */
    readonly apiManagementName: pulumi.Input<string>;
    /**
     * The name of the API on which to configure the Diagnostics Logs. Changing this forces a new API Management Service API Diagnostics Logs to be created.
     */
    readonly apiName: pulumi.Input<string>;
    /**
     * A `backendRequest` block as defined below.
     */
    readonly backendRequest?: pulumi.Input<inputs.apimanagement.ApiDiagnosticBackendRequest>;
    /**
     * A `backendResponse` block as defined below.
     */
    readonly backendResponse?: pulumi.Input<inputs.apimanagement.ApiDiagnosticBackendResponse>;
    /**
     * A `frontendRequest` block as defined below.
     */
    readonly frontendRequest?: pulumi.Input<inputs.apimanagement.ApiDiagnosticFrontendRequest>;
    /**
     * A `frontendResponse` block as defined below.
     */
    readonly frontendResponse?: pulumi.Input<inputs.apimanagement.ApiDiagnosticFrontendResponse>;
    /**
     * The HTTP Correlation Protocol to use. Possible values are `None`, `Legacy` or `W3C`.
     */
    readonly httpCorrelationProtocol?: pulumi.Input<string>;
    /**
     * Identifier of the Diagnostics Logs. Possible values are `applicationinsights` and `azuremonitor`. Changing this forces a new API Management Service API Diagnostics Logs to be created.
     */
    readonly identifier: pulumi.Input<string>;
    /**
     * Log client IP address.
     */
    readonly logClientIp?: pulumi.Input<boolean>;
    /**
     * The name of the Resource Group where the API Management Service API Diagnostics Logs should exist. Changing this forces a new API Management Service API Diagnostics Logs to be created.
     */
    readonly resourceGroupName: pulumi.Input<string>;
    /**
     * Logging verbosity. Possible values are `verbose`, `information` or `error`.
     */
    readonly verbosity?: pulumi.Input<string>;
}
