// *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "../types/input";
import * as outputs from "../types/output";
import * as utilities from "../utilities";

/**
 * Manages a CosmosDB (formally DocumentDB) Account.
 *
 * > This content is derived from https://github.com/terraform-providers/terraform-provider-azurerm/blob/master/website/docs/r/cosmosdb_account.html.markdown.
 */
export class Account extends pulumi.CustomResource {
    /**
     * Get an existing Account resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: AccountState, opts?: pulumi.CustomResourceOptions): Account {
        return new Account(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'azure:cosmosdb/account:Account';

    /**
     * Returns true if the given object is an instance of Account.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is Account {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === Account.__pulumiType;
    }

    /**
     * The capabilities which should be enabled for this Cosmos DB account. Possible values are `EnableAggregationPipeline`, `EnableCassandra`, `EnableGremlin`, `EnableTable`, `MongoDBv3.4`, and `mongoEnableDocLevelTTL`.
     */
    public readonly capabilities!: pulumi.Output<outputs.cosmosdb.AccountCapability[] | undefined>;
    /**
     * A list of connection strings available for this CosmosDB account. If the kind is `GlobalDocumentDB`, this will be empty.
     */
    public /*out*/ readonly connectionStrings!: pulumi.Output<string[]>;
    /**
     * Specifies a `consistencyPolicy` resource, used to define the consistency policy for this CosmosDB account.
     */
    public readonly consistencyPolicy!: pulumi.Output<outputs.cosmosdb.AccountConsistencyPolicy>;
    /**
     * Enable automatic fail over for this Cosmos DB account.
     */
    public readonly enableAutomaticFailover!: pulumi.Output<boolean | undefined>;
    /**
     * Enable multi-master support for this Cosmos DB account.
     */
    public readonly enableMultipleWriteLocations!: pulumi.Output<boolean | undefined>;
    /**
     * The endpoint used to connect to the CosmosDB account.
     */
    public /*out*/ readonly endpoint!: pulumi.Output<string>;
    /**
     * Specifies a `geoLocation` resource, used to define where data should be replicated with the `failoverPriority` 0 specifying the primary location.
     */
    public readonly geoLocations!: pulumi.Output<outputs.cosmosdb.AccountGeoLocation[]>;
    /**
     * CosmosDB Firewall Support: This value specifies the set of IP addresses or IP address ranges in CIDR form to be included as the allowed list of client IP's for a given database account. IP addresses/ranges must be comma separated and must not contain any spaces.
     */
    public readonly ipRangeFilter!: pulumi.Output<string | undefined>;
    /**
     * Enables virtual network filtering for this Cosmos DB account.
     */
    public readonly isVirtualNetworkFilterEnabled!: pulumi.Output<boolean | undefined>;
    /**
     * Specifies the Kind of CosmosDB to create - possible values are `GlobalDocumentDB` and `MongoDB`. Defaults to `GlobalDocumentDB`. Changing this forces a new resource to be created.
     */
    public readonly kind!: pulumi.Output<string | undefined>;
    /**
     * The name of the Azure region to host replicated data.
     */
    public readonly location!: pulumi.Output<string>;
    /**
     * The capability to enable - Possible values are `EnableAggregationPipeline`, `EnableCassandra`, `EnableGremlin`,`EnableMongo`, `EnableTable`, `MongoDBv3.4`, and `mongoEnableDocLevelTTL`.
     */
    public readonly name!: pulumi.Output<string>;
    /**
     * Specifies the Offer Type to use for this CosmosDB Account - currently this can only be set to `Standard`.
     */
    public readonly offerType!: pulumi.Output<string>;
    /**
     * The Primary master key for the CosmosDB Account.
     */
    public /*out*/ readonly primaryMasterKey!: pulumi.Output<string>;
    /**
     * The Primary read-only master Key for the CosmosDB Account.
     */
    public /*out*/ readonly primaryReadonlyMasterKey!: pulumi.Output<string>;
    /**
     * A list of read endpoints available for this CosmosDB account.
     */
    public /*out*/ readonly readEndpoints!: pulumi.Output<string[]>;
    /**
     * The name of the resource group in which the CosmosDB Account is created. Changing this forces a new resource to be created.
     */
    public readonly resourceGroupName!: pulumi.Output<string>;
    /**
     * The Secondary master key for the CosmosDB Account.
     */
    public /*out*/ readonly secondaryMasterKey!: pulumi.Output<string>;
    /**
     * The Secondary read-only master key for the CosmosDB Account.
     */
    public /*out*/ readonly secondaryReadonlyMasterKey!: pulumi.Output<string>;
    /**
     * A mapping of tags to assign to the resource.
     */
    public readonly tags!: pulumi.Output<{[key: string]: string} | undefined>;
    /**
     * Specifies a `virtualNetworkRules` resource, used to define which subnets are allowed to access this CosmosDB account.
     */
    public readonly virtualNetworkRules!: pulumi.Output<outputs.cosmosdb.AccountVirtualNetworkRule[] | undefined>;
    /**
     * A list of write endpoints available for this CosmosDB account.
     */
    public /*out*/ readonly writeEndpoints!: pulumi.Output<string[]>;

