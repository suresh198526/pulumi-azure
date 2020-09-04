// *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

using System;
using System.Collections.Generic;
using System.Collections.Immutable;
using System.Threading.Tasks;
using Pulumi.Serialization;

namespace Pulumi.Azure.ApiManagement.Outputs
{

    [OutputType]
    public sealed class ApiOauth2Authorization
    {
        /// <summary>
        /// OAuth authorization server identifier. The name of an OAuth2 Authorization Server.
        /// </summary>
        public readonly string AuthorizationServerName;
        /// <summary>
        /// Operations scope.
        /// </summary>
        public readonly string? Scope;

        [OutputConstructor]
        private ApiOauth2Authorization(
            string authorizationServerName,

            string? scope)
        {
            AuthorizationServerName = authorizationServerName;
            Scope = scope;
        }
    }
}
