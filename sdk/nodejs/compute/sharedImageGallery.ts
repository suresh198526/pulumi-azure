// *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "../types/input";
import * as outputs from "../types/output";
import * as utilities from "../utilities";

/**
 * Manages a Shared Image Gallery.
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
 * const exampleSharedImageGallery = new azure.compute.SharedImageGallery("exampleSharedImageGallery", {
 *     resourceGroupName: exampleResourceGroup.name,
 *     location: exampleResourceGroup.location,
 *     description: "Shared images and things.",
 *     tags: {
 *         Hello: "There",
 *         World: "Example",
 *     },
 * });
 * ```
 *
 * > This content is derived from https://github.com/terraform-providers/terraform-provider-azurerm/blob/master/website/docs/r/shared_image_gallery.html.markdown.
 */
export class SharedImageGallery extends pulumi.CustomResource {
    /**
     * Get an existing SharedImageGallery resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: SharedImageGalleryState, opts?: pulumi.CustomResourceOptions): SharedImageGallery {
        return new SharedImageGallery(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'azure:compute/sharedImageGallery:SharedImageGallery';

    /**
     * Returns true if the given object is an instance of SharedImageGallery.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is SharedImageGallery {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === SharedImageGallery.__pulumiType;
    }

    /**
     * A description for this Shared Image Gallery.
     */
    public readonly description!: pulumi.Output<string | undefined>;
    /**
     * Specifies the supported Azure location where the resource exists. Changing this forces a new resource to be created.
     */
    public readonly location!: pulumi.Output<string>;
    /**
     * Specifies the name of the Shared Image Gallery. Changing this forces a new resource to be created.
     */
    public readonly name!: pulumi.Output<string>;
    /**
     * The name of the resource group in which to create the Shared Image Gallery. Changing this forces a new resource to be created.
     */
    public readonly resourceGroupName!: pulumi.Output<string>;
    /**
     * A mapping of tags to assign to the Shared Image Gallery.
     */
    public readonly tags!: pulumi.Output<{[key: string]: string} | undefined>;
    /**
     * The Unique Name for this Shared Image Gallery.
     */
    public /*out*/ readonly uniqueName!: pulumi.Output<string>;

    /**
     * Create a SharedImageGallery resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: SharedImageGalleryArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: SharedImageGalleryArgs | SharedImageGalleryState, opts?: pulumi.CustomResourceOptions) {
        let inputs: pulumi.Inputs = {};
        if (opts && opts.id) {
            const state = argsOrState as SharedImageGalleryState | undefined;
            inputs["description"] = state ? state.description : undefined;
            inputs["location"] = state ? state.location : undefined;
            inputs["name"] = state ? state.name : undefined;
            inputs["resourceGroupName"] = state ? state.resourceGroupName : undefined;
            inputs["tags"] = state ? state.tags : undefined;
            inputs["uniqueName"] = state ? state.uniqueName : undefined;
        } else {
            const args = argsOrState as SharedImageGalleryArgs | undefined;
            if (!args || args.resourceGroupName === undefined) {
                throw new Error("Missing required property 'resourceGroupName'");
            }
            inputs["description"] = args ? args.description : undefined;
            inputs["location"] = args ? args.location : undefined;
            inputs["name"] = args ? args.name : undefined;
            inputs["resourceGroupName"] = args ? args.resourceGroupName : undefined;
            inputs["tags"] = args ? args.tags : undefined;
            inputs["uniqueName"] = undefined /*out*/;
        }
        if (!opts) {
            opts = {}
        }

        if (!opts.version) {
            opts.version = utilities.getVersion();
        }
        super(SharedImageGallery.__pulumiType, name, inputs, opts);
    }
}

/**
 * Input properties used for looking up and filtering SharedImageGallery resources.
 */
export interface SharedImageGalleryState {
    /**
     * A description for this Shared Image Gallery.
     */
    readonly description?: pulumi.Input<string>;
    /**
     * Specifies the supported Azure location where the resource exists. Changing this forces a new resource to be created.
     */
    readonly location?: pulumi.Input<string>;
    /**
     * Specifies the name of the Shared Image Gallery. Changing this forces a new resource to be created.
     */
    readonly name?: pulumi.Input<string>;
    /**
     * The name of the resource group in which to create the Shared Image Gallery. Changing this forces a new resource to be created.
     */
    readonly resourceGroupName?: pulumi.Input<string>;
    /**
     * A mapping of tags to assign to the Shared Image Gallery.
     */
    readonly tags?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
    /**
     * The Unique Name for this Shared Image Gallery.
     */
    readonly uniqueName?: pulumi.Input<string>;
}

/**
 * The set of arguments for constructing a SharedImageGallery resource.
 */
export interface SharedImageGalleryArgs {
    /**
     * A description for this Shared Image Gallery.
     */
    readonly description?: pulumi.Input<string>;
    /**
     * Specifies the supported Azure location where the resource exists. Changing this forces a new resource to be created.
     */
    readonly location?: pulumi.Input<string>;
    /**
     * Specifies the name of the Shared Image Gallery. Changing this forces a new resource to be created.
     */
    readonly name?: pulumi.Input<string>;
    /**
     * The name of the resource group in which to create the Shared Image Gallery. Changing this forces a new resource to be created.
     */
    readonly resourceGroupName: pulumi.Input<string>;
    /**
     * A mapping of tags to assign to the Shared Image Gallery.
     */
    readonly tags?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
}
