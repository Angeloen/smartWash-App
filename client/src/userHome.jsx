import React, { Component } from 'react';
import fire from './components/fire.jsx';
import Status from './components/status.jsx'
import { NavLink } from 'react-router-dom';
import Button from '@material-ui/core/Button';

class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
          status : undefined
        }
        this.logout = this.logout.bind(this);
    }


    componentDidMount(){
      this.setState({
        status: "secándose"
      })
    }

    logout() {
        fire.auth().signOut();
    }

    render() {
        return (
          <div>
            <img src={"/clothes.png"} />
            <p> logged to {this.props.user.email}
            <Button onClick={this.logout}>Logout</Button>
            </p>
            <button><NavLink to="/cita">Ordena ahora</NavLink></button>
            <h2> My laundry status </h2>
            <Status status={this.state.status}/>
          </div>


        );
    }
}


export default Home;
