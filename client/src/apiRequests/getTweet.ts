import axios, { AxiosResponse } from 'axios'

const serverURL = "http://localhost:4000";

function getTweet(id: string){

  var res: AxiosResponse<any, any>;

  var body = {
    id : id,
  };

  async function getRequest() {

    await axios

      .post(serverURL+'/twitter/getTweet', body)

      .then(function (response) {
        console.log("Request Answer")
        console.log(response);
        res = response.data;
      })

      .catch(function (error: any) {
        console.log(error);
      });

      if (res) {
          return res;
      } else {
          throw new Error('Unsuccessful request');
      }
    }

  (async () => {

      try {
          const response = await getRequest();
          console.log("Client Request");
          console.dir(response, {
              depth: null
          });
          console.log("Client Request End");

      } catch (e) {
          console.log(e);
      }
  })();

}

export default getTweet;