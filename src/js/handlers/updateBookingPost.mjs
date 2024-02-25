import { readBooking, updateBooking } from "../api/bookings/index.mjs";

// handles the edit of bookings

export async function SetUpdateBookingFormListener() {
    const form = document.querySelector("#updateBooking");

    const url = new URL(location.href);
    const id = url.searchParams.get("id");

    if (form) {

        const button = form.querySelector("button");
        button.disabled = true;


        const post = await readBooking(id);

        form.data.dateFrom().value = post.dateForm();
        form.data.dateTo().value = post.dateTo();
        form.data.guests.value = post.guests;
        

        button.disabled = false;

        form.addEventListener("submit", (event) =>{
            event.preventDefault()
            const form = event.target;
    
            const formData = new FormData(form);
            const post = Object.fromEntries(formData.entries())
            post.id = id;
            
            console.log("works!")
            
    
            updateBooking(post)
    
        })

    }
    
};