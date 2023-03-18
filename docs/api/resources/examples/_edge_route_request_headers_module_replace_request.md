
#### Example Request
```bash
curl \
-XPUT \
-H "Authorization: Bearer {API_KEY}" \
-H "Content-Type: application/json" \
-H "Ngrok-Version: 2" \
-d '{"enabled":true,"add":{"x-frontend":"ngrok"},"remove":["cache-control"]}' \
https://api.ngrok.com/edges/https/edghts_2NCiBUmLZ7KPWDjL4W04x76Mg8H/routes/edghtsrt_2NCiBUvpT8VosduZm7NL5VmSlHv/request_headers
