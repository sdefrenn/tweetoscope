import needle from 'needle'

const bearerToken = "AAAAAAAAAAAAAAAAAAAAAKtGYQEAAAAAmetRHjeuMQcnpSorGI3FC1FJyzQ%3DsqjdVQKAgxAm6hW1HcupoPDbgn6ISkYFSfBPeJntGsBEi1h0LJ";

function getTweet(id: string){

    const endpointURL = "https://api.twitter.com/2/tweets?ids=";

    async function getRequest() {

        // These are the parameters for the API request
        // specify Tweet IDs to fetch, and any additional fields that are required
        // by default, only the Tweet ID and text are returned
        const params = {
            "ids": id, // Edit Tweet IDs to look up
            "tweet.fields": "lang,author_id", // Edit optional query parameters here
            "user.fields": "created_at" // Edit optional query parameters here
        }

        // this is the HTTP header that adds bearer token authentication
        const res = await needle('get', endpointURL, params, {
            headers: {
                "User-Agent": "v2TweetLookupJS",
                "authorization": `Bearer ${bearerToken}`
            }
        })

        if (res.body) {
            return res.body;
        } else {
            throw new Error('Unsuccessful request');
        }
    }

    (async () => {

        try {
            // Make request
            const response = await getRequest();
            console.dir(response, {
                depth: null
            });

        } catch (e) {
            console.log(e);
            process.exit(-1);
        }
        process.exit();
    })();

}

export default getTweet;