import { useQuery, UseQueryOptions } from 'react-query';
import axios, { AxiosError } from 'axios';
import { queryClient } from 'src/App';

const MEETINGS_KEY = 'meetings-key';

type MeetingsQueryStatus = 'incoming' | 'ended';

export type Meeting = {
  title: string;
  course: string;
  host: string;
  startTime: string;
  endTime: string;
};

export function useMeetingsQuery(
  options?: UseQueryOptions<Meeting[], AxiosError>,
  status: MeetingsQueryStatus = 'incoming'
) {
  return useQuery<Meeting[], AxiosError>(
    [MEETINGS_KEY, status],
    () =>
      axios
        .get(`http://134.209.132.81:4000/api/v1/meetings/list?status=${status}`)
        .then((res) => res.data),
    options
  );
}

export const invalidateMeetingsQuery = () =>
  queryClient.invalidateQueries([MEETINGS_KEY, 'incoming']);
