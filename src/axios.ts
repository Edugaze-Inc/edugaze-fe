import axios from 'axios';

axios.interceptors.request.use((req) => {
  if (InMemoryToken.get())
    req.headers['Authorization'] = `Bearer ${InMemoryToken.get()}`;
  return req;
});

export const InMemoryToken = (() => {
  let _token: string | undefined;
  const get = () => _token;
  const set = (token?: string) => {
    _token = token;
  };
  return { get, set };
})();

export const baseUrl = 'https://api.edugaze.me';
