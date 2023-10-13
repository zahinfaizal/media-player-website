import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { deleteHistory, getAllHistory } from '../services/allAPI'


function WatchHistory() {
  const [history, setHistory] = useState([])
  const handleHistory = async () => {
    // make API call 
    const { data } = await getAllHistory()
    setHistory(data);
  }
  console.log(history);
  useEffect(() => {
    handleHistory()
  }, [])

  const handleDeleteHistory = async (id)=>{
    // make api call
    await deleteHistory(id)
    // get remaining history
    handleHistory()
  }


  return (
    <>
      <div className='container mt-5 mb-5 d-flex justify-content-between'>
        <h3>Watch History</h3>
        <Link className='d-flex align-items-center' style={{ textDecoration: 'none', fontSize: '20px', color: 'white' }} to={'/home'}><i class="fa-light fa-square-left"></i>Back To Home</Link>

      </div>
      <table className='table container mt-3 mb-3'>
        <thead>
          <tr>
            <th>#</th>
            <th>#Caption</th>
            <th>URL</th>
            <th>Time Stamp</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {
            history.length>0? history?.map((item, index) => (
              <tr key={index}>
                <td>{index+1}</td>
                <td>{item?.caption}</td>
                <td><a href={item?.embedLink} target='_blank' >{item?.embedLink}</a></td>
                <td>{item?.timeStamp}</td>
                <td><button onClick={()=>handleDeleteHistory(item?.id)} className='btn'><i className='fa-solid fa-trash text-danger'></i></button></td>
              </tr>
            )):<p className='fw-bolder fs-5 text-danger'>Nothing to Display!!!</p>
        }
        </tbody>
      </table>
    </>
  )
}

export default WatchHistory