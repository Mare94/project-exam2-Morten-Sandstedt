import { BASE_API_URL } from "../constant";

const path = "/auth/login";
const method = "post";

const authPath = "/auth/create-api-key";

export async function login(profile){
    const loginUrl = BASE_API_URL + path;
    const apiKey = BASE_API_URL + authPath;

    const body = JSON.stringify(profile);


    const reponse = await fetch(loginUrl, {
        headers: {
            "Content-Type": "application/json",
            "X-Noroff-API-Key": apiKey
        },
        method,
        body
    });

    const json = await reponse.json()

    if(reponse.ok) {
        return json;
    }

    throw new Error(json.errors[0].message);
        
}