// *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "../types/input";
import * as outputs from "../types/output";
import * as utilities from "../utilities";

/**
 * Manages a managed disk.
 *
 * ## Example Usage with Create Empty
 *
 * ```typescript
 * import * as pulumi from "@pulumi/pulumi";
 * import * as azure from "@pulumi/azure";
 *
 * const exampleResourceGroup = new azure.core.ResourceGroup("exampleResourceGroup", {location: "West US 2"});
 * const exampleManagedDisk = new azure.compute.ManagedDisk("exampleManagedDisk", {
 *     location: "West US 2",
 *     resourceGroupName: exampleResourceGroup.name,
 *     storageAccountType: "Standard_LRS",
 *     createOption: "Empty",
 *     diskSizeGb: "1",
 *     tags: {
 *         environment: "staging",
 *     },
 * });
 * ```
 *
 * ## Example Usage with Create Copy
 *
 * ```typescript
 * import * as pulumi from "@pulumi/pulumi";
 * import * as azure from "@pulumi/azure";
 *
 * const example = new azure.core.ResourceGroup("example", {location: "West US 2"});
 * const source = new azure.compute.ManagedDisk("source", {
 *     location: "West US 2",
 *     resourceGroupName: example.name,
 *     storageAccountType: "Standard_LRS",
 *     createOption: "Empty",
 *     diskSizeGb: "1",
 *     tags: {
 *         environment: "staging",
 *     },
 * });
 * const copy = new azure.compute.ManagedDisk("copy", {
 *     location: "West US 2",
 *     resourceGroupName: example.name,
 *     storageAccountType: "Standard_LRS",
 *     createOption: "Copy",
 *     sourceResourceId: source.id,
 *     diskSizeGb: "1",
 *     tags: {
 *         environment: "staging",
 *     },
 * });
 * ```
 *
 * > This content is derived from https://github.com/terraform-providers/terraform-provider-azurerm/blob/master/website/docs/r/managed_disk.html.markdown.
 */
export class ManagedDisk extends pulumi.CustomResource {
    /**
     * Get an existing ManagedDisk resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: ManagedDiskState, opts?: pulumi.CustomResourceOptions): ManagedDisk {
        return new ManagedDisk(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'azure:compute/managedDisk:ManagedDisk';

    /**
     * Returns true if the given object is an instance of ManagedDisk.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is ManagedDisk {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === ManagedDisk.__pulumiType;
    }

    /**
     * The method to use when creating the managed disk. Changing this forces a new resource to be created. Possible values include:
     */
    public readonly createOption!: pulumi.Output<string>;
    /**
     * The ID of a Disk Encryption Set which should be used to encrypt this Managed Disk.
     */
    public readonly diskEncryptionSetId!: pulumi.Output<string | undefined>;
    /**
     * The number of IOPS allowed for this disk; only settable for UltraSSD disks. One operation can transfer between 4k and 256k bytes.
     */
    public readonly diskIopsReadWrite!: pulumi.Output<number>;
    /**
     * The bandwidth allowed for this disk; only settable for UltraSSD disks. MBps means millions of bytes per second.
     */
    public readonly diskMbpsReadWrite!: pulumi.Output<number>;
    /**
     * Specifies the size of the managed disk to create in gigabytes. If `createOption` is `Copy` or `FromImage`, then the value must be equal to or greater than the source's size. The size can only be increased.
     */
    public readonly diskSizeGb!: pulumi.Output<number>;
    /**
     * A `encryptionSettings` block as defined below.
     */
    public readonly encryptionSettings!: pulumi.Output<outputs.compute.ManagedDiskEncryptionSettings | undefined>;
    /**
     * ID of an existing platform/marketplace disk image to copy when `createOption` is `FromImage`.
     */
    public readonly imageReferenceId!: pulumi.Output<string | undefined>;
    /**
     * Specified the supported Azure location where the resource exists. Changing this forces a new resource to be created.
     */
    public readonly location!: pulumi.Output<string>;
    /**
     * Specifies the name of the Managed Disk. Changing this forces a new resource to be created.
     */
    public readonly name!: pulumi.Output<string>;
    /**
     * Specify a value when the source of an `Import` or `Copy` operation targets a source that contains an operating system. Valid values are `Linux` or `Windows`.
     */
    public readonly osType!: pulumi.Output<string | undefined>;
    /**
     * The name of the Resource Group where the Managed Disk should exist.
     */
    public readonly resourceGroupName!: pulumi.Output<string>;
    /**
     * The ID of an existing Managed Disk to copy `createOption` is `Copy` or the recovery point to restore when `createOption` is `Restore`
     */
    public readonly sourceResourceId!: pulumi.Output<string | undefined>;
    /**
     * URI to a valid VHD file to be used when `createOption` is `Import`.
     */
    public readonly sourceUri!: pulumi.Output<string>;
    /**
     * The ID of the Storage Account where the `sourceUri` is located. Required when `createOption` is set to `Import`.  Changing this forces a new resource to be created.
     */
    public readonly storageAccountId!: pulumi.Output<string | undefined>;
    /**
     * The type of storage to use for the managed disk. Possible values are `Standard_LRS`, `Premium_LRS`, `StandardSSD_LRS` or `UltraSSD_LRS`.
     */
    public readonly storageAccountType!: pulumi.Output<string>;
    /**
     * A mapping of tags to assign to the resource.
     */
    public readonly tags!: pulumi.Output<{[key: string]: string} | undefined>;
    /**
     * A collection containing the availability zone to allocate the Managed Disk in.
     */
    public readonly zones!: pulumi.Output<string | undefined>;

