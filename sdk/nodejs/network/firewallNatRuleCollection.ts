// *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "../types/input";
import * as outputs from "../types/output";
import * as utilities from "../utilities";

/**
 * Manages a NAT Rule Collection within an Azure Firewall.
 *
 * ## Example Usage
 *
 * ```typescript
 * import * as pulumi from "@pulumi/pulumi";
 * import * as azure from "@pulumi/azure";
 *
 * const exampleResourceGroup = new azure.core.ResourceGroup("exampleResourceGroup", {location: "North Europe"});
 * const exampleVirtualNetwork = new azure.network.VirtualNetwork("exampleVirtualNetwork", {
 *     addressSpaces: ["10.0.0.0/16"],
 *     location: exampleResourceGroup.location,
 *     resourceGroupName: exampleResourceGroup.name,
 * });
 * const exampleSubnet = new azure.network.Subnet("exampleSubnet", {
 *     resourceGroupName: exampleResourceGroup.name,
 *     virtualNetworkName: exampleVirtualNetwork.name,
 *     addressPrefixes: ["10.0.1.0/24"],
 * });
 * const examplePublicIp = new azure.network.PublicIp("examplePublicIp", {
 *     location: exampleResourceGroup.location,
 *     resourceGroupName: exampleResourceGroup.name,
 *     allocationMethod: "Static",
 *     sku: "Standard",
 * });
 * const exampleFirewall = new azure.network.Firewall("exampleFirewall", {
 *     location: exampleResourceGroup.location,
 *     resourceGroupName: exampleResourceGroup.name,
 *     ipConfigurations: [{
 *         name: "configuration",
 *         subnetId: exampleSubnet.id,
 *         publicIpAddressId: examplePublicIp.id,
 *     }],
 * });
 * const exampleFirewallNatRuleCollection = new azure.network.FirewallNatRuleCollection("exampleFirewallNatRuleCollection", {
 *     azureFirewallName: exampleFirewall.name,
 *     resourceGroupName: exampleResourceGroup.name,
 *     priority: 100,
 *     action: "Dnat",
 *     rules: [{
 *         name: "testrule",
 *         sourceAddresses: ["10.0.0.0/16"],
 *         destinationPorts: ["53"],
 *         destinationAddresses: [examplePublicIp.ipAddress],
 *         translatedPort: 53,
 *         translatedAddress: "8.8.8.8",
 *         protocols: [
 *             "TCP",
 *             "UDP",
 *         ],
 *     }],
 * });
 * ```
 */
export class FirewallNatRuleCollection extends pulumi.CustomResource {
    /**
     * Get an existing FirewallNatRuleCollection resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: FirewallNatRuleCollectionState, opts?: pulumi.CustomResourceOptions): FirewallNatRuleCollection {
        return new FirewallNatRuleCollection(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'azure:network/firewallNatRuleCollection:FirewallNatRuleCollection';

    /**
     * Returns true if the given object is an instance of FirewallNatRuleCollection.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is FirewallNatRuleCollection {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === FirewallNatRuleCollection.__pulumiType;
    }

    /**
     * Specifies the action the rule will apply to matching traffic. Possible values are `Dnat` and `Snat`.
     */
    public readonly action!: pulumi.Output<string>;
    /**
     * Specifies the name of the Firewall in which the NAT Rule Collection should be created. Changing this forces a new resource to be created.
     */
    public readonly azureFirewallName!: pulumi.Output<string>;
    /**
     * Specifies the name of the NAT Rule Collection which must be unique within the Firewall. Changing this forces a new resource to be created.
     */
    public readonly name!: pulumi.Output<string>;
    /**
     * Specifies the priority of the rule collection. Possible values are between `100` - `65000`.
     */
    public readonly priority!: pulumi.Output<number>;
    /**
     * Specifies the name of the Resource Group in which the Firewall exists. Changing this forces a new resource to be created.
     */
    public readonly resourceGroupName!: pulumi.Output<string>;
    /**
     * One or more `rule` blocks as defined below.
     */
    public readonly rules!: pulumi.Output<outputs.network.FirewallNatRuleCollectionRule[]>;

