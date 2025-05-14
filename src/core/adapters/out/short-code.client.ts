import type {IShortCodeClient} from "@adapters/out/interfaces/short-code-client.interface.ts";
import type {
    CreateShortCodeAPIResponse,
    CreateShortCodeClientResponse,
} from "@adapters/out/interfaces/responses.interface.ts";
import {ErrorMessages} from "@utils/app.constants.ts";

export class ShortCodeClient implements IShortCodeClient{
    private readonly baseUrl: string;
    private readonly errorResponse: CreateShortCodeClientResponse = {
        shortcode: null,
        error: ErrorMessages.SHORT_CODE_CREATION_FAILED
    }

    constructor(baseUrl: string) {
        this.baseUrl = baseUrl;
    }

    async createShortCode(url: string): Promise<CreateShortCodeClientResponse> {
        try {
            const response = await fetch(`${this.baseUrl}/short_urls.json`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ full_url: url }),
            });

            if (!response.ok) {
                return this.errorResponse
            }

            const data = await response.json() as CreateShortCodeAPIResponse;

            return {
                shortcode: data.short_code,
                error: null
            };
        } catch {
            return this.errorResponse
        }
    }
}

export const shortCodeClient = new ShortCodeClient(import.meta.env.VITE_SHORT_CODE_API_URL!);
