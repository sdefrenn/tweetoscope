import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }

  /**
   * 
   * @param req the request, should  have a "user" set from passport as {token: str, refresh:str}
   * @returns what needs to be passed to the client (AES of the token(s))
   * @returns null if no "user" field or otherwise invalid request
   */
  receiveTokens(req){
    if(!req.user){
      return null
    }
    //basically convert to something that can be put in a cookie here
    return `
    <style>
      table, th, td {
        border:1px solid black;
      }
    </style>
    <table>
      <tr>
        <td>Token</td>
        <td>${req.user.token || "no token"}</td>
      </tr>
      <tr>
        <td>Refresh</td>
        <td>${req.user.refresh||"no refresh token"}</td>
      </tr>
    </table>`
  }
}
