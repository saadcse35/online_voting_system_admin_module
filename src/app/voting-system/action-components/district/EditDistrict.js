import React ,{useState,useEffect} from "react";
import  axios from "axios";
import {useHistory, useParams, Link} from "react-router-dom";

const EditDistrict= () => {
    let history = useHistory();
    const { id } = useParams();
    const [district, setDistrict] = useState({
        code:"",
        caption:"",
        Division:"",
        is_Active:""
    })

    const onInputChange = e =>{
        const target = e.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;
        //setDivision({...division,[e.target.name]: e.target.value})
        setDistrict({...district,[name]: value});
    }

    const onSubmit= async e =>{
        e.preventDefault();
        await axios.put(`http://127.0.0.1:8090/districts/${id}`, district)
        history.push("/district")
    }

    useEffect(() => {
        loadDistrict();
    },[]);

    const loadDistrict = async () =>{
        const result = await axios.get(`http://127.0.0.1:8090/districts/${id}`);
        setDistrict(result.data);
    }

    return(
        <div className="container">
            <div className="w-75 mx-auto shadow p-5">
                <h2 className="text-center mb-4"> Edit District </h2>
                <form onSubmit={e => onSubmit(e)}>
                    <div className="form-group">
                        <label htmlFor="code">Code</label>
                        <input
                            type="text"
                            className="form-control form-control"
                            placeholder="Code"
                            name="code"
                            value={district.code}
                            onChange={e => onInputChange(e)}/>

                    </div>
                    <div className="form-group">
                        <label htmlFor="caption">Name</label>
                        <input
                            type="text"
                            className="form-control form-control"
                            placeholder="Name of Division"
                            name="caption"
                            value = {district.caption}
                            onChange={e => onInputChange(e)}
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="Division">Division</label>
                        <input
                            type="select"
                            className="form-control form-control"
                            placeholder="Name of Division"
                            name="Division"
                            value = {district.Division}
                            onChange={e => onInputChange(e)}
                        />
                    </div>
                    <div className="form-check">
                        <label className="form-check-label text-muted">
                            <input
                                type="checkbox"
                                className="form-check-input"
                                name="is_Active"
                                value={district.is_Active}
                                onChange={e => onInputChange(e)}/>
                            <i className="input-helper"></i>
                            Is Active
                        </label>
                    </div>
                    <Link className="btn btn-outline-warning mr-2 btn-sm"> Update </Link>
                    <Link className="btn btn-outline-secondary btn-sm" to="/district"> Cancel</Link>
                </form>
            </div>
        </div>

    );
};

export default EditDistrict;