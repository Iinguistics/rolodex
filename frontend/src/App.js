import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Container } from 'react-bootstrap';
import { ToastProvider } from 'react-toast-notifications';
import Header from './components/Header';
import Home from './components/Home';
import Create from './components/Create';
import Product from './components/Product';


function App() {




  
  return (
    <Router>
      <Header />
      <main className="py-5">
      <Container>
      <ToastProvider autoDismiss={true} autoDismissTimeout={3500} placement='bottom-center' >
        <Route path="/" exact component={Home} />
        <Route path="/create" exact component={Create} />
        <Route path="/product/:id"  component={Product} />
        </ToastProvider>
      </Container>
      </main>
     
      
    </Router>
  );
}

export default App;
