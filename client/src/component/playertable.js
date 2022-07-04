import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';


export const PlayerTable = () => {
    const navigate = useNavigate();
    const [showAlert, setshowAlert] = useState
    ({
        name: '',
        email: '',
        password: '',
        experience: '',
        Lvl:""
    });

    const columns =[{
        datafield:"id",
        text: "ID",
        sort: true,
        headerstyle: () => {
            return {widht: "15%"};
        },
    }, {
        dataField: 'nama',
        text: 'Username',
        sort: true
    },{
    dataField: 'email',
        text: 'email',
        sort: true 
    },{
        dataField: 'password',
        text: 'password',
        sort: true
    },{
        dataField: 'experience',
        text: 'experience',
        sort: true
    },{
        dataField: 'Lvl',
        text: 'level',
        sort: true
    },{
        dataField: 'link',
        text: 'action',
        formatter: (rowContent, row) => {
            return (
                <div>
                    <button onClick={() => navigate("/")}>Edit</button>
                    <button onClick={() => navigate("/")}>Delete</button>
                </div>
            )
        }
    },
        
]}