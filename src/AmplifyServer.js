import { createServerRunner } from '@aws-amplify/adapter-nextjs';
import { Amplify } from 'aws-amplify';

// Aapki wahi configuration
const amplifyConfig = {
  Auth: {
    Cognito: {
      region: 'eu-central-1', 
      userPoolId: 'eu-central-1_zxhlRo8Un', 
      userPoolClientId: '2q3pqivd1bkfkp7o9bc0qj7i5p', 
      loginWith: {
        oauth: {
          domain: 'eu-central-1zxhIro8un.auth.eu-central-1.amazoncognito.com',
          scopes: ['email', 'profile', 'openid'],
          redirectSignIn: ['http://localhost:3000/admin/dashboard'], 
          redirectSignOut: ['http://localhost:3000/login'], 
          responseType: 'code'
        }
      }
    }
  }
};

Amplify.configure(amplifyConfig, { ssr: true });

export const { runWithAmplifyServerContext } = createServerRunner({
  config: amplifyConfig,
});