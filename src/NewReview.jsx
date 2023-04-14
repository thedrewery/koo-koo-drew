import { useState } from "react";

const RATINGS = ["🐔", "🐔🐔", "🐔🐔🐔", "🐔🐔🐔🐔", "🐔🐔🐔🐔🐔"]

const NewReview = () => {
    const [establishment, setEstablishment] = useState("")
    const [address, setAddress] = useState("")
    const [description, setDescription] = useState("")
    const [body, setBody] = useState("")
    const [rating, setRating] = useState("")
    const [publicReview, setPublicReview] = useState("")

    const createNewReview = async (e) => {
        e.preventDefault();
        const token = localStorage.getItem('token');
        const userId = localStorage.getItem('userId')
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
                    rating: rating,
                    public: JSON.parse(publicReview),
                    reviewedById: userId
                })
        });
        const data = await response.json();
        console.log(data)
        console.log("this is the public review value", publicReview)
    }

    return (
        <div>
            <h2>Write A New Review:</h2>
            <form onSubmit={createNewReview}>
                <label htmlFor="establishment">
                    Restaurant
                    <input
                        onChange={(e) => setEstablishment(e.target.value)}
                        id="establishment"
                        value={establishment}
                        placeholder="Restaurant"
                    />
                </label>
                <label htmlFor="address">
                    Address
                    <input
                        onChange={(e) => setAddress(e.target.value)}
                        id="address"
                        value={address}
                        placeholder="Address"
                    />
                </label>
                <label htmlFor="description">
                    Restaurant Description
                    <textarea
                        onChange={(e) => setDescription(e.target.value)}
                        id="description"
                        value={description}
                        placeholder="Description"
                    />
                </label>
                <label htmlFor="body">
                    Review
                    <textarea
                        onChange={(e) => setBody(e.target.value)}
                        id="body"
                        value={body}
                        placeholder="Review"
                    />
                </label>
                <label htmlFor="rating">
                    Rating
                    <select
                        onChange={(e) => {
                            if (e.target.value === "🐔") {
                                setRating("CHICKEN")
                            }
                            if (e.target.value === "🐔🐔") {
                                setRating("CHICKEN_CHICKEN")
                            }
                            if (e.target.value === "🐔🐔🐔") {
                                setRating("CHICKEN_CHICKEN_CHICKEN")
                            }
                            if (e.target.value === "🐔🐔🐔🐔") {
                                setRating("CHICKEN_CHICKEN_CHICKEN_CHICKEN")
                            }
                            if (e.target.value === "🐔🐔🐔🐔🐔") {
                                setRating("CHICKEN_CHICKEN_CHICKEN_CHICKEN_CHICKEN")
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
                    Public?
                    <select
                        onChange={(e) => setPublicReview(e.target.value)}
                        id="public-review"
                        value={publicReview.toString()}
                    >
                        <option value="true" key="true">true</option>
                        <option value="false" key="false">false</option>
                    </select>
                </label>
                <button>Submit</button>
            </form>
        </div>
    )
}   

export default NewReview;