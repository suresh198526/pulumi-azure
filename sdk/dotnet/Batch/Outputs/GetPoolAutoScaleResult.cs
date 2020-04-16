// *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

using System;
using System.Collections.Generic;
using System.Collections.Immutable;
using System.Threading.Tasks;
using Pulumi.Serialization;

namespace Pulumi.Azure.Batch.Outputs
{

    [OutputType]
    public sealed class GetPoolAutoScaleResult
    {
        /// <summary>
        /// The interval to wait before evaluating if the pool needs to be scaled.
        /// </summary>
        public readonly string EvaluationInterval;
        /// <summary>
        /// The autoscale formula that needs to be used for scaling the Batch pool.
        /// </summary>
        public readonly string Formula;

        [OutputConstructor]
        private GetPoolAutoScaleResult(
            string evaluationInterval,

            string formula)
        {
            EvaluationInterval = evaluationInterval;
            Formula = formula;
        }
    }
}