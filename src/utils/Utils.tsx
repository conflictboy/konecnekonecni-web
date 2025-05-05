import {TTranslationParameters} from "@/types/TTranslationParameters";

export function t(namespace: Record<string, string>, key: string, parameters?: TTranslationParameters): string {
    let text = namespace[key];

    if (!text) {
        console.warn(`Missing translation key: "${key}"`);
        return key;
    }

    if (parameters) {
        for (const [k, v] of Object.entries(parameters)) {
            text = text.replace(new RegExp(`{${k}}`, 'g'), String(v));
        }
    }

    return text;
}

export const fetchData = async (
    url: string,
    options: RequestInit = {},
) => {
    options.headers = {
        ...options.headers,
        'Accept': 'application/json',
        // 'Content-Type': 'application/json',
    }

    if (!(options.body instanceof FormData)) {
        options.headers = {
            ...options.headers,
            'Content-Type': 'application/json',
        }
    }

    const baseUrl = process.env.API_URL || '/';

    return await fetch(baseUrl + url, options);
};