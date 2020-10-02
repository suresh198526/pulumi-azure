// *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "../utilities";

/**
 * Manages a Data Share Kusto Cluster Dataset.
 */
export class DatasetKustoCluster extends pulumi.CustomResource {
    /**
     * Get an existing DatasetKustoCluster resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: DatasetKustoClusterState, opts?: pulumi.CustomResourceOptions): DatasetKustoCluster {
        return new DatasetKustoCluster(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'azure:datashare/datasetKustoCluster:DatasetKustoCluster';

    /**
     * Returns true if the given object is an instance of DatasetKustoCluster.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is DatasetKustoCluster {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === DatasetKustoCluster.__pulumiType;
    }

    /**
     * The name of the Data Share Dataset.
     */
    public /*out*/ readonly displayName!: pulumi.Output<string>;
    /**
     * The resource ID of the Kusto Cluster to be shared with the receiver. Changing this forces a new Data Share Kusto Cluster Dataset to be created.
     */
    public readonly kustoClusterId!: pulumi.Output<string>;
    /**
     * The location of the Kusto Cluster.
     */
    public /*out*/ readonly kustoClusterLocation!: pulumi.Output<string>;
    /**
     * The name which should be used for this Data Share Kusto Cluster Dataset. Changing this forces a new Data Share Kusto Cluster Dataset to be created.
     */
    public readonly name!: pulumi.Output<string>;
    /**
     * The resource ID of the Data Share where this Data Share Kusto Cluster Dataset should be created. Changing this forces a new Data Share Kusto Cluster Dataset to be created.
     */
    public readonly shareId!: pulumi.Output<string>;

    /**
     * Create a DatasetKustoCluster resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: DatasetKustoClusterArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: DatasetKustoClusterArgs | DatasetKustoClusterState, opts?: pulumi.CustomResourceOptions) {
        let inputs: pulumi.Inputs = {};
        if (opts && opts.id) {
            const state = argsOrState as DatasetKustoClusterState | undefined;
            inputs["displayName"] = state ? state.displayName : undefined;
            inputs["kustoClusterId"] = state ? state.kustoClusterId : undefined;
            inputs["kustoClusterLocation"] = state ? state.kustoClusterLocation : undefined;
            inputs["name"] = state ? state.name : undefined;
            inputs["shareId"] = state ? state.shareId : undefined;
        } else {
            const args = argsOrState as DatasetKustoClusterArgs | undefined;
            if (!args || args.kustoClusterId === undefined) {
                throw new Error("Missing required property 'kustoClusterId'");
            }
            if (!args || args.shareId === undefined) {
                throw new Error("Missing required property 'shareId'");
            }
            inputs["kustoClusterId"] = args ? args.kustoClusterId : undefined;
            inputs["name"] = args ? args.name : undefined;
            inputs["shareId"] = args ? args.shareId : undefined;
            inputs["displayName"] = undefined /*out*/;
            inputs["kustoClusterLocation"] = undefined /*out*/;
        }
        if (!opts) {
            opts = {}
        }

        if (!opts.version) {
            opts.version = utilities.getVersion();
        }
        super(DatasetKustoCluster.__pulumiType, name, inputs, opts);
    }
}

/**
 * Input properties used for looking up and filtering DatasetKustoCluster resources.
 */
export interface DatasetKustoClusterState {
    /**
     * The name of the Data Share Dataset.
     */
    readonly displayName?: pulumi.Input<string>;
    /**
     * The resource ID of the Kusto Cluster to be shared with the receiver. Changing this forces a new Data Share Kusto Cluster Dataset to be created.
     */
    readonly kustoClusterId?: pulumi.Input<string>;
    /**
     * The location of the Kusto Cluster.
     */
    readonly kustoClusterLocation?: pulumi.Input<string>;
    /**
     * The name which should be used for this Data Share Kusto Cluster Dataset. Changing this forces a new Data Share Kusto Cluster Dataset to be created.
     */
    readonly name?: pulumi.Input<string>;
    /**
     * The resource ID of the Data Share where this Data Share Kusto Cluster Dataset should be created. Changing this forces a new Data Share Kusto Cluster Dataset to be created.
     */
    readonly shareId?: pulumi.Input<string>;
}

/**
 * The set of arguments for constructing a DatasetKustoCluster resource.
 */
export interface DatasetKustoClusterArgs {
    /**
     * The resource ID of the Kusto Cluster to be shared with the receiver. Changing this forces a new Data Share Kusto Cluster Dataset to be created.
     */
    readonly kustoClusterId: pulumi.Input<string>;
    /**
     * The name which should be used for this Data Share Kusto Cluster Dataset. Changing this forces a new Data Share Kusto Cluster Dataset to be created.
     */
    readonly name?: pulumi.Input<string>;
    /**
     * The resource ID of the Data Share where this Data Share Kusto Cluster Dataset should be created. Changing this forces a new Data Share Kusto Cluster Dataset to be created.
     */
    readonly shareId: pulumi.Input<string>;
}