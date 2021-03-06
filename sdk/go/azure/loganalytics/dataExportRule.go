// *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

package loganalytics

import (
	"context"
	"reflect"

	"github.com/pkg/errors"
	"github.com/pulumi/pulumi/sdk/v2/go/pulumi"
)

// Manages a Log Analytics Data Export Rule.
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
// 		_, err = loganalytics.NewDataExportRule(ctx, "exampleDataExportRule", &loganalytics.DataExportRuleArgs{
// 			ResourceGroupName:     exampleResourceGroup.Name,
// 			WorkspaceResourceId:   exampleAnalyticsWorkspace.ID(),
// 			DestinationResourceId: exampleAccount.ID(),
// 			TableNames: pulumi.StringArray{
// 				pulumi.String("Heartbeat"),
// 			},
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
// Log Analytics Data Export Rule can be imported using the `resource id`, e.g.
//
// ```sh
//  $ pulumi import azure:loganalytics/dataExportRule:DataExportRule example /subscriptions/00000000-0000-0000-0000-000000000000/resourcegroups/group1/providers/Microsoft.OperationalInsights/workspaces/workspace1/dataExports/dataExport1
// ```
type DataExportRule struct {
	pulumi.CustomResourceState

	// The destination resource ID. It should be a storage account, an event hub namespace or an event hub. If the destination is an event hub namespace, an event hub would be created for each table automatically.
	DestinationResourceId pulumi.StringOutput `pulumi:"destinationResourceId"`
	// Is this Log Analytics Data Export Rule when enabled? Possible values include `true` or `false`. Defaults to `false`.
	Enabled pulumi.BoolPtrOutput `pulumi:"enabled"`
	// The ID of the created Data Export Rule.
	ExportRuleId pulumi.StringOutput `pulumi:"exportRuleId"`
	// The name of the Log Analytics Data Export Rule. Changing this forces a new Log Analytics Data Export Rule to be created.
	Name pulumi.StringOutput `pulumi:"name"`
	// The name of the Resource Group where the Log Analytics Data Export should exist. Changing this forces a new Log Analytics Data Export Rule to be created.
	ResourceGroupName pulumi.StringOutput `pulumi:"resourceGroupName"`
	// A list of table names to export to the destination resource, for example: `["Heartbeat", "SecurityEvent"]`.
	TableNames pulumi.StringArrayOutput `pulumi:"tableNames"`
	// The resource ID of the workspace. Changing this forces a new Log Analytics Data Export Rule to be created.
	WorkspaceResourceId pulumi.StringOutput `pulumi:"workspaceResourceId"`
}

// NewDataExportRule registers a new resource with the given unique name, arguments, and options.
func NewDataExportRule(ctx *pulumi.Context,
	name string, args *DataExportRuleArgs, opts ...pulumi.ResourceOption) (*DataExportRule, error) {
	if args == nil || args.DestinationResourceId == nil {
		return nil, errors.New("missing required argument 'DestinationResourceId'")
	}
	if args == nil || args.ResourceGroupName == nil {
		return nil, errors.New("missing required argument 'ResourceGroupName'")
	}
	if args == nil || args.TableNames == nil {
		return nil, errors.New("missing required argument 'TableNames'")
	}
	if args == nil || args.WorkspaceResourceId == nil {
		return nil, errors.New("missing required argument 'WorkspaceResourceId'")
	}
	if args == nil {
		args = &DataExportRuleArgs{}
	}
	var resource DataExportRule
	err := ctx.RegisterResource("azure:loganalytics/dataExportRule:DataExportRule", name, args, &resource, opts...)
	if err != nil {
		return nil, err
	}
	return &resource, nil
}

// GetDataExportRule gets an existing DataExportRule resource's state with the given name, ID, and optional
// state properties that are used to uniquely qualify the lookup (nil if not required).
func GetDataExportRule(ctx *pulumi.Context,
	name string, id pulumi.IDInput, state *DataExportRuleState, opts ...pulumi.ResourceOption) (*DataExportRule, error) {
	var resource DataExportRule
	err := ctx.ReadResource("azure:loganalytics/dataExportRule:DataExportRule", name, id, state, &resource, opts...)
	if err != nil {
		return nil, err
	}
	return &resource, nil
}

// Input properties used for looking up and filtering DataExportRule resources.
type dataExportRuleState struct {
	// The destination resource ID. It should be a storage account, an event hub namespace or an event hub. If the destination is an event hub namespace, an event hub would be created for each table automatically.
	DestinationResourceId *string `pulumi:"destinationResourceId"`
	// Is this Log Analytics Data Export Rule when enabled? Possible values include `true` or `false`. Defaults to `false`.
	Enabled *bool `pulumi:"enabled"`
	// The ID of the created Data Export Rule.
	ExportRuleId *string `pulumi:"exportRuleId"`
	// The name of the Log Analytics Data Export Rule. Changing this forces a new Log Analytics Data Export Rule to be created.
	Name *string `pulumi:"name"`
	// The name of the Resource Group where the Log Analytics Data Export should exist. Changing this forces a new Log Analytics Data Export Rule to be created.
	ResourceGroupName *string `pulumi:"resourceGroupName"`
	// A list of table names to export to the destination resource, for example: `["Heartbeat", "SecurityEvent"]`.
	TableNames []string `pulumi:"tableNames"`
	// The resource ID of the workspace. Changing this forces a new Log Analytics Data Export Rule to be created.
	WorkspaceResourceId *string `pulumi:"workspaceResourceId"`
}

