import React, { useState } from 'react'
import Navbar from './Navbar'
import axios from 'axios'

const Addcourse = () => {
    const [data, setData] = useState(
        {
            "title": "",
            "description": "",
            "date": "",
            "duration": "",
            "venue": "",
            "tname": ""
        }
    )
    const inputHandler = (event) => {
        setData({ ...data, [event.target.name]: event.target.value })}

        const readValue = () => {
            console.log(data)
            axios.post("http://localhost:8086/add", data).then(
                (response) => {
                    console.log(response)
                    if (response.data.status == "success") {
                        alert("success")
                    }
                    else {
                        alert("ok")
                    }
                }


            ).catch()
        }


        return (
            <div>
                <Navbar />
                <div className="container">
                    <div className="row">
                        <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                            <div className="row">
                                <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                                    <label htmlFor="" className="form-label">Title</label>
                                    <input type="text" className="form-control" name='title' value={data.title} onChange={inputHandler} />
                                </div>
                                <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                                    <label htmlFor="" className="form-label">Description</label>
                                    <input type="text" className="form-control" name='description' value={data.description} onChange={inputHandler} />
                                </div>
                                <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                                    <label htmlFor="" className="form-label">Date</label>
                                    <input type="date" name="date" id="" className="form-control" value={data.date} onChange={inputHandler} />
                                </div>
                                <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                                    <label htmlFor="" className="form-label">Duration</label>
                                    <input type="text" className="form-control" name='duration' value={data.duration} onChange={inputHandler} />
                                </div>
                                <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                                    <label htmlFor="" className="form-label">Venue</label>
                                    <input type="text" className="form-control" name='venue' value={data.venue} onChange={inputHandler} />
                                </div>
                                <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                                    <label htmlFor="" className="form-label">Trainer name</label>
                                    <input type="text" className="form-control" name='tname' value={data.tname} onChange={inputHandler} />
                                </div>
                                <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                                    <button className="btn btn-success" onClick={readValue} >SUBMIT</button></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


        )
    }

export default Addcourse
