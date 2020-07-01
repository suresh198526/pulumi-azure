// *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "../types/input";
import * as outputs from "../types/output";
import * as utilities from "../utilities";

/**
 * Manages a ServiceBus Namespace Network Rule Set Set.
 *
 * ## Example Usage
 *
 * ```typescript
 * import * as pulumi from "@pulumi/pulumi";
 * import * as azure from "@pulumi/azure";
 *
 * const exampleResourceGroup = new azure.core.ResourceGroup("exampleResourceGroup", {location: "West Europe"});
 * const exampleNamespace = new azure.servicebus.Namespace("exampleNamespace", {
 *     location: exampleResourceGroup.location,
 *     resourceGroupName: exampleResourceGroup.name,
 *     sku: "Premium",
 *     capacity: 1,
 * });
 * const exampleVirtualNetwork = new azure.network.VirtualNetwork("exampleVirtualNetwork", {
 *     location: exampleResourceGroup.location,
 *     resourceGroupName: exampleResourceGroup.name,
 *     addressSpaces: ["172.17.0.0/16"],
 *     dnsServers: [
 *         "10.0.0.4",
 *         "10.0.0.5",
 *     ],
 * });
 * const exampleSubnet = new azure.network.Subnet("exampleSubnet", {
 *     resourceGroupName: exampleResourceGroup.name,
 *     virtualNetworkName: exampleVirtualNetwork.name,
 *     addressPrefix: "172.17.0.0/24",
 *     serviceEndpoints: ["Microsoft.ServiceBus"],
 * });
 * const exampleNamespaceNetworkRuleSet = new azure.servicebus.NamespaceNetworkRuleSet("exampleNamespaceNetworkRuleSet", {
 *     namespaceName: exampleNamespace.name,
 *     resourceGroupName: exampleResourceGroup.name,
 *     defaultAction: "Deny",
 *     networkRules: [{
 *         subnetId: exampleSubnet.id,
 *         ignoreMissingVnetServiceEndpoint: false,
 *     }],
 *     ipRules: ["1.1.1.1"],
 * });
 * ```
 */
export class NamespaceNetworkRuleSet extends pulumi.CustomResource {
    /**
     * Get an existing NamespaceNetworkRuleSet resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: NamespaceNetworkRuleSetState, opts?: pulumi.CustomResourceOptions): NamespaceNetworkRuleSet {
        return new NamespaceNetworkRuleSet(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'azure:servicebus/namespaceNetworkRuleSet:NamespaceNetworkRuleSet';

    /**
     * Returns true if the given object is an instance of NamespaceNetworkRuleSet.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is NamespaceNetworkRuleSet {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === NamespaceNetworkRuleSet.__pulumiType;
    }

    /**
     * Specifies the default action for the ServiceBus Namespace Network Rule Set. Possible values are `Allow` and `Deny`. Defaults to `Deny`.
     */
    public readonly defaultAction!: pulumi.Output<string | undefined>;
    /**
     * One or more IP Addresses, or CIDR Blocks which should be able to access the ServiceBus Namespace.
     */
    public readonly ipRules!: pulumi.Output<string[] | undefined>;
    /**
     * Specifies the ServiceBus Namespace name to which to attach the ServiceBus Namespace Network Rule Set. Changing this forces a new resource to be created.
     */
    public readonly namespaceName!: pulumi.Output<string>;
    /**
     * One or more `networkRules` blocks as defined below.
     */
    public readonly networkRules!: pulumi.Output<outputs.servicebus.NamespaceNetworkRuleSetNetworkRule[] | undefined>;
    /**
     * Specifies the name of the Resource Group where the ServiceBus Namespace Network Rule Set should exist. Changing this forces a new resource to be created.
     */
    public readonly resourceGroupName!: pulumi.Output<string>;

