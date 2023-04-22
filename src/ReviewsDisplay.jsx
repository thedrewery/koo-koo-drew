import Review from "./Review";
import { useEffect, useState } from "react";

const RATINGS = {
    "CHICKEN": "🐔",
    "CHICKEN_CHICKEN": "🐔🐔",
    "CHICKEN_CHICKEN_CHICKEN": "🐔🐔🐔",
    "CHICKEN_CHICKEN_CHICKEN_CHICKEN": "🐔🐔🐔🐔",
    "CHICKEN_CHICKEN_CHICKEN_CHICKEN_CHICKEN": "🐔🐔🐔🐔🐔"
}

const ReviewsDisplay = () => {
    const [userReviews, setUserReviews] = useState("");
    const [publicReviews, setPublicReviews] = useState("");
    const [combinedReviews, setCombinedReviews] = useState("")
    
    useEffect(() => {
        const getUserAndPublicReviews = async () => {
            const token = localStorage.getItem('token');
            const [userResponse, publicResponse] = await Promise.all([
                fetch("https://drewery-hot-chicken.onrender.com/api/review", {
                    method: "GET",
                    headers: {
                        "Authorization": `Bearer ${token}`,
                        "Content-Type": "application/json"
                    }
                }).then(res => res.json()),
                fetch("https://drewery-hot-chicken.onrender.com/api/review/public", {
                    method: "GET",
                    headers: {
                        "Authorization": `Bearer ${token}`,
                        "Content-Type": "application/json"
                    }
                }).then(res => res.json())
            ]);
            setUserReviews(userResponse.data)
            setPublicReviews(publicResponse.data)
        };
        getUserAndPublicReviews();
    }, [])

    useEffect(() => {
        const mergeAndFilterReviews = () => {
            const mergeArr = [...userReviews, ...publicReviews];
            const mergeSet = new Set(mergeArr.map((review) => review.id));
            const uniqueReviews = Array.from(mergeSet).map((id) => {
                return mergeArr.find((review) => review.id === id);
            });
            setCombinedReviews(uniqueReviews);
        };
        mergeAndFilterReviews();
    }, [userReviews, publicReviews]);


    return (
        <div className="review-board">
            {(!combinedReviews) ? (
                <h1>No Reviews Found</h1>
            ) : (
                    combinedReviews.map(review => (
                        <Review
                            id={review.id}
                            establishment={review.establishment}
                            address={review.address}
                            description={review.description}
                            body={review.body}
                            rating={RATINGS[review.rating]}
                            reviewer={review.reviewedById}
                            createdAt={new Date(review.createdAt).toLocaleString()}
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