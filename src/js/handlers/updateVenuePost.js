import { readVenue, updateVenue } from "../api/venue/index.js";

// handles the edit of venues

export async function SetUpdateVenueFormListener() {
    const form = document.querySelector("#updateVenue");

    const url = new URL(location.href);
    const id = url.searchParams.get("id");

    if (form) {

        const button = form.querySelector("button");
        button.disabled = true;


        const post = await readVenue(id);

        form.name.value = post.name;
        form.description.value = post.description;
        form.price.value = post.price;
        form.media.value = post.media;
        form.rating.value = post.rating;

        button.disabled = false;

        form.addEventListener("submit", (event) =>{
            event.preventDefault()
            const form = event.target;
    
            const formData = new FormData(form);
            const post = Object.fromEntries(formData.entries())
            post.id = id;
            
            console.log("works!")
            
    
            updateVenue(post)
    
        })

    }
    
};