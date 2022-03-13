import Tweet from "./tweet";

class DisplayTweet extends Tweet{
    
    position: {x:number, y:number};

    private _displayChildren: DisplayTweet[];
    private _displayParent: DisplayTweet|null;

    constructor(tweet: Tweet, position: {x:number,y:number}, displayParent?: DisplayTweet, displayChildren?: DisplayTweet[]){
        super(tweet.id, tweet.name, tweet.username, tweet.date, tweet.text, tweet.parent, tweet.replies);
        
        this.position = position;
        
        this._displayParent = displayParent?displayParent:null;
        this._displayChildren = displayChildren?displayChildren:[];
    }

    get displayChildren(){
        return this._displayChildren;
    }

    get displayParent(){
        return this._displayParent;
    }


}

export default DisplayTweet;