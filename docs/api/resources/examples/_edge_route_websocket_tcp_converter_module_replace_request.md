
#### Example Request
```bash
curl \
-XPUT \
-H "Authorization: Bearer {API_KEY}" \
-H "Content-Type: application/json" \
-H "Ngrok-Version: 2" \
-d '{"enabled":true}' \
https://api.ngrok.com/edges/https/edghts_2NCiBjCPI3vr7bBrLvk9LGqdcQe/routes/edghtsrt_2NCiBf9BBXmN1OWC6fOGzn9iMe9/websocket_tcp_converter
