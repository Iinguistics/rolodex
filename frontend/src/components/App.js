import { useEffect, useState } from 'react';
import { Route } from 'react-router-dom';
import { Container } from 'react-bootstrap';
import { ToastProvider } from 'react-toast-notifications';
import Header from './Header';
import Home from './Home';
import Create from './Create';
import Product from './Product';
import LoginScreen from '../screens/LoginScreen';
import RegisterScreen from '../screens/RegisterScreen';


function App({ history }) {
  const [userInfo, setUserInfo] = useState(null);

  useEffect(()=>{

       setUserInfo(
        localStorage.getItem('userInfo') ? JSON.parse
        (localStorage.getItem('userInfo')) : null
       );
     
          if(userInfo){
            console.log(userInfo);
            history.push('/test');
          }
        
  }, [])




  return (
    <>
      <Header userInfo={userInfo} history={history} />
      <main className="py-5">
      <Container>
      <ToastProvider autoDismiss={true} autoDismissTimeout={3500} placement='bottom-center' >
        <Route path="/" exact component={()=> <Home  userInfo={userInfo} history={history} />} />
        <Route path= "/login"  component={()=> <LoginScreen  userInfo={userInfo} history={history} />} />
        <Route path= "/register"  component={()=> <RegisterScreen  userInfo={userInfo} history={history} />} />
        <Route path="/create" exact component={Create} />
        <Route path="/product/:id"  component={Product} />
        </ToastProvider>
      </Container>
      </main>
     </>
      
  );
}

export default App;
