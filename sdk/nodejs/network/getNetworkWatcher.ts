// *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "../types/input";
import * as outputs from "../types/output";
import * as utilities from "../utilities";

/**
 * Use this data source to access information about an existing Network Watcher.
 * 
 * ## Example Usage
 * 
 * ```typescript
 * import * as pulumi from "@pulumi/pulumi";
 * import * as azure from "@pulumi/azure";
 * 
 * const example = pulumi.all([azurerm_network_watcher_example.name, azurerm_resource_group_example.name]).apply(([azurerm_network_watcher_exampleName, azurerm_resource_group_exampleName]) => azure.network.getNetworkWatcher({
 *     name: azurerm_network_watcher_exampleName,
 *     resourceGroupName: azurerm_resource_group_exampleName,
 * }));
 * 
 * export const networkWatcherId = example.id;
 * ```
 *
 * > This content is derived from https://github.com/terraform-providers/terraform-provider-azurerm/blob/master/website/docs/d/network_watcher.html.markdown.
 */
export function getNetworkWatcher(args: GetNetworkWatcherArgs, opts?: pulumi.InvokeOptions): Promise<GetNetworkWatcherResult> & GetNetworkWatcherResult {
    if (!opts) {
        opts = {}
    }

    if (!opts.version) {
        opts.version = utilities.getVersion();
    }
    const promise: Promise<GetNetworkWatcherResult> = pulumi.runtime.invoke("azure:network/getNetworkWatcher:getNetworkWatcher", {
        "name": args.name,
        "resourceGroupName": args.resourceGroupName,
    }, opts);

    return pulumi.utils.liftProperties(promise, opts);
}

/**
 * A collection of arguments for invoking getNetworkWatcher.
 */
export interface GetNetworkWatcherArgs {
    /**
     * Specifies the Name of the Network Watcher.
     */
    readonly name: string;
    /**
     * Specifies the Name of the Resource Group within which the Network Watcher exists.
     */
    readonly resourceGroupName: string;
}

/**
 * A collection of values returned by getNetworkWatcher.
 */
export interface GetNetworkWatcherResult {
    /**
     * The supported Azure location where the resource exists.
     */
    readonly location: string;
    readonly name: string;
    readonly resourceGroupName: string;
    /**
     * A mapping of tags assigned to the resource.
     */
    readonly tags: {[key: string]: string};
    /**
     * id is the provider-assigned unique ID for this managed resource.
     */
    readonly id: string;
}
