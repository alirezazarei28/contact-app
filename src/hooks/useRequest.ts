import useSWR from "swr";
import { DataType, ErrorType } from "../Types/types";

const fetcher = (apiURL: string) => fetch(apiURL).then((res) => res.json());


const useRequest = () => {

    const { data, error } = useSWR<DataType, ErrorType>(
        process.env.REACT_APP_API_URL,
        fetcher,
        {
            revalidateIfStale: false,
            revalidateOnFocus: false,
            revalidateOnReconnect: false,
        }
    );

    return { data, error }

}

export default useRequest