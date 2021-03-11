import { BrowserRouter as Router, Route } from 'react-router-dom';
import Header from './components/Header';
import Home from './components/Home';
import Create from './components/Create';
import Product from './components/Product';

function App() {
  return (
    <Router>
      <Header />
      <div className="container">
      <Route path="/" exact component={Home} />
      <Route path="/create" exact component={Create} />
      <Route path="/product/:id"  component={Product} />
      </div>
    </Router>
  );
}

export default App;
