import { useState } from "react";

const SignUp = () => {
    const [newUsername, setNewUsername] = useState("");
    const [email, setEmail] = useState("");
    const [newPassword, setNewPassword] = useState("");

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
    };

    
    return (
        <div className="user-signup">
            <h2>New User? Sign Up!</h2>
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
        </div>
    )
}

export default SignUp;