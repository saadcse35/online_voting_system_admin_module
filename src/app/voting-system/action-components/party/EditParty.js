import React ,{useState,useEffect} from "react";
import  axios from "axios";
import {useHistory, useParams, Link} from "react-router-dom";

const EditParty= () => {
    let history = useHistory();
    const { id } = useParams();
    const [party, setParty] = useState({
        code:"",
        caption:"",
        icon:"",
        desc:"",
        remk:"",
        is_Active:"",
    })

    const onInputChange = e =>{
        const target = e.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;
        //setParty({...party,[e.target.name]: e.target.value})
        setParty({...party,[name]: value});
    }

    const onSubmit= async e =>{
        e.preventDefault();
        await axios.put(`http://127.0.0.1:8090/parties/${id}`, party)
        history.push("/party")
    }

    useEffect(() =>{
        loadParty();
    },[]);

    const loadParty = async () =>{
        const result = await axios.get(`http://127.0.0.1:8090/parties/${id}`);

        setParty(result.data);
    }

    return(
        <div className="container">
            <div className="w-75 mx-auto shadow p-5">
                <h2 className="text-center mb-4"> Edit Party </h2>
                <form onSubmit={e => onSubmit(e)}>
                    <div className="form-group">
                        <label htmlFor="code">Code</label>
                        <input
                            type="text"
                            className="form-control form-control"
                            placeholder="Code"
                            name="code"
                            value={party.code}
                            onChange={e => onInputChange(e)}/>

                    </div>
                    <div className="form-group">
                        <label htmlFor="caption">Name</label>
                        <input
                            type="text"
                            className="form-control form-control"
                            placeholder="Name of Party"
                            name="caption"
                            value = {party.caption}
                            onChange={e => onInputChange(e)}
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="icon">Icon</label>
                        <input
                            type="file"
                            className="form-control form-control"
                            placeholder="Image"
                            name="icon"
                            value = {party.icon}
                            onChange={e => onInputChange(e)}
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="desc">Description</label>
                        <input
                            type="text"
                            className="form-control form-control"
                            placeholder="Description"
                            name="desc"
                            value = {party.desc}
                            onChange={e => onInputChange(e)}
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="remk">Remark</label>
                        <input
                            type="text"
                            className="form-control form-control"
                            placeholder="Remark"
                            name="remk"
                            value = {party.remk}
                            onChange={e => onInputChange(e)}
                        />
                    </div>
                    <div className="form-check">
                        <label className="form-check-label text-muted">
                            <input
                                type="checkbox"
                                className="form-check-input"
                                name="is_Active"
                                value={party.is_Active}
                                onChange={e => onInputChange(e)}/>
                            <i className="input-helper"></i>
                            Is Active
                        </label>
                    </div>
                    <Link className="btn btn-outline-warning mr-2 btn-sm"> Update </Link>
                    <Link className="btn btn-outline-secondary btn-sm" to="/party"> Cancel</Link>
                </form>
            </div>
        </div>

    );
};

export default EditParty;