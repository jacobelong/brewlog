import React from 'react'
import { FilterList } from './FilterComponent'
import { Link } from 'react-router-dom'

const Recipes = props => {

  const headings = [
    'Name',
    'Style',
    'ABV',
    'Type'
  ];

  let recipes;
  if(props.recipes.length > 0) {
    recipes = props.recipes.map((recipe) => {
      let row = []
      row["id"] = recipe.id
      row["name"] = recipe.name
      row["style"] = recipe.stats.bjcpStyle
      row["abv"] = recipe.stats.targetABV
      row["type"] = recipe.type
      return row
    });
  }

  return (
  <>      
    <h1>Recipes</h1>
    {(props.recipes.length) ? (
      <FilterList
        headings={headings}
        rows={recipes}
        routeBasePath="/recipes" />
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

export default Recipes;