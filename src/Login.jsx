import { useState, useEffect } from "react";
import cookieParser from "cookie-parser";

const Login = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [jwt, setJwt] = useState("")
    
    const handleSubmit = async (e) => {
        e.preventDefault();
        const response = await fetch("https://drewery-hot-chicken.onrender.com/signIn", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ username, password })
        });
        const data = await response.json();
        setJwt(data.token);
    };

//   useEffect(() => {
//         const csrfToken = cookieParser.parse(document.cookie).csrfToken;
//         if (jwt) {
//             fetch("/api/token", {
//                 method: "POST",
//                 headers: {
//                     "Content-Type": "application/json",
//                     "X-CSRF-Token": csrfToken,
//                 },
//                 body: JSON.stringify({ token: jwt }),
//             });
//         }
//     }, [jwt]);

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