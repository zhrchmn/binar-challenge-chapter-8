import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export const PlayerList = () => {
    const [player, setPlayer] = useState([]);
    useEffect(() => {
    },[]);

    const navigate = useNavigate();

    const dummys = [
        {
          username: "jika",
          email: "jika@mail.com",
          password: "jakarta",
          experience: "100",
          Lvl: "99"
        },
        {
            username: "joka",
            email: "joka@mail.com",
            password: "hrsq",
            experience: "1",
            Lvl: "9"
        },
        {
            username: "untu",
            email: "untu@mail.com",
            password: "12345",
            experience: "75",
            Lvl: "5"
        },
        {
            username: "mael",
            email: "mael@mail.com",
            password: "zxccv",
            experience: "1",
            Lvl: "1"
        }
      ];

    return (
        <>
        <div className="col-sm-6">
        <br/>
        <button className="btn btn-success" data-toggle="modal" onClick={() => navigate("/create")}><span>add new</span></button>
        </div>

        <div>
            <h1 className="my-5 text-center">Player List</h1>
                    <div className="card bg-secondary p-3">
                        <table className="table table-hover">
                            <thead>
                                <tr>
                                    <th scope="col">username</th>
                                    <th scope="col">Email</th>
                                    <th scope="col">password</th>
                                    <th scope="col">experience</th>
                                    <th scope="col">level</th>
                                </tr>
                            </thead>
                            <tbody>
                           {dummys.map((dummy, index) => (
                            <tr data-index={index}>
                                <td>{dummy.username}</td>
                                <td>{dummy.email}</td>
                                <td>{dummy.password}</td>
                                <td>{dummy.experience}</td>
                                <td>{dummy.Lvl}</td>
                            </tr>
                           ))}    
                            </tbody>
                        </table>
                    </div>
        </div>
        </>
    )

}

   