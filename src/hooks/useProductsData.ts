import { IProductDataResponse } from "../interfaces/product.interface";
import { useQuery } from "@tanstack/react-query";
import axios, { AxiosPromise } from "axios";

const API_URL = "https://raw.githubusercontent.com/BR-Darkness/Desafio_-_MKS_Sistemas/main/src/data/data.json";

const fetchData = async (): AxiosPromise<IProductDataResponse> => {
    const response = await axios.get<IProductDataResponse>(API_URL);
    return response;
}

export function useProductData() {
    const query = useQuery({
        queryFn: fetchData,
        queryKey: ['products-data'],
    })

    return {
        ...query,
        data: query.data?.data
    };
}