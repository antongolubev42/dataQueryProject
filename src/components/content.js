import React from 'react';
import '../App.css';
import Logo from './logo.png';


class Content extends React.Component {

  render() {
    return (
      <div className="App">
        <h1>TvSpotter</h1>
        <img src={Logo} height="200" width="200" alt="logo"/>
        <h3>Welcome to TvSpotter, where we keep our eyes on the best and latest tv shows</h3>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br><br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <h4 align="left">Find us on social media:</h4> 
       
        <h5 align="left"> <img align="left" src="https://banner2.cleanpng.com/20180802/czs/kisspng-malta-blockchain-summit-ad-fraud-advertising-indus-twitter-logo-png-5b6352722ae8d6.4341314915332358261758.jpg" height="30" width="30"></img><a href="https://twitter.com">Twitter</a></h5>
        <h5 align="left"><img align="left" src="https://image.flaticon.com/icons/png/512/124/124010.png" height="30" width="30"></img><a href="https://facebook.com">Facebook</a></h5>
        <h5 align="left"><img align="left" src="https://png.pngtree.com/png-clipart/20190517/original/pngtree-instagram-icon-png-image_3584853.jpg" height="30" width="30"></img><a href="https://instagram.com">Instagram</a></h5>

        <br></br>
        <br></br><br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>

        <h2>It is {new Date().toLocaleTimeString()}.</h2>
      </div>
    );
  }
}

export default Content;