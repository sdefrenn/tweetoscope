import DisplayTweet from "../../commons/models/diplayTweet";
import TweetNode from "../tweetNode/tweetNode";
import { TweetTreeDiv } from "./styles";

function TweetTree({tweets}: {tweets: DisplayTweet[]}) {

  return <TweetTreeDiv>
            {tweets.map(tweet => <TweetNode key={tweet.id} data={tweet}/>)}
        </TweetTreeDiv>;
}


export default TweetTree;