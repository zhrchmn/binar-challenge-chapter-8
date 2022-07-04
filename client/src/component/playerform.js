import { useNavigate, useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';


export const Playerform = () => {
    const navigate = useNavigate();
    const { id } = useParams();
    const [showAlert, setshowAlert] = useState({
        name: "",
        email: "",
        password: "",
        experience: "",
        Lvl: ""
    });

    return (
        <div>

            <div className="d-flex my-5 justify-content-between">
                <button type="button" className="btn-outline-secondary" onClick={() => navigate("/")}>Back</button>
                <h1 className="text-center">{} Player</h1>
                <div />
            </div>

            <div className="card border-primary p-5 m-5">
                    <div className="form-group">
                        <label className="form-label mt-2" htmlFor="inputValid">Name</label>
                        <input
                            name="name"
                            type="text"
                            className="form-control"
                        />
                    </div>


                    <div className="form-group">
                        <label className="form-label mt-2" htmlFor="inputValid">Email</label>
                        <input
                            name="email"
                            type="email"
                            className="form-control"
                        />
                    </div>


                    <div className="form-group">
                        <label className="form-label mt-2" htmlFor="inputValid">password</label>
                        <input
                            name="password"
                            type="text"
                            className="form-control"
                        />
                    </div>


                    <div className="form-group">
                        <label className="form-label mt-2" htmlFor="inputValid">Experience</label>
                        <input
                            name="experience"
                            type="text"
                            className="form-control"
                        />
                    </div>

                    <div className="form-group">
                        <label className="form-label mt-2" htmlFor="inputValid">Experience</label>
                        <input
                            name="experience"
                            type="text"
                            className="form-control"
                        />
                    </div>

                    <div className="form-group">
                        <label className="form-label mt-2" htmlFor="inputValid">Level</label>
                        <input
                            name="Lvl"
                            type="text"
                            className="form-control"
                        />
                    </div>


                    <div className="d-grid gap-2 mt-3">
                        <button type="submit" className="btn btn-outline-primary btn-block">{id ? "Edit" : "Add"} Player</button>
                    </div>
                
            </div>

            {/* {
                showAlert && (
                    <div className="px-5">
                        <div className="alert alert-success">
                            <strong>done</strong> {id ? "edit" : "added a new"} player.
                        </div>
                    </div>
                )
            } */}

        </div >
    )
}