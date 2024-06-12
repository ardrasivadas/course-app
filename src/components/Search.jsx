import React, { useState } from 'react'
import Navbar from './Navbar'
import axios from 'axios'

const Search = () => {

    const [data, setData] = useState(
        {
            "title": ""
        }
    )
    const [result, setResult] = useState([])

// delete event handler
const deleteCourse=(id)=>{
let input = {"_id": id}
axios.post("http://localhost:8086/delete",input).then(
    (response)=>{
        console.log(response.data)
        if(response.data.status=="success"){
            alert("successfully deleted")
        }
        else {
alert("error in deletion")
        }
    }
).catch().finally()
}



// input value fetching
    const inputHandler = (event) => {
        setData({ ...data, [event.target.name]: event.target.value })
    }


    // search button event
    const readValue = () => {
        console.log(data)
        axios.post("http://localhost:8086/search", data).then(
            (response) => {
                setResult(response.data)

            }
        ).catch(
            (error) => {
                console.log(error)
            }
        ).finally()
       

    }



    return (
        <div>
            <Navbar />
            <div className="container">
                <div className="row">
                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                        <div className="row">
                            <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                                <label htmlFor="" className="form-label">Title</label>
                                <input type="text" className="form-control" name='title' value={data.title} onChange={inputHandler} />
                            </div>
                            <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                                <button className="btn btn-success" onClick={readValue}>SEARCH</button></div>
                        </div>
                    </div>
                </div>

                <div className="row">
                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                        <table class="table">
                            <thead>
                                <tr>
                                    <th scope>TITLE</th>
                                    <th scope>DESCRIPTION</th>
                                    <th scope>TRAINER NAME</th>

                                </tr>
                            </thead>
                            <tbody>
                                {result.map(
                                    (value,index) => {
                                        return <tr>
                                        <td>{value.title}</td>
                                        <td>{value.description}</td>
                                        <td>{value.tname}</td>
                                        <td><button className="btn btn-danger" onClick={()=>{deleteCourse(value._id)}}>DELETE</button></td>
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

export default Search