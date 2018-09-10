import React, { Component } from 'react';
const SendChirp = (props) => {
    return (

        <div className="card mx-auto" style={{ width: "18rem" }}>
        <div className="card-body">
            <h5 className="card-title">{props.chirp.author}</h5>
            <p className="card-text">{props.chirp.text}</p>
        </div>
    </div>
    )


}

export default SendChirp;