// *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

// nolint: lll
package appservice

import (
	"github.com/pulumi/pulumi/sdk/go/pulumi"
)

// Use this data source to access information about an existing App Service Certificate Order.
// 
// > This content is derived from https://github.com/terraform-providers/terraform-provider-azurerm/blob/master/website/docs/d/app_service_certificate_order.html.markdown.
func LookupCertificateOrder(ctx *pulumi.Context, args *LookupCertificateOrderArgs, opts ...pulumi.InvokeOption) (*LookupCertificateOrderResult, error) {
	var rv LookupCertificateOrderResult
	err := ctx.Invoke("azure:appservice/getCertificateOrder:getCertificateOrder", args, &rv, opts...)
	if err != nil {
		return nil, err
	}
	return &rv, nil
}

// A collection of arguments for invoking getCertificateOrder.
type LookupCertificateOrderArgs struct {
	// The name of the App Service.
	Name string `pulumi:"name"`
	// The Name of the Resource Group where the App Service exists.
	ResourceGroupName string `pulumi:"resourceGroupName"`
}


// A collection of values returned by getCertificateOrder.
type LookupCertificateOrderResult struct {
	// Reasons why App Service Certificate is not renewable at the current moment.
	AppServiceCertificateNotRenewableReasons []string `pulumi:"appServiceCertificateNotRenewableReasons"`
	// true if the certificate should be automatically renewed when it expires; otherwise, false.
	AutoRenew bool `pulumi:"autoRenew"`
	// State of the Key Vault secret. A `certificates` block as defined below.
	Certificates []GetCertificateOrderCertificate `pulumi:"certificates"`
	// Last CSR that was created for this order.
	Csr string `pulumi:"csr"`
	// The Distinguished Name for the App Service Certificate Order.
	DistinguishedName string `pulumi:"distinguishedName"`
	// Domain verification token.
	DomainVerificationToken string `pulumi:"domainVerificationToken"`
	// Certificate expiration time.
	ExpirationTime string `pulumi:"expirationTime"`
	// id is the provider-assigned unique ID for this managed resource.
	Id string `pulumi:"id"`
	// Certificate thumbprint intermediate certificate.
	IntermediateThumbprint string `pulumi:"intermediateThumbprint"`
	// Whether the private key is external or not.
	IsPrivateKeyExternal bool `pulumi:"isPrivateKeyExternal"`
	// Certificate key size.
	KeySize int `pulumi:"keySize"`
	// The Azure location where the App Service exists.
	Location string `pulumi:"location"`
	Name string `pulumi:"name"`
	// Certificate product type, such as `Standard` or `WildCard`.
	ProductType string `pulumi:"productType"`
	ResourceGroupName string `pulumi:"resourceGroupName"`
	// Certificate thumbprint for root certificate.
	RootThumbprint string `pulumi:"rootThumbprint"`
	// Certificate thumbprint for signed certificate.
	SignedCertificateThumbprint string `pulumi:"signedCertificateThumbprint"`
	// Current order status.
	Status string `pulumi:"status"`
	// A mapping of tags to assign to the resource.
	Tags map[string]string `pulumi:"tags"`
	// Duration in years (must be between 1 and 3).
	ValidityInYears int `pulumi:"validityInYears"`
}

