"use client";

import { Amplify } from 'aws-amplify';

// Yeh aapki wahi configuration hai jo aapne pehle di thi
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

// Hum yahan client-side par Amplify ko configure kar rahe hain
// Next.js ke liye 'ssr: true' flag zaroori hai
Amplify.configure(amplifyConfig, { ssr: true });

export default function ConfigureAmplifyClientSide() {
  // Yeh component koi UI render nahi karega, sirf configuration ke liye hai
  return null;
}