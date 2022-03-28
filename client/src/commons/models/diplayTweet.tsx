import Tweet from "./tweet";

class DisplayTweet extends Tweet{

    position: {x: number, y: number};
    dimension: {width: number, height: number};

    private _displayChildren: DisplayTweet[];
    private _displayParent: DisplayTweet|null;

    constructor(tweet: Tweet, position: {x: number, y: number}, displayParent?: DisplayTweet, displayChildren?: DisplayTweet[]){
        super(tweet.id, tweet.name, tweet.username, tweet.date, tweet.text, tweet.parent, tweet.replies);

        this.position = position;
        this.dimension = {width: 400, height: 100};

        this._displayParent = displayParent?displayParent:null;
        this._displayChildren = displayChildren?displayChildren:[];
    }

    addDisplayChild(child: DisplayTweet){
        this._displayChildren.push(child);
    }
    get displayChildren(){
        return this._displayChildren;
    }

    setDisplayParent(parent: DisplayTweet){
        this._displayParent = parent;
    }

    get displayParent(){
        return this._displayParent;
    }


}

export default DisplayTweet;
