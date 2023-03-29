import { useState } from "react";

const Login = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    
    return (
        <div className="user-login">
            <h2>Already Have an Account? Sign In!</h2>
            <form>
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