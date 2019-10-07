# coding=utf-8
# *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
# *** Do not edit by hand unless you're certain you know what you are doing! ***

import json
import warnings
import pulumi
import pulumi.runtime
from typing import Union
from .. import utilities, tables

class GetCertificateResult:
    """
    A collection of values returned by getCertificate.
    """
    def __init__(__self__, expiration_date=None, friendly_name=None, host_names=None, issue_date=None, issuer=None, location=None, name=None, resource_group_name=None, subject_name=None, tags=None, thumbprint=None, id=None):
        if expiration_date and not isinstance(expiration_date, str):
            raise TypeError("Expected argument 'expiration_date' to be a str")
        __self__.expiration_date = expiration_date
        """
        The expiration date for the certificate.
        """
        if friendly_name and not isinstance(friendly_name, str):
            raise TypeError("Expected argument 'friendly_name' to be a str")
        __self__.friendly_name = friendly_name
        """
        The friendly name of the certificate.
        """
        if host_names and not isinstance(host_names, list):
            raise TypeError("Expected argument 'host_names' to be a list")
        __self__.host_names = host_names
        """
        List of host names the certificate applies to.
        """
        if issue_date and not isinstance(issue_date, str):
            raise TypeError("Expected argument 'issue_date' to be a str")
        __self__.issue_date = issue_date
        """
        The issue date for the certificate.
        """
        if issuer and not isinstance(issuer, str):
            raise TypeError("Expected argument 'issuer' to be a str")
        __self__.issuer = issuer
        """
        The name of the certificate issuer.
        """
        if location and not isinstance(location, str):
            raise TypeError("Expected argument 'location' to be a str")
        __self__.location = location
        if name and not isinstance(name, str):
            raise TypeError("Expected argument 'name' to be a str")
        __self__.name = name
        if resource_group_name and not isinstance(resource_group_name, str):
            raise TypeError("Expected argument 'resource_group_name' to be a str")
        __self__.resource_group_name = resource_group_name
        if subject_name and not isinstance(subject_name, str):
            raise TypeError("Expected argument 'subject_name' to be a str")
        __self__.subject_name = subject_name
        """
        The subject name of the certificate.
        """
        if tags and not isinstance(tags, dict):
            raise TypeError("Expected argument 'tags' to be a dict")
        __self__.tags = tags
        if thumbprint and not isinstance(thumbprint, str):
            raise TypeError("Expected argument 'thumbprint' to be a str")
        __self__.thumbprint = thumbprint
        """
        The thumbprint for the certificate.
        """
        if id and not isinstance(id, str):
            raise TypeError("Expected argument 'id' to be a str")
        __self__.id = id
        """
        id is the provider-assigned unique ID for this managed resource.
        """
class AwaitableGetCertificateResult(GetCertificateResult):
    # pylint: disable=using-constant-test
    def __await__(self):
        if False:
            yield self
        return GetCertificateResult(
            expiration_date=self.expiration_date,
            friendly_name=self.friendly_name,
            host_names=self.host_names,
            issue_date=self.issue_date,
            issuer=self.issuer,
            location=self.location,
            name=self.name,
            resource_group_name=self.resource_group_name,
            subject_name=self.subject_name,
            tags=self.tags,
            thumbprint=self.thumbprint,
            id=self.id)

def get_certificate(name=None,resource_group_name=None,tags=None,opts=None):
    """
    Use this data source to access information about an App Service certificate.
    
    :param str name: Specifies the name of the certificate.
    :param str resource_group_name: The name of the resource group in which to create the certificate.

    > This content is derived from https://github.com/terraform-providers/terraform-provider-azurerm/blob/master/website/docs/d/app_service_certificate.html.markdown.
    """
    __args__ = dict()

    __args__['name'] = name
    __args__['resourceGroupName'] = resource_group_name
    __args__['tags'] = tags
    if opts is None:
        opts = pulumi.InvokeOptions()
    if opts.version is None:
        opts.version = utilities.get_version()
    __ret__ = pulumi.runtime.invoke('azure:appservice/getCertificate:getCertificate', __args__, opts=opts).value

    return AwaitableGetCertificateResult(
        expiration_date=__ret__.get('expirationDate'),
        friendly_name=__ret__.get('friendlyName'),
        host_names=__ret__.get('hostNames'),
        issue_date=__ret__.get('issueDate'),
        issuer=__ret__.get('issuer'),
        location=__ret__.get('location'),
        name=__ret__.get('name'),
        resource_group_name=__ret__.get('resourceGroupName'),
        subject_name=__ret__.get('subjectName'),
        tags=__ret__.get('tags'),
        thumbprint=__ret__.get('thumbprint'),
        id=__ret__.get('id'))
