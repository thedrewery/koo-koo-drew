import NewReview from "./NewReview"
import ReviewsDisplay from "./ReviewsDisplay"
import { useQuery } from "@tanstack/react-query";
import { useEffect, useState } from "react"
import { createReview } from "./utils"


const ReviewsPage = () => {

    if (userLogin.isLoading) {
        return (
            <div className="loading-pane">
                <h2 className="loader">🌀</h2>
            </div>
        )
    }

    return (
        <>
        <NewReview />
        <ReviewsDisplay />
        </>
    )
}

export default ReviewsPage;