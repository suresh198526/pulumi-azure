// *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

package maintenance

import (
	"github.com/pulumi/pulumi/sdk/v2/go/pulumi"
)

// Use this data source to access information about an existing Maintenance Configuration.
func LookupConfiguration(ctx *pulumi.Context, args *LookupConfigurationArgs, opts ...pulumi.InvokeOption) (*LookupConfigurationResult, error) {
	var rv LookupConfigurationResult
	err := ctx.Invoke("azure:maintenance/getConfiguration:getConfiguration", args, &rv, opts...)
	if err != nil {
		return nil, err
	}
	return &rv, nil
}

// A collection of arguments for invoking getConfiguration.
type LookupConfigurationArgs struct {
	// Specifies the name of the Maintenance Configuration.
	Name string `pulumi:"name"`
	// Specifies the name of the Resource Group where this Maintenance Configuration exists.
	ResourceGroupName string `pulumi:"resourceGroupName"`
}

// A collection of values returned by getConfiguration.
type LookupConfigurationResult struct {
	// The provider-assigned unique ID for this managed resource.
	Id string `pulumi:"id"`
	// The Azure location where the resource exists.
	Location          string `pulumi:"location"`
	Name              string `pulumi:"name"`
	ResourceGroupName string `pulumi:"resourceGroupName"`
	// The scope of the Maintenance Configuration.
	Scope string `pulumi:"scope"`
	// A mapping of tags assigned to the resource.
	Tags map[string]string `pulumi:"tags"`
}