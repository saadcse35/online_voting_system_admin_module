import React , {useState, useEffect} from "react";
import  axios from "axios";
import {useParams, Link} from "react-router-dom";

const ShowParty = () =>{
    const { id } = useParams();
    const [party, setParty] = useState({
        code:"",
        caption:"",
        icon:"",
        desc:"",
        remk:"",
        is_Active:"",
        added_by:"",
        date_Created:"",
        last_Updated:""

    })

    useEffect(() => {
        loadParty();
    },[]);

    const loadParty = async () =>{
        const result = await axios.get(`http://127.0.0.1:8090/parties/${id}`);
        setParty(result.data);
    }


    return(
        <div align={"center"} className="container">
            <div className="py-2">
                <Link className="btn btn-outline-warning btn-sm mr-2" to={`/party/edit/${party.id}`}>
                    Edit
                </Link>
                <Link className="btn btn-outline-secondary btn-sm" to="/party"> Cancel</Link>
            </div>

            <h3> Party ID: {id}</h3>
            <hr/>
            <ul className="list-group w-50">
                <li className="list-group-item">Code: {party.code}</li>
                <li className="list-group-item">Name: {party.caption}</li>
                <li className="list-group-item">Icon: {party.icon}</li>
                <li className="list-group-item">Description: {party.desc}</li>
                <li className="list-group-item">Remark: {party.remk}</li>
                <li className="list-group-item">Is Active: {party.is_Active}</li>
                <li className="list-group-item">Added By: {party.added_by}</li>
                <li className="list-group-item">Date Created: {party.date_Created}</li>
                <li className="list-group-item">Last Updated: {party.last_Updated}</li>
            </ul>
        </div>
    );
};

export default ShowParty;