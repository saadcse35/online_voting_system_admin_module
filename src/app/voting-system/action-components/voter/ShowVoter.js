import React , {useState, useEffect} from "react";
import  axios from "axios";
import {useParams, Link} from "react-router-dom";

const ShowVoter = () =>{
    const { id } = useParams();
    const [voter, setVoter] = useState({
        first_Name:"",
        last_Name:"",
        nid:"",
        contact_No:"",
        email:"",
        marital_Status:"",
        sex:"",
        voter_area:"",
        Division:"",
        District:"",
        Upazila:"",
        UnionCouncil:"",
        added_by:"",
        remk:"",
        is_Active:"",
        date_Created:"",
        last_Updated:"",



    })

    useEffect(() => {
        loadVoter();
    },[]);

    const loadVoter = async () =>{
        const result = await axios.get(`http://127.0.0.1:8090/voters/${id}`);
        setVoter(result.data);
    }


    return(
        <div align={"center"} className="container">
            <div className="py-2">
                <Link className="btn btn-outline-warning btn-sm mr-2" to={`/voter/edit/${voter.id}`}>
                    Edit
                </Link>
                <Link className="btn btn-outline-secondary btn-sm" to="/voter"> Cancel</Link>
            </div>

            <h3> Voter ID: {id}</h3>
            <hr/>
            <ul className="list-group w-50">
                <li className="list-group-item">First Name: {voter.first_Name}</li>
                <li className="list-group-item">Last Name: {voter.last_Name}</li>
                <li className="list-group-item">NID: {voter.nid}</li>
                <li className="list-group-item">Contact No: {voter.contact_No}</li>
                <li className="list-group-item">Email: {voter.email}</li>
                <li className="list-group-item">Marital Status: {voter.marital_Status}</li>
                <li className="list-group-item">Sex: {voter.sex}</li>
                <li className="list-group-item">Voter Area: {voter.voter_area}</li>
                <li className="list-group-item">Division: {voter.Division}</li>
                <li className="list-group-item">District: {voter.District}</li>
                <li className="list-group-item">Upazila: {voter.Upazila}</li>
                <li className="list-group-item">Union Council: {voter.UnionCouncil}</li>
                <li className="list-group-item">Is Active: {voter.is_Active}</li>
                <li className="list-group-item">Remark: {voter.remk}</li>
                <li className="list-group-item">Added By: {voter.added_by}</li>
                <li className="list-group-item">Date Created: {voter.date_Created}</li>
                <li className="list-group-item">Last Updated: {voter.last_Updated}</li>
            </ul>
        </div>
    );
};

export default ShowVoter;