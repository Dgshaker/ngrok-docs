
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
  "entity_id": "https://idp.local-ngrok.com/saml/ec_2NCiBDm82gMrjxZVoRqKA1Gb7hz",
  "assertion_consumer_service_url": "https://idp.local-ngrok.com/saml/ec_2NCiBDm82gMrjxZVoRqKA1Gb7hz/acs",
  "single_logout_url": "https://idp.local-ngrok.com/saml/ec_2NCiBDm82gMrjxZVoRqKA1Gb7hz/slo",
  "request_signing_certificate_pem": "-----BEGIN CERTIFICATE-----\nMIID6zCCAtOgAwIBAgIQW0uMB3m8xI4l0vbAItOdYzANBgkqhkiG9w0BAQsFADCB\nlDFIMEYGA1UECgw/aHR0cHM6Ly9pZHAubG9jYWwtbmdyb2suY29tL3NhbWwvZWNf\nMk5DaUJEbTgyZ01yanhaVm9ScUtBMUdiN2h6MUgwRgYDVQQDDD9odHRwczovL2lk\ncC5sb2NhbC1uZ3Jvay5jb20vc2FtbC9lY18yTkNpQkRtODJnTXJqeFpWb1JxS0Ex\nR2I3aHowIBcNMjMwMzE4MjExODQ3WhgPMjA1ODAzMDkyMTE4NDdaMIGUMUgwRgYD\nVQQKDD9odHRwczovL2lkcC5sb2NhbC1uZ3Jvay5jb20vc2FtbC9lY18yTkNpQkRt\nODJnTXJqeFpWb1JxS0ExR2I3aHoxSDBGBgNVBAMMP2h0dHBzOi8vaWRwLmxvY2Fs\nLW5ncm9rLmNvbS9zYW1sL2VjXzJOQ2lCRG04MmdNcmp4WlZvUnFLQTFHYjdoejCC\nASIwDQYJKoZIhvcNAQEBBQADggEPADCCAQoCggEBAMhmQ3dh/uh8WN393Hv2Rydb\nKsd+OOppXEFFGr7mtA/NBXfYzlmSjfgk3L0ZEgbKu9UBPE3OeVZp6YAg2Go1EyyK\nGDz7ld1HT3OQ+hBsTVzrSPnzQ+aL8SooLXmLCTqcmE1jY762Muc8aKHgjE+cf43i\n4Ri5OawJE8Wgoo7RmqKodIDEnKLcM1sC6MdvSxlgEaeLM4EcNDSxjlNiCKCiGiWs\nRi56F05dEcwppXpivaCBzvBNN+kxn8MMWdg4+8p1N3YkM0cOM2J3nv9c27KmXYD7\nhJ0c+a/Qx/uG4vBAehZ7NHSfxDJH7tPccCOO5vg5BSABR0rWW7icV9ytfVX0PjkC\nAwEAAaM1MDMwDgYDVR0PAQH/BAQDAgeAMBMGA1UdJQQMMAoGCCsGAQUFBwMBMAwG\nA1UdEwEB/wQCMAAwDQYJKoZIhvcNAQELBQADggEBABT3uj77LX8KBspyIQs7JY03\n5qotvxzfcUOmBvtVg2bqZkLO9Vg/Qnz1TqlnAObPtX56Thr9FqxqEZY7wHZeITC0\n48bXb/ToBbnyb6XXALYChdvzbo8JtYQmQfsYZu13n44j3exUBGleoMQVC70ks20u\nVqT2TO6kmAx1x6oPRiI8aiuqDIf1QALRUENc4OE39CbEzgvO5kyUy5IFQ8vNAU0a\nCO+YtRp0YscgRweyopmpMkMTIQsEoyyznxbNnsbVpoGjDTaSdSXpifvJagtz1hCt\nrnu4mt4CAL44Jf8rZ8Jwd9DDuz02/IKz4F/0NzsS1jc9nn3JYtxztT1IqEisd6Y=\n-----END CERTIFICATE-----\n",
  "metadata_url": "https://idp.local-ngrok.com/saml/ec_2NCiBDm82gMrjxZVoRqKA1Gb7hz",
  "nameid_format": "urn:oasis:names:tc:SAML:2.0:nameid-format:persistent"
}