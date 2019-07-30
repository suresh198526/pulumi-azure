// *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "../utilities";

/**
 * Manages a HDInsight HBase Cluster.
 * 
 * ## Example Usage
 * 
 * ```typescript
 * import * as pulumi from "@pulumi/pulumi";
 * import * as azure from "@pulumi/azure";
 * 
 * const exampleResourceGroup = new azure.core.ResourceGroup("example", {
 *     location: "West Europe",
 *     name: "example-resources",
 * });
 * const exampleAccount = new azure.storage.Account("example", {
 *     accountReplicationType: "LRS",
 *     accountTier: "Standard",
 *     location: exampleResourceGroup.location,
 *     name: "hdinsightstor",
 *     resourceGroupName: exampleResourceGroup.name,
 * });
 * const exampleContainer = new azure.storage.Container("example", {
 *     containerAccessType: "private",
 *     name: "hdinsight",
 *     resourceGroupName: exampleResourceGroup.name,
 *     storageAccountName: exampleAccount.name,
 * });
 * const exampleHBaseCluster = new azure.hdinsight.HBaseCluster("example", {
 *     clusterVersion: "3.6",
 *     componentVersion: {
 *         hbase: "1.1",
 *     },
 *     gateway: {
 *         enabled: true,
 *         password: "TerrAform123!",
 *         username: "acctestusrgw",
 *     },
 *     location: exampleResourceGroup.location,
 *     name: "example-hdicluster",
 *     resourceGroupName: exampleResourceGroup.name,
 *     roles: {
 *         headNode: {
 *             password: "AccTestvdSC4daf986!",
 *             username: "acctestusrvm",
 *             vmSize: "Standard_D3_V2",
 *         },
 *         workerNode: {
 *             password: "AccTestvdSC4daf986!",
 *             targetInstanceCount: 3,
 *             username: "acctestusrvm",
 *             vmSize: "Standard_D3_V2",
 *         },
 *         zookeeperNode: {
 *             password: "AccTestvdSC4daf986!",
 *             username: "acctestusrvm",
 *             vmSize: "Standard_D3_V2",
 *         },
 *     },
 *     storageAccounts: [{
 *         isDefault: true,
 *         storageAccountKey: exampleAccount.primaryAccessKey,
 *         storageContainerId: exampleContainer.id,
 *     }],
 *     tier: "Standard",
 * });
 * ```
 *
 * > This content is derived from https://github.com/terraform-providers/terraform-provider-azurerm/blob/master/website/docs/r/hdinsight_hbase_cluster.html.markdown.
 */
export class HBaseCluster extends pulumi.CustomResource {
    /**
     * Get an existing HBaseCluster resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: HBaseClusterState, opts?: pulumi.CustomResourceOptions): HBaseCluster {
        return new HBaseCluster(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'azure:hdinsight/hBaseCluster:HBaseCluster';

    /**
     * Returns true if the given object is an instance of HBaseCluster.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is HBaseCluster {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === HBaseCluster.__pulumiType;
    }

    /**
     * Specifies the Version of HDInsights which should be used for this Cluster. Changing this forces a new resource to be created.
     */
    public readonly clusterVersion!: pulumi.Output<string>;
    /**
     * A `component_version` block as defined below.
     */
    public readonly componentVersion!: pulumi.Output<{ hbase: string }>;
    /**
     * A `gateway` block as defined below.
     */
    public readonly gateway!: pulumi.Output<{ enabled: boolean, password: string, username: string }>;
    /**
     * The HTTPS Connectivity Endpoint for this HDInsight HBase Cluster.
     */
    public /*out*/ readonly httpsEndpoint!: pulumi.Output<string>;
    /**
     * Specifies the Azure Region which this HDInsight HBase Cluster should exist. Changing this forces a new resource to be created.
     */
    public readonly location!: pulumi.Output<string>;
    /**
     * Specifies the name for this HDInsight HBase Cluster. Changing this forces a new resource to be created.
     */
    public readonly name!: pulumi.Output<string>;
    /**
     * Specifies the name of the Resource Group in which this HDInsight HBase Cluster should exist. Changing this forces a new resource to be created.
     */
    public readonly resourceGroupName!: pulumi.Output<string>;
    /**
     * A `roles` block as defined below.
     */
    public readonly roles!: pulumi.Output<{ headNode: { password?: string, sshKeys?: string[], subnetId?: string, username: string, virtualNetworkId?: string, vmSize: string }, workerNode: { minInstanceCount?: number, password?: string, sshKeys?: string[], subnetId?: string, targetInstanceCount: number, username: string, virtualNetworkId?: string, vmSize: string }, zookeeperNode: { password?: string, sshKeys?: string[], subnetId?: string, username: string, virtualNetworkId?: string, vmSize: string } }>;
    /**
     * The SSH Connectivity Endpoint for this HDInsight HBase Cluster.
     */
    public /*out*/ readonly sshEndpoint!: pulumi.Output<string>;
    /**
     * One or more `storage_account` block as defined below.
     */
    public readonly storageAccounts!: pulumi.Output<{ isDefault: boolean, storageAccountKey: string, storageContainerId: string }[]>;
    /**
     * A map of Tags which should be assigned to this HDInsight HBase Cluster.
     */
    public readonly tags!: pulumi.Output<{[key: string]: any}>;
    /**
     * Specifies the Tier which should be used for this HDInsight HBase Cluster. Possible values are `Standard` or `Premium`. Changing this forces a new resource to be created.
     */
    public readonly tier!: pulumi.Output<string>;

