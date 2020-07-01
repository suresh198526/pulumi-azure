// *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

package network

import (
	"reflect"

	"github.com/pkg/errors"
	"github.com/pulumi/pulumi/sdk/v2/go/pulumi"
)

// Manages a Virtual Network Gateway to establish secure, cross-premises connectivity.
//
// > **Note:** Please be aware that provisioning a Virtual Network Gateway takes a long time (between 30 minutes and 1 hour)
//
// ## Example Usage
//
// ```go
// package main
//
// import (
// 	"fmt"
//
// 	"github.com/pulumi/pulumi-azure/sdk/v3/go/azure/core"
// 	"github.com/pulumi/pulumi-azure/sdk/v3/go/azure/network"
// 	"github.com/pulumi/pulumi/sdk/v2/go/pulumi"
// )
//
// func main() {
// 	pulumi.Run(func(ctx *pulumi.Context) error {
// 		exampleResourceGroup, err := core.NewResourceGroup(ctx, "exampleResourceGroup", &core.ResourceGroupArgs{
// 			Location: pulumi.String("West US"),
// 		})
// 		if err != nil {
// 			return err
// 		}
// 		exampleVirtualNetwork, err := network.NewVirtualNetwork(ctx, "exampleVirtualNetwork", &network.VirtualNetworkArgs{
// 			Location:          exampleResourceGroup.Location,
// 			ResourceGroupName: exampleResourceGroup.Name,
// 			AddressSpaces: pulumi.StringArray{
// 				pulumi.String("10.0.0.0/16"),
// 			},
// 		})
// 		if err != nil {
// 			return err
// 		}
// 		exampleSubnet, err := network.NewSubnet(ctx, "exampleSubnet", &network.SubnetArgs{
// 			ResourceGroupName:  exampleResourceGroup.Name,
// 			VirtualNetworkName: exampleVirtualNetwork.Name,
// 			AddressPrefix:      pulumi.String("10.0.1.0/24"),
// 		})
// 		if err != nil {
// 			return err
// 		}
// 		examplePublicIp, err := network.NewPublicIp(ctx, "examplePublicIp", &network.PublicIpArgs{
// 			Location:          exampleResourceGroup.Location,
// 			ResourceGroupName: exampleResourceGroup.Name,
// 			AllocationMethod:  pulumi.String("Dynamic"),
// 		})
// 		if err != nil {
// 			return err
// 		}
// 		_, err = network.NewVirtualNetworkGateway(ctx, "exampleVirtualNetworkGateway", &network.VirtualNetworkGatewayArgs{
// 			Location:          exampleResourceGroup.Location,
// 			ResourceGroupName: exampleResourceGroup.Name,
// 			Type:              pulumi.String("Vpn"),
// 			VpnType:           pulumi.String("RouteBased"),
// 			ActiveActive:      pulumi.Bool(false),
// 			EnableBgp:         pulumi.Bool(false),
// 			Sku:               pulumi.String("Basic"),
// 			IpConfigurations: network.VirtualNetworkGatewayIpConfigurationArray{
// 				&network.VirtualNetworkGatewayIpConfigurationArgs{
// 					Name:                       pulumi.String("vnetGatewayConfig"),
// 					PublicIpAddressId:          examplePublicIp.ID(),
// 					PrivateIpAddressAllocation: pulumi.String("Dynamic"),
// 					SubnetId:                   exampleSubnet.ID(),
// 				},
// 			},
// 			VpnClientConfiguration: &network.VirtualNetworkGatewayVpnClientConfigurationArgs{
// 				AddressSpaces: pulumi.StringArray{
// 					pulumi.String("10.2.0.0/24"),
// 				},
// 				RootCertificates: network.VirtualNetworkGatewayVpnClientConfigurationRootCertificateArray{
// 					&network.VirtualNetworkGatewayVpnClientConfigurationRootCertificateArgs{
// 						Name:           pulumi.String("DigiCert-Federated-ID-Root-CA"),
// 						PublicCertData: pulumi.String(fmt.Sprintf("%v%v%v%v%v%v%v%v%v%v%v%v%v%v%v%v%v%v%v%v", "MIIDuzCCAqOgAwIBAgIQCHTZWCM+IlfFIRXIvyKSrjANBgkqhkiG9w0BAQsFADBn\n", "MQswCQYDVQQGEwJVUzEVMBMGA1UEChMMRGlnaUNlcnQgSW5jMRkwFwYDVQQLExB3\n", "d3cuZGlnaWNlcnQuY29tMSYwJAYDVQQDEx1EaWdpQ2VydCBGZWRlcmF0ZWQgSUQg\n", "Um9vdCBDQTAeFw0xMzAxMTUxMjAwMDBaFw0zMzAxMTUxMjAwMDBaMGcxCzAJBgNV\n", "BAYTAlVTMRUwEwYDVQQKEwxEaWdpQ2VydCBJbmMxGTAXBgNVBAsTEHd3dy5kaWdp\n", "Y2VydC5jb20xJjAkBgNVBAMTHURpZ2lDZXJ0IEZlZGVyYXRlZCBJRCBSb290IENB\n", "MIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEAvAEB4pcCqnNNOWE6Ur5j\n", "QPUH+1y1F9KdHTRSza6k5iDlXq1kGS1qAkuKtw9JsiNRrjltmFnzMZRBbX8Tlfl8\n", "zAhBmb6dDduDGED01kBsTkgywYPxXVTKec0WxYEEF0oMn4wSYNl0lt2eJAKHXjNf\n", "GTwiibdP8CUR2ghSM2sUTI8Nt1Omfc4SMHhGhYD64uJMbX98THQ/4LMGuYegou+d\n", "GTiahfHtjn7AboSEknwAMJHCh5RlYZZ6B1O4QbKJ+34Q0eKgnI3X6Vc9u0zf6DH8\n", "Dk+4zQDYRRTqTnVO3VT8jzqDlCRuNtq6YvryOWN74/dq8LQhUnXHvFyrsdMaE1X2\n", "DwIDAQABo2MwYTAPBgNVHRMBAf8EBTADAQH/MA4GA1UdDwEB/wQEAwIBhjAdBgNV\n", "HQ4EFgQUGRdkFnbGt1EWjKwbUne+5OaZvRYwHwYDVR0jBBgwFoAUGRdkFnbGt1EW\n", "jKwbUne+5OaZvRYwDQYJKoZIhvcNAQELBQADggEBAHcqsHkrjpESqfuVTRiptJfP\n", "9JbdtWqRTmOf6uJi2c8YVqI6XlKXsD8C1dUUaaHKLUJzvKiazibVuBwMIT84AyqR\n", "QELn3e0BtgEymEygMU569b01ZPxoFSnNXc7qDZBDef8WfqAV/sxkTi8L9BkmFYfL\n", "uGLOhRJOFprPdoDIUBB+tmCl3oDcBy3vnUeOEioz8zAkprcb3GHwHAK+vHmmfgcn\n", "WsfMLH4JCLa/tRYL+Rw/N3ybCkDp00s0WUZ+AoDywSl0Q/ZEnNY0MsFiw6LyIdbq\n", "M/s/1JRtO3bDSzD9TazRVzn2oBqzSa8VgIo5C1nOnoAKJTlsClJKvIhnRlaLQqk=\n")),
// 					},
// 				},
// 				RevokedCertificates: network.VirtualNetworkGatewayVpnClientConfigurationRevokedCertificateArray{
// 					&network.VirtualNetworkGatewayVpnClientConfigurationRevokedCertificateArgs{
// 						Name:       pulumi.String("Verizon-Global-Root-CA"),
// 						Thumbprint: pulumi.String("912198EEF23DCAC40939312FEE97DD560BAE49B1"),
// 					},
// 				},
// 			},
// 		})
// 		if err != nil {
// 			return err
// 		}
// 		return nil
// 	})
// }
// ```
type VirtualNetworkGateway struct {
	pulumi.CustomResourceState

	// If `true`, an active-active Virtual Network Gateway
	// will be created. An active-active gateway requires a `HighPerformance` or an
	// `UltraPerformance` sku. If `false`, an active-standby gateway will be created.
	// Defaults to `false`.
	ActiveActive pulumi.BoolOutput                      `pulumi:"activeActive"`
	BgpSettings  VirtualNetworkGatewayBgpSettingsOutput `pulumi:"bgpSettings"`
	// The ID of the local network gateway
	// through which outbound Internet traffic from the virtual network in which the
	// gateway is created will be routed (*forced tunnelling*). Refer to the
	// [Azure documentation on forced tunnelling](https://docs.microsoft.com/en-us/azure/vpn-gateway/vpn-gateway-forced-tunneling-rm).
	// If not specified, forced tunnelling is disabled.
	DefaultLocalNetworkGatewayId pulumi.StringPtrOutput `pulumi:"defaultLocalNetworkGatewayId"`
	// If `true`, BGP (Border Gateway Protocol) will be enabled
	// for this Virtual Network Gateway. Defaults to `false`.
	EnableBgp pulumi.BoolOutput `pulumi:"enableBgp"`
	// The Generation of the Virtual Network gateway. Possible values include `Generation1`, `Generation2` or `None`.
	Generation pulumi.StringOutput `pulumi:"generation"`
	// One or two `ipConfiguration` blocks documented below.
	// An active-standby gateway requires exactly one `ipConfiguration` block whereas
	// an active-active gateway requires exactly two `ipConfiguration` blocks.
	IpConfigurations VirtualNetworkGatewayIpConfigurationArrayOutput `pulumi:"ipConfigurations"`
	// The location/region where the Virtual Network Gateway is
	// located. Changing the location/region forces a new resource to be created.
	Location pulumi.StringOutput `pulumi:"location"`
	// A user-defined name of the revoked certificate.
	Name pulumi.StringOutput `pulumi:"name"`
	// The name of the resource group in which to
	// create the Virtual Network Gateway. Changing the resource group name forces
	// a new resource to be created.
	ResourceGroupName pulumi.StringOutput `pulumi:"resourceGroupName"`
	// Configuration of the size and capacity of the virtual network
	// gateway. Valid options are `Basic`, `Standard`, `HighPerformance`, `UltraPerformance`,
	// `ErGw1AZ`, `ErGw2AZ`, `ErGw3AZ`, `VpnGw1`, `VpnGw2`, `VpnGw3`, `VpnGw4`,`VpnGw5`, `VpnGw1AZ`,
	// `VpnGw2AZ`, `VpnGw3AZ`,`VpnGw4AZ` and `VpnGw5AZ` and depend on the `type`, `vpnType` and
	// `generation` arguments.
	// A `PolicyBased` gateway only supports the `Basic` sku. Further, the `UltraPerformance`
	// sku is only supported by an `ExpressRoute` gateway.
	Sku pulumi.StringOutput `pulumi:"sku"`
	// A mapping of tags to assign to the resource.
	Tags pulumi.StringMapOutput `pulumi:"tags"`
	// The type of the Virtual Network Gateway. Valid options are
	// `Vpn` or `ExpressRoute`. Changing the type forces a new resource to be created.
	Type pulumi.StringOutput `pulumi:"type"`
	// A `vpnClientConfiguration` block which
	// is documented below. In this block the Virtual Network Gateway can be configured
	// to accept IPSec point-to-site connections.
	VpnClientConfiguration VirtualNetworkGatewayVpnClientConfigurationPtrOutput `pulumi:"vpnClientConfiguration"`
	// The routing type of the Virtual Network Gateway. Valid
	// options are `RouteBased` or `PolicyBased`. Defaults to `RouteBased`.
	VpnType pulumi.StringPtrOutput `pulumi:"vpnType"`
}

