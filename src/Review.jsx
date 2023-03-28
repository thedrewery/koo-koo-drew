const Review = (props) => {
    const { createdAt, establishment, address, description, body, rating, reviewer, comments } = props

    return (
        <div className="chicken-review">
            <h1>{establishment}</h1>
            <h2>{address}</h2>
            <h2>{description}</h2>
            <h3>{body}</h3>
            <h3>{rating}</h3>
            <h4>{reviewer}</h4>
            <h4>{createdAt}</h4>
            <h5>{comments}</h5>
        </div>
    )
}

export default Review;