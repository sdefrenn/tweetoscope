// Get User Tweet timeline by user ID
// https://developer.twitter.com/en/docs/twitter-api/tweets/timelines/quick-start

import axios, { AxiosResponse } from 'axios';

// this is the ID for @TwitterDev


// The code below sets the bearer token from your environment variables
// To set environment variables on macOS or Linux, run the export command below from the terminal:
// export BEARER_TOKEN='YOUR-TOKEN'
// const bearerToken = process.env.BEARER_TOKEN;

const bearerToken = "AAAAAAAAAAAAAAAAAAAAAKtGYQEAAAAAmetRHjeuMQcnpSorGI3FC1FJyzQ%3DsqjdVQKAgxAm6hW1HcupoPDbgn6ISkYFSfBPeJntGsBEi1h0LJ";

function getUserTimeline(id: string){

    const userId = id;
    const url = `https://api.twitter.com/2/users/${userId}/tweets`;

    const getPage = async (nextToken: string) => {

        try {
            /*const resp = await needle('get', url, params, options);

            if (resp.statusCode != 200) {
                console.log(`${resp.statusCode} ${resp.statusMessage}:\n${resp.body}`);
                return;
            }
            return resp.body;*/
            
            var params: string = "?";
            params += "tweet.fields=lang,author_id";
            params += "&"
            params += "user.fields=created_at";
            if (nextToken) {
                params += "&pagination_token="+nextToken;
            }

            console.log(url+params);

            var res: AxiosResponse<any, any>;
            
            await axios
        
            .get(url+params, {headers : {
                "User-Agent": "v2TweetLookupJS",
                "authorization": `Bearer ${bearerToken}`}
            })
            
            .then(function (response) {
                res = response;
                console.log("Server Request");
                console.dir(res.data.data, {
                    depth: null
                });
                console.dir(res.data.meta, {
                    depth: null
                });
                console.log("Server Request End");
            })

            .catch(function (error: any) {
                console.log(error);
            });

            if (res.data) {
                return res;
            } else {
                throw new Error('Unsuccessful request');
            }


        } catch (err) {
            throw new Error(`Request failed: ${err}`);
        }
    }
    
    const getUserTweets = async () => {
        var userTweets = [];

        // we request the author_id expansion so that we can print out the user name later

        let hasNextPage = true;
        let nextToken = null;
        let userName: string;
        console.log("Retrieving Tweets...");

        while (hasNextPage) {
            console.log("Try");
            let resp = await getPage(nextToken);
            var resp2 = resp.data;
            if (resp2 && resp2.data && resp2.meta.result_count && resp2.meta.result_count > 0) {
                //userName = resp.includes.users[0].username;
                if (resp2.data) {
                    userTweets.push.apply(userTweets, resp2.data);
                }
                console.log("nextToken: " + resp2.meta.next_token);
                if (resp2.meta.next_token) {
                    nextToken = resp2.meta.next_token;
                } else {
                    hasNextPage = false;
                }
            } else {
                hasNextPage = false;
            }
            console.log("hasNestPage: " + hasNextPage);
        }

        console.log("Data Parsing Final: ");
        console.dir(userTweets, {
            depth: null
        });
        console.log(`Got ${userTweets.length} Tweets from ${userName} (user ID ${userId})!`);

    }

    getUserTweets();

}

export default getUserTimeline;

