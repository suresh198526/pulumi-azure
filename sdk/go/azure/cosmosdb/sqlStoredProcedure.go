// *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

package cosmosdb

import (
	"reflect"

	"github.com/pkg/errors"
	"github.com/pulumi/pulumi/sdk/v2/go/pulumi"
)

// Manages a SQL Stored Procedure within a Cosmos DB Account SQL Database.
//
// ## Example Usage
//
// ```go
// package main
//
// import (
// 	"github.com/pulumi/pulumi-azure/sdk/v3/go/azure/cosmosdb"
// 	"github.com/pulumi/pulumi/sdk/v2/go/pulumi"
// )
//
// func main() {
// 	pulumi.Run(func(ctx *pulumi.Context) error {
// 		exampleAccount, err := cosmosdb.LookupAccount(ctx, &cosmosdb.LookupAccountArgs{
// 			Name:              "tfex-cosmosdb-account",
// 			ResourceGroupName: "tfex-cosmosdb-account-rg",
// 		}, nil)
// 		if err != nil {
// 			return err
// 		}
// 		exampleSqlDatabase, err := cosmosdb.NewSqlDatabase(ctx, "exampleSqlDatabase", &cosmosdb.SqlDatabaseArgs{
// 			ResourceGroupName: pulumi.String(exampleAccount.ResourceGroupName),
// 			AccountName:       pulumi.String(exampleAccount.Name),
// 			Throughput:        pulumi.Int(400),
// 		})
// 		if err != nil {
// 			return err
// 		}
// 		exampleSqlContainer, err := cosmosdb.NewSqlContainer(ctx, "exampleSqlContainer", &cosmosdb.SqlContainerArgs{
// 			ResourceGroupName: pulumi.Any(azurerm_cosmosdb_account.Example.Resource_group_name),
// 			AccountName:       pulumi.Any(azurerm_cosmosdb_account.Example.Name),
// 			DatabaseName:      exampleSqlDatabase.Name,
// 			PartitionKeyPath:  pulumi.String("/id"),
// 		})
// 		if err != nil {
// 			return err
// 		}
// 		_, err = cosmosdb.NewSqlStoredProcedure(ctx, "exampleSqlStoredProcedure", &cosmosdb.SqlStoredProcedureArgs{
// 			ResourceGroupName: pulumi.Any(azurerm_cosmosdb_account.Example.Resource_group_name),
// 			AccountName:       pulumi.Any(azurerm_cosmosdb_account.Example.Name),
// 			DatabaseName:      exampleSqlDatabase.Name,
// 			ContainerName:     exampleSqlContainer.Name,
// 			Body: pulumi.String("  	function () { var context = getContext(); var response = context.getResponse(); response.setBody('Hello, World'); }\n"),
// 		})
// 		if err != nil {
// 			return err
// 		}
// 		return nil
// 	})
// }
// ```
type SqlStoredProcedure struct {
	pulumi.CustomResourceState

	// The name of the Cosmos DB Account to create the stored procedure within. Changing this forces a new resource to be created.
	AccountName pulumi.StringOutput `pulumi:"accountName"`
	// The body of the stored procedure.
	Body pulumi.StringOutput `pulumi:"body"`
	// The name of the Cosmos DB SQL Container to create the stored procedure within. Changing this forces a new resource to be created.
	ContainerName pulumi.StringOutput `pulumi:"containerName"`
	// The name of the Cosmos DB SQL Database to create the stored procedure within. Changing this forces a new resource to be created.
	DatabaseName pulumi.StringOutput `pulumi:"databaseName"`
	// Specifies the name of the Cosmos DB SQL Stored Procedure. Changing this forces a new resource to be created.
	Name pulumi.StringOutput `pulumi:"name"`
	// The name of the resource group in which the Cosmos DB SQL Database is created. Changing this forces a new resource to be created.
	ResourceGroupName pulumi.StringOutput `pulumi:"resourceGroupName"`
}

// NewSqlStoredProcedure registers a new resource with the given unique name, arguments, and options.
func NewSqlStoredProcedure(ctx *pulumi.Context,
	name string, args *SqlStoredProcedureArgs, opts ...pulumi.ResourceOption) (*SqlStoredProcedure, error) {
	if args == nil || args.AccountName == nil {
		return nil, errors.New("missing required argument 'AccountName'")
	}
	if args == nil || args.Body == nil {
		return nil, errors.New("missing required argument 'Body'")
	}
	if args == nil || args.ContainerName == nil {
		return nil, errors.New("missing required argument 'ContainerName'")
	}
	if args == nil || args.DatabaseName == nil {
		return nil, errors.New("missing required argument 'DatabaseName'")
	}
	if args == nil || args.ResourceGroupName == nil {
		return nil, errors.New("missing required argument 'ResourceGroupName'")
	}
	if args == nil {
		args = &SqlStoredProcedureArgs{}
	}
	var resource SqlStoredProcedure
	err := ctx.RegisterResource("azure:cosmosdb/sqlStoredProcedure:SqlStoredProcedure", name, args, &resource, opts...)
	if err != nil {
		return nil, err
	}
	return &resource, nil
}

