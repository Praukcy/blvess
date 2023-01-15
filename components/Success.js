import Image from 'next/image';
import React from 'react'
import { Row, Col } from 'react-bootstrap';
import Carousel from 'react-bootstrap/Carousel';
import P1 from '../assets/p1.jpg'
import P2 from '../assets/p2.jpg'
import P3 from '../assets/p3.jpg'
import P4 from '../assets/p4.jpg'
import P5 from '../assets/p5.jpg'

const Success = () => {
  return (
    <div>
      <h1 style={{ textAlign: 'center', margin: '30px' }}>Success Story</h1>
      <Row style={{ padding: '8px', margin: '10px', borderRadius: '10px' }}>
        <Col>
          <p style={{ width: '85%', margin: 'auto' }}>The leading progressive farmers during the year 2019-20 for biofortified high zinc wheat seed variety BHU-25 are: -<br />
            I.	Shri Ramanuj Upadhyay, Area-14 Acre, Village-Upadhyay Sagar, Block-Ramgarh, District-Kaimur (Bihar).<br />
            II.	Shri Baban Upadhyay, Area-14 Acre, village-Upadhyay Sagar, block-Ramgarh, district-Kaimur (Bihar)<br />
            The leading progressive farmers during the year 2019-20 for biofortified high zinc wheat seed variety BHU-31 are: -<br />
            I.	Shri Dev Mani Pande, Area-32 Acre, village-Amrupur, Block-Bhawarkol, District-Ghazipur (Uttar Pradesh)<br />
            II.	Shri Munna Pathak, Area- 20 Acre, village- Kaithi, block-Barahmpur, district-Buxar (Bihar)<br />
            III.	Shri Karan Singh, Area-15 Acre, village-Kanhuwa, block-Nuwaon, District- Kaimur (Bihar)<br />
          </p>
        </Col>
        <Col><div style={{ margin: 'auto', background: 'white' }}>
          <Carousel>
            <Carousel.Item interval={1000}>
              <Image
                className="d-block w-100"
                src={P1}
                height={500}
                alt="First slide"
              />
              <Carousel.Caption>
                <h3>Shri Dev Mani Pande</h3>
                <p>Variety-BHU-31, Village-Amrupur, Block-Bhawarkol, District-Ghazipur (Uttar Pradesh)</p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item interval={500}>
              <Image
                className="d-block w-100"
                height={500}
                src={P2}
                alt="Second slide"
              />
              <Carousel.Caption>
                <h3>Second slide label</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <Image
                className="d-block w-100"
                src={P3}
                height={500}
                alt="Third slide"
              />
              <Carousel.Caption>
                <h3>Third slide label</h3>
                <p>
                  Praesent commodo cursus magna, vel scelerisque nisl consectetur.
                </p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <Image
                className="d-block w-100"
                src={P4}
                height={500}
                alt="Third slide"
              />
              <Carousel.Caption>
                <h3>Third slide label</h3>
                <p>
                  Praesent commodo cursus magna, vel scelerisque nisl consectetur.
                </p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <Image
                className="d-block w-100"
                src={P5}
                height={500}
                alt="Third slide"
              />
              <Carousel.Caption>
                <h3>Third slide label</h3>
                <p>
                  Praesent commodo cursus magna, vel scelerisque nisl consectetur.
                </p>
              </Carousel.Caption>
            </Carousel.Item>
          </Carousel>
        </div>
        </Col>
      </Row>
      <div> Special mention is to be made of Shri Baban Upadhyay and Shri Ramanuj Upadhyay, two progressive farmers in Kaimur district of Bihar, who are involved in the cultivation of BHU-25 varieties of wheat on approximately 28 Acres of land.
        Shri Dev Mani Pande, Ghazipur district Uttar Pradesh, Shri Munna Pathak, Buxar district Bihar and Shri Karan Singh, Kaimur district Bihar cultivated BHU-31 variety of wheat on approximately 70 Acre of land and were of the opinion that BHU-31 has wide leaves, which helps in better photosynthesis and the cattle eats them very fondly.</div>
    </div>
  )
}

export default Success