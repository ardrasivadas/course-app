import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Navbar from './Navbar'

const Viewcourse = () => {

    const [data, changeData] = useState([])
    const fetchData = () => {
        axios.get("http://localhost:8086/view").then(
            (Response) => {
                changeData(Response.data)
            }
        ).catch()
    }
    useEffect(() => { fetchData() }, [])

    return (
        <div>
<Navbar/>
            <div className="container">
                <div className="row">
                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">

                        <table class="table">
                            <thead>
                                <tr>
                                    <th scope="col">Title</th>
                                    <th scope="col">Description</th>
                                    <th scope="col">Date</th>
                                    <th scope="col">Duration</th>
                                    <th scope="col">Venue</th>
                                    <th scope="col">Trainer name</th>
                                </tr>
                            </thead>
                            <tbody>

                                {data.map(
                                    (value, index) => {
                                          
                                        return <tr>
                                            <td>{value.title}</td>
                                            <td>{value.description}</td>
                                            <td>{value.date}</td>
                                            <td>{value.duration}</td>
                                            <td>{value.venue}</td>
                                            <td>{value.tname}</td>
                                        </tr>
                                    }
                                )}



                            </tbody>
                        </table>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Viewcourse