// *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "../types/input";
import * as outputs from "../types/output";
import * as utilities from "../utilities";

/**
 * Manages a custom virtual machine image that can be used to create virtual machines.
 *
 * > This content is derived from https://github.com/terraform-providers/terraform-provider-azurerm/blob/master/website/docs/r/image.html.markdown.
 */
export class Image extends pulumi.CustomResource {
    /**
     * Get an existing Image resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: ImageState, opts?: pulumi.CustomResourceOptions): Image {
        return new Image(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'azure:compute/image:Image';

    /**
     * Returns true if the given object is an instance of Image.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is Image {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === Image.__pulumiType;
    }

    /**
     * One or more `dataDisk` elements as defined below.
     */
    public readonly dataDisks!: pulumi.Output<outputs.compute.ImageDataDisk[] | undefined>;
    /**
     * The HyperVGenerationType of the VirtualMachine created from the image as `V1`, `V2`. The default is `V1`.
     */
    public readonly hyperVGeneration!: pulumi.Output<string | undefined>;
    /**
     * Specified the supported Azure location where the resource exists.
     * Changing this forces a new resource to be created.
     */
    public readonly location!: pulumi.Output<string>;
    /**
     * Specifies the name of the image. Changing this forces a
     * new resource to be created.
     */
    public readonly name!: pulumi.Output<string>;
    /**
     * One or more `osDisk` elements as defined below.
     */
    public readonly osDisk!: pulumi.Output<outputs.compute.ImageOsDisk | undefined>;
    /**
     * The name of the resource group in which to create
     * the image. Changing this forces a new resource to be created.
     */
    public readonly resourceGroupName!: pulumi.Output<string>;
    /**
     * The Virtual Machine ID from which to create the image.
     */
    public readonly sourceVirtualMachineId!: pulumi.Output<string | undefined>;
    /**
     * A mapping of tags to assign to the resource.
     */
    public readonly tags!: pulumi.Output<{[key: string]: string} | undefined>;
    /**
     * Is zone resiliency enabled?  Defaults to `false`.  Changing this forces a new resource to be created.
     */
    public readonly zoneResilient!: pulumi.Output<boolean | undefined>;

    /**
     * Create a Image resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: ImageArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: ImageArgs | ImageState, opts?: pulumi.CustomResourceOptions) {
        let inputs: pulumi.Inputs = {};
        if (opts && opts.id) {
            const state = argsOrState as ImageState | undefined;
            inputs["dataDisks"] = state ? state.dataDisks : undefined;
            inputs["hyperVGeneration"] = state ? state.hyperVGeneration : undefined;
            inputs["location"] = state ? state.location : undefined;
            inputs["name"] = state ? state.name : undefined;
            inputs["osDisk"] = state ? state.osDisk : undefined;
            inputs["resourceGroupName"] = state ? state.resourceGroupName : undefined;
            inputs["sourceVirtualMachineId"] = state ? state.sourceVirtualMachineId : undefined;
            inputs["tags"] = state ? state.tags : undefined;
            inputs["zoneResilient"] = state ? state.zoneResilient : undefined;
        } else {
            const args = argsOrState as ImageArgs | undefined;
            if (!args || args.resourceGroupName === undefined) {
                throw new Error("Missing required property 'resourceGroupName'");
            }
            inputs["dataDisks"] = args ? args.dataDisks : undefined;
            inputs["hyperVGeneration"] = args ? args.hyperVGeneration : undefined;
            inputs["location"] = args ? args.location : undefined;
            inputs["name"] = args ? args.name : undefined;
            inputs["osDisk"] = args ? args.osDisk : undefined;
            inputs["resourceGroupName"] = args ? args.resourceGroupName : undefined;
            inputs["sourceVirtualMachineId"] = args ? args.sourceVirtualMachineId : undefined;
            inputs["tags"] = args ? args.tags : undefined;
            inputs["zoneResilient"] = args ? args.zoneResilient : undefined;
        }
        if (!opts) {
            opts = {}
        }

        if (!opts.version) {
            opts.version = utilities.getVersion();
        }
        super(Image.__pulumiType, name, inputs, opts);
    }
}

/**
 * Input properties used for looking up and filtering Image resources.
 */
export interface ImageState {
    /**
     * One or more `dataDisk` elements as defined below.
     */
    readonly dataDisks?: pulumi.Input<pulumi.Input<inputs.compute.ImageDataDisk>[]>;
    /**
     * The HyperVGenerationType of the VirtualMachine created from the image as `V1`, `V2`. The default is `V1`.
     */
    readonly hyperVGeneration?: pulumi.Input<string>;
    /**
     * Specified the supported Azure location where the resource exists.
     * Changing this forces a new resource to be created.
     */
    readonly location?: pulumi.Input<string>;
    /**
     * Specifies the name of the image. Changing this forces a
     * new resource to be created.
     */
    readonly name?: pulumi.Input<string>;
    /**
     * One or more `osDisk` elements as defined below.
     */
    readonly osDisk?: pulumi.Input<inputs.compute.ImageOsDisk>;
    /**
     * The name of the resource group in which to create
     * the image. Changing this forces a new resource to be created.
     */
    readonly resourceGroupName?: pulumi.Input<string>;
    /**
     * The Virtual Machine ID from which to create the image.
     */
    readonly sourceVirtualMachineId?: pulumi.Input<string>;
    /**
     * A mapping of tags to assign to the resource.
     */
    readonly tags?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
    /**
     * Is zone resiliency enabled?  Defaults to `false`.  Changing this forces a new resource to be created.
     */
    readonly zoneResilient?: pulumi.Input<boolean>;
}

/**
 * The set of arguments for constructing a Image resource.
 */
export interface ImageArgs {
    /**
     * One or more `dataDisk` elements as defined below.
     */
    readonly dataDisks?: pulumi.Input<pulumi.Input<inputs.compute.ImageDataDisk>[]>;
    /**
     * The HyperVGenerationType of the VirtualMachine created from the image as `V1`, `V2`. The default is `V1`.
     */
    readonly hyperVGeneration?: pulumi.Input<string>;
    /**
     * Specified the supported Azure location where the resource exists.
     * Changing this forces a new resource to be created.
     */
    readonly location?: pulumi.Input<string>;
    /**
     * Specifies the name of the image. Changing this forces a
     * new resource to be created.
     */
    readonly name?: pulumi.Input<string>;
    /**
     * One or more `osDisk` elements as defined below.
     */
    readonly osDisk?: pulumi.Input<inputs.compute.ImageOsDisk>;
    /**
     * The name of the resource group in which to create
     * the image. Changing this forces a new resource to be created.
     */
    readonly resourceGroupName: pulumi.Input<string>;
    /**
     * The Virtual Machine ID from which to create the image.
     */
    readonly sourceVirtualMachineId?: pulumi.Input<string>;
    /**
     * A mapping of tags to assign to the resource.
     */
    readonly tags?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
    /**
     * Is zone resiliency enabled?  Defaults to `false`.  Changing this forces a new resource to be created.
     */
    readonly zoneResilient?: pulumi.Input<boolean>;
}
