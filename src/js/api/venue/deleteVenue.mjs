import { authToken } from "../authToken.mjs";
import { BASE_API_URL } from "../constant.mjs";

const action = "/venues";
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