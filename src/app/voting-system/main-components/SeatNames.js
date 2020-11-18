import React, {useState, useEffect} from "react";
import axios from "axios"
import {Link} from "react-router-dom";


const SeatNames = () => {
    const [seatNames, setSeatNames] = useState([]);

    useEffect(() => {
        loadSeatNamess();
    }, [])

    const loadSeatNamess = async () => {
        const result = await axios.get("http://127.0.0.1:8090/seatNames");
        setSeatNames(result.data.reverse());
    }

    const deleteSeatNames = async id => {
        alert("Are you really want to delete ?")
        await axios.delete(`http://127.0.0.1:8090/seatNames/${id}`);
        loadSeatNamess();
    }

    return (
        <div className=" container">
            <div>
                {/*<div align={" Left"} className={" py-1"}>*/}
                {/*    <Link className=" btn btn-outline-primary btn-sm mr-2 " to="/district/add"> Add New </Link>*/}
                {/*</div>*/}
                <div className="card">
                    <div className="card-body">
                        <Link className=" btn btn-outline-primary btn-sm mr-2 " to="/seatNames/add"> Add New </Link>
                        <h1 align={"center"} className="card-title">Union Council Table</h1>
                        <div className="table-responsive">
                            <table className=" table table-bordered table-sm">
                                <thead>
                                <tr align={" center"}>
                                    <th scope=" col">#</th>
                                    <th scope=" col">Code</th>
                                    <th scope=" col">Caption</th>
                                    <th scope=" col ">Division</th>
                                    <th scope=" col ">District</th>
                                    <th scope=" col ">Area</th>
                                    <th scope=" col">Action</th>

                                </tr>

                                </thead>
                                <tbody>
                                {seatNames.map((seatNames, index) => (
                                    <tr align={" center"}>
                                        <th scope=" row">{index + 1}</th>
                                        <td>{seatNames.code}</td>
                                        <td>{seatNames.caption}</td>
                                        <td>{seatNames.Division}</td>
                                        <td>{seatNames.District}</td>
                                        <td>{seatNames.area}</td>
                                        <td>
                                            <Link className=" btn btn-outline-info btn-sm mr-2"
                                                  to={`/seatNames/show/${seatNames.id}`}> View </Link>
                                            <Link className=" btn btn-outline-warning btn-sm mr-2"
                                                  to={`/seatNames/edit/${seatNames.id}`}> Edit </Link>
                                            <Link className=" btn btn-outline-danger btn-sm mr-2"
                                                  onClick={() => deleteSeatNames(seatNames.id)}> Delete </Link>
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

export default SeatNames;