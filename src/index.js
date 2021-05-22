import React from 'react';
import ReactDOM from 'react-dom';
import NavBarRoutes from './navbarroute';
import './css/style.css';
import './css/navbar.css';
import './css/dropdown.css';
import './css/bootstrap.min.css';

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

