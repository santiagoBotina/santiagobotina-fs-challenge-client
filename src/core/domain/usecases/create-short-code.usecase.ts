import {ShortCodeClient} from "@adapters/out/short-code.client";
import type {IShortCodeClient} from "@adapters/out/interfaces/short-code-client.interface.ts";
import type {CreateShortCodeClientResponse} from "@adapters/out/interfaces/responses.interface.ts";

export class CreateShortCodeUseCase {
    private readonly shortCodeClient: IShortCodeClient;

    constructor(shortCodeClient: ShortCodeClient) {
        this.shortCodeClient = shortCodeClient;
    }

    async execute(url: string): Promise<CreateShortCodeClientResponse> {
        return this.shortCodeClient.createShortCode(url);
    }
}
