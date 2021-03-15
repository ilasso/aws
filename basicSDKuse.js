<!--
 * Copyright 2010-2019 Amazon.com, Inc. or its affiliates. All Rights Reserved.
 *
 * This file is licensed under the Apache License, Version 2.0 (the "License").
 * You may not use this file except in compliance with the License. A copy of
 * the License is located at
 *
 * http://aws.amazon.com/apache2.0/
 *
 * This file is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR
 * CONDITIONS OF ANY KIND, either express or implied. See the License for the
 * specific language governing permissions and limitations under the License.
-->

<!--
-->

<!-- ABOUT THIS BROWSER SAMPLE: This sample is related to the SDK for JavaScript Developer Guide at
// https://docs.aws.amazon.com/sdk-for-javascript/v2/developer-guide/welcome.html
-->

    // Set your needed values
    var IDENTITY_POOL_ID = 'Your Cognito identity pool ID';
    var ACCOUNT_ID = 'Your AWS account ID';
    var REGION = 'Your AWS region';

    // Initialize the Amazon Cognito credentials provider
    AWS.config.region = REGION; // Region
    AWS.config.credentials = new AWS.CognitoIdentityCredentials({IdentityPoolId: IDENTITY_POOL_ID,});

    var getIdParams = {
      IdentityPoolId: IDENTITY_POOL_ID,
      AccountId: ACCOUNT_ID
    };

    var cognitoidentity = new AWS.CognitoIdentity({apiVersion: '2014-06-30'});

    cognitoidentity.getId(getIdParams, function(err, data) {
      if (err) {
        results.innerHTML = "Error" + err;
      } else {
        results.innerHTML =  "Cognito Identity ID is " + data.IdentityId;
      }
    });
  </script>