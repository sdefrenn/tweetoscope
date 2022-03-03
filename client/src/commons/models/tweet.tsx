import RawTweet from "./rawTweet";

/**
 * Tweet with enhanced tweetoscope features and data
 */
class Tweet extends RawTweet{


    constructor(name: string, username: string, date: Date, text: string, parent?: Tweet | null, replies?: Tweet[]) {
        super(name, username, date, text, parent, replies);
    }
    


}

export default Tweet;