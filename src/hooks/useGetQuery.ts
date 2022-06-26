import { useQuery } from "react-query";
import instance from "../api/instance";

type ConfigTypes = { [key: string]: () => void };

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
