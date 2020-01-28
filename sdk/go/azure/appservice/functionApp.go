// *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

// nolint: lll
package appservice

import (
	"reflect"

	"github.com/pkg/errors"
	"github.com/pulumi/pulumi/sdk/go/pulumi"
)

// Manages a Function App.
// 
// > This content is derived from https://github.com/terraform-providers/terraform-provider-azurerm/blob/master/website/docs/r/function_app.html.markdown.
type FunctionApp struct {
	pulumi.CustomResourceState

	// The ID of the App Service Plan within which to create this Function App.
	AppServicePlanId pulumi.StringOutput `pulumi:"appServicePlanId"`
	// A key-value pair of App Settings.
	AppSettings pulumi.StringMapOutput `pulumi:"appSettings"`
	// A `authSettings` block as defined below.
	AuthSettings FunctionAppAuthSettingsOutput `pulumi:"authSettings"`
	// Should the Function App send session affinity cookies, which route client requests in the same session to the same instance?
	ClientAffinityEnabled pulumi.BoolOutput `pulumi:"clientAffinityEnabled"`
	// An `connectionString` block as defined below.
	ConnectionStrings FunctionAppConnectionStringArrayOutput `pulumi:"connectionStrings"`
	// The default hostname associated with the Function App - such as `mysite.azurewebsites.net`
	DefaultHostname pulumi.StringOutput `pulumi:"defaultHostname"`
	// Should the built-in logging of this Function App be enabled? Defaults to `true`.
	EnableBuiltinLogging pulumi.BoolPtrOutput `pulumi:"enableBuiltinLogging"`
	// Is the Function App enabled?
	Enabled pulumi.BoolPtrOutput `pulumi:"enabled"`
	// Can the Function App only be accessed via HTTPS? Defaults to `false`.
	HttpsOnly pulumi.BoolPtrOutput `pulumi:"httpsOnly"`
	// An `identity` block as defined below.
	Identity FunctionAppIdentityOutput `pulumi:"identity"`
	// The Function App kind - such as `functionapp,linux,container`
	Kind pulumi.StringOutput `pulumi:"kind"`
	// Specifies the supported Azure location where the resource exists. Changing this forces a new resource to be created.
	Location pulumi.StringOutput `pulumi:"location"`
	// The name of the Connection String.
	Name pulumi.StringOutput `pulumi:"name"`
	// A comma separated list of outbound IP addresses - such as `52.23.25.3,52.143.43.12`
	OutboundIpAddresses pulumi.StringOutput `pulumi:"outboundIpAddresses"`
	// A comma separated list of outbound IP addresses - such as `52.23.25.3,52.143.43.12,52.143.43.17` - not all of which are necessarily in use. Superset of `outboundIpAddresses`.
	PossibleOutboundIpAddresses pulumi.StringOutput `pulumi:"possibleOutboundIpAddresses"`
	// The name of the resource group in which to create the Function App.
	ResourceGroupName pulumi.StringOutput `pulumi:"resourceGroupName"`
	// A `siteConfig` object as defined below.
	SiteConfig FunctionAppSiteConfigOutput `pulumi:"siteConfig"`
	// A `siteCredential` block as defined below, which contains the site-level credentials used to publish to this App Service.
	SiteCredential FunctionAppSiteCredentialOutput `pulumi:"siteCredential"`
	// The connection string of the backend storage account which will be used by this Function App (such as the dashboard, logs).
	StorageConnectionString pulumi.StringOutput `pulumi:"storageConnectionString"`
	// A mapping of tags to assign to the resource.
	Tags pulumi.StringMapOutput `pulumi:"tags"`
	// The runtime version associated with the Function App. Defaults to `~1`.
	Version pulumi.StringPtrOutput `pulumi:"version"`
}

// NewFunctionApp registers a new resource with the given unique name, arguments, and options.
func NewFunctionApp(ctx *pulumi.Context,
	name string, args *FunctionAppArgs, opts ...pulumi.ResourceOption) (*FunctionApp, error) {
	if args == nil || args.AppServicePlanId == nil {
		return nil, errors.New("missing required argument 'AppServicePlanId'")
	}
	if args == nil || args.ResourceGroupName == nil {
		return nil, errors.New("missing required argument 'ResourceGroupName'")
	}
	if args == nil || args.StorageConnectionString == nil {
		return nil, errors.New("missing required argument 'StorageConnectionString'")
	}
	if args == nil {
		args = &FunctionAppArgs{}
	}
	var resource FunctionApp
	err := ctx.RegisterResource("azure:appservice/functionApp:FunctionApp", name, args, &resource, opts...)
	if err != nil {
		return nil, err
	}
	return &resource, nil
}

