import type {
    CreateShortCodeClientResponse,
    GetTopShortCodesClientResponse
} from "@adapters/out/interfaces/responses.types.ts";

export interface IShortCodeClient {
    createShortCode(url: string): Promise<CreateShortCodeClientResponse>;
    getTopShortCodes(): Promise<GetTopShortCodesClientResponse>;
}
