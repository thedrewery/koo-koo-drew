export const login = async ({ queryKey }) => {
    const body = queryKey[1];
    const { username, password } = body;
    const response = await fetch("https://drewery-hot-chicken.onrender.com/signin", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                username: username,
                password: password
            })
    });
    
    if (!response.ok) {
        throw new Error(`There was a problem logging in ${username}`)
    }
    let data = response.json()
    window.localStorage.setItem("token", data.token)
    window.localStorage.setItem("userId", data.userId)
    return data;
}

export const signUp = async ({ body }) => {
    const { newUsername, email, newPassword } = body;
    const response = await fetch("https://drewery-hot-chicken.onrender.com/user", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                username: newUsername,
                email,
                password: newPassword
            })
        });
        return await response.json();
}

export const getUserReviews = async ({ token }) => {
    const userReviews = await fetch(
        "https://drewery-hot-chicken.onrender.com/api/review", {
        method: "GET",
        headers: {
            "Authorization": `Bearer ${token}`,
            "Content-Type": "application/json"
        }
    });
    return await userReviews.json().data;
}
        
export const getPublicReviews = async ({ token }) => {
    const publicReviews = await fetch(
        "https://drewery-hot-chicken.onrender.com/api/review/public", {
        method: "GET",
        headers: {
            "Authorization": `Bearer ${token}`,
            "Content-Type": "application/json"
        }
    });
    return await publicReviews.json().data;
}

export const createReview = async ({ token, body }) => {
    const { establishment, address, description, dbRating, publicReview, userId } = body;
    const response = await fetch(
            "https://drewery-hot-chicken.onrender.com/api/review", {
                method: "POST",
                headers: {
                    "Authorization": `Bearer ${token}`,
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    establishment,
                    address,
                    description,
                    body,
                    rating: dbRating,
                    public: JSON.parse(publicReview),
                    reviewedById: userId
                })
        });
    return await response.json();
}

export const deleteReview = async ({token, reviewId}) => {
    const response = await fetch(`https://drewery-hot-chicken.onrender.com/api/review/${reviewId}`, {
            method: "DELETE",
            headers: {
                "Authorization": `Bearer ${token}`,
                "Content-Type": "application/json"
            }
        });
    return await response.json();
}

export const editReview = async ({ token, body }) => {
    const { establishment, address, description, dbRating, publicReview, userId, reviewId } = body;
    const editedReview = await fetch(`https://drewery-hot-chicken.onrender.com/api/review/${reviewId}`, {
            method: "DELETE",
            headers: {
                "Authorization": `Bearer ${token}`,
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                    id: reviewId,
                    establishment,
                    address,
                    description,
                    body,
                    rating: dbRating,
                    public: JSON.parse(publicReview),
                    reviewedById: userId
            })
        });
    return await editedReview.json().data;
}
