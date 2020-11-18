import React , {useState, useEffect} from "react";
import  axios from "axios";
import {useParams, Link} from "react-router-dom";

const ShowDivision = () =>{
    const { id } = useParams();
    const [division, setDivision] = useState({
        code:"",
        caption:"",
        is_Active:"",
        added_by:"",
        date_Created:"",
        last_Updated:""

    })

    useEffect(() => {
        loadDivision();
    },[]);

    const loadDivision = async () =>{
        const result = await axios.get(`http://127.0.0.1:8090/divisions/${id}`);
        setDivision(result.data);
    }


    return(
        <div align={"center"} className="container">
            <div className="py-2">
                <Link className="btn btn-outline-warning btn-sm mr-2" to={`/division/edit/${division.id}`}>
                    Edit
                </Link>
                <Link className="btn btn-outline-secondary btn-sm" to="/division"> Cancel</Link>
            </div>

            <h3> Division ID: {id}</h3>
            <hr/>
            <ul className="list-group w-50">
                <li className="list-group-item">Code: {division.code}</li>
                <li className="list-group-item">Name: {division.caption}</li>
                <li className="list-group-item">Is Active: {division.is_Active}</li>
                <li className="list-group-item">Added By: {division.added_by}</li>
                <li className="list-group-item">Date Created: {division.date_Created}</li>
                <li className="list-group-item">Last Updated: {division.last_Updated}</li>
            </ul>
        </div>
    );
};

export default ShowDivision;