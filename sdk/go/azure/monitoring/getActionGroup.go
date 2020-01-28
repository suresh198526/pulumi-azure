// *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

// nolint: lll
package monitoring

import (
	"github.com/pulumi/pulumi/sdk/go/pulumi"
)

// Use this data source to access the properties of an Action Group.
// 
// > This content is derived from https://github.com/terraform-providers/terraform-provider-azurerm/blob/master/website/docs/d/monitor_action_group.html.markdown.
func LookupActionGroup(ctx *pulumi.Context, args *LookupActionGroupArgs, opts ...pulumi.InvokeOption) (*LookupActionGroupResult, error) {
	var rv LookupActionGroupResult
	err := ctx.Invoke("azure:monitoring/getActionGroup:getActionGroup", args, &rv, opts...)
	if err != nil {
		return nil, err
	}
	return &rv, nil
}

// A collection of arguments for invoking getActionGroup.
type LookupActionGroupArgs struct {
	// Specifies the name of the Action Group.
	Name string `pulumi:"name"`
	// Specifies the name of the resource group the Action Group is located in.
	ResourceGroupName string `pulumi:"resourceGroupName"`
}


// A collection of values returned by getActionGroup.
type LookupActionGroupResult struct {
	// One or more `armRoleReceiver` blocks as defined below.
	ArmRoleReceivers []GetActionGroupArmRoleReceiver `pulumi:"armRoleReceivers"`
	// One or more `automationRunbookReceiver` blocks as defined below.
	AutomationRunbookReceivers []GetActionGroupAutomationRunbookReceiver `pulumi:"automationRunbookReceivers"`
	// One or more `azureAppPushReceiver` blocks as defined below.
	AzureAppPushReceivers []GetActionGroupAzureAppPushReceiver `pulumi:"azureAppPushReceivers"`
	// One or more `azureFunctionReceiver` blocks as defined below.
	AzureFunctionReceivers []GetActionGroupAzureFunctionReceiver `pulumi:"azureFunctionReceivers"`
	// One or more `emailReceiver` blocks as defined below.
	EmailReceivers []GetActionGroupEmailReceiver `pulumi:"emailReceivers"`
	// Whether this action group is enabled.
	Enabled bool `pulumi:"enabled"`
	// id is the provider-assigned unique ID for this managed resource.
	Id string `pulumi:"id"`
	// One or more `itsmReceiver` blocks as defined below.
	ItsmReceivers []GetActionGroupItsmReceiver `pulumi:"itsmReceivers"`
	// One or more `logicAppReceiver` blocks as defined below.
	LogicAppReceivers []GetActionGroupLogicAppReceiver `pulumi:"logicAppReceivers"`
	// The name of the webhook receiver.
	Name string `pulumi:"name"`
	ResourceGroupName string `pulumi:"resourceGroupName"`
	// The short name of the action group.
	ShortName string `pulumi:"shortName"`
	// One or more `smsReceiver` blocks as defined below.
	SmsReceivers []GetActionGroupSmsReceiver `pulumi:"smsReceivers"`
	// One or more `voiceReceiver` blocks as defined below.
	VoiceReceivers []GetActionGroupVoiceReceiver `pulumi:"voiceReceivers"`
	// One or more `webhookReceiver` blocks as defined below.
	WebhookReceivers []GetActionGroupWebhookReceiver `pulumi:"webhookReceivers"`
}

