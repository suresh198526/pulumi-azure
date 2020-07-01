// *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "../types/input";
import * as outputs from "../types/output";
import * as utilities from "../utilities";

/**
 * Manages a Service Fabric Cluster.
 *
 * ## Example Usage
 *
 * ```typescript
 * import * as pulumi from "@pulumi/pulumi";
 * import * as azure from "@pulumi/azure";
 *
 * const exampleResourceGroup = new azure.core.ResourceGroup("exampleResourceGroup", {location: "West Europe"});
 * const exampleCluster = new azure.servicefabric.Cluster("exampleCluster", {
 *     resourceGroupName: exampleResourceGroup.name,
 *     location: exampleResourceGroup.location,
 *     reliabilityLevel: "Bronze",
 *     upgradeMode: "Manual",
 *     clusterCodeVersion: "6.5.639.9590",
 *     vmImage: "Windows",
 *     managementEndpoint: "https://example:80",
 *     nodeTypes: [{
 *         name: "first",
 *         instanceCount: 3,
 *         isPrimary: true,
 *         clientEndpointPort: 2020,
 *         httpEndpointPort: 80,
 *     }],
 * });
 * ```
 */
export class Cluster extends pulumi.CustomResource {
    /**
     * Get an existing Cluster resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: ClusterState, opts?: pulumi.CustomResourceOptions): Cluster {
        return new Cluster(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'azure:servicefabric/cluster:Cluster';

    /**
     * Returns true if the given object is an instance of Cluster.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is Cluster {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === Cluster.__pulumiType;
    }

    /**
     * A List of one or more features which should be enabled, such as `DnsService`.
     */
    public readonly addOnFeatures!: pulumi.Output<string[] | undefined>;
    /**
     * An `azureActiveDirectory` block as defined below.
     */
    public readonly azureActiveDirectory!: pulumi.Output<outputs.servicefabric.ClusterAzureActiveDirectory | undefined>;
    /**
     * A `certificate` block as defined below. Conflicts with `certificateCommonNames`.
     */
    public readonly certificate!: pulumi.Output<outputs.servicefabric.ClusterCertificate | undefined>;
    /**
     * A `certificateCommonNames` block as defined below. Conflicts with `certificate`.
     */
    public readonly certificateCommonNames!: pulumi.Output<outputs.servicefabric.ClusterCertificateCommonNames | undefined>;
    /**
     * A `clientCertificateCommonName` block as defined below.
     */
    public readonly clientCertificateCommonNames!: pulumi.Output<outputs.servicefabric.ClusterClientCertificateCommonName[] | undefined>;
    /**
     * One or two `clientCertificateThumbprint` blocks as defined below.
     */
    public readonly clientCertificateThumbprints!: pulumi.Output<outputs.servicefabric.ClusterClientCertificateThumbprint[] | undefined>;
    /**
     * Required if Upgrade Mode set to `Manual`, Specifies the Version of the Cluster Code of the cluster.
     */
    public readonly clusterCodeVersion!: pulumi.Output<string>;
    /**
     * The Cluster Endpoint for this Service Fabric Cluster.
     */
    public /*out*/ readonly clusterEndpoint!: pulumi.Output<string>;
    /**
     * A `diagnosticsConfig` block as defined below. Changing this forces a new resource to be created.
     */
    public readonly diagnosticsConfig!: pulumi.Output<outputs.servicefabric.ClusterDiagnosticsConfig | undefined>;
    /**
     * One or more `fabricSettings` blocks as defined below.
     */
    public readonly fabricSettings!: pulumi.Output<outputs.servicefabric.ClusterFabricSetting[] | undefined>;
    /**
     * Specifies the Azure Region where the Service Fabric Cluster should exist. Changing this forces a new resource to be created.
     */
    public readonly location!: pulumi.Output<string>;
    /**
     * Specifies the Management Endpoint of the cluster such as `http://example.com`. Changing this forces a new resource to be created.
     */
    public readonly managementEndpoint!: pulumi.Output<string>;
    /**
     * The name of the Service Fabric Cluster. Changing this forces a new resource to be created.
     */
    public readonly name!: pulumi.Output<string>;
    /**
     * One or more `nodeType` blocks as defined below.
     */
    public readonly nodeTypes!: pulumi.Output<outputs.servicefabric.ClusterNodeType[]>;
    /**
     * Specifies the Reliability Level of the Cluster. Possible values include `None`, `Bronze`, `Silver`, `Gold` and `Platinum`.
     */
    public readonly reliabilityLevel!: pulumi.Output<string>;
    /**
     * The name of the Resource Group in which the Service Fabric Cluster exists. Changing this forces a new resource to be created.
     */
    public readonly resourceGroupName!: pulumi.Output<string>;
    /**
     * A `reverseProxyCertificate` block as defined below.
     */
    public readonly reverseProxyCertificate!: pulumi.Output<outputs.servicefabric.ClusterReverseProxyCertificate | undefined>;
    /**
     * A mapping of tags to assign to the resource.
     */
    public readonly tags!: pulumi.Output<{[key: string]: string} | undefined>;
    /**
     * Specifies the Upgrade Mode of the cluster. Possible values are `Automatic` or `Manual`.
     */
    public readonly upgradeMode!: pulumi.Output<string>;
    /**
     * Specifies the Image expected for the Service Fabric Cluster, such as `Windows`. Changing this forces a new resource to be created.
     */
    public readonly vmImage!: pulumi.Output<string>;

