import React from 'react'
import { FilterList } from './FilterComponent'
import { Link } from 'react-router-dom'

const Equipment = props => {

  const headings = [
    'Name',
    'Quantity',
    'Need Replaced?',
  ];

  let equipment;
  if(props.equipment.length > 0) {
    equipment = props.equipment.map((item) => {
      let row = []
      row["id"] = item.id
      row["name"] = item.name
      row["quantity"] = item.quantity
      row["needsReplacement"] = (item.needsReplacement ? "Yes" : "No" )
      return row
    });
  }

  return (
  <>      
    <h1>Equipment</h1>
    {(props.equipment.length) ? (
      <FilterList
        headings={headings}
        rows={equipment}
        routeBasePath="/equipment" />
    ) : (
      // empty state
      <div className="w-1/3 mx-auto text-center p-6 py-10 bg-white rounded border border-gray-300 shadow-md">
        <p className="mb-8">You haven't added any equipment yet!</p>
        <Link to="/equipment/add" className="btn btn-primary">Add some now</Link>
      </div>
    )}
  </>
  );
}

export default Equipment;