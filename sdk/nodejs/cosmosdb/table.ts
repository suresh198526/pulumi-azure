// *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import { input as inputs, output as outputs } from "../types";
import * as utilities from "../utilities";

/**
 * Manages a Table within a Cosmos DB Account.
 *
 * ## Example Usage
 *
 * ```typescript
 * import * as pulumi from "@pulumi/pulumi";
 * import * as azure from "@pulumi/azure";
 *
 * const exampleAccount = azure.cosmosdb.getAccount({
 *     name: "tfex-cosmosdb-account",
 *     resourceGroupName: "tfex-cosmosdb-account-rg",
 * });
 * const exampleTable = new azure.cosmosdb.Table("exampleTable", {
 *     resourceGroupName: exampleAccount.then(exampleAccount => exampleAccount.resourceGroupName),
 *     accountName: exampleAccount.then(exampleAccount => exampleAccount.name),
 *     throughput: 400,
 * });
 * ```
 *
 * ## Import
 *
 * CosmosDB Tables can be imported using the `resource id`, e.g.
 *
 * ```sh
 *  $ pulumi import azure:cosmosdb/table:Table table1 /subscriptions/00000000-0000-0000-0000-000000000000/resourceGroups/rg1/providers/Microsoft.DocumentDB/databaseAccounts/account1/tables/table1
 * ```
 */
export class Table extends pulumi.CustomResource {
    /**
     * Get an existing Table resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: TableState, opts?: pulumi.CustomResourceOptions): Table {
        return new Table(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'azure:cosmosdb/table:Table';

    /**
     * Returns true if the given object is an instance of Table.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is Table {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === Table.__pulumiType;
    }

    /**
     * The name of the Cosmos DB Table to create the table within. Changing this forces a new resource to be created.
     */
    public readonly accountName!: pulumi.Output<string>;
    /**
     * An `autoscaleSettings` block as defined below. This must be set upon database creation otherwise it cannot be updated without a manual destroy-apply.
     */
    public readonly autoscaleSettings!: pulumi.Output<outputs.cosmosdb.TableAutoscaleSettings | undefined>;
    /**
     * Specifies the name of the Cosmos DB Table. Changing this forces a new resource to be created.
     */
    public readonly name!: pulumi.Output<string>;
    /**
     * The name of the resource group in which the Cosmos DB Table is created. Changing this forces a new resource to be created.
     */
    public readonly resourceGroupName!: pulumi.Output<string>;
    /**
     * The throughput of Table (RU/s). Must be set in increments of `100`. The minimum value is `400`. This must be set upon database creation otherwise it cannot be updated without a manual resource destroy-apply.
     */
    public readonly throughput!: pulumi.Output<number>;

    /**
     * Create a Table resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: TableArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: TableArgs | TableState, opts?: pulumi.CustomResourceOptions) {
        let inputs: pulumi.Inputs = {};
        if (opts && opts.id) {
            const state = argsOrState as TableState | undefined;
            inputs["accountName"] = state ? state.accountName : undefined;
            inputs["autoscaleSettings"] = state ? state.autoscaleSettings : undefined;
            inputs["name"] = state ? state.name : undefined;
            inputs["resourceGroupName"] = state ? state.resourceGroupName : undefined;
            inputs["throughput"] = state ? state.throughput : undefined;
        } else {
            const args = argsOrState as TableArgs | undefined;
            if (!args || args.accountName === undefined) {
                throw new Error("Missing required property 'accountName'");
            }
            if (!args || args.resourceGroupName === undefined) {
                throw new Error("Missing required property 'resourceGroupName'");
            }
            inputs["accountName"] = args ? args.accountName : undefined;
            inputs["autoscaleSettings"] = args ? args.autoscaleSettings : undefined;
            inputs["name"] = args ? args.name : undefined;
            inputs["resourceGroupName"] = args ? args.resourceGroupName : undefined;
            inputs["throughput"] = args ? args.throughput : undefined;
        }
        if (!opts) {
            opts = {}
        }

        if (!opts.version) {
            opts.version = utilities.getVersion();
        }
        super(Table.__pulumiType, name, inputs, opts);
    }
}

/**
 * Input properties used for looking up and filtering Table resources.
 */
export interface TableState {
    /**
     * The name of the Cosmos DB Table to create the table within. Changing this forces a new resource to be created.
     */
    readonly accountName?: pulumi.Input<string>;
    /**
     * An `autoscaleSettings` block as defined below. This must be set upon database creation otherwise it cannot be updated without a manual destroy-apply.
     */
    readonly autoscaleSettings?: pulumi.Input<inputs.cosmosdb.TableAutoscaleSettings>;
    /**
     * Specifies the name of the Cosmos DB Table. Changing this forces a new resource to be created.
     */
    readonly name?: pulumi.Input<string>;
    /**
     * The name of the resource group in which the Cosmos DB Table is created. Changing this forces a new resource to be created.
     */
    readonly resourceGroupName?: pulumi.Input<string>;
    /**
     * The throughput of Table (RU/s). Must be set in increments of `100`. The minimum value is `400`. This must be set upon database creation otherwise it cannot be updated without a manual resource destroy-apply.
     */
    readonly throughput?: pulumi.Input<number>;
}

/**
 * The set of arguments for constructing a Table resource.
 */
export interface TableArgs {
    /**
     * The name of the Cosmos DB Table to create the table within. Changing this forces a new resource to be created.
     */
    readonly accountName: pulumi.Input<string>;
    /**
     * An `autoscaleSettings` block as defined below. This must be set upon database creation otherwise it cannot be updated without a manual destroy-apply.
     */
    readonly autoscaleSettings?: pulumi.Input<inputs.cosmosdb.TableAutoscaleSettings>;
    /**
     * Specifies the name of the Cosmos DB Table. Changing this forces a new resource to be created.
     */
    readonly name?: pulumi.Input<string>;
    /**
     * The name of the resource group in which the Cosmos DB Table is created. Changing this forces a new resource to be created.
     */
    readonly resourceGroupName: pulumi.Input<string>;
    /**
     * The throughput of Table (RU/s). Must be set in increments of `100`. The minimum value is `400`. This must be set upon database creation otherwise it cannot be updated without a manual resource destroy-apply.
     */
    readonly throughput?: pulumi.Input<number>;
}