    /**
     * Create a Cluster resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: ClusterArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: ClusterArgs | ClusterState, opts?: pulumi.CustomResourceOptions) {
        let inputs: pulumi.Inputs = {};
        if (opts && opts.id) {
            const state = argsOrState as ClusterState | undefined;
            inputs["addOnFeatures"] = state ? state.addOnFeatures : undefined;
            inputs["azureActiveDirectory"] = state ? state.azureActiveDirectory : undefined;
            inputs["certificate"] = state ? state.certificate : undefined;
            inputs["certificateCommonNames"] = state ? state.certificateCommonNames : undefined;
            inputs["clientCertificateCommonNames"] = state ? state.clientCertificateCommonNames : undefined;
            inputs["clientCertificateThumbprints"] = state ? state.clientCertificateThumbprints : undefined;
            inputs["clusterCodeVersion"] = state ? state.clusterCodeVersion : undefined;
            inputs["clusterEndpoint"] = state ? state.clusterEndpoint : undefined;
            inputs["diagnosticsConfig"] = state ? state.diagnosticsConfig : undefined;
            inputs["fabricSettings"] = state ? state.fabricSettings : undefined;
            inputs["location"] = state ? state.location : undefined;
            inputs["managementEndpoint"] = state ? state.managementEndpoint : undefined;
            inputs["name"] = state ? state.name : undefined;
            inputs["nodeTypes"] = state ? state.nodeTypes : undefined;
            inputs["reliabilityLevel"] = state ? state.reliabilityLevel : undefined;
            inputs["resourceGroupName"] = state ? state.resourceGroupName : undefined;
            inputs["reverseProxyCertificate"] = state ? state.reverseProxyCertificate : undefined;
            inputs["tags"] = state ? state.tags : undefined;
            inputs["upgradeMode"] = state ? state.upgradeMode : undefined;
            inputs["vmImage"] = state ? state.vmImage : undefined;
        } else {
            const args = argsOrState as ClusterArgs | undefined;
            if (!args || args.managementEndpoint === undefined) {
                throw new Error("Missing required property 'managementEndpoint'");
            }
            if (!args || args.nodeTypes === undefined) {
                throw new Error("Missing required property 'nodeTypes'");
            }
            if (!args || args.reliabilityLevel === undefined) {
                throw new Error("Missing required property 'reliabilityLevel'");
            }
            if (!args || args.resourceGroupName === undefined) {
                throw new Error("Missing required property 'resourceGroupName'");
            }
            if (!args || args.upgradeMode === undefined) {
                throw new Error("Missing required property 'upgradeMode'");
            }
            if (!args || args.vmImage === undefined) {
                throw new Error("Missing required property 'vmImage'");
            }
            inputs["addOnFeatures"] = args ? args.addOnFeatures : undefined;
            inputs["azureActiveDirectory"] = args ? args.azureActiveDirectory : undefined;
            inputs["certificate"] = args ? args.certificate : undefined;
            inputs["certificateCommonNames"] = args ? args.certificateCommonNames : undefined;
            inputs["clientCertificateCommonNames"] = args ? args.clientCertificateCommonNames : undefined;
            inputs["clientCertificateThumbprints"] = args ? args.clientCertificateThumbprints : undefined;
            inputs["clusterCodeVersion"] = args ? args.clusterCodeVersion : undefined;
            inputs["diagnosticsConfig"] = args ? args.diagnosticsConfig : undefined;
            inputs["fabricSettings"] = args ? args.fabricSettings : undefined;
            inputs["location"] = args ? args.location : undefined;
            inputs["managementEndpoint"] = args ? args.managementEndpoint : undefined;
            inputs["name"] = args ? args.name : undefined;
            inputs["nodeTypes"] = args ? args.nodeTypes : undefined;
            inputs["reliabilityLevel"] = args ? args.reliabilityLevel : undefined;
            inputs["resourceGroupName"] = args ? args.resourceGroupName : undefined;
            inputs["reverseProxyCertificate"] = args ? args.reverseProxyCertificate : undefined;
            inputs["tags"] = args ? args.tags : undefined;
            inputs["upgradeMode"] = args ? args.upgradeMode : undefined;
            inputs["vmImage"] = args ? args.vmImage : undefined;
            inputs["clusterEndpoint"] = undefined /*out*/;
        }
        if (!opts) {
            opts = {}
        }

        if (!opts.version) {
            opts.version = utilities.getVersion();
        }
        super(Cluster.__pulumiType, name, inputs, opts);
    }
}

