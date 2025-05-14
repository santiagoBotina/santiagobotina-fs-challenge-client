import {CreateShortCodeUseCase} from "@domain/usecases/create-short-code.usecase.ts";
import type {IShortCodeClient} from "@adapters/out/interfaces/short-code-client.interface.ts";
import type {CreateShortCodeClientResponse} from "@adapters/out/interfaces/responses.types.ts";

describe('CreateShortCodeUseCase', () => {
    const mockClient: jest.Mocked<IShortCodeClient> = {
        createShortCode: jest.fn(),
        getTopShortCodes: jest.fn(),
    };

    const useCase = new CreateShortCodeUseCase(mockClient);

    it('should return a short code on success', async () => {
        const mockResponse: CreateShortCodeClientResponse = {
            shortcode: 'abc123',
            error: null
        };

        mockClient.createShortCode.mockResolvedValue(mockResponse);

        const result = await useCase.execute('https://example.com');

        expect(mockClient.createShortCode).toHaveBeenCalledWith('https://example.com');
        expect(result).toEqual(mockResponse);
    });

    it('should return an error on failure', async () => {
        const mockError: CreateShortCodeClientResponse = {
            shortcode: null,
            error: 'Something went wrong'
        };

        mockClient.createShortCode.mockResolvedValue(mockError);

        const result = await useCase.execute('https://example.com');

        expect(result).toEqual(mockError);
    });
});
