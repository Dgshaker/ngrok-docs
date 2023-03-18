
#### Example Request
```bash
curl \
-XPUT \
-H "Authorization: Bearer {API_KEY}" \
-H "Content-Type: application/json" \
-H "Ngrok-Version: 2" \
-d '{"enabled":true,"backend_id":"bkdtg_2NCiBQnNOwkgYimtzH0Grv4TiOX"}' \
https://api.ngrok.com/edges/https/edghts_2NCiBTlHX641x34IntUcHMMuxHZ/routes/edghtsrt_2NCiBPoLhhgKkxKo76QBpbFt4hn/backend
