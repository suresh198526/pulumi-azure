// *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

// nolint: lll
package datafactory

import (
	"reflect"

	"github.com/pkg/errors"
	"github.com/pulumi/pulumi/sdk/go/pulumi"
)

// Manages a Linked Service (connection) between Data Lake Storage Gen2 and Azure Data Factory.
// 
// > **Note:** All arguments including the `servicePrincipalKey` will be stored in the raw state as plain-text. [Read more about sensitive data in state](https://www.terraform.io/docs/state/sensitive-data.html).
// 
// > This content is derived from https://github.com/terraform-providers/terraform-provider-azurerm/blob/master/website/docs/r/data_factory_linked_service_data_lake_storage_gen2.html.markdown.
type LinkedServiceDataLakeStorageGen2 struct {
	pulumi.CustomResourceState

	// A map of additional properties to associate with the Data Factory Linked Service MySQL.
	AdditionalProperties pulumi.StringMapOutput `pulumi:"additionalProperties"`
	// List of tags that can be used for describing the Data Factory Linked Service MySQL.
	Annotations pulumi.StringArrayOutput `pulumi:"annotations"`
	// The Data Factory name in which to associate the Linked Service with. Changing this forces a new resource.
	DataFactoryName pulumi.StringOutput `pulumi:"dataFactoryName"`
	// The description for the Data Factory Linked Service MySQL.
	Description pulumi.StringPtrOutput `pulumi:"description"`
	// The integration runtime reference to associate with the Data Factory Linked Service MySQL.
	IntegrationRuntimeName pulumi.StringPtrOutput `pulumi:"integrationRuntimeName"`
	// Specifies the name of the Data Factory Linked Service MySQL. Changing this forces a new resource to be created. Must be globally unique. See the [Microsoft documentation](https://docs.microsoft.com/en-us/azure/data-factory/naming-rules) for all restrictions.
	Name pulumi.StringOutput `pulumi:"name"`
	// A map of parameters to associate with the Data Factory Linked Service MySQL.
	Parameters pulumi.StringMapOutput `pulumi:"parameters"`
	// The name of the resource group in which to create the Data Factory Linked Service MySQL. Changing this forces a new resource
	ResourceGroupName pulumi.StringOutput `pulumi:"resourceGroupName"`
	// The service principal id in which to authenticate against the Azure Data Lake Storage Gen2 account.
	ServicePrincipalId pulumi.StringOutput `pulumi:"servicePrincipalId"`
	// The service principal key in which to authenticate against the Azure Data Lake Storage Gen2 account.
	ServicePrincipalKey pulumi.StringOutput `pulumi:"servicePrincipalKey"`
	// The tenant id or name in which to authenticate against the Azure Data Lake Storage Gen2 account.
	Tenant pulumi.StringOutput `pulumi:"tenant"`
	// The endpoint for the Azure Data Lake Storage Gen2 service.
	Url pulumi.StringOutput `pulumi:"url"`
}

// NewLinkedServiceDataLakeStorageGen2 registers a new resource with the given unique name, arguments, and options.
func NewLinkedServiceDataLakeStorageGen2(ctx *pulumi.Context,
	name string, args *LinkedServiceDataLakeStorageGen2Args, opts ...pulumi.ResourceOption) (*LinkedServiceDataLakeStorageGen2, error) {
	if args == nil || args.DataFactoryName == nil {
		return nil, errors.New("missing required argument 'DataFactoryName'")
	}
	if args == nil || args.ResourceGroupName == nil {
		return nil, errors.New("missing required argument 'ResourceGroupName'")
	}
	if args == nil || args.ServicePrincipalId == nil {
		return nil, errors.New("missing required argument 'ServicePrincipalId'")
	}
	if args == nil || args.ServicePrincipalKey == nil {
		return nil, errors.New("missing required argument 'ServicePrincipalKey'")
	}
	if args == nil || args.Tenant == nil {
		return nil, errors.New("missing required argument 'Tenant'")
	}
	if args == nil || args.Url == nil {
		return nil, errors.New("missing required argument 'Url'")
	}
	if args == nil {
		args = &LinkedServiceDataLakeStorageGen2Args{}
	}
	var resource LinkedServiceDataLakeStorageGen2
	err := ctx.RegisterResource("azure:datafactory/linkedServiceDataLakeStorageGen2:LinkedServiceDataLakeStorageGen2", name, args, &resource, opts...)
	if err != nil {
		return nil, err
	}
	return &resource, nil
}

