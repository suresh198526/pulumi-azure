// *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

// nolint: lll
package scheduler

import (
	"reflect"

	"github.com/pkg/errors"
	"github.com/pulumi/pulumi/sdk/go/pulumi"
)

// Manages a Scheduler Job.
// 
// > **NOTE:** Support for Scheduler Job has been deprecated by Microsoft in favour of Logic Apps ([more information can be found at this link](https://docs.microsoft.com/en-us/azure/scheduler/migrate-from-scheduler-to-logic-apps)) - as such we plan to remove support for this resource as a part of version 2.0 of the AzureRM Provider.
// 
// > This content is derived from https://github.com/terraform-providers/terraform-provider-azurerm/blob/master/website/docs/r/scheduler_job.html.markdown.
type Job struct {
	pulumi.CustomResourceState

	// A `actionStorageQueue` block defining a storage queue job action as described below. Note this is identical to an `errorActionStorageQueue` block.
	ActionStorageQueue JobActionStorageQueuePtrOutput `pulumi:"actionStorageQueue"`
	// A `actionWeb` block defining the job action as described below. Note this is identical to an `errorActionWeb` block.
	ActionWeb JobActionWebPtrOutput `pulumi:"actionWeb"`
	// A `errorActionStorageQueue` block defining the a web action to take on an error as described below. Note this is identical to an `actionStorageQueue` block.
	ErrorActionStorageQueue JobErrorActionStorageQueuePtrOutput `pulumi:"errorActionStorageQueue"`
	// A `errorActionWeb` block defining the action to take on an error as described below. Note this is identical to an `actionWeb` block.
	ErrorActionWeb JobErrorActionWebPtrOutput `pulumi:"errorActionWeb"`
	// Specifies the name of the Scheduler Job Collection in which the Job should exist. Changing this forces a new resource to be created.
	JobCollectionName pulumi.StringOutput `pulumi:"jobCollectionName"`
	// The name of the Scheduler Job. Changing this forces a new resource to be created.
	Name pulumi.StringOutput `pulumi:"name"`
	// A `recurrence` block defining a job occurrence schedule.
	Recurrence JobRecurrencePtrOutput `pulumi:"recurrence"`
	// The name of the resource group in which to create the Scheduler Job. Changing this forces a new resource to be created.
	ResourceGroupName pulumi.StringOutput `pulumi:"resourceGroupName"`
	// A `retry` block defining how to retry as described below.
	Retry JobRetryPtrOutput `pulumi:"retry"`
	// The time the first instance of the job is to start running at.
	StartTime pulumi.StringOutput `pulumi:"startTime"`
	// The sets or gets the current state of the job. Can be set to either `Enabled` or `Completed`
	State pulumi.StringOutput `pulumi:"state"`
}

// NewJob registers a new resource with the given unique name, arguments, and options.
func NewJob(ctx *pulumi.Context,
	name string, args *JobArgs, opts ...pulumi.ResourceOption) (*Job, error) {
	if args == nil || args.JobCollectionName == nil {
		return nil, errors.New("missing required argument 'JobCollectionName'")
	}
	if args == nil || args.ResourceGroupName == nil {
		return nil, errors.New("missing required argument 'ResourceGroupName'")
	}
	if args == nil {
		args = &JobArgs{}
	}
	var resource Job
	err := ctx.RegisterResource("azure:scheduler/job:Job", name, args, &resource, opts...)
	if err != nil {
		return nil, err
	}
	return &resource, nil
}

// GetJob gets an existing Job resource's state with the given name, ID, and optional
// state properties that are used to uniquely qualify the lookup (nil if not required).
func GetJob(ctx *pulumi.Context,
	name string, id pulumi.IDInput, state *JobState, opts ...pulumi.ResourceOption) (*Job, error) {
	var resource Job
	err := ctx.ReadResource("azure:scheduler/job:Job", name, id, state, &resource, opts...)
	if err != nil {
		return nil, err
	}
	return &resource, nil
}

// Input properties used for looking up and filtering Job resources.
type jobState struct {
	// A `actionStorageQueue` block defining a storage queue job action as described below. Note this is identical to an `errorActionStorageQueue` block.
	ActionStorageQueue *JobActionStorageQueue `pulumi:"actionStorageQueue"`
	// A `actionWeb` block defining the job action as described below. Note this is identical to an `errorActionWeb` block.
	ActionWeb *JobActionWeb `pulumi:"actionWeb"`
	// A `errorActionStorageQueue` block defining the a web action to take on an error as described below. Note this is identical to an `actionStorageQueue` block.
	ErrorActionStorageQueue *JobErrorActionStorageQueue `pulumi:"errorActionStorageQueue"`
	// A `errorActionWeb` block defining the action to take on an error as described below. Note this is identical to an `actionWeb` block.
	ErrorActionWeb *JobErrorActionWeb `pulumi:"errorActionWeb"`
	// Specifies the name of the Scheduler Job Collection in which the Job should exist. Changing this forces a new resource to be created.
	JobCollectionName *string `pulumi:"jobCollectionName"`
	// The name of the Scheduler Job. Changing this forces a new resource to be created.
	Name *string `pulumi:"name"`
	// A `recurrence` block defining a job occurrence schedule.
	Recurrence *JobRecurrence `pulumi:"recurrence"`
	// The name of the resource group in which to create the Scheduler Job. Changing this forces a new resource to be created.
	ResourceGroupName *string `pulumi:"resourceGroupName"`
	// A `retry` block defining how to retry as described below.
	Retry *JobRetry `pulumi:"retry"`
	// The time the first instance of the job is to start running at.
	StartTime *string `pulumi:"startTime"`
	// The sets or gets the current state of the job. Can be set to either `Enabled` or `Completed`
	State *string `pulumi:"state"`
}

