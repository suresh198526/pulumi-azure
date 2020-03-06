// *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "../types/input";
import * as outputs from "../types/output";
import * as utilities from "../utilities";

/**
 * Manages an Extension for a Virtual Machine Scale Set.
 * 
 * > **NOTE:** This resource is not intended to be used with the `azure.compute.ScaleSet` resource - instead it's intended for this to be used with the `azure.compute.LinuxVirtualMachineScaleSet` and `azure.compute.WindowsVirtualMachineScaleSet` resources.
 *
 * > This content is derived from https://github.com/terraform-providers/terraform-provider-azurerm/blob/master/website/docs/r/virtual_machine_scale_set_extension.html.markdown.
 */
export class VirtualMachineScaleSetExtension extends pulumi.CustomResource {
    /**
     * Get an existing VirtualMachineScaleSetExtension resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: VirtualMachineScaleSetExtensionState, opts?: pulumi.CustomResourceOptions): VirtualMachineScaleSetExtension {
        return new VirtualMachineScaleSetExtension(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'azure:compute/virtualMachineScaleSetExtension:VirtualMachineScaleSetExtension';

    /**
     * Returns true if the given object is an instance of VirtualMachineScaleSetExtension.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is VirtualMachineScaleSetExtension {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === VirtualMachineScaleSetExtension.__pulumiType;
    }

    /**
     * Should the latest version of the Extension be used at Deployment Time, if one is available? This won't auto-update the extension on existing installation. Defaults to `true`.
     */
    public readonly autoUpgradeMinorVersion!: pulumi.Output<boolean | undefined>;
    /**
     * A value which, when different to the previous value can be used to force-run the Extension even if the Extension Configuration hasn't changed.
     */
    public readonly forceUpdateTag!: pulumi.Output<string | undefined>;
    /**
     * The name for the Virtual Machine Scale Set Extension. Changing this forces a new resource to be created.
     */
    public readonly name!: pulumi.Output<string>;
    /**
     * A JSON String which specifies Sensitive Settings (such as Passwords) for the Extension.
     */
    public readonly protectedSettings!: pulumi.Output<string | undefined>;
    /**
     * An ordered list of Extension names which this should be provisioned after.
     */
    public readonly provisionAfterExtensions!: pulumi.Output<string[] | undefined>;
    /**
     * Specifies the Publisher of the Extension. Changing this forces a new resource to be created.
     */
    public readonly publisher!: pulumi.Output<string>;
    /**
     * A JSON String which specifies Settings for the Extension.
     */
    public readonly settings!: pulumi.Output<string | undefined>;
    /**
     * Specifies the Type of the Extension. Changing this forces a new resource to be created.
     */
    public readonly type!: pulumi.Output<string>;
    /**
     * Specifies the version of the Script Handler which should be used.
     */
    public readonly typeHandlerVersion!: pulumi.Output<string>;
    /**
     * The ID of the Virtual Machine Scale Set. Changing this forces a new resource to be created.
     */
    public readonly virtualMachineScaleSetId!: pulumi.Output<string>;

