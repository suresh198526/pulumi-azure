// *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

// nolint: lll
package costmanagement

import (
	"context"
	"reflect"

	"github.com/pulumi/pulumi/sdk/go/pulumi"
)

type ResourceGroupExportDeliveryInfo struct {
	ContainerName string `pulumi:"containerName"`
	RootFolderPath string `pulumi:"rootFolderPath"`
	StorageAccountId string `pulumi:"storageAccountId"`
}

type ResourceGroupExportDeliveryInfoInput interface {
	pulumi.Input

	ToResourceGroupExportDeliveryInfoOutput() ResourceGroupExportDeliveryInfoOutput
	ToResourceGroupExportDeliveryInfoOutputWithContext(context.Context) ResourceGroupExportDeliveryInfoOutput
}

type ResourceGroupExportDeliveryInfoArgs struct {
	ContainerName pulumi.StringInput `pulumi:"containerName"`
	RootFolderPath pulumi.StringInput `pulumi:"rootFolderPath"`
	StorageAccountId pulumi.StringInput `pulumi:"storageAccountId"`
}

func (ResourceGroupExportDeliveryInfoArgs) ElementType() reflect.Type {
	return reflect.TypeOf((*ResourceGroupExportDeliveryInfo)(nil)).Elem()
}

func (i ResourceGroupExportDeliveryInfoArgs) ToResourceGroupExportDeliveryInfoOutput() ResourceGroupExportDeliveryInfoOutput {
	return i.ToResourceGroupExportDeliveryInfoOutputWithContext(context.Background())
}

func (i ResourceGroupExportDeliveryInfoArgs) ToResourceGroupExportDeliveryInfoOutputWithContext(ctx context.Context) ResourceGroupExportDeliveryInfoOutput {
	return pulumi.ToOutputWithContext(ctx, i).(ResourceGroupExportDeliveryInfoOutput)
}

func (i ResourceGroupExportDeliveryInfoArgs) ToResourceGroupExportDeliveryInfoPtrOutput() ResourceGroupExportDeliveryInfoPtrOutput {
	return i.ToResourceGroupExportDeliveryInfoPtrOutputWithContext(context.Background())
}

func (i ResourceGroupExportDeliveryInfoArgs) ToResourceGroupExportDeliveryInfoPtrOutputWithContext(ctx context.Context) ResourceGroupExportDeliveryInfoPtrOutput {
	return pulumi.ToOutputWithContext(ctx, i).(ResourceGroupExportDeliveryInfoOutput).ToResourceGroupExportDeliveryInfoPtrOutputWithContext(ctx)
}

type ResourceGroupExportDeliveryInfoPtrInput interface {
	pulumi.Input

	ToResourceGroupExportDeliveryInfoPtrOutput() ResourceGroupExportDeliveryInfoPtrOutput
	ToResourceGroupExportDeliveryInfoPtrOutputWithContext(context.Context) ResourceGroupExportDeliveryInfoPtrOutput
}

type resourceGroupExportDeliveryInfoPtrType ResourceGroupExportDeliveryInfoArgs

func ResourceGroupExportDeliveryInfoPtr(v *ResourceGroupExportDeliveryInfoArgs) ResourceGroupExportDeliveryInfoPtrInput {	return (*resourceGroupExportDeliveryInfoPtrType)(v)
}

func (*resourceGroupExportDeliveryInfoPtrType) ElementType() reflect.Type {
	return reflect.TypeOf((**ResourceGroupExportDeliveryInfo)(nil)).Elem()
}

func (i *resourceGroupExportDeliveryInfoPtrType) ToResourceGroupExportDeliveryInfoPtrOutput() ResourceGroupExportDeliveryInfoPtrOutput {
	return i.ToResourceGroupExportDeliveryInfoPtrOutputWithContext(context.Background())
}

func (i *resourceGroupExportDeliveryInfoPtrType) ToResourceGroupExportDeliveryInfoPtrOutputWithContext(ctx context.Context) ResourceGroupExportDeliveryInfoPtrOutput {
	return pulumi.ToOutputWithContext(ctx, i).(ResourceGroupExportDeliveryInfoPtrOutput)
}

type ResourceGroupExportDeliveryInfoOutput struct { *pulumi.OutputState }

func (ResourceGroupExportDeliveryInfoOutput) ElementType() reflect.Type {
	return reflect.TypeOf((*ResourceGroupExportDeliveryInfo)(nil)).Elem()
}

func (o ResourceGroupExportDeliveryInfoOutput) ToResourceGroupExportDeliveryInfoOutput() ResourceGroupExportDeliveryInfoOutput {
	return o
}

func (o ResourceGroupExportDeliveryInfoOutput) ToResourceGroupExportDeliveryInfoOutputWithContext(ctx context.Context) ResourceGroupExportDeliveryInfoOutput {
	return o
}

