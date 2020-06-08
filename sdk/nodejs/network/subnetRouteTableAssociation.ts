// *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "../utilities";

/**
 * Associates a Route Table with a Subnet within a Virtual Network.
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
 * const exampleVirtualNetwork = new azure.network.VirtualNetwork("exampleVirtualNetwork", {
 *     addressSpaces: ["10.0.0.0/16"],
 *     location: exampleResourceGroup.location,
 *     resourceGroupName: exampleResourceGroup.name,
 * });
 * const exampleSubnet = new azure.network.Subnet("exampleSubnet", {
 *     resourceGroupName: exampleResourceGroup.name,
 *     virtualNetworkName: exampleVirtualNetwork.name,
 *     addressPrefix: "10.0.2.0/24",
 * });
 * const exampleRouteTable = new azure.network.RouteTable("exampleRouteTable", {
 *     location: exampleResourceGroup.location,
 *     resourceGroupName: exampleResourceGroup.name,
 *     route: [{
 *         name: "example",
 *         addressPrefix: "10.100.0.0/14",
 *         nextHopType: "VirtualAppliance",
 *         nextHopInIpAddress: "10.10.1.1",
 *     }],
 * });
 * const exampleSubnetRouteTableAssociation = new azure.network.SubnetRouteTableAssociation("exampleSubnetRouteTableAssociation", {
 *     subnetId: exampleSubnet.id,
 *     routeTableId: exampleRouteTable.id,
 * });
 * ```
 */
export class SubnetRouteTableAssociation extends pulumi.CustomResource {
    /**
     * Get an existing SubnetRouteTableAssociation resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: SubnetRouteTableAssociationState, opts?: pulumi.CustomResourceOptions): SubnetRouteTableAssociation {
        return new SubnetRouteTableAssociation(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'azure:network/subnetRouteTableAssociation:SubnetRouteTableAssociation';

    /**
     * Returns true if the given object is an instance of SubnetRouteTableAssociation.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is SubnetRouteTableAssociation {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === SubnetRouteTableAssociation.__pulumiType;
    }

    /**
     * The ID of the Route Table which should be associated with the Subnet. Changing this forces a new resource to be created.
     */
    public readonly routeTableId!: pulumi.Output<string>;
    /**
     * The ID of the Subnet. Changing this forces a new resource to be created.
     */
    public readonly subnetId!: pulumi.Output<string>;

    /**
     * Create a SubnetRouteTableAssociation resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: SubnetRouteTableAssociationArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: SubnetRouteTableAssociationArgs | SubnetRouteTableAssociationState, opts?: pulumi.CustomResourceOptions) {
        let inputs: pulumi.Inputs = {};
        if (opts && opts.id) {
            const state = argsOrState as SubnetRouteTableAssociationState | undefined;
            inputs["routeTableId"] = state ? state.routeTableId : undefined;
            inputs["subnetId"] = state ? state.subnetId : undefined;
        } else {
            const args = argsOrState as SubnetRouteTableAssociationArgs | undefined;
            if (!args || args.routeTableId === undefined) {
                throw new Error("Missing required property 'routeTableId'");
            }
            if (!args || args.subnetId === undefined) {
                throw new Error("Missing required property 'subnetId'");
            }
            inputs["routeTableId"] = args ? args.routeTableId : undefined;
            inputs["subnetId"] = args ? args.subnetId : undefined;
        }
        if (!opts) {
            opts = {}
        }

        if (!opts.version) {
            opts.version = utilities.getVersion();
        }
        super(SubnetRouteTableAssociation.__pulumiType, name, inputs, opts);
    }
}

/**
 * Input properties used for looking up and filtering SubnetRouteTableAssociation resources.
 */
export interface SubnetRouteTableAssociationState {
    /**
     * The ID of the Route Table which should be associated with the Subnet. Changing this forces a new resource to be created.
     */
    readonly routeTableId?: pulumi.Input<string>;
    /**
     * The ID of the Subnet. Changing this forces a new resource to be created.
     */
    readonly subnetId?: pulumi.Input<string>;
}

/**
 * The set of arguments for constructing a SubnetRouteTableAssociation resource.
 */
export interface SubnetRouteTableAssociationArgs {
    /**
     * The ID of the Route Table which should be associated with the Subnet. Changing this forces a new resource to be created.
     */
    readonly routeTableId: pulumi.Input<string>;
    /**
     * The ID of the Subnet. Changing this forces a new resource to be created.
     */
    readonly subnetId: pulumi.Input<string>;
}
