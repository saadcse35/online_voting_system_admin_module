import React ,{useState,useEffect} from "react";
import  axios from "axios";
import {useHistory, useParams, Link} from "react-router-dom";

const EditUpazila= () => {
    let history = useHistory();
    const { id } = useParams();
    const [upazila, setUpazila] = useState({
        code:"",
        caption:"",
        Division:"",
        District:"",
        is_Active:""
    })

    const onInputChange = e =>{
        const target = e.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;
        //setDivision({...division,[e.target.name]: e.target.value})
        setUpazila({...upazila,[name]: value});
    }

    const onSubmit= async e =>{
        e.preventDefault();
        await axios.put(`http://127.0.0.1:8090/upazilas/${id}`, upazila)
        history.push("/upazila")
    }

    useEffect(() => {
        loadUpazila();
    },[]);

    const loadUpazila = async () =>{
        const result = await axios.get(`http://127.0.0.1:8090/upazilas/${id}`);
        setUpazila(result.data);
    }

    return(
        <div className="container">
            <div className="w-75 mx-auto shadow p-5">
                <h2 className="text-center mb-4"> Edit Upazila </h2>
                <form onSubmit={e => onSubmit(e)}>
                    <div className="form-group">
                        <label htmlFor="code">Code</label>
                        <input
                            type="text"
                            className="form-control form-control"
                            placeholder="Code"
                            name="code"
                            value={upazila.code}
                            onChange={e => onInputChange(e)}/>

                    </div>
                    <div className="form-group">
                        <label htmlFor="caption">Name</label>
                        <input
                            type="text"
                            className="form-control form-control"
                            placeholder="Name of Division"
                            name="caption"
                            value = {upazila.caption}
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
                            value = {upazila.Division}
                            onChange={e => onInputChange(e)}
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="District">District</label>
                        <input
                            type="select"
                            className="form-control form-control"
                            placeholder="Name of District"
                            name="District"
                            value = {upazila.District}
                            onChange={e => onInputChange(e)}
                        />
                    </div>
                    <div className="form-check">
                        <label className="form-check-label text-muted">
                            <input
                                type="checkbox"
                                className="form-check-input"
                                name="is_Active"
                                value={upazila.is_Active}
                                onChange={e => onInputChange(e)}/>
                            <i className="input-helper"></i>
                            Is Active
                        </label>
                    </div>
                    <Link className="btn btn-outline-warning mr-2 btn-sm"> Update </Link>
                    <Link className="btn btn-outline-secondary btn-sm" to="/upazila"> Cancel</Link>
                </form>
            </div>
        </div>

    );
};

export default EditUpazila;