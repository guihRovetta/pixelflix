import { URL_SERVER } from '../config';

async function create(path, data) {
  const url = `${URL_SERVER}${path}`;

  const response = await fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  });

  return response;
}

export default { create };
