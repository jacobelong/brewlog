import React from 'react'
import { Switch, Route } from 'react-router-dom'

// Route Components
import Dashboard from '../Dashboard'
import Brews from '../Brews'
import Recipes from '../Recipes'
import Equipment from '../Equipment'
import Wishlist from '../Wishlist'
import Setup from '../setup/'

const Main = (props) => {
  return (
    <div className="container mx-auto max-w-full my-10 px-8">
      <Switch>
        {/* Dashboard Routes */}
        <Route exact path="/" render={ () => <Dashboard data={props} />} />

        {/* Brews Routes */}
        <Route exact path="/brews" render={ () => <Brews brews={props.appData.brews} />} />
        <Route path="/brews/:category/:title" component={Brews} />

        {/* Recipes Routes */}
        <Route exactpath="/recipes" render={ () => <Recipes recipes={props.appData.recipes} />} />
        <Route path="/recipes/:name" component={Recipes} />

        {/* Equipment Routes */}
        <Route path="/equipment" render={ () => <Equipment equipment={props.appData.equipment} />} />

        {/* Wishlist Routes */}
        <Route path="/wishlist" render={ () => <Wishlist wishlist={props.appData.wishlist} />} />

        {/* Other Routes (Setup/Auth) */}
        <Route path="/setup" component={Setup} />
      </Switch>
    </div>
  );
}

export default Main;