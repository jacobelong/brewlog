import React from 'react'
import { FilterList } from './FilterComponent'
import { Link } from 'react-router-dom'

const Brews = props => {

  const headings = [
    'Name',
    'Date',
    'Batch Size',
    'Type'
  ];

  let brews;
  if(props.brews.length > 0) {
    brews = props.brews.map((brew) => {
      let row = []
      row["id"] = brew.id
      row["name"] = brew.name
      row["brewedOnDate"] = brew.brewedOnDate
      row["batchSizeGallons"] = brew.batchSizeGallons
      row["type"] = brew.type
      return row
    });
  }

  return (
  <>      
    <h1>Brews</h1>
    {(props.brews.length) ? (
      <FilterList
        headings={headings}
        rows={brews}
        routeBasePath="/brews" />
    ) : (
      // empty state
      <div className="w-1/3 mx-auto text-center p-6 py-10 bg-white rounded border border-gray-300 shadow-md">
        <p className="mb-8">You haven't added any brews yet!</p>
        <Link to="/brew/add" className="btn btn-primary">Add one now</Link>
      </div>
    )}
  </>
  );
}

export default Brews;