import React, {useState, useEffect} from "react";
import axios from "axios"
import {Link} from "react-router-dom";


const District = () => {
    const [districts, setDistrict] = useState([]);

    useEffect(() => {
        loadDistricts();
    }, [])

    const loadDistricts = async () => {
        const result = await axios.get("http://127.0.0.1:8090/districts");
        setDistrict(result.data.reverse());
    }

    const deleteDistrict = async id => {
        alert("Are you really want to delete ?")
        await axios.delete(`http://127.0.0.1:8090/districts/${id}`);
        loadDistricts();
    }

    return (
        <div className=" container">
            <div>
                {/*<div align={" Left"} className={" py-1"}>*/}
                {/*    <Link className=" btn btn-outline-primary btn-sm mr-2 " to="/district/add"> Add New </Link>*/}
                {/*</div>*/}
                <div className="card">
                    <div className="card-body">
                        <Link className=" btn btn-outline-primary btn-sm mr-2 " to="/district/add"> Add New </Link>
                        <h1 align={"center"} className="card-title">District Table</h1>
                        <div className="table-responsive">
                            <table className=" table table-bordered table-sm">
                                <thead>
                                <tr align={" center"}>
                                    <th scope=" col">#</th>
                                    <th scope=" col">Code</th>
                                    <th scope=" col">Caption</th>
                                    <th scope=" col ">Division</th>
                                    <th scope=" col">Action</th>

                                </tr>

                                </thead>
                                <tbody>
                                {districts.map((district, index) => (
                                    <tr align={" center"}>
                                        <th scope=" row">{index + 1}</th>
                                        <td>{district.code}</td>
                                        <td>{district.caption}</td>
                                        <td>{district.Division}</td>
                                        <td>
                                            <Link className=" btn btn-outline-info btn-sm mr-2"
                                                  to={`/district/show/${district.id}`}> View </Link>
                                            <Link className=" btn btn-outline-warning btn-sm mr-2"
                                                  to={`/district/edit/${district.id}`}> Edit </Link>
                                            <Link className=" btn btn-outline-danger btn-sm mr-2"
                                                  onClick={() => deleteDistrict(district.id)}> Delete </Link>
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

export default District;