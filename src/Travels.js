import React from "react";

import Travel from "./Travel"

// src/Quotes.js
const travels = [
  {
    destination:"Marseille",
    country: "France",
    image:
    "https://img.bfmtv.com/c/1256/708/fd2/bdd9b2967761a6eff4f3855834993.jpg"
  },
  {
    destination: "Amsterdam",
    country: "Nederland",
    image:
    "http://admin.traxmag.com//uploads/images/croped600x1200/2018/05/1200x600-og-home-amsterdam_5afda3e1489da.jpg"
  },
  {
    destination: "Marrakech",
    country: "Maroc",
    image:
      "https://www.voyageway.com/wp-content/uploads/2018/01/ou-dormir-a-marrakech-740x454.jpg"
  },
  {
    destination:"Milan",
      country: "Italie",
    image:"https://www.augoutdemma.be/wp-content/uploads/2014/07/weekend_milan-2.jpg"
  }
];



const Travels = () => (
  <div>
    {travels.map(travel => (
      <Travel destination={travel.destination} country={travel.country} image={travel.image}/>
    ))}
  </div>
);

export default Travels;