import * as storage from "../storage/storage.mjs";

export function SetLogoutFormListener() {
    const logoutBtn = document.querySelector("#logout");

    logoutBtn.addEventListener("click", () => {
        storage.remove("token");
        storage.remove("name");
        location.href = "/profile/login";
    });


};