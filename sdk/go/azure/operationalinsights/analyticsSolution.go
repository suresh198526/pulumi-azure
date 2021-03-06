// *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

package operationalinsights

import (
	"context"
	"reflect"

	"github.com/pkg/errors"
	"github.com/pulumi/pulumi/sdk/v2/go/pulumi"
)

// Manages a Log Analytics (formally Operational Insights) Solution.
//
// ## Example Usage
//
// ```go
// package main
//
// import (
// 	"github.com/pulumi/pulumi-azure/sdk/v3/go/azure/core"
// 	"github.com/pulumi/pulumi-azure/sdk/v3/go/azure/operationalinsights"
// 	"github.com/pulumi/pulumi-random/sdk/v2/go/random"
// 	"github.com/pulumi/pulumi/sdk/v2/go/pulumi"
// )
//
// func main() {
// 	pulumi.Run(func(ctx *pulumi.Context) error {
// 		exampleResourceGroup, err := core.NewResourceGroup(ctx, "exampleResourceGroup", &core.ResourceGroupArgs{
// 			Location: pulumi.String("westeurope"),
// 		})
// 		if err != nil {
// 			return err
// 		}
// 		_, err = random.NewRandomId(ctx, "workspace", &random.RandomIdArgs{
// 			Keepers: pulumi.StringMap{
// 				"group_name": exampleResourceGroup.Name,
// 			},
// 			ByteLength: pulumi.Int(8),
// 		})
// 		if err != nil {
// 			return err
// 		}
// 		exampleAnalyticsWorkspace, err := operationalinsights.NewAnalyticsWorkspace(ctx, "exampleAnalyticsWorkspace", &operationalinsights.AnalyticsWorkspaceArgs{
// 			Location:          exampleResourceGroup.Location,
// 			ResourceGroupName: exampleResourceGroup.Name,
// 			Sku:               pulumi.String("PerGB2018"),
// 		})
// 		if err != nil {
// 			return err
// 		}
// 		_, err = operationalinsights.NewAnalyticsSolution(ctx, "exampleAnalyticsSolution", &operationalinsights.AnalyticsSolutionArgs{
// 			SolutionName:        pulumi.String("ContainerInsights"),
// 			Location:            exampleResourceGroup.Location,
// 			ResourceGroupName:   exampleResourceGroup.Name,
// 			WorkspaceResourceId: exampleAnalyticsWorkspace.ID(),
// 			WorkspaceName:       exampleAnalyticsWorkspace.Name,
// 			Plan: &operationalinsights.AnalyticsSolutionPlanArgs{
// 				Publisher: pulumi.String("Microsoft"),
// 				Product:   pulumi.String("OMSGallery/ContainerInsights"),
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
// Log Analytics Solutions can be imported using the `resource id`, e.g.
//
// ```sh
//  $ pulumi import azure:operationalinsights/analyticsSolution:AnalyticsSolution solution1 /subscriptions/00000000-0000-0000-0000-000000000000/resourceGroups/mygroup1/providers/Microsoft.OperationsManagement/solutions/solution1
// ```
type AnalyticsSolution struct {
	pulumi.CustomResourceState

	// Specifies the supported Azure location where the resource exists. Changing this forces a new resource to be created.
	Location pulumi.StringOutput `pulumi:"location"`
	// A `plan` block as documented below.
	Plan AnalyticsSolutionPlanOutput `pulumi:"plan"`
	// The name of the resource group in which the Log Analytics solution is created. Changing this forces a new resource to be created. Note: The solution and its related workspace can only exist in the same resource group.
	ResourceGroupName pulumi.StringOutput `pulumi:"resourceGroupName"`
	// Specifies the name of the solution to be deployed. See [here for options](https://docs.microsoft.com/en-us/azure/log-analytics/log-analytics-add-solutions).Changing this forces a new resource to be created.
	SolutionName pulumi.StringOutput `pulumi:"solutionName"`
	// A mapping of tags to assign to the resource.
	Tags pulumi.StringMapOutput `pulumi:"tags"`
	// The full name of the Log Analytics workspace with which the solution will be linked. Changing this forces a new resource to be created.
	WorkspaceName pulumi.StringOutput `pulumi:"workspaceName"`
	// The full resource ID of the Log Analytics workspace with which the solution will be linked. Changing this forces a new resource to be created.
	WorkspaceResourceId pulumi.StringOutput `pulumi:"workspaceResourceId"`
}

