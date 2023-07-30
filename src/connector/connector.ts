//create connector function to connect REST API with fetch with error handling
export const connector = async (url: string, method: string, body?: any) => {
  const response = await fetch(`${API_GATEWAY_ENDPOINT}${url}`, {
    method: method,
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(body),
  });
  if (response.ok) {
    const data = await response.json();
    return data;
  } else {
    const error = await response.json();
    throw new Error(error.message);
  }
};
