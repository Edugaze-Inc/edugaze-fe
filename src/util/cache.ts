import { Me } from 'src/types';

const ME_KEY = 'cache/me';

export function setMe(me: Me) {
  localStorage.setItem(ME_KEY, JSON.stringify(me));
}

export function getMe(): Me | null {
  const me = localStorage.getItem(ME_KEY);
  const parsedMe = JSON.parse(ME_KEY) as Me;
  return me ? parsedMe : null;
}
