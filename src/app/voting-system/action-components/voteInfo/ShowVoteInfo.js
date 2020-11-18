import React , {useState, useEffect} from "react";
import  axios from "axios";
import {useParams, Link} from "react-router-dom";

const ShowVoteInfo = () =>{
    const { id } = useParams();
    const [voteInfo, setVoteInfo] = useState({
        code:"",
        caption:"",
        is_Active:"",
        added_by:"",
        date_Created:"",
        last_Updated:""

    })

    useEffect(() => {
        loadVoteInfo();
    },[]);

    const loadVoteInfo = async () =>{
        const result = await axios.get(`http://127.0.0.1:8090/voteInfos/${id}`);
        setVoteInfo(result.data);
    }


    return(
        <div align={"center"} className="container">
            <div className="py-2">
                <Link className="btn btn-outline-warning btn-sm mr-2" to={`/voteInfo/edit/${voteInfo.id}`}>
                    Edit
                </Link>
                <Link className="btn btn-outline-secondary btn-sm" to="/voteInfo"> Cancel</Link>
            </div>

            <h3> VoteInfo ID: {id}</h3>
            <hr/>
            <ul className="list-group w-50">
                <li className="list-group-item">Code: {voteInfo.code}</li>
                <li className="list-group-item">Vote Name: {voteInfo.caption}</li>
                <li className="list-group-item">Is Active: {voteInfo.is_Active}</li>
                <li className="list-group-item">Added By: {voteInfo.added_by}</li>
                <li className="list-group-item">Date Created: {voteInfo.date_Created}</li>
                <li className="list-group-item">Last Updated: {voteInfo.last_Updated}</li>
            </ul>
        </div>
    );
};

export default ShowVoteInfo;