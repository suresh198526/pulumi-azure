// *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "../types/input";
import * as outputs from "../types/output";
import * as utilities from "../utilities";

/**
 * Manages an IotHub ServiceBus Topic Endpoint
 * 
 * > **NOTE:** Endpoints can be defined either directly on the `azure.iot.IoTHub` resource, or using the `azurerm_iothub_endpoint_*` resources - but the two ways of defining the endpoints cannot be used together. If both are used against the same IoTHub, spurious changes will occur. Also, defining a `azurerm_iothub_endpoint_*` resource and another endpoint of a different type directly on the `azure.iot.IoTHub` resource is not supported.
 * 
 * ## Example Usage
 * 
 * ```typescript
 * import * as pulumi from "@pulumi/pulumi";
 * import * as azure from "@pulumi/azure";
 * 
 * const exampleResourceGroup = new azure.core.ResourceGroup("example", {
 *     location: "East US",
 * });
 * const exampleNamespace = new azure.servicebus.Namespace("example", {
 *     location: exampleResourceGroup.location,
 *     resourceGroupName: exampleResourceGroup.name,
 *     sku: "Standard",
 * });
 * const exampleTopic = new azure.servicebus.Topic("example", {
 *     namespaceName: exampleNamespace.name,
 *     resourceGroupName: exampleResourceGroup.name,
 * });
 * const exampleTopicAuthorizationRule = new azure.servicebus.TopicAuthorizationRule("example", {
 *     listen: false,
 *     manage: false,
 *     namespaceName: exampleNamespace.name,
 *     resourceGroupName: exampleResourceGroup.name,
 *     send: true,
 *     topicName: exampleTopic.name,
 * });
 * const exampleIoTHub = new azure.iot.IoTHub("example", {
 *     location: exampleResourceGroup.location,
 *     resourceGroupName: exampleResourceGroup.name,
 *     sku: {
 *         capacity: 1,
 *         name: "B1",
 *         tier: "Basic",
 *     },
 *     tags: {
 *         purpose: "example",
 *     },
 * });
 * const exampleEndpointServicebusTopic = new azure.iot.EndpointServicebusTopic("example", {
 *     connectionString: exampleTopicAuthorizationRule.primaryConnectionString,
 *     iothubName: exampleIoTHub.name,
 *     resourceGroupName: exampleResourceGroup.name,
 * });
 * ```
 *
 * > This content is derived from https://github.com/terraform-providers/terraform-provider-azurerm/blob/master/website/docs/r/iothub_endpoint_servicebus_topic.html.markdown.
 */
export class EndpointServicebusTopic extends pulumi.CustomResource {
    /**
     * Get an existing EndpointServicebusTopic resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: EndpointServicebusTopicState, opts?: pulumi.CustomResourceOptions): EndpointServicebusTopic {
        return new EndpointServicebusTopic(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'azure:iot/endpointServicebusTopic:EndpointServicebusTopic';

    /**
     * Returns true if the given object is an instance of EndpointServicebusTopic.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is EndpointServicebusTopic {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === EndpointServicebusTopic.__pulumiType;
    }

    /**
     * The connection string for the endpoint.
     */
    public readonly connectionString!: pulumi.Output<string>;
    public readonly iothubName!: pulumi.Output<string>;
    /**
     * The name of the endpoint. The name must be unique across endpoint types. The following names are reserved:  `events`, `operationsMonitoringEvents`, `fileNotifications` and `$default`.
     */
    public readonly name!: pulumi.Output<string>;
    public readonly resourceGroupName!: pulumi.Output<string>;

    /**
     * Create a EndpointServicebusTopic resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: EndpointServicebusTopicArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: EndpointServicebusTopicArgs | EndpointServicebusTopicState, opts?: pulumi.CustomResourceOptions) {
        let inputs: pulumi.Inputs = {};
        if (opts && opts.id) {
            const state = argsOrState as EndpointServicebusTopicState | undefined;
            inputs["connectionString"] = state ? state.connectionString : undefined;
            inputs["iothubName"] = state ? state.iothubName : undefined;
            inputs["name"] = state ? state.name : undefined;
            inputs["resourceGroupName"] = state ? state.resourceGroupName : undefined;
        } else {
            const args = argsOrState as EndpointServicebusTopicArgs | undefined;
            if (!args || args.connectionString === undefined) {
                throw new Error("Missing required property 'connectionString'");
            }
            if (!args || args.iothubName === undefined) {
                throw new Error("Missing required property 'iothubName'");
            }
            if (!args || args.resourceGroupName === undefined) {
                throw new Error("Missing required property 'resourceGroupName'");
            }
            inputs["connectionString"] = args ? args.connectionString : undefined;
            inputs["iothubName"] = args ? args.iothubName : undefined;
            inputs["name"] = args ? args.name : undefined;
            inputs["resourceGroupName"] = args ? args.resourceGroupName : undefined;
        }
        if (!opts) {
            opts = {}
        }

        if (!opts.version) {
            opts.version = utilities.getVersion();
        }
        super(EndpointServicebusTopic.__pulumiType, name, inputs, opts);
    }
}

/**
 * Input properties used for looking up and filtering EndpointServicebusTopic resources.
 */
export interface EndpointServicebusTopicState {
    /**
     * The connection string for the endpoint.
     */
    readonly connectionString?: pulumi.Input<string>;
    readonly iothubName?: pulumi.Input<string>;
    /**
     * The name of the endpoint. The name must be unique across endpoint types. The following names are reserved:  `events`, `operationsMonitoringEvents`, `fileNotifications` and `$default`.
     */
    readonly name?: pulumi.Input<string>;
    readonly resourceGroupName?: pulumi.Input<string>;
}

/**
 * The set of arguments for constructing a EndpointServicebusTopic resource.
 */
export interface EndpointServicebusTopicArgs {
    /**
     * The connection string for the endpoint.
     */
    readonly connectionString: pulumi.Input<string>;
    readonly iothubName: pulumi.Input<string>;
    /**
     * The name of the endpoint. The name must be unique across endpoint types. The following names are reserved:  `events`, `operationsMonitoringEvents`, `fileNotifications` and `$default`.
     */
    readonly name?: pulumi.Input<string>;
    readonly resourceGroupName: pulumi.Input<string>;
}
