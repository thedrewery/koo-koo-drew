import EditReviewModal from "./EditReviewModal";
import NewReview from "./NewReview";
import { useState } from "react";
 
const Review = (props) => {
    //const [showReviewModal, setShowReviewModal] = useState(false);
    const { id, createdAt, establishment, address, description, body, rating, reviewer } = props
    const userId = localStorage.getItem('userId')

    const deleteReview = async () => {
        const token = localStorage.getItem('token')
        await fetch(`https://drewery-hot-chicken.onrender.com/api/review/${id}`, {
            method: "DELETE",
            headers: {
                "Authorization": `Bearer ${token}`,
                "Content-Type": "application/json"
            }
        });
        window.location.reload()
    }

    const editReview = async () => {
        

        console.log(props.id, "editReview button clicked" )
    }

    return (
        <div className="chicken-review">
            <div className="cr-header">
                <h1>{establishment}</h1>
                <h2>Rating:{rating}</h2>
            </div>
            <div>
                <h2>{address}</h2>
            </div>
            <div>
                <h2>{description}</h2> 
            </div>
            <div>
                <h3>{body}</h3>
            </div>
            <div>
                <h4 hidden>{reviewer}</h4>
            </div>
            <div>
                <h4>{createdAt}</h4>
            </div>
            {/* </div><h5>{comments}</h5> */}
            <div>
                {(reviewer === userId) ? (
                <div>
                    <button onClick={editReview}>Edit</button>
                    <button onClick={deleteReview}>Delete</button>
                </div>
                ) : (
                <button hidden onClick={deleteReview}>Delete</button>
                )
                }
            </div>
        </div>
    )
}

export default Review;