// GetFunctionApp gets an existing FunctionApp resource's state with the given name, ID, and optional
// state properties that are used to uniquely qualify the lookup (nil if not required).
func GetFunctionApp(ctx *pulumi.Context,
	name string, id pulumi.IDInput, state *FunctionAppState, opts ...pulumi.ResourceOption) (*FunctionApp, error) {
	var resource FunctionApp
	err := ctx.ReadResource("azure:appservice/functionApp:FunctionApp", name, id, state, &resource, opts...)
	if err != nil {
		return nil, err
	}
	return &resource, nil
}

// Input properties used for looking up and filtering FunctionApp resources.
type functionAppState struct {
	// The ID of the App Service Plan within which to create this Function App.
	AppServicePlanId *string `pulumi:"appServicePlanId"`
	// A key-value pair of App Settings.
	AppSettings map[string]string `pulumi:"appSettings"`
	// A `authSettings` block as defined below.
	AuthSettings *FunctionAppAuthSettings `pulumi:"authSettings"`
	// Should the Function App send session affinity cookies, which route client requests in the same session to the same instance?
	ClientAffinityEnabled *bool `pulumi:"clientAffinityEnabled"`
	// An `connectionString` block as defined below.
	ConnectionStrings []FunctionAppConnectionString `pulumi:"connectionStrings"`
	// The default hostname associated with the Function App - such as `mysite.azurewebsites.net`
	DefaultHostname *string `pulumi:"defaultHostname"`
	// Should the built-in logging of this Function App be enabled? Defaults to `true`.
	EnableBuiltinLogging *bool `pulumi:"enableBuiltinLogging"`
	// Is the Function App enabled?
	Enabled *bool `pulumi:"enabled"`
	// Can the Function App only be accessed via HTTPS? Defaults to `false`.
	HttpsOnly *bool `pulumi:"httpsOnly"`
	// An `identity` block as defined below.
	Identity *FunctionAppIdentity `pulumi:"identity"`
	// The Function App kind - such as `functionapp,linux,container`
	Kind *string `pulumi:"kind"`
	// Specifies the supported Azure location where the resource exists. Changing this forces a new resource to be created.
	Location *string `pulumi:"location"`
	// The name of the Connection String.
	Name *string `pulumi:"name"`
	// A comma separated list of outbound IP addresses - such as `52.23.25.3,52.143.43.12`
	OutboundIpAddresses *string `pulumi:"outboundIpAddresses"`
	// A comma separated list of outbound IP addresses - such as `52.23.25.3,52.143.43.12,52.143.43.17` - not all of which are necessarily in use. Superset of `outboundIpAddresses`.
	PossibleOutboundIpAddresses *string `pulumi:"possibleOutboundIpAddresses"`
	// The name of the resource group in which to create the Function App.
	ResourceGroupName *string `pulumi:"resourceGroupName"`
	// A `siteConfig` object as defined below.
	SiteConfig *FunctionAppSiteConfig `pulumi:"siteConfig"`
	// A `siteCredential` block as defined below, which contains the site-level credentials used to publish to this App Service.
	SiteCredential *FunctionAppSiteCredential `pulumi:"siteCredential"`
	// The connection string of the backend storage account which will be used by this Function App (such as the dashboard, logs).
	StorageConnectionString *string `pulumi:"storageConnectionString"`
	// A mapping of tags to assign to the resource.
	Tags map[string]string `pulumi:"tags"`
	// The runtime version associated with the Function App. Defaults to `~1`.
	Version *string `pulumi:"version"`
}

type FunctionAppState struct {
	// The ID of the App Service Plan within which to create this Function App.
	AppServicePlanId pulumi.StringPtrInput
	// A key-value pair of App Settings.
	AppSettings pulumi.StringMapInput
	// A `authSettings` block as defined below.
	AuthSettings FunctionAppAuthSettingsPtrInput
	// Should the Function App send session affinity cookies, which route client requests in the same session to the same instance?
	ClientAffinityEnabled pulumi.BoolPtrInput
	// An `connectionString` block as defined below.
	ConnectionStrings FunctionAppConnectionStringArrayInput
	// The default hostname associated with the Function App - such as `mysite.azurewebsites.net`
	DefaultHostname pulumi.StringPtrInput
	// Should the built-in logging of this Function App be enabled? Defaults to `true`.
	EnableBuiltinLogging pulumi.BoolPtrInput
	// Is the Function App enabled?
	Enabled pulumi.BoolPtrInput
	// Can the Function App only be accessed via HTTPS? Defaults to `false`.
	HttpsOnly pulumi.BoolPtrInput
	// An `identity` block as defined below.
	Identity FunctionAppIdentityPtrInput
	// The Function App kind - such as `functionapp,linux,container`
	Kind pulumi.StringPtrInput
	// Specifies the supported Azure location where the resource exists. Changing this forces a new resource to be created.
	Location pulumi.StringPtrInput
	// The name of the Connection String.
	Name pulumi.StringPtrInput
	// A comma separated list of outbound IP addresses - such as `52.23.25.3,52.143.43.12`
	OutboundIpAddresses pulumi.StringPtrInput
	// A comma separated list of outbound IP addresses - such as `52.23.25.3,52.143.43.12,52.143.43.17` - not all of which are necessarily in use. Superset of `outboundIpAddresses`.
	PossibleOutboundIpAddresses pulumi.StringPtrInput
	// The name of the resource group in which to create the Function App.
	ResourceGroupName pulumi.StringPtrInput
	// A `siteConfig` object as defined below.
	SiteConfig FunctionAppSiteConfigPtrInput
	// A `siteCredential` block as defined below, which contains the site-level credentials used to publish to this App Service.
	SiteCredential FunctionAppSiteCredentialPtrInput
	// The connection string of the backend storage account which will be used by this Function App (such as the dashboard, logs).
	StorageConnectionString pulumi.StringPtrInput
	// A mapping of tags to assign to the resource.
	Tags pulumi.StringMapInput
	// The runtime version associated with the Function App. Defaults to `~1`.
	Version pulumi.StringPtrInput
}

