import {isValidUrl} from "./url-validator.util.ts";

describe('isValidUrl', () => {
    it('returns true for valid URLs', () => {
        expect(isValidUrl('https://www.example.com')).toBeTruthy();
        expect(isValidUrl('http://example.com')).toBeTruthy();
        expect(isValidUrl('https://example.com/path?query=string#fragment')).toBeTruthy();
    });

    it('returns false for invalid URLs', () => {
        expect(isValidUrl('invalid-url')).toBeFalsy();
        expect(isValidUrl('ftp://example.com')).toBeFalsy();
        expect(isValidUrl('htp://example.com')).toBeFalsy();
        expect(isValidUrl('https//example.com')).toBeFalsy();
        expect(isValidUrl('http:/example.com')).toBeFalsy();
    });
})
