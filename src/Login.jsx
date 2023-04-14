import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Login = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate()
    
    const loginSubmit = async (e) => {
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
        window.localStorage.setItem("userId", data.userId)
        navigate(`/reviews/${data.userId}`);
    };

    return (
        <div className="user-login">
            <h2>Already Have an Account? Sign In!</h2>
            <form onSubmit={loginSubmit}>
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
                        type="password"
                        id="password"
                        value={password}
                        placeholder="Password"
                    />
                </label>
                <button>Submit</button>
            </form>
            
            <div>
            <h2>New User?</h2>
            <Link to={"/signup"}>
                <h2>Sign Up!</h2>
                </Link>
                </div>
                
        </div>
    )
}

export default Login;