import { authToken } from "../authToken.mjs";
import { BASE_API_URL } from "../constant.mjs";

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