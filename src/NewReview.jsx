import { useState } from "react";

const RATINGS = ["🐔", "🐔🐔", "🐔🐔🐔", "🐔🐔🐔🐔", "🐔🐔🐔🐔🐔"]
const PUBLIC = ["true", "false"]

const NewReview = () => {
    const [establishment, setEstablishment] = useState("")
    const [address, setAddress] = useState("")
    const [description, setDescription] = useState("")
    const [body, setBody] = useState("")
    const [rating, setRating] = useState("")
    const [dbRating, setDbRating] = useState("")
    const [publicReview, setPublicReview] = useState("")

    const createNewReview = async (e) => {
        e.preventDefault();
        const token = localStorage.getItem('token');
        const userId = localStorage.getItem('userId')
        // const username = localStorage.getItem('username')

        const response = await fetch(
            "https://drewery-hot-chicken.onrender.com/api/review", {
                method: "POST",
                headers: {
                    "Authorization": `Bearer ${token}`,
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    establishment: establishment,
                    address: address,
                    description: description,
                    body: body,
                    rating: dbRating,
                    public: JSON.parse(publicReview),
                    reviewedById: userId
                })
        });
        await response.json();
    }

    return (
        <div className="new-review">
            <h2>Write A New Review:</h2>
            <form onSubmit={createNewReview}>
                <label htmlFor="establishment">
                    Restaurant:
                    <input
                        onChange={(e) => setEstablishment(e.target.value)}
                        id="establishment"
                        value={establishment}
                        placeholder="Restaurant"
                    />
                </label>
                <label htmlFor="address">
                    Address:
                    <input
                        onChange={(e) => setAddress(e.target.value)}
                        id="address"
                        value={address}
                        placeholder="Address"
                    />
                </label>
                <label htmlFor="description">
                    Restaurant Description:
                    <div>
                    <textarea
                        onChange={(e) => setDescription(e.target.value)}
                        id="description"
                        value={description}
                        placeholder="Description"
                        rows="2"
                        cols="40"
                    />
                    </div>
                </label>
                <label htmlFor="body">
                    Your Review:
                    <div>
                    <textarea
                        onChange={(e) => setBody(e.target.value)}
                        id="body"
                        value={body}
                        placeholder="Review"
                        rows="7"
                        cols="40"
                    />
                    </div>
                </label>
                <label htmlFor="rating">
                    Your Rating:
                    <select
                        onChange={(e) => {
                            if (e.target.value === "🐔") {
                                setRating(e.target.value)
                                setDbRating("CHICKEN")
                            }
                            if (e.target.value === "🐔🐔") {
                                setRating(e.target.value)
                                setDbRating("CHICKEN_CHICKEN")
                            }
                            if (e.target.value === "🐔🐔🐔") {
                                setRating(e.target.value)
                                setDbRating("CHICKEN_CHICKEN_CHICKEN")
                            }
                            if (e.target.value === "🐔🐔🐔🐔") {
                                setRating(e.target.value)
                                setDbRating("CHICKEN_CHICKEN_CHICKEN_CHICKEN")
                            }
                            if (e.target.value === "🐔🐔🐔🐔🐔") {
                                setRating(e.target.value)
                                setDbRating("CHICKEN_CHICKEN_CHICKEN_CHICKEN_CHICKEN")
                            }
                        }}
                        id="rating"
                        value={rating}
                    >
                        <option />
                            {RATINGS.map((rating) => (
                                <option key={rating}>{rating}</option>
                            ))}
                    </select>
                </label>
                <label htmlFor="public-review">
                    Want To Make Your Review Public?
                    <select
                        onChange={(e) => {
                            if (e.target.value === "true")
                                setPublicReview(e.target.value)
                            if (e.target.value === "false")
                                setPublicReview(e.target.value)
                        }}
                        id="public-review"
                        value={publicReview.toString()}
                    >
                        <option />
                            {PUBLIC.map((pub) => (
                                <option key={pub}>{pub}</option>
                            ))}
                    </select>
                </label>
                <button>Submit</button>
            </form>
        </div>
    )
}   

export default NewReview;