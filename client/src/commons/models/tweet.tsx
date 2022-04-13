import RawTweet from "./rawTweet";

/**
 * Tweet with enhanced tweetoscope features and data
 */
class Tweet extends RawTweet{

    constructor(id: string, name: string, username: string, date: Date, text: string, metrics: Object, parent?: string, replies?: string) {
        super(id, name, username, date, text, metrics, parent, replies);
    }

}

export default Tweet;