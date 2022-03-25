import DisplayTweet from "../../../commons/models/diplayTweet";
import Tweet from "../../../commons/models/tweet";

function genTreeFor(rootTweet: Tweet) {

  let tweetList: DisplayTweet[] = [];
  let screen = {width: window.innerWidth, height: window.innerHeight}; // DOM display screen width and height
  const DIMENSION = {width: 400, height: 100}; // constant dimensions defined in DisplayTweet
  let position = {x: screen.width / 2 - DIMENSION.width / 2, y: 50};

  // add root first
  tweetList.push(new DisplayTweet(rootTweet, {x: position.x, y: position.y}));

  // iterate over all tweets that contain replies
  for(let i = 0; i < tweetList.length; i++) {
    const currentTweet = tweetList[i];
    // increment y position when changing depth
    position.y += DIMENSION.height + 50;
    // reset x position when changing depth in function of the number of children in the same depth
    position.x = screen.width / 2 - currentTweet.replies.length * (DIMENSION.width / 2);

    for(const reply of currentTweet.replies) {
      let replyDisplay = new DisplayTweet(reply, {x: position.x, y: position.y}, currentTweet);
      tweetList.push(replyDisplay);
      position.x += DIMENSION.width + 50;
    }
  }

  return tweetList;
}

export default genTreeFor;
