import axios from 'axios';
import { useMutation, UseMutationOptions } from 'react-query';
import { InMemoryToken } from 'src/axios';
import { setMeQueryData } from 'src/hooks/useMeQuery';
import { Me } from 'src/types';
import * as cache from 'src/util/cache';

type SignInParams = {
  email: string;
  password: string;
};

export function useSignInMutation(
  options?: UseMutationOptions<Me, Error, SignInParams>
) {
  const { mutate: signIn, ...rest } = useMutation<Me, Error, SignInParams>(
    (params) => {
      return axios
        .post('http://178.128.140.169:4002/api/v1/auth/login', params)
        .then((res) => res.data);
    },
    {
      ...options,
      onSuccess: (response, ...rest) => {
        cache.setMe(response);
        InMemoryToken.set(response.token);
        setMeQueryData(response);
        options?.onSuccess?.(response, ...rest);
      },
    }
  );
  return { signIn, ...rest };
}
