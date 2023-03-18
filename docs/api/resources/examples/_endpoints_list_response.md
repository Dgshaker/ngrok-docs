
#### Example Response
```json
{
  "endpoints": [
    {
      "id": "ep_2NCiB7U4Zc5VZW2vMbuVC00yTK1",
      "created_at": "2023-03-18T21:18:46Z",
      "updated_at": "2023-03-18T21:18:46Z",
      "public_url": "tls://endpoint-example.com",
      "proto": "tls",
      "hostport": "endpoint-example.com:443",
      "type": "edge",
      "domain": {
        "id": "rd_2NCiB5xvkQRkHGrECS2ZYn2wrr1",
        "uri": "https://api.ngrok.com/reserved_domains/rd_2NCiB5xvkQRkHGrECS2ZYn2wrr1"
      },
      "edge": {
        "id": "edgtls_2NCiB26R8vEkA8RW6e9xo7I9ehb",
        "uri": "https://api.ngrok.com/edges/tls/edgtls_2NCiB26R8vEkA8RW6e9xo7I9ehb"
      }
    },
    {
      "id": "ep_2NCiB2QKNxdXUiEzJzE9Txrhmc5",
      "created_at": "2023-03-18T21:18:45Z",
      "updated_at": "2023-03-18T21:18:45Z",
      "public_url": "https://6be05c224571.ngrok.paid",
      "proto": "https",
      "hostport": "6be05c224571.ngrok.paid:443",
      "type": "ephemeral",
      "tunnel": {
        "id": "tn_2NCiB2QKNxdXUiEzJzE9Txrhmc5",
        "uri": "https://api.ngrok.com/tunnels/tn_2NCiB2QKNxdXUiEzJzE9Txrhmc5"
      }
    }
  ],
  "uri": "https://api.ngrok.com/endpoints",
  "next_page_uri": null
}