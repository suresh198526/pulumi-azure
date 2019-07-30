// *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "../utilities";

/**
 * Configures the specified Policy Definition at the specified Scope. Also, Policy Set Definitions are supported.
 * 
 * ## Example Usage
 * 
 * ```typescript
 * import * as pulumi from "@pulumi/pulumi";
 * import * as azure from "@pulumi/azure";
 * 
 * const testDefinition = new azure.policy.Definition("test", {
 *     displayName: "my-policy-definition",
 *     mode: "All",
 *     name: "my-policy-definition",
 *     parameters: `	{
 *     "allowedLocations": {
 *       "type": "Array",
 *       "metadata": {
 *         "description": "The list of allowed locations for resources.",
 *         "displayName": "Allowed locations",
 *         "strongType": "location"
 *       }
 *     }
 *   }
 * `,
 *     policyRule: `	{
 *     "if": {
 *       "not": {
 *         "field": "location",
 *         "in": "[parameters('allowedLocations')]"
 *       }
 *     },
 *     "then": {
 *       "effect": "audit"
 *     }
 *   }
 * `,
 *     policyType: "Custom",
 * });
 * const testResourceGroup = new azure.core.ResourceGroup("test", {
 *     location: "West Europe",
 *     name: "test-resources",
 * });
 * const testAssignment = new azure.policy.Assignment("test", {
 *     description: "Policy Assignment created via an Acceptance Test",
 *     displayName: "My Example Policy Assignment",
 *     name: "example-policy-assignment",
 *     parameters: `{
 *   "allowedLocations": {
 *     "value": [ "West Europe" ]
 *   }
 * }
 * `,
 *     policyDefinitionId: testDefinition.id,
 *     scope: testResourceGroup.id,
 * });
 * ```
 *
 * > This content is derived from https://github.com/terraform-providers/terraform-provider-azurerm/blob/master/website/docs/r/policy_assignment.html.markdown.
 */
export class Assignment extends pulumi.CustomResource {
    /**
     * Get an existing Assignment resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: AssignmentState, opts?: pulumi.CustomResourceOptions): Assignment {
        return new Assignment(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'azure:policy/assignment:Assignment';

    /**
     * Returns true if the given object is an instance of Assignment.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is Assignment {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === Assignment.__pulumiType;
    }

    /**
     * A description to use for this Policy Assignment. Changing this forces a new resource to be created.
     */
    public readonly description!: pulumi.Output<string | undefined>;
    /**
     * A friendly display name to use for this Policy Assignment. Changing this forces a new resource to be created.
     */
    public readonly displayName!: pulumi.Output<string | undefined>;
    /**
     * An `identity` block.
     */
    public readonly identity!: pulumi.Output<{ principalId: string, tenantId: string, type?: string }>;
    /**
     * The Azure location where this policy assignment should exist. This is required when an Identity is assigned. Changing this forces a new resource to be created.
     */
    public readonly location!: pulumi.Output<string>;
    /**
     * The name of the Policy Assignment. Changing this forces a new resource to be created.
     */
    public readonly name!: pulumi.Output<string>;
    /**
     * A list of the Policy Assignment's excluded scopes. The list must contain Resource IDs (such as Subscriptions e.g. `/subscriptions/00000000-0000-0000-000000000000` or Resource Groups e.g.`/subscriptions/00000000-0000-0000-000000000000/resourceGroups/myResourceGroup`). 
     */
    public readonly notScopes!: pulumi.Output<string[] | undefined>;
    /**
     * Parameters for the policy definition. This field is a JSON object that maps to the Parameters field from the Policy Definition. Changing this forces a new resource to be created.
     */
    public readonly parameters!: pulumi.Output<string | undefined>;
    /**
     * The ID of the Policy Definition to be applied at the specified Scope.
     */
    public readonly policyDefinitionId!: pulumi.Output<string>;
    public readonly scope!: pulumi.Output<string>;

