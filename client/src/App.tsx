import React from "react";
import { Link, Outlet } from "react-router-dom";
import "./assets/style.css";
import { BaseContainer, NavContainer, TlContainer, WglContainer, WgrContainer } from "./baseStyle";
// import logo from "./logo.svg";

import TwitterTimeline from "./containers/twitterTimeline/twitterTimeline";
import TwitterLogger from "./containers/twitterLogger";
import getTweet from "./apiRequests/getTweet";
import getUserTimeline from "./apiRequests/getUserTimeline";
import getTweetReplies from "./apiRequests/getTweetReplies";
import sendTweet from "./apiRequests/sendTweet";
import sendBigTweet from "./apiRequests/sendBigTweet";
import getFollowers from "./apiRequests/getFollowers";
import getSelf from "./apiRequests/getSelf";

/**
 * Entry point for the app
 * Initialize app-wide systems (request service)
 * Store any app-wide data if needed (should it be in a component?)
 */

function App() {

  return (
    <><TwitterLogger></TwitterLogger><div className="App">
      <button onClick={() => getUserTimeline("2244994945", "7140dibdnow9c7btw420jnqp01o48wwk2j1wh0303jvhy")}>Test1</button>
      <button onClick={() => getTweet("1511201517432360965")}>Test2</button>
      <button onClick={() => getSelf()}>Test2.7</button>
      <button onClick={() => getTweetReplies("1511143607385874434","b26v89c19zqg8o3fpytn4n5yei9a1gtwwcsdohwa8lrwd")}>Test3</button>
      <button onClick={() => sendTweet("Test ABCD")}>Test4</button>
      <button onClick={() => getFollowers("44196397")}>Test4.8</button>
      <button onClick={() => sendBigTweet("aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaTest ABCD")}>Test5</button>
    </div></>
    /*<BaseContainer>
      <NavContainer>
        Navbar
        //{ ADD NAVBAR HERE }
        <TwitterLogger></TwitterLogger>
      </NavContainer>
      <WglContainer>
        Widget Left
        //{ ADD LEFT WIDGETS HERE }
      </WglContainer>
      <TlContainer>
        <TwitterTimeline someProperty="test"></TwitterTimeline>
      </TlContainer>
      <WgrContainer>
        Widget Right
        //{ ADD RIGHT WIDGETS HERE }
      </WgrContainer>
    </BaseContainer>*/
  );
}


export default App;
