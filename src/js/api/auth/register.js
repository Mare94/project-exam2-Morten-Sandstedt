import { BASE_API_URL } from "../constant.mjs";

const path = "/auth/register";
const method = "post";

export async function register(profile){
    const registerUrl = BASE_API_URL + path;
    const body = JSON.stringify(profile);


    const reponse = await fetch(registerUrl, {
        headers: {
            "Content-Type": "application/json"
        },
        method,
        body
    })
    
    
    const json = await reponse.json()

    if(reponse.ok) {
        return json;
    }

    throw new Error(json.message);
    

}