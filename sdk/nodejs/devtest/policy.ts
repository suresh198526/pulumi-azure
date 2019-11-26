// *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "../types/input";
import * as outputs from "../types/output";
import * as utilities from "../utilities";

/**
 * Manages a Policy within a Dev Test Policy Set.
 * 
 * ## Example Usage
 * 
 * ```typescript
 * import * as pulumi from "@pulumi/pulumi";
 * import * as azure from "@pulumi/azure";
 * 
 * const exampleResourceGroup = new azure.core.ResourceGroup("example", {
 *     location: "West US",
 * });
 * const exampleLab = new azure.devtest.Lab("example", {
 *     location: exampleResourceGroup.location,
 *     resourceGroupName: exampleResourceGroup.name,
 *     tags: {
 *         Sydney: "Australia",
 *     },
 * });
 * const examplePolicy = new azure.devtest.Policy("example", {
 *     evaluatorType: "MaxValuePolicy",
 *     factData: "",
 *     labName: exampleLab.name,
 *     policySetName: "default",
 *     resourceGroupName: exampleResourceGroup.name,
 *     tags: {
 *         Acceptance: "Test",
 *     },
 *     threshold: "999",
 * });
 * ```
 *
 * > This content is derived from https://github.com/terraform-providers/terraform-provider-azurerm/blob/master/website/docs/r/dev_test_policy.html.markdown.
 */
export class Policy extends pulumi.CustomResource {
    /**
     * Get an existing Policy resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: PolicyState, opts?: pulumi.CustomResourceOptions): Policy {
        return new Policy(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'azure:devtest/policy:Policy';

    /**
     * Returns true if the given object is an instance of Policy.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is Policy {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === Policy.__pulumiType;
    }

    /**
     * A description for the Policy.
     */
    public readonly description!: pulumi.Output<string | undefined>;
    /**
     * The Evaluation Type used for this Policy. Possible values include: 'AllowedValuesPolicy', 'MaxValuePolicy'. Changing this forces a new resource to be created.
     */
    public readonly evaluatorType!: pulumi.Output<string>;
    /**
     * The Fact Data for this Policy.
     */
    public readonly factData!: pulumi.Output<string | undefined>;
    /**
     * Specifies the name of the Dev Test Lab in which the Policy should be created. Changing this forces a new resource to be created.
     */
    public readonly labName!: pulumi.Output<string>;
    /**
     * Specifies the name of the Dev Test Policy. Possible values are `GalleryImage`, `LabPremiumVmCount`, `LabTargetCost`, `LabVmCount`, `LabVmSize`, `UserOwnedLabPremiumVmCount`, `UserOwnedLabVmCount` and `UserOwnedLabVmCountInSubnet`. Changing this forces a new resource to be created.
     */
    public readonly name!: pulumi.Output<string>;
    /**
     * Specifies the name of the Policy Set within the Dev Test Lab where this policy should be created. Changing this forces a new resource to be created.
     */
    public readonly policySetName!: pulumi.Output<string>;
    /**
     * The name of the resource group in which the Dev Test Lab resource exists. Changing this forces a new resource to be created.
     */
    public readonly resourceGroupName!: pulumi.Output<string>;
    /**
     * A mapping of tags to assign to the resource.
     */
    public readonly tags!: pulumi.Output<{[key: string]: any}>;
    /**
     * The Threshold for this Policy.
     */
    public readonly threshold!: pulumi.Output<string>;

