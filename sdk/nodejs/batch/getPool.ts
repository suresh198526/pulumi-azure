// *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "../types/input";
import * as outputs from "../types/output";
import * as utilities from "../utilities";

/**
 * Use this data source to access information about an existing Batch pool
 *
 * ## Example Usage
 *
 *
 *
 * ```typescript
 * import * as pulumi from "@pulumi/pulumi";
 * import * as azure from "@pulumi/azure";
 *
 * const example = pulumi.output(azure.batch.getPool({
 *     accountName: "testbatchaccount",
 *     name: "testbatchpool",
 *     resourceGroupName: "test",
 * }, { async: true }));
 * ```
 *
 * > This content is derived from https://github.com/terraform-providers/terraform-provider-azurerm/blob/master/website/docs/d/batch_pool.html.markdown.
 */
export function getPool(args: GetPoolArgs, opts?: pulumi.InvokeOptions): Promise<GetPoolResult> {
    if (!opts) {
        opts = {}
    }

    if (!opts.version) {
        opts.version = utilities.getVersion();
    }
    return pulumi.runtime.invoke("azure:batch/getPool:getPool", {
        "accountName": args.accountName,
        "certificates": args.certificates,
        "name": args.name,
        "networkConfiguration": args.networkConfiguration,
        "resourceGroupName": args.resourceGroupName,
        "startTask": args.startTask,
    }, opts);
}

/**
 * A collection of arguments for invoking getPool.
 */
export interface GetPoolArgs {
    /**
     * The name of the Batch account.
     */
    readonly accountName: string;
    /**
     * One or more `certificate` blocks that describe the certificates installed on each compute node in the pool.
     */
    readonly certificates?: inputs.batch.GetPoolCertificate[];
    /**
     * The name of the endpoint.
     */
    readonly name: string;
    readonly networkConfiguration?: inputs.batch.GetPoolNetworkConfiguration;
    readonly resourceGroupName: string;
    /**
     * A `startTask` block that describes the start task settings for the Batch pool.
     */
    readonly startTask?: inputs.batch.GetPoolStartTask;
}

/**
 * A collection of values returned by getPool.
 */
export interface GetPoolResult {
    /**
     * The name of the Batch account.
     */
    readonly accountName: string;
    /**
     * A `autoScale` block that describes the scale settings when using auto scale.
     */
    readonly autoScales: outputs.batch.GetPoolAutoScale[];
    /**
     * One or more `certificate` blocks that describe the certificates installed on each compute node in the pool.
     */
    readonly certificates?: outputs.batch.GetPoolCertificate[];
    /**
     * The container configuration used in the pool's VMs.
     */
    readonly containerConfigurations: outputs.batch.GetPoolContainerConfiguration[];
    readonly displayName: string;
    /**
     * A `fixedScale` block that describes the scale settings when using fixed scale.
     */
    readonly fixedScales: outputs.batch.GetPoolFixedScale[];
    /**
     * The maximum number of tasks that can run concurrently on a single compute node in the pool.
     */
    readonly maxTasksPerNode: number;
    readonly metadata: {[key: string]: string};
    /**
     * The name of the endpoint.
     */
    readonly name: string;
    readonly networkConfiguration: outputs.batch.GetPoolNetworkConfiguration;
    /**
     * The Sku of the node agents in the Batch pool.
     */
    readonly nodeAgentSkuId: string;
    readonly resourceGroupName: string;
    /**
     * A `startTask` block that describes the start task settings for the Batch pool.
     */
    readonly startTask?: outputs.batch.GetPoolStartTask;
    /**
     * The reference of the storage image used by the nodes in the Batch pool.
     */
    readonly storageImageReferences: outputs.batch.GetPoolStorageImageReference[];
    /**
     * The size of the VM created in the Batch pool.
     */
    readonly vmSize: string;
    /**
     * The provider-assigned unique ID for this managed resource.
     */
    readonly id: string;
}
