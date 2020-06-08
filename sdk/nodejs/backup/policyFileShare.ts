// *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "../types/input";
import * as outputs from "../types/output";
import * as utilities from "../utilities";

/**
 * Manages an Azure File Share Backup Policy within a Recovery Services vault.
 *
 * > **NOTE:** Azure Backup for Azure File Shares is currently in public preview. During the preview, the service is subject to additional limitations and unsupported backup scenarios. [Read More](https://docs.microsoft.com/en-us/azure/backup/backup-azure-files#limitations-for-azure-file-share-backup-during-preview)
 *
 * ## Example Usage
 *
 *
 *
 * ```typescript
 * import * as pulumi from "@pulumi/pulumi";
 * import * as azure from "@pulumi/azure";
 *
 * const rg = new azure.core.ResourceGroup("rg", {location: "West US"});
 * const vault = new azure.recoveryservices.Vault("vault", {
 *     location: rg.location,
 *     resourceGroupName: rg.name,
 *     sku: "Standard",
 * });
 * const policy = new azure.backup.PolicyFileShare("policy", {
 *     resourceGroupName: rg.name,
 *     recoveryVaultName: vault.name,
 *     timezone: "UTC",
 *     backup: {
 *         frequency: "Daily",
 *         time: "23:00",
 *     },
 *     retention_daily: {
 *         count: 10,
 *     },
 * });
 * ```
 */
export class PolicyFileShare extends pulumi.CustomResource {
    /**
     * Get an existing PolicyFileShare resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: PolicyFileShareState, opts?: pulumi.CustomResourceOptions): PolicyFileShare {
        return new PolicyFileShare(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'azure:backup/policyFileShare:PolicyFileShare';

    /**
     * Returns true if the given object is an instance of PolicyFileShare.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is PolicyFileShare {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === PolicyFileShare.__pulumiType;
    }

    /**
     * Configures the Policy backup frequency and times as documented in the `backup` block below.
     */
    public readonly backup!: pulumi.Output<outputs.backup.PolicyFileShareBackup>;
    /**
     * Specifies the name of the policy. Changing this forces a new resource to be created.
     */
    public readonly name!: pulumi.Output<string>;
    /**
     * Specifies the name of the Recovery Services Vault to use. Changing this forces a new resource to be created.
     */
    public readonly recoveryVaultName!: pulumi.Output<string>;
    /**
     * The name of the resource group in which to create the policy. Changing this forces a new resource to be created.
     */
    public readonly resourceGroupName!: pulumi.Output<string>;
    /**
     * Configures the policy daily retention as documented in the `retentionDaily` block below.
     */
    public readonly retentionDaily!: pulumi.Output<outputs.backup.PolicyFileShareRetentionDaily>;
    /**
     * Specifies the timezone. Defaults to `UTC`
     */
    public readonly timezone!: pulumi.Output<string | undefined>;

    /**
     * Create a PolicyFileShare resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: PolicyFileShareArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: PolicyFileShareArgs | PolicyFileShareState, opts?: pulumi.CustomResourceOptions) {
        let inputs: pulumi.Inputs = {};
        if (opts && opts.id) {
            const state = argsOrState as PolicyFileShareState | undefined;
            inputs["backup"] = state ? state.backup : undefined;
            inputs["name"] = state ? state.name : undefined;
            inputs["recoveryVaultName"] = state ? state.recoveryVaultName : undefined;
            inputs["resourceGroupName"] = state ? state.resourceGroupName : undefined;
            inputs["retentionDaily"] = state ? state.retentionDaily : undefined;
            inputs["timezone"] = state ? state.timezone : undefined;
        } else {
            const args = argsOrState as PolicyFileShareArgs | undefined;
            if (!args || args.backup === undefined) {
                throw new Error("Missing required property 'backup'");
            }
            if (!args || args.recoveryVaultName === undefined) {
                throw new Error("Missing required property 'recoveryVaultName'");
            }
            if (!args || args.resourceGroupName === undefined) {
                throw new Error("Missing required property 'resourceGroupName'");
            }
            if (!args || args.retentionDaily === undefined) {
                throw new Error("Missing required property 'retentionDaily'");
            }
            inputs["backup"] = args ? args.backup : undefined;
            inputs["name"] = args ? args.name : undefined;
            inputs["recoveryVaultName"] = args ? args.recoveryVaultName : undefined;
            inputs["resourceGroupName"] = args ? args.resourceGroupName : undefined;
            inputs["retentionDaily"] = args ? args.retentionDaily : undefined;
            inputs["timezone"] = args ? args.timezone : undefined;
        }
        if (!opts) {
            opts = {}
        }

        if (!opts.version) {
            opts.version = utilities.getVersion();
        }
        super(PolicyFileShare.__pulumiType, name, inputs, opts);
    }
}

/**
 * Input properties used for looking up and filtering PolicyFileShare resources.
 */
export interface PolicyFileShareState {
    /**
     * Configures the Policy backup frequency and times as documented in the `backup` block below.
     */
    readonly backup?: pulumi.Input<inputs.backup.PolicyFileShareBackup>;
    /**
     * Specifies the name of the policy. Changing this forces a new resource to be created.
     */
    readonly name?: pulumi.Input<string>;
    /**
     * Specifies the name of the Recovery Services Vault to use. Changing this forces a new resource to be created.
     */
    readonly recoveryVaultName?: pulumi.Input<string>;
    /**
     * The name of the resource group in which to create the policy. Changing this forces a new resource to be created.
     */
    readonly resourceGroupName?: pulumi.Input<string>;
    /**
     * Configures the policy daily retention as documented in the `retentionDaily` block below.
     */
    readonly retentionDaily?: pulumi.Input<inputs.backup.PolicyFileShareRetentionDaily>;
    /**
     * Specifies the timezone. Defaults to `UTC`
     */
    readonly timezone?: pulumi.Input<string>;
}

/**
 * The set of arguments for constructing a PolicyFileShare resource.
 */
export interface PolicyFileShareArgs {
    /**
     * Configures the Policy backup frequency and times as documented in the `backup` block below.
     */
    readonly backup: pulumi.Input<inputs.backup.PolicyFileShareBackup>;
    /**
     * Specifies the name of the policy. Changing this forces a new resource to be created.
     */
    readonly name?: pulumi.Input<string>;
    /**
     * Specifies the name of the Recovery Services Vault to use. Changing this forces a new resource to be created.
     */
    readonly recoveryVaultName: pulumi.Input<string>;
    /**
     * The name of the resource group in which to create the policy. Changing this forces a new resource to be created.
     */
    readonly resourceGroupName: pulumi.Input<string>;
    /**
     * Configures the policy daily retention as documented in the `retentionDaily` block below.
     */
    readonly retentionDaily: pulumi.Input<inputs.backup.PolicyFileShareRetentionDaily>;
    /**
     * Specifies the timezone. Defaults to `UTC`
     */
    readonly timezone?: pulumi.Input<string>;
}
