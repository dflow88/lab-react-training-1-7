import React from 'react'

export default function index(props) {




    return (
        <div className="IdCard">

                <img src={props.picture} alt=""/>
                <div>
                    <strong>First Name:</strong> {props.firstName}
                    <br/>
                    <strong>Last Name:</strong> {props.lastName}
                    <br/>
                    <strong>Gender:</strong> {props.gender}
                    <br/>
                    <strong>Height:</strong> {props.height}
                    <br/>
                    <strong>Birth:</strong> {props.birth}
                </div>
        </div>
    )
}
