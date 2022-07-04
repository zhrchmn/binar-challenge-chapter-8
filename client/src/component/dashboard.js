import react from "react";
import "./dashboard.css"
import 'bootstrap/dist/css/bootstrap.min.css';
import { useNavigate } from 'react-router-dom'
import { useState } from "react"

const navigate = useNavigate;
const mystyle = {
    table: {
        textalign: "center",
    }
}

class Dashboard extends react.Component {

    state = { 
        username: "",
        email: "",
        password: "",
        experience: "",
        lvl: "",
    }

    changeName = (value) => {
        this.setstate ({
            username: value.target.value
        })
    }

    changeEmail = (value) => {
        this.setState ({
            email: value.target.value
        })
    }

    changePassword = (value) => {
        this.setState ({
            password: value.target.value
        })
    }

    changeExperience = (value) => {
        this.setState ({
            experience: value.target.value
        })
    }

    changeLvl = (value) => {
        this.setState ({
            lvl:value.target.value
        })
    }

    render () {
        return (
            <>
            <div> </div>
            <div className="table">
                <h3>add player</h3>
                <input value={this.state.username} placeholder={"input username"}/>
                <input value={this.state.password} placeholder={"input password"}/>
                <input value={this.state.email} placeholder={"input email"}/>
                <div>
                <button className="btn btn-outline-secondary my-2 my-sm-0" onClick={() => navigate(`/`)}>
                Create Player
                </button>
                </div>

                <div>
                <h3>Player List</h3>
                <table class="table2 table-hover">
                    <thead>
                        <tr>
                        <th scope="col">No</th>
                        <th scope="col">username</th>
                        <th scope="col">email</th>
                        <th scope="col">password</th>
                        <th scope="col">experience</th>
                        <th scope="col">Lvl</th>
                        <th scope="col">action</th>
                        </tr>
                    </thead>

                    <tbody>
                        <tr>
                        <th scope="row">1</th>
                        <td>Mark</td>
                        <span></span>
                        <td>Otto@mail.com</td>
                        <span></span>
                        <td>1234</td>
                        <span></span>
                        <td>100</td>
                        <span></span>
                        <td>99</td>
                        <td>
                            <div className="d-flex gap-3">
                            <span role="button" className="badge bg-success">
                                edit
                            </span>
                            <span role="button" className="badge bg-danger">
                                delete
                            </span>
                            

                            </div>
                        </td>
                        </tr>

                         <tr>
                        <th scope="row">1</th>
                        <td>zerk</td>
                        <span></span>
                        <td>Otto@mail.com</td>
                        <span></span>
                        <td>1234</td>
                        <span></span>
                        <td>100</td>
                        <span></span>
                        <td>99</td>
                        <td>
                            <div className="d-flex gap-3">
                            <span role="button" className="badge bg-success">
                                edit
                            </span>
                            <span role="button" className="badge bg-danger">
                                delete
                            </span>
                            

                            </div>
                        </td>
                        </tr>
                        
                    </tbody>
                    </table>
                </div>
            </div>
            </>
        )

                 
    }   





}   

export default Dashboard

// export const useForm = () => {
//     const [inputValues, setinputValues] = useState({});

//     const resetForm = () => {
//         setinputValues (initialState);
//     } 

//     const handleInputChange = ({target}) => {
//         setinputValues({
//             ...inputValues, [target.name]: target.value
//         });
//     }

//     return {
//         inputValues,
//         handleInputChange,
//         resetForm
//     }
// }



// kalau multiclass
// export { Dashboard,dan lain lain}