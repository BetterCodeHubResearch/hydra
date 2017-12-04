/**
 * Hydra OAuth2 & OpenID Connect Server
 * Please refer to the user guide for in-depth documentation: https://ory.gitbooks.io/hydra/content/   Hydra offers OAuth 2.0 and OpenID Connect Core 1.0 capabilities as a service. Hydra is different, because it works with any existing authentication infrastructure, not just LDAP or SAML. By implementing a consent app (works with any programming language) you build a bridge between Hydra and your authentication infrastructure. Hydra is able to securely manage JSON Web Keys, and has a sophisticated policy-based access control you can use if you want to. Hydra is suitable for green- (new) and brownfield (existing) projects. If you are not familiar with OAuth 2.0 and are working on a greenfield project, we recommend evaluating if OAuth 2.0 really serves your purpose. Knowledge of OAuth 2.0 is imperative in understanding what Hydra does and how it works.   The official repository is located at https://github.com/ory/hydra   ### Important REST API Documentation Notes  The swagger generator used to create this documentation does currently not support example responses. To see request and response payloads click on **\"Show JSON schema\"**: ![Enable JSON Schema on Apiary](https://storage.googleapis.com/ory.am/hydra/json-schema.png)   The API documentation always refers to the latest tagged version of ORY Hydra. For previous API documentations, please refer to https://github.com/ory/hydra/blob/<tag-id>/docs/api.swagger.yaml - for example:  0.9.13: https://github.com/ory/hydra/blob/v0.9.13/docs/api.swagger.yaml 0.8.1: https://github.com/ory/hydra/blob/v0.8.1/docs/api.swagger.yaml
 *
 * OpenAPI spec version: Latest
 * Contact: hi@ory.am
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 *
 * Swagger Codegen version: 2.2.3
 *
 * Do not edit the class manually.
 *
 */

;(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['ApiClient'], factory)
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'))
  } else {
    // Browser globals (root is window)
    if (!root.HydraOAuth2OpenIdConnectServer) {
      root.HydraOAuth2OpenIdConnectServer = {}
    }
    root.HydraOAuth2OpenIdConnectServer.Context = factory(
      root.HydraOAuth2OpenIdConnectServer.ApiClient
    )
  }
})(this, function(ApiClient) {
  'use strict'

  /**
   * The Context model module.
   * @module model/Context
   * @version Latest
   */

  /**
   * Constructs a new <code>Context</code>.
   * Context contains an access token&#39;s session data
   * @alias module:model/Context
   * @class
   */
  var exports = function() {
    var _this = this
  }

  /**
   * Constructs a <code>Context</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/Context} obj Optional instance to populate.
   * @return {module:model/Context} The populated <code>Context</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports()

      if (data.hasOwnProperty('accessTokenExtra')) {
        obj['accessTokenExtra'] = ApiClient.convertToType(
          data['accessTokenExtra'],
          { String: Object }
        )
      }
      if (data.hasOwnProperty('clientId')) {
        obj['clientId'] = ApiClient.convertToType(data['clientId'], 'String')
      }
      if (data.hasOwnProperty('grantedScopes')) {
        obj['grantedScopes'] = ApiClient.convertToType(data['grantedScopes'], [
          'String'
        ])
      }
      if (data.hasOwnProperty('issuer')) {
        obj['issuer'] = ApiClient.convertToType(data['issuer'], 'String')
      }
      if (data.hasOwnProperty('subject')) {
        obj['subject'] = ApiClient.convertToType(data['subject'], 'String')
      }
    }
    return obj
  }

  /**
   * Extra represents arbitrary session data.
   * @member {Object.<String, Object>} accessTokenExtra
   */
  exports.prototype['accessTokenExtra'] = undefined
  /**
   * ClientID is id of the client the token was issued for..
   * @member {String} clientId
   */
  exports.prototype['clientId'] = undefined
  /**
   * GrantedScopes is a list of scopes that the subject authorized when asked for consent.
   * @member {Array.<String>} grantedScopes
   */
  exports.prototype['grantedScopes'] = undefined
  /**
   * Issuer is the id of the issuer, typically an hydra instance.
   * @member {String} issuer
   */
  exports.prototype['issuer'] = undefined
  /**
   * Subject is the identity that authorized issuing the token, for example a user or an OAuth2 app. This is usually a uuid but you can choose a urn or some other id too.
   * @member {String} subject
   */
  exports.prototype['subject'] = undefined

  return exports
})
