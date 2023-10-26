import axios from "axios";
import React, { useState } from "react";

const LoginForm = () => {

    const [userName, setUserName] = useState('');
    const [password, setPassword] = useState('');
    const [error,setError] = useState('');

    const submitHandler = async (event) => {
        event.preventDefault();

        const authObject = {
            "Project-ID": "603caa48-4cb3-4fa4-acae-158b8d912a74",
            "User-Name": userName,
            "User-Secret": password,
        }
        try {
            await axios.get("https://api.chatengine.io/chats", { headers: authObject });

            localStorage.setItem("username", userName);
            localStorage.setItem("password", password);
            window.location.reload();

        } catch (error) {
            setError("Oops, incorrect credentials.!")
        }

    }

    return (
        <div className="wrapper">
            <div className="form">
                <h1 className="title">Chat Application</h1>
                <form onSubmit={submitHandler}>
                    <input type="text" className="input" placeholder="User Name" value={userName} onChange={(e) => { setUserName(e.target.value) }} required />
                    <input type="password" className="input" placeholder="Password" value={password} onChange={(e) => { setPassword(e.target.value) }} required />
                    <div align='center'>
                        <button type="submit" className="button"><span>Start Chatting</span></button>
                    </div>
                    <h2 className="error">{error}</h2>
                </form>
            </div>
        </div>
    );
}

export default LoginForm;