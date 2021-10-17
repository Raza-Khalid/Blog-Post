import React from 'react'
import { Carousel } from 'react-bootstrap'

const Home = (props) => {
  return (
    <div>
      <div className="paragraph-one">
        <h2>
          "One day I will find the right words, and they will be simple." -Jack
          Kerouac
        </h2>
        <h1>{props.user}</h1>
      </div>

      <div className="homepage">
        <Carousel
          style={{
            marginLeft: 'auto',
            marginRight: 'auto',
            width: '50%',
            marginTop: '1em'
          }}
          fade
        >
          <Carousel.Item>
            <img
              id="image"
              className="d-block w-100"
              src="https://i.imgur.com/A217p0V.jpg"
              alt="blog"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              id="image"
              className="d-block w-100"
              src="https://i.imgur.com/HWfuomZ.jpg"
              alt="blog"
            />

            <Carousel.Caption></Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              id="image"
              className="d-block w-100"
              src="https://i.imgur.com/HggzA37.jpg"
              alt="blog"
            />
          </Carousel.Item>
        </Carousel>
      </div>
      <div>
        <h1>Famous Articles</h1>
        <div className="paragraph-one">
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit.
            Dignissimos ducimus eveniet quisquam aut hic ab error quis quam
            alias neque quia, deserunt tempore. Natus ut ab explicabo recusandae
            molestiae eveniet?
          </p>
        </div>
        <div className="paragraph-one">
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit.
            Dignissimos ducimus eveniet quisquam aut hic ab error quis quam
            alias neque quia, deserunt tempore. Natus ut ab explicabo recusandae
            molestiae eveniet?
          </p>
        </div>
        <div className="paragraph-one">
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit.
            Dignissimos ducimus eveniet quisquam aut hic ab error quis quam
            alias neque quia, deserunt tempore. Natus ut ab explicabo recusandae
            molestiae eveniet?
          </p>
        </div>
        <div className="paragraph-one">
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit.
            Dignissimos ducimus eveniet quisquam aut hic ab error quis quam
            alias neque quia, deserunt tempore. Natus ut ab explicabo recusandae
            molestiae eveniet?
          </p>
        </div>
        <div className="paragraph-one">
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit.
            Dignissimos ducimus eveniet quisquam aut hic ab error quis quam
            alias neque quia, deserunt tempore. Natus ut ab explicabo recusandae
            molestiae eveniet?
          </p>
        </div>
      </div>
    </div>
  )
}

export default Home
