import React, {useState, useEffect} from "react";
import axios from "axios"
import {Link} from "react-router-dom";


const VoteWiseVoterList = () => {
    const [voters, setVoter] = useState([]);

    useEffect(() => {
        loadVoters();
    }, [])

    const loadVoters = async () => {
        const result = await axios.get("http://127.0.0.1:8090/voteWiseVoters");
        setVoter(result.data.reverse());
    }

    const deleteVoter = async id => {
        alert("Are you really want to delete ?")
        await axios.delete(`http://127.0.0.1:8090/voteWiseVoters/${id}`);
        loadVoters();
    }

    return (
        <div className=" container">
            <div>
                {/*<div align={" Left"} className={" py-1"}>*/}
                {/*    <Link className=" btn btn-outline-primary btn-sm mr-2 " to="/district/add"> Add New </Link>*/}
                {/*</div>*/}
                <div className="card">
                    <div className="card-body">
                        <Link className=" btn btn-outline-primary btn-sm mr-2 " to="/voter/add"> Add New </Link>
                        <h1 align={"center"} className="card-title">Vote Wise Voter Table</h1>
                        <div className="table-responsive">
                            <table className=" table table-bordered table-sm">
                                <thead>
                                <tr align={" center"}>
                                    <th scope=" col">#</th>
                                    <th scope=" col">Vote Info</th>
                                    <th scope=" col">Date Created</th>

                                </tr>

                                </thead>
                                <tbody>
                                {voters.map((voter, index) => (
                                    <tr align={" center"}>
                                        <th scope=" row">{index + 1}</th>
                                        <td>{voter.VoteInfo}</td>
                                        <td>{voter.date_Created}</td>
                                        <td>
                                            <Link className=" btn btn-outline-info btn-sm mr-2"
                                                  to={`/voter/show/${voter.id}`}> View </Link>
                                            <Link className=" btn btn-outline-warning btn-sm mr-2"
                                                  to={`/voter/edit/${voter.id}`}> Edit </Link>
                                            <Link className=" btn btn-outline-danger btn-sm mr-2"
                                                  onClick={() => deleteVoter(voter.id)}> Delete </Link>
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

export default VoteWiseVoterList;