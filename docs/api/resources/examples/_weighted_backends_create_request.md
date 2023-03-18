
#### Example Request
```bash
curl \
-H "Authorization: Bearer {API_KEY}" \
-H "Content-Type: application/json" \
-H "Ngrok-Version: 2" \
-d '{"description":"acme weighted","metadata":"{\"environment\": \"staging\"}","backends":{"bkdhr_2NCiBQskIjWPqOcmuRj1ag8e0cR":1,"bkdhr_2NCiBRfd31IEzyoIc07XxSUB4k6":0}}' \
https://api.ngrok.com/backends/weighted
