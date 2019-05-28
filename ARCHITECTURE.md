# BrewLog Application Architecture
Listing of component hierarchy and prop definitions which describe the overall archiecture of the BrewLog app, as described by the app [Feature List](/FEATURELIST.md) doc in the project.

## Component Hierarchy
- [`App`](#app)
  - [`Brewer`](#brewer)
    - [`Brewery`](#brewery)
	    - [`BrewLogList`](#brewloglist)
		    - [`BrewLog`](#brewlog)
			    - [`Recipe`](#recipe)
				    - [`Ingredient`](#ingredient)
            - [`WaterProfile`](#waterprofile)
            - [`BJCPStyle`](#bjcpstyle)
			      - [`Rating`](#rating)
			    - [`PhotoGallery`](#photogallery)
		    - [`Search/Filter`](#searchfilter)
			    - [`FilterOption`](#filteroption)
	    - [`EquipmentList`](#equipmentlist)
	      - [`EquipmentItem`](#equipmentitem)
	  - [`WishList`](#wishlist)
	    - [`WishListItem`](#wishlistitem)
		    - [`isPurchased handler`](#ispurchased-handler)
		
## Component Definitions

#### `App`
props:<br>

#

#### `Brewer`
props:<br>

#

#### `Brewery`
props:<br>

#

#### `BrewLogList`
props:<br>

#

#### `BrewLog`
props:<br>

#

#### `Recipe`
props:<br>
`name`<br>
`brewedOnDate`<br>
`batchSize`<br>
`type`<br>
`procedureNotes`<br>
`tastingNotes`<br>
`stats`<br>
`version`<br>

#

#### `Ingredient`
props:<br>

#

#### `WaterProfile`
props:<br>

#

#### `BJCPStyle`
props:<br>

#

#### `Rating`
props:<br>

#

#### `PhotoGallery`
props:<br>

#

#### `SearchFilter`
props:<br>

#

#### `FilterOption`
props:<br>

#

#### `EquipmentList`
props:<br>

#

#### `EquipmentItem`
props:<br>
`name`<br>
`description`<br>
`photo`<br>
`needsReplaced`<br>

#

#### `WishList`
props:<br>

#

#### `WishListItem`
props:<br>
`isPriority`<br>
`link`<br>
`price`<br>

#

#### `isPurchased Handler`
props:<br>
