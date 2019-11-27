// *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

using System.Collections.Immutable;
using System.Threading.Tasks;
using Pulumi.Serialization;

namespace Pulumi.Azure.Network
{
    public static partial class Invokes
    {
        /// <summary>
        /// Use this data source to access information about an existing Network Interface.
        /// 
        /// &gt; This content is derived from https://github.com/terraform-providers/terraform-provider-azurerm/blob/master/website/docs/d/network_interface.html.markdown.
        /// </summary>
        public static Task<GetNetworkInterfaceResult> GetNetworkInterface(GetNetworkInterfaceArgs args, InvokeOptions? options = null)
            => Pulumi.Deployment.Instance.InvokeAsync<GetNetworkInterfaceResult>("azure:network/getNetworkInterface:getNetworkInterface", args ?? ResourceArgs.Empty, options.WithVersion());
    }

    public sealed class GetNetworkInterfaceArgs : Pulumi.ResourceArgs
    {
        /// <summary>
        /// Specifies the name of the Network Interface.
        /// </summary>
        [Input("name", required: true)]
        public Input<string> Name { get; set; } = null!;

        /// <summary>
        /// Specifies the name of the resource group the Network Interface is located in.
        /// </summary>
        [Input("resourceGroupName", required: true)]
        public Input<string> ResourceGroupName { get; set; } = null!;

        public GetNetworkInterfaceArgs()
        {
        }
    }

    [OutputType]
    public sealed class GetNetworkInterfaceResult
    {
        /// <summary>
        /// List of DNS servers applied to the specified Network Interface.
        /// </summary>
        public readonly ImmutableArray<string> AppliedDnsServers;
        /// <summary>
        /// The list of DNS servers used by the specified Network Interface.
        /// </summary>
        public readonly ImmutableArray<string> DnsServers;
        /// <summary>
        /// Indicates if accelerated networking is set on the specified Network Interface.
        /// </summary>
        public readonly bool EnableAcceleratedNetworking;
        /// <summary>
        /// Indicate if IP forwarding is set on the specified Network Interface.
        /// </summary>
        public readonly bool EnableIpForwarding;
        /// <summary>
        /// The internal dns name label of the specified Network Interface.
        /// </summary>
        public readonly string InternalDnsNameLabel;
        public readonly string InternalFqdn;
        /// <summary>
        /// One or more `ip_configuration` blocks as defined below.
        /// </summary>
        public readonly ImmutableArray<Outputs.GetNetworkInterfaceIpConfigurationsResult> IpConfigurations;
        /// <summary>
        /// The location of the specified Network Interface.
        /// </summary>
        public readonly string Location;
        /// <summary>
        /// The MAC address used by the specified Network Interface.
        /// </summary>
        public readonly string MacAddress;
        /// <summary>
        /// The name of the IP Configuration.
        /// </summary>
        public readonly string Name;
        /// <summary>
        /// The ID of the network security group associated to the specified Network Interface.
        /// </summary>
        public readonly string NetworkSecurityGroupId;
        /// <summary>
        /// The Private IP Address assigned to this Network Interface.
        /// </summary>
        public readonly string PrivateIpAddress;
        /// <summary>
        /// The list of private ip addresses associates to the specified Network Interface.
        /// </summary>
        public readonly ImmutableArray<string> PrivateIpAddresses;
        public readonly string ResourceGroupName;
        /// <summary>
        /// List the tags associated to the specified Network Interface.
        /// </summary>
        public readonly ImmutableDictionary<string, string> Tags;
        /// <summary>
        /// The ID of the virtual machine that the specified Network Interface is attached to.
        /// </summary>
        public readonly string VirtualMachineId;
        /// <summary>
        /// id is the provider-assigned unique ID for this managed resource.
        /// </summary>
        public readonly string Id;

