import { authToken } from "../authToken.js";
import { BASE_API_URL } from "../constant.js";

const action = "/bookings";
const method = "delete";

export async function removePost(id) {

    if (!id) {
        throw new Error("Delete requires an ID")
    }


    const removePostUrl = `${BASE_API_URL}${action}/${id}`;
    
    const response = await authToken(removePostUrl, {
        method,

    });

    return await response.JSON();
}