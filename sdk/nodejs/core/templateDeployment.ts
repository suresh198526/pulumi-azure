// *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "../types/input";
import * as outputs from "../types/output";
import * as utilities from "../utilities";

/**
 * Manages a template deployment of resources
 *
 * > **Note on ARM Template Deployments:** Due to the way the underlying Azure API is designed, this provider can only manage the deployment of the ARM Template - and not any resources which are created by it.
 * This means that when deleting the `azure.core.TemplateDeployment` resource, this provider will only remove the reference to the deployment, whilst leaving any resources created by that ARM Template Deployment.
 * One workaround for this is to use a unique Resource Group for each ARM Template Deployment, which means deleting the Resource Group would contain any resources created within it - however this isn't ideal. [More information](https://docs.microsoft.com/en-us/rest/api/resources/deployments#Deployments_Delete).
 *
 * ## Example Usage
 *
 *
 *
 * ```typescript
 * import * as pulumi from "@pulumi/pulumi";
 * import * as azure from "@pulumi/azure";
 *
 * const exampleResourceGroup = new azure.core.ResourceGroup("exampleResourceGroup", {location: "West US"});
 * const exampleTemplateDeployment = new azure.core.TemplateDeployment("exampleTemplateDeployment", {
 *     resourceGroupName: exampleResourceGroup.name,
 *     templateBody: `{
 *   "$schema": "https://schema.management.azure.com/schemas/2015-01-01/deploymentTemplate.json#",
 *   "contentVersion": "1.0.0.0",
 *   "parameters": {
 *     "storageAccountType": {
 *       "type": "string",
 *       "defaultValue": "Standard_LRS",
 *       "allowedValues": [
 *         "Standard_LRS",
 *         "Standard_GRS",
 *         "Standard_ZRS"
 *       ],
 *       "metadata": {
 *         "description": "Storage Account type"
 *       }
 *     }
 *   },
 *   "variables": {
 *     "location": "[resourceGroup().location]",
 *     "storageAccountName": "[concat(uniquestring(resourceGroup().id), 'storage')]",
 *     "publicIPAddressName": "[concat('myPublicIp', uniquestring(resourceGroup().id))]",
 *     "publicIPAddressType": "Dynamic",
 *     "apiVersion": "2015-06-15",
 *     "dnsLabelPrefix": "example-acctest"
 *   },
 *   "resources": [
 *     {
 *       "type": "Microsoft.Storage/storageAccounts",
 *       "name": "[variables('storageAccountName')]",
 *       "apiVersion": "[variables('apiVersion')]",
 *       "location": "[variables('location')]",
 *       "properties": {
 *         "accountType": "[parameters('storageAccountType')]"
 *       }
 *     },
 *     {
 *       "type": "Microsoft.Network/publicIPAddresses",
 *       "apiVersion": "[variables('apiVersion')]",
 *       "name": "[variables('publicIPAddressName')]",
 *       "location": "[variables('location')]",
 *       "properties": {
 *         "publicIPAllocationMethod": "[variables('publicIPAddressType')]",
 *         "dnsSettings": {
 *           "domainNameLabel": "[variables('dnsLabelPrefix')]"
 *         }
 *       }
 *     }
 *   ],
 *   "outputs": {
 *     "storageAccountName": {
 *       "type": "string",
 *       "value": "[variables('storageAccountName')]"
 *     }
 *   }
 * }
 * `,
 *     parameters: {
 *         storageAccountType: "Standard_GRS",
 *     },
 *     deploymentMode: "Incremental",
 * });
 * export const storageAccountName = exampleTemplateDeployment.outputs.storageAccountName;
 * ```
 *
 * ## Note
 *
 * This provider does not know about the individual resources created by Azure using a deployment template and therefore cannot delete these resources during a destroy. Destroying a template deployment removes the associated deployment operations, but will not delete the Azure resources created by the deployment. In order to delete these resources, the containing resource group must also be destroyed. [More information](https://docs.microsoft.com/en-us/rest/api/resources/deployments#Deployments_Delete).
 *
 * > This content is derived from https://github.com/terraform-providers/terraform-provider-azurerm/blob/master/website/docs/r/template_deployment.html.markdown.
 */
export class TemplateDeployment extends pulumi.CustomResource {
    /**
     * Get an existing TemplateDeployment resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: TemplateDeploymentState, opts?: pulumi.CustomResourceOptions): TemplateDeployment {
        return new TemplateDeployment(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'azure:core/templateDeployment:TemplateDeployment';

    /**
     * Returns true if the given object is an instance of TemplateDeployment.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is TemplateDeployment {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === TemplateDeployment.__pulumiType;
    }

    /**
     * Specifies the mode that is used to deploy resources. This value could be either `Incremental` or `Complete`.
     * Note that you will almost *always* want this to be set to `Incremental` otherwise the deployment will destroy all infrastructure not
     * specified within the template, and this provider will not be aware of this.
     */
    public readonly deploymentMode!: pulumi.Output<string>;
    /**
     * Specifies the name of the template deployment. Changing this forces a
     * new resource to be created.
     */
    public readonly name!: pulumi.Output<string>;
    /**
     * A map of supported scalar output types returned from the deployment (currently, Azure Template Deployment outputs of type String, Int and Bool are supported, and are converted to strings - others will be ignored) and can be accessed using `.outputs["name"]`.
     */
    public /*out*/ readonly outputs!: pulumi.Output<{[key: string]: string}>;
    /**
     * Specifies the name and value pairs that define the deployment parameters for the template.
     */
    public readonly parameters!: pulumi.Output<{[key: string]: string} | undefined>;
    /**
     * Specifies a valid Azure JSON parameters file that define the deployment parameters. It can contain KeyVault references
     */
    public readonly parametersBody!: pulumi.Output<string | undefined>;
    /**
     * The name of the resource group in which to
     * create the template deployment.
     */
    public readonly resourceGroupName!: pulumi.Output<string>;
    /**
     * Specifies the JSON definition for the template.
     */
    public readonly templateBody!: pulumi.Output<string>;