    /**
     * Create a HBaseCluster resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: HBaseClusterArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: HBaseClusterArgs | HBaseClusterState, opts?: pulumi.CustomResourceOptions) {
        let inputs: pulumi.Inputs = {};
        if (opts && opts.id) {
            const state = argsOrState as HBaseClusterState | undefined;
            inputs["clusterVersion"] = state ? state.clusterVersion : undefined;
            inputs["componentVersion"] = state ? state.componentVersion : undefined;
            inputs["gateway"] = state ? state.gateway : undefined;
            inputs["httpsEndpoint"] = state ? state.httpsEndpoint : undefined;
            inputs["location"] = state ? state.location : undefined;
            inputs["name"] = state ? state.name : undefined;
            inputs["resourceGroupName"] = state ? state.resourceGroupName : undefined;
            inputs["roles"] = state ? state.roles : undefined;
            inputs["sshEndpoint"] = state ? state.sshEndpoint : undefined;
            inputs["storageAccounts"] = state ? state.storageAccounts : undefined;
            inputs["tags"] = state ? state.tags : undefined;
            inputs["tier"] = state ? state.tier : undefined;
        } else {
            const args = argsOrState as HBaseClusterArgs | undefined;
            if (!args || args.clusterVersion === undefined) {
                throw new Error("Missing required property 'clusterVersion'");
            }
            if (!args || args.componentVersion === undefined) {
                throw new Error("Missing required property 'componentVersion'");
            }
            if (!args || args.gateway === undefined) {
                throw new Error("Missing required property 'gateway'");
            }
            if (!args || args.resourceGroupName === undefined) {
                throw new Error("Missing required property 'resourceGroupName'");
            }
            if (!args || args.roles === undefined) {
                throw new Error("Missing required property 'roles'");
            }
            if (!args || args.storageAccounts === undefined) {
                throw new Error("Missing required property 'storageAccounts'");
            }
            if (!args || args.tier === undefined) {
                throw new Error("Missing required property 'tier'");
            }
            inputs["clusterVersion"] = args ? args.clusterVersion : undefined;
            inputs["componentVersion"] = args ? args.componentVersion : undefined;
            inputs["gateway"] = args ? args.gateway : undefined;
            inputs["location"] = args ? args.location : undefined;
            inputs["name"] = args ? args.name : undefined;
            inputs["resourceGroupName"] = args ? args.resourceGroupName : undefined;
            inputs["roles"] = args ? args.roles : undefined;
            inputs["storageAccounts"] = args ? args.storageAccounts : undefined;
            inputs["tags"] = args ? args.tags : undefined;
            inputs["tier"] = args ? args.tier : undefined;
            inputs["httpsEndpoint"] = undefined /*out*/;
            inputs["sshEndpoint"] = undefined /*out*/;
        }
        if (!opts) {
            opts = {}
        }

        if (!opts.version) {
            opts.version = utilities.getVersion();
        }
        super(HBaseCluster.__pulumiType, name, inputs, opts);
    }
}

/**
 * Input properties used for looking up and filtering HBaseCluster resources.
 */
