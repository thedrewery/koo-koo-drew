import EditReview from "./EditReview";
import { useState } from "react";


const Review = (props) => {
    const [showEditReview, setShowEditReview] = useState(false);
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
        if (process.env.NODE_ENV === 'production') {
            window.location.reload(window.location.href)
        } else {
            window.location.reload(window.location.href);
        }
    }

    const editReview = async () => {
        setShowEditReview(true)
        window.localStorage.setItem("editReviewId", props.id)
        window.localStorage.setItem("editEstablishment", props.establishment)
        window.localStorage.setItem("editAddress", props.address)
        window.localStorage.setItem("editDescription", props.description)
        window.localStorage.setItem("editBody", props.body)
    }

    return (
        <div className="chicken-review">
             {
                showEditReview ? 
                    (
                        <div>   
                            <EditReview />
                            <button onClick={() => setShowEditReview(false)}>Cancel Edit Review</button>
                        </div>
                    ) : null
            }
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
                ) : null
                }
            </div>
        </div>
    )
}

export default Review;