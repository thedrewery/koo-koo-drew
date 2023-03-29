import Review from "./Review";

const Results = ({ reviews }) => {
    return (
        <div className="search">
            {(!reviews) ? (
                <h1>No Reviews Found</h1>
            ) : (
                    reviews.map(review => (
                        <Review
                            establishment={review.establishment}
                            address={review.address}
                            description={review.description}
                            body={review.body}
                            rating={review.rating}
                            // reviewer={review.reviewer}
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

export default Results;