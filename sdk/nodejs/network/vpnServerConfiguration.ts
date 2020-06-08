// *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "../types/input";
import * as outputs from "../types/output";
import * as utilities from "../utilities";

/**
 * Manages a VPN Server Configuration.
 *
 * ## Example Usage
 *
 *
 *
 * ```typescript
 * import * as pulumi from "@pulumi/pulumi";
 * import * as azure from "@pulumi/azure";
 *
 * const example = new azure.core.ResourceGroup("example", {location: "West Europe"});
 * const test = new azure.network.VpnServerConfiguration("test", {
 *     resourceGroupName: example.name,
 *     location: example.location,
 *     vpnAuthenticationTypes: ["Certificate"],
 *     client_root_certificate: [{
 *         name: "DigiCert-Federated-ID-Root-CA",
 *         publicCertData: `MIIDuzCCAqOgAwIBAgIQCHTZWCM+IlfFIRXIvyKSrjANBgkqhkiG9w0BAQsFADBn
 * MQswCQYDVQQGEwJVUzEVMBMGA1UEChMMRGlnaUNlcnQgSW5jMRkwFwYDVQQLExB3
 * d3cuZGlnaWNlcnQuY29tMSYwJAYDVQQDEx1EaWdpQ2VydCBGZWRlcmF0ZWQgSUQg
 * Um9vdCBDQTAeFw0xMzAxMTUxMjAwMDBaFw0zMzAxMTUxMjAwMDBaMGcxCzAJBgNV
 * BAYTAlVTMRUwEwYDVQQKEwxEaWdpQ2VydCBJbmMxGTAXBgNVBAsTEHd3dy5kaWdp
 * Y2VydC5jb20xJjAkBgNVBAMTHURpZ2lDZXJ0IEZlZGVyYXRlZCBJRCBSb290IENB
 * MIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEAvAEB4pcCqnNNOWE6Ur5j
 * QPUH+1y1F9KdHTRSza6k5iDlXq1kGS1qAkuKtw9JsiNRrjltmFnzMZRBbX8Tlfl8
 * zAhBmb6dDduDGED01kBsTkgywYPxXVTKec0WxYEEF0oMn4wSYNl0lt2eJAKHXjNf
 * GTwiibdP8CUR2ghSM2sUTI8Nt1Omfc4SMHhGhYD64uJMbX98THQ/4LMGuYegou+d
 * GTiahfHtjn7AboSEknwAMJHCh5RlYZZ6B1O4QbKJ+34Q0eKgnI3X6Vc9u0zf6DH8
 * Dk+4zQDYRRTqTnVO3VT8jzqDlCRuNtq6YvryOWN74/dq8LQhUnXHvFyrsdMaE1X2
 * DwIDAQABo2MwYTAPBgNVHRMBAf8EBTADAQH/MA4GA1UdDwEB/wQEAwIBhjAdBgNV
 * HQ4EFgQUGRdkFnbGt1EWjKwbUne+5OaZvRYwHwYDVR0jBBgwFoAUGRdkFnbGt1EW
 * jKwbUne+5OaZvRYwDQYJKoZIhvcNAQELBQADggEBAHcqsHkrjpESqfuVTRiptJfP
 * 9JbdtWqRTmOf6uJi2c8YVqI6XlKXsD8C1dUUaaHKLUJzvKiazibVuBwMIT84AyqR
 * QELn3e0BtgEymEygMU569b01ZPxoFSnNXc7qDZBDef8WfqAV/sxkTi8L9BkmFYfL
 * uGLOhRJOFprPdoDIUBB+tmCl3oDcBy3vnUeOEioz8zAkprcb3GHwHAK+vHmmfgcn
 * WsfMLH4JCLa/tRYL+Rw/N3ybCkDp00s0WUZ+AoDywSl0Q/ZEnNY0MsFiw6LyIdbq
 * M/s/1JRtO3bDSzD9TazRVzn2oBqzSa8VgIo5C1nOnoAKJTlsClJKvIhnRlaLQqk=
 * `,
 *     }],
 * });
 * ```
 */
