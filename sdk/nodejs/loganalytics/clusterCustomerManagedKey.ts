// *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "../utilities";

/**
 * Manages a Log Analytics Cluster Customer Managed Key.
 *
 * ## Import
 *
 * Log Analytics Cluster Customer Managed Keys can be imported using the `resource id`, e.g.
 *
 * ```sh
 *  $ pulumi import azure:loganalytics/clusterCustomerManagedKey:ClusterCustomerManagedKey example /subscriptions/00000000-0000-0000-0000-000000000000/resourcegroups/group1/providers/Microsoft.OperationalInsights/clusters/cluster1/CMK
 * ```
 */
export class ClusterCustomerManagedKey extends pulumi.CustomResource {
    /**
     * Get an existing ClusterCustomerManagedKey resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: ClusterCustomerManagedKeyState, opts?: pulumi.CustomResourceOptions): ClusterCustomerManagedKey {
        return new ClusterCustomerManagedKey(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'azure:loganalytics/clusterCustomerManagedKey:ClusterCustomerManagedKey';

    /**
     * Returns true if the given object is an instance of ClusterCustomerManagedKey.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is ClusterCustomerManagedKey {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === ClusterCustomerManagedKey.__pulumiType;
    }

    /**
     * The ID of the Key Vault Key to use for encryption.
     */
    public readonly keyVaultKeyId!: pulumi.Output<string>;
    /**
     * The ID of the Log Analytics Cluster. Changing this forces a new Log Analytics Cluster Customer Managed Key to be created.
     */
    public readonly logAnalyticsClusterId!: pulumi.Output<string>;

    /**
     * Create a ClusterCustomerManagedKey resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: ClusterCustomerManagedKeyArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: ClusterCustomerManagedKeyArgs | ClusterCustomerManagedKeyState, opts?: pulumi.CustomResourceOptions) {
        let inputs: pulumi.Inputs = {};
        if (opts && opts.id) {
            const state = argsOrState as ClusterCustomerManagedKeyState | undefined;
            inputs["keyVaultKeyId"] = state ? state.keyVaultKeyId : undefined;
            inputs["logAnalyticsClusterId"] = state ? state.logAnalyticsClusterId : undefined;
        } else {
            const args = argsOrState as ClusterCustomerManagedKeyArgs | undefined;
            if (!args || args.keyVaultKeyId === undefined) {
                throw new Error("Missing required property 'keyVaultKeyId'");
            }
            if (!args || args.logAnalyticsClusterId === undefined) {
                throw new Error("Missing required property 'logAnalyticsClusterId'");
            }
            inputs["keyVaultKeyId"] = args ? args.keyVaultKeyId : undefined;
            inputs["logAnalyticsClusterId"] = args ? args.logAnalyticsClusterId : undefined;
        }
        if (!opts) {
            opts = {}
        }

        if (!opts.version) {
            opts.version = utilities.getVersion();
        }
        super(ClusterCustomerManagedKey.__pulumiType, name, inputs, opts);
    }
}

/**
 * Input properties used for looking up and filtering ClusterCustomerManagedKey resources.
 */
export interface ClusterCustomerManagedKeyState {
    /**
     * The ID of the Key Vault Key to use for encryption.
     */
    readonly keyVaultKeyId?: pulumi.Input<string>;
    /**
     * The ID of the Log Analytics Cluster. Changing this forces a new Log Analytics Cluster Customer Managed Key to be created.
     */
    readonly logAnalyticsClusterId?: pulumi.Input<string>;
}

/**
 * The set of arguments for constructing a ClusterCustomerManagedKey resource.
 */
export interface ClusterCustomerManagedKeyArgs {
    /**
     * The ID of the Key Vault Key to use for encryption.
     */
    readonly keyVaultKeyId: pulumi.Input<string>;
    /**
     * The ID of the Log Analytics Cluster. Changing this forces a new Log Analytics Cluster Customer Managed Key to be created.
     */
    readonly logAnalyticsClusterId: pulumi.Input<string>;
}
