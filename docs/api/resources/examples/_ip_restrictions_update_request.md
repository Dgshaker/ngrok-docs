
#### Example Request
```bash
curl \
-XPATCH \
-H "Authorization: Bearer {API_KEY}" \
-H "Content-Type: application/json" \
-H "Ngrok-Version: 2" \
-d '{"ip_policy_ids":["ipp_2NCiBGIpH8GRFZgAOANeXUX8c6h","ipp_2NCiBJ76aylyLczbuWvWqkj5G72"]}' \
https://api.ngrok.com/ip_restrictions/ipx_2NCiBL6wciTKb1SOSbAkXkJCPzq
