import { Me } from 'src/types';

const ME_KEY = 'cache/me';

export function setMe(me: Me) {
  localStorage.setItem(ME_KEY, JSON.stringify(me));
}

export function clearMe() {
  localStorage.removeItem(ME_KEY);
}

export function getMe(): Me | null {
  const me = localStorage.getItem(ME_KEY);
  return me ? (JSON.parse(me) as Me) : null;
}
