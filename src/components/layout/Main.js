import React from 'react'
import { Switch, Route } from 'react-router-dom'

// Route Components
import Dashboard from '../Dashboard'
import Brews from '../Brews'
import Recipes from '../Recipes'
import Equipment from '../Equipment'
import Wishlist from '../Wishlist'
import Setup from '../setup/'

const Main = () => (
  <div className="container mx-auto max-w-full my-10 px-8">
    <Switch>
      {/* Main App Routes */}
      <Route exact path="/" component={Dashboard} />
      <Route path="/brews" component={Brews} />
      <Route path="/recipes" component={Recipes} />
      <Route path="/equipment" component={Equipment} />
      <Route path="/wishlist" component={Wishlist} />

      {/* Other Routes (Setup/Auth) */}
      <Route path="/setup" component={Setup} />
    </Switch>
  </div>
);

export default Main;