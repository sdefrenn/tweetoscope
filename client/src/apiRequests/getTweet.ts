import axios from 'axios'

const serverURL = "";

function getTweet(id: string){
    var body = {
        id : id,
    };
    
    var res;

    axios.post(serverURL+'/twitter/getTweet', body)
      .then(function (response: any) {
        console.log(response);
        res = response;
      })
      .catch(function (error: any) {
        console.log(error);
      });

    return res;
    
}

export default getTweet;