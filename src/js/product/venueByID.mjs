

const venueDetail = document.querySelector(".venue-detail");

const queryString = document.location.search;
const params = new URLSearchParams(queryString);
const Id = params.get("id");

import { BASE_API_URL } from "../api/constant.mjs";

const action = "/venues/";
const url = BASE_API_URL + action;

console.log();

const urlById = BASE_API_URL + action + Id;

console.log(urlById);

async function getVenueDetail() {

    

        const response = await fetch(urlById);
        const data = await response.json();

        console.log(data);

        createHtml(data);

    

}

getVenueDetail()


function createHtml(data){

    venueDetail.innerHTML += `
            
            <div class="text-center">
                <div class="card">
                    <h3 class="card-title">${data.data.name}</h3>
                    <img src="${data.data.media[0].url}" class="card-img-top" alt="${data.data.media[0].alt}">
                    <div class="card-body">
                    
                    <p class="card-text">Price: ${data.data.price},- Kr</p>
                    <p class="card-text">Rating: ${data.data.rating}</p>
                    <p class="card-text">Max guests: ${data.data.maxGuests}</p>
                    <p class="card-text">Bookings: ${data.data._count.bookings}</p>
                    <p class="card-text">${data.data.description}</p>
                    <p class="card-text">Location: ${data.data.location.address} ${data.data.location.city} ${data.data.location.country}</p>
                    
                    </div>

                    
                </div>
            </div>



            `;



};