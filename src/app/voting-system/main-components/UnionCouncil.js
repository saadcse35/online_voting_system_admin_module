import React, {useState, useEffect} from "react";
import axios from "axios"
import {Link} from "react-router-dom";


const UnionCouncil = () => {
    const [unionCouncils, setUnionCouncil] = useState([]);

    useEffect(() => {
        loadUnionCouncils();
    }, [])

    const loadUnionCouncils = async () => {
        const result = await axios.get("http://127.0.0.1:8090/unionCouncils");
        setUnionCouncil(result.data.reverse());
    }

    const deleteUnionCouncil = async id => {
        alert("Are you really want to delete ?")
        await axios.delete(`http://127.0.0.1:8090/unionCouncils/${id}`);
        loadUnionCouncils();
    }

    return (
        <div className=" container">
            <div>
                {/*<div align={" Left"} className={" py-1"}>*/}
                {/*    <Link className=" btn btn-outline-primary btn-sm mr-2 " to="/district/add"> Add New </Link>*/}
                {/*</div>*/}
                <div className="card">
                    <div className="card-body">
                        <Link className=" btn btn-outline-primary btn-sm mr-2 " to="/unionCouncil/add"> Add New </Link>
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
                                    <th scope=" col ">Upazila</th>
                                    <th scope=" col">Action</th>

                                </tr>

                                </thead>
                                <tbody>
                                {unionCouncils.map((unionCouncil, index) => (
                                    <tr align={" center"}>
                                        <th scope=" row">{index + 1}</th>
                                        <td>{unionCouncil.code}</td>
                                        <td>{unionCouncil.caption}</td>
                                        <td>{unionCouncil.Division}</td>
                                        <td>{unionCouncil.District}</td>
                                        <td>{unionCouncil.Upazila}</td>
                                        <td>
                                            <Link className=" btn btn-outline-info btn-sm mr-2"
                                                  to={`/unionCouncil/show/${unionCouncil.id}`}> View </Link>
                                            <Link className=" btn btn-outline-warning btn-sm mr-2"
                                                  to={`/unionCouncil/edit/${unionCouncil.id}`}> Edit </Link>
                                            <Link className=" btn btn-outline-danger btn-sm mr-2"
                                                  onClick={() => deleteUnionCouncil(unionCouncil.id)}> Delete </Link>
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

export default UnionCouncil;