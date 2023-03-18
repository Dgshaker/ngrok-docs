
#### Example Response
```json
{
  "tls_edges": [
    {
      "id": "edgtls_2NCiBpVhpX3jZBXoAB9BTMtujuN",
      "description": "acme tls edge",
      "metadata": "{\"environment\": \"staging\"}",
      "created_at": "2023-03-18T21:18:51Z",
      "uri": "https://api.ngrok.com/edges/tls/edgtls_2NCiBpVhpX3jZBXoAB9BTMtujuN",
      "hostports": [
        "example.com:443"
      ],
      "backend": null,
      "ip_restriction": null,
      "mutual_tls": null,
      "tls_termination": null
    },
    {
      "id": "edgtls_2NCiB26R8vEkA8RW6e9xo7I9ehb",
      "description": "acme tls edge",
      "created_at": "2023-03-18T21:18:45Z",
      "uri": "https://api.ngrok.com/edges/tls/edgtls_2NCiB26R8vEkA8RW6e9xo7I9ehb",
      "hostports": [
        "endpoint-example.com:443"
      ],
      "backend": {
        "enabled": true,
        "backend": {
          "id": "bkdhr_2NCiB6BdMqT3RaOaQoZJt6nivxm",
          "uri": "https://api.ngrok.com/backends/http_response/bkdhr_2NCiB6BdMqT3RaOaQoZJt6nivxm"
        }
      },
      "ip_restriction": null,
      "mutual_tls": null,
      "tls_termination": null
    }
  ],
  "uri": "https://api.ngrok.com/edges/tls",
  "next_page_uri": null
}