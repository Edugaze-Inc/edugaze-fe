import axios from 'axios';
import { useMutation, UseMutationOptions } from 'react-query';
import { baseUrl, InMemoryToken } from 'src/axios';
import { setMeQueryData } from 'src/hooks/useMeQuery';
import { Me } from 'src/types';
import * as cache from 'src/util/cache';
import { Role } from './SignUpForm';

type SignUpParams = {
  username: string;
  email: string;
  password: string;
  role: Role;
};
export function useSignUpMutation(
  options?: UseMutationOptions<Me, Error, SignUpParams>
) {
  const { mutate: signUp, ...rest } = useMutation<Me, Error, SignUpParams>(
    (params) => {
      return axios
        .post(`${baseUrl}/auth/v1/signup`, params)
        .then((res) => res.data);
    },
    {
      ...options,
      onSuccess: (response, ...rest) => {
        cache.setMe(response);
        setMeQueryData(response);
        InMemoryToken.set(response.token);
        options?.onSuccess?.(response, ...rest);
      },
    }
  );
  return { signUp, ...rest };
}
