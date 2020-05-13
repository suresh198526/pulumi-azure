// *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "../types/input";
import * as outputs from "../types/output";
import * as utilities from "../utilities";

/**
 * Manages a Managed Application Definition.
 *
 * ## Example Usage
 *
 *
 *
 * ```typescript
 * import * as pulumi from "@pulumi/pulumi";
 * import * as azure from "@pulumi/azure";
 *
 * const current = azure.core.getClientConfig({});
 * const exampleResourceGroup = new azure.core.ResourceGroup("exampleResourceGroup", {location: "West Europe"});
 * const exampleDefinition = new azure.managedapplication.Definition("exampleDefinition", {
 *     location: exampleResourceGroup.location,
 *     resourceGroupName: exampleResourceGroup.name,
 *     lockLevel: "ReadOnly",
 *     packageFileUri: "https://github.com/Azure/azure-managedapp-samples/raw/master/Managed Application Sample Packages/201-managed-storage-account/managedstorage.zip",
 *     displayName: "TestManagedApplicationDefinition",
 *     description: "Test Managed Application Definition",
 *     authorization: [{
 *         servicePrincipalId: current.then(current => current.objectId),
 *         roleDefinitionId: "a094b430-dad3-424d-ae58-13f72fd72591",
 *     }],
 * });
 * ```
 *
 * > This content is derived from https://github.com/terraform-providers/terraform-provider-azurerm/blob/master/website/docs/r/managed_application_definition.html.markdown.
 */
export class Definition extends pulumi.CustomResource {
    /**
     * Get an existing Definition resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: DefinitionState, opts?: pulumi.CustomResourceOptions): Definition {
        return new Definition(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'azure:managedapplication/definition:Definition';

    /**
     * Returns true if the given object is an instance of Definition.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is Definition {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === Definition.__pulumiType;
    }

    /**
     * One or more `authorization` block defined below.
     */
    public readonly authorizations!: pulumi.Output<outputs.managedapplication.DefinitionAuthorization[] | undefined>;
    /**
     * Specifies the `createUiDefinition` json for the backing template with `Microsoft.Solutions/applications` resource.
     */
    public readonly createUiDefinition!: pulumi.Output<string | undefined>;
    /**
     * Specifies the managed application definition description.
     */
    public readonly description!: pulumi.Output<string | undefined>;
    /**
     * Specifies the managed application definition display name.
     */
    public readonly displayName!: pulumi.Output<string>;
    /**
     * Specifies the supported Azure location where the resource exists. Changing this forces a new resource to be created.
     */
    public readonly location!: pulumi.Output<string>;
    /**
     * Specifies the managed application lock level. Valid values include `CanNotDelete`, `None`, `ReadOnly`. Changing this forces a new resource to be created.
     */
    public readonly lockLevel!: pulumi.Output<string>;
    /**
     * Specifies the inline main template json which has resources to be provisioned.
     */
    public readonly mainTemplate!: pulumi.Output<string | undefined>;
    /**
     * Specifies the name of the Managed Application Definition. Changing this forces a new resource to be created.
     */
    public readonly name!: pulumi.Output<string>;
    /**
     * Is the package enabled? Defaults to `true`.
     */
    public readonly packageEnabled!: pulumi.Output<boolean | undefined>;
    /**
     * Specifies the managed application definition package file Uri.
     */
    public readonly packageFileUri!: pulumi.Output<string | undefined>;
    /**
     * The name of the Resource Group where the Managed Application Definition should exist. Changing this forces a new resource to be created.
     */
    public readonly resourceGroupName!: pulumi.Output<string>;
    /**
     * A mapping of tags to assign to the resource.
     */
    public readonly tags!: pulumi.Output<{[key: string]: string} | undefined>;

