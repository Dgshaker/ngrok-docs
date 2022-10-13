import EdgeRouteOAuthModuleReplaceRequest from './examples/_edge_route_o_auth_module_replace_request.md';
import EdgeRouteOAuthModuleReplaceResponse from './examples/_edge_route_o_auth_module_replace_response.md';
import EdgeRouteOAuthModuleGetRequest from './examples/_edge_route_o_auth_module_get_request.md';
import EdgeRouteOAuthModuleGetResponse from './examples/_edge_route_o_auth_module_get_response.md';
import EdgeRouteOAuthModuleDeleteRequest from './examples/_edge_route_o_auth_module_delete_request.md';

# HTTPS Edge Route OAuth Module
------------------


## Replace HTTPS Edge Route OAuth Module


### Request

PUT /edges/https/{edge_id}/routes/{id}/oauth

<EdgeRouteOAuthModuleReplaceRequest />


#### Parameters

|&nbsp;| &nbsp;| &nbsp;|
|---|---|---|
| `enabled` | boolean | `true` if the module will be applied to traffic, `false` to disable. default `true` if unspecified |
| `provider` | [EndpointOAuthProvider](#api-edge-route-o-auth-module-replace-parameters-endpoint-o-auth-provider) | an object which defines the identity provider to use for authentication and configuration for who may access the endpoint |
| `options_passthrough` | boolean | Do not enforce authentication on HTTP OPTIONS requests. necessary if you are supporting CORS. |
| `cookie_prefix` | string | the prefix of the session cookie that ngrok sets on the http client to cache authentication. default is 'ngrok.' |
| `inactivity_timeout` | uint32 | Integer number of seconds of inactivity after which if the user has not accessed the endpoint, their session will time out and they will be forced to reauthenticate. |
| `maximum_duration` | uint32 | Integer number of seconds of the maximum duration of an authenticated session. After this period is exceeded, a user must reauthenticate. |
| `auth_check_interval` | uint32 | Integer number of seconds after which ngrok guarantees it will refresh user state from the identity provider and recheck whether the user is still authorized to access the endpoint. This is the preferred tunable to use to enforce a minimum amount of time after which a revoked user will no longer be able to access the resource. |

#### EndpointOAuthProvider parameters

|&nbsp;| &nbsp;| &nbsp;|
|---|---|---|
| `github` | [EndpointOAuthGitHub](#api-edge-route-o-auth-module-replace-parameters-endpoint-o-auth-git-hub) | configuration for using github as the identity provider |
| `facebook` | [EndpointOAuthFacebook](#api-edge-route-o-auth-module-replace-parameters-endpoint-o-auth-facebook) | configuration for using facebook as the identity provider |
| `microsoft` | [EndpointOAuthMicrosoft](#api-edge-route-o-auth-module-replace-parameters-endpoint-o-auth-microsoft) | configuration for using microsoft as the identity provider |
| `google` | [EndpointOAuthGoogle](#api-edge-route-o-auth-module-replace-parameters-endpoint-o-auth-google) | configuration for using google as the identity provider |
| `linkedin` | [EndpointOAuthLinkedIn](#api-edge-route-o-auth-module-replace-parameters-endpoint-o-auth-linked-in) | configuration for using linkedin as the identity provider |
| `gitlab` | [EndpointOAuthGitLab](#api-edge-route-o-auth-module-replace-parameters-endpoint-o-auth-git-lab) | configuration for using gitlab as the identity provider |

#### EndpointOAuthGitHub parameters

|&nbsp;| &nbsp;| &nbsp;|
|---|---|---|
| `client_id` | string | the OAuth app client ID. retrieve it from the identity provider's dashboard where you created your own OAuth app. optional. if unspecified, ngrok will use its own managed oauth application which has additional restrictions. see the OAuth module docs for more details. if present, client_secret must be present as well. |
| `client_secret` | string | the OAuth app client secret. retrieve if from the identity provider's dashboard where you created your own OAuth app. optional, see all of the caveats in the docs for `client_id`. |
| `scopes` | List&lt;string&gt; | a list of provider-specific OAuth scopes with the permissions your OAuth app would like to ask for. these may not be set if you are using the ngrok-managed oauth app (i.e. you must pass both `client_id` and `client_secret` to set scopes) |
| `email_addresses` | List&lt;string&gt; | a list of email addresses of users authenticated by identity provider who are allowed access to the endpoint |
| `email_domains` | List&lt;string&gt; | a list of email domains of users authenticated by identity provider who are allowed access to the endpoint |
| `teams` | List&lt;string&gt; | a list of github teams identifiers. users will be allowed access to the endpoint if they are a member of any of these teams. identifiers should be in the 'slug' format qualified with the org name, e.g. `org-name/team-name` |
| `organizations` | List&lt;string&gt; | a list of github org identifiers. users who are members of any of the listed organizations will be allowed access. identifiers should be the organization's 'slug' |

#### EndpointOAuthFacebook parameters

|&nbsp;| &nbsp;| &nbsp;|
|---|---|---|
| `client_id` | string | the OAuth app client ID. retrieve it from the identity provider's dashboard where you created your own OAuth app. optional. if unspecified, ngrok will use its own managed oauth application which has additional restrictions. see the OAuth module docs for more details. if present, client_secret must be present as well. |
| `client_secret` | string | the OAuth app client secret. retrieve if from the identity provider's dashboard where you created your own OAuth app. optional, see all of the caveats in the docs for `client_id`. |
| `scopes` | List&lt;string&gt; | a list of provider-specific OAuth scopes with the permissions your OAuth app would like to ask for. these may not be set if you are using the ngrok-managed oauth app (i.e. you must pass both `client_id` and `client_secret` to set scopes) |
| `email_addresses` | List&lt;string&gt; | a list of email addresses of users authenticated by identity provider who are allowed access to the endpoint |
| `email_domains` | List&lt;string&gt; | a list of email domains of users authenticated by identity provider who are allowed access to the endpoint |

#### EndpointOAuthMicrosoft parameters

|&nbsp;| &nbsp;| &nbsp;|
|---|---|---|
| `client_id` | string | the OAuth app client ID. retrieve it from the identity provider's dashboard where you created your own OAuth app. optional. if unspecified, ngrok will use its own managed oauth application which has additional restrictions. see the OAuth module docs for more details. if present, client_secret must be present as well. |
| `client_secret` | string | the OAuth app client secret. retrieve if from the identity provider's dashboard where you created your own OAuth app. optional, see all of the caveats in the docs for `client_id`. |
| `scopes` | List&lt;string&gt; | a list of provider-specific OAuth scopes with the permissions your OAuth app would like to ask for. these may not be set if you are using the ngrok-managed oauth app (i.e. you must pass both `client_id` and `client_secret` to set scopes) |
| `email_addresses` | List&lt;string&gt; | a list of email addresses of users authenticated by identity provider who are allowed access to the endpoint |
| `email_domains` | List&lt;string&gt; | a list of email domains of users authenticated by identity provider who are allowed access to the endpoint |

#### EndpointOAuthGoogle parameters

|&nbsp;| &nbsp;| &nbsp;|
|---|---|---|
| `client_id` | string | the OAuth app client ID. retrieve it from the identity provider's dashboard where you created your own OAuth app. optional. if unspecified, ngrok will use its own managed oauth application which has additional restrictions. see the OAuth module docs for more details. if present, client_secret must be present as well. |
| `client_secret` | string | the OAuth app client secret. retrieve if from the identity provider's dashboard where you created your own OAuth app. optional, see all of the caveats in the docs for `client_id`. |
| `scopes` | List&lt;string&gt; | a list of provider-specific OAuth scopes with the permissions your OAuth app would like to ask for. these may not be set if you are using the ngrok-managed oauth app (i.e. you must pass both `client_id` and `client_secret` to set scopes) |
| `email_addresses` | List&lt;string&gt; | a list of email addresses of users authenticated by identity provider who are allowed access to the endpoint |
| `email_domains` | List&lt;string&gt; | a list of email domains of users authenticated by identity provider who are allowed access to the endpoint |

#### EndpointOAuthLinkedIn parameters

|&nbsp;| &nbsp;| &nbsp;|
|---|---|---|
| `client_id` | string |  |
| `client_secret` | string |  |
| `scopes` | List&lt;string&gt; |  |
| `email_addresses` | List&lt;string&gt; |  |
| `email_domains` | List&lt;string&gt; |  |

#### EndpointOAuthGitLab parameters

|&nbsp;| &nbsp;| &nbsp;|
|---|---|---|
| `client_id` | string |  |
| `client_secret` | string |  |
| `scopes` | List&lt;string&gt; |  |
| `email_addresses` | List&lt;string&gt; |  |
| `email_domains` | List&lt;string&gt; |  |

### Response

Returns a 200 response  on success

<EdgeRouteOAuthModuleReplaceResponse />


#### Fields

|&nbsp;| &nbsp;| &nbsp;|
|---|---|---|
| `enabled` | boolean | `true` if the module will be applied to traffic, `false` to disable. default `true` if unspecified |
| `provider` | [EndpointOAuthProvider](#api-edge-route-o-auth-module-replace-fields-endpoint-o-auth-provider) | an object which defines the identity provider to use for authentication and configuration for who may access the endpoint |
| `options_passthrough` | boolean | Do not enforce authentication on HTTP OPTIONS requests. necessary if you are supporting CORS. |
| `cookie_prefix` | string | the prefix of the session cookie that ngrok sets on the http client to cache authentication. default is 'ngrok.' |
| `inactivity_timeout` | uint32 | Integer number of seconds of inactivity after which if the user has not accessed the endpoint, their session will time out and they will be forced to reauthenticate. |
| `maximum_duration` | uint32 | Integer number of seconds of the maximum duration of an authenticated session. After this period is exceeded, a user must reauthenticate. |
| `auth_check_interval` | uint32 | Integer number of seconds after which ngrok guarantees it will refresh user state from the identity provider and recheck whether the user is still authorized to access the endpoint. This is the preferred tunable to use to enforce a minimum amount of time after which a revoked user will no longer be able to access the resource. |

#### EndpointOAuthProvider fields

|&nbsp;| &nbsp;| &nbsp;|
|---|---|---|
| `github` | [EndpointOAuthGitHub](#api-edge-route-o-auth-module-replace-fields-endpoint-o-auth-git-hub) | configuration for using github as the identity provider |
| `facebook` | [EndpointOAuthFacebook](#api-edge-route-o-auth-module-replace-fields-endpoint-o-auth-facebook) | configuration for using facebook as the identity provider |
| `microsoft` | [EndpointOAuthMicrosoft](#api-edge-route-o-auth-module-replace-fields-endpoint-o-auth-microsoft) | configuration for using microsoft as the identity provider |
| `google` | [EndpointOAuthGoogle](#api-edge-route-o-auth-module-replace-fields-endpoint-o-auth-google) | configuration for using google as the identity provider |
| `linkedin` | [EndpointOAuthLinkedIn](#api-edge-route-o-auth-module-replace-fields-endpoint-o-auth-linked-in) | configuration for using linkedin as the identity provider |
| `gitlab` | [EndpointOAuthGitLab](#api-edge-route-o-auth-module-replace-fields-endpoint-o-auth-git-lab) | configuration for using gitlab as the identity provider |

#### EndpointOAuthGitHub fields

|&nbsp;| &nbsp;| &nbsp;|
|---|---|---|
| `client_id` | string | the OAuth app client ID. retrieve it from the identity provider's dashboard where you created your own OAuth app. optional. if unspecified, ngrok will use its own managed oauth application which has additional restrictions. see the OAuth module docs for more details. if present, client_secret must be present as well. |
| `client_secret` | string | the OAuth app client secret. retrieve if from the identity provider's dashboard where you created your own OAuth app. optional, see all of the caveats in the docs for `client_id`. |
| `scopes` | List&lt;string&gt; | a list of provider-specific OAuth scopes with the permissions your OAuth app would like to ask for. these may not be set if you are using the ngrok-managed oauth app (i.e. you must pass both `client_id` and `client_secret` to set scopes) |
| `email_addresses` | List&lt;string&gt; | a list of email addresses of users authenticated by identity provider who are allowed access to the endpoint |
| `email_domains` | List&lt;string&gt; | a list of email domains of users authenticated by identity provider who are allowed access to the endpoint |
| `teams` | List&lt;string&gt; | a list of github teams identifiers. users will be allowed access to the endpoint if they are a member of any of these teams. identifiers should be in the 'slug' format qualified with the org name, e.g. `org-name/team-name` |
| `organizations` | List&lt;string&gt; | a list of github org identifiers. users who are members of any of the listed organizations will be allowed access. identifiers should be the organization's 'slug' |

#### EndpointOAuthFacebook fields

|&nbsp;| &nbsp;| &nbsp;|
|---|---|---|
| `client_id` | string | the OAuth app client ID. retrieve it from the identity provider's dashboard where you created your own OAuth app. optional. if unspecified, ngrok will use its own managed oauth application which has additional restrictions. see the OAuth module docs for more details. if present, client_secret must be present as well. |
| `client_secret` | string | the OAuth app client secret. retrieve if from the identity provider's dashboard where you created your own OAuth app. optional, see all of the caveats in the docs for `client_id`. |
| `scopes` | List&lt;string&gt; | a list of provider-specific OAuth scopes with the permissions your OAuth app would like to ask for. these may not be set if you are using the ngrok-managed oauth app (i.e. you must pass both `client_id` and `client_secret` to set scopes) |
| `email_addresses` | List&lt;string&gt; | a list of email addresses of users authenticated by identity provider who are allowed access to the endpoint |
| `email_domains` | List&lt;string&gt; | a list of email domains of users authenticated by identity provider who are allowed access to the endpoint |

#### EndpointOAuthMicrosoft fields

|&nbsp;| &nbsp;| &nbsp;|
|---|---|---|
| `client_id` | string | the OAuth app client ID. retrieve it from the identity provider's dashboard where you created your own OAuth app. optional. if unspecified, ngrok will use its own managed oauth application which has additional restrictions. see the OAuth module docs for more details. if present, client_secret must be present as well. |
| `client_secret` | string | the OAuth app client secret. retrieve if from the identity provider's dashboard where you created your own OAuth app. optional, see all of the caveats in the docs for `client_id`. |
| `scopes` | List&lt;string&gt; | a list of provider-specific OAuth scopes with the permissions your OAuth app would like to ask for. these may not be set if you are using the ngrok-managed oauth app (i.e. you must pass both `client_id` and `client_secret` to set scopes) |
| `email_addresses` | List&lt;string&gt; | a list of email addresses of users authenticated by identity provider who are allowed access to the endpoint |
| `email_domains` | List&lt;string&gt; | a list of email domains of users authenticated by identity provider who are allowed access to the endpoint |

#### EndpointOAuthGoogle fields

|&nbsp;| &nbsp;| &nbsp;|
|---|---|---|
| `client_id` | string | the OAuth app client ID. retrieve it from the identity provider's dashboard where you created your own OAuth app. optional. if unspecified, ngrok will use its own managed oauth application which has additional restrictions. see the OAuth module docs for more details. if present, client_secret must be present as well. |
| `client_secret` | string | the OAuth app client secret. retrieve if from the identity provider's dashboard where you created your own OAuth app. optional, see all of the caveats in the docs for `client_id`. |
| `scopes` | List&lt;string&gt; | a list of provider-specific OAuth scopes with the permissions your OAuth app would like to ask for. these may not be set if you are using the ngrok-managed oauth app (i.e. you must pass both `client_id` and `client_secret` to set scopes) |
| `email_addresses` | List&lt;string&gt; | a list of email addresses of users authenticated by identity provider who are allowed access to the endpoint |
| `email_domains` | List&lt;string&gt; | a list of email domains of users authenticated by identity provider who are allowed access to the endpoint |

#### EndpointOAuthLinkedIn fields

|&nbsp;| &nbsp;| &nbsp;|
|---|---|---|
| `client_id` | string |  |
| `client_secret` | string |  |
| `scopes` | List&lt;string&gt; |  |
| `email_addresses` | List&lt;string&gt; |  |
| `email_domains` | List&lt;string&gt; |  |

#### EndpointOAuthGitLab fields

|&nbsp;| &nbsp;| &nbsp;|
|---|---|---|
| `client_id` | string |  |
| `client_secret` | string |  |
| `scopes` | List&lt;string&gt; |  |
| `email_addresses` | List&lt;string&gt; |  |
| `email_domains` | List&lt;string&gt; |  |


## Get HTTPS Edge Route OAuth Module


### Request

GET /edges/https/{edge_id}/routes/{id}/oauth

<EdgeRouteOAuthModuleGetRequest />

### Response

Returns a 200 response  on success

<EdgeRouteOAuthModuleGetResponse />


#### Fields

|&nbsp;| &nbsp;| &nbsp;|
|---|---|---|
| `enabled` | boolean | `true` if the module will be applied to traffic, `false` to disable. default `true` if unspecified |
| `provider` | [EndpointOAuthProvider](#api-edge-route-o-auth-module-get-fields-endpoint-o-auth-provider) | an object which defines the identity provider to use for authentication and configuration for who may access the endpoint |
| `options_passthrough` | boolean | Do not enforce authentication on HTTP OPTIONS requests. necessary if you are supporting CORS. |
| `cookie_prefix` | string | the prefix of the session cookie that ngrok sets on the http client to cache authentication. default is 'ngrok.' |
| `inactivity_timeout` | uint32 | Integer number of seconds of inactivity after which if the user has not accessed the endpoint, their session will time out and they will be forced to reauthenticate. |
| `maximum_duration` | uint32 | Integer number of seconds of the maximum duration of an authenticated session. After this period is exceeded, a user must reauthenticate. |
| `auth_check_interval` | uint32 | Integer number of seconds after which ngrok guarantees it will refresh user state from the identity provider and recheck whether the user is still authorized to access the endpoint. This is the preferred tunable to use to enforce a minimum amount of time after which a revoked user will no longer be able to access the resource. |

#### EndpointOAuthProvider fields

|&nbsp;| &nbsp;| &nbsp;|
|---|---|---|
| `github` | [EndpointOAuthGitHub](#api-edge-route-o-auth-module-get-fields-endpoint-o-auth-git-hub) | configuration for using github as the identity provider |
| `facebook` | [EndpointOAuthFacebook](#api-edge-route-o-auth-module-get-fields-endpoint-o-auth-facebook) | configuration for using facebook as the identity provider |
| `microsoft` | [EndpointOAuthMicrosoft](#api-edge-route-o-auth-module-get-fields-endpoint-o-auth-microsoft) | configuration for using microsoft as the identity provider |
| `google` | [EndpointOAuthGoogle](#api-edge-route-o-auth-module-get-fields-endpoint-o-auth-google) | configuration for using google as the identity provider |
| `linkedin` | [EndpointOAuthLinkedIn](#api-edge-route-o-auth-module-get-fields-endpoint-o-auth-linked-in) | configuration for using linkedin as the identity provider |
| `gitlab` | [EndpointOAuthGitLab](#api-edge-route-o-auth-module-get-fields-endpoint-o-auth-git-lab) | configuration for using gitlab as the identity provider |

#### EndpointOAuthGitHub fields

|&nbsp;| &nbsp;| &nbsp;|
|---|---|---|
| `client_id` | string | the OAuth app client ID. retrieve it from the identity provider's dashboard where you created your own OAuth app. optional. if unspecified, ngrok will use its own managed oauth application which has additional restrictions. see the OAuth module docs for more details. if present, client_secret must be present as well. |
| `client_secret` | string | the OAuth app client secret. retrieve if from the identity provider's dashboard where you created your own OAuth app. optional, see all of the caveats in the docs for `client_id`. |
| `scopes` | List&lt;string&gt; | a list of provider-specific OAuth scopes with the permissions your OAuth app would like to ask for. these may not be set if you are using the ngrok-managed oauth app (i.e. you must pass both `client_id` and `client_secret` to set scopes) |
| `email_addresses` | List&lt;string&gt; | a list of email addresses of users authenticated by identity provider who are allowed access to the endpoint |
| `email_domains` | List&lt;string&gt; | a list of email domains of users authenticated by identity provider who are allowed access to the endpoint |
| `teams` | List&lt;string&gt; | a list of github teams identifiers. users will be allowed access to the endpoint if they are a member of any of these teams. identifiers should be in the 'slug' format qualified with the org name, e.g. `org-name/team-name` |
| `organizations` | List&lt;string&gt; | a list of github org identifiers. users who are members of any of the listed organizations will be allowed access. identifiers should be the organization's 'slug' |

#### EndpointOAuthFacebook fields

|&nbsp;| &nbsp;| &nbsp;|
|---|---|---|
| `client_id` | string | the OAuth app client ID. retrieve it from the identity provider's dashboard where you created your own OAuth app. optional. if unspecified, ngrok will use its own managed oauth application which has additional restrictions. see the OAuth module docs for more details. if present, client_secret must be present as well. |
| `client_secret` | string | the OAuth app client secret. retrieve if from the identity provider's dashboard where you created your own OAuth app. optional, see all of the caveats in the docs for `client_id`. |
| `scopes` | List&lt;string&gt; | a list of provider-specific OAuth scopes with the permissions your OAuth app would like to ask for. these may not be set if you are using the ngrok-managed oauth app (i.e. you must pass both `client_id` and `client_secret` to set scopes) |
| `email_addresses` | List&lt;string&gt; | a list of email addresses of users authenticated by identity provider who are allowed access to the endpoint |
| `email_domains` | List&lt;string&gt; | a list of email domains of users authenticated by identity provider who are allowed access to the endpoint |

#### EndpointOAuthMicrosoft fields

|&nbsp;| &nbsp;| &nbsp;|
|---|---|---|
| `client_id` | string | the OAuth app client ID. retrieve it from the identity provider's dashboard where you created your own OAuth app. optional. if unspecified, ngrok will use its own managed oauth application which has additional restrictions. see the OAuth module docs for more details. if present, client_secret must be present as well. |
| `client_secret` | string | the OAuth app client secret. retrieve if from the identity provider's dashboard where you created your own OAuth app. optional, see all of the caveats in the docs for `client_id`. |
| `scopes` | List&lt;string&gt; | a list of provider-specific OAuth scopes with the permissions your OAuth app would like to ask for. these may not be set if you are using the ngrok-managed oauth app (i.e. you must pass both `client_id` and `client_secret` to set scopes) |
| `email_addresses` | List&lt;string&gt; | a list of email addresses of users authenticated by identity provider who are allowed access to the endpoint |
| `email_domains` | List&lt;string&gt; | a list of email domains of users authenticated by identity provider who are allowed access to the endpoint |

#### EndpointOAuthGoogle fields

|&nbsp;| &nbsp;| &nbsp;|
|---|---|---|
| `client_id` | string | the OAuth app client ID. retrieve it from the identity provider's dashboard where you created your own OAuth app. optional. if unspecified, ngrok will use its own managed oauth application which has additional restrictions. see the OAuth module docs for more details. if present, client_secret must be present as well. |
| `client_secret` | string | the OAuth app client secret. retrieve if from the identity provider's dashboard where you created your own OAuth app. optional, see all of the caveats in the docs for `client_id`. |
| `scopes` | List&lt;string&gt; | a list of provider-specific OAuth scopes with the permissions your OAuth app would like to ask for. these may not be set if you are using the ngrok-managed oauth app (i.e. you must pass both `client_id` and `client_secret` to set scopes) |
| `email_addresses` | List&lt;string&gt; | a list of email addresses of users authenticated by identity provider who are allowed access to the endpoint |
| `email_domains` | List&lt;string&gt; | a list of email domains of users authenticated by identity provider who are allowed access to the endpoint |

#### EndpointOAuthLinkedIn fields

|&nbsp;| &nbsp;| &nbsp;|
|---|---|---|
| `client_id` | string |  |
| `client_secret` | string |  |
| `scopes` | List&lt;string&gt; |  |
| `email_addresses` | List&lt;string&gt; |  |
| `email_domains` | List&lt;string&gt; |  |

#### EndpointOAuthGitLab fields

|&nbsp;| &nbsp;| &nbsp;|
|---|---|---|
| `client_id` | string |  |
| `client_secret` | string |  |
| `scopes` | List&lt;string&gt; |  |
| `email_addresses` | List&lt;string&gt; |  |
| `email_domains` | List&lt;string&gt; |  |


## Delete HTTPS Edge Route OAuth Module


### Request
DELETE /edges/https/{edge_id}/routes/{id}/oauth

<EdgeRouteOAuthModuleDeleteRequest />

### Response
Returns a 204 response with no body on success