import DisplayTweet from "../../../commons/models/diplayTweet";
import Tweet from "../../../commons/models/tweet";

function genTreeFor(rootTweet: Tweet) {

  let tweetList: DisplayTweet[] = [];
  let position = {x: 50, y: 100};
  let queue = [rootTweet];


  // add root first
  tweetList.push(new DisplayTweet(rootTweet, {x: position.x, y: position.y}));

  // iterate over all tweets that contain replies
  for(let i = 0; i < queue.length; i++) {
    const currentTweet = queue[i];
    // increment y position when changing depth
    position.y += 120;
    // reset x position when changing depth
    position.x = 50;

    let previousLength = 0;
    
    for(const reply of currentTweet.replies) {
      
      tweetList.push(new DisplayTweet(reply, {x: position.x, y: position.y}));
      previousLength = reply.text.length * 10;
      position.x += previousLength;
      // if the current reply has itself its own replies, add the reply to the queue
      if(reply.replies.length > 0) {
        queue.push(reply);
      }
    }
  }
  
  return tweetList;
}

export default genTreeFor;