    /**
     * Create a TemplateDeployment resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: TemplateDeploymentArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: TemplateDeploymentArgs | TemplateDeploymentState, opts?: pulumi.CustomResourceOptions) {
        let inputs: pulumi.Inputs = {};
        if (opts && opts.id) {
            const state = argsOrState as TemplateDeploymentState | undefined;
            inputs["deploymentMode"] = state ? state.deploymentMode : undefined;
            inputs["name"] = state ? state.name : undefined;
            inputs["outputs"] = state ? state.outputs : undefined;
            inputs["parameters"] = state ? state.parameters : undefined;
            inputs["parametersBody"] = state ? state.parametersBody : undefined;
            inputs["resourceGroupName"] = state ? state.resourceGroupName : undefined;
            inputs["templateBody"] = state ? state.templateBody : undefined;
        } else {
            const args = argsOrState as TemplateDeploymentArgs | undefined;
            if (!args || args.deploymentMode === undefined) {
                throw new Error("Missing required property 'deploymentMode'");
            }
            if (!args || args.resourceGroupName === undefined) {
                throw new Error("Missing required property 'resourceGroupName'");
            }
            inputs["deploymentMode"] = args ? args.deploymentMode : undefined;
            inputs["name"] = args ? args.name : undefined;
            inputs["parameters"] = args ? args.parameters : undefined;
            inputs["parametersBody"] = args ? args.parametersBody : undefined;
            inputs["resourceGroupName"] = args ? args.resourceGroupName : undefined;
            inputs["templateBody"] = args ? args.templateBody : undefined;
            inputs["outputs"] = undefined /*out*/;
        }
        if (!opts) {
            opts = {}
        }

        if (!opts.version) {
            opts.version = utilities.getVersion();
        }
        super(TemplateDeployment.__pulumiType, name, inputs, opts);
    }
}

/**
 * Input properties used for looking up and filtering TemplateDeployment resources.
 */
export interface TemplateDeploymentState {
    /**
     * Specifies the mode that is used to deploy resources. This value could be either `Incremental` or `Complete`.
     * Note that you will almost *always* want this to be set to `Incremental` otherwise the deployment will destroy all infrastructure not
     * specified within the template, and this provider will not be aware of this.
     */
    readonly deploymentMode?: pulumi.Input<string>;
    /**
     * Specifies the name of the template deployment. Changing this forces a
     * new resource to be created.
     */
    readonly name?: pulumi.Input<string>;
    /**
     * A map of supported scalar output types returned from the deployment (currently, Azure Template Deployment outputs of type String, Int and Bool are supported, and are converted to strings - others will be ignored) and can be accessed using `.outputs["name"]`.
     */
    readonly outputs?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
    /**
     * Specifies the name and value pairs that define the deployment parameters for the template.
     */
    readonly parameters?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
    /**
     * Specifies a valid Azure JSON parameters file that define the deployment parameters. It can contain KeyVault references
     */
    readonly parametersBody?: pulumi.Input<string>;
    /**
     * The name of the resource group in which to
     * create the template deployment.
     */
    readonly resourceGroupName?: pulumi.Input<string>;
    /**
     * Specifies the JSON definition for the template.
     */
    readonly templateBody?: pulumi.Input<string>;
}

/**
 * The set of arguments for constructing a TemplateDeployment resource.
 */
export interface TemplateDeploymentArgs {
    /**
     * Specifies the mode that is used to deploy resources. This value could be either `Incremental` or `Complete`.
     * Note that you will almost *always* want this to be set to `Incremental` otherwise the deployment will destroy all infrastructure not
     * specified within the template, and this provider will not be aware of this.
     */
    readonly deploymentMode: pulumi.Input<string>;
    /**
     * Specifies the name of the template deployment. Changing this forces a
     * new resource to be created.
     */
    readonly name?: pulumi.Input<string>;
    /**
     * Specifies the name and value pairs that define the deployment parameters for the template.
     */
    readonly parameters?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
    /**
     * Specifies a valid Azure JSON parameters file that define the deployment parameters. It can contain KeyVault references
     */
    readonly parametersBody?: pulumi.Input<string>;
    /**
     * The name of the resource group in which to
     * create the template deployment.
     */
    readonly resourceGroupName: pulumi.Input<string>;
    /**
     * Specifies the JSON definition for the template.
     */
    readonly templateBody?: pulumi.Input<string>;
}
