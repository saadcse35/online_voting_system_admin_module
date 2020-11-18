import React, {useState, useEffect} from "react";
import axios from "axios"
import {Link} from "react-router-dom";


const Candidate = () => {
    const [candidates, setCandidate] = useState([]);

    useEffect(() => {
        loadCandidates();
    }, [])

    const loadCandidates = async () => {
        const result = await axios.get("http://127.0.0.1:8090/candidates");
        setCandidate(result.data.reverse());
    }

    const deleteCandidate = async id => {
        alert("Are you really want to delete ?")
        await axios.delete(`http://127.0.0.1:8090/candidates/${id}`);
        loadCandidates();
    }

    return (
        <div className=" container">
            <div>
                {/*<div align={" Left"} className={" py-1"}>*/}
                {/*    <Link className=" btn btn-outline-primary btn-sm mr-2 " to="/district/add"> Add New </Link>*/}
                {/*</div>*/}
                <div className="card">
                    <div className="card-body">
                        <Link className=" btn btn-outline-primary btn-sm mr-2 " to="/candidate/add"> Add New </Link>
                        <h1 align={"center"} className="card-title">Candidate Table</h1>
                        <div className="table-responsive">
                            <table className=" table table-bordered table-sm">
                                <thead>
                                <tr align={" center"}>
                                    <th scope=" col">#</th>
                                    <th scope=" col">Caption</th>
                                    <th scope=" col">Party</th>
                                    <th scope=" col ">Vote Info</th>
                                    <th scope=" col ">User</th>
                                    <th scope=" col ">Voter</th>
                                    <th scope=" col">Action</th>

                                </tr>

                                </thead>
                                <tbody>
                                {candidates.map((candidate, index) => (
                                    <tr align={" center"}>
                                        <th scope=" row">{index + 1}</th>
                                        <td>{candidate.caption}</td>
                                        <td>{candidate.Party}</td>
                                        <td>{candidate.VoteInfo}</td>
                                        <td>{candidate.User}</td>
                                        <td>{candidate.Voter}</td>
                                        <td>
                                            <Link className=" btn btn-outline-info btn-sm mr-2"
                                                  to={`/candidate/show/${candidate.id}`}> View </Link>
                                            <Link className=" btn btn-outline-warning btn-sm mr-2"
                                                  to={`/candidate/edit/${candidate.id}`}> Edit </Link>
                                            <Link className=" btn btn-outline-danger btn-sm mr-2"
                                                  onClick={() => deleteCandidate(candidate.id)}> Delete </Link>
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

export default Candidate;