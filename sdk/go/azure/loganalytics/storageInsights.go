// *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

package loganalytics

import (
	"context"
	"reflect"

	"github.com/pkg/errors"
	"github.com/pulumi/pulumi/sdk/v2/go/pulumi"
)

// Manages a Log Analytics Storage Insights resource.
//
// ## Example Usage
//
// ```go
// package main
//
// import (
// 	"github.com/pulumi/pulumi-azure/sdk/v3/go/azure/core"
// 	"github.com/pulumi/pulumi-azure/sdk/v3/go/azure/loganalytics"
// 	"github.com/pulumi/pulumi-azure/sdk/v3/go/azure/operationalinsights"
// 	"github.com/pulumi/pulumi-azure/sdk/v3/go/azure/storage"
// 	"github.com/pulumi/pulumi/sdk/v2/go/pulumi"
// )
//
// func main() {
// 	pulumi.Run(func(ctx *pulumi.Context) error {
// 		exampleResourceGroup, err := core.NewResourceGroup(ctx, "exampleResourceGroup", &core.ResourceGroupArgs{
// 			Location: pulumi.String("West Europe"),
// 		})
// 		if err != nil {
// 			return err
// 		}
// 		exampleAnalyticsWorkspace, err := operationalinsights.NewAnalyticsWorkspace(ctx, "exampleAnalyticsWorkspace", &operationalinsights.AnalyticsWorkspaceArgs{
// 			Location:          exampleResourceGroup.Location,
// 			ResourceGroupName: exampleResourceGroup.Name,
// 			Sku:               pulumi.String("PerGB2018"),
// 			RetentionInDays:   pulumi.Int(30),
// 		})
// 		if err != nil {
// 			return err
// 		}
// 		exampleAccount, err := storage.NewAccount(ctx, "exampleAccount", &storage.AccountArgs{
// 			ResourceGroupName:      exampleResourceGroup.Name,
// 			Location:               exampleResourceGroup.Location,
// 			AccountTier:            pulumi.String("Standard"),
// 			AccountReplicationType: pulumi.String("LRS"),
// 		})
// 		if err != nil {
// 			return err
// 		}
// 		_, err = loganalytics.NewStorageInsights(ctx, "exampleStorageInsights", &loganalytics.StorageInsightsArgs{
// 			ResourceGroupName: exampleResourceGroup.Name,
// 			WorkspaceId:       exampleAnalyticsWorkspace.ID(),
// 			StorageAccountId:  exampleAccount.ID(),
// 			StorageAccountKey: exampleAccount.PrimaryAccessKey,
// 		})
// 		if err != nil {
// 			return err
// 		}
// 		return nil
// 	})
// }
// ```
//
// ## Import
//
// Log Analytics Storage Insight Configs can be imported using the `resource id`, e.g.
//
// ```sh
//  $ pulumi import azure:loganalytics/storageInsights:StorageInsights example /subscriptions/00000000-0000-0000-0000-000000000000/resourceGroups/group1/providers/Microsoft.OperationalInsights/workspaces/workspace1/storageInsightConfigs/storageInsight1
// ```
type StorageInsights struct {
	pulumi.CustomResourceState

	// The names of the blob containers that the workspace should read.
	BlobContainerNames pulumi.StringArrayOutput `pulumi:"blobContainerNames"`
	// The name which should be used for this Log Analytics Storage Insights. Changing this forces a new Log Analytics Storage Insights to be created.
	Name pulumi.StringOutput `pulumi:"name"`
	// The name of the Resource Group where the Log Analytics Storage Insights should exist. Changing this forces a new Log Analytics Storage Insights to be created.
	ResourceGroupName pulumi.StringOutput `pulumi:"resourceGroupName"`
	// The ID of the Storage Account used by this Log Analytics Storage Insights.
	StorageAccountId pulumi.StringOutput `pulumi:"storageAccountId"`
	// The storage access key to be used to connect to the storage account.
	StorageAccountKey pulumi.StringOutput `pulumi:"storageAccountKey"`
	// The names of the Azure tables that the workspace should read.
	TableNames pulumi.StringArrayOutput `pulumi:"tableNames"`
	// A mapping of tags which should be assigned to the Log Analytics Storage Insights.
	Tags pulumi.StringMapOutput `pulumi:"tags"`
	// The ID of the Log Analytics Workspace within which the Storage Insights should exist. Changing this forces a new Log Analytics Storage Insights to be created.
	WorkspaceId pulumi.StringOutput `pulumi:"workspaceId"`
}