export class VpnServerConfiguration extends pulumi.CustomResource {
    /**
     * Get an existing VpnServerConfiguration resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: VpnServerConfigurationState, opts?: pulumi.CustomResourceOptions): VpnServerConfiguration {
        return new VpnServerConfiguration(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'azure:network/vpnServerConfiguration:VpnServerConfiguration';

    /**
     * Returns true if the given object is an instance of VpnServerConfiguration.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is VpnServerConfiguration {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === VpnServerConfiguration.__pulumiType;
    }

    /**
     * A `azureActiveDirectoryAuthentication` block as defined below.
     */
    public readonly azureActiveDirectoryAuthentications!: pulumi.Output<outputs.network.VpnServerConfigurationAzureActiveDirectoryAuthentication[] | undefined>;
    /**
     * One or more `clientRevokedCertificate` blocks as defined below.
     */
    public readonly clientRevokedCertificates!: pulumi.Output<outputs.network.VpnServerConfigurationClientRevokedCertificate[] | undefined>;
    /**
     * One or more `clientRootCertificate` blocks as defined below.
     */
    public readonly clientRootCertificates!: pulumi.Output<outputs.network.VpnServerConfigurationClientRootCertificate[] | undefined>;
    /**
     * A `ipsecPolicy` block as defined below.
     */
    public readonly ipsecPolicy!: pulumi.Output<outputs.network.VpnServerConfigurationIpsecPolicy | undefined>;
    /**
     * The Azure location where this VPN Server Configuration should be created. Changing this forces a new resource to be created.
     */
    public readonly location!: pulumi.Output<string>;
    /**
     * The Name which should be used for this VPN Server Configuration. Changing this forces a new resource to be created.
     */
    public readonly name!: pulumi.Output<string>;
    /**
     * A `radiusServer` block as defined below.
     */
    public readonly radiusServer!: pulumi.Output<outputs.network.VpnServerConfigurationRadiusServer | undefined>;
    /**
     * The Name of the Resource Group in which this VPN Server Configuration should be created. Changing this forces a new resource to be created.
     */
    public readonly resourceGroupName!: pulumi.Output<string>;
    /**
     * A mapping of tags to assign to the resource.
     */
    public readonly tags!: pulumi.Output<{[key: string]: string} | undefined>;
    /**
     * A list of one of more Authentication Types applicable for this VPN Server Configuration. Possible values are `AAD` (Azure Active Directory), `Certificate` and `Radius`.
     */
    public readonly vpnAuthenticationTypes!: pulumi.Output<string>;
    /**
     * A list of VPN Protocols to use for this Server Configuration. Possible values are `IkeV2` and `OpenVPN`.
     */
    public readonly vpnProtocols!: pulumi.Output<string[]>;

    /**
     * Create a VpnServerConfiguration resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: VpnServerConfigurationArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: VpnServerConfigurationArgs | VpnServerConfigurationState, opts?: pulumi.CustomResourceOptions) {
        let inputs: pulumi.Inputs = {};
        if (opts && opts.id) {
            const state = argsOrState as VpnServerConfigurationState | undefined;
            inputs["azureActiveDirectoryAuthentications"] = state ? state.azureActiveDirectoryAuthentications : undefined;
            inputs["clientRevokedCertificates"] = state ? state.clientRevokedCertificates : undefined;
            inputs["clientRootCertificates"] = state ? state.clientRootCertificates : undefined;
            inputs["ipsecPolicy"] = state ? state.ipsecPolicy : undefined;
            inputs["location"] = state ? state.location : undefined;
            inputs["name"] = state ? state.name : undefined;
            inputs["radiusServer"] = state ? state.radiusServer : undefined;
            inputs["resourceGroupName"] = state ? state.resourceGroupName : undefined;
            inputs["tags"] = state ? state.tags : undefined;
            inputs["vpnAuthenticationTypes"] = state ? state.vpnAuthenticationTypes : undefined;
            inputs["vpnProtocols"] = state ? state.vpnProtocols : undefined;
        } else {
            const args = argsOrState as VpnServerConfigurationArgs | undefined;
            if (!args || args.resourceGroupName === undefined) {
                throw new Error("Missing required property 'resourceGroupName'");
            }
            if (!args || args.vpnAuthenticationTypes === undefined) {
                throw new Error("Missing required property 'vpnAuthenticationTypes'");
            }
            inputs["azureActiveDirectoryAuthentications"] = args ? args.azureActiveDirectoryAuthentications : undefined;
            inputs["clientRevokedCertificates"] = args ? args.clientRevokedCertificates : undefined;
            inputs["clientRootCertificates"] = args ? args.clientRootCertificates : undefined;
            inputs["ipsecPolicy"] = args ? args.ipsecPolicy : undefined;
            inputs["location"] = args ? args.location : undefined;
            inputs["name"] = args ? args.name : undefined;
            inputs["radiusServer"] = args ? args.radiusServer : undefined;
            inputs["resourceGroupName"] = args ? args.resourceGroupName : undefined;
            inputs["tags"] = args ? args.tags : undefined;
            inputs["vpnAuthenticationTypes"] = args ? args.vpnAuthenticationTypes : undefined;
            inputs["vpnProtocols"] = args ? args.vpnProtocols : undefined;
        }
        if (!opts) {
            opts = {}
        }

        if (!opts.version) {
            opts.version = utilities.getVersion();
        }
        super(VpnServerConfiguration.__pulumiType, name, inputs, opts);
    }
}

/**
 * Input properties used for looking up and filtering VpnServerConfiguration resources.
 */
export interface VpnServerConfigurationState {
    /**
     * A `azureActiveDirectoryAuthentication` block as defined below.
     */
    readonly azureActiveDirectoryAuthentications?: pulumi.Input<pulumi.Input<inputs.network.VpnServerConfigurationAzureActiveDirectoryAuthentication>[]>;
    /**
     * One or more `clientRevokedCertificate` blocks as defined below.
     */
    readonly clientRevokedCertificates?: pulumi.Input<pulumi.Input<inputs.network.VpnServerConfigurationClientRevokedCertificate>[]>;
    /**
     * One or more `clientRootCertificate` blocks as defined below.
     */
    readonly clientRootCertificates?: pulumi.Input<pulumi.Input<inputs.network.VpnServerConfigurationClientRootCertificate>[]>;
    /**
     * A `ipsecPolicy` block as defined below.
     */
    readonly ipsecPolicy?: pulumi.Input<inputs.network.VpnServerConfigurationIpsecPolicy>;
    /**
     * The Azure location where this VPN Server Configuration should be created. Changing this forces a new resource to be created.
     */
    readonly location?: pulumi.Input<string>;
    /**
     * The Name which should be used for this VPN Server Configuration. Changing this forces a new resource to be created.
     */
    readonly name?: pulumi.Input<string>;
    /**
     * A `radiusServer` block as defined below.
     */
    readonly radiusServer?: pulumi.Input<inputs.network.VpnServerConfigurationRadiusServer>;
    /**
     * The Name of the Resource Group in which this VPN Server Configuration should be created. Changing this forces a new resource to be created.
     */
    readonly resourceGroupName?: pulumi.Input<string>;
    /**
     * A mapping of tags to assign to the resource.
     */
    readonly tags?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
    /**
     * A list of one of more Authentication Types applicable for this VPN Server Configuration. Possible values are `AAD` (Azure Active Directory), `Certificate` and `Radius`.
     */
    readonly vpnAuthenticationTypes?: pulumi.Input<string>;
    /**
     * A list of VPN Protocols to use for this Server Configuration. Possible values are `IkeV2` and `OpenVPN`.
     */
    readonly vpnProtocols?: pulumi.Input<pulumi.Input<string>[]>;
}

/**
 * The set of arguments for constructing a VpnServerConfiguration resource.
 */
export interface VpnServerConfigurationArgs {
    /**
     * A `azureActiveDirectoryAuthentication` block as defined below.
     */
    readonly azureActiveDirectoryAuthentications?: pulumi.Input<pulumi.Input<inputs.network.VpnServerConfigurationAzureActiveDirectoryAuthentication>[]>;
    /**
     * One or more `clientRevokedCertificate` blocks as defined below.
     */
    readonly clientRevokedCertificates?: pulumi.Input<pulumi.Input<inputs.network.VpnServerConfigurationClientRevokedCertificate>[]>;
    /**
     * One or more `clientRootCertificate` blocks as defined below.
     */
    readonly clientRootCertificates?: pulumi.Input<pulumi.Input<inputs.network.VpnServerConfigurationClientRootCertificate>[]>;
    /**
     * A `ipsecPolicy` block as defined below.
     */
    readonly ipsecPolicy?: pulumi.Input<inputs.network.VpnServerConfigurationIpsecPolicy>;
    /**
     * The Azure location where this VPN Server Configuration should be created. Changing this forces a new resource to be created.
     */
    readonly location?: pulumi.Input<string>;
    /**
     * The Name which should be used for this VPN Server Configuration. Changing this forces a new resource to be created.
     */
    readonly name?: pulumi.Input<string>;
    /**
     * A `radiusServer` block as defined below.
     */
    readonly radiusServer?: pulumi.Input<inputs.network.VpnServerConfigurationRadiusServer>;
    /**
     * The Name of the Resource Group in which this VPN Server Configuration should be created. Changing this forces a new resource to be created.
     */
    readonly resourceGroupName: pulumi.Input<string>;
    /**
     * A mapping of tags to assign to the resource.
     */
    readonly tags?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
    /**
     * A list of one of more Authentication Types applicable for this VPN Server Configuration. Possible values are `AAD` (Azure Active Directory), `Certificate` and `Radius`.
     */
    readonly vpnAuthenticationTypes: pulumi.Input<string>;
    /**
     * A list of VPN Protocols to use for this Server Configuration. Possible values are `IkeV2` and `OpenVPN`.
     */
    readonly vpnProtocols?: pulumi.Input<pulumi.Input<string>[]>;
}