    /**
     * Create a Account resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: AccountArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: AccountArgs | AccountState, opts?: pulumi.CustomResourceOptions) {
        let inputs: pulumi.Inputs = {};
        if (opts && opts.id) {
            const state = argsOrState as AccountState | undefined;
            inputs["capabilities"] = state ? state.capabilities : undefined;
            inputs["connectionStrings"] = state ? state.connectionStrings : undefined;
            inputs["consistencyPolicy"] = state ? state.consistencyPolicy : undefined;
            inputs["enableAutomaticFailover"] = state ? state.enableAutomaticFailover : undefined;
            inputs["enableMultipleWriteLocations"] = state ? state.enableMultipleWriteLocations : undefined;
            inputs["endpoint"] = state ? state.endpoint : undefined;
            inputs["geoLocations"] = state ? state.geoLocations : undefined;
            inputs["ipRangeFilter"] = state ? state.ipRangeFilter : undefined;
            inputs["isVirtualNetworkFilterEnabled"] = state ? state.isVirtualNetworkFilterEnabled : undefined;
            inputs["kind"] = state ? state.kind : undefined;
            inputs["location"] = state ? state.location : undefined;
            inputs["name"] = state ? state.name : undefined;
            inputs["offerType"] = state ? state.offerType : undefined;
            inputs["primaryMasterKey"] = state ? state.primaryMasterKey : undefined;
            inputs["primaryReadonlyMasterKey"] = state ? state.primaryReadonlyMasterKey : undefined;
            inputs["readEndpoints"] = state ? state.readEndpoints : undefined;
            inputs["resourceGroupName"] = state ? state.resourceGroupName : undefined;
            inputs["secondaryMasterKey"] = state ? state.secondaryMasterKey : undefined;
            inputs["secondaryReadonlyMasterKey"] = state ? state.secondaryReadonlyMasterKey : undefined;
            inputs["tags"] = state ? state.tags : undefined;
            inputs["virtualNetworkRules"] = state ? state.virtualNetworkRules : undefined;
            inputs["writeEndpoints"] = state ? state.writeEndpoints : undefined;
        } else {
            const args = argsOrState as AccountArgs | undefined;
            if (!args || args.consistencyPolicy === undefined) {
                throw new Error("Missing required property 'consistencyPolicy'");
            }
            if (!args || args.geoLocations === undefined) {
                throw new Error("Missing required property 'geoLocations'");
            }
            if (!args || args.offerType === undefined) {
                throw new Error("Missing required property 'offerType'");
            }
            if (!args || args.resourceGroupName === undefined) {
                throw new Error("Missing required property 'resourceGroupName'");
            }
            inputs["capabilities"] = args ? args.capabilities : undefined;
            inputs["consistencyPolicy"] = args ? args.consistencyPolicy : undefined;
            inputs["enableAutomaticFailover"] = args ? args.enableAutomaticFailover : undefined;
            inputs["enableMultipleWriteLocations"] = args ? args.enableMultipleWriteLocations : undefined;
            inputs["geoLocations"] = args ? args.geoLocations : undefined;
            inputs["ipRangeFilter"] = args ? args.ipRangeFilter : undefined;
            inputs["isVirtualNetworkFilterEnabled"] = args ? args.isVirtualNetworkFilterEnabled : undefined;
            inputs["kind"] = args ? args.kind : undefined;
            inputs["location"] = args ? args.location : undefined;
            inputs["name"] = args ? args.name : undefined;
            inputs["offerType"] = args ? args.offerType : undefined;
            inputs["resourceGroupName"] = args ? args.resourceGroupName : undefined;
            inputs["tags"] = args ? args.tags : undefined;
            inputs["virtualNetworkRules"] = args ? args.virtualNetworkRules : undefined;
            inputs["connectionStrings"] = undefined /*out*/;
            inputs["endpoint"] = undefined /*out*/;
            inputs["primaryMasterKey"] = undefined /*out*/;
            inputs["primaryReadonlyMasterKey"] = undefined /*out*/;
            inputs["readEndpoints"] = undefined /*out*/;
            inputs["secondaryMasterKey"] = undefined /*out*/;
            inputs["secondaryReadonlyMasterKey"] = undefined /*out*/;
            inputs["writeEndpoints"] = undefined /*out*/;
        }
        if (!opts) {
            opts = {}
        }

        if (!opts.version) {
            opts.version = utilities.getVersion();
        }
        super(Account.__pulumiType, name, inputs, opts);
    }
}

