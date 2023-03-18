
#### Example Request
```bash
curl \
-XPUT \
-H "Authorization: Bearer {API_KEY}" \
-H "Content-Type: application/json" \
-H "Ngrok-Version: 2" \
-d '{"enabled":true,"ip_policy_ids":["ipp_2NCiBmQ9QyFf0pd1V8OeBY71G9E"]}' \
https://api.ngrok.com/edges/tcp/edgtcp_2NCiBlzIYXipTTAmuXtJUswfrPl/ip_restriction