// GetSqlStoredProcedure gets an existing SqlStoredProcedure resource's state with the given name, ID, and optional
// state properties that are used to uniquely qualify the lookup (nil if not required).
func GetSqlStoredProcedure(ctx *pulumi.Context,
	name string, id pulumi.IDInput, state *SqlStoredProcedureState, opts ...pulumi.ResourceOption) (*SqlStoredProcedure, error) {
	var resource SqlStoredProcedure
	err := ctx.ReadResource("azure:cosmosdb/sqlStoredProcedure:SqlStoredProcedure", name, id, state, &resource, opts...)
	if err != nil {
		return nil, err
	}
	return &resource, nil
}

// Input properties used for looking up and filtering SqlStoredProcedure resources.
type sqlStoredProcedureState struct {
	// The name of the Cosmos DB Account to create the stored procedure within. Changing this forces a new resource to be created.
	AccountName *string `pulumi:"accountName"`
	// The body of the stored procedure.
	Body *string `pulumi:"body"`
	// The name of the Cosmos DB SQL Container to create the stored procedure within. Changing this forces a new resource to be created.
	ContainerName *string `pulumi:"containerName"`
	// The name of the Cosmos DB SQL Database to create the stored procedure within. Changing this forces a new resource to be created.
	DatabaseName *string `pulumi:"databaseName"`
	// Specifies the name of the Cosmos DB SQL Stored Procedure. Changing this forces a new resource to be created.
	Name *string `pulumi:"name"`
	// The name of the resource group in which the Cosmos DB SQL Database is created. Changing this forces a new resource to be created.
	ResourceGroupName *string `pulumi:"resourceGroupName"`
}

type SqlStoredProcedureState struct {
	// The name of the Cosmos DB Account to create the stored procedure within. Changing this forces a new resource to be created.
	AccountName pulumi.StringPtrInput
	// The body of the stored procedure.
	Body pulumi.StringPtrInput
	// The name of the Cosmos DB SQL Container to create the stored procedure within. Changing this forces a new resource to be created.
	ContainerName pulumi.StringPtrInput
	// The name of the Cosmos DB SQL Database to create the stored procedure within. Changing this forces a new resource to be created.
	DatabaseName pulumi.StringPtrInput
	// Specifies the name of the Cosmos DB SQL Stored Procedure. Changing this forces a new resource to be created.
	Name pulumi.StringPtrInput
	// The name of the resource group in which the Cosmos DB SQL Database is created. Changing this forces a new resource to be created.
	ResourceGroupName pulumi.StringPtrInput
}

func (SqlStoredProcedureState) ElementType() reflect.Type {
	return reflect.TypeOf((*sqlStoredProcedureState)(nil)).Elem()
}

type sqlStoredProcedureArgs struct {
	// The name of the Cosmos DB Account to create the stored procedure within. Changing this forces a new resource to be created.
	AccountName string `pulumi:"accountName"`
	// The body of the stored procedure.
	Body string `pulumi:"body"`
	// The name of the Cosmos DB SQL Container to create the stored procedure within. Changing this forces a new resource to be created.
	ContainerName string `pulumi:"containerName"`
	// The name of the Cosmos DB SQL Database to create the stored procedure within. Changing this forces a new resource to be created.
	DatabaseName string `pulumi:"databaseName"`
	// Specifies the name of the Cosmos DB SQL Stored Procedure. Changing this forces a new resource to be created.
	Name *string `pulumi:"name"`
	// The name of the resource group in which the Cosmos DB SQL Database is created. Changing this forces a new resource to be created.
	ResourceGroupName string `pulumi:"resourceGroupName"`
}

// The set of arguments for constructing a SqlStoredProcedure resource.
type SqlStoredProcedureArgs struct {
	// The name of the Cosmos DB Account to create the stored procedure within. Changing this forces a new resource to be created.
	AccountName pulumi.StringInput
	// The body of the stored procedure.
	Body pulumi.StringInput
	// The name of the Cosmos DB SQL Container to create the stored procedure within. Changing this forces a new resource to be created.
	ContainerName pulumi.StringInput
	// The name of the Cosmos DB SQL Database to create the stored procedure within. Changing this forces a new resource to be created.
	DatabaseName pulumi.StringInput
	// Specifies the name of the Cosmos DB SQL Stored Procedure. Changing this forces a new resource to be created.
	Name pulumi.StringPtrInput
	// The name of the resource group in which the Cosmos DB SQL Database is created. Changing this forces a new resource to be created.
	ResourceGroupName pulumi.StringInput
}

func (SqlStoredProcedureArgs) ElementType() reflect.Type {
	return reflect.TypeOf((*sqlStoredProcedureArgs)(nil)).Elem()
}