import { load } from "../storage/storage.mjs";
import { BASE_API_URL } from "./constant";

const path = "/auth/create-api-key";



export function headers() {
    const token = load("token");

    const apiKey = BASE_API_URL + path;


    return {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${token}`,
        "X-Noroff-API-Key": apiKey
    }
}

export async function authToken(url, options = {}) {
    return fetch(url, {
        ...options,
        headers: headers()
    });
}