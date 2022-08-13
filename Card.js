import React from 'react';

export default function Card(props) {

    return ( <
        div className = "card" >
        <
        img src = { props.picUrl }
        alt = "" / >
        <
        div className = "card-content" >
        <
        h4 > { props.fname } { props.lname } < /h4> <
        h5 > { props.email } < /h5> <
        /div> <
        /div>
    )
}