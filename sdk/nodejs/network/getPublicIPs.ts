// *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "../types/input";
import * as outputs from "../types/output";
import * as utilities from "../utilities";

/**
 * Use this data source to access information about a set of existing Public IP Addresses.
 *
 * ## Example Usage
 *
 *
 *
 * ```typescript
 * import * as pulumi from "@pulumi/pulumi";
 * import * as azure from "@pulumi/azure";
 *
 * const example = pulumi.output(azure.network.getPublicIPs({
 *     attached: false,
 *     resourceGroupName: "pip-test",
 * }, { async: true }));
 * ```
 */
export function getPublicIPs(args: GetPublicIPsArgs, opts?: pulumi.InvokeOptions): Promise<GetPublicIPsResult> {
    if (!opts) {
        opts = {}
    }

    if (!opts.version) {
        opts.version = utilities.getVersion();
    }
    return pulumi.runtime.invoke("azure:network/getPublicIPs:getPublicIPs", {
        "allocationType": args.allocationType,
        "attached": args.attached,
        "namePrefix": args.namePrefix,
        "resourceGroupName": args.resourceGroupName,
    }, opts);
}

/**
 * A collection of arguments for invoking getPublicIPs.
 */
export interface GetPublicIPsArgs {
    /**
     * The Allocation Type for the Public IP Address. Possible values include `Static` or `Dynamic`.
     */
    readonly allocationType?: string;
    /**
     * Filter to include IP Addresses which are attached to a device, such as a VM/LB (`true`) or unattached (`false`).
     */
    readonly attached?: boolean;
    /**
     * A prefix match used for the IP Addresses `name` field, case sensitive.
     */
    readonly namePrefix?: string;
    /**
     * Specifies the name of the resource group.
     */
    readonly resourceGroupName: string;
}

/**
 * A collection of values returned by getPublicIPs.
 */
export interface GetPublicIPsResult {
    readonly allocationType?: string;
    readonly attached?: boolean;
    /**
     * The provider-assigned unique ID for this managed resource.
     */
    readonly id: string;
    readonly namePrefix?: string;
    /**
     * A List of `publicIps` blocks as defined below filtered by the criteria above.
     */
    readonly publicIps: outputs.network.GetPublicIPsPublicIp[];
    readonly resourceGroupName: string;
}
