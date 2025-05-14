export type VIEWS_LABELS = 'Shorten' | 'Top 100 URLs';

export type VIEW = {
    path: string;
    label: VIEWS_LABELS;
}

export const AVAILABLE_VIEWS: VIEW[] = [
    {path: '/', label:'Shorten'},
    {path: '/top', label:'Top 100 URLs'}
];
