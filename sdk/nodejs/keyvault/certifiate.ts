// *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "../types/input";
import * as outputs from "../types/output";
import * as utilities from "../utilities";

/**
 * Manages a Key Vault Certificate.
 *
 * > This content is derived from https://github.com/terraform-providers/terraform-provider-azurerm/blob/master/website/docs/r/key_vault_certificate_legacy.html.markdown.
 */
export class Certifiate extends pulumi.CustomResource {
    /**
     * Get an existing Certifiate resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: CertifiateState, opts?: pulumi.CustomResourceOptions): Certifiate {
        return new Certifiate(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'azure:keyvault/certifiate:Certifiate';

    /**
     * Returns true if the given object is an instance of Certifiate.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is Certifiate {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === Certifiate.__pulumiType;
    }

    /**
     * A `certificate` block as defined below, used to Import an existing certificate.
     */
    public readonly certificate!: pulumi.Output<outputs.keyvault.CertifiateCertificate | undefined>;
    /**
     * The raw Key Vault Certificate data represented as a hexadecimal string.
     */
    public /*out*/ readonly certificateData!: pulumi.Output<string>;
    /**
     * A `certificatePolicy` block as defined below.
     */
    public readonly certificatePolicy!: pulumi.Output<outputs.keyvault.CertifiateCertificatePolicy>;
    /**
     * The ID of the Key Vault where the Certificate should be created.
     */
    public readonly keyVaultId!: pulumi.Output<string>;
    /**
     * The name of the Certificate Issuer. Possible values include `Self` (for self-signed certificate), or `Unknown` (for a certificate issuing authority like `Let's Encrypt` and Azure direct supported ones). Changing this forces a new resource to be created.
     */
    public readonly name!: pulumi.Output<string>;
    /**
     * The ID of the associated Key Vault Secret.
     */
    public /*out*/ readonly secretId!: pulumi.Output<string>;
    /**
     * A mapping of tags to assign to the resource.
     */
    public readonly tags!: pulumi.Output<{[key: string]: string} | undefined>;
    /**
     * The X509 Thumbprint of the Key Vault Certificate represented as a hexadecimal string.
     */
    public /*out*/ readonly thumbprint!: pulumi.Output<string>;
    /**
     * The current version of the Key Vault Certificate.
     */
    public /*out*/ readonly version!: pulumi.Output<string>;

    /**
     * Create a Certifiate resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: CertifiateArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: CertifiateArgs | CertifiateState, opts?: pulumi.CustomResourceOptions) {
        let inputs: pulumi.Inputs = {};
        if (opts && opts.id) {
            const state = argsOrState as CertifiateState | undefined;
            inputs["certificate"] = state ? state.certificate : undefined;
            inputs["certificateData"] = state ? state.certificateData : undefined;
            inputs["certificatePolicy"] = state ? state.certificatePolicy : undefined;
            inputs["keyVaultId"] = state ? state.keyVaultId : undefined;
            inputs["name"] = state ? state.name : undefined;
            inputs["secretId"] = state ? state.secretId : undefined;
            inputs["tags"] = state ? state.tags : undefined;
            inputs["thumbprint"] = state ? state.thumbprint : undefined;
            inputs["version"] = state ? state.version : undefined;
        } else {
            const args = argsOrState as CertifiateArgs | undefined;
            if (!args || args.certificatePolicy === undefined) {
                throw new Error("Missing required property 'certificatePolicy'");
            }
            if (!args || args.keyVaultId === undefined) {
                throw new Error("Missing required property 'keyVaultId'");
            }
            inputs["certificate"] = args ? args.certificate : undefined;
            inputs["certificatePolicy"] = args ? args.certificatePolicy : undefined;
            inputs["keyVaultId"] = args ? args.keyVaultId : undefined;
            inputs["name"] = args ? args.name : undefined;
            inputs["tags"] = args ? args.tags : undefined;
            inputs["certificateData"] = undefined /*out*/;
            inputs["secretId"] = undefined /*out*/;
            inputs["thumbprint"] = undefined /*out*/;
            inputs["version"] = undefined /*out*/;
        }
        if (!opts) {
            opts = {}
        }

        if (!opts.version) {
            opts.version = utilities.getVersion();
        }
        super(Certifiate.__pulumiType, name, inputs, opts);
    }
}

/**
 * Input properties used for looking up and filtering Certifiate resources.
 */
export interface CertifiateState {
    /**
     * A `certificate` block as defined below, used to Import an existing certificate.
     */
    readonly certificate?: pulumi.Input<inputs.keyvault.CertifiateCertificate>;
    /**
     * The raw Key Vault Certificate data represented as a hexadecimal string.
     */
    readonly certificateData?: pulumi.Input<string>;
    /**
     * A `certificatePolicy` block as defined below.
     */
    readonly certificatePolicy?: pulumi.Input<inputs.keyvault.CertifiateCertificatePolicy>;
    /**
     * The ID of the Key Vault where the Certificate should be created.
     */
    readonly keyVaultId?: pulumi.Input<string>;
    /**
     * The name of the Certificate Issuer. Possible values include `Self` (for self-signed certificate), or `Unknown` (for a certificate issuing authority like `Let's Encrypt` and Azure direct supported ones). Changing this forces a new resource to be created.
     */
    readonly name?: pulumi.Input<string>;
    /**
     * The ID of the associated Key Vault Secret.
     */
    readonly secretId?: pulumi.Input<string>;
    /**
     * A mapping of tags to assign to the resource.
     */
    readonly tags?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
    /**
     * The X509 Thumbprint of the Key Vault Certificate represented as a hexadecimal string.
     */
    readonly thumbprint?: pulumi.Input<string>;
    /**
     * The current version of the Key Vault Certificate.
     */
    readonly version?: pulumi.Input<string>;
}

/**
 * The set of arguments for constructing a Certifiate resource.
 */
export interface CertifiateArgs {
    /**
     * A `certificate` block as defined below, used to Import an existing certificate.
     */
    readonly certificate?: pulumi.Input<inputs.keyvault.CertifiateCertificate>;
    /**
     * A `certificatePolicy` block as defined below.
     */
    readonly certificatePolicy: pulumi.Input<inputs.keyvault.CertifiateCertificatePolicy>;
    /**
     * The ID of the Key Vault where the Certificate should be created.
     */
    readonly keyVaultId: pulumi.Input<string>;
    /**
     * The name of the Certificate Issuer. Possible values include `Self` (for self-signed certificate), or `Unknown` (for a certificate issuing authority like `Let's Encrypt` and Azure direct supported ones). Changing this forces a new resource to be created.
     */
    readonly name?: pulumi.Input<string>;
    /**
     * A mapping of tags to assign to the resource.
     */
    readonly tags?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
}
