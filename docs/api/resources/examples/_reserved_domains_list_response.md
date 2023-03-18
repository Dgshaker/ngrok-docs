
#### Example Response
```json
{
  "reserved_domains": [
    {
      "id": "rd_2NCiARf0iIlcPEopJ0cEfixbqPE",
      "uri": "https://api.ngrok.com/reserved_domains/rd_2NCiARf0iIlcPEopJ0cEfixbqPE",
      "created_at": "2023-03-18T21:18:40Z",
      "description": "Device 0001 Dashboard",
      "metadata": "{\"service\": \"dashboard\"}",
      "domain": "manage-0001.app.example.com",
      "region": "us",
      "cname_target": "27elhttx8.cname.us.ngrok.io",
      "http_endpoint_configuration": null,
      "https_endpoint_configuration": null,
      "certificate": null,
      "certificate_management_policy": {
        "authority": "letsencrypt",
        "private_key_type": "ecdsa"
      },
      "certificate_management_status": {
        "renews_at": null,
        "provisioning_job": {
          "error_code": null,
          "msg": "Managed certificate provisioning in progress.",
          "started_at": "2023-03-18T21:18:40Z",
          "retries_at": null
        }
      },
      "acme_challenge_cname_target": null
    },
    {
      "id": "rd_2NCiAMXgE5O4sMqBk1fgjlX4bQT",
      "uri": "https://api.ngrok.com/reserved_domains/rd_2NCiAMXgE5O4sMqBk1fgjlX4bQT",
      "created_at": "2023-03-18T21:18:40Z",
      "domain": "myapp.mydomain.com",
      "region": "us",
      "cname_target": "jrfwepwu.cname.us.ngrok.io",
      "http_endpoint_configuration": null,
      "https_endpoint_configuration": null,
      "certificate": {
        "id": "cert_2NCiATDGobPl9KbZspNjo0MCAKT",
        "uri": "https://api.ngrok.com/tls_certificates/cert_2NCiATDGobPl9KbZspNjo0MCAKT"
      },
      "certificate_management_policy": null,
      "certificate_management_status": null,
      "acme_challenge_cname_target": null
    }
  ],
  "uri": "https://api.ngrok.com/reserved_domains",
  "next_page_uri": null
}