func (o ResourceGroupExportDeliveryInfoOutput) ToResourceGroupExportDeliveryInfoPtrOutput() ResourceGroupExportDeliveryInfoPtrOutput {
	return o.ToResourceGroupExportDeliveryInfoPtrOutputWithContext(context.Background())
}

func (o ResourceGroupExportDeliveryInfoOutput) ToResourceGroupExportDeliveryInfoPtrOutputWithContext(ctx context.Context) ResourceGroupExportDeliveryInfoPtrOutput {
	return o.ApplyT(func(v ResourceGroupExportDeliveryInfo) *ResourceGroupExportDeliveryInfo {
		return &v
	}).(ResourceGroupExportDeliveryInfoPtrOutput)
}
func (o ResourceGroupExportDeliveryInfoOutput) ContainerName() pulumi.StringOutput {
	return o.ApplyT(func (v ResourceGroupExportDeliveryInfo) string { return v.ContainerName }).(pulumi.StringOutput)
}

func (o ResourceGroupExportDeliveryInfoOutput) RootFolderPath() pulumi.StringOutput {
	return o.ApplyT(func (v ResourceGroupExportDeliveryInfo) string { return v.RootFolderPath }).(pulumi.StringOutput)
}

func (o ResourceGroupExportDeliveryInfoOutput) StorageAccountId() pulumi.StringOutput {
	return o.ApplyT(func (v ResourceGroupExportDeliveryInfo) string { return v.StorageAccountId }).(pulumi.StringOutput)
}

type ResourceGroupExportDeliveryInfoPtrOutput struct { *pulumi.OutputState}

func (ResourceGroupExportDeliveryInfoPtrOutput) ElementType() reflect.Type {
	return reflect.TypeOf((**ResourceGroupExportDeliveryInfo)(nil)).Elem()
}

func (o ResourceGroupExportDeliveryInfoPtrOutput) ToResourceGroupExportDeliveryInfoPtrOutput() ResourceGroupExportDeliveryInfoPtrOutput {
	return o
}

func (o ResourceGroupExportDeliveryInfoPtrOutput) ToResourceGroupExportDeliveryInfoPtrOutputWithContext(ctx context.Context) ResourceGroupExportDeliveryInfoPtrOutput {
	return o
}

func (o ResourceGroupExportDeliveryInfoPtrOutput) Elem() ResourceGroupExportDeliveryInfoOutput {
	return o.ApplyT(func (v *ResourceGroupExportDeliveryInfo) ResourceGroupExportDeliveryInfo { return *v }).(ResourceGroupExportDeliveryInfoOutput)
}

func (o ResourceGroupExportDeliveryInfoPtrOutput) ContainerName() pulumi.StringOutput {
	return o.ApplyT(func (v ResourceGroupExportDeliveryInfo) string { return v.ContainerName }).(pulumi.StringOutput)
}

func (o ResourceGroupExportDeliveryInfoPtrOutput) RootFolderPath() pulumi.StringOutput {
	return o.ApplyT(func (v ResourceGroupExportDeliveryInfo) string { return v.RootFolderPath }).(pulumi.StringOutput)
}

func (o ResourceGroupExportDeliveryInfoPtrOutput) StorageAccountId() pulumi.StringOutput {
	return o.ApplyT(func (v ResourceGroupExportDeliveryInfo) string { return v.StorageAccountId }).(pulumi.StringOutput)
}

type ResourceGroupExportQuery struct {
	TimeFrame string `pulumi:"timeFrame"`
	Type string `pulumi:"type"`
}

type ResourceGroupExportQueryInput interface {
	pulumi.Input

	ToResourceGroupExportQueryOutput() ResourceGroupExportQueryOutput
	ToResourceGroupExportQueryOutputWithContext(context.Context) ResourceGroupExportQueryOutput
}

type ResourceGroupExportQueryArgs struct {
	TimeFrame pulumi.StringInput `pulumi:"timeFrame"`
	Type pulumi.StringInput `pulumi:"type"`
}

func (ResourceGroupExportQueryArgs) ElementType() reflect.Type {
	return reflect.TypeOf((*ResourceGroupExportQuery)(nil)).Elem()
}

func (i ResourceGroupExportQueryArgs) ToResourceGroupExportQueryOutput() ResourceGroupExportQueryOutput {
	return i.ToResourceGroupExportQueryOutputWithContext(context.Background())
}

func (i ResourceGroupExportQueryArgs) ToResourceGroupExportQueryOutputWithContext(ctx context.Context) ResourceGroupExportQueryOutput {
	return pulumi.ToOutputWithContext(ctx, i).(ResourceGroupExportQueryOutput)
}

func (i ResourceGroupExportQueryArgs) ToResourceGroupExportQueryPtrOutput() ResourceGroupExportQueryPtrOutput {
	return i.ToResourceGroupExportQueryPtrOutputWithContext(context.Background())
}

