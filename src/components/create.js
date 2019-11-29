import React from 'react';
import axios from 'axios';
import { newExpression } from '@babel/types';

class Create extends React.Component {
  constructor(props){
    super(props);

    this.state = {Title:'',
                  Year:'',
                Poster:'',
              Base64Image:''};

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleShowTitleChange = this.handleShowTitleChange.bind(this);
    this.handleShowYearChange = this.handleShowYearChange.bind(this);
    this.handleShowPosterChange = this.handleShowPosterChange.bind(this);
    this.handleImageChange = this.handleImageChange.bind(this);
  }
  //functions for adding to database
  handleShowTitleChange(e){
    this.setState({Title: e.target.value});
  }

  handleShowYearChange(e){
    this.setState({Year: e.target.value});
  }

  handleShowPosterChange(e){
    this.setState({Poster: e.target.value});
  }

  getBase64(file, cb) {
    let reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = function () {
        cb(reader.result)
    };
    reader.onerror = function (error) {
        console.log('Error: ', error);
    };
}

  handleImageChange(e){
    alert(e.target.files[0]);
    this.getBase64(e.target.files[0], (base64) =>{
        this.setState({Base64Image:base64});
    })
  }

  handleSubmit(e){
    alert(this.state.Title+ "      " + this.state.Year 
    +"       "+ this.state.Poster);
    e.preventDefault();
    
    
                const newShow = {
                  title: this.state.Title,
                  year: this.state.Year,
                  poster: this.state.Poster
                };
          axios.post('http://localhost:4000/api/shows',newShow) 
          .then()
          .catch();
          

          this.setState({Title:'',
                  Year:'',
                Poster:''});    
  }

  render() {
    return (
      <div>
        <font color="white"><label><h1>Add a show to the What's Hot section</h1></label></font> 
        <form onSubmit={this.handleSubmit}>
        <div className='form-group'>
        <font color="white"><label>Show Title</label></font>
          <input
          type='text'
          className='form-control'
          value={this.state.Title}
          onChange={this.handleShowTitleChange}
          ></input>
        </div>
        <div className='form-group'>
        <font color="white"><label>Show Year</label></font>
          <input
          type='text'
          className='form-control'
          value={this.state.Year}
          onChange={this.handleShowYearChange}
          ></input>
        </div>
        <div className='form-group'>
        <font color="white"><label>Show Poster Url</label></font>
          <textarea
          row='3'
          className='form-control'
          value={this.state.Poster}
          onChange={this.handleShowPosterChange}
          ></textarea>
        </div>
        <div>
          <font color="white"><label>Upload Poster From Your PC</label></font>
          <input
          type='file'
          className='form-control'
          onChange={this.handleImageChange}
          ></input>

        </div>
        <div>
          <input
          type="submit"
          value="Add Show">
          </input>
        </div>
        </form>
        <img src={this.state.Base64Image}></img>
        <br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br>
      </div>
      
    );
  }
}

export default Create;