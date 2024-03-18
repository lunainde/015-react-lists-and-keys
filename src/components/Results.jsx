import React from 'react'

const apartments = [
    {
      _id: '127fae',
      img: 'https://education-team-2020.s3.eu-west-1.amazonaws.com/web-dev/m3/react-lists/ironbnb-house.43.png',
      title: '3 Bedroom House',
      pricePerDay: 195
    },
    {
      _id: '985afw',
      img: 'https://education-team-2020.s3.eu-west-1.amazonaws.com/web-dev/m3/react-lists/ironbnb-house.50.png',
      title: 'Amazing Studio',
      pricePerDay: 90
    },
    {
      _id: '347eef',
      img: 'https://education-team-2020.s3.eu-west-1.amazonaws.com/web-dev/m3/react-lists/ironbnb-house.58.png',
      title: 'Luxurious Flat',
      pricePerDay: 195
    },
    {
      _id: '90af21',
      img: 'https://education-team-2020.s3.eu-west-1.amazonaws.com/web-dev/m3/react-lists/ironbnb-house.43.png',
      title: 'High-end Comfy Apartment',
      pricePerDay: 195
    }
  ];

function Results() {
  return (
    <div className="card">
        <h1>Apartments</h1>
        {apartments.map(apartment => {
            return (
                <div key={apartment._id} className="card">
                <img src={apartment.img} alt="apartment" />
                <h3>{apartment.title}</h3>
                <p>Price: ${apartment.pricePerDay}</p>
                </div>
            )
        })}
    </div>
  )
}

export default Results