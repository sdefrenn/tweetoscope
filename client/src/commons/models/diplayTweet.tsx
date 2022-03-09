import Tweet from "./tweet";

class DisplayTweet extends Tweet{
    
    position: {x:number, y:number};

    constructor(tweet: Tweet, position: {x:number,y:number}){
        super(tweet.id, tweet.name, tweet.username, tweet.date, tweet.text, tweet.parent, tweet.replies);

        this.position = position;
    }


}

export default DisplayTweet;