// NewAnalyticsSolution registers a new resource with the given unique name, arguments, and options.
func NewAnalyticsSolution(ctx *pulumi.Context,
	name string, args *AnalyticsSolutionArgs, opts ...pulumi.ResourceOption) (*AnalyticsSolution, error) {
	if args == nil || args.Plan == nil {
		return nil, errors.New("missing required argument 'Plan'")
	}
	if args == nil || args.ResourceGroupName == nil {
		return nil, errors.New("missing required argument 'ResourceGroupName'")
	}
	if args == nil || args.SolutionName == nil {
		return nil, errors.New("missing required argument 'SolutionName'")
	}
	if args == nil || args.WorkspaceName == nil {
		return nil, errors.New("missing required argument 'WorkspaceName'")
	}
	if args == nil || args.WorkspaceResourceId == nil {
		return nil, errors.New("missing required argument 'WorkspaceResourceId'")
	}
	if args == nil {
		args = &AnalyticsSolutionArgs{}
	}
	var resource AnalyticsSolution
	err := ctx.RegisterResource("azure:operationalinsights/analyticsSolution:AnalyticsSolution", name, args, &resource, opts...)
	if err != nil {
		return nil, err
	}
	return &resource, nil
}

// GetAnalyticsSolution gets an existing AnalyticsSolution resource's state with the given name, ID, and optional
// state properties that are used to uniquely qualify the lookup (nil if not required).
func GetAnalyticsSolution(ctx *pulumi.Context,
	name string, id pulumi.IDInput, state *AnalyticsSolutionState, opts ...pulumi.ResourceOption) (*AnalyticsSolution, error) {
	var resource AnalyticsSolution
	err := ctx.ReadResource("azure:operationalinsights/analyticsSolution:AnalyticsSolution", name, id, state, &resource, opts...)
	if err != nil {
		return nil, err
	}
	return &resource, nil
}

// Input properties used for looking up and filtering AnalyticsSolution resources.
type analyticsSolutionState struct {
	// Specifies the supported Azure location where the resource exists. Changing this forces a new resource to be created.
	Location *string `pulumi:"location"`
	// A `plan` block as documented below.
	Plan *AnalyticsSolutionPlan `pulumi:"plan"`
	// The name of the resource group in which the Log Analytics solution is created. Changing this forces a new resource to be created. Note: The solution and its related workspace can only exist in the same resource group.
	ResourceGroupName *string `pulumi:"resourceGroupName"`
	// Specifies the name of the solution to be deployed. See [here for options](https://docs.microsoft.com/en-us/azure/log-analytics/log-analytics-add-solutions).Changing this forces a new resource to be created.
	SolutionName *string `pulumi:"solutionName"`
	// A mapping of tags to assign to the resource.
	Tags map[string]string `pulumi:"tags"`
	// The full name of the Log Analytics workspace with which the solution will be linked. Changing this forces a new resource to be created.
	WorkspaceName *string `pulumi:"workspaceName"`
	// The full resource ID of the Log Analytics workspace with which the solution will be linked. Changing this forces a new resource to be created.
	WorkspaceResourceId *string `pulumi:"workspaceResourceId"`
}

type AnalyticsSolutionState struct {
	// Specifies the supported Azure location where the resource exists. Changing this forces a new resource to be created.
	Location pulumi.StringPtrInput
	// A `plan` block as documented below.
	Plan AnalyticsSolutionPlanPtrInput
	// The name of the resource group in which the Log Analytics solution is created. Changing this forces a new resource to be created. Note: The solution and its related workspace can only exist in the same resource group.
	ResourceGroupName pulumi.StringPtrInput
	// Specifies the name of the solution to be deployed. See [here for options](https://docs.microsoft.com/en-us/azure/log-analytics/log-analytics-add-solutions).Changing this forces a new resource to be created.
	SolutionName pulumi.StringPtrInput
	// A mapping of tags to assign to the resource.
	Tags pulumi.StringMapInput
	// The full name of the Log Analytics workspace with which the solution will be linked. Changing this forces a new resource to be created.
	WorkspaceName pulumi.StringPtrInput
	// The full resource ID of the Log Analytics workspace with which the solution will be linked. Changing this forces a new resource to be created.
	WorkspaceResourceId pulumi.StringPtrInput
}

