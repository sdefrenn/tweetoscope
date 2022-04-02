// Get User Tweet timeline by user ID
// https://developer.twitter.com/en/docs/twitter-api/tweets/timelines/quick-start

import axios, { AxiosResponse } from 'axios';

// this is the ID for @TwitterDev


// The code below sets the bearer token from your environment variables
// To set environment variables on macOS or Linux, run the export command below from the terminal:
// export BEARER_TOKEN='YOUR-TOKEN'
// const bearerToken = process.env.BEARER_TOKEN;

const bearerToken = "AAAAAAAAAAAAAAAAAAAAAKtGYQEAAAAAmetRHjeuMQcnpSorGI3FC1FJyzQ%3DsqjdVQKAgxAm6hW1HcupoPDbgn6ISkYFSfBPeJntGsBEi1h0LJ";

async function getUserTimeline(id: string, p_token: string = ""){

    const endpointURL = `https://api.twitter.com/2/users/${id}/tweets`;

    async function getRequest() {

        // These are the parameters for the API request
        // specify Tweet IDs to fetch, and any additional fields that are required
        // by default, only the Tweet ID and text are returned
        
        var params: string = "?";
        params += "tweet.fields=lang,author_id";
        params += "&"
        params += "user.fields=created_at";
        if (p_token != "") {
            params += "&pagination_token="+p_token;
        }

        var res: AxiosResponse<any, any>;

        const url = endpointURL + params;
        console.log("Request URL: " + url);

        await axios
        
        .get(url, {headers : {
            "User-Agent": "v2TweetLookupJS",
            "authorization": `Bearer ${bearerToken}`}
        })
        
        .then(function (response) {
          res = response.data;
        })

        .catch(function (error: any) {
          console.log(error);
        });

        if (res.data) {
            return res;
        } else {
            throw new Error('Unsuccessful request');
        }
    }

    
    try {
        const response = await getRequest();
        console.log("Server Request");
        console.dir(response, {
            depth: null
        });
        console.log("Server Request End");
        return response;
        } 
        
    catch (e) {
        console.log(e);
        process.exit(-1);
    };

}

export default getUserTimeline;

