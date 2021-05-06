import React from 'react';
import axios from 'axios';
import './style.css';


class CadastrodeEmpresas extends React.Component {

  state = {
    name: '',
    address: '',
    body: ' ',
    website: ' ',
    posts: []
  };


  componentDidMount = () => {
    this.getPost();
  };


  getPost = () => {
    axios.get('/api')
    .then((response)=>{
      const data = response.data;
      this.setState({posts: data})
      console.log("Data has been received");
    })
    .catch(()=> {
      alert("error retriving data");
    });

  }

  
  handleChange = ({target}) => {
    const {name, value} = target;

    this.setState({ [name]: value});

  };


  submit= (event) => {
    event.preventDefault();

    const payload = {
      name: this.state.name,
      address: this.state.address,
      body: this.state.body,
      website: this.state.website
    };


    axios({
      url: '/companies/save',
      method: 'POST',
      data: payload
    })
    .then(() => {
      console.log('Data has been sent to the server');
      this.resetUserInputs();
      this.getPost();
    })
    .catch(()=> {
      console.log('Internal server error');
    });

  };


  resetUserInputs= () => {
    this.setState({
      name:'',
      address: ' ',
      body:'',
      website: ''
    });

  };
  

  displayPost = (posts) => {

    if(!posts.length) return null;

    return posts.map((post, index)=> (
      <div key={index} className="post_display">
        <h3>{post.title}</h3>
        <p>{post.body}</p>
      </div>
    ));

  }


  render() {
    console.log('state: ', this.state)

    return (
      <div className="app">

        <h1>WELCOME</h1>
        <form onSubmit={this.submit}>
          <div className="form-input">
            <input 
            type="text" 
            name="name" 
            value={this.state.name} 
            placeholder="Enter the title" 
            onChange={this.handleChange}>
            </input>
          </div>
          <div className="form-input">
            <textarea 
            name="address" 
            cols="30" 
            rows="10" 
            value={this.state.address} 
            placeholder="Enter the text" 
            onChange={this.handleChange}>
            </textarea>
          </div>

          <div className="form-input">
            <textarea 
            name="body" 
            cols="30" 
            rows="10" 
            value={this.state.body} 
            placeholder="Enter the text" 
            onChange={this.handleChange}>
            </textarea>
          </div>

          <div className="form-input">
            <textarea 
            name="website" 
            cols="30" 
            rows="10" 
            value={this.state.website} 
            placeholder="Enter the text" 
            onChange={this.handleChange}>
            </textarea>
          </div>

          <button>Submit</button>
        </form>

        <div className="blog-post">
          {this.displayPost(this.state.posts)}
        </div>
      </div>
    );
  }
}

export default CadastrodeEmpresas;

