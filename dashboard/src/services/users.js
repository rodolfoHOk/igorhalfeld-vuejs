export default (httpClient) => ({
  getMe: async () => {
    const response = await httpClient.get('/users/me');

    return response.data;
  },
});