// NewVirtualNetworkGateway registers a new resource with the given unique name, arguments, and options.
func NewVirtualNetworkGateway(ctx *pulumi.Context,
	name string, args *VirtualNetworkGatewayArgs, opts ...pulumi.ResourceOption) (*VirtualNetworkGateway, error) {
	if args == nil || args.IpConfigurations == nil {
		return nil, errors.New("missing required argument 'IpConfigurations'")
	}
	if args == nil || args.ResourceGroupName == nil {
		return nil, errors.New("missing required argument 'ResourceGroupName'")
	}
	if args == nil || args.Sku == nil {
		return nil, errors.New("missing required argument 'Sku'")
	}
	if args == nil || args.Type == nil {
		return nil, errors.New("missing required argument 'Type'")
	}
	if args == nil {
		args = &VirtualNetworkGatewayArgs{}
	}
	var resource VirtualNetworkGateway
	err := ctx.RegisterResource("azure:network/virtualNetworkGateway:VirtualNetworkGateway", name, args, &resource, opts...)
	if err != nil {
		return nil, err
	}
	return &resource, nil
}

// GetVirtualNetworkGateway gets an existing VirtualNetworkGateway resource's state with the given name, ID, and optional
// state properties that are used to uniquely qualify the lookup (nil if not required).
func GetVirtualNetworkGateway(ctx *pulumi.Context,
	name string, id pulumi.IDInput, state *VirtualNetworkGatewayState, opts ...pulumi.ResourceOption) (*VirtualNetworkGateway, error) {
	var resource VirtualNetworkGateway
	err := ctx.ReadResource("azure:network/virtualNetworkGateway:VirtualNetworkGateway", name, id, state, &resource, opts...)
	if err != nil {
		return nil, err
	}
	return &resource, nil
}

