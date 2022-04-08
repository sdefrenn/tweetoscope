import RawTimeline from "./rawTimeline";
import getUserTimeline from "../../apiRequests/getUserTimeline";

/**
 * List of tweets generated from a UserTimeline
 */

class RawUserTimeline extends RawTimeline{

    constructor(id: string){

        super(id);
        
        (async () => {
            var data = await getUserTimeline(this.id);
            this.timeline = data.timeline;
            this.pagination_token = data.pagination_token;
        })()
    }

    async nextPage(): Promise<RawUserTimeline>{
        return await getUserTimeline(this.id,this.pagination_token);
    }

}

export default RawUserTimeline;