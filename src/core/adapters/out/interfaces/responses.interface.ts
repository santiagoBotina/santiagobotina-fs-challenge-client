export interface CreateShortCodeAPIResponse {
    short_code: string;
}

export interface CreateShortCodeClientResponse {
    shortcode: string | null;
    error: string | null;
}
