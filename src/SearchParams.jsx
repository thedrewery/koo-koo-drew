import { useEffect, useState } from "react";
//import ReviewsDisplay from "./ReviewsDisplay";
const RATINGS = ["🐔", "🐔🐔", "🐔🐔🐔", "🐔🐔🐔🐔", "🐔🐔🐔🐔🐔"]

const SearchParams = () => {
    const [location, setLocation] = useState("")
    const [restaurant, setRestaurant] = useState("")
    const [rating, setRating] = useState("")
    const [reviews, setReviews] = useState("")

    useEffect(() => {
        requestReviews();
    }, []);

    const requestReviews = async () => {
        const token = localStorage.getItem('token');
        const response = await fetch(
            "https://drewery-hot-chicken.onrender.com/api/review/public", {
                method: "GET",
                headers: {
                    "Authorization": `Bearer ${token}`,
                    "Content-Type": "application/json"
            }
        });
        const data = await response.json();
        console.log(data)
        setReviews(data.reviews);
    }

    return (
        <div className="search-params">
            <form>
                <h2>Search For Reviews!</h2>
                <label htmlFor="location">
                    Location
                    <input
                        onChange={(e) => setLocation(e.target.value)}
                        id="location"
                        value={location}
                        placeholder="Location"
                    />
                </label>
                <label htmlFor="restaurant">
                    Restaurant
                    <input
                        onChange={(e) => setRestaurant(e.target.value)}
                        id="restaurant"
                        value={restaurant}
                        placeholder="Restaurant"
                    />
                </label>
                <label htmlFor="location">
                    Rating
                    <select
                        id="rating"
                        value={rating}
                        onChange={(e) => setRating(e.target.value)}
                    >
                        <option />
                            {RATINGS.map((rating) => (
                                <option key={rating}>{rating}</option>
                            ))}
                    </select>    
                </label>
                <button>Submit</button>
            </form>
            <Results reviews={reviews} />
        </div>
    )
}

export default SearchParams;