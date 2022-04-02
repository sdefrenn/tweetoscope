import React from "react";
import { Link, Outlet} from "react-router-dom";
import logo from "./logo.svg";
import TwitterTimeline from "./containers/twitterTimeline/twitterTimeline";
import getTweet from "./apiRequests/getTweet";
import getUserTimeline from "./apiRequests/getUserTimeline";

/**
 * Entry point for the app
 * Initialize app-wide systems (request service)
 * Store any app-wide data if needed (should it be in a component?)
 */

function App() {
  return (
    <div className="App">
      <button onClick={() => getUserTimeline("2244994945", "7140dibdnow9c7btw420jnqp01o48wwk2j1wh0303jvhy")}>Test1</button>
      <button onClick={() => getTweet("1261326399320715264")}>Test2</button>
    </div>
  );
}

export default App;
