import { authToken } from "../authToken.js";
import { BASE_API_URL } from "../constant.js";

const action = "/venues";
const method = "post";

export async function createPost(postData) {
    const createPostUrl = BASE_API_URL + action;
    
    const response = await authToken(createPostUrl, {
        method,
        body: JSON.stringify(postData)

    });

    return await response.JSON();
};