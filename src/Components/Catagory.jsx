import React, { useEffect, useState } from "react";
import { Modal,Form,Button, FormLabel, Row, Col } from 'react-bootstrap';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { addCategory, deleteCategory, getAVideo, getAllCategory, updateCategory } from "../services/allAPI";
import VideoCard from './VideoCard';



function Catagory() {
  const [allCategories,setAllCategories] = useState([])
  const [categoryName,setCategoryName]= useState("")
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const handleAddCategory = async ()=>{
    if(categoryName){
      let body={
        categoryName,allVideos:[]
      }
      // make API call 
      const response = await addCategory(body)
      console.log(response);
      if(response.status>=200 && response.status<300){
        // hide modal
        handleClose()
        // rest status
        setCategoryName("")
        // get categories
        getCategories()
      }else{
        toast.error("Operation failed!!! Please try after some time...")
      } 
    }else{
      toast.warning("Please provide Category name!!!")
    }
  }

  const getCategories = async ()=>{
    const {data}= await getAllCategory()
    setAllCategories(data)
  }

  console.log(allCategories);
  useEffect(()=>{
    getCategories()
  },[])

  const handleDelet = async (id)=>{
    await deleteCategory(id)
    getCategories()
  }

  const onDragOver = (e) =>{
    console.log(("Video drag over category"));
    e.preventDefault()
  }

  const videoDrop = async (e,categoryId)=>{
    console.log("Video dropped inside category Id: "+categoryId);
    const videoId = e.dataTransfer.getData("videoId")
    console.log("Video Card Id: ",videoId);

    // get video details 
  const {data} = await getAVideo(videoId)

  // get category details
  const selectedCategory = allCategories?.find(item=>item.id===categoryId)
  selectedCategory.allVideos.push(data)
  console.log(selectedCategory);
  // make api call to update category
  await updateCategory(categoryId,selectedCategory)
  getCategories()

  }

  
  return (
    <div>
      <div className="d-grid ms-3">
        <button onClick={handleShow} className="btn btn-success">
          {" "}
          Add New Catagory
        </button>
      </div>
      {
        allCategories.length>0?allCategories?.map(item=>(
          <div className="mt-3 ms-5 border rounded p-3 w-75" droppable onDragOver={(e)=>onDragOver(e)} onDrop={(e)=>videoDrop(e,item?.id)}>
            <div className="d-flex justify-content-between align-items-center">
              <h6>{item?.categoryName}</h6>
              <button onClick={()=>handleDelet(item.id)} className="btn"><i className="fa-solid fa-trash text-danger"></i></button>
            </div>
            <Row>
              {
                item?.allVideos &&
                item?.allVideos.map(card=>(
                  <Col sm={12} >
                  <VideoCard displayData={card} insideCategory/>
                  </Col>
                ))
              }
            </Row>
          </div>
        )):<p className="fw-bolder fs-5 text-danger ms-3 mt-3">Nothin to display</p>
      }
      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Add a video</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form className="border border-secondary rounded p-3">
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <FormLabel>Enter Catagory Name</FormLabel>
              <Form.Control type="text" placeholder="Enter Catagory Name" onChange={(e)=>setCategoryName(e.target.value)} />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cancel
          </Button>
          <Button onClick={handleAddCategory} className="btn btn-info">Upload</Button>
        </Modal.Footer>
      </Modal>
      <ToastContainer position="top-center" theme="colored" autoClose={2000}/>

    </div>
  );
}

export default Catagory;
