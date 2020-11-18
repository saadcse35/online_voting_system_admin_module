import React, {useState, useEffect} from "react";
import axios from "axios"
import {Link} from "react-router-dom";


const Parties = () => {
    const [parties, setParties] = useState([]);

    useEffect(() => {
        loadParties();
    }, [])

    const loadParties = async () => {
        const result = await axios.get("http://127.0.0.1:8090/parties");
        setParties(result.data.reverse());
    }

    const deleteParties = async id => {
        alert("Are you really want to delete ?")
        await axios.delete(`http://127.0.0.1:8090/parties/${id}`);
        loadParties();
    }

    return (
        <div className=" container">
            <div>
                {/*<div align={" Left"} className={" py-1"}>*/}
                {/*    <Link className=" btn btn-outline-primary btn-sm mr-2 " to="/party/add"> Add New </Link>*/}
                {/*</div>*/}
                <div className="card">
                    <div className="card-body">
                        <Link className=" btn btn-outline-primary btn-sm mr-2 " to="/party/add"> Add New </Link>
                        <h1 align={"center"} className="card-title">Parties Table</h1>
                        <div className="table-responsive">
                            <table className=" table table-bordered table-sm">
                                <thead>
                                <tr align={" center"}>
                                    <th scope=" col">#</th>
                                    <th scope=" col">Code</th>
                                    <th scope=" col">Caption</th>
                                    <th scope=" col">Icon</th>
                                    <th scope=" col ">Description</th>
                                    <th scope=" col">Action</th>

                                </tr>

                                </thead>
                                <tbody>
                                {parties.map((party, index) => (
                                    <tr align={" center"}>
                                        <th scope=" row">{index + 1}</th>
                                        <td>{party.code}</td>
                                        <td>{party.caption}</td>
                                        <td>{party.icon}</td>
                                        <td>{party.desc}</td>
                                        <td>
                                            <Link className=" btn btn-outline-info btn-sm mr-2"
                                                  to={`/party/show/${party.id}`}> View </Link>
                                            <Link className=" btn btn-outline-warning btn-sm mr-2"
                                                  to={`/party/edit/${party.id}`}> Edit </Link>
                                            <Link className=" btn btn-outline-danger btn-sm mr-2"
                                                  onClick={() => deleteParties(party.id)}> Delete </Link>
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

export default Parties;