import React from "react";
import { Link, Outlet } from "react-router-dom";
// import logo from "./logo.svg";

import TwitterTimeline from "./containers/twitterTimeline/twitterTimeline";
import TwitterLogger from "./containers/twitterLogger";

/**
 * Entry point for the app
 * Initialize app-wide systems (request service)
 * Store any app-wide data if needed (should it be in a component?)
 */

function App() {

  return (
    
    <div className="App">

      <TwitterLogger></TwitterLogger>

      <TwitterTimeline someProperty="test"></TwitterTimeline>
      
    </div>
  );
}

export default App;
