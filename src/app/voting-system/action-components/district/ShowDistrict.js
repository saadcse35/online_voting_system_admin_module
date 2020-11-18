import React , {useState, useEffect} from "react";
import  axios from "axios";
import {useParams, Link} from "react-router-dom";

const ShowDistrict = () =>{
    const { id } = useParams();
    const [district, setDistrict] = useState({
        code:"",
        caption:"",
        Division:"",
        is_Active:"",
        added_by:"",
        date_Created:"",
        last_Updated:""

    })

    useEffect(() => {
        loadDistrict();
    },[]);

    const loadDistrict = async () =>{
        const result = await axios.get(`http://127.0.0.1:8090/districts/${id}`);
        setDistrict(result.data);
    }


    return(
        <div align={"center"} className="container">
            <div className="py-2">
                <Link className="btn btn-outline-warning btn-sm mr-2" to={`/district/edit/${district.id}`}>
                    Edit
                </Link>
                <Link className="btn btn-outline-secondary btn-sm" to="/district"> Cancel</Link>
            </div>

            <h3> District ID: {id}</h3>
            <hr/>
            <ul className="list-group w-50">
                <li className="list-group-item">Code: {district.code}</li>
                <li className="list-group-item">Name: {district.caption}</li>
                <li className="list-group-item">Division: {district.Division}</li>
                <li className="list-group-item">Is Active: {district.is_Active}</li>
                <li className="list-group-item">Added By: {district.added_by}</li>
                <li className="list-group-item">Date Created: {district.date_Created}</li>
                <li className="list-group-item">Last Updated: {district.last_Updated}</li>
            </ul>
        </div>
    );
};

export default ShowDistrict;