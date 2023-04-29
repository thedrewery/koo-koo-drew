import NewReview from "./NewReview"
import ReviewsDisplay from "./ReviewsDisplay"
import { useEffect, useState } from "react"
import { createReview } from "./utils"


const ReviewsPage = () => {
    
    useEffect((createReview) => {
        
    })


    return (
        <>
        <NewReview />
        <ReviewsDisplay />
        </>
    )
}

export default ReviewsPage;