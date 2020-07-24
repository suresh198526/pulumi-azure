// *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

package synapse

import (
	"context"
	"reflect"

	"github.com/pulumi/pulumi/sdk/v2/go/pulumi"
)

type WorkspaceAadAdmin struct {
	// The login name of the Azure AD Administrator of this Synapse Workspace.
	Login string `pulumi:"login"`
	// The object id of the Azure AD Administrator of this Synapse Workspace.
	ObjectId string `pulumi:"objectId"`
	// The tenant id of the Azure AD Administrator of this Synapse Workspace.
	TenantId string `pulumi:"tenantId"`
}

// WorkspaceAadAdminInput is an input type that accepts WorkspaceAadAdminArgs and WorkspaceAadAdminOutput values.
// You can construct a concrete instance of `WorkspaceAadAdminInput` via:
//
//          WorkspaceAadAdminArgs{...}
type WorkspaceAadAdminInput interface {
	pulumi.Input

	ToWorkspaceAadAdminOutput() WorkspaceAadAdminOutput
	ToWorkspaceAadAdminOutputWithContext(context.Context) WorkspaceAadAdminOutput
}

type WorkspaceAadAdminArgs struct {
	// The login name of the Azure AD Administrator of this Synapse Workspace.
	Login pulumi.StringInput `pulumi:"login"`
	// The object id of the Azure AD Administrator of this Synapse Workspace.
	ObjectId pulumi.StringInput `pulumi:"objectId"`
	// The tenant id of the Azure AD Administrator of this Synapse Workspace.
	TenantId pulumi.StringInput `pulumi:"tenantId"`
}

func (WorkspaceAadAdminArgs) ElementType() reflect.Type {
	return reflect.TypeOf((*WorkspaceAadAdmin)(nil)).Elem()
}

func (i WorkspaceAadAdminArgs) ToWorkspaceAadAdminOutput() WorkspaceAadAdminOutput {
	return i.ToWorkspaceAadAdminOutputWithContext(context.Background())
}

func (i WorkspaceAadAdminArgs) ToWorkspaceAadAdminOutputWithContext(ctx context.Context) WorkspaceAadAdminOutput {
	return pulumi.ToOutputWithContext(ctx, i).(WorkspaceAadAdminOutput)
}

func (i WorkspaceAadAdminArgs) ToWorkspaceAadAdminPtrOutput() WorkspaceAadAdminPtrOutput {
	return i.ToWorkspaceAadAdminPtrOutputWithContext(context.Background())
}

func (i WorkspaceAadAdminArgs) ToWorkspaceAadAdminPtrOutputWithContext(ctx context.Context) WorkspaceAadAdminPtrOutput {
	return pulumi.ToOutputWithContext(ctx, i).(WorkspaceAadAdminOutput).ToWorkspaceAadAdminPtrOutputWithContext(ctx)
}

// WorkspaceAadAdminPtrInput is an input type that accepts WorkspaceAadAdminArgs, WorkspaceAadAdminPtr and WorkspaceAadAdminPtrOutput values.
// You can construct a concrete instance of `WorkspaceAadAdminPtrInput` via:
//
//          WorkspaceAadAdminArgs{...}
//
//  or:
//
//          nil
type WorkspaceAadAdminPtrInput interface {
	pulumi.Input

	ToWorkspaceAadAdminPtrOutput() WorkspaceAadAdminPtrOutput
	ToWorkspaceAadAdminPtrOutputWithContext(context.Context) WorkspaceAadAdminPtrOutput
}

type workspaceAadAdminPtrType WorkspaceAadAdminArgs

func WorkspaceAadAdminPtr(v *WorkspaceAadAdminArgs) WorkspaceAadAdminPtrInput {
	return (*workspaceAadAdminPtrType)(v)
}

func (*workspaceAadAdminPtrType) ElementType() reflect.Type {
	return reflect.TypeOf((**WorkspaceAadAdmin)(nil)).Elem()
}

func (i *workspaceAadAdminPtrType) ToWorkspaceAadAdminPtrOutput() WorkspaceAadAdminPtrOutput {
	return i.ToWorkspaceAadAdminPtrOutputWithContext(context.Background())
}

func (i *workspaceAadAdminPtrType) ToWorkspaceAadAdminPtrOutputWithContext(ctx context.Context) WorkspaceAadAdminPtrOutput {
	return pulumi.ToOutputWithContext(ctx, i).(WorkspaceAadAdminPtrOutput)
}

type WorkspaceAadAdminOutput struct{ *pulumi.OutputState }

func (WorkspaceAadAdminOutput) ElementType() reflect.Type {
	return reflect.TypeOf((*WorkspaceAadAdmin)(nil)).Elem()
}

func (o WorkspaceAadAdminOutput) ToWorkspaceAadAdminOutput() WorkspaceAadAdminOutput {
	return o
}

