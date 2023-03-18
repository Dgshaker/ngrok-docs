
#### Example Request
```bash
curl \
-XPUT \
-H "Authorization: Bearer {API_KEY}" \
-H "Content-Type: application/json" \
-H "Ngrok-Version: 2" \
-d '{"enabled":true,"backend_id":"bkdtg_2NCiBlKQCdbMk8CESB97DrraGzD"}' \
https://api.ngrok.com/edges/tcp/edgtcp_2NCiBqw9eQXRp2XgcU9Jr0qeIUr/backend
