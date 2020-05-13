// *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "../types/input";
import * as outputs from "../types/output";
import * as utilities from "../utilities";

/**
 * Configures Packet Capturing against a Virtual Machine using a Network Watcher.
 *
 * > **NOTE:** This resource has been deprecated in favour of the `azure.network.NetworkConnectionMonitor` resource and will be removed in the next major version of the AzureRM Provider. The new resource shares the same fields as this one, and information on migrating across can be found in this guide.
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
 * const exampleNetworkWatcher = new azure.network.NetworkWatcher("exampleNetworkWatcher", {
 *     location: exampleResourceGroup.location,
 *     resourceGroupName: exampleResourceGroup.name,
 * });
 * const exampleVirtualNetwork = new azure.network.VirtualNetwork("exampleVirtualNetwork", {
 *     addressSpaces: ["10.0.0.0/16"],
 *     location: exampleResourceGroup.location,
 *     resourceGroupName: exampleResourceGroup.name,
 * });
 * const exampleSubnet = new azure.network.Subnet("exampleSubnet", {
 *     resourceGroupName: exampleResourceGroup.name,
 *     virtualNetworkName: exampleVirtualNetwork.name,
 *     addressPrefix: "10.0.2.0/24",
 * });
 * const exampleNetworkInterface = new azure.network.NetworkInterface("exampleNetworkInterface", {
 *     location: exampleResourceGroup.location,
 *     resourceGroupName: exampleResourceGroup.name,
 *     ip_configuration: [{
 *         name: "testconfiguration1",
 *         subnetId: exampleSubnet.id,
 *         privateIpAddressAllocation: "Dynamic",
 *     }],
 * });
 * const exampleVirtualMachine = new azure.compute.VirtualMachine("exampleVirtualMachine", {
 *     location: exampleResourceGroup.location,
 *     resourceGroupName: exampleResourceGroup.name,
 *     networkInterfaceIds: [exampleNetworkInterface.id],
 *     vmSize: "Standard_F2",
 *     storage_image_reference: {
 *         publisher: "Canonical",
 *         offer: "UbuntuServer",
 *         sku: "16.04-LTS",
 *         version: "latest",
 *     },
 *     storage_os_disk: {
 *         name: "osdisk",
 *         caching: "ReadWrite",
 *         createOption: "FromImage",
 *         managedDiskType: "Standard_LRS",
 *     },
 *     os_profile: {
 *         computerName: "pctest-vm",
 *         adminUsername: "testadmin",
 *         adminPassword: "Password1234!",
 *     },
 *     os_profile_linux_config: {
 *         disablePasswordAuthentication: false,
 *     },
 * });
 * const exampleExtension = new azure.compute.Extension("exampleExtension", {
 *     location: exampleResourceGroup.location,
 *     resourceGroupName: exampleResourceGroup.name,
 *     virtualMachineName: exampleVirtualMachine.name,
 *     publisher: "Microsoft.Azure.NetworkWatcher",
 *     type: "NetworkWatcherAgentLinux",
 *     typeHandlerVersion: "1.4",
 *     autoUpgradeMinorVersion: true,
 * });
 * const exampleAccount = new azure.storage.Account("exampleAccount", {
 *     resourceGroupName: exampleResourceGroup.name,
 *     location: exampleResourceGroup.location,
 *     accountTier: "Standard",
 *     accountReplicationType: "LRS",
 * });
 * const examplePacketCapture = new azure.network.PacketCapture("examplePacketCapture", {
 *     networkWatcherName: exampleNetworkWatcher.name,
 *     resourceGroupName: exampleResourceGroup.name,
 *     targetResourceId: exampleVirtualMachine.id,
 *     storage_location: {
 *         storageAccountId: exampleAccount.id,
 *     },
 * });
 * ```
 *
 * > This content is derived from https://github.com/terraform-providers/terraform-provider-azurerm/blob/master/website/docs/r/packet_capture.html.markdown.
 */
