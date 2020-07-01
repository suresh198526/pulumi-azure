// *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "../types/input";
import * as outputs from "../types/output";
import * as utilities from "../utilities";

/**
 * Manages a Automation Module.
 *
 * ## Example Usage
 *
 * ```typescript
 * import * as pulumi from "@pulumi/pulumi";
 * import * as azure from "@pulumi/azure";
 *
 * const exampleResourceGroup = new azure.core.ResourceGroup("exampleResourceGroup", {location: "West Europe"});
 * const exampleAccount = new azure.automation.Account("exampleAccount", {
 *     location: exampleResourceGroup.location,
 *     resourceGroupName: exampleResourceGroup.name,
 *     sku: [{
 *         name: "Basic",
 *     }],
 * });
 * const exampleModule = new azure.automation.Module("exampleModule", {
 *     resourceGroupName: exampleResourceGroup.name,
 *     automationAccountName: exampleAccount.name,
 *     moduleLink: {
 *         uri: "https://devopsgallerystorage.blob.core.windows.net/packages/xactivedirectory.2.19.0.nupkg",
 *     },
 * });
 * ```
 */
export class Module extends pulumi.CustomResource {
    /**
     * Get an existing Module resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: ModuleState, opts?: pulumi.CustomResourceOptions): Module {
        return new Module(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'azure:automation/module:Module';

    /**
     * Returns true if the given object is an instance of Module.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is Module {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === Module.__pulumiType;
    }

    /**
     * The name of the automation account in which the Module is created. Changing this forces a new resource to be created.
     */
    public readonly automationAccountName!: pulumi.Output<string>;
    /**
     * The published Module link.
     */
    public readonly moduleLink!: pulumi.Output<outputs.automation.ModuleModuleLink>;
    /**
     * Specifies the name of the Module. Changing this forces a new resource to be created.
     */
    public readonly name!: pulumi.Output<string>;
    /**
     * The name of the resource group in which the Module is created. Changing this forces a new resource to be created.
     */
    public readonly resourceGroupName!: pulumi.Output<string>;

    /**
     * Create a Module resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: ModuleArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: ModuleArgs | ModuleState, opts?: pulumi.CustomResourceOptions) {
        let inputs: pulumi.Inputs = {};
        if (opts && opts.id) {
            const state = argsOrState as ModuleState | undefined;
            inputs["automationAccountName"] = state ? state.automationAccountName : undefined;
            inputs["moduleLink"] = state ? state.moduleLink : undefined;
            inputs["name"] = state ? state.name : undefined;
            inputs["resourceGroupName"] = state ? state.resourceGroupName : undefined;
        } else {
            const args = argsOrState as ModuleArgs | undefined;
            if (!args || args.automationAccountName === undefined) {
                throw new Error("Missing required property 'automationAccountName'");
            }
            if (!args || args.moduleLink === undefined) {
                throw new Error("Missing required property 'moduleLink'");
            }
            if (!args || args.resourceGroupName === undefined) {
                throw new Error("Missing required property 'resourceGroupName'");
            }
            inputs["automationAccountName"] = args ? args.automationAccountName : undefined;
            inputs["moduleLink"] = args ? args.moduleLink : undefined;
            inputs["name"] = args ? args.name : undefined;
            inputs["resourceGroupName"] = args ? args.resourceGroupName : undefined;
        }
        if (!opts) {
            opts = {}
        }

        if (!opts.version) {
            opts.version = utilities.getVersion();
        }
        super(Module.__pulumiType, name, inputs, opts);
    }
}

/**
 * Input properties used for looking up and filtering Module resources.
 */
export interface ModuleState {
    /**
     * The name of the automation account in which the Module is created. Changing this forces a new resource to be created.
     */
    readonly automationAccountName?: pulumi.Input<string>;
    /**
     * The published Module link.
     */
    readonly moduleLink?: pulumi.Input<inputs.automation.ModuleModuleLink>;
    /**
     * Specifies the name of the Module. Changing this forces a new resource to be created.
     */
    readonly name?: pulumi.Input<string>;
    /**
     * The name of the resource group in which the Module is created. Changing this forces a new resource to be created.
     */
    readonly resourceGroupName?: pulumi.Input<string>;
}

/**
 * The set of arguments for constructing a Module resource.
 */
export interface ModuleArgs {
    /**
     * The name of the automation account in which the Module is created. Changing this forces a new resource to be created.
     */
    readonly automationAccountName: pulumi.Input<string>;
    /**
     * The published Module link.
     */
    readonly moduleLink: pulumi.Input<inputs.automation.ModuleModuleLink>;
    /**
     * Specifies the name of the Module. Changing this forces a new resource to be created.
     */
    readonly name?: pulumi.Input<string>;
    /**
     * The name of the resource group in which the Module is created. Changing this forces a new resource to be created.
     */
    readonly resourceGroupName: pulumi.Input<string>;
}
