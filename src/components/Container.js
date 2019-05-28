import React from 'react';

const Container = () => (
  <div className="Container">
    <section className="BrewLogList">
      <div className="Grid Grid--fullwidth">
        <h5 className="SectionLabel">Brew Log</h5>
        <ul className="BrewLogList">
          <li className="BrewLogList-Item"><a href="/brews/new-year-ipa">New Year IPA</a></li>
          <li className="BrewLogList-Item"><a href="/brews/svetle-12">Svêtlé 12º</a></li>
          <li className="BrewLogList-Item"><a href="/brews/gingerbread-brown-ale">Gingerbread Brown Ale</a></li>
          <li className="BrewLogList-Item"><a href="/brews/orsett-ale">Orsett Ale</a></li>
        </ul>
      </div>
    </section>
  </div>
);

export default Container;