    /**
     * Create a VirtualMachineScaleSetExtension resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: VirtualMachineScaleSetExtensionArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: VirtualMachineScaleSetExtensionArgs | VirtualMachineScaleSetExtensionState, opts?: pulumi.CustomResourceOptions) {
        let inputs: pulumi.Inputs = {};
        if (opts && opts.id) {
            const state = argsOrState as VirtualMachineScaleSetExtensionState | undefined;
            inputs["autoUpgradeMinorVersion"] = state ? state.autoUpgradeMinorVersion : undefined;
            inputs["forceUpdateTag"] = state ? state.forceUpdateTag : undefined;
            inputs["name"] = state ? state.name : undefined;
            inputs["protectedSettings"] = state ? state.protectedSettings : undefined;
            inputs["provisionAfterExtensions"] = state ? state.provisionAfterExtensions : undefined;
            inputs["publisher"] = state ? state.publisher : undefined;
            inputs["settings"] = state ? state.settings : undefined;
            inputs["type"] = state ? state.type : undefined;
            inputs["typeHandlerVersion"] = state ? state.typeHandlerVersion : undefined;
            inputs["virtualMachineScaleSetId"] = state ? state.virtualMachineScaleSetId : undefined;
        } else {
            const args = argsOrState as VirtualMachineScaleSetExtensionArgs | undefined;
            if (!args || args.publisher === undefined) {
                throw new Error("Missing required property 'publisher'");
            }
            if (!args || args.type === undefined) {
                throw new Error("Missing required property 'type'");
            }
            if (!args || args.typeHandlerVersion === undefined) {
                throw new Error("Missing required property 'typeHandlerVersion'");
            }
            if (!args || args.virtualMachineScaleSetId === undefined) {
                throw new Error("Missing required property 'virtualMachineScaleSetId'");
            }
            inputs["autoUpgradeMinorVersion"] = args ? args.autoUpgradeMinorVersion : undefined;
            inputs["forceUpdateTag"] = args ? args.forceUpdateTag : undefined;
            inputs["name"] = args ? args.name : undefined;
            inputs["protectedSettings"] = args ? args.protectedSettings : undefined;
            inputs["provisionAfterExtensions"] = args ? args.provisionAfterExtensions : undefined;
            inputs["publisher"] = args ? args.publisher : undefined;
            inputs["settings"] = args ? args.settings : undefined;
            inputs["type"] = args ? args.type : undefined;
            inputs["typeHandlerVersion"] = args ? args.typeHandlerVersion : undefined;
            inputs["virtualMachineScaleSetId"] = args ? args.virtualMachineScaleSetId : undefined;
        }
        if (!opts) {
            opts = {}
        }

        if (!opts.version) {
            opts.version = utilities.getVersion();
        }
        super(VirtualMachineScaleSetExtension.__pulumiType, name, inputs, opts);
    }
}

/**
 * Input properties used for looking up and filtering VirtualMachineScaleSetExtension resources.
 */
export interface VirtualMachineScaleSetExtensionState {
    /**
     * Should the latest version of the Extension be used at Deployment Time, if one is available? This won't auto-update the extension on existing installation. Defaults to `true`.
     */
    readonly autoUpgradeMinorVersion?: pulumi.Input<boolean>;
    /**
     * A value which, when different to the previous value can be used to force-run the Extension even if the Extension Configuration hasn't changed.
     */
    readonly forceUpdateTag?: pulumi.Input<string>;
    /**
     * The name for the Virtual Machine Scale Set Extension. Changing this forces a new resource to be created.
     */
    readonly name?: pulumi.Input<string>;
    /**
     * A JSON String which specifies Sensitive Settings (such as Passwords) for the Extension.
     */
    readonly protectedSettings?: pulumi.Input<string>;
    /**
     * An ordered list of Extension names which this should be provisioned after.
     */
    readonly provisionAfterExtensions?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * Specifies the Publisher of the Extension. Changing this forces a new resource to be created.
     */
    readonly publisher?: pulumi.Input<string>;
    /**
     * A JSON String which specifies Settings for the Extension.
     */
    readonly settings?: pulumi.Input<string>;
    /**
     * Specifies the Type of the Extension. Changing this forces a new resource to be created.
     */
    readonly type?: pulumi.Input<string>;
    /**
     * Specifies the version of the Script Handler which should be used.
     */
    readonly typeHandlerVersion?: pulumi.Input<string>;
    /**
     * The ID of the Virtual Machine Scale Set. Changing this forces a new resource to be created.
     */
    readonly virtualMachineScaleSetId?: pulumi.Input<string>;
}

/**
 * The set of arguments for constructing a VirtualMachineScaleSetExtension resource.
 */
export interface VirtualMachineScaleSetExtensionArgs {
    /**
     * Should the latest version of the Extension be used at Deployment Time, if one is available? This won't auto-update the extension on existing installation. Defaults to `true`.
     */
    readonly autoUpgradeMinorVersion?: pulumi.Input<boolean>;
    /**
     * A value which, when different to the previous value can be used to force-run the Extension even if the Extension Configuration hasn't changed.
     */
    readonly forceUpdateTag?: pulumi.Input<string>;
    /**
     * The name for the Virtual Machine Scale Set Extension. Changing this forces a new resource to be created.
     */
    readonly name?: pulumi.Input<string>;
    /**
     * A JSON String which specifies Sensitive Settings (such as Passwords) for the Extension.
     */
    readonly protectedSettings?: pulumi.Input<string>;
    /**
     * An ordered list of Extension names which this should be provisioned after.
     */
    readonly provisionAfterExtensions?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * Specifies the Publisher of the Extension. Changing this forces a new resource to be created.
     */
    readonly publisher: pulumi.Input<string>;
    /**
     * A JSON String which specifies Settings for the Extension.
     */
    readonly settings?: pulumi.Input<string>;
    /**
     * Specifies the Type of the Extension. Changing this forces a new resource to be created.
     */
    readonly type: pulumi.Input<string>;
    /**
     * Specifies the version of the Script Handler which should be used.
     */
    readonly typeHandlerVersion: pulumi.Input<string>;
    /**
     * The ID of the Virtual Machine Scale Set. Changing this forces a new resource to be created.
     */
    readonly virtualMachineScaleSetId: pulumi.Input<string>;
}
