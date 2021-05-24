import React from 'react';
import ReactDOM from 'react-dom';
import NavBarRoutes from './navbarroute';
import './assets/css/style.css';
import './assets/css/navbar.css';
import './assets/css/dropdown.css';
import 'bootstrap/dist/css/bootstrap.min.css';

class App extends React.Component {
  render() {
    return (
    	<appMain>
          <NavBarRoutes />
      </appMain>
    );
  }
}
ReactDOM.render(<App />, document.getElementById('root'));

