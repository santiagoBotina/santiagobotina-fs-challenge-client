import type {GetTopShortCodesClientResponse} from "@adapters/out/interfaces/responses.types.ts";
import type {IShortCodeClient} from "@adapters/out/interfaces/short-code-client.interface.ts";

export class GetTopShortCodesUseCase {
    private readonly shortCodeClient: IShortCodeClient;

    constructor(shortCodeClient: IShortCodeClient) {
        this.shortCodeClient = shortCodeClient;
    }

    async execute(): Promise<GetTopShortCodesClientResponse> {
        return this.shortCodeClient.getTopShortCodes();
    }
}
