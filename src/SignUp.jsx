import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const SignUp = () => {
    const [newUsername, setNewUsername] = useState("");
    const [email, setEmail] = useState("");
    const [newPassword, setNewPassword] = useState("");
    const [isLoading, setIsLoading] = useState(false)
    const navigate = useNavigate() 

    const signupSubmit = async (e) => {
        window.localStorage.setItem("username", newUsername)
        setIsLoading(true)
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
        window.localStorage.setItem("token", data.token)
        window.localStorage.setItem("userId", data.userId)
        navigate(`../reviews/${data.userId}`)
    };

    
    return (
        <div className="user-signup">
            {(isLoading) ? (
                <div className="loading-pane">
                    <div className="loader">
                        <h1>🌀</h1>
                    </div>
                    <h1>Loading Reviews</h1>
                </div>
            ) : (
                <form onSubmit={signupSubmit}>
                    <h2>Create A New User Profile</h2>
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
                    <div className="signup-footer">
                        <h3>Already Have An Account?</h3>
                        <Link to="/">
                            <h3>Sign In</h3>
                        </Link>
                    </div>
                </form>
            )}            
        </div>
    )
}

export default SignUp;