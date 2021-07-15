import axios from 'axios';
import { useMutation, UseMutationOptions } from 'react-query';
import { InMemoryToken } from 'src/axios';
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
        .post('http://178.128.140.169:4002/api/v1/auth/signup', params)
        .then((res) => res.data);
    },
    {
      ...options,
      onSuccess: (response, ...rest) => {
        cache.setMe(response);
        InMemoryToken.set(response.token);
        options?.onSuccess?.(response, ...rest);
      },
    }
  );
  return { signUp, ...rest };
}
