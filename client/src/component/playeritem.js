import React from 'react'
import { useNavigate } from 'react-router-dom';

export const Playeritem = ({ Player, setplayer }) => {
    const { id, username, email, password, experience, Lvl } = Player;
    const navigate = useNavigate();

    const deletePlayer = () => {}

    return (
        <tr className="table-primary">
            <th>{username}</th>
            <td>{email}</td>
            <td>{password}</td>
            <td>{experience}</td>
            <td>{Lvl}</td>
            <td>
                <div className="d-flex gap-3">
                    <span type="button" className="badge bg-success" onClick={() => navigate(`/:id/${id}`)}>Edit</span>
                    <span type="button" className="badge bg-danger" >Delete</span>
                </div>
            </td>
        </tr>
    )
}