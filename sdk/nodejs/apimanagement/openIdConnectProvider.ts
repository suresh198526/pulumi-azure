// *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "../types/input";
import * as outputs from "../types/output";
import * as utilities from "../utilities";

/**
 * Manages an OpenID Connect Provider within a API Management Service.
 * 
 * ## Example Usage
 * 
 * ```typescript
 * import * as pulumi from "@pulumi/pulumi";
 * import * as azure from "@pulumi/azure";
 * 
 * const exampleResourceGroup = new azure.core.ResourceGroup("example", {
 *     location: "West Europe",
 * });
 * const exampleService = new azure.apimanagement.Service("example", {
 *     location: exampleResourceGroup.location,
 *     publisherEmail: "company@exmaple.com",
 *     publisherName: "My Company",
 *     resourceGroupName: exampleResourceGroup.name,
 *     skuName: "Developer_1",
 * });
 * const exampleOpenIdConnectProvider = new azure.apimanagement.OpenIdConnectProvider("example", {
 *     apiManagementName: exampleService.name,
 *     clientId: "00001111-2222-3333-4444-555566667777",
 *     displayName: "Example Provider",
 *     metadataEndpoint: "https://example.com/example",
 *     resourceGroupName: exampleResourceGroup.name,
 * });
 * ```
 *
 * > This content is derived from https://github.com/terraform-providers/terraform-provider-azurerm/blob/master/website/docs/r/api_management_openid_connect_provider.html.markdown.
 */
export class OpenIdConnectProvider extends pulumi.CustomResource {
    /**
     * Get an existing OpenIdConnectProvider resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: OpenIdConnectProviderState, opts?: pulumi.CustomResourceOptions): OpenIdConnectProvider {
        return new OpenIdConnectProvider(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'azure:apimanagement/openIdConnectProvider:OpenIdConnectProvider';

    /**
     * Returns true if the given object is an instance of OpenIdConnectProvider.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is OpenIdConnectProvider {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === OpenIdConnectProvider.__pulumiType;
    }

    /**
     * The name of the API Management Service in which this OpenID Connect Provider should be created. Changing this forces a new resource to be created.
     */
    public readonly apiManagementName!: pulumi.Output<string>;
    /**
     * The Client ID used for the Client Application.
     */
    public readonly clientId!: pulumi.Output<string>;
    /**
     * The Client Secret used for the Client Application.
     */
    public readonly clientSecret!: pulumi.Output<string>;
    /**
     * A description of this OpenID Connect Provider.
     */
    public readonly description!: pulumi.Output<string | undefined>;
    /**
     * A user-friendly name for this OpenID Connect Provider.
     */
    public readonly displayName!: pulumi.Output<string>;
    /**
     * The URI of the Metadata endpoint.
     */
    public readonly metadataEndpoint!: pulumi.Output<string>;
    /**
     * the Name of the OpenID Connect Provider which should be created within the API Management Service. Changing this forces a new resource to be created.
     */
    public readonly name!: pulumi.Output<string>;
    /**
     * The name of the Resource Group where the API Management Service exists. Changing this forces a new resource to be created.
     */
    public readonly resourceGroupName!: pulumi.Output<string>;

