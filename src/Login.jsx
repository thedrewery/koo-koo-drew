import { useState } from "react";
//import { Router } from "react-router-dom";



const Login = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    
    const handleSubmit = async (e) => {
        e.preventDefault();
        const response = await fetch("https://drewery-hot-chicken.onrender.com/signin", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                username: username,
                password: password
            })
        });
        const data = await response.json();
        console.log("this is the response data", data)
        window.localStorage.setItem("token", data.token)
    };



    return (
        <div className="user-login">
            <h2>Already Have an Account? Sign In!</h2>
            <form onSubmit={handleSubmit}>
                <label htmlFor="username">
                    Username
                    <input
                        onChange={(e) => setUsername(e.target.value)}
                        id="username"
                        value={username}
                        placeholder="Username"
                    />
                </label>
                <label htmlFor="password">
                    Password
                    <input
                        onChange={(e) => setPassword(e.target.value)}
                        id="password"
                        value={password}
                        placeholder="Password"
                    />
                </label>
                <button>Submit</button>
            </form>
        </div>
    )
}

export default Login;