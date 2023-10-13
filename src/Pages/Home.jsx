import React, { useState } from 'react'
import Add from '../Components/Add'
import { Link } from 'react-router-dom'
import View from '../Components/View'
import Catagory from '../Components/Catagory'

function Home() {
  
  const [uploadVideoServerResponse,setUploadVideoServerResponse] = useState({})
  return (
    <>
      <div className="container d-flex justify-content-between align-items-center w-100 mt-5 mb-5">
          <div className="add-videos">
            <Add setUploadVideoServerResponse={setUploadVideoServerResponse}/>
          </div>
          <Link style={{textDecoration:"none"}} to={'/watch-history'}>Watch History</Link>
      </div>
      
      <div className="container-fluid w-100 d-flex justify-content-between  w-100 mt-5 mb-5">
          <div className="all-videos col-lg-9">
            <h2>All Videos</h2>
            <View uploadVideoServerResponse={uploadVideoServerResponse}/>
          </div>
          <div className="category col-lg-3">
            <Catagory/>
          </div>
      </div>
    </>
  )
}

export default Home