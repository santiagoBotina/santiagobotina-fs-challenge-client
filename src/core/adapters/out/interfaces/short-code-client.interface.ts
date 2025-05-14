import type {CreateShortCodeClientResponse} from "@adapters/out/interfaces/responses.interface.ts";

export interface IShortCodeClient {
    createShortCode(url: string): Promise<CreateShortCodeClientResponse>;
}
