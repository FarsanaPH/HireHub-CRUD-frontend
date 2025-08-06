// this is a modal which opens when click a button
import React, { useEffect } from "react";
import { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { CiEdit } from "react-icons/ci";
import { addJobDataAPI, getEditJobDataAPI, updateEditJobDataAPI } from "../service/allApi";

function ManageJob({ isEdit, jobId, setIsJobDataChanged }) { //jobid and isEdit from managejob of jobcard ie,edit
  const [show, setShow] = useState(false);
  const [jobData, setJobData] = useState({
    jobTitle: "",
    company: "",
    location: "",
    salary: "",
    description: ""
  })
  console.log("JobData:", jobData);

  const AddJobData = async () => {  // will call api call in this fnc so async used
    const { jobTitle, company, location, salary, description } = jobData //destructure
    if (!jobTitle || !company || !location || !salary || !description) {
      alert(`Fill the Data Completely!!`)
    } else {
      try {
        const result = await addJobDataAPI(jobData)
        console.log("added data to db json is:", result); //result.data in object
        setIsJobDataChanged(result) //useState from parent Dashboard.jsx to make webpage know somethng added otherwise not show until refresh
        setJobData({
          jobTitle: "",
          company: "",
          location: "",
          salary: "",
          description: ""
        })
        handleClose()

      } catch (err) {
        console.log(err);
      }
    }
  }

  // called inside handleshow
  const getEditJobData = async () => {
    try {
      const result = await getEditJobDataAPI(jobId)
      console.log("edit data getted from db json is:", result); //result.data in object
      setJobData(result.data)
    } catch (err) {
      console.log(err);
    }
  }

  const updateEditJobData = async () => {
    const { jobTitle, company, location, salary, description } = jobData //destructure
    if (!jobTitle || !company || !location || !salary || !description) {
      alert(`Fill the Data Completely!!`)
    } else {
      try {
        const result = await updateEditJobDataAPI(jobId, jobData)
        console.log("updated data to db json is:", result); //result.data in object
        setIsJobDataChanged(result) //useState from parent Dashboard.jsx to make webpage know somethng added otherwise not show until refresh
        // setJobData({
        //   jobTitle: "",
        //   company: "",
        //   location: "",
        //   salary: "",
        //   description: ""
        // })  <-- not needed 
        handleClose()
      } catch (err) {
        console.log(err);
      }
    }
  }

  const handleClear = () => {
    setJobData({
      jobTitle: "",
      company: "",
      location: "",
      salary: "",
      description: ""
    })
  }

  const handleClose = () => setShow(false);
  const handleShow = () => {
    setShow(true);
    if (isEdit && jobId) { //to only call when edit button is clicked
      getEditJobData();
    }
  }
  return (
    <>
      {isEdit ? (
        <Button variant="primary" onClick={handleShow}>
          Edit Job
          <CiEdit size={20} className='ps-1' />
        </Button>
      ) : (
        <Button variant="primary" onClick={handleShow}>
          Add Job
        </Button>
      )}

      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          {isEdit ? (
            <Modal.Title>EDIT JOB</Modal.Title>
          ) : (
            <Modal.Title>ADD JOB</Modal.Title>
          )}
        </Modal.Header>
        <Modal.Body>
          <div>
            <label>Job Title</label>
            <input
              type="text"
              onChange={(e) => setJobData({ ...jobData, jobTitle: e.target.value })}
              value={jobData?.jobTitle}
              placeholder="Enter Job Title"
              className="form-control m-2"
            />
          </div>
          <div>
            <label>Company</label>
            <input
              type="text"
              onChange={(e) => setJobData({ ...jobData, company: e.target.value })}
              value={jobData?.company}
              placeholder="Company Name"
              className="form-control m-2"
            />
          </div>
          <div>
            <label>Location</label>
            <input
              type="text"
              onChange={(e) => setJobData({ ...jobData, location: e.target.value })}
              value={jobData?.location}
              placeholder="Job Location"
              className="form-control m-2"
            />
          </div>
          <div>
            <label>Salary</label>
            <input
              type="text"
              onChange={(e) => setJobData({ ...jobData, salary: e.target.value })}
              value={jobData?.salary}
              placeholder="Ex: ₹10,00,000/year"
              className="form-control m-2"
            />
          </div>
          <div>
            <label>Description</label>
            <textarea
              type="textarea"
              onChange={(e) => setJobData({ ...jobData, description: e.target.value })}
              value={jobData?.description}
              placeholder="Short Job Description"
              className="form-control m-2"
            />
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClear}>
            Clear
          </Button>
          {isEdit ? (<Button variant="primary" onClick={updateEditJobData}>Update</Button>
          ) : (
            <Button variant="primary" onClick={AddJobData}>Save Job</Button>
          )}
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default ManageJob;
