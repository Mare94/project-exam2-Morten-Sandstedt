import { BASE_API_URL } from "../api/constant.mjs";

const venueContainer = document.querySelector(".venue-container");

const action = "/venues"

const url = BASE_API_URL + action;

const apiUrl = "https://v2.api.noroff.dev/holidaze/venues";

const corsEnabledUrl = "https://noroffcors.onrender.com/" + apiUrl

console.log()
console.log()
console.log()
console.log()

async function getVenueData() {

    try {

        const response = await fetch(url);

        const data = await response.json();

        console.log(data);

        for(let i = 0; i < 5; i++) {

            console.log(data)

            venueContainer.innerHTML += `
            
            <div class="card text-center">
                <div class="card" style="width: 26rem;">
                    <img src="${data.data[i].media[i].url}" class="card-img-top" alt="${data.data[i].media[i].alt}">
                    <div class="card-body">
                    <h5 class="card-title">${data.data[i].name}</h5>
                    <p class="card-text">Price: ${data.data[i].price}</p>
                    <p class="card-text">Rating: ${data.data[i].rating}</p>
                    <p class="card-text">${data.data[i].description}</p>
                    <a href="product/product.html?${data.data[i].id}" class="btn btn-primary">See more</a>
                    </div>
                </div>
            </div>



            `


        }



    } catch(error) {

    }

}

getVenueData();