// NewStorageInsights registers a new resource with the given unique name, arguments, and options.
func NewStorageInsights(ctx *pulumi.Context,
	name string, args *StorageInsightsArgs, opts ...pulumi.ResourceOption) (*StorageInsights, error) {
	if args == nil || args.ResourceGroupName == nil {
		return nil, errors.New("missing required argument 'ResourceGroupName'")
	}
	if args == nil || args.StorageAccountId == nil {
		return nil, errors.New("missing required argument 'StorageAccountId'")
	}
	if args == nil || args.StorageAccountKey == nil {
		return nil, errors.New("missing required argument 'StorageAccountKey'")
	}
	if args == nil || args.WorkspaceId == nil {
		return nil, errors.New("missing required argument 'WorkspaceId'")
	}
	if args == nil {
		args = &StorageInsightsArgs{}
	}
	var resource StorageInsights
	err := ctx.RegisterResource("azure:loganalytics/storageInsights:StorageInsights", name, args, &resource, opts...)
	if err != nil {
		return nil, err
	}
	return &resource, nil
}

// GetStorageInsights gets an existing StorageInsights resource's state with the given name, ID, and optional
// state properties that are used to uniquely qualify the lookup (nil if not required).
func GetStorageInsights(ctx *pulumi.Context,
	name string, id pulumi.IDInput, state *StorageInsightsState, opts ...pulumi.ResourceOption) (*StorageInsights, error) {
	var resource StorageInsights
	err := ctx.ReadResource("azure:loganalytics/storageInsights:StorageInsights", name, id, state, &resource, opts...)
	if err != nil {
		return nil, err
	}
	return &resource, nil
}

// Input properties used for looking up and filtering StorageInsights resources.
type storageInsightsState struct {
	// The names of the blob containers that the workspace should read.
	BlobContainerNames []string `pulumi:"blobContainerNames"`
	// The name which should be used for this Log Analytics Storage Insights. Changing this forces a new Log Analytics Storage Insights to be created.
	Name *string `pulumi:"name"`
	// The name of the Resource Group where the Log Analytics Storage Insights should exist. Changing this forces a new Log Analytics Storage Insights to be created.
	ResourceGroupName *string `pulumi:"resourceGroupName"`
	// The ID of the Storage Account used by this Log Analytics Storage Insights.
	StorageAccountId *string `pulumi:"storageAccountId"`
	// The storage access key to be used to connect to the storage account.
	StorageAccountKey *string `pulumi:"storageAccountKey"`
	// The names of the Azure tables that the workspace should read.
	TableNames []string `pulumi:"tableNames"`
	// A mapping of tags which should be assigned to the Log Analytics Storage Insights.
	Tags map[string]string `pulumi:"tags"`
	// The ID of the Log Analytics Workspace within which the Storage Insights should exist. Changing this forces a new Log Analytics Storage Insights to be created.
	WorkspaceId *string `pulumi:"workspaceId"`
}

type StorageInsightsState struct {
	// The names of the blob containers that the workspace should read.
	BlobContainerNames pulumi.StringArrayInput
	// The name which should be used for this Log Analytics Storage Insights. Changing this forces a new Log Analytics Storage Insights to be created.
	Name pulumi.StringPtrInput
	// The name of the Resource Group where the Log Analytics Storage Insights should exist. Changing this forces a new Log Analytics Storage Insights to be created.
	ResourceGroupName pulumi.StringPtrInput
	// The ID of the Storage Account used by this Log Analytics Storage Insights.
	StorageAccountId pulumi.StringPtrInput
	// The storage access key to be used to connect to the storage account.
	StorageAccountKey pulumi.StringPtrInput
	// The names of the Azure tables that the workspace should read.
	TableNames pulumi.StringArrayInput
	// A mapping of tags which should be assigned to the Log Analytics Storage Insights.
	Tags pulumi.StringMapInput
	// The ID of the Log Analytics Workspace within which the Storage Insights should exist. Changing this forces a new Log Analytics Storage Insights to be created.
	WorkspaceId pulumi.StringPtrInput
}

