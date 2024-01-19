import React from 'react';
import { CognitoUserPool } from "amazon-cognito-identity-js";

const poolData = {
  UserPoolId: 'us-east-2_BDMnoSlGB',
  ClientId: '6tren9jsqeb8g3bqrsabbb8mvg'
}

export default new CognitoUserPool(poolData);