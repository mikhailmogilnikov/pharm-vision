import { GEOSUGGESTIONS_URL } from '../../config/urls';

export const getGeoSuggestions = (query: string) =>
  fetch(GEOSUGGESTIONS_URL, {
    method: 'POST',
    mode: 'cors',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Token ${process.env.NEXT_PUBLIC_DADATA_API_URL}`,
      // 'X-Secret': process.env.NEXT_PUBLIC_DADATA_SECRET_KEY || '',
    },
    body: JSON.stringify({
      query,
      count: 10,
      from_bound: { value: 'city' },
      to_bound: { value: 'city' },
    }),
  });
