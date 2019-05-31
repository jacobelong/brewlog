import React, { Component } from 'react'
import { FilterList } from './FilterComponent'
import { Link } from 'react-router-dom'

export default class Recipes extends Component {

  fieldSchema = [
    "id",
    "name",
    "stats",
    "bjcpStyle",
    "targetABV",
    "ratingIndex"
  ]

  render() {
    return (
    <>
      <h1>Recipes</h1>
      {(this.props.recipes.length) ? (
        <div className="flex flex-col lg:flex-row">
          <FilterList
            headings={["Name","Style","Rating","Type"]}
            schema={this.fieldSchema}
            list={this.props.recipes}
            routeBasePath="/recipes/" />
        </div>
      ) : (
        // empty state
        <div className="w-1/3 mx-auto text-center p-6 py-10 bg-white rounded border border-gray-300 shadow-md">
          <p className="mb-8">You haven't added any recipes yet!</p>
          <Link to="/recipes/add" className="btn btn-primary">Add one now</Link>
        </div>
      )}
    </>
    );
  }
}