func (i ResourceGroupExportQueryArgs) ToResourceGroupExportQueryPtrOutputWithContext(ctx context.Context) ResourceGroupExportQueryPtrOutput {
	return pulumi.ToOutputWithContext(ctx, i).(ResourceGroupExportQueryOutput).ToResourceGroupExportQueryPtrOutputWithContext(ctx)
}

type ResourceGroupExportQueryPtrInput interface {
	pulumi.Input

	ToResourceGroupExportQueryPtrOutput() ResourceGroupExportQueryPtrOutput
	ToResourceGroupExportQueryPtrOutputWithContext(context.Context) ResourceGroupExportQueryPtrOutput
}

type resourceGroupExportQueryPtrType ResourceGroupExportQueryArgs

func ResourceGroupExportQueryPtr(v *ResourceGroupExportQueryArgs) ResourceGroupExportQueryPtrInput {	return (*resourceGroupExportQueryPtrType)(v)
}

func (*resourceGroupExportQueryPtrType) ElementType() reflect.Type {
	return reflect.TypeOf((**ResourceGroupExportQuery)(nil)).Elem()
}

func (i *resourceGroupExportQueryPtrType) ToResourceGroupExportQueryPtrOutput() ResourceGroupExportQueryPtrOutput {
	return i.ToResourceGroupExportQueryPtrOutputWithContext(context.Background())
}

func (i *resourceGroupExportQueryPtrType) ToResourceGroupExportQueryPtrOutputWithContext(ctx context.Context) ResourceGroupExportQueryPtrOutput {
	return pulumi.ToOutputWithContext(ctx, i).(ResourceGroupExportQueryPtrOutput)
}

type ResourceGroupExportQueryOutput struct { *pulumi.OutputState }

func (ResourceGroupExportQueryOutput) ElementType() reflect.Type {
	return reflect.TypeOf((*ResourceGroupExportQuery)(nil)).Elem()
}

func (o ResourceGroupExportQueryOutput) ToResourceGroupExportQueryOutput() ResourceGroupExportQueryOutput {
	return o
}

func (o ResourceGroupExportQueryOutput) ToResourceGroupExportQueryOutputWithContext(ctx context.Context) ResourceGroupExportQueryOutput {
	return o
}

func (o ResourceGroupExportQueryOutput) ToResourceGroupExportQueryPtrOutput() ResourceGroupExportQueryPtrOutput {
	return o.ToResourceGroupExportQueryPtrOutputWithContext(context.Background())
}

func (o ResourceGroupExportQueryOutput) ToResourceGroupExportQueryPtrOutputWithContext(ctx context.Context) ResourceGroupExportQueryPtrOutput {
	return o.ApplyT(func(v ResourceGroupExportQuery) *ResourceGroupExportQuery {
		return &v
	}).(ResourceGroupExportQueryPtrOutput)
}
func (o ResourceGroupExportQueryOutput) TimeFrame() pulumi.StringOutput {
	return o.ApplyT(func (v ResourceGroupExportQuery) string { return v.TimeFrame }).(pulumi.StringOutput)
}

func (o ResourceGroupExportQueryOutput) Type() pulumi.StringOutput {
	return o.ApplyT(func (v ResourceGroupExportQuery) string { return v.Type }).(pulumi.StringOutput)
}

type ResourceGroupExportQueryPtrOutput struct { *pulumi.OutputState}

func (ResourceGroupExportQueryPtrOutput) ElementType() reflect.Type {
	return reflect.TypeOf((**ResourceGroupExportQuery)(nil)).Elem()
}

func (o ResourceGroupExportQueryPtrOutput) ToResourceGroupExportQueryPtrOutput() ResourceGroupExportQueryPtrOutput {
	return o
}

func (o ResourceGroupExportQueryPtrOutput) ToResourceGroupExportQueryPtrOutputWithContext(ctx context.Context) ResourceGroupExportQueryPtrOutput {
	return o
}

func (o ResourceGroupExportQueryPtrOutput) Elem() ResourceGroupExportQueryOutput {
	return o.ApplyT(func (v *ResourceGroupExportQuery) ResourceGroupExportQuery { return *v }).(ResourceGroupExportQueryOutput)
}

func (o ResourceGroupExportQueryPtrOutput) TimeFrame() pulumi.StringOutput {
	return o.ApplyT(func (v ResourceGroupExportQuery) string { return v.TimeFrame }).(pulumi.StringOutput)
}

func (o ResourceGroupExportQueryPtrOutput) Type() pulumi.StringOutput {
	return o.ApplyT(func (v ResourceGroupExportQuery) string { return v.Type }).(pulumi.StringOutput)
}

func init() {
	pulumi.RegisterOutputType(ResourceGroupExportDeliveryInfoOutput{})
	pulumi.RegisterOutputType(ResourceGroupExportDeliveryInfoPtrOutput{})
	pulumi.RegisterOutputType(ResourceGroupExportQueryOutput{})
	pulumi.RegisterOutputType(ResourceGroupExportQueryPtrOutput{})
}