import React from 'react'
import { Col, Row, Card } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'


function LandinPage() {
  const navigateByUrl = useNavigate()
  return (
    <>
      <Row className='mt-5 mb-5 align-items-center justify-content-between w-100'>
        <Col></Col>
        <Col lg={5}>
          <h3>Welcom to <span className='text-warning'>Media Player</span></h3>
          <p style={{ textAlign: 'justify' }}>Media player software is a type of application software for playing multimedia computer files like audio and video files. Media players commonly display standard media control icons known from physical devices such as tape recorders and CD players, such as play, pause, fastforward, rewind, and stop buttons</p>
          <button onClick={()=>navigateByUrl('/home')} className='mt-5 btn btn-info'>Get Started <i className='fa-solid fa-arrow-right fa-beat ms-2'></i></button>
        </Col>
        <Col></Col>
        <Col lg={5}>
          <img className='img-fluid' src="https://media.tenor.com/lhlDEs5fNNEAAAAC/music-beat.gif" alt="landing" />
        </Col>


      </Row>
      <div className='container mt-5 mb-5 d-flex align-items-center justify-content-center flex-column'>
        <h3>Features</h3>
        <div className='cards mt-5 mb-5 d-flex align-items-center justify-content-between w-100'>
          <Card className='p-3' style={{ width: '22rem' }}>
            <Card.Img variant="top" src="https://kgovtiti.in/wp-content/uploads/2023/05/settings.gif" />
            <Card.Body>
              <Card.Title>Managin video</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up the
                bulk of the card's content.
              </Card.Text>

            </Card.Body>
          </Card>
          <Card className='p-3' style={{ width: '22rem' }}>
            <Card.Img variant="top" src="https://media.tenor.com/ofI65IFMa5QAAAAj/musical-notes.gif" />
            <Card.Body>
              <Card.Title>Music develoment</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up the
                bulk of the card's content.
              </Card.Text>

            </Card.Body>
          </Card>
          <Card className='p-3' style={{ width: '22rem' }}>
            <Card.Img variant="top" src="https://img1.picmix.com/output/stamp/thumb/1/0/1/6/1586101_9d342.gif" />
            <Card.Body>
              <Card.Title>Settings</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up the
                bulk of the card's content.
              </Card.Text>

            </Card.Body>
          </Card>


        </div>

      </div>

      <div className='container border rounded p-5 border-secondary b-5 mt-5 d-flex align-items-center justify-content-between w-100 mb-5'>
        <div className='col-lg-5'>
          <h3 className='mb-5 text-warning'>Simple, Fast and Powerful </h3>
          <h6 className='mb-3'><span className='fs-5 fw-bolder'>Play Everything</span>: Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt doloribus error, ipsum earum quo, repudiandae necessitatibus accusamus quos dignissimos a omnis similique voluptates dicta sequi eos sunt quis itaque sed!</h6>
          <h6 className='mb-3'><span className='fs-5 fw-bolder'>Play Everything</span>: Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt doloribus error, ipsum earum quo, repudiandae necessitatibus accusamus quos dignissimos a omnis similique voluptates dicta sequi eos sunt quis itaque sed!</h6>
          <h6 className='mb-3'><span className='fs-5 fw-bolder'>Play Everything</span>: Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt doloribus error, ipsum earum quo, repudiandae necessitatibus accusamus quos dignissimos a omnis similique voluptates dicta sequi eos sunt quis itaque sed!</h6>

        
        </div>
        <div className='video-col-lg-6'>
        <iframe width="100%" height="387" src="https://www.youtube.com/embed/IqwIOlhfCak" title="LEO - Badass Lyric | Thalapathy Vijay | Lokesh Kanagaraj | Anirudh Ravichander" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
        </div>
      </div>

    </>
  )
}

export default LandinPage