import { updateProfile } from "../api/profiles/index.mjs";
import { readProfile } from "../api/profiles/index.mjs";
import { load } from "../storage/storage.mjs";



// handles the edit of profiles

export async function SetUpdateProfileFormListener() {
    const form = document.querySelector("#updateProfile");


    if (form) {

        const { name, email } = load("profile");

        form.name.value = name;
        form.email.value = email;

        const button = form.querySelector("button");
        button.disabled = true;


        const profile = await readProfile(name);

        form.banner.value = profile.banner;
        form.avatar.value = profile.avatar;

        button.disabled = false;

        form.addEventListener("submit", (event) =>{
            event.preventDefault()
            const form = event.target;
    
            const formData = new FormData(form);
            const profile = Object.fromEntries(formData.entries())
            
            console.log("works!")
            profile.name = name;
            profile.email = email;
    
            updateProfile(profile)
    
        })

    }
    
};