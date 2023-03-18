
#### Example Response
```json
{
  "enabled": true,
  "options_passthrough": false,
  "cookie_prefix": "",
  "inactivity_timeout": 0,
  "maximum_duration": 0,
  "idp_metadata_url": "",
  "idp_metadata": "\n\u003cEntityDescriptor xmlns=\"urn:oasis:names:tc:SAML:2.0:metadata\" validUntil=\"2020-09-14T12:53:23.691Z\" cacheDuration=\"PT1M\" entityID=\"http://127.0.0.1:12345/metadata\"\u003e\u003cIDPSSODescriptor xmlns=\"urn:oasis:names:tc:SAML:2.0:metadata\" protocolSupportEnumeration=\"urn:oasis:names:tc:SAML:2.0:protocol\"\u003e\u003cNameIDFormat\u003eurn:oasis:names:tc:SAML:2.0:nameid-format:transient\u003c/NameIDFormat\u003e\u003cSingleSignOnService Binding=\"urn:oasis:names:tc:SAML:2.0:bindings:HTTP-Redirect\" Location=\"http://127.0.0.1:12345/sso\"\u003e\u003c/SingleSignOnService\u003e\u003cSingleSignOnService Binding=\"urn:oasis:names:tc:SAML:2.0:bindings:HTTP-POST\" Location=\"http://127.0.0.1:12345/sso\"\u003e\u003c/SingleSignOnService\u003e\u003c/IDPSSODescriptor\u003e\u003c/EntityDescriptor\u003e\n",
  "force_authn": false,
  "allow_idp_initiated": true,
  "authorized_groups": [],
  "entity_id": "https://idp.local-ngrok.com/saml/edghtsrt_2NCiBizYC40cMwthiYdrBpOgDXB",
  "assertion_consumer_service_url": "https://idp.local-ngrok.com/saml/edghtsrt_2NCiBizYC40cMwthiYdrBpOgDXB/acs",
  "single_logout_url": "https://idp.local-ngrok.com/saml/edghtsrt_2NCiBizYC40cMwthiYdrBpOgDXB/slo",
  "request_signing_certificate_pem": "-----BEGIN CERTIFICATE-----\nMIIEBDCCAuygAwIBAgIRAJP6pMM5cKcl9iC4BVIb/TUwDQYJKoZIhvcNAQELBQAw\ngaAxTjBMBgNVBAoMRWh0dHBzOi8vaWRwLmxvY2FsLW5ncm9rLmNvbS9zYW1sL2Vk\nZ2h0c3J0XzJOQ2lCaXpZQzQwY013dGhpWWRyQnBPZ0RYQjFOMEwGA1UEAwxFaHR0\ncHM6Ly9pZHAubG9jYWwtbmdyb2suY29tL3NhbWwvZWRnaHRzcnRfMk5DaUJpellD\nNDBjTXd0aGlZZHJCcE9nRFhCMCAXDTIzMDMxODIxMTg1MFoYDzIwNTgwMzA5MjEx\nODUwWjCBoDFOMEwGA1UECgxFaHR0cHM6Ly9pZHAubG9jYWwtbmdyb2suY29tL3Nh\nbWwvZWRnaHRzcnRfMk5DaUJpellDNDBjTXd0aGlZZHJCcE9nRFhCMU4wTAYDVQQD\nDEVodHRwczovL2lkcC5sb2NhbC1uZ3Jvay5jb20vc2FtbC9lZGdodHNydF8yTkNp\nQml6WUM0MGNNd3RoaVlkckJwT2dEWEIwggEiMA0GCSqGSIb3DQEBAQUAA4IBDwAw\nggEKAoIBAQCpqHnXyQMsg98wFkls5YJpUoxGaztdlSBv5DBA5ujbNSgL9wATxuQK\nCf3+OUCizNPaJbza0O/WJRj/4xaLnNVzzRwCbXaSq2anz/luR9cOi0dMPraB52nG\nIuqkAfAsVR7ygZR1N7B+WaknCaKmZVKO0O7KvzWqDeKNSxEzwd0GTNzSN8Fqj3w4\nP3wErU92A+HQeLetXgxYG/orz4aB6xA2SGtnm7b+Q7AKWG/oFaWXK/XdMIyjV6D1\nhYd5/dOua9abghSNzUoqhTruI4xgO+pNM2cCJ/Xm4S+SOeJ9kFynyVO6shSqtupO\nnWCrRCJGfnzc3GrioKruzCz+6LzC9BhbAgMBAAGjNTAzMA4GA1UdDwEB/wQEAwIH\ngDATBgNVHSUEDDAKBggrBgEFBQcDATAMBgNVHRMBAf8EAjAAMA0GCSqGSIb3DQEB\nCwUAA4IBAQB93VNOAWCM8vOnCvmMBE1pOa9MzVv9TO4ot1k/rAtjSAtODrerSPUX\n5SH8yyoYuIvSsQU6i0ZOuXn1KCcjgYUbG3l3D5OX696LTJPnO5Cnsl3XGsYCykAT\nRxwnWvxgxqXEBCM/VC7QvEzVP7C86KR6eRzTn3vHfVFauvVYdOGIcVH4jChUMcNJ\nSz23KeSqAknkmpfYsv+IvNF2CP+CfqTOG69f/+inkMmwoCEsEAwT9RQnp7N9p4w3\ncrzpl6svFihRKIR2sno2wb2Tfgh+8mditseTGshqlS6jnXNw2bWy0SAhKr/4KmRO\nVXf9AWMfhpA5THQe3p81mdwD8wGtM1F3\n-----END CERTIFICATE-----\n",
  "metadata_url": "https://idp.local-ngrok.com/saml/edghtsrt_2NCiBizYC40cMwthiYdrBpOgDXB",
  "nameid_format": "urn:oasis:names:tc:SAML:2.0:nameid-format:persistent"
}