func (StorageInsightsState) ElementType() reflect.Type {
	return reflect.TypeOf((*storageInsightsState)(nil)).Elem()
}

type storageInsightsArgs struct {
	// The names of the blob containers that the workspace should read.
	BlobContainerNames []string `pulumi:"blobContainerNames"`
	// The name which should be used for this Log Analytics Storage Insights. Changing this forces a new Log Analytics Storage Insights to be created.
	Name *string `pulumi:"name"`
	// The name of the Resource Group where the Log Analytics Storage Insights should exist. Changing this forces a new Log Analytics Storage Insights to be created.
	ResourceGroupName string `pulumi:"resourceGroupName"`
	// The ID of the Storage Account used by this Log Analytics Storage Insights.
	StorageAccountId string `pulumi:"storageAccountId"`
	// The storage access key to be used to connect to the storage account.
	StorageAccountKey string `pulumi:"storageAccountKey"`
	// The names of the Azure tables that the workspace should read.
	TableNames []string `pulumi:"tableNames"`
	// A mapping of tags which should be assigned to the Log Analytics Storage Insights.
	Tags map[string]string `pulumi:"tags"`
	// The ID of the Log Analytics Workspace within which the Storage Insights should exist. Changing this forces a new Log Analytics Storage Insights to be created.
	WorkspaceId string `pulumi:"workspaceId"`
}

// The set of arguments for constructing a StorageInsights resource.
type StorageInsightsArgs struct {
	// The names of the blob containers that the workspace should read.
	BlobContainerNames pulumi.StringArrayInput
	// The name which should be used for this Log Analytics Storage Insights. Changing this forces a new Log Analytics Storage Insights to be created.
	Name pulumi.StringPtrInput
	// The name of the Resource Group where the Log Analytics Storage Insights should exist. Changing this forces a new Log Analytics Storage Insights to be created.
	ResourceGroupName pulumi.StringInput
	// The ID of the Storage Account used by this Log Analytics Storage Insights.
	StorageAccountId pulumi.StringInput
	// The storage access key to be used to connect to the storage account.
	StorageAccountKey pulumi.StringInput
	// The names of the Azure tables that the workspace should read.
	TableNames pulumi.StringArrayInput
	// A mapping of tags which should be assigned to the Log Analytics Storage Insights.
	Tags pulumi.StringMapInput
	// The ID of the Log Analytics Workspace within which the Storage Insights should exist. Changing this forces a new Log Analytics Storage Insights to be created.
	WorkspaceId pulumi.StringInput
}

func (StorageInsightsArgs) ElementType() reflect.Type {
	return reflect.TypeOf((*storageInsightsArgs)(nil)).Elem()
}

type StorageInsightsInput interface {
	pulumi.Input

	ToStorageInsightsOutput() StorageInsightsOutput
	ToStorageInsightsOutputWithContext(ctx context.Context) StorageInsightsOutput
}

func (StorageInsights) ElementType() reflect.Type {
	return reflect.TypeOf((*StorageInsights)(nil)).Elem()
}

func (i StorageInsights) ToStorageInsightsOutput() StorageInsightsOutput {
	return i.ToStorageInsightsOutputWithContext(context.Background())
}

func (i StorageInsights) ToStorageInsightsOutputWithContext(ctx context.Context) StorageInsightsOutput {
	return pulumi.ToOutputWithContext(ctx, i).(StorageInsightsOutput)
}

type StorageInsightsOutput struct {
	*pulumi.OutputState
}

func (StorageInsightsOutput) ElementType() reflect.Type {
	return reflect.TypeOf((*StorageInsightsOutput)(nil)).Elem()
}

func (o StorageInsightsOutput) ToStorageInsightsOutput() StorageInsightsOutput {
	return o
}

func (o StorageInsightsOutput) ToStorageInsightsOutputWithContext(ctx context.Context) StorageInsightsOutput {
	return o
}

func init() {
	pulumi.RegisterOutputType(StorageInsightsOutput{})
}
