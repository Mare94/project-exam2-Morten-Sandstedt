import { readVenue, updateVenue } from "../api/venue/index.js";

// handles the edit of posts

export async function SetUpdateVenueFormListener() {
    const form = document.querySelector("#updatePost");

    const url = new URL(location.href);
    const id = url.searchParams.get("id");

    if (form) {

        const button = form.querySelector("button");
        button.disabled = true;


        const post = await readVenue(id);

        form.title.value = post.title;
        form.body.value = post.body;
        form.tags.value = post.tags;
        form.media.value = post.media;

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