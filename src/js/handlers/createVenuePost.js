import { createPost } from "../api/venue/index.js";

// handles the creation of posts

export function SetCreateVenueFormListener() {
    const form = document.querySelector("#createVenue");

    form.addEventListener("submit", (event) =>{
        event.preventDefault()
        const form = event.target;

        const formData = new FormData(form);
        const post = Object.fromEntries(formData.entries())
        
        //console.log("works!")
        

        createPost(post)

    })
};