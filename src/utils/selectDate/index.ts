import dayjs from 'dayjs';

export const getDateByIndex = () => {
  return [1, 2, 3, 4].map((i) => dayjs().add(i, 'day'));
};
