// *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "../utilities";

/**
 * Manages a Customer Managed Key for a Storage Account.
 */
export class CustomerManagedKey extends pulumi.CustomResource {
    /**
     * Get an existing CustomerManagedKey resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: CustomerManagedKeyState, opts?: pulumi.CustomResourceOptions): CustomerManagedKey {
        return new CustomerManagedKey(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'azure:storage/customerManagedKey:CustomerManagedKey';

    /**
     * Returns true if the given object is an instance of CustomerManagedKey.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is CustomerManagedKey {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === CustomerManagedKey.__pulumiType;
    }

    /**
     * The name of Key Vault Key.
     */
    public readonly keyName!: pulumi.Output<string>;
    /**
     * The ID of the Key Vault. Changing this forces a new resource to be created.
     */
    public readonly keyVaultId!: pulumi.Output<string>;
    /**
     * The version of Key Vault Key.
     */
    public readonly keyVersion!: pulumi.Output<string>;
    /**
     * The ID of the Storage Account. Changing this forces a new resource to be created.
     */
    public readonly storageAccountId!: pulumi.Output<string>;

    /**
     * Create a CustomerManagedKey resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: CustomerManagedKeyArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: CustomerManagedKeyArgs | CustomerManagedKeyState, opts?: pulumi.CustomResourceOptions) {
        let inputs: pulumi.Inputs = {};
        if (opts && opts.id) {
            const state = argsOrState as CustomerManagedKeyState | undefined;
            inputs["keyName"] = state ? state.keyName : undefined;
            inputs["keyVaultId"] = state ? state.keyVaultId : undefined;
            inputs["keyVersion"] = state ? state.keyVersion : undefined;
            inputs["storageAccountId"] = state ? state.storageAccountId : undefined;
        } else {
            const args = argsOrState as CustomerManagedKeyArgs | undefined;
            if (!args || args.keyName === undefined) {
                throw new Error("Missing required property 'keyName'");
            }
            if (!args || args.keyVaultId === undefined) {
                throw new Error("Missing required property 'keyVaultId'");
            }
            if (!args || args.keyVersion === undefined) {
                throw new Error("Missing required property 'keyVersion'");
            }
            if (!args || args.storageAccountId === undefined) {
                throw new Error("Missing required property 'storageAccountId'");
            }
            inputs["keyName"] = args ? args.keyName : undefined;
            inputs["keyVaultId"] = args ? args.keyVaultId : undefined;
            inputs["keyVersion"] = args ? args.keyVersion : undefined;
            inputs["storageAccountId"] = args ? args.storageAccountId : undefined;
        }
        if (!opts) {
            opts = {}
        }

        if (!opts.version) {
            opts.version = utilities.getVersion();
        }
        super(CustomerManagedKey.__pulumiType, name, inputs, opts);
    }
}

/**
 * Input properties used for looking up and filtering CustomerManagedKey resources.
 */
export interface CustomerManagedKeyState {
    /**
     * The name of Key Vault Key.
     */
    readonly keyName?: pulumi.Input<string>;
    /**
     * The ID of the Key Vault. Changing this forces a new resource to be created.
     */
    readonly keyVaultId?: pulumi.Input<string>;
    /**
     * The version of Key Vault Key.
     */
    readonly keyVersion?: pulumi.Input<string>;
    /**
     * The ID of the Storage Account. Changing this forces a new resource to be created.
     */
    readonly storageAccountId?: pulumi.Input<string>;
}

/**
 * The set of arguments for constructing a CustomerManagedKey resource.
 */
export interface CustomerManagedKeyArgs {
    /**
     * The name of Key Vault Key.
     */
    readonly keyName: pulumi.Input<string>;
    /**
     * The ID of the Key Vault. Changing this forces a new resource to be created.
     */
    readonly keyVaultId: pulumi.Input<string>;
    /**
     * The version of Key Vault Key.
     */
    readonly keyVersion: pulumi.Input<string>;
    /**
     * The ID of the Storage Account. Changing this forces a new resource to be created.
     */
    readonly storageAccountId: pulumi.Input<string>;
}
