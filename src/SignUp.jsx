import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const SignUp = () => {
    const [newUsername, setNewUsername] = useState("");
    const [email, setEmail] = useState("");
    const [newPassword, setNewPassword] = useState("");
    const navigate = useNavigate() 

    const signupSubmit = async (e) => {
        e.preventDefault();
        const response = await fetch("https://drewery-hot-chicken.onrender.com/user", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                username: newUsername,
                email: email,
                password: newPassword
            })
        });
        const data = await response.json();
        console.log("this is the response data", data)
        window.localStorage.setItem("token", data.token)
        window.localStorage.setItem("userId", data.userId)
        window.localStorage.setIteam("username", data.username)
        navigate(`reviews/${data.userId}`)
    };

    
    return (
        <div className="user-signup">
            <h2>Create A New User Profile</h2>
            <form onSubmit={signupSubmit}>
                <label htmlFor="new-username">
                    New Username
                    <input
                        onChange={(e) => setNewUsername(e.target.value)}
                        id="username"
                        value={newUsername}
                        placeholder="Username"
                    />
                </label>
                <label htmlFor="email">
                    Email
                    <input
                        onChange={(e) => setEmail(e.target.value)}
                        id="email"
                        value={email}
                        placeholder="Email"
                    />
                </label>
                <label htmlFor="new-password">
                    Password
                    <input
                        onChange={(e) => setNewPassword(e.target.value)}
                        type="password"
                        id="new-password"
                        value={newPassword}
                        placeholder="Password"
                    />
                </label>
                <button>Submit</button>
            </form>
            <div>
                <h2>Already Have An Account?</h2>
                <Link to="/">
                <h2>Sign In</h2>
                </Link>
            </div>
        </div>
    )
}

export default SignUp;