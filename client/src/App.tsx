import React from "react";
import { Link, Outlet } from "react-router-dom";
// import logo from "./logo.svg";
import axios from 'axios'
import queryString from 'query-string'
import TwitterTimeline from "./containers/twitterTimeline/twitterTimeline";

/**
 * Entry point for the app
 * Initialize app-wide systems (request service)
 * Store any app-wide data if needed (should it be in a component?)
 */



function App() {

  const [isLoggedIn, setIsLoggedIn] = React.useState(false);
  const [name, setName] = React.useState();
  const [imageUrl, setImageUrl] = React.useState();
  const [status, setStatus] = React.useState();
  const [url, setUrl] = React.useState();

  const request_token_route = '' //Mettre ici la route du Request Token
  const logout_route = ''//Mettre ici la route de Logout
  const access_token_route = ''//Mettre ici la route de l'Access Token
  const profile_banner_route = ''//Mettre ici la route de la profile banner de l'utilisateur connecté

  const login = () => {
    (async () => {
      
      try {
        //OAuth Step 1
        const response = await axios({
          url: `${request_token_route}`, 
          method: 'POST'
        });
        
        const { oauth_token } = response.data;
        //Oauth Step 2
        window.location.href = `https://api.twitter.com/oauth/authenticate?oauth_token=${oauth_token}`;
      } catch (error) {
        console.error(error); 
      }
      
    })();
  }

  const logout = () => {
    (async () => {
      try {
        await axios({
          url: `${logout_route}`, 
          method: 'POST'
        });
        setIsLoggedIn(false);
      } catch (error) {
        console.error(error); 
      }
    })();
  }

  React.useEffect(() => {
    (async() => {
      
        const {oauth_token, oauth_verifier} = queryString.parse(window.location.search);  
        
        if (oauth_token && oauth_verifier) {
         try {
            //Oauth Step 3
            await axios({
              url: `${access_token_route}`,  
              method: 'POST',
              data: {oauth_token, oauth_verifier}
            });
         } catch (error) {
          console.error(error); 
         }
        }
        
        try {
          //Authenticated Resource Access
          const {data: {name, profile_image_url_https, status, entities}} = await axios({
            url: `${profile_banner_route}`,
            method: 'GET'
          });
          
          setIsLoggedIn(true);
          setName(name);
          setImageUrl(profile_image_url_https);
          setStatus(status.text);
          setUrl(entities.url.urls[0].expanded_url);
         } catch (error) {
          console.error(error); 
         }
        
      
    })();
  }, []);

  return (
    
    <div className="App">

      <header className="App-header">
        {!isLoggedIn &&
          <img className='signin-btn' onClick={login} alt='Twitter login button' src='https://assets.klaudsol.com/twitter.png' />
        }
        
        { isLoggedIn &&
          <div>
            <div><img alt='User profile' src={imageUrl}/></div> 
            <div>Name: {name}</div>
            <div>URL: {url}</div>
            <div>Status: {status}</div>
            <button className='signout-btn' onClick={logout}>Sign Out</button>
          </div>
        }
      </header>

      <TwitterTimeline someProperty="test"></TwitterTimeline>
      
    </div>
  );
}

export default App;
