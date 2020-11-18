import React, {useState, useEffect} from "react";
import axios from "axios"
import {Link} from "react-router-dom";


const Division = () => {
    const [divisions, setDivision] = useState([]);

    useEffect(() => {
        loadDivisions();
    }, [])

    const loadDivisions = async () => {
        const result = await axios.get("http://127.0.0.1:8090/divisions");
        setDivision(result.data.reverse());
    }

    const deleteDivision = async id => {
        alert("Are you really want to delete ?")
        await axios.delete(`http://127.0.0.1:8090/divisions/${id}`);
        loadDivisions();
    }

    return (
        <div className=" container">
            <div>
                {/*<div align={"Left"} className={"py-1"}>*/}
                {/*    <Link className=" btn btn-outline-primary btn-sm mr-2 " to="/division/add"> Add New </Link>*/}
                {/*</div>*/}
                <div className="card">
                    <div className="card-body">
                        <Link className=" btn btn-outline-primary btn-sm mr-2 " to="/division/add"> Add New </Link>
                        <h1 align={"center"} className="card-title">Division Table</h1>
                        <div className="table-responsive">
                            <table className=" table table-bordered table-sm">
                                <thead>
                                <tr align={" center"}>
                                    <th scope=" col">#</th>
                                    <th scope=" col">Code</th>
                                    <th scope=" col">Caption</th>
                                    <th scope=" col">Action</th>

                                </tr>

                                </thead>
                                <tbody>
                                {divisions.map((division, index) => (
                                    <tr align={" center"}>
                                        <th scope=" row">{index + 1}</th>
                                        <td>{division.code}</td>
                                        <td>{division.caption}</td>
                                        <td>
                                            <Link className=" btn btn-outline-info btn-sm mr-2"
                                                  to={`/division/show/${division.id}`}> View </Link>
                                            <Link className=" btn btn-outline-warning btn-sm mr-2"
                                                  to={`/division/edit/${division.id}`}> Edit </Link>
                                            <Link className=" btn btn-outline-danger btn-sm mr-2"
                                                  onClick={() => deleteDivision(division.id)}> Delete </Link>
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

export default Division;