import {ShortCodeAdapter} from "@adapters/out/short-code.adapter.ts";

export const shortCodeClient = new ShortCodeAdapter(import.meta.env.VITE_SHORT_CODE_API_URL!);
