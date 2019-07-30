// *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "../utilities";

/**
 * Use this data source to access information about the Monitor Diagnostics Categories supported by an existing Resource.
 * 
 * ## Example Usage
 * 
 * ```typescript
 * import * as pulumi from "@pulumi/pulumi";
 * import * as azure from "@pulumi/azure";
 * 
 * const testKeyVault = pulumi.all([azurerm_key_vault_test.name, azurerm_key_vault_test.resourceGroupName]).apply(([name, resourceGroupName]) => azure.keyvault.getKeyVault({
 *     name: name,
 *     resourceGroupName: resourceGroupName,
 * }));
 * const testDiagnosticCategories = testKeyVault.apply(testKeyVault => azure.monitoring.getDiagnosticCategories({
 *     resourceId: testKeyVault.id,
 * }));
 * ```
 *
 * > This content is derived from https://github.com/terraform-providers/terraform-provider-azurerm/blob/master/website/docs/d/monitor_diagnostic_categories.html.markdown.
 */
export function getDiagnosticCategories(args: GetDiagnosticCategoriesArgs, opts?: pulumi.InvokeOptions): Promise<GetDiagnosticCategoriesResult> & GetDiagnosticCategoriesResult {
    if (!opts) {
        opts = {}
    }

    if (!opts.version) {
        opts.version = utilities.getVersion();
    }
    const promise: Promise<GetDiagnosticCategoriesResult> = pulumi.runtime.invoke("azure:monitoring/getDiagnosticCategories:getDiagnosticCategories", {
        "resourceId": args.resourceId,
    }, opts);

    return pulumi.utils.liftProperties(promise, opts);
}

/**
 * A collection of arguments for invoking getDiagnosticCategories.
 */
export interface GetDiagnosticCategoriesArgs {
    /**
     * The ID of an existing Resource which Monitor Diagnostics Categories should be retrieved for.
     */
    readonly resourceId: string;
}

/**
 * A collection of values returned by getDiagnosticCategories.
 */
export interface GetDiagnosticCategoriesResult {
    /**
     * A list of the Log Categories supported for this Resource.
     */
    readonly logs: string[];
    /**
     * A list of the Metric Categories supported for this Resource.
     */
    readonly metrics: string[];
    readonly resourceId: string;
    /**
     * id is the provider-assigned unique ID for this managed resource.
     */
    readonly id: string;
}
