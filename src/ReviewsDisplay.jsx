import Review from "./Review";
import { useState } from "react";


const ReviewsDisplay = () => {
    const [userReviews, setUserReviews] = useState("");
    const [publicReviews, setPublicReviews] = useState("");

    const getUserReviews = async () => {
        const token = localStorage.getItem('token');
        const response = await fetch(
            "https://drewery-hot-chicken.onrender.com/api/review", {
                method: "GET",
                headers: {
                    "Authorization": `Bearer ${token}`,
                    "Content-Type": "application/json"
                }
        });
        const data = await response.json();
        setUserReviews(data.data)
    } 


    const getPublicReviews = async () => {
        const token = localStorage.getItem('token');
        const response = await fetch(
            "https://drewery-hot-chicken.onrender.com/api/review/public", {
                method: "GET",
                headers: {
                    "Authorization": `Bearer ${token}`,
                    "Content-Type": "application/json"
                }
        });
        const data = await response.json();
        setPublicReviews(data.data)
    }

    getUserReviews()
    getPublicReviews()

    return (
        <div className="search">
            {(!publicReviews) ? (
                <h1>No Reviews Found</h1>
            ) : (
                    publicReviews.map(review => (
                        <Review
                            establishment={review.establishment}
                            address={review.address}
                            description={review.description}
                            body={review.body}
                            rating={review.rating}
                            reviewer={review.reviewedById}
                            createdAt={review.createdAt}
                            // comments={review.comments}
                            key={review.id}
                        />
                    )
                )
            )}
        </div>
    )
}

export default ReviewsDisplay;