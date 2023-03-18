
#### Example Request
```bash
curl \
-H "Authorization: Bearer {API_KEY}" \
-H "Content-Type: application/json" \
-H "Ngrok-Version: 2" \
-d '{"domain":"myapp.mydomain.com","region":"us","certificate_id":"cert_2NCiATDGobPl9KbZspNjo0MCAKT"}' \
https://api.ngrok.com/reserved_domains
