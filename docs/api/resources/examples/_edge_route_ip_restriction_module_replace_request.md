
#### Example Request
```bash
curl \
-XPUT \
-H "Authorization: Bearer {API_KEY}" \
-H "Content-Type: application/json" \
-H "Ngrok-Version: 2" \
-d '{"enabled":true,"ip_policy_ids":["ipp_2NCiBXiOnoQeyf2nBZx5WkBsiIj","ipp_2NCiBY0KdLKTjI2dDYLC7zSc5KJ"]}' \
https://api.ngrok.com/edges/https/edghts_2NCiBUcjZBClHNlDOG3EHdB8qAr/routes/edghtsrt_2NCiBYZtjU55hFeDJlNbqZda0J7/ip_restriction
