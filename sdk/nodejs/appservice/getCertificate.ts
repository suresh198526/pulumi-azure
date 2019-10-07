// *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "../types/input";
import * as outputs from "../types/output";
import * as utilities from "../utilities";

/**
 * Use this data source to access information about an App Service certificate.
 * 
 * ## Example Usage
 * 
 * ```typescript
 * import * as pulumi from "@pulumi/pulumi";
 * import * as azure from "@pulumi/azure";
 * 
 * const example = azure.appservice.getCertificate({
 *     name: "example-app-service-certificate",
 *     resourceGroupName: "example-rg",
 * });
 * 
 * export const appServiceCertificateId = example.id;
 * ```
 *
 * > This content is derived from https://github.com/terraform-providers/terraform-provider-azurerm/blob/master/website/docs/d/app_service_certificate.html.markdown.
 */
export function getCertificate(args: GetCertificateArgs, opts?: pulumi.InvokeOptions): Promise<GetCertificateResult> & GetCertificateResult {
    if (!opts) {
        opts = {}
    }

    if (!opts.version) {
        opts.version = utilities.getVersion();
    }
    const promise: Promise<GetCertificateResult> = pulumi.runtime.invoke("azure:appservice/getCertificate:getCertificate", {
        "name": args.name,
        "resourceGroupName": args.resourceGroupName,
        "tags": args.tags,
    }, opts);

    return pulumi.utils.liftProperties(promise, opts);
}

/**
 * A collection of arguments for invoking getCertificate.
 */
export interface GetCertificateArgs {
    /**
     * Specifies the name of the certificate.
     */
    readonly name: string;
    /**
     * The name of the resource group in which to create the certificate.
     */
    readonly resourceGroupName: string;
    readonly tags?: {[key: string]: any};
}

/**
 * A collection of values returned by getCertificate.
 */
export interface GetCertificateResult {
    /**
     * The expiration date for the certificate.
     */
    readonly expirationDate: string;
    /**
     * The friendly name of the certificate.
     */
    readonly friendlyName: string;
    /**
     * List of host names the certificate applies to.
     */
    readonly hostNames: string[];
    /**
     * The issue date for the certificate.
     */
    readonly issueDate: string;
    /**
     * The name of the certificate issuer.
     */
    readonly issuer: string;
    readonly location: string;
    readonly name: string;
    readonly resourceGroupName: string;
    /**
     * The subject name of the certificate.
     */
    readonly subjectName: string;
    readonly tags: {[key: string]: any};
    /**
     * The thumbprint for the certificate.
     */
    readonly thumbprint: string;
    /**
     * id is the provider-assigned unique ID for this managed resource.
     */
    readonly id: string;
}
