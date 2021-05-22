import { useEffect, useState } from 'react';
import { Route } from 'react-router-dom';
import { Container } from 'react-bootstrap';
import { ToastProvider } from 'react-toast-notifications';
import Header from './Header';
import HomeScreen from '../screens/HomeScreen';
import LoginScreen from '../screens/LoginScreen';
import RegisterScreen from '../screens/RegisterScreen';
import ProfileScreen from '../screens/ProfileScreen';
import ViewerEditScreen from '../screens/ViewerEditScreen';
import ViewerDetailScreen from '../screens/ViewerDetailScreen';
import ViewerCaptureScreen from '../screens/ViewerCaptureScreen';
import ProfileSettingScreen from '../screens/ProfileSettingScreen';

/// git push heroku main

function App({ history }) {
  const [userInfo, setUserInfo] = useState(null);
  const [viewerCreated, setViewerCreated] = useState(false);

  useEffect(()=>{

       setUserInfo(
        localStorage.getItem('userInfo') ? JSON.parse
        (localStorage.getItem('userInfo')) : null
       );
        
  }, []);


  // to render cancel button on viewer edit screen
  const viewerCreatedHandler = ()=>{
    setViewerCreated(true);
  }

  const viewerCreatedHandlerReset = ()=>{
    setViewerCreated(false);
  }


  return (
    <>
      <Header userInfo={userInfo} history={history} />
      <main className="py-5">
      <Container>
      <ToastProvider autoDismiss={true} autoDismissTimeout={3500} placement='bottom-center' >
        <Route path="/" exact component={()=> <HomeScreen  userInfo={userInfo} history={history} />} />
        <Route path= "/login"  component={()=> <LoginScreen  userInfo={userInfo} history={history} />} />
        <Route path= "/register"  component={()=> <RegisterScreen  userInfo={userInfo} history={history} />} />
        <Route path= "/profile/settings" exact  component={()=> <ProfileSettingScreen  userInfo={userInfo} history={history} />} />
        <Route
          path='/profile' exact
          render={(props) => (
            <ProfileScreen {...props} userInfo={userInfo} viewerCreatedHandler={viewerCreatedHandler} viewerCreatedHandlerReset={viewerCreatedHandlerReset}/>
          )}
        />
        <Route
          path='/profile/search/:keyword' exact
          render={(props) => (
            <ProfileScreen {...props} userInfo={userInfo} />
          )}
        />
        <Route
          path='/profile/page/:pageNumber' exact
          render={(props) => (
            <ProfileScreen {...props} userInfo={userInfo} />
          )}
        />
        <Route
          path='/profile/search/:keyword/page/:pageNumber' exact
          render={(props) => (
            <ProfileScreen {...props} userInfo={userInfo} />
          )}
        />
        

        <Route
          path='/profile/viewer/edit/:id'
          render={(props) => (
            <ViewerEditScreen {...props} userInfo={userInfo} viewerCreated={viewerCreated} />
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