/**
 * Input properties used for looking up and filtering Cluster resources.
 */
export interface ClusterState {
    /**
     * A List of one or more features which should be enabled, such as `DnsService`.
     */
    readonly addOnFeatures?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * An `azureActiveDirectory` block as defined below.
     */
    readonly azureActiveDirectory?: pulumi.Input<inputs.servicefabric.ClusterAzureActiveDirectory>;
    /**
     * A `certificate` block as defined below. Conflicts with `certificateCommonNames`.
     */
    readonly certificate?: pulumi.Input<inputs.servicefabric.ClusterCertificate>;
    /**
     * A `certificateCommonNames` block as defined below. Conflicts with `certificate`.
     */
    readonly certificateCommonNames?: pulumi.Input<inputs.servicefabric.ClusterCertificateCommonNames>;
    /**
     * A `clientCertificateCommonName` block as defined below.
     */
    readonly clientCertificateCommonNames?: pulumi.Input<pulumi.Input<inputs.servicefabric.ClusterClientCertificateCommonName>[]>;
    /**
     * One or two `clientCertificateThumbprint` blocks as defined below.
     */
    readonly clientCertificateThumbprints?: pulumi.Input<pulumi.Input<inputs.servicefabric.ClusterClientCertificateThumbprint>[]>;
    /**
     * Required if Upgrade Mode set to `Manual`, Specifies the Version of the Cluster Code of the cluster.
     */
    readonly clusterCodeVersion?: pulumi.Input<string>;
    /**
     * The Cluster Endpoint for this Service Fabric Cluster.
     */
    readonly clusterEndpoint?: pulumi.Input<string>;
    /**
     * A `diagnosticsConfig` block as defined below. Changing this forces a new resource to be created.
     */
    readonly diagnosticsConfig?: pulumi.Input<inputs.servicefabric.ClusterDiagnosticsConfig>;
    /**
     * One or more `fabricSettings` blocks as defined below.
     */
    readonly fabricSettings?: pulumi.Input<pulumi.Input<inputs.servicefabric.ClusterFabricSetting>[]>;
    /**
     * Specifies the Azure Region where the Service Fabric Cluster should exist. Changing this forces a new resource to be created.
     */
    readonly location?: pulumi.Input<string>;
    /**
     * Specifies the Management Endpoint of the cluster such as `http://example.com`. Changing this forces a new resource to be created.
     */
    readonly managementEndpoint?: pulumi.Input<string>;
    /**
     * The name of the Service Fabric Cluster. Changing this forces a new resource to be created.
     */
    readonly name?: pulumi.Input<string>;
    /**
     * One or more `nodeType` blocks as defined below.
     */
    readonly nodeTypes?: pulumi.Input<pulumi.Input<inputs.servicefabric.ClusterNodeType>[]>;
    /**
     * Specifies the Reliability Level of the Cluster. Possible values include `None`, `Bronze`, `Silver`, `Gold` and `Platinum`.
     */
    readonly reliabilityLevel?: pulumi.Input<string>;
    /**
     * The name of the Resource Group in which the Service Fabric Cluster exists. Changing this forces a new resource to be created.
     */
    readonly resourceGroupName?: pulumi.Input<string>;
    /**
     * A `reverseProxyCertificate` block as defined below.
     */
    readonly reverseProxyCertificate?: pulumi.Input<inputs.servicefabric.ClusterReverseProxyCertificate>;
    /**
     * A mapping of tags to assign to the resource.
     */
    readonly tags?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
    /**
     * Specifies the Upgrade Mode of the cluster. Possible values are `Automatic` or `Manual`.
     */
    readonly upgradeMode?: pulumi.Input<string>;
    /**
     * Specifies the Image expected for the Service Fabric Cluster, such as `Windows`. Changing this forces a new resource to be created.
     */
    readonly vmImage?: pulumi.Input<string>;
}

