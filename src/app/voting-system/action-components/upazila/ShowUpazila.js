import React , {useState, useEffect} from "react";
import  axios from "axios";
import {useParams, Link} from "react-router-dom";

const ShowUpazila = () =>{
    const { id } = useParams();
    const [upazila, setUpazila] = useState({
        code:"",
        caption:"",
        Division:"",
        District:"",
        is_Active:"",
        added_by:"",
        date_Created:"",
        last_Updated:""

    })

    useEffect(() => {
        loadUpazila();
    },[]);

    const loadUpazila = async () =>{
        const result = await axios.get(`http://127.0.0.1:8090/upazilas/${id}`);
        setUpazila(result.data);
    }


    return(
        <div align={"center"} className="container">
            <div className="py-2">
                <Link className="btn btn-outline-warning btn-sm mr-2" to={`/upazila/edit/${upazila.id}`}>
                    Edit
                </Link>
                <Link className="btn btn-outline-secondary btn-sm" to="/upazila"> Cancel</Link>
            </div>

            <h3> Upazila ID: {id}</h3>
            <hr/>
            <ul className="list-group w-50">
                <li className="list-group-item">Code: {upazila.code}</li>
                <li className="list-group-item">Name: {upazila.caption}</li>
                <li className="list-group-item">Division: {upazila.Division}</li>
                <li className="list-group-item">District: {upazila.District}</li>
                <li className="list-group-item">Is Active: {upazila.is_Active}</li>
                <li className="list-group-item">Added By: {upazila.added_by}</li>
                <li className="list-group-item">Date Created: {upazila.date_Created}</li>
                <li className="list-group-item">Last Updated: {upazila.last_Updated}</li>
            </ul>
        </div>
    );
};

export default ShowUpazila;