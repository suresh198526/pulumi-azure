// *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "../utilities";

/**
 * Manages an IotHub Device Provisioning Service Shared Access Policy
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
 * const exampleIotHubDps = new azure.iot.IotHubDps("exampleIotHubDps", {
 *     resourceGroupName: exampleResourceGroup.name,
 *     location: exampleResourceGroup.location,
 *     sku: {
 *         name: "S1",
 *         capacity: "1",
 *     },
 * });
 * const exampleDpsSharedAccessPolicy = new azure.iot.DpsSharedAccessPolicy("exampleDpsSharedAccessPolicy", {
 *     resourceGroupName: exampleResourceGroup.name,
 *     iothubDpsName: exampleIotHubDps.name,
 *     enrollmentWrite: true,
 *     enrollmentRead: true,
 * });
 * ```
 */
export class DpsSharedAccessPolicy extends pulumi.CustomResource {
    /**
     * Get an existing DpsSharedAccessPolicy resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: DpsSharedAccessPolicyState, opts?: pulumi.CustomResourceOptions): DpsSharedAccessPolicy {
        return new DpsSharedAccessPolicy(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'azure:iot/dpsSharedAccessPolicy:DpsSharedAccessPolicy';

    /**
     * Returns true if the given object is an instance of DpsSharedAccessPolicy.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is DpsSharedAccessPolicy {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === DpsSharedAccessPolicy.__pulumiType;
    }

    /**
     * Adds `EnrollmentRead` permission to this Shared Access Account. It allows read access to enrollment data.
     */
    public readonly enrollmentRead!: pulumi.Output<boolean | undefined>;
    /**
     * Adds `EnrollmentWrite` permission to this Shared Access Account. It allows write access to enrollment data.
     */
    public readonly enrollmentWrite!: pulumi.Output<boolean | undefined>;
    /**
     * The name of the IoT Hub Device Provisioning service to which this Shared Access Policy belongs. Changing this forces a new resource to be created.
     */
    public readonly iothubDpsName!: pulumi.Output<string>;
    /**
     * Specifies the name of the IotHub Shared Access Policy resource. Changing this forces a new resource to be created.
     */
    public readonly name!: pulumi.Output<string>;
    /**
     * The primary connection string of the Shared Access Policy.
     */
    public /*out*/ readonly primaryConnectionString!: pulumi.Output<string>;
    /**
     * The primary key used to create the authentication token.
     */
    public /*out*/ readonly primaryKey!: pulumi.Output<string>;
    /**
     * Adds `RegistrationStatusRead` permission to this Shared Access Account. It allows read access to device registrations.
     */
    public readonly registrationRead!: pulumi.Output<boolean | undefined>;
    /**
     * Adds `RegistrationStatusWrite` permission to this Shared Access Account. It allows write access to device registrations.
     */
    public readonly registrationWrite!: pulumi.Output<boolean | undefined>;
    /**
     * The name of the resource group under which the IotHub Shared Access Policy resource has to be created. Changing this forces a new resource to be created.
     */
    public readonly resourceGroupName!: pulumi.Output<string>;
    /**
     * The secondary connection string of the Shared Access Policy.
     */
    public /*out*/ readonly secondaryConnectionString!: pulumi.Output<string>;
    /**
     * The secondary key used to create the authentication token.
     */
    public /*out*/ readonly secondaryKey!: pulumi.Output<string>;
    /**
     * Adds `ServiceConfig` permission to this Shared Access Account. It allows configuration of the Device Provisioning Service.
     */
    public readonly serviceConfig!: pulumi.Output<boolean | undefined>;

    /**
     * Create a DpsSharedAccessPolicy resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: DpsSharedAccessPolicyArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: DpsSharedAccessPolicyArgs | DpsSharedAccessPolicyState, opts?: pulumi.CustomResourceOptions) {
        let inputs: pulumi.Inputs = {};
        if (opts && opts.id) {
            const state = argsOrState as DpsSharedAccessPolicyState | undefined;
            inputs["enrollmentRead"] = state ? state.enrollmentRead : undefined;
            inputs["enrollmentWrite"] = state ? state.enrollmentWrite : undefined;
            inputs["iothubDpsName"] = state ? state.iothubDpsName : undefined;
            inputs["name"] = state ? state.name : undefined;
            inputs["primaryConnectionString"] = state ? state.primaryConnectionString : undefined;
            inputs["primaryKey"] = state ? state.primaryKey : undefined;
            inputs["registrationRead"] = state ? state.registrationRead : undefined;
            inputs["registrationWrite"] = state ? state.registrationWrite : undefined;
            inputs["resourceGroupName"] = state ? state.resourceGroupName : undefined;
            inputs["secondaryConnectionString"] = state ? state.secondaryConnectionString : undefined;
            inputs["secondaryKey"] = state ? state.secondaryKey : undefined;
            inputs["serviceConfig"] = state ? state.serviceConfig : undefined;
        } else {
            const args = argsOrState as DpsSharedAccessPolicyArgs | undefined;
            if (!args || args.iothubDpsName === undefined) {
                throw new Error("Missing required property 'iothubDpsName'");
            }
            if (!args || args.resourceGroupName === undefined) {
                throw new Error("Missing required property 'resourceGroupName'");
            }
            inputs["enrollmentRead"] = args ? args.enrollmentRead : undefined;
            inputs["enrollmentWrite"] = args ? args.enrollmentWrite : undefined;
            inputs["iothubDpsName"] = args ? args.iothubDpsName : undefined;
            inputs["name"] = args ? args.name : undefined;
            inputs["registrationRead"] = args ? args.registrationRead : undefined;
            inputs["registrationWrite"] = args ? args.registrationWrite : undefined;
            inputs["resourceGroupName"] = args ? args.resourceGroupName : undefined;
            inputs["serviceConfig"] = args ? args.serviceConfig : undefined;
            inputs["primaryConnectionString"] = undefined /*out*/;
            inputs["primaryKey"] = undefined /*out*/;
            inputs["secondaryConnectionString"] = undefined /*out*/;
            inputs["secondaryKey"] = undefined /*out*/;
        }
        if (!opts) {
            opts = {}
        }

        if (!opts.version) {
            opts.version = utilities.getVersion();
        }
        super(DpsSharedAccessPolicy.__pulumiType, name, inputs, opts);
    }
}

/**
 * Input properties used for looking up and filtering DpsSharedAccessPolicy resources.
 */
export interface DpsSharedAccessPolicyState {
    /**
     * Adds `EnrollmentRead` permission to this Shared Access Account. It allows read access to enrollment data.
     */
    readonly enrollmentRead?: pulumi.Input<boolean>;
    /**
     * Adds `EnrollmentWrite` permission to this Shared Access Account. It allows write access to enrollment data.
     */
    readonly enrollmentWrite?: pulumi.Input<boolean>;
    /**
     * The name of the IoT Hub Device Provisioning service to which this Shared Access Policy belongs. Changing this forces a new resource to be created.
     */
    readonly iothubDpsName?: pulumi.Input<string>;
    /**
     * Specifies the name of the IotHub Shared Access Policy resource. Changing this forces a new resource to be created.
     */
    readonly name?: pulumi.Input<string>;
    /**
     * The primary connection string of the Shared Access Policy.
     */
    readonly primaryConnectionString?: pulumi.Input<string>;
    /**
     * The primary key used to create the authentication token.
     */
    readonly primaryKey?: pulumi.Input<string>;
    /**
     * Adds `RegistrationStatusRead` permission to this Shared Access Account. It allows read access to device registrations.
     */
    readonly registrationRead?: pulumi.Input<boolean>;
    /**
     * Adds `RegistrationStatusWrite` permission to this Shared Access Account. It allows write access to device registrations.
     */
    readonly registrationWrite?: pulumi.Input<boolean>;
    /**
     * The name of the resource group under which the IotHub Shared Access Policy resource has to be created. Changing this forces a new resource to be created.
     */
    readonly resourceGroupName?: pulumi.Input<string>;
    /**
     * The secondary connection string of the Shared Access Policy.
     */
    readonly secondaryConnectionString?: pulumi.Input<string>;
    /**
     * The secondary key used to create the authentication token.
     */
    readonly secondaryKey?: pulumi.Input<string>;
    /**
     * Adds `ServiceConfig` permission to this Shared Access Account. It allows configuration of the Device Provisioning Service.
     */
    readonly serviceConfig?: pulumi.Input<boolean>;
}

/**
 * The set of arguments for constructing a DpsSharedAccessPolicy resource.
 */
export interface DpsSharedAccessPolicyArgs {
    /**
     * Adds `EnrollmentRead` permission to this Shared Access Account. It allows read access to enrollment data.
     */
    readonly enrollmentRead?: pulumi.Input<boolean>;
    /**
     * Adds `EnrollmentWrite` permission to this Shared Access Account. It allows write access to enrollment data.
     */
    readonly enrollmentWrite?: pulumi.Input<boolean>;
    /**
     * The name of the IoT Hub Device Provisioning service to which this Shared Access Policy belongs. Changing this forces a new resource to be created.
     */
    readonly iothubDpsName: pulumi.Input<string>;
    /**
     * Specifies the name of the IotHub Shared Access Policy resource. Changing this forces a new resource to be created.
     */
    readonly name?: pulumi.Input<string>;
    /**
     * Adds `RegistrationStatusRead` permission to this Shared Access Account. It allows read access to device registrations.
     */
    readonly registrationRead?: pulumi.Input<boolean>;
    /**
     * Adds `RegistrationStatusWrite` permission to this Shared Access Account. It allows write access to device registrations.
     */
    readonly registrationWrite?: pulumi.Input<boolean>;
    /**
     * The name of the resource group under which the IotHub Shared Access Policy resource has to be created. Changing this forces a new resource to be created.
     */
    readonly resourceGroupName: pulumi.Input<string>;
    /**
     * Adds `ServiceConfig` permission to this Shared Access Account. It allows configuration of the Device Provisioning Service.
     */
    readonly serviceConfig?: pulumi.Input<boolean>;
}
