import { useQuery } from 'react-query';
import axios from 'axios';
import { Me } from 'src/types';
import { queryClient } from 'src/App';
import { InMemoryToken } from 'src/axios';
import * as cache from 'src/util/cache';

const ME_KEY = 'me-query';

export function useMeQuery() {
  return useQuery<Me>(ME_KEY, () =>
    axios
      .get('http://178.128.140.169:4002/api/v1/auth/verify')
      .then((res) => res.data)
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
