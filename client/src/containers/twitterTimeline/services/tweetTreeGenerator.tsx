import DisplayTweet from "../../../commons/models/diplayTweet";
import Tweet from "../../../commons/models/tweet";

const TreeSpacing = 15;
const Dimensions = {width: 500, height: 400}
const NodeSpacingX = 10;
const NodeSpacingY = 300;

function genTrees(rootTweets: Tweet[], baseOffset: number): DisplayTweet[][]{

  let prevTreeStartX = baseOffset;
  let prevTreeWidth = baseOffset;

  let treeOffset = () => prevTreeStartX + prevTreeWidth + TreeSpacing;
  let ret: DisplayTweet[][] = [];
  for(const tweet of rootTweets){
    let arr: DisplayTweet[] = []
    let res = genTreeFor(tweet, treeOffset(), NodeSpacingY, arr);
    prevTreeStartX = res.startX;
    prevTreeWidth = res.width;
    ret.push(arr);
  }

  return ret;
}
/**
 * 
 * @param tweet the tweet being handled (pass in root tweet)
 * @param offset the x offset for the current tweet
 * @param depth the y offset for the current tweet
 * @param outputArray the actual result
 * @returns the start and end around (sub)tree, and the root DisplayTweet
 */
function genTreeFor(tweet: Tweet, offset: number, depth: number, outputArray: DisplayTweet[]): {tweet: DisplayTweet, startX: number, width: number} {

  let start = null;
  let end = null;
  let lastOffset = offset;

  let displayChildren = [];

  for(const child of tweet.replies){
    let res = genTreeFor(child, lastOffset, depth+NodeSpacingY, outputArray);
    displayChildren.push(res.tweet);
    lastOffset = res.startX+res.width+NodeSpacingX;
  }

  if(tweet.replies.length === 0){
    let t = new DisplayTweet(tweet,{x:offset,y:depth})
    outputArray.push(t);
    return {tweet:t, startX: offset, width: Dimensions.width}
  }
  let resTweet = new DisplayTweet(tweet,{x:(lastOffset+offset)/2-Dimensions.width/2,y:depth})
  for(const child of displayChildren){
    resTweet.addDisplayChild(child);
    child.setDisplayParent(resTweet);
  }
  outputArray.push(resTweet);



  return {tweet: resTweet, startX: offset, width: lastOffset-offset}
}

export default genTrees;
