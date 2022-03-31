import { useMutation } from 'react-query';
import instance from '../api/instance';

type ConfigTypes = { [key: string]: string };

const usePutQuery = (path = '', config: ConfigTypes) => {
  return useMutation(
    async (formData) => {
      const { data } = await instance.put(path, formData);
      return data;
    },
    {
      ...config,
    },
  );
};

export default usePutQuery;
