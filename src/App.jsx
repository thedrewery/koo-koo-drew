import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./Login";
import SearchParams from "./SearchParams";
import SignUp from "./SignUp";
import Results from "./Results";

const App = () => {
  return (
    <BrowserRouter>
      <div>
        <h1>Koo Koo Drew!</h1>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
          <Route
            path="/reviews"
            element={
              <>
                <SearchParams />
                <Results />
              </>
            }
          />
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default App;
