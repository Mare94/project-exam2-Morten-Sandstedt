import { authToken } from "../authToken.mjs";
import { BASE_API_URL } from "../constant.mjs";

const action = "/posts";


export async function readProfiles() {


    const readProfilesUrl = `${BASE_API_URL}${action}`;
    
    const response = await authToken(readProfilesUrl);

    return await response.JSON();
};



export async function readProfile(name) {

    if (!name) {
        throw new Error("Error, something went wrong!")
    }


    const readProfileUrl = `${BASE_API_URL}${action}/${name}`;
    
    const response = await authToken(readProfileUrl);

    return await response.JSON();
};