import React, { useEffect, useState } from 'react'
import JobCard from '../Components/JobCard'
import ManageJob from '../Components/ManageJob'
import { getAllJobDataAPI } from '../service/allApi'
import { Col, Row } from 'react-bootstrap'

function Dashboard() {
  const [jobData, setJobData] = useState([])
  const [isJobDataChanged, setIsJobDataChanged] = useState() //check to inform webpage when new job added otherwise webpage not know until refresh
  // const [isJobDataUpdated, setIsJobDataUpdated] = useState() //check to inform webpage when new job added otherwise webpage not know until refresh
 
  const getAllJobData = async () => {
    try {
      const result = await getAllJobDataAPI()
      console.log("All Data getted from db.json", result);
      setJobData(result.data) // to show getted data  on webpage - result.data in array

    } catch (err) {
      console.log(err);
    }
  }

  useEffect(() => {
    getAllJobData()
  }, [isJobDataChanged])  //refresh page each time job add - ie,really job data changed like delte update,add

  return (
    <>
      <div className="container mb-5">
        {/* this is top dashboard heading and add job button */}
        <div className="d-flex justify-content-between pt-5 pb-3 ">
          <h2>Dashboard</h2>
          <ManageJob setIsJobDataChanged={setIsJobDataChanged} /> {/* this is add job button in dashboard which is a modal */}
        </div>
        {/* this is to show job cards */}
        <Row>
          {
            jobData?.length > 0 ? (
              jobData?.map((job) => (  //job is each object data
                <Col xs={12} sm={6} md={4} className='mb-4'>
                  <JobCard job={job} setIsJobDataChanged={setIsJobDataChanged} />
                </Col>
              ))
            ) : "NO JOBS ADDED"
          }

        </Row>
      </div>

    </>
  )
}

export default Dashboard