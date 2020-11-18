import React ,{useState} from "react";
import {Link} from "react-router-dom";
import  axios from "axios";
import {useHistory} from "react-router-dom";


const AddVoteInfo= () => {
    let history = useHistory();
    const [voteInfo, setVoteInfo] = useState({
        code:"",
        caption:"",
        is_Active:""
    })

    const onInputChange = e =>{
        const target = e.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;
        // setVoteInfo({...voteInfo,[e.target.name]: e.target.value})
        setVoteInfo({...voteInfo,[name]: value});
    }

    const onSubmit= async e =>{
        e.preventDefault();
        await axios.post("http://127.0.0.1:8090/voteInfos", voteInfo)
        history.push("/voteInfo")
    }

    return(
        <div className="container">
            <div className="w-75 mx-auto shadow p-5">
                <h2 className="text-center mb-4"> Add New VoteInfo </h2>
                <form onSubmit={e => onSubmit(e)}>
                    <div className="form-group">
                        <label htmlFor="code">Code</label>
                        <input
                            type="text"
                            className="form-control form-control"
                            placeholder="Code"
                            name="code"
                            value={voteInfo.code}
                            onChange={e => onInputChange(e)}/>

                    </div>
                    <div className="form-group">
                        <label htmlFor="caption">Vote Name</label>
                        <input
                            type="text"
                            className="form-control form-control"
                            placeholder="Name of Vote"
                            name="caption"
                            value = {voteInfo.caption}
                            onChange={e => onInputChange(e)}
                        />
                    </div>
                    <div className="form-check">
                        <label className="form-check-label text-muted">
                            <input
                                type="checkbox"
                                className="form-check-input"
                                name="is_Active"
                                value={voteInfo.is_Active}
                                onChange={e => onInputChange(e)}/>
                            <i className="input-helper"></i>
                            Is Active
                        </label>
                    </div>
                    <Link className="btn btn-outline-primary btn-sm mr-2"> Add VoteInfo</Link>
                    <Link className="btn btn-outline-secondary btn-sm" to="/voteInfo"> Cancel</Link>
                </form>
            </div>
        </div>

    );
};

export default AddVoteInfo;