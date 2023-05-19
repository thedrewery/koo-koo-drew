import { useState } from 'react';
//import { props } from './Review'

const RATINGS = ["🐔", "🐔🐔", "🐔🐔🐔", "🐔🐔🐔🐔", "🐔🐔🐔🐔🐔"]

const EditReview = () => {
    const editEstablishment = window.localStorage.getItem('editEstablishment')
    const editAddress = window.localStorage.getItem('editAddress')
    const editDescription = window.localStorage.getItem('editDescription')
    const editBody = window.localStorage.getItem('editBody')

    const [establishment, setEstablishment] = useState(editEstablishment)
    const [address, setAddress] = useState(editAddress)
    const [description, setDescription] = useState(editDescription)
    const [body, setBody] = useState(editBody)
    const [rating, setRating] = useState("")
    const [dbRating, setDbRating] = useState("")
    const [publicReview, setPublicReview] = useState("")


    const editExistingReview = async (e) => {
        e.preventDefault();
        const token = localStorage.getItem('token');
        const userId = localStorage.getItem('userId')
        const reviewId = window.localStorage.getItem('editReviewId')

        const response = await fetch(
            `https://drewery-hot-chicken.onrender.com/api/review/${reviewId}`, {
                method: "PUT",
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
        if (process.env.NODE_ENV === 'production') {
            window.location.reload(window.location.href)
        } else {
            window.location.reload();
        }
    }

    return (
        <div className="new-review">
            <form onSubmit={editExistingReview}>
                <h1>Edit Review</h1>
                <label htmlFor="establishment">
                    Restaurant:
                    <input
                        onChange={(e) => setEstablishment(e.target.value)}
                        id="establishment"
                        value={establishment}
                        // placeholder={editEstablishment}
                    />
                </label>
                <label htmlFor="address">
                    Address:
                    <input
                        onChange={(e) => setAddress(e.target.value)}
                        id="address"
                        value={address}
                        // placeholder={editAddress}
                    />
                </label>
                <label htmlFor="description">
                    Restaurant Description:
                    <div>
                    <textarea
                        onChange={(e) => setDescription(e.target.value)}
                        id="description"
                        value={description}
                        // placeholder={editDescription}
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
                        // placeholder={editBody}
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
                <div className="edit-review">
                    <button >Save</button>
                </div>
            </form>
        </div>
    )
}   

export default EditReview;