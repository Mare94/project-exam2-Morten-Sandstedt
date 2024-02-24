import { BASE_API_URL } from "../api/constant.js";

const venueContainer = document.querySelector(".venue-container");

const action = "/venues"

const url = BASE_API_URL + action;

const apiUrl = "https://v2.api.noroff.dev/holidaze/venues";

const corsEnabledUrl = "https://noroffcors.onrender.com/" + apiUrl

console.log(corsEnabledUrl)

async function getVenueData() {

    try {

        const response = await fetch();

        const data = await response.json();

        console.log(data);

        for(let i = 0; i < 8; i++) {

            venueContainer.innerHTML += `
            
            <div class="card">
                <div class="card" style="width: 18rem;">
                    <img src="..." class="card-img-top" alt="...">
                    <div class="card-body">
                    <h5 class="card-title">Card title</h5>
                    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    <a href="#" class="btn btn-primary">Go somewhere</a>
                    </div>
                </div>
            </div>



            `


        }



    } catch(error) {

    }

}

//getVenueData();