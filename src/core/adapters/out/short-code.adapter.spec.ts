import {ShortCodeAdapter} from "./short-code.adapter.ts";
import type {IShortCodeClient} from "@adapters/out/interfaces/short-code-client.interface.ts";
import {ErrorMessages} from "@utils/app.constants.ts";

global.fetch = jest.fn() as jest.Mock;

describe('ShortCodeClient', () => {
    let shortCodeClient: IShortCodeClient;

    beforeAll(() => {
        shortCodeClient = new ShortCodeAdapter('https://localhost:3000');
    })

    describe('createShortCode', () => {
        const fullUrl = 'https://example.com';

        it('should return a short code when the request is successful', async () => {
            const mockResponse = { short_code: 'short123' };
            (global.fetch as jest.Mock).mockResolvedValueOnce({
                ok: true,
                json: jest.fn().mockResolvedValueOnce(mockResponse),
            });

            const result = await shortCodeClient.createShortCode(fullUrl);

            expect(result).toEqual({ shortcode: 'short123', error: null });
        });

        it('should return an error response when the request fails', async () => {
            (global.fetch as jest.Mock).mockResolvedValueOnce({
                ok: false,
            });

            const result = await shortCodeClient.createShortCode(fullUrl);

            expect(result).toEqual({
                shortcode: null,
                error: ErrorMessages.SHORT_CODE_CREATION_FAILED,
            });
        });
    });
});
