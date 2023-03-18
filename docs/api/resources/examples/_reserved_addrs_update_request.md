
#### Example Request
```bash
curl \
-XPATCH \
-H "Authorization: Bearer {API_KEY}" \
-H "Content-Type: application/json" \
-H "Ngrok-Version: 2" \
-d '{"metadata":"{\"proto\": \"ssh\"}","endpoint_configuration_id":"ec_2NCiAND4jF4Z871N9PYVaDPY8Tt"}' \
https://api.ngrok.com/reserved_addrs/ra_2NChiIP9vKEJLrDLW35JCxKW7q3
