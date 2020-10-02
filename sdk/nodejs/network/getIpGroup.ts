// *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "../types/input";
import * as outputs from "../types/output";
import * as utilities from "../utilities";

/**
 * Use this data source to access information about an existing IP Group.
 *
 * ## Example Usage
 *
 * ```typescript
 * import * as pulumi from "@pulumi/pulumi";
 * import * as azure from "@pulumi/azure";
 *
 * const example = azure.network.getIpGroup({
 *     name: "example1-ipgroup",
 *     resourceGroupName: "example-rg",
 * });
 * export const cidrs = example.then(example => example.cidrs);
 * ```
 */
export function getIpGroup(args: GetIpGroupArgs, opts?: pulumi.InvokeOptions): Promise<GetIpGroupResult> {
    if (!opts) {
        opts = {}
    }

    if (!opts.version) {
        opts.version = utilities.getVersion();
    }
    return pulumi.runtime.invoke("azure:network/getIpGroup:getIpGroup", {
        "name": args.name,
        "resourceGroupName": args.resourceGroupName,
    }, opts);
}

/**
 * A collection of arguments for invoking getIpGroup.
 */
export interface GetIpGroupArgs {
    /**
     * Specifies the Name of the IP Group.
     */
    readonly name: string;
    /**
     * Specifies the Name of the Resource Group within which the IP Group exists
     */
    readonly resourceGroupName: string;
}

/**
 * A collection of values returned by getIpGroup.
 */
export interface GetIpGroupResult {
    /**
     * A list of CIDRs or IP addresses.
     */
    readonly cidrs: string[];
    /**
     * The provider-assigned unique ID for this managed resource.
     */
    readonly id: string;
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
}
