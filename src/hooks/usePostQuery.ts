import { useMutation } from 'react-query';
import instance from '../api/instance';

type ConfigTypes = { [key: string]: () => void };

const usePostQuery = (path = '', config: ConfigTypes) => {
  return useMutation(
    async (formData) => {
      const { data } = await instance.post(path, formData);
      return data;
    },
    {
      ...config,
    },
  );
};

export default usePostQuery;
