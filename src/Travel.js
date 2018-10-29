import React from "react";

const Travel = ({ destination, country, image}) => (
  <figure>
    <img src={image} alt={country} />
    <figcaption>
    <blockquote>{destination}</blockquote>
    <cite>{country}</cite>  
    </figcaption>
  </figure>
);

export default Travel;