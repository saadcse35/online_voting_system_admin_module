import React ,{useState,useEffect} from "react";
import {Link} from "react-router-dom";
import  axios from "axios";
import {useHistory} from "react-router-dom";


const AddSeatNames= () => {
    let history = useHistory();
    const [seatNames, setSeatNames] = useState({
        code:"",
        caption:"",
        Division:"",
        District:"",
        area:"",
        is_Active:""
    })

    const onInputChange = e =>{
        const target = e.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;
        // setSeatNames({...seatNames,[e.target.name]: e.target.value})
        setSeatNames({...seatNames,[name]: value});
    }

    const onSubmit= async e =>{
        e.preventDefault();
        await axios.post("http://127.0.0.1:8090/seatNames", seatNames)
        history.push("/seatNames")
    }

    return(
        <div className="container">
            <div className="w-75 mx-auto shadow p-5">
                <h2 className="text-center mb-4"> Add New Seat Names </h2>
                <form onSubmit={e => onSubmit(e)}>
                    <div className="form-group">
                        <label htmlFor="code">Code</label>
                        <input
                            type="text"
                            className="form-control form-control"
                            placeholder="Code"
                            name="code"
                            value={seatNames.code}
                            onChange={e => onInputChange(e)}/>

                    </div>
                    <div className="form-group">
                        <label htmlFor="caption">Name</label>
                        <input
                            type="text"
                            className="form-control form-control"
                            placeholder="Name of SeatNames"
                            name="caption"
                            value = {seatNames.caption}
                            onChange={e => onInputChange(e)}
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="Division">Division</label>
                        <select
                            type="select"
                            className="form-control form-control"
                            // placeholder="Name of Division"
                            name="Division"
                            value = {seatNames.Division}
                            onChange={e => onInputChange(e)}
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="District">District</label>
                        <select
                            type="select"
                            className="form-control form-control"
                            // placeholder="Name of Division"
                            name="District"
                            value = {seatNames.District}
                            onChange={e => onInputChange(e)}
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="area">Area</label>
                        <select
                            type="select"
                            className="form-control form-control"
                            // placeholder="Name of Division"
                            name="area"
                            value = {seatNames.area}
                            onChange={e => onInputChange(e)}
                        />
                    </div>
                    <div className="form-check">
                        <label className="form-check-label text-muted">
                            <input
                                type="checkbox"
                                className="form-check-input"
                                name="is_Active"
                                value={seatNames.is_Active}
                                onChange={e => onInputChange(e)}/>
                            <i className="input-helper"></i>
                            Is Active
                        </label>
                    </div>
                    <Link className="btn btn-outline-primary btn-sm mr-2"> Add Seat Names</Link>
                    <Link className="btn btn-outline-secondary btn-sm" to="/seatNames"> Cancel</Link>
                </form>
            </div>
        </div>
    );
};

export default AddSeatNames;