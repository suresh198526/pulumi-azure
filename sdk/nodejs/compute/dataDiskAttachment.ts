// *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "../utilities";

/**
 * Manages attaching a Disk to a Virtual Machine.
 *
 * > **NOTE:** Data Disks can be attached either directly on the `azure.compute.VirtualMachine` resource, or using the `azure.compute.DataDiskAttachment` resource - but the two cannot be used together. If both are used against the same Virtual Machine, spurious changes will occur.
 *
 * > **Please Note:** only Managed Disks are supported via this separate resource, Unmanaged Disks can be attached using the `storageDataDisk` block in the `azure.compute.VirtualMachine` resource.
 *
 * ## Example Usage
 *
 *
 *
 * ```typescript
 * import * as pulumi from "@pulumi/pulumi";
 * import * as azure from "@pulumi/azure";
 *
 * const config = new pulumi.Config();
 * const prefix = config.get("prefix") || "example";
 * const vmName = `${prefix}-vm`;
 * const mainResourceGroup = new azure.core.ResourceGroup("mainResourceGroup", {location: "West Europe"});
 * const mainVirtualNetwork = new azure.network.VirtualNetwork("mainVirtualNetwork", {
 *     addressSpaces: ["10.0.0.0/16"],
 *     location: mainResourceGroup.location,
 *     resourceGroupName: mainResourceGroup.name,
 * });
 * const internal = new azure.network.Subnet("internal", {
 *     resourceGroupName: mainResourceGroup.name,
 *     virtualNetworkName: mainVirtualNetwork.name,
 *     addressPrefix: "10.0.2.0/24",
 * });
 * const mainNetworkInterface = new azure.network.NetworkInterface("mainNetworkInterface", {
 *     location: mainResourceGroup.location,
 *     resourceGroupName: mainResourceGroup.name,
 *     ip_configuration: [{
 *         name: "internal",
 *         subnetId: internal.id,
 *         privateIpAddressAllocation: "Dynamic",
 *     }],
 * });
 * const exampleVirtualMachine = new azure.compute.VirtualMachine("exampleVirtualMachine", {
 *     location: mainResourceGroup.location,
 *     resourceGroupName: mainResourceGroup.name,
 *     networkInterfaceIds: [mainNetworkInterface.id],
 *     vmSize: "Standard_F2",
 *     storage_image_reference: {
 *         publisher: "Canonical",
 *         offer: "UbuntuServer",
 *         sku: "16.04-LTS",
 *         version: "latest",
 *     },
 *     storage_os_disk: {
 *         name: "myosdisk1",
 *         caching: "ReadWrite",
 *         createOption: "FromImage",
 *         managedDiskType: "Standard_LRS",
 *     },
 *     os_profile: {
 *         computerName: vmName,
 *         adminUsername: "testadmin",
 *         adminPassword: "Password1234!",
 *     },
 *     os_profile_linux_config: {
 *         disablePasswordAuthentication: false,
 *     },
 * });
 * const exampleManagedDisk = new azure.compute.ManagedDisk("exampleManagedDisk", {
 *     location: mainResourceGroup.location,
 *     resourceGroupName: mainResourceGroup.name,
 *     storageAccountType: "Standard_LRS",
 *     createOption: "Empty",
 *     diskSizeGb: 10,
 * });
 * const exampleDataDiskAttachment = new azure.compute.DataDiskAttachment("exampleDataDiskAttachment", {
 *     managedDiskId: exampleManagedDisk.id,
 *     virtualMachineId: exampleVirtualMachine.id,
 *     lun: "10",
 *     caching: "ReadWrite",
 * });
 * ```
 */
export class DataDiskAttachment extends pulumi.CustomResource {
    /**
     * Get an existing DataDiskAttachment resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: DataDiskAttachmentState, opts?: pulumi.CustomResourceOptions): DataDiskAttachment {
        return new DataDiskAttachment(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'azure:compute/dataDiskAttachment:DataDiskAttachment';

    /**
     * Returns true if the given object is an instance of DataDiskAttachment.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is DataDiskAttachment {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === DataDiskAttachment.__pulumiType;
    }

    /**
     * Specifies the caching requirements for this Data Disk. Possible values include `None`, `ReadOnly` and `ReadWrite`.
     */
    public readonly caching!: pulumi.Output<string>;
    /**
     * The Create Option of the Data Disk, such as `Empty` or `Attach`. Defaults to `Attach`. Changing this forces a new resource to be created.
     */
    public readonly createOption!: pulumi.Output<string | undefined>;
    /**
     * The Logical Unit Number of the Data Disk, which needs to be unique within the Virtual Machine. Changing this forces a new resource to be created.
     */
    public readonly lun!: pulumi.Output<number>;
    /**
     * The ID of an existing Managed Disk which should be attached. Changing this forces a new resource to be created.
     */
    public readonly managedDiskId!: pulumi.Output<string>;
    /**
     * The ID of the Virtual Machine to which the Data Disk should be attached. Changing this forces a new resource to be created.
     */
    public readonly virtualMachineId!: pulumi.Output<string>;
    /**
     * Specifies if Write Accelerator is enabled on the disk. This can only be enabled on `Premium_LRS` managed disks with no caching and [M-Series VMs](https://docs.microsoft.com/en-us/azure/virtual-machines/workloads/sap/how-to-enable-write-accelerator). Defaults to `false`.
     */
    public readonly writeAcceleratorEnabled!: pulumi.Output<boolean | undefined>;

