# Brew Log Features
Brain dump of desired features for this project, as well as potentially useful resources, such as helpful JavaScript libraries. Create a simple outline of components, props, and hierarchy.

#### Table of Contents
###### Features List
[Brew Log List](#brew-log-list)<br>
[Brew Log](#brew-log)<br>
[Equipment List](#equipment-list)<br>
[Resources](#resources)<br>
###### Component Hierarchy
[Overview](#component-hierarchy)<br>

## Features List

### Brew Log List
* Display all brew logs
* Search by name (auto-filter as you type)
* Sort by date/recency
* Sort by rating
* Filter by style
* Filter by ABV
	* Create labeled ABV ranges to make it easier?
		* (session, strong, etc)
	* Use a slider?
	* Both?
	* Just a general faceted search based on all criteria?
  
### Brew Log
* Name of beer
* Brewer(s)
* Brew date
* Batch size
* Type (all-grain/extract)
* Ingredients list
	* Name
	* Amount/weight/volume
* Water profile info
* Procedure Notes
* Taste notes
* BJCP Style
* OG/FG/IBU/ABV/SRM
* Overall rating
	* Thumb up = would brew this recipe again
	* Thumb down = would not brew again
	* Recycle icon = would brew again but needs revision
		* Include specific notes about potential future revisions
* Photo gallery
* Version/revisions
	* Be able to create relationships between brews, e.g. fork/branch like Git
		* Suggest possible revisions connected with Tasting Notes? Basically, add a feature wherein one could suggest variations, like adding Coffee, changing hops,
* BeerXML import (from BeerSmith)?

### Equipment List
* Current equipment
	* Name
	* Description/specs (mash tun dimensions, for example)
	* Photo/image?
	* Mark as need to be replaced
* Wishlist
	* Priority items
	* Add links and price
	* Ability to set item as "Purchased", so it moves from Wishlist to Equipment List

### Resources
* [https://github.com/homebrewing/brauhausjs](https://github.com/homebrewing/brauhausjs)
* [https://github.com/homebrewing/tapline](https://github.com/homebrewing/tapline)

---

## Component Hierarchy
- [`App`](#app)
	- [`BrewLogList`](#brewloglist)
		- [`BrewLog`](#brewlog)
			- [`Recipe`](#recipe)
				- [`Ingredient`](#ingredient)
				- [`WaterProfile`](#waterprofile)
				- [`BJCPStyle`](#bjcpstyle)
			- [`Brewer`](#brewer)
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

#### `Brewer`
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
