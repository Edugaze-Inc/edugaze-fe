import { useQuery, UseQueryOptions } from 'react-query';
import axios from 'axios';
import { Me } from 'src/types';
import { queryClient } from 'src/App';
import { baseUrl, InMemoryToken } from 'src/axios';
import * as cache from 'src/util/cache';

const ME_KEY = 'me-query';

export function useMeQuery(options?: UseQueryOptions<Me>) {
  return useQuery<Me>(
    ME_KEY,
    () => axios.get(`${baseUrl}/auth/v1/verify`).then((res) => res.data),
    {
      refetchOnMount: false,
      enabled: !!InMemoryToken.get(),
      ...options,
    }
  );
}

export function setMeQueryData(me?: Me) {
  queryClient.setQueryData(ME_KEY, me);
}

export function logout() {
  InMemoryToken.set();
  setMeQueryData();
  cache.clearMe();
}
