import React from "react";
import TwitterService from "../../commons/services/twitterService";
import TweetTree from "../tweetTree/tweetTree";
import genTreeFor from "./services/tweetTreeGenerator";
import {Container} from "./styles";


function TwitterTimeline({someProperty}: {someProperty: string}) {
    const twitter = new TwitterService();

    return  <Container>
                {twitter.getTimeline().map(tweet => genTreeFor(tweet)).map(tweetList => <TweetTree tweets={tweetList}></TweetTree>)}
            </Container>;

}

export default TwitterTimeline;