// Input properties used for looking up and filtering VirtualNetworkGateway resources.
type virtualNetworkGatewayState struct {
	// If `true`, an active-active Virtual Network Gateway
	// will be created. An active-active gateway requires a `HighPerformance` or an
	// `UltraPerformance` sku. If `false`, an active-standby gateway will be created.
	// Defaults to `false`.
	ActiveActive *bool                             `pulumi:"activeActive"`
	BgpSettings  *VirtualNetworkGatewayBgpSettings `pulumi:"bgpSettings"`
	// The ID of the local network gateway
	// through which outbound Internet traffic from the virtual network in which the
	// gateway is created will be routed (*forced tunnelling*). Refer to the
	// [Azure documentation on forced tunnelling](https://docs.microsoft.com/en-us/azure/vpn-gateway/vpn-gateway-forced-tunneling-rm).
	// If not specified, forced tunnelling is disabled.
	DefaultLocalNetworkGatewayId *string `pulumi:"defaultLocalNetworkGatewayId"`
	// If `true`, BGP (Border Gateway Protocol) will be enabled
	// for this Virtual Network Gateway. Defaults to `false`.
	EnableBgp *bool `pulumi:"enableBgp"`
	// The Generation of the Virtual Network gateway. Possible values include `Generation1`, `Generation2` or `None`.
	Generation *string `pulumi:"generation"`
	// One or two `ipConfiguration` blocks documented below.
	// An active-standby gateway requires exactly one `ipConfiguration` block whereas
	// an active-active gateway requires exactly two `ipConfiguration` blocks.
	IpConfigurations []VirtualNetworkGatewayIpConfiguration `pulumi:"ipConfigurations"`
	// The location/region where the Virtual Network Gateway is
	// located. Changing the location/region forces a new resource to be created.
	Location *string `pulumi:"location"`
	// A user-defined name of the revoked certificate.
	Name *string `pulumi:"name"`
	// The name of the resource group in which to
	// create the Virtual Network Gateway. Changing the resource group name forces
	// a new resource to be created.
	ResourceGroupName *string `pulumi:"resourceGroupName"`
	// Configuration of the size and capacity of the virtual network
	// gateway. Valid options are `Basic`, `Standard`, `HighPerformance`, `UltraPerformance`,
	// `ErGw1AZ`, `ErGw2AZ`, `ErGw3AZ`, `VpnGw1`, `VpnGw2`, `VpnGw3`, `VpnGw4`,`VpnGw5`, `VpnGw1AZ`,
	// `VpnGw2AZ`, `VpnGw3AZ`,`VpnGw4AZ` and `VpnGw5AZ` and depend on the `type`, `vpnType` and
	// `generation` arguments.
	// A `PolicyBased` gateway only supports the `Basic` sku. Further, the `UltraPerformance`
	// sku is only supported by an `ExpressRoute` gateway.
	Sku *string `pulumi:"sku"`
	// A mapping of tags to assign to the resource.
	Tags map[string]string `pulumi:"tags"`
	// The type of the Virtual Network Gateway. Valid options are
	// `Vpn` or `ExpressRoute`. Changing the type forces a new resource to be created.
	Type *string `pulumi:"type"`
	// A `vpnClientConfiguration` block which
	// is documented below. In this block the Virtual Network Gateway can be configured
	// to accept IPSec point-to-site connections.
	VpnClientConfiguration *VirtualNetworkGatewayVpnClientConfiguration `pulumi:"vpnClientConfiguration"`
	// The routing type of the Virtual Network Gateway. Valid
	// options are `RouteBased` or `PolicyBased`. Defaults to `RouteBased`.
	VpnType *string `pulumi:"vpnType"`
}

