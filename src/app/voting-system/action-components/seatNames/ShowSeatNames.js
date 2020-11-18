import React , {useState, useEffect} from "react";
import  axios from "axios";
import {useParams, Link} from "react-router-dom";

const ShowSeatNames = () =>{
    const { id } = useParams();
    const [seatNames, setSeatNames] = useState({
        code:"",
        caption:"",
        Division:"",
        District:"",
        area:"",
        is_Active:"",
        added_by:"",
        date_Created:"",
        last_Updated:""

    })

    useEffect(() => {
        loadSeatNames();
    },[]);

    const loadSeatNames = async () =>{
        const result = await axios.get(`http://127.0.0.1:8090/seatNames/${id}`);
        setSeatNames(result.data);
    }


    return(
        <div align={"center"} className="container">
            <div className="py-2">
                <Link className="btn btn-outline-warning btn-sm mr-2" to={`/seatNames/edit/${seatNames.id}`}>
                    Edit
                </Link>
                <Link className="btn btn-outline-secondary btn-sm" to="/seatNames"> Cancel</Link>
            </div>

            <h3> SeatNames ID: {id}</h3>
            <hr/>
            <ul className="list-group w-50">
                <li className="list-group-item">Code: {seatNames.code}</li>
                <li className="list-group-item">Name: {seatNames.caption}</li>
                <li className="list-group-item">Division: {seatNames.Division}</li>
                <li className="list-group-item">District: {seatNames.District}</li>
                <li className="list-group-item">Area: {seatNames.area}</li>
                <li className="list-group-item">Is Active: {seatNames.is_Active}</li>
                <li className="list-group-item">Added By: {seatNames.added_by}</li>
                <li className="list-group-item">Date Created: {seatNames.date_Created}</li>
                <li className="list-group-item">Last Updated: {seatNames.last_Updated}</li>
            </ul>
        </div>
    );
};

export default ShowSeatNames;