export class PacketCapture extends pulumi.CustomResource {
    /**
     * Get an existing PacketCapture resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: PacketCaptureState, opts?: pulumi.CustomResourceOptions): PacketCapture {
        return new PacketCapture(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'azure:network/packetCapture:PacketCapture';

    /**
     * Returns true if the given object is an instance of PacketCapture.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is PacketCapture {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === PacketCapture.__pulumiType;
    }

    /**
     * One or more `filter` blocks as defined below. Changing this forces a new resource to be created.
     */
    public readonly filters!: pulumi.Output<outputs.network.PacketCaptureFilter[] | undefined>;
    /**
     * The number of bytes captured per packet. The remaining bytes are truncated. Defaults to `0` (Entire Packet Captured). Changing this forces a new resource to be created.
     */
    public readonly maximumBytesPerPacket!: pulumi.Output<number | undefined>;
    /**
     * Maximum size of the capture in Bytes. Defaults to `1073741824` (1GB). Changing this forces a new resource to be created.
     */
    public readonly maximumBytesPerSession!: pulumi.Output<number | undefined>;
    /**
     * The maximum duration of the capture session in seconds. Defaults to `18000` (5 hours). Changing this forces a new resource to be created.
     */
    public readonly maximumCaptureDuration!: pulumi.Output<number | undefined>;
    /**
     * The name to use for this Packet Capture. Changing this forces a new resource to be created.
     */
    public readonly name!: pulumi.Output<string>;
    /**
     * The name of the Network Watcher. Changing this forces a new resource to be created.
     */
    public readonly networkWatcherName!: pulumi.Output<string>;
    /**
     * The name of the resource group in which the Network Watcher exists. Changing this forces a new resource to be created.
     */
    public readonly resourceGroupName!: pulumi.Output<string>;
    /**
     * A `storageLocation` block as defined below. Changing this forces a new resource to be created.
     */
    public readonly storageLocation!: pulumi.Output<outputs.network.PacketCaptureStorageLocation>;
    /**
     * The ID of the Resource to capture packets from. Changing this forces a new resource to be created.
     */
    public readonly targetResourceId!: pulumi.Output<string>;

