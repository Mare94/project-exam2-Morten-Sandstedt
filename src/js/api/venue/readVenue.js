import { authToken } from "../authToken.js";
import { BASE_API_URL } from "../constant.js";

const action = "/venues"

export async function readVenues() {

    const readVenuesUrl = `${BASE_API_URL}${action}`;

    const response = await authToken(readVenuesUrl);
    return await response.json();
}


export async function readVenue(id) {
    if(!id){
        throw new Error("Venue requires an ID")
    }

    const readVenueUrl = `${BASE_API_URL}${action}/${id}`;

    const reponse = await authToken(readVenueUrl);
    return await response.json();

}