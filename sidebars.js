/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */

// @ts-check

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  // By default, Docusaurus generates a sidebar from the docs folder structure
  docs: [
    'overview',
    'getting-started',
    {
      label: 'Guides',
      type: 'category',
      link: { type: 'doc', id: 'guides/index' },
      items: [ 
        { type: 'autogenerated', dirName: 'guides',}, 
        {
          label: 'Using ngrok with',
          type: 'category',
          link: { type: 'doc', id: 'using-ngrok-with' },
          items: [ { type: 'autogenerated', dirName: 'using-ngrok-with', }, ],
        },
      ],
    },
    {
      label: 'ngrok Cloud Edge',
      type: 'category',
      link: { type: 'doc', id: 'cloud-edge/index' },
      items: [ { type: 'autogenerated', dirName: 'cloud-edge', }, ],
    },
    {
      label: 'ngrok Secure Tunnels',
      type: 'category',
      link: { type: 'doc', id: 'secure-tunnels/index' },
      items: [ { type: 'autogenerated', dirName: 'secure-tunnels', }, ],
    },
    {
      label: 'ngrok Platform',
      type: 'category',
      items: [ { type: 'autogenerated', dirName: 'platform', }, ],
    },
    {
      label: 'Integrations',
      type: 'category',
      // TODO: @sudobinbash: Change to autogen (for scalability)
      items: [ 
        { label: 'Bitbucket', type: 'doc', id: 'integrations/bitbucket/webhooks', },
        { label: 'Box', type: 'doc', id: 'integrations/box/webhooks', },
        { label: 'Brex', type: 'doc', id: 'integrations/brex/webhooks', },
        { label: 'Calendly', type: 'doc', id: 'integrations/calendly/webhooks', },
        { label: 'Circle CI', type: 'doc', id: 'integrations/circleci/webhooks', },
        { label: 'Contentful', type: 'doc', id: 'integrations/contentful/webhooks', },
        { label: 'DocuSign', type: 'doc', id: 'integrations/docusign/webhooks', },
        { label: 'Dropbox', type: 'doc', id: 'integrations/dropbox/webhooks', },
        { label: 'Facebook', type: 'doc', id: 'integrations/facebook/webhooks', },
        { label: 'Facebook Messenger', type: 'doc', id: 'integrations/facebook-messenger/webhooks', },
        { label: 'Frame.io', type: 'doc', id: 'integrations/frameio/webhooks', },
        { label: 'GitHub', type: 'doc', id: 'integrations/github/webhooks', },
        { label: 'GitLab', type: 'doc', id: 'integrations/gitlab/webhooks', },
        { label: 'Heroku', type: 'doc', id: 'integrations/heroku/webhooks', },
        { label: 'HubSpot', type: 'doc', id: 'integrations/hubspot/webhooks', },
        { label: 'Instagram', type: 'doc', id: 'integrations/instagram/webhooks', },
        { label: 'Intercom', type: 'doc', id: 'integrations/intercom/webhooks', },
        { label: 'LaunchDarkly', type: 'doc', id: 'integrations/launchdarkly/webhooks', },
        { label: 'Mailchimp', type: 'doc', id: 'integrations/mailchimp/webhooks', },
        { label: 'Modern Treasury', type: 'doc', id: 'integrations/modern-treasury/webhooks', },
        { label: 'Okta', type: 'category', items: [ { type: 'autogenerated', dirName: 'integrations/okta', }, ], },
        { label: 'PagerDuty', type: 'doc', id: 'integrations/pagerduty/webhooks', },
        { label: 'SendGrid', type: 'doc', id: 'integrations/sendgrid/webhooks', },
        { label: 'Shopify', type: 'doc', id: 'integrations/shopify/webhooks', },
        { label: 'Slack', type: 'doc', id: 'integrations/slack/webhooks', },
        { label: 'Square', type: 'doc', id: 'integrations/square/webhooks', },
        { label: 'Stripe', type: 'doc', id: 'integrations/stripe/webhooks', },
        { label: 'Twilio', type: 'doc', id: 'integrations/twilio/webhooks', },
        { label: 'WhatsApp', type: 'doc', id: 'integrations/whatsapp/webhooks', },
        { label: 'Zendesk', type: 'doc', id: 'integrations/zendesk/webhooks', },
        { label: 'Zoom', type: 'doc', id: 'integrations/zoom/webhooks', },
      ],
    },
    {
      label: 'Reference',
      type: 'category',
      items: [ 
        {
          type: 'category',
          label: 'ngrok Agent',
          link: { type: 'doc', id: 'ngrok-agent/index' },
          items: [ { type: 'autogenerated', dirName: 'ngrok-agent', }, ],
        },
        {
          type: 'category',
          label: 'ngrok API',
          link: { type: 'doc', id: 'api/index' },
          items: [ 
            {
              type: 'category',
              label: 'API Clients',
              link: { type: 'doc', id: 'api/api-clients' },
              items: [ "api/api-clients", "api/client-libraries", "api/terraform", ],
            },
            {
              type: 'category',
              label: 'API Resources',
              items: [ 
                // Abuse
                'api/resources/abuse-reports',
                // Agent
                {
                  type: 'category', label: 'Agent',
                  items: [ 
                    'api/resources/agent-ingresses',
                    'api/resources/tunnels',
                    'api/resources/tunnel-sessions',
                  ],
                },
                // Application Users
                {
                  type: 'category', label: 'Application Users',
                  items: [ 
                    'api/resources/application-users',
                    'api/resources/application-sessions',
                  ],
                },
                // Backends
                {
                  type: 'category', label: 'Backends',
                  items: [ 
                    'api/resources/failover-backends',
                    'api/resources/http-response-backends',
                    'api/resources/tunnel-group-backends',
                    'api/resources/weighted-backends',
                  ],
                },
                // Certificates
                {
                  type: 'category', label: 'Certificates',
                  items: [ 
                    'api/resources/certificate-authorities',
                    'api/resources/ssh-certificate-authorities',
                    'api/resources/ssh-host-certificates',
                    'api/resources/ssh-user-certificates',
                    'api/resources/tls-certificates',
                  ],
                },
                // Credentials
                {
                  type: 'category', label: 'Credentials',
                  items: [ 
                    'api/resources/api-keys',
                    'api/resources/ssh-credentials',
                    'api/resources/credentials',
                  ],
                },
                // Endpoints
                {
                  type: 'category', label: 'Endpoints',
                  items: [ 
                    'api/resources/reserved-addrs',
                    'api/resources/reserved-domains',
                    'api/resources/endpoints',
                  ],
                },
                // Events
                {
                  type: 'category', label: 'Events',
                  items: [ 
                    'api/resources/event-destinations',
                    'api/resources/event-sources',
                    'api/resources/event-subscriptions',
                  ],
                },
                // HTTPS Edges
                {
                  type: 'category', label: 'HTTPS Edges',
                  items: [ 
                    'api/resources/edges-https',
                    'api/resources/edges-https-routes',
                    'api/resources/https-edge-mutual-tls-module',
                    'api/resources/https-edge-route-backend-module',
                    'api/resources/https-edge-route-circuit-breaker-module',
                    'api/resources/https-edge-route-compression-module',
                    'api/resources/https-edge-route-ip-restriction-module',
                    'api/resources/https-edge-route-oauth-module',
                    'api/resources/https-edge-route-oidc-module',
                    'api/resources/https-edge-route-request-headers-module',
                    'api/resources/https-edge-route-response-headers-module',
                    'api/resources/https-edge-route-saml-module',
                    'api/resources/https-edge-route-webhook-validation-module',
                    'api/resources/https-edge-route-websocket-tcp-converter-module',
                    'api/resources/https-edge-tls-termination-module',
                  ],
                },
                // IP Restrictions
                {
                  type: 'category', label: 'IP Restrictions',
                  items: [ 
                    'api/resources/ip-policies',
                    'api/resources/ip-policy-rules',
                    'api/resources/ip-restrictions',
                  ],
                },
                // TCP Edges
                {
                  type: 'category', label: 'TCP Edges',
                  items: [ 
                    'api/resources/edges-tcp',
                    'api/resources/tcp-edge-backend-module',
                    'api/resources/tcp-edge-ip-restriction-module',
                  ],
                },
                // TLS Edges
                {
                  type: 'category', label: 'TLS Edges',
                  items: [ 
                    'api/resources/edges-tls',
                    'api/resources/tls-edge-backend-module',
                    'api/resources/tls-edge-ip-restriction-module',
                    'api/resources/tls-edge-mutual-tls-module',
                    'api/resources/tls-edge-tls-termination-module',
                  ],
                },
              ],
            },
          ],
        },
        'errors/index',
        {
          type: 'category', label: 'Events',
          link: { type: 'doc', id: 'events/event-sources' },
          items: [ 
            'events/event-sources',
            'events/filtering',
          ],
        },
        'http-header-templates',
      ],
    },
  ],

};

module.exports = sidebars;
