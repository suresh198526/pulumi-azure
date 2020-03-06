// *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "../types/input";
import * as outputs from "../types/output";
import * as utilities from "../utilities";

/**
 * Manages a Healthcare Service.
 * 
 * ## Example Usage
 * 
 * ```typescript
 * import * as pulumi from "@pulumi/pulumi";
 * import * as azure from "@pulumi/azure";
 * 
 * const example = new azure.healthcare.Service("example", {
 *     accessPolicyObjectIds: ["xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx"],
 *     authenticationConfiguration: {
 *         audience: "https://azurehealthcareapis.com/",
 *         authority: "https://login.microsoftonline.com/$%7Bdata.azurerm_client_config.current.tenant_id%7D",
 *         smartProxyEnabled: true,
 *     },
 *     corsConfiguration: {
 *         allowCredentials: true,
 *         allowedHeaders: [
 *             "x-tempo-*",
 *             "x-tempo2-*",
 *         ],
 *         allowedMethods: [
 *             "GET",
 *             "PUT",
 *         ],
 *         allowedOrigins: [
 *             "http://www.example.com",
 *             "http://www.example2.com",
 *         ],
 *         maxAgeInSeconds: 500,
 *     },
 *     cosmosdbThroughput: 2000,
 *     kind: "fhir-R4",
 *     location: "westus2",
 *     resourceGroupName: "sample-resource-group",
 *     tags: {
 *         environment: "testenv",
 *         purpose: "AcceptanceTests",
 *     },
 * });
 * ```
 *
 * > This content is derived from https://github.com/terraform-providers/terraform-provider-azurerm/blob/master/website/docs/r/healthcare_service.html.markdown.
 */
export class Service extends pulumi.CustomResource {
    /**
     * Get an existing Service resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: ServiceState, opts?: pulumi.CustomResourceOptions): Service {
        return new Service(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'azure:healthcare/service:Service';

    /**
     * Returns true if the given object is an instance of Service.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is Service {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === Service.__pulumiType;
    }

    public readonly accessPolicyObjectIds!: pulumi.Output<string[]>;
    /**
     * An `authenticationConfiguration` block as defined below.
     */
    public readonly authenticationConfiguration!: pulumi.Output<outputs.healthcare.ServiceAuthenticationConfiguration>;
    /**
     * A `corsConfiguration` block as defined below.
     */
    public readonly corsConfiguration!: pulumi.Output<outputs.healthcare.ServiceCorsConfiguration>;
    /**
     * The provisioned throughput for the backing database. Range of `400`-`1000`. Defaults to `400`.
     */
    public readonly cosmosdbThroughput!: pulumi.Output<number | undefined>;
    /**
     * The type of the service. Values at time of publication are: `fhir`, `fhir-Stu3` and `fhir-R4`. Default value is `fhir`.
     */
    public readonly kind!: pulumi.Output<string | undefined>;
    /**
     * Specifies the supported Azure Region where the Service should be created.
     */
    public readonly location!: pulumi.Output<string>;
    /**
     * The name of the service instance. Used for service endpoint, must be unique within the audience.
     */
    public readonly name!: pulumi.Output<string>;
    /**
     * The name of the Resource Group in which to create the Service.
     */
    public readonly resourceGroupName!: pulumi.Output<string>;
    /**
     * A mapping of tags to assign to the resource.
     */
    public readonly tags!: pulumi.Output<{[key: string]: string} | undefined>;

