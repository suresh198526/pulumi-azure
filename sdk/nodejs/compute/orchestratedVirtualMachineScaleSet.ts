// *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "../utilities";

/**
 * Manages an Orchestrated Virtual Machine Scale Set.
 *
 * > **Note:** Orchestrated Virtual Machine Scale Sets are in Public Preview - [more details can be found in the Azure Documentation](https://docs.microsoft.com/en-us/azure/virtual-machine-scale-sets/orchestration-modes).
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
 * const exampleOrchestratedVirtualMachineScaleSet = new azure.compute.OrchestratedVirtualMachineScaleSet("exampleOrchestratedVirtualMachineScaleSet", {
 *     location: exampleResourceGroup.location,
 *     resourceGroupName: exampleResourceGroup.name,
 *     platformFaultDomainCount: 5,
 *     singlePlacementGroup: true,
 *     zones: ["1"],
 * });
 * ```
 */
export class OrchestratedVirtualMachineScaleSet extends pulumi.CustomResource {
    /**
     * Get an existing OrchestratedVirtualMachineScaleSet resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: OrchestratedVirtualMachineScaleSetState, opts?: pulumi.CustomResourceOptions): OrchestratedVirtualMachineScaleSet {
        return new OrchestratedVirtualMachineScaleSet(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'azure:compute/orchestratedVirtualMachineScaleSet:OrchestratedVirtualMachineScaleSet';

    /**
     * Returns true if the given object is an instance of OrchestratedVirtualMachineScaleSet.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is OrchestratedVirtualMachineScaleSet {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === OrchestratedVirtualMachineScaleSet.__pulumiType;
    }

    /**
     * The Azure location where the Orchestrated Virtual Machine Scale Set should exist. Changing this forces a new resource to be created.
     */
    public readonly location!: pulumi.Output<string>;
    /**
     * The name of the Orchestrated Virtual Machine Scale Set. Changing this forces a new resource to be created.
     */
    public readonly name!: pulumi.Output<string>;
    /**
     * Specifies the number of fault domains that are used by this Orchestrated Virtual Machine Scale Set. Changing this forces a new resource to be created.
     */
    public readonly platformFaultDomainCount!: pulumi.Output<number>;
    /**
     * The name of the Resource Group in which the Orchestrated Virtual Machine Scale Set should exist. Changing this forces a new resource to be created.
     */
    public readonly resourceGroupName!: pulumi.Output<string>;
    /**
     * Should the Orchestrated Virtual Machine Scale Set use single placement group? Changing this forces a new resource to be created.
     */
    public readonly singlePlacementGroup!: pulumi.Output<boolean>;
    /**
     * A mapping of tags which should be assigned to this Orchestrated Virtual Machine Scale Set.
     */
    public readonly tags!: pulumi.Output<{[key: string]: string} | undefined>;
    /**
     * The Unique ID for the Orchestrated Virtual Machine Scale Set.
     */
    public /*out*/ readonly uniqueId!: pulumi.Output<string>;
    /**
     * A list of Availability Zones in which the Virtual Machines in this Scale Set should be created in. Changing this forces a new resource to be created.
     */
    public readonly zones!: pulumi.Output<string | undefined>;