    /**
     * Create a PacketCapture resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: PacketCaptureArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: PacketCaptureArgs | PacketCaptureState, opts?: pulumi.CustomResourceOptions) {
        let inputs: pulumi.Inputs = {};
        if (opts && opts.id) {
            const state = argsOrState as PacketCaptureState | undefined;
            inputs["filters"] = state ? state.filters : undefined;
            inputs["maximumBytesPerPacket"] = state ? state.maximumBytesPerPacket : undefined;
            inputs["maximumBytesPerSession"] = state ? state.maximumBytesPerSession : undefined;
            inputs["maximumCaptureDuration"] = state ? state.maximumCaptureDuration : undefined;
            inputs["name"] = state ? state.name : undefined;
            inputs["networkWatcherName"] = state ? state.networkWatcherName : undefined;
            inputs["resourceGroupName"] = state ? state.resourceGroupName : undefined;
            inputs["storageLocation"] = state ? state.storageLocation : undefined;
            inputs["targetResourceId"] = state ? state.targetResourceId : undefined;
        } else {
            const args = argsOrState as PacketCaptureArgs | undefined;
            if (!args || args.networkWatcherName === undefined) {
                throw new Error("Missing required property 'networkWatcherName'");
            }
            if (!args || args.resourceGroupName === undefined) {
                throw new Error("Missing required property 'resourceGroupName'");
            }
            if (!args || args.storageLocation === undefined) {
                throw new Error("Missing required property 'storageLocation'");
            }
            if (!args || args.targetResourceId === undefined) {
                throw new Error("Missing required property 'targetResourceId'");
            }
            inputs["filters"] = args ? args.filters : undefined;
            inputs["maximumBytesPerPacket"] = args ? args.maximumBytesPerPacket : undefined;
            inputs["maximumBytesPerSession"] = args ? args.maximumBytesPerSession : undefined;
            inputs["maximumCaptureDuration"] = args ? args.maximumCaptureDuration : undefined;
            inputs["name"] = args ? args.name : undefined;
            inputs["networkWatcherName"] = args ? args.networkWatcherName : undefined;
            inputs["resourceGroupName"] = args ? args.resourceGroupName : undefined;
            inputs["storageLocation"] = args ? args.storageLocation : undefined;
            inputs["targetResourceId"] = args ? args.targetResourceId : undefined;
        }
        if (!opts) {
            opts = {}
        }

        if (!opts.version) {
            opts.version = utilities.getVersion();
        }
        super(PacketCapture.__pulumiType, name, inputs, opts);
    }
}

/**
 * Input properties used for looking up and filtering PacketCapture resources.
 */
export interface PacketCaptureState {
    /**
     * One or more `filter` blocks as defined below. Changing this forces a new resource to be created.
     */
    readonly filters?: pulumi.Input<pulumi.Input<inputs.network.PacketCaptureFilter>[]>;
    /**
     * The number of bytes captured per packet. The remaining bytes are truncated. Defaults to `0` (Entire Packet Captured). Changing this forces a new resource to be created.
     */
    readonly maximumBytesPerPacket?: pulumi.Input<number>;
    /**
     * Maximum size of the capture in Bytes. Defaults to `1073741824` (1GB). Changing this forces a new resource to be created.
     */
    readonly maximumBytesPerSession?: pulumi.Input<number>;
    /**
     * The maximum duration of the capture session in seconds. Defaults to `18000` (5 hours). Changing this forces a new resource to be created.
     */
    readonly maximumCaptureDuration?: pulumi.Input<number>;
    /**
     * The name to use for this Packet Capture. Changing this forces a new resource to be created.
     */
    readonly name?: pulumi.Input<string>;
    /**
     * The name of the Network Watcher. Changing this forces a new resource to be created.
     */
    readonly networkWatcherName?: pulumi.Input<string>;
    /**
     * The name of the resource group in which the Network Watcher exists. Changing this forces a new resource to be created.
     */
    readonly resourceGroupName?: pulumi.Input<string>;
    /**
     * A `storageLocation` block as defined below. Changing this forces a new resource to be created.
     */
    readonly storageLocation?: pulumi.Input<inputs.network.PacketCaptureStorageLocation>;
    /**
     * The ID of the Resource to capture packets from. Changing this forces a new resource to be created.
     */
    readonly targetResourceId?: pulumi.Input<string>;
}

/**
 * The set of arguments for constructing a PacketCapture resource.
 */
export interface PacketCaptureArgs {
    /**
     * One or more `filter` blocks as defined below. Changing this forces a new resource to be created.
     */
    readonly filters?: pulumi.Input<pulumi.Input<inputs.network.PacketCaptureFilter>[]>;
    /**
     * The number of bytes captured per packet. The remaining bytes are truncated. Defaults to `0` (Entire Packet Captured). Changing this forces a new resource to be created.
     */
    readonly maximumBytesPerPacket?: pulumi.Input<number>;
    /**
     * Maximum size of the capture in Bytes. Defaults to `1073741824` (1GB). Changing this forces a new resource to be created.
     */
    readonly maximumBytesPerSession?: pulumi.Input<number>;
    /**
     * The maximum duration of the capture session in seconds. Defaults to `18000` (5 hours). Changing this forces a new resource to be created.
     */
    readonly maximumCaptureDuration?: pulumi.Input<number>;
    /**
     * The name to use for this Packet Capture. Changing this forces a new resource to be created.
     */
    readonly name?: pulumi.Input<string>;
    /**
     * The name of the Network Watcher. Changing this forces a new resource to be created.
     */
    readonly networkWatcherName: pulumi.Input<string>;
    /**
     * The name of the resource group in which the Network Watcher exists. Changing this forces a new resource to be created.
     */
    readonly resourceGroupName: pulumi.Input<string>;
    /**
     * A `storageLocation` block as defined below. Changing this forces a new resource to be created.
     */
    readonly storageLocation: pulumi.Input<inputs.network.PacketCaptureStorageLocation>;
    /**
     * The ID of the Resource to capture packets from. Changing this forces a new resource to be created.
     */
    readonly targetResourceId: pulumi.Input<string>;
}