type VirtualNetworkGatewayState struct {
	// If `true`, an active-active Virtual Network Gateway
	// will be created. An active-active gateway requires a `HighPerformance` or an
	// `UltraPerformance` sku. If `false`, an active-standby gateway will be created.
	// Defaults to `false`.
	ActiveActive pulumi.BoolPtrInput
	BgpSettings  VirtualNetworkGatewayBgpSettingsPtrInput
	// The ID of the local network gateway
	// through which outbound Internet traffic from the virtual network in which the
	// gateway is created will be routed (*forced tunnelling*). Refer to the
	// [Azure documentation on forced tunnelling](https://docs.microsoft.com/en-us/azure/vpn-gateway/vpn-gateway-forced-tunneling-rm).
	// If not specified, forced tunnelling is disabled.
	DefaultLocalNetworkGatewayId pulumi.StringPtrInput
	// If `true`, BGP (Border Gateway Protocol) will be enabled
	// for this Virtual Network Gateway. Defaults to `false`.
	EnableBgp pulumi.BoolPtrInput
	// The Generation of the Virtual Network gateway. Possible values include `Generation1`, `Generation2` or `None`.
	Generation pulumi.StringPtrInput
	// One or two `ipConfiguration` blocks documented below.
	// An active-standby gateway requires exactly one `ipConfiguration` block whereas
	// an active-active gateway requires exactly two `ipConfiguration` blocks.
	IpConfigurations VirtualNetworkGatewayIpConfigurationArrayInput
	// The location/region where the Virtual Network Gateway is
	// located. Changing the location/region forces a new resource to be created.
	Location pulumi.StringPtrInput
	// A user-defined name of the revoked certificate.
	Name pulumi.StringPtrInput
	// The name of the resource group in which to
	// create the Virtual Network Gateway. Changing the resource group name forces
	// a new resource to be created.
	ResourceGroupName pulumi.StringPtrInput
	// Configuration of the size and capacity of the virtual network
	// gateway. Valid options are `Basic`, `Standard`, `HighPerformance`, `UltraPerformance`,
	// `ErGw1AZ`, `ErGw2AZ`, `ErGw3AZ`, `VpnGw1`, `VpnGw2`, `VpnGw3`, `VpnGw4`,`VpnGw5`, `VpnGw1AZ`,
	// `VpnGw2AZ`, `VpnGw3AZ`,`VpnGw4AZ` and `VpnGw5AZ` and depend on the `type`, `vpnType` and
	// `generation` arguments.
	// A `PolicyBased` gateway only supports the `Basic` sku. Further, the `UltraPerformance`
	// sku is only supported by an `ExpressRoute` gateway.
	Sku pulumi.StringPtrInput
	// A mapping of tags to assign to the resource.
	Tags pulumi.StringMapInput
	// The type of the Virtual Network Gateway. Valid options are
	// `Vpn` or `ExpressRoute`. Changing the type forces a new resource to be created.
	Type pulumi.StringPtrInput
	// A `vpnClientConfiguration` block which
	// is documented below. In this block the Virtual Network Gateway can be configured
	// to accept IPSec point-to-site connections.
	VpnClientConfiguration VirtualNetworkGatewayVpnClientConfigurationPtrInput
	// The routing type of the Virtual Network Gateway. Valid
	// options are `RouteBased` or `PolicyBased`. Defaults to `RouteBased`.
	VpnType pulumi.StringPtrInput
}