func (o WorkspaceAadAdminOutput) ToWorkspaceAadAdminOutputWithContext(ctx context.Context) WorkspaceAadAdminOutput {
	return o
}

func (o WorkspaceAadAdminOutput) ToWorkspaceAadAdminPtrOutput() WorkspaceAadAdminPtrOutput {
	return o.ToWorkspaceAadAdminPtrOutputWithContext(context.Background())
}

func (o WorkspaceAadAdminOutput) ToWorkspaceAadAdminPtrOutputWithContext(ctx context.Context) WorkspaceAadAdminPtrOutput {
	return o.ApplyT(func(v WorkspaceAadAdmin) *WorkspaceAadAdmin {
		return &v
	}).(WorkspaceAadAdminPtrOutput)
}

// The login name of the Azure AD Administrator of this Synapse Workspace.
func (o WorkspaceAadAdminOutput) Login() pulumi.StringOutput {
	return o.ApplyT(func(v WorkspaceAadAdmin) string { return v.Login }).(pulumi.StringOutput)
}

// The object id of the Azure AD Administrator of this Synapse Workspace.
func (o WorkspaceAadAdminOutput) ObjectId() pulumi.StringOutput {
	return o.ApplyT(func(v WorkspaceAadAdmin) string { return v.ObjectId }).(pulumi.StringOutput)
}

// The tenant id of the Azure AD Administrator of this Synapse Workspace.
func (o WorkspaceAadAdminOutput) TenantId() pulumi.StringOutput {
	return o.ApplyT(func(v WorkspaceAadAdmin) string { return v.TenantId }).(pulumi.StringOutput)
}

type WorkspaceAadAdminPtrOutput struct{ *pulumi.OutputState }

func (WorkspaceAadAdminPtrOutput) ElementType() reflect.Type {
	return reflect.TypeOf((**WorkspaceAadAdmin)(nil)).Elem()
}

func (o WorkspaceAadAdminPtrOutput) ToWorkspaceAadAdminPtrOutput() WorkspaceAadAdminPtrOutput {
	return o
}

func (o WorkspaceAadAdminPtrOutput) ToWorkspaceAadAdminPtrOutputWithContext(ctx context.Context) WorkspaceAadAdminPtrOutput {
	return o
}

func (o WorkspaceAadAdminPtrOutput) Elem() WorkspaceAadAdminOutput {
	return o.ApplyT(func(v *WorkspaceAadAdmin) WorkspaceAadAdmin { return *v }).(WorkspaceAadAdminOutput)
}

// The login name of the Azure AD Administrator of this Synapse Workspace.
func (o WorkspaceAadAdminPtrOutput) Login() pulumi.StringPtrOutput {
	return o.ApplyT(func(v *WorkspaceAadAdmin) *string {
		if v == nil {
			return nil
		}
		return &v.Login
	}).(pulumi.StringPtrOutput)
}

// The object id of the Azure AD Administrator of this Synapse Workspace.
func (o WorkspaceAadAdminPtrOutput) ObjectId() pulumi.StringPtrOutput {
	return o.ApplyT(func(v *WorkspaceAadAdmin) *string {
		if v == nil {
			return nil
		}
		return &v.ObjectId
	}).(pulumi.StringPtrOutput)
}

// The tenant id of the Azure AD Administrator of this Synapse Workspace.
func (o WorkspaceAadAdminPtrOutput) TenantId() pulumi.StringPtrOutput {
	return o.ApplyT(func(v *WorkspaceAadAdmin) *string {
		if v == nil {
			return nil
		}
		return &v.TenantId
	}).(pulumi.StringPtrOutput)
}

type WorkspaceIdentity struct {
	// The Principal ID for the Service Principal associated with the Managed Service Identity of this Synapse Workspace.
	PrincipalId *string `pulumi:"principalId"`
	// The tenant id of the Azure AD Administrator of this Synapse Workspace.
	TenantId *string `pulumi:"tenantId"`
	// The Identity Type for the Service Principal associated with the Managed Service Identity of this Synapse Workspace.
	Type *string `pulumi:"type"`
}

// WorkspaceIdentityInput is an input type that accepts WorkspaceIdentityArgs and WorkspaceIdentityOutput values.
// You can construct a concrete instance of `WorkspaceIdentityInput` via:
//
//          WorkspaceIdentityArgs{...}
type WorkspaceIdentityInput interface {
	pulumi.Input

	ToWorkspaceIdentityOutput() WorkspaceIdentityOutput
	ToWorkspaceIdentityOutputWithContext(context.Context) WorkspaceIdentityOutput
}

type WorkspaceIdentityArgs struct {
	// The Principal ID for the Service Principal associated with the Managed Service Identity of this Synapse Workspace.
	PrincipalId pulumi.StringPtrInput `pulumi:"principalId"`
	// The tenant id of the Azure AD Administrator of this Synapse Workspace.
	TenantId pulumi.StringPtrInput `pulumi:"tenantId"`
	// The Identity Type for the Service Principal associated with the Managed Service Identity of this Synapse Workspace.
	Type pulumi.StringPtrInput `pulumi:"type"`
}

