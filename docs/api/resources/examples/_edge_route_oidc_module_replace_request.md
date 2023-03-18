
#### Example Request
```bash
curl \
-XPUT \
-H "Authorization: Bearer {API_KEY}" \
-H "Content-Type: application/json" \
-H "Ngrok-Version: 2" \
-d '{"enabled":true,"issuer":"https://accounts.google.com","client_id":"some-client-id","client_secret":"some-client-secret","scopes":["profile"]}' \
https://api.ngrok.com/edges/https/edghts_2NCiBVUVTzMhJAfYqS28nsT5XhO/routes/edghtsrt_2NCiBY17iHJqWemeIhKBWh56cpq/oidc
