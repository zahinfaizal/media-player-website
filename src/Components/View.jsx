import React, { useEffect, useState } from 'react'
import VideoCard from './VideoCard'
import { Col, Row } from 'react-bootstrap'
import { getAllVideos } from '../services/allAPI'


function View({uploadVideoServerResponse}) {

  const [deleteVideoStatus,setDeletVideoStatus] = useState(false)
  const [allVideos,setAllVideos] = useState([])
  const getAllUploadVideos = async ()=>{
    // make api call
    const {data} = await getAllVideos()
    setAllVideos(data);
  }

  useEffect(()=>{
    getAllUploadVideos()
    setDeletVideoStatus(false)
  },[uploadVideoServerResponse,deleteVideoStatus])
  console.log(allVideos);
  return (
    <>
      <Row>
      {
        allVideos.length>0?
        allVideos.map(video=>(
          <Col sm={12} md={6} lg={4} xl={3} >
            <VideoCard displayData={video} setDeletVideoStatus={setDeletVideoStatus}/>
          </Col>
          ))
          :
            <p className='fw-bolder fs-5 text-danger'>Nothing to Display</p>
      }
       
      </Row >
    </>

  )
}

export default View