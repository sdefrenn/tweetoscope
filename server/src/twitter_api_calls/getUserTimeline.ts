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

    const getPage = async (params, options, nextToken) => {
        if (nextToken) {
            params.pagination_token = nextToken;
        }

        try {
            /*const resp = await needle('get', url, params, options);

            if (resp.statusCode != 200) {
                console.log(`${resp.statusCode} ${resp.statusMessage}:\n${resp.body}`);
                return;
            }
            return resp.body;*/
            
            var res: AxiosResponse<any, any>;
            
            await axios
        
            .get(url, {headers : {
                "User-Agent": "v2TweetLookupJS",
                "authorization": `Bearer ${bearerToken}`}
            })
            
            .then(function (response) {
                res = response;
                console.log("Server Request");
                console.dir(res, {
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
        let params = {
            "max_results": 100,
            "tweet.fields": "created_at",
            "expansions": "author_id"
        }

        const options = {
            headers: {
                "User-Agent": "v2UserTweetsJS",
                "authorization": `Bearer ${bearerToken}`
            }
        }

        let hasNextPage = true;
        let nextToken = null;
        let userName;
        console.log("Retrieving Tweets...");

        while (hasNextPage) {
            let resp = await getPage(params, options, nextToken);
            console.log("Data Parsing Start");
            console.log(resp.data.data);
            console.log("Data Parsing End");
            if (resp && resp.data.data && resp.data.meta.result_count && resp.data.meta.result_count > 0) {
                //userName = resp.includes.users[0].username;
                if (resp.data.data) {
                    userTweets.push.apply(userTweets, resp.data.data);
                }
                if (resp.data.meta.nextToken) {
                    nextToken = resp.data.meta.nextToken;
                } else {
                    hasNextPage = false;
                }
            } else {
                hasNextPage = false;
            }
        }

        console.dir(userTweets, {
            depth: null
        });
        console.log(`Got ${userTweets.length} Tweets from ${userName} (user ID ${userId})!`);

    }

    getUserTweets();

}

export default getUserTimeline;