func (VirtualNetworkGatewayState) ElementType() reflect.Type {
	return reflect.TypeOf((*virtualNetworkGatewayState)(nil)).Elem()
}

type virtualNetworkGatewayArgs struct {
	// If `true`, an active-active Virtual Network Gateway
	// will be created. An active-active gateway requires a `HighPerformance` or an
	// `UltraPerformance` sku. If `false`, an active-standby gateway will be created.
	// Defaults to `false`.
	ActiveActive *bool                             `pulumi:"activeActive"`
	BgpSettings  *VirtualNetworkGatewayBgpSettings `pulumi:"bgpSettings"`
	// The ID of the local network gateway
	// through which outbound Internet traffic from the virtual network in which the
	// gateway is created will be routed (*forced tunnelling*). Refer to the
	// [Azure documentation on forced tunnelling](https://docs.microsoft.com/en-us/azure/vpn-gateway/vpn-gateway-forced-tunneling-rm).
	// If not specified, forced tunnelling is disabled.
	DefaultLocalNetworkGatewayId *string `pulumi:"defaultLocalNetworkGatewayId"`
	// If `true`, BGP (Border Gateway Protocol) will be enabled
	// for this Virtual Network Gateway. Defaults to `false`.
	EnableBgp *bool `pulumi:"enableBgp"`
	// The Generation of the Virtual Network gateway. Possible values include `Generation1`, `Generation2` or `None`.
	Generation *string `pulumi:"generation"`
	// One or two `ipConfiguration` blocks documented below.
	// An active-standby gateway requires exactly one `ipConfiguration` block whereas
	// an active-active gateway requires exactly two `ipConfiguration` blocks.
	IpConfigurations []VirtualNetworkGatewayIpConfiguration `pulumi:"ipConfigurations"`
	// The location/region where the Virtual Network Gateway is
	// located. Changing the location/region forces a new resource to be created.
	Location *string `pulumi:"location"`
	// A user-defined name of the revoked certificate.
	Name *string `pulumi:"name"`
	// The name of the resource group in which to
	// create the Virtual Network Gateway. Changing the resource group name forces
	// a new resource to be created.
	ResourceGroupName string `pulumi:"resourceGroupName"`
	// Configuration of the size and capacity of the virtual network
	// gateway. Valid options are `Basic`, `Standard`, `HighPerformance`, `UltraPerformance`,
	// `ErGw1AZ`, `ErGw2AZ`, `ErGw3AZ`, `VpnGw1`, `VpnGw2`, `VpnGw3`, `VpnGw4`,`VpnGw5`, `VpnGw1AZ`,
	// `VpnGw2AZ`, `VpnGw3AZ`,`VpnGw4AZ` and `VpnGw5AZ` and depend on the `type`, `vpnType` and
	// `generation` arguments.
	// A `PolicyBased` gateway only supports the `Basic` sku. Further, the `UltraPerformance`
	// sku is only supported by an `ExpressRoute` gateway.
	Sku string `pulumi:"sku"`
	// A mapping of tags to assign to the resource.
	Tags map[string]string `pulumi:"tags"`
	// The type of the Virtual Network Gateway. Valid options are
	// `Vpn` or `ExpressRoute`. Changing the type forces a new resource to be created.
	Type string `pulumi:"type"`
	// A `vpnClientConfiguration` block which
	// is documented below. In this block the Virtual Network Gateway can be configured
	// to accept IPSec point-to-site connections.
	VpnClientConfiguration *VirtualNetworkGatewayVpnClientConfiguration `pulumi:"vpnClientConfiguration"`
	// The routing type of the Virtual Network Gateway. Valid
	// options are `RouteBased` or `PolicyBased`. Defaults to `RouteBased`.
	VpnType *string `pulumi:"vpnType"`
}