    /**
     * Create a OrchestratedVirtualMachineScaleSet resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: OrchestratedVirtualMachineScaleSetArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: OrchestratedVirtualMachineScaleSetArgs | OrchestratedVirtualMachineScaleSetState, opts?: pulumi.CustomResourceOptions) {
        let inputs: pulumi.Inputs = {};
        if (opts && opts.id) {
            const state = argsOrState as OrchestratedVirtualMachineScaleSetState | undefined;
            inputs["location"] = state ? state.location : undefined;
            inputs["name"] = state ? state.name : undefined;
            inputs["platformFaultDomainCount"] = state ? state.platformFaultDomainCount : undefined;
            inputs["resourceGroupName"] = state ? state.resourceGroupName : undefined;
            inputs["singlePlacementGroup"] = state ? state.singlePlacementGroup : undefined;
            inputs["tags"] = state ? state.tags : undefined;
            inputs["uniqueId"] = state ? state.uniqueId : undefined;
            inputs["zones"] = state ? state.zones : undefined;
        } else {
            const args = argsOrState as OrchestratedVirtualMachineScaleSetArgs | undefined;
            if (!args || args.platformFaultDomainCount === undefined) {
                throw new Error("Missing required property 'platformFaultDomainCount'");
            }
            if (!args || args.resourceGroupName === undefined) {
                throw new Error("Missing required property 'resourceGroupName'");
            }
            if (!args || args.singlePlacementGroup === undefined) {
                throw new Error("Missing required property 'singlePlacementGroup'");
            }
            inputs["location"] = args ? args.location : undefined;
            inputs["name"] = args ? args.name : undefined;
            inputs["platformFaultDomainCount"] = args ? args.platformFaultDomainCount : undefined;
            inputs["resourceGroupName"] = args ? args.resourceGroupName : undefined;
            inputs["singlePlacementGroup"] = args ? args.singlePlacementGroup : undefined;
            inputs["tags"] = args ? args.tags : undefined;
            inputs["zones"] = args ? args.zones : undefined;
            inputs["uniqueId"] = undefined /*out*/;
        }
        if (!opts) {
            opts = {}
        }

        if (!opts.version) {
            opts.version = utilities.getVersion();
        }
        super(OrchestratedVirtualMachineScaleSet.__pulumiType, name, inputs, opts);
    }
}

/**
 * Input properties used for looking up and filtering OrchestratedVirtualMachineScaleSet resources.
 */
export interface OrchestratedVirtualMachineScaleSetState {
    /**
     * The Azure location where the Orchestrated Virtual Machine Scale Set should exist. Changing this forces a new resource to be created.
     */
    readonly location?: pulumi.Input<string>;
    /**
     * The name of the Orchestrated Virtual Machine Scale Set. Changing this forces a new resource to be created.
     */
    readonly name?: pulumi.Input<string>;
    /**
     * Specifies the number of fault domains that are used by this Orchestrated Virtual Machine Scale Set. Changing this forces a new resource to be created.
     */
    readonly platformFaultDomainCount?: pulumi.Input<number>;
    /**
     * The name of the Resource Group in which the Orchestrated Virtual Machine Scale Set should exist. Changing this forces a new resource to be created.
     */
    readonly resourceGroupName?: pulumi.Input<string>;
    /**
     * Should the Orchestrated Virtual Machine Scale Set use single placement group? Changing this forces a new resource to be created.
     */
    readonly singlePlacementGroup?: pulumi.Input<boolean>;
    /**
     * A mapping of tags which should be assigned to this Orchestrated Virtual Machine Scale Set.
     */
    readonly tags?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
    /**
     * The Unique ID for the Orchestrated Virtual Machine Scale Set.
     */
    readonly uniqueId?: pulumi.Input<string>;
    /**
     * A list of Availability Zones in which the Virtual Machines in this Scale Set should be created in. Changing this forces a new resource to be created.
     */
    readonly zones?: pulumi.Input<string>;
}

/**
 * The set of arguments for constructing a OrchestratedVirtualMachineScaleSet resource.
 */
export interface OrchestratedVirtualMachineScaleSetArgs {
    /**
     * The Azure location where the Orchestrated Virtual Machine Scale Set should exist. Changing this forces a new resource to be created.
     */
    readonly location?: pulumi.Input<string>;
    /**
     * The name of the Orchestrated Virtual Machine Scale Set. Changing this forces a new resource to be created.
     */
    readonly name?: pulumi.Input<string>;
    /**
     * Specifies the number of fault domains that are used by this Orchestrated Virtual Machine Scale Set. Changing this forces a new resource to be created.
     */
    readonly platformFaultDomainCount: pulumi.Input<number>;
    /**
     * The name of the Resource Group in which the Orchestrated Virtual Machine Scale Set should exist. Changing this forces a new resource to be created.
     */
    readonly resourceGroupName: pulumi.Input<string>;
    /**
     * Should the Orchestrated Virtual Machine Scale Set use single placement group? Changing this forces a new resource to be created.
     */
    readonly singlePlacementGroup: pulumi.Input<boolean>;
    /**
     * A mapping of tags which should be assigned to this Orchestrated Virtual Machine Scale Set.
     */
    readonly tags?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
    /**
     * A list of Availability Zones in which the Virtual Machines in this Scale Set should be created in. Changing this forces a new resource to be created.
     */
    readonly zones?: pulumi.Input<string>;
}
