// *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "../utilities";

/**
 * Use this data source to access information about an existing Notification Hub within a Notification Hub Namespace.
 * 
 * ## Example Usage
 * 
 * ```typescript
 * import * as pulumi from "@pulumi/pulumi";
 * import * as azure from "@pulumi/azure";
 * 
 * const test = pulumi.output(azure.notificationhub.getHub({
 *     name: "notification-hub",
 *     namespaceName: "namespace-name",
 *     resourceGroupName: "resource-group-name",
 * }));
 * 
 * export const id = test.id;
 * ```
 *
 * > This content is derived from https://github.com/terraform-providers/terraform-provider-azurerm/blob/master/website/docs/d/notification_hub.html.markdown.
 */
export function getHub(args: GetHubArgs, opts?: pulumi.InvokeOptions): Promise<GetHubResult> & GetHubResult {
    if (!opts) {
        opts = {}
    }

    if (!opts.version) {
        opts.version = utilities.getVersion();
    }
    const promise: Promise<GetHubResult> = pulumi.runtime.invoke("azure:notificationhub/getHub:getHub", {
        "name": args.name,
        "namespaceName": args.namespaceName,
        "resourceGroupName": args.resourceGroupName,
    }, opts);

    return pulumi.utils.liftProperties(promise, opts);
}

/**
 * A collection of arguments for invoking getHub.
 */
export interface GetHubArgs {
    /**
     * Specifies the Name of the Notification Hub.
     */
    readonly name: string;
    /**
     * Specifies the Name of the Notification Hub Namespace which contains the Notification Hub.
     */
    readonly namespaceName: string;
    /**
     * Specifies the Name of the Resource Group within which the Notification Hub exists.
     */
    readonly resourceGroupName: string;
}

/**
 * A collection of values returned by getHub.
 */
export interface GetHubResult {
    /**
     * A `apns_credential` block as defined below.
     */
    readonly apnsCredentials: { applicationMode: string, bundleId: string, keyId: string, teamId: string, token: string }[];
    /**
     * A `gcm_credential` block as defined below.
     */
    readonly gcmCredentials: { apiKey: string }[];
    /**
     * The Azure Region in which this Notification Hub exists.
     */
    readonly location: string;
    readonly name: string;
    readonly namespaceName: string;
    readonly resourceGroupName: string;
    /**
     * id is the provider-assigned unique ID for this managed resource.
     */
    readonly id: string;
}
