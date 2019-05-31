import React, { Component } from 'react'
import { FilterList } from './FilterComponent'
import { Link } from 'react-router-dom'

export default class Brews extends Component {

  state = {
    filterList: []
  }

  fieldSchema = [
    "batchSizeGallons",
    "brewedOnDate",
    "id",
    "name",
    "type"
  ]

  render() {
    return (
    <>
      <h1>Brews</h1>
      {(this.props.brews.length) ? (
        <div className="flex flex-col lg:flex-row">
          <FilterList
            headings={["Name","Date","Batch Size","Type"]}
            schema={this.fieldSchema}
            list={this.props.brews}
            routeBasePath="/brews/" />
        </div>
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
}