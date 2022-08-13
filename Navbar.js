import React from 'react';


export default function Navbar(props) {


    return ( <
        div className = "navbar" >
        <
        div className = "brand" >
        <
        h4 > LetsGrowMore Users < /h4> <
        /div> <
        ul className = "nav-links" >
        <
        li > < button onClick = {
            () => { props.handleClick(true); } }
        className = "btn" > Get Users < /button></li >
        <
        /ul>            <
        /div>
    )
}