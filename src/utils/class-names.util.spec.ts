import {cn} from "./class-names.util";

describe('cn', () => {
    it('joins class names', () => {
        expect(cn('class1', 'class2')).toBe('class1 class2');
    });

    it('filters out falsy values', () => {
        expect(cn('class1', false, 'class2', undefined)).toBe('class1 class2');
    });

    it('handles null values', () => {
        expect(cn('class1', null, 'class2')).toBe('class1 class2');
    });
})
