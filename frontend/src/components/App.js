import { useEffect, useState } from 'react';
import { Route } from 'react-router-dom';
import { Container } from 'react-bootstrap';
import { ToastProvider } from 'react-toast-notifications';
import axios from 'axios';
import Header from './Header';
import HomeScreen from '../screens/HomeScreen';
import LoginScreen from '../screens/LoginScreen';
import RegisterScreen from '../screens/RegisterScreen';
import ProfileScreen from '../screens/ProfileScreen';
import ViewerEditScreen from '../screens/ViewerEditScreen';
import ViewerDetailScreen from '../screens/ViewerDetailScreen';
import ViewerCaptureScreen from '../screens/ViewerCaptureScreen';


function App({ history }) {
  const [userInfo, setUserInfo] = useState(null);
  const [userTwitchToken, setUserTwitchToken] = useState(null);

  const fetchTwitchToken = async()=>{
    const { data } = await axios.get('/api/twitchdata/token');
    localStorage.setItem('userTwitchToken', JSON.stringify(data));
  }

  useEffect(()=>{

       setUserInfo(
        localStorage.getItem('userInfo') ? JSON.parse
        (localStorage.getItem('userInfo')) : null
       );
       

       setUserTwitchToken(
        localStorage.getItem('userTwitchToken') ? JSON.parse
        (localStorage.getItem('userTwitchToken')) : null
       );

       if(!userTwitchToken){
        fetchTwitchToken();
       }

        
  }, [])



  return (
    <>
      <Header userInfo={userInfo} history={history} />
      <main className="py-5">
      <Container>
      <ToastProvider autoDismiss={true} autoDismissTimeout={3500} placement='bottom-center' >
        <Route path="/" exact component={()=> <HomeScreen  userInfo={userInfo} history={history} />} />
        <Route path= "/login"  component={()=> <LoginScreen  userInfo={userInfo} history={history} />} />
        <Route path= "/register"  component={()=> <RegisterScreen  userInfo={userInfo} history={history} />} />

        <Route
          path='/profile' exact
          render={(props) => (
            <ProfileScreen {...props} userInfo={userInfo} userTwitchToken={userTwitchToken}/>
          )}
        />
        <Route
          path='/profile/search/:keyword' exact
          render={(props) => (
            <ProfileScreen {...props} userInfo={userInfo} userTwitchToken={userTwitchToken}/>
          )}
        />
        <Route
          path='/profile/page/:pageNumber' exact
          render={(props) => (
            <ProfileScreen {...props} userInfo={userInfo} userTwitchToken={userTwitchToken}/>
          )}
        />
        <Route
          path='/profile/search/:keyword/page/:pageNumber' exact
          render={(props) => (
            <ProfileScreen {...props} userInfo={userInfo} userTwitchToken={userTwitchToken}/>
          )}
        />
        

        <Route
          path='/profile/viewer/edit/:id'
          render={(props) => (
            <ViewerEditScreen {...props} userInfo={userInfo} />
          )}
        />

        <Route
          path='/profile/viewer/detail/:id'
          render={(props) => (
            <ViewerDetailScreen {...props} userInfo={userInfo} />
          )}
        />

        <Route
          path='/profile/viewer/captures'
          render={(props) => (
            <ViewerCaptureScreen {...props} userInfo={userInfo} />
          )}
        />



        </ToastProvider>
      </Container>
      </main>
     </>
      
  );
}

export default App;
