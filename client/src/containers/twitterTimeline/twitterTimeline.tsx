import React, { useState, useEffect, useCallback, useRef } from "react";
import Tweet from "../../commons/models/tweet";
import TwitterService from "../../commons/services/twitterService";
import TweetArc from "../../components/tweetArc/tweetArc";
import TweetTree from "../tweetTree/tweetTree";
import genTrees from "./services/tweetTreeGenerator";
import {Container, SVGContainer} from "./styles";
import { TransformWrapper, TransformComponent } from "react-zoom-pan-pinch";


function TwitterTimeline({someProperty}: {someProperty: string}) {
    const twitter = new TwitterService();

    const [offset, setOffset] = useState(0);

    const ref = useRef()  as React.MutableRefObject<HTMLDivElement>

    //no need to update callback, can just use "prev" from setState method
    const handleScroll = useCallback((event: WheelEvent) => {
      setOffset(prev => prev+event.deltaY/10);
    }, [])

    useEffect(() => {
      ref.current.addEventListener("wheel", handleScroll)
    }, [handleScroll]);



    //assumes getTimeline returns a different object when timeline is updated
    const [timeline, setTimeline] = useState(twitter.getTimeline());

    //assume getTimeline is "free" and can be called multiple times
    return(
          <Container ref={ref}>
            <p>{offset}</p>
            <SVGContainer>
              {genTrees(twitter.getTimeline(), offset).flat().map(dTweet => {
                if(dTweet.displayParent!=null){
                  return <TweetArc rootTweet={dTweet.displayParent} childTweet={dTweet}></TweetArc>
                }
                return <></>
              })
              }
            </SVGContainer>
            {genTrees(twitter.getTimeline(), offset).map(tweetList => <TweetTree key={tweetList[0]!.id} tweets={tweetList}></TweetTree>)}
          </Container>);
}

export default TwitterTimeline;
