import React, { Component } from 'react';
import fire from './components/fire.jsx';

class Login extends Component {
  constructor(props) {
    super(props);
    this.login = this.login.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.signup = this.signup.bind(this);
    this.state = {
      email: '',
      password: ''
    };
  }

  handleChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  login(e) {
    e.preventDefault();
    fire.auth().signInWithEmailAndPassword(this.state.email, this.state.password).then((u)=>{
    }).catch((error) => {
        console.log(error);
      });
  }

  signup(e){
    e.preventDefault();
    fire.auth().createUserWithEmailAndPassword(this.state.email, this.state.password).then((u)=>{
    }).then((u)=>{console.log(u)})
    .catch((error) => {
        console.log(error);
      })
  }
  render() {
    return (
       <center><div id= "content" className="col-md-6">
       <div>
       <form>

      <div className="form-group">
       <label htmlFor="exampleInputEmail1"></label>
       <input value={this.state.email} onChange={this.handleChange} type="email" name="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Username" />
       <small id="emailHelp" className="form-text text-muted"></small>
      </div>
       <div className="form-group">
      <label htmlFor="exampleInputPassword1"></label>
      <input value={this.state.password} onChange={this.handleChange} type="password" name="password" className="form-control" id="exampleInputPassword1" placeholder="Password" />
      </div>
      <button type="submit" onClick={this.login} className="btn btn-primary">Sign in</button>

 </form>
</div>

<h1>
<img id="hello" src=""/>Picked up dirty. Delivered fresh & folded.</h1>

<button onClick={this.signup} style={{marginLeft: '25px'}} className="btn btn-success">Sign Up</button>
 </div></center>
    );
  }
}
export default Login;