    /**
     * Create a ManagedDisk resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: ManagedDiskArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: ManagedDiskArgs | ManagedDiskState, opts?: pulumi.CustomResourceOptions) {
        let inputs: pulumi.Inputs = {};
        if (opts && opts.id) {
            const state = argsOrState as ManagedDiskState | undefined;
            inputs["createOption"] = state ? state.createOption : undefined;
            inputs["diskEncryptionSetId"] = state ? state.diskEncryptionSetId : undefined;
            inputs["diskIopsReadWrite"] = state ? state.diskIopsReadWrite : undefined;
            inputs["diskMbpsReadWrite"] = state ? state.diskMbpsReadWrite : undefined;
            inputs["diskSizeGb"] = state ? state.diskSizeGb : undefined;
            inputs["encryptionSettings"] = state ? state.encryptionSettings : undefined;
            inputs["imageReferenceId"] = state ? state.imageReferenceId : undefined;
            inputs["location"] = state ? state.location : undefined;
            inputs["name"] = state ? state.name : undefined;
            inputs["osType"] = state ? state.osType : undefined;
            inputs["resourceGroupName"] = state ? state.resourceGroupName : undefined;
            inputs["sourceResourceId"] = state ? state.sourceResourceId : undefined;
            inputs["sourceUri"] = state ? state.sourceUri : undefined;
            inputs["storageAccountId"] = state ? state.storageAccountId : undefined;
            inputs["storageAccountType"] = state ? state.storageAccountType : undefined;
            inputs["tags"] = state ? state.tags : undefined;
            inputs["zones"] = state ? state.zones : undefined;
        } else {
            const args = argsOrState as ManagedDiskArgs | undefined;
            if (!args || args.createOption === undefined) {
                throw new Error("Missing required property 'createOption'");
            }
            if (!args || args.resourceGroupName === undefined) {
                throw new Error("Missing required property 'resourceGroupName'");
            }
            if (!args || args.storageAccountType === undefined) {
                throw new Error("Missing required property 'storageAccountType'");
            }
            inputs["createOption"] = args ? args.createOption : undefined;
            inputs["diskEncryptionSetId"] = args ? args.diskEncryptionSetId : undefined;
            inputs["diskIopsReadWrite"] = args ? args.diskIopsReadWrite : undefined;
            inputs["diskMbpsReadWrite"] = args ? args.diskMbpsReadWrite : undefined;
            inputs["diskSizeGb"] = args ? args.diskSizeGb : undefined;
            inputs["encryptionSettings"] = args ? args.encryptionSettings : undefined;
            inputs["imageReferenceId"] = args ? args.imageReferenceId : undefined;
            inputs["location"] = args ? args.location : undefined;
            inputs["name"] = args ? args.name : undefined;
            inputs["osType"] = args ? args.osType : undefined;
            inputs["resourceGroupName"] = args ? args.resourceGroupName : undefined;
            inputs["sourceResourceId"] = args ? args.sourceResourceId : undefined;
            inputs["sourceUri"] = args ? args.sourceUri : undefined;
            inputs["storageAccountId"] = args ? args.storageAccountId : undefined;
            inputs["storageAccountType"] = args ? args.storageAccountType : undefined;
            inputs["tags"] = args ? args.tags : undefined;
            inputs["zones"] = args ? args.zones : undefined;
        }
        if (!opts) {
            opts = {}
        }

        if (!opts.version) {
            opts.version = utilities.getVersion();
        }
        super(ManagedDisk.__pulumiType, name, inputs, opts);
    }
}

/**
 * Input properties used for looking up and filtering ManagedDisk resources.
 */
export interface ManagedDiskState {
    /**
     * The method to use when creating the managed disk. Changing this forces a new resource to be created. Possible values include:
     */
    readonly createOption?: pulumi.Input<string>;
    /**
     * The ID of a Disk Encryption Set which should be used to encrypt this Managed Disk.
     */
    readonly diskEncryptionSetId?: pulumi.Input<string>;
    /**
     * The number of IOPS allowed for this disk; only settable for UltraSSD disks. One operation can transfer between 4k and 256k bytes.
     */
    readonly diskIopsReadWrite?: pulumi.Input<number>;
    /**
     * The bandwidth allowed for this disk; only settable for UltraSSD disks. MBps means millions of bytes per second.
     */
    readonly diskMbpsReadWrite?: pulumi.Input<number>;
    /**
     * Specifies the size of the managed disk to create in gigabytes. If `createOption` is `Copy` or `FromImage`, then the value must be equal to or greater than the source's size. The size can only be increased.
     */
    readonly diskSizeGb?: pulumi.Input<number>;
    /**
     * A `encryptionSettings` block as defined below.
     */
    readonly encryptionSettings?: pulumi.Input<inputs.compute.ManagedDiskEncryptionSettings>;
    /**
     * ID of an existing platform/marketplace disk image to copy when `createOption` is `FromImage`.
     */
    readonly imageReferenceId?: pulumi.Input<string>;
    /**
     * Specified the supported Azure location where the resource exists. Changing this forces a new resource to be created.
     */
    readonly location?: pulumi.Input<string>;
    /**
     * Specifies the name of the Managed Disk. Changing this forces a new resource to be created.
     */
    readonly name?: pulumi.Input<string>;
    /**
     * Specify a value when the source of an `Import` or `Copy` operation targets a source that contains an operating system. Valid values are `Linux` or `Windows`.
     */
    readonly osType?: pulumi.Input<string>;
    /**
     * The name of the Resource Group where the Managed Disk should exist.
     */
    readonly resourceGroupName?: pulumi.Input<string>;
    /**
     * The ID of an existing Managed Disk to copy `createOption` is `Copy` or the recovery point to restore when `createOption` is `Restore`
     */
    readonly sourceResourceId?: pulumi.Input<string>;
    /**
     * URI to a valid VHD file to be used when `createOption` is `Import`.
     */
    readonly sourceUri?: pulumi.Input<string>;
    /**
     * The ID of the Storage Account where the `sourceUri` is located. Required when `createOption` is set to `Import`.  Changing this forces a new resource to be created.
     */
    readonly storageAccountId?: pulumi.Input<string>;
    /**
     * The type of storage to use for the managed disk. Possible values are `Standard_LRS`, `Premium_LRS`, `StandardSSD_LRS` or `UltraSSD_LRS`.
     */
    readonly storageAccountType?: pulumi.Input<string>;
    /**
     * A mapping of tags to assign to the resource.
     */
    readonly tags?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
    /**
     * A collection containing the availability zone to allocate the Managed Disk in.
     */
    readonly zones?: pulumi.Input<string>;
}

/**
 * The set of arguments for constructing a ManagedDisk resource.
 */
export interface ManagedDiskArgs {
    /**
     * The method to use when creating the managed disk. Changing this forces a new resource to be created. Possible values include:
     */
    readonly createOption: pulumi.Input<string>;
    /**
     * The ID of a Disk Encryption Set which should be used to encrypt this Managed Disk.
     */
    readonly diskEncryptionSetId?: pulumi.Input<string>;
    /**
     * The number of IOPS allowed for this disk; only settable for UltraSSD disks. One operation can transfer between 4k and 256k bytes.
     */
    readonly diskIopsReadWrite?: pulumi.Input<number>;
    /**
     * The bandwidth allowed for this disk; only settable for UltraSSD disks. MBps means millions of bytes per second.
     */
    readonly diskMbpsReadWrite?: pulumi.Input<number>;
    /**
     * Specifies the size of the managed disk to create in gigabytes. If `createOption` is `Copy` or `FromImage`, then the value must be equal to or greater than the source's size. The size can only be increased.
     */
    readonly diskSizeGb?: pulumi.Input<number>;
    /**
     * A `encryptionSettings` block as defined below.
     */
    readonly encryptionSettings?: pulumi.Input<inputs.compute.ManagedDiskEncryptionSettings>;
    /**
     * ID of an existing platform/marketplace disk image to copy when `createOption` is `FromImage`.
     */
    readonly imageReferenceId?: pulumi.Input<string>;
    /**
     * Specified the supported Azure location where the resource exists. Changing this forces a new resource to be created.
     */
    readonly location?: pulumi.Input<string>;
    /**
     * Specifies the name of the Managed Disk. Changing this forces a new resource to be created.
     */
    readonly name?: pulumi.Input<string>;
    /**
     * Specify a value when the source of an `Import` or `Copy` operation targets a source that contains an operating system. Valid values are `Linux` or `Windows`.
     */
    readonly osType?: pulumi.Input<string>;
    /**
     * The name of the Resource Group where the Managed Disk should exist.
     */
    readonly resourceGroupName: pulumi.Input<string>;
    /**
     * The ID of an existing Managed Disk to copy `createOption` is `Copy` or the recovery point to restore when `createOption` is `Restore`
     */
    readonly sourceResourceId?: pulumi.Input<string>;
    /**
     * URI to a valid VHD file to be used when `createOption` is `Import`.
     */
    readonly sourceUri?: pulumi.Input<string>;
    /**
     * The ID of the Storage Account where the `sourceUri` is located. Required when `createOption` is set to `Import`.  Changing this forces a new resource to be created.
     */
    readonly storageAccountId?: pulumi.Input<string>;
    /**
     * The type of storage to use for the managed disk. Possible values are `Standard_LRS`, `Premium_LRS`, `StandardSSD_LRS` or `UltraSSD_LRS`.
     */
    readonly storageAccountType: pulumi.Input<string>;
    /**
     * A mapping of tags to assign to the resource.
     */
    readonly tags?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
    /**
     * A collection containing the availability zone to allocate the Managed Disk in.
     */
    readonly zones?: pulumi.Input<string>;
}
