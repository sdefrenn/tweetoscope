import Tweet from "../models/tweet";

class TwitterService{

    profile: Tweet[] = [];
    timeline: Tweet[] = [];

    constructor(){
    //Start stump data
    let temp_tweet = new Tweet("Mary Sue", "themarysue", new Date(2022, 3, 3, 14, 52), "Hello Twitter, this is my first Tweet! So happy to share this moment with you! #noob #firsttweet");

    let temp_res = [
        new Tweet("Bob Hank", "hankbob123", new Date(2022, 3, 3, 14, 58), "Hey Mary, great to have you on Twitter. Can't wait to start debating on interesting topics with you!", temp_tweet),
        new Tweet("Justine Dupont", "dptju2000", new Date(2022, 3, 4, 10, 15), "Omg Mary hi!!! Great new member for Twitter!", temp_tweet),
        new Tweet("Robotott", "robyy", new Date(2022, 3, 3, 15, 9), "Hello Mary Sue!", temp_tweet)
    ];

    temp_res[0].addReply(new Tweet("Hamidoty", "hamidd57", new Date(2022, 3, 3, 15, 9), "I agree, Bob. Welcome to Twitter Mary Sue!", temp_res[0]));
    temp_res.forEach(tweet => temp_tweet.addReply(tweet));

    this.timeline.push(temp_tweet);

    //push twice THE SAME for testing, careful
    this.timeline.push(temp_tweet);
    //End stump data

    }


    getTimeline(){
        return this.timeline;
    }

}

export default TwitterService;