export interface HBaseClusterState {
    /**
     * Specifies the Version of HDInsights which should be used for this Cluster. Changing this forces a new resource to be created.
     */
    readonly clusterVersion?: pulumi.Input<string>;
    /**
     * A `component_version` block as defined below.
     */
    readonly componentVersion?: pulumi.Input<{ hbase: pulumi.Input<string> }>;
    /**
     * A `gateway` block as defined below.
     */
    readonly gateway?: pulumi.Input<{ enabled: pulumi.Input<boolean>, password: pulumi.Input<string>, username: pulumi.Input<string> }>;
    /**
     * The HTTPS Connectivity Endpoint for this HDInsight HBase Cluster.
     */
    readonly httpsEndpoint?: pulumi.Input<string>;
    /**
     * Specifies the Azure Region which this HDInsight HBase Cluster should exist. Changing this forces a new resource to be created.
     */
    readonly location?: pulumi.Input<string>;
    /**
     * Specifies the name for this HDInsight HBase Cluster. Changing this forces a new resource to be created.
     */
    readonly name?: pulumi.Input<string>;
    /**
     * Specifies the name of the Resource Group in which this HDInsight HBase Cluster should exist. Changing this forces a new resource to be created.
     */
    readonly resourceGroupName?: pulumi.Input<string>;
    /**
     * A `roles` block as defined below.
     */
    readonly roles?: pulumi.Input<{ headNode: pulumi.Input<{ password?: pulumi.Input<string>, sshKeys?: pulumi.Input<pulumi.Input<string>[]>, subnetId?: pulumi.Input<string>, username: pulumi.Input<string>, virtualNetworkId?: pulumi.Input<string>, vmSize: pulumi.Input<string> }>, workerNode: pulumi.Input<{ minInstanceCount?: pulumi.Input<number>, password?: pulumi.Input<string>, sshKeys?: pulumi.Input<pulumi.Input<string>[]>, subnetId?: pulumi.Input<string>, targetInstanceCount: pulumi.Input<number>, username: pulumi.Input<string>, virtualNetworkId?: pulumi.Input<string>, vmSize: pulumi.Input<string> }>, zookeeperNode: pulumi.Input<{ password?: pulumi.Input<string>, sshKeys?: pulumi.Input<pulumi.Input<string>[]>, subnetId?: pulumi.Input<string>, username: pulumi.Input<string>, virtualNetworkId?: pulumi.Input<string>, vmSize: pulumi.Input<string> }> }>;
    /**
     * The SSH Connectivity Endpoint for this HDInsight HBase Cluster.
     */
    readonly sshEndpoint?: pulumi.Input<string>;
    /**
     * One or more `storage_account` block as defined below.
     */
    readonly storageAccounts?: pulumi.Input<pulumi.Input<{ isDefault: pulumi.Input<boolean>, storageAccountKey: pulumi.Input<string>, storageContainerId: pulumi.Input<string> }>[]>;
    /**
     * A map of Tags which should be assigned to this HDInsight HBase Cluster.
     */
    readonly tags?: pulumi.Input<{[key: string]: any}>;
    /**
     * Specifies the Tier which should be used for this HDInsight HBase Cluster. Possible values are `Standard` or `Premium`. Changing this forces a new resource to be created.
     */
    readonly tier?: pulumi.Input<string>;
}

/**
 * The set of arguments for constructing a HBaseCluster resource.
 */
export interface HBaseClusterArgs {
    /**
     * Specifies the Version of HDInsights which should be used for this Cluster. Changing this forces a new resource to be created.
     */
    readonly clusterVersion: pulumi.Input<string>;
    /**
     * A `component_version` block as defined below.
     */
    readonly componentVersion: pulumi.Input<{ hbase: pulumi.Input<string> }>;
    /**
     * A `gateway` block as defined below.
     */
    readonly gateway: pulumi.Input<{ enabled: pulumi.Input<boolean>, password: pulumi.Input<string>, username: pulumi.Input<string> }>;
    /**
     * Specifies the Azure Region which this HDInsight HBase Cluster should exist. Changing this forces a new resource to be created.
     */
    readonly location?: pulumi.Input<string>;
    /**
     * Specifies the name for this HDInsight HBase Cluster. Changing this forces a new resource to be created.
     */
    readonly name?: pulumi.Input<string>;
    /**
     * Specifies the name of the Resource Group in which this HDInsight HBase Cluster should exist. Changing this forces a new resource to be created.
     */
    readonly resourceGroupName: pulumi.Input<string>;
    /**
     * A `roles` block as defined below.
     */
    readonly roles: pulumi.Input<{ headNode: pulumi.Input<{ password?: pulumi.Input<string>, sshKeys?: pulumi.Input<pulumi.Input<string>[]>, subnetId?: pulumi.Input<string>, username: pulumi.Input<string>, virtualNetworkId?: pulumi.Input<string>, vmSize: pulumi.Input<string> }>, workerNode: pulumi.Input<{ minInstanceCount?: pulumi.Input<number>, password?: pulumi.Input<string>, sshKeys?: pulumi.Input<pulumi.Input<string>[]>, subnetId?: pulumi.Input<string>, targetInstanceCount: pulumi.Input<number>, username: pulumi.Input<string>, virtualNetworkId?: pulumi.Input<string>, vmSize: pulumi.Input<string> }>, zookeeperNode: pulumi.Input<{ password?: pulumi.Input<string>, sshKeys?: pulumi.Input<pulumi.Input<string>[]>, subnetId?: pulumi.Input<string>, username: pulumi.Input<string>, virtualNetworkId?: pulumi.Input<string>, vmSize: pulumi.Input<string> }> }>;
    /**
     * One or more `storage_account` block as defined below.
     */
    readonly storageAccounts: pulumi.Input<pulumi.Input<{ isDefault: pulumi.Input<boolean>, storageAccountKey: pulumi.Input<string>, storageContainerId: pulumi.Input<string> }>[]>;
    /**
     * A map of Tags which should be assigned to this HDInsight HBase Cluster.
     */
    readonly tags?: pulumi.Input<{[key: string]: any}>;
    /**
     * Specifies the Tier which should be used for this HDInsight HBase Cluster. Possible values are `Standard` or `Premium`. Changing this forces a new resource to be created.
     */
    readonly tier: pulumi.Input<string>;
}
