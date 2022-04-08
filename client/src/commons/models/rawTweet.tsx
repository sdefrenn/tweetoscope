import getTweet from "../../apiRequests/getTweet";
import getTweetReplies from "../../apiRequests/getTweetReplies";
import { dateToString } from "../utils/dateFormater";
import RawTimeline from "./rawTimeline";
import RawTweetReplies from "./rawTweetReplies";

/**
 * Twitter as pulled straight from twitter
 */
class RawTweet{

    private _name: string;
    private _username: string;
    private _date: Date;
    private _text: string;
    private _replies: string = ""; 
    private _parent: string = "";
    private _id: string;

    constructor(id: string, name: string, username: string, date: Date, text: string, parent?: string, replies?: string)  {
        
        this._id=id;
        this._name = name;
        this._username = username;
        this._date = date;
        this._text = text;

        if(!replies){
            this._replies = "";
        }else{
            this._replies = replies;
        }

        if(parent && parent!==null) {
            this._parent = parent;
        }else{
            this._parent = "";
        }

    }

    clone(): RawTweet{
        return new RawTweet(this.id, this.name, this.username, this.date, this.text, this.parent);
    }

    /*addReply(reply: RawTweet): void {
        this.replies.push(reply);
      }*/

    get replies(){
        return this._replies;
    }

    async getRepliesRequest(): Promise<RawTweetReplies> {
        return await getTweetReplies(this.id);
    }

    get parent(): string {
        return this._parent;
    }

    async getParentRequest(): Promise<RawTweet>{
        return await getTweet(this._parent);
    }

    get name(): string{
        return this._name;
    }
    get username(): string{
        return this._username;
    }
    get text(): string{
        return this._text;
    }

    get date(): Date{
        return this._date;
    }

    get stringDate(): string{
        return dateToString(this._date);
    }

    get id(): string{
        return this._id;
    }

    isRoot(): boolean{
        return this._parent === null;
    }
}

export default RawTweet;