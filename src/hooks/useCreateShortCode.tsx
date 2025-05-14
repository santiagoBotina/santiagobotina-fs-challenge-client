import {useState} from "react";
import {isValidUrl} from "@utils/url-validator.util.ts";
import {CreateShortCodeUseCase} from "@domain/usecases/create-short-code.usecase.ts";
import {shortCodeClient} from "@adapters/out/shortcode.client.ts";

export function useCreateShortCode() {
    const [url, setUrl] = useState("");
    const [errors, setErrors] = useState<string[]>([]);
    const [shortCode, setShortCode] = useState("");
    const [loading, setLoading] = useState(false);

    const createShortCodeUsecase = new CreateShortCodeUseCase(shortCodeClient)

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setErrors([]);

        if (!url.trim()) {
            setErrors((prev) => [...prev, "URL cannot be empty"]);
            return;
        }

        if (!isValidUrl(url)) {
            setErrors((prev) => [...prev, "Invalid URL"]);
            return;
        }

        setLoading(true);
        const {
            shortcode: createdShortCode,
            error
        } = await createShortCodeUsecase.execute(url);

        if (error) {
            setLoading(false);
            setErrors([error]);
            return;
        }

        setShortCode(createdShortCode!);
        cleanup();
    };

    const cleanup = () => {
        setLoading(false);
        setErrors([]);
        setUrl("");
    }

    return {
        shortCode,
        url,
        loading,
        errors,
        setUrl,
        handleSubmit,
    };
}
