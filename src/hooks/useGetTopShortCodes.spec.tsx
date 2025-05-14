import { renderHook, waitFor } from '@testing-library/react';
import { useGetTopShortCodes } from './useGetTopShortCodes';
import {ErrorMessages} from "@utils/app.constants.ts";

const mockShortcodes = [
    { id: 1, short_code: 'abc123', full_url: 'https://example.com', click_count: 10 },
    { id: 2, short_code: 'xyz789', full_url: 'https://google.com', click_count: 10 },
];

const mockExecute = jest.fn();

jest.mock('@domain/usecases/get-top-short-codes.usecase.ts', () => ({
    GetTopShortCodesUseCase: jest.fn().mockImplementation(() => ({
        execute: mockExecute,
    })),
}));

jest.mock('@adapters/out/shortcode.client.ts', () => ({
    shortCodeClient: {},
}));

describe('useGetTopShortCodes', () => {
    beforeEach(() => {
        jest.clearAllMocks();
    });

    it('fetches and sets top shortcodes successfully', async () => {
        mockExecute.mockResolvedValue({
            shortcodes: mockShortcodes,
            error: null,
        });

        const { result } = renderHook(() => useGetTopShortCodes());

        await waitFor(() => {
            expect(result.current.loading).toBeFalsy();
        });

        expect(result.current.error).toBe('');
        expect(result.current.topUrls).toEqual(mockShortcodes);
    });

    it('sets error when fetching shortcodes fails', async () => {
        mockExecute.mockResolvedValue({
            shortcodes: null,
            error: ErrorMessages.TOP_SHORT_CODES_FAILED,
        });

        const { result } = renderHook(() => useGetTopShortCodes());

        await waitFor(() => {
            expect(result.current.loading).toBeFalsy();
        });

        expect(result.current.error).toBe(ErrorMessages.TOP_SHORT_CODES_FAILED);
        expect(result.current.topUrls).toEqual([]);
    });
});
