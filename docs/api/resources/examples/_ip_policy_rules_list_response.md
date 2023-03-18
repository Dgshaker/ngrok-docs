
#### Example Response
```json
{
  "ip_policy_rules": [
    {
      "id": "ipr_2NCiBA0KcgwoAVzlL3DNPSXwyov",
      "uri": "https://api.ngrok.com/ip_policy_rules/ipr_2NCiBA0KcgwoAVzlL3DNPSXwyov",
      "created_at": "2023-03-18T21:18:46Z",
      "description": "nyc office",
      "cidr": "212.3.14.0/24",
      "ip_policy": {
        "id": "ipp_2NCiBDsTBufxxLJJK51aE1J2N3F",
        "uri": "https://api.ngrok.com/ip_policies/ipp_2NCiBDsTBufxxLJJK51aE1J2N3F"
      },
      "action": "allow"
    },
    {
      "id": "ipr_2NCiBA0fSPebsr0yeQs6woIVoeD",
      "uri": "https://api.ngrok.com/ip_policy_rules/ipr_2NCiBA0fSPebsr0yeQs6woIVoeD",
      "created_at": "2023-03-18T21:18:46Z",
      "description": "alan laptop",
      "cidr": "2.2.2.2/32",
      "ip_policy": {
        "id": "ipp_2NCiBDsTBufxxLJJK51aE1J2N3F",
        "uri": "https://api.ngrok.com/ip_policies/ipp_2NCiBDsTBufxxLJJK51aE1J2N3F"
      },
      "action": "allow"
    },
    {
      "id": "ipr_2NCiB8zjANKL0jUNWJ7kWDvxVOE",
      "uri": "https://api.ngrok.com/ip_policy_rules/ipr_2NCiB8zjANKL0jUNWJ7kWDvxVOE",
      "created_at": "2023-03-18T21:18:46Z",
      "description": "sf office",
      "cidr": "132.2.19.0/24",
      "ip_policy": {
        "id": "ipp_2NCiBDsTBufxxLJJK51aE1J2N3F",
        "uri": "https://api.ngrok.com/ip_policies/ipp_2NCiBDsTBufxxLJJK51aE1J2N3F"
      },
      "action": "allow"
    }
  ],
  "uri": "https://api.ngrok.com/ip_policy_rules",
  "next_page_uri": null
}