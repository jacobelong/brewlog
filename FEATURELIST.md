# Brew Log Features
Brain dump of desired features for this project, as well as potentially useful resources, such as helpful JavaScript libraries.

For a more detailed description of the application components, hierarchy, and prop definitions, visit the [Application Architecture](/ARCHITECTURE.md) doc in the repo.

#### Table of Contents
[Setup/installation Wizard](#setup-installation-wizard)<br>
[Brew Log List](#brew-log-list)<br>
[Brew Log](#brew-log)<br>
[Equipment List](#equipment-list)<br>
[Wishlist](#wishlist)<br>
[Resources](#resources)<br>

## Features List

### Setup/installation wizard
- [ ] Setup environment/paths
- [ ] MongoDB config
- [ ] Brewery/User info
- [ ] Import BeerSmith/BeerXML file to start
- [ ] Set options (ºF/ºC, Metric/Imperial, etc)

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

### Wishlist
* Priority items
* Add links and price
* Ability to set item as "Purchased", so it moves from Wishlist to Equipment List

### Resources
* [https://github.com/homebrewing/brauhausjs](https://github.com/homebrewing/brauhausjs)
* [https://github.com/homebrewing/tapline](https://github.com/homebrewing/tapline)
* [https://www.npmjs.com/package/react-step-wizard](https://www.npmjs.com/package/react-step-wizard) (for setup wizard)
* [https://github.com/americanexpress/react-albus](https://github.com/americanexpress/react-albus) (for setup wizard)
