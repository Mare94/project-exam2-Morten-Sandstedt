import { register } from "../api/auth/register";
import errorMessage from "../ui/common/displayMessage";

// handles the registration of profiles

export function SetRegisterFormListener() {
    const form = document.querySelector("#registerForm");

    form.addEventListener("submit", (event) =>{
        event.preventDefault()
        const form = event.target;

        const formData = new FormData(form);
        const profile = Object.fromEntries(formData.entries())
        console.log("works!")
        
        try {
            register(profile)
        }
        catch(error) {
            errorMessage("danger", error, "#message")
        }
        

    })
};