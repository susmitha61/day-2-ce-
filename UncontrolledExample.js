import Carousel from 'react-bootstrap/Carousel';

function UncontrolledExample() {
  return (
    <Carousel>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://philharmonia-assets.s3.eu-west-1.amazonaws.com/uploads/2020/01/29170740/21_bass_drum.jpg"
          style={{height:"650px",width:"750px"}}
          alt="First slide"
          ></img>
        <Carousel.Caption>
          <h3>Drums</h3>
          <p>"Practice from head and play from heart."-Ben Frank</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://www.superprof.co.in/blog/wp-content/uploads/2017/07/guitar-guitar-player-musician-instrument-guitarist.jpg"
          style={{height:"650px",width:"750px"}}
          alt="Second slide"
        />

        <Carousel.Caption>
          <h3>Guitar</h3>
          <p>"Just an emotion."-susmitha</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://www.musicnotes.com/images2/promos/store/900x520_piano-min.jpg"
          style={{height:"650px",width:"750px"}}
          alt="Third slide"
        />

        <Carousel.Caption>
          <h3>Piano</h3>
          <p>
          “I tell my piano the things I used to tell you.” – Chopin
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default UncontrolledExample;