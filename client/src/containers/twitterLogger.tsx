import React from 'react'
import axios, {AxiosResponse} from 'axios'
import queryString from 'query-string'

const base_url = 'http://127.0.0.1:4000'
const request_token_route = `${base_url}/twitter` //Mettre ici la route du Request Token
const logout_route = ''//Mettre ici la route de Logout
const access_token_route = ''//Mettre ici la route de l'Access Token
const profile_banner_route = ''//Mettre ici la route de la profile banner de l'utilisateur connecté

function TwitterLogger() {

    const [isLoggedIn, setIsLoggedIn] = React.useState<boolean>(false);
    const [name, setName] = React.useState<string>("");
    const [imageUrl, setImageUrl] = React.useState<string>("");
    const [status, setStatus] = React.useState<string>("");
    const [url, setUrl] = React.useState<string>("");
    const [Cookie, setCookie] = React.useState<string>("");

    const login = () => {

        (async () => {

            try {
                window.open(`${request_token_route}`);
                const response2 = await axios.get(`${request_token_route}`);
                console.log(response2);

                //correctly both token

                setCookie("example1");
                
                setIsLoggedIn(true);

            } 
            
            catch (error) {

                console.error(error); 

            }
            
        })();
    }
        
    const logout = () => {

        try {

            axios.get(`${logout_route}`);
            setCookie("");
            setIsLoggedIn(false);

        } 
            
        catch (error) {

            console.error(error); 

        }

    }
        
    React.useEffect(() => {
        (async() => {
            
            /*const {oauth_token, oauth_verifier} = queryString.parse(window.location.search);  
            
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
            }*/
            
            try {

                //Authenticated Resource Access
                const {data: {name, profile_image_url_https, status, entities}} = await axios({
                url: `${profile_banner_route}`,
                method: 'GET'
                });
                
                setName(name);
                setImageUrl(profile_image_url_https);
                setStatus(status.text);
                setUrl(entities.url.urls[0].expanded_url);

            } 
                
            catch (error) {

                console.error(error); 

            }
        
        })();
        
    },[]);

    return  <header className="App-header">
                { !isLoggedIn &&
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
            </header>;

}

export default TwitterLogger;
