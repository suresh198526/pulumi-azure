# coding=utf-8
# *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
# *** Do not edit by hand unless you're certain you know what you are doing! ***

import warnings
import pulumi
import pulumi.runtime
from typing import Union
from .. import utilities, tables


class Certificate(pulumi.CustomResource):
    certificate: pulumi.Output[dict]
    """
    A `certificate` block as defined below, used to Import an existing certificate.

      * `contents` (`str`) - The base64-encoded certificate contents. Changing this forces a new resource to be created.
      * `password` (`str`) - The password associated with the certificate. Changing this forces a new resource to be created.
    """
    certificate_data: pulumi.Output[str]
    """
    The raw Key Vault Certificate data represented as a hexadecimal string.
    """
    certificate_policy: pulumi.Output[dict]
    """
    A `certificate_policy` block as defined below.

      * `issuerParameters` (`dict`) - A `issuer_parameters` block as defined below.
        * `name` (`str`) - The name of the Certificate Issuer. Possible values include `Self` (for self-signed certificate), or `Unknown` (for a certificate issuing authority like `Let's Encrypt` and Azure direct supported ones). Changing this forces a new resource to be created.

      * `key_properties` (`dict`) - A `key_properties` block as defined below.
        * `exportable` (`bool`) - Is this Certificate Exportable? Changing this forces a new resource to be created.
        * `key_size` (`float`) - The size of the Key used in the Certificate. Possible values include `2048` and `4096`. Changing this forces a new resource to be created.
        * `key_type` (`str`) - Specifies the Type of Key, such as `RSA`. Changing this forces a new resource to be created.
        * `reuseKey` (`bool`) - Is the key reusable? Changing this forces a new resource to be created.

      * `lifetimeActions` (`list`) - A `lifetime_action` block as defined below.
        * `action` (`dict`) - A `action` block as defined below.
          * `actionType` (`str`) - The Type of action to be performed when the lifetime trigger is triggerec. Possible values include `AutoRenew` and `EmailContacts`. Changing this forces a new resource to be created.

        * `trigger` (`dict`) - A `trigger` block as defined below.
          * `daysBeforeExpiry` (`float`) - The number of days before the Certificate expires that the action associated with this Trigger should run. Changing this forces a new resource to be created. Conflicts with `lifetime_percentage`.
          * `lifetimePercentage` (`float`) - The percentage at which during the Certificates Lifetime the action associated with this Trigger should run. Changing this forces a new resource to be created. Conflicts with `days_before_expiry`.

      * `secretProperties` (`dict`) - A `secret_properties` block as defined below.
        * `content_type` (`str`) - The Content-Type of the Certificate, such as `application/x-pkcs12` for a PFX or `application/x-pem-file` for a PEM. Changing this forces a new resource to be created.

      * `x509CertificateProperties` (`dict`) - A `x509_certificate_properties` block as defined below. Required when `certificate` block is not specified.
        * `extendedKeyUsages` (`list`) - A list of Extended/Enhanced Key Usages. Changing this forces a new resource to be created.
        * `keyUsages` (`list`) - A list of uses associated with this Key. Possible values include `cRLSign`, `dataEncipherment`, `decipherOnly`, `digitalSignature`, `encipherOnly`, `keyAgreement`, `keyCertSign`, `keyEncipherment` and `nonRepudiation` and are case-sensitive. Changing this forces a new resource to be created.
        * `subject` (`str`) - The Certificate's Subject. Changing this forces a new resource to be created.
        * `subjectAlternativeNames` (`dict`) - A `subject_alternative_names` block as defined below.
          * `dnsNames` (`list`) - A list of alternative DNS names (FQDNs) identified by the Certificate. Changing this forces a new resource to be created.
          * `emails` (`list`) - A list of email addresses identified by this Certificate. Changing this forces a new resource to be created.
          * `upns` (`list`) - A list of User Principal Names identified by the Certificate. Changing this forces a new resource to be created.

        * `validityInMonths` (`float`) - The Certificates Validity Period in Months. Changing this forces a new resource to be created.
    """
    key_vault_id: pulumi.Output[str]
    """
    The ID of the Key Vault where the Certificate should be created.
    """
    name: pulumi.Output[str]
    """
    Specifies the name of the Key Vault Certificate. Changing this forces a new resource to be created.
    """
    secret_id: pulumi.Output[str]
    """
    The ID of the associated Key Vault Secret.
    """
    tags: pulumi.Output[dict]
    """
    A mapping of tags to assign to the resource.
    """
    thumbprint: pulumi.Output[str]
    """
    The X509 Thumbprint of the Key Vault Certificate represented as a hexadecimal string.
    """
    version: pulumi.Output[str]
    """
    The current version of the Key Vault Certificate.
    """
    def __init__(__self__, resource_name, opts=None, certificate=None, certificate_policy=None, key_vault_id=None, name=None, tags=None, __props__=None, __name__=None, __opts__=None):
        """
        Manages a Key Vault Certificate.

        ## Example Usage
        ### Generating A New Certificate)

        ```python
        import pulumi
        import pulumi_azure as azure

        current = azure.core.get_client_config()
        example_resource_group = azure.core.ResourceGroup("exampleResourceGroup", location="West Europe")
        example_key_vault = azure.keyvault.KeyVault("exampleKeyVault",
            location=example_resource_group.location,
            resource_group_name=example_resource_group.name,
            tenant_id=current.tenant_id,
            sku_name="standard",
            access_policies=[{
                "tenant_id": current.tenant_id,
                "object_id": current.object_id,
                "certificate_permissions": [
                    "create",
                    "delete",
                    "deleteissuers",
                    "get",
                    "getissuers",
                    "import",
                    "list",
                    "listissuers",
                    "managecontacts",
                    "manageissuers",
                    "setissuers",
                    "update",
                ],
                "key_permissions": [
                    "backup",
                    "create",
                    "decrypt",
                    "delete",
                    "encrypt",
                    "get",
                    "import",
                    "list",
                    "purge",
                    "recover",
                    "restore",
                    "sign",
                    "unwrapKey",
                    "update",
                    "verify",
                    "wrapKey",
                ],
                "secret_permissions": [
                    "backup",
                    "delete",
                    "get",
                    "list",
                    "purge",
                    "recover",
                    "restore",
                    "set",
                ],
            }],
            tags={
                "environment": "Production",
            })
        example_certificate = azure.keyvault.Certificate("exampleCertificate",
            key_vault_id=example_key_vault.id,
            certificate_policy={
                "issuerParameters": {
                    "name": "Self",
                },
                "key_properties": {
                    "exportable": True,
                    "key_size": 2048,
                    "key_type": "RSA",
                    "reuseKey": True,
                },
                "lifetimeActions": [{
                    "action": {
                        "actionType": "AutoRenew",
                    },
                    "trigger": {
                        "daysBeforeExpiry": 30,
                    },
                }],
                "secretProperties": {
                    "content_type": "application/x-pkcs12",
                },
                "x509CertificateProperties": {
                    "extendedKeyUsages": ["1.3.6.1.5.5.7.3.1"],
                    "keyUsages": [
                        "cRLSign",
                        "dataEncipherment",
                        "digitalSignature",
                        "keyAgreement",
                        "keyCertSign",
                        "keyEncipherment",
                    ],
                    "subjectAlternativeNames": {
                        "dnsNames": [
                            "internal.contoso.com",
                            "domain.hello.world",
                        ],
                    },
                    "subject": "CN=hello-world",
                    "validityInMonths": 12,
                },
            })
        ```

        :param str resource_name: The name of the resource.
        :param pulumi.ResourceOptions opts: Options for the resource.
        :param pulumi.Input[dict] certificate: A `certificate` block as defined below, used to Import an existing certificate.
        :param pulumi.Input[dict] certificate_policy: A `certificate_policy` block as defined below.
        :param pulumi.Input[str] key_vault_id: The ID of the Key Vault where the Certificate should be created.
        :param pulumi.Input[str] name: Specifies the name of the Key Vault Certificate. Changing this forces a new resource to be created.
        :param pulumi.Input[dict] tags: A mapping of tags to assign to the resource.

        The **certificate** object supports the following:

          * `contents` (`pulumi.Input[str]`) - The base64-encoded certificate contents. Changing this forces a new resource to be created.
          * `password` (`pulumi.Input[str]`) - The password associated with the certificate. Changing this forces a new resource to be created.

        The **certificate_policy** object supports the following:

          * `issuerParameters` (`pulumi.Input[dict]`) - A `issuer_parameters` block as defined below.
            * `name` (`pulumi.Input[str]`) - The name of the Certificate Issuer. Possible values include `Self` (for self-signed certificate), or `Unknown` (for a certificate issuing authority like `Let's Encrypt` and Azure direct supported ones). Changing this forces a new resource to be created.

          * `key_properties` (`pulumi.Input[dict]`) - A `key_properties` block as defined below.
            * `exportable` (`pulumi.Input[bool]`) - Is this Certificate Exportable? Changing this forces a new resource to be created.
            * `key_size` (`pulumi.Input[float]`) - The size of the Key used in the Certificate. Possible values include `2048` and `4096`. Changing this forces a new resource to be created.
            * `key_type` (`pulumi.Input[str]`) - Specifies the Type of Key, such as `RSA`. Changing this forces a new resource to be created.
            * `reuseKey` (`pulumi.Input[bool]`) - Is the key reusable? Changing this forces a new resource to be created.

          * `lifetimeActions` (`pulumi.Input[list]`) - A `lifetime_action` block as defined below.
            * `action` (`pulumi.Input[dict]`) - A `action` block as defined below.
              * `actionType` (`pulumi.Input[str]`) - The Type of action to be performed when the lifetime trigger is triggerec. Possible values include `AutoRenew` and `EmailContacts`. Changing this forces a new resource to be created.

            * `trigger` (`pulumi.Input[dict]`) - A `trigger` block as defined below.
              * `daysBeforeExpiry` (`pulumi.Input[float]`) - The number of days before the Certificate expires that the action associated with this Trigger should run. Changing this forces a new resource to be created. Conflicts with `lifetime_percentage`.
              * `lifetimePercentage` (`pulumi.Input[float]`) - The percentage at which during the Certificates Lifetime the action associated with this Trigger should run. Changing this forces a new resource to be created. Conflicts with `days_before_expiry`.

          * `secretProperties` (`pulumi.Input[dict]`) - A `secret_properties` block as defined below.
            * `content_type` (`pulumi.Input[str]`) - The Content-Type of the Certificate, such as `application/x-pkcs12` for a PFX or `application/x-pem-file` for a PEM. Changing this forces a new resource to be created.

          * `x509CertificateProperties` (`pulumi.Input[dict]`) - A `x509_certificate_properties` block as defined below. Required when `certificate` block is not specified.
            * `extendedKeyUsages` (`pulumi.Input[list]`) - A list of Extended/Enhanced Key Usages. Changing this forces a new resource to be created.
            * `keyUsages` (`pulumi.Input[list]`) - A list of uses associated with this Key. Possible values include `cRLSign`, `dataEncipherment`, `decipherOnly`, `digitalSignature`, `encipherOnly`, `keyAgreement`, `keyCertSign`, `keyEncipherment` and `nonRepudiation` and are case-sensitive. Changing this forces a new resource to be created.
            * `subject` (`pulumi.Input[str]`) - The Certificate's Subject. Changing this forces a new resource to be created.
            * `subjectAlternativeNames` (`pulumi.Input[dict]`) - A `subject_alternative_names` block as defined below.
              * `dnsNames` (`pulumi.Input[list]`) - A list of alternative DNS names (FQDNs) identified by the Certificate. Changing this forces a new resource to be created.
              * `emails` (`pulumi.Input[list]`) - A list of email addresses identified by this Certificate. Changing this forces a new resource to be created.
              * `upns` (`pulumi.Input[list]`) - A list of User Principal Names identified by the Certificate. Changing this forces a new resource to be created.

            * `validityInMonths` (`pulumi.Input[float]`) - The Certificates Validity Period in Months. Changing this forces a new resource to be created.
        """
        if __name__ is not None:
            warnings.warn("explicit use of __name__ is deprecated", DeprecationWarning)
            resource_name = __name__
        if __opts__ is not None:
            warnings.warn("explicit use of __opts__ is deprecated, use 'opts' instead", DeprecationWarning)
            opts = __opts__
        if opts is None:
            opts = pulumi.ResourceOptions()
        if not isinstance(opts, pulumi.ResourceOptions):
            raise TypeError('Expected resource options to be a ResourceOptions instance')
        if opts.version is None:
            opts.version = utilities.get_version()
        if opts.id is None:
            if __props__ is not None:
                raise TypeError('__props__ is only valid when passed in combination with a valid opts.id to get an existing resource')
            __props__ = dict()

            __props__['certificate'] = certificate
            if certificate_policy is None:
                raise TypeError("Missing required property 'certificate_policy'")
            __props__['certificate_policy'] = certificate_policy
            if key_vault_id is None:
                raise TypeError("Missing required property 'key_vault_id'")
            __props__['key_vault_id'] = key_vault_id
            __props__['name'] = name
            __props__['tags'] = tags
            __props__['certificate_data'] = None
            __props__['secret_id'] = None
            __props__['thumbprint'] = None
            __props__['version'] = None
        alias_opts = pulumi.ResourceOptions(aliases=[pulumi.Alias(type_="azure:keyvault/certifiate:Certifiate")])
        opts = pulumi.ResourceOptions.merge(opts, alias_opts)
        super(Certificate, __self__).__init__(
            'azure:keyvault/certificate:Certificate',
            resource_name,
            __props__,
            opts)

    @staticmethod
    def get(resource_name, id, opts=None, certificate=None, certificate_data=None, certificate_policy=None, key_vault_id=None, name=None, secret_id=None, tags=None, thumbprint=None, version=None):
        """
        Get an existing Certificate resource's state with the given name, id, and optional extra
        properties used to qualify the lookup.

        :param str resource_name: The unique name of the resulting resource.
        :param str id: The unique provider ID of the resource to lookup.
        :param pulumi.ResourceOptions opts: Options for the resource.
        :param pulumi.Input[dict] certificate: A `certificate` block as defined below, used to Import an existing certificate.
        :param pulumi.Input[str] certificate_data: The raw Key Vault Certificate data represented as a hexadecimal string.
        :param pulumi.Input[dict] certificate_policy: A `certificate_policy` block as defined below.
        :param pulumi.Input[str] key_vault_id: The ID of the Key Vault where the Certificate should be created.
        :param pulumi.Input[str] name: Specifies the name of the Key Vault Certificate. Changing this forces a new resource to be created.
        :param pulumi.Input[str] secret_id: The ID of the associated Key Vault Secret.
        :param pulumi.Input[dict] tags: A mapping of tags to assign to the resource.
        :param pulumi.Input[str] thumbprint: The X509 Thumbprint of the Key Vault Certificate represented as a hexadecimal string.
        :param pulumi.Input[str] version: The current version of the Key Vault Certificate.

        The **certificate** object supports the following:

          * `contents` (`pulumi.Input[str]`) - The base64-encoded certificate contents. Changing this forces a new resource to be created.
          * `password` (`pulumi.Input[str]`) - The password associated with the certificate. Changing this forces a new resource to be created.

        The **certificate_policy** object supports the following:

          * `issuerParameters` (`pulumi.Input[dict]`) - A `issuer_parameters` block as defined below.
            * `name` (`pulumi.Input[str]`) - The name of the Certificate Issuer. Possible values include `Self` (for self-signed certificate), or `Unknown` (for a certificate issuing authority like `Let's Encrypt` and Azure direct supported ones). Changing this forces a new resource to be created.

          * `key_properties` (`pulumi.Input[dict]`) - A `key_properties` block as defined below.
            * `exportable` (`pulumi.Input[bool]`) - Is this Certificate Exportable? Changing this forces a new resource to be created.
            * `key_size` (`pulumi.Input[float]`) - The size of the Key used in the Certificate. Possible values include `2048` and `4096`. Changing this forces a new resource to be created.
            * `key_type` (`pulumi.Input[str]`) - Specifies the Type of Key, such as `RSA`. Changing this forces a new resource to be created.
            * `reuseKey` (`pulumi.Input[bool]`) - Is the key reusable? Changing this forces a new resource to be created.

          * `lifetimeActions` (`pulumi.Input[list]`) - A `lifetime_action` block as defined below.
            * `action` (`pulumi.Input[dict]`) - A `action` block as defined below.
              * `actionType` (`pulumi.Input[str]`) - The Type of action to be performed when the lifetime trigger is triggerec. Possible values include `AutoRenew` and `EmailContacts`. Changing this forces a new resource to be created.

            * `trigger` (`pulumi.Input[dict]`) - A `trigger` block as defined below.
              * `daysBeforeExpiry` (`pulumi.Input[float]`) - The number of days before the Certificate expires that the action associated with this Trigger should run. Changing this forces a new resource to be created. Conflicts with `lifetime_percentage`.
              * `lifetimePercentage` (`pulumi.Input[float]`) - The percentage at which during the Certificates Lifetime the action associated with this Trigger should run. Changing this forces a new resource to be created. Conflicts with `days_before_expiry`.

          * `secretProperties` (`pulumi.Input[dict]`) - A `secret_properties` block as defined below.
            * `content_type` (`pulumi.Input[str]`) - The Content-Type of the Certificate, such as `application/x-pkcs12` for a PFX or `application/x-pem-file` for a PEM. Changing this forces a new resource to be created.

          * `x509CertificateProperties` (`pulumi.Input[dict]`) - A `x509_certificate_properties` block as defined below. Required when `certificate` block is not specified.
            * `extendedKeyUsages` (`pulumi.Input[list]`) - A list of Extended/Enhanced Key Usages. Changing this forces a new resource to be created.
            * `keyUsages` (`pulumi.Input[list]`) - A list of uses associated with this Key. Possible values include `cRLSign`, `dataEncipherment`, `decipherOnly`, `digitalSignature`, `encipherOnly`, `keyAgreement`, `keyCertSign`, `keyEncipherment` and `nonRepudiation` and are case-sensitive. Changing this forces a new resource to be created.
            * `subject` (`pulumi.Input[str]`) - The Certificate's Subject. Changing this forces a new resource to be created.
            * `subjectAlternativeNames` (`pulumi.Input[dict]`) - A `subject_alternative_names` block as defined below.
              * `dnsNames` (`pulumi.Input[list]`) - A list of alternative DNS names (FQDNs) identified by the Certificate. Changing this forces a new resource to be created.
              * `emails` (`pulumi.Input[list]`) - A list of email addresses identified by this Certificate. Changing this forces a new resource to be created.
              * `upns` (`pulumi.Input[list]`) - A list of User Principal Names identified by the Certificate. Changing this forces a new resource to be created.

            * `validityInMonths` (`pulumi.Input[float]`) - The Certificates Validity Period in Months. Changing this forces a new resource to be created.
        """
        opts = pulumi.ResourceOptions.merge(opts, pulumi.ResourceOptions(id=id))

        __props__ = dict()

        __props__["certificate"] = certificate
        __props__["certificate_data"] = certificate_data
        __props__["certificate_policy"] = certificate_policy
        __props__["key_vault_id"] = key_vault_id
        __props__["name"] = name
        __props__["secret_id"] = secret_id
        __props__["tags"] = tags
        __props__["thumbprint"] = thumbprint
        __props__["version"] = version
        return Certificate(resource_name, opts=opts, __props__=__props__)

    def translate_output_property(self, prop):
        return tables._CAMEL_TO_SNAKE_CASE_TABLE.get(prop) or prop

    def translate_input_property(self, prop):
        return tables._SNAKE_TO_CAMEL_CASE_TABLE.get(prop) or prop
