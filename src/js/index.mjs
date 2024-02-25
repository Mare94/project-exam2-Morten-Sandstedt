import * as listeners from "./handlers/index.mjs";
import * as venueAction from "./api/venue/index.mjs";
import * as bookingAction from "./api/bookings/index.mjs";

import * as SetUpdateVenueFormListener from "./handlers/updateBookingPost.mjs";

const path = location.pathname;

if(path === '/profile/login/') {
    listeners.SetLoginFormListener()
} else if(path === '/profile/register/') {
    listeners.SetRegisterFormListener()
} else if(path === '/product/create/'){
    listeners.SetCreateBookingFormListener()
} else if(path === '/product/create/') {
    listeners.SetCreateVenueFormListener
} else if(path === '/product/edit/') {
    listeners.SetUpdateVenueFormListener()
} else if(path === '/product/edit/') {
    listeners.SetUpdateBookingFormListener()
} else if(path === '/profile/edit/'){
    listeners.SetUpdateProfileFormListener()
}