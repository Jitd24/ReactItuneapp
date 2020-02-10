import React, {Component} from 'react';
import './App.css';
import Nav from './components/Nav';
import Form from './components/Form';
import Card from './components/Card';
import axios from 'axios';

class App extends Component {

  setLoader = (action) => this.setState({ isFetching: action });

  constructor(props){
      super(props);
      this.state = {
        posts:[],
        artist: ''
         }
  }

    artistname = (event) =>{
      let value = event.target.value;
      this.setState({
          artist: value
      });
   }

    handlesubmit = (event) =>{
      this.setLoader(true);

      let queryString = this.state.artist.trim().split(' ').join("+").toLowerCase();

     axios.get(`https://itunes.apple.com/search?term=${queryString}`)
    .then((response) => {
      this.setState({ 
          posts: response.data.results
        });
        this.setLoader(false);
  })
           .catch((error)=>{
           console.log(error);
           })
}


  render() {
    const isFetching = this.state.isFetching;

    return (
      <div className="App">
        <Nav/>
       <div>
           <Form 
              isFetching={isFetching}
              artistname={this.artistname}
              handlesubmit={this.handlesubmit}/>

              {!isFetching &&
                 <ul className="post-list">
                     {
                      this.state.posts.map(i => (
                            <li key={i.trackId}>
                               <Card posts={i} />
                             </li>
                                    ))
                     }
                </ul>
              }
          </div>       
    </div>
  )
}
}
  

export default App;
