
#### Example Request
```bash
curl \
-XPUT \
-H "Authorization: Bearer {API_KEY}" \
-H "Content-Type: application/json" \
-H "Ngrok-Version: 2" \
-d '{"enabled":true,"backend_id":"bkdtg_2NCiBo5OQERM8GiE0jCSoTnStDc"}' \
https://api.ngrok.com/edges/tls/edgtls_2NCiBn3n8mGBGxQo6rWZ2PiN24c/backend
