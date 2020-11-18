import React , {useState, useEffect} from "react";
import  axios from "axios";
import {useParams, Link} from "react-router-dom";

const ShowUnionCouncil = () =>{
    const { id } = useParams();
    const [unionCouncil, setUnionCouncil] = useState({
        code:"",
        caption:"",
        Division:"",
        District:"",
        Upazila:"",
        is_Active:"",
        added_by:"",
        date_Created:"",
        last_Updated:""

    })

    useEffect(() => {
        loadUnionCouncil();
    },[]);

    const loadUnionCouncil = async () =>{
        const result = await axios.get(`http://127.0.0.1:8090/unionCouncils/${id}`);
        setUnionCouncil(result.data);
    }


    return(
        <div align={"center"} className="container">
            <div className="py-2">
                <Link className="btn btn-outline-warning btn-sm mr-2" to={`/unionCouncil/edit/${unionCouncil.id}`}>
                    Edit
                </Link>
                <Link className="btn btn-outline-secondary btn-sm" to="/unionCouncil"> Cancel</Link>
            </div>

            <h3> UnionCouncil ID: {id}</h3>
            <hr/>
            <ul className="list-group w-50">
                <li className="list-group-item">Code: {unionCouncil.code}</li>
                <li className="list-group-item">Name: {unionCouncil.caption}</li>
                <li className="list-group-item">Division: {unionCouncil.Division}</li>
                <li className="list-group-item">District: {unionCouncil.District}</li>
                <li className="list-group-item">Upazila: {unionCouncil.Upazila}</li>
                <li className="list-group-item">Is Active: {unionCouncil.is_Active}</li>
                <li className="list-group-item">Added By: {unionCouncil.added_by}</li>
                <li className="list-group-item">Date Created: {unionCouncil.date_Created}</li>
                <li className="list-group-item">Last Updated: {unionCouncil.last_Updated}</li>
            </ul>
        </div>
    );
};

export default ShowUnionCouncil;