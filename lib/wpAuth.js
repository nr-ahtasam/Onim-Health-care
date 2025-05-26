export function getAuthHeaders() {
  const WP_API_USER = process.env.WP_API_USER;
  const WP_API_PASS = process.env.WP_API_PASS;
  const BASE_URL = process.env.NEXT_PUBLIC_API_REST_URL;

  if (!WP_API_USER || !WP_API_PASS || !BASE_URL) {
    throw new Error('Missing WP API credentials or base URL in environment');
  }

  const basicAuth = Buffer
    .from(`${WP_API_USER}:${WP_API_PASS}`)
    .toString('base64');

  return {
    baseUrl: BASE_URL,
    headers: {
      Authorization: `Basic ${basicAuth}`,
      'Content-Type': 'application/json',
    },
  };
}