    /**
     * Create a FirewallNatRuleCollection resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: FirewallNatRuleCollectionArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: FirewallNatRuleCollectionArgs | FirewallNatRuleCollectionState, opts?: pulumi.CustomResourceOptions) {
        let inputs: pulumi.Inputs = {};
        if (opts && opts.id) {
            const state = argsOrState as FirewallNatRuleCollectionState | undefined;
            inputs["action"] = state ? state.action : undefined;
            inputs["azureFirewallName"] = state ? state.azureFirewallName : undefined;
            inputs["name"] = state ? state.name : undefined;
            inputs["priority"] = state ? state.priority : undefined;
            inputs["resourceGroupName"] = state ? state.resourceGroupName : undefined;
            inputs["rules"] = state ? state.rules : undefined;
        } else {
            const args = argsOrState as FirewallNatRuleCollectionArgs | undefined;
            if (!args || args.action === undefined) {
                throw new Error("Missing required property 'action'");
            }
            if (!args || args.azureFirewallName === undefined) {
                throw new Error("Missing required property 'azureFirewallName'");
            }
            if (!args || args.priority === undefined) {
                throw new Error("Missing required property 'priority'");
            }
            if (!args || args.resourceGroupName === undefined) {
                throw new Error("Missing required property 'resourceGroupName'");
            }
            if (!args || args.rules === undefined) {
                throw new Error("Missing required property 'rules'");
            }
            inputs["action"] = args ? args.action : undefined;
            inputs["azureFirewallName"] = args ? args.azureFirewallName : undefined;
            inputs["name"] = args ? args.name : undefined;
            inputs["priority"] = args ? args.priority : undefined;
            inputs["resourceGroupName"] = args ? args.resourceGroupName : undefined;
            inputs["rules"] = args ? args.rules : undefined;
        }
        if (!opts) {
            opts = {}
        }

        if (!opts.version) {
            opts.version = utilities.getVersion();
        }
        super(FirewallNatRuleCollection.__pulumiType, name, inputs, opts);
    }
}

/**
 * Input properties used for looking up and filtering FirewallNatRuleCollection resources.
 */
export interface FirewallNatRuleCollectionState {
    /**
     * Specifies the action the rule will apply to matching traffic. Possible values are `Dnat` and `Snat`.
     */
    readonly action?: pulumi.Input<string>;
    /**
     * Specifies the name of the Firewall in which the NAT Rule Collection should be created. Changing this forces a new resource to be created.
     */
    readonly azureFirewallName?: pulumi.Input<string>;
    /**
     * Specifies the name of the NAT Rule Collection which must be unique within the Firewall. Changing this forces a new resource to be created.
     */
    readonly name?: pulumi.Input<string>;
    /**
     * Specifies the priority of the rule collection. Possible values are between `100` - `65000`.
     */
    readonly priority?: pulumi.Input<number>;
    /**
     * Specifies the name of the Resource Group in which the Firewall exists. Changing this forces a new resource to be created.
     */
    readonly resourceGroupName?: pulumi.Input<string>;
    /**
     * One or more `rule` blocks as defined below.
     */
    readonly rules?: pulumi.Input<pulumi.Input<inputs.network.FirewallNatRuleCollectionRule>[]>;
}

/**
 * The set of arguments for constructing a FirewallNatRuleCollection resource.
 */
export interface FirewallNatRuleCollectionArgs {
    /**
     * Specifies the action the rule will apply to matching traffic. Possible values are `Dnat` and `Snat`.
     */
    readonly action: pulumi.Input<string>;
    /**
     * Specifies the name of the Firewall in which the NAT Rule Collection should be created. Changing this forces a new resource to be created.
     */
    readonly azureFirewallName: pulumi.Input<string>;
    /**
     * Specifies the name of the NAT Rule Collection which must be unique within the Firewall. Changing this forces a new resource to be created.
     */
    readonly name?: pulumi.Input<string>;
    /**
     * Specifies the priority of the rule collection. Possible values are between `100` - `65000`.
     */
    readonly priority: pulumi.Input<number>;
    /**
     * Specifies the name of the Resource Group in which the Firewall exists. Changing this forces a new resource to be created.
     */
    readonly resourceGroupName: pulumi.Input<string>;
    /**
     * One or more `rule` blocks as defined below.
     */
    readonly rules: pulumi.Input<pulumi.Input<inputs.network.FirewallNatRuleCollectionRule>[]>;
}
