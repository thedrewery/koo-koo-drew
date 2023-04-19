const Review = (props) => {
    const { createdAt, establishment, address, description, body, rating, reviewer } = props

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
        </div>
    )
}

export default Review;