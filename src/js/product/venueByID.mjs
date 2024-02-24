import { BASE_API_URL } from "../api/constant.mjs";

const venueDetail = document.querySelector(".venue-detail");

const queryString = document.location.search;
const params = new URLSearchParams(queryString);
const urlId = params.get("id");


const action = "/venues/";
const url = BASE_API_URL + action;

console.log();

const urlById = BASE_API_URL + action + "a3f57758-a5fd-4b11-a738-9bc328545a5f";

console.log(urlById);

async function getVenueDetail() {

    

        const response = await fetch(url);
        const data = await response.json();

        console.log(data);

        for(let i = 0; i < 1; i++) {

            console.log(data)

            venueDetail.innerHTML += `
            
            <div class="text-center">
                <div class="card">
                    <img src="${data.data[i].media[i].url}" class="card-img-top" alt="${data.data[i].media[i].alt}">
                    <div class="card-body">
                    <h5 class="card-title">${data.data[i].name}</h5>
                    <p class="card-text">Price: ${data.data[i].price}</p>
                    <p class="card-text">Rating: ${data.data[i].rating}</p>
                    <p class="card-text">Max guests: ${data.data[i].maxGuests}</p>
                    <p class="card-text">Location: ${data.data[i].location.address} ${data.data[i].location.city} ${data.data[i].location.country}</p>
                    <p class="card-text">${data.data[i].description}</p>
                    
                    </div>
                </div>
            </div>



            `


        }

    

}

getVenueDetail()

