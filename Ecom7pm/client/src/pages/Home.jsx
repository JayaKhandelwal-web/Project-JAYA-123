import Carousel from 'react-bootstrap/Carousel';
import images1 from "../images/images1.jfif";
import b2 from "../images/b2.jpg";
import images from '../images/images.jfif';
import Flipcartbg from "../images/Flipcartbg.png";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

const Home = () => {
  return (
    <>
      <Carousel>
        <Carousel.Item>
          <img src={Flipcartbg} width="100%" height="350" />
        </Carousel.Item>
        <Carousel.Item>
          <img src={images1} width="100%" height="350" />
        </Carousel.Item>
        <Carousel.Item>
          <img src={b2} width="100%" height="350" />
        </Carousel.Item>
        <Carousel.Item>
          <img src={images} width="100%" height="350" />
        </Carousel.Item>
      </Carousel>

      <h1 className="heading1">Top Brands</h1>
      <hr />

      <div id="topbrand">
        <Card style={{ width: '18rem' }}>
          <Card.Img variant="top" src={images1} />
          <Card.Body>
            <Card.Title>Card Title</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title.
            </Card.Text>
            <Button variant="primary">Go somewhere</Button>
          </Card.Body>
        </Card>
      </div>
    </>
  );
};

export default Home;
