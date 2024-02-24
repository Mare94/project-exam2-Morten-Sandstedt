import { BASE_API_URL } from "../constant.mjs";

const path = "/auth/login";
const method = "post";


export async function login(profile){
    const loginUrl = BASE_API_URL + path;
    const body = JSON.stringify(profile);


    const reponse = await fetch(loginUrl, {
        headers: {
            "Content-Type": "application/json"
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