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

export const FilterList = props => {

  function flattenObject(_obj) {
    return Object.assign(
      {}, 
      ...function _flatten(o) { 
        return [].concat(...Object.keys(o)
          .map(k => 
            typeof o[k] === 'object' ?
              _flatten(o[k]) : 
              ({[k]: o[k]})
          )
        );
      }(_obj)
    )
  }

  function isObjLiteral(_obj) {
    var _test  = _obj;
    return ( typeof _obj !== 'object' || _obj === null ?
      false :  
      (
        (function () {
          while (!false) {
            if (  Object.getPrototypeOf( _test = Object.getPrototypeOf(_test)  ) === null) {
              break;
            }      
          }
          return Object.getPrototypeOf(_obj) === _test;
        })()
      )
    );
  }

  function filterBySchema(listItem) {
    return Object.keys(listItem)
      .filter(key => props.schema.includes(key))
      .reduce((obj, key) => {
        if(isObjLiteral(listItem[key]))
          obj[key] = filterBySchema(listItem[key])
        else
          obj[key] = listItem[key];
        
        return obj;
      }, {});
  }

  return (
  <div className="w-full table border rounded border-gray-300">
    <div className="table-row">
      {props.headings.map((heading, index) =>
        <div key={index} className="table-cell p-2 px-4 bg-white text-sm text-gray-500">{heading}</div>
      )}
    </div>
    
    {props.list.map(function(listItem) {
      let filteredListItem = filterBySchema(listItem);
      filteredListItem = flattenObject(filteredListItem)
      return (
        <FilterListItemWithRouter key={filteredListItem.id} route={props.routeBasePath} item={filteredListItem} />
      )
    })}
  </div>
  )
}

/* --------------------------------- */

const FilterListItem = props => {

  let route = `${props.route}${props.item.id}`

  function handleClick(route) {
    props.history.push(route);
  }

  return (
    <div className="table-row p-4 px-4 text-base text-gray-700 bg-white hover:bg-blue-100 hover:text-blue-500 cursor-pointer" onClick={() => handleClick(route)}>
      {Object.keys(props.item).map(key => {
        if (key !== "id")
          return <div key={key} className="table-cell table-cell p-4 border-t border-gray-300">{props.item[key]}</div>
      })}
    </div>
  )
}

export const FilterListItemWithRouter = withRouter(FilterListItem);