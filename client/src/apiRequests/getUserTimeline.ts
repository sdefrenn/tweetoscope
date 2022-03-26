import axios from 'axios'

const serverURL = "";

function getUserTimeline(id: string){
    var body = {
        id : id,
    };
    
    var res;

    axios.post(serverURL+'/twitter/userTimeline', body)
      .then(function (response) {
        console.log(response);
        res = response;
      })
      .catch(function (error: any) {
        console.log(error);
      });

    return res;
}

export default getUserTimeline;