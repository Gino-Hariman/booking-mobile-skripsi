import axios from "axios";
import { useQuery } from "react-query";
import instance from "../api/instance";

type ConfigTypes = { [key: string]: () => void };

// function fetchGroup(path: string): Promise<string[]> {
//   return typeof path === 'undefined'
//     ? Promise.reject(new Error('Invalid id'))
//     : axios.get(path).then((response) => response.data);
// }

const useGetQuery = (queryId = "1", path = "", config: ConfigTypes) => {
  return useQuery(
    queryId,
    async () => {
      const { data } = await instance.get(path);
      return data;
    },
    {
      ...config,
    }
  );
};

export default useGetQuery;
