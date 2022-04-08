import Tweet from "../models/tweet";

const Duplicates = 3;

class TwitterService{

    profile: Tweet[] = [];
    timeline: Tweet[] = [];

    constructor(){
        //Start stump data
        function* idGen(){
            let i = 0;
            while(true){
                i++;
                yield i;
            } 
        }
        let nextId = idGen();
        for(let i = 0; i<Duplicates; i++){
            /*
            let temp_tweet: Tweet|null = null;
            let temp_res: Tweet[]|null = null;

            temp_tweet = new Tweet(nextId.next().value!.toString(), "Mary Sue", "themarysue", new Date(2022, 3, 3, 14, 52), "Hello Twitter, this is my first Tweet! So happy to share this moment with you! #noob #firsttweet");
            
            temp_res = [
                new Tweet(nextId.next().value!.toString(), "Bob Hank", "hankbob123", new Date(2022, 3, 3, 14, 58), "Hey Mary, great to have you on Twitter. Can't wait to start debating on interesting topics with you!", temp_tweet),
                new Tweet(nextId.next().value!.toString(), "Justine Dupont", "dptju2000", new Date(2022, 3, 4, 10, 15), "Omg Mary hi!!! Great new member for Twitter!", temp_tweet),
                new Tweet(nextId.next().value!.toString(),"Robotott", "robyy", new Date(2022, 3, 3, 15, 9), "Hello Mary Sue!", temp_tweet)
            ];
            let t = new Tweet(nextId.next().value!.toString(),"Hamidoty", "hamidd57", new Date(2022, 3, 3, 15, 9), "I agree, Bob. Welcome to Twitter Mary Sue!", temp_res[0])
            t.addReply(new Tweet(nextId.next().value!.toString(),"Hamidoty", "hamidd57", new Date(2022, 3, 3, 15, 9), "I agree, Bob. Welcome to Twitter Mary Sue!", temp_res[0]));
            t.addReply(new Tweet(nextId.next().value!.toString(),"Hamidoty", "hamidd57", new Date(2022, 3, 3, 15, 9), "I agree, Bob. Welcome to Twitter Mary Sue!", temp_res[0]));
            let t2 = new Tweet(nextId.next().value!.toString(),"Hamidoty", "hamidd57", new Date(2022, 3, 3, 15, 9), "I agree, Bob. Welcome to Twitter Mary Sue!", temp_res[0])
            t.addReply(new Tweet(nextId.next().value!.toString(),"Hamidoty", "hamidd57", new Date(2022, 3, 3, 15, 9), "I agree, Bob. Welcome to Twitter Mary Sue!", temp_res[0]));
            t.addReply(new Tweet(nextId.next().value!.toString(),"Hamidoty", "hamidd57", new Date(2022, 3, 3, 15, 9), "I agree, Bob. Welcome to Twitter Mary Sue!", temp_res[0]));
            temp_res[0].addReply(t);
            temp_res[0].addReply(t2);
            
            temp_res.forEach(tweet => temp_tweet!.addReply(tweet));
        
            this.timeline.push(temp_tweet);*/
        }
    }

    getTimeline(){
        return this.timeline;
    }
}

export default TwitterService;
