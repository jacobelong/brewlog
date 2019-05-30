import React from 'react'

const Brews = (props) => {
  let brews = props.brews.map((brew, index) => {
    return (
      <li className="p-4 rounded border border-gray-300 text-sm bg-white" key={index} >
        <h3 className="text-base font-semibold mb-2">{brew.name}</h3>
        <p><span className="font-bold">Date:</span> {brew.brewedOnDate}</p>
        <p><span className="font-bold">Batch Size:</span> {brew.batchSizeGallons} gal</p>
        <p><span className="font-bold">Type:</span> {brew.type}</p>
        <p><span className="font-bold">Brewers:</span> {
          brew.brewers.map((brewer) => {
            return `${brewer} `;
          })
        }
        </p>
      </li>
    );
  }); 
  
  return (
  <>
    <h1>Brews</h1>
    <ul className="flex">
      {brews}
    </ul>
  </>
  );
}

export default Brews;