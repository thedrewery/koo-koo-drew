import { useState } from "react";

const SignUp = () => {
    const [newUsername, setNewUsername] = useState("");
    const [email, setEmail] = useState("");
    const [newPassword, setNewPassword] = useState("");
    
    return (
        <div className="user-signup">
            <h2>New User? Sign Up!</h2>
            <form>
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