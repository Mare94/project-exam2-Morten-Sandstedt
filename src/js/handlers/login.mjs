import { login } from "../api/auth/login.mjs";
import * as storage from "../storage/storage.mjs";
import errorMessage from "../ui/common/displayMessage.mjs";

// handles the login of profiles

export function SetLoginFormListener(){
    const form = document.querySelector("#loginForm");

    form.addEventListener("submit", async (event) =>{
        event.preventDefault()
        const form = event.target;

        const formData = new FormData(form);
        const profile = Object.fromEntries(formData.entries())
        // console.log("works!")

        const button = form.querySelector("button");
        button.innerText = "Logging in...";
        const fieldset = form.querySelector("fieldset");
        fieldset.disabled = true;
        
        try {
            const { accessToken, ...user } = await login(profile)
            

            storage.save("token", accessToken);
            storage.save("profile", user);
            location.href = "/profile/"

        } 
        catch(error) {
            errorMessage("danger", error, "#message")
        }
        finally {
            button.innerText = "Login";
            fieldset.disabled = false;
        }
        

    })
};