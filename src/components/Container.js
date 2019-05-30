import React from 'react'
import BrewLogList from './BrewLogList'
import BrewLog from './BrewLog'

const Container = () => (
  <div className="container mx-auto max-w-full my-10 px-8">
    <section className="BrewLogList">
      <div className="Grid Grid--fullwidth">
        <h5 className="SectionLabel">Brew Log</h5>
        <BrewLogList>
          <BrewLog
            title="New Year IPA"
            href="/brews/new-year-ipa"
          />
          <BrewLog
            title="Svêtlé 12º"
            href="/brews/svetle-12"
          />
          <BrewLog
            title="Gingerbread Brown Ale"
            href="/brews/gingerbread-brown-ale"
          />
          <BrewLog
            title="Orsett Ale"
            href="/brews/orsett-ale"
          />
        </BrewLogList>
      </div>
    </section>
  </div>
);

export default Container;