// GetLinkedServiceDataLakeStorageGen2 gets an existing LinkedServiceDataLakeStorageGen2 resource's state with the given name, ID, and optional
// state properties that are used to uniquely qualify the lookup (nil if not required).
func GetLinkedServiceDataLakeStorageGen2(ctx *pulumi.Context,
	name string, id pulumi.IDInput, state *LinkedServiceDataLakeStorageGen2State, opts ...pulumi.ResourceOption) (*LinkedServiceDataLakeStorageGen2, error) {
	var resource LinkedServiceDataLakeStorageGen2
	err := ctx.ReadResource("azure:datafactory/linkedServiceDataLakeStorageGen2:LinkedServiceDataLakeStorageGen2", name, id, state, &resource, opts...)
	if err != nil {
		return nil, err
	}
	return &resource, nil
}

// Input properties used for looking up and filtering LinkedServiceDataLakeStorageGen2 resources.
type linkedServiceDataLakeStorageGen2State struct {
	// A map of additional properties to associate with the Data Factory Linked Service MySQL.
	AdditionalProperties map[string]string `pulumi:"additionalProperties"`
	// List of tags that can be used for describing the Data Factory Linked Service MySQL.
	Annotations []string `pulumi:"annotations"`
	// The Data Factory name in which to associate the Linked Service with. Changing this forces a new resource.
	DataFactoryName *string `pulumi:"dataFactoryName"`
	// The description for the Data Factory Linked Service MySQL.
	Description *string `pulumi:"description"`
	// The integration runtime reference to associate with the Data Factory Linked Service MySQL.
	IntegrationRuntimeName *string `pulumi:"integrationRuntimeName"`
	// Specifies the name of the Data Factory Linked Service MySQL. Changing this forces a new resource to be created. Must be globally unique. See the [Microsoft documentation](https://docs.microsoft.com/en-us/azure/data-factory/naming-rules) for all restrictions.
	Name *string `pulumi:"name"`
	// A map of parameters to associate with the Data Factory Linked Service MySQL.
	Parameters map[string]string `pulumi:"parameters"`
	// The name of the resource group in which to create the Data Factory Linked Service MySQL. Changing this forces a new resource
	ResourceGroupName *string `pulumi:"resourceGroupName"`
	// The service principal id in which to authenticate against the Azure Data Lake Storage Gen2 account.
	ServicePrincipalId *string `pulumi:"servicePrincipalId"`
	// The service principal key in which to authenticate against the Azure Data Lake Storage Gen2 account.
	ServicePrincipalKey *string `pulumi:"servicePrincipalKey"`
	// The tenant id or name in which to authenticate against the Azure Data Lake Storage Gen2 account.
	Tenant *string `pulumi:"tenant"`
	// The endpoint for the Azure Data Lake Storage Gen2 service.
	Url *string `pulumi:"url"`
}

type LinkedServiceDataLakeStorageGen2State struct {
	// A map of additional properties to associate with the Data Factory Linked Service MySQL.
	AdditionalProperties pulumi.StringMapInput
	// List of tags that can be used for describing the Data Factory Linked Service MySQL.
	Annotations pulumi.StringArrayInput
	// The Data Factory name in which to associate the Linked Service with. Changing this forces a new resource.
	DataFactoryName pulumi.StringPtrInput
	// The description for the Data Factory Linked Service MySQL.
	Description pulumi.StringPtrInput
	// The integration runtime reference to associate with the Data Factory Linked Service MySQL.
	IntegrationRuntimeName pulumi.StringPtrInput
	// Specifies the name of the Data Factory Linked Service MySQL. Changing this forces a new resource to be created. Must be globally unique. See the [Microsoft documentation](https://docs.microsoft.com/en-us/azure/data-factory/naming-rules) for all restrictions.
	Name pulumi.StringPtrInput
	// A map of parameters to associate with the Data Factory Linked Service MySQL.
	Parameters pulumi.StringMapInput
	// The name of the resource group in which to create the Data Factory Linked Service MySQL. Changing this forces a new resource
	ResourceGroupName pulumi.StringPtrInput
	// The service principal id in which to authenticate against the Azure Data Lake Storage Gen2 account.
	ServicePrincipalId pulumi.StringPtrInput
	// The service principal key in which to authenticate against the Azure Data Lake Storage Gen2 account.
	ServicePrincipalKey pulumi.StringPtrInput
	// The tenant id or name in which to authenticate against the Azure Data Lake Storage Gen2 account.
	Tenant pulumi.StringPtrInput
	// The endpoint for the Azure Data Lake Storage Gen2 service.
	Url pulumi.StringPtrInput
}

