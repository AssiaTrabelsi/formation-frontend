import {resolve} from "path";
import {setTimeout} from "timers";

//let
let favoriteCityId = "rome"
console.log(favoriteCityId)
favoriteCityId = "paris"
console.log(favoriteCityId)

//CONST
const citiesId = ["paris", "nyc", "rome", "rio-de-janeiro"]
console.log(citiesId)
citiesId.push('tokio');
console.log(citiesId);

//creation objet
function getWeather(cityId) {

    let city = cityId.toUpperCase();
    const temperature = 20;
    return { city, temperature }

}
const weather = getWeather(favoriteCityId)
console.log('Object', weather);


//affectation destructutré
const { city, temperature } = weather
console.log(city)
console.log(temperature)

//Rest operator
const [parisId, nycId, ...othersCitiesId] = citiesId
console.log(parisId)
console.log(nycId)
console.log(othersCitiesId.length)

//Classe
class Trip {

    get price() {
        return this._price
    }
    set price(price) {
        this._price = price
    }
    constructor(id, name, imageUrl) {
        this.id = id;
        this.name = name;
        this.imageUrl = imageUrl;
    }
    toString() {
        return `Trip [${this.id} ${this.name} ${this.imageUrl} ${this.price}]`
    }

    static getDefaultTrip() {
        return new Trip("rio-de-janeiro", "Rio de Janeiro", "img/rio-de-janeiro.jpg")

    }
}

let parisTrip = new Trip("paris", "Paris", "img/paris.jpg")
parisTrip.price = 100
console.log(parisTrip)
console.log(parisTrip.name)
console.log(parisTrip.toString());

const defaultTrip = Trip.getDefaultTrip()
console.log(defaultTrip.toString())

//Heritage
class FreeTrip extends Trip {
    constructor(id, name, imageUrl) {
        super(id, name, imageUrl)
        this.price = 0
    }
    toString() {
        return 'Free' + super.toString()
    }
}
const freeTrip = new FreeTrip("nantes", "Nantes", ": img/nanges.jpg", " ")
console.log(freeTrip.toString())
// promise,set,map,arrow function
class TripService {
    constructor() {
          
        this.trips= [new Trip('paris', 'Paris', 'img/paris.jpg'), 
        new Trip('nantes', 'Nantes', 'img/nanges.jpg'),
        new Trip('rio-de-janeiro', 'Rio de Janeiro', 'img/rio-de-janeiro.jpg')];
        }

    findByName(tripName) {
        return new Promise((resolve, reject) => {

            setTimeout(() => {

                let tr = Trip.find(tripElement => {

                    return tripElement.name = tripName
                })

                if (tr) {
                    resolve(tr)
                }
                else {
                    reject('no Trip with name' + tripName)
                }
            }, 2000);


        });


    }
}



class PriceService {
    constructor() {
        // Map of 2 trips
        this.voyage = new Map();
        this.voyage.set('paris', 100)
        this.voyage.set('rio-de-janeiro', 800)
    
    }
    findPriceByTripId(tripId) {
        return new Promise((resolve, reject) => {

            setTimeout(() => {
               let tr= this.voyage.get(tripId)

                if (tr) {
                    resolve(tr)
                }
                else {
                    reject('no Price find with' + tripId)
                }
            }, 2000);


        });


    }
}

let tripService = new TripService()
let priceService= new PriceService()

tripService.findByName("paris").then(resultat=>
{
    console.log("resultat=", resultat)
})

priceService.findPriceByTripId("paris").then(resultat=>
{
    console.log("resultat=", resultat)
})
priceService.findPriceByTripId('toulouse').then(resultat => {
    console.log("resultat", resultat);
})


tripService.findByName('Nantes')
.then(resultat => {
    return resultat.id;
})
.then((id)=>{
   new PriceService().findPriceByTripId(id).then(resultat => {
    console.log("resultat", resultat);
        })
})