type DataExportRuleState struct {
	// The destination resource ID. It should be a storage account, an event hub namespace or an event hub. If the destination is an event hub namespace, an event hub would be created for each table automatically.
	DestinationResourceId pulumi.StringPtrInput
	// Is this Log Analytics Data Export Rule when enabled? Possible values include `true` or `false`. Defaults to `false`.
	Enabled pulumi.BoolPtrInput
	// The ID of the created Data Export Rule.
	ExportRuleId pulumi.StringPtrInput
	// The name of the Log Analytics Data Export Rule. Changing this forces a new Log Analytics Data Export Rule to be created.
	Name pulumi.StringPtrInput
	// The name of the Resource Group where the Log Analytics Data Export should exist. Changing this forces a new Log Analytics Data Export Rule to be created.
	ResourceGroupName pulumi.StringPtrInput
	// A list of table names to export to the destination resource, for example: `["Heartbeat", "SecurityEvent"]`.
	TableNames pulumi.StringArrayInput
	// The resource ID of the workspace. Changing this forces a new Log Analytics Data Export Rule to be created.
	WorkspaceResourceId pulumi.StringPtrInput
}

func (DataExportRuleState) ElementType() reflect.Type {
	return reflect.TypeOf((*dataExportRuleState)(nil)).Elem()
}

type dataExportRuleArgs struct {
	// The destination resource ID. It should be a storage account, an event hub namespace or an event hub. If the destination is an event hub namespace, an event hub would be created for each table automatically.
	DestinationResourceId string `pulumi:"destinationResourceId"`
	// Is this Log Analytics Data Export Rule when enabled? Possible values include `true` or `false`. Defaults to `false`.
	Enabled *bool `pulumi:"enabled"`
	// The name of the Log Analytics Data Export Rule. Changing this forces a new Log Analytics Data Export Rule to be created.
	Name *string `pulumi:"name"`
	// The name of the Resource Group where the Log Analytics Data Export should exist. Changing this forces a new Log Analytics Data Export Rule to be created.
	ResourceGroupName string `pulumi:"resourceGroupName"`
	// A list of table names to export to the destination resource, for example: `["Heartbeat", "SecurityEvent"]`.
	TableNames []string `pulumi:"tableNames"`
	// The resource ID of the workspace. Changing this forces a new Log Analytics Data Export Rule to be created.
	WorkspaceResourceId string `pulumi:"workspaceResourceId"`
}

// The set of arguments for constructing a DataExportRule resource.
type DataExportRuleArgs struct {
	// The destination resource ID. It should be a storage account, an event hub namespace or an event hub. If the destination is an event hub namespace, an event hub would be created for each table automatically.
	DestinationResourceId pulumi.StringInput
	// Is this Log Analytics Data Export Rule when enabled? Possible values include `true` or `false`. Defaults to `false`.
	Enabled pulumi.BoolPtrInput
	// The name of the Log Analytics Data Export Rule. Changing this forces a new Log Analytics Data Export Rule to be created.
	Name pulumi.StringPtrInput
	// The name of the Resource Group where the Log Analytics Data Export should exist. Changing this forces a new Log Analytics Data Export Rule to be created.
	ResourceGroupName pulumi.StringInput
	// A list of table names to export to the destination resource, for example: `["Heartbeat", "SecurityEvent"]`.
	TableNames pulumi.StringArrayInput
	// The resource ID of the workspace. Changing this forces a new Log Analytics Data Export Rule to be created.
	WorkspaceResourceId pulumi.StringInput
}

func (DataExportRuleArgs) ElementType() reflect.Type {
	return reflect.TypeOf((*dataExportRuleArgs)(nil)).Elem()
}

type DataExportRuleInput interface {
	pulumi.Input

	ToDataExportRuleOutput() DataExportRuleOutput
	ToDataExportRuleOutputWithContext(ctx context.Context) DataExportRuleOutput
}

func (DataExportRule) ElementType() reflect.Type {
	return reflect.TypeOf((*DataExportRule)(nil)).Elem()
}

func (i DataExportRule) ToDataExportRuleOutput() DataExportRuleOutput {
	return i.ToDataExportRuleOutputWithContext(context.Background())
}

func (i DataExportRule) ToDataExportRuleOutputWithContext(ctx context.Context) DataExportRuleOutput {
	return pulumi.ToOutputWithContext(ctx, i).(DataExportRuleOutput)
}

type DataExportRuleOutput struct {
	*pulumi.OutputState
}

func (DataExportRuleOutput) ElementType() reflect.Type {
	return reflect.TypeOf((*DataExportRuleOutput)(nil)).Elem()
}

func (o DataExportRuleOutput) ToDataExportRuleOutput() DataExportRuleOutput {
	return o
}

func (o DataExportRuleOutput) ToDataExportRuleOutputWithContext(ctx context.Context) DataExportRuleOutput {
	return o
}

func init() {
	pulumi.RegisterOutputType(DataExportRuleOutput{})
}
