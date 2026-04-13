export const environment = {
  production: false,
  apiUrl: 'http://localhost:8081/api/v1',
  keycloak: {
    authServerUrl: 'http://localhost:8080',
    realm: 'train',
    clientId: 'train-web',
    redirectUri: 'http://localhost:4200/auth/callback'
  },
  oauth: {
    google: {
      clientId: 'YOUR_GOOGLE_CLIENT_ID.apps.googleusercontent.com'
    },
    apple: {
      clientId: 'YOUR_APPLE_CLIENT_ID'
    }
  }
};
