import React, { useState } from "react";
import Tweet from "../../commons/models/tweet";
import TwitterService from "../../commons/services/twitterService";
import TweetArc from "../../components/tweetArc/tweetArc";
import TweetTree from "../tweetTree/tweetTree";
import genTreeFor from "./services/tweetTreeGenerator";
import {Container, SVGContainer} from "./styles";
import { TransformWrapper, TransformComponent } from "react-zoom-pan-pinch";


function TwitterTimeline({someProperty}: {someProperty: string}) {
    const twitter = new TwitterService();

    const [rootDisplayTweets, setDisplayTweets] = useState(twitter.getTimeline().map(tweet => genTreeFor(tweet)));

    return(
      <TransformWrapper>
        <TransformComponent>
          <Container>
            <SVGContainer>
              {rootDisplayTweets.flat().map(dTweet => {
                if(dTweet.displayParent!=null){
                  return <TweetArc rootTweet={dTweet.displayParent} childTweet={dTweet}></TweetArc>
                }
                return <></>
              })
              }
            </SVGContainer>
            {rootDisplayTweets.map(tweetList => <TweetTree key={tweetList[0]!.id} tweets={tweetList}></TweetTree>)}
          </Container>
        </TransformComponent>
      </TransformWrapper>);
}

export default TwitterTimeline;
