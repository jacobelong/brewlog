import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'

export class Filter extends Component {
  render() {
    return (
      <p>Filter</p>
    );
  }
}

/* --------------------------------- */

export const FilterList = (props) => {
  return (
    <div className="flex flex-col lg:flex-row">  
      <div className="w-full table border rounded border-gray-300">
        <div className="table-row bg-gray-100">
          {props.headings.map((heading, index) =>
            <div key={index} className="table-cell p-2 px-4 text-xs text-gray-600">{heading}</div>
          )}
        </div>
    
        {props.rows.map(listItem =>
          <FilterListItemWithRouter key={listItem.id} route={props.routeBasePath} item={listItem} />
        )}
      </div>
    </div>
  )
}

/* --------------------------------- */

const FilterListItem = props => {

  let route = `${props.route}/${props.item.id}`

  function handleClick(route) {
    props.history.push(route);
  }

  return (
    <div className="table-row p-4 px-4 text-base text-gray-700 bg-white hover:bg-blue-100 hover:text-blue-500 cursor-pointer" onClick={() => handleClick(route)} tabIndex="0">
      {Object.keys(props.item).map(key => {
        if (key !== "id")
          return <div key={key} className="table-cell table-cell p-4 border-t border-gray-300">{props.item[key]}</div>
        else
          return null
      })}
    </div>
  )
}

export const FilterListItemWithRouter = withRouter(FilterListItem);