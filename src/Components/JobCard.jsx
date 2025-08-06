import Button from 'react-bootstrap/Button';
import React from "react";
import Card from "react-bootstrap/Card";
import ManageJob from './ManageJob';
import { RiDeleteBin6Line } from "react-icons/ri";
import { deleteJobDataAPI } from '../service/allApi';

function JobCard({ job, setIsJobDataChanged }) {
  console.log("Job card data:", job); //job is an object data
  // const {jobTitle, company, location, salary, description} = job  //destructure

  const handleDelete = async (id) => {
    console.log("Job ID is",id);
    try{
      const result = await deleteJobDataAPI(id)
      console.log("Deleted data:",result);
      setIsJobDataChanged(result)  //useState from parent Dashboard.jsx to make webpage know somethng added otherwise not show until refresh
    }catch(err){
      console.log(err);     
    }
    
  }
  return (
    <Card className="mb-4 shadow-sm h-100">
      <Card.Body>
        <Card.Title>{job?.jobTitle}</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">{job?.company}</Card.Subtitle>
        <Card.Subtitle className="mb-2 text-muted">Location: {job?.location}</Card.Subtitle>
        <Card.Subtitle className="mb-2 text-muted">Salary: {job?.salary}</Card.Subtitle>
        <Card.Subtitle className="mb-2 text-muted">Description: {job?.description}</Card.Subtitle>
        <div className="d-flex flex-column flex-sm-row justify-content-between gap-2 pt-3">
          <ManageJob isEdit={true} jobId={job?.id} setIsJobDataChanged={setIsJobDataChanged}/>   {/* so edit job comes in card and onclicking modal will show ie,the managejob component*/}
          <Button variant="danger" onClick={()=>handleDelete(job?.id)}>
            Delete
            <RiDeleteBin6Line size={20} className='ps-1' />
          </Button>
        </div>
      </Card.Body>
    </Card>
  );
}

export default JobCard;
