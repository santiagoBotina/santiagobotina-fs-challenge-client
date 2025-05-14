import type {IShortCodeClient} from "@adapters/out/interfaces/short-code-client.interface.ts";
import type {
    CreateShortCodeAPIResponse,
    CreateShortCodeClientResponse, GetTopShortCodesAPIResponse, GetTopShortCodesClientResponse,
} from "@adapters/out/interfaces/responses.types.ts";
import {ErrorMessages} from "@utils/app.constants.ts";

export class ShortCodeClient implements IShortCodeClient{
    private readonly baseUrl: string;
    private readonly creationErrorResponse: CreateShortCodeClientResponse = {
        shortcode: null,
        error: ErrorMessages.SHORT_CODE_CREATION_FAILED
    }

    private readonly getTopErrorResponse: GetTopShortCodesClientResponse = {
        shortcodes: null,
        error: ErrorMessages.TOP_SHORT_CODES_FAILED
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
                return this.creationErrorResponse
            }

            const data = await response.json() as CreateShortCodeAPIResponse;

            return {
                shortcode: data.short_code,
                error: null
            };
        } catch {
            return this.creationErrorResponse
        }
    }

    async getTopShortCodes(): Promise<GetTopShortCodesClientResponse> {
        try {
            const response = await fetch(this.baseUrl, {
                method: "GET",
                headers: {
                    "Content-Type": "application/json",
                },
            });

            if (!response.ok) {
                return this.getTopErrorResponse
            }

            const data = await response.json() as GetTopShortCodesAPIResponse;

            return {
                shortcodes: data.urls,
                error: null
            }
        } catch {
            return this.getTopErrorResponse;
        }
    }
}

export const shortCodeClient = new ShortCodeClient(import.meta.env.VITE_SHORT_CODE_API_URL!);