    /**
     * Create a Policy resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: PolicyArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: PolicyArgs | PolicyState, opts?: pulumi.CustomResourceOptions) {
        let inputs: pulumi.Inputs = {};
        if (opts && opts.id) {
            const state = argsOrState as PolicyState | undefined;
            inputs["description"] = state ? state.description : undefined;
            inputs["evaluatorType"] = state ? state.evaluatorType : undefined;
            inputs["factData"] = state ? state.factData : undefined;
            inputs["labName"] = state ? state.labName : undefined;
            inputs["name"] = state ? state.name : undefined;
            inputs["policySetName"] = state ? state.policySetName : undefined;
            inputs["resourceGroupName"] = state ? state.resourceGroupName : undefined;
            inputs["tags"] = state ? state.tags : undefined;
            inputs["threshold"] = state ? state.threshold : undefined;
        } else {
            const args = argsOrState as PolicyArgs | undefined;
            if (!args || args.evaluatorType === undefined) {
                throw new Error("Missing required property 'evaluatorType'");
            }
            if (!args || args.labName === undefined) {
                throw new Error("Missing required property 'labName'");
            }
            if (!args || args.policySetName === undefined) {
                throw new Error("Missing required property 'policySetName'");
            }
            if (!args || args.resourceGroupName === undefined) {
                throw new Error("Missing required property 'resourceGroupName'");
            }
            if (!args || args.threshold === undefined) {
                throw new Error("Missing required property 'threshold'");
            }
            inputs["description"] = args ? args.description : undefined;
            inputs["evaluatorType"] = args ? args.evaluatorType : undefined;
            inputs["factData"] = args ? args.factData : undefined;
            inputs["labName"] = args ? args.labName : undefined;
            inputs["name"] = args ? args.name : undefined;
            inputs["policySetName"] = args ? args.policySetName : undefined;
            inputs["resourceGroupName"] = args ? args.resourceGroupName : undefined;
            inputs["tags"] = args ? args.tags : undefined;
            inputs["threshold"] = args ? args.threshold : undefined;
        }
        if (!opts) {
            opts = {}
        }

        if (!opts.version) {
            opts.version = utilities.getVersion();
        }
        super(Policy.__pulumiType, name, inputs, opts);
    }
}

/**
 * Input properties used for looking up and filtering Policy resources.
 */
export interface PolicyState {
    /**
     * A description for the Policy.
     */
    readonly description?: pulumi.Input<string>;
    /**
     * The Evaluation Type used for this Policy. Possible values include: 'AllowedValuesPolicy', 'MaxValuePolicy'. Changing this forces a new resource to be created.
     */
    readonly evaluatorType?: pulumi.Input<string>;
    /**
     * The Fact Data for this Policy.
     */
    readonly factData?: pulumi.Input<string>;
    /**
     * Specifies the name of the Dev Test Lab in which the Policy should be created. Changing this forces a new resource to be created.
     */
    readonly labName?: pulumi.Input<string>;
    /**
     * Specifies the name of the Dev Test Policy. Possible values are `GalleryImage`, `LabPremiumVmCount`, `LabTargetCost`, `LabVmCount`, `LabVmSize`, `UserOwnedLabPremiumVmCount`, `UserOwnedLabVmCount` and `UserOwnedLabVmCountInSubnet`. Changing this forces a new resource to be created.
     */
    readonly name?: pulumi.Input<string>;
    /**
     * Specifies the name of the Policy Set within the Dev Test Lab where this policy should be created. Changing this forces a new resource to be created.
     */
    readonly policySetName?: pulumi.Input<string>;
    /**
     * The name of the resource group in which the Dev Test Lab resource exists. Changing this forces a new resource to be created.
     */
    readonly resourceGroupName?: pulumi.Input<string>;
    /**
     * A mapping of tags to assign to the resource.
     */
    readonly tags?: pulumi.Input<{[key: string]: any}>;
    /**
     * The Threshold for this Policy.
     */
    readonly threshold?: pulumi.Input<string>;
}

/**
 * The set of arguments for constructing a Policy resource.
 */
export interface PolicyArgs {
    /**
     * A description for the Policy.
     */
    readonly description?: pulumi.Input<string>;
    /**
     * The Evaluation Type used for this Policy. Possible values include: 'AllowedValuesPolicy', 'MaxValuePolicy'. Changing this forces a new resource to be created.
     */
    readonly evaluatorType: pulumi.Input<string>;
    /**
     * The Fact Data for this Policy.
     */
    readonly factData?: pulumi.Input<string>;
    /**
     * Specifies the name of the Dev Test Lab in which the Policy should be created. Changing this forces a new resource to be created.
     */
    readonly labName: pulumi.Input<string>;
    /**
     * Specifies the name of the Dev Test Policy. Possible values are `GalleryImage`, `LabPremiumVmCount`, `LabTargetCost`, `LabVmCount`, `LabVmSize`, `UserOwnedLabPremiumVmCount`, `UserOwnedLabVmCount` and `UserOwnedLabVmCountInSubnet`. Changing this forces a new resource to be created.
     */
    readonly name?: pulumi.Input<string>;
    /**
     * Specifies the name of the Policy Set within the Dev Test Lab where this policy should be created. Changing this forces a new resource to be created.
     */
    readonly policySetName: pulumi.Input<string>;
    /**
     * The name of the resource group in which the Dev Test Lab resource exists. Changing this forces a new resource to be created.
     */
    readonly resourceGroupName: pulumi.Input<string>;
    /**
     * A mapping of tags to assign to the resource.
     */
    readonly tags?: pulumi.Input<{[key: string]: any}>;
    /**
     * The Threshold for this Policy.
     */
    readonly threshold: pulumi.Input<string>;
}
