
#### Example Request
```bash
curl \
-XPUT \
-H "Authorization: Bearer {API_KEY}" \
-H "Content-Type: application/json" \
-H "Ngrok-Version: 2" \
-d '{"enabled":true,"ip_policy_ids":["ipp_2NCiBlxX666ydZgoDTAOHvSEl5l","ipp_2NCiBkYsEkRLRpSOyoWASmgi21B"]}' \
https://api.ngrok.com/edges/tls/edgtls_2NCiBqvBxvZ9kDFlIWQ3utx1D2Y/ip_restriction