/**
 * Input properties used for looking up and filtering Account resources.
 */
export interface AccountState {
    /**
     * The capabilities which should be enabled for this Cosmos DB account. Possible values are `EnableAggregationPipeline`, `EnableCassandra`, `EnableGremlin`, `EnableTable`, `MongoDBv3.4`, and `mongoEnableDocLevelTTL`.
     */
    readonly capabilities?: pulumi.Input<pulumi.Input<inputs.cosmosdb.AccountCapability>[]>;
    /**
     * A list of connection strings available for this CosmosDB account. If the kind is `GlobalDocumentDB`, this will be empty.
     */
    readonly connectionStrings?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * Specifies a `consistencyPolicy` resource, used to define the consistency policy for this CosmosDB account.
     */
    readonly consistencyPolicy?: pulumi.Input<inputs.cosmosdb.AccountConsistencyPolicy>;
    /**
     * Enable automatic fail over for this Cosmos DB account.
     */
    readonly enableAutomaticFailover?: pulumi.Input<boolean>;
    /**
     * Enable multi-master support for this Cosmos DB account.
     */
    readonly enableMultipleWriteLocations?: pulumi.Input<boolean>;
    /**
     * The endpoint used to connect to the CosmosDB account.
     */
    readonly endpoint?: pulumi.Input<string>;
    /**
     * Specifies a `geoLocation` resource, used to define where data should be replicated with the `failoverPriority` 0 specifying the primary location.
     */
    readonly geoLocations?: pulumi.Input<pulumi.Input<inputs.cosmosdb.AccountGeoLocation>[]>;
    /**
     * CosmosDB Firewall Support: This value specifies the set of IP addresses or IP address ranges in CIDR form to be included as the allowed list of client IP's for a given database account. IP addresses/ranges must be comma separated and must not contain any spaces.
     */
    readonly ipRangeFilter?: pulumi.Input<string>;
    /**
     * Enables virtual network filtering for this Cosmos DB account.
     */
    readonly isVirtualNetworkFilterEnabled?: pulumi.Input<boolean>;
    /**
     * Specifies the Kind of CosmosDB to create - possible values are `GlobalDocumentDB` and `MongoDB`. Defaults to `GlobalDocumentDB`. Changing this forces a new resource to be created.
     */
    readonly kind?: pulumi.Input<string>;
    /**
     * The name of the Azure region to host replicated data.
     */
    readonly location?: pulumi.Input<string>;
    /**
     * The capability to enable - Possible values are `EnableAggregationPipeline`, `EnableCassandra`, `EnableGremlin`,`EnableMongo`, `EnableTable`, `MongoDBv3.4`, and `mongoEnableDocLevelTTL`.
     */
    readonly name?: pulumi.Input<string>;
    /**
     * Specifies the Offer Type to use for this CosmosDB Account - currently this can only be set to `Standard`.
     */
    readonly offerType?: pulumi.Input<string>;
    /**
     * The Primary master key for the CosmosDB Account.
     */
    readonly primaryMasterKey?: pulumi.Input<string>;
    /**
     * The Primary read-only master Key for the CosmosDB Account.
     */
    readonly primaryReadonlyMasterKey?: pulumi.Input<string>;
    /**
     * A list of read endpoints available for this CosmosDB account.
     */
    readonly readEndpoints?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * The name of the resource group in which the CosmosDB Account is created. Changing this forces a new resource to be created.
     */
    readonly resourceGroupName?: pulumi.Input<string>;
    /**
     * The Secondary master key for the CosmosDB Account.
     */
    readonly secondaryMasterKey?: pulumi.Input<string>;
    /**
     * The Secondary read-only master key for the CosmosDB Account.
     */
    readonly secondaryReadonlyMasterKey?: pulumi.Input<string>;
    /**
     * A mapping of tags to assign to the resource.
     */
    readonly tags?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
    /**
     * Specifies a `virtualNetworkRules` resource, used to define which subnets are allowed to access this CosmosDB account.
     */
    readonly virtualNetworkRules?: pulumi.Input<pulumi.Input<inputs.cosmosdb.AccountVirtualNetworkRule>[]>;
    /**
     * A list of write endpoints available for this CosmosDB account.
     */
    readonly writeEndpoints?: pulumi.Input<pulumi.Input<string>[]>;
}

/**
 * The set of arguments for constructing a Account resource.
 */
export interface AccountArgs {
    /**
     * The capabilities which should be enabled for this Cosmos DB account. Possible values are `EnableAggregationPipeline`, `EnableCassandra`, `EnableGremlin`, `EnableTable`, `MongoDBv3.4`, and `mongoEnableDocLevelTTL`.
     */
    readonly capabilities?: pulumi.Input<pulumi.Input<inputs.cosmosdb.AccountCapability>[]>;
    /**
     * Specifies a `consistencyPolicy` resource, used to define the consistency policy for this CosmosDB account.
     */
    readonly consistencyPolicy: pulumi.Input<inputs.cosmosdb.AccountConsistencyPolicy>;
    /**
     * Enable automatic fail over for this Cosmos DB account.
     */
    readonly enableAutomaticFailover?: pulumi.Input<boolean>;
    /**
     * Enable multi-master support for this Cosmos DB account.
     */
    readonly enableMultipleWriteLocations?: pulumi.Input<boolean>;
    /**
     * Specifies a `geoLocation` resource, used to define where data should be replicated with the `failoverPriority` 0 specifying the primary location.
     */
    readonly geoLocations: pulumi.Input<pulumi.Input<inputs.cosmosdb.AccountGeoLocation>[]>;
    /**
     * CosmosDB Firewall Support: This value specifies the set of IP addresses or IP address ranges in CIDR form to be included as the allowed list of client IP's for a given database account. IP addresses/ranges must be comma separated and must not contain any spaces.
     */
    readonly ipRangeFilter?: pulumi.Input<string>;
    /**
     * Enables virtual network filtering for this Cosmos DB account.
     */
    readonly isVirtualNetworkFilterEnabled?: pulumi.Input<boolean>;
    /**
     * Specifies the Kind of CosmosDB to create - possible values are `GlobalDocumentDB` and `MongoDB`. Defaults to `GlobalDocumentDB`. Changing this forces a new resource to be created.
     */
    readonly kind?: pulumi.Input<string>;
    /**
     * The name of the Azure region to host replicated data.
     */
    readonly location?: pulumi.Input<string>;
    /**
     * The capability to enable - Possible values are `EnableAggregationPipeline`, `EnableCassandra`, `EnableGremlin`,`EnableMongo`, `EnableTable`, `MongoDBv3.4`, and `mongoEnableDocLevelTTL`.
     */
    readonly name?: pulumi.Input<string>;
    /**
     * Specifies the Offer Type to use for this CosmosDB Account - currently this can only be set to `Standard`.
     */
    readonly offerType: pulumi.Input<string>;
    /**
     * The name of the resource group in which the CosmosDB Account is created. Changing this forces a new resource to be created.
     */
    readonly resourceGroupName: pulumi.Input<string>;
    /**
     * A mapping of tags to assign to the resource.
     */
    readonly tags?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
    /**
     * Specifies a `virtualNetworkRules` resource, used to define which subnets are allowed to access this CosmosDB account.
     */
    readonly virtualNetworkRules?: pulumi.Input<pulumi.Input<inputs.cosmosdb.AccountVirtualNetworkRule>[]>;
}