    /**
     * Create a DataDiskAttachment resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: DataDiskAttachmentArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: DataDiskAttachmentArgs | DataDiskAttachmentState, opts?: pulumi.CustomResourceOptions) {
        let inputs: pulumi.Inputs = {};
        if (opts && opts.id) {
            const state = argsOrState as DataDiskAttachmentState | undefined;
            inputs["caching"] = state ? state.caching : undefined;
            inputs["createOption"] = state ? state.createOption : undefined;
            inputs["lun"] = state ? state.lun : undefined;
            inputs["managedDiskId"] = state ? state.managedDiskId : undefined;
            inputs["virtualMachineId"] = state ? state.virtualMachineId : undefined;
            inputs["writeAcceleratorEnabled"] = state ? state.writeAcceleratorEnabled : undefined;
        } else {
            const args = argsOrState as DataDiskAttachmentArgs | undefined;
            if (!args || args.caching === undefined) {
                throw new Error("Missing required property 'caching'");
            }
            if (!args || args.lun === undefined) {
                throw new Error("Missing required property 'lun'");
            }
            if (!args || args.managedDiskId === undefined) {
                throw new Error("Missing required property 'managedDiskId'");
            }
            if (!args || args.virtualMachineId === undefined) {
                throw new Error("Missing required property 'virtualMachineId'");
            }
            inputs["caching"] = args ? args.caching : undefined;
            inputs["createOption"] = args ? args.createOption : undefined;
            inputs["lun"] = args ? args.lun : undefined;
            inputs["managedDiskId"] = args ? args.managedDiskId : undefined;
            inputs["virtualMachineId"] = args ? args.virtualMachineId : undefined;
            inputs["writeAcceleratorEnabled"] = args ? args.writeAcceleratorEnabled : undefined;
        }
        if (!opts) {
            opts = {}
        }

        if (!opts.version) {
            opts.version = utilities.getVersion();
        }
        super(DataDiskAttachment.__pulumiType, name, inputs, opts);
    }
}

/**
 * Input properties used for looking up and filtering DataDiskAttachment resources.
 */
export interface DataDiskAttachmentState {
    /**
     * Specifies the caching requirements for this Data Disk. Possible values include `None`, `ReadOnly` and `ReadWrite`.
     */
    readonly caching?: pulumi.Input<string>;
    /**
     * The Create Option of the Data Disk, such as `Empty` or `Attach`. Defaults to `Attach`. Changing this forces a new resource to be created.
     */
    readonly createOption?: pulumi.Input<string>;
    /**
     * The Logical Unit Number of the Data Disk, which needs to be unique within the Virtual Machine. Changing this forces a new resource to be created.
     */
    readonly lun?: pulumi.Input<number>;
    /**
     * The ID of an existing Managed Disk which should be attached. Changing this forces a new resource to be created.
     */
    readonly managedDiskId?: pulumi.Input<string>;
    /**
     * The ID of the Virtual Machine to which the Data Disk should be attached. Changing this forces a new resource to be created.
     */
    readonly virtualMachineId?: pulumi.Input<string>;
    /**
     * Specifies if Write Accelerator is enabled on the disk. This can only be enabled on `Premium_LRS` managed disks with no caching and [M-Series VMs](https://docs.microsoft.com/en-us/azure/virtual-machines/workloads/sap/how-to-enable-write-accelerator). Defaults to `false`.
     */
    readonly writeAcceleratorEnabled?: pulumi.Input<boolean>;
}

/**
 * The set of arguments for constructing a DataDiskAttachment resource.
 */
export interface DataDiskAttachmentArgs {
    /**
     * Specifies the caching requirements for this Data Disk. Possible values include `None`, `ReadOnly` and `ReadWrite`.
     */
    readonly caching: pulumi.Input<string>;
    /**
     * The Create Option of the Data Disk, such as `Empty` or `Attach`. Defaults to `Attach`. Changing this forces a new resource to be created.
     */
    readonly createOption?: pulumi.Input<string>;
    /**
     * The Logical Unit Number of the Data Disk, which needs to be unique within the Virtual Machine. Changing this forces a new resource to be created.
     */
    readonly lun: pulumi.Input<number>;
    /**
     * The ID of an existing Managed Disk which should be attached. Changing this forces a new resource to be created.
     */
    readonly managedDiskId: pulumi.Input<string>;
    /**
     * The ID of the Virtual Machine to which the Data Disk should be attached. Changing this forces a new resource to be created.
     */
    readonly virtualMachineId: pulumi.Input<string>;
    /**
     * Specifies if Write Accelerator is enabled on the disk. This can only be enabled on `Premium_LRS` managed disks with no caching and [M-Series VMs](https://docs.microsoft.com/en-us/azure/virtual-machines/workloads/sap/how-to-enable-write-accelerator). Defaults to `false`.
     */
    readonly writeAcceleratorEnabled?: pulumi.Input<boolean>;
}