    /**
     * Create a Definition resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: DefinitionArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: DefinitionArgs | DefinitionState, opts?: pulumi.CustomResourceOptions) {
        let inputs: pulumi.Inputs = {};
        if (opts && opts.id) {
            const state = argsOrState as DefinitionState | undefined;
            inputs["authorizations"] = state ? state.authorizations : undefined;
            inputs["createUiDefinition"] = state ? state.createUiDefinition : undefined;
            inputs["description"] = state ? state.description : undefined;
            inputs["displayName"] = state ? state.displayName : undefined;
            inputs["location"] = state ? state.location : undefined;
            inputs["lockLevel"] = state ? state.lockLevel : undefined;
            inputs["mainTemplate"] = state ? state.mainTemplate : undefined;
            inputs["name"] = state ? state.name : undefined;
            inputs["packageEnabled"] = state ? state.packageEnabled : undefined;
            inputs["packageFileUri"] = state ? state.packageFileUri : undefined;
            inputs["resourceGroupName"] = state ? state.resourceGroupName : undefined;
            inputs["tags"] = state ? state.tags : undefined;
        } else {
            const args = argsOrState as DefinitionArgs | undefined;
            if (!args || args.displayName === undefined) {
                throw new Error("Missing required property 'displayName'");
            }
            if (!args || args.lockLevel === undefined) {
                throw new Error("Missing required property 'lockLevel'");
            }
            if (!args || args.resourceGroupName === undefined) {
                throw new Error("Missing required property 'resourceGroupName'");
            }
            inputs["authorizations"] = args ? args.authorizations : undefined;
            inputs["createUiDefinition"] = args ? args.createUiDefinition : undefined;
            inputs["description"] = args ? args.description : undefined;
            inputs["displayName"] = args ? args.displayName : undefined;
            inputs["location"] = args ? args.location : undefined;
            inputs["lockLevel"] = args ? args.lockLevel : undefined;
            inputs["mainTemplate"] = args ? args.mainTemplate : undefined;
            inputs["name"] = args ? args.name : undefined;
            inputs["packageEnabled"] = args ? args.packageEnabled : undefined;
            inputs["packageFileUri"] = args ? args.packageFileUri : undefined;
            inputs["resourceGroupName"] = args ? args.resourceGroupName : undefined;
            inputs["tags"] = args ? args.tags : undefined;
        }
        if (!opts) {
            opts = {}
        }

        if (!opts.version) {
            opts.version = utilities.getVersion();
        }
        super(Definition.__pulumiType, name, inputs, opts);
    }
}

/**
 * Input properties used for looking up and filtering Definition resources.
 */
export interface DefinitionState {
    /**
     * One or more `authorization` block defined below.
     */
    readonly authorizations?: pulumi.Input<pulumi.Input<inputs.managedapplication.DefinitionAuthorization>[]>;
    /**
     * Specifies the `createUiDefinition` json for the backing template with `Microsoft.Solutions/applications` resource.
     */
    readonly createUiDefinition?: pulumi.Input<string>;
    /**
     * Specifies the managed application definition description.
     */
    readonly description?: pulumi.Input<string>;
    /**
     * Specifies the managed application definition display name.
     */
    readonly displayName?: pulumi.Input<string>;
    /**
     * Specifies the supported Azure location where the resource exists. Changing this forces a new resource to be created.
     */
    readonly location?: pulumi.Input<string>;
    /**
     * Specifies the managed application lock level. Valid values include `CanNotDelete`, `None`, `ReadOnly`. Changing this forces a new resource to be created.
     */
    readonly lockLevel?: pulumi.Input<string>;
    /**
     * Specifies the inline main template json which has resources to be provisioned.
     */
    readonly mainTemplate?: pulumi.Input<string>;
    /**
     * Specifies the name of the Managed Application Definition. Changing this forces a new resource to be created.
     */
    readonly name?: pulumi.Input<string>;
    /**
     * Is the package enabled? Defaults to `true`.
     */
    readonly packageEnabled?: pulumi.Input<boolean>;
    /**
     * Specifies the managed application definition package file Uri.
     */
    readonly packageFileUri?: pulumi.Input<string>;
    /**
     * The name of the Resource Group where the Managed Application Definition should exist. Changing this forces a new resource to be created.
     */
    readonly resourceGroupName?: pulumi.Input<string>;
    /**
     * A mapping of tags to assign to the resource.
     */
    readonly tags?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
}

/**
 * The set of arguments for constructing a Definition resource.
 */
export interface DefinitionArgs {
    /**
     * One or more `authorization` block defined below.
     */
    readonly authorizations?: pulumi.Input<pulumi.Input<inputs.managedapplication.DefinitionAuthorization>[]>;
    /**
     * Specifies the `createUiDefinition` json for the backing template with `Microsoft.Solutions/applications` resource.
     */
    readonly createUiDefinition?: pulumi.Input<string>;
    /**
     * Specifies the managed application definition description.
     */
    readonly description?: pulumi.Input<string>;
    /**
     * Specifies the managed application definition display name.
     */
    readonly displayName: pulumi.Input<string>;
    /**
     * Specifies the supported Azure location where the resource exists. Changing this forces a new resource to be created.
     */
    readonly location?: pulumi.Input<string>;
    /**
     * Specifies the managed application lock level. Valid values include `CanNotDelete`, `None`, `ReadOnly`. Changing this forces a new resource to be created.
     */
    readonly lockLevel: pulumi.Input<string>;
    /**
     * Specifies the inline main template json which has resources to be provisioned.
     */
    readonly mainTemplate?: pulumi.Input<string>;
    /**
     * Specifies the name of the Managed Application Definition. Changing this forces a new resource to be created.
     */
    readonly name?: pulumi.Input<string>;
    /**
     * Is the package enabled? Defaults to `true`.
     */
    readonly packageEnabled?: pulumi.Input<boolean>;
    /**
     * Specifies the managed application definition package file Uri.
     */
    readonly packageFileUri?: pulumi.Input<string>;
    /**
     * The name of the Resource Group where the Managed Application Definition should exist. Changing this forces a new resource to be created.
     */
    readonly resourceGroupName: pulumi.Input<string>;
    /**
     * A mapping of tags to assign to the resource.
     */
    readonly tags?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
}
