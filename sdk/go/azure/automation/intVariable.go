// *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

package automation

import (
	"context"
	"reflect"

	"github.com/pkg/errors"
	"github.com/pulumi/pulumi/sdk/v2/go/pulumi"
)

// Manages a integer variable in Azure Automation
//
// ## Import
//
// Automation Int Variable can be imported using the `resource id`, e.g.
//
// ```sh
//  $ pulumi import azure:automation/intVariable:IntVariable example /subscriptions/00000000-0000-0000-0000-000000000000/resourceGroups/tfex-example-rg/providers/Microsoft.Automation/automationAccounts/tfex-example-account/variables/tfex-example-var
// ```
type IntVariable struct {
	pulumi.CustomResourceState

	// The name of the automation account in which the Variable is created. Changing this forces a new resource to be created.
	AutomationAccountName pulumi.StringOutput `pulumi:"automationAccountName"`
	// The description of the Automation Variable.
	Description pulumi.StringPtrOutput `pulumi:"description"`
	// Specifies if the Automation Variable is encrypted. Defaults to `false`.
	Encrypted pulumi.BoolPtrOutput `pulumi:"encrypted"`
	// The name of the Automation Variable. Changing this forces a new resource to be created.
	Name pulumi.StringOutput `pulumi:"name"`
	// The name of the resource group in which to create the Automation Variable. Changing this forces a new resource to be created.
	ResourceGroupName pulumi.StringOutput `pulumi:"resourceGroupName"`
	// The value of the Automation Variable as a `integer`.
	Value pulumi.IntPtrOutput `pulumi:"value"`
}

// NewIntVariable registers a new resource with the given unique name, arguments, and options.
func NewIntVariable(ctx *pulumi.Context,
	name string, args *IntVariableArgs, opts ...pulumi.ResourceOption) (*IntVariable, error) {
	if args == nil || args.AutomationAccountName == nil {
		return nil, errors.New("missing required argument 'AutomationAccountName'")
	}
	if args == nil || args.ResourceGroupName == nil {
		return nil, errors.New("missing required argument 'ResourceGroupName'")
	}
	if args == nil {
		args = &IntVariableArgs{}
	}
	var resource IntVariable
	err := ctx.RegisterResource("azure:automation/intVariable:IntVariable", name, args, &resource, opts...)
	if err != nil {
		return nil, err
	}
	return &resource, nil
}

// GetIntVariable gets an existing IntVariable resource's state with the given name, ID, and optional
// state properties that are used to uniquely qualify the lookup (nil if not required).
func GetIntVariable(ctx *pulumi.Context,
	name string, id pulumi.IDInput, state *IntVariableState, opts ...pulumi.ResourceOption) (*IntVariable, error) {
	var resource IntVariable
	err := ctx.ReadResource("azure:automation/intVariable:IntVariable", name, id, state, &resource, opts...)
	if err != nil {
		return nil, err
	}
	return &resource, nil
}

// Input properties used for looking up and filtering IntVariable resources.
type intVariableState struct {
	// The name of the automation account in which the Variable is created. Changing this forces a new resource to be created.
	AutomationAccountName *string `pulumi:"automationAccountName"`
	// The description of the Automation Variable.
	Description *string `pulumi:"description"`
	// Specifies if the Automation Variable is encrypted. Defaults to `false`.
	Encrypted *bool `pulumi:"encrypted"`
	// The name of the Automation Variable. Changing this forces a new resource to be created.
	Name *string `pulumi:"name"`
	// The name of the resource group in which to create the Automation Variable. Changing this forces a new resource to be created.
	ResourceGroupName *string `pulumi:"resourceGroupName"`
	// The value of the Automation Variable as a `integer`.
	Value *int `pulumi:"value"`
}

type IntVariableState struct {
	// The name of the automation account in which the Variable is created. Changing this forces a new resource to be created.
	AutomationAccountName pulumi.StringPtrInput
	// The description of the Automation Variable.
	Description pulumi.StringPtrInput
	// Specifies if the Automation Variable is encrypted. Defaults to `false`.
	Encrypted pulumi.BoolPtrInput
	// The name of the Automation Variable. Changing this forces a new resource to be created.
	Name pulumi.StringPtrInput
	// The name of the resource group in which to create the Automation Variable. Changing this forces a new resource to be created.
	ResourceGroupName pulumi.StringPtrInput
	// The value of the Automation Variable as a `integer`.
	Value pulumi.IntPtrInput
}

func (IntVariableState) ElementType() reflect.Type {
	return reflect.TypeOf((*intVariableState)(nil)).Elem()
}

type intVariableArgs struct {
	// The name of the automation account in which the Variable is created. Changing this forces a new resource to be created.
	AutomationAccountName string `pulumi:"automationAccountName"`
	// The description of the Automation Variable.
	Description *string `pulumi:"description"`
	// Specifies if the Automation Variable is encrypted. Defaults to `false`.
	Encrypted *bool `pulumi:"encrypted"`
	// The name of the Automation Variable. Changing this forces a new resource to be created.
	Name *string `pulumi:"name"`
	// The name of the resource group in which to create the Automation Variable. Changing this forces a new resource to be created.
	ResourceGroupName string `pulumi:"resourceGroupName"`
	// The value of the Automation Variable as a `integer`.
	Value *int `pulumi:"value"`
}

// The set of arguments for constructing a IntVariable resource.
type IntVariableArgs struct {
	// The name of the automation account in which the Variable is created. Changing this forces a new resource to be created.
	AutomationAccountName pulumi.StringInput
	// The description of the Automation Variable.
	Description pulumi.StringPtrInput
	// Specifies if the Automation Variable is encrypted. Defaults to `false`.
	Encrypted pulumi.BoolPtrInput
	// The name of the Automation Variable. Changing this forces a new resource to be created.
	Name pulumi.StringPtrInput
	// The name of the resource group in which to create the Automation Variable. Changing this forces a new resource to be created.
	ResourceGroupName pulumi.StringInput
	// The value of the Automation Variable as a `integer`.
	Value pulumi.IntPtrInput
}

func (IntVariableArgs) ElementType() reflect.Type {
	return reflect.TypeOf((*intVariableArgs)(nil)).Elem()
}

type IntVariableInput interface {
	pulumi.Input

	ToIntVariableOutput() IntVariableOutput
	ToIntVariableOutputWithContext(ctx context.Context) IntVariableOutput
}

func (IntVariable) ElementType() reflect.Type {
	return reflect.TypeOf((*IntVariable)(nil)).Elem()
}

func (i IntVariable) ToIntVariableOutput() IntVariableOutput {
	return i.ToIntVariableOutputWithContext(context.Background())
}

func (i IntVariable) ToIntVariableOutputWithContext(ctx context.Context) IntVariableOutput {
	return pulumi.ToOutputWithContext(ctx, i).(IntVariableOutput)
}

type IntVariableOutput struct {
	*pulumi.OutputState
}

func (IntVariableOutput) ElementType() reflect.Type {
	return reflect.TypeOf((*IntVariableOutput)(nil)).Elem()
}

func (o IntVariableOutput) ToIntVariableOutput() IntVariableOutput {
	return o
}

func (o IntVariableOutput) ToIntVariableOutputWithContext(ctx context.Context) IntVariableOutput {
	return o
}

func init() {
	pulumi.RegisterOutputType(IntVariableOutput{})
}
