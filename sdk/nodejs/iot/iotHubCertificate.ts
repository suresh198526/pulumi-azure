// *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "../types/input";
import * as outputs from "../types/output";
import * as utilities from "../utilities";

/**
 * Manages an IotHub Device Provisioning Service Certificate.
 *
 * > This content is derived from https://github.com/terraform-providers/terraform-provider-azurerm/blob/master/website/docs/r/iothub_dps_certificate.html.markdown.
 */
export class IotHubCertificate extends pulumi.CustomResource {
    /**
     * Get an existing IotHubCertificate resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: IotHubCertificateState, opts?: pulumi.CustomResourceOptions): IotHubCertificate {
        return new IotHubCertificate(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'azure:iot/iotHubCertificate:IotHubCertificate';

    /**
     * Returns true if the given object is an instance of IotHubCertificate.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is IotHubCertificate {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === IotHubCertificate.__pulumiType;
    }

    /**
     * The Base-64 representation of the X509 leaf certificate .cer file or just a .pem file content.
     */
    public readonly certificateContent!: pulumi.Output<string>;
    /**
     * The name of the IoT Device Provisioning Service that this certificate will be attached to. Changing this forces a new resource to be created.
     */
    public readonly iotDpsName!: pulumi.Output<string>;
    /**
     * Specifies the name of the Iot Device Provisioning Service Certificate resource. Changing this forces a new resource to be created.
     */
    public readonly name!: pulumi.Output<string>;
    /**
     * The name of the resource group under which the Iot Device Provisioning Service Certificate resource has to be created. Changing this forces a new resource to be created.
     */
    public readonly resourceGroupName!: pulumi.Output<string>;

    /**
     * Create a IotHubCertificate resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: IotHubCertificateArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: IotHubCertificateArgs | IotHubCertificateState, opts?: pulumi.CustomResourceOptions) {
        let inputs: pulumi.Inputs = {};
        if (opts && opts.id) {
            const state = argsOrState as IotHubCertificateState | undefined;
            inputs["certificateContent"] = state ? state.certificateContent : undefined;
            inputs["iotDpsName"] = state ? state.iotDpsName : undefined;
            inputs["name"] = state ? state.name : undefined;
            inputs["resourceGroupName"] = state ? state.resourceGroupName : undefined;
        } else {
            const args = argsOrState as IotHubCertificateArgs | undefined;
            if (!args || args.certificateContent === undefined) {
                throw new Error("Missing required property 'certificateContent'");
            }
            if (!args || args.iotDpsName === undefined) {
                throw new Error("Missing required property 'iotDpsName'");
            }
            if (!args || args.resourceGroupName === undefined) {
                throw new Error("Missing required property 'resourceGroupName'");
            }
            inputs["certificateContent"] = args ? args.certificateContent : undefined;
            inputs["iotDpsName"] = args ? args.iotDpsName : undefined;
            inputs["name"] = args ? args.name : undefined;
            inputs["resourceGroupName"] = args ? args.resourceGroupName : undefined;
        }
        if (!opts) {
            opts = {}
        }

        if (!opts.version) {
            opts.version = utilities.getVersion();
        }
        super(IotHubCertificate.__pulumiType, name, inputs, opts);
    }
}

/**
 * Input properties used for looking up and filtering IotHubCertificate resources.
 */
export interface IotHubCertificateState {
    /**
     * The Base-64 representation of the X509 leaf certificate .cer file or just a .pem file content.
     */
    readonly certificateContent?: pulumi.Input<string>;
    /**
     * The name of the IoT Device Provisioning Service that this certificate will be attached to. Changing this forces a new resource to be created.
     */
    readonly iotDpsName?: pulumi.Input<string>;
    /**
     * Specifies the name of the Iot Device Provisioning Service Certificate resource. Changing this forces a new resource to be created.
     */
    readonly name?: pulumi.Input<string>;
    /**
     * The name of the resource group under which the Iot Device Provisioning Service Certificate resource has to be created. Changing this forces a new resource to be created.
     */
    readonly resourceGroupName?: pulumi.Input<string>;
}

/**
 * The set of arguments for constructing a IotHubCertificate resource.
 */
export interface IotHubCertificateArgs {
    /**
     * The Base-64 representation of the X509 leaf certificate .cer file or just a .pem file content.
     */
    readonly certificateContent: pulumi.Input<string>;
    /**
     * The name of the IoT Device Provisioning Service that this certificate will be attached to. Changing this forces a new resource to be created.
     */
    readonly iotDpsName: pulumi.Input<string>;
    /**
     * Specifies the name of the Iot Device Provisioning Service Certificate resource. Changing this forces a new resource to be created.
     */
    readonly name?: pulumi.Input<string>;
    /**
     * The name of the resource group under which the Iot Device Provisioning Service Certificate resource has to be created. Changing this forces a new resource to be created.
     */
    readonly resourceGroupName: pulumi.Input<string>;
}
