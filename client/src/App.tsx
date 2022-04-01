import React from "react";
import { Link, Outlet} from "react-router-dom";
import logo from "./logo.svg";
import TwitterTimeline from "./containers/twitterTimeline/twitterTimeline";
import getTweet from "api_calls/getTweet";

/**
 * Entry point for the app
 * Initialize app-wide systems (request service)
 * Store any app-wide data if needed (should it be in a component?)
 */

function App() {
  return (
    <div className="App">
      <button onclick = {() => getTweet()}
    </div>
  );
}
import getTweet from "./api_calls/getTweet";

export default App;
