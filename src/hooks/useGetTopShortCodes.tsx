import {useEffect, useState} from "react";
import {ShortCode} from "@domain/model/short-code.entity.ts";
import {GetTopShortCodesUseCase} from "@domain/usecases/get-top-short-codes.usecase.ts";
import {shortCodeClient} from "@adapters/out/short-code.client.ts";

const getTopShortCodesUseCase = new GetTopShortCodesUseCase(shortCodeClient)

export function useGetTopShortCodes() {
    const [topUrls, setTopUrls] = useState<ShortCode[]>([]);
    const [error, setError] = useState<string>('');
    const [loading, setLoading] = useState<boolean>(false);

    useEffect(() => {
        const getTopShortCodes = async () => {
            setLoading(true);
            const {shortcodes, error} = await getTopShortCodesUseCase.execute();

            if (error) {
                setLoading(false);
                setError(error);
                return;
            }

            if (shortcodes) {
                setLoading(false);
                setTopUrls(shortcodes);
            }
        }

        getTopShortCodes()
    }, []);

    return {
        topUrls,
        loading,
        error,
    }
}
