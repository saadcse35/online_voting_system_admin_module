import React, {useState, useEffect} from "react";
import axios from "axios"
import {Link} from "react-router-dom";


const Upazila = () => {
    const [upazilas, setUpazila] = useState([]);

    useEffect(() => {
        loadUpazilas();
    }, [])

    const loadUpazilas = async () => {
        const result = await axios.get("http://127.0.0.1:8090/upazilas");
        setUpazila(result.data.reverse());
    }

    const deleteUpazila = async id => {
        alert("Are you really want to delete ?")
        await axios.delete(`http://127.0.0.1:8090/upazilas/${id}`);
        loadUpazilas();
    }

    return (
        <div className=" container">
            <div>
                {/*<div align={" Left"} className={" py-1"}>*/}
                {/*    <Link className=" btn btn-outline-primary btn-sm mr-2 " to="/district/add"> Add New </Link>*/}
                {/*</div>*/}
                <div className="card">
                    <div className="card-body">
                        <Link className=" btn btn-outline-primary btn-sm mr-2 " to="/upazila/add"> Add New </Link>
                        <h1 align={"center"} className="card-title">Upazila Table</h1>
                        <div className="table-responsive">
                            <table className=" table table-bordered table-sm">
                                <thead>
                                <tr align={" center"}>
                                    <th scope=" col">#</th>
                                    <th scope=" col">Code</th>
                                    <th scope=" col">Caption</th>
                                    <th scope=" col ">Division</th>
                                    <th scope=" col ">District</th>
                                    <th scope=" col">Action</th>

                                </tr>

                                </thead>
                                <tbody>
                                {upazilas.map((upazila, index) => (
                                    <tr align={" center"}>
                                        <th scope=" row">{index + 1}</th>
                                        <td>{upazila.code}</td>
                                        <td>{upazila.caption}</td>
                                        <td>{upazila.Division}</td>
                                        <td>{upazila.District}</td>
                                        <td>
                                            <Link className=" btn btn-outline-info btn-sm mr-2"
                                                  to={`/upazila/show/${upazila.id}`}> View </Link>
                                            <Link className=" btn btn-outline-warning btn-sm mr-2"
                                                  to={`/upazila/edit/${upazila.id}`}> Edit </Link>
                                            <Link className=" btn btn-outline-danger btn-sm mr-2"
                                                  onClick={() => deleteUpazila(upazila.id)}> Delete </Link>
                                        </td>
                                    </tr>
                                ))}


                                </tbody>
                            </table>
                        </div>

                    </div>
                </div>


            </div>

        </div>

    );
};

export default Upazila;