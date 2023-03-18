
#### Example Request
```bash
curl \
-XPUT \
-H "Authorization: Bearer {API_KEY}" \
-H "Content-Type: application/json" \
-H "Ngrok-Version: 2" \
-d '{"enabled":true,"certificate_authority_ids":["ca_2NCiBngxABQmVgQemWA0zxiDpj9"]}' \
https://api.ngrok.com/edges/tls/edgtls_2NCiBmFsSaTamluNtRdlFuMzK6g/mutual_tls