func (FunctionAppState) ElementType() reflect.Type {
	return reflect.TypeOf((*functionAppState)(nil)).Elem()
}

type functionAppArgs struct {
	// The ID of the App Service Plan within which to create this Function App.
	AppServicePlanId string `pulumi:"appServicePlanId"`
	// A key-value pair of App Settings.
	AppSettings map[string]string `pulumi:"appSettings"`
	// A `authSettings` block as defined below.
	AuthSettings *FunctionAppAuthSettings `pulumi:"authSettings"`
	// Should the Function App send session affinity cookies, which route client requests in the same session to the same instance?
	ClientAffinityEnabled *bool `pulumi:"clientAffinityEnabled"`
	// An `connectionString` block as defined below.
	ConnectionStrings []FunctionAppConnectionString `pulumi:"connectionStrings"`
	// Should the built-in logging of this Function App be enabled? Defaults to `true`.
	EnableBuiltinLogging *bool `pulumi:"enableBuiltinLogging"`
	// Is the Function App enabled?
	Enabled *bool `pulumi:"enabled"`
	// Can the Function App only be accessed via HTTPS? Defaults to `false`.
	HttpsOnly *bool `pulumi:"httpsOnly"`
	// An `identity` block as defined below.
	Identity *FunctionAppIdentity `pulumi:"identity"`
	// Specifies the supported Azure location where the resource exists. Changing this forces a new resource to be created.
	Location *string `pulumi:"location"`
	// The name of the Connection String.
	Name *string `pulumi:"name"`
	// The name of the resource group in which to create the Function App.
	ResourceGroupName string `pulumi:"resourceGroupName"`
	// A `siteConfig` object as defined below.
	SiteConfig *FunctionAppSiteConfig `pulumi:"siteConfig"`
	// The connection string of the backend storage account which will be used by this Function App (such as the dashboard, logs).
	StorageConnectionString string `pulumi:"storageConnectionString"`
	// A mapping of tags to assign to the resource.
	Tags map[string]string `pulumi:"tags"`
	// The runtime version associated with the Function App. Defaults to `~1`.
	Version *string `pulumi:"version"`
}

// The set of arguments for constructing a FunctionApp resource.
type FunctionAppArgs struct {
	// The ID of the App Service Plan within which to create this Function App.
	AppServicePlanId pulumi.StringInput
	// A key-value pair of App Settings.
	AppSettings pulumi.StringMapInput
	// A `authSettings` block as defined below.
	AuthSettings FunctionAppAuthSettingsPtrInput
	// Should the Function App send session affinity cookies, which route client requests in the same session to the same instance?
	ClientAffinityEnabled pulumi.BoolPtrInput
	// An `connectionString` block as defined below.
	ConnectionStrings FunctionAppConnectionStringArrayInput
	// Should the built-in logging of this Function App be enabled? Defaults to `true`.
	EnableBuiltinLogging pulumi.BoolPtrInput
	// Is the Function App enabled?
	Enabled pulumi.BoolPtrInput
	// Can the Function App only be accessed via HTTPS? Defaults to `false`.
	HttpsOnly pulumi.BoolPtrInput
	// An `identity` block as defined below.
	Identity FunctionAppIdentityPtrInput
	// Specifies the supported Azure location where the resource exists. Changing this forces a new resource to be created.
	Location pulumi.StringPtrInput
	// The name of the Connection String.
	Name pulumi.StringPtrInput
	// The name of the resource group in which to create the Function App.
	ResourceGroupName pulumi.StringInput
	// A `siteConfig` object as defined below.
	SiteConfig FunctionAppSiteConfigPtrInput
	// The connection string of the backend storage account which will be used by this Function App (such as the dashboard, logs).
	StorageConnectionString pulumi.StringInput
	// A mapping of tags to assign to the resource.
	Tags pulumi.StringMapInput
	// The runtime version associated with the Function App. Defaults to `~1`.
	Version pulumi.StringPtrInput
}

func (FunctionAppArgs) ElementType() reflect.Type {
	return reflect.TypeOf((*functionAppArgs)(nil)).Elem()
}

