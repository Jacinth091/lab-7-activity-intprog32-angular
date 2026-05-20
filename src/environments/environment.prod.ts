export const environment = {
  production: true,
  apiUrl: (typeof process !== 'undefined' ? process.env['NG_APP_API_URL'] : undefined) || 'http://localhost:4000'
};
