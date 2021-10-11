"use strict";

function Tweet({username,name,date,message}){
    return (
        <div className="tweet">
            <p className="username">{username}</p>
            <p className="name">{name}</p>
            <p className="date">{date}</p>
            <p className="message">{message}</p>
        </div>
    );
};
