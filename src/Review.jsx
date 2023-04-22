const Review = (props) => {
    const { id, createdAt, establishment, address, description, body, rating, reviewer } = props

        const deleteReview = async () => {

        const token = localStorage.getItem('token')
        const response = await fetch(`https://drewery-hot-chicken.onrender.com/api/review/${id}`, {
            method: "DELETE",
            headers: {
                "Authorization": `Bearer ${token}`,
                "Content-Type": "application/json"
            }
        });
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
                <h4>{reviewer}</h4>
            </div>
            <div>
                <h4>{createdAt}</h4>
            </div>
            {/* </div><h5>{comments}</h5> */}
            <button onClick={deleteReview}>Delete</button>
        </div>
    )
}

export default Review;