import { useEffect, useState } from 'react';
import { Route } from 'react-router-dom';
import { Container } from 'react-bootstrap';
import { ToastProvider } from 'react-toast-notifications';
import Header from './Header';
import HomeScreen from '../screens/HomeScreen';
import Create from './Create';
import Product from './Product';
import LoginScreen from '../screens/LoginScreen';
import RegisterScreen from '../screens/RegisterScreen';
import ProfileScreen from '../screens/ProfileScreen';
import ViewerEditScreen from '../screens/ViewerEditScreen';


function App({ history, match }) {
  const [userInfo, setUserInfo] = useState(null);

  useEffect(()=>{

       setUserInfo(
        localStorage.getItem('userInfo') ? JSON.parse
        (localStorage.getItem('userInfo')) : null
       );
     
        
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
            <ProfileScreen {...props} userInfo={userInfo} />
          )}
        />
        

        <Route
          path='/profile/viewer/edit/:id'
          render={(props) => (
            <ViewerEditScreen {...props} userInfo={userInfo} />
          )}
        />

        <Route path="/create" exact component={Create} />
        <Route path="/product/:id"  component={Product} />
        </ToastProvider>
      </Container>
      </main>
     </>
      
  );
}

export default App;
