import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./Login";
import NewReview from "./NewReview";
import SignUp from "./SignUp";
import ReviewsDisplay from "./ReviewsDisplay"


const App = () => {

  return (
    <BrowserRouter>
      <div>
        <div className="title">
          <h1>Koo K🐔o Drew!</h1>
        </div>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
          <Route
            path="/reviews/:id"
            element={
              <>
                <NewReview />
                <ReviewsDisplay />
              </>
            }
          />
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default App;