        [OutputConstructor]
        private GetNetworkInterfaceResult(
            ImmutableArray<string> appliedDnsServers,
            ImmutableArray<string> dnsServers,
            bool enableAcceleratedNetworking,
            bool enableIpForwarding,
            string internalDnsNameLabel,
            string internalFqdn,
            ImmutableArray<Outputs.GetNetworkInterfaceIpConfigurationsResult> ipConfigurations,
            string location,
            string macAddress,
            string name,
            string networkSecurityGroupId,
            string privateIpAddress,
            ImmutableArray<string> privateIpAddresses,
            string resourceGroupName,
            ImmutableDictionary<string, string> tags,
            string virtualMachineId,
            string id)
        {
            AppliedDnsServers = appliedDnsServers;
            DnsServers = dnsServers;
            EnableAcceleratedNetworking = enableAcceleratedNetworking;
            EnableIpForwarding = enableIpForwarding;
            InternalDnsNameLabel = internalDnsNameLabel;
            InternalFqdn = internalFqdn;
            IpConfigurations = ipConfigurations;
            Location = location;
            MacAddress = macAddress;
            Name = name;
            NetworkSecurityGroupId = networkSecurityGroupId;
            PrivateIpAddress = privateIpAddress;
            PrivateIpAddresses = privateIpAddresses;
            ResourceGroupName = resourceGroupName;
            Tags = tags;
            VirtualMachineId = virtualMachineId;
            Id = id;
        }
    }

    namespace Outputs
    {

    [OutputType]
    public sealed class GetNetworkInterfaceIpConfigurationsResult
    {
        /// <summary>
        /// A list of Backend Address Pool ID's within a Application Gateway that this Network Interface is connected to.
        /// </summary>
        public readonly ImmutableArray<string> ApplicationGatewayBackendAddressPoolsIds;
        public readonly ImmutableArray<string> ApplicationSecurityGroupIds;
        /// <summary>
        /// A list of Backend Address Pool ID's within a Load Balancer that this Network Interface is connected to.
        /// </summary>
        public readonly ImmutableArray<string> LoadBalancerBackendAddressPoolsIds;
        /// <summary>
        /// A list of Inbound NAT Rule ID's within a Load Balancer that this Network Interface is connected to.
        /// </summary>
        public readonly ImmutableArray<string> LoadBalancerInboundNatRulesIds;
        /// <summary>
        /// Specifies the name of the Network Interface.
        /// </summary>
        public readonly string Name;
        /// <summary>
        /// is this the Primary IP Configuration for this Network Interface?
        /// </summary>
        public readonly bool Primary;
        /// <summary>
        /// The Private IP Address assigned to this Network Interface.
        /// </summary>
        public readonly string PrivateIpAddress;
        /// <summary>
        /// The IP Address allocation type for the Private address, such as `Dynamic` or `Static`.
        /// </summary>
        public readonly string PrivateIpAddressAllocation;
        public readonly string PrivateIpAddressVersion;
        /// <summary>
        /// The ID of the Public IP Address which is connected to this Network Interface.
        /// </summary>
        public readonly string PublicIpAddressId;
        /// <summary>
        /// The ID of the Subnet which the Network Interface is connected to.
        /// </summary>
        public readonly string SubnetId;

        [OutputConstructor]
        private GetNetworkInterfaceIpConfigurationsResult(
            ImmutableArray<string> applicationGatewayBackendAddressPoolsIds,
            ImmutableArray<string> applicationSecurityGroupIds,
            ImmutableArray<string> loadBalancerBackendAddressPoolsIds,
            ImmutableArray<string> loadBalancerInboundNatRulesIds,
            string name,
            bool primary,
            string privateIpAddress,
            string privateIpAddressAllocation,
            string privateIpAddressVersion,
            string publicIpAddressId,
            string subnetId)
        {
            ApplicationGatewayBackendAddressPoolsIds = applicationGatewayBackendAddressPoolsIds;
            ApplicationSecurityGroupIds = applicationSecurityGroupIds;
            LoadBalancerBackendAddressPoolsIds = loadBalancerBackendAddressPoolsIds;
            LoadBalancerInboundNatRulesIds = loadBalancerInboundNatRulesIds;
            Name = name;
            Primary = primary;
            PrivateIpAddress = privateIpAddress;
            PrivateIpAddressAllocation = privateIpAddressAllocation;
            PrivateIpAddressVersion = privateIpAddressVersion;
            PublicIpAddressId = publicIpAddressId;
            SubnetId = subnetId;
        }
    }
    }
}