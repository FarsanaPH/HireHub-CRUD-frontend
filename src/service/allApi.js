import { commonApi } from "./commonApi"
import { serverURL } from "./serverURL"

// add Job Data
export const addJobDataAPI = async(reqBody) => {
    return await commonApi("POST",`${serverURL}/jobs`,reqBody)
}

// get All Job Data
export const getAllJobDataAPI = async () => {
    return await commonApi("GET",`${serverURL}/jobs`,"")
}

// Delete a job data
export const deleteJobDataAPI = async (id) => {
    return await commonApi("DELETE",`${serverURL}/jobs/${id}`,"")
}

// Edit a job Data - get
export const getEditJobDataAPI = async (id) => {
    return await commonApi("GET",`${serverURL}/jobs/${id}`,"")
}

// Update a job Data
export const updateEditJobDataAPI = async (id, reqBody) => {
    return await commonApi("PUT",`${serverURL}/jobs/${id}`,reqBody)
}