// The set of arguments for constructing a VirtualNetworkGateway resource.
type VirtualNetworkGatewayArgs struct {
	// If `true`, an active-active Virtual Network Gateway
	// will be created. An active-active gateway requires a `HighPerformance` or an
	// `UltraPerformance` sku. If `false`, an active-standby gateway will be created.
	// Defaults to `false`.
	ActiveActive pulumi.BoolPtrInput
	BgpSettings  VirtualNetworkGatewayBgpSettingsPtrInput
	// The ID of the local network gateway
	// through which outbound Internet traffic from the virtual network in which the
	// gateway is created will be routed (*forced tunnelling*). Refer to the
	// [Azure documentation on forced tunnelling](https://docs.microsoft.com/en-us/azure/vpn-gateway/vpn-gateway-forced-tunneling-rm).
	// If not specified, forced tunnelling is disabled.
	DefaultLocalNetworkGatewayId pulumi.StringPtrInput
	// If `true`, BGP (Border Gateway Protocol) will be enabled
	// for this Virtual Network Gateway. Defaults to `false`.
	EnableBgp pulumi.BoolPtrInput
	// The Generation of the Virtual Network gateway. Possible values include `Generation1`, `Generation2` or `None`.
	Generation pulumi.StringPtrInput
	// One or two `ipConfiguration` blocks documented below.
	// An active-standby gateway requires exactly one `ipConfiguration` block whereas
	// an active-active gateway requires exactly two `ipConfiguration` blocks.
	IpConfigurations VirtualNetworkGatewayIpConfigurationArrayInput
	// The location/region where the Virtual Network Gateway is
	// located. Changing the location/region forces a new resource to be created.
	Location pulumi.StringPtrInput
	// A user-defined name of the revoked certificate.
	Name pulumi.StringPtrInput
	// The name of the resource group in which to
	// create the Virtual Network Gateway. Changing the resource group name forces
	// a new resource to be created.
	ResourceGroupName pulumi.StringInput
	// Configuration of the size and capacity of the virtual network
	// gateway. Valid options are `Basic`, `Standard`, `HighPerformance`, `UltraPerformance`,
	// `ErGw1AZ`, `ErGw2AZ`, `ErGw3AZ`, `VpnGw1`, `VpnGw2`, `VpnGw3`, `VpnGw4`,`VpnGw5`, `VpnGw1AZ`,
	// `VpnGw2AZ`, `VpnGw3AZ`,`VpnGw4AZ` and `VpnGw5AZ` and depend on the `type`, `vpnType` and
	// `generation` arguments.
	// A `PolicyBased` gateway only supports the `Basic` sku. Further, the `UltraPerformance`
	// sku is only supported by an `ExpressRoute` gateway.
	Sku pulumi.StringInput
	// A mapping of tags to assign to the resource.
	Tags pulumi.StringMapInput
	// The type of the Virtual Network Gateway. Valid options are
	// `Vpn` or `ExpressRoute`. Changing the type forces a new resource to be created.
	Type pulumi.StringInput
	// A `vpnClientConfiguration` block which
	// is documented below. In this block the Virtual Network Gateway can be configured
	// to accept IPSec point-to-site connections.
	VpnClientConfiguration VirtualNetworkGatewayVpnClientConfigurationPtrInput
	// The routing type of the Virtual Network Gateway. Valid
	// options are `RouteBased` or `PolicyBased`. Defaults to `RouteBased`.
	VpnType pulumi.StringPtrInput
}

func (VirtualNetworkGatewayArgs) ElementType() reflect.Type {
	return reflect.TypeOf((*virtualNetworkGatewayArgs)(nil)).Elem()
}
