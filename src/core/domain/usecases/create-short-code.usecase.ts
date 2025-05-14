import type {IShortCodeClient} from "@adapters/out/interfaces/short-code-client.interface.ts";
import type {CreateShortCodeClientResponse} from "@adapters/out/interfaces/responses.types.ts";

export class CreateShortCodeUseCase {
    private readonly shortCodeClient: IShortCodeClient;

    constructor(shortCodeClient: IShortCodeClient) {
        this.shortCodeClient = shortCodeClient;
    }

    async execute(url: string): Promise<CreateShortCodeClientResponse> {
        return this.shortCodeClient.createShortCode(url);
    }
}
