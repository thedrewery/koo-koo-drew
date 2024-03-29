import { useState } from "react";

const RATINGS = ["🐔", "🐔🐔", "🐔🐔🐔", "🐔🐔🐔🐔", "🐔🐔🐔🐔🐔"]

const NewReview = () => {
    const [establishment, setEstablishment] = useState("")
    const [address, setAddress] = useState("")
    const [description, setDescription] = useState("")
    const [body, setBody] = useState("")
    const [rating, setRating] = useState("")
    const [dbRating, setDbRating] = useState("")
    const [publicReview, setPublicReview] = useState(true)

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
                    public: publicReview,
                    reviewedById: userId
                })
        });
        await response.json();
        window.location.reload();
    }

    return (
        <div className="new-review">
            <form onSubmit={createNewReview}>
                <h1>Write A New Review</h1>
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
                    <div className="public-review">
                        <input
                            type="checkbox"
                            onChange={() => setPublicReview(true)}
                            checked={publicReview}
                        />
                        <p>Yes</p>
                        <input
                            type="checkbox"
                            onChange={() => setPublicReview(false)}
                            checked={!publicReview}
                        />
                        <p>No</p>
                    </div>
                </label>
                <button>Submit</button>
            </form>
        </div>
    )
}   

export default NewReview;