func (LinkedServiceDataLakeStorageGen2State) ElementType() reflect.Type {
	return reflect.TypeOf((*linkedServiceDataLakeStorageGen2State)(nil)).Elem()
}

type linkedServiceDataLakeStorageGen2Args struct {
	// A map of additional properties to associate with the Data Factory Linked Service MySQL.
	AdditionalProperties map[string]string `pulumi:"additionalProperties"`
	// List of tags that can be used for describing the Data Factory Linked Service MySQL.
	Annotations []string `pulumi:"annotations"`
	// The Data Factory name in which to associate the Linked Service with. Changing this forces a new resource.
	DataFactoryName string `pulumi:"dataFactoryName"`
	// The description for the Data Factory Linked Service MySQL.
	Description *string `pulumi:"description"`
	// The integration runtime reference to associate with the Data Factory Linked Service MySQL.
	IntegrationRuntimeName *string `pulumi:"integrationRuntimeName"`
	// Specifies the name of the Data Factory Linked Service MySQL. Changing this forces a new resource to be created. Must be globally unique. See the [Microsoft documentation](https://docs.microsoft.com/en-us/azure/data-factory/naming-rules) for all restrictions.
	Name *string `pulumi:"name"`
	// A map of parameters to associate with the Data Factory Linked Service MySQL.
	Parameters map[string]string `pulumi:"parameters"`
	// The name of the resource group in which to create the Data Factory Linked Service MySQL. Changing this forces a new resource
	ResourceGroupName string `pulumi:"resourceGroupName"`
	// The service principal id in which to authenticate against the Azure Data Lake Storage Gen2 account.
	ServicePrincipalId string `pulumi:"servicePrincipalId"`
	// The service principal key in which to authenticate against the Azure Data Lake Storage Gen2 account.
	ServicePrincipalKey string `pulumi:"servicePrincipalKey"`
	// The tenant id or name in which to authenticate against the Azure Data Lake Storage Gen2 account.
	Tenant string `pulumi:"tenant"`
	// The endpoint for the Azure Data Lake Storage Gen2 service.
	Url string `pulumi:"url"`
}

// The set of arguments for constructing a LinkedServiceDataLakeStorageGen2 resource.
type LinkedServiceDataLakeStorageGen2Args struct {
	// A map of additional properties to associate with the Data Factory Linked Service MySQL.
	AdditionalProperties pulumi.StringMapInput
	// List of tags that can be used for describing the Data Factory Linked Service MySQL.
	Annotations pulumi.StringArrayInput
	// The Data Factory name in which to associate the Linked Service with. Changing this forces a new resource.
	DataFactoryName pulumi.StringInput
	// The description for the Data Factory Linked Service MySQL.
	Description pulumi.StringPtrInput
	// The integration runtime reference to associate with the Data Factory Linked Service MySQL.
	IntegrationRuntimeName pulumi.StringPtrInput
	// Specifies the name of the Data Factory Linked Service MySQL. Changing this forces a new resource to be created. Must be globally unique. See the [Microsoft documentation](https://docs.microsoft.com/en-us/azure/data-factory/naming-rules) for all restrictions.
	Name pulumi.StringPtrInput
	// A map of parameters to associate with the Data Factory Linked Service MySQL.
	Parameters pulumi.StringMapInput
	// The name of the resource group in which to create the Data Factory Linked Service MySQL. Changing this forces a new resource
	ResourceGroupName pulumi.StringInput
	// The service principal id in which to authenticate against the Azure Data Lake Storage Gen2 account.
	ServicePrincipalId pulumi.StringInput
	// The service principal key in which to authenticate against the Azure Data Lake Storage Gen2 account.
	ServicePrincipalKey pulumi.StringInput
	// The tenant id or name in which to authenticate against the Azure Data Lake Storage Gen2 account.
	Tenant pulumi.StringInput
	// The endpoint for the Azure Data Lake Storage Gen2 service.
	Url pulumi.StringInput
}

func (LinkedServiceDataLakeStorageGen2Args) ElementType() reflect.Type {
	return reflect.TypeOf((*linkedServiceDataLakeStorageGen2Args)(nil)).Elem()
}