func (WorkspaceIdentityArgs) ElementType() reflect.Type {
	return reflect.TypeOf((*WorkspaceIdentity)(nil)).Elem()
}

func (i WorkspaceIdentityArgs) ToWorkspaceIdentityOutput() WorkspaceIdentityOutput {
	return i.ToWorkspaceIdentityOutputWithContext(context.Background())
}

func (i WorkspaceIdentityArgs) ToWorkspaceIdentityOutputWithContext(ctx context.Context) WorkspaceIdentityOutput {
	return pulumi.ToOutputWithContext(ctx, i).(WorkspaceIdentityOutput)
}

// WorkspaceIdentityArrayInput is an input type that accepts WorkspaceIdentityArray and WorkspaceIdentityArrayOutput values.
// You can construct a concrete instance of `WorkspaceIdentityArrayInput` via:
//
//          WorkspaceIdentityArray{ WorkspaceIdentityArgs{...} }
type WorkspaceIdentityArrayInput interface {
	pulumi.Input

	ToWorkspaceIdentityArrayOutput() WorkspaceIdentityArrayOutput
	ToWorkspaceIdentityArrayOutputWithContext(context.Context) WorkspaceIdentityArrayOutput
}

type WorkspaceIdentityArray []WorkspaceIdentityInput

func (WorkspaceIdentityArray) ElementType() reflect.Type {
	return reflect.TypeOf((*[]WorkspaceIdentity)(nil)).Elem()
}

func (i WorkspaceIdentityArray) ToWorkspaceIdentityArrayOutput() WorkspaceIdentityArrayOutput {
	return i.ToWorkspaceIdentityArrayOutputWithContext(context.Background())
}

func (i WorkspaceIdentityArray) ToWorkspaceIdentityArrayOutputWithContext(ctx context.Context) WorkspaceIdentityArrayOutput {
	return pulumi.ToOutputWithContext(ctx, i).(WorkspaceIdentityArrayOutput)
}

type WorkspaceIdentityOutput struct{ *pulumi.OutputState }

func (WorkspaceIdentityOutput) ElementType() reflect.Type {
	return reflect.TypeOf((*WorkspaceIdentity)(nil)).Elem()
}

func (o WorkspaceIdentityOutput) ToWorkspaceIdentityOutput() WorkspaceIdentityOutput {
	return o
}

func (o WorkspaceIdentityOutput) ToWorkspaceIdentityOutputWithContext(ctx context.Context) WorkspaceIdentityOutput {
	return o
}

// The Principal ID for the Service Principal associated with the Managed Service Identity of this Synapse Workspace.
func (o WorkspaceIdentityOutput) PrincipalId() pulumi.StringPtrOutput {
	return o.ApplyT(func(v WorkspaceIdentity) *string { return v.PrincipalId }).(pulumi.StringPtrOutput)
}

// The tenant id of the Azure AD Administrator of this Synapse Workspace.
func (o WorkspaceIdentityOutput) TenantId() pulumi.StringPtrOutput {
	return o.ApplyT(func(v WorkspaceIdentity) *string { return v.TenantId }).(pulumi.StringPtrOutput)
}

// The Identity Type for the Service Principal associated with the Managed Service Identity of this Synapse Workspace.
func (o WorkspaceIdentityOutput) Type() pulumi.StringPtrOutput {
	return o.ApplyT(func(v WorkspaceIdentity) *string { return v.Type }).(pulumi.StringPtrOutput)
}

type WorkspaceIdentityArrayOutput struct{ *pulumi.OutputState }

func (WorkspaceIdentityArrayOutput) ElementType() reflect.Type {
	return reflect.TypeOf((*[]WorkspaceIdentity)(nil)).Elem()
}

func (o WorkspaceIdentityArrayOutput) ToWorkspaceIdentityArrayOutput() WorkspaceIdentityArrayOutput {
	return o
}

func (o WorkspaceIdentityArrayOutput) ToWorkspaceIdentityArrayOutputWithContext(ctx context.Context) WorkspaceIdentityArrayOutput {
	return o
}

func (o WorkspaceIdentityArrayOutput) Index(i pulumi.IntInput) WorkspaceIdentityOutput {
	return pulumi.All(o, i).ApplyT(func(vs []interface{}) WorkspaceIdentity {
		return vs[0].([]WorkspaceIdentity)[vs[1].(int)]
	}).(WorkspaceIdentityOutput)
}

func init() {
	pulumi.RegisterOutputType(WorkspaceAadAdminOutput{})
	pulumi.RegisterOutputType(WorkspaceAadAdminPtrOutput{})
	pulumi.RegisterOutputType(WorkspaceIdentityOutput{})
	pulumi.RegisterOutputType(WorkspaceIdentityArrayOutput{})
}