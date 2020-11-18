import React ,{useState,useEffect} from "react";
import {Link} from "react-router-dom";
import  axios from "axios";
import {useHistory} from "react-router-dom";


const AddVoter= () => {
    let history = useHistory();
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

    const onInputChange = e =>{
        const target = e.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;
        // setVoter({...voter,[e.target.name]: e.target.value})
        setVoter({...voter,[name]: value});
    }

    const onSubmit= async e =>{
        e.preventDefault();
        await axios.post("http://127.0.0.1:8090/voters", voter)
        history.push("/voter")
    }

    return(
        <div className="container">
            <div className="w-75 mx-auto shadow p-5">
                <h2 className="text-center mb-4"> Add New Union Council </h2>
                <form onSubmit={e => onSubmit(e)}>
                    <div className="form-group">
                        <label htmlFor="first_Name">First Name</label>
                        <input
                            type="text"
                            className="form-control form-control"
                            placeholder="First Name"
                            name="first_Name"
                            value={voter.first_Name}
                            onChange={e => onInputChange(e)}/>

                    </div>
                    <div className="form-group">
                        <label htmlFor="last_Name">Last Name</label>
                        <input
                            type="text"
                            className="form-control form-control"
                            placeholder="Last Name"
                            name="last_Name"
                            value = {voter.last_Name}
                            onChange={e => onInputChange(e)}
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="nid">NID</label>
                        <input
                            type="text"
                            className="form-control form-control"
                            placeholder="NID"
                            name="nid"
                            value = {voter.nid}
                            onChange={e => onInputChange(e)}
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="contact_No">Contact No</label>
                        <select
                            type="number"
                            className="form-control form-control"
                            placeholder="Contact No"
                            name="contact_No"
                            value = {voter.contact_No}
                            onChange={e => onInputChange(e)}
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="email">District</label>
                        <select
                            type="email"
                            className="form-control form-control"
                            placeholder="Email"
                            name="email"
                            value = {voter.email}
                            onChange={e => onInputChange(e)}
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="marital_Status">Marital Status</label>
                        <select
                            type="select"
                            className="form-control form-control"
                            // placeholder="Name of Division"
                            name="marital_Status"
                            value = {voter.marital_Status}
                            onChange={e => onInputChange(e)}
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="sex">Sex</label>
                        <select
                            type="select"
                            className="form-control form-control"
                            // placeholder="Name of Division"
                            name="sex"
                            value = {voter.sex}
                            onChange={e => onInputChange(e)}
                        />
                    </div>
                    <div className="form-check">
                        <label className="form-check-label text-muted">
                            <input
                                type="checkbox"
                                className="form-check-input"
                                name="is_Active"
                                value={voter.is_Active}
                                onChange={e => onInputChange(e)}/>
                            <i className="input-helper"></i>
                            Is Active
                        </label>
                    </div>
                    <Link className="btn btn-outline-primary btn-sm mr-2"> Add Union Council</Link>
                    <Link className="btn btn-outline-secondary btn-sm" to="/voter"> Cancel</Link>
                </form>
            </div>
        </div>
    );
};

export default AddVoter;