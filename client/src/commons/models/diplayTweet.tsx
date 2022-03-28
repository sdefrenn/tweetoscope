import Tweet from "./tweet";

class DisplayTweet{

    position: {x: number, y: number};
    dimension: {width: number, height: number};

    subtreeSpan: {startX: number, endX: number};

    private _displayChildren: DisplayTweet[];
    private _displayParent: DisplayTweet|null;
    private _hidden: boolean;

    private _tweet: Tweet;

    constructor(tweet: Tweet, position: {x: number, y: number}, displayParent?: DisplayTweet, displayChildren?: DisplayTweet[]){

        this._tweet = tweet;

        this.position = position;
        this.dimension = {width: 400, height: 100};
        this.subtreeSpan = {startX: this.position.x, endX: this.position.x+this.dimension.width};

        this._displayParent = displayParent?displayParent:null;
        this._displayChildren = displayChildren?displayChildren:[];

        this._hidden = false;

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

    setHidden(state: boolean){
        this._hidden = state;
    }

    get isHidden(){
        return this._hidden;
    }


    //get data from tweet (not a subclass to avoid redundant data)
    //modifying the tweet would update the display as well
    get id(){
        return this._tweet.id;
    }
    get text(){
        return this._tweet.text;
    }
    get stringDate(){
        return this._tweet.stringDate;
    }
    get username(){
        return this._tweet.username;
    }
    get name(){
        return this._tweet.name;
    }


}

export default DisplayTweet;
