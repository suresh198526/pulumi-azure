// *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "../types/input";
import * as outputs from "../types/output";
import * as utilities from "../utilities";

/**
 * Manages an Azure Custom Provider.
 *
 * > This content is derived from https://github.com/terraform-providers/terraform-provider-azurerm/blob/master/website/docs/r/custom_provider.html.markdown.
 */
export class CustomProvider extends pulumi.CustomResource {
    /**
     * Get an existing CustomProvider resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: CustomProviderState, opts?: pulumi.CustomResourceOptions): CustomProvider {
        return new CustomProvider(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'azure:core/customProvider:CustomProvider';

    /**
     * Returns true if the given object is an instance of CustomProvider.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is CustomProvider {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === CustomProvider.__pulumiType;
    }

    /**
     * Any number of `action` block as defined below. One of `resourceType` or `action` must be specified.
     */
    public readonly actions!: pulumi.Output<outputs.core.CustomProviderAction[] | undefined>;
    /**
     * Specifies the supported Azure location where the resource exists. Changing this forces a new resource to be created.
     */
    public readonly location!: pulumi.Output<string>;
    /**
     * Specifies the name of the Custom Provider. Changing this forces a new resource to be created.
     */
    public readonly name!: pulumi.Output<string>;
    /**
     * The name of the resource group in which to create the Custom Provider.
     */
    public readonly resourceGroupName!: pulumi.Output<string>;
    /**
     * Any number of `resourceType` block as defined below. One of `resourceType` or `action` must be specified.
     */
    public readonly resourceTypes!: pulumi.Output<outputs.core.CustomProviderResourceType[] | undefined>;
    /**
     * A mapping of tags to assign to the resource.
     */
    public readonly tags!: pulumi.Output<{[key: string]: string} | undefined>;
    /**
     * Any number of `validation` block as defined below.
     */
    public readonly validations!: pulumi.Output<outputs.core.CustomProviderValidation[] | undefined>;

    /**
     * Create a CustomProvider resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: CustomProviderArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: CustomProviderArgs | CustomProviderState, opts?: pulumi.CustomResourceOptions) {
        let inputs: pulumi.Inputs = {};
        if (opts && opts.id) {
            const state = argsOrState as CustomProviderState | undefined;
            inputs["actions"] = state ? state.actions : undefined;
            inputs["location"] = state ? state.location : undefined;
            inputs["name"] = state ? state.name : undefined;
            inputs["resourceGroupName"] = state ? state.resourceGroupName : undefined;
            inputs["resourceTypes"] = state ? state.resourceTypes : undefined;
            inputs["tags"] = state ? state.tags : undefined;
            inputs["validations"] = state ? state.validations : undefined;
        } else {
            const args = argsOrState as CustomProviderArgs | undefined;
            if (!args || args.resourceGroupName === undefined) {
                throw new Error("Missing required property 'resourceGroupName'");
            }
            inputs["actions"] = args ? args.actions : undefined;
            inputs["location"] = args ? args.location : undefined;
            inputs["name"] = args ? args.name : undefined;
            inputs["resourceGroupName"] = args ? args.resourceGroupName : undefined;
            inputs["resourceTypes"] = args ? args.resourceTypes : undefined;
            inputs["tags"] = args ? args.tags : undefined;
            inputs["validations"] = args ? args.validations : undefined;
        }
        if (!opts) {
            opts = {}
        }

        if (!opts.version) {
            opts.version = utilities.getVersion();
        }
        super(CustomProvider.__pulumiType, name, inputs, opts);
    }
}

/**
 * Input properties used for looking up and filtering CustomProvider resources.
 */
export interface CustomProviderState {
    /**
     * Any number of `action` block as defined below. One of `resourceType` or `action` must be specified.
     */
    readonly actions?: pulumi.Input<pulumi.Input<inputs.core.CustomProviderAction>[]>;
    /**
     * Specifies the supported Azure location where the resource exists. Changing this forces a new resource to be created.
     */
    readonly location?: pulumi.Input<string>;
    /**
     * Specifies the name of the Custom Provider. Changing this forces a new resource to be created.
     */
    readonly name?: pulumi.Input<string>;
    /**
     * The name of the resource group in which to create the Custom Provider.
     */
    readonly resourceGroupName?: pulumi.Input<string>;
    /**
     * Any number of `resourceType` block as defined below. One of `resourceType` or `action` must be specified.
     */
    readonly resourceTypes?: pulumi.Input<pulumi.Input<inputs.core.CustomProviderResourceType>[]>;
    /**
     * A mapping of tags to assign to the resource.
     */
    readonly tags?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
    /**
     * Any number of `validation` block as defined below.
     */
    readonly validations?: pulumi.Input<pulumi.Input<inputs.core.CustomProviderValidation>[]>;
}

/**
 * The set of arguments for constructing a CustomProvider resource.
 */
export interface CustomProviderArgs {
    /**
     * Any number of `action` block as defined below. One of `resourceType` or `action` must be specified.
     */
    readonly actions?: pulumi.Input<pulumi.Input<inputs.core.CustomProviderAction>[]>;
    /**
     * Specifies the supported Azure location where the resource exists. Changing this forces a new resource to be created.
     */
    readonly location?: pulumi.Input<string>;
    /**
     * Specifies the name of the Custom Provider. Changing this forces a new resource to be created.
     */
    readonly name?: pulumi.Input<string>;
    /**
     * The name of the resource group in which to create the Custom Provider.
     */
    readonly resourceGroupName: pulumi.Input<string>;
    /**
     * Any number of `resourceType` block as defined below. One of `resourceType` or `action` must be specified.
     */
    readonly resourceTypes?: pulumi.Input<pulumi.Input<inputs.core.CustomProviderResourceType>[]>;
    /**
     * A mapping of tags to assign to the resource.
     */
    readonly tags?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
    /**
     * Any number of `validation` block as defined below.
     */
    readonly validations?: pulumi.Input<pulumi.Input<inputs.core.CustomProviderValidation>[]>;
}