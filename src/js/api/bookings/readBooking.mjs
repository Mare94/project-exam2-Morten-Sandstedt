import { authToken } from "../authToken.mjs";
import { BASE_API_URL } from "../constant.mjs";

const action = "/bookings"

export async function readBookings() {

    const readBookingsUrl = `${BASE_API_URL}${action}`;

    const response = await authToken(readBookingsUrl);
    return await response.json();
}


export async function readBooking(id) {
    if(!id){
        throw new Error("Venue requires an ID")
    }

    const readBookingUrl = `${BASE_API_URL}${action}/${id}`;

    const reponse = await authToken(readBookingUrl);
    return await response.json();

}