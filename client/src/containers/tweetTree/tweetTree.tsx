import DisplayTweet from "../../commons/models/diplayTweet";
import TweetNode from "../tweetNode/tweetNode";
import { TweetTreeDiv } from "./styles";

function TweetTree(props: TweetTreeProps) {


  function handleTweetClick(tweet: DisplayTweet){
    for(const child of tweet.displayChildren){
      child.setHidden(!child.isHidden);
      props.displayUpdateHandler();
    }
  }

  return <TweetTreeDiv>
            {props.tweets.map(tweet => <TweetNode onClick={() => handleTweetClick(tweet)} key={tweet.id} data={tweet}/>)}
        </TweetTreeDiv>;
}

export interface TweetTreeProps{
  tweets: DisplayTweet[],
  displayUpdateHandler: () => any;
}

export default TweetTree;