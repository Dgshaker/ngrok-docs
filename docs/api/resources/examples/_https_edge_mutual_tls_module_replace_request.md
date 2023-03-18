
#### Example Request
```bash
curl \
-XPUT \
-H "Authorization: Bearer {API_KEY}" \
-H "Content-Type: application/json" \
-H "Ngrok-Version: 2" \
-d '{"enabled":true,"certificate_authority_ids":["ca_2NCiBpz2KGr6dRtMGUajtVVPxCR"]}' \
https://api.ngrok.com/edges/https/edghts_2NCiBo9a7WETBpVdsb097OIo3b8/mutual_tls
