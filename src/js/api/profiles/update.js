import { authToken } from "../authToken.js";
import { BASE_API_URL } from "../constant.js";

const action = "/profiles";
const method = "put"

export async function updateProfile(profileData) {

    if (!profileData.name) {
        throw new Error("Update requires an ID")
    }


    const updateProfileUrl = `${BASE_API_URL}${action}/${profileData.name}/media`;
    
    const response = await authToken(updateProfileUrl, {
        method,
        body: JSON.stringify(profileData)

    });

    return await response.JSON();
};