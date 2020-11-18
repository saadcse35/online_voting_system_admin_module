import React, {useState, useEffect} from "react";
import axios from "axios"
import {Link} from "react-router-dom";


const VoteInfo = () => {
    const [voteInfos, setVoteInfo] = useState([]);

    useEffect(() => {
        loadVoteInfos();
    }, [])

    const loadVoteInfos = async () => {
        const result = await axios.get("http://127.0.0.1:8090/voteInfos");
        setVoteInfo(result.data.reverse());
    }

    const deleteVoteInfo = async id => {
        alert("Are you really want to delete ?")
        await axios.delete(`http://127.0.0.1:8090/voteInfos/${id}`);
        loadVoteInfos();
    }

    return (
        <div className=" container">
            <div>
                {/*<div align={" Left"} className={" py-1"}>*/}
                {/*    <Link className=" btn btn-outline-primary btn-sm mr-2 " to="/voteInfo/add"> Add New </Link>*/}
                {/*</div>*/}
                <div className="card">
                    <div className="card-body">
                        <Link className=" btn btn-outline-primary btn-sm mr-2 " to="/voteInfo/add"> Add New </Link>
                        <h1 align={"center"} className="card-title">VoteInfo Table</h1>
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
                                {voteInfos.map((voteInfo, index) => (
                                    <tr align={" center"}>
                                        <th scope=" row">{index + 1}</th>
                                        <td>{voteInfo.code}</td>
                                        <td>{voteInfo.caption}</td>
                                        <td>
                                            <Link className=" btn btn-outline-info btn-sm mr-2"
                                                  to={`/voteInfo/show/${voteInfo.id}`}> View </Link>
                                            <Link className=" btn btn-outline-warning btn-sm mr-2"
                                                  to={`/voteInfo/edit/${voteInfo.id}`}> Edit </Link>
                                            <Link className=" btn btn-outline-danger btn-sm mr-2"
                                                  onClick={() => deleteVoteInfo(voteInfo.id)}> Delete </Link>
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

export default VoteInfo;