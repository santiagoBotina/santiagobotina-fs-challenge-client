import type {IShortCodeClient} from "@adapters/out/interfaces/short-code-client.interface.ts";
import {GetTopShortCodesUseCase} from "@domain/usecases/get-top-short-codes.usecase.ts";
import type {GetTopShortCodesClientResponse} from "@adapters/out/interfaces/responses.types.ts";
import {ErrorMessages} from "@utils/app.constants.ts";

describe('GetTopShortCodesUseCase', () => {
    const mockClient: jest.Mocked<IShortCodeClient> = {
        createShortCode: jest.fn(),
        getTopShortCodes: jest.fn(),
    };

    const useCase = new GetTopShortCodesUseCase(mockClient);

    it('should return top short codes on success', async () => {
        const mockResponse: GetTopShortCodesClientResponse = {
            shortcodes: [
                { id: 1, full_url: 'https://example.com', shortcode: 'abc123', click_count: 100 },
            ],
            error: null
        };

        mockClient.getTopShortCodes.mockResolvedValue(mockResponse);

        const result = await useCase.execute();

        expect(mockClient.getTopShortCodes).toHaveBeenCalled();
        expect(result).toEqual(mockResponse);
    });

    it('should return an error on failure', async () => {
        const mockError: GetTopShortCodesClientResponse = {
            shortcodes: null,
            error: ErrorMessages.TOP_SHORT_CODES_FAILED
        };

        mockClient.getTopShortCodes.mockResolvedValue(mockError);

        const result = await useCase.execute();

        expect(result).toEqual(mockError);
    });
})
