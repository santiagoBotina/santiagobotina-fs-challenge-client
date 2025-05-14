import {ShortCode} from "@domain/model/short-code.entity.ts";

export type CreateShortCodeAPIResponse = {
    short_code: string;
}

export type CreateShortCodeClientResponse = {
    shortcode: string | null;
    error: string | null;
}

export type GetTopShortCodesAPIResponse = {
    urls: ShortCode[];
}

export type GetTopShortCodesClientResponse = {
    shortcodes: ShortCode[] | null;
    error: string | null;
}
