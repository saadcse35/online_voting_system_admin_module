import React ,{useState,useEffect} from "react";
import  axios from "axios";
import {useHistory, useParams, Link} from "react-router-dom";

const EditDivision= () => {
    let history = useHistory();
    const { id } = useParams();
    const [division, setDivision] = useState({
        code:"",
        caption:"",
        is_Active:""
    })

    const onInputChange = e =>{
        const target = e.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;
        //setDivision({...division,[e.target.name]: e.target.value})
        setDivision({...division,[name]: value});
    }

    const onSubmit= async e =>{
        e.preventDefault();
        await axios.put(`http://127.0.0.1:8090/divisions/${id}`, division)
        history.push("/division")
    }

     useEffect(() => {
        loadDivision();
    },[]);

    const loadDivision = async () =>{
        const result = await axios.get(`http://127.0.0.1:8090/divisions/${id}`);
        setDivision(result.data);
    }

    return(
        <div className="container">
            <div className="w-75 mx-auto shadow p-5">
                <h2 className="text-center mb-4"> Edit Division </h2>
                <form onSubmit={e => onSubmit(e)}>
                    <div className="form-group">
                        <label htmlFor="code">Code</label>
                        <input
                            type="text"
                            className="form-control form-control"
                            placeholder="Code"
                            name="code"
                            value={division.code}
                            onChange={e => onInputChange(e)}/>

                    </div>
                    <div className="form-group">
                        <label htmlFor="caption">Name</label>
                        <input
                            type="text"
                            className="form-control form-control"
                            placeholder="Name of Division"
                            name="caption"
                            value = {division.caption}
                            onChange={e => onInputChange(e)}
                        />
                    </div>
                    <div className="form-check">
                        <label className="form-check-label text-muted">
                            <input
                                type="checkbox"
                                className="form-check-input"
                                name="is_Active"
                                value={division.is_Active}
                                onChange={e => onInputChange(e)}/>
                            <i className="input-helper"></i>
                            Is Active
                        </label>
                    </div>
                    <Link className="btn btn-outline-warning mr-2 btn-sm"> Update </Link>
                    <Link className="btn btn-outline-secondary btn-sm" to="/division"> Cancel</Link>
                </form>
            </div>
        </div>

    );
};

export default EditDivision;