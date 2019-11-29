import React from 'react';
import axios from 'axios';

class Edit extends React.Component{
    constructor(props){
        super(props);
    
        this.state = {Title:'',
                      Year:'',
                      Poster:'',
                      _id:''};

        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleShowTitleChange = this.handleShowTitleChange.bind(this);
        this.handleShowYearChange = this.handleShowYearChange.bind(this);
        this.handleShowPosterChange = this.handleShowPosterChange.bind(this);
      }
componentDidMount(){
    alert(this.props.match.params.id);

    axios.get('http://localhost:4000/api/shows/'+this.props.match.params.id)
    .then((response)=>{
        this.setState({
            _id:response.data._id,
            Title:response.data.title,
            Year:response.data.year,
            Poster:response.data.poster
        })
    })
    .catch();


}
//edit functions for title , year and poster
handleShowTitleChange(e){
    this.setState({Title: e.target.value});
  }

  handleShowYearChange(e){
    this.setState({Year: e.target.value});
  }

  handleShowPosterChange(e){
    this.setState({Poster: e.target.value});
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
     
    axios.put('http://localhost:4000/api/shows/'+this.state._id, 
    newShow)
    .then()
    .catch();


    this.setState({Title:'',
                    Year:'',
                    Poster:''});    
  }


    render(){
        return(
            <div>
                <h1>Hello from Edit component</h1>
                <form onSubmit={this.handleSubmit}>
        <div className='form-group'>
          <label>Show Title</label>
          <input
          type='text'
          className='form-control'
          value={this.state.Title}
          onChange={this.handleShowTitleChange}
          ></input>
        </div>
        <div className='form-group'>
          <label>Show Year</label>
          <input
          type='text'
          className='form-control'
          value={this.state.Year}
          onChange={this.handleShowYearChange}
          ></input>
        </div>
        <div className='form-group'>
          <label>Show Poster Url</label>
          <textarea
          row='3'
          className='form-control'
          value={this.state.Poster}
          onChange={this.handleShowPosterChange}
          ></textarea>
        </div>
        <div>
          <input
          type="submit"
          value="Edit Show">
          </input>
        </div>
        </form>
            </div>
        )
    }
}

export default Edit;