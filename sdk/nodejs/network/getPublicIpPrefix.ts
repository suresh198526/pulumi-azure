// *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "../types/input";
import * as outputs from "../types/output";
import * as utilities from "../utilities";

/**
 * Use this data source to access information about an existing Public IP Prefix.
 * 
 * ## Example Usage (reference an existing)
 * 
 * ```typescript
 * import * as pulumi from "@pulumi/pulumi";
 * import * as azure from "@pulumi/azure";
 * 
 * const example = azure.network.getPublicIpPrefix({
 *     name: "nameOfPublicIp",
 *     resourceGroupName: "nameOfResourceGroup",
 * });
 * 
 * export const publicIpPrefix = example.ipPrefix;
 * ```
 *
 * > This content is derived from https://github.com/terraform-providers/terraform-provider-azurerm/blob/master/website/docs/d/public_ip_prefix.html.markdown.
 */
export function getPublicIpPrefix(args: GetPublicIpPrefixArgs, opts?: pulumi.InvokeOptions): Promise<GetPublicIpPrefixResult> & GetPublicIpPrefixResult {
    if (!opts) {
        opts = {}
    }

    if (!opts.version) {
        opts.version = utilities.getVersion();
    }
    const promise: Promise<GetPublicIpPrefixResult> = pulumi.runtime.invoke("azure:network/getPublicIpPrefix:getPublicIpPrefix", {
        "name": args.name,
        "resourceGroupName": args.resourceGroupName,
        "zones": args.zones,
    }, opts);

    return pulumi.utils.liftProperties(promise, opts);
}

/**
 * A collection of arguments for invoking getPublicIpPrefix.
 */
export interface GetPublicIpPrefixArgs {
    /**
     * Specifies the name of the public IP prefix.
     */
    readonly name: string;
    /**
     * Specifies the name of the resource group.
     */
    readonly resourceGroupName: string;
    readonly zones?: string[];
}

/**
 * A collection of values returned by getPublicIpPrefix.
 */
export interface GetPublicIpPrefixResult {
    readonly ipPrefix: string;
    /**
     * The supported Azure location where the resource exists.
     */
    readonly location: string;
    /**
     * The name of the Public IP prefix resource.
     */
    readonly name: string;
    /**
     * The number of bits of the prefix.
     */
    readonly prefixLength: number;
    /**
     * The name of the resource group in which to create the public IP.
     */
    readonly resourceGroupName: string;
    /**
     * The SKU of the Public IP Prefix.
     */
    readonly sku: string;
    /**
     * A mapping of tags to assigned to the resource.
     */
    readonly tags: {[key: string]: string};
    readonly zones: string[];
    /**
     * id is the provider-assigned unique ID for this managed resource.
     */
    readonly id: string;
}
