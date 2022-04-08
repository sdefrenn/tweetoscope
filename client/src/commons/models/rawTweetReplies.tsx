import RawTimeline from "./rawTimeline";
import getTweetReplies from "../../apiRequests/getTweetReplies";

/**
 * List of replies to a specific tweet
 */

class RawTweetReplies extends RawTimeline{

    constructor(id: string){

        super(id);
        
        (async () => {
            var data = await getTweetReplies(this.id);
            this.timeline = data.timeline;
            this.pagination_token = data.pagination_token;
        })()
    }

    async nextPage(): Promise<RawTweetReplies>{
        return await getTweetReplies(this.id,this.pagination_token);
    }

}

export default RawTweetReplies;