    /**
     * Create a NamespaceNetworkRuleSet resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: NamespaceNetworkRuleSetArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: NamespaceNetworkRuleSetArgs | NamespaceNetworkRuleSetState, opts?: pulumi.CustomResourceOptions) {
        let inputs: pulumi.Inputs = {};
        if (opts && opts.id) {
            const state = argsOrState as NamespaceNetworkRuleSetState | undefined;
            inputs["defaultAction"] = state ? state.defaultAction : undefined;
            inputs["ipRules"] = state ? state.ipRules : undefined;
            inputs["namespaceName"] = state ? state.namespaceName : undefined;
            inputs["networkRules"] = state ? state.networkRules : undefined;
            inputs["resourceGroupName"] = state ? state.resourceGroupName : undefined;
        } else {
            const args = argsOrState as NamespaceNetworkRuleSetArgs | undefined;
            if (!args || args.namespaceName === undefined) {
                throw new Error("Missing required property 'namespaceName'");
            }
            if (!args || args.resourceGroupName === undefined) {
                throw new Error("Missing required property 'resourceGroupName'");
            }
            inputs["defaultAction"] = args ? args.defaultAction : undefined;
            inputs["ipRules"] = args ? args.ipRules : undefined;
            inputs["namespaceName"] = args ? args.namespaceName : undefined;
            inputs["networkRules"] = args ? args.networkRules : undefined;
            inputs["resourceGroupName"] = args ? args.resourceGroupName : undefined;
        }
        if (!opts) {
            opts = {}
        }

        if (!opts.version) {
            opts.version = utilities.getVersion();
        }
        super(NamespaceNetworkRuleSet.__pulumiType, name, inputs, opts);
    }
}

/**
 * Input properties used for looking up and filtering NamespaceNetworkRuleSet resources.
 */
export interface NamespaceNetworkRuleSetState {
    /**
     * Specifies the default action for the ServiceBus Namespace Network Rule Set. Possible values are `Allow` and `Deny`. Defaults to `Deny`.
     */
    readonly defaultAction?: pulumi.Input<string>;
    /**
     * One or more IP Addresses, or CIDR Blocks which should be able to access the ServiceBus Namespace.
     */
    readonly ipRules?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * Specifies the ServiceBus Namespace name to which to attach the ServiceBus Namespace Network Rule Set. Changing this forces a new resource to be created.
     */
    readonly namespaceName?: pulumi.Input<string>;
    /**
     * One or more `networkRules` blocks as defined below.
     */
    readonly networkRules?: pulumi.Input<pulumi.Input<inputs.servicebus.NamespaceNetworkRuleSetNetworkRule>[]>;
    /**
     * Specifies the name of the Resource Group where the ServiceBus Namespace Network Rule Set should exist. Changing this forces a new resource to be created.
     */
    readonly resourceGroupName?: pulumi.Input<string>;
}

/**
 * The set of arguments for constructing a NamespaceNetworkRuleSet resource.
 */
export interface NamespaceNetworkRuleSetArgs {
    /**
     * Specifies the default action for the ServiceBus Namespace Network Rule Set. Possible values are `Allow` and `Deny`. Defaults to `Deny`.
     */
    readonly defaultAction?: pulumi.Input<string>;
    /**
     * One or more IP Addresses, or CIDR Blocks which should be able to access the ServiceBus Namespace.
     */
    readonly ipRules?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * Specifies the ServiceBus Namespace name to which to attach the ServiceBus Namespace Network Rule Set. Changing this forces a new resource to be created.
     */
    readonly namespaceName: pulumi.Input<string>;
    /**
     * One or more `networkRules` blocks as defined below.
     */
    readonly networkRules?: pulumi.Input<pulumi.Input<inputs.servicebus.NamespaceNetworkRuleSetNetworkRule>[]>;
    /**
     * Specifies the name of the Resource Group where the ServiceBus Namespace Network Rule Set should exist. Changing this forces a new resource to be created.
     */
    readonly resourceGroupName: pulumi.Input<string>;
}
