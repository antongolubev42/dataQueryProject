import React from 'react';
import logo from './logo.svg';
import './App.css';
import Content from './components/content';
import Header from './components/header';
import Footer from './components/footer';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import { Switch, Route, BrowserRouter } from 'react-router-dom'
import NavDropdown from 'react-bootstrap/NavDropdown';
import Create from './components/create';
import Read from './components/read';
import Edit from './components/edit';
import Logo from './logo1.jpg';


class App extends React.Component {

  render() {
    return (
      <BrowserRouter>
        <div className="App">
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Navbar.Brand href="/">TvCentral</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mr-auto">
        <Nav.Link href="/read">What's hot</Nav.Link>
        <Nav.Link href="/create">Add a tv show</Nav.Link>
        <NavDropdown title="Genres" id="collasible-nav-dropdown">
          <NavDropdown.Item href="/read">Action</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.2">Comedy</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.3">Drama</NavDropdown.Item>
          <NavDropdown.Divider />
          <NavDropdown.Item href="#action/3.4">All</NavDropdown.Item>
        </NavDropdown>
    </Nav>
    <Nav>
      <Nav.Link href="#deets">More deets</Nav.Link>
      <Nav.Link eventKey={2} href="#memes">
        Dank memes
      </Nav.Link>
    </Nav>
  </Navbar.Collapse>
</Navbar>
<Switch>
            <Route exact path="/" component={Content} />
            <Route path="/create" component={Create} />
            <Route path="/read" component={Read} />
            <Route path="/edit/:id" component={Edit} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}



export default App;