/**
 * The set of arguments for constructing a Cluster resource.
 */
export interface ClusterArgs {
    /**
     * A List of one or more features which should be enabled, such as `DnsService`.
     */
    readonly addOnFeatures?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * An `azureActiveDirectory` block as defined below.
     */
    readonly azureActiveDirectory?: pulumi.Input<inputs.servicefabric.ClusterAzureActiveDirectory>;
    /**
     * A `certificate` block as defined below. Conflicts with `certificateCommonNames`.
     */
    readonly certificate?: pulumi.Input<inputs.servicefabric.ClusterCertificate>;
    /**
     * A `certificateCommonNames` block as defined below. Conflicts with `certificate`.
     */
    readonly certificateCommonNames?: pulumi.Input<inputs.servicefabric.ClusterCertificateCommonNames>;
    /**
     * A `clientCertificateCommonName` block as defined below.
     */
    readonly clientCertificateCommonNames?: pulumi.Input<pulumi.Input<inputs.servicefabric.ClusterClientCertificateCommonName>[]>;
    /**
     * One or two `clientCertificateThumbprint` blocks as defined below.
     */
    readonly clientCertificateThumbprints?: pulumi.Input<pulumi.Input<inputs.servicefabric.ClusterClientCertificateThumbprint>[]>;
    /**
     * Required if Upgrade Mode set to `Manual`, Specifies the Version of the Cluster Code of the cluster.
     */
    readonly clusterCodeVersion?: pulumi.Input<string>;
    /**
     * A `diagnosticsConfig` block as defined below. Changing this forces a new resource to be created.
     */
    readonly diagnosticsConfig?: pulumi.Input<inputs.servicefabric.ClusterDiagnosticsConfig>;
    /**
     * One or more `fabricSettings` blocks as defined below.
     */
    readonly fabricSettings?: pulumi.Input<pulumi.Input<inputs.servicefabric.ClusterFabricSetting>[]>;
    /**
     * Specifies the Azure Region where the Service Fabric Cluster should exist. Changing this forces a new resource to be created.
     */
    readonly location?: pulumi.Input<string>;
    /**
     * Specifies the Management Endpoint of the cluster such as `http://example.com`. Changing this forces a new resource to be created.
     */
    readonly managementEndpoint: pulumi.Input<string>;
    /**
     * The name of the Service Fabric Cluster. Changing this forces a new resource to be created.
     */
    readonly name?: pulumi.Input<string>;
    /**
     * One or more `nodeType` blocks as defined below.
     */
    readonly nodeTypes: pulumi.Input<pulumi.Input<inputs.servicefabric.ClusterNodeType>[]>;
    /**
     * Specifies the Reliability Level of the Cluster. Possible values include `None`, `Bronze`, `Silver`, `Gold` and `Platinum`.
     */
    readonly reliabilityLevel: pulumi.Input<string>;
    /**
     * The name of the Resource Group in which the Service Fabric Cluster exists. Changing this forces a new resource to be created.
     */
    readonly resourceGroupName: pulumi.Input<string>;
    /**
     * A `reverseProxyCertificate` block as defined below.
     */
    readonly reverseProxyCertificate?: pulumi.Input<inputs.servicefabric.ClusterReverseProxyCertificate>;
    /**
     * A mapping of tags to assign to the resource.
     */
    readonly tags?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
    /**
     * Specifies the Upgrade Mode of the cluster. Possible values are `Automatic` or `Manual`.
     */
    readonly upgradeMode: pulumi.Input<string>;
    /**
     * Specifies the Image expected for the Service Fabric Cluster, such as `Windows`. Changing this forces a new resource to be created.
     */
    readonly vmImage: pulumi.Input<string>;
}
