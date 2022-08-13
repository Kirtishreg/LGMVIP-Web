import React, { useState, useEffect } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Card from './components/Card';

function App() {

    const [users, setUsers] = useState(undefined);
    const [isClicked, setClick] = useState(false);

    useEffect(() => {
        if (isClicked) {
            setTimeout(function() {
                fetch("https://reqres.in/api/users?page=1", {
                        method: "get"
                    }).then(res => res.json())
                    .then(result => {
                        setUsers(result.data);

                    })
            }, 500);
        }
    }, [isClicked]);

    function fetchData(res) {
        setClick(res);
    }

    function loader(result) {
        if (result) {
            return ( < div className = "" > < /div>)    
            }
        }


        return ( <
            >
            <
            div className = "App" >
            <
            Navbar handleClick = { fetchData }
            /> {
                users ?
                    <
                    div className = "main" > {
                        users.map((user) => {
                            return <Card key = { user.id }
                            lname = { user.first_name }
                            fname = { user.last_name }
                            email = { user.email }
                            picUrl = { user.avatar }
                            />
                        })
                    } <
                    /div> :
                    loader(isClicked)
            } <
            /div> <
            />
        );
    }

    export default App;