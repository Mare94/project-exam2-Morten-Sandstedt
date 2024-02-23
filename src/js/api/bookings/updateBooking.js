import { authToken } from "../authToken.js";
import { BASE_API_URL } from "../constant.js";

const action = "/bookings";
const method = "put";

export async function updateBooking(bookingData) {

    if(!bookingData.id) {
        throw new Error("Updating requires an ID")
    }

    const updateVenueUrl = `${BASE_API_URL}${action}/${venueData.id}`;
    const reponse = await authToken(updateVenueUrl, {
        method,
        body: JSON.stringify(venueData)
    });

    return await reponse.json();

}