    /**
     * Create a OpenIdConnectProvider resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: OpenIdConnectProviderArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: OpenIdConnectProviderArgs | OpenIdConnectProviderState, opts?: pulumi.CustomResourceOptions) {
        let inputs: pulumi.Inputs = {};
        if (opts && opts.id) {
            const state = argsOrState as OpenIdConnectProviderState | undefined;
            inputs["apiManagementName"] = state ? state.apiManagementName : undefined;
            inputs["clientId"] = state ? state.clientId : undefined;
            inputs["clientSecret"] = state ? state.clientSecret : undefined;
            inputs["description"] = state ? state.description : undefined;
            inputs["displayName"] = state ? state.displayName : undefined;
            inputs["metadataEndpoint"] = state ? state.metadataEndpoint : undefined;
            inputs["name"] = state ? state.name : undefined;
            inputs["resourceGroupName"] = state ? state.resourceGroupName : undefined;
        } else {
            const args = argsOrState as OpenIdConnectProviderArgs | undefined;
            if (!args || args.apiManagementName === undefined) {
                throw new Error("Missing required property 'apiManagementName'");
            }
            if (!args || args.clientId === undefined) {
                throw new Error("Missing required property 'clientId'");
            }
            if (!args || args.clientSecret === undefined) {
                throw new Error("Missing required property 'clientSecret'");
            }
            if (!args || args.displayName === undefined) {
                throw new Error("Missing required property 'displayName'");
            }
            if (!args || args.metadataEndpoint === undefined) {
                throw new Error("Missing required property 'metadataEndpoint'");
            }
            if (!args || args.resourceGroupName === undefined) {
                throw new Error("Missing required property 'resourceGroupName'");
            }
            inputs["apiManagementName"] = args ? args.apiManagementName : undefined;
            inputs["clientId"] = args ? args.clientId : undefined;
            inputs["clientSecret"] = args ? args.clientSecret : undefined;
            inputs["description"] = args ? args.description : undefined;
            inputs["displayName"] = args ? args.displayName : undefined;
            inputs["metadataEndpoint"] = args ? args.metadataEndpoint : undefined;
            inputs["name"] = args ? args.name : undefined;
            inputs["resourceGroupName"] = args ? args.resourceGroupName : undefined;
        }
        if (!opts) {
            opts = {}
        }

        if (!opts.version) {
            opts.version = utilities.getVersion();
        }
        super(OpenIdConnectProvider.__pulumiType, name, inputs, opts);
    }
}

/**
 * Input properties used for looking up and filtering OpenIdConnectProvider resources.
 */
export interface OpenIdConnectProviderState {
    /**
     * The name of the API Management Service in which this OpenID Connect Provider should be created. Changing this forces a new resource to be created.
     */
    readonly apiManagementName?: pulumi.Input<string>;
    /**
     * The Client ID used for the Client Application.
     */
    readonly clientId?: pulumi.Input<string>;
    /**
     * The Client Secret used for the Client Application.
     */
    readonly clientSecret?: pulumi.Input<string>;
    /**
     * A description of this OpenID Connect Provider.
     */
    readonly description?: pulumi.Input<string>;
    /**
     * A user-friendly name for this OpenID Connect Provider.
     */
    readonly displayName?: pulumi.Input<string>;
    /**
     * The URI of the Metadata endpoint.
     */
    readonly metadataEndpoint?: pulumi.Input<string>;
    /**
     * the Name of the OpenID Connect Provider which should be created within the API Management Service. Changing this forces a new resource to be created.
     */
    readonly name?: pulumi.Input<string>;
    /**
     * The name of the Resource Group where the API Management Service exists. Changing this forces a new resource to be created.
     */
    readonly resourceGroupName?: pulumi.Input<string>;
}

/**
 * The set of arguments for constructing a OpenIdConnectProvider resource.
 */
export interface OpenIdConnectProviderArgs {
    /**
     * The name of the API Management Service in which this OpenID Connect Provider should be created. Changing this forces a new resource to be created.
     */
    readonly apiManagementName: pulumi.Input<string>;
    /**
     * The Client ID used for the Client Application.
     */
    readonly clientId: pulumi.Input<string>;
    /**
     * The Client Secret used for the Client Application.
     */
    readonly clientSecret: pulumi.Input<string>;
    /**
     * A description of this OpenID Connect Provider.
     */
    readonly description?: pulumi.Input<string>;
    /**
     * A user-friendly name for this OpenID Connect Provider.
     */
    readonly displayName: pulumi.Input<string>;
    /**
     * The URI of the Metadata endpoint.
     */
    readonly metadataEndpoint: pulumi.Input<string>;
    /**
     * the Name of the OpenID Connect Provider which should be created within the API Management Service. Changing this forces a new resource to be created.
     */
    readonly name?: pulumi.Input<string>;
    /**
     * The name of the Resource Group where the API Management Service exists. Changing this forces a new resource to be created.
     */
    readonly resourceGroupName: pulumi.Input<string>;
}