    /**
     * Create a Service resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: ServiceArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: ServiceArgs | ServiceState, opts?: pulumi.CustomResourceOptions) {
        let inputs: pulumi.Inputs = {};
        if (opts && opts.id) {
            const state = argsOrState as ServiceState | undefined;
            inputs["accessPolicyObjectIds"] = state ? state.accessPolicyObjectIds : undefined;
            inputs["authenticationConfiguration"] = state ? state.authenticationConfiguration : undefined;
            inputs["corsConfiguration"] = state ? state.corsConfiguration : undefined;
            inputs["cosmosdbThroughput"] = state ? state.cosmosdbThroughput : undefined;
            inputs["kind"] = state ? state.kind : undefined;
            inputs["location"] = state ? state.location : undefined;
            inputs["name"] = state ? state.name : undefined;
            inputs["resourceGroupName"] = state ? state.resourceGroupName : undefined;
            inputs["tags"] = state ? state.tags : undefined;
        } else {
            const args = argsOrState as ServiceArgs | undefined;
            if (!args || args.accessPolicyObjectIds === undefined) {
                throw new Error("Missing required property 'accessPolicyObjectIds'");
            }
            if (!args || args.resourceGroupName === undefined) {
                throw new Error("Missing required property 'resourceGroupName'");
            }
            inputs["accessPolicyObjectIds"] = args ? args.accessPolicyObjectIds : undefined;
            inputs["authenticationConfiguration"] = args ? args.authenticationConfiguration : undefined;
            inputs["corsConfiguration"] = args ? args.corsConfiguration : undefined;
            inputs["cosmosdbThroughput"] = args ? args.cosmosdbThroughput : undefined;
            inputs["kind"] = args ? args.kind : undefined;
            inputs["location"] = args ? args.location : undefined;
            inputs["name"] = args ? args.name : undefined;
            inputs["resourceGroupName"] = args ? args.resourceGroupName : undefined;
            inputs["tags"] = args ? args.tags : undefined;
        }
        if (!opts) {
            opts = {}
        }

        if (!opts.version) {
            opts.version = utilities.getVersion();
        }
        super(Service.__pulumiType, name, inputs, opts);
    }
}

/**
 * Input properties used for looking up and filtering Service resources.
 */
export interface ServiceState {
    readonly accessPolicyObjectIds?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * An `authenticationConfiguration` block as defined below.
     */
    readonly authenticationConfiguration?: pulumi.Input<inputs.healthcare.ServiceAuthenticationConfiguration>;
    /**
     * A `corsConfiguration` block as defined below.
     */
    readonly corsConfiguration?: pulumi.Input<inputs.healthcare.ServiceCorsConfiguration>;
    /**
     * The provisioned throughput for the backing database. Range of `400`-`1000`. Defaults to `400`.
     */
    readonly cosmosdbThroughput?: pulumi.Input<number>;
    /**
     * The type of the service. Values at time of publication are: `fhir`, `fhir-Stu3` and `fhir-R4`. Default value is `fhir`.
     */
    readonly kind?: pulumi.Input<string>;
    /**
     * Specifies the supported Azure Region where the Service should be created.
     */
    readonly location?: pulumi.Input<string>;
    /**
     * The name of the service instance. Used for service endpoint, must be unique within the audience.
     */
    readonly name?: pulumi.Input<string>;
    /**
     * The name of the Resource Group in which to create the Service.
     */
    readonly resourceGroupName?: pulumi.Input<string>;
    /**
     * A mapping of tags to assign to the resource.
     */
    readonly tags?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
}

/**
 * The set of arguments for constructing a Service resource.
 */
export interface ServiceArgs {
    readonly accessPolicyObjectIds: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * An `authenticationConfiguration` block as defined below.
     */
    readonly authenticationConfiguration?: pulumi.Input<inputs.healthcare.ServiceAuthenticationConfiguration>;
    /**
     * A `corsConfiguration` block as defined below.
     */
    readonly corsConfiguration?: pulumi.Input<inputs.healthcare.ServiceCorsConfiguration>;
    /**
     * The provisioned throughput for the backing database. Range of `400`-`1000`. Defaults to `400`.
     */
    readonly cosmosdbThroughput?: pulumi.Input<number>;
    /**
     * The type of the service. Values at time of publication are: `fhir`, `fhir-Stu3` and `fhir-R4`. Default value is `fhir`.
     */
    readonly kind?: pulumi.Input<string>;
    /**
     * Specifies the supported Azure Region where the Service should be created.
     */
    readonly location?: pulumi.Input<string>;
    /**
     * The name of the service instance. Used for service endpoint, must be unique within the audience.
     */
    readonly name?: pulumi.Input<string>;
    /**
     * The name of the Resource Group in which to create the Service.
     */
    readonly resourceGroupName: pulumi.Input<string>;
    /**
     * A mapping of tags to assign to the resource.
     */
    readonly tags?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
}
