const { commonAPI } = require("./commonAPI")
const { serverURL } = require("./serverURL")

// upload a video
export const uploadVideo = async (reqBody)=>{
    // make post http request to http://localhost:4000/videos to add video in json server and return response to Add component
    return await commonAPI ("POST",`${serverURL}/videos`,reqBody)
}

// get all videos from json server
export const getAllVideos = async ()=>{
    // make post http request to http://localhost:4000/videos to get video in json server and return response to View component
    return await commonAPI ("GET",`${serverURL}/videos`,"")
}

// get a video  from json server
export const getAVideo = async (id)=>{
    // make post http request to http://localhost:4000/videos to get video in json server and return response response to VideoCard component
    return await commonAPI ("GET",`${serverURL}/videos/${id}`,"")
}

// remove a video  from json server
export const deleteAVideo = async (id)=>{
    // make post http request to http://localhost:4000/videos to remove video in json server and return response response to VideoCard component
    return await commonAPI ("DELETE",`${serverURL}/videos/${id}`,{})
}

// store watching video history to json server
export const addToHistory = async (videoDetails)=>{
    //make post http request to http://localhost:4000/history to get video history from json server and return response to video card component
    return await commonAPI("POST",`${serverURL}/history`,videoDetails)
}

// get all watching video history to json server
export const getAllHistory = async ()=>{
    //make post http request to http://localhost:4000/history to get video history from json server and return response to video card component
    return await commonAPI("GET",`${serverURL}/history`,"")
}

// delete all watching video history to json server
export const deleteHistory = async (id)=>{
    //make post http request to http://localhost:4000/history to delete video history from json server and return response to video card component
    return await commonAPI("DELETE",`${serverURL}/history/${id}`,{})
}

// add all catagory from json server
export const addCategory = async (reqBody)=>{
    //make post http request to http://localhost:4000/categories to get video history from json server and return response to video card component
    return await commonAPI("POST",`${serverURL}/catagories`,reqBody)
}

// get all catagory from json server
export const getAllCategory = async ()=>{
    //make post http request to http://localhost:4000/categories to get video history from json server and return response to video card component
    return await commonAPI("GET",`${serverURL}/catagories`,"")
}

// get all catagory from json server
export const deleteCategory = async (id)=>{
    //make post http request to http://localhost:4000/categories to get video history from json server and return response to video card component
    return await commonAPI("DELETE",`${serverURL}/catagories/${id}`,{})
}

// update a catagory from json server
export const updateCategory = async (id,body)=>{
    //make post http request to http://localhost:4000/categories to get video history from json server and return response to video card component
    return await commonAPI("PUT",`${serverURL}/catagories/${id}`,body)
}



