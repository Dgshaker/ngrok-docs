
#### Example Response
```json
{
  "backends": [
    {
      "id": "bkdwd_2NCiBOZraRdyzMW5yRBGsoZmPbJ",
      "uri": "https://api.ngrok.com/backends/weighted/bkdwd_2NCiBOZraRdyzMW5yRBGsoZmPbJ",
      "created_at": "2023-03-18T21:18:48Z",
      "description": "acme weighted",
      "metadata": "{\"environment\": \"staging\"}",
      "backends": {
        "bkdhr_2NCiBQskIjWPqOcmuRj1ag8e0cR": 1,
        "bkdhr_2NCiBRfd31IEzyoIc07XxSUB4k6": 0
      }
    }
  ],
  "uri": "https://api.ngrok.com/backends/weighted",
  "next_page_uri": null
}