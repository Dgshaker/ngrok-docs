
#### Example Response
```json
{
  "id": "ec_2NCiANujHiclrraTyRMTYiqg5Mo",
  "type": "https",
  "description": "app servers",
  "created_at": "2023-03-18T21:18:40Z",
  "uri": "https://api.ngrok.com/endpoint_configurations/ec_2NCiANujHiclrraTyRMTYiqg5Mo",
  "basic_auth": null,
  "circuit_breaker": null,
  "compression": null,
  "request_headers": {
    "enabled": true,
    "add": {
      "x-frontend": "ngrok"
    },
    "remove": [
      "cache-control"
    ]
  },
  "response_headers": null,
  "ip_policy": {
    "enabled": true,
    "ip_policies": [
      {
        "id": "ipp_2NCiAOH9KKGq1SsS0nXANpB2q9n",
        "uri": "https://api.ngrok.com/ip_policies/ipp_2NCiAOH9KKGq1SsS0nXANpB2q9n"
      }
    ]
  },
  "mutual_tls": null,
  "tls_termination": null,
  "webhook_validation": null,
  "oauth": null,
  "saml": null,
  "oidc": null,
  "backend": null
}