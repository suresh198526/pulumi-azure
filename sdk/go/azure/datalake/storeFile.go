// *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

// nolint: lll
package datalake

import (
	"reflect"

	"github.com/pkg/errors"
	"github.com/pulumi/pulumi/sdk/go/pulumi"
)

// Manages a Azure Data Lake Store File.
// 
// > **Note:** If you want to change the data in the remote file without changing the `localFilePath`, then 
// taint the resource so the `datalake.StoreFile` gets recreated with the new data.
// 
// > This content is derived from https://github.com/terraform-providers/terraform-provider-azurerm/blob/master/website/docs/r/data_lake_store_file.html.markdown.
type StoreFile struct {
	pulumi.CustomResourceState

	// Specifies the name of the Data Lake Store for which the File should created.
	AccountName pulumi.StringOutput `pulumi:"accountName"`
	// The path to the local file to be added to the Data Lake Store.
	LocalFilePath pulumi.StringOutput `pulumi:"localFilePath"`
	// The path created for the file on the Data Lake Store.
	RemoteFilePath pulumi.StringOutput `pulumi:"remoteFilePath"`
}

// NewStoreFile registers a new resource with the given unique name, arguments, and options.
func NewStoreFile(ctx *pulumi.Context,
	name string, args *StoreFileArgs, opts ...pulumi.ResourceOption) (*StoreFile, error) {
	if args == nil || args.AccountName == nil {
		return nil, errors.New("missing required argument 'AccountName'")
	}
	if args == nil || args.LocalFilePath == nil {
		return nil, errors.New("missing required argument 'LocalFilePath'")
	}
	if args == nil || args.RemoteFilePath == nil {
		return nil, errors.New("missing required argument 'RemoteFilePath'")
	}
	if args == nil {
		args = &StoreFileArgs{}
	}
	var resource StoreFile
	err := ctx.RegisterResource("azure:datalake/storeFile:StoreFile", name, args, &resource, opts...)
	if err != nil {
		return nil, err
	}
	return &resource, nil
}

// GetStoreFile gets an existing StoreFile resource's state with the given name, ID, and optional
// state properties that are used to uniquely qualify the lookup (nil if not required).
func GetStoreFile(ctx *pulumi.Context,
	name string, id pulumi.IDInput, state *StoreFileState, opts ...pulumi.ResourceOption) (*StoreFile, error) {
	var resource StoreFile
	err := ctx.ReadResource("azure:datalake/storeFile:StoreFile", name, id, state, &resource, opts...)
	if err != nil {
		return nil, err
	}
	return &resource, nil
}

// Input properties used for looking up and filtering StoreFile resources.
type storeFileState struct {
	// Specifies the name of the Data Lake Store for which the File should created.
	AccountName *string `pulumi:"accountName"`
	// The path to the local file to be added to the Data Lake Store.
	LocalFilePath *string `pulumi:"localFilePath"`
	// The path created for the file on the Data Lake Store.
	RemoteFilePath *string `pulumi:"remoteFilePath"`
}

type StoreFileState struct {
	// Specifies the name of the Data Lake Store for which the File should created.
	AccountName pulumi.StringPtrInput
	// The path to the local file to be added to the Data Lake Store.
	LocalFilePath pulumi.StringPtrInput
	// The path created for the file on the Data Lake Store.
	RemoteFilePath pulumi.StringPtrInput
}

func (StoreFileState) ElementType() reflect.Type {
	return reflect.TypeOf((*storeFileState)(nil)).Elem()
}

type storeFileArgs struct {
	// Specifies the name of the Data Lake Store for which the File should created.
	AccountName string `pulumi:"accountName"`
	// The path to the local file to be added to the Data Lake Store.
	LocalFilePath string `pulumi:"localFilePath"`
	// The path created for the file on the Data Lake Store.
	RemoteFilePath string `pulumi:"remoteFilePath"`
}

// The set of arguments for constructing a StoreFile resource.
type StoreFileArgs struct {
	// Specifies the name of the Data Lake Store for which the File should created.
	AccountName pulumi.StringInput
	// The path to the local file to be added to the Data Lake Store.
	LocalFilePath pulumi.StringInput
	// The path created for the file on the Data Lake Store.
	RemoteFilePath pulumi.StringInput
}

func (StoreFileArgs) ElementType() reflect.Type {
	return reflect.TypeOf((*storeFileArgs)(nil)).Elem()
}

