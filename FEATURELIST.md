# Brew Log Features
Brain dump of desired features for this project, as well as potentially useful resources, such as helpful JavaScript libraries. Create a simple outline of components, props, and hierarchy.

## Brew Log List
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
  
## Brew Log
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

## Equipment List
* Current equipment
	* Name
	* Description/specs (mash tun dimensions, for example)
	* Photo/image?
	* Including specs in description
* Wishlist
	* Priority items
	* Add links and price
	* Ability to set item as "Purchased", so it moves from Wishlist to Equipment List

## Resources
* [https://github.com/homebrewing/brauhausjs](https://github.com/homebrewing/brauhausjs)
* [https://github.com/homebrewing/tapline](https://github.com/homebrewing/tapline)
