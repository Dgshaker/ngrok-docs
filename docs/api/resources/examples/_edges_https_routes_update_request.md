
#### Example Request
```bash
curl \
-XPATCH \
-H "Authorization: Bearer {API_KEY}" \
-H "Content-Type: application/json" \
-H "Ngrok-Version: 2" \
-d '{"metadata":"{\"environment\": \"production\"}"}' \
https://api.ngrok.com/edges/https/edghts_2NCiBOkqmgMb6alAKXbDMFzUbcZ/routes/edghtsrt_2NCiBQUij8xfLgVLz9Jye0P5Q81
