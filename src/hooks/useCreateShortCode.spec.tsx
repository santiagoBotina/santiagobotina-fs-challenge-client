import { act } from "react";
import { renderHook } from "@testing-library/react";
import { useCreateShortCode } from "./useCreateShortCode";
import { CreateShortCodeUseCase } from "@domain/usecases/create-short-code.usecase.ts";
import * as urlValidator from "@utils/url-validator.util.ts";
import {ErrorMessages} from "@utils/app.constants.ts";

jest.mock('@domain/usecases/create-short-code.usecase.ts');
jest.mock('@adapters/out/shortcode.client.ts', () => ({
    shortCodeClient: {},
}));

const mockExecute = jest.fn();

function createMockFormEvent(): React.FormEvent {
    return {
        preventDefault: jest.fn(),
    } as unknown as React.FormEvent;
}

beforeEach(() => {
    jest.clearAllMocks();
    (CreateShortCodeUseCase as jest.Mock).mockImplementation(() => ({
        execute: mockExecute,
    }));
});

describe('useCreateShortCode', () => {
    it('should show error if URL is empty', async () => {
        const { result } = renderHook(() => useCreateShortCode());

        await act(async () => {
            await result.current.handleSubmit(createMockFormEvent());
        });

        expect(result.current.errors).toContain('URL cannot be empty');
    });

    it('should show error if URL is invalid', async () => {
        jest.spyOn(urlValidator, 'isValidUrl').mockReturnValue(false);

        const { result } = renderHook(() => useCreateShortCode());

        act(() => {
            result.current.setUrl('invalid-url');
        });

        await act(async () => {
            await result.current.handleSubmit(createMockFormEvent());
        });

        expect(result.current.errors).toContain('Invalid URL');
    });

    it('handles shortcode creation success', async () => {
        jest.spyOn(urlValidator, 'isValidUrl').mockReturnValue(true);
        mockExecute.mockResolvedValue({ shortcode: 'abc123', error: null });

        const { result } = renderHook(() => useCreateShortCode());

        act(() => {
            result.current.setUrl('https://example.com');
        });

        await act(async () => {
            await result.current.handleSubmit(createMockFormEvent());
        });

        expect(result.current.shortCode).toBe('abc123');
        expect(result.current.errors).toEqual([]);
        expect(result.current.url).toBe('');
    });

    it('should handle error returned by use case', async () => {
        jest.spyOn(urlValidator, 'isValidUrl').mockReturnValue(true);
        mockExecute.mockResolvedValue({ shortcode: null, error: ErrorMessages.SHORT_CODE_CREATION_FAILED });

        const { result } = renderHook(() => useCreateShortCode());

        act(() => {
            result.current.setUrl('https://example.com');
        });

        await act(async () => {
            await result.current.handleSubmit(createMockFormEvent());
        });

        expect(result.current.shortCode).toBe('');
        expect(result.current.errors).toEqual([ErrorMessages.SHORT_CODE_CREATION_FAILED]);
    });
});
