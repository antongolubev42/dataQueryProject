import React from 'react';
import '../App.css';
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import Logo from './logo.png';

class Action extends React.Component {

  render() {
    return (
      <div className="App">
        <font color="white"><h1>Action Shows</h1></font>
        {/*Hard coded shows in cards */}
        <CardGroup>
  <Card bg="dark" text="white">
  <a href="https://www.imdb.com/title/tt5675620/"><Card.Img  src="http://ayanahaviv.com/wp-content/uploads/2014/11/34-The-Punisher.jpg"/></a>
    <Card.Body>
      <Card.Title>The Punisher</Card.Title>
      2017-2019
      <Card.Text>
      A rocky start can't keep The Punisher from pushing the boundaries of Marvel's TV universe with a fresh take on the comics-derived action thriller.
      </Card.Text>
    </Card.Body>
  </Card>
  <Card bg="dark" text="white">
    <a href="https://www.imdb.com/title/tt3322312/"><Card.Img  src="https://vignette.wikia.nocookie.net/marvelcinematicuniverse/images/9/9e/Daredevil_Season_3_%28Original_Soundtrack_Album%29.jpg/revision/latest?cb=20181019094624" /></a>
    <Card.Body>
      <Card.Title>Daredevil</Card.Title>
      2015-2018
      <Card.Text>
      With tight adherence to its source material's history, high production quality, and a no-nonsense dramatic flair, Daredevil excels as an effective superhero origin story, a gritty procedural, and an exciting action adventure.
      </Card.Text>
    </Card.Body>
  </Card>
  <Card bg="dark" text="white">
    <a href="https://www.imdb.com/title/tt3749900/?ref_=fn_al_tt_1"><Card.Img  src="https://cdn.playlists.net/images/playlists/image/medium/216980.jpg" /></a>
    <Card.Body>
      <Card.Title>Gotham</Card.Title>
      2014-2019
      <Card.Text>
      High production values, a talented cast, and an appealingly stylized approach to the Batman mythos help Gotham overcome its occasionally familiar themes.
      </Card.Text>
    </Card.Body>
  </Card>
</CardGroup>
{/*Second row of cards */}
<CardGroup>
<Card bg="dark" text="white">
    <a href="https://www.imdb.com/title/tt2357547/"><Card.Img  src="https://m.media-amazon.com/images/I/81OqOnF6UML._SS500_.jpg"/></a>
    <Card.Body>
      <Card.Title>Jessica Jones</Card.Title>
      2015-2019
      <Card.Text>
      Jessica Jones builds a multifaceted drama around its engaging antihero, delivering what might be Marvel's strongest TV franchise to date.
      </Card.Text>
    </Card.Body>
  </Card>
  <Card bg="dark" text="white">
    <a href="https://www.imdb.com/title/tt2306299/"><Card.Img  src="https://e-cdns-images.dzcdn.net/images/cover/3e365b38bc51efaf25081697bd5f7162/500x500.jpg" /></a>
    <Card.Body>
      <Card.Title>Vikings</Card.Title>
      2013-Present
      <Card.Text>
      Vikings makes up for its lack of historical accuracy with a heaping helping of violence, romance, and striking visuals.
      </Card.Text>
    </Card.Body>
  </Card>
  <Card bg="dark" text="white">
    <a href="https://www.imdb.com/title/tt0455275/"><Card.Img  src="https://direct.rhapsody.com/imageserver/images/alb.144399536/500x500.jpg" /></a>
    <Card.Body>
      <Card.Title>Prison Break</Card.Title>
      2005-2017
      <Card.Text>
      Prison Break is confident pulp with a crackerjack premise that spreads thinly enough to smooth over the show's more lunkheaded flourishes.
      </Card.Text>
    </Card.Body>
  </Card>
</CardGroup>

      
      </div>
    );
  }
}

export default Action;