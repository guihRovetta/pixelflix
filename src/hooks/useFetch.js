import { URL_SERVER } from '../config';

function useFetch(path, data) {
  async function postData() {
    const URL = `${URL_SERVER}${path}`;
    const response = await fetch(URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });
    return response.json();
  }

  return { postData };
}

export default useFetch;
