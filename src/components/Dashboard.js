import React from 'react'

const widgetCss = "flex border rounded border-gray-300 py-20 justify-center bg-white";

const Dashboard = () => (
  <div>
    <h1>Dashboard</h1>
      <div className="flex mb-4">
        <div className={widgetCss + " w-3/12"}>
          I'm a widget
        </div>
        <div className={widgetCss + " ml-4 w-3/12"}>
          I'm a widget
        </div>
        <div className={widgetCss + " ml-4 w-1/2 flex-auto"}>
          I'm a widget
        </div>
      </div>

      <div className="flex">
        <div className={widgetCss + " w-3/12"}>
          I'm a widget
        </div>
        <div className={widgetCss + " ml-4 w-3/12"}>
          I'm a widget
        </div>
        <div className={widgetCss + " ml-4 w-1/2 flex-auto"}>
          I'm a widget
        </div>
      </div>
  </div>
);

export default Dashboard;