import React, { useState } from "react";
import Tweet from "../../commons/models/tweet";
import TwitterService from "../../commons/services/twitterService";
import TweetArc from "../../components/tweetArc/tweetArc";
import TweetTree from "../tweetTree/tweetTree";
import genTreeFor from "./services/tweetTreeGenerator";
import {Container, SVGContainer} from "./styles";


function TwitterTimeline({someProperty}: {someProperty: string}) {
    const twitter = new TwitterService();

    const [rootDisplayTweets, setDisplayTweets] = useState(twitter.getTimeline().map(tweet => genTreeFor(tweet)));


    return  <Container>
                <SVGContainer>
                    {rootDisplayTweets.flat().map(dTweet => {
                        if(dTweet.displayParent!=null){
                            return <TweetArc rootTweet={dTweet.displayParent} childTweet={dTweet}></TweetArc>
                        }
                    })
                    }
                </SVGContainer>
                {rootDisplayTweets.map(tweetList => <TweetTree key={tweetList[0]!.id} tweets={tweetList}></TweetTree>)}
            </Container>;

}

export default TwitterTimeline;