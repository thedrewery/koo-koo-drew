const Review = (props) => {
    return (
        <div>
            <h1>{props.establishment}</h1>
            <h2>{props.address}</h2>
            <h2>{props.description}</h2>
            <h2>{props.body}</h2>
            <h2>{props.rating}</h2>
            <h2>{props.reviewer}</h2>
            <h2>{props.comments}</h2>
        </div>
    )
}

export default Review;