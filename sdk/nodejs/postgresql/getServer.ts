// *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "../types/input";
import * as outputs from "../types/output";
import * as utilities from "../utilities";

/**
 * Use this data source to access information about an existing PostgreSQL Azure Database Server.
 *
 * ## Example Usage
 *
 *
 *
 * ```typescript
 * import * as pulumi from "@pulumi/pulumi";
 * import * as azure from "@pulumi/azure";
 *
 * const example = azure.postgresql.getServer({
 *     name: "postgresql-server-1",
 *     resourceGroupName: "api-rg-pro",
 * });
 * export const postgresqlServerId = example.then(example => example.id);
 * ```
 */
export function getServer(args: GetServerArgs, opts?: pulumi.InvokeOptions): Promise<GetServerResult> {
    if (!opts) {
        opts = {}
    }

    if (!opts.version) {
        opts.version = utilities.getVersion();
    }
    return pulumi.runtime.invoke("azure:postgresql/getServer:getServer", {
        "name": args.name,
        "resourceGroupName": args.resourceGroupName,
    }, opts);
}

/**
 * A collection of arguments for invoking getServer.
 */
export interface GetServerArgs {
    /**
     * The name of the PostgreSQL Server.
     */
    readonly name: string;
    /**
     * Specifies the name of the Resource Group where the PostgreSQL Server exists.
     */
    readonly resourceGroupName: string;
}

/**
 * A collection of values returned by getServer.
 */
export interface GetServerResult {
    /**
     * The administrator username of the PostgreSQL Server.
     */
    readonly administratorLogin: string;
    /**
     * The fully qualified domain name of the PostgreSQL Server.
     */
    readonly fqdn: string;
    /**
     * The provider-assigned unique ID for this managed resource.
     */
    readonly id: string;
    /**
     * The location of the Resource Group in which the PostgreSQL Server exists.
     */
    readonly location: string;
    readonly name: string;
    readonly resourceGroupName: string;
    /**
     * A mapping of tags assigned to the resource.
     */
    readonly tags: {[key: string]: string};
    /**
     * The version of the PostgreSQL Server.
     */
    readonly version: string;
}
