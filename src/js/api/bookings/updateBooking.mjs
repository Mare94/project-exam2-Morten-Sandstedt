import { authToken } from "../authToken.mjs";
import { BASE_API_URL } from "../constant.mjs";

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