    /**
     * Create a Assignment resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: AssignmentArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: AssignmentArgs | AssignmentState, opts?: pulumi.CustomResourceOptions) {
        let inputs: pulumi.Inputs = {};
        if (opts && opts.id) {
            const state = argsOrState as AssignmentState | undefined;
            inputs["description"] = state ? state.description : undefined;
            inputs["displayName"] = state ? state.displayName : undefined;
            inputs["identity"] = state ? state.identity : undefined;
            inputs["location"] = state ? state.location : undefined;
            inputs["name"] = state ? state.name : undefined;
            inputs["notScopes"] = state ? state.notScopes : undefined;
            inputs["parameters"] = state ? state.parameters : undefined;
            inputs["policyDefinitionId"] = state ? state.policyDefinitionId : undefined;
            inputs["scope"] = state ? state.scope : undefined;
        } else {
            const args = argsOrState as AssignmentArgs | undefined;
            if (!args || args.policyDefinitionId === undefined) {
                throw new Error("Missing required property 'policyDefinitionId'");
            }
            if (!args || args.scope === undefined) {
                throw new Error("Missing required property 'scope'");
            }
            inputs["description"] = args ? args.description : undefined;
            inputs["displayName"] = args ? args.displayName : undefined;
            inputs["identity"] = args ? args.identity : undefined;
            inputs["location"] = args ? args.location : undefined;
            inputs["name"] = args ? args.name : undefined;
            inputs["notScopes"] = args ? args.notScopes : undefined;
            inputs["parameters"] = args ? args.parameters : undefined;
            inputs["policyDefinitionId"] = args ? args.policyDefinitionId : undefined;
            inputs["scope"] = args ? args.scope : undefined;
        }
        if (!opts) {
            opts = {}
        }

        if (!opts.version) {
            opts.version = utilities.getVersion();
        }
        super(Assignment.__pulumiType, name, inputs, opts);
    }
}

/**
 * Input properties used for looking up and filtering Assignment resources.
 */
export interface AssignmentState {
    /**
     * A description to use for this Policy Assignment. Changing this forces a new resource to be created.
     */
    readonly description?: pulumi.Input<string>;
    /**
     * A friendly display name to use for this Policy Assignment. Changing this forces a new resource to be created.
     */
    readonly displayName?: pulumi.Input<string>;
    /**
     * An `identity` block.
     */
    readonly identity?: pulumi.Input<{ principalId?: pulumi.Input<string>, tenantId?: pulumi.Input<string>, type?: pulumi.Input<string> }>;
    /**
     * The Azure location where this policy assignment should exist. This is required when an Identity is assigned. Changing this forces a new resource to be created.
     */
    readonly location?: pulumi.Input<string>;
    /**
     * The name of the Policy Assignment. Changing this forces a new resource to be created.
     */
    readonly name?: pulumi.Input<string>;
    /**
     * A list of the Policy Assignment's excluded scopes. The list must contain Resource IDs (such as Subscriptions e.g. `/subscriptions/00000000-0000-0000-000000000000` or Resource Groups e.g.`/subscriptions/00000000-0000-0000-000000000000/resourceGroups/myResourceGroup`). 
     */
    readonly notScopes?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * Parameters for the policy definition. This field is a JSON object that maps to the Parameters field from the Policy Definition. Changing this forces a new resource to be created.
     */
    readonly parameters?: pulumi.Input<string>;
    /**
     * The ID of the Policy Definition to be applied at the specified Scope.
     */
    readonly policyDefinitionId?: pulumi.Input<string>;
    readonly scope?: pulumi.Input<string>;
}

/**
 * The set of arguments for constructing a Assignment resource.
 */
export interface AssignmentArgs {
    /**
     * A description to use for this Policy Assignment. Changing this forces a new resource to be created.
     */
    readonly description?: pulumi.Input<string>;
    /**
     * A friendly display name to use for this Policy Assignment. Changing this forces a new resource to be created.
     */
    readonly displayName?: pulumi.Input<string>;
    /**
     * An `identity` block.
     */
    readonly identity?: pulumi.Input<{ principalId?: pulumi.Input<string>, tenantId?: pulumi.Input<string>, type?: pulumi.Input<string> }>;
    /**
     * The Azure location where this policy assignment should exist. This is required when an Identity is assigned. Changing this forces a new resource to be created.
     */
    readonly location?: pulumi.Input<string>;
    /**
     * The name of the Policy Assignment. Changing this forces a new resource to be created.
     */
    readonly name?: pulumi.Input<string>;
    /**
     * A list of the Policy Assignment's excluded scopes. The list must contain Resource IDs (such as Subscriptions e.g. `/subscriptions/00000000-0000-0000-000000000000` or Resource Groups e.g.`/subscriptions/00000000-0000-0000-000000000000/resourceGroups/myResourceGroup`). 
     */
    readonly notScopes?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * Parameters for the policy definition. This field is a JSON object that maps to the Parameters field from the Policy Definition. Changing this forces a new resource to be created.
     */
    readonly parameters?: pulumi.Input<string>;
    /**
     * The ID of the Policy Definition to be applied at the specified Scope.
     */
    readonly policyDefinitionId: pulumi.Input<string>;
    readonly scope: pulumi.Input<string>;
}
