import { load } from "../storage/storage.mjs";



export function headers() {
    const token = load("token");

    return {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${token}`
    }
}

export async function authToken(url, options = {}) {
    return fetch(url, {
        ...options,
        headers: headers()
    });
}