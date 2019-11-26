// *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "../utilities";

/**
 * Allows you to set a user or group as the AD administrator for an Azure SQL server
 * 
 * ## Example Usage
 * 
 * ```typescript
 * import * as pulumi from "@pulumi/pulumi";
 * import * as azure from "@pulumi/azure";
 * 
 * const current = azure.core.getClientConfig();
 * const exampleResourceGroup = new azure.core.ResourceGroup("example", {
 *     location: "West US",
 * });
 * const exampleSqlServer = new azure.sql.SqlServer("example", {
 *     administratorLogin: "4dm1n157r470r",
 *     administratorLoginPassword: "4-v3ry-53cr37-p455w0rd",
 *     location: exampleResourceGroup.location,
 *     resourceGroupName: exampleResourceGroup.name,
 *     version: "12.0",
 * });
 * const exampleActiveDirectoryAdministrator = new azure.sql.ActiveDirectoryAdministrator("example", {
 *     login: "sqladmin",
 *     objectId: current.objectId,
 *     resourceGroupName: exampleResourceGroup.name,
 *     serverName: exampleSqlServer.name,
 *     tenantId: current.tenantId,
 * });
 * ```
 *
 * > This content is derived from https://github.com/terraform-providers/terraform-provider-azurerm/blob/master/website/docs/r/sql_active_directory_administrator.html.markdown.
 */
export class ActiveDirectoryAdministrator extends pulumi.CustomResource {
    /**
     * Get an existing ActiveDirectoryAdministrator resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: ActiveDirectoryAdministratorState, opts?: pulumi.CustomResourceOptions): ActiveDirectoryAdministrator {
        return new ActiveDirectoryAdministrator(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'azure:sql/activeDirectoryAdministrator:ActiveDirectoryAdministrator';

    /**
     * Returns true if the given object is an instance of ActiveDirectoryAdministrator.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is ActiveDirectoryAdministrator {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === ActiveDirectoryAdministrator.__pulumiType;
    }

    /**
     * The login name of the principal to set as the server administrator
     */
    public readonly login!: pulumi.Output<string>;
    /**
     * The ID of the principal to set as the server administrator
     */
    public readonly objectId!: pulumi.Output<string>;
    /**
     * The name of the resource group for the SQL server. Changing this forces a new resource to be created.
     */
    public readonly resourceGroupName!: pulumi.Output<string>;
    /**
     * The name of the SQL Server on which to set the administrator. Changing this forces a new resource to be created.
     */
    public readonly serverName!: pulumi.Output<string>;
    /**
     * The Azure Tenant ID
     */
    public readonly tenantId!: pulumi.Output<string>;

    /**
     * Create a ActiveDirectoryAdministrator resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: ActiveDirectoryAdministratorArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: ActiveDirectoryAdministratorArgs | ActiveDirectoryAdministratorState, opts?: pulumi.CustomResourceOptions) {
        let inputs: pulumi.Inputs = {};
        if (opts && opts.id) {
            const state = argsOrState as ActiveDirectoryAdministratorState | undefined;
            inputs["login"] = state ? state.login : undefined;
            inputs["objectId"] = state ? state.objectId : undefined;
            inputs["resourceGroupName"] = state ? state.resourceGroupName : undefined;
            inputs["serverName"] = state ? state.serverName : undefined;
            inputs["tenantId"] = state ? state.tenantId : undefined;
        } else {
            const args = argsOrState as ActiveDirectoryAdministratorArgs | undefined;
            if (!args || args.login === undefined) {
                throw new Error("Missing required property 'login'");
            }
            if (!args || args.objectId === undefined) {
                throw new Error("Missing required property 'objectId'");
            }
            if (!args || args.resourceGroupName === undefined) {
                throw new Error("Missing required property 'resourceGroupName'");
            }
            if (!args || args.serverName === undefined) {
                throw new Error("Missing required property 'serverName'");
            }
            if (!args || args.tenantId === undefined) {
                throw new Error("Missing required property 'tenantId'");
            }
            inputs["login"] = args ? args.login : undefined;
            inputs["objectId"] = args ? args.objectId : undefined;
            inputs["resourceGroupName"] = args ? args.resourceGroupName : undefined;
            inputs["serverName"] = args ? args.serverName : undefined;
            inputs["tenantId"] = args ? args.tenantId : undefined;
        }
        if (!opts) {
            opts = {}
        }

        if (!opts.version) {
            opts.version = utilities.getVersion();
        }
        super(ActiveDirectoryAdministrator.__pulumiType, name, inputs, opts);
    }
}

/**
 * Input properties used for looking up and filtering ActiveDirectoryAdministrator resources.
 */
export interface ActiveDirectoryAdministratorState {
    /**
     * The login name of the principal to set as the server administrator
     */
    readonly login?: pulumi.Input<string>;
    /**
     * The ID of the principal to set as the server administrator
     */
    readonly objectId?: pulumi.Input<string>;
    /**
     * The name of the resource group for the SQL server. Changing this forces a new resource to be created.
     */
    readonly resourceGroupName?: pulumi.Input<string>;
    /**
     * The name of the SQL Server on which to set the administrator. Changing this forces a new resource to be created.
     */
    readonly serverName?: pulumi.Input<string>;
    /**
     * The Azure Tenant ID
     */
    readonly tenantId?: pulumi.Input<string>;
}

/**
 * The set of arguments for constructing a ActiveDirectoryAdministrator resource.
 */
export interface ActiveDirectoryAdministratorArgs {
    /**
     * The login name of the principal to set as the server administrator
     */
    readonly login: pulumi.Input<string>;
    /**
     * The ID of the principal to set as the server administrator
     */
    readonly objectId: pulumi.Input<string>;
    /**
     * The name of the resource group for the SQL server. Changing this forces a new resource to be created.
     */
    readonly resourceGroupName: pulumi.Input<string>;
    /**
     * The name of the SQL Server on which to set the administrator. Changing this forces a new resource to be created.
     */
    readonly serverName: pulumi.Input<string>;
    /**
     * The Azure Tenant ID
     */
    readonly tenantId: pulumi.Input<string>;
}
