// Get Tweet objects by ID, using bearer token authentication
// https://developer.twitter.com/en/docs/twitter-api/tweets/lookup/quick-start

import axios, { AxiosResponse } from 'axios';

// The code below sets the bearer token from your environment variables
// To set environment variables on macOS or Linux, run the export command below from the terminal:
// export BEARER_TOKEN='YOUR-TOKEN'

// const bearerToken = process.env.BEARER_TOKEN;

const bearerToken = "AAAAAAAAAAAAAAAAAAAAAKtGYQEAAAAAmetRHjeuMQcnpSorGI3FC1FJyzQ%3DsqjdVQKAgxAm6hW1HcupoPDbgn6ISkYFSfBPeJntGsBEi1h0LJ";

async function getTweet(id: string){

    const endpointURL = "https://api.twitter.com/2/tweets/";

    async function getRequest() {

        // These are the parameters for the API request
        // specify Tweet IDs to fetch, and any additional fields that are required
        // by default, only the Tweet ID and text are returned
        
        
        var params: string = "?";
        params += "tweet.fields=lang,author_id";
        params += "&"
        params += "user.fields=created_at";

        var res: AxiosResponse<any, any>;

        const url = endpointURL + id + params;
        console.log("Request URL: " + url);

        await axios
        
        .get(endpointURL + id + params, {headers : {
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

export default getTweet;