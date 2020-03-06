// *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "../types/input";
import * as outputs from "../types/output";
import * as utilities from "../utilities";

/**
 * Manages the association between a Network Interface and a Network Security Group.
 *
 * > This content is derived from https://github.com/terraform-providers/terraform-provider-azurerm/blob/master/website/docs/r/network_interface_security_group_association.html.markdown.
 */
export class NetworkInterfaceSecurityGroupAssociation extends pulumi.CustomResource {
    /**
     * Get an existing NetworkInterfaceSecurityGroupAssociation resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: NetworkInterfaceSecurityGroupAssociationState, opts?: pulumi.CustomResourceOptions): NetworkInterfaceSecurityGroupAssociation {
        return new NetworkInterfaceSecurityGroupAssociation(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'azure:network/networkInterfaceSecurityGroupAssociation:NetworkInterfaceSecurityGroupAssociation';

    /**
     * Returns true if the given object is an instance of NetworkInterfaceSecurityGroupAssociation.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is NetworkInterfaceSecurityGroupAssociation {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === NetworkInterfaceSecurityGroupAssociation.__pulumiType;
    }

    /**
     * The ID of the Network Interface. Changing this forces a new resource to be created.
     */
    public readonly networkInterfaceId!: pulumi.Output<string>;
    /**
     * The ID of the Network Security Group which should be attached to the Network Interface. Changing this forces a new resource to be created.
     */
    public readonly networkSecurityGroupId!: pulumi.Output<string>;

    /**
     * Create a NetworkInterfaceSecurityGroupAssociation resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: NetworkInterfaceSecurityGroupAssociationArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: NetworkInterfaceSecurityGroupAssociationArgs | NetworkInterfaceSecurityGroupAssociationState, opts?: pulumi.CustomResourceOptions) {
        let inputs: pulumi.Inputs = {};
        if (opts && opts.id) {
            const state = argsOrState as NetworkInterfaceSecurityGroupAssociationState | undefined;
            inputs["networkInterfaceId"] = state ? state.networkInterfaceId : undefined;
            inputs["networkSecurityGroupId"] = state ? state.networkSecurityGroupId : undefined;
        } else {
            const args = argsOrState as NetworkInterfaceSecurityGroupAssociationArgs | undefined;
            if (!args || args.networkInterfaceId === undefined) {
                throw new Error("Missing required property 'networkInterfaceId'");
            }
            if (!args || args.networkSecurityGroupId === undefined) {
                throw new Error("Missing required property 'networkSecurityGroupId'");
            }
            inputs["networkInterfaceId"] = args ? args.networkInterfaceId : undefined;
            inputs["networkSecurityGroupId"] = args ? args.networkSecurityGroupId : undefined;
        }
        if (!opts) {
            opts = {}
        }

        if (!opts.version) {
            opts.version = utilities.getVersion();
        }
        super(NetworkInterfaceSecurityGroupAssociation.__pulumiType, name, inputs, opts);
    }
}

/**
 * Input properties used for looking up and filtering NetworkInterfaceSecurityGroupAssociation resources.
 */
export interface NetworkInterfaceSecurityGroupAssociationState {
    /**
     * The ID of the Network Interface. Changing this forces a new resource to be created.
     */
    readonly networkInterfaceId?: pulumi.Input<string>;
    /**
     * The ID of the Network Security Group which should be attached to the Network Interface. Changing this forces a new resource to be created.
     */
    readonly networkSecurityGroupId?: pulumi.Input<string>;
}

/**
 * The set of arguments for constructing a NetworkInterfaceSecurityGroupAssociation resource.
 */
export interface NetworkInterfaceSecurityGroupAssociationArgs {
    /**
     * The ID of the Network Interface. Changing this forces a new resource to be created.
     */
    readonly networkInterfaceId: pulumi.Input<string>;
    /**
     * The ID of the Network Security Group which should be attached to the Network Interface. Changing this forces a new resource to be created.
     */
    readonly networkSecurityGroupId: pulumi.Input<string>;
}
