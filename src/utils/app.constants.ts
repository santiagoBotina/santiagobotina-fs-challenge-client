export type VIEWS_LABELS = 'Shorten' | 'Top 100 URLs';

export type VIEW = {
    path: string;
    label: VIEWS_LABELS;
}

export const AVAILABLE_VIEWS: VIEW[] = [
    {path: '/', label:'Shorten'},
    {path: '/top', label:'Top 100 URLs'}
];

export const ErrorMessages = {
    INVALID_URL: 'Invalid URL',
    EMPTY_URL: 'URL cannot be empty',
    SHORT_CODE_CREATION_FAILED: 'Failed to create short code',
    SHORT_CODE_API_ERROR: 'Short code API error',
}