type JobState struct {
	// A `actionStorageQueue` block defining a storage queue job action as described below. Note this is identical to an `errorActionStorageQueue` block.
	ActionStorageQueue JobActionStorageQueuePtrInput
	// A `actionWeb` block defining the job action as described below. Note this is identical to an `errorActionWeb` block.
	ActionWeb JobActionWebPtrInput
	// A `errorActionStorageQueue` block defining the a web action to take on an error as described below. Note this is identical to an `actionStorageQueue` block.
	ErrorActionStorageQueue JobErrorActionStorageQueuePtrInput
	// A `errorActionWeb` block defining the action to take on an error as described below. Note this is identical to an `actionWeb` block.
	ErrorActionWeb JobErrorActionWebPtrInput
	// Specifies the name of the Scheduler Job Collection in which the Job should exist. Changing this forces a new resource to be created.
	JobCollectionName pulumi.StringPtrInput
	// The name of the Scheduler Job. Changing this forces a new resource to be created.
	Name pulumi.StringPtrInput
	// A `recurrence` block defining a job occurrence schedule.
	Recurrence JobRecurrencePtrInput
	// The name of the resource group in which to create the Scheduler Job. Changing this forces a new resource to be created.
	ResourceGroupName pulumi.StringPtrInput
	// A `retry` block defining how to retry as described below.
	Retry JobRetryPtrInput
	// The time the first instance of the job is to start running at.
	StartTime pulumi.StringPtrInput
	// The sets or gets the current state of the job. Can be set to either `Enabled` or `Completed`
	State pulumi.StringPtrInput
}

func (JobState) ElementType() reflect.Type {
	return reflect.TypeOf((*jobState)(nil)).Elem()
}

type jobArgs struct {
	// A `actionStorageQueue` block defining a storage queue job action as described below. Note this is identical to an `errorActionStorageQueue` block.
	ActionStorageQueue *JobActionStorageQueue `pulumi:"actionStorageQueue"`
	// A `actionWeb` block defining the job action as described below. Note this is identical to an `errorActionWeb` block.
	ActionWeb *JobActionWeb `pulumi:"actionWeb"`
	// A `errorActionStorageQueue` block defining the a web action to take on an error as described below. Note this is identical to an `actionStorageQueue` block.
	ErrorActionStorageQueue *JobErrorActionStorageQueue `pulumi:"errorActionStorageQueue"`
	// A `errorActionWeb` block defining the action to take on an error as described below. Note this is identical to an `actionWeb` block.
	ErrorActionWeb *JobErrorActionWeb `pulumi:"errorActionWeb"`
	// Specifies the name of the Scheduler Job Collection in which the Job should exist. Changing this forces a new resource to be created.
	JobCollectionName string `pulumi:"jobCollectionName"`
	// The name of the Scheduler Job. Changing this forces a new resource to be created.
	Name *string `pulumi:"name"`
	// A `recurrence` block defining a job occurrence schedule.
	Recurrence *JobRecurrence `pulumi:"recurrence"`
	// The name of the resource group in which to create the Scheduler Job. Changing this forces a new resource to be created.
	ResourceGroupName string `pulumi:"resourceGroupName"`
	// A `retry` block defining how to retry as described below.
	Retry *JobRetry `pulumi:"retry"`
	// The time the first instance of the job is to start running at.
	StartTime *string `pulumi:"startTime"`
	// The sets or gets the current state of the job. Can be set to either `Enabled` or `Completed`
	State *string `pulumi:"state"`
}

// The set of arguments for constructing a Job resource.
type JobArgs struct {
	// A `actionStorageQueue` block defining a storage queue job action as described below. Note this is identical to an `errorActionStorageQueue` block.
	ActionStorageQueue JobActionStorageQueuePtrInput
	// A `actionWeb` block defining the job action as described below. Note this is identical to an `errorActionWeb` block.
	ActionWeb JobActionWebPtrInput
	// A `errorActionStorageQueue` block defining the a web action to take on an error as described below. Note this is identical to an `actionStorageQueue` block.
	ErrorActionStorageQueue JobErrorActionStorageQueuePtrInput
	// A `errorActionWeb` block defining the action to take on an error as described below. Note this is identical to an `actionWeb` block.
	ErrorActionWeb JobErrorActionWebPtrInput
	// Specifies the name of the Scheduler Job Collection in which the Job should exist. Changing this forces a new resource to be created.
	JobCollectionName pulumi.StringInput
	// The name of the Scheduler Job. Changing this forces a new resource to be created.
	Name pulumi.StringPtrInput
	// A `recurrence` block defining a job occurrence schedule.
	Recurrence JobRecurrencePtrInput
	// The name of the resource group in which to create the Scheduler Job. Changing this forces a new resource to be created.
	ResourceGroupName pulumi.StringInput
	// A `retry` block defining how to retry as described below.
	Retry JobRetryPtrInput
	// The time the first instance of the job is to start running at.
	StartTime pulumi.StringPtrInput
	// The sets or gets the current state of the job. Can be set to either `Enabled` or `Completed`
	State pulumi.StringPtrInput
}

func (JobArgs) ElementType() reflect.Type {
	return reflect.TypeOf((*jobArgs)(nil)).Elem()
}

