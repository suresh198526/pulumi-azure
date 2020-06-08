// *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "../utilities";

/**
 * Manages an Certificate within an API Management Service.
 */
export class Certificate extends pulumi.CustomResource {
    /**
     * Get an existing Certificate resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: CertificateState, opts?: pulumi.CustomResourceOptions): Certificate {
        return new Certificate(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'azure:apimanagement/certificate:Certificate';

    /**
     * Returns true if the given object is an instance of Certificate.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is Certificate {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === Certificate.__pulumiType;
    }

    /**
     * The Name of the API Management Service where this Service should be created. Changing this forces a new resource to be created.
     */
    public readonly apiManagementName!: pulumi.Output<string>;
    /**
     * The base-64 encoded certificate data, which must be a PFX file. Changing this forces a new resource to be created.
     */
    public readonly data!: pulumi.Output<string>;
    /**
     * The Expiration Date of this Certificate, formatted as an RFC3339 string.
     */
    public /*out*/ readonly expiration!: pulumi.Output<string>;
    /**
     * The name of the API Management Certificate. Changing this forces a new resource to be created.
     */
    public readonly name!: pulumi.Output<string>;
    /**
     * The password used for this certificate. Changing this forces a new resource to be created.
     */
    public readonly password!: pulumi.Output<string | undefined>;
    /**
     * The Name of the Resource Group where the API Management Service exists. Changing this forces a new resource to be created.
     */
    public readonly resourceGroupName!: pulumi.Output<string>;
    /**
     * The Subject of this Certificate.
     */
    public /*out*/ readonly subject!: pulumi.Output<string>;
    /**
     * The Thumbprint of this Certificate.
     */
    public /*out*/ readonly thumbprint!: pulumi.Output<string>;

    /**
     * Create a Certificate resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: CertificateArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: CertificateArgs | CertificateState, opts?: pulumi.CustomResourceOptions) {
        let inputs: pulumi.Inputs = {};
        if (opts && opts.id) {
            const state = argsOrState as CertificateState | undefined;
            inputs["apiManagementName"] = state ? state.apiManagementName : undefined;
            inputs["data"] = state ? state.data : undefined;
            inputs["expiration"] = state ? state.expiration : undefined;
            inputs["name"] = state ? state.name : undefined;
            inputs["password"] = state ? state.password : undefined;
            inputs["resourceGroupName"] = state ? state.resourceGroupName : undefined;
            inputs["subject"] = state ? state.subject : undefined;
            inputs["thumbprint"] = state ? state.thumbprint : undefined;
        } else {
            const args = argsOrState as CertificateArgs | undefined;
            if (!args || args.apiManagementName === undefined) {
                throw new Error("Missing required property 'apiManagementName'");
            }
            if (!args || args.data === undefined) {
                throw new Error("Missing required property 'data'");
            }
            if (!args || args.resourceGroupName === undefined) {
                throw new Error("Missing required property 'resourceGroupName'");
            }
            inputs["apiManagementName"] = args ? args.apiManagementName : undefined;
            inputs["data"] = args ? args.data : undefined;
            inputs["name"] = args ? args.name : undefined;
            inputs["password"] = args ? args.password : undefined;
            inputs["resourceGroupName"] = args ? args.resourceGroupName : undefined;
            inputs["expiration"] = undefined /*out*/;
            inputs["subject"] = undefined /*out*/;
            inputs["thumbprint"] = undefined /*out*/;
        }
        if (!opts) {
            opts = {}
        }

        if (!opts.version) {
            opts.version = utilities.getVersion();
        }
        super(Certificate.__pulumiType, name, inputs, opts);
    }
}

/**
 * Input properties used for looking up and filtering Certificate resources.
 */
export interface CertificateState {
    /**
     * The Name of the API Management Service where this Service should be created. Changing this forces a new resource to be created.
     */
    readonly apiManagementName?: pulumi.Input<string>;
    /**
     * The base-64 encoded certificate data, which must be a PFX file. Changing this forces a new resource to be created.
     */
    readonly data?: pulumi.Input<string>;
    /**
     * The Expiration Date of this Certificate, formatted as an RFC3339 string.
     */
    readonly expiration?: pulumi.Input<string>;
    /**
     * The name of the API Management Certificate. Changing this forces a new resource to be created.
     */
    readonly name?: pulumi.Input<string>;
    /**
     * The password used for this certificate. Changing this forces a new resource to be created.
     */
    readonly password?: pulumi.Input<string>;
    /**
     * The Name of the Resource Group where the API Management Service exists. Changing this forces a new resource to be created.
     */
    readonly resourceGroupName?: pulumi.Input<string>;
    /**
     * The Subject of this Certificate.
     */
    readonly subject?: pulumi.Input<string>;
    /**
     * The Thumbprint of this Certificate.
     */
    readonly thumbprint?: pulumi.Input<string>;
}

/**
 * The set of arguments for constructing a Certificate resource.
 */
export interface CertificateArgs {
    /**
     * The Name of the API Management Service where this Service should be created. Changing this forces a new resource to be created.
     */
    readonly apiManagementName: pulumi.Input<string>;
    /**
     * The base-64 encoded certificate data, which must be a PFX file. Changing this forces a new resource to be created.
     */
    readonly data: pulumi.Input<string>;
    /**
     * The name of the API Management Certificate. Changing this forces a new resource to be created.
     */
    readonly name?: pulumi.Input<string>;
    /**
     * The password used for this certificate. Changing this forces a new resource to be created.
     */
    readonly password?: pulumi.Input<string>;
    /**
     * The Name of the Resource Group where the API Management Service exists. Changing this forces a new resource to be created.
     */
    readonly resourceGroupName: pulumi.Input<string>;
}
