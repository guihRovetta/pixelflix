const baseUrl = 'http://localhost:3333/';

function useFetch(path, data) {
  async function postData() {
    const URL = `${baseUrl}${path}`;
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