func (AnalyticsSolutionState) ElementType() reflect.Type {
	return reflect.TypeOf((*analyticsSolutionState)(nil)).Elem()
}

type analyticsSolutionArgs struct {
	// Specifies the supported Azure location where the resource exists. Changing this forces a new resource to be created.
	Location *string `pulumi:"location"`
	// A `plan` block as documented below.
	Plan AnalyticsSolutionPlan `pulumi:"plan"`
	// The name of the resource group in which the Log Analytics solution is created. Changing this forces a new resource to be created. Note: The solution and its related workspace can only exist in the same resource group.
	ResourceGroupName string `pulumi:"resourceGroupName"`
	// Specifies the name of the solution to be deployed. See [here for options](https://docs.microsoft.com/en-us/azure/log-analytics/log-analytics-add-solutions).Changing this forces a new resource to be created.
	SolutionName string `pulumi:"solutionName"`
	// A mapping of tags to assign to the resource.
	Tags map[string]string `pulumi:"tags"`
	// The full name of the Log Analytics workspace with which the solution will be linked. Changing this forces a new resource to be created.
	WorkspaceName string `pulumi:"workspaceName"`
	// The full resource ID of the Log Analytics workspace with which the solution will be linked. Changing this forces a new resource to be created.
	WorkspaceResourceId string `pulumi:"workspaceResourceId"`
}

// The set of arguments for constructing a AnalyticsSolution resource.
type AnalyticsSolutionArgs struct {
	// Specifies the supported Azure location where the resource exists. Changing this forces a new resource to be created.
	Location pulumi.StringPtrInput
	// A `plan` block as documented below.
	Plan AnalyticsSolutionPlanInput
	// The name of the resource group in which the Log Analytics solution is created. Changing this forces a new resource to be created. Note: The solution and its related workspace can only exist in the same resource group.
	ResourceGroupName pulumi.StringInput
	// Specifies the name of the solution to be deployed. See [here for options](https://docs.microsoft.com/en-us/azure/log-analytics/log-analytics-add-solutions).Changing this forces a new resource to be created.
	SolutionName pulumi.StringInput
	// A mapping of tags to assign to the resource.
	Tags pulumi.StringMapInput
	// The full name of the Log Analytics workspace with which the solution will be linked. Changing this forces a new resource to be created.
	WorkspaceName pulumi.StringInput
	// The full resource ID of the Log Analytics workspace with which the solution will be linked. Changing this forces a new resource to be created.
	WorkspaceResourceId pulumi.StringInput
}

func (AnalyticsSolutionArgs) ElementType() reflect.Type {
	return reflect.TypeOf((*analyticsSolutionArgs)(nil)).Elem()
}

type AnalyticsSolutionInput interface {
	pulumi.Input

	ToAnalyticsSolutionOutput() AnalyticsSolutionOutput
	ToAnalyticsSolutionOutputWithContext(ctx context.Context) AnalyticsSolutionOutput
}

func (AnalyticsSolution) ElementType() reflect.Type {
	return reflect.TypeOf((*AnalyticsSolution)(nil)).Elem()
}

func (i AnalyticsSolution) ToAnalyticsSolutionOutput() AnalyticsSolutionOutput {
	return i.ToAnalyticsSolutionOutputWithContext(context.Background())
}

func (i AnalyticsSolution) ToAnalyticsSolutionOutputWithContext(ctx context.Context) AnalyticsSolutionOutput {
	return pulumi.ToOutputWithContext(ctx, i).(AnalyticsSolutionOutput)
}

type AnalyticsSolutionOutput struct {
	*pulumi.OutputState
}

func (AnalyticsSolutionOutput) ElementType() reflect.Type {
	return reflect.TypeOf((*AnalyticsSolutionOutput)(nil)).Elem()
}

func (o AnalyticsSolutionOutput) ToAnalyticsSolutionOutput() AnalyticsSolutionOutput {
	return o
}

func (o AnalyticsSolutionOutput) ToAnalyticsSolutionOutputWithContext(ctx context.Context) AnalyticsSolutionOutput {
	return o
}

func init() {
	pulumi.RegisterOutputType(